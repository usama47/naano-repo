"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/primitives";
import { sessionCreator } from "@/lib/data/creator-app";
import { TOPICS } from "@/lib/data/creators";
import { useSession } from "@/components/dashboard/session";

export function StorefrontEditor() {
  const [saved, setSaved] = useState(false);
  const user = useSession();
  const displayName = user?.name ?? "";

  return (
    <Card className="p-6">
      <form
        id="storefront-form"
        className="grid gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          setSaved(true);
        }}
      >
        <label className="grid gap-1.5 text-[11px] font-semibold tracking-[0.08em] text-muted">
          DISPLAY NAME
          <input
            name="name"
            defaultValue={displayName}
            className="h-12 rounded-2xl border border-border px-4 text-sm font-normal text-ink"
          />
        </label>
        <label className="grid gap-1.5 text-[11px] font-semibold tracking-[0.08em] text-muted">
          HEADLINE
          <input
            name="headline"
            defaultValue={sessionCreator.headline}
            className="h-12 rounded-2xl border border-border px-4 text-sm font-normal text-ink"
          />
        </label>
        <label className="grid gap-1.5 text-[11px] font-semibold tracking-[0.08em] text-muted">
          BIO
          <textarea
            name="bio"
            defaultValue={sessionCreator.bio}
            rows={5}
            className="rounded-2xl border border-border px-4 py-3 text-sm font-normal text-ink"
          />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1.5 text-[11px] font-semibold tracking-[0.08em] text-muted">
            CHOSEN COST
            <input
              name="price"
              type="number"
              defaultValue={sessionCreator.pricePerPost}
              className="h-12 rounded-2xl border border-border px-4 text-sm font-normal text-ink"
            />
          </label>
          <label className="grid gap-1.5 text-[11px] font-semibold tracking-[0.08em] text-muted">
            LANGUAGES
            <input
              name="languages"
              defaultValue={sessionCreator.languages.join(", ")}
              className="h-12 rounded-2xl border border-border px-4 text-sm font-normal text-ink"
            />
          </label>
        </div>
        <fieldset className="grid gap-2">
          <legend className="text-[11px] font-semibold tracking-[0.08em] text-muted">TOPICS</legend>
          <div className="flex flex-wrap gap-2">
            {TOPICS.map((topic) => {
              const on = sessionCreator.topics.includes(topic);
              return (
                <label
                  key={topic}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-sm has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-white"
                >
                  <input
                    type="checkbox"
                    name="topics"
                    defaultChecked={on}
                    value={topic}
                    className="sr-only"
                  />
                  {topic}
                </label>
              );
            })}
          </div>
        </fieldset>
        <div className="flex justify-end">
          <Button type="submit">{saved ? "Saved" : "Save card"}</Button>
        </div>
      </form>
    </Card>
  );
}
