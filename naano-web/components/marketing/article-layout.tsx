import Link from "next/link";
import { Clock } from "lucide-react";
import { ScaleCta } from "@/components/marketing/scale-cta";
import { RichText } from "@/components/marketing/rich-text";
import { coverFor, initials, topicFor } from "@/lib/content/blog-index";
import { getArticle, relatedArticles, type Article, type ArticleBlock } from "@/lib/content/articles";

function headingId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function headingsOf(article: Article) {
  if (article.blocks?.length) {
    return article.blocks.filter((block): block is Extract<ArticleBlock, { type: "h2" }> => block.type === "h2");
  }
  return (article.sections ?? []).filter((section) => section.heading).map((section) => ({ type: "h2" as const, text: section.heading ?? "" }));
}

function CoverHero({ article }: { article: Article }) {
  const cover = coverFor(article.slug);
  const topic = topicFor(article.slug, article.category);
  return (
    <section
      className="relative overflow-hidden px-4 pb-20 pt-28 text-white sm:px-6 sm:pb-24 sm:pt-32"
      style={{ background: `linear-gradient(135deg, ${cover.gradient})` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="mb-10">
          <Link href="/blog" className="text-xs uppercase tracking-[0.14em] text-white/80 hover:text-white">
            ← Blog
          </Link>
        </div>
        <div className="max-w-[840px]">
          <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-white/85">
            <span className="font-semibold">{topic}</span>
            <span aria-hidden className="size-1 rounded-full bg-white/60" />
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3" />
              {article.minutes} min read
            </span>
            <span aria-hidden className="size-1 rounded-full bg-white/60" />
            <span>EN</span>
          </div>
          <h1 className="mb-7 text-[clamp(32px,5vw,58px)] font-light leading-[1.04] tracking-[-0.025em]">{article.title}</h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{article.lede}</p>
        </div>
      </div>
    </section>
  );
}

function AuthorRow({ article }: { article: Article }) {
  const photo = article.avatar ? (
    <img src={article.avatar} alt="" className="size-11 rounded-full border border-[#E5E7EB] object-cover" />
  ) : (
    <span className="flex size-11 items-center justify-center rounded-full border border-[#E5E7EB] bg-[#F3F4F6] text-xs font-semibold text-[#4B5563]">
      {initials(article.author)}
    </span>
  );

  const identity = (
    <>
      <span className="relative">
        {photo}
        {article.linkedin ? (
          <span aria-hidden className="absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-[#0A66C2] ring-2 ring-white">
            <svg viewBox="0 0 24 24" className="size-2.5 fill-white" aria-hidden>
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4zM8.5 8.5h3.8v2.1h.05c.53-1 1.84-2.1 3.78-2.1 4.04 0 4.79 2.66 4.79 6.1V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24h-4z" />
            </svg>
          </span>
        ) : null}
      </span>
      <span>
        <span className="block text-sm font-medium text-[#111827] group-hover:underline">{article.author}</span>
        <span className="block text-xs text-[#6B7280]">{article.role}</span>
      </span>
    </>
  );

  return (
    <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E7EB] pb-7">
      {article.linkedin ? (
        <a href={article.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-full">
          {identity}
        </a>
      ) : (
        <div className="flex items-center gap-3">{identity}</div>
      )}
      <div className="space-y-0.5 text-xs text-[#6B7280] sm:text-right">
        <div>
          Published <time className="text-[#111827]">{article.published}</time>
        </div>
        {article.updated ? (
          <div>
            Updated <time className="text-[#111827]">{article.updated}</time>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function BlockView({ block, first }: { block: ArticleBlock; first?: boolean }) {
  if (block.type === "h2") {
    return (
      <h2 id={headingId(block.text)} className="mt-12 scroll-mt-28 text-[clamp(26px,3.2vw,32px)] font-light leading-[1.15] tracking-[-0.02em] text-[#111827]">
        {block.text}
      </h2>
    );
  }
  if (block.type === "h3") {
    return (
      <h3 id={headingId(block.text)} className="mt-8 scroll-mt-28 text-[22px] font-medium tracking-[-0.015em] text-[#111827]">
        {block.text}
      </h3>
    );
  }
  if (block.type === "p") {
    return (
      <p className={first ? "text-[19px] leading-[1.7] text-[#111827]" : "mt-5 text-[17px] leading-[1.75] text-[#1F2937]"}>
        <RichText text={block.text} />
      </p>
    );
  }
  if (block.type === "ul" || block.type === "ol") {
    const List = block.type === "ol" ? "ol" : "ul";
    return (
      <List className={`mt-5 max-w-[68ch] space-y-2 pl-5 text-[17px] leading-[1.75] text-[#1F2937] ${block.type === "ol" ? "list-decimal" : "list-disc"}`}>
        {block.items.map((item) => (
          <li key={item.slice(0, 48)}>
            <RichText text={item} />
          </li>
        ))}
      </List>
    );
  }
  if (block.type !== "table") return null;
  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-[#E5E7EB]">
      <table className="w-full border-separate border-spacing-0 text-sm tabular-nums">
        {block.headers.length ? (
          <thead className="bg-[#F9FAFB]">
            <tr>
              {block.headers.map((header) => (
                <th key={header} className="border-b border-[#E5E7EB] px-4 py-3 text-left text-[11px] font-medium uppercase tracking-[0.1em] text-[#111827]">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
        ) : null}
        <tbody>
          {block.rows.map((row) => (
            <tr key={row.join("|")} className="hover:bg-[#FAFAFA]">
              {row.map((cell, index) => (
                <td key={`${index}-${cell.slice(0, 24)}`} className="border-b border-[#F3F4F6] px-4 py-3 align-top text-[#374151] last:border-b-0">
                  <RichText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function legacyBlocks(article: Article): ArticleBlock[] {
  const blocks: ArticleBlock[] = [];
  if (article.lede) blocks.push({ type: "p", text: article.lede });
  for (const section of article.sections ?? []) {
    if (section.heading) blocks.push({ type: "h2", text: section.heading });
    for (const paragraph of section.body) blocks.push({ type: "p", text: paragraph });
  }
  return blocks;
}

export function ArticleLayout({ article }: { article: Article }) {
  const blocks = article.blocks?.length ? article.blocks : legacyBlocks(article);
  const headings = headingsOf(article);
  const related = relatedArticles(article.slug);
  const tags = article.tags ?? [];

  return (
    <article className="bg-white">
      <CoverHero article={article} />

      <div className="px-4 pb-24 pt-12 sm:px-6 sm:pt-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-x-10 lg:grid-cols-12 lg:gap-x-16">
          <aside className="lg:col-span-3 lg:order-2">
            <nav aria-label="On this page" className="sticky top-24 hidden self-start text-sm lg:block">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6B7280]">On this page</p>
              <ul className="space-y-2.5 border-l border-[#E5E7EB]">
                {headings.map((heading, index) => (
                  <li key={heading.text}>
                    <a
                      href={`#${headingId(heading.text)}`}
                      className={`block border-l-2 py-0.5 pl-4 -ml-px ${index === 0 ? "border-[#111827] font-medium text-[#111827]" : "border-transparent text-[#6B7280] hover:text-[#111827]"}`}
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="lg:col-span-9 lg:order-1">
            <AuthorRow article={article} />
            <div className="max-w-[68ch]">
              {blocks.map((block, index) => (
                <BlockView key={`${block.type}-${index}`} block={block} first={index === 0 && block.type === "p"} />
              ))}
            </div>
            {tags.length ? (
              <div className="mt-14 flex flex-wrap gap-2 border-t border-[#E5E7EB] pt-8">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-[#E5E7EB] px-3 py-1 text-[11px] uppercase tracking-[0.1em] text-[#6B7280]">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {related.length ? (
        <div className="px-4 pb-16 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-[#6B7280]">KEEP READING</p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {related.map((item) => {
                const cover = coverFor(item.slug);
                return (
                  <Link key={item.slug} href={`/blog/${item.slug}`} className="overflow-hidden rounded-[24px] border border-[#E5E7EB] hover:border-[#111827]">
                    <div className="h-28" style={{ background: `linear-gradient(135deg, ${cover.gradient})` }} />
                    <div className="p-5">
                      <p className="text-[11px] text-[#6B7280]">{topicFor(item.slug, item.category)}</p>
                      <p className="mt-2 text-[15px] font-semibold leading-snug">{item.title}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}

      <ScaleCta
        body="Launch your first campaign in minutes. Top up your wallet and pay per post, with tracked clicks on every one."
        note="Free to start. No credit card required."
      />
    </article>
  );
}

export function articleExists(slug: string) {
  return Boolean(getArticle(slug));
}
