"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarCheck, Check, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/primitives";
import { Field, Select, Textarea } from "@/components/ui/field";
import type { Creator } from "@/lib/types";
import { formatEur } from "@/lib/utils";

type Stage = "idle" | "sending" | "sent";

export function BookingPanel({ creator }: { creator: Creator }) {
  const [stage, setStage] = useState<Stage>("idle");
  const [posts, setPosts] = useState(1);
  const [network, setNetwork] = useState(creator.networks[0]);
  const [brief, setBrief] = useState("");

  const subtotal = creator.pricePerPost * posts;

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setStage("sending");
    // No backend in the demo build; this stands in for the booking request.
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStage("sent");
  }

  if (stage === "sent") {
    return (
      <Card className="p-6">
        <div className="grid size-10 place-items-center rounded-full bg-[#e2f5ea]">
          <Check className="size-5 text-success" />
        </div>
        <p className="mt-4 font-semibold">Sample booking prepared</p>
        <p className="mt-2 text-sm text-muted">
          Review the sample brief next. This demo does not contact {creator.name.split(" ")[0]}
          or charge a payment.
        </p>
        <div className="mt-5 space-y-2">
          <Link
            href="/dashboard/campaigns/new"
            className="block rounded-xl bg-ink px-4 py-3 text-center text-sm font-medium text-white hover:bg-ink-soft"
          >
            Finish the brief
          </Link>
          <button
            type="button"
            onClick={() => setStage("idle")}
            className="w-full rounded-xl border border-border px-4 py-3 text-sm font-medium hover:bg-surface"
          >
            Book another post
          </button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex items-baseline justify-between">
        <p className="display text-3xl font-semibold">{formatEur(creator.pricePerPost)}</p>
        <p className="text-sm text-muted">per post</p>
      </div>
      <p className="mt-2 text-sm text-muted">
        Price set by the creator. No platform fee to book.
      </p>

      <form onSubmit={submit} className="mt-6 space-y-4">
        <Field label="Network">
          <Select value={network} onChange={(event) => setNetwork(event.target.value as never)}>
            {creator.networks.map((item) => (
              <option key={item} value={item}>
                {item === "x" ? "X" : item.charAt(0).toUpperCase() + item.slice(1)}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="Posts">
          <Select value={posts} onChange={(event) => setPosts(Number(event.target.value))}>
            {[1, 2, 3, 4].map((count) => (
              <option key={count} value={count}>
                {count} post{count === 1 ? "" : "s"}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="What should the post cover?" hint="The creator writes the final copy.">
          <Textarea
            value={brief}
            onChange={(event) => setBrief(event.target.value)}
            placeholder="Product, audience, the one message that must land, and the link you want traffic to reach."
          />
        </Field>

        <dl className="space-y-2 border-t border-border pt-4 text-sm">
          <div className="flex justify-between">
            <dt className="text-muted">
              {posts} × {formatEur(creator.pricePerPost)}
            </dt>
            <dd className="tabular-nums">{formatEur(subtotal)}</dd>
          </div>
          <div className="flex justify-between font-semibold">
            <dt>Total if published</dt>
            <dd className="tabular-nums">{formatEur(subtotal)}</dd>
          </div>
        </dl>

        <Button type="submit" size="lg" className="w-full" disabled={stage === "sending"}>
          {stage === "sending" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending request
            </>
          ) : (
            <>
              <CalendarCheck className="size-4" />
              Request booking
            </>
          )}
        </Button>
      </form>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted">
        <Clock className="size-3.5" />
        Typically replies in {creator.responseHours}h · {creator.deliveryRate}% of bookings publish
      </p>
    </Card>
  );
}
