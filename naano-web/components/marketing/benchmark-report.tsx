import Link from "next/link";
import type { ReactNode } from "react";
import { benchToc, cplNotes, cplVerticals, td } from "@/lib/content/benchmarks-q2-2026";

function Lead({ children }: { children: string }) {
  return <strong className="font-medium text-[#111827]">{children}</strong>;
}

function BenchH2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mb-5 mt-16 scroll-mt-28 border-t border-[#F3F4F6] pt-4 text-[clamp(22px,2.6vw,30px)] font-light tracking-[-0.02em] text-[#111827]"
    >
      {children}
    </h2>
  );
}

function BenchP({ children }: { children: ReactNode }) {
  return <p className="my-5">{children}</p>;
}

function BenchLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-[#1652F0] underline decoration-[#1652F0]/30 underline-offset-4 hover:decoration-[#1652F0]">
      {children}
    </Link>
  );
}

function BenchCode({ children }: { children: ReactNode }) {
  return (
    <code className="rounded border border-[#E5E7EB] bg-[#F3F4F6] px-1.5 py-0.5 text-[0.92em] text-[#111827]">{children}</code>
  );
}

function BenchTable({ headers, caption, children }: { headers: string[]; caption?: string; children: ReactNode }) {
  return (
    <>
      <div className="my-8 overflow-x-auto rounded-xl border border-[#E5E7EB]">
        <table className="w-full border-separate border-spacing-0 text-sm tabular-nums">
          <thead className="bg-[#F9FAFB]">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="border-b border-[#E5E7EB] px-4 py-3 text-left text-[11px] font-medium uppercase tracking-[0.1em] text-[#111827]"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
      {caption ? <p className="my-5 text-sm text-[#6B7280]">{caption}</p> : null}
    </>
  );
}

export function BenchmarkReport() {
  return (
    <div className="px-4 pb-24 pt-12 sm:px-6 sm:pt-16">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-x-10 lg:grid-cols-12 lg:gap-x-16">
        <aside className="lg:order-2 lg:col-span-3">
          <nav aria-label="On this page" className="sticky top-24 hidden self-start text-sm lg:block">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6B7280]">On this page</p>
            <ul className="space-y-2.5 border-l border-[#E5E7EB]">
              {benchToc.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`-ml-px block border-l-2 py-0.5 pl-4 ${
                      index === 0
                        ? "border-[#111827] font-medium text-[#111827]"
                        : "border-transparent text-[#6B7280] hover:text-[#111827]"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <article className="lg:order-1 lg:col-span-9">
          <div className="prose-bench max-w-[72ch] text-[17px] leading-[1.75] text-[#1F2937] tabular-nums">
            <div role="note" className="my-6 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-5 py-4 text-sm leading-relaxed text-[#374151]">
              <strong className="font-medium text-[#111827]">Editorial note (July 14, 2026):</strong> the data in this report was measured in Q1 2026 under Naano's earlier cost-per-click pricing model. Since then, Naano has moved to creator-defined fixed-price offers, see{" "}
              <BenchLink href="/pricing">current pricing</BenchLink>. The performance benchmarks below (CPL, CTR, conversion) remain valid as historical Q1 2026 data.
            </div>

            <p className="text-[19px] leading-[1.7] text-[#111827]">
              This is the first edition of Naano's quarterly benchmark report on B2B creator-led growth. It publishes the proprietary CPL, CTR, time-to-launch, and conversion metrics from every campaign that ran on the Naano marketplace during Q1 2026. Numbers are first-party measurements, not estimates, and every table includes the sample size behind it. Where useful, we compare against the most recent public LinkedIn benchmarks so marketers can calibrate against the channels they already run.
            </p>

            <BenchH2 id="executive-summary">Executive summary</BenchH2>
            <ul className="my-5 list-disc space-y-2 pl-6 marker:text-[#9CA3AF]">
              <li>
                <Lead>Average CPL on Naano in Q1 2026 was €18.10</Lead> across 312 campaigns, ~67–80% below typical LinkedIn Ads CPL for comparable B2B SaaS audiences (€55–€90). The lowest vertical (marketing-ops, median €16) and the highest (vertical SaaS, median €21) bracket a tighter-than-expected distribution.
              </li>
              <li>
                <Lead>CTR on creator-led posts averaged 12.0%</Lead> across 1,847 posts, roughly 15× the LinkedIn Sponsored Content benchmark (0.8%). CTR scales inversely with creator follower count: 1k–3k creators clocked 13.8% median CTR, 10k+ creators clocked 8.7%.
              </li>
              <li>
                <Lead>Median time-to-launch was 7 days</Lead> from brief submission to first post live, with a p25 of 5 days and a p75 of 10 days. Implied qualified-click → SQL conversion rate across the full funnel was approximately 3.4%.
              </li>
            </ul>

            <BenchH2 id="methodology">Methodology</BenchH2>
            <BenchP>
              All data in this report is drawn directly from Naano's production database. We did not survey customers, model missing values, or extrapolate from a sub-sample. Every campaign that completed at least one paid post during the data window is included.
            </BenchP>
            <ul className="my-5 list-disc space-y-2 pl-6 marker:text-[#9CA3AF]">
              <li>
                <Lead>Data window:</Lead> 2026-01-01 to 2026-03-31 (Q1 2026).
              </li>
              <li>
                <Lead>Sample:</Lead> 312 campaigns from 89 distinct brands; 1,847 individual sponsored posts; ~300 active creators from the Naano roster.
              </li>
              <li>
                <Lead>Definition of “qualified click”:</Lead> a click that (a) carries a Naano UTM parameter, (b) successfully resolves to the brand's landing page, and (c) records ≥30 seconds of on-site engagement before a bounce. Bots and crawlers are filtered server-side; visits are deduplicated to one per IP per hour.
              </li>
              <li>
                <Lead>Definition of “vertical”:</Lead> campaigns are tagged at brief creation with one of <BenchCode>sales-tech</BenchCode>, <BenchCode>RevOps</BenchCode>, <BenchCode>devtools</BenchCode>, <BenchCode>product</BenchCode>, <BenchCode>HR-tech</BenchCode>, <BenchCode>fintech</BenchCode>, <BenchCode>marketing-ops</BenchCode>, or <BenchCode>vertical-SaaS</BenchCode>. A campaign appears in only one vertical bucket.
              </li>
              <li>
                <Lead>Comparison baselines:</Lead> the LinkedIn B2B Marketing Benchmark 2025 (CTR, CPM), public LinkedIn Ads CPC ranges as reported by industry analysts, and Naano-internal pre-campaign baselines collected at brand-onboarding intake.
              </li>
              <li>
                <Lead>Statistics:</Lead> “average” refers to the mean unless otherwise noted. Quartiles (p25, p75) are computed on the full underlying distribution, not on per-campaign aggregates.
              </li>
            </ul>

            <BenchH2 id="headline-benchmarks">Headline benchmarks</BenchH2>
            <BenchP>
              The table below compares the five metrics most often cited in B2B SaaS budget conversations. Naano figures are Q1 2026 means; LinkedIn Ads ranges reflect the most recent publicly reported values for B2B SaaS audiences in EU and US markets.
            </BenchP>
            <BenchTable
              headers={["Metric", "Naano (Q1 2026)", "LinkedIn Ads benchmark", "Delta"]}
              caption="Sample: 312 campaigns / 1,847 posts / 89 brands. CPL = total paid spend ÷ qualified clicks. CTR = qualified clicks ÷ impressions reported by LinkedIn at post level."
            >
              {[
                ["Average CPL (cost per qualified click)", "€18.10", "€55–€90 (LinkedIn Ads, B2B SaaS)", "−67% to −80%"],
                ["Average CTR (sponsored content)", "12.0%", "0.8% (LinkedIn B2B Marketing Benchmark 2025)", "+15× absolute"],
                ["Average CPC (per qualified click)", "€2.30", "€8–€15 (LinkedIn Ads CPC range)", "−71% to −85%"],
                ["Time-to-launch (brief → first post)", "7 days (median)", "21–35 days (typical agency)", "−67% to −80%"],
                ["Reply rate, warm outbound to post engagers", "39.6%", "~5% (cold outbound industry avg)", "+8× absolute"],
              ].map((row) => (
                <tr key={row[0]}>
                  <td className={td("body")}>{row[0]}</td>
                  <td className={td("value")}>{row[1]}</td>
                  <td className={td("body")}>{row[2]}</td>
                  <td className={td("green")}>{row[3]}</td>
                </tr>
              ))}
            </BenchTable>

            <BenchH2 id="cpl-by-vertical">CPL by vertical</BenchH2>
            <BenchP>
              CPL varies primarily with creator supply and audience density. Verticals with deep creator pools and highly self-identified audiences (sales-tech, marketing-ops) come in below the platform mean of €18; sparse-supply verticals (vertical SaaS, HR-tech) trend higher. The table below shows the 10th-percentile, median, and 90th-percentile CPL for each vertical, alongside the number of campaigns analysed.
            </BenchP>
            <BenchTable headers={["Vertical", "CPL p10", "CPL median", "CPL p90", "n campaigns"]}>
              {cplVerticals.map((row) => (
                <tr key={row.name}>
                  <td className={td("label")}>
                    <Link href={row.href} className="rounded-sm hover:underline underline-offset-4">
                      {row.name}
                    </Link>
                  </td>
                  <td className={td("body")}>{row.p10}</td>
                  <td className={td("body")}>{row.median}</td>
                  <td className={td("body")}>{row.p90}</td>
                  <td className={td("muted")}>n={row.n}</td>
                </tr>
              ))}
            </BenchTable>
            <div className="my-8 space-y-6">
              {cplNotes.map((note) => (
                <div key={note.name}>
                  <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                    {note.name} · n={note.n}
                  </p>
                  <p className="leading-[1.7] text-[#374151]">{note.body}</p>
                </div>
              ))}
            </div>

            <BenchH2 id="ctr-by-creator-tier">CTR by creator tier</BenchH2>
            <BenchP>
              The follower-count → CTR relationship is the single most replicated finding in the dataset. Smaller creators consistently drive higher CTR, a pattern that holds inside every vertical we measured. We attribute this to two compounding effects: LinkedIn's algorithm rewards high engagement-per-impression (which nano-creators reliably produce in their tight communities), and audiences treat 1k–3k-follower creators as peers rather than as “media”, which raises click intent.
            </BenchP>
            <BenchTable
              headers={["Creator tier", "CTR median", "CTR p25", "CTR p75", "n posts"]}
              caption="Sample: 1,847 sponsored posts. Tiers reflect creator follower count at the date of publication. CTR = qualified clicks ÷ LinkedIn-reported impressions."
            >
              {[
                ["1k–3k followers", "13.8%", "10.2%", "17.4%", "612"],
                ["3k–7k followers", "12.1%", "9.0%", "15.6%", "743"],
                ["7k–10k followers", "10.4%", "7.6%", "13.2%", "318"],
                ["10k+ followers", "8.7%", "6.1%", "11.3%", "174"],
              ].map((row) => (
                <tr key={row[0]}>
                  <td className={td("label")}>{row[0]}</td>
                  <td className={td("body")}>{row[1]}</td>
                  <td className={td("body")}>{row[2]}</td>
                  <td className={td("body")}>{row[3]}</td>
                  <td className={td("muted")}>n={row[4]}</td>
                </tr>
              ))}
            </BenchTable>

            <BenchH2 id="time-to-launch">Time-to-launch distribution</BenchH2>
            <BenchP>
              Time-to-launch is the number of calendar days between brief submission and the first paid post going live. The median Naano campaign launched 7 days after brief submission, with 25% of campaigns launching in 5 days or fewer.
            </BenchP>
            <BenchTable
              headers={["Percentile", "Days from brief to first post", "Distribution"]}
              caption="Sample: 312 campaigns. Reference benchmark: typical B2B influencer-marketing agencies report 21–35-day launch cycles for comparable scopes."
            >
              {[
                ["p10 (fastest)", "3 days", "18%"],
                ["p25", "5 days", "30%"],
                ["Median (p50)", "7 days", "42%"],
                ["p75", "10 days", "60%"],
                ["p90 (slowest)", "16 days", "96%"],
              ].map((row) => (
                <tr key={row[0]}>
                  <td className={td("label")}>{row[0]}</td>
                  <td className={td("body")}>{row[1]}</td>
                  <td className="border-b border-[#F3F4F6] px-4 py-3 align-middle">
                    <span aria-hidden className="inline-block h-2 rounded-full bg-[#1652F0]" style={{ width: row[2] }} />
                  </td>
                </tr>
              ))}
            </BenchTable>

            <BenchH2 id="conversion-benchmarks">Conversion benchmarks (post → site → demo)</BenchH2>
            <BenchP>
              The funnel below traces the median journey from a creator-led LinkedIn post to a sales-qualified lead, using the subset of campaigns where the brand granted Naano access to downstream CRM events (n=104 campaigns, ~33% of the dataset).
            </BenchP>
            <BenchTable headers={["Funnel stage", "Conversion rate", "Sample"]}>
              {[
                ["Click → ≥30s on-site engagement", "67.0%", "n=82,440 clicks"],
                ["≥30s engagement → demo-form submission", "8.3%", "n=55,235 engaged sessions"],
                ["Demo-form → SQL (sales-qualified lead)", "41.0%", "n=4,584 demo submissions"],
                ["Implied qualified click → SQL", "≈3.4%", "Composite"],
              ].map((row) => (
                <tr key={row[0]}>
                  <td className={td("body")}>{row[0]}</td>
                  <td className={td("green")}>{row[1]}</td>
                  <td className={td("muted")}>{row[2]}</td>
                </tr>
              ))}
            </BenchTable>
            <BenchP>
              The composite implies that a qualified click acquired via Naano has a ~3.4% chance of becoming an SQL within 30 days of the originating post. At a €18 average CPL, that implies an effective cost-per-SQL of approximately €530, substantially below the €1,200–€1,800 cost-per-SQL most B2B SaaS marketers report on LinkedIn Ads for comparable audiences.
            </BenchP>
            <BenchP>
              Caveat: SQL conversion depends heavily on each brand's lead-scoring criteria. The 41% demo-to-SQL rate is the median across 89 brands; we observed a wide p25/p75 range of 28–58%.
            </BenchP>

            <BenchH2 id="channel-mix">Channel mix observations</BenchH2>
            <BenchP>
              Naano-using brands rarely treat creator-led growth as a stand-alone channel. The dominant pattern in Q1 2026 was a three-layer stack: (1) Naano creator posts to generate initial reach and warm interest, (2) LinkedIn Ads retargeting against the engagers list exported from Naano, and (3) warm SDR outbound sequences to commenters and sharers. Brands that ran all three layers in sequence reported a ~38% lift in pipeline-per-click versus brands that ran Naano alone, a finding consistent with the well-documented retargeting amplification effect.
            </BenchP>
            <BenchP>
              A second pattern: brands routinely use creator content as a downstream creative source. Roughly 41% of Q1 2026 customers reported repurposing at least one creator-led post into a LinkedIn Ad creative or a landing-page social-proof block. The creators' authentic copy outperformed brand-authored copy in every reported A/B test we have visibility into, with relative CTR lifts in the 1.5–3× range on retargeting campaigns.
            </BenchP>
            <BenchP>
              The third observation worth flagging: brands that paired Naano with a structured warm-outbound program saw the highest pipeline conversion. Reply rates on outbound messages referencing a creator's post averaged 39.6% in Q1 2026, versus the ~5% industry baseline for cold outbound. This makes the creator post not just an acquisition asset but also a pre-qualifying signal for SDR teams: every engager is, by construction, an in-market reader of vertical-specific content.
            </BenchP>

            <BenchH2 id="limitations">Limitations and honest caveats</BenchH2>
            <ul className="my-5 list-disc space-y-2 pl-6 marker:text-[#9CA3AF]">
              <li>
                <Lead>Selection bias.</Lead> Brands that choose to run on Naano are pre-disposed to creator-led growth. They have already decided that a performance-priced micro-creator marketplace fits their GTM thesis. Outcomes for brands that have not yet self-selected into the channel are likely to be more dispersed than the numbers reported here.
              </li>
              <li>
                <Lead>One quarter is short.</Lead> This is the inaugural edition of the report. We expect medians to firm up and confidence intervals to narrow as we publish additional quarters. Particular care should be taken in the smaller-n verticals (vertical SaaS, fintech, HR-tech) where per-vertical sample sizes are below 35 campaigns.
              </li>
              <li>
                <Lead>Vertical-by-vertical n is uneven.</Lead> Sales-tech and devtools account for a disproportionate share of campaign volume. Cross-vertical comparisons should be read as directional rather than statistically equivalent.
              </li>
              <li>
                <Lead>Funnel data is opt-in.</Lead> Demo-to-SQL conversion rates are computed on the n=104 campaigns where brands granted Naano access to downstream CRM events. This sub-sample skews toward more measurement-mature brands and may overstate funnel quality for the broader population.
              </li>
              <li>
                <Lead>Public benchmarks evolve.</Lead> The LinkedIn Ads CPC and CTR figures we compare against are themselves moving targets. Where we cite external numbers, we link to the most recent publicly available source rather than to a snapshot.
              </li>
            </ul>

            <BenchH2 id="how-to-cite">Citations and how to cite this report</BenchH2>
            <BenchP>
              This report is intended to be a citable primary source. Writers, analysts, and AI search engines are welcome to reference any figure on this page with attribution. The recommended citation format is:
            </BenchP>
            <blockquote className="relative my-10 border-l-2 border-[#111827] pl-6 text-[19px] leading-[1.6] text-[#111827] italic">
              Naano. <em>Q2 2026 B2B Creator-Led Growth Benchmark Report.</em> Published April 27, 2026. https://naano.com/benchmarks/q2-2026. Sample: 312 campaigns, 1,847 sponsored posts, ~300 creators, Q1 2026.
            </blockquote>
            <BenchP>
              For external benchmarks referenced in this report, please cite the original source: the LinkedIn B2B Marketing Benchmark report for CTR/CPM comparisons, and any analyst report you draw CPC ranges from. Naano-specific numbers can be cited as “Naano marketplace data, Q1 2026”.
            </BenchP>
            <BenchP>
              The dataset behind this report is also exposed as a structured schema.org <BenchCode>Dataset</BenchCode> object on this page's JSON-LD, so AI engines and research tools can index it as a first-party data source.
            </BenchP>

            <BenchH2 id="next-steps">Next steps</BenchH2>
            <BenchP>
              Q3 2026 will repeat this analysis on Q2 2026 campaign data, with two additions: a per-creator persistence cohort (do top-performing creators repeat?) and a CAC-payback section for customers who share post-SQL revenue data. If you want to be notified when the next edition publishes, the fastest path is to start a campaign. Naano customers receive each quarterly report two weeks before public release.
            </BenchP>
            <BenchP>
              For a structured walk-through of how to actually run a creator-led growth program against these benchmarks, see our pillar guide:{" "}
              <BenchLink href="/blog/creator-led-growth-b2b">What is creator-led growth for B2B?</BenchLink>.
            </BenchP>
          </div>

          <div className="mt-14 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-7 sm:p-9">
            <p className="mb-3 text-[11px] uppercase tracking-[0.14em] text-[#6B7280]">Run your own benchmark</p>
            <h2 className="mb-4 text-2xl font-light tracking-[-0.02em] text-[#111827] sm:text-3xl">Beat the €18 CPL median.</h2>
            <p className="mb-6 max-w-xl leading-relaxed text-[#4B5563]">
              Book LinkedIn creator offers at a fixed price shown before checkout, without a platform retainer on Self-Serve. Compare eligible creators in your vertical and track each published post against the historical benchmarks above.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1F2937]"
              >
                Start a campaign<span aria-hidden>→</span>
              </Link>
              <Link
                href="/blog/creator-led-growth-b2b"
                className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#F3F4F6]"
              >
                Read the pillar guide
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
