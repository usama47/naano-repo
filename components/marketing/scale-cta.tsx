import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function ScaleCta({
  kicker = "GET STARTED",
  title = "Ready to scale with naano?",
  body = "Launch your first campaign in minutes. No set-up, no lock-in — just creators and measurable results.",
  note,
  primary = { href: "/register", label: "Get started" },
  secondary = { href: "/#how-it-works", label: "See how it works" },
}: {
  kicker?: string;
  title?: string;
  body?: string;
  note?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string } | null;
}) {
  return (
    <section className="bg-[#1c4ed8] py-20 text-white">
      <Container className="max-w-3xl text-center">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-white/70">{kicker}</p>
        <h2 className="display mt-4 text-[40px] sm:text-[48px]">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-[16px] leading-7 text-white/80">{body}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href={primary.href} className="h-12 bg-white px-6 text-ink hover:bg-white/90">
            {primary.label} <ArrowRight className="size-4" />
          </ButtonLink>
          {secondary ? (
            <Link href={secondary.href} className="inline-flex h-12 items-center rounded-full border border-white/30 px-6 text-[15px] font-medium text-white hover:bg-white/10">
              {secondary.label}
            </Link>
          ) : null}
        </div>
        {note ? <p className="mt-5 text-[12px] text-white/60">{note}</p> : null}
      </Container>
    </section>
  );
}
