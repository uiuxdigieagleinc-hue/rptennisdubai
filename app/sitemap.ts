import type { MetadataRoute } from "next";
import { categories, posts } from "@/content/posts";
import { SITE_URL } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  });

  return [
    page("/", 1),
    page("/about-us/", 0.8),
    page("/grounds/", 0.8),
    page("/programs/", 0.9),
    page("/robin-hood-camp/", 0.7),
    page("/gallery/", 0.6),
    page("/reviews/", 0.6),
    page("/blog/", 0.6),
    page("/contact-us/", 0.8),
    ...posts.map((p) => ({
      url: `${SITE_URL}/${p.slug}/`,
      lastModified: new Date(p.modified),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    ...categories.map((c) => page(`/category/${c.slug}/`, 0.3)),
  ];
}
