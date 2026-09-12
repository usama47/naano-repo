"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/primitives";
import { TOPICS } from "@/lib/data/creators";
import { useCardDraft } from "@/components/dashboard/card-draft";

export function StorefrontEditor() {
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const { card, save } = useCardDraft();

  return (
    <Card className="p-6">
      <form
        key={JSON.stringify(card)}
        id="storefront-form"
        onChange={() => setSaved(false)}
        className="grid gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          try {
            save({ name: String(data.get("name")), headline: String(data.get("headline")),
              bio: String(data.get("bio")), price: Number(data.get("price")),
              languages: String(data.get("languages")), topics: data.getAll("topics").map(String) });
            setSaved(true);
            setError("");
          } catch { setError("Your browser could not save this card. Allow local storage and try again."); }
        }}
      >
        <label className="grid gap-1.5 text-[11px] font-semibold tracking-[0.08em] text-muted">
          DISPLAY NAME
          <input
            name="name"
            defaultValue={card.name}
            required
            className="h-12 rounded-2xl border border-border px-4 text-sm font-normal text-ink"
          />
        </label>
        <label className="grid gap-1.5 text-[11px] font-semibold tracking-[0.08em] text-muted">
          HEADLINE
          <input
            name="headline"
            defaultValue={card.headline}
            className="h-12 rounded-2xl border border-border px-4 text-sm font-normal text-ink"
          />
        </label>
        <label className="grid gap-1.5 text-[11px] font-semibold tracking-[0.08em] text-muted">
          BIO
          <textarea
            name="bio"
            defaultValue={card.bio}
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
              defaultValue={card.price}
              min={0}
              required
              className="h-12 rounded-2xl border border-border px-4 text-sm font-normal text-ink"
            />
          </label>
          <label className="grid gap-1.5 text-[11px] font-semibold tracking-[0.08em] text-muted">
            LANGUAGES
            <input
              name="languages"
              defaultValue={card.languages}
              className="h-12 rounded-2xl border border-border px-4 text-sm font-normal text-ink"
            />
          </label>
        </div>
        <fieldset className="grid gap-2">
          <legend className="text-[11px] font-semibold tracking-[0.08em] text-muted">TOPICS</legend>
          <div className="flex flex-wrap gap-2">
            {TOPICS.map((topic) => {
              const on = card.topics.includes(topic);
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
        <p className="text-sm text-muted" role="status">{error || (saved ? "Saved in this browser. Open Preview to see your changes." : "Your demo card is saved only in this browser.")}</p>
      </form>
    </Card>
  );
}
