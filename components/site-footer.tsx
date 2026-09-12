import Link from "next/link";
import { NaanoLogo } from "@/components/brand/logo";
import { footerColumns, footerResourceLeft, footerResourceRight } from "@/lib/content/footer";

export function SiteFooter() {
  return (
    <footer className="sky-footer">
      <div className="mx-auto max-w-[1180px] px-5 pb-10 pt-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_0.9fr_0.9fr_0.95fr_1.6fr]">
          <div>
            <NaanoLogo />
            <p className="mt-4 max-w-[220px] text-[15px] leading-relaxed text-ink/70">
              Turn LinkedIn creators into your best acquisition channel.
            </p>
            <a
              href="https://www.linkedin.com/company/naanooo/"
              className="mt-5 inline-flex size-8 items-center justify-center rounded-md border border-ink/10 text-xs font-semibold text-ink/60"
            >
              in
            </a>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-[11px] font-semibold tracking-[0.16em] text-ink/45">{column.title}</p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    {"external" in link && link.external ? (
                      <a href={link.href} className="text-[15px] text-ink/75 hover:text-ink">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-[15px] text-ink/75 hover:text-ink">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              {column.title === "COMPANY" ? (
                <div className="mt-8">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-ink/45">For AI agents</p>
                  <ul className="mt-4 space-y-2.5 text-[15px] text-ink/75">
                    <li>
                      <a href="https://naano.com/llms.txt">llms.txt</a>
                    </li>
                    <li>
                      <a href="https://naano.com/pricing.md">pricing.md</a>
                    </li>
                    <li>
                      <Link href="/reports">Reports & data</Link>
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
          ))}

          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-ink/45">RESOURCES</p>
            <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2.5">
              <ul className="space-y-2.5">
                {footerResourceLeft.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[15px] text-ink/75 hover:text-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5">
                {footerResourceRight.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[15px] text-ink/75 hover:text-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-ink/10 pt-5 text-[13px] text-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} naano. All rights reserved.</p>
          <p className="inline-flex items-center gap-1">
            <span className="text-success">★</span> Trustpilot reviews
          </p>
        </div>
      </div>
    </footer>
  );
}
