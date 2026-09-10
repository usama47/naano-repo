import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AttributionChart } from "@/components/dashboard/attribution-chart";
import { Kpi } from "@/components/dashboard/kpi";
import { Avatar, Badge, Card } from "@/components/ui/primitives";
import { COLLABORATION_LABELS, campaigns, workspaceTotals } from "@/lib/data/campaigns";
import { formatCompact, formatEur, formatNumber } from "@/lib/utils";

export const metadata = { title: "Overview" };

export default function DashboardPage() {
  const totals = workspaceTotals();
  const live = campaigns.find((campaign) => campaign.status === "live") ?? campaigns[0];

  const topPosts = campaigns
    .flatMap((campaign) =>
      campaign.collaborations
        .filter((collab) => collab.status === "published")
        .map((collab) => ({ ...collab, campaignName: campaign.name })),
    )
    .sort((a, b) => b.leads - a.leads)
    .slice(0, 5);

  const pending = campaigns
    .flatMap((campaign) =>
      campaign.collaborations
        .filter((collab) => collab.status !== "published")
        .map((collab) => ({ ...collab, campaignId: campaign.id })),
    )
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="display text-3xl font-semibold">Overview</h1>
          <p className="mt-2 text-sm text-muted">
            Attributed results across {campaigns.length} campaigns and {totals.postsLive} published
            posts.
          </p>
        </div>
        <Link
          href="/dashboard/campaigns"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-strong hover:underline"
        >
          All campaigns
          <ArrowUpRight className="size-4" />
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Kpi
          label="Impressions"
          value={formatCompact(totals.impressions)}
          delta={18}
          hint="Across all published posts"
        />
        <Kpi
          label="Qualified clicks"
          value={formatNumber(totals.qualifiedClicks)}
          delta={11}
          hint="30s+ on-site engagement"
        />
        <Kpi
          label="Attributed leads"
          value={formatNumber(totals.leads)}
          delta={9}
          hint={`${formatEur(totals.costPerLead)} per lead`}
        />
        <Kpi
          label="Spend"
          value={formatEur(totals.spend)}
          delta={-4}
          hint={`${formatEur(totals.costPerQualifiedClick)} per qualified click`}
        />
      </div>

      <Card className="mt-6 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-semibold">{live.name}</p>
            <p className="mt-1 text-sm text-muted">{live.objective}</p>
          </div>
          <Badge tone={live.status === "live" ? "success" : "neutral"}>
            {live.status === "live" ? "Live" : "Completed"}
          </Badge>
        </div>
        <div className="mt-6">
          <AttributionChart series={live.timeseries} />
        </div>
      </Card>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Card className="overflow-hidden">
          <div className="border-b border-border px-6 py-4">
            <p className="font-semibold">Best performing posts</p>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-surface text-left text-xs uppercase tracking-wide text-muted">
              <tr>
                <th className="px-6 py-3 font-medium">Creator</th>
                <th className="px-6 py-3 font-medium">Clicks</th>
                <th className="px-6 py-3 font-medium">Leads</th>
                <th className="px-6 py-3 font-medium">Cost / lead</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {topPosts.map((post) => (
                <tr key={post.id}>
                  <td className="px-6 py-4">
                    <Link
                      href={`/marketplace/${post.creatorSlug}`}
                      className="flex items-center gap-3 hover:underline"
                    >
                      <Avatar name={post.creatorName} size="sm" />
                      <span>
                        <span className="block font-medium">{post.creatorName}</span>
                        <span className="block text-xs text-muted">{post.campaignName}</span>
                      </span>
                    </Link>
                  </td>
                  <td className="px-6 py-4 tabular-nums">{formatNumber(post.qualifiedClicks)}</td>
                  <td className="px-6 py-4 font-medium tabular-nums">{post.leads}</td>
                  <td className="px-6 py-4 tabular-nums text-muted">
                    {post.leads ? formatEur(post.fee / post.leads) : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card className="p-6">
          <p className="font-semibold">Waiting on you</p>
          <div className="mt-4 space-y-3">
            {pending.map((collab) => (
              <Link
                key={collab.id}
                href={`/dashboard/campaigns/${collab.campaignId}`}
                className="flex items-center gap-3 rounded-2xl border border-border p-3 hover:bg-surface"
              >
                <Avatar name={collab.creatorName} size="sm" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{collab.creatorName}</p>
                  <p className="text-xs text-muted">{COLLABORATION_LABELS[collab.status]}</p>
                </div>
                <p className="text-sm tabular-nums text-muted">{formatEur(collab.fee)}</p>
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
