import Link from "next/link";
import { Suspense } from "react";
import { NaanoMark } from "@/components/brand/logo";
import { CommandBar } from "@/components/chrome/command-bar";
import { AuthPanel } from "@/app/(auth)/auth-panel";
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-svh bg-white">
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="flex flex-col px-8 py-8 lg:px-16">
          <div className="flex items-center justify-between">
            <Link href="/" className="inline-flex w-fit text-ink">
              <NaanoMark className="size-8" />
            </Link>
            <span className="inline-flex items-center gap-1 text-sm text-ink/60">🌐 EN</span>
          </div>
          <div className="flex flex-1 items-center">{children}</div>
        </div>
        <div className="hidden items-center bg-auth px-16 text-white lg:flex">
          <Suspense>
            <AuthPanel />
          </Suspense>
        </div>
      </div>
      <CommandBar />
    </div>
  );
}
