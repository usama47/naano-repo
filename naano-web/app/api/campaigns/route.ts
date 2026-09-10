import { NextResponse } from "next/server";
import { campaigns, workspaceTotals } from "@/lib/data/campaigns";

export async function GET() {
  return NextResponse.json({ data: campaigns, meta: workspaceTotals() });
}

type DraftPayload = {
  name?: string;
  objective?: string;
  landingUrl?: string;
  keyMessages?: string[];
  creatorSlugs?: string[];
};

/**
 * Accepts a brief from the campaign builder. The demo has no persistence layer,
 * so the draft is echoed back with generated tracking links.
 */
export async function POST(request: Request) {
  let payload: DraftPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body." }, { status: 400 });
  }

  const errors: Record<string, string> = {};
  if (!payload.name?.trim()) errors.name = "Campaign name is required.";
  if (!payload.objective?.trim()) errors.objective = "Describe what the campaign should produce.";
  if (!payload.landingUrl?.trim()) errors.landingUrl = "A destination URL is required.";
  if (!payload.creatorSlugs?.length) errors.creatorSlugs = "Select at least one creator.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ message: "Validation failed.", errors }, { status: 422 });
  }

  const id = `cmp_${Math.random().toString(36).slice(2, 8)}`;
  const trackedLinks = (payload.creatorSlugs ?? []).map((slug) => ({
    creatorSlug: slug,
    url: `${payload.landingUrl}${payload.landingUrl?.includes("?") ? "&" : "?"}utm_source=naano&utm_medium=creator&utm_campaign=${id}&utm_content=${slug}`,
  }));

  return NextResponse.json({ data: { id, status: "draft", trackedLinks } }, { status: 201 });
}
