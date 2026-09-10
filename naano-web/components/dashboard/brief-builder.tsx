"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { Check, Copy, Loader2, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, Badge, Card } from "@/components/ui/primitives";
import { Field, Input, Textarea } from "@/components/ui/field";
import type { Creator } from "@/lib/types";
import { formatCompact, formatEur } from "@/lib/utils";

type DraftResponse = {
  data: {
    id: string;
    status: string;
    trackedLinks: { creatorSlug: string; url: string }[];
  };
};

type ErrorResponse = { message: string; errors?: Record<string, string> };

export function BriefBuilder({ creators }: { creators: Creator[] }) {
  const searchParams = useSearchParams();
  const preselected = (searchParams.get("creators") ?? "").split(",").filter(Boolean);

  const [name, setName] = useState("");
  const [objective, setObjective] = useState("");
  const [landingUrl, setLandingUrl] = useState("https://");
  const [messages, setMessages] = useState<string[]>([""]);
  const [selected, setSelected] = useState<string[]>(preselected);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const selectedCreators = creators.filter((creator) => selected.includes(creator.slug));
  const budget = selectedCreators.reduce((sum, creator) => sum + creator.pricePerPost, 0);
  const reach = selectedCreators.reduce((sum, creator) => sum + creator.medianImpressions, 0);

  const mutation = useMutation<DraftResponse, Error, void>({
    mutationFn: async () => {
      const response = await fetch("/api/campaigns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          objective,
          landingUrl,
          keyMessages: messages.filter((message) => message.trim()),
          creatorSlugs: selected,
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        const problem = payload as ErrorResponse;
        setErrors(problem.errors ?? {});
        throw new Error(problem.message ?? "Could not create the campaign.");
      }

      setErrors({});
      return payload as DraftResponse;
    },
  });

  function toggleCreator(slug: string) {
    setSelected((current) =>
      current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug],
    );
  }

  if (mutation.data) {
    return (
      <Card className="p-6">
        <div className="grid size-10 place-items-center rounded-full bg-[#e2f5ea]">
          <Check className="size-5 text-success" />
        </div>
        <p className="mt-4 text-lg font-semibold">Brief created</p>
        <p className="mt-2 text-sm text-muted">
          Campaign <span className="font-mono">{mutation.data.data.id}</span> is saved as a draft
          with one tracked link per creator. Invites go out when you publish it.
        </p>

        <div className="mt-6 space-y-2">
          {mutation.data.data.trackedLinks.map((link) => (
            <div key={link.creatorSlug} className="rounded-xl border border-border p-3">
              <p className="text-xs font-medium">{link.creatorSlug}</p>
              <div className="mt-1.5 flex items-start gap-2">
                <p className="min-w-0 flex-1 break-all font-mono text-xs text-muted">{link.url}</p>
                <Copy className="mt-0.5 size-3.5 shrink-0 text-muted" />
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" className="mt-6" onClick={() => mutation.reset()}>
          Create another
        </Button>
      </Card>
    );
  }

  return (
    <form
      className="space-y-6"
      onSubmit={(event) => {
        event.preventDefault();
        mutation.mutate();
      }}
    >
      <Card className="space-y-5 p-6">
        <p className="font-semibold">Campaign</p>

        <Field label="Name" hint={errors.name}>
          <Input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Forecast accuracy launch"
          />
        </Field>

        <Field label="Objective" hint={errors.objective}>
          <Textarea
            value={objective}
            onChange={(event) => setObjective(event.target.value)}
            placeholder="What should this campaign produce, and for which buyer?"
          />
        </Field>

        <Field
          label="Destination URL"
          hint={errors.landingUrl ?? "UTM parameters are appended per creator."}
        >
          <Input
            value={landingUrl}
            onChange={(event) => setLandingUrl(event.target.value)}
            placeholder="https://example.com/launch"
          />
        </Field>

        <div>
          <p className="mb-1.5 text-sm font-medium">Key messages</p>
          <div className="space-y-2">
            {messages.map((message, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={message}
                  onChange={(event) =>
                    setMessages((current) =>
                      current.map((item, i) => (i === index ? event.target.value : item)),
                    )
                  }
                  placeholder="One message the post must land"
                />
                {messages.length > 1 ? (
                  <button
                    type="button"
                    aria-label="Remove message"
                    onClick={() =>
                      setMessages((current) => current.filter((_, i) => i !== index))
                    }
                    className="grid size-11 shrink-0 place-items-center rounded-xl border border-border hover:bg-surface"
                  >
                    <X className="size-4" />
                  </button>
                ) : null}
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setMessages((current) => [...current, ""])}
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-brand-strong hover:underline"
          >
            <Plus className="size-4" />
            Add message
          </button>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-semibold">Creators</p>
          <p className="text-sm text-muted">
            {selected.length} selected · {formatEur(budget)} · {formatCompact(reach)} expected reach
          </p>
        </div>
        {errors.creatorSlugs ? (
          <p className="mt-2 text-sm text-warning">{errors.creatorSlugs}</p>
        ) : null}

        <div className="mt-5 grid max-h-96 gap-2 overflow-y-auto pr-1 sm:grid-cols-2">
          {creators.map((creator) => {
            const active = selected.includes(creator.slug);
            return (
              <button
                type="button"
                key={creator.id}
                onClick={() => toggleCreator(creator.slug)}
                aria-pressed={active}
                className={
                  active
                    ? "flex items-center gap-3 rounded-2xl border border-brand bg-brand-soft p-3 text-left"
                    : "flex items-center gap-3 rounded-2xl border border-border p-3 text-left hover:bg-surface"
                }
              >
                <Avatar name={creator.name} size="sm" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium">{creator.name}</span>
                  <span className="block truncate text-xs text-muted">
                    {creator.topics[0]} · {formatCompact(creator.followers)}
                  </span>
                </span>
                <span className="text-sm font-medium tabular-nums">
                  {formatEur(creator.pricePerPost)}
                </span>
              </button>
            );
          })}
        </div>
      </Card>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted">Estimated spend if every post publishes</p>
          <p className="display text-2xl font-semibold">{formatEur(budget)}</p>
        </div>
        <div className="flex items-center gap-3">
          {mutation.isError ? (
            <Badge tone="warning">{mutation.error.message}</Badge>
          ) : null}
          <Button type="submit" size="lg" disabled={mutation.isPending}>
            {mutation.isPending ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Saving
              </>
            ) : (
              "Create brief"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
