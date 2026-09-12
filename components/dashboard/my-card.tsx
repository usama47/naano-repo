"use client";

import { useState } from "react";
import { Send, Share } from "lucide-react";
import { CreatorCardPreview } from "@/components/dashboard/creator-card-preview";
import { StorefrontEditor } from "@/components/dashboard/storefront-editor";
import { cardUrl } from "@/lib/data/creator-app";
import { cn } from "@/lib/utils";

export function MyCardWorkspace() {
  const [mode, setMode] = useState<"edit" | "preview">("preview");
  const [copied, setCopied] = useState(false);

  async function copyDealLink() {
    const url = `${window.location.origin}${cardUrl}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="min-h-[calc(100vh-6.5rem)] rounded-[28px] bg-[#f3f5f8] px-5 pb-24 pt-8 sm:px-8 lg:px-10">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-[#4c9dff]">
            YOUR CREATOR STOREFRONT
          </p>
          <h1 className="mt-2 text-[32px] font-semibold tracking-tight text-ink">
            Your Naano card, ready to travel.
          </h1>
          <p className="mt-2 max-w-lg text-[14px] leading-6 text-[#8b93a7]">
            Share clear proof of your positioning, audience and offers. Every improvement makes the
            card more useful to brands.
          </p>
        </div>
        <div className="flex rounded-full border border-[#e4e7ee] bg-[#eef0f4] p-1 text-[13px] font-medium">
          {(["edit", "preview"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setMode(item)}
              className={cn(
                "rounded-full px-4 py-1.5 capitalize",
                mode === item ? "bg-white text-ink shadow-sm" : "text-[#8b93a7]",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {mode === "edit" ? (
        <div className="mt-8">
          <StorefrontEditor />
        </div>
      ) : (
        <>
          <section className="mt-8 rounded-[28px] bg-white p-6 sm:p-8">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] text-[#4c9dff]">
              <span className="size-1.5 rounded-full bg-[#4c9dff]" />
              YOUR CARD IS YOUR DEAL LINK
            </p>

            <div className="mt-3 grid gap-8 lg:grid-cols-[minmax(0,1fr)_180px]">
              <div>
                <h2 className="max-w-md text-[28px] font-semibold leading-tight tracking-tight">
                  Put it on LinkedIn. Earn when a brand joins through it.
                </h2>
                <p className="mt-3 max-w-md text-[14px] leading-6 text-[#8b93a7]">
                  Your public card presents your profile and keeps you selected when a brand creates
                  its account.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#edf0f5] bg-[#fafbfd] p-4">
                    <div className="flex gap-3">
                      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white text-[11px] font-bold text-[#0a66c2] shadow-sm">
                        in
                      </span>
                      <div>
                        <p className="text-[14px] font-semibold">Add it as a LinkedIn experience</p>
                        <p className="mt-1 text-[13px] leading-5 text-[#8b93a7]">
                          Keep your card visible on your profile so brands can discover and book you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[#edf0f5] bg-[#fafbfd] p-4">
                    <div className="flex gap-3">
                      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white text-[#4c6fff] shadow-sm">
                        <Send className="size-4" />
                      </span>
                      <div>
                        <p className="text-[14px] font-semibold">Send it when a brand contacts you</p>
                        <p className="mt-1 text-[13px] leading-5 text-[#8b93a7]">
                          When you receive a collaboration request, share your card so the deal runs
                          through Naano.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyDealLink}
                  className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-[14px] font-medium text-white hover:bg-ink-soft"
                >
                  <Share className="size-4" />
                  {copied ? "Sample link copied" : "Copy sample marketplace link"}
                </button>
              </div>

              <aside className="lg:pt-2">
                <p className="text-[11px] font-semibold tracking-[0.12em] text-[#9aa3b5]">
                  YOUR SHARE
                </p>
                <p className="mt-1 text-[40px] font-semibold tracking-tight">25%</p>
                <p className="mt-6 text-[11px] font-semibold tracking-[0.12em] text-[#9aa3b5]">
                  REWARD PERIOD
                </p>
                <p className="mt-1 text-[22px] font-semibold tracking-tight">3 months</p>
              </aside>
            </div>
          </section>

          <div className="mx-auto mt-10 max-w-[400px]">
            <CreatorCardPreview />
          </div>
        </>
      )}
    </div>
  );
}
