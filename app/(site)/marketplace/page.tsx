import type { Metadata } from "next";
import { CreatorExplorer } from "@/components/marketplace/creator-explorer";
import { SectionLabel } from "@/components/ui/primitives";
import { creators, marketplaceStats } from "@/lib/data/creators";
import { DEFAULT_FILTERS, filterCreators } from "@/lib/data/filter";
import { formatCompact, formatEur } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Creator marketplace",
  description:
    "Browse vetted B2B creators by topic, network, audience size and price per post. Compare audience fit and build a shortlist.",
};

export default function MarketplacePage() {
  const initial = filterCreators(creators, DEFAULT_FILTERS);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <SectionLabel>Marketplace</SectionLabel>
      <h1 className="display mt-4 max-w-2xl text-4xl font-semibold sm:text-5xl">
        Find the creators your buyers already trust.
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        {marketplaceStats.creators} vetted creators across {marketplaceStats.countries} countries.
        Prices are published upfront — the median post on the marketplace goes for{" "}
        {formatEur(marketplaceStats.medianPrice)}, against a combined audience of{" "}
        {formatCompact(marketplaceStats.totalReach)}.
      </p>

      <div className="mt-10">
        <CreatorExplorer initialCreators={initial} />
      </div>
    </div>
  );
}
