import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/marketing/article-layout";
import { allArticles, getArticle } from "@/lib/content/articles";
import { posts } from "@/lib/content/posts";

export function generateStaticParams() {
  const slugs = new Set([...posts.map((post) => post.slug), ...allArticles().map((article) => article.slug)]);
  return [...slugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  const post = posts.find((item) => item.slug === slug);
  const title = article?.title ?? post?.title;
  if (!title) return {};
  return { title: `${title} | Naano`, description: article?.lede ?? post?.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <ArticleLayout article={article} />;
}
