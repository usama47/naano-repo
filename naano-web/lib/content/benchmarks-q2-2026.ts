export const benchToc = [
  { href: "#executive-summary", label: "Executive summary" },
  { href: "#methodology", label: "Methodology" },
  { href: "#headline-benchmarks", label: "Headline benchmarks" },
  { href: "#cpl-by-vertical", label: "CPL by vertical" },
  { href: "#ctr-by-creator-tier", label: "CTR by creator tier" },
  { href: "#time-to-launch", label: "Time-to-launch distribution" },
  { href: "#conversion-benchmarks", label: "Conversion benchmarks" },
  { href: "#channel-mix", label: "Channel mix observations" },
  { href: "#limitations", label: "Limitations and caveats" },
  { href: "#how-to-cite", label: "How to cite" },
  { href: "#next-steps", label: "Next steps" },
] as const;

export const cplVerticals = [
  { href: "/for/sales-tech", name: "Sales-tech", p10: "€11", median: "€16", p90: "€23", n: 58 },
  { href: "/for/revops", name: "RevOps", p10: "€12", median: "€17", p90: "€24", n: 41 },
  { href: "/for/devtools", name: "Devtools", p10: "€13", median: "€19", p90: "€26", n: 47 },
  { href: "/for/product", name: "Product", p10: "€12", median: "€18", p90: "€25", n: 39 },
  { href: "/for/hr-tech", name: "HR-tech", p10: "€14", median: "€20", p90: "€27", n: 34 },
  { href: "/for/fintech", name: "Fintech", p10: "€13", median: "€19", p90: "€26", n: 29 },
  { href: "/for/marketing-ops", name: "Marketing-ops", p10: "€10", median: "€16", p90: "€22", n: 36 },
  { href: "/for/vertical-saas", name: "Vertical SaaS", p10: "€14", median: "€21", p90: "€28", n: 28 },
] as const;

export const cplNotes: { name: string; n: number; body: string }[] = [
  {
    name: "Sales-tech",
    n: 58,
    body: "Sales-tech is Naano's deepest creator pool, with dense overlap between AE, sales-leader, and SDR audiences. High creator supply and a well-defined buyer persona compress CPL well below the platform mean. CTR remains strong because creators speak directly to readers' day-to-day pipeline pain.",
  },
  {
    name: "RevOps",
    n: 41,
    body: "RevOps audiences are smaller but extremely high-intent. Creators with 2k–6k followers reliably outperform paid retargeting on click quality. Median CPL sits just below platform average; the long tail (€24) reflects scarcer creators in vertical-specific RevOps niches like usage-based pricing or PLG ops.",
  },
  {
    name: "Devtools",
    n: 47,
    body: "Devtools campaigns trend slightly above the platform mean because of two effects: technical content takes longer to draft (raising creator pricing) and engineering audiences click more deliberately (lower raw CTR offsetting strong qualification). Conversion-to-demo on devtools clicks is the highest of any vertical.",
  },
  {
    name: "Product",
    n: 39,
    body: "PMs are a generalist audience reachable through many adjacent niches (research, analytics, design). Median CPL aligns with the platform mean. Variance is moderate because creator supply is broad without being deep in any single sub-vertical.",
  },
  {
    name: "HR-tech",
    n: 34,
    body: "HR-tech sits above the platform mean. Creator supply is thinner than in sales/RevOps and the buying committee is wider, which pushes both creator pricing and click filtering up. We expect this gap to narrow in H2 2026 as we onboard more People Ops creators.",
  },
  {
    name: "Fintech",
    n: 29,
    body: "Fintech CPL hovers slightly above the mean. Compliance constraints on creator copy lengthen review cycles, and creators charge a small premium for regulated content. Click quality (time-on-site) is among the strongest on platform.",
  },
  {
    name: "Marketing-ops",
    n: 36,
    body: "Marketing-ops is the cheapest vertical on Naano in Q1 2026. Dense creator supply (martech analysts, demand-gen leads, lifecycle marketers) and a self-selecting practitioner audience drive both CTR and CPL into favorable territory.",
  },
  {
    name: "Vertical SaaS",
    n: 28,
    body: "Vertical SaaS (legal-tech, construction-tech, insurance-tech, etc.) is the most expensive cluster. Creator supply is sparse by definition, very few LinkedIn micro-creators speak natively to a niche industry, so creator pricing rises and average CPL trends ~15% above the platform mean.",
  },
];

export function td(kind: "body" | "value" | "muted" | "green" | "label" = "body") {
  const tones = {
    body: "text-[#374151]",
    value: "font-medium text-[#111827]",
    muted: "text-[#6B7280]",
    green: "font-medium text-[#1A7F4B]",
    label: "font-medium text-[#111827]",
  };
  return `border-b border-[#F3F4F6] px-4 py-3 align-top ${tones[kind]}`;
}
