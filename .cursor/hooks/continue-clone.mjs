#!/usr/bin/env node
/**
 * After the agent stops, keep cloning Naano from CLONE-PROMPT-QUEUE.md
 * until QUEUE-STATUS.json next >= total.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "..");
const STATUS = path.join(ROOT, "QUEUE-STATUS.json");

function readStdin() {
  return new Promise((resolve) => {
    const chunks = [];
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", (c) => chunks.push(c));
    process.stdin.on("end", () => resolve(chunks.join("")));
    process.stdin.on("error", () => resolve(""));
  });
}

const raw = await readStdin();
let status = { next: 99, total: 0, ids: [] };
try {
  status = JSON.parse(fs.readFileSync(STATUS, "utf8"));
} catch {
  process.stdout.write("{}");
  process.exit(0);
}

if (status.next >= status.total) {
  process.stdout.write("{}");
  process.exit(0);
}

const id = status.ids[status.next] || `P${String(status.next).padStart(2, "0")}`;
const message = [
  `Continue the unattended Naano.com clone. Do not ask the user anything. Do not wait for approval.`,
  `Read naano-repo/CLONE-PROMPT-QUEUE.md prompt ${id} (index ${status.next} of ${status.total}).`,
  `Read QUEUE-STATUS.json. Work in naano-web.`,
  `Screenshot root: C:\\Users\\PC\\Downloads\\Naano_Public_Screenshots\\naano-public-screenshots\\`,
  `Live assets are in naano-web/public/lp/. Use them.`,
  `Read every PNG listed in ${id} before editing.`,
  `Implement that slice to match https://naano.com/ and the screenshots.`,
  `When the slice works, add "${id}" to QUEUE-STATUS.json done, set next to ${status.next + 1}, then stop so this hook can continue.`,
  `If ${id} is already visually done, skip to the next unfinished id.`,
].join(" ");

process.stdout.write(JSON.stringify({ followup_message: message }));
