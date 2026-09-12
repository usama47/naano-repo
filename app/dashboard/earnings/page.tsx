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
        subtitle="Sample earnings overview. Payouts and payment methods are not connected in this demo."
        action={
          <Button type="button" variant="outline" disabled title="Payments are outside this demo">
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
        body="This is the payout empty state. No real financial activity occurs in this demo."
        action={
          <Button type="button" variant="outline" disabled title="Payments are outside this demo">
            Add payout method
          </Button>
        }
      />
    </div>
  );
}
