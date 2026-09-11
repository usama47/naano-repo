export type FreeTool = {
  href: string;
  slug: string;
  title: string;
  subtitle: string;
  body: string;
  meta: string;
  chip?: string;
  cta: string;
};

export const freeTools: FreeTool[] = [
  {
    href: "/selection",
    slug: "search",
    title: "Free LinkedIn creator search",
    subtitle: "Get a hand-picked creator shortlist in 48 hours",
    body: "Describe the campaign you want to launch and a real person at Naano finds every LinkedIn creator genuinely worth contacting — inside the Naano marketplace and across the wider LinkedIn ecosystem. You get names, pricing, and audience fit within 48 hours. Free, no account required, no commitment.",
    meta: "Free · 48h turnaround · No account needed",
    chip: "Hand-picked by a real human, not an algorithm",
    cta: "Open the tool",
  },
  {
    href: "/free-tools/linkedin-creator-worth-calculator",
    slug: "worth",
    title: "LinkedIn Creator Worth Calculator",
    subtitle: "Find out what a sponsored post from any creator should cost",
    body: "Enter a LinkedIn creator's follower count, average reactions and comments, and their niche, and get an instant flat-fee estimate of what one sponsored post is worth — plus their engagement rating against B2B benchmarks. Built for creators setting their rate and for companies budgeting a campaign. Free, no account required.",
    meta: "Free · Instant result · No account needed",
    cta: "Open the tool",
  },
  {
    href: "/free-tools/linkedin-engagement-rate-calculator",
    slug: "engagement",
    title: "LinkedIn Engagement Rate Calculator",
    subtitle: "Calculate your engagement rate and compare it to 2026 benchmarks",
    body: "Enter your follower count and your average reactions, comments and reposts per post, and get your LinkedIn engagement rate two ways — by followers and by impressions — rated against 2026 B2B benchmarks for your audience size, with concrete tips to improve it. Free, no account required.",
    meta: "Free · Instant result · No account needed",
    cta: "Open the tool",
  },
  {
    href: "/free-tools/sponsored-post-delivery-odds-estimator",
    slug: "delivery",
    title: "Sponsored Post Delivery Odds Estimator",
    subtitle: "See how often offers at your price actually get published",
    body: "Enter what you plan to offer a LinkedIn creator per post and see how often real bookings at that price ended in a published post, how often creators simply never answered, and what brands actually paid at that audience size. Built on 239 real sponsored-post bookings from the Naano marketplace, not rules of thumb. Free, no account required.",
    meta: "Free · Built on 239 real bookings · No account needed",
    cta: "Open the tool",
  },
  {
    href: "/free-tools/creator-campaign-budget-planner",
    slug: "budget",
    title: "Creator Campaign Budget Planner",
    subtitle: "Turn a budget into published posts, not just booked ones",
    body: "Enter your campaign budget and see how many sponsored LinkedIn posts it books at real transacted medians — then how many of those historically ended in a published post, and what that makes the true cost per published post. Built on 239 real sponsored-post bookings from the Naano marketplace. Free, no account required.",
    meta: "Free · Built on 239 real bookings · No account needed",
    cta: "Open the tool",
  },
];

export const toolsComing = {
  title: "More tools coming",
  body: "We ship a new free tool whenever we build something internally that B2B teams keep asking us for. In the meantime, the blog covers the playbooks.",
  href: "/blog",
  cta: "Read the blog",
};

export const toolsFaq = [
  {
    q: "Are Naano's free tools really free?",
    a: "Yes. The free LinkedIn creator search costs nothing, requires no account and no payment method, and carries no obligation to book anything afterwards. You keep the shortlist whether or not you run a campaign with Naano.",
  },
  {
    q: "What is the free LinkedIn creator search?",
    a: "You describe your campaign — your product, your audience, and your budget — and a member of the Naano team manually builds a shortlist of LinkedIn creators whose audience genuinely overlaps your buyer. Each profile comes with pricing, audience fit, and the reason it belongs in your campaign. It is delivered within 48 hours.",
  },
  {
    q: "Do I have to run my campaign on Naano to use the tools?",
    a: "No. The shortlist is yours to use however you want, including contacting the creators directly yourself. Naano's bet is that booking, briefing, paying, and tracking those creators in one place is easier than doing it by hand — but that is your decision to make after you see the list.",
  },
];

export const toolsKeepReading = [
  { href: "/blog/how-to-find-b2b-creators-linkedin", title: "How to find B2B creators on LinkedIn" },
  { href: "/blog/best-b2b-creator-marketplace", title: "Best B2B creator marketplaces in 2026 (ranked)" },
  { href: "/blog/what-is-a-b2b-creator-marketplace", title: "What is a B2B creator marketplace?" },
  { href: "/blog/launch-b2b-linkedin-creator-campaign", title: "How to launch your first LinkedIn creator campaign in 30 days" },
  { href: "/blog/b2b-influencer-marketing-cost", title: "How much does B2B influencer marketing cost in 2026?" },
];

export type WorkCard = {
  title: string;
  body: string;
  href: string;
  label: string;
  dark?: boolean;
};

export const toolWork: Record<string, { heading: string; left: WorkCard; right: WorkCard }> = {
  worth: {
    heading: "Now put the number to work.",
    left: {
      title: "Set your rate and get booked",
      body: "Publish your flat fee on Naano — from €100 per post, you decide the price — and let B2B companies book you directly. No pitching, no negotiation threads.",
      href: "/register?role=influencer",
      label: "Set your rate and get booked",
      dark: true,
    },
    right: {
      title: "Get a free hand-picked creator shortlist",
      body: "Describe your campaign and a real person at Naano sends you a shortlist of vetted LinkedIn creators — with their actual flat fees — within 48 hours. Free, no commitment.",
      href: "/selection",
      label: "Get a free creator shortlist",
    },
  },
  engagement: {
    heading: "Strong engagement rate? Get paid for it.",
    left: {
      title: "Get paid per post on Naano",
      body: "Creators on Naano get paid per post by vetted B2B sponsors — you set your own flat rate, from 100 euros per post. Your engagement rate is exactly what companies are looking for.",
      href: "/register?role=influencer",
      label: "Get paid per post on Naano",
      dark: true,
    },
    right: {
      title: "Buying attention, not follower counts?",
      body: "Browse vetted LinkedIn creators with the engagement rates to prove it. Every creator lists a flat fee per post upfront — no negotiation, no surprises.",
      href: "/selection",
      label: "Browse vetted creators",
    },
  },
  delivery: {
    heading: "Book at the listed rate, and skip the guessing",
    left: {
      title: "Book a creator on Naano",
      body: "Every creator on Naano publishes their own flat fee per post, so you never open with a number you had to invent. Contracts, escrow and invoicing handled — no monthly platform fee.",
      href: "/register",
      label: "Book a creator on Naano",
      dark: true,
    },
    right: {
      title: "Not sure which creators to approach?",
      body: "Describe your campaign and a real person at Naano builds you a hand-picked shortlist of relevant B2B creators, with their rates and audience fit, within 48 hours. Free, no account.",
      href: "/selection",
      label: "Get a free shortlist",
    },
  },
  budget: {
    heading: "See the real prices before you commit a budget",
    left: {
      title: "Book a creator on Naano",
      body: "Every creator on Naano publishes their own flat fee per post, so you can build the plan against actual numbers instead of estimates. Contracts, escrow and invoicing handled — no monthly platform fee.",
      href: "/register",
      label: "Book a creator on Naano",
      dark: true,
    },
    right: {
      title: "Want the shortlist before the spreadsheet?",
      body: "Describe your campaign and a real person at Naano builds you a hand-picked shortlist of relevant B2B creators, with their rates and audience fit, within 48 hours. Free, no account.",
      href: "/selection",
      label: "Get a free shortlist",
    },
  },
};
