"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Compass, LayoutDashboard, Plus, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/dashboard/campaigns", label: "Campaigns", icon: BarChart3 },
  { href: "/marketplace", label: "Marketplace", icon: Compass },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <aside className="border-b border-border bg-white lg:border-b-0 lg:border-r">
      <div className="flex h-full flex-col gap-6 p-5 lg:w-64">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="grid size-7 place-items-center rounded-lg bg-ink text-sm font-bold text-white">
            n
          </span>
          naano
        </Link>

        <div className="rounded-2xl bg-surface p-3">
          <p className="text-xs text-muted">Workspace</p>
          <p className="mt-0.5 text-sm font-medium">Northbeam Analytics</p>
        </div>

        <nav className="flex gap-1 overflow-x-auto lg:flex-col lg:overflow-visible">
          {links.map((link) => {
            const active = link.exact
              ? pathname === link.href
              : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "inline-flex items-center gap-2.5 whitespace-nowrap rounded-xl px-3 py-2.5 text-sm transition-colors",
                  active ? "bg-ink text-white" : "text-muted hover:bg-surface hover:text-ink",
                )}
              >
                <link.icon className="size-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/dashboard/campaigns/new"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-strong"
        >
          <Plus className="size-4" />
          New campaign
        </Link>

        <div className="mt-auto hidden rounded-2xl border border-border p-4 lg:block">
          <div className="flex items-center gap-2">
            <Wallet className="size-4 text-brand" />
            <p className="text-xs font-medium">Wallet balance</p>
          </div>
          <p className="mt-2 text-lg font-semibold">€2,315</p>
          <p className="mt-1 text-xs text-muted">Covers booked posts not yet published.</p>
        </div>
      </div>
    </aside>
  );
}
