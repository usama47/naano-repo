import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrandDarkCta, BrandKicker, CheckLine, DarkButton } from "@/components/marketing/brand-blocks";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Naano pricing: Self-Serve is €0/month and each creator sets a fixed offer price. Managed Campaigns is €700/month, done for you.",
  alternates: { canonical: "/pricing" },
};

const faq = [
  {
    q: "What's the minimum budget to start on Naano?",
    a: "Self-Serve is €0 per month. Creator spend depends on the offers you book, and the exact fixed price is shown before you commit.",
  },
  {
    q: "How much does a single post cost?",
    a: "Each creator sets a fixed price for their offer. You see the amount and included deliverables before booking; there is no cost per click or impression.",
  },
  {
    q: "Can I upgrade to Managed Campaigns or cancel anytime?",
    a: "Yes. Both plans are month-to-month with no lock-in. You can move from Self-Serve to Managed Campaigns, downgrade, or cancel whenever you like. Campaign spend is always separate from the plan fee.",
  },
  {
    q: "How do creator payouts work?",
    a: "Creators are paid automatically through Stripe Connect once you approve their content. Invoices, approvals and payment records are handled inside the platform on both Self-Serve and Managed Campaigns.",
  },
  {
    q: "What exactly is included in the €700/month Managed plan?",
    a: "Managed Campaigns adds a dedicated Naano team that handles campaign strategy, creator sourcing and coordination, brief creation, campaign launch, and reporting and optimisation, on top of everything in Self-Serve.",
  },
  {
    q: "Do you still charge per click?",
    a: "No. Marketplace offers use a fixed price shown before booking, with no cost per click, impression, or lead.",
  },
];

const included = [
  "Browse eligible LinkedIn creator profiles and fixed-price offers",
  "Tracking from click to lead to pipeline for every post",
  "Automatic creator payouts via Stripe Connect",
  "Month-to-month billing, no lock-in",
];

export default function PricingPage() {
  return (
    <div className="bg-white">
      <section className="px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-[820px] text-center">
          <BrandKicker>Pricing</BrandKicker>
          <h1 className="mb-6 text-[clamp(32px,5vw,56px)] font-light leading-[1.1] tracking-[-0.025em] text-[#111827]">
            Naano pricing
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#6B7280]">
            Naano offers two ways to run LinkedIn creator campaigns. Self-Serve costs €0 per month: you get full platform access and pay creators at the fixed price shown on their offer. Managed Campaigns costs €700 per month and adds a Naano team that sources creators, writes briefs and runs your campaigns end to end.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-[900px]">
          <div className="overflow-x-auto rounded-2xl border border-[#E5E7EB]">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#F3F4F6]">
                  <th className="w-[22%] p-5 text-sm font-semibold uppercase tracking-[0.08em] text-[#6B7280]"> </th>
                  <th className="p-5 text-base font-bold text-[#111827]">Self-Serve</th>
                  <th className="p-5 text-base font-bold text-[#111827]">Managed Campaigns</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#E5E7EB]">
                  <th scope="row" className="p-5 align-top text-sm font-semibold text-[#6B7280]">
                    Price
                  </th>
                  <td className="p-5 align-top text-sm leading-relaxed text-[#111827]">€0 / month</td>
                  <td className="p-5 align-top text-sm leading-relaxed text-[#111827]">€700 / month</td>
                </tr>
                <tr className="border-t border-[#E5E7EB]">
                  <th scope="row" className="p-5 align-top text-sm font-semibold text-[#6B7280]">
                    What's included
                  </th>
                  <td className="p-5 align-top text-sm leading-relaxed text-[#111827]">
                    Creator marketplace access, AI-powered brief creation, click/lead/pipeline tracking, automatic creator payouts
                  </td>
                  <td className="p-5 align-top text-sm leading-relaxed text-[#111827]">
                    Campaign strategy & positioning, creator sourcing & coordination, brief creation & launch, reporting & optimisation
                  </td>
                </tr>
                <tr className="border-t border-[#E5E7EB]">
                  <th scope="row" className="p-5 align-top text-sm font-semibold text-[#6B7280]">
                    Creator payment
                  </th>
                  <td className="p-5 align-top text-sm leading-relaxed text-[#111827]">You book the creator's published fixed-price offer</td>
                  <td className="p-5 align-top text-sm leading-relaxed text-[#111827]">Naano manages creator payments on your behalf</td>
                </tr>
                <tr className="border-t border-[#E5E7EB]">
                  <th scope="row" className="p-5 align-top text-sm font-semibold text-[#6B7280]">
                    Support
                  </th>
                  <td className="p-5 align-top text-sm leading-relaxed text-[#111827]">Self-serve platform, help center + email</td>
                  <td className="p-5 align-top text-sm leading-relaxed text-[#111827]">Dedicated Naano team, book a campaign call</td>
                </tr>
                <tr className="border-t border-[#E5E7EB]">
                  <th className="p-5 align-top" />
                  <td className="p-5 align-top">
                    <Link
                      href="/register"
                      className="inline-flex items-center gap-2 border-b-[1.5px] border-[#111827] pb-0.5 text-sm font-semibold text-[#111827]"
                    >
                      Start for free <ArrowRight className="size-3.5" />
                    </Link>
                  </td>
                  <td className="p-5 align-top">
                    <Link
                      href="/book"
                      className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#17181C] px-5 text-sm font-semibold text-white hover:bg-black"
                    >
                      Book a campaign call <ArrowRight className="size-3.5" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-sm text-[#6B7280]">Campaign spend is separate from the plan fee. No lock-in, cancel anytime.</p>
        </div>
      </section>

      <section className="bg-[#F3F4F6] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-[760px]">
          <BrandKicker>How it works</BrandKicker>
          <h2 className="mb-6 text-[clamp(24px,3vw,36px)] font-light leading-[1.15] tracking-[-0.02em] text-[#111827]">
            How per-post pricing works
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-[#6B7280]">
            <p>Marketplace offers use a fixed price chosen by the creator. The amount and included deliverables are visible before you book; there is no cost per click, impression, or lead.</p>
            <p>You review and approve the content a creator submits. Once approved, the post goes live and payment is released to the creator automatically through Stripe Connect, invoices and approvals are handled for you inside the platform.</p>
            <p>On Self-Serve there is no platform retainer; you fund the offers you choose. On Managed Campaigns, creator spend remains separate and the €700 monthly fee covers the Naano team running the campaign for you.</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-[820px]">
          <h2 className="mb-10 text-center text-[clamp(24px,3vw,36px)] font-light leading-[1.15] tracking-[-0.02em] text-[#111827]">
            Pricing FAQ
          </h2>
          <div className="divide-y divide-[#E5E7EB]">
            {faq.map((item) => (
              <div key={item.q} className="py-6">
                <h3 className="mb-2 text-lg font-semibold text-[#111827]">{item.q}</h3>
                <p className="text-base leading-relaxed text-[#6B7280]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F4F6] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-[760px]">
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#6B7280]">Both plans include</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {included.map((item) => (
                <div key={item} className="text-sm leading-relaxed text-[#6B7280]">
                  <CheckLine blue>{item}</CheckLine>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BrandDarkCta
        title="Start free, upgrade when you're ready."
        body="Self-Serve is €0 per month. Managed Campaigns is €700 per month. Creator spend is separate and shown before every booking."
        actions={
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <DarkButton href="/register" light>
              Start for free
            </DarkButton>
            <DarkButton href="/book">Book a campaign call</DarkButton>
          </div>
        }
      />
    </div>
  );
}
