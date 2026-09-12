# Agent log provenance

Start with [CAPTURE-TEST.md](../CAPTURE-TEST.md) for live canary proof and the historical limitations.

Existing Cursor session files are preserved exactly as received in commit 44607df. The Codex recovery file is explicitly marked `recovered-from-local-transcript`; it is not contemporaneous hook evidence. New Codex sessions use the installed lifecycle hooks once trusted. Prompt and response bodies must never be edited or replaced. Commit new captures alongside the work they produced.

The old `.session-index.json` belongs to the Cursor recorder and contains paths from the original machine. The Codex recorder does not use it.
