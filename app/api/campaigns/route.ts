import { NextResponse } from "next/server";
import { campaigns, workspaceTotals } from "@/lib/data/campaigns";
import { creators } from "@/lib/data/creators";

export async function GET() {
  return NextResponse.json({ data: campaigns, meta: workspaceTotals() });
}

// Generates a downloadable sample brief. No database, invitations or click tracking.
export async function POST(request: Request) {
  let value: unknown;
  try { value = await request.json(); } catch { return NextResponse.json({ message: "Invalid JSON body." }, { status: 400 }); }
  if (!value || typeof value !== "object" || Array.isArray(value)) return NextResponse.json({ message: "Expected a campaign object." }, { status: 422 });
  const payload = value as Record<string, unknown>;
  const errors: Record<string, string> = {};
  for (const field of ["name", "objective", "landingUrl"] as const) {
    if (typeof payload[field] !== "string" || !payload[field].trim() || payload[field].length > 2000) errors[field] = "Enter a value of up to 2000 characters.";
  }
  let destination: URL | undefined;
  try { destination = new URL(typeof payload.landingUrl === "string" ? payload.landingUrl : ""); if (!["https:", "http:"].includes(destination.protocol)) throw new Error(); } catch { errors.landingUrl = "Enter a valid http or https URL."; }
  const slugs = payload.creatorSlugs;
  if (!Array.isArray(slugs) || !slugs.length || slugs.length > creators.length || slugs.some(slug => typeof slug !== "string" || !creators.some(creator => creator.slug === slug))) errors.creatorSlugs = "Select at least one creator from the marketplace.";
  if (payload.keyMessages !== undefined && (!Array.isArray(payload.keyMessages) || payload.keyMessages.length > 20 || payload.keyMessages.some(message => typeof message !== "string" || message.length > 2000))) errors.keyMessages = "Use up to 20 text messages, each under 2000 characters.";
  if (Object.keys(errors).length) return NextResponse.json({ message: "Validation failed.", errors }, { status: 422 });
  const id = `cmp_${crypto.randomUUID()}`;
  const trackedLinks = [...new Set(slugs as string[])].map(slug => {
    const url = new URL(destination!);
    url.searchParams.set("utm_source", "naano");
    url.searchParams.set("utm_medium", "creator");
    url.searchParams.set("utm_campaign", id);
    url.searchParams.set("utm_content", slug);
    return { creatorSlug: slug, url: url.toString() };
  });
  return NextResponse.json({ data: { id, status: "draft", demo: true, name: payload.name, objective: payload.objective, keyMessages: payload.keyMessages || [], trackedLinks } }, { status: 201 });
}
