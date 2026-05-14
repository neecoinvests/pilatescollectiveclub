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
    "best-home-pilates-reformer",
    "best-pilates-grip-socks",
    "best-pilates-books",
    "best-pilates-ball",
    "what-to-wear-to-pilates",
    "best-pilates-leggings",
    "pilates-reformer-vs-mat",
    "best-pilates-resistance-bands",
    "best-pilates-starter-kit",
    "best-pilates-reformer-accessories",
    "best-pilates-mat",
    "best-pilates-foam-roller",
    "best-pilates-ring",
    "best-pilates-reformer-brands",
    "best-pilates-workout-tops",
    "pilates-for-runners",
    "pilates-for-scoliosis",
    "pilates-for-menopause",
    "pilates-history",
    "how-to-find-a-good-pilates-studio",
    "alo-yoga-pilates",
    "lululemon-pilates",
    "club-pilates-review",
    "balanced-body-vs-merrithew",
    "varley-pilates-activewear",
  ];

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
