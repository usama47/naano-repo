import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/marketplace", label: "Creator marketplace" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/pricing", label: "Pricing" },
      { href: "/dashboard", label: "Campaign dashboard" },
    ],
  },
  {
    title: "Creators",
    links: [
      { href: "/for-creators", label: "Join as a creator" },
      { href: "/for-creators#payouts", label: "Payouts" },
      { href: "/for-creators#pricing", label: "Setting your price" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/how-it-works#attribution", label: "Attribution model" },
      { href: "/pricing#faq", label: "FAQ" },
      { href: "/marketplace", label: "Browse creators" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              <span className="grid size-7 place-items-center rounded-lg bg-ink text-sm font-bold text-white">
                n
              </span>
              naano
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted">
              A marketplace for booking B2B creators at a flat price per post, with tracked links
              and payouts handled end to end.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold">{column.title}</p>
              <ul className="mt-3 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="text-sm text-muted hover:text-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Demo build for local development. Creator data on this site is fictional.</p>
          <p>&copy; {new Date().getFullYear()} naano clone</p>
        </div>
      </div>
    </footer>
  );
}
