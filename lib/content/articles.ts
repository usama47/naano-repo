import liveArticles from "./articles-live.json";
import type { Article } from "./article-types";

export type { Article, ArticleBlock, ArticleSection } from "./article-types";

export const articles: Record<string, Article> = liveArticles as Record<string, Article>;

export function getArticle(slug: string) {
  return articles[slug];
}

function publishedStamp(value: string) {
  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function allArticles() {
  return Object.values(articles).sort((a, b) => publishedStamp(b.published) - publishedStamp(a.published));
}

export function relatedArticles(slug: string, count = 3) {
  return allArticles()
    .filter((article) => article.slug !== slug)
    .slice(0, count);
}

const palettes = [
  "from-[#0f3d66] via-[#1d6ea8] to-[#5ee0c5]",
  "from-[#12355c] via-[#2f6bff] to-[#7ad0ff]",
  "from-[#0b2a4a] via-[#165d8a] to-[#3ecf8e]",
  "from-[#14213d] via-[#1d4ed8] to-[#60a5fa]",
  "from-[#0c4a6e] via-[#0369a1] to-[#67e8f9]",
  "from-[#1e3a5f] via-[#2563eb] to-[#34d399]",
  "from-[#0f172a] via-[#1e40af] to-[#38bdf8]",
  "from-[#164e63] via-[#0e7490] to-[#5eead4]",
];

export function gradientFor(slug: string) {
  let hash = 0;
  for (const char of slug) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return palettes[hash % palettes.length];
}
