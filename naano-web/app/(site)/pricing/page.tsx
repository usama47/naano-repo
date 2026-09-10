import type { Metadata } from "next";
import { Faq } from "@/components/marketing/faq";
import { PricingPlans } from "@/components/marketing/pricing-plans";
import { FinalCta } from "@/components/marketing/sections";
import { Card, SectionLabel } from "@/components/ui/primitives";
import { creators, marketplaceStats } from "@/lib/data/creators";
import { formatEur } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Free to browse and brief. Pay each creator's published flat price per post, with no monthly platform fee, or have the channel operated for you.",
};

/** Price bands shown so buyers can sanity-check a budget before booking. */
const bands = [
  { label: "Under 10K followers", max: 10000 },
  { label: "10K – 25K followers", max: 25000 },
  { label: "25K – 50K followers", max: 50000 },
  { label: "50K+ followers", max: Infinity },
];

export default function PricingPage() {
  const rows = bands.map((band, index) => {
    const min = index === 0 ? 0 : bands[index - 1].max;
    const group = creators.filter(
      (creator) => creator.followers >= min && creator.followers < band.max,
    );
    const prices = group.map((creator) => creator.pricePerPost).sort((a, b) => a - b);
    const median = prices.length
      ? prices.length % 2
        ? prices[Math.floor(prices.length / 2)]
        : Math.round((prices[prices.length / 2 - 1] + prices[prices.length / 2]) / 2)
      : 0;

    return {
      label: band.label,
      count: group.length,
      median,
      low: prices[0] ?? 0,
      high: prices[prices.length - 1] ?? 0,
    };
  });

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionLabel>Pricing</SectionLabel>
          <h1 className="display mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Known cost before anything ships.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Creators publish a flat price per post. You see it before you book, and the platform
            takes no cut on top of it. The median post across the marketplace is{" "}
            {formatEur(marketplaceStats.medianPrice)}.
          </p>
        </div>
      </section>

      <PricingPlans />

      <section className="mx-auto max-w-4xl px-5 pb-20">
        <h2 className="text-lg font-semibold">What posts actually cost</h2>
        <p className="mt-2 text-sm text-muted">
          Live prices from creators currently listed. Follower count explains less of the price than
          you would expect — audience quality and delivery record matter more.
        </p>

        <Card className="mt-6 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-surface text-left text-xs uppercase tracking-wide text-muted">
              <tr>
                <th className="px-5 py-3 font-medium">Audience size</th>
                <th className="px-5 py-3 font-medium">Creators</th>
                <th className="px-5 py-3 font-medium">Median</th>
                <th className="px-5 py-3 font-medium">Range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((row) => (
                <tr key={row.label}>
                  <td className="px-5 py-4 font-medium">{row.label}</td>
                  <td className="px-5 py-4 tabular-nums text-muted">{row.count}</td>
                  <td className="px-5 py-4 font-semibold tabular-nums">{formatEur(row.median)}</td>
                  <td className="px-5 py-4 tabular-nums text-muted">
                    {formatEur(row.low)} – {formatEur(row.high)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </section>

      <Faq />
      <FinalCta />
    </>
  );
}
