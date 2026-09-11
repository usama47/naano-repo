"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { NaanoLogo } from "@/components/brand/logo";
import { ButtonLink } from "@/components/ui/button";
import { resourcesNav } from "@/lib/content/footer";
import { cn } from "@/lib/utils";

type Variant = "companies" | "creators" | "agencies";

function variantFromPath(pathname: string): Variant {
  if (pathname.startsWith("/creators")) return "creators";
  if (pathname.startsWith("/agencies")) return "agencies";
  return "companies";
}

const cta = {
  companies: { href: "/register", label: "Sign up" },
  creators: { href: "/register?role=influencer", label: "Start earning" },
  agencies: { href: "/agencies#choose", label: "Choose your agency" },
} as const;

function isSkyPath(pathname: string) {
  return (
    pathname === "/" ||
    pathname.startsWith("/creators") ||
    pathname.startsWith("/agencies") ||
    pathname === "/agency" ||
    pathname === "/talent-agency"
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const variant = variantFromPath(pathname);
  const sky = isSkyPath(pathname);
  const [open, setOpen] = useState(false);
  const [resources, setResources] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "For companies" },
    { href: "/creators", label: "For creators" },
    { href: "/agencies", label: "For agencies" },
    ...(variant === "agencies" ? [] : [{ href: "/#how-it-works", label: "How it works" }]),
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50",
        sky && !scrolled && !open ? "bg-transparent" : "bg-white/90 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between gap-6 px-5">
        <NaanoLogo />

        <nav className="hidden items-center gap-0.5 lg:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-[15px] font-medium text-[#17181C]/80 hover:text-[#17181C]",
                item.href === "/"
                  ? pathname === "/" && "text-[#17181C]"
                  : pathname.startsWith(item.href) && "text-[#17181C]",
              )}
            >
              {item.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setResources(true)}
            onMouseLeave={() => setResources(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-[15px] font-medium text-[#17181C]/80 hover:text-[#17181C]"
            >
              Resources
              <ChevronDown className="size-3.5" />
            </button>
            {resources ? (
              <div className="absolute left-0 top-full z-20 min-w-56 rounded-2xl border border-border bg-white py-2 shadow-[0_16px_50px_-28px_rgb(23_24_28/0.45)]">
                {resourcesNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 text-sm text-ink/80 hover:bg-surface hover:text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-full px-2 py-2 text-[13px] text-ink/70"
            aria-label="Language"
          >
            <Globe className="size-3.5" />
            EN
          </button>
          <ButtonLink
            href="/login"
            variant="outline"
            size="sm"
            className="h-[42px] border-white/80 bg-white px-[18px] text-[15px] font-semibold shadow-sm"
          >
            Sign in
          </ButtonLink>
          <ButtonLink href={cta[variant].href} size="sm" className="h-[42px] bg-[#17181C] px-5 text-[15px] font-semibold">
            {cta[variant].label}
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid size-10 place-items-center rounded-full border border-border bg-white/80 lg:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-white px-5 py-4 lg:hidden">
          <nav className="grid gap-1">
            {links.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-sm">
                {item.label}
              </Link>
            ))}
            {resourcesNav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-sm text-muted">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 grid gap-2">
            <ButtonLink href="/login" variant="outline" onClick={() => setOpen(false)}>
              Sign in
            </ButtonLink>
            <ButtonLink href={cta[variant].href} onClick={() => setOpen(false)}>
              {cta[variant].label}
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
