# Naano.com clone — overnight prompt queue

Do not skip any image. Source of truth, in this order:

1. Live site: https://naano.com/
2. Full-page PNGs `001`–`089` (there is no `013.png`; privacy is a PDF)
3. Scroll tiles for Home, Creators, Agencies

**Code:** `naano-web/` (Next.js App Router + TS + Tailwind)  
**Shots:** `C:\Users\PC\Downloads\Naano_Public_Screenshots\naano-public-screenshots\`  
**Status:** `QUEUE-STATUS.json` — increment `next` after each prompt.

## Shared rules (every prompt)

- Match the screenshot for that route: layout, copy, spacing, sky hero, pills, black CTAs, CommandBar, Cookies.
- Nav variants: default **Sign up**; `/creators` **Start earning**; `/agencies` **Choose your agency** (and hide How it works).
- Resources dropdown: Blog `/blog`, Free Tools `/free-tools`, Case study BlogSEO `/case-studies/blogseo`.
- Read listed PNGs with the Read tool before coding that slice.
- Do not stop for confirmation. Do not rebuild slices that are already `done` in `QUEUE-STATUS.json`.
- Prefer replacing the current generic marketplace sketch with Naano IA. Wrong routes (`/marketplace`, `/for-creators`, campaign dashboard) must become Naano routes.

---

## Prompt P00 — Foundation

Install/keep Tailwind tokens for sky `#d7eefc`–white, ink `#0b0b12`, electric blue `#2f6bff` (auth panel). Add `Container`, sky hero background, display heading class. Do not rewrite page copy yet.

**Images:** `sections/home/01.png`, `004-login.png`

---

## Prompt P01 — Marketing chrome

Build `MarketingNav`, `SiteFooter`, `CommandBar`, `CookieBar`, `FeedbackTab`. Mount in marketing layout.

**Images (all required):**

- `sections/home/01.png` `sections/home/19.png` `001-home.png`
- `sections/creators/01.png` `002-creators.png`
- `sections/agencies/01.png` `003-agencies.png`

Footer columns from `sections/home/19.png`: Product, Company, Press, Resources (two columns of blog/SEO links). CommandBar is the bottom-center pill. Cookies is the bottom-right black pill.

---

## Prompt P02 — Home `/` (For companies)

Rebuild `app/(site)/page.tsx` as a pixel clone of https://naano.com/

**Images (all required):** `001-home.png` and `sections/home/01.png` through `sections/home/19.png`

Sections in scroll order: nav+sky hero, logo marquee, Zmirov quote, marketplace UI, proof cards, how-it-works 5 steps (`#how-it-works`), BlogSEO case study, trusted logos, stats + creator posts, pricing €0 vs custom quote, FAQ, book CTA, footer.

---

## Prompt P03 — Creators LP `/creators`

**Images (all required):** `002-creators.png` and `sections/creators/01.png` through `sections/creators/13.png`  
Live: https://naano.com/creators  
Nav CTA = Start earning. Do not build `/creators/[slug]`.

---

## Prompt P04 — Agencies `/agencies`

**Images (all required):** `003-agencies.png` and `sections/agencies/01.png` through `sections/agencies/05.png`  
Live: https://naano.com/agencies  
Two workspace cards (brand agency vs creator/talent). CTAs to `/register?type=brand-agency` and `/register?type=creator-agency`.

---

## Prompt P05 — Auth

**Images (all required):** `004-login.png` `005-register.png` `031-login-forgot-password.png` `032-register--role-influencer.png` `033-register--role-saas.png`

Split white form + blue panel. LinkedIn/Google buttons can be visual stubs. Cookie session may stub to `/dashboard`.

---

## Prompt P06 — Blog index `/blog`

**Images (all required):** `006-blog.png`

---

## Prompt P07 — Blog MDX template + every article image

One article layout. Then create a page for **every** slug below. Transcribe structure from that PNG (title, sections, not a stub). Do not skip a file.

**Images (all required):**

`017-blog-b2b-influencer-marketing-cost.png`  
`018-blog-launch-b2b-linkedin-creator-campaign.png`  
`019-blog-linkedin-creator-marketplace-europe.png`  
`020-blog-how-to-pay-b2b-creators.png`  
`021-blog-linkedin-creator-marketplace-explained.png`  
`022-blog-what-is-a-b2b-creator-marketplace.png`  
`023-blog-creator-led-growth-b2b.png`  
`024-blog-linkedin-ads-vs-creator-led-cpl.png`  
`025-blog-nano-vs-macro-creators-b2b-ctr.png`  
`026-blog-b2b-influence-linkedin.png`  
`027-blog-founder-led-distribution-b2b-saas.png`  
`028-blog-naano-vs-alternatives.png`  
`034-blog-b2b-creator-campaign-tracking-template.png`  
`035-blog-linkedin-sponsored-post-usage-rights.png`  
`036-blog-how-to-find-brand-deals-on-linkedin.png`  
`037-blog-modash-alternative-b2b-linkedin.png`  
`038-blog-ai-search-cites-people-not-brands.png`  
`039-blog-how-long-b2b-creator-campaign-takes.png`  
`040-blog-sponsored-post-brief-to-published-playbook.png`  
`041-blog-naano-vs-passionfroot.png`  
`042-blog-b2b-creator-campaigns-europe-answers.png`  
`043-blog-linkedin-creator-discount-trap.png`  
`044-blog-linkedin-sponsored-post-price-index-2026.png`  
`045-blog-how-much-charge-sponsored-linkedin-post.png`  
`046-blog-how-to-choose-b2b-influencer-marketing-platform.png`  
`047-blog-linkedin-engagement-rate-benchmarks.png`  
`048-blog-linkedin-thought-leader-ads-vs-creator-posts.png`  
`049-blog-sponsored-linkedin-post-cost-b2b.png`  
`050-blog-best-b2b-creator-marketplace.png`  
`051-blog-get-paid-for-linkedin-posts-creator.png`  
`052-blog-naano-vs-kolsquare.png`  
`053-blog-naano-vs-skeepers.png`  
`054-blog-naano-vs-traackr.png`  
`055-blog-linkedin-creator-marketplace-vs-naano.png`  
`056-blog-creator-led-growth-90-day-playbook.png`  
`057-blog-forecast-b2b-pipeline-creator-cpc.png`  
`058-blog-linkedin-dwell-time-b2b-creators.png`  
`059-blog-cpc-vs-flat-fee-b2b-creator-sponsorship.png`  
`060-blog-creator-led-growth-vs-cold-outbound-b2b.png`  
`061-blog-linkedin-outbound-creator-stack.png`  
`062-blog-micro-creator-portfolio-b2b-saas.png`  
`063-blog-b2b-influencer-agency-vs-platform.png`  
`064-blog-how-to-find-b2b-creators-linkedin.png`  
`065-blog-employee-advocacy-vs-creator-led-growth.png`  
`066-blog-measure-roi-b2b-creator-marketing-linkedin.png`  
`067-blog-founder-diy-vs-hiring-creators.png`  
`068-blog-how-to-write-b2b-sponsored-post.png`  
`069-blog-linkedin-algorithm-2026-creators-vs-brands.png`  
`070-blog-naano-vs-favikon.png`  
`071-blog-naano-vs-gaggleamp.png`  
`072-blog-naano-vs-influitive.png`  
`073-blog-naano-vs-lemlist.png`  
`074-blog-naano-vs-upfluence.png`

---

## Prompt P08 — Free tools

**Images (all required):** `007-free-tools.png` `077-free-tools-linkedin-creator-worth-calculator.png` `078-free-tools-linkedin-engagement-rate-calculator.png` `079-free-tools-sponsored-post-delivery-odds-estimator.png` `080-free-tools-creator-campaign-budget-planner.png`

Hub + 4 interactive calculators.

---

## Prompt P09 — Case study BlogSEO

**Images (all required):** `008-case-studies-blogseo.png`

---

## Prompt P10 — Book `/book`

**Images (all required):** `009-book.png`

---

## Prompt P11 — Reports + benchmarks

**Images (all required):** `010-reports.png` `075-benchmarks-q2-2026.png`

---

## Prompt P12 — Brand pages

**Images (all required):** `011-about.png` `012-help.png` `014-terms.png` `081-pricing.png`  
**013 privacy:** no PNG (PDF failed). Ship `/privacy` as a short HTML page that links to the idea of PRIVACY.pdf — do not skip the route.

---

## Prompt P13 — SEO landers

**Images (all required):** `015-linkedin-creator-marketplace.png` `016-best-b2b-influencer-marketing-platforms-2026.png`

---

## Prompt P14 — Agency gates

**Images (all required):** `029-agency.png` `030-talent-agency.png`

---

## Prompt P15 — Selection

**Images (all required):** `076-selection.png` plus `POST /api/selection` success state.

---

## Prompt P16 — Vertical landers `/for/*`

**Images (all required):** `082-for-sales-tech.png` `083-for-revops.png` `084-for-devtools.png` `085-for-product.png` `086-for-hr-tech.png` `087-for-fintech.png` `088-for-marketing-ops.png` `089-for-vertical-saas.png`

Shared template, unique copy per PNG.

---

## Full capture index (do not skip)

SHOTS root: `C:\Users\PC\Downloads\Naano_Public_Screenshots\naano-public-screenshots\`

### Section tiles (same pages as 001–003)

Home: `sections/home/01.png` … `19.png`  
Creators: `sections/creators/01.png` … `13.png`  
Agencies: `sections/agencies/01.png` … `05.png`

### Page files

| # | URL | File | Status |
|---|-----|------|--------|
| 001 | https://naano.com/ | `001-home.png` | captured |
| 002 | https://naano.com/creators | `002-creators.png` | captured |
| 003 | https://naano.com/agencies | `003-agencies.png` | captured |
| 004 | https://naano.com/login | `004-login.png` | captured |
| 005 | https://naano.com/register | `005-register.png` | captured |
| 006 | https://naano.com/blog | `006-blog.png` | captured |
| 007 | https://naano.com/free-tools | `007-free-tools.png` | captured |
| 008 | https://naano.com/case-studies/blogseo | `008-case-studies-blogseo.png` | captured |
| 009 | https://naano.com/book | `009-book.png` | captured |
| 010 | https://naano.com/reports | `010-reports.png` | captured |
| 011 | https://naano.com/about | `011-about.png` | captured |
| 012 | https://naano.com/help | `012-help.png` | captured |
| 013 | https://naano.com/privacy | `(NO IMAGE â€” unavailable PDF rendering)` | unavailable PDF rendering |
| 014 | https://naano.com/terms | `014-terms.png` | supplementary PDF viewer viewport only; not all document pages |
| 015 | https://naano.com/linkedin-creator-marketplace | `015-linkedin-creator-marketplace.png` | captured |
| 016 | https://naano.com/best-b2b-influencer-marketing-platforms-2026 | `016-best-b2b-influencer-marketing-platforms-2026.png` | captured |
| 017 | https://naano.com/blog/b2b-influencer-marketing-cost | `017-blog-b2b-influencer-marketing-cost.png` | captured |
| 018 | https://naano.com/blog/launch-b2b-linkedin-creator-campaign | `018-blog-launch-b2b-linkedin-creator-campaign.png` | captured |
| 019 | https://naano.com/blog/linkedin-creator-marketplace-europe | `019-blog-linkedin-creator-marketplace-europe.png` | captured |
| 020 | https://naano.com/blog/how-to-pay-b2b-creators | `020-blog-how-to-pay-b2b-creators.png` | captured |
| 021 | https://naano.com/blog/linkedin-creator-marketplace-explained | `021-blog-linkedin-creator-marketplace-explained.png` | captured |
| 022 | https://naano.com/blog/what-is-a-b2b-creator-marketplace | `022-blog-what-is-a-b2b-creator-marketplace.png` | captured |
| 023 | https://naano.com/blog/creator-led-growth-b2b | `023-blog-creator-led-growth-b2b.png` | captured |
| 024 | https://naano.com/blog/linkedin-ads-vs-creator-led-cpl | `024-blog-linkedin-ads-vs-creator-led-cpl.png` | captured |
| 025 | https://naano.com/blog/nano-vs-macro-creators-b2b-ctr | `025-blog-nano-vs-macro-creators-b2b-ctr.png` | captured |
| 026 | https://naano.com/blog/b2b-influence-linkedin | `026-blog-b2b-influence-linkedin.png` | captured |
| 027 | https://naano.com/blog/founder-led-distribution-b2b-saas | `027-blog-founder-led-distribution-b2b-saas.png` | captured |
| 028 | https://naano.com/blog/naano-vs-alternatives | `028-blog-naano-vs-alternatives.png` | captured |
| 029 | https://naano.com/agency | `029-agency.png` | public account entry screen; private workspace not captured |
| 030 | https://naano.com/talent-agency | `030-talent-agency.png` | public account entry screen; private workspace not captured |
| 031 | https://naano.com/login/forgot-password | `031-login-forgot-password.png` | captured |
| 032 | https://naano.com/register?role=influencer | `032-register--role-influencer.png` | captured |
| 033 | https://naano.com/register?role=saas | `033-register--role-saas.png` | captured |
| 034 | https://naano.com/blog/b2b-creator-campaign-tracking-template | `034-blog-b2b-creator-campaign-tracking-template.png` | captured |
| 035 | https://naano.com/blog/linkedin-sponsored-post-usage-rights | `035-blog-linkedin-sponsored-post-usage-rights.png` | captured |
| 036 | https://naano.com/blog/how-to-find-brand-deals-on-linkedin | `036-blog-how-to-find-brand-deals-on-linkedin.png` | captured |
| 037 | https://naano.com/blog/modash-alternative-b2b-linkedin | `037-blog-modash-alternative-b2b-linkedin.png` | captured |
| 038 | https://naano.com/blog/ai-search-cites-people-not-brands | `038-blog-ai-search-cites-people-not-brands.png` | captured |
| 039 | https://naano.com/blog/how-long-b2b-creator-campaign-takes | `039-blog-how-long-b2b-creator-campaign-takes.png` | captured |
| 040 | https://naano.com/blog/sponsored-post-brief-to-published-playbook | `040-blog-sponsored-post-brief-to-published-playbook.png` | captured |
| 041 | https://naano.com/blog/naano-vs-passionfroot | `041-blog-naano-vs-passionfroot.png` | captured |
| 042 | https://naano.com/blog/b2b-creator-campaigns-europe-answers | `042-blog-b2b-creator-campaigns-europe-answers.png` | captured |
| 043 | https://naano.com/blog/linkedin-creator-discount-trap | `043-blog-linkedin-creator-discount-trap.png` | captured |
| 044 | https://naano.com/blog/linkedin-sponsored-post-price-index-2026 | `044-blog-linkedin-sponsored-post-price-index-2026.png` | captured |
| 045 | https://naano.com/blog/how-much-charge-sponsored-linkedin-post | `045-blog-how-much-charge-sponsored-linkedin-post.png` | captured |
| 046 | https://naano.com/blog/how-to-choose-b2b-influencer-marketing-platform | `046-blog-how-to-choose-b2b-influencer-marketing-platform.png` | captured |
| 047 | https://naano.com/blog/linkedin-engagement-rate-benchmarks | `047-blog-linkedin-engagement-rate-benchmarks.png` | captured |
| 048 | https://naano.com/blog/linkedin-thought-leader-ads-vs-creator-posts | `048-blog-linkedin-thought-leader-ads-vs-creator-posts.png` | captured |
| 049 | https://naano.com/blog/sponsored-linkedin-post-cost-b2b | `049-blog-sponsored-linkedin-post-cost-b2b.png` | captured |
| 050 | https://naano.com/blog/best-b2b-creator-marketplace | `050-blog-best-b2b-creator-marketplace.png` | captured |
| 051 | https://naano.com/blog/get-paid-for-linkedin-posts-creator | `051-blog-get-paid-for-linkedin-posts-creator.png` | captured |
| 052 | https://naano.com/blog/naano-vs-kolsquare | `052-blog-naano-vs-kolsquare.png` | captured |
| 053 | https://naano.com/blog/naano-vs-skeepers | `053-blog-naano-vs-skeepers.png` | captured |
| 054 | https://naano.com/blog/naano-vs-traackr | `054-blog-naano-vs-traackr.png` | captured |
| 055 | https://naano.com/blog/linkedin-creator-marketplace-vs-naano | `055-blog-linkedin-creator-marketplace-vs-naano.png` | captured |
| 056 | https://naano.com/blog/creator-led-growth-90-day-playbook | `056-blog-creator-led-growth-90-day-playbook.png` | captured |
| 057 | https://naano.com/blog/forecast-b2b-pipeline-creator-cpc | `057-blog-forecast-b2b-pipeline-creator-cpc.png` | captured |
| 058 | https://naano.com/blog/linkedin-dwell-time-b2b-creators | `058-blog-linkedin-dwell-time-b2b-creators.png` | captured |
| 059 | https://naano.com/blog/cpc-vs-flat-fee-b2b-creator-sponsorship | `059-blog-cpc-vs-flat-fee-b2b-creator-sponsorship.png` | captured |
| 060 | https://naano.com/blog/creator-led-growth-vs-cold-outbound-b2b | `060-blog-creator-led-growth-vs-cold-outbound-b2b.png` | captured |
| 061 | https://naano.com/blog/linkedin-outbound-creator-stack | `061-blog-linkedin-outbound-creator-stack.png` | captured |
| 062 | https://naano.com/blog/micro-creator-portfolio-b2b-saas | `062-blog-micro-creator-portfolio-b2b-saas.png` | captured |
| 063 | https://naano.com/blog/b2b-influencer-agency-vs-platform | `063-blog-b2b-influencer-agency-vs-platform.png` | captured |
| 064 | https://naano.com/blog/how-to-find-b2b-creators-linkedin | `064-blog-how-to-find-b2b-creators-linkedin.png` | captured |
| 065 | https://naano.com/blog/employee-advocacy-vs-creator-led-growth | `065-blog-employee-advocacy-vs-creator-led-growth.png` | captured |
| 066 | https://naano.com/blog/measure-roi-b2b-creator-marketing-linkedin | `066-blog-measure-roi-b2b-creator-marketing-linkedin.png` | captured |
| 067 | https://naano.com/blog/founder-diy-vs-hiring-creators | `067-blog-founder-diy-vs-hiring-creators.png` | captured |
| 068 | https://naano.com/blog/how-to-write-b2b-sponsored-post | `068-blog-how-to-write-b2b-sponsored-post.png` | captured |
| 069 | https://naano.com/blog/linkedin-algorithm-2026-creators-vs-brands | `069-blog-linkedin-algorithm-2026-creators-vs-brands.png` | captured |
| 070 | https://naano.com/blog/naano-vs-favikon | `070-blog-naano-vs-favikon.png` | captured |
| 071 | https://naano.com/blog/naano-vs-gaggleamp | `071-blog-naano-vs-gaggleamp.png` | captured |
| 072 | https://naano.com/blog/naano-vs-influitive | `072-blog-naano-vs-influitive.png` | captured |
| 073 | https://naano.com/blog/naano-vs-lemlist | `073-blog-naano-vs-lemlist.png` | captured |
| 074 | https://naano.com/blog/naano-vs-upfluence | `074-blog-naano-vs-upfluence.png` | captured |
| 075 | https://naano.com/benchmarks/q2-2026 | `075-benchmarks-q2-2026.png` | captured |
| 076 | https://naano.com/selection | `076-selection.png` | captured |
| 077 | https://naano.com/free-tools/linkedin-creator-worth-calculator | `077-free-tools-linkedin-creator-worth-calculator.png` | captured |
| 078 | https://naano.com/free-tools/linkedin-engagement-rate-calculator | `078-free-tools-linkedin-engagement-rate-calculator.png` | captured |
| 079 | https://naano.com/free-tools/sponsored-post-delivery-odds-estimator | `079-free-tools-sponsored-post-delivery-odds-estimator.png` | captured |
| 080 | https://naano.com/free-tools/creator-campaign-budget-planner | `080-free-tools-creator-campaign-budget-planner.png` | captured |
| 081 | https://naano.com/pricing | `081-pricing.png` | captured |
| 082 | https://naano.com/for/sales-tech | `082-for-sales-tech.png` | captured |
| 083 | https://naano.com/for/revops | `083-for-revops.png` | captured |
| 084 | https://naano.com/for/devtools | `084-for-devtools.png` | captured |
| 085 | https://naano.com/for/product | `085-for-product.png` | captured |
| 086 | https://naano.com/for/hr-tech | `086-for-hr-tech.png` | captured |
| 087 | https://naano.com/for/fintech | `087-for-fintech.png` | captured |
| 088 | https://naano.com/for/marketing-ops | `088-for-marketing-ops.png` | captured |
| 089 | https://naano.com/for/vertical-saas | `089-for-vertical-saas.png` | captured |

Also use `preview.jpg` as a gallery thumbnail only — not a route.

Not in this archive (cannot pixel-match until screenshots exist): logged-in dashboard, FR locale, mobile menus, open Resources dropdown.
