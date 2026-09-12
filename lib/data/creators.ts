import type { Creator, Network } from "@/lib/types";

export const TOPICS = [
  "Sales & GTM",
  "AI & Automation",
  "SaaS & Product",
  "Marketing & Brand",
  "Data & Analytics",
  "HR & Talent",
  "Finance & Ops",
  "Cybersecurity",
] as const;

export const NETWORK_LABELS: Record<Network, string> = {
  linkedin: "LinkedIn",
  x: "X",
  youtube: "YouTube",
  newsletter: "Newsletter",
};

type Seed = {
  name: string;
  headline: string;
  topics: string[];
  country: string;
  countryCode: string;
  languages: string[];
  networks: Network[];
  followers: number;
  pricePerPost: number;
  engagementRate: number;
  fit: number;
  bio: string;
  posts: [string, string, string];
};

const seeds: Seed[] = [
  {
    name: "Elena Marchetti",
    headline: "VP Sales at a Series C RevOps platform",
    topics: ["Sales & GTM", "Data & Analytics"],
    country: "Italy",
    countryCode: "IT",
    languages: ["English", "Italian"],
    networks: ["linkedin", "newsletter"],
    followers: 41200,
    pricePerPost: 640,
    engagementRate: 3.8,
    fit: 94,
    bio: "Writes about pipeline hygiene and forecast accuracy for mid-market sales teams. Her audience is mostly sales leadership at 50–500 person companies, which makes her a strong fit for RevOps and CRM tooling.",
    posts: [
      "The forecast call is not the problem. The 40 stale opportunities nobody wants to close-lose are the problem.",
      "We cut our sales cycle by 19 days by deleting three stages from the pipeline. Fewer stages, cleaner data.",
      "Every rep I have coached who missed quota had the same tell: too many open deals, not too few.",
    ],
  },
  {
    name: "Tobias Hansen",
    headline: "Building AI agents for back-office teams",
    topics: ["AI & Automation", "Finance & Ops"],
    country: "Denmark",
    countryCode: "DK",
    languages: ["English", "Danish"],
    networks: ["linkedin", "x"],
    followers: 18700,
    pricePerPost: 320,
    engagementRate: 5.1,
    fit: 91,
    bio: "Ships weekly teardowns of real automation workflows. Technical enough for practitioners, plain enough for the finance director who signs the invoice.",
    posts: [
      "I replaced our invoice triage with an agent last quarter. Here is the exact workflow, including the parts that broke.",
      "Most AI pilots fail because nobody owns the exception path. Automate the happy path, staff the edge cases.",
      "Three questions to ask before you buy an AI tool for your finance team.",
    ],
  },
  {
    name: "Priya Raghunathan",
    headline: "Product-led growth advisor, ex-Head of Product",
    topics: ["SaaS & Product", "Marketing & Brand"],
    country: "United Kingdom",
    countryCode: "GB",
    languages: ["English"],
    networks: ["linkedin", "youtube"],
    followers: 87400,
    pricePerPost: 1250,
    engagementRate: 2.9,
    fit: 88,
    bio: "One of the larger PLG voices in Europe. Long-form breakdowns of onboarding funnels with screenshots, which converts well for product analytics and activation tools.",
    posts: [
      "Your onboarding is not too long. It asks for commitment before it has shown value.",
      "I audited 40 SaaS trials. The ones that converted had a first-session win under four minutes.",
      "Free trial vs freemium is the wrong debate. Pick based on how quickly your product proves itself.",
    ],
  },
  {
    name: "Marcus Obi",
    headline: "Demand gen lead, writes about B2B paid media",
    topics: ["Marketing & Brand", "Data & Analytics"],
    country: "Germany",
    countryCode: "DE",
    languages: ["English", "German"],
    networks: ["linkedin"],
    followers: 9300,
    pricePerPost: 145,
    engagementRate: 6.4,
    fit: 86,
    bio: "Small but unusually engaged audience of demand gen practitioners. Good entry point for testing a message before spending on larger creators.",
    posts: [
      "We spent 60k on LinkedIn ads last year. The winning creative was a screenshot of a customer complaint.",
      "Attribution will never be perfect. Pick one model, write it down, stop relitigating it every quarter.",
      "Your CPL went down and your pipeline went with it. Congratulations on optimising for the wrong number.",
    ],
  },
  {
    name: "Camille Royer",
    headline: "Founder, boutique B2B content studio",
    topics: ["Marketing & Brand", "SaaS & Product"],
    country: "France",
    countryCode: "FR",
    languages: ["French", "English"],
    networks: ["linkedin", "newsletter"],
    followers: 33500,
    pricePerPost: 480,
    engagementRate: 4.2,
    fit: 84,
    bio: "Publishes in French and English to a marketing-leadership audience across France and Benelux. Strong pick for localised launches.",
    posts: [
      "Your content is not underperforming. It is written for your competitors, not your buyers.",
      "A 30-day LinkedIn system for founders who hate posting, with the templates I actually use.",
      "The best performing B2B posts this year were not thought leadership. They were receipts.",
    ],
  },
  {
    name: "Daniel Okafor",
    headline: "Security engineer turned educator",
    topics: ["Cybersecurity", "AI & Automation"],
    country: "Ireland",
    countryCode: "IE",
    languages: ["English"],
    networks: ["linkedin", "youtube"],
    followers: 52800,
    pricePerPost: 890,
    engagementRate: 3.3,
    fit: 79,
    bio: "Explains security posture to engineering managers without the vendor vocabulary. Reaches practitioners who influence tooling decisions.",
    posts: [
      "Nobody gets breached because they lacked a dashboard. They get breached because an offboarding ticket sat open.",
      "SOC 2 is a floor, not a strategy. Here is what auditors never ask about.",
      "I ran a phishing simulation on my own team. Our head of security clicked it.",
    ],
  },
  {
    name: "Sofia Lindqvist",
    headline: "Talent partner, hiring systems for scale-ups",
    topics: ["HR & Talent"],
    country: "Sweden",
    countryCode: "SE",
    languages: ["English", "Swedish"],
    networks: ["linkedin"],
    followers: 24100,
    pricePerPost: 390,
    engagementRate: 4.7,
    fit: 76,
    bio: "Audience is heavily weighted to founders and heads of people at Nordic scale-ups. Reliable performer for HR tech and recruiting tools.",
    posts: [
      "Your take-home assignment is losing you senior candidates. They have options and your process has friction.",
      "We filled 14 roles in a quarter with a two-stage process. Here is what we cut.",
      "Stop writing job descriptions. Write the first 90 days instead.",
    ],
  },
  {
    name: "Rahul Menon",
    headline: "Analytics engineering, dbt and warehouse patterns",
    topics: ["Data & Analytics", "AI & Automation"],
    country: "Netherlands",
    countryCode: "NL",
    languages: ["English"],
    networks: ["linkedin", "x", "newsletter"],
    followers: 15600,
    pricePerPost: 275,
    engagementRate: 5.6,
    fit: 82,
    bio: "Deep practitioner audience of data engineers and analytics leads. Converts well for warehouse-native and data quality tooling.",
    posts: [
      "The dashboard nobody opens is not a data problem. It answers a question nobody asked.",
      "We deleted 200 models from our dbt project. Query costs dropped 38% and nothing broke.",
      "Semantic layers solve a political problem with a technical tool. Sometimes that works.",
    ],
  },
  {
    name: "Ana Beatriz Costa",
    headline: "RevOps consultant for LATAM expansion",
    topics: ["Sales & GTM", "Finance & Ops"],
    country: "Portugal",
    countryCode: "PT",
    languages: ["Portuguese", "English", "Spanish"],
    networks: ["linkedin"],
    followers: 6800,
    pricePerPost: 95,
    engagementRate: 7.1,
    fit: 74,
    bio: "Niche voice with the highest engagement rate on the roster. Best used for message testing and Iberia or LATAM-focused campaigns.",
    posts: [
      "Expanding to Brazil with your European pricing page is a decision, and it is the wrong one.",
      "Your CRM is in English and your reps sell in Portuguese. That gap is showing up in your forecast.",
      "Localisation is not translation. It is rewriting the objection handling.",
    ],
  },
  {
    name: "Jonas Weber",
    headline: "CFO advisor, SaaS metrics and unit economics",
    topics: ["Finance & Ops", "SaaS & Product"],
    country: "Switzerland",
    countryCode: "CH",
    languages: ["German", "English"],
    networks: ["linkedin", "newsletter"],
    followers: 64300,
    pricePerPost: 1050,
    engagementRate: 2.6,
    fit: 81,
    bio: "Reaches finance leadership at established SaaS companies. Higher price per post, but the audience holds budget authority.",
    posts: [
      "Net revenue retention above 100% forgives a lot of sins. It does not forgive a broken sales motion.",
      "Your CAC payback is 22 months and you are hiring three more reps. Pick one.",
      "The board deck metric I would delete first: monthly active users.",
    ],
  },
  {
    name: "Yuki Tanaka",
    headline: "Developer advocate, API and platform tooling",
    topics: ["SaaS & Product", "AI & Automation"],
    country: "Japan",
    countryCode: "JP",
    languages: ["Japanese", "English"],
    networks: ["linkedin", "x", "youtube"],
    followers: 29700,
    pricePerPost: 430,
    engagementRate: 4.4,
    fit: 72,
    bio: "Bilingual reach into APAC developer and platform-team audiences. Useful for expanding a campaign beyond Europe and North America.",
    posts: [
      "Your API docs are a reference manual. Developers wanted a tutorial and left.",
      "I built the same integration three times with three vendors. Only one took under an hour.",
      "Rate limits are product decisions, not infrastructure details.",
    ],
  },
  {
    name: "Grace Whitfield",
    headline: "Brand strategist, category design for B2B",
    topics: ["Marketing & Brand"],
    country: "United States",
    countryCode: "US",
    languages: ["English"],
    networks: ["linkedin", "newsletter"],
    followers: 112000,
    pricePerPost: 1850,
    engagementRate: 2.2,
    fit: 69,
    bio: "The largest audience on the roster. Best for awareness pushes where reach matters more than click-through precision.",
    posts: [
      "Category creation is expensive and slow. Most companies should compete in an existing one and win on clarity.",
      "If your positioning statement needs a diagram, your buyers will not repeat it.",
      "Rebrands rarely fix growth. They usually postpone the conversation about the product.",
    ],
  },
  {
    name: "Ismail Haddad",
    headline: "Solo founder, bootstrapped B2B tools",
    topics: ["SaaS & Product", "Sales & GTM"],
    country: "Spain",
    countryCode: "ES",
    languages: ["Spanish", "English", "French"],
    networks: ["linkedin", "x"],
    followers: 11900,
    pricePerPost: 165,
    engagementRate: 6.0,
    fit: 78,
    bio: "Builds in public with revenue screenshots. Audience of founders and operators who buy their own tools, so purchase cycles are short.",
    posts: [
      "€18k MRR with no funding and no sales team. Here is every channel that did not work.",
      "Cold outbound still works. It just costs more attention than it did three years ago.",
      "I raised prices 40% and lost two customers. Revenue is up 31%.",
    ],
  },
  {
    name: "Nadia Petrova",
    headline: "People ops, remote-first operations",
    topics: ["HR & Talent", "Finance & Ops"],
    country: "Bulgaria",
    countryCode: "BG",
    languages: ["English", "Bulgarian"],
    networks: ["linkedin"],
    followers: 8200,
    pricePerPost: 110,
    engagementRate: 5.9,
    fit: 71,
    bio: "Practical, template-heavy posts for distributed teams. Low price point makes her a good control creator in split tests.",
    posts: [
      "Async does not mean slower. It means writing things down once instead of explaining them five times.",
      "Our onboarding is 11 documents and one human. The human is the part that matters.",
      "Compensation bands published internally. Six months later, here is what changed.",
    ],
  },
];

function buildCreator(seed: Seed, index: number): Creator {
  const slug = seed.name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const medianImpressions = Math.round(seed.followers * (0.85 + (index % 5) * 0.12));
  const medianClicks = Math.round(medianImpressions * (0.006 + (seed.engagementRate / 100) * 0.11));

  return {
    id: `cr_${String(index + 1).padStart(3, "0")}`,
    slug,
    name: seed.name,
    headline: seed.headline,
    topics: seed.topics,
    country: seed.country,
    countryCode: seed.countryCode,
    languages: seed.languages,
    networks: seed.networks,
    followers: seed.followers,
    pricePerPost: seed.pricePerPost,
    engagementRate: seed.engagementRate,
    medianImpressions,
    medianClicks,
    deliveryRate: 82 + ((index * 7) % 17),
    responseHours: 3 + ((index * 5) % 20),
    fit: seed.fit,
    postsDelivered: 4 + ((index * 11) % 38),
    vetted: index % 9 !== 4,
    bio: seed.bio,
    audience: {
      seniority: [
        { label: "C-level / VP", share: 22 + ((index * 3) % 18) },
        { label: "Director / Head", share: 26 + ((index * 5) % 12) },
        { label: "Manager", share: 24 - ((index * 2) % 9) },
        { label: "Individual contributor", share: 18 + ((index * 4) % 7) },
      ],
      industries: [
        { label: "Software & SaaS", share: 38 + ((index * 4) % 16) },
        { label: "Professional services", share: 19 - ((index * 3) % 8) },
        { label: "Financial services", share: 14 + ((index * 2) % 9) },
        { label: "Industry & manufacturing", share: 9 + ((index * 5) % 6) },
      ],
    },
    samplePosts: seed.posts.map((excerpt, postIndex) => {
      const impressions = Math.round(medianImpressions * (1.3 - postIndex * 0.28));
      return {
        id: `${slug}-post-${postIndex + 1}`,
        excerpt,
        impressions,
        clicks: Math.round(impressions * (0.012 + postIndex * 0.004)),
        reactions: Math.round(impressions * (seed.engagementRate / 100) * 0.42),
      };
    }),
  };
}

export const creators: Creator[] = seeds.map(buildCreator);

export function getCreator(slug: string) {
  return creators.find((creator) => creator.slug === slug);
}

/** Marketplace-wide numbers shown on the landing page and marketplace header. */
export const marketplaceStats = {
  creators: creators.length,
  countries: new Set(creators.map((creator) => creator.country)).size,
  medianPrice: (() => {
    const prices = [...creators.map((c) => c.pricePerPost)].sort((a, b) => a - b);
    const mid = Math.floor(prices.length / 2);
    return prices.length % 2 ? prices[mid] : Math.round((prices[mid - 1] + prices[mid]) / 2);
  })(),
  totalReach: creators.reduce((sum, creator) => sum + creator.followers, 0),
};
