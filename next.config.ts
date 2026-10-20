import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
  // Christmas guides renamed to include "christmas" in the URL (October 2026).
  async redirects() {
    return [
      ["pilates-stocking-stuffers", "pilates-christmas-stocking-stuffers"],
      ["pilates-secret-santa-gifts", "pilates-secret-santa-christmas-gifts"],
      ["best-pilates-gifts-for-her", "best-pilates-christmas-gifts-for-her"],
      ["best-reformer-pilates-gifts", "reformer-pilates-christmas-gifts"],
      ["luxury-recovery-gifts-for-pilates", "luxury-recovery-christmas-gifts-for-pilates"],
      ["fitness-tech-gifts-for-pilates-lovers", "fitness-tech-christmas-gifts-for-pilates-lovers"],
      ["luxury-fitness-gifts-for-him", "luxury-fitness-christmas-gifts-for-him"],
    ].map(([from, to]) => ({ source: `/blog/${from}`, destination: `/blog/${to}`, permanent: true }))
      // Core Collab partner previews went live on the real articles (October 2026).
      .concat(
        ["best-pilates-reformer-brands", "best-megaformer-machine"].map((slug) => ({
          source: `/partner-preview/the-core-collab/${slug}`,
          destination: `/blog/${slug}`,
          permanent: true,
        })),
      );
  },
};

export default nextConfig;
