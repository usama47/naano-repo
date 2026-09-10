import type { ComponentProps, ReactNode } from "react";
import { avatarTone, cn, initials } from "@/lib/utils";

export function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("rounded-3xl border border-border bg-white", className)}
      {...props}
    />
  );
}

export function Badge({
  className,
  tone = "neutral",
  ...props
}: ComponentProps<"span"> & { tone?: "neutral" | "brand" | "success" | "warning" | "dark" }) {
  const tones = {
    neutral: "bg-surface-strong text-muted",
    brand: "bg-brand-soft text-brand-strong",
    success: "bg-[#e2f5ea] text-success",
    warning: "bg-[#fdf0dd] text-warning",
    dark: "bg-white/10 text-white",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}

export function Avatar({
  name,
  size = "md",
  className,
}: {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: "size-8 text-xs",
    md: "size-11 text-sm",
    lg: "size-16 text-lg",
  } as const;

  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-semibold",
        avatarTone(name),
        sizes[size],
        className,
      )}
    >
      {initials(name)}
    </span>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{children}</p>
  );
}

export function Stat({
  value,
  label,
  hint,
  className,
}: {
  value: string;
  label: string;
  hint?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="display text-3xl font-semibold sm:text-4xl">{value}</p>
      <p className="mt-2 text-sm font-medium">{label}</p>
      {hint ? <p className="mt-1 text-xs text-muted">{hint}</p> : null}
    </div>
  );
}

/** Horizontal share bar used for audience breakdowns. */
export function ShareBar({ label, share }: { label: string; share: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span>{label}</span>
        <span className="font-medium tabular-nums text-muted">{share}%</span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-surface-strong">
        <div className="h-full rounded-full bg-brand" style={{ width: `${share}%` }} />
      </div>
    </div>
  );
}
