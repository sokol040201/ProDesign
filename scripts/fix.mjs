#!/usr/bin/env node
/**
 * Apply the look, auto-fix mechanical slop, write AUDIT.md.
 * Usage: node scripts/fix.mjs <project-path> [--profile product] [--icon-pack phosphor] ...
 */

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { scanProject, formatReport } from "./scan.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));

const EMOJI_RE = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE0F}\u{1F000}-\u{1F02F}]/gu;
const SYMBOL_RE = /[✨🚀⚡🔒⭐✓✔✕✖★☆●▶►✦✧→←↑↓]/g;
const PACK_DEP = {
  phosphor: "@phosphor-icons/react",
  heroicons: "@heroicons/react",
  tabler: "@tabler/icons-react",
  iconoir: "@iconoir/react",
  "sf-symbols": null,
  "material-symbols": "material-symbols",
  fluent: "@fluentui/react-icons",
  carbon: "@carbon/icons-react",
};
const LUCIDE_IMPORT = {
  phosphor: "@phosphor-icons/react",
  heroicons: "@heroicons/react/24/outline",
  tabler: "@tabler/icons-react",
  iconoir: "@iconoir/react",
  "material-symbols": "material-symbols",
  fluent: "@fluentui/react-icons",
  carbon: "@carbon/icons-react",
  "sf-symbols": "@phosphor-icons/react",
};
const LUCIDE_NAME = {
  Home: { phosphor: "House", tabler: "IconHome", iconoir: "Home", fluent: "Home24Regular", carbon: "Home" },
  Search: { phosphor: "MagnifyingGlass", tabler: "IconSearch", iconoir: "Search", fluent: "Search24Regular", carbon: "Search" },
  FileText: { phosphor: "FileText", tabler: "IconFileText", iconoir: "Page", fluent: "DocumentText24Regular", carbon: "Document" },
  File: { phosphor: "File", tabler: "IconFile", iconoir: "Page", fluent: "Document24Regular", carbon: "Document" },
  Inbox: { phosphor: "Tray", tabler: "IconInbox", iconoir: "Mailbox", fluent: "MailInbox24Regular", carbon: "Email" },
  MoreHorizontal: { phosphor: "DotsThree", tabler: "IconDots", iconoir: "MoreHoriz", fluent: "MoreHorizontal24Regular", carbon: "OverflowMenuHorizontal" },
  Trash2: { phosphor: "Trash", tabler: "IconTrash", iconoir: "Trash", fluent: "Delete24Regular", carbon: "TrashCan" },
  Settings: { phosphor: "Gear", tabler: "IconSettings", iconoir: "Settings", fluent: "Settings24Regular", carbon: "Settings" },
  ChevronDown: { phosphor: "CaretDown", tabler: "IconChevronDown", iconoir: "NavArrowDown", fluent: "ChevronDown24Regular", carbon: "ChevronDown" },
  ChevronRight: { phosphor: "CaretRight", tabler: "IconChevronRight", iconoir: "NavArrowRight", fluent: "ChevronRight24Regular", carbon: "ChevronRight" },
  X: { phosphor: "X", tabler: "IconX", iconoir: "Xmark", fluent: "Dismiss24Regular", carbon: "Close" },
  Plus: { phosphor: "Plus", tabler: "IconPlus", iconoir: "Plus", fluent: "Add24Regular", carbon: "Add" },
  Check: { phosphor: "Check", tabler: "IconCheck", iconoir: "Check", fluent: "Checkmark24Regular", carbon: "Checkmark" },
  Mail: { phosphor: "Envelope", tabler: "IconMail", iconoir: "Mail", fluent: "Mail24Regular", carbon: "Email" },
  User: { phosphor: "User", tabler: "IconUser", iconoir: "User", fluent: "Person24Regular", carbon: "User" },
};

function detectDest(root) {
  if (fs.existsSync(path.join(root, "src"))) return path.join(root, "src", "design-system");
  if (fs.existsSync(path.join(root, "app"))) return path.join(root, "app", "design-system");
  if (fs.existsSync(path.join(root, "lib"))) return path.join(root, "lib", "design-system");
  return path.join(root, "design-system");
}

function applySystem(root, look = {}) {
  const args = [path.join(HERE, "apply-system.mjs"), root];
  if (look.profile) args.push("--profile", look.profile);
  for (const key of ["surface", "viewport", "density", "radius", "chrome", "controls", "icons", "motion"]) {
    if (look[key]) args.push(`--${key}`, look[key]);
  }
  if (look.iconPack) args.push("--icon-pack", look.iconPack);
  const result = spawnSync(process.execPath, args, { encoding: "utf8" });
  return {
    ok: (result.status ?? 1) === 0,
    log: `${result.stdout || ""}${result.stderr || ""}`.trim(),
  };
}

function rewriteLucideImport(text, pack) {
  const dest = LUCIDE_IMPORT[pack] || LUCIDE_IMPORT.phosphor;
  return text.replace(
    /import\s+\{([^}]+)\}\s+from\s+["']lucide-react["']/g,
    (_, names) => {
      const mapped = names.split(",").map((part) => {
        const bits = part.trim();
        if (!bits) return bits;
        const [orig, alias] = bits.split(/\s+as\s+/).map((s) => s.trim());
        const table = LUCIDE_NAME[orig];
        const next = (table && (table[pack] || table.phosphor)) || orig;
        return alias ? `${next} as ${alias}` : next;
      });
      return `import { ${mapped.filter(Boolean).join(", ")} } from "${dest}"`;
    },
  ).replace(/from ["']lucide["']/g, `from "${dest}"`);
}

function fixPackageJson(root, pack, actions) {
  const file = path.join(root, "package.json");
  if (!fs.existsSync(file)) return;
  let pkg;
  try {
    pkg = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return;
  }
  const buckets = ["dependencies", "devDependencies"];
  let changed = false;
  const nextPack = PACK_DEP[pack];
  for (const bucket of buckets) {
    if (!pkg[bucket]) continue;
    if (pkg[bucket]["lucide-react"] || pkg[bucket]["lucide-vue-next"]) {
      delete pkg[bucket]["lucide-react"];
      delete pkg[bucket]["lucide-vue-next"];
      if (nextPack) pkg[bucket][nextPack] = pkg[bucket][nextPack] || "*";
      changed = true;
    }
    if (pkg[bucket]["react-icons"]) {
      delete pkg[bucket]["react-icons"];
      if (nextPack) pkg[bucket][nextPack] = pkg[bucket][nextPack] || "*";
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(file, `${JSON.stringify(pkg, null, 2)}\n`);
    actions.push({
      file: "package.json",
      id: "lucide-default",
      action: nextPack ? `swapped Lucide / react-icons for ${nextPack}` : "removed Lucide / react-icons",
    });
  }
}

function fixText(text, pack) {
  let next = text;
  next = next.replace(/linear-gradient\([^)]*\)/gi, "var(--pd-canvas)");
  next = next.replace(/radial-gradient\([^)]*\)/gi, "var(--pd-canvas)");
  next = next.replace(/conic-gradient\([^)]*\)/gi, "var(--pd-canvas)");
  next = next.replace(/\bbg-gradient-to-[a-z]+\b/g, "");
  next = next.replace(/\bbg-clip-text\b/g, "");
  next = next.replace(/\btext-transparent\b/g, "");
  next = next.replace(/\bfrom-indigo-\d+\b/g, "");
  next = next.replace(/\bto-purple-\d+\b/g, "");
  next = next.replace(/\bfrom-indigo-[a-z0-9]+\b/g, "");
  next = next.replace(/\bto-purple-[a-z0-9]+\b/g, "");
  next = next.replace(/\b(?:indigo|violet|purple)-[0-9]{2,3}\b/g, "");
  next = next.replace(/#6366f1|#8b5cf6|#6750[aA]4|#7c3aed/gi, "var(--pd-color-accent)");
  next = next.replace(/\bblur-3xl\b/g, "");
  next = next.replace(/\baurora\b/g, "");
  next = next.replace(/\banimate-bounce\b/g, "");
  next = next.replace(/type:\s*["']spring["']/g, 'type: "tween"');
  next = next.replace(/\bbackdrop-blur(?:-[a-z0-9]+)?\b/g, "");
  next = rewriteLucideImport(next, pack);
  next = next.replace(EMOJI_RE, "");
  next = next.replace(SYMBOL_RE, "");
  next = next.replace(/[ \t]{2,}/g, " ");
  next = next.replace(/className="\s+/g, 'className="');
  next = next.replace(/class="\s+/g, 'class="');
  next = next.replace(/\s+"/g, '"');
  return next;
}

function writeAudit(root, payload) {
  const dest = detectDest(root);
  fs.mkdirSync(dest, { recursive: true });
  const file = path.join(dest, "AUDIT.md");
  const { before, after, actions, look } = payload;
  const leftover = after.findings;
  const lines = [
    "# ProDesign audit",
    "",
    `Project: ${root}`,
    `Look: ${look.surface || "—"} / ${look.viewport || "—"} / ${look.density || "—"} / ${look.iconPack || "—"} ${look.icons || ""}`.trim(),
    `Scanned: ${new Date().toISOString().slice(0, 10)}`,
    `Before: critical ${before.critical} / should ${before.should}`,
    `After: critical ${after.critical} / should ${after.should}`,
    "",
    "## Fixed",
    "",
  ];
  if (!actions.length) lines.push("- (nothing mechanical to change)");
  for (const a of actions) {
    lines.push(`- ${a.file}${a.line ? `:${a.line}` : ""} — ${a.id} — ${a.action}`);
  }
  lines.push("", "## Left", "");
  if (!leftover.length) lines.push("- none");
  for (const f of leftover) {
    lines.push(`- [${f.severity}] ${f.id} ${f.file}:${f.line} — ${f.message}`);
    if (f.sample) lines.push(`  \`${f.sample}\``);
  }
  lines.push("");
  fs.writeFileSync(file, lines.join("\n"));
  return file;
}

export function fixProject(root, look = {}) {
  const ROOT = path.resolve(root);
  if (!fs.existsSync(ROOT) || !fs.statSync(ROOT).isDirectory()) {
    throw new Error(`ProDesign fix: path not found: ${ROOT}`);
  }
  const pack = look.iconPack || "phosphor";
  const before = scanProject(ROOT);
  const actions = [];

  const applied = applySystem(ROOT, look);
  if (applied.ok) {
    actions.push({ file: ".", id: "no-tokens", action: "applied role tokens + look.css" });
  } else if (applied.log) {
    actions.push({ file: ".", id: "no-tokens", action: `apply-system: ${applied.log.split("\n")[0]}` });
  }

  const touched = new Set();
  for (const hit of before.findings) {
    if (!hit.file || hit.file === "." || hit.line === 0) continue;
    const full = path.join(ROOT, hit.file);
    if (!fs.existsSync(full) || touched.has(full)) continue;
    if (path.basename(full) === "AUDIT.md") continue;
    const text = fs.readFileSync(full, "utf8");
    const next = fixText(text, pack);
    if (next !== text) {
      fs.writeFileSync(full, next);
      actions.push({ file: hit.file, line: hit.line, id: hit.id, action: "mechanical clean" });
    }
    touched.add(full);
  }

  fixPackageJson(ROOT, pack, actions);

  const after = scanProject(ROOT);
  const auditPath = writeAudit(ROOT, { before, after, actions, look });
  actions.push({ file: path.relative(ROOT, auditPath), id: "audit", action: "wrote findings" });

  return { root: ROOT, before, after, actions, auditPath };
}

function parseFlags(argv) {
  const look = {};
  const rest = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--icon-pack") look.iconPack = argv[++i];
    else if (a.startsWith("--") && ["profile", "surface", "viewport", "density", "radius", "chrome", "controls", "icons", "motion"].includes(a.slice(2))) {
      look[a.slice(2)] = argv[++i];
    } else rest.push(a);
  }
  return { root: path.resolve(rest[0] || "."), look };
}

function isMain() {
  const self = fileURLToPath(import.meta.url);
  const invoked = process.argv[1] && path.resolve(process.argv[1]);
  return invoked === self;
}

if (isMain()) {
  try {
    const { root, look } = parseFlags(process.argv.slice(2));
    const result = fixProject(root, look);
    console.log(`ProDesign fix  ${result.root}`);
    console.log(`before  critical ${result.before.critical} / should ${result.before.should}`);
    console.log(`after   critical ${result.after.critical} / should ${result.after.should}`);
    console.log(`audit   ${path.relative(result.root, result.auditPath) || "AUDIT.md"}`);
    if (result.after.critical || result.after.should) {
      console.log("");
      console.log(formatReport(result.after));
    }
    process.exit(result.after.critical ? 1 : 0);
  } catch (err) {
    console.error(err.message);
    process.exit(2);
  }
}
