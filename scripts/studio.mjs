#!/usr/bin/env node
/**
 * Look editor + local audit API.
 * Usage: node scripts/studio.mjs [project-path]
 */

import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { scanProject } from "./scan.mjs";
import { fixProject } from "./fix.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const STUDIO = path.resolve(HERE, "..", "studio");
const SKILL = path.resolve(HERE, "..");
const PORT = Number(process.env.PRODESIGN_STUDIO_PORT || 8765);
const HOST = "127.0.0.1";

const rest = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const requested = rest[0] ? path.resolve(rest[0]) : process.cwd();
const DEFAULT_ROOT = requested === SKILL ? "" : requested;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
};

function open(target) {
  const opener = process.platform === "darwin" ? "open" : process.platform === "win32" ? "start" : "xdg-open";
  spawn(opener, [target], { detached: true, stdio: "ignore" }).unref();
}

function send(res, status, body, type = "application/json; charset=utf-8") {
  const data = typeof body === "string" || Buffer.isBuffer(body) ? body : JSON.stringify(body);
  res.writeHead(status, {
    "Content-Type": type,
    "Cache-Control": "no-store",
  });
  res.end(data);
}

function assertProject(root) {
  if (!root || typeof root !== "string") throw new Error("Project path is required");
  const resolved = path.resolve(root);
  if (resolved === "/" || resolved === "/Users" || resolved === "/home") {
    throw new Error("Pick a project folder, not a system root");
  }
  if (!fs.existsSync(resolved) || !fs.statSync(resolved).isDirectory()) {
    throw new Error(`Path not found: ${resolved}`);
  }
  return resolved;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > 1_000_000) {
        reject(new Error("Body too large"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8");
      if (!raw) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(raw));
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

function serveStatic(url, res) {
  const rel = url.pathname === "/" ? "/index.html" : url.pathname;
  const file = path.normalize(path.join(STUDIO, rel));
  if (!file.startsWith(STUDIO)) {
    send(res, 403, "Forbidden", "text/plain");
    return;
  }
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
    send(res, 404, "Not found", "text/plain");
    return;
  }
  send(res, 200, fs.readFileSync(file), MIME[path.extname(file)] || "application/octet-stream");
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || "/", `http://${HOST}:${PORT}`);
  try {
    if (req.method === "GET" && url.pathname === "/api/meta") {
      send(res, 200, { defaultRoot: DEFAULT_ROOT, cwd: process.cwd(), skill: SKILL });
      return;
    }
    if (req.method === "POST" && url.pathname === "/api/scan") {
      const body = await readBody(req);
      const root = assertProject(body.root || DEFAULT_ROOT);
      send(res, 200, scanProject(root));
      return;
    }
    if (req.method === "POST" && url.pathname === "/api/fix") {
      const body = await readBody(req);
      const root = assertProject(body.root || DEFAULT_ROOT);
      send(res, 200, fixProject(root, body.look || {}));
      return;
    }
    if (req.method === "GET") {
      serveStatic(url, res);
      return;
    }
    send(res, 405, { error: "Method not allowed" });
  } catch (err) {
    send(res, 400, { error: err.message || String(err) });
  }
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is busy. Stop the other studio server and run: node scripts/studio.mjs`);
    open(`http://${HOST}:${PORT}/`);
    process.exit(2);
  }
  throw err;
});

server.listen(PORT, HOST, () => {
  const url = `http://${HOST}:${PORT}/`;
  console.log(`ProDesign studio: ${url}`);
  if (DEFAULT_ROOT) console.log(`Project: ${DEFAULT_ROOT}`);
  open(url);
});
