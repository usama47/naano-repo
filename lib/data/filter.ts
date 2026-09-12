import type { Creator, CreatorFilters } from "@/lib/types";

export const DEFAULT_FILTERS: CreatorFilters = {
  q: "",
  topic: "all",
  network: "all",
  minFollowers: 0,
  maxPrice: 2000,
  sort: "fit",
};

export function parseFilters(params: URLSearchParams | Record<string, string | undefined>): CreatorFilters {
  const get = (key: string) =>
    params instanceof URLSearchParams ? (params.get(key) ?? undefined) : params[key];

  const sort = get("sort");
  const allowedSorts: CreatorFilters["sort"][] = [
    "fit",
    "price_asc",
    "price_desc",
    "followers",
    "engagement",
  ];

  return {
    q: get("q") ?? DEFAULT_FILTERS.q,
    topic: get("topic") ?? DEFAULT_FILTERS.topic,
    network: get("network") ?? DEFAULT_FILTERS.network,
    minFollowers: Number(get("minFollowers") ?? DEFAULT_FILTERS.minFollowers) || 0,
    maxPrice: Number(get("maxPrice") ?? DEFAULT_FILTERS.maxPrice) || DEFAULT_FILTERS.maxPrice,
    sort: allowedSorts.includes(sort as CreatorFilters["sort"])
      ? (sort as CreatorFilters["sort"])
      : DEFAULT_FILTERS.sort,
  };
}

export function filterCreators(source: Creator[], filters: CreatorFilters): Creator[] {
  const query = filters.q.trim().toLowerCase();

  const matched = source.filter((creator) => {
    if (creator.pricePerPost > filters.maxPrice) return false;
    if (creator.followers < filters.minFollowers) return false;
    if (filters.topic !== "all" && !creator.topics.includes(filters.topic)) return false;
    if (filters.network !== "all" && !creator.networks.includes(filters.network as never)) {
      return false;
    }

    if (!query) return true;

    const haystack = [
      creator.name,
      creator.headline,
      creator.country,
      creator.bio,
      ...creator.topics,
      ...creator.languages,
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });

  const sorters: Record<CreatorFilters["sort"], (a: Creator, b: Creator) => number> = {
    fit: (a, b) => b.fit - a.fit,
    price_asc: (a, b) => a.pricePerPost - b.pricePerPost,
    price_desc: (a, b) => b.pricePerPost - a.pricePerPost,
    followers: (a, b) => b.followers - a.followers,
    engagement: (a, b) => b.engagementRate - a.engagementRate,
  };

  return matched.sort(sorters[filters.sort]);
}
