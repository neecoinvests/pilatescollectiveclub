import type { Metadata } from "next";
import Script from "next/script";
import { Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { jsonLdHtml } from "@/lib/schema";
import RailProgress from "@/components/rail/RailProgress";

// One variable family for the whole site: weight and width axes.
const rail = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-rail",
});

// Runs before first paint. Marks the page as script-enabled so the "starts
// hidden" animation states apply; without it everything renders visible.
// If the page never hydrates, reveal everything after a few seconds.
const JS_FLAG = `document.documentElement.classList.add("js");setTimeout(function(){var d=document.documentElement;if(!d.dataset.railReady)d.classList.add("rv-all")},4000);`;

const BASE_URL = "https://pilatescollectiveclub.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Pilates Collective Club: Find Your Perfect Studio",
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
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Pilates Collective Club: Find Your Perfect Studio",
    description:
      "Curated city guides, expert studio recommendations, and equipment picks for Pilates practitioners worldwide.",
    siteName: "Pilates Collective Club",
    type: "website",
    url: BASE_URL,
    images: [{ url: "/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg", width: 1200, height: 630, alt: "Pilates Collective Club: Find Your Perfect Studio" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Collective Club: Find Your Perfect Studio",
    description: "Curated city guides, expert studio recommendations, and equipment picks for Pilates practitioners worldwide.",
    images: ["/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg"],
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
    <html lang="en" className={`h-full ${rail.variable}`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased">
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
        <RailProgress />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-5H5C236ZVF" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5H5C236ZVF');
        `}</Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(orgSchema) }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
