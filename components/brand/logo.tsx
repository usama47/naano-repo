import Link from "next/link";
import { cn } from "@/lib/utils";

export function NaanoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("size-7", className)} aria-hidden>
      <path
        fill="currentColor"
        d="M7 25.2V6.8h5.4c2.9 0 4.7 1.5 4.7 3.9 0 1.7-.9 3-2.4 3.7 1.9.6 3.1 2.1 3.1 4.1 0 2.8-2.1 4.7-5.6 4.7H7Zm4.2-10.4h1.4c1.3 0 2-.5 2-1.5s-.7-1.5-2-1.5H11.2v3Zm0 6.8h1.8c1.6 0 2.4-.6 2.4-1.7s-.8-1.7-2.4-1.7h-1.8v3.4Z"
      />
    </svg>
  );
}

export function NaanoLogo({
  href = "/",
  className,
}: {
  href?: string;
  className?: string;
}) {
  return (
    <Link href={href} className={cn("inline-flex items-center", className)}>
      <img src="/lp/naano-logo-nav.png" alt="naano" className="h-7 w-auto" />
    </Link>
  );
}
