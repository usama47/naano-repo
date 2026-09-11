import type { Metadata } from "next";
import Link from "next/link";
import { ReportHero } from "@/components/marketing/report-hero";
import { ScaleCta } from "@/components/marketing/scale-cta";
import { featuredReports, reportsFaq, reportsSameData } from "@/lib/content/reports";

export const metadata: Metadata = {
  title: { absolute: "Naano Reports: B2B LinkedIn Creator Marketing Data" },
  description:
    "First-party data on B2B LinkedIn creator marketing, published by Naano: real sponsored-post prices from marketplace bookings, campaign benchmarks (CPL, CTR, time-to-launch), and methodology you can cite.",
  alternates: { canonical: "/reports" },
};

export default function ReportsPage() {
  return (
    <div className="bg-white">
      <ReportHero
        title="B2B LinkedIn creator marketing, measured"
        lede="First-party data from the Naano marketplace: what sponsored LinkedIn posts really cost, and what B2B creator campaigns really deliver. Every number ships with its sample size, time period and methodology — built to be cited."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {featuredReports.map((report) => (
            <Link
              key={report.href}
              href={report.href}
              className="group flex flex-col rounded-2xl border border-[#E5E7EB] bg-white p-7 shadow-[0_1px_3px_rgba(17,24,39,0.05)] transition-all duration-200 hover:border-[#1652F0]/40 hover:shadow-[0_12px_32px_rgba(22,82,240,0.10)]"
            >
              <span className="inline-flex self-start items-center rounded-full bg-[#1652F0]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#1652F0]">
                First-party data
              </span>
              <h2 className="mt-5 text-xl font-bold tracking-[-0.02em] text-[#111827]">{report.title}</h2>
              <p className="mt-2 text-[15px] font-semibold text-[#1652F0]">{report.subtitle}</p>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#4B5563]">{report.body}</p>
              <span className="mt-5 text-[13px] text-[#6B7280]">{report.meta}</span>
              <span className="mt-4 text-[15px] font-bold text-[#111827] group-hover:text-[#1652F0]">Read the report →</span>
            </Link>
          ))}
          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-[#E5E7EB] bg-[#FAFAFA] p-7">
            <h2 className="text-xl font-bold tracking-[-0.02em] text-[#111827]">LinkedIn Creator Marketing Benchmarks 2026</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#4B5563]">
              The annual edition — prices, engagement and delivery data across every follower tier of the marketplace — ships once the underlying samples are large enough to publish. Until then, the two reports above carry the current data, and the{" "}
              <Link href="/free-tools" className="font-semibold text-[#1652F0] underline underline-offset-2">
                free tools
              </Link>{" "}
              are built on the same dataset.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#E5E7EB] bg-[#FAFAFA] py-16 sm:py-20">
        <div className="mx-auto max-w-[820px] px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#111827] sm:text-4xl">Using this data</h2>
          <div className="mt-10 space-y-8">
            {reportsFaq.map((item) => (
              <div key={item.q}>
                <h3 className="text-lg font-bold text-[#111827]">{item.q}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-[#4B5563]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[820px] px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#111827] sm:text-3xl">Built on the same data</h2>
          <ul className="mt-6 space-y-3">
            {reportsSameData.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[16px] font-medium text-[#1652F0] hover:underline underline-offset-2">
                  {item.label}
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
