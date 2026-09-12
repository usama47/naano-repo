import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BadgeCheck, Globe2, MapPin, Timer, TrendingUp } from "lucide-react";
import { BookingPanel } from "@/components/marketplace/booking-panel";
import { CreatorCard } from "@/components/marketplace/creator-card";
import { Avatar, Badge, Card, ShareBar } from "@/components/ui/primitives";
import { NETWORK_LABELS, creators, getCreator } from "@/lib/data/creators";
import { formatCompact, formatNumber, formatPercent } from "@/lib/utils";

export function generateStaticParams() {
  return creators.map((creator) => ({ slug: creator.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/marketplace/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) return { title: "Creator not found" };

  return {
    title: `${creator.name} — ${creator.topics[0]} creator`,
    description: creator.headline,
  };
}

export default async function CreatorPage({ params }: PageProps<"/marketplace/[slug]">) {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) notFound();

  const similar = creators
    .filter((item) => item.slug !== creator.slug && item.topics.some((t) => creator.topics.includes(t)))
    .slice(0, 2);

  const metrics = [
    { label: "Followers", value: formatCompact(creator.followers), icon: Globe2 },
    { label: "Median impressions", value: formatCompact(creator.medianImpressions), icon: TrendingUp },
    { label: "Engagement rate", value: formatPercent(creator.engagementRate), icon: TrendingUp },
    { label: "Posts delivered", value: formatNumber(creator.postsDelivered), icon: BadgeCheck },
    { label: "Delivery rate", value: `${creator.deliveryRate}%`, icon: BadgeCheck },
    { label: "Response time", value: `${creator.responseHours}h`, icon: Timer },
  ];

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <Link
        href="/marketplace"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink"
      >
        <ArrowLeft className="size-4" />
        Back to marketplace
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
        <div>
          <div className="flex flex-wrap items-start gap-5">
            <Avatar name={creator.name} size="lg" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h1 className="display text-3xl font-semibold sm:text-4xl">{creator.name}</h1>
                {creator.vetted ? <BadgeCheck className="size-5 text-brand" /> : null}
              </div>
              <p className="mt-2 text-muted">{creator.headline}</p>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-4" />
                  {creator.country}
                </span>
                <span>{creator.languages.join(", ")}</span>
                <span>{creator.networks.map((n) => NETWORK_LABELS[n]).join(" · ")}</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                <Badge tone="brand">{creator.fit}% audience fit</Badge>
                {creator.topics.map((topic) => (
                  <Badge key={topic}>{topic}</Badge>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-8 text-[15px] leading-relaxed text-muted">{creator.bio}</p>

          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-white p-5">
                <p className="text-xs text-muted">{metric.label}</p>
                <p className="mt-1 text-xl font-semibold tabular-nums">{metric.value}</p>
              </div>
            ))}
          </div>

          <section className="mt-12">
            <h2 className="text-lg font-semibold">Audience breakdown</h2>
            <div className="mt-5 grid gap-8 sm:grid-cols-2">
              <Card className="p-5">
                <p className="text-sm font-medium">Seniority</p>
                <div className="mt-4 space-y-3.5">
                  {creator.audience.seniority.map((row) => (
                    <ShareBar key={row.label} label={row.label} share={row.share} />
                  ))}
                </div>
              </Card>
              <Card className="p-5">
                <p className="text-sm font-medium">Industry</p>
                <div className="mt-4 space-y-3.5">
                  {creator.audience.industries.map((row) => (
                    <ShareBar key={row.label} label={row.label} share={row.share} />
                  ))}
                </div>
              </Card>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-lg font-semibold">Recent posts</h2>
            <div className="mt-5 space-y-4">
              {creator.samplePosts.map((post) => (
                <Card key={post.id} className="p-5">
                  <p className="text-[15px] leading-relaxed">{post.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 border-t border-border pt-4 text-sm">
                    <span className="text-muted">
                      Impressions{" "}
                      <span className="font-medium tabular-nums text-ink">
                        {formatNumber(post.impressions)}
                      </span>
                    </span>
                    <span className="text-muted">
                      Clicks{" "}
                      <span className="font-medium tabular-nums text-ink">
                        {formatNumber(post.clicks)}
                      </span>
                    </span>
                    <span className="text-muted">
                      Reactions{" "}
                      <span className="font-medium tabular-nums text-ink">
                        {formatNumber(post.reactions)}
                      </span>
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {similar.length ? (
            <section className="mt-12">
              <h2 className="text-lg font-semibold">Similar creators</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {similar.map((item) => (
                  <CreatorCard key={item.id} creator={item} />
                ))}
              </div>
            </section>
          ) : null}
        </div>

        <div className="lg:sticky lg:top-24">
          <BookingPanel creator={creator} />
        </div>
      </div>
    </div>
  );
}
