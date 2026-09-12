"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { formatEur } from "@/lib/utils";
type Match = { slug: string; name: string; headline: string; pricePerPost: number };
export default function SelectionPage() {
  const [matches, setMatches] = useState<Match[] | null>(null);
  const [fallback, setFallback] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  return <div className="bg-white pb-20"><div className="sky-photo py-16"><Container className="max-w-xl"><p className="text-[11px] font-semibold tracking-[0.16em] text-ink/45">FREE CREATOR SEARCH</p><h1 className="display mt-3 text-[40px] sm:text-[48px]">Find LinkedIn Creators for B2B</h1><p className="mt-3 text-ink/65">Explore sample creators matched to your vertical. Results appear here; no email is sent.</p></Container></div>
    <Container className="max-w-xl">{matches ? <section className="mt-10" aria-live="polite"><h2 className="text-xl font-semibold">{fallback ? "Explore these sample creators" : "Your sample shortlist"}</h2>{fallback && <p className="mt-2 text-sm text-muted">No exact vertical matches were found in the demo data.</p>}<div className="mt-4 grid gap-3">{matches.map(match => <Link key={match.slug} href={`/marketplace/${match.slug}`} className="rounded-2xl border border-border p-5 hover:border-ink"><p className="font-semibold">{match.name}</p><p className="mt-1 text-sm text-muted">{match.headline}</p><p className="mt-2 text-sm">{formatEur(match.pricePerPost)} per post · View profile</p></Link>)}</div><Button className="mt-5" variant="outline" onClick={() => setMatches(null)}>Start another search</Button></section> :
      <form className="mt-10 grid gap-4" onSubmit={async event => { event.preventDefault(); const data = Object.fromEntries(new FormData(event.currentTarget)); setPending(true); setError(""); try { const response = await fetch("/api/selection", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); const result = await response.json(); if (!response.ok) throw new Error(result.message || "Search failed."); setMatches(result.data); setFallback(result.fallback); } catch (error) { setError(error instanceof Error ? error.message : "Please try again."); } finally { setPending(false); } }}>
        <label className="grid gap-1 text-sm font-medium">Company<input name="company" required maxLength={200} placeholder="Example company" className="h-12 rounded-2xl border border-border px-4 font-normal" /></label>
        <label className="grid gap-1 text-sm font-medium">Vertical<input name="vertical" required maxLength={200} placeholder="e.g. RevOps" className="h-12 rounded-2xl border border-border px-4 font-normal" /></label>
        {error && <p role="alert" className="text-sm text-red-700">{error}</p>}<Button type="submit" disabled={pending} className="h-12 bg-[#17181C]">{pending ? "Finding matches…" : "Get creator matches"}</Button>
      </form>}</Container></div>;
}
