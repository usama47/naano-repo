import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { PageFaq, type FaqItem } from "@/components/marketing/page-faq";
import { ScaleCta } from "@/components/marketing/scale-cta";
import { ButtonLink } from "@/components/ui/button";
import { BluePeriod } from "@/components/tools/fields";
import { freeTools, toolWork, type WorkCard } from "@/lib/content/tools";

export function ToolShell({
  title,
  lede,
  children,
  howTitle = "How it works.",
  how,
  faq,
  currentHref,
  workKey,
}: {
  title: string;
  lede: string;
  children: ReactNode;
  howTitle?: string;
  how?: ReactNode;
  faq: FaqItem[];
  currentHref: string;
  workKey: keyof typeof toolWork;
}) {
  const more = [
    ...freeTools.filter((tool) => tool.href.startsWith("/free-tools/") && tool.href !== currentHref).slice(0, 2),
  ];
  const work = toolWork[workKey];

  return (
    <div className="bg-[#FCFCFB]">
      <section className="px-4 pb-8 pt-20 text-center sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-3xl">
          <BluePeriod className="text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#17181C] sm:text-[52px]">
            {title}
          </BluePeriod>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-7 text-[#55575E]">{lede}</p>
        </div>
      </section>

      <div className="px-4 pb-8 sm:px-6">{children}</div>

      {how ? (
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <BluePeriod as="h2" className="text-[36px] font-semibold tracking-[-0.03em] text-[#17181C] sm:text-[44px]">
              {howTitle}
            </BluePeriod>
            <div className="mt-8 space-y-6 text-[16px] leading-7 text-[#55575E]">{how}</div>
          </div>
        </section>
      ) : null}

      <PageFaq items={faq} />

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-[1200px]">
          <BluePeriod as="h2" className="text-[32px] font-semibold tracking-[-0.03em] text-[#17181C] sm:text-[40px]">
            More free tools.
          </BluePeriod>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {more.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-2xl border border-[#ECEAE6] bg-white p-6 shadow-[0_2px_10px_rgba(23,24,28,0.05)] hover:border-[#1652F0]/40"
              >
                <h3 className="text-[18px] font-semibold leading-snug">{tool.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-[#55575E]">{tool.subtitle}.</p>
                <p className="mt-6 text-sm font-medium">Open →</p>
              </Link>
            ))}
            <Link
              href="/free-tools"
              className="rounded-2xl border border-[#ECEAE6] bg-white p-6 shadow-[0_2px_10px_rgba(23,24,28,0.05)] hover:border-[#1652F0]/40"
            >
              <h3 className="text-[18px] font-semibold leading-snug">All free tools</h3>
              <p className="mt-2 text-[14px] leading-6 text-[#55575E]">Every free Naano tool for B2B creator marketing, in one place.</p>
              <p className="mt-6 text-sm font-medium">Open →</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-[1200px]">
          <BluePeriod as="h2" className="mb-8 max-w-3xl text-[32px] font-semibold tracking-[-0.03em] text-[#17181C] sm:text-[40px]">
            {work.heading}
          </BluePeriod>
          <div className="grid gap-4 md:grid-cols-2">
            <WorkPanel card={work.left} />
            <WorkPanel card={work.right} />
          </div>
        </div>
      </section>

      <ScaleCta
        body="Launch your first campaign in minutes. Top up your wallet and pay per post, with tracked clicks on every one."
        note="Free to start. No credit card required."
      />
    </div>
  );
}

function WorkPanel({ card }: { card: WorkCard }) {
  return (
    <div className={`rounded-[28px] p-8 ${card.dark ? "bg-[#17181C] text-white" : "bg-[#1652F0] text-white"}`}>
      <h3 className="text-[22px] font-semibold">{card.title}</h3>
      <p className="mt-3 text-sm text-white/75">{card.body}</p>
      <ButtonLink href={card.href} variant="inverse" className="mt-6">
        {card.label} <ArrowRight className="size-4" />
      </ButtonLink>
    </div>
  );
}
