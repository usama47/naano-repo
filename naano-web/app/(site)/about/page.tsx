import type { Metadata } from "next";
import Link from "next/link";
import { BrandDarkCta, BrandKicker, CheckLine, DarkButton } from "@/components/marketing/brand-blocks";

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 fill-white" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: { absolute: "About Naano: the team behind the B2B LinkedIn creator marketplace" },
  description:
    "Meet Naano's founders, Thomas Marcelle (CEO), Alexis Jarre (CMO), Justine Namour (CTO), and the LinkedIn creator marketplace with flat per-post pricing.",
  alternates: { canonical: "/about" },
};

const founders = [
  {
    name: "Alexis",
    role: "CMO & Co-founder",
    src: "/alex.png",
    href: "https://www.linkedin.com/in/alexis-jarre/",
    position: "center 0.2%",
  },
  {
    name: "Justine",
    role: "CTO & Co-founder",
    src: "/ju.jpeg",
    href: "https://www.linkedin.com/in/justine-namour-709951388/",
    position: "center 10%",
  },
  {
    name: "Thomas",
    role: "CEO & Co-founder",
    src: "/tom.png",
    href: "https://www.linkedin.com/in/thomas-marcelle/",
    position: "center 10%",
  },
];

const glance = [
  { dt: "Founded", dd: "2025, Paris, France" },
  { dt: "Category", dd: "B2B LinkedIn creator marketplace" },
  { dt: "Creator network", dd: "2,000+ vetted B2B LinkedIn creators (≈1K–500K followers)" },
  { dt: "Pricing", dd: "From €20 per post · Self-Serve €0/month · Managed €700/month" },
  { dt: "Avg. cost per qualified click", dd: "€18 (Q1 2026, n=312 campaigns)" },
  { dt: "Avg. CTR on creator posts", dd: "12% vs 0.8% LinkedIn Ads benchmark" },
];

const forBrands = [
  "Unlock new growth: Turn LinkedIn creators into your best sales channel",
  "Build brand authority: Get recommended by trusted voices in your industry",
  "Performance-pay only: Pay per click, not per post",
];

const forCreators = [
  "Your expertise is the asset: Your credibility matters more than your follower count",
  "Monetize what you already do: Get paid for recommending tools you actually use",
  "Earn from your network: Turn your LinkedIn posts into revenue",
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-[1100px] text-center">
          <div className="mb-16">
            <BrandKicker>Our story</BrandKicker>
            <h1 className="mb-5 text-[clamp(32px,5vw,60px)] font-light leading-[1.1] tracking-[-0.025em] text-[#111827]">
              Built by founders,
              <br />
              for founders.
            </h1>
            <p className="mx-auto max-w-lg text-base leading-relaxed text-[#6B7280]">
              The B2B LinkedIn creator marketplace connecting companies with vetted creators.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 sm:gap-20">
            {founders.map((person) => (
              <div key={person.name} className="flex flex-col items-center gap-3">
                <a href={person.href} target="_blank" rel="noopener noreferrer" className="group relative block">
                  <img
                    src={person.src}
                    alt={person.name}
                    width={112}
                    height={112}
                    className="size-24 rounded-full border-4 border-white object-cover shadow-md sm:size-28"
                    style={{ objectPosition: person.position }}
                  />
                  <span className="absolute right-0.5 bottom-0.5 flex size-8 items-center justify-center rounded-full bg-[#0A66C2] opacity-0 ring-2 ring-white transition-opacity group-hover:opacity-100">
                    <LinkedInMark />
                  </span>
                </a>
                <div className="text-center">
                  <p className="text-sm font-semibold text-[#111827]">{person.name}</p>
                  <p className="mt-0.5 text-xs text-[#6B7280]">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F4F6] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-[760px]">
          <BrandKicker muted>How we started</BrandKicker>
          <h2 className="mb-8 text-[clamp(24px,3vw,36px)] font-light leading-[1.15] tracking-[-0.02em] text-[#111827]">
            Built on Proven Results
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-[#6B7280]">
            <p>Naano connects companies that want to grow with LinkedIn creators who want to monetize their audience.</p>
            <p>We believe growth works better when it's driven by people, not ads.</p>
            <p>That's why we help businesses scale through Creator-Led Growth: real professionals talking to real audiences.</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-[760px]">
          <BrandKicker>Our mission</BrandKicker>
          <h2 className="mb-6 text-[clamp(24px,3vw,36px)] font-light leading-[1.15] tracking-[-0.02em] text-[#111827]">
            Make creator marketing your most effective revenue channel.
          </h2>
          <p className="text-base leading-relaxed text-[#6B7280]">We connect B2B companies with LinkedIn micro-creators who deliver:</p>
          <div className="mt-6 space-y-3 text-base text-[#111827]">
            <CheckLine blue>Strong credibility in their industry</CheckLine>
            <CheckLine blue>Trust that converts into growth</CheckLine>
          </div>
          <p className="mt-6 text-base leading-relaxed text-[#6B7280]">Real professionals talking to real audiences-at scale.</p>
        </div>
      </section>

      <section className="bg-white px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-[760px]">
          <BrandKicker>Naano at a glance</BrandKicker>
          <dl className="mb-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {glance.map((item) => (
              <div key={item.dt}>
                <dt className="mb-1 text-xs uppercase tracking-[0.1em] text-[#6B7280]">{item.dt}</dt>
                <dd className="text-sm font-medium leading-relaxed text-[#111827]">{item.dd}</dd>
              </div>
            ))}
          </dl>
          <p className="text-sm leading-relaxed text-[#6B7280]">
            Performance figures are first-party measurements published in our{" "}
            <Link href="/benchmarks/q2-2026" className="text-[#1652F0] underline decoration-[#1652F0]/30 underline-offset-4 hover:decoration-[#1652F0]">
              quarterly benchmark report
            </Link>
            . New to the category? Start with{" "}
            <Link href="/blog/creator-led-growth-b2b" className="text-[#1652F0] underline decoration-[#1652F0]/30 underline-offset-4 hover:decoration-[#1652F0]">
              the creator-led growth guide
            </Link>
            , see how Naano ranks against{" "}
            <Link href="/best-b2b-influencer-marketing-platforms-2026" className="text-[#1652F0] underline decoration-[#1652F0]/30 underline-offset-4 hover:decoration-[#1652F0]">
              the other B2B influencer platforms
            </Link>
            , or browse{" "}
            <Link href="/creators" className="text-[#1652F0] underline decoration-[#1652F0]/30 underline-offset-4 hover:decoration-[#1652F0]">
              the creator network
            </Link>{" "}
            and{" "}
            <Link href="/pricing" className="text-[#1652F0] underline decoration-[#1652F0]/30 underline-offset-4 hover:decoration-[#1652F0]">
              pricing
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-[#F3F4F6] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-12 text-center">
            <BrandKicker>Why naano</BrandKicker>
            <h2 className="text-[clamp(28px,3.5vw,46px)] font-light leading-[1.1] tracking-[-0.025em] text-[#111827]">
              Better for brands.
              <br />
              Better for creators.
            </h2>
          </div>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#6B7280]">For Brands</p>
              <div className="space-y-4 text-sm leading-relaxed text-[#6B7280]">
                {forBrands.map((item) => (
                  <CheckLine key={item}>{item}</CheckLine>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#6B7280]">For Creators</p>
              <div className="space-y-4 text-sm leading-relaxed text-[#6B7280]">
                {forCreators.map((item) => (
                  <CheckLine key={item} blue>
                    {item}
                  </CheckLine>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrandDarkCta
        kicker="The future of growth"
        title="The Future of Growth"
        body="Traditional advertising is losing impact."
        note="Collaboration is the future."
        actions={<DarkButton href="/register" light>Get started</DarkButton>}
      />
    </div>
  );
}
