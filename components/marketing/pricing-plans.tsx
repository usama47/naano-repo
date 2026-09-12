import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Badge, Card, SectionLabel } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Self-serve",
    price: "Free",
    cadence: "You pay only each creator's price per post",
    pitch: "For teams that want to run creator campaigns in-house.",
    features: [
      "Full creator marketplace access",
      "Audience fit scoring and shortlists",
      "Brief builder with tracked links",
      "Per-post clicks, leads and spend reporting",
      "Automatic creator payouts",
    ],
    cta: { href: "/marketplace", label: "Start browsing" },
    highlighted: false,
  },
  {
    name: "Managed",
    price: "From €1,900",
    cadence: "per month, campaign spend separate",
    pitch: "For teams that want the channel operated end to end.",
    features: [
      "Everything in Self-serve",
      "Creator sourcing and negotiation",
      "Campaign strategy and positioning",
      "Brief writing and draft review",
      "Monthly reporting and optimisation",
      "Dedicated campaign manager",
    ],
    cta: { href: "/dashboard/campaigns/new", label: "Talk to us" },
    highlighted: true,
  },
];

export function PricingPlans() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-20">
      <SectionLabel>Pricing</SectionLabel>
      <h2 className="display mt-4 max-w-2xl text-4xl font-semibold sm:text-5xl">
        Start free. Pay for posts, not seats.
      </h2>
      <p className="mt-4 max-w-xl text-muted">
        Decide whether you want the infrastructure to run campaigns yourself, or a team to operate
        the channel for you. Campaign spend is separate in both cases.
      </p>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "flex flex-col p-8",
              plan.highlighted && "border-ink bg-ink text-white",
            )}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">{plan.name}</p>
              {plan.highlighted ? <Badge tone="dark">Done for you</Badge> : null}
            </div>

            <p className="display mt-6 text-4xl font-semibold">{plan.price}</p>
            <p className={cn("mt-2 text-sm", plan.highlighted ? "text-white/60" : "text-muted")}>
              {plan.cadence}
            </p>
            <p className={cn("mt-5 text-sm", plan.highlighted ? "text-white/80" : "text-muted")}>
              {plan.pitch}
            </p>

            <ul className="mt-7 flex-1 space-y-3 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-2.5">
                  <Check
                    className={cn(
                      "mt-0.5 size-4 shrink-0",
                      plan.highlighted ? "text-white" : "text-brand",
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <ButtonLink
              href={plan.cta.href}
              variant={plan.highlighted ? "inverse" : "primary"}
              size="lg"
              className="mt-8"
            >
              {plan.cta.label}
            </ButtonLink>
          </Card>
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-muted">
        No lock-in. Cancel anytime. Campaign spend is billed separately from the plan.
      </p>
    </section>
  );
}
