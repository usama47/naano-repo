"use client";

import { useState } from "react";
import { PageIntro } from "@/components/dashboard/empty-state";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/primitives";
import { affiliate } from "@/lib/data/creator-app";
import { formatEur } from "@/lib/utils";

export function AffiliatePanel() {
  const [copied, setCopied] = useState(false);

  return (
    <>
      <PageIntro
        title="Affiliate program"
        subtitle="Sample affiliate overview. Referral tracking and rewards are not connected."
      />

      <Card className="mt-8 p-6">
        <p className="text-[11px] font-semibold tracking-[0.08em] text-muted">YOUR LINK</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <code className="min-w-0 flex-1 truncate rounded-2xl border border-border bg-surface px-4 py-3 text-sm">
            {affiliate.url}
          </code>
          <Button
            type="button"
            variant="outline"
            onClick={async () => {
              await navigator.clipboard.writeText(affiliate.url);
              setCopied(true);
            }}
          >
            {copied ? "Copied" : "Copy"}
          </Button>
        </div>
      </Card>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <Card className="p-5">
          <p className="text-sm text-muted">Link clicks</p>
          <p className="display mt-2 text-2xl font-semibold tabular-nums">{affiliate.clicks}</p>
        </Card>
        <Card className="p-5">
          <p className="text-sm text-muted">Sign-ups</p>
          <p className="display mt-2 text-2xl font-semibold tabular-nums">{affiliate.signups}</p>
        </Card>
        <Card className="p-5">
          <p className="text-sm text-muted">Earned</p>
          <p className="display mt-2 text-2xl font-semibold tabular-nums">
            {formatEur(affiliate.earned)}
          </p>
        </Card>
      </div>
    </>
  );
}
