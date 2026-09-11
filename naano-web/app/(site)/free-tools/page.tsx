import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calculator, Clock, Percent, Sparkles, UserSearch, Wallet } from "lucide-react";
import { PageFaq } from "@/components/marketing/page-faq";
import { ScaleCta } from "@/components/marketing/scale-cta";
import { BluePeriod } from "@/components/tools/fields";
import { freeTools, toolsComing, toolsFaq, toolsKeepReading } from "@/lib/content/tools";

export const metadata: Metadata = {
  title: "Free Tools for B2B Creator Marketing — Naano",
  description: "Practical tools for teams running LinkedIn creator campaigns. No account, no payment method, no commitment.",
};

const icons = {
  search: UserSearch,
  worth: Calculator,
  engagement: Percent,
  delivery: Clock,
  budget: Wallet,
} as const;

export default function FreeToolsPage() {
  return (
    <div className="bg-[#FCFCFB]">
      <section className="px-4 pb-10 pt-20 text-center sm:px-6 sm:pb-12 sm:pt-24">
        <div className="mx-auto max-w-[760px]">
          <BluePeriod className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#17181C] sm:text-5xl lg:text-[60px]">
            Free tools for B2B creator marketing.
          </BluePeriod>
          <p className="mx-auto mt-6 max-w-[640px] text-lg leading-relaxed text-[#55575E] sm:text-[19px]">
            Practical tools for teams running LinkedIn creator campaigns. No account, no payment method, no commitment — start with the one below.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto grid max-w-[1200px] gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {freeTools.map((tool) => {
            const Icon = icons[tool.slug as keyof typeof icons] ?? UserSearch;
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group flex flex-col rounded-2xl border border-[#ECEAE6] bg-white p-7 shadow-[0_2px_10px_rgba(23,24,28,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-[#1652F0]/40 hover:shadow-[0_18px_40px_rgba(23,24,28,0.10)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F0FE] text-[#1652F0]">
                    <Icon className="size-[22px]" />
                  </span>
                  <span className="inline-flex items-center rounded-full border border-[#E4E1DC] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#55575E]">
                    Free
                  </span>
                </div>
                <h2 className="mt-5 text-[20px] font-semibold leading-snug tracking-[-0.02em] text-[#17181C]">{tool.title}</h2>
                <p className="mt-1.5 text-[15px] font-medium text-[#1652F0]">{tool.subtitle}</p>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#55575E]">{tool.body}</p>
                {tool.chip ? (
                  <span className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-[#ECEAE6] bg-[#FAFAF9] px-3 py-1.5 text-[12px] font-medium text-[#55575E]">
                    <span aria-hidden className="size-1.5 rounded-full bg-[#1652F0]" />
                    {tool.chip}
                  </span>
                ) : null}
                <span className="mt-3 text-[13px] text-[#6B6D74]">{tool.meta}</span>
                <span className="mt-5 inline-flex items-center gap-2 border-t border-[#F1EFEA] pt-5 text-[15px] font-semibold text-[#17181C] group-hover:text-[#1652F0]">
                  {tool.cta} <ArrowRight className="size-[15px]" />
                </span>
              </Link>
            );
          })}
          <Link
            href={toolsComing.href}
            className="group flex flex-col rounded-2xl border border-dashed border-[#E4E1DC] bg-[#FAFAF9] p-7 hover:border-[#1652F0]/40"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-white text-[#1652F0]">
              <Sparkles className="size-[22px]" />
            </span>
            <h2 className="mt-5 text-[20px] font-semibold leading-snug tracking-[-0.02em] text-[#17181C]">{toolsComing.title}</h2>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#55575E]">{toolsComing.body}</p>
            <span className="mt-5 inline-flex items-center gap-2 border-t border-[#F1EFEA] pt-5 text-[15px] font-semibold text-[#17181C] group-hover:text-[#1652F0]">
              {toolsComing.cta} <ArrowRight className="size-[15px]" />
            </span>
          </Link>
        </div>
      </section>

      <PageFaq items={toolsFaq} />

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <BluePeriod as="h2" className="text-[36px] font-semibold tracking-[-0.03em] text-[#17181C] sm:text-[44px]">
            Keep reading.
          </BluePeriod>
          <ul className="mt-6 divide-y divide-[#ECEAE6]">
            {toolsKeepReading.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex min-h-11 items-center justify-between gap-4 py-3.5 text-[16px] font-medium text-[#17181C] hover:text-[#1652F0]"
                >
                  {item.title}
                  <ArrowRight className="size-4 shrink-0 text-[#1652F0]" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ScaleCta
        body="Launch your first campaign in minutes. Top up your wallet and pay per post, with tracked clicks on every one."
        note="Free to start. No credit card required."
      />
    </div>
  );
}
