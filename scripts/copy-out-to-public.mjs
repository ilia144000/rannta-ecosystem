import fs from "node:fs";
import path from "node:path";

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

const outDir = path.resolve("out");
const publicDir = path.resolve("public");

if (!fs.existsSync(outDir)) {
  console.error("out/ not found. Make sure output: 'export' is enabled.");
  process.exit(1);
}

copyDir(outDir, publicDir);
console.log("Copied out/ -> public/ successfully.");
