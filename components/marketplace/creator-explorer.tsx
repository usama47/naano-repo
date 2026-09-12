"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Loader2, SearchIcon, SlidersHorizontal } from "lucide-react";
import { CreatorCard } from "@/components/marketplace/creator-card";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/primitives";
import { Field, Input, Select } from "@/components/ui/field";
import { NETWORK_LABELS, TOPICS } from "@/lib/data/creators";
import { DEFAULT_FILTERS } from "@/lib/data/filter";
import type { Creator, CreatorFilters } from "@/lib/types";
import { formatCompact, formatEur } from "@/lib/utils";

type CreatorsResponse = {
  data: Creator[];
  meta: { total: number; available: number; estimatedBudget: number };
};

const followerSteps = [
  { label: "Any size", value: 0 },
  { label: "1K+", value: 1000 },
  { label: "10K+", value: 10000 },
  { label: "25K+", value: 25000 },
  { label: "50K+", value: 50000 },
];

export function CreatorExplorer({ initialCreators }: { initialCreators: Creator[] }) {
  const [filters, setFilters] = useState<CreatorFilters>(DEFAULT_FILTERS);
  const [shortlist, setShortlist] = useState<string[]>([]);

  const queryString = useMemo(() => {
    const params = new URLSearchParams({
      q: filters.q,
      topic: filters.topic,
      network: filters.network,
      minFollowers: String(filters.minFollowers),
      maxPrice: String(filters.maxPrice),
      sort: filters.sort,
    });
    return params.toString();
  }, [filters]);

  const isPristine = queryString === new URLSearchParams({
    q: DEFAULT_FILTERS.q,
    topic: DEFAULT_FILTERS.topic,
    network: DEFAULT_FILTERS.network,
    minFollowers: String(DEFAULT_FILTERS.minFollowers),
    maxPrice: String(DEFAULT_FILTERS.maxPrice),
    sort: DEFAULT_FILTERS.sort,
  }).toString();

  const { data, isFetching } = useQuery<CreatorsResponse>({
    queryKey: ["creators", queryString],
    queryFn: async () => {
      const response = await fetch(`/api/creators?${queryString}`);
      if (!response.ok) throw new Error("Unable to load creators");
      return response.json();
    },
    initialData: isPristine
      ? {
          data: initialCreators,
          meta: {
            total: initialCreators.length,
            available: initialCreators.length,
            estimatedBudget: initialCreators.reduce((sum, c) => sum + c.pricePerPost, 0),
          },
        }
      : undefined,
  });

  const results = data?.data ?? [];

  const shortlistCreators = results.filter((creator) => shortlist.includes(creator.slug));
  const shortlistBudget = shortlistCreators.reduce((sum, creator) => sum + creator.pricePerPost, 0);
  const shortlistReach = shortlistCreators.reduce(
    (sum, creator) => sum + creator.medianImpressions,
    0,
  );

  function update<K extends keyof CreatorFilters>(key: K, value: CreatorFilters[K]) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  function toggleShortlist(slug: string) {
    setShortlist((current) =>
      current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug],
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
      <aside className="lg:sticky lg:top-24">
        <Card className="p-5">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="size-4 text-brand" />
            <p className="text-sm font-semibold">Filters</p>
          </div>

          <div className="mt-5 space-y-4">
            <Field label="Search">
              <div className="relative">
                <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
                <Input
                  value={filters.q}
                  onChange={(event) => update("q", event.target.value)}
                  placeholder="Topic, name, country"
                  className="pl-9"
                />
              </div>
            </Field>

            <Field label="Topic">
              <Select value={filters.topic} onChange={(event) => update("topic", event.target.value)}>
                <option value="all">All topics</option>
                {TOPICS.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </Select>
            </Field>

            <Field label="Network">
              <Select
                value={filters.network}
                onChange={(event) => update("network", event.target.value)}
              >
                <option value="all">All networks</option>
                {Object.entries(NETWORK_LABELS).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Select>
            </Field>

            <Field label="Audience size">
              <Select
                value={String(filters.minFollowers)}
                onChange={(event) => update("minFollowers", Number(event.target.value))}
              >
                {followerSteps.map((step) => (
                  <option key={step.value} value={step.value}>
                    {step.label}
                  </option>
                ))}
              </Select>
            </Field>

            <Field label={`Max price per post — ${formatEur(filters.maxPrice)}`}>
              <input
                type="range"
                min={50}
                max={2000}
                step={25}
                value={filters.maxPrice}
                onChange={(event) => update("maxPrice", Number(event.target.value))}
                className="mt-2 w-full accent-[var(--brand)]"
              />
            </Field>

            <Field label="Sort by">
              <Select
                value={filters.sort}
                onChange={(event) => update("sort", event.target.value as CreatorFilters["sort"])}
              >
                <option value="fit">Audience fit</option>
                <option value="price_asc">Price: low to high</option>
                <option value="price_desc">Price: high to low</option>
                <option value="followers">Followers</option>
                <option value="engagement">Engagement rate</option>
              </Select>
            </Field>

            <button
              type="button"
              onClick={() => setFilters(DEFAULT_FILTERS)}
              className="text-sm text-muted underline-offset-4 hover:text-ink hover:underline"
            >
              Reset filters
            </button>
          </div>
        </Card>

        <Card className="mt-4 bg-ink p-5 text-white">
          <p className="text-sm font-semibold">Shortlist</p>
          {shortlist.length === 0 ? (
            <p className="mt-2 text-sm text-white/60">
              Add creators to estimate a campaign budget before you brief anyone.
            </p>
          ) : (
            <>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-white/60">Creators</dt>
                  <dd className="font-semibold tabular-nums">{shortlist.length}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-white/60">Estimated spend</dt>
                  <dd className="font-semibold tabular-nums">{formatEur(shortlistBudget)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-white/60">Expected reach</dt>
                  <dd className="font-semibold tabular-nums">{formatCompact(shortlistReach)}</dd>
                </div>
              </dl>
              <ButtonLink
                href={`/dashboard/campaigns/new?creators=${shortlist.join(",")}`}
                variant="inverse"
                className="mt-5 w-full"
              >
                Brief {shortlist.length} creator{shortlist.length === 1 ? "" : "s"}
              </ButtonLink>
            </>
          )}
        </Card>
      </aside>

      <div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-muted">
            {results.length} creator{results.length === 1 ? "" : "s"} match your filters
          </p>
          {isFetching ? (
            <span className="inline-flex items-center gap-2 text-sm text-muted">
              <Loader2 className="size-4 animate-spin" />
              Updating
            </span>
          ) : null}
        </div>

        {results.length === 0 ? (
          <Card className="mt-5 p-12 text-center">
            <p className="font-medium">No creators match these filters.</p>
            <p className="mt-2 text-sm text-muted">
              Try raising the maximum price or clearing the topic filter.
            </p>
          </Card>
        ) : (
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {results.map((creator) => (
              <CreatorCard
                key={creator.id}
                creator={creator}
                selected={shortlist.includes(creator.slug)}
                onToggle={toggleShortlist}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
