import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileText,
  Globe2,
  Link2,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Avatar, Badge, Card, SectionLabel, Stat } from "@/components/ui/primitives";
import { creators, marketplaceStats } from "@/lib/data/creators";
import { formatCompact, formatEur, formatNumber } from "@/lib/utils";

export function Hero() {
  const featured = creators.slice(0, 3);

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-brand-soft blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pt-16 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-24">
        <div>
          <Badge tone="brand">
            <Sparkles className="size-3.5" />
            {formatNumber(marketplaceStats.creators)} vetted B2B creators
          </Badge>

          <h1 className="display mt-6 text-5xl font-semibold sm:text-6xl lg:text-[4.25rem]">
            Book the creators your buyers already read.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted">
            naano is a marketplace for B2B creator campaigns. Compare audience fit instead of
            follower counts, book at a flat price per post, and trace every click and lead back to
            the post that produced it.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="/marketplace" size="lg">
              Browse creators
              <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href="/how-it-works" variant="outline" size="lg">
              See how it works
            </ButtonLink>
          </div>

          <p className="mt-5 text-sm text-muted">
            Free to browse and brief. You pay each creator&apos;s published price per post — no
            retainer, no monthly platform fee.
          </p>
        </div>

        <div className="relative">
          <Card className="p-5 shadow-[0_24px_70px_-40px_rgb(11_11_18/0.35)]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Shortlist · RevOps launch</p>
              <Badge tone="brand">Audience fit</Badge>
            </div>

            <div className="mt-4 space-y-2.5">
              {featured.map((creator) => (
                <div
                  key={creator.id}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-surface/60 p-3"
                >
                  <Avatar name={creator.name} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{creator.name}</p>
                    <p className="truncate text-xs text-muted">
                      {creator.topics[0]} · {formatCompact(creator.followers)} followers
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-brand-strong">{creator.fit}%</p>
                    <p className="text-xs text-muted">{formatEur(creator.pricePerPost)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 rounded-2xl bg-ink p-4 text-white">
              <div>
                <p className="text-xs text-white/60">Qualified clicks</p>
                <p className="mt-1 text-lg font-semibold tabular-nums">2,612</p>
              </div>
              <div>
                <p className="text-xs text-white/60">Leads</p>
                <p className="mt-1 text-lg font-semibold tabular-nums">224</p>
              </div>
              <div>
                <p className="text-xs text-white/60">Cost / lead</p>
                <p className="mt-1 text-lg font-semibold tabular-nums">€32</p>
              </div>
            </div>
          </Card>

          <Card className="absolute -bottom-8 -left-4 hidden w-56 p-4 shadow-[0_24px_70px_-45px_rgb(11_11_18/0.4)] sm:block">
            <div className="flex items-center gap-2">
              <Wallet className="size-4 text-brand" />
              <p className="text-xs font-medium">Payout sent</p>
            </div>
            <p className="mt-2 text-xl font-semibold">€640</p>
            <p className="mt-1 text-xs text-muted">
              Paid by naano on statement. No invoice required.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

const logos = [
  "Northbeam",
  "Kettle",
  "Loopwise",
  "Fernvale",
  "Orbital",
  "Tandem",
  "Brightpath",
  "Kandra",
];

export function LogoMarquee() {
  return (
    <section className="border-b border-border py-10">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        Creator programmes running on naano
      </p>
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-14 pr-14">
          {[...logos, ...logos].map((logo, index) => (
            <span
              key={`${logo}-${index}`}
              className="text-lg font-semibold tracking-tight text-muted/70"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const pillars = [
  {
    icon: Users,
    title: "Specialists, not generalists",
    body: "Every creator is reviewed before they can be booked. Filter by topic, network, language and price to build a shortlist in a single session.",
    stat: `${marketplaceStats.creators} creators`,
  },
  {
    icon: Globe2,
    title: "Reach where your buyers are",
    body: "Creators across Europe, North America and APAC publish in their own language, so a launch can run in several markets at once.",
    stat: `${marketplaceStats.countries} countries`,
  },
  {
    icon: MousePointerClick,
    title: "Fit before follower count",
    body: "Each profile shows audience seniority and industry mix, median impressions and delivery rate — the numbers that predict pipeline.",
    stat: `${formatEur(marketplaceStats.medianPrice)} median post`,
  },
];

export function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <SectionLabel>The marketplace</SectionLabel>
      <h2 className="display mt-4 max-w-2xl text-4xl font-semibold sm:text-5xl">
        Work with the voices your market trusts.
      </h2>
      <p className="mt-4 max-w-xl text-muted">
        Discovery, briefing, contracting and payment happen in one place, so a campaign does not
        turn into a spreadsheet and forty DMs.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {pillars.map((pillar) => (
          <Card key={pillar.title} className="flex flex-col p-6">
            <pillar.icon className="size-5 text-brand" />
            <p className="mt-5 text-lg font-semibold">{pillar.title}</p>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{pillar.body}</p>
            <p className="mt-6 text-sm font-semibold text-brand-strong">{pillar.stat}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Shortlist on audience fit",
    body: "Score creators against your buyer profile, compare median reach and price side by side, then invite the ones worth a conversation.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Write the brief once",
    body: "Objectives, key messages and guardrails live in a single brief. Tracked links are generated per creator when the brief goes out.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Review drafts and schedule",
    body: "Drafts, revisions and publish dates sit on one board, so you can see what is live and what is waiting on you.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Attribute the outcome",
    body: "Every post carries a UTM-tagged link. Impressions, qualified clicks and leads land against the individual post and creator.",
  },
];

export function HowItWorksSteps() {
  return (
    <section className="border-y border-border bg-surface py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionLabel>Workflow</SectionLabel>
        <h2 className="display mt-4 max-w-2xl text-4xl font-semibold sm:text-5xl">
          Run the whole campaign from one place.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {steps.map((step) => (
            <Card key={step.number} className="p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted">{step.number}</span>
                <step.icon className="size-5 text-brand" />
              </div>
              <p className="mt-6 text-lg font-semibold">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudy() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <SectionLabel>Case study</SectionLabel>
          <h2 className="display mt-4 text-4xl font-semibold sm:text-5xl">
            Nine creators, 512 trials, one dashboard.
          </h2>
          <p className="mt-5 text-lg text-muted">
            A product-led SaaS team briefed SEO and analytics creators on LinkedIn, gave each a
            tracked link, and watched trial signups arrive against individual posts rather than a
            channel-level blob.
          </p>

          <blockquote className="mt-8 border-l-2 border-brand pl-5 text-lg">
            &ldquo;We finally know which creator produced which signup. That changed how we spend
            the next quarter&apos;s budget.&rdquo;
            <footer className="mt-3 text-sm text-muted">
              Head of Growth, product-led SaaS (composite example)
            </footer>
          </blockquote>

          <Link
            href="/how-it-works#attribution"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-strong hover:underline"
          >
            How attribution works
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <Card className="divide-y divide-border overflow-hidden">
          {[
            { label: "Creators activated", value: "9" },
            { label: "Qualified clicks", value: "2,940" },
            { label: "Trials started", value: "512" },
            { label: "Cost per trial", value: "€11.40" },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between px-6 py-5">
              <p className="text-sm text-muted">{row.label}</p>
              <p className="display text-2xl font-semibold">{row.value}</p>
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
}

export function StatsBand() {
  return (
    <section className="border-y border-border bg-ink py-20 text-white">
      <div className="grain mx-auto max-w-6xl px-5">
        <SectionLabel>
          <span className="text-white/50">Across the marketplace</span>
        </SectionLabel>
        <h2 className="display mt-4 max-w-2xl text-4xl font-semibold sm:text-5xl">
          Enough volume to know what a post is worth.
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Stat value={`${formatCompact(marketplaceStats.totalReach)}`} label="Combined audience" hint="Followers across all listed creators" />
          <Stat value={formatEur(marketplaceStats.medianPrice)} label="Median price per post" hint="Set by creators, published upfront" />
          <Stat value={`${marketplaceStats.countries}`} label="Countries represented" hint="Local voices, local language" />
          <Stat value="62%" label="Clicks that qualify" hint="30s+ on-site engagement, bots filtered" />
        </div>
      </div>
    </section>
  );
}

export function CreatorShowcase() {
  const showcase = creators.slice(0, 4);

  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <SectionLabel>Recent posts</SectionLabel>
          <h2 className="display mt-4 max-w-xl text-4xl font-semibold sm:text-5xl">
            Real posts, reported numbers.
          </h2>
        </div>
        <ButtonLink href="/marketplace" variant="outline">
          Browse all creators
        </ButtonLink>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {showcase.map((creator) => {
          const post = creator.samplePosts[0];
          return (
            <Card key={creator.id} className="flex flex-col p-6">
              <div className="flex items-center gap-3">
                <Avatar name={creator.name} />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{creator.name}</p>
                  <p className="truncate text-xs text-muted">
                    {creator.topics[0]} · {formatCompact(creator.followers)} followers
                  </p>
                </div>
              </div>

              <p className="mt-5 flex-1 text-[15px] leading-relaxed">&ldquo;{post.excerpt}&rdquo;</p>

              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-4">
                <div>
                  <p className="text-xs text-muted">Impressions</p>
                  <p className="mt-0.5 font-semibold tabular-nums">
                    {formatCompact(post.impressions)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted">Clicks</p>
                  <p className="mt-0.5 font-semibold tabular-nums">{formatNumber(post.clicks)}</p>
                </div>
                <div>
                  <p className="text-xs text-muted">Reactions</p>
                  <p className="mt-0.5 font-semibold tabular-nums">
                    {formatNumber(post.reactions)}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export function TrustStrip() {
  const items = [
    { icon: ShieldCheck, text: "Creators reviewed before listing" },
    { icon: Link2, text: "UTM-tagged links on every post" },
    { icon: Wallet, text: "Creators paid on statement, no invoices" },
  ];

  return (
    <section className="border-y border-border bg-surface py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between">
        {items.map((item) => (
          <div key={item.text} className="flex items-center gap-2.5 text-sm">
            <item.icon className="size-4 text-brand" />
            {item.text}
          </div>
        ))}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <Card className="overflow-hidden bg-ink p-10 text-white sm:p-14">
        <div className="grain grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <h2 className="display text-4xl font-semibold sm:text-5xl">
              Your next creator campaign starts here.
            </h2>
            <p className="mt-5 max-w-lg text-white/70">
              Build a shortlist, get an estimated budget from live creator prices, and launch when
              the brief is ready. Browsing costs nothing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/marketplace" variant="inverse" size="lg">
                Browse creators
                <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink
                href="/dashboard/campaigns/new"
                size="lg"
                className="border border-white/25 bg-transparent text-white hover:bg-white/10"
              >
                Draft a brief
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
            <p className="text-sm font-medium">What you get on day one</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {[
                "Shortlist scored against your buyer profile",
                "Budget estimate from published prices",
                "Brief template with tracked links",
                "Dashboard wired to per-post results",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-white" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
}
