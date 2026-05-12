import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://pilatescollectiveclub.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Pilates Collective Club — Find Your Perfect Studio",
    template: "%s | Pilates Collective Club",
  },
  description:
    "Curated city guides, expert studio recommendations, and AI-powered search for Pilates lovers worldwide. Discover the best reformer classes, mat studios, and home equipment.",
  keywords: ["pilates", "pilates studios", "reformer pilates", "pilates classes", "pilates equipment", "best pilates studios"],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Pilates Collective Club — Find Your Perfect Studio",
    description:
      "Curated city guides, expert studio recommendations, and AI-powered search for Pilates lovers worldwide.",
    siteName: "Pilates Collective Club",
    type: "website",
    url: BASE_URL,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Collective Club — Find Your Perfect Studio",
    description: "Curated city guides, expert studio recommendations, and AI-powered search for Pilates lovers worldwide.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
