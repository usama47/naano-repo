import Link from "next/link";
import { Container } from "@/components/ui/container";
import type { ReactNode } from "react";

export function Longform({
  kicker,
  title,
  lede,
  children,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <article className="bg-white">
      <div className="sky-photo border-b border-white/40 py-16">
        <Container className="max-w-3xl">
          {kicker ? <p className="text-[11px] font-semibold tracking-[0.16em] text-ink/50">{kicker}</p> : null}
          <h1 className="display mt-3 text-[40px] sm:text-[48px]">{title}</h1>
          {lede ? <p className="mt-5 text-lg leading-7 text-ink/70">{lede}</p> : null}
        </Container>
      </div>
      <Container className="max-w-3xl py-12">
        <div className="space-y-5 text-[16px] leading-7 text-ink/80">{children}</div>
        <p className="mt-12 rounded-[24px] bg-[#f6f8fb] p-6 text-sm">
          Ready to run this?{" "}
          <Link href="/book" className="font-medium">
            Book a campaign call →
          </Link>
        </p>
      </Container>
    </article>
  );
}
