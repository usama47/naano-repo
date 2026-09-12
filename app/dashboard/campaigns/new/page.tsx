import { Suspense } from "react";
import { BriefBuilder } from "@/components/dashboard/brief-builder";
import { creators } from "@/lib/data/creators";

export const metadata = { title: "New campaign" };

export default function NewCampaignPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="display text-3xl font-semibold">New campaign</h1>
      <p className="mt-2 text-sm text-muted">
        Write the brief once. Tracked links are generated per creator when it goes out.
      </p>

      <div className="mt-8">
        <Suspense fallback={<p className="text-sm text-muted">Loading builder…</p>}>
          <BriefBuilder creators={creators} />
        </Suspense>
      </div>
    </div>
  );
}
