import { creators } from "@/lib/data/creators";

export const FOLLOWER_GATE = 1000;

/** Signed-in creator for the demo session after login/register. */
export const sessionCreator = {
  ...creators[0],
  headline: "Software",
  followers: 0,
  pricePerPost: 240,
  photo: "/justine.png",
};

export const walletBalance = 0;

export const cardUrl = `/marketplace/${sessionCreator.slug}`;

export const overviewStats = [
  {
    key: "reach",
    label: "Public post reach",
    value: "—",
    hint: "Waiting for public post data",
    icon: "reach",
  },
  {
    key: "posts",
    label: "Public posts",
    value: "0",
    hint: "Original LinkedIn posts found",
    icon: "posts",
  },
  {
    key: "engagements",
    label: "Public engagements",
    value: "0",
    hint: "Reactions, comments and reports",
    icon: "engagements",
  },
  {
    key: "followers",
    label: "LinkedIn followers",
    value: "—",
    hint: "Imported from the public profile",
    icon: "followers",
  },
] as const;

export const launchGuide = {
  complete: 1,
  total: 1,
  href: "/dashboard/card",
  step: {
    title: "Card and price ready",
    body: "Your positioning and offer are ready to review.",
    status: "Complete",
  },
};

export const setupSteps = [
  {
    id: "card",
    href: "/dashboard/card",
    title: "Finish your storefront",
    body: "Set your price, niche and bio so brands can book you.",
    done: true,
  },
  {
    id: "gate",
    href: "/dashboard/opportunities",
    title: "Unlock opportunities",
    body: "Brand deals open at 1,000 LinkedIn followers.",
    done: sessionCreator.followers >= FOLLOWER_GATE,
  },
  {
    id: "payout",
    href: "/dashboard/earnings",
    title: "Add a payout method",
    body: "Creators are paid within 24h of a published post.",
    done: false,
  },
  {
    id: "deal",
    href: "/dashboard/opportunities",
    title: "Accept your first deal",
    body: "Pick a brand you already use. Post in your own voice.",
    done: false,
  },
] as const;

export type Opportunity = {
  id: string;
  brand: string;
  category: string;
  format: string;
  fee: number;
  due: string;
  summary: string;
  status: "new" | "invited" | "expiring";
};

export const opportunities: Opportunity[] = [
  {
    id: "opp_blogseo",
    brand: "BlogSEO",
    category: "SEO & content",
    format: "Sponsored LinkedIn post",
    fee: 180,
    due: "5 days",
    summary: "Honest take on turning organic LinkedIn traffic into demo-ready pipeline. One tracked link in the first comment.",
    status: "new",
  },
  {
    id: "opp_northbeam",
    brand: "Northbeam",
    category: "Analytics",
    format: "Sponsored LinkedIn post",
    fee: 240,
    due: "8 days",
    summary: "Write about attribution you actually trust — and the reports you stopped opening. No feature list.",
    status: "invited",
  },
  {
    id: "opp_revops",
    brand: "ForecastOS",
    category: "RevOps",
    format: "Sponsored LinkedIn post",
    fee: 160,
    due: "12 days",
    summary: "A specific story about a stale forecast, then one CTA to a 12-minute teardown. Your voice, their product.",
    status: "expiring",
  },
  {
    id: "opp_hr",
    brand: "Lattice",
    category: "HR tech",
    format: "Sponsored LinkedIn post",
    fee: 140,
    due: "14 days",
    summary: "People-ops angle: what broke in your last performance cycle, and the ritual that fixed it.",
    status: "new",
  },
];

export const collaborations: {
  id: string;
  brand: string;
  fee: number;
  status: string;
}[] = [];

export const earnings = {
  available: 0,
  pending: 0,
  lifetime: 0,
  payouts: [] as { id: string; amount: number; at: string; method: string }[],
};

export const affiliate = {
  code: sessionCreator.slug.split("-")[0] ?? "naano",
  url: "https://naano-replica.vercel.app/register?role=influencer",
  clicks: 0,
  signups: 0,
  earned: 0,
  reward: 25,
};

export type MessageThread = {
  id: string;
  from: string;
  role: string;
  preview: string;
  at: string;
  unread: boolean;
  bot?: boolean;
  messages: { id: string; from: "them" | "you"; text: string; at: string }[];
};

export const threads: MessageThread[] = [
  {
    id: "naanobot",
    from: "NaanoBot",
    role: "Assistant",
    preview: "Welcome in. Your storefront is live — next, pick a brand you actually use.",
    at: "Just now",
    unread: true,
    bot: true,
    messages: [
      {
        id: "m1",
        from: "them",
        text: `Welcome to Naano, ${sessionCreator.name.split(" ")[0]}. Brands book you at the price you set. You keep 100% of the fee, paid within 24h of publish.`,
        at: "Just now",
      },
      {
        id: "m2",
        from: "them",
        text: "Three things to do today: confirm your storefront, add a payout method, then accept a deal from Opportunities. I’ll sit in this thread if you get stuck.",
        at: "Just now",
      },
    ],
  },
];

export const communityHighlights = [
  {
    title: "Weekly brief clinic",
    body: "Creators rewrite a live brand brief in 20 minutes. Next session Monday 18:00 CET.",
  },
  {
    title: "Pricing circle",
    body: "How people with 2k–8k followers are setting flat fees this quarter. No screenshots of DMs.",
  },
  {
    title: "EU payouts",
    body: "SEPA lands in 24h. US creators use Wise. Questions go in Messages, not LinkedIn.",
  },
];
