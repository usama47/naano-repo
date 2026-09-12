import type { Metadata } from "next";
import { BadgeCheck, Coins, FileCheck2, Wallet } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card, SectionLabel, Stat } from "@/components/ui/primitives";
import { marketplaceStats } from "@/lib/data/creators";
import { formatEur } from "@/lib/utils";

export const metadata: Metadata = {
  title: "For creators",
  description:
    "Set your own price per post, accept only the briefs you want, and get paid on statement without issuing invoices.",
};

const benefits = [
  {
    icon: Coins,
    title: "You set the price",
    body: "Publish a flat rate per post. Brands see it before they reach out, so negotiation is mostly over before the first message.",
  },
  {
    icon: FileCheck2,
    title: "You keep editorial control",
    body: "Briefs carry objectives and guardrails, not ghostwritten copy. Decline anything that does not fit your audience — declining costs you nothing.",
  },
  {
    icon: Wallet,
    title: "No invoices",
    body: "The platform pays you on a periodic statement covering each campaign. That matters if you are employed and cannot invoice commercially.",
  },
  {
    icon: BadgeCheck,
    title: "Your record travels with you",
    body: "Delivery rate, median impressions and qualified clicks build a track record that justifies raising your rate.",
  },
];

const steps = [
  "Apply with your profile and the topics you cover",
  "Pass the review — audience quality over follower count",
  "Publish your rate and the networks you offer",
  "Accept briefs that fit, publish in your own voice, get paid",
];

export default function ForCreatorsPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionLabel>For creators</SectionLabel>
            <h1 className="display mt-4 text-4xl font-semibold sm:text-5xl">
              Get paid properly for the audience you built.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted">
              Set a rate, choose the briefs worth your credibility, and stop chasing payment. Naano
              handles the contract and the money so you can focus on the post.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/dashboard" size="lg">
                Apply as a creator
              </ButtonLink>
              <ButtonLink href="#pricing" variant="outline" size="lg">
                How pricing works
              </ButtonLink>
            </div>
          </div>

          <Card className="p-6">
            <p className="text-sm font-medium">A typical month</p>
            <div className="mt-5 grid grid-cols-2 gap-6">
              <Stat value="3" label="Briefs accepted" hint="Out of 7 received" />
              <Stat value={formatEur(1290)} label="Paid out" hint="On statement, no invoice" />
              <Stat value="84K" label="Impressions" hint="Across accepted posts" />
              <Stat value="612" label="Qualified clicks" hint="Same count the brand sees" />
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="display max-w-2xl text-4xl font-semibold sm:text-5xl">
          Built around how creators actually work.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="p-6">
              <benefit.icon className="size-5 text-brand" />
              <p className="mt-5 text-lg font-semibold">{benefit.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{benefit.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="pricing" className="border-y border-border bg-surface py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <SectionLabel>Setting your rate</SectionLabel>
            <h2 className="display mt-4 text-4xl font-semibold">
              Price on audience, not on ego.
            </h2>
            <p className="mt-5 text-muted">
              The median post on the marketplace is {formatEur(marketplaceStats.medianPrice)}, and
              the spread inside every follower band is wide. Niche creators with a decision-maker
              audience regularly earn more per post than larger generalist accounts.
            </p>
            <p className="mt-4 text-muted">
              You can change your rate whenever you like. Bookings already accepted keep the price
              agreed at the time.
            </p>
          </div>

          <div id="payouts">
            <SectionLabel>Payouts</SectionLabel>
            <h2 className="display mt-4 text-4xl font-semibold">Paid on statement.</h2>
            <ol className="mt-6 space-y-4">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-ink text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-muted">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <h2 className="display text-4xl font-semibold sm:text-5xl">
          Ready to list your profile?
        </h2>
        <p className="mt-4 text-muted">
          Applications are reviewed for audience quality and topic depth. Listing is free and you
          are never obliged to accept a brief.
        </p>
        <ButtonLink href="/dashboard" size="lg" className="mt-8">
          Apply as a creator
        </ButtonLink>
      </section>
    </>
  );
}
