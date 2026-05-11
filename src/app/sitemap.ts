import type { MetadataRoute } from "next";

const BASE_URL = "https://pilatescollectiveclub.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const cities = [
    "new-york",
    "london",
    "paris",
    "zurich",
    "los-angeles",
    "barcelona",
    "berlin",
    "amsterdam",
    "geneva",
    "lausanne",
  ];

  const blogPosts = [
    "beginners-guide-to-reformer-pilates",
    "how-to-choose-a-pilates-instructor",
    "classical-vs-contemporary-pilates",
    "best-pilates-equipment-for-home-practice",
    "pilates-vs-yoga",
    "pilates-for-athletes",
    "pilates-for-back-pain",
    "pilates-and-pregnancy",
    "best-pilates-retreats-europe",
    "how-to-build-a-consistent-pilates-practice",
    "6-core-principles-of-pilates-explained",
  ];

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
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
  ];
}
