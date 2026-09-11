"use client";

import { useMemo, useState } from "react";
import { ToolField, toolInputClass } from "@/components/tools/fields";

const niches = [
  { id: "saas", label: "B2B SaaS / Tech", factor: 1.2 },
  { id: "finance", label: "Finance", factor: 1.15 },
  { id: "sales", label: "Sales / Marketing", factor: 1.1 },
  { id: "hr", label: "HR / Future of work", factor: 1.0 },
  { id: "other", label: "Other", factor: 0.9 },
] as const;

function roundTen(value: number) {
  return Math.max(100, Math.round(value / 10) * 10);
}

export function WorthCalculator() {
  const [followers, setFollowers] = useState(8500);
  const [reactions, setReactions] = useState(120);
  const [comments, setComments] = useState(25);
  const [posts, setPosts] = useState(3);
  const [niche, setNiche] = useState<(typeof niches)[number]["id"]>("saas");

  const result = useMemo(() => {
    const safeFollowers = Math.max(followers, 1);
    const engagement = (reactions + 2 * comments) / safeFollowers;
    const engagementPct = engagement * 100;
    const base = Math.max(100, (safeFollowers / 1000) * 12);
    const adj = Math.min(2, 0.6 + engagementPct / 2.5);
    const factor = niches.find((item) => item.id === niche)?.factor ?? 1;
    const mid = roundTen(base * adj * factor);
    const low = roundTen(mid * 0.8);
    const high = roundTen(mid * 1.2);
    const rating = engagementPct >= 4 ? "Excellent" : engagementPct >= 2 ? "Good" : engagementPct >= 1 ? "Average" : "Low";
    return { engagementPct, mid, low, high, monthlyLow: mid * 2, monthlyHigh: mid * Math.max(2, Math.min(4, posts)), rating };
  }, [followers, reactions, comments, posts, niche]);

  return (
    <div className="mx-auto grid max-w-[1100px] gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <form className="grid gap-4 rounded-[28px] border border-border bg-white p-6 shadow-[0_16px_50px_-40px_rgb(23_24_28/0.4)]" onSubmit={(e) => e.preventDefault()}>
        <p className="text-[15px] font-semibold">Your LinkedIn profile</p>
        <p className="text-sm text-muted">Type your numbers as they appear on LinkedIn. Nothing is scraped, stored, or sent anywhere.</p>
        <ToolField label="Follower count" hint="e.g. 8500">
          <input type="number" min={1} value={followers} onChange={(e) => setFollowers(Number(e.target.value))} className={toolInputClass} />
        </ToolField>
        <ToolField label="Average reactions per post" hint="e.g. 120">
          <input type="number" min={0} value={reactions} onChange={(e) => setReactions(Number(e.target.value))} className={toolInputClass} />
        </ToolField>
        <ToolField label="Average comments per post" hint="e.g. 25">
          <input type="number" min={0} value={comments} onChange={(e) => setComments(Number(e.target.value))} className={toolInputClass} />
        </ToolField>
        <ToolField label="Posts per week">
          <input type="number" min={1} max={7} value={posts} onChange={(e) => setPosts(Number(e.target.value))} className={toolInputClass} />
        </ToolField>
        <ToolField label="Niche">
          <select value={niche} onChange={(e) => setNiche(e.target.value as typeof niche)} className={toolInputClass}>
            {niches.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </ToolField>
      </form>
      <div className="rounded-[28px] bg-[#f6f8fb] p-6">
        <p className="text-[15px] font-semibold">Your estimate</p>
        <p className="mt-2 text-sm text-muted">
          Enter your follower count on the left and your estimate appears here instantly — engagement rate, a per-post rate range in euros, and your monthly sponsorship potential.
        </p>
        <p className="mt-6 text-sm text-muted">Engagement rate</p>
        <p className="mt-1 text-3xl font-semibold">
          {result.engagementPct.toFixed(2)}% <span className="text-base font-medium text-muted">{result.rating}</span>
        </p>
        <p className="mt-6 text-sm text-muted">Per-post rate range</p>
        <p className="mt-1 text-4xl font-semibold">
          €{result.low}–€{result.high}
        </p>
        <p className="mt-2 text-sm text-muted">Midpoint €{result.mid} / post</p>
        <p className="mt-6 text-sm text-muted">Monthly sponsorship potential</p>
        <p className="mt-1 text-2xl font-semibold">
          €{result.monthlyLow}–€{result.monthlyHigh}
        </p>
        <p className="mt-4 text-xs leading-5 text-muted">Indicative Naano-index range, not a quote. Floor €100. ±20% around the formula midpoint.</p>
      </div>
    </div>
  );
}

const erTiers = [
  { max: 2000, good: [5, 8], label: "Under 2,000 followers" },
  { max: 5000, good: [4, 6], label: "2,000 - 5,000 followers" },
  { max: 20000, good: [2.5, 4], label: "5,000 - 20,000 followers" },
  { max: 50000, good: [1.5, 2.5], label: "20,000 - 50,000 followers" },
  { max: Infinity, good: [1, 1.5], label: "50,000+ followers" },
];

function erBand(followers: number) {
  return erTiers.find((tier) => followers < tier.max) ?? erTiers[erTiers.length - 1];
}

export function EngagementCalculator() {
  const [followers, setFollowers] = useState(4500);
  const [reactions, setReactions] = useState(85);
  const [comments, setComments] = useState(20);
  const [reposts, setReposts] = useState(5);
  const [impressions, setImpressions] = useState(6000);

  const engagements = reactions + comments + reposts;
  const byFollowers = followers ? (engagements / followers) * 100 : 0;
  const byImpressions = impressions ? (engagements / impressions) * 100 : 0;
  const tier = erBand(followers);
  const rating =
    byFollowers > tier.good[1] ? "Excellent" : byFollowers >= tier.good[0] ? "Healthy" : "Below benchmark";

  return (
    <div className="mx-auto grid max-w-[820px] gap-6">
      <form
        className="grid gap-4 rounded-[28px] border border-border bg-white p-6 shadow-[0_16px_50px_-40px_rgb(23_24_28/0.4)] md:grid-cols-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <ToolField label="Follower count" hint="e.g. 4500">
          <input type="number" min={1} value={followers} onChange={(e) => setFollowers(Number(e.target.value))} className={toolInputClass} />
        </ToolField>
        <ToolField label="Average reactions per post" hint="Over your last ~10 posts">
          <input type="number" min={0} value={reactions} onChange={(e) => setReactions(Number(e.target.value))} className={toolInputClass} />
        </ToolField>
        <ToolField label="Average comments per post" hint="Over your last ~10 posts">
          <input type="number" min={0} value={comments} onChange={(e) => setComments(Number(e.target.value))} className={toolInputClass} />
        </ToolField>
        <ToolField label="Average reposts per post" hint="Over your last ~10 posts">
          <input type="number" min={0} value={reposts} onChange={(e) => setReposts(Number(e.target.value))} className={toolInputClass} />
        </ToolField>
        <ToolField label="Average impressions per post" hint="Optional — from LinkedIn analytics">
          <input type="number" min={0} value={impressions} onChange={(e) => setImpressions(Number(e.target.value))} className={toolInputClass} />
        </ToolField>
        <div className="rounded-2xl bg-[#f6f8fb] p-4">
          <p className="text-sm text-muted">By followers</p>
          <p className="text-3xl font-semibold">{byFollowers.toFixed(2)}%</p>
          <p className="mt-3 text-sm text-muted">By impressions</p>
          <p className="text-3xl font-semibold">{impressions ? `${byImpressions.toFixed(2)}%` : "—"}</p>
          <p className="mt-3 text-sm font-medium">{rating}</p>
        </div>
      </form>

      <div>
        <h2 className="display text-[28px] sm:text-[36px]">LinkedIn engagement rate benchmarks for B2B (2026)</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-ink/65">
          “Good” is relative to audience size: rates fall as follower counts grow. These ranges are engagement rate by followers for B2B accounts, drawn from campaigns run through the Naano marketplace [Naano marketplace data, Q2 2026].
        </p>
        <div className="mt-6 overflow-x-auto rounded-[24px] border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#f6f8fb] text-[12px] uppercase tracking-[0.08em] text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Follower tier</th>
                <th className="px-4 py-3 font-medium">Good rate (by followers)</th>
                <th className="px-4 py-3 font-medium">What it means</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Under 2,000 followers", "5% - 8%", "Small, warm audiences engage the most. Anything above 8% is exceptional."],
                ["2,000 - 5,000 followers", "4% - 6%", "The sweet spot for B2B micro-creators: reach with the audience still intact."],
                ["5,000 - 20,000 followers", "2.5% - 4%", "Rates dilute as the audience broadens beyond the core network."],
                ["20,000 - 50,000 followers", "1.5% - 2.5%", "Large accounts trade engagement depth for raw distribution."],
                ["50,000+ followers", "1% - 1.5%", "At this scale, a stable 1%+ rate still means serious absolute reach."],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-border">
                  {row.map((cell) => (
                    <td key={cell} className="px-4 py-3 text-ink/80">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const priceBands = [
  { max: 200, label: "Under €200", published: 30.4, unanswered: 41.6, bookings: 142 },
  { max: 400, label: "€200 – €399", published: 25.9, unanswered: 40.9, bookings: 70 },
  { max: 600, label: "€400 – €599", published: 34.6, unanswered: 25.0, bookings: 36 },
  { max: Infinity, label: "€600 and above", published: 64.6, unanswered: 19.2, bookings: 52 },
];

function bandFor(price: number) {
  return priceBands.find((band) => price < band.max) ?? priceBands[priceBands.length - 1];
}

const audienceTiers = [
  { id: "u5k", label: "Under 5,000 followers" },
  { id: "5-10k", label: "5,000 – 10,000 followers" },
  { id: "10-25k", label: "10,000 – 25,000 followers" },
  { id: "25-50k", label: "25,000 – 50,000 followers" },
  { id: "50k+", label: "50,000+ followers" },
] as const;

export function DeliveryOdds() {
  const [audience, setAudience] = useState<(typeof audienceTiers)[number]["id"]>("5-10k");
  const [offer, setOffer] = useState<number | "">("");
  const price = offer === "" ? 0 : Number(offer);
  const band = price ? bandFor(price) : null;
  const audienceLabel = audienceTiers.find((tier) => tier.id === audience)?.label;

  return (
    <div className="mx-auto grid max-w-[820px] gap-8">
      <form className="rounded-2xl border border-[#ECEAE6] bg-white p-6 shadow-[0_18px_44px_rgba(23,24,28,0.08)] sm:p-8" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-6 sm:grid-cols-2">
          <ToolField label="Creator audience size">
            <select value={audience} onChange={(e) => setAudience(e.target.value as typeof audience)} className={toolInputClass}>
              {audienceTiers.map((tier) => (
                <option key={tier.id} value={tier.id}>
                  {tier.label}
                </option>
              ))}
            </select>
          </ToolField>
          <ToolField label="Your offer per post (€)">
            <input
              type="number"
              min={1}
              placeholder="e.g. 250"
              value={offer}
              onChange={(e) => setOffer(e.target.value === "" ? "" : Number(e.target.value))}
              className={toolInputClass}
            />
          </ToolField>
        </div>
        <div className="mt-8 border-t border-[#ECEAE6] pt-8">
          {band ? (
            <div>
              <p className="text-sm text-[#6B6D74]">
                {band.label} · {audienceLabel}
              </p>
              <p className="mt-3 text-4xl font-semibold">{band.published}% published</p>
              <p className="mt-2 text-lg text-[#55575E]">{band.unanswered}% never answered</p>
              <p className="mt-4 text-sm text-[#6B6D74]">
                Across {band.bookings} bookings in this band on the Naano Index (n=300, 14 June – 11 August 2026). Correlation, not a causal claim.
              </p>
            </div>
          ) : (
            <p className="text-[16px] leading-relaxed text-[#55575E]">
              Enter what you plan to offer per post to see how often bookings at that price actually ended in a published post on Naano's marketplace.
            </p>
          )}
        </div>
      </form>

      <div>
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#17181C] sm:text-[38px]">
          What happens to an offer, by price band<span className="text-[#1652F0]">.</span>
        </h2>
        <p className="mt-4 text-[16px] leading-[1.65] text-[#55575E]">
          Every sponsored-post booking created on Naano between 14 June and 11 August 2026, excluding bookings still awaiting a decision from the delivery-rate denominator. “Never answered” means the offer window closed without the creator responding at all.
        </p>
        <div className="mt-6 overflow-x-auto rounded-[24px] border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#f6f8fb] text-[12px] uppercase tracking-[0.08em] text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Price per post</th>
                <th className="px-4 py-3 font-medium">Bookings</th>
                <th className="px-4 py-3 font-medium">Published</th>
                <th className="px-4 py-3 font-medium">Never answered</th>
              </tr>
            </thead>
            <tbody>
              {priceBands.map((row) => (
                <tr key={row.label} className={`border-t border-border ${row.label === band?.label ? "bg-[#eaf6fd]" : ""}`}>
                  <td className="px-4 py-3 font-medium">{row.label}</td>
                  <td className="px-4 py-3">{row.bookings}</td>
                  <td className="px-4 py-3">{row.published}%</td>
                  <td className="px-4 py-3">{row.unanswered}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted">[Naano Index, n=300 bookings, 14 June – 11 August 2026]</p>
      </div>

      <div>
        <h2 className="display text-[28px] sm:text-[36px]">What brands actually paid, by audience size.</h2>
        <div className="mt-6 overflow-x-auto rounded-[24px] border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#f6f8fb] text-[12px] uppercase tracking-[0.08em] text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Creator audience</th>
                <th className="px-4 py-3 font-medium">n</th>
                <th className="px-4 py-3 font-medium">P25</th>
                <th className="px-4 py-3 font-medium">Median</th>
                <th className="px-4 py-3 font-medium">P75</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Under 5,000 followers", 66, 56, 84, 120],
                ["5,000 – 10,000 followers", 64, 88, 180, 423],
                ["10,000 – 25,000 followers", 118, 122, 300, 360],
                ["25,000 – 50,000 followers", 36, 345, 588, 606],
                ["50,000+ followers", 16, 499, 720, 900],
              ].map((row) => (
                <tr key={String(row[0])} className={`border-t border-border ${row[0] === audienceLabel ? "bg-[#eaf6fd]" : ""}`}>
                  <td className="px-4 py-3">{row[0]}</td>
                  <td className="px-4 py-3">{row[1]}</td>
                  <td className="px-4 py-3">€{row[2]}</td>
                  <td className="px-4 py-3">€{row[3]}</td>
                  <td className="px-4 py-3">€{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const allocations = [
  { id: "spread", label: "Spread", note: "Under 5,000 followers. Most posts per euro, lowest delivery rate.", price: 84, rate: 30.4 },
  { id: "mid", label: "Mid-tier", note: "10,000 – 25,000 followers.", price: 300, rate: 25.9 },
  { id: "concentrated", label: "Concentrated", note: "50,000+ followers. Fewest posts, strongest observed delivery.", price: 720, rate: 64.6 },
];

export function BudgetPlanner() {
  const [budget, setBudget] = useState(5000);
  const [custom, setCustom] = useState<number | "">("");
  const customPrice = custom === "" ? null : Number(custom);

  const rows = allocations.map((item) => {
    const booked = Math.floor(budget / item.price);
    const published = booked * (item.rate / 100);
    return { ...item, booked, published, perPublished: published ? Math.round(budget / published) : 0 };
  });

  const customBand = customPrice ? bandFor(customPrice) : null;
  const customBooked = customPrice ? Math.floor(budget / customPrice) : 0;
  const customPublished = customBand ? customBooked * (customBand.published / 100) : 0;

  return (
    <div className="mx-auto grid max-w-[820px] gap-8">
      <form className="grid gap-4 rounded-[28px] border border-border bg-white p-6 md:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
        <ToolField label="Your campaign budget (€)" hint="e.g. 5000">
          <input type="number" min={1} value={budget} onChange={(e) => setBudget(Number(e.target.value))} className={toolInputClass} />
        </ToolField>
        <ToolField label="Your own price per post (€) — optional" hint="e.g. 250">
          <input
            type="number"
            min={1}
            value={custom}
            onChange={(e) => setCustom(e.target.value === "" ? "" : Number(e.target.value))}
            className={toolInputClass}
          />
        </ToolField>
      </form>

      <div>
        <h2 className="display text-[28px] sm:text-[36px]">The three allocations, and where they come from.</h2>
        <div className="mt-6 overflow-x-auto rounded-[24px] border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#f6f8fb] text-[12px] uppercase tracking-[0.08em] text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Allocation</th>
                <th className="px-4 py-3 font-medium">Median price</th>
                <th className="px-4 py-3 font-medium">Booked</th>
                <th className="px-4 py-3 font-medium">Expected published</th>
                <th className="px-4 py-3 font-medium">€ / published</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-t border-border">
                  <td className="px-4 py-3">
                    <p className="font-medium">{row.label}</p>
                    <p className="text-xs text-muted">{row.note}</p>
                  </td>
                  <td className="px-4 py-3">€{row.price}</td>
                  <td className="px-4 py-3">{row.booked}</td>
                  <td className="px-4 py-3">{row.published.toFixed(1)}</td>
                  <td className="px-4 py-3">€{row.perPublished}</td>
                </tr>
              ))}
              {customPrice && customBand ? (
                <tr className="border-t border-border bg-[#eaf6fd]">
                  <td className="px-4 py-3 font-medium">Your price ({customBand.label})</td>
                  <td className="px-4 py-3">€{customPrice}</td>
                  <td className="px-4 py-3">{customBooked}</td>
                  <td className="px-4 py-3">{customPublished.toFixed(1)}</td>
                  <td className="px-4 py-3">€{customPublished ? Math.round(budget / customPublished) : "—"}</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted">[Naano Index, n=300 bookings, 14 June – 11 August 2026]. Expected published posts are an average, not a guarantee.</p>
      </div>
    </div>
  );
}
