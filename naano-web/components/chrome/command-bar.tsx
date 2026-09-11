"use client";

import { ChevronUp, Mic, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function CommandBar({ className }: { className?: string }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const placeholder =
    pathname === "/" || pathname === "/book"
      ? "What would you like to see?"
      : pathname.startsWith("/blog") || pathname.startsWith("/help")
        ? "What can I help you find?"
        : "What would you like to do?";
  const [value, setValue] = useState("");
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  if (hidden) {
    return (
      <button
        type="button"
        aria-label="Show assistant"
        onClick={() => setHidden(false)}
        className="fixed bottom-5 left-1/2 z-40 grid size-9 -translate-x-1/2 place-items-center rounded-full border border-ink/10 bg-white shadow"
      >
        <Sparkles className="size-4 text-ink/50" />
      </button>
    );
  }

  return (
    <div className={cn("pointer-events-none fixed inset-x-0 bottom-5 z-40 flex flex-col items-center px-4", className)}>
      {isHome ? null : (
        <button
          type="button"
          aria-label="Hide assistant"
          onClick={() => setHidden(true)}
          className="pointer-events-auto mb-2 grid size-7 place-items-center rounded-full border border-ink/10 bg-white text-ink/50 shadow-sm"
        >
          <ChevronUp className="size-3.5" />
        </button>
      )}
      <form
        className="pointer-events-auto flex w-full max-w-[420px] items-center gap-2 rounded-full border border-ink/10 bg-white/95 px-3 py-1.5 shadow-[0_12px_40px_-16px_rgb(23_24_28/0.45)] backdrop-blur"
        onSubmit={(event) => {
          event.preventDefault();
          setOpen(true);
        }}
      >
        <Sparkles className="size-4 text-ink/35" />
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={placeholder}
          className="h-9 flex-1 bg-transparent text-sm outline-none placeholder:text-ink/40"
        />
        <button type="submit" className="grid size-8 place-items-center rounded-full bg-surface" aria-label="Voice">
          <Mic className="size-3.5 text-ink/50" />
        </button>
      </form>
      {open ? (
        <p className="pointer-events-auto mt-2 rounded-full bg-ink px-3 py-1 text-xs text-white">
          NaanoBot demo — try Blog, Pricing, or Book a call.
        </p>
      ) : null}
    </div>
  );
}
