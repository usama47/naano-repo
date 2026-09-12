import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Only metadata is updated. Existing prompt/response bodies are never rewritten.
export function record(entry, directory = path.join(root, '.agent-logs')) {
  const { session, model, tool, type, text, timestamp, key } = entry;
  if (!/^[a-zA-Z0-9-]+$/.test(session)) throw new Error('Invalid session identifier');
  if (!['PROMPT', 'RESPONSE'].includes(type) || typeof text !== 'string') throw new Error('Invalid entry');
  if (!model || !Number.isFinite(Date.parse(timestamp))) throw new Error('Missing model/timestamp');
  fs.mkdirSync(directory, { recursive: true });
  const suffix = `_${session}.md`;
  let file = fs.readdirSync(directory).find(name => name.endsWith(suffix));
  if (!file) {
    file = `${timestamp.slice(0, 19).replace('T', '_').replaceAll(':', '-')}${suffix}`;
    fs.writeFileSync(path.join(directory, file), `---\nsession_id: ${session}\ndate: ${timestamp.slice(0, 10)}\nauthor: usama47\nmodel: ${model}\ntool: ${tool}\nproject: naano-rebuild\ntotal_exchanges: 0\nfirst_prompt_time: ${timestamp}\nlast_prompt_time: ${timestamp}\ncapture_method: ${entry.method || 'lifecycle-hook'}\n---\n\n# Session Log - ${timestamp.slice(0, 10)}\n\nSession: \`${session.slice(0, 8)}\` | Project: \`naano-rebuild\` | Author: \`usama47\`\n`);
  }
  const target = path.join(directory, file);
  let content = fs.readFileSync(target, 'utf8');
  const marker = `<!-- capture-event: ${Buffer.from(key).toString('base64url')} -->`;
  if (content.includes(marker)) return target;
  const frontmatterEnd = content.indexOf("\n---\n", 4);
  const count = Number(content.slice(0, frontmatterEnd).match(/^total_exchanges: (\d+)$/m)?.[1] || 0);
  if (type === 'RESPONSE' && count === 0) throw new Error('Response has no captured prompt');
  const num = type === 'PROMPT' ? count + 1 : count;
  fs.appendFileSync(target, `\n\n---\n\n${marker}\n[LOG_ENTRY type=${type} num=${num} session=${session.slice(0, 8)}]\ntimestamp: ${timestamp}\nmodel: ${model}\n\n${text}\n`);
  content = fs.readFileSync(target, 'utf8');
  const end = content.indexOf('\n---\n', 4);
  let header = content.slice(0, end);
  if (type === 'PROMPT') {
    header = header.replace(/^total_exchanges:.*$/m, `total_exchanges: ${num}`)
      .replace(/^last_prompt_time:.*$/m, `last_prompt_time: ${timestamp}`);
  }
  fs.writeFileSync(target, header + content.slice(end));
  return target;
}
