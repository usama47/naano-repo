import { NextResponse } from "next/server";
import { creators } from "@/lib/data/creators";
import { filterCreators, parseFilters } from "@/lib/data/filter";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filters = parseFilters(searchParams);
  const results = filterCreators(creators, filters);

  return NextResponse.json({
    data: results,
    meta: {
      total: results.length,
      available: creators.length,
      estimatedBudget: results.reduce((sum, creator) => sum + creator.pricePerPost, 0),
      filters,
    },
  });
}
