import type { Metadata } from "next";
import { WorthCalculator } from "@/components/tools/calculators";
import { ToolShell } from "@/components/tools/tool-shell";

export const metadata: Metadata = {
  title: "LinkedIn Creator Worth Calculator — Free | Naano",
  description: "Find out what a sponsored LinkedIn post is worth as a flat fee in euros, based on real Naano marketplace rates.",
};

export default function Page() {
  return (
    <ToolShell
      currentHref="/free-tools/linkedin-creator-worth-calculator"
      workKey="worth"
      title="LinkedIn Creator Worth Calculator."
      lede="Find out what a sponsored LinkedIn post is worth — as a flat fee in euros. Type your followers and engagement, get an instant range based on real Naano marketplace rates. Free, no account, nothing leaves your browser."
      howTitle="How the estimate works."
      how={
        <>
          <p>
            No black box: here is the exact formula, calibrated on flat fees actually paid for sponsored posts on the Naano marketplace, where creators charge from €100 up to roughly €1,500 per post [Naano marketplace data, Q2 2026].
          </p>
          <ol className="grid gap-5">
            <li>
              <p className="font-semibold">1. Engagement rate</p>
              <p>(average reactions + 2 × average comments) ÷ followers. Comments are weighted double because they signal an audience that actually reads and responds. 4% and above is excellent, 2–4% good, 1–2% average, below 1% low.</p>
            </li>
            <li>
              <p className="font-semibold">2. Base value</p>
              <p>€12 per 1,000 followers, with a floor of €100 — the minimum flat fee on Naano.</p>
            </li>
            <li>
              <p className="font-semibold">3. Engagement adjustment</p>
              <p>The base is multiplied by 0.6 + (engagement rate ÷ 2.5), capped at ×2. A creator at the 4% excellent threshold roughly doubles their base value.</p>
            </li>
            <li>
              <p className="font-semibold">4. Niche multiplier</p>
              <p>B2B SaaS / Tech ×1.2, Finance ×1.15, Sales / Marketing ×1.1, HR / Future of work ×1.0, Other ×0.9.</p>
            </li>
            <li>
              <p className="font-semibold">5. Range and monthly potential</p>
              <p>The result is shown as a ±20% range, rounded to the nearest €10, never below €100. Monthly potential assumes 2 to 4 sponsored posts per month.</p>
            </li>
          </ol>
        </>
      }
      faq={[
        {
          q: "How accurate is this calculator?",
          a: "It is an estimate, not a quote. The formula is calibrated on flat fees actually paid on the Naano marketplace (Q2 2026), where sponsored posts run from €100 to roughly €1,500 depending on audience and engagement. Treat the range as a starting point, not a guarantee.",
        },
        {
          q: "What makes a LinkedIn creator worth more?",
          a: "Engagement quality beats follower count. A creator with 8,000 followers and a 5% engagement rate is typically worth more per post than one with 50,000 followers and 0.5%. Rates also rise with niche, comment depth, posting consistency, and how senior the audience is.",
        },
        {
          q: "How do creators get paid on Naano?",
          a: "Each creator sets a flat fee per sponsored post, starting from €100. Companies see that price up front, book the post, and the creator is paid the fee once the post is published.",
        },
        {
          q: "Can companies use this calculator to budget?",
          a: "Yes. Enter the public numbers of a creator you are considering and the per-post range tells you what a fair flat fee looks like before you reach out. For a full campaign, use the budget planner or request a free shortlist.",
        },
      ]}
    >
      <WorthCalculator />
    </ToolShell>
  );
}
