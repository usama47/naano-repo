import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy — Naano" },
  description:
    "How NAANO SAS processes personal data on the Naano marketplace. Last updated September 3, 2026.",
  alternates: { canonical: "/privacy" },
};

const PDF = "/PRIVACY.pdf";

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <article className="mx-auto max-w-[720px] px-5 pb-24 pt-28 sm:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1652F0]">Privacy</p>
        <h1 className="mt-4 text-[clamp(32px,5vw,48px)] font-light leading-[1.1] tracking-[-0.025em] text-[#111827]">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-[#6B7280]">Last updated: September 3, 2026</p>
        <p className="mt-8 text-[17px] leading-relaxed text-[#374151]">
          Live Naano serves this policy as <span className="font-medium text-[#111827]">PRIVACY.pdf</span>. The capture for this clone did not include a rendered HTML version of that PDF, so this page keeps the{" "}
          <code className="rounded border border-[#E5E7EB] bg-[#F9FAFB] px-1.5 py-0.5 text-[0.92em]">/privacy</code> route and points to the same document.
        </p>
        <p className="mt-5 text-[17px] leading-relaxed text-[#374151]">
          NAANO SAS (84 avenue du Roule, 92200 Neuilly-sur-Seine, France, SIREN 100 248 772) is the controller. Privacy requests go to{" "}
          <a href="mailto:justine@naano.com" className="font-medium text-[#1652F0] underline underline-offset-4">
            justine@naano.com
          </a>
          .
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={PDF}
            className="inline-flex h-11 items-center rounded-full bg-[#111827] px-5 text-sm font-medium text-white hover:bg-[#1F2937]"
          >
            Open PRIVACY.pdf
          </a>
          <a
            href={PDF}
            download
            className="inline-flex h-11 items-center rounded-full border border-[#E5E7EB] px-5 text-sm font-medium text-[#111827] hover:bg-[#F9FAFB]"
          >
            Download
          </a>
          <Link
            href="/terms"
            className="inline-flex h-11 items-center rounded-full border border-[#E5E7EB] px-5 text-sm font-medium text-[#111827] hover:bg-[#F9FAFB]"
          >
            Terms of Sale & Use
          </Link>
        </div>
      </article>
    </div>
  );
}
