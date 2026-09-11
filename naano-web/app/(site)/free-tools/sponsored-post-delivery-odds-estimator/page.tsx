import type { Metadata } from "next";
import { DeliveryOdds } from "@/components/tools/calculators";
import { ToolShell } from "@/components/tools/tool-shell";

export const metadata: Metadata = {
  title: "Sponsored Post Delivery Odds Estimator (Free) — Naano",
  description: "Enter what you plan to offer a LinkedIn creator per post. We compare it to 300 real sponsored-post bookings.",
};

export default function Page() {
  return (
    <ToolShell
      currentHref="/free-tools/sponsored-post-delivery-odds-estimator"
      workKey="delivery"
      title="Sponsored Post Delivery Odds Estimator."
      lede="Enter what you plan to offer a LinkedIn creator per post. We compare it to 300 real sponsored-post bookings and tell you how often offers at that price actually ended in a published post. Free, no account, nothing leaves your browser."
      howTitle="Method, and what this tool does not claim."
      how={
        <>
          <p>
            Source. Naano's own marketplace database, queried read-only on 11 August 2026. Every sponsored-post booking created between 14 June and 11 August 2026, normalised to price per post (n=300). Bookings placed by Naano itself as a buyer are excluded.
          </p>
          <p>
            This is a correlation, not a causal claim. Paying €600 does not make a post appear. A brand paying €600 usually also has a real budget, a written brief, and someone internally who chases the campaign.
          </p>
          <p>
            What is deliberately absent: no impressions, reach or cost-per-lead figure appears on this page. LinkedIn does not expose post impressions for third-party posts.
          </p>
        </>
      }
      faq={[
        {
          q: "What are the odds a sponsored LinkedIn post offer actually gets published?",
          a: "Observed delivery rates vary by price band. Across 300 bookings, 64.6% of settled bookings priced at €600 or more ended in a published post, against 30.4% of those priced under €200. The €200–€399 band was 25.9% and €400–€599 was 34.6% [Naano Index, n=300].",
        },
        {
          q: "Why do cheap sponsored post offers fail?",
          a: "41.6% of offers under €200 and 40.9% of offers between €200 and €399 expired without the creator responding, versus 19.2% of offers above €600. These rates are risk signals rather than causal estimates.",
        },
        {
          q: "What is the median price actually paid for a sponsored LinkedIn post?",
          a: "€84 per post for a creator under 5,000 followers, €180 for 5,000–10,000, €300 for 10,000–25,000, €588 for 25,000–50,000, and €720 above 50,000 followers. Transacted prices, brand-side and excluding VAT [Naano Index, n=300].",
        },
        {
          q: "Should I just offer the creator's listed rate?",
          a: "In most cases, yes, for a first booking. Follower count explains under a third of the variance in what creators charge. The creator's own published rate is a far better anchor than any tier benchmark.",
        },
      ]}
    >
      <DeliveryOdds />
    </ToolShell>
  );
}
