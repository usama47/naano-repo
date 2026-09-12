export const reportsFaq = [
  {
    q: "Can I cite Naano's data in an article or report?",
    a: 'Yes — that is what these reports are for. Cite the specific report with a link, e.g. "Naano Index, n=239 sponsored-post bookings, June–August 2026 (naano.com/reports)". Every number is published with its sample size and time period; please carry both in the citation. Claims we attribute to third parties (Edelman, LinkedIn benchmarks) should be attributed to the original source, not to Naano.',
  },
  {
    q: "Where does the data come from?",
    a: "From anonymized, aggregated transactions and campaigns on the Naano marketplace — the B2B LinkedIn creator marketplace. No customer or creator is identifiable in any published number. Each report states its own sample, time window and known limitations; we publish the caveats alongside the findings.",
  },
  {
    q: "How often are the reports updated?",
    a: "Each report shows its publication date, and a visible dateModified when it is genuinely refreshed with new data — we do not bump dates for freshness. New editions ship when the underlying marketplace data reaches a sample size worth publishing.",
  },
];

export const reportsSameData = [
  { href: "/free-tools/sponsored-post-delivery-odds-estimator", label: "Sponsored Post Delivery Odds Estimator (free tool)" },
  { href: "/free-tools/linkedin-creator-worth-calculator", label: "LinkedIn Creator Worth Calculator (free tool)" },
  { href: "/blog/b2b-influencer-marketing-cost", label: "How much does B2B influencer marketing cost in 2026?" },
  { href: "/blog/how-much-charge-sponsored-linkedin-post", label: "How much should you charge for a sponsored LinkedIn post?" },
  { href: "/best-b2b-influencer-marketing-platforms-2026", label: "Best B2B influencer marketing platforms 2026 (ranked)" },
];

export const featuredReports = [
  {
    href: "/blog/linkedin-sponsored-post-price-index-2026",
    title: "LinkedIn Sponsored Post Price Index 2026",
    subtitle: "What sponsored LinkedIn posts actually cost, from real bookings",
    body: "Transacted prices from 239 sponsored-post bookings on the Naano marketplace between June and August 2026: median €84 per post for creators under 5K followers, €180 at 5–10K, €312 at 10–25K — against rate-card guides quoting $500–$2,500 for the same tiers. Includes price-spread analysis (a 25x spread inside a single follower tier), how much follower count actually explains price (~29%), and delivery odds by price level.",
    meta: "n=239 bookings · June–August 2026 · First-party transaction data",
  },
  {
    href: "/benchmarks/q2-2026",
    title: "Q2 2026 B2B Creator-Led Growth Benchmarks",
    subtitle: "CPL, CTR and conversion benchmarks from 312 B2B creator campaigns",
    body: "First-party benchmark dataset covering cost per qualified click, CTR, time-to-launch and conversion rates for B2B creator campaigns: 312 campaigns and 1,847 sponsored posts measured in Q1 2026, with per-vertical medians, full methodology, sample sizes and limitations. Historical dataset — measured under Naano's earlier pricing model and labeled as such; performance benchmarks remain valid as reference points.",
    meta: "n=312 campaigns · 1,847 posts · Q1 2026 data · Dataset schema",
  },
] as const;
