import fs from "node:fs";
import assert from "node:assert/strict";

const base = process.argv[2] || "http://localhost:3131";
const manifest = JSON.parse(fs.readFileSync(".next/prerender-manifest.json", "utf8"));
const paths = [...new Set([
  ...Object.keys(manifest.routes).filter(route => !route.startsWith("/_")),
  "/register", "/dashboard", "/dashboard/card", "/dashboard/opportunities",
  "/dashboard/collaborations", "/dashboard/analytics", "/dashboard/community",
  "/dashboard/earnings", "/dashboard/affiliate", "/dashboard/messages",
  "/dashboard/campaigns", "/dashboard/campaigns/new", "/api/creators", "/api/campaigns",
])];
const failures = [];
for (let offset = 0; offset < paths.length; offset += 6) {
  await Promise.all(paths.slice(offset, offset + 6).map(async route => {
    try {
      const response = await fetch(new URL(route, base));
      if (response.status !== 200) failures.push(`${route}: ${response.status}`);
    } catch (error) { failures.push(`${route}: ${error.message}`); }
  }));
}
assert.deepEqual(failures, [], "Every generated public page and dashboard route should load");
assert.equal((await fetch(new URL("/does-not-exist", base))).status, 404);
assert.equal((await fetch(new URL("/marketplace/does-not-exist", base))).status, 404);
const creators = await (await fetch(new URL("/api/creators", base))).json();
assert(creators.data.length > 0);
const post = (route, body) => fetch(new URL(route, base), { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
for (const body of [null, [], { name: 42 }, { name: "Test", objective: "Test", landingUrl: "javascript:alert(1)", creatorSlugs: ["unknown"] }]) {
  assert.equal((await post("/api/campaigns", body)).status, 422);
}
const valid = await post("/api/campaigns", { name: "Smoke brief", objective: "Review demo", landingUrl: "https://example.com/?utm_source=old#section", creatorSlugs: [creators.data[0].slug] });
assert.equal(valid.status, 201);
const brief = await valid.json();
const url = new URL(brief.data.trackedLinks[0].url);
assert.equal(url.searchParams.getAll("utm_source").length, 1);
assert.equal(url.searchParams.get("utm_source"), "naano");
assert.equal(url.hash, "#section");
assert.equal((await post("/api/selection", null)).status, 422);
const selected = await post("/api/selection", { company: "Example", vertical: "RevOps" });
assert.equal(selected.status, 200);
assert((await selected.json()).data.length > 0);
console.log(`PASS: ${paths.length} routes; unknown-page 404s; malformed campaign inputs; valid UTM brief; creator shortlist.`);
