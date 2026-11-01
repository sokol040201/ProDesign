#!/usr/bin/env node
/**
 * prodesign scan [path] [--json]
 * prodesign apply [path]
 * prodesign install [--personal|--project|--all] [path]
 */

import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..");
const [cmd = "help", ...rest] = process.argv.slice(2);

function run(file, args) {
  const result = spawnSync(process.execPath, [file, ...args], {
    stdio: "inherit",
  });
  process.exit(result.status ?? 1);
}

function sh(file, args) {
  const result = spawnSync(file, args, { stdio: "inherit" });
  process.exit(result.status ?? 1);
}

if (cmd === "scan") {
  run(path.join(HERE, "scan.mjs"), rest);
} else if (cmd === "apply") {
  run(path.join(HERE, "apply-system.mjs"), rest);
} else if (cmd === "studio") {
  run(path.join(HERE, "studio.mjs"), rest);
} else if (cmd === "install") {
  sh(path.join(ROOT, "install.sh"), rest);
} else {
  console.log(`ProDesign

  node scripts/prodesign.mjs scan [path] [--json]
  node scripts/prodesign.mjs apply [path]
  ./install.sh                         personal skill
  ./install.sh --project [path]        skill + rule in a product repo
  ./install.sh --system [path]         tokens + states in the product
  ./install.sh --all [path]            project + system
`);
  process.exit(cmd === "help" || cmd === "--help" ? 0 : 1);
}
