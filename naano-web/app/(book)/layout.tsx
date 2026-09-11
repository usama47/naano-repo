import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CommandBar } from "@/components/chrome/command-bar";
import { CookieBar } from "@/components/chrome/cookie-bar";
import type { ReactNode } from "react";

export default function BookLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col bg-[#FCFCFB] text-[#17181C]">
      <header className="flex items-center justify-between border-b border-[#EFEDE9] px-[clamp(20px,5vw,48px)] py-[clamp(16px,3vw,24px)]">
        <Link href="/" className="inline-flex items-center">
          <img src="/lp/naano-logo-nav.png" alt="naano" className="block h-[26px] w-auto" />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-[#55575E] no-underline hover:text-[#17181C]"
        >
          <ArrowLeft className="size-[15px]" strokeWidth={2.2} />
          Back to homepage
        </Link>
      </header>
      <main className="flex-1">{children}</main>
      <CommandBar />
      <CookieBar />
    </div>
  );
}
