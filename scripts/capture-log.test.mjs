import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { record } from './capture-log.mjs';

test('capture preserves full text, deduplicates events, and retains model switches', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'naano-capture-test-'));
  const base = { session: 'fixture-session', tool: 'test-fixture', model: 'fixture-model', timestamp: '2026-09-12T00:00:00.000Z' };
  const prompt = { ...base, type: 'PROMPT', text: '  raw\r\ntext\n' + 'x'.repeat(20000), key: 'p1' };
  const file = record(prompt, directory);
  record(prompt, directory);
  record({ ...base, model: 'fixture-model-2', type: 'RESPONSE', text: '  final\n', key: 'r1', timestamp: '2026-09-12T00:01:00.000Z' }, directory);
  const log = fs.readFileSync(file, 'utf8');
  assert(log.includes(prompt.text));
  assert.equal([...log.matchAll(/type=PROMPT/g)].length, 1);
  assert(log.includes('model: fixture-model-2'));
  assert(log.includes('last_prompt_time: 2026-09-12T00:00:00.000Z'));
  // Test fixtures stay outside .agent-logs; they are not canary evidence.
});
