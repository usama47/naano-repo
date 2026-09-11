"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Naano?",
    a: "Naano is a B2B LinkedIn creator marketplace: companies discover and book vetted creators for sponsored LinkedIn campaigns, each at a fixed price per post set by the creator. The marketplace spans creators from niche voices with around 1,000 followers to established B2B creators with audiences of several hundred thousand.",
  },
  {
    q: "How does Naano find the right creators?",
    a: "You describe the buyers you want to reach. Creators are scored on audience fit — seniority, industry and topics — before follower count.",
  },
  {
    q: "Which networks do you support?",
    a: "LinkedIn is the core network. Some creators also offer X placements in the same campaign.",
  },
  {
    q: "How does per-post pricing work?",
    a: "Each creator publishes a flat fee per post. You see the price before you book. There is no monthly platform fee on the free plan.",
  },
  {
    q: "How does attribution work?",
    a: "Every post carries tracked links. Clicks, companies and pipeline are attributed back to the creator and the post.",
  },
  {
    q: "Do you handle creator payouts?",
    a: "Yes. Naano is the counterparty: brands pay the platform, creators are paid on statement, usually within 24h of the live post.",
  },
  {
    q: "What's the difference between Free and Done for you?",
    a: "Free is self-serve infrastructure. Done for you is a custom quote where Naano operates sourcing, briefs, launch and reporting.",
  },
  {
    q: "Can I upgrade or cancel anytime?",
    a: "Yes. Campaign spend is separate. No lock-in. Cancel anytime.",
  },
];

export function FaqList() {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-border">
      {faqs.map((faq, index) => {
        const active = open === index;
        return (
          <div key={faq.q}>
            <button
              type="button"
              onClick={() => setOpen(active ? -1 : index)}
              className={`flex w-full items-center justify-between gap-6 py-7 text-left ${active ? "rounded-2xl bg-[#f4f7fb] px-5" : ""}`}
            >
              <span className="text-[17px] font-medium">{faq.q}</span>
              <ChevronDown className={`size-4 shrink-0 text-ink/40 ${active ? "rotate-180" : ""}`} />
            </button>
            {active ? <p className="px-5 pb-7 text-[15px] leading-7 text-ink/60">{faq.a}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
