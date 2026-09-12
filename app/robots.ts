import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard/", "/login/", "/register/", "/api/"],
    },
    sitemap: "https://naano-replica.vercel.app/sitemap.xml",
  };
}
