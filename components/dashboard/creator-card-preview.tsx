"use client";

import { FileText, Share } from "lucide-react";
import { useCardDraft } from "@/components/dashboard/card-draft";
import { Avatar } from "@/components/ui/primitives";
import { sessionCreator } from "@/lib/data/creator-app";
import { cn, formatEur } from "@/lib/utils";

export function CreatorCardPreview({ className }: { className?: string }) {
  const { card } = useCardDraft();
  const name = card.name;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[32px] border border-[#edf0f5] bg-white shadow-[0_24px_60px_-28px_rgb(47_107_255/0.35)]",
        className,
      )}
    >
      <div className="relative h-[124px] bg-[linear-gradient(180deg,#5b93ff_0%,#6ea6ff_48%,#8ec4ff_100%)] px-4 pt-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-white text-[11px] font-bold text-[#0a66c2]">
              in
            </span>
            <span className="flex h-5 w-9 items-center rounded-full bg-[#3b82f6] p-0.5">
              <span className="ml-auto size-4 rounded-full bg-white shadow-sm" />
            </span>
          </div>
          <p className="text-[16px] font-semibold tracking-tight text-white">naano</p>
          <div className="flex items-center gap-1.5">
            <span className="grid size-8 place-items-center rounded-full bg-white/20 text-[11px] font-medium text-white">
              {sessionCreator.countryCode}
            </span>
            <span className="grid size-8 place-items-center rounded-full bg-white/20 text-white">
              <Share className="size-3.5" />
            </span>
          </div>
        </div>
        <div className="absolute -bottom-11 left-1/2 -translate-x-1/2 rounded-full bg-white p-[3px]">
          <Avatar name={name} size="xl" />
        </div>
      </div>

      <div className="px-8 pb-4 pt-14 text-center">
        <p className="text-[20px] font-semibold tracking-tight">{name}</p>
        <p className="mt-1 text-sm text-muted">{card.headline}</p>
        <p className="mt-3 text-sm leading-5 text-[#9aa3b5]">
          {card.bio}
        </p>
        <p className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[#f4f6fa] px-3 py-1.5 text-xs text-[#8b93a7]">
          <FileText className="size-3.5" />
          No post data available
        </p>
      </div>

      <div className="flex items-center gap-2 px-6">
        <span className="text-[11px] text-[#9aa3b5]">Data</span>
        <div className="h-[3px] flex-1 rounded-full bg-[#eceff4]">
          <div className="h-full w-[16%] rounded-full bg-[#d0d5de]" />
        </div>
        <span className="text-[11px] text-[#9aa3b5]">Pending</span>
      </div>

      <div className="mt-3 grid grid-cols-3 border-t border-[#edf0f5]">
        {[
          ["0", "Followers"],
          ["—", "Est. impressions"],
          [formatEur(card.price), "Chosen cost"],
        ].map(([value, label]) => (
          <div key={label} className="px-3 py-4 text-center">
            <p className="text-[18px] font-semibold tabular-nums">{value}</p>
            <p className="mt-0.5 text-[11px] text-[#9aa3b5]">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
