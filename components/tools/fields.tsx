import type { ReactNode } from "react";

export function BluePeriod({
  as: Tag = "h1",
  className,
  children,
}: {
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: string;
}) {
  const text = children.replace(/\.$/, "");
  return (
    <Tag className={className}>
      {text}
      <span className="text-[#1652F0]">.</span>
    </Tag>
  );
}

export function ToolField({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-1.5 text-[15px] font-semibold text-[#17181C]">
      <span>
        {label}
        {hint ? <span className="mt-0.5 block text-[13px] font-normal text-[#6B6D74]">{hint}</span> : null}
      </span>
      {children}
    </label>
  );
}

export const toolInputClass =
  "mt-2 h-12 w-full min-h-11 rounded-xl border border-[#E4E1DC] bg-white px-4 text-[15px] font-normal text-[#17181C] shadow-[0_1px_2px_rgba(23,24,28,0.03)] outline-none placeholder:text-[#B4B4B0] focus:border-transparent focus:ring-2 focus:ring-[#1652F0]";
