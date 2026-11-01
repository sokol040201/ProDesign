#!/usr/bin/env node
/**
 * ProDesign static scan.
 * Usage: node scripts/scan.mjs <project-path> [--json]
 * Exit 1 if critical findings exist.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SKIP_DIR = new Set([
  ".git",
  "node_modules",
  "dist",
  "build",
  ".next",
  "out",
  "coverage",
  "vendor",
  "Pods",
  ".turbo",
  ".cache",
  "DerivedData",
  "kit",
  "fixtures",
  "tests",
  "docs",
  "studio",
]);
const EXT = new Set([
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".css",
  ".scss",
  ".sass",
  ".less",
  ".vue",
  ".svelte",
  ".html",
  ".swift",
  ".kt",
  ".kts",
  ".xml",
  ".dart",
]);

export const RULES = [
  {
    id: "gradient",
    severity: "critical",
    message: "Gradient is banned",
    re: /linear-gradient|radial-gradient|conic-gradient|bg-gradient-to|bg-clip-text|Gradient\(|sweepGradient|LinearGradient|RadialGradient/i,
  },
  {
    id: "emoji",
    severity: "critical",
    message: "Emoji in the UI is banned",
    re: /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE0F}\u{1F000}-\u{1F02F}]/u,
  },
  {
    id: "symbol-icon",
    severity: "critical",
    message: "Symbol used instead of an icon",
    re: /[✨🚀⚡🔒⭐✓✔✕✖★☆●▶►✦✧→←↑↓]/,
  },
  {
    id: "indigo-default",
    severity: "should",
    message: "Default indigo / violet accent",
    re: /indigo-|violet-|purple-|from-indigo|to-purple|#6366f1|#8b5cf6|#6750[aA]4|#7c3aed/i,
  },
  {
    id: "glow",
    severity: "critical",
    message: "Colored glow / aurora",
    re: /shadow-\[[^\]]*(?:indigo|violet|purple|rgba?\([^)]*0\.\d)[^\]]*\]|blur-3xl|blur-\[|aurora/i,
  },
  {
    id: "glass",
    severity: "should",
    message: "Decorative glass",
    re: /backdrop-blur|bg-white\/[0-9]|bg-black\/[0-9]|ultraThinMaterial/i,
  },
  {
    id: "radius-blob",
    severity: "should",
    message: "Oversized radius (32+ / blob). Soft and round looks stop at 28.",
    re: /rounded-\[(?:3[2-9]|[4-9]\d|1\d\d)px\]/,
  },
  {
    id: "left-accent-bar",
    severity: "should",
    message: "Colored left bar on a card",
    re: /border-l-4|border-l-\[|border-left:\s*[3-8]px/,
  },
  {
    id: "default-font",
    severity: "should",
    message: "Model-default face (Inter / Geist / Space Grotesk)",
    re: /Inter|Geist|Space[_ ]?Grotesk/,
  },
  {
    id: "magic-space",
    severity: "should",
    message: "Magic spacing — snap to the 4/8 scale",
    re: /(?:p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr|gap|inset|top|left|right|bottom)-\[(?:1[13-57-9]|2[013-57-9]|3[013-57-9]|[5-79]|1[13579])px\]/,
  },
  {
    id: "disabled-submit",
    severity: "should",
    message: "Disabled submit — prefer active + field errors",
    re: /<(?:button|Button)[^>]*(?:type=["']submit["'][^>]*disabled|disabled[^>]*type=["']submit["'])/i,
  },
  {
    id: "bare-empty",
    severity: "should",
    message: "Bare empty copy — needs a state component",
    re: />\s*(No data|No Data|Nothing here|No records|Нет данных)\s*</,
  },
  {
    id: "lucide-default",
    severity: "should",
    message: "Lucide is the model-default pack — install another complete family",
    re: /lucide-react|from ["']lucide["']|from ["']lucide-react["']|@lucide\//,
  },
  {
    id: "homemade-icon",
    severity: "should",
    message: "Inline path icon — import a named glyph from the installed pack",
    re: /<svg[^>]*>\s*<path d="/i,
  },
  {
    id: "bounce-motion",
    severity: "should",
    message: "Bounce / spring on working UI — use 120–200ms ease-out",
    re: /animate-bounce|ease-in-out-bounce|cubic-bezier\(\s*0\.68\s*,\s*-|spring\(|type:\s*["']spring["']/i,
  },
  {
    id: "native-control",
    severity: "critical",
    message: "OS chrome left on a control — restyle select/date/file to field tokens",
    re: /<select[\s>]|<input[^>]*type=["'](?:date|time|month|week|color|file|range)["']/i,
  },
  {
    id: "tiny-type",
    severity: "critical",
    message: "Type below the floor — body 16, chrome 14, caption 12 only for meta",
    re: /text-xs\b|text-\[1[01]px\]|font-size:\s*(?:9|10|11)px\b|:root[^{]*\{[^}]*font-size:\s*1[0-3]px|html[^{]*\{[^}]*font-size:\s*1[0-3]px/,
  },
  {
    id: "manifesto-copy",
    severity: "critical",
    message: "Landing slogan on a working screen — H1 is the place name, delete the mission line",
    re: /От идеи до|под вашим контролем|всё под контролем|на автопилоте|в одном месте|Unlock the|seamless|your journey|next-gen|Everything in one place/i,
  },
  {
    id: "overline-eyebrow",
    severity: "should",
    message: "Overline / eyebrow above the title — delete it",
    re: /class(Name)?=["'][^"']*eyebrow|tracking-widest|uppercase tracking-/,
  },
];

function walk(dir, root, out = []) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    if (entry.name.startsWith(".") && entry.name !== ".env") {
      if (SKIP_DIR.has(entry.name)) continue;
    }
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIR.has(entry.name)) continue;
      walk(full, root, out);
    } else if (EXT.has(path.extname(entry.name))) {
      out.push(full);
    }
  }
  return out;
}

function scanFile(file, root) {
  const text = fs.readFileSync(file, "utf8");
  const lines = text.split(/\r?\n/);
  const hits = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim() || /^\s*\/\//.test(line) || /^\s*\*/.test(line)) continue;
    for (const rule of RULES) {
      if (rule.re.test(line)) {
        hits.push({
          file: path.relative(root, file),
          line: i + 1,
          id: rule.id,
          severity: rule.severity,
          message: rule.message,
          sample: line.trim().slice(0, 160),
        });
      }
    }
  }
  return hits;
}

function existsRel(root, ...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function detectSystem(root) {
  const tokenHints = [
    ["src/design-system/tokens.css"],
    ["design-system/tokens.css"],
    ["app/design-system/tokens.css"],
    ["lib/design-system/tokens.css"],
    ["src/design-system/SYSTEM.md"],
    ["design-system/SYSTEM.md"],
    ["styles/tokens.css"],
    ["src/styles/tokens.css"],
  ];
  const tokens = tokenHints.some((p) => existsRel(root, ...p));
  const systemDoc = ["src/design-system/SYSTEM.md", "design-system/SYSTEM.md", "app/design-system/SYSTEM.md"].some(
    (p) => existsRel(root, p),
  );
  const empty = systemDoc;
  const pkgPath = path.join(root, "package.json");
  const icons = [];
  if (fs.existsSync(pkgPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
      const deps = { ...pkg.dependencies, ...pkg.devDependencies };
      for (const name of [
        "lucide-react",
        "lucide-vue-next",
        "react-icons",
        "@heroicons/react",
        "@phosphor-icons/react",
        "@tabler/icons-react",
        "@iconoir/react",
        "@carbon/icons-react",
        "@fluentui/react-icons",
        "remixicon",
      ]) {
        if (deps[name]) icons.push(name);
      }
    } catch {
      /* ignore */
    }
  }
  return { tokens, systemDoc, empty, icons, skill: existsRel(root, ".cursor", "skills", "prodesign", "SKILL.md") };
}

export function scanProject(root) {
  const ROOT = path.resolve(root);
  if (!fs.existsSync(ROOT)) {
    throw new Error(`ProDesign scan: path not found: ${ROOT}`);
  }
  const files = walk(ROOT, ROOT);
  const findings = files.flatMap((file) => scanFile(file, ROOT));
  const critical = findings.filter((f) => f.severity === "critical");
  const should = findings.filter((f) => f.severity === "should");
  const system = detectSystem(ROOT);

  if (!system.tokens) {
    should.push({
      file: ".",
      line: 0,
      id: "no-tokens",
      severity: "should",
      message: "No design-system tokens — run apply-system.mjs",
      sample: "missing tokens.css / SYSTEM.md",
    });
  }
  if (system.icons.length > 1) {
    should.push({
      file: "package.json",
      line: 0,
      id: "icon-families",
      severity: "should",
      message: `More than one icon family: ${system.icons.join(", ")}`,
      sample: "pick one complete pack",
    });
  }
  if (system.icons.some((name) => name.includes("lucide"))) {
    should.push({
      file: "package.json",
      line: 0,
      id: "lucide-default",
      severity: "should",
      message: "Lucide is the model-default pack — install another complete family",
      sample: system.icons.join(", "),
    });
  }
  if (system.icons.includes("react-icons")) {
    should.push({
      file: "package.json",
      line: 0,
      id: "icon-megapack",
      severity: "should",
      message: "react-icons mixes families — pin one complete pack",
      sample: "react-icons",
    });
  }

  return {
    root: ROOT,
    files: files.length,
    critical: critical.length,
    should: should.length,
    system,
    findings: [...findings, ...should.filter((f) => !findings.includes(f) && f.line === 0)],
  };
}

export function formatReport(report) {
  const lines = [];
  const fmt = (f) =>
    `  [${f.severity}] ${f.id} ${f.file}:${f.line} — ${f.message}\n    ${f.sample}`;
  lines.push(`ProDesign scan  ${report.root}`);
  lines.push(`files ${report.files}  critical ${report.critical}  should ${report.should}`);
  lines.push(
    `system  tokens:${report.system.tokens ? "yes" : "no"}  states:${report.system.empty ? "yes" : "no"}  skill:${report.system.skill ? "yes" : "no"}  icons:${report.system.icons[0] || "unset"}`,
  );
  if (report.findings.length === 0 && report.system.tokens) lines.push("OK");
  const critical = report.findings.filter((f) => f.severity === "critical");
  const should = report.findings.filter((f) => f.severity === "should");
  if (critical.length) {
    lines.push("", "Critical");
    for (const f of critical) lines.push(fmt(f));
  }
  if (should.length) {
    lines.push("", "Should");
    for (const f of should) lines.push(fmt(f));
  }
  return lines.join("\n");
}

function isMain() {
  const self = fileURLToPath(import.meta.url);
  const invoked = process.argv[1] && path.resolve(process.argv[1]);
  return invoked === self;
}

if (isMain()) {
  const args = process.argv.slice(2).filter((a) => a !== "--json");
  const jsonOut = process.argv.includes("--json");
  const root = path.resolve(args[0] || ".");
  try {
    const report = scanProject(root);
    if (jsonOut) console.log(JSON.stringify(report, null, 2));
    else console.log(formatReport(report));
    process.exit(report.critical ? 1 : 0);
  } catch (err) {
    console.error(err.message);
    process.exit(2);
  }
}
