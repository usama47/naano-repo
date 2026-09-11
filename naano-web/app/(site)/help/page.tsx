import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: { absolute: "Naano Help Center: campaigns, pricing & payouts" },
  description:
    "Answers to common questions about Naano: fixed-price creator campaigns, matching, payouts, and performance dashboards for B2B SaaS and creators.",
  alternates: { canonical: "/help" },
};

export default function HelpPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-blue-50/50 to-white px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 md:pt-44">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-[32px] font-bold leading-[1.1] tracking-[-0.03em] text-[#111827] sm:text-[40px] md:text-[52px]">
            Help Center
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[#64748B] sm:text-xl">Have a question or feedback? We're here to help.</p>
        </div>
      </section>

      <section className="px-4 pb-24 pt-4 sm:px-6 sm:pb-36 sm:pt-6">
        <div className="mx-auto max-w-2xl">
          <div className="py-4">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-blue-50 p-2.5 text-[#3B82F6]">
                <Mail className="size-6" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl">Contact us</h2>
            </div>
            <p className="text-lg leading-relaxed text-[#4B5563]">
              Send an email to{" "}
              <a href="mailto:info@naano.com" className="font-medium text-[#3B82F6] underline hover:text-[#2563EB]">
                info@naano.com
              </a>
              , or reach out to one of us on{" "}
              <a
                href="https://www.linkedin.com/company/naanooo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-[#3B82F6] underline hover:text-[#2563EB]"
              >
                LinkedIn
                <LinkedInMark />
              </a>
            </p>
          </div>
          <div className="mt-8 text-center">
            <Link href="/" className="text-sm font-medium text-[#3B82F6] hover:text-[#2563EB]">
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
