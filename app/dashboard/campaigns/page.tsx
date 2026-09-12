import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { Badge, Card } from "@/components/ui/primitives";
import { ButtonLink } from "@/components/ui/button";
import { campaigns } from "@/lib/data/campaigns";
import { formatCompact, formatEur, formatNumber } from "@/lib/utils";

export const metadata = { title: "Campaigns" };

export default function CampaignsPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="display text-3xl font-semibold">Campaigns</h1>
          <p className="mt-2 text-sm text-muted">
            Every brief, collaboration and attributed result in one place.
          </p>
        </div>
        <ButtonLink href="/dashboard/campaigns/new">
          <Plus className="size-4" />
          New campaign
        </ButtonLink>
      </div>

      <div className="mt-8 space-y-4">
        {campaigns.map((campaign) => {
          const published = campaign.collaborations.filter(
            (collab) => collab.status === "published",
          );
          const leads = published.reduce((sum, collab) => sum + collab.leads, 0);
          const clicks = published.reduce((sum, collab) => sum + collab.qualifiedClicks, 0);
          const impressions = published.reduce((sum, collab) => sum + collab.impressions, 0);

          return (
            <Card key={campaign.id} className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <Link
                      href={`/dashboard/campaigns/${campaign.id}`}
                      className="text-lg font-semibold hover:underline"
                    >
                      {campaign.name}
                    </Link>
                    <Badge tone={campaign.status === "live" ? "success" : "neutral"}>
                      {campaign.status === "live" ? "Live" : "Completed"}
                    </Badge>
                  </div>
                  <p className="mt-1.5 text-sm text-muted">{campaign.objective}</p>
                </div>
                <Link
                  href={`/dashboard/campaigns/${campaign.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-strong hover:underline"
                >
                  Open
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-5 border-t border-border pt-5 sm:grid-cols-5">
                <div>
                  <dt className="text-xs text-muted">Creators</dt>
                  <dd className="mt-1 font-semibold tabular-nums">
                    {campaign.collaborations.length}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Impressions</dt>
                  <dd className="mt-1 font-semibold tabular-nums">{formatCompact(impressions)}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Qualified clicks</dt>
                  <dd className="mt-1 font-semibold tabular-nums">{formatNumber(clicks)}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Leads</dt>
                  <dd className="mt-1 font-semibold tabular-nums">{formatNumber(leads)}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Spend / budget</dt>
                  <dd className="mt-1 font-semibold tabular-nums">
                    {formatEur(campaign.spend)}{" "}
                    <span className="font-normal text-muted">/ {formatEur(campaign.budget)}</span>
                  </dd>
                </div>
              </dl>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
