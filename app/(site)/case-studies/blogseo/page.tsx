import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { CaseStudyVideo } from "@/components/marketing/case-study-video";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How BlogSEO turned creator marketing into a measurable acquisition channel — Naano case study",
  description:
    "After one €2,000 sponsored post returned just three sign-ups, BlogSEO rebuilt creator marketing on Naano and turned it into predictable, trackable pipeline.",
};

const POST =
  "https://www.linkedin.com/posts/god-sfavour-joseph-sanyaolu-33494b227_i-fired-my-seo-agency-an-ai-agent-now-runs-share-7462843037375909888-GdjJ/";

const stats = [
  ["150%", "Return on ad spend (ROAS)"],
  ["1,500+", "Qualified leads surfaced for outreach"],
  ["Hundreds", "Of sign-ups generated"],
  ["~20", "Creator posts published"],
  ["15", "Creators activated"],
  ["€5,000", "Campaign budget"],
];

const reasons = [
  "Relevant creator matching instead of one expensive bet on a single influencer",
  "Multiple posts and angles instead of relying on one piece of content",
  "Centralized tracking across the entire campaign",
  "Qualified lead extraction directly into a dashboard",
  "Clear visibility into what actually drove commercial outcomes",
];

function LinkedInMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden className="fill-white">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  );
}

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div>
      <p className="text-[13px] font-bold tracking-[0.02em] text-[#9B9DA3]">{n}</p>
      <h2 className="mt-3 text-[34px] font-bold tracking-[-0.03em] text-[#17181C]">{title}</h2>
    </div>
  );
}

export default function BlogseoCaseStudy() {
  return (
    <div className="bg-[#FCFCFB]">
      <section className="mx-auto max-w-[1160px] px-5 pb-10 pt-16 sm:px-10 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_400px] lg:gap-[72px]">
          <div>
            <div className="inline-flex flex-wrap items-center gap-2.5">
              <span className="text-[12px] font-bold tracking-[0.22em] text-[#1652F0]">CASE STUDY</span>
              <span className="size-1 rounded-full bg-[#C9CBD1]" />
              <span className="text-[12px] font-bold tracking-[0.14em] text-[#9B9DA3]">LINKEDIN CREATOR CAMPAIGN</span>
            </div>
            <img src="/lp/logo-blogseo.png" alt="BlogSEO" className="mt-7 block h-[34px] w-auto" />
            <h1 className="mt-7 max-w-[640px] text-[40px] font-bold leading-[1.06] tracking-[-0.035em] text-[#0E0F12] sm:text-[52px]">
              How BlogSEO turned creator marketing into a measurable acquisition channel
            </h1>
            <p className="mt-6 max-w-[560px] text-[19px] leading-[1.55] text-[#55575E]">
              After one €2,000 sponsored post returned just three sign-ups, BlogSEO rebuilt creator marketing on Naano, and turned it into predictable, trackable pipeline.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-[22px] gap-y-3.5">
              <a
                href={POST}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-[#17181C] px-7 py-4 text-[16px] font-semibold text-white"
              >
                <LinkedInMark />
                View a campaign post
              </a>
              <span className="text-[14.5px] font-semibold text-[#9B9DA3]">B2B SaaS · SEO</span>
            </div>
          </div>
          <CaseStudyVideo />
        </div>
      </section>

      <section className="mx-auto max-w-[1160px] px-5 sm:px-10">
        <div className="rounded-[20px] border border-[#E7E5E1] bg-white px-5 py-8 shadow-[0_1px_3px_rgba(17,18,28,0.04)] sm:px-10 sm:py-11">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 text-center sm:grid-cols-3">
            {stats.map(([value, label]) => (
              <div key={label}>
                <p className="text-[36px] font-bold leading-none tracking-[-0.035em] text-[#0E0F12] sm:text-[46px]">{value}</p>
                <p className="mt-3 text-[14.5px] font-medium text-[#55575E]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1160px] px-5 pt-16 sm:px-10 sm:pt-24">
        <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
          <SectionLabel n="01" title="The challenge" />
          <div className="max-w-[640px]">
            <p className="text-[21px] font-medium leading-[1.6] tracking-[-0.01em] text-[#26272C]">
              Before Naano, BlogSEO had already tested influencer marketing. They paid{" "}
              <strong className="font-bold text-[#17181C]">€2,000 for a single sponsored post</strong> and generated only three
              sign-ups.
            </p>
            <p className="mt-[22px] text-[18px] leading-[1.65] text-[#55575E]">
              The conclusion was simple: creator marketing looked expensive, difficult to track, and impossible to scale with
              confidence.
            </p>
            <p className="mt-[18px] text-[18px] leading-[1.65] text-[#55575E]">
              They didn&apos;t need more reach. They needed a predictable way to find relevant creators, activate them at scale, and
              turn engagement into pipeline.
            </p>
            <div className="mt-[34px] flex overflow-hidden rounded-2xl border border-[#EDEBE7] bg-white">
              <div className="flex-1 px-6 py-[22px]">
                <p className="text-[13px] font-semibold text-[#9B9DA3]">Old approach</p>
                <p className="mt-2 text-[28px] font-bold tracking-[-0.02em] text-[#17181C]">€2,000</p>
                <p className="mt-1 text-sm text-[#8B8D94]">one sponsored post</p>
              </div>
              <div className="w-px bg-[#EDEBE7]" />
              <div className="flex-1 px-6 py-[22px]">
                <p className="text-[13px] font-semibold text-[#9B9DA3]">Result</p>
                <p className="mt-2 text-[28px] font-bold tracking-[-0.02em] text-[#DC2626]">3 sign-ups</p>
                <p className="mt-1 text-sm text-[#8B8D94]">no way to trace or repeat it</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1160px] px-5 pt-16 sm:px-10 sm:pt-24">
        <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
          <SectionLabel n="02" title="The campaign" />
          <div className="max-w-[640px]">
            <p className="text-[21px] font-medium leading-[1.6] tracking-[-0.01em] text-[#26272C]">
              BlogSEO launched a LinkedIn creator campaign with Naano, matched with{" "}
              <strong className="font-bold text-[#17181C]">~10 relevant creators</strong> and a{" "}
              <strong className="font-bold text-[#17181C]">€5,000 budget</strong>.
            </p>
            <p className="mt-[22px] text-[18px] leading-[1.65] text-[#55575E]">
              Over the campaign, creators published around 15 posts designed to reach BlogSEO&apos;s target audience and generate
              qualified demand. Every post was tracked through Naano, so the team could see which creators and which content
              generated real commercial intent.
            </p>
            <a
              href={POST}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block rounded-2xl border border-[#ECEAE6] bg-white p-5 shadow-[0_2px_10px_rgba(23,24,28,0.05)] hover:border-[#1652F0]/40"
            >
              <div className="flex items-center gap-3">
                <span className="size-10 shrink-0 rounded-full bg-[#1652F0]/10" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[15px] font-bold text-[#17181C]">Creator campaign post</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden>
                      <rect width="24" height="24" rx="4" fill="#0A66C2" />
                      <path
                        fill="#FFFFFF"
                        d="M7.2 9.6H4.8V19h2.4V9.6ZM6 5.2a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8ZM19.2 19h-2.4v-4.9c0-1.2-.5-1.9-1.5-1.9-.8 0-1.3.5-1.5 1.1-.1.2-.1.5-.1.8V19H11.3s.03-8.6 0-9.4h2.4v1.3c.3-.5.9-1.2 2.2-1.2 1.6 0 2.9 1 2.9 3.3V19Z"
                      />
                    </svg>
                  </div>
                  <p className="mt-px text-[13px] text-[#8B8D94]">Tracked in Naano · LinkedIn</p>
                </div>
              </div>
              <p className="mt-3.5 text-[15.5px] font-medium leading-[1.5] text-[#26272C]">
                “I fired my SEO agency. An AI agent now runs it.”, one of the creator posts that drove qualified demand for
                BlogSEO.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-[14.5px] font-semibold text-[#1652F0]">
                View one of the posts <ArrowRight className="size-[15px]" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1160px] px-5 pt-16 sm:px-10 sm:pt-24">
        <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
          <SectionLabel n="03" title="The results" />
          <div className="max-w-[640px]">
            <p className="text-[21px] font-medium leading-[1.6] tracking-[-0.01em] text-[#26272C]">
              For BlogSEO, the value wasn&apos;t just visibility. The campaign created a structured list of people who had engaged,{" "}
              <strong className="font-bold text-[#17181C]">1,500+ qualified leads</strong> surfaced in the dashboard, ready to
              reactivate through outbound.
            </p>
            <p className="mt-[22px] text-[18px] leading-[1.65] text-[#55575E]">
              Instead of treating creator marketing as an awareness play, the team could connect creator content to leads,
              conversations, and revenue, landing at <span className="font-semibold text-[#17181C]">150% ROAS</span>.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1160px] px-5 pt-16 sm:px-10 sm:pt-24">
        <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
          <div>
            <SectionLabel n="04" title="Why it worked" />
            <p className="mt-4 max-w-sm text-[16px] leading-[1.55] text-[#8B8D94]">
              The difference wasn&apos;t spending more on creators. Naano made the campaign operational.
            </p>
          </div>
          <ul className="max-w-[640px]">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-[15px] border-t border-[#ECEAE6] py-5">
                <span className="mt-0.5 grid size-[26px] shrink-0 place-items-center rounded-full bg-[#1652F0]/10">
                  <Check className="size-3.5 stroke-[3] text-[#1652F0]" />
                </span>
                <span className="text-[18px] font-medium leading-[1.5] text-[#26272C]">{reason}</span>
              </li>
            ))}
            <li className="border-t border-[#ECEAE6]" />
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[760px] px-5 py-20 text-center sm:px-10 sm:py-24">
        <div className="mx-auto h-1 w-8 rounded-sm bg-[#1652F0]" />
        <blockquote className="mt-10 text-[28px] font-medium leading-[1.3] tracking-[-0.02em] text-[#17181C] sm:text-[40px]">
          “We had tried influencer marketing before and spent €2,000 on one post for three sign-ups. With Naano, we saw{" "}
          <span className="text-[#1652F0]">150% ROAS</span> and generated more than 1,500 leads we could follow up with.”
        </blockquote>
        <div className="mt-11 flex items-center justify-center gap-3.5">
          <img src="/lp/avatar-g.png" alt="" className="size-14 rounded-full object-cover" />
          <div className="text-left">
            <p className="text-[16px] font-bold text-[#17181C]">Vincent Josse</p>
            <p className="mt-0.5 text-sm text-[#8B8D94]">CEO & Founder, BlogSEO</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1160px] px-5 pb-20 sm:px-10 sm:pb-28">
        <div className="relative overflow-hidden rounded-3xl bg-[#101113] px-6 py-16 text-center sm:px-16 sm:py-[72px]">
          <p className="text-[12px] font-bold tracking-[0.16em] text-[#7FA0F0]">BUILD YOUR LINKEDIN CREATOR CAMPAIGN</p>
          <h2 className="mx-auto mt-[22px] max-w-[660px] text-[36px] font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-[46px]">
            Turn creator engagement into pipeline.
          </h2>
          <p className="mx-auto mt-[22px] max-w-[520px] text-[18px] leading-[1.55] text-[#AEB0B6]">
            Run a campaign with creators your buyers already trust, track the results, and turn engagement into revenue.
          </p>
          <ButtonLink href="/book" variant="inverse" className="mt-[38px] h-auto rounded-xl px-[30px] py-[17px] text-[16.5px]">
            Launch your campaign with Naano <ArrowRight className="size-4" />
          </ButtonLink>
          <p
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -bottom-[70px] text-center text-[120px] font-extrabold leading-[0.78] tracking-[-0.05em] text-white/[0.04] sm:text-[240px]"
          >
            naano
          </p>
        </div>
      </section>
    </div>
  );
}
