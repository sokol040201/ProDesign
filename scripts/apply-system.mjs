#!/usr/bin/env node
/**
 * Install role tokens + SYSTEM.md into a product.
 * This is not a restyle. After it runs, leftover hex in the product CSS
 * is still Critical — edit those files, do not add an overlay.
 * Usage:
 *   node scripts/apply-system.mjs <project-path>
 *   node scripts/apply-system.mjs . --density mixed --radius round --chrome fill --surface ios
 *   node scripts/apply-system.mjs . --profile soft-app
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { resolveLook } from "../kit/look.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SKILL = path.resolve(HERE, "..");
const KIT = path.join(SKILL, "kit");

const flags = {
  profile: null,
  surface: null,
  density: null,
  radius: null,
  chrome: null,
  controls: null,
  icons: null,
  viewport: null,
  motion: null,
  iconPack: null,
};
const rest = [];
const argv = process.argv.slice(2);
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === "--icon-pack") flags.iconPack = argv[++i];
  else if (a.startsWith("--") && a.slice(2) in flags) flags[a.slice(2)] = argv[++i];
  else rest.push(a);
}
const ROOT = path.resolve(rest[0] || ".");

if (!fs.existsSync(ROOT) || !fs.statSync(ROOT).isDirectory()) {
  console.error(`ProDesign apply: path not found: ${ROOT}`);
  process.exit(2);
}

const resolved = resolveLook(flags);
if (resolved.error) {
  console.error(resolved.error);
  process.exit(2);
}
const { state, tokens } = resolved;

function exists(...parts) {
  return fs.existsSync(path.join(...parts));
}

function copyFile(from, to) {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  if (fs.existsSync(to)) {
    console.log(`keep  ${path.relative(ROOT, to)}`);
    return false;
  }
  fs.copyFileSync(from, to);
  console.log(`write ${path.relative(ROOT, to)}`);
  return true;
}

function detectDest() {
  if (exists(ROOT, "src")) return path.join(ROOT, "src", "design-system");
  if (exists(ROOT, "app")) return path.join(ROOT, "app", "design-system");
  if (exists(ROOT, "lib")) return path.join(ROOT, "lib", "design-system");
  return path.join(ROOT, "design-system");
}

function detectCssEntry() {
  const candidates = [
    ["src", "index.css"],
    ["src", "styles", "globals.css"],
    ["src", "app", "globals.css"],
    ["app", "globals.css"],
    ["styles", "globals.css"],
    ["src", "App.css"],
  ];
  for (const parts of candidates) {
    const file = path.join(ROOT, ...parts);
    if (fs.existsSync(file)) return file;
  }
  return null;
}

const dest = detectDest();

copyFile(path.join(KIT, "styles", "tokens.css"), path.join(dest, "tokens.css"));
copyFile(path.join(KIT, "styles", "tokens.ts"), path.join(dest, "tokens.ts"));

const lookCss = `:root {\n${Object.entries(tokens)
  .map(([k, v]) => `  ${k}: ${v};`)
  .join("\n")}\n}\n`;
fs.mkdirSync(dest, { recursive: true });
fs.writeFileSync(path.join(dest, "look.css"), lookCss);
console.log(`write ${path.relative(ROOT, path.join(dest, "look.css"))}`);

const systemPath = path.join(dest, "SYSTEM.md");
if (!fs.existsSync(systemPath)) {
  const tpl = fs.readFileSync(path.join(KIT, "templates", "SYSTEM.md"), "utf8");
  const values = {
    surface: state.surface,
    viewport: state.viewport,
    density: state.density,
    radius: state.radius,
    chrome: state.chrome,
    controls: state.controls,
    icons: state.icons,
    icon_pack: state.iconPack,
    motion: state.motion,
    radius_sm: tokens["--pd-radius-sm"],
    radius_md: tokens["--pd-radius-md"],
    radius_lg: tokens["--pd-radius-lg"],
    gutter: tokens["--pd-gutter"],
    motion_ms: tokens["--pd-motion"],
    inherit:
      state.surface === "ios" ? "Apple" : state.surface === "android" ? "Material" : "product roles",
    overlay_short: state.viewport === "phone" ? "bottom sheet" : "dialog",
    overlay_menu: state.viewport === "phone" ? "action sheet" : "popover / menu",
    elevation: state.chrome === "outline" ? "1px border" : state.chrome === "fill" ? "tone shift, no hairlines" : "fill cards, outlined fields",
  };
  const filled = tpl.replace(/\{\{(\w+)\}\}/g, (_, key) => (key in values ? values[key] : `{{${key}}}`));
  fs.writeFileSync(systemPath, filled);
  console.log(`write ${path.relative(ROOT, systemPath)}`);
} else {
  console.log(`keep  ${path.relative(ROOT, systemPath)}`);
}

const cssEntry = detectCssEntry();
if (cssEntry) {
  const current = fs.readFileSync(cssEntry, "utf8");
  let next = current;
  if (!current.includes("design-system/tokens.css") && !current.includes("pd-color-accent")) {
    let importRel = path
      .relative(path.dirname(cssEntry), path.join(dest, "tokens.css"))
      .replaceAll("\\", "/");
    if (importRel && !importRel.startsWith(".")) importRel = `./${importRel}`;
    next = `@import "${importRel}";\n${next}`;
  }
  if (!next.includes("design-system/look.css")) {
    let lookRel = path
      .relative(path.dirname(cssEntry), path.join(dest, "look.css"))
      .replaceAll("\\", "/");
    if (lookRel && !lookRel.startsWith(".")) lookRel = `./${lookRel}`;
    next = `@import "${lookRel}";\n${next}`;
  }
  if (next !== current) {
    fs.writeFileSync(cssEntry, next);
    console.log(`patch ${path.relative(ROOT, cssEntry)}`);
  } else {
    console.log(`keep  ${path.relative(ROOT, cssEntry)}`);
  }
} else {
  console.log("note  map token roles onto the product stack");
}

const agents = path.join(ROOT, "AGENTS.md");
const fragment = fs.readFileSync(path.join(KIT, "templates", "AGENTS.fragment.md"), "utf8");
if (!fs.existsSync(agents)) {
  fs.writeFileSync(agents, `# Agents\n\n${fragment}`);
  console.log("write AGENTS.md");
} else if (!fs.readFileSync(agents, "utf8").includes("ProDesign")) {
  fs.appendFileSync(agents, `\n${fragment}`);
  console.log("patch AGENTS.md");
} else {
  console.log("keep  AGENTS.md");
}

const flagsOut = [
  `--surface ${state.surface}`,
  `--viewport ${state.viewport}`,
  `--density ${state.density}`,
  `--radius ${state.radius}`,
  `--chrome ${state.chrome}`,
  `--controls ${state.controls}`,
  `--icons ${state.icons}`,
  `--icon-pack ${state.iconPack}`,
  `--motion ${state.motion}`,
].join(" ");
console.log(`\nProDesign look: ${state.surface} / ${state.density} / ${state.radius} / ${state.chrome} / ${state.iconPack} ${state.icons} / ${state.motion}`);
console.log(`System: ${path.relative(ROOT, dest) || "."}`);
console.log(`Re-apply: node scripts/apply-system.mjs . ${flagsOut}`);
