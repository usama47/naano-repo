import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { CloudScene, LogoMarquee } from "@/components/brand/logos";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const testimonials = [
  { name: "Raphael Alfero", role: "B2B creator · 18K followers", quote: "Naano is the marketplace LinkedIn was missing. The founders truly listen.", avatar: "/lp/avatar-a.png" },
  { name: "Aya Dara", role: "Content creator · 9K followers", quote: "Clear opportunities, an easy platform, everything well guided.", avatar: "/lp/avatar-b.png" },
  { name: "Robin Tempe", role: "Sales creator · 14K followers", quote: "Great experience, I love the platform. I already made money from day one.", avatar: "/lp/avatar-c.png" },
  { name: "Thomas Higadère", role: "B2B & AI creator · 34K followers", quote: "Naano lets me keep making useful content while monetizing my community.", avatar: "/lp/avatar-d.png" },
  { name: "Eric Djavid", role: "LinkedIn creator · 40K followers", quote: "A young team that's ambitious, efficient and driven.", avatar: "/lp/avatar-e.png" },
  { name: "Nada Ait Ouchene", role: "Marketing creator · 11K followers", quote: "I'd tell every creator to join Naano.", avatar: "/lp/avatar-f.png" },
];

export default function CreatorsPage() {
  return (
    <>
      <CloudScene className="-mt-[72px] pb-10 pt-[108px] text-center">
        <Container>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-3 py-1.5 text-[13px] text-ink/70">
            <span className="flex -space-x-1.5">
              <img src="/lp/avatar-a.png" alt="" className="size-5 rounded-full object-cover" />
              <img src="/lp/avatar-d.png" alt="" className="size-5 rounded-full object-cover" />
            </span>
            2,000+ creators paid · 4.8/5 rating
          </span>
          <h1 className="display mx-auto mt-7 max-w-4xl text-[48px] sm:text-[64px] lg:text-[72px]">
            Get paid to post on
            <br />
            LinkedIn
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-7 text-ink/70">
            Choose deals from B2B brands you know, post in your own voice, and get paid within 24h. No negotiating, no admin. Creators earn{" "}
            <strong className="font-semibold text-ink">€500 on average per deal.</strong>
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
            <ButtonLink href="/register?role=influencer" size="lg" className="h-12 bg-[#17181C] px-6">
              Start earning <ArrowRight className="size-4" />
            </ButtonLink>
            <Link href="#how" className="inline-flex items-center gap-1 text-[15px] font-medium">
              See how it works <ArrowRight className="size-4" />
            </Link>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-[13px] text-ink/50">
            <ShieldCheck className="size-4" /> Free to join · No exclusivity · Paid within 24h
          </p>
          <p className="mt-14 text-[11px] tracking-[0.16em] text-ink/40">THE BRANDS ALREADY ON NAANO</p>
        </Container>
        <div className="mt-6 pb-10">
          <LogoMarquee />
        </div>
      </CloudScene>

      <section className="bg-white py-20" id="how">
        <Container>
          <h2 className="display max-w-3xl text-[40px] sm:text-[48px]">Monetize your content on Naano.</h2>
          <p className="mt-4 max-w-xl text-muted">
            Accept deals from brands you know, or bring your own onto the platform and get paid faster.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Centralized opportunities", "Discover brand deals that match your audience."],
              ["Payments built-in", "Get paid on time with secure, transparent payouts."],
              ["Track performance", "See views, clicks and engagement in real time."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-[28px] bg-[#eaf6fd] p-6">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-10">
        <Container>
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {[
              ["2,000+", "Creators earning"],
              ["€500", "Avg. per deal"],
              ["5K+", "Posts published"],
              ["24h", "Avg. payout time"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="text-4xl font-semibold">{v}</p>
                <p className="mt-1 text-sm text-muted">{l}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <h2 className="display text-[40px]">What creators say.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="rounded-[28px] border border-border p-6">
                <p className="text-[15px] leading-6">“{t.quote}”</p>
                <div className="mt-5 flex items-center gap-3">
                  <img src={t.avatar} alt="" className="size-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <CloudScene className="py-24 text-center">
        <Container>
          <h2 className="display mx-auto max-w-3xl text-[40px] sm:text-[48px]">You&apos;ve seen how it works. Now get paid for it.</h2>
          <p className="mx-auto mt-4 max-w-lg text-ink/65">
            Join 2,000+ creators already getting paid to post on LinkedIn. It&apos;s free, and you keep 100% of what you earn.
          </p>
          <ButtonLink href="/register?role=influencer" size="lg" className="mt-8 h-12 bg-[#17181C] px-7">
            Start earning
          </ButtonLink>
        </Container>
      </CloudScene>
    </>
  );
}
