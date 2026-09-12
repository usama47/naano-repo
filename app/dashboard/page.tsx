import Link from "next/link";
import {
  BarChart3,
  Check,
  ChevronRight,
  Copy,
  ExternalLink,
  FileText,
  TrendingUp,
  Users,
} from "lucide-react";
import { CopyLink } from "@/components/dashboard/copy-link";
import { CreatorCardPreview } from "@/components/dashboard/creator-card-preview";
import {
  cardUrl,
  launchGuide,
  overviewStats,
} from "@/lib/data/creator-app";
import { getSessionUser } from "@/lib/session";

export const metadata = { title: "Overview" };

const kpiIcons = {
  reach: BarChart3,
  posts: FileText,
  engagements: TrendingUp,
  followers: Users,
} as const;

export default async function DashboardPage() {
  const user = await getSessionUser();
  const firstName = user?.firstName ?? "there";

  return (
    <div className="mx-auto max-w-[1080px]">
      <p className="text-[13px] text-[#8b93a7]">Creator workspace</p>
      <h1 className="mt-1 text-[32px] font-semibold tracking-tight text-ink">
        Good to see you, {firstName}
      </h1>
      <p className="mt-1.5 text-[15px] text-[#8b93a7]">Your creator activity, at a glance.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {overviewStats.map((stat) => {
          const Icon = kpiIcons[stat.icon];
          return (
            <div
              key={stat.key}
              className="rounded-[24px] border border-[#edf0f5] bg-white px-5 py-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-baseline gap-2">
                    <p className="text-[22px] font-semibold tracking-tight tabular-nums">
                      {stat.value}
                    </p>
                    <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#9aa3b5]">
                      {stat.label}
                    </p>
                  </div>
                  <p className="mt-3 text-[13px] text-[#8b93a7]">{stat.hint}</p>
                </div>
                <Icon className="size-4 shrink-0 text-[#c5cad6]" strokeWidth={1.75} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        <section className="rounded-[24px] border border-[#edf0f5] bg-white p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-[16px] font-semibold">Your creator card</h2>
              <p className="mt-1 max-w-sm text-[13px] leading-5 text-[#8b93a7]">
                This is how brands discover your positioning and collaboration offer.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="/dashboard/card"
                className="inline-flex h-8 items-center gap-1.5 rounded-full px-2.5 text-[13px] text-[#8b93a7] hover:text-ink"
              >
                Open card
                <ExternalLink className="size-3.5" />
              </Link>
              <CopyLink
                value={cardUrl}
                className="inline-flex h-8 items-center gap-1.5 rounded-full px-2.5 text-[13px] text-[#8b93a7] hover:text-ink"
              >
                <Copy className="size-3.5" />
                Copy sample link
              </CopyLink>
              <CopyLink
                value={cardUrl}
                className="inline-flex h-8 items-center rounded-full bg-[#2f6bff] px-3 text-[13px] font-medium text-white hover:bg-[#2458e6]"
              >
                Share sample profile
              </CopyLink>
            </div>
          </div>
          <div className="mx-auto mt-5 max-w-[360px]">
            <CreatorCardPreview />
          </div>
        </section>

        <section className="rounded-[24px] border border-[#edf0f5] bg-white p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-[16px] font-semibold">Your launch guide</h2>
              <p className="mt-1 text-[13px] text-[#8b93a7]">
                {launchGuide.complete} of {launchGuide.total} steps complete
              </p>
            </div>
            <Link href={launchGuide.href} className="text-[13px] font-medium text-[#4c6fff]">
              Open card
            </Link>
          </div>

          <Link
            href={launchGuide.href}
            className="mt-6 flex items-center gap-3 rounded-2xl py-2"
          >
            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#e2f5ea] text-success">
              <Check className="size-3.5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[14px] font-medium">{launchGuide.step.title}</span>
              <span className="mt-0.5 block text-[13px] text-[#8b93a7]">
                {launchGuide.step.body}
              </span>
            </span>
            <span className="rounded-full bg-[#e8f8ef] px-2.5 py-1 text-[12px] font-medium text-success">
              {launchGuide.step.status}
            </span>
            <ChevronRight className="size-4 text-[#c5cad6]" />
          </Link>
        </section>
      </div>
    </div>
  );
}
