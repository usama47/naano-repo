import { EmptyState, PageIntro } from "@/components/dashboard/empty-state";
import { Card } from "@/components/ui/primitives";
import { Button } from "@/components/ui/button";
import { earnings } from "@/lib/data/creator-app";
import { formatEur } from "@/lib/utils";

export const metadata = { title: "Earnings" };

export default function EarningsPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <PageIntro
        title="Earnings"
        subtitle="You keep 100% of the fee. Naano pays within 24 hours of a published post — no invoices."
        action={
          <Button type="button" variant="outline">
            Add payout method
          </Button>
        }
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Card className="p-5">
          <p className="text-sm text-muted">Available</p>
          <p className="display mt-2 text-2xl font-semibold tabular-nums">
            {formatEur(earnings.available)}
          </p>
        </Card>
        <Card className="p-5">
          <p className="text-sm text-muted">Pending</p>
          <p className="display mt-2 text-2xl font-semibold tabular-nums">
            {formatEur(earnings.pending)}
          </p>
        </Card>
        <Card className="p-5">
          <p className="text-sm text-muted">Lifetime</p>
          <p className="display mt-2 text-2xl font-semibold tabular-nums">
            {formatEur(earnings.lifetime)}
          </p>
        </Card>
      </div>

      <EmptyState
        title="No payouts yet"
        body="When a post goes live, the fee lands here as pending, then available. Add a payout method so the first one can move the same day."
        action={
          <Button type="button" variant="outline">
            Add payout method
          </Button>
        }
      />
    </div>
  );
}
