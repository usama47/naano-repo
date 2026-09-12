import type { Metadata } from "next";
import { BudgetPlanner } from "@/components/tools/calculators";
import { ToolShell } from "@/components/tools/tool-shell";

export const metadata: Metadata = {
  title: "Creator Campaign Budget Planner (Free) — Naano",
  description: "Enter a budget and see how many sponsored LinkedIn posts it books at real transacted medians — and how many historically ended in a published post.",
};

export default function Page() {
  return (
    <ToolShell
      currentHref="/free-tools/creator-campaign-budget-planner"
      workKey="budget"
      title="Creator Campaign Budget Planner."
      lede="Enter a budget and see how many sponsored LinkedIn posts it books at real transacted medians — and, more usefully, how many of those historically ended in a published post. Built on 300 real bookings. Free, no account, nothing leaves your browser."
      howTitle="Method, and what this planner does not claim."
      how={
        <>
          <p>
            Each allocation uses the transacted median price for a real follower tier, then applies the historical settled delivery rate for the price band that median falls into. Bookings still awaiting a decision are excluded from the delivery-rate denominator.
          </p>
          <p>
            Expected published posts are an average, not a guarantee. A 30.4% delivery rate applied to ten bookings gives an expectation of about three published posts, but the actual outcome for any single campaign varies widely.
          </p>
          <p>
            This planner does not assume that paying more causes a post to be delivered. It applies observed historical rates to a budget.
          </p>
        </>
      }
      faq={[
        {
          q: "How many sponsored LinkedIn posts can I get for my budget?",
          a: "Divide the budget by the transacted median for the audience size you are buying, then multiply by the historical delivery rate for that price band. A €5,000 budget books 59 posts at €84 but historically produced around 18 published ones.",
        },
        {
          q: "Why should I plan on published posts instead of booked posts?",
          a: "Because the two differ by a factor of three to five. Of bookings that reached a final state, 30.4% priced under €200 ended in a published post against 64.6% priced at €600 or more.",
        },
        {
          q: "Is it cheaper per published post to book many small creators or a few large ones?",
          a: "Many small creators, by a wide margin on these historical rates. The lowest band costs roughly €280 per published post, against roughly €1,100–€1,300 for the mid-tier and concentrated allocations.",
        },
        {
          q: "How long should I allow between booking a creator and the post going live?",
          a: "Plan on 14 days rather than 8. Delivered bookings took a median of 8.0 days from booking to published post, with a 90th percentile of 14.1 days [Naano Index, n=89 delivered bookings].",
        },
      ]}
    >
      <BudgetPlanner />
    </ToolShell>
  );
}
