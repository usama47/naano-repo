"use client";

import { ChevronUp, Search, Sparkles } from "lucide-react";
import Link from "next/link";
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
  const destinations = [
    { label: "Blog", href: "/blog" }, { label: "Pricing", href: "/pricing" },
    { label: "Book a call", href: "/book" }, { label: "Creator marketplace", href: "/marketplace" },
    { label: "Free tools", href: "/free-tools" }, { label: "Dashboard", href: "/dashboard" },
  ].filter(item => !value.trim() || item.label.toLowerCase().includes(value.trim().toLowerCase()));

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
          aria-label="Search pages"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={placeholder}
          className="h-9 flex-1 bg-transparent text-sm outline-none placeholder:text-ink/40"
        />
        <button type="submit" className="grid size-8 place-items-center rounded-full bg-surface" aria-label="Search">
          <Search className="size-3.5 text-ink/50" />
        </button>
      </form>
      {open ? (
        <div className="pointer-events-auto mt-2 flex max-w-[420px] flex-wrap gap-2 rounded-2xl bg-ink p-3 text-xs text-white" aria-live="polite">
          {destinations.length ? destinations.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-full border border-white/30 px-3 py-2 hover:bg-white/10">{item.label}</Link>) : <p>No matching page. Try Blog, Pricing, or Free tools.</p>}
          <button type="button" onClick={() => setOpen(false)} className="px-2 underline">Close</button>
        </div>
      ) : null}
    </div>
  );
}
