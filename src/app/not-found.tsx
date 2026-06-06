import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist. Find Pilates studio guides, equipment reviews, and practice advice at Pilates Collective Club.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#fcf9f8", padding: "80px 40px" }}>
        <div style={{ maxWidth: "560px", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#9a9490", marginBottom: "24px" }}>
            404
          </p>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 300, color: "#0a0a0a", lineHeight: 1.15, marginBottom: "24px" }}>
            Page not found
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 300, color: "#6b6560", lineHeight: 1.75, marginBottom: "48px" }}>
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Try our journal, studio guides, or equipment reviews instead.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "14px 28px", display: "inline-block" }}>
              Home
            </Link>
            <Link href="/blog" style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#0a0a0a", textDecoration: "none", border: "1px solid #0a0a0a", padding: "14px 28px", display: "inline-block" }}>
              Browse Journal
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
