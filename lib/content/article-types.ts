export type ArticleSection = {
  heading?: string;
  body: string[];
};

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export type Article = {
  slug: string;
  title: string;
  lede: string;
  category: string;
  author: string;
  role: string;
  published: string;
  updated?: string | null;
  minutes: number;
  linkedin?: string | null;
  avatar?: string | null;
  tags?: string[];
  blocks?: ArticleBlock[];
  sections?: { heading?: string; body: string[] }[];
};

export const articleMeta: Record<string, Pick<Article, "category" | "author" | "role" | "published" | "minutes">> = {
  "b2b-influencer-marketing-cost": { category: "CPL economics", author: "Thomas Marcelle", role: "CEO & Co-founder", published: "22 June 2026", minutes: 9 },
  "launch-b2b-linkedin-creator-campaign": { category: "Playbooks", author: "Alexis Jarre", role: "CMO & Co-founder", published: "30 May 2026", minutes: 10 },
  "naano-vs-alternatives": { category: "Comparisons", author: "Alexis Jarre", role: "CMO & Co-founder", published: "27 April 2026", minutes: 12 },
};

export function metaFor(slug: string, title: string) {
  return (
    articleMeta[slug] ?? {
      category: title.toLowerCase().includes("vs") ? "Comparisons" : "Field notes",
      author: "Naano team",
      role: "Editorial",
      published: "2026",
      minutes: 7,
    }
  );
}
