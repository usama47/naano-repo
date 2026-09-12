import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function BrandKicker({
  children,
  muted,
}: {
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <p
      className={`mb-5 text-xs font-semibold uppercase tracking-[0.14em] ${
        muted ? "text-[#6B7280]" : "text-[#1652F0]"
      }`}
    >
      {children}
    </p>
  );
}

export function CheckLine({
  children,
  blue,
}: {
  children: ReactNode;
  blue?: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <svg
        viewBox="0 0 24 24"
        className={`mt-0.5 size-4 shrink-0 ${blue ? "text-[#1652F0]" : "text-[#111827]"}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
      <span>{children}</span>
    </div>
  );
}

export function BrandDarkCta({
  kicker,
  title,
  body,
  note,
  actions,
}: {
  kicker?: string;
  title: string;
  body: string;
  note?: string;
  actions: ReactNode;
}) {
  return (
    <section className="bg-[#0A0A0A] px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto flex max-w-[580px] flex-col items-center text-center">
        {kicker ? (
          <div className="mb-6 flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-[#1652F0]" />
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40">{kicker}</p>
          </div>
        ) : null}
        <h2 className="mb-4 text-[clamp(28px,4.5vw,52px)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
          {title}
        </h2>
        <p className="mb-10 max-w-sm text-[15px] leading-relaxed text-white/45">{body}</p>
        {actions}
        {note ? <p className="mt-3 text-[12px] text-white/30">{note}</p> : null}
      </div>
    </section>
  );
}

export function DarkButton({
  href,
  children,
  light,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        light
          ? "inline-flex h-12 items-center gap-2 rounded-xl bg-white px-8 text-[15px] font-semibold text-[#0A0A0A] hover:bg-gray-100"
          : "inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 px-8 text-[15px] font-semibold text-white hover:bg-white/5"
      }
    >
      {children} <ArrowRight className="size-4" />
    </Link>
  );
}
