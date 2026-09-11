"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";

export type FaqItem = { q: string; a: string };

export function PageFaq({
  items,
  title = "Frequently asked questions.",
  intro,
}: {
  items: FaqItem[];
  title?: string;
  intro?: string;
}) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-16">
      <Container className="max-w-3xl">
        <h2 className="display text-[36px] sm:text-[44px]">{title}</h2>
        {intro ? <p className="mt-3 text-sm text-muted">{intro}</p> : null}
        <div className="mt-8 divide-y divide-border border-y border-border">
          {items.map((faq, index) => {
            const active = open === index;
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpen(active ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-[17px] font-medium">{faq.q}</span>
                  <ChevronDown className={`size-4 shrink-0 text-ink/40 ${active ? "rotate-180" : ""}`} />
                </button>
                {active ? <p className="pb-6 text-[15px] leading-7 text-ink/65">{faq.a}</p> : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
