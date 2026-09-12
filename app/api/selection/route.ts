import { NextResponse } from "next/server";
import { creators } from "@/lib/data/creators";

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ message: "Invalid JSON body." }, { status: 400 }); }
  if (!body || typeof body !== "object" || Array.isArray(body)) return NextResponse.json({ message: "Enter a company and vertical." }, { status: 422 });
  const { company, vertical } = body as Record<string, unknown>;
  if (typeof company !== "string" || !company.trim() || typeof vertical !== "string" || !vertical.trim() || company.length > 200 || vertical.length > 200) return NextResponse.json({ message: "Enter a company and vertical (up to 200 characters each)." }, { status: 422 });
  const terms = vertical.toLowerCase().split(/\s+/).filter(Boolean);
  const ranked = creators.map(creator => ({ creator, score: terms.filter(term => [creator.headline, creator.bio, ...creator.topics].join(" ").toLowerCase().includes(term)).length })).sort((a, b) => b.score - a.score || b.creator.fit - a.creator.fit);
  const matched = ranked.filter(item => item.score > 0);
  return NextResponse.json({ data: (matched.length ? matched : ranked).slice(0, 3).map(({ creator }) => ({ slug: creator.slug, name: creator.name, headline: creator.headline, pricePerPost: creator.pricePerPost })), fallback: !matched.length, demo: true });
}
