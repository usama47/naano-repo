import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const control =
  "h-11 w-full rounded-xl border border-border bg-white px-3.5 text-sm text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10";

export function Input({ className, ...props }: ComponentProps<"input">) {
  return <input className={cn(control, className)} {...props} />;
}

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(control, "h-auto min-h-24 py-3 leading-relaxed", className)}
      {...props}
    />
  );
}

export function Select({ className, ...props }: ComponentProps<"select">) {
  return (
    <select
      className={cn(control, "cursor-pointer appearance-none pr-9", className)}
      {...props}
    />
  );
}

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
      {hint ? <span className="mt-1.5 block text-xs text-muted">{hint}</span> : null}
    </label>
  );
}
