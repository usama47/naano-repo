# Developer A — Naano.com Clone (24-Hour Plan)

**Role: Design system · exact marketing nav · Home + Creators LPs · brand/agency pages**  
**Workload target: ~12 hours of build work (strict 50% with B)**

**Target:** [https://naano.com/](https://naano.com/)

You and B ship the full clone. This file is your **only** scope — do not pick up B’s routes unless the H12 gate explicitly moves something.

---

## 0. 50/50 contract (identical in both docs)

### Why this split is equal

| | **A (~50%)** | **B (~50%)** |
| --- | --- | --- |
| Core | 2 flagship landings (Home + Creators) + brand cluster | Auth + full creator app (9 modules) + tools/blog systems |
| Effort type | Visual depth, motion, nav fidelity | Product breadth, forms, seeded data, deploy |
| Approx. build hours | **11–12h** | **11–12h** |
| Must not steal | B’s dashboard / tools / blog MDX | A’s home / creators LP / nav |

### Route ownership (no overlap)

| Route / module | Owner |
| --- | --- |
| Design tokens, `components/ui/**`, `motion/**` | **A** |
| `MarketingNav`, Footer, CommandBar, CookieBar, FeedbackTab, i18n chrome | **A** |
| `/` Home | **A** |
| `/creators` landing page only | **A** |
| `/agencies` | **A** |
| `/pricing` `/about` `/book` `/help` `/privacy` `/terms` | **A** |
| `/case-studies/[slug]` | **A** |
| `/creators/[slug]` public profiles | **B** |
| `/blog/**` | **B** |
| `/free-tools/**` `/selection` `/for/**` `/briefs` | **B** |
| `/reports` `/benchmarks/**` SEO landers (+ FR) | **B** |
| `/login` `/register` | **B** |
| `/dashboard/**` (shell + all 9 modules) | **B** |
| Types, seeds, APIs, CI, sitemap, robots, production deploy | **B** |

### Marketing nav (A builds; B must not break)

| Item | Href |
| --- | --- |
| For companies | `/` |
| For creators | `/creators` |
| For agencies | `/agencies` |
| How it works | `/#how-it-works` |
| Resources ▾ | `/blog`, `/free-tools`, `/case-studies/blogseo` |
| EN | EN/FR toggle |
| Sign in / Sign up | `/login`, `/register` |
| Choose your agency | agency variant on `/agencies` |

### Sync gates

| Hour | Gate |
| --- | --- |
| **H1.5** | A pushes foundation (tokens + ui + layout primitives) |
| **H6** | Joint nav walkthrough vs screenshots |
| **H12** | Phase gate — only place work can be rebalanced |
| **H18** | Feature freeze |
| **H22** | Code freeze → QA |

### Shared DoD

375 / 768 / 1280 · keyboard + focus · `prefers-reduced-motion` · clean `pnpm build` · Vercel preview

### Stack

Next.js App Router + TS · Tailwind + shadcn · Framer Motion · zod/RHF · Vercel

---

## 1. Phase 1 (H0 → H12) — Foundation + Home + Agencies + Creators start

**Budget: 12h. Stop for gate even if imperfect.**

| Hours | Task | Done when |
| --- | --- | --- |
| H0–H1.5 | Scaffold Next.js, shadcn, CSS tokens from naano.com, `Container`/`Section`, push **foundation live** | B unblocked |
| H1.5–H3.5 | `MarketingNav` (exact IA + Resources dropdown + `default`/`agency` variants) + Footer + mobile sheet | Matches screenshots |
| H3.5–H4.5 | CommandBar + CookieBar + FeedbackTab; mount in marketing layout | Visible on `/` |
| H4.5–H5 | i18n shell EN/FR for chrome strings only | Toggle works |
| H5–H10 | **Home `/`** full LP (hero cloud, badge, CTAs, logos, `#how-it-works`, 4-step story, proof, stats, pricing preview, FAQ, book CTA) | Scrolls end-to-end |
| H10–H11 | `/agencies` chooser + nav `variant="agency"` | Two workspace cards + CTAs |
| H11–H12 | Start `/creators` hero + first 2–3 sections | Partial OK |

**Phase 1 exit:** Foundation live · nav screenshot-accurate · home complete · agencies complete · creators started.

---

## 2. Phase 2 (H12 → H24) — Creators LP finish + brand pages + polish

**Budget: 12h.**

| Hours | Task |
| --- | --- |
| H12–H13 | Phase gate with B (rebalance only if one side is blocked) |
| H13–H16 | Finish `/creators` LP (all sections; reuse your motion/CTA; link to B’s `/register` and `/creators/[slug]` later) |
| H16–H18 | `/pricing` `/about` `/book` `/help` `/privacy` `/terms` |
| H18–H19.5 | `/case-studies/blogseo` (+ template) |
| H19.5–H21 | Responsive + a11y on **A routes only**; nav regression |
| H21–H22 | Merge with B; fix A↔B links |
| H22–H24 | Freeze, phone QA, README section for marketing |

### A cut list (strict — cut before stealing B work)

| Keep (P0) | Cut (P2) |
| --- | --- |
| Nav + Home + Agencies | Fancy motion on every section |
| `/creators` LP complete | Help center depth (single FAQ page OK) |
| Pricing + About + Book | Privacy/terms = short stubs OK |
| Case study BlogSEO | Pixel-perfect logo SVGs |

**You do not own:** dashboard, auth screens, blog MDX, calculators, reports/SEO landers, deploy.

---

## 3. Dependencies on B

- After H6: import creator showcase data from `content/creators.ts` if B has seeded it; else hardcode 4 cards temporarily and swap at H12.
- CTAs: `/register`, `/login`, `/book`, `/blog`, `/free-tools` may 404 until B lands them — wire hrefs anyway.
- CommandBar: export from `components/ai/CommandBar.tsx` for B to mount in dashboard.

## 4. Risks

| Risk | Mitigation |
| --- | --- |
| Home + Creators both mega | Hard-stop home at H10; creators gets H11 + H13–H16 |
| Foundation late | Ship token **names** at H1.5 even if colors imperfect |
| Scope envy for dashboard | Refuse — equality breaks if you take B modules |
