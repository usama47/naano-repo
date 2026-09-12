import { spawn } from "node:child_process";
import { setTimeout } from "node:timers/promises";

const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "3132"], { stdio: "inherit" });
let launchError;
server.on("error", error => { launchError = error; });
try {
  let ready = false;
  for (let attempt = 0; attempt < 100; attempt++) {
    if (launchError) throw launchError;
    if (server.exitCode !== null) throw new Error("Production server exited before the smoke test");
    try { if ((await fetch("http://127.0.0.1:3132/")).ok) { ready = true; break; } } catch { /* Starting up. */ }
    await setTimeout(200);
  }
  if (!ready) throw new Error("Production server was not ready within 20 seconds");
  process.argv[2] = "http://127.0.0.1:3132";
  await import("./smoke.mjs");
} finally {
  server.kill();
}
