import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Online Pilates Classes (2026): Platforms Compared & Reviewed",
  description: "The best online Pilates class platforms of 2026 — Pilates Anytime, Alo Moves, Move With Nicole, and others compared on content depth, instructor quality, and price.",
  openGraph: {
    title: "Best Online Pilates Classes (2026): Platforms Compared",
    description: "Pilates Anytime, Alo Moves, and more — the platforms worth a subscription for home and travel practice.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-online-pilates-classes",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg", width: 1200, height: 630, alt: "Best Online Pilates Classes — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Online Pilates Classes (2026)",
    description: "The best Pilates streaming platforms compared — Pilates Anytime, Alo Moves, Classical Pilates Online and more.",
    images: ["https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg"],
  },
  keywords: ["best online pilates classes", "best pilates streaming 2026", "online pilates platform review", "pilates anytime review", "alo moves pilates", "move with nicole pilates", "online reformer pilates classes", "best pilates youtube channel", "pilates online subscription"],
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/best-online-pilates-classes",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Pilates Anytime",
    price: "From $22/month",
    verdict: "Best for serious classical practitioners",
    tag: "Editor's Pick",
    description:
      "Pilates Anytime is the Netflix of Pilates — thousands of videos covering classical, contemporary, GYROTONIC, and functional movement. The instructor quality is exceptional; you'll find direct lineage teachers, master instructors, and rising stars. The reformer library is the largest available online, covering the full classical and contemporary repertoire. For practitioners who want to supplement studio work with structured home practice, this is the definitive subscription. Not an Amazon product — this links directly to the platform's own site.",
    affiliateUrl: "https://www.pilatesanytime.com/",
  },
  {
    rank: "02",
    name: "Alo Moves (ALO Wellness Club)",
    price: "From $20/month",
    verdict: "Best for Pilates + yoga combination",
    tag: "Lifestyle Pick",
    description:
      "Alo Moves — now operating as the ALO Wellness Club — is the practice companion to the brand's apparel — high production quality, excellent Pilates instructors including some of the most-followed practitioners on social media, and a broad library covering mat Pilates, yoga, barre, and meditation. The app experience is smooth, the guided programs are well-structured, and the emphasis on contemporary pilates aligns with the boutique studio aesthetic. If you're equally committed to yoga and Pilates, this is the most coherent single subscription. Not an Amazon product — this links directly to the platform's own site.",
    affiliateUrl: "https://wellnessclub.aloyoga.com/",
  },
  {
    rank: "03",
    name: "Pilatesology",
    price: "From $22/month",
    verdict: "Best for classical method purists",
    tag: "Classical Pick",
    description:
      "Pilatesology is purpose-built for the lineage practitioner — billed as the most trusted source for classical Pilates online, with the full classical order taught by instructors trained in the New York classical tradition. If you trained under Romana Kryzanowska, Jay Grimes, or their students, this is the streaming library that will make sense to you. The production quality is functional rather than cinematic, and the library is smaller than Pilates Anytime, but the depth and orthodoxy of teaching is unmatched. Not an Amazon product — this links directly to the platform's own site.",
    affiliateUrl: "https://pilatesology.com/",
  },
  {
    rank: "04",
    name: "obé Fitness",
    price: "From $24.99/month",
    verdict: "Best for variety seekers",
    tag: "Variety Pick",
    description:
      "obé Fitness offers live and on-demand Pilates alongside HIIT, dance, yoga, and strength training. The Pilates content skews contemporary and accessible — good for beginners and intermediate practitioners who want Pilates as part of a broader movement diet. The live class schedule and community aspect are the platform's distinguishing features. Less suitable for serious Pilates purists, excellent for practitioners who want flexibility across modalities. Not an Amazon product — this links directly to the platform's own site.",
    affiliateUrl: "https://obefitness.com/",
  },
  {
    rank: "05",
    name: "Boho Beautiful",
    price: "Free / paid tiers available",
    verdict: "Best free option",
    tag: "Best Value",
    description:
      "Boho Beautiful is the most popular free Pilates content creator on YouTube, now also offering structured paid programs. The mat Pilates series are genuinely excellent — flows are well-constructed, instruction is clear, and the production quality is cinematic. Not a replacement for a comprehensive studio subscription, but for practitioners in a budget phase or those new to home practice, the free YouTube library alone covers months of effective mat work. Not an Amazon product — this links directly to the platform's own site.",
    affiliateUrl: "https://bohobeautiful.life/",
  },
];

const FAQS = [
  {
    q: "Can online Pilates classes replace studio classes?",
    a: "For mat Pilates, online classes are a genuine and effective alternative or supplement to studio work. For reformer Pilates, you still need access to a machine — online reformer classes work only if you own a reformer at home. Serious practitioners typically use online platforms as a supplement to regular studio attendance, not a replacement.",
  },
  {
    q: "What is the best free online Pilates resource?",
    a: "YouTube remains the best free Pilates resource. Boho Beautiful, MoveWithNicole, and Heather Robertson offer well-structured mat Pilates series at no cost. Pilates Anytime offers a free trial (currently around 15 days), which provides genuine access to their full library before committing to a subscription.",
  },
  {
    q: "Is Pilates Anytime worth the monthly fee?",
    a: "For practitioners who train regularly and want to supplement studio work with home practice, yes. The library depth, instructor quality, and reformer repertoire coverage justify $22/month. For beginners or casual practitioners, starting with YouTube and a free trial is the more sensible approach.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://pilatescollectiveclub.com/blog/best-online-pilates-classes/#article",
      "headline": "Best Online Pilates Classes (2026): Subscription Platforms Compared",
      "description": "The best online Pilates class platforms for home practice — rated for repertoire depth, instructor quality, and price.",
      "image": {
        "@type": "ImageObject",
        "url": "https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg",
        "width": 1200,
        "height": 630,
      },
      "author": {
        "@type": "Organization",
        "@id": "https://pilatescollectiveclub.com/#organization",
        "name": "Pilates Collective Club",
        "url": "https://pilatescollectiveclub.com",
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://pilatescollectiveclub.com/#organization",
        "name": "Pilates Collective Club",
        "logo": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/pcc-logo.png" },
      },
      "datePublished": "2026-05-01",
      "dateModified": "2026-05-17",
      "url": "https://pilatescollectiveclub.com/blog/best-online-pilates-classes",
      "mainEntityOfPage": "https://pilatescollectiveclub.com/blog/best-online-pilates-classes",
      "articleSection": "Brand Guide",
      "inLanguage": "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Online Pilates Classes", "item": "https://pilatescollectiveclub.com/blog/best-online-pilates-classes" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
    {
      "@type": "ItemList",
      "name": "Best Online Pilates Class Platforms (2026)",
      "numberOfItems": PRODUCTS.length,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": p.price.replace(/[^0-9.]/g, "") || "0",
            "availability": "https://schema.org/InStock",
            "url": p.affiliateUrl,
          },
        },
      })),
    },
  ],
};

export default function BestOnlinePilatesClassesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>

        {/* Hero section */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Brand Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Online Platforms</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Online Pilates Classes<br /><span style={{ color: "#8b4a31" }}>(2026): Platforms Compared</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 9 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*These platforms are not sold through Amazon — links go directly to each service&apos;s own site, not to an affiliate program.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The home Pilates streaming market matured significantly between 2020 and 2026. There are now genuinely excellent platforms for every type of practitioner — from the classical lineage purist to the boutique studio devotee who wants their practice to look as good as it feels. This guide compares the five platforms we&apos;ve tested most thoroughly, with honest assessments of what each does well and who it&apos;s actually for.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg" alt="Online Pilates classes for home practice" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to look for in a Pilates streaming platform</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "Library depth", body: "The best platforms have hundreds of hours of content at every level. A library of fewer than 500 videos will feel limited within a few months of regular use." },
                  { heading: "Instructor credentials", body: "Look for platforms featuring certified instructors from recognised training programmes — BASI, Balanced Body, STOTT, Pilates Method Alliance, or direct classical lineage." },
                  { heading: "Reformer content", body: "If you own a home reformer, check whether the platform has reformer-specific classes. Many platforms are mat-only or have limited reformer libraries." },
                  { heading: "App quality", body: "The platform needs to work reliably on your TV, tablet, and phone. Poor streaming quality, buggy apps, or difficult download systems significantly affect the practice experience." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick reference table */}
            <div className="mb-10 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Quick Picks — At a Glance</p>
              </div>
              {PRODUCTS.map((p, i) => (
                <div key={p.name} className="flex items-center gap-3 sm:gap-4 px-6 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" }}>
                  <span className="text-base font-semibold w-7 shrink-0 text-center" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold leading-tight" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{p.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{p.verdict}</p>
                  </div>
                  <span className="text-xs font-semibold hidden md:block shrink-0 mr-3" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{p.price}</span>
                  <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer"
                    style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                  >Learn More →</a>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Platforms · Compared Honestly</p>
              <div className="space-y-10">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
                    </div>
                    <ProductCard
                      name={p.name}
                      description={p.description}
                      price={p.price}
                      affiliateUrl={p.affiliateUrl}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {FAQS.map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Further reading */}
            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Home Pilates Reformer (2026)" excerpt="The machines worth buying for serious home practice — from budget to professional." href="/blog/best-home-pilates-reformer" category="Equipment" readTime="11 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" />
                <ArticleCard title="10 Pilates Exercises for Beginners" excerpt="The foundational exercises to master before progressing — with technique and mistakes." href="/blog/pilates-exercises-for-beginners" category="Beginners" readTime="11 min read" date="May 2026" imageUrl="/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg" />
                <ArticleCard title="How Often Should You Do Pilates?" excerpt="Research-backed frequency recommendations for beginners, regulars, and advanced practitioners." href="/blog/how-often-should-you-do-pilates" category="Guide" readTime="7 min read" date="June 2026" imageUrl="/pictures/stitch-studio-modern-row.png" />
              </div>
            </div>

          </div>
        </section>

        <CTASection title="Find a studio to complement your home practice" subtitle="Our city guides cover the best Pilates studios worldwide." />

      </main>
      <Footer />
    </>
  );
}
