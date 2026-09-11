import Link from "next/link";
import { Lock } from "lucide-react";
import { EmptyState, PageIntro } from "@/components/dashboard/empty-state";
import { Badge, Card } from "@/components/ui/primitives";
import { ButtonLink } from "@/components/ui/button";
import {
  FOLLOWER_GATE,
  opportunities,
  sessionCreator,
} from "@/lib/data/creator-app";
import { formatEur, formatNumber } from "@/lib/utils";

export const metadata = { title: "Opportunities" };

const statusTone = {
  new: "brand",
  invited: "success",
  expiring: "warning",
} as const;

const statusLabel = {
  new: "New",
  invited: "Invited",
  expiring: "Expiring",
} as const;

export default function OpportunitiesPage() {
  const unlocked = sessionCreator.followers >= FOLLOWER_GATE;
  const progress = Math.min(100, Math.round((sessionCreator.followers / FOLLOWER_GATE) * 100));

  return (
    <div className="mx-auto max-w-5xl">
      <PageIntro
        title="Opportunities"
        subtitle="Brand deals matched to your audience. You pick the companies. You write in your own voice."
      />

      <Card className="mt-8 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {unlocked ? (
              <Badge tone="success">Unlocked</Badge>
            ) : (
              <Badge tone="warning">
                <Lock className="size-3" />
                1,000 follower gate
              </Badge>
            )}
            <p className="text-sm text-muted">
              {formatNumber(sessionCreator.followers)} / {formatNumber(FOLLOWER_GATE)} LinkedIn
              followers
            </p>
          </div>
          <p className="text-sm text-muted">
            {unlocked
              ? "Deals stay visible until you accept, decline, or they expire."
              : "Keep posting. This list opens automatically at 1,000 followers."}
          </p>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-strong">
          <div className="h-full rounded-full bg-brand" style={{ width: `${progress}%` }} />
        </div>
      </Card>

      {unlocked ? (
        <div className="mt-6 grid gap-4">
          {opportunities.map((deal) => (
            <Card key={deal.id} className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-lg font-semibold">{deal.brand}</p>
                    <Badge tone={statusTone[deal.status]}>{statusLabel[deal.status]}</Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    {deal.format} · {deal.category} · due in {deal.due}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-6">{deal.summary}</p>
                </div>
                <p className="display text-2xl font-semibold tabular-nums">{formatEur(deal.fee)}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <ButtonLink href="/dashboard/collaborations" size="sm">
                  Accept deal
                </ButtonLink>
                <ButtonLink href="/dashboard/messages" variant="outline" size="sm">
                  Ask a question
                </ButtonLink>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState
          title="Opportunities unlock at 1,000 followers"
          body="Naano only shows brand deals once your LinkedIn audience is large enough for a paid post to land. Connect LinkedIn on your card and keep posting — the list opens on its own."
          action={
            <ButtonLink href="/dashboard/card" variant="outline">
              Open my card
            </ButtonLink>
          }
        />
      )}

      <p className="mt-6 text-center text-xs text-muted">
        Prefer to bring your own brand?{" "}
        <Link href="/dashboard/messages" className="font-medium text-ink underline-offset-2 hover:underline">
          Message Naano
        </Link>
      </p>
    </div>
  );
}
