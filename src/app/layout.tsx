import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pilates Collective Club — Find Your Perfect Studio",
  description:
    "Curated city guides, expert studio recommendations, and AI-powered search for Pilates lovers worldwide. Discover the best reformer classes, mat studios, and home equipment.",
  keywords: ["pilates", "pilates studios", "reformer pilates", "pilates classes", "pilates equipment"],
  openGraph: {
    title: "Pilates Collective Club",
    description: "Find your perfect Pilates studio, class, or retreat.",
    siteName: "Pilates Collective Club",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
