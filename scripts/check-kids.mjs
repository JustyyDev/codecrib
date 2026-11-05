#!/usr/bin/env node
// Quick headless smoke: pages load + Python print via Pyodide (Playwright).
import { chromium } from "playwright";
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = 8766;

function serve() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let p = decodeURIComponent((req.url || "/").split("?")[0]);
      if (p === "/") p = "/index.html";
      const file = path.join(root, p.replace(/^\//, ""));
      if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
        res.writeHead(404); res.end("no"); return;
      }
      const ext = path.extname(file);
      const types = { ".html":"text/html",".js":"text/javascript",".css":"text/css",".svg":"image/svg+xml",".png":"image/png",".json":"application/json" };
      res.writeHead(200, { "Content-Type": types[ext] || "text/plain" });
      fs.createReadStream(file).pipe(res);
    });
    server.listen(port, "127.0.0.1", () => resolve(server));
  });
}

const server = await serve();
const browser = await chromium.launch();
const page = await browser.newPage();
const base = `http://127.0.0.1:${port}`;
for (const u of [`${base}/index.html`, `${base}/course.html?course=python-kids`, `${base}/lesson-kids.html?course=python-kids&id=1`]) {
  const r = await page.goto(u, { waitUntil: "domcontentloaded" });
  if (!r || r.status() >= 400) throw new Error("bad status " + u);
}
await page.goto(`${base}/lesson-kids.html?course=python-kids&id=1`, { waitUntil: "domcontentloaded" });
await page.getByRole("button", { name: "Volgende stap" }).click();
await page.getByRole("button", { name: "Volgende stap" }).click();
await page.waitForSelector(".cc-editor-host", { timeout: 15000 });
await page.getByRole("button", { name: /Run/i }).click();
await page.waitForFunction(() => {
  const el = document.querySelector(".cc-console");
  return el && /Hallo/i.test(el.textContent || "");
}, null, { timeout: 60000 });
const out = await page.locator(".cc-console").innerText();
console.log("CHECK_OK", JSON.stringify({ pythonOut: out.trim() }));
await browser.close();
server.close();
