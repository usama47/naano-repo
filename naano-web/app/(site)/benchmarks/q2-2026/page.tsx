import type { Metadata } from "next";
import { BenchmarkReport } from "@/components/marketing/benchmark-report";
import { ReportHero } from "@/components/marketing/report-hero";
import { ScaleCta } from "@/components/marketing/scale-cta";

export const metadata: Metadata = {
  title: "B2B Creator-Led Growth Benchmarks Q2 2026",
  description:
    "First-party CPL, CTR, and conversion benchmarks from 312 B2B creator-led campaigns on Naano in Q1 2026. Per-vertical and per-tier breakdowns, methodology, and sample sizes.",
  alternates: { canonical: "/benchmarks/q2-2026" },
};

export default function BenchmarksQ2Page() {
  return (
    <div className="bg-white">
      <ReportHero
        kicker="Q2 2026 Benchmark Report"
        minutes="14 min read"
        titleWeight="light"
        title="B2B Creator-Led Growth Benchmarks: Q2 2026"
        lede="First-party CPL, CTR, and conversion data from ~300 vetted B2B nano-creators on Naano. Methodology, sample sizes, and per-vertical breakdowns."
        meta="Published April 27, 2026 · Authored by the Naano team · Sample: 312 campaigns, 1,847 sponsored posts, Q1 2026"
      />
      <BenchmarkReport />
      <ScaleCta
        body="Launch your first campaign in minutes. Top up your wallet and pay per post, with tracked clicks on every one."
        note="Free to start. No credit card required."
      />
    </div>
  );
}
