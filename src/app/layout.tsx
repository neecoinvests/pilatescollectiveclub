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
    "Curated city guides, expert studio recommendations, and equipment picks for Pilates practitioners worldwide. Discover the best reformer classes, mat studios, and home equipment.",
  keywords: [
    "pilates studios",
    "best pilates studios",
    "reformer pilates",
    "pilates classes near me",
    "pilates equipment",
    "pilates for beginners",
    "classical pilates",
    "contemporary pilates",
    "pilates instructor",
    "pilates mat workout",
    "home pilates reformer",
    "pilates london",
    "pilates new york",
    "pilates paris",
    "pilates zurich",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: "Pilates Collective Club — Find Your Perfect Studio",
    description:
      "Curated city guides, expert studio recommendations, and equipment picks for Pilates practitioners worldwide.",
    siteName: "Pilates Collective Club",
    type: "website",
    url: BASE_URL,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Pilates Collective Club — Find Your Perfect Studio" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Collective Club — Find Your Perfect Studio",
    description: "Curated city guides, expert studio recommendations, and equipment picks for Pilates practitioners worldwide.",
    images: ["/og-image.jpg"],
    site: "@pilatescollective",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "Pilates Collective Club",
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/pictures/pcc-logo.png`,
        "width": 859,
        "height": 286,
      },
      "description": "Curated city guides, expert studio recommendations, and equipment picks for Pilates practitioners worldwide.",
      "sameAs": [
        "https://www.instagram.com/pilatescollectiveclub",
        "https://www.pinterest.com/pilatescollectiveclub",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": BASE_URL,
      "name": "Pilates Collective Club",
      "publisher": { "@id": `${BASE_URL}/#organization` },
      "potentialAction": {
        "@type": "SearchAction",
        "target": { "@type": "EntryPoint", "urlTemplate": `${BASE_URL}/blog?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        {children}
      </body>
    </html>
  );
}
