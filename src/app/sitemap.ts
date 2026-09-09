import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

const BASE_URL = "https://pilatescollectiveclub.com";

// Derived from the route folders rather than a hand-kept list, which had drifted
// 13 pages behind the app directory.
function routeSlugs(segment: string): string[] {
  const dir = path.join(process.cwd(), "src", "app", segment);

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        fs.existsSync(path.join(dir, entry.name, "page.tsx")),
    )
    .map((entry) => entry.name)
    .sort();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/brands`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/cities`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/affiliate-disclosure`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  return [
    ...staticRoutes,
    ...routeSlugs("cities").map((slug) => ({
      url: `${BASE_URL}/cities/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...routeSlugs("blog").map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
