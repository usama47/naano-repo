import Link from "next/link";
import { Clock } from "lucide-react";
import type { ReactNode } from "react";

export function ReportHero({
  backHref = "/",
  backLabel = "← Naano",
  kicker,
  minutes,
  lang = "EN",
  title,
  lede,
  meta,
  titleWeight = "bold",
}: {
  backHref?: string;
  backLabel?: string;
  kicker?: string;
  minutes?: string;
  lang?: string;
  title: ReactNode;
  lede: ReactNode;
  meta?: ReactNode;
  titleWeight?: "bold" | "light";
}) {
  return (
    <section
      className="relative overflow-hidden px-4 pb-16 pt-28 text-white sm:px-6 sm:pb-20 sm:pt-32"
      style={{ background: "linear-gradient(135deg, #111827 0%, #1652F0 100%)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative mx-auto max-w-[1200px]">
        <Link href={backHref} className="text-xs uppercase tracking-[0.14em] text-white/80 hover:text-white">
          {backLabel}
        </Link>
        <div className={meta || kicker ? "mt-8 max-w-[840px] sm:mt-10" : "mt-8 max-w-[900px]"}>
          {kicker ? (
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-white/85">
              <span className="font-semibold">{kicker}</span>
              {minutes ? (
                <>
                  <span aria-hidden className="size-1 rounded-full bg-white/60" />
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3" />
                    {minutes}
                  </span>
                </>
              ) : null}
              <span aria-hidden className="size-1 rounded-full bg-white/60" />
              <span>{lang}</span>
            </div>
          ) : null}
          <h1
            className={`text-[clamp(32px,5vw,56px)] leading-[1.05] tracking-[-0.03em] ${
              titleWeight === "light"
                ? "font-light leading-[1.04] tracking-[-0.025em] sm:text-[clamp(32px,5vw,58px)]"
                : "font-bold lg:text-[56px]"
            }`}
          >
            {title}
          </h1>
          <p
            className={`mt-6 leading-relaxed text-white/85 ${
              titleWeight === "light" ? "max-w-2xl text-base sm:text-lg" : "max-w-[680px] text-lg sm:text-xl"
            }`}
          >
            {lede}
          </p>
          {meta ? <p className="mt-8 text-xs tabular-nums text-white/70 sm:text-sm">{meta}</p> : null}
        </div>
      </div>
    </section>
  );
}
