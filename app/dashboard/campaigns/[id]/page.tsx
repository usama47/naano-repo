import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Link2 } from "lucide-react";
import { AttributionChart } from "@/components/dashboard/attribution-chart";
import { Kpi } from "@/components/dashboard/kpi";
import { Avatar, Badge, Card } from "@/components/ui/primitives";
import { COLLABORATION_LABELS, campaigns, getCampaign } from "@/lib/data/campaigns";
import { formatCompact, formatEur, formatNumber } from "@/lib/utils";

export function generateStaticParams() {
  return campaigns.map((campaign) => ({ id: campaign.id }));
}

export async function generateMetadata({ params }: PageProps<"/dashboard/campaigns/[id]">) {
  const { id } = await params;
  const campaign = getCampaign(id);
  return { title: campaign?.name ?? "Campaign" };
}

const statusTone: Record<string, "neutral" | "brand" | "success" | "warning"> = {
  invited: "neutral",
  accepted: "brand",
  draft_review: "warning",
  scheduled: "brand",
  published: "success",
};

export default async function CampaignDetailPage({
  params,
}: PageProps<"/dashboard/campaigns/[id]">) {
  const { id } = await params;
  const campaign = getCampaign(id);
  if (!campaign) notFound();

  const published = campaign.collaborations.filter((collab) => collab.status === "published");
  const impressions = published.reduce((sum, collab) => sum + collab.impressions, 0);
  const qualifiedClicks = published.reduce((sum, collab) => sum + collab.qualifiedClicks, 0);
  const leads = published.reduce((sum, collab) => sum + collab.leads, 0);

  return (
    <div className="mx-auto max-w-6xl">
      <Link
        href="/dashboard/campaigns"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink"
      >
        <ArrowLeft className="size-4" />
        All campaigns
      </Link>

      <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="display text-3xl font-semibold">{campaign.name}</h1>
            <Badge tone={campaign.status === "live" ? "success" : "neutral"}>
              {campaign.status === "live" ? "Live" : "Completed"}
            </Badge>
          </div>
          <p className="mt-2 text-sm text-muted">{campaign.objective}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted">Spend</p>
          <p className="text-xl font-semibold tabular-nums">
            {formatEur(campaign.spend)}{" "}
            <span className="text-sm font-normal text-muted">of {formatEur(campaign.budget)}</span>
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Kpi label="Impressions" value={formatCompact(impressions)} />
        <Kpi label="Qualified clicks" value={formatNumber(qualifiedClicks)} />
        <Kpi label="Attributed leads" value={formatNumber(leads)} />
        <Kpi
          label="Cost per lead"
          value={leads ? formatEur(campaign.spend / leads) : "—"}
          hint={`${published.length} posts published`}
        />
      </div>

      <Card className="mt-6 p-6">
        <p className="font-semibold">Attribution over time</p>
        <div className="mt-6">
          <AttributionChart series={campaign.timeseries} />
        </div>
      </Card>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Card className="overflow-hidden">
          <div className="border-b border-border px-6 py-4">
            <p className="font-semibold">Collaborations</p>
          </div>
          <div className="divide-y divide-border">
            {campaign.collaborations.map((collab) => (
              <div key={collab.id} className="flex flex-wrap items-center gap-4 px-6 py-4">
                <Link
                  href={`/marketplace/${collab.creatorSlug}`}
                  className="flex min-w-0 flex-1 items-center gap-3 hover:underline"
                >
                  <Avatar name={collab.creatorName} size="sm" />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium">
                      {collab.creatorName}
                    </span>
                    <span className="block text-xs text-muted">
                      {collab.publishedAt
                        ? `Published ${new Date(collab.publishedAt).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                          })}`
                        : "Not published yet"}
                    </span>
                  </span>
                </Link>

                <Badge tone={statusTone[collab.status]}>
                  {COLLABORATION_LABELS[collab.status]}
                </Badge>

                <div className="flex gap-6 text-sm tabular-nums">
                  <span className="text-muted">
                    {collab.qualifiedClicks ? formatNumber(collab.qualifiedClicks) : "—"} clicks
                  </span>
                  <span className="w-16 text-right font-medium">{formatEur(collab.fee)}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <p className="font-semibold">Brief</p>
            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted">
              Key messages
            </p>
            <ul className="mt-2 space-y-2 text-sm text-muted">
              {campaign.keyMessages.map((message) => (
                <li key={message}>— {message}</li>
              ))}
            </ul>

            <p className="mt-5 text-xs font-medium uppercase tracking-wide text-muted">
              Guidelines
            </p>
            <ul className="mt-2 space-y-2 text-sm text-muted">
              {campaign.guidelines.map((guideline) => (
                <li key={guideline}>— {guideline}</li>
              ))}
            </ul>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2">
              <Link2 className="size-4 text-brand" />
              <p className="font-semibold">Tracking</p>
            </div>
            <p className="mt-3 text-sm text-muted">Destination for every creator link:</p>
            <p className="mt-2 break-all rounded-xl bg-surface p-3 font-mono text-xs">
              {campaign.landingUrl}
            </p>
            <p className="mt-3 text-xs text-muted">
              Each creator gets a unique <span className="font-mono">utm_content</span> value, so
              traffic separates by post inside your own analytics.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
