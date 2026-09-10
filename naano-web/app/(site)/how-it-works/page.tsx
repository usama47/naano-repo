import type { Metadata } from "next";
import { Link2, Receipt, ShieldCheck, Target } from "lucide-react";
import { Faq } from "@/components/marketing/faq";
import { FinalCta, HowItWorksSteps } from "@/components/marketing/sections";
import { Card, SectionLabel } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "From shortlist to attribution: how campaigns run on naano, how qualified clicks are counted, and how creators get paid.",
};

const attribution = [
  {
    icon: Link2,
    title: "One tracked link per creator",
    body: "When a brief goes out, each creator receives a destination URL carrying campaign and creator UTM parameters. The same link lands in your own analytics, so nothing is locked inside the platform.",
  },
  {
    icon: Target,
    title: "Clicks, then qualified clicks",
    body: "Raw clicks are recorded first. A click becomes qualified when the session shows real on-site engagement — roughly half a minute or more — which filters out accidental taps and automated traffic.",
  },
  {
    icon: Receipt,
    title: "Results sit next to the fee",
    body: "Each post shows impressions, qualified clicks and attributed leads against the flat price you paid, so cost per outcome is a per-creator number rather than a channel average.",
  },
  {
    icon: ShieldCheck,
    title: "Both sides see the same count",
    body: "Creators see the same qualified-click figures as the brand. Nobody is arguing about screenshots at the end of the month.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionLabel>How it works</SectionLabel>
          <h1 className="display mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl">
            A creator campaign, without the coordination tax.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Discovery, briefing, draft review, tracking and payment run in one workflow. You choose
            the creators and the message; the platform handles the plumbing.
          </p>
        </div>
      </section>

      <HowItWorksSteps />

      <section id="attribution" className="mx-auto max-w-6xl px-5 py-20">
        <SectionLabel>Attribution</SectionLabel>
        <h2 className="display mt-4 max-w-2xl text-4xl font-semibold sm:text-5xl">
          Every result belongs to a post.
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Creator marketing usually fails on measurement, not on content. The model here is
          deliberately simple, so the numbers survive a conversation with finance.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {attribution.map((item) => (
            <Card key={item.title} className="p-6">
              <item.icon className="size-5 text-brand" />
              <p className="mt-5 text-lg font-semibold">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface py-20">
        <div className="mx-auto max-w-3xl px-5">
          <SectionLabel>Payments</SectionLabel>
          <h2 className="display mt-4 text-4xl font-semibold">
            The platform is the counterparty.
          </h2>
          <div className="mt-6 space-y-4 text-muted">
            <p>
              Most B2B creators are employed professionals. They often cannot issue a commercial
              invoice, which is where creator programmes quietly die in procurement.
            </p>
            <p>
              Here the brand pays the platform for booked posts, and the platform pays creators on a
              periodic statement listing each campaign and the amount earned. The brand gets one
              transaction history instead of a pile of supplier invoices; the creator gets a
              statement instead of a request to invoice a stranger.
            </p>
          </div>
        </div>
      </section>

      <Faq />
      <FinalCta />
    </>
  );
}
