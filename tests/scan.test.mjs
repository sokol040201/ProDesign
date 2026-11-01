import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const scan = path.join(root, "scripts", "scan.mjs");
const slop = path.join(here, "fixtures", "slop");

const result = spawnSync(process.execPath, [scan, slop, "--json"], {
  encoding: "utf8",
});

if (result.status !== 1) {
  console.error(`expected exit 1 from slop fixture, got ${result.status}`);
  console.error(result.stdout);
  console.error(result.stderr);
  process.exit(1);
}

const report = JSON.parse(result.stdout);
const ids = new Set(report.findings.map((f) => f.id));
for (const need of ["gradient", "emoji", "indigo-default"]) {
  if (!ids.has(need)) {
    console.error(`missing finding: ${need}`);
    process.exit(1);
  }
}

console.log("scan fixture OK");
