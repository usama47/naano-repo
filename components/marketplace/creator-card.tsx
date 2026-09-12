import Link from "next/link";
import { ArrowUpRight, BadgeCheck, MapPin } from "lucide-react";
import { Avatar, Badge, Card } from "@/components/ui/primitives";
import { NETWORK_LABELS } from "@/lib/data/creators";
import type { Creator } from "@/lib/types";
import { formatCompact, formatEur, formatPercent } from "@/lib/utils";

export function CreatorCard({
  creator,
  selected,
  onToggle,
}: {
  creator: Creator;
  selected?: boolean;
  onToggle?: (slug: string) => void;
}) {
  return (
    <Card className="flex flex-col p-5 transition-shadow hover:shadow-[0_18px_50px_-40px_rgb(11_11_18/0.45)]">
      <div className="flex items-start gap-3">
        <Avatar name={creator.name} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <Link
              href={`/marketplace/${creator.slug}`}
              className="truncate font-medium hover:underline"
            >
              {creator.name}
            </Link>
            {creator.vetted ? (
              <BadgeCheck className="size-4 shrink-0 text-brand" aria-label="Vetted creator" />
            ) : null}
          </div>
          <p className="mt-0.5 line-clamp-2 text-sm text-muted">{creator.headline}</p>
        </div>
        <div className="text-right">
          <p className="font-semibold">{formatEur(creator.pricePerPost)}</p>
          <p className="text-xs text-muted">per post</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        <Badge tone="brand">{creator.fit}% fit</Badge>
        {creator.topics.map((topic) => (
          <Badge key={topic}>{topic}</Badge>
        ))}
      </div>

      <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4 text-sm">
        <div>
          <dt className="text-xs text-muted">Followers</dt>
          <dd className="mt-0.5 font-medium tabular-nums">{formatCompact(creator.followers)}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted">Median views</dt>
          <dd className="mt-0.5 font-medium tabular-nums">
            {formatCompact(creator.medianImpressions)}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-muted">Engagement</dt>
          <dd className="mt-0.5 font-medium tabular-nums">
            {formatPercent(creator.engagementRate)}
          </dd>
        </div>
      </dl>

      <div className="mt-4 flex items-center justify-between gap-3 text-xs text-muted">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="size-3.5" />
          {creator.country}
        </span>
        <span>{creator.networks.map((network) => NETWORK_LABELS[network]).join(" · ")}</span>
      </div>

      <div className="mt-5 flex items-center gap-2">
        {onToggle ? (
          <button
            type="button"
            onClick={() => onToggle(creator.slug)}
            aria-pressed={selected}
            className={
              selected
                ? "h-9 flex-1 rounded-full bg-brand text-sm font-medium text-white"
                : "h-9 flex-1 rounded-full border border-border text-sm font-medium hover:bg-surface"
            }
          >
            {selected ? "In shortlist" : "Add to shortlist"}
          </button>
        ) : null}
        <Link
          href={`/marketplace/${creator.slug}`}
          className="inline-flex h-9 items-center gap-1 rounded-full px-3 text-sm font-medium text-brand-strong hover:bg-brand-soft"
        >
          Profile
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </Card>
  );
}
