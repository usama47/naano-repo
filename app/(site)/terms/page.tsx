import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "NAANO — Terms and Conditions of Sale & Terms of Use" },
  description:
    "Terms and Conditions of Sale (Advertisers) & Terms of Use (Creators). Flat Fee model — version 2.1, NAANO SAS.",
  alternates: { canonical: "/terms" },
};

const PDF = "/NAANO-Terms-of-Sale-and-Use-FlatFee-v2.1-EN.pdf";

export default function TermsPage() {
  return (
    <div className="bg-[#F5F5F4]">
      <section className="px-4 pb-10 pt-28 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-[720px] rounded-sm bg-white px-8 py-14 shadow-[0_1px_3px_rgba(17,24,39,0.06)] sm:px-14 sm:py-16">
          <p className="text-[28px] font-semibold tracking-[-0.04em] text-[#111827]">naano</p>
          <div className="mt-3 h-[3px] w-12 bg-[#1652F0]" />
          <h1 className="mt-8 text-[26px] font-semibold leading-snug tracking-[-0.02em] text-[#111827] sm:text-[28px]">
            Terms and Conditions of Sale (Advertisers)
            <br />
            & Terms of Use (Creators)
          </h1>
          <p className="mt-3 text-sm text-[#6B7280]">Flat Fee model — version 2.1</p>
          <div className="mt-10 space-y-1 text-[13px] leading-relaxed text-[#6B7280]">
            <p className="font-semibold uppercase tracking-[0.08em] text-[#111827]">NAANO SAS — société par actions simplifiée</p>
            <p>Share capital: €660</p>
            <p>Registered office: 84 avenue du Roule, 92200 Neuilly-sur-Seine, France</p>
            <p>Nanterre Trade and Companies Register — SIREN 100 248 772</p>
            <p>Platform: naano.xyz</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
            <a href={PDF} className="text-[#1652F0] underline underline-offset-4">
              Open the PDF
            </a>
            <a href={PDF} download className="text-[#1652F0] underline underline-offset-4">
              Download
            </a>
            <Link href="/privacy" className="text-[#6B7280] underline underline-offset-4">
              Privacy policy
            </Link>
          </div>
        </div>
      </section>
      <div className="px-4 pb-16 sm:px-6">
        <iframe
          title="NAANO Terms of Sale and Use, Flat Fee v2.1"
          src={`${PDF}#view=FitH`}
          className="mx-auto block h-[min(90vh,1100px)] w-full max-w-[920px] rounded-sm border border-[#E5E7EB] bg-white"
        />
      </div>
    </div>
  );
}
