import type { Metadata } from "next";
import { EngagementCalculator } from "@/components/tools/calculators";
import { ToolShell } from "@/components/tools/tool-shell";

export const metadata: Metadata = {
  title: "LinkedIn Engagement Rate Calculator (Free) — Naano",
  description: "Type your follower count and per-post averages, get your engagement rate instantly — rated against 2026 B2B benchmarks.",
};

export default function Page() {
  return (
    <ToolShell
      currentHref="/free-tools/linkedin-engagement-rate-calculator"
      workKey="engagement"
      title="LinkedIn Engagement Rate Calculator."
      lede="Type your follower count and per-post averages, get your engagement rate instantly — by followers and by impressions — rated against 2026 B2B benchmarks. Free, no account, nothing leaves your browser."
      howTitle="How it's calculated."
      how={
        <>
          <p>
            <span className="font-semibold">Engagement rate by followers:</span> (reactions + comments + reposts) / followers × 100. The standard, comparable metric. Averages are taken over your last ~10 posts so a single viral outlier does not distort the result.
          </p>
          <p>
            <span className="font-semibold">Engagement rate by impressions:</span> (reactions + comments + reposts) / impressions × 100. The fairer metric — it isolates content quality from distribution luck. You will find average impressions in your LinkedIn analytics.
          </p>
        </>
      }
      faq={[
        {
          q: "What is a good engagement rate on LinkedIn in 2026?",
          a: "It depends on audience size. As a rule of thumb for B2B accounts: under 2,000 followers, 5–8% by followers is good; 2,000–5,000, 4–6%; 5,000–20,000, 2.5–4%; 20,000–50,000, 1.5–2.5%; and above 50,000, 1–1.5%. Rates above those ranges are excellent.",
        },
        {
          q: "Should I measure engagement rate by followers or by impressions?",
          a: "Use both. By-followers is the standard public metric because anyone can compute it. By-impressions divides the same engagements by how many people actually saw the post, so it measures content quality independently of distribution.",
        },
        {
          q: "Why do micro-creators have higher engagement rates than large accounts?",
          a: "Smaller audiences are denser: a 3,000-follower creator is mostly followed by people who know their niche, while a 100,000-follower account accumulates passive followers. This is why B2B sponsors increasingly prefer several micro-creators over one large account for the same budget.",
        },
        {
          q: "How do sponsors use engagement rate to set flat-fee post rates?",
          a: "On marketplaces like Naano, each creator sets a flat fee per sponsored post, starting from €100. Sponsors compare that fee against engagement rate and audience fit. A strong, documented engagement rate is the single best argument for setting a higher per-post rate.",
        },
      ]}
    >
      <EngagementCalculator />
    </ToolShell>
  );
}
