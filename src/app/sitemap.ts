import type { MetadataRoute } from "next";
import { getAllNews, sections } from "@/lib/news";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllNews();
  const latest = posts[0]?.date;

  return [
    { url: siteUrl, lastModified: latest, changeFrequency: "daily", priority: 1 },
    {
      url: `${siteUrl}/blog`,
      lastModified: latest,
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...sections.map((section) => ({
      url: `${siteUrl}/category/${section.slug}`,
      lastModified: latest,
      changeFrequency: "weekly" as const,
      // The education section carries the Alva's coverage, so rank it highest.
      priority: section.slug === "education" ? 0.9 : 0.7,
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "monthly" as const,
      priority: post.slug.startsWith("alvas-") ? 0.8 : 0.6,
    })),
    { url: `${siteUrl}/gallery`, changeFrequency: "monthly", priority: 0.4 },
  ];
}
