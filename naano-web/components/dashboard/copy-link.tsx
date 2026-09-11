"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function CopyLink({
  value,
  children,
  className,
}: {
  value: string;
  children: ReactNode;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      className={className}
      onClick={async () => {
        const url = value.startsWith("http") ? value : `${window.location.origin}${value}`;
        await navigator.clipboard.writeText(url);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
      }}
    >
      {copied ? <span className={cn("text-success")}>Copied</span> : children}
    </button>
  );
}
