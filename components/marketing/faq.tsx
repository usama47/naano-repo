import { Plus } from "lucide-react";
import { SectionLabel } from "@/components/ui/primitives";

const faqs = [
  {
    q: "What exactly is naano?",
    a: "A marketplace where B2B companies discover and book vetted creators for sponsored posts. Each creator publishes a flat price per post, so the cost of a campaign is known before anything ships. Listed audiences range from niche voices with a few thousand followers to creators with six-figure followings.",
  },
  {
    q: "How are creators matched to my campaign?",
    a: "You describe the buyer you are trying to reach — seniority, industry, region and topic. Each creator profile is scored against that description using their audience breakdown and past post performance, and the marketplace sorts by that fit score rather than by follower count.",
  },
  {
    q: "Which networks are supported?",
    a: "LinkedIn is the core of the marketplace. Some creators also offer X, YouTube and newsletter placements, which show up as additional networks on their profile and can be booked in the same campaign.",
  },
  {
    q: "How does per-post pricing work?",
    a: "Creators set their own price and it is visible before you book. You pay that amount for a published post — there is no monthly platform fee for browsing, briefing or reporting, and no auction on top of the listed price.",
  },
  {
    q: "How does attribution work?",
    a: "Every booked post carries a UTM-tagged link unique to that creator. Clicks are recorded, then filtered to qualified clicks — real sessions with meaningful on-site time, with bot and accidental traffic removed. Those land in your dashboard next to the fee you paid, and in your own analytics via the UTM parameters.",
  },
  {
    q: "Who pays the creator?",
    a: "The platform does. naano is the counterparty on both sides, so brands are not chasing individual supplier invoices and creators are not invoicing strangers. Creators receive a periodic payment statement covering each campaign and the amount earned.",
  },
  {
    q: "Can I cancel or change plan later?",
    a: "Yes. The self-serve tier is free to use and campaign spend is always separate from the plan. The managed tier is month to month with no lock-in, so you can move between them as your programme changes.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20">
      <SectionLabel>FAQ</SectionLabel>
      <h2 className="display mt-4 text-4xl font-semibold sm:text-5xl">
        Questions worth asking first.
      </h2>

      <div className="mt-10 divide-y divide-border border-y border-border">
        {faqs.map((faq) => (
          <details key={faq.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[17px] font-medium [&::-webkit-details-marker]:hidden">
              {faq.q}
              <Plus className="size-4 shrink-0 text-muted transition-transform group-open:rotate-45" />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
