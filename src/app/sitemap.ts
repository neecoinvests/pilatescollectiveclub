import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { CATEGORIES } from "@/lib/posts";

const BASE_URL = "https://pilatescollectiveclub.com";

function getDirectories(dir: string): string[] {
  try {
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const appDir = path.join(process.cwd(), "src/app");

  const cities = getDirectories(path.join(appDir, "cities")).filter(
    (d) => !d.startsWith("(") && d !== "page.tsx"
  );

  const blogPosts = getDirectories(path.join(appDir, "blog")).filter(
    (d) => !d.startsWith("(") && d !== "category"
  );

  const categories = CATEGORIES.filter((c) => c !== "All").map((c) =>
    c.toLowerCase().replace(/\s+/g, "-")
  );

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/brands`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/cities`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...categories.map((cat) => ({
      url: `${BASE_URL}/blog/category/${cat}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
    ...cities.map((city) => ({
      url: `${BASE_URL}/cities/${city}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...blogPosts.map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/affiliate-disclosure`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}
