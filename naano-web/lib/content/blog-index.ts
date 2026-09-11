import { allArticles, type Article } from "./articles";

export const BLOG_TOPICS = [
  "CPL economics",
  "LinkedIn micro-creators",
  "Naano vs alternatives",
  "Creator-led growth",
  "LinkedIn algorithm",
  "Founder-led distribution",
] as const;

export const FEATURED_BLOG_SLUG = "b2b-creator-campaign-tracking-template";

type Cover = { gradient: string; topic: string };

export const BLOG_COVERS: Record<string, Cover> = {
  "b2b-creator-campaign-tracking-template": { gradient: "#22C55E 0%, #0A66C2 100%", topic: "CPL economics" },
  "linkedin-sponsored-post-usage-rights": { gradient: "#0A66C2 0%, #22D3EE 100%", topic: "LinkedIn micro-creators" },
  "how-to-find-brand-deals-on-linkedin": { gradient: "#0A66C2 0%, #22D3EE 100%", topic: "LinkedIn micro-creators" },
  "modash-alternative-b2b-linkedin": { gradient: "#111827 0%, #1652F0 100%", topic: "Naano vs alternatives" },
  "ai-search-cites-people-not-brands": { gradient: "#1652F0 0%, #0A66C2 100%", topic: "Creator-led growth" },
  "how-long-b2b-creator-campaign-takes": { gradient: "#22C55E 0%, #0A66C2 100%", topic: "CPL economics" },
  "sponsored-post-brief-to-published-playbook": { gradient: "#0A66C2 0%, #22D3EE 100%", topic: "LinkedIn micro-creators" },
  "naano-vs-passionfroot": { gradient: "#111827 0%, #1652F0 100%", topic: "Naano vs alternatives" },
  "b2b-creator-campaigns-europe-answers": { gradient: "#111827 0%, #1652F0 100%", topic: "Naano vs alternatives" },
  "linkedin-creator-discount-trap": { gradient: "#0A66C2 0%, #22D3EE 100%", topic: "LinkedIn micro-creators" },
  "linkedin-sponsored-post-price-index-2026": { gradient: "#22C55E 0%, #0A66C2 100%", topic: "CPL economics" },
  "how-much-charge-sponsored-linkedin-post": { gradient: "#0A66C2 0%, #22D3EE 100%", topic: "LinkedIn micro-creators" },
  "how-to-choose-b2b-influencer-marketing-platform": { gradient: "#111827 0%, #1652F0 100%", topic: "Naano vs alternatives" },
  "linkedin-engagement-rate-benchmarks": { gradient: "#0A66C2 0%, #22D3EE 100%", topic: "LinkedIn micro-creators" },
  "linkedin-thought-leader-ads-vs-creator-posts": { gradient: "#22C55E 0%, #0A66C2 100%", topic: "CPL economics" },
  "sponsored-linkedin-post-cost-b2b": { gradient: "#22C55E 0%, #0A66C2 100%", topic: "CPL economics" },
  "best-b2b-creator-marketplace": { gradient: "#111827 0%, #1652F0 100%", topic: "Naano vs alternatives" },
  "get-paid-for-linkedin-posts-creator": { gradient: "#0A66C2 0%, #22D3EE 100%", topic: "LinkedIn micro-creators" },
  "naano-vs-kolsquare": { gradient: "#111827 0%, #1652F0 100%", topic: "Naano vs alternatives" },
  "naano-vs-skeepers": { gradient: "#111827 0%, #1652F0 100%", topic: "Naano vs alternatives" },
  "naano-vs-traackr": { gradient: "#111827 0%, #1652F0 100%", topic: "Naano vs alternatives" },
  "linkedin-creator-marketplace-vs-naano": { gradient: "#111827 0%, #1652F0 100%", topic: "Naano vs alternatives" },
  "creator-led-growth-90-day-playbook": { gradient: "#1652F0 0%, #0A66C2 100%", topic: "Creator-led growth" },
  "forecast-b2b-pipeline-creator-cpc": { gradient: "#22C55E 0%, #0A66C2 100%", topic: "CPL economics" },
  "linkedin-dwell-time-b2b-creators": { gradient: "#7C3AED 0%, #0A66C2 100%", topic: "LinkedIn algorithm" },
  "cpc-vs-flat-fee-b2b-creator-sponsorship": { gradient: "#22C55E 0%, #0A66C2 100%", topic: "CPL economics" },
  "creator-led-growth-vs-cold-outbound-b2b": { gradient: "#1652F0 0%, #0A66C2 100%", topic: "Creator-led growth" },
  "linkedin-outbound-creator-stack": { gradient: "#1652F0 0%, #0A66C2 100%", topic: "Creator-led growth" },
  "micro-creator-portfolio-b2b-saas": { gradient: "#0A66C2 0%, #22D3EE 100%", topic: "LinkedIn micro-creators" },
  "b2b-influencer-agency-vs-platform": { gradient: "#111827 0%, #1652F0 100%", topic: "Naano vs alternatives" },
  "b2b-influencer-marketing-cost": { gradient: "#22C55E 0%, #0A66C2 100%", topic: "CPL economics" },
  "how-to-find-b2b-creators-linkedin": { gradient: "#0A66C2 0%, #22D3EE 100%", topic: "LinkedIn micro-creators" },
  "how-to-pay-b2b-creators": { gradient: "#22C55E 0%, #0A66C2 100%", topic: "CPL economics" },
  "linkedin-creator-marketplace-europe": { gradient: "#111827 0%, #1652F0 100%", topic: "Naano vs alternatives" },
  "linkedin-creator-marketplace-explained": { gradient: "#111827 0%, #1652F0 100%", topic: "Naano vs alternatives" },
  "what-is-a-b2b-creator-marketplace": { gradient: "#1652F0 0%, #0A66C2 100%", topic: "Creator-led growth" },
  "b2b-influence-linkedin": { gradient: "#0A66C2 0%, #22D3EE 100%", topic: "LinkedIn micro-creators" },
  "launch-b2b-linkedin-creator-campaign": { gradient: "#1652F0 0%, #0A66C2 100%", topic: "Creator-led growth" },
  "employee-advocacy-vs-creator-led-growth": { gradient: "#111827 0%, #1652F0 100%", topic: "Naano vs alternatives" },
  "measure-roi-b2b-creator-marketing-linkedin": { gradient: "#22C55E 0%, #0A66C2 100%", topic: "CPL economics" },
  "creator-led-growth-b2b": { gradient: "#1652F0 0%, #0A66C2 100%", topic: "Creator-led growth" },
  "founder-diy-vs-hiring-creators": { gradient: "#F59E0B 0%, #1652F0 100%", topic: "Founder-led distribution" },
  "founder-led-distribution-b2b-saas": { gradient: "#F59E0B 0%, #1652F0 100%", topic: "Founder-led distribution" },
  "how-to-write-b2b-sponsored-post": { gradient: "#0A66C2 0%, #22D3EE 100%", topic: "LinkedIn micro-creators" },
  "linkedin-ads-vs-creator-led-cpl": { gradient: "#22C55E 0%, #0A66C2 100%", topic: "CPL economics" },
  "linkedin-algorithm-2026-creators-vs-brands": { gradient: "#7C3AED 0%, #0A66C2 100%", topic: "LinkedIn algorithm" },
  "naano-vs-alternatives": { gradient: "#111827 0%, #1652F0 100%", topic: "Naano vs alternatives" },
  "naano-vs-favikon": { gradient: "#111827 0%, #1652F0 100%", topic: "Naano vs alternatives" },
  "naano-vs-gaggleamp": { gradient: "#111827 0%, #1652F0 100%", topic: "Naano vs alternatives" },
  "naano-vs-influitive": { gradient: "#111827 0%, #1652F0 100%", topic: "Naano vs alternatives" },
  "naano-vs-lemlist": { gradient: "#111827 0%, #1652F0 100%", topic: "Naano vs alternatives" },
  "naano-vs-upfluence": { gradient: "#111827 0%, #1652F0 100%", topic: "Naano vs alternatives" },
  "nano-vs-macro-creators-b2b-ctr": { gradient: "#0A66C2 0%, #22D3EE 100%", topic: "LinkedIn micro-creators" },
};

export const BLOG_INDEX_ORDER = Object.keys(BLOG_COVERS);

const FALLBACK_COVERS: Cover[] = [
  { gradient: "#0A66C2 0%, #22D3EE 100%", topic: "LinkedIn micro-creators" },
  { gradient: "#22C55E 0%, #0A66C2 100%", topic: "CPL economics" },
  { gradient: "#111827 0%, #1652F0 100%", topic: "Naano vs alternatives" },
  { gradient: "#1652F0 0%, #0A66C2 100%", topic: "Creator-led growth" },
  { gradient: "#7C3AED 0%, #0A66C2 100%", topic: "LinkedIn algorithm" },
  { gradient: "#F59E0B 0%, #1652F0 100%", topic: "Founder-led distribution" },
];

export function coverFor(slug: string): Cover {
  if (BLOG_COVERS[slug]) return BLOG_COVERS[slug];
  let hash = 0;
  for (const char of slug) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return FALLBACK_COVERS[hash % FALLBACK_COVERS.length];
}

export function topicFor(slug: string, fallback: string) {
  return coverFor(slug).topic || fallback;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

export function formatBlogDate(value: string) {
  const parsed = Date.parse(value.replace(/\bSept\b/, "Sep"));
  if (!Number.isNaN(parsed)) {
    const date = new Date(parsed);
    return `${date.getUTCDate()} ${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
  }
  return value
    .replace("January", "Jan")
    .replace("February", "Feb")
    .replace("March", "Mar")
    .replace("April", "Apr")
    .replace("June", "Jun")
    .replace("July", "Jul")
    .replace("August", "Aug")
    .replace("September", "Sept")
    .replace("October", "Oct")
    .replace("November", "Nov")
    .replace("December", "Dec");
}

export function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function orderedBlogArticles(): Article[] {
  const bySlug = new Map(allArticles().map((article) => [article.slug, article]));
  const ordered: Article[] = [];
  for (const slug of BLOG_INDEX_ORDER) {
    const article = bySlug.get(slug);
    if (article) {
      ordered.push(article);
      bySlug.delete(slug);
    }
  }
  ordered.push(...bySlug.values());
  return ordered;
}
