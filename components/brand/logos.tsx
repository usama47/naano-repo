import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const companyLogos = [
  { src: "/lp/logo-lemlist.png", alt: "lemlist" },
  { src: "/lp/logo-folk.png", alt: "folk." },
  { src: "/lp/logo-leadbay.png", alt: "LEADBAY" },
  { src: "/lp/logo-ringover.png", alt: "ringover" },
  { src: "/lp/logo-attio.jpg", alt: "attio" },
  { src: "/lp/logo-lagrowthmachine.png", alt: "La Growth Machine" },
  { src: "/lp/logo-gojiberry.png", alt: "gojiberry" },
  { src: "/lp/logo-chatseo.png", alt: "ChatSEO" },
  { src: "/lp/logo-abyssale.png", alt: "Abyssale" },
] as const;

const heroLogos = [
  { src: "/lp/logo-ringover.png", alt: "ringover" },
  { src: "/lp/logo-attio.jpg", alt: "attio" },
  { src: "/lp/logo-lagrowthmachine.png", alt: "La Growth Machine" },
  { src: "/lp/logo-gojiberry.png", alt: "gojiberry" },
  { src: "/lp/logo-chatseo.png", alt: "ChatSEO" },
  { src: "/lp/logo-abyssale.png", alt: "Abyssale" },
] as const;

export function LogoMark({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} className={cn("h-7 w-auto object-contain opacity-80", className)} />;
}

export function LogoMarquee({ caseStudy }: { caseStudy?: boolean }) {
  const logos = caseStudy ? heroLogos : companyLogos;
  const loop = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="animate-marquee flex w-max items-center gap-12 px-8">
        {loop.map((logo, i) => (
          <span key={logo.alt + i} className="flex shrink-0 items-center gap-12">
            <LogoMark src={logo.src} alt={logo.alt} className="h-8 opacity-90" />
            {caseStudy && logo.alt === "Abyssale" ? (
              <Link
                href="/case-studies/blogseo"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/80 bg-white/80 px-3 py-1.5 shadow-sm"
              >
                <img src="/lp/logo-blogseo.png" alt="BlogSEO" className="h-4 w-auto" />
                <span className="text-[10px] font-semibold tracking-[0.14em] text-ink/50">
                  CASE STUDY
                </span>
              </Link>
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TrustedGrid() {
  return (
    <div className="grid grid-cols-3 gap-x-8 gap-y-6">
      {companyLogos.map((logo) => (
        <LogoMark key={logo.alt} src={logo.src} alt={logo.alt} className="h-6 justify-self-start" />
      ))}
    </div>
  );
}

export function CloudScene({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={cn("sky-photo relative overflow-hidden", className)}>
      {children}
    </section>
  );
}
