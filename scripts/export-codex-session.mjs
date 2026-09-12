import fs from 'node:fs';
import path from 'node:path';
import { record, root } from './capture-log.mjs';

// Explicit source only: never scan unrelated chats or publish full rollouts.
const source = process.argv[2];
if (!source) throw new Error('Usage: node scripts/export-codex-session.mjs <rollout.jsonl>');
const rows = fs.readFileSync(source, 'utf8').split('\n').filter(Boolean).map(line => JSON.parse(line));
const meta = rows.find(row => row.type === 'session_meta')?.payload;
if (!meta || path.resolve(meta.cwd).toLowerCase() !== root.toLowerCase()) throw new Error('Session does not belong to this project');
let model = 'unknown';
let total = 0;
for (const row of rows) {
  if (row.type === 'turn_context') model = row.payload.model || 'unknown';
  if (row.type !== 'response_item' || row.payload.type !== 'message') continue;
  const message = row.payload;
  const kinds = message.internal_chat_message_metadata_passthrough?.content_item_kinds;
  const prompt = message.role === 'user' && kinds?.includes('user.text');
  const final = message.role === 'assistant' && ['final', 'final_answer'].includes(message.phase);
  if (!prompt && !final) continue;
  const text = message.content.filter((item, index) => (!prompt || kinds[index] === 'user.text') && typeof item.text === 'string').map(item => item.text).join('\n');
  if (model === 'unknown') throw new Error('Cannot recover exact model for this message');
  record({ session: meta.id, model, tool: meta.originator || 'codex', type: prompt ? 'PROMPT' : 'RESPONSE',
    text, timestamp: row.timestamp, key: message.id, method: 'recovered-from-local-transcript' });
  total++;
}
console.log(`Read ${total} prompt/final records. Existing event IDs are deduplicated; source file is unchanged.`);
