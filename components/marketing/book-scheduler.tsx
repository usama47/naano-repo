import Link from "next/link";
import { ArrowRight, Check, Clock, Video } from "lucide-react";

const POINTS = [
  "Creator angles tailored to your market",
  "Recommended campaign format and budget",
  "A clear launch plan for your next campaign",
];

const TRUSTED = [
  { src: "/lp/logo-lemlist.png", alt: "lemlist" },
  { src: "/lp/logo-folk.png", alt: "folk" },
  { src: "/lp/logo-ringover.png", alt: "Ringover" },
  { src: "/lp/logo-attio.jpg", alt: "Attio" },
  { src: "/lp/logo-gojiberry.png", alt: "gojiberry" },
] as const;

export function BookScheduler() {
  return (
    <div className="mx-auto flex w-full max-w-[940px] flex-col items-center px-[clamp(20px,5vw,48px)] pb-16 pt-[clamp(32px,6vw,56px)]">
      <section className="w-full max-w-[680px] text-center">
        <p className="text-[12px] font-bold tracking-[0.16em] text-[#2563EB]">CAMPAIGN STRATEGY CALL</p>
        <h1 className="mt-5 text-[clamp(36px,8vw,52px)] font-bold leading-[1.04] tracking-[-0.035em] text-balance text-[#0E0F12]">
          Let&apos;s build your next creator campaign.
        </h1>
        <p className="mx-auto mt-[22px] max-w-[500px] text-[19px] leading-[1.5] text-[#55575E]">
          In 30 minutes, we&apos;ll map the right creator angles, campaign format and budget for your ICP.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-x-[26px] gap-y-3.5">
          {POINTS.map((item) => (
            <div key={item} className="flex items-center gap-[11px]">
              <span className="inline-flex size-[22px] shrink-0 items-center justify-center rounded-full bg-[rgba(37,99,235,0.1)]">
                <Check className="size-3 text-[#2563EB]" strokeWidth={3} />
              </span>
              <span className="text-[15.5px] font-medium text-[#2C2E33]">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-11 w-full">
        <div className="rounded-2xl border border-[#E7E5E1] bg-white px-[clamp(16px,3vw,26px)] pb-[22px] pt-[clamp(16px,3vw,26px)] shadow-[0_1px_3px_rgba(17,18,28,0.04)]">
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2.5 px-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-[20px] font-bold tracking-[-0.02em] text-[#0E0F12]">Book a campaign call</h2>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#E7E5E1] px-2.5 py-[5px] text-[12.5px] font-semibold text-[#2C2E33]">
                <Clock className="size-[13px]" strokeWidth={2} />
                30 min
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#E7E5E1] px-2.5 py-[5px] text-[12.5px] font-semibold text-[#2C2E33]">
                <Video className="size-[13px]" strokeWidth={2} />
                Video call
              </span>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#F5F4F1] px-[11px] py-1.5 text-[12.5px] font-semibold text-[#55575E]">
              <span className="size-[7px] rounded-full bg-[#16A34A]" />
              Demo
            </span>
          </div>

          <div className="mt-[18px] overflow-hidden rounded-xl border border-[#E7E5E1] bg-white">
            <div className="grid min-h-64 place-items-center p-8 text-center">
              <div>
                <h3 className="text-xl font-semibold">Plan a sample campaign</h3>
                <p className="mt-3 max-w-md text-sm text-muted">Live scheduling is outside this demo. Explore a creator shortlist and build a brief to see the campaign flow.</p>
                <Link href="/selection" className="mt-6 inline-block rounded-full bg-ink px-6 py-3 text-sm text-white">Find sample creators</Link>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-2.5 border-t border-[#F0EEEA] px-1 pb-0.5 pt-3.5">
            <p className="text-[13px] text-[#A7A9AF]">No calendar invitation is sent in this demo.</p>
            <Link
              href="/help"
              className="inline-flex items-center gap-1.5 whitespace-nowrap text-[13.5px] font-semibold text-[#2563EB]"
            >
              Read the product guide
              <ArrowRight className="size-[13px]" strokeWidth={2.3} />
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-[30px] opacity-90">
        <span className="text-[13px] font-semibold tracking-[0.01em] text-[#A7A9AF]">Trusted by B2B teams at</span>
        {TRUSTED.map((logo) => (
          <div key={logo.alt} className="flex h-6 w-20 items-center justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="block max-h-[22px] max-w-20 object-contain opacity-60 grayscale"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
