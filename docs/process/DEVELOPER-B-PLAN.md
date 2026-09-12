# Developer B — Naano.com Clone (24-Hour Plan)

**Role: Content/tools systems · auth · full creator dashboard (9 modules) · SEO landers · deploy**  
**Workload target: ~12 hours of build work (strict 50% with A)**

**Target:** [https://naano.com/](https://naano.com/)

You and A ship the full clone. This file is your **only** scope — do not rebuild Home or `/creators` LP (A owns those).

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
| Design tokens, marketing chrome, `/`, `/creators` LP, `/agencies`, brand pages, case study | **A** |
| `/creators/[slug]` public profiles | **B** |
| `/blog/**` | **B** |
| `/free-tools/**` `/selection` `/for/**` `/briefs` | **B** |
| `/reports` `/benchmarks/**` SEO landers (+ FR) | **B** |
| `/login` `/register` | **B** |
| `/dashboard/**` (shell + all 9 modules) | **B** |
| Types, seeds, APIs, CI, sitemap, robots, production deploy | **B** |

### Creator dashboard modules (all yours)

| # | Module | Route |
| --- | --- | --- |
| 1 | Overview | `/dashboard` |
| 2 | My card / Storefront | `/dashboard/card` |
| 3 | Opportunities (1k gate) | `/dashboard/opportunities` |
| 4 | Collaborations | `/dashboard/collaborations` |
| 5 | Analytics | `/dashboard/analytics` |
| 6 | Community | `/dashboard/community` |
| 7 | Earnings | `/dashboard/earnings` |
| 8 | Affiliate | `/dashboard/affiliate` |
| 9 | Messages | `/dashboard/messages` |

Shell: icon sidebar + €0 wallet + EN/FR + bell + avatar. Mount A’s `CommandBar`.

### Sync gates

H1.5 foundation · H6 nav review · H12 phase gate · H18 freeze · H22 code freeze

### Shared DoD / stack

Same as A. Next.js App Router + TS · Tailwind + shadcn · Framer Motion (consume A’s) · zod/RHF · MDX · TanStack Query · Vercel

---

## 1. Phase 1 (H0 → H12) — Platform, content, tools, auth

**Budget: 12h. Parallel to A — do not wait on polish.**

| Hours | Task | Done when |
| --- | --- | --- |
| H0–H1 | GitHub + Vercel + CI (`tsc`/`lint`/`build`); author `types/content.ts` + dashboard types | Pipeline green |
| H1–H2.5 | Seed: ≥40 creators, posts, FAQs, 8 verticals, demo user, NaanoBot, empty collabs/earnings | A can import creators |
| H2.5–H5 | Blog system: `/blog` + MDX `[slug]`; ≥8 full posts + stubs for other known slugs | Index + one article live |
| H5–H8 | `/free-tools` hub + **2** calculators (Worth + Engagement) | Interactive results |
| H8–H10 | `/selection` form + `POST /api/selection` success state | End-to-end stub |
| H10–H12 | `/login` + `/register` (split-screen screenshot; stub OAuth; cookie → `/dashboard`) | Can “sign in” |

**Phase 1 exit:** Seeds live · blog works · tools hub + 2 calcs · selection · auth works.  
**Not in Phase 1:** dashboard modules (those are Phase 2 — protects 50/50).

---

## 2. Phase 2 (H12 → H24) — Dashboard + remaining systems

**Budget: 12h.**

| Hours | Task |
| --- | --- |
| H12–H13 | Phase gate with A |
| H13–H14 | Dashboard shell (sidebar, header, auth guard, CommandBar mount) |
| H14–H17.5 | Modules **1–9** as screenshot empty states first (~20–25 min each). Order: Overview → Card → Opportunities → Collaborations → Earnings → Messages → Analytics → Community → Affiliate |
| H17.5–H18.5 | Remaining 2 calculators (Delivery odds + Budget planner) |
| H18.5–H19.5 | `/creators/[slug]` template + `generateStaticParams`; `/for/[vertical]`×8; `/briefs` |
| H19.5–H20.5 | `/reports` `/benchmarks/q2-2026` + SEO landers (shared longform layout; FR twin = same layout + `fr` content) |
| H20.5–H21.5 | `sitemap.ts` `robots.ts` metadata JSON-LD (Disallow dashboard/login/register/api) |
| H21.5–H22 | Merge with A; full click path Sign up → every sidebar item |
| H22–H24 | **You own production deploy** + README (what’s demo vs real) |

### B cut list (strict — cut before stealing A work)

| P0 (never cut) | P1 | P2 (cut first) |
| --- | --- | --- |
| Auth + shell + all **9 module routes** with correct empty states | 4th tool polish | 12+ long blog essays |
| Blog index + MDX template + ≥8 posts | SEO landers beyond 1 | Real Stripe/OAuth |
| 2 calculators + selection | `/for/*` all 8 (ship template + 3 slugs min) | Pixel chart animation |
| Seeds + deploy | Creator profiles ≥20 | Agency multi-workspace product |

**Empty states that match screenshots count as done** for dashboard modules. Do not gold-plate.

**You do not own:** Home, `/creators` LP, MarketingNav, agencies, pricing/about/book.

---

## 3. Dependencies on A

- Until H1.5: code against **token names**; restyle when foundation lands.
- Import `CommandBar`, reuse `CTABand`/`Reveal` when available.
- Register query `?type=brand-agency|creator-agency` from A’s `/agencies` CTAs → banner on dashboard.

## 4. Risks

| Risk | Mitigation |
| --- | --- |
| Dashboard blows past H18 | Empty states only; no live LinkedIn |
| Rebuilding `/creators` LP | Forbidden — A’s job; you only build `[slug]` |
| Deploy at last minute | Preview deploys from H1 |
| Taking A’s home polish | Breaks 50/50 — refuse |
