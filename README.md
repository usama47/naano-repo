# Naano — product rebuild

A timeboxed, independent rebuild of [naano.com](https://naano.com), focused on product exploration, a coherent creator/brand demo, and a reviewable AI-assisted process.

- **Live demo:** https://naano-replica.vercel.app/
- **Submission branch:** [main](https://github.com/usama47/naano-repo/tree/main)
- **Capture verification:** [CAPTURE-TEST.md](CAPTURE-TEST.md)
- **Raw prompt/response logs:** [.agent-logs/](.agent-logs/)

## Try it

Open `/login` and use the prefilled sample email. Choose **Creator** or **Brand**; no password, OAuth account, API keys or payment details are required. The dashboard is intentionally accessible to reviewers without authentication.

1. Explore the company, creator and agency landing pages.
2. Enter the creator demo, open **My card → Edit**, save changes, then switch to **Preview**. Card edits survive refresh in the same browser.
3. Open `/selection`, enter a company and vertical, and inspect the resulting sample creator profiles.
4. Visit `/marketplace`, filter creators, select a shortlist, and build a brief. Generate UTM links and download the sample brief.
5. Explore the free calculators, blog, reports, and creator dashboard modules.

## Scope and product decisions

The priority is a coherent demonstration of the core journeys and interface, with clear boundaries around integrations that were not built.

| Area | Delivered | Boundary |
| --- | --- | --- |
| Marketing and content | Responsive landing pages, navigation, pricing, articles, reports, case study and legal reference pages | Rebuilt from original-product material; not a claim of original authorship or pixel-perfect parity |
| Creator discovery | Search, filters, sorting, profile pages, sample shortlist | Bundled sample creator data |
| Creator card | Edit, save locally, preview, reload persistence | Browser-local, scoped to demo email; not published to a shared backend |
| Brand brief | Validation, creator selection, budget summary, UTM generation, JSON download | No database persistence, invitations, publishing or click tracking |
| Demo entry | Creator/brand choice, sample identity cookie, sign-out | Not production authentication; password/OAuth/reset are not connected |
| Creator workspace | Nine navigable modules, sample metrics and empty states; in-page inbox replies | No LinkedIn sync, realtime messaging, affiliate tracking or payouts |
| Free tools | Interactive calculations and estimates | Illustrative calculations, not validated forecasts |
| Booking | Local route into sample creator discovery | No live scheduling, calendar invites or payments |
| Localization | English experience | French not implemented |

Some historical marketplace/campaign routes remain as useful demo extensions. Further production work would start with durable storage, real authentication and role authorization, then integrations and full original-flow parity. A polished demo does not substitute for those systems.

## Run and verify

Use Node.js 22 and run commands from the repository root:

```sh
npm ci
npm run dev
```

For a production check:

```sh
npm run lint
npm test
npm run build
npm run test:smoke
```

`test:smoke` starts and stops a local production server on port 3132. It checks generated routes, dashboard pages, missing-page responses, API validation, UTM generation and shortlist results. `.github/workflows/verify.yml` runs the same checks on pushes to main and pull requests. Google Fonts are downloaded during the build, so it requires network access. No environment variables are required for this demo.

Local validation on 2026-09-12: clean installation, production build/type checking, capture recorder test and 120-route HTTP smoke test passed. ESLint has zero errors; existing image-optimization and unused-variable warnings are non-blocking. Browser checks covered demo entry, card save/preview after reload, creator shortlist, and the mobile homepage. This is not a claim of exhaustive visual or original-product parity testing.

## Deploy

Vercel project settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Root Directory | Repository root, `.` or blank |
| Framework | Next.js |
| Node.js | 22.x |

`vercel.json` specifies `npm ci`, `npm run build`, and `.next` output. Do not select the former `naano-web` folder. After changing an existing project's Root Directory, redeploy the newest main commit. See [Vercel build settings](https://vercel.com/docs/builds/configure-a-build).

## Repository map

```text
app/                  Routes, server actions, and demo APIs
components/           Marketing, marketplace, tools, dashboard, UI primitives
lib/                  Types, sample data, content, demo identity
public/               Local visual assets
scripts/              Capture, transcript export, verification, content utility
.agent-logs/          Committed session captures and provenance
.codex/hooks.json     Codex prompt/final-response capture
.cursor/              Original Cursor capture mechanism (retained)
docs/process/         Original plans and queue snapshot, explicitly historical
refs/                 Available original reference images and evidence limits
CAPTURE-TEST.md        Two-session capture proof and attempts that failed
```

## Process evidence

Automatic Codex capture was verified in two real independent sessions on **2026-09-12**, after the original build. Raw canaries and setup details are in `CAPTURE-TEST.md`. New machines must review the repository hooks through Codex `/hooks` before relying on them. Use the repository root as the agent workspace.

The original Cursor logs are retained without editing. They were committed together and do not prove incremental capture during the original build. The recovered Codex transcript is explicitly labelled as recovered. Today's tests do not retroactively satisfy the pre-build canary requirement. Available references cover part of the public homepage; evidence of completing every signed-in original-product flow is unavailable. No missing history, responses, screenshots or timestamps have been invented.

The walkthrough is submitted separately: a public video, camera on, under five minutes. It is not included in this repository.

## Attribution

This is an assignment demo, not the official Naano service. Original-product copy, imagery and reference material remain attributable to their respective owners. External reference links may lead to the original service. The demo banner and scope table distinguish reproduced screens from working integrations.
