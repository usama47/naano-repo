import { PageIntro } from "@/components/dashboard/empty-state";
import { Card } from "@/components/ui/primitives";
import { ButtonLink } from "@/components/ui/button";

export const metadata = { title: "Analytics" };

const kpis = [
  { label: "Impressions", value: "0", hint: "After your first published post" },
  { label: "Qualified clicks", value: "0", hint: "30s+ on-site sessions" },
  { label: "Engagement rate", value: "—", hint: "Reactions ÷ impressions" },
  { label: "Earned", value: "€0", hint: "Lifetime, before payout" },
];

export default function AnalyticsPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <PageIntro
        title="Analytics"
        subtitle="Reach, clicks and earnings on every post you publish through Naano. Nothing is estimated."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <Card key={kpi.label} className="p-5">
            <p className="text-sm text-muted">{kpi.label}</p>
            <p className="display mt-2 text-2xl font-semibold tabular-nums">{kpi.value}</p>
            <p className="mt-1.5 text-xs text-muted">{kpi.hint}</p>
          </Card>
        ))}
      </div>

      <Card className="mt-6 grid min-h-[280px] place-items-center p-8 text-center">
        <div>
          <p className="font-semibold">No posts to chart yet</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-muted">
            After a collaboration goes live, impressions, qualified clicks and engagement land here
            next to the fee you were paid.
          </p>
          <ButtonLink href="/dashboard/opportunities" variant="outline" className="mt-6">
            Find a first deal
          </ButtonLink>
        </div>
      </Card>
    </div>
  );
}
