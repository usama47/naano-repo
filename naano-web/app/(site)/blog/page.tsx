import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { ScaleCta } from "@/components/marketing/scale-cta";
import {
  BLOG_TOPICS,
  FEATURED_BLOG_SLUG,
  coverFor,
  formatBlogDate,
  initials,
  orderedBlogArticles,
  topicFor,
} from "@/lib/content/blog-index";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog | Naano",
  description:
    "Field notes from the team building Naano: on LinkedIn distribution, CPL economics, and how B2B brands grow through creators.",
};

function Cover({
  slug,
  featured,
  category,
}: {
  slug: string;
  featured?: boolean;
  category: string;
}) {
  const { gradient } = coverFor(slug);
  return (
    <div
      className={cn(
        "relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.01]",
        featured ? "aspect-[16/10] rounded-2xl sm:aspect-[16/9]" : "mb-5 aspect-[16/10] rounded-xl group-hover:scale-[1.015]",
      )}
      style={{ background: `linear-gradient(135deg, ${gradient})` }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: featured ? "28px 28px" : "22px 22px",
        }}
      />
      {featured ? (
        <>
          <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent" />
          <span className="absolute top-6 left-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:top-8 sm:left-8">
            {category}
          </span>
        </>
      ) : null}
    </div>
  );
}

function MetaRow({
  author,
  minutes,
  published,
  withAvatar,
}: {
  author: string;
  minutes: number;
  published: string;
  withAvatar?: boolean;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3 text-xs text-[#6B7280]", withAvatar && "gap-4")}>
      {withAvatar ? (
        <span className="flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded-full bg-[#F3F4F6] text-[10px] font-medium text-[#4B5563]">
            {initials(author)}
          </span>
          {author}
        </span>
      ) : (
        <span>{author}</span>
      )}
      <span aria-hidden className="size-1 rounded-full bg-[#D1D5DB]" />
      <span className="inline-flex items-center gap-1.5">
        <Clock className="size-3" />
        {minutes} min read
      </span>
      <span aria-hidden className="size-1 rounded-full bg-[#D1D5DB]" />
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="size-3" />
        <time>{formatBlogDate(published)}</time>
      </span>
    </div>
  );
}

export default function BlogIndexPage() {
  const posts = orderedBlogArticles();
  const featured = posts.find((post) => post.slug === FEATURED_BLOG_SLUG) ?? posts[0];
  const rest = posts.filter((post) => post.slug !== featured?.slug);

  return (
    <div className="bg-white">
      <section className="border-b border-[#F3F4F6] px-4 pb-14 pt-20 sm:px-6 sm:pb-20 sm:pt-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B7280]">
            <span>Naano Journal</span>
            <span aria-hidden className="size-1 rounded-full bg-[#D1D5DB]" />
            <span className="font-normal">{posts.length} articles</span>
          </div>
          <h1 className="mb-6 max-w-[18ch] text-[clamp(36px,5.4vw,68px)] font-light leading-[1.02] tracking-[-0.025em] text-[#111827]">
            Notes on creator-led growth.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-[#4B5563] sm:text-lg">
            Field notes from the team building Naano: on LinkedIn distribution, CPL economics, and how B2B brands grow through
            creators.
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            <span className="mr-3 self-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]">Topics</span>
            {BLOG_TOPICS.map((topic) => (
              <span key={topic} className="rounded-full border border-[#E5E7EB] px-3 py-1 text-[12px] text-[#4B5563]">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {featured ? (
        <section className="px-4 pb-12 pt-12 sm:px-6 sm:pt-16">
          <div className="mx-auto max-w-[1200px]">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6B7280]">Latest</p>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid items-center gap-8 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111827] focus-visible:ring-offset-4 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-7">
                <Cover slug={featured.slug} featured category={topicFor(featured.slug, featured.category)} />
              </div>
              <div className="lg:col-span-5">
                <h2 className="mb-5 text-[clamp(26px,3.6vw,42px)] font-light leading-[1.08] tracking-[-0.02em] text-[#111827] underline-offset-4 decoration-[#111827]/20 group-hover:underline">
                  {featured.title}
                </h2>
                <p className="mb-7 max-w-prose text-base leading-relaxed text-[#4B5563]">{featured.lede}</p>
                <div className="mb-7">
                  <MetaRow
                    author={featured.author}
                    minutes={featured.minutes}
                    published={featured.published}
                    withAvatar
                  />
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#111827] transition-all duration-200 group-hover:gap-2.5">
                  Read article <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      ) : null}

      <section className="px-4 pb-24 pt-8 sm:px-6">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8 flex items-baseline justify-between border-b border-[#F3F4F6] pb-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6B7280]">More articles</p>
            <span className="text-xs text-[#9CA3AF]">{rest.length}</span>
          </div>
          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111827] focus-visible:ring-offset-4"
                >
                  <Cover slug={post.slug} category={topicFor(post.slug, post.category)} />
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6B7280]">
                    {topicFor(post.slug, post.category)}
                  </p>
                  <h3 className="mb-3 text-[20px] font-medium leading-[1.25] tracking-[-0.01em] text-[#111827] underline-offset-4 decoration-[#111827]/20 group-hover:underline sm:text-[22px]">
                    {post.title}
                  </h3>
                  <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-[#4B5563]">{post.lede}</p>
                  <MetaRow author={post.author} minutes={post.minutes} published={post.published} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ScaleCta
        body="Launch your first campaign in minutes. Top up your wallet and pay per post, with tracked clicks on every one."
        note="Free to start. No credit card required."
      />
    </div>
  );
}
