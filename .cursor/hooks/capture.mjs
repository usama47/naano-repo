#!/usr/bin/env node
/**
 * 8x assignment — automatic agent capture for Cursor.
 * Fires on sessionStart, beforeSubmitPrompt, afterAgentResponse.
 * Writes only user prompts + final agent responses to .agent-logs/
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, "..", "..");
const LOG_DIR = path.join(PROJECT_ROOT, ".agent-logs");
const INDEX_PATH = path.join(LOG_DIR, ".session-index.json");
const AUTHOR = process.env.AGENT_LOG_AUTHOR || "usama-aslam";
const PROJECT = "naano-rebuild";
const TOOL = "cursor";

function readStdin() {
  return new Promise((resolve, reject) => {
    const chunks = [];
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", (c) => chunks.push(c));
    process.stdin.on("end", () => resolve(chunks.join("")));
    process.stdin.on("error", reject);
  });
}

function utcNow() {
  return new Date().toISOString();
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function loadIndex() {
  try {
    return JSON.parse(fs.readFileSync(INDEX_PATH, "utf8"));
  } catch {
    return { sessions: {} };
  }
}

function saveIndex(index) {
  ensureDir(LOG_DIR);
  fs.writeFileSync(INDEX_PATH, JSON.stringify(index, null, 2), "utf8");
}

function shortId(id) {
  return (id || "unknown").replace(/[^a-zA-Z0-9-]/g, "").slice(0, 8) || "unknown";
}

function modelName(payload) {
  return payload.model_id || payload.model || "unknown";
}

function sessionKey(payload) {
  return payload.conversation_id || payload.session_id || "unknown-session";
}

function createSessionFile(sessionId, model) {
  ensureDir(LOG_DIR);
  const now = new Date();
  const stamp = now
    .toISOString()
    .replace(/[:.]/g, "-")
    .replace("T", "_")
    .replace(/Z$/, "")
    .slice(0, 19);
  const filename = `${stamp}_${sessionId}.md`;
  const filePath = path.join(LOG_DIR, filename);
  const date = now.toISOString().slice(0, 10);
  const iso = now.toISOString();

  const header = `---
session_id: ${sessionId}
date: ${date}
author: ${AUTHOR}
model: ${model}
tool: ${TOOL}
project: ${PROJECT}
total_exchanges: 0
first_prompt_time: ${iso}
last_prompt_time: ${iso}
---

# Session Log - ${date}

Session: \`${shortId(sessionId)}\` | Project: \`${PROJECT}\` | Author: \`${AUTHOR}\`

`;

  fs.writeFileSync(filePath, header, "utf8");
  return { filePath, filename };
}

function resolveSession(payload) {
  const id = sessionKey(payload);
  const index = loadIndex();
  const model = modelName(payload);

  if (!index.sessions[id] || !fs.existsSync(index.sessions[id].filePath)) {
    const created = createSessionFile(id, model);
    index.sessions[id] = {
      filePath: created.filePath,
      filename: created.filename,
      exchange: 0,
      createdAt: utcNow(),
    };
    saveIndex(index);
  }

  return { id, index, entry: index.sessions[id], model };
}

function updateFrontmatter(filePath, updates) {
  let content = fs.readFileSync(filePath, "utf8");
  if (!content.startsWith("---\n")) return;

  const end = content.indexOf("\n---\n", 4);
  if (end === -1) return;

  let fm = content.slice(4, end);
  for (const [key, value] of Object.entries(updates)) {
    const re = new RegExp(`^${key}:.*$`, "m");
    if (re.test(fm)) {
      fm = fm.replace(re, `${key}: ${value}`);
    } else {
      fm += `\n${key}: ${value}`;
    }
  }
  content = `---\n${fm}\n---` + content.slice(end + 4);
  fs.writeFileSync(filePath, content, "utf8");
}

function appendEntry(filePath, type, num, sessionId, model, body, timestamp) {
  const block = `

---

[LOG_ENTRY type=${type} num=${num} session=${shortId(sessionId)}]
timestamp: ${timestamp}
model: ${model}

${body}
`;
  fs.appendFileSync(filePath, block, "utf8");
}

function writeJson(obj) {
  process.stdout.write(JSON.stringify(obj));
}

async function main() {
  let raw = "";
  try {
    raw = await readStdin();
  } catch {
    raw = "";
  }

  let payload = {};
  try {
    payload = raw ? JSON.parse(raw) : {};
  } catch {
    payload = {};
  }

  const event = payload.hook_event_name || "";

  try {
    if (event === "sessionStart") {
      resolveSession(payload);
      writeJson({
        env: {
          AGENT_CAPTURE: "1",
          AGENT_LOG_DIR: LOG_DIR,
        },
      });
      return;
    }

    if (event === "beforeSubmitPrompt") {
      const { id, index, entry, model } = resolveSession(payload);
      entry.exchange = (entry.exchange || 0) + 1;
      const num = entry.exchange;
      const ts = utcNow();
      const prompt = payload.prompt ?? "";

      appendEntry(entry.filePath, "PROMPT", num, id, model, prompt, ts);
      updateFrontmatter(entry.filePath, {
        total_exchanges: num,
        last_prompt_time: ts,
        model,
        ...(num === 1 ? { first_prompt_time: ts } : {}),
      });

      index.sessions[id] = entry;
      saveIndex(index);

      writeJson({ continue: true });
      return;
    }

    if (event === "afterAgentResponse") {
      const { id, index, entry, model } = resolveSession(payload);
      const num = entry.exchange || 1;
      const ts = utcNow();
      const text = payload.text ?? "";

      appendEntry(entry.filePath, "RESPONSE", num, id, model, text, ts);
      updateFrontmatter(entry.filePath, {
        last_prompt_time: ts,
        model,
      });

      index.sessions[id] = entry;
      saveIndex(index);

      writeJson({});
      return;
    }

    // Unknown event — no-op
    writeJson({});
  } catch (err) {
    // Fail open: never block the agent on logging errors
    fs.appendFileSync(
      path.join(LOG_DIR, "capture-errors.log"),
      `${utcNow()} ${event} ${err?.stack || err}\n`,
      "utf8"
    );
    if (event === "beforeSubmitPrompt") {
      writeJson({ continue: true });
    } else {
      writeJson({});
    }
  }
}

main();
