import fs from 'node:fs';
import { record } from './capture-log.mjs';

// Lifecycle input contains the raw prompt or completed response; never log the
// full payload, which can also contain tool/transcript/environment information.
try {
  const payload = JSON.parse(fs.readFileSync(0, 'utf8'));
  const event = payload.hook_event_name;
  if (event === 'UserPromptSubmit' || event === 'Stop') {
    const type = event === 'UserPromptSubmit' ? 'PROMPT' : 'RESPONSE';
    const text = type === 'PROMPT' ? payload.prompt : payload.last_assistant_message;
    if (typeof text !== 'string' || !payload.model || !payload.turn_id) throw new Error('Incomplete hook payload');
    record({ session: payload.session_id, model: payload.model, tool: 'codex', type, text,
      timestamp: new Date().toISOString(), key: `${payload.turn_id}:${type}` });
  }
  process.stdout.write('{}');
} catch (error) {
  process.stdout.write(JSON.stringify({ systemMessage: `Agent capture failed: ${error.message}` }));
  process.exitCode = 1;
}
