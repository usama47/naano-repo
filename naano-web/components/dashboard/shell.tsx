"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Bell,
  CreditCard,
  IdCard,
  Layers,
  LayoutGrid,
  LogOut,
  MessageCircle,
  Percent,
  Store,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import { NaanoLogo } from "@/components/brand/logo";
import { CommandBar } from "@/components/chrome/command-bar";
import { Avatar } from "@/components/ui/primitives";
import { signOut } from "@/app/actions/auth";
import { walletBalance } from "@/lib/data/creator-app";
import type { SessionUser } from "@/lib/session-user";
import { cn, formatEur } from "@/lib/utils";

const links = [
  { href: "/dashboard", label: "Overview", icon: LayoutGrid, exact: true },
  { href: "/dashboard/card", label: "My card", icon: IdCard },
  { href: "/dashboard/opportunities", label: "Opportunities", icon: Store },
  { href: "/dashboard/collaborations", label: "Collaborations", icon: Layers },
  { href: "/dashboard/analytics", label: "Analytics", icon: TrendingUp },
  { href: "/dashboard/community", label: "Community", icon: Users },
  { href: "/dashboard/earnings", label: "Earnings", icon: Wallet },
  { href: "/dashboard/affiliate", label: "Affiliate program", icon: Percent },
  { href: "/dashboard/messages", label: "Messages", icon: MessageCircle },
] as const;

function isActive(pathname: string, href: string, exact?: boolean) {
  return exact ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
}

function SidebarNav({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={className} aria-label="Creator dashboard">
      {links.map((link) => {
        const active = isActive(pathname, link.href, "exact" in link && link.exact);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] transition-colors",
              active
                ? "bg-[#eef3ff] font-medium text-[#4c6fff]"
                : "text-[#8b93a7] hover:bg-[#f5f7fb] hover:text-[#64748b]",
            )}
          >
            <link.icon className="size-[18px] shrink-0" strokeWidth={1.75} />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

function DashboardHeader({ user }: { user: SessionUser | null }) {
  const displayName = user?.name ?? "Account";
  const [locale, setLocale] = useState<"EN" | "FR">("EN");
  const [bellOpen, setBellOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onPointer(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setBellOpen(false);
        setUserOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-20 flex h-[72px] items-center justify-end gap-2 bg-white px-4 lg:px-8"
    >
      <Link
        href="/dashboard/earnings"
        className="grid size-9 place-items-center rounded-full border border-[#e8eaef] text-[#8b93a7] hover:bg-[#f7f8fa]"
        aria-label="Wallet"
      >
        <CreditCard className="size-3.5" strokeWidth={1.75} />
      </Link>
      <Link
        href="/dashboard/earnings"
        className="inline-flex h-9 items-center rounded-full border border-[#e8eaef] px-3 text-[13px] font-medium text-ink hover:bg-[#f7f8fa]"
      >
        {formatEur(walletBalance)}
      </Link>
      {(["EN", "FR"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          className={cn(
            "h-9 rounded-full px-3 text-[13px] font-medium",
            locale === item
              ? "border border-[#e8eaef] text-ink"
              : "text-[#8b93a7] hover:text-ink",
          )}
        >
          {item}
        </button>
      ))}

      <div className="relative">
        <button
          type="button"
          aria-label="Notifications"
          onClick={() => {
            setBellOpen((open) => !open);
            setUserOpen(false);
          }}
          className="grid size-9 place-items-center rounded-full text-[#8b93a7] hover:bg-[#f7f8fa]"
        >
          <Bell className="size-[18px]" strokeWidth={1.75} />
        </button>
        {bellOpen ? (
          <div className="absolute right-0 top-full z-30 mt-1 w-72 rounded-2xl border border-border bg-white p-4 shadow-[0_16px_40px_-24px_rgb(23_24_28/0.5)]">
            <p className="text-sm font-medium">Notifications</p>
            <p className="mt-2 text-sm text-muted">You are all caught up. New deals will land here.</p>
          </div>
        ) : null}
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => {
            setUserOpen((open) => !open);
            setBellOpen(false);
          }}
          className="relative rounded-full"
        >
          <Avatar name={displayName} size="sm" />
          <span className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-white bg-[#3dd6c6]" />
        </button>
        {userOpen ? (
          <div className="absolute right-0 top-full z-30 mt-1 w-56 overflow-hidden rounded-2xl border border-border bg-white py-2 shadow-[0_16px_40px_-24px_rgb(23_24_28/0.5)]">
            <div className="px-3 py-2">
              <p className="text-sm font-medium">{displayName}</p>
              <p className="text-xs text-muted">{user?.email || "Creator"}</p>
            </div>
            <Link
              href="/dashboard/card"
              className="block px-3 py-2 text-sm hover:bg-surface"
              onClick={() => setUserOpen(false)}
            >
              View storefront
            </Link>
            <form action={signOut}>
              <button
                type="submit"
                className="flex w-full items-center gap-2 px-3 py-2 text-sm text-muted hover:bg-surface"
              >
                <LogOut className="size-3.5" />
                Sign out
              </button>
            </form>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export function DashboardShell({
  children,
  user,
}: {
  children: React.ReactNode;
  user: SessionUser | null;
}) {
  return (
    <div className="flex min-h-screen flex-1 bg-white">
      <aside className="sticky top-0 hidden h-screen w-[220px] shrink-0 flex-col border-r border-[#f0f2f6] bg-white px-4 py-5 lg:flex">
        <NaanoLogo href="/dashboard" className="mb-8 px-2" />
        <SidebarNav className="flex flex-col gap-0.5" />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col pb-20 lg:pb-0">
        <DashboardHeader user={user} />
        <main className="flex-1 px-4 pb-16 pt-2 lg:px-10">{children}</main>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[#eef0f4] bg-white lg:hidden">
        <div className="flex items-center justify-between px-4 py-2">
          <NaanoLogo href="/dashboard" />
        </div>
        <SidebarNav className="flex gap-1 overflow-x-auto px-2 pb-2" />
      </div>
      <CommandBar className="bottom-24 lg:bottom-5" />
    </div>
  );
}
