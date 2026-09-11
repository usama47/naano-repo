import type { MetadataRoute } from "next";
import { posts } from "@/lib/content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/creators",
    "/agencies",
    "/blog",
    "/free-tools",
    "/pricing",
    "/about",
    "/book",
    "/help",
    "/privacy",
    "/terms",
    "/reports",
    "/benchmarks/q2-2026",
    "/selection",
    "/case-studies/blogseo",
    "/linkedin-creator-marketplace",
    "/best-b2b-influencer-marketing-platforms-2026",
    "/agency",
    "/talent-agency",
  ];
  const verticals = ["sales-tech", "revops", "devtools", "product", "hr-tech", "fintech", "marketing-ops", "vertical-saas"];
  const tools = [
    "/free-tools/linkedin-creator-worth-calculator",
    "/free-tools/linkedin-engagement-rate-calculator",
    "/free-tools/sponsored-post-delivery-odds-estimator",
    "/free-tools/creator-campaign-budget-planner",
  ];
  const urls = [
    ...staticPaths,
    ...tools,
    ...verticals.map((v) => `/for/${v}`),
    ...posts.map((p) => `/blog/${p.slug}`),
  ];
  return urls.map((path) => ({ url: `https://naano.com${path}`, changeFrequency: "weekly" as const }));
}
