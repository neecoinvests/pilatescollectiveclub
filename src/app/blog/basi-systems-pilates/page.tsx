import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "BASI Systems Pilates Review (2026): Equipment & Method | Pilates Collective Club",
  description: "BASI Systems pilates equipment and method reviewed — reformer quality, certification programme, and how BASI compares to Balanced Body and Merrithew.",
  keywords: ["basi pilates review", "basi systems pilates reformer", "basi pilates equipment", "basi vs balanced body", "basi pilates certification", "best pilates reformer basi", "basi pilates 2026"],
  openGraph: {
    title: "BASI Systems Pilates (2026): Equipment Review & Brand Guide",
    description: "BASI Systems reviewed — the luxury reformer by Rael Isacowitz with the longest carriage in the industry.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/basi-systems-pilates",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/ahmet-kurt-0xn-8kRWOhE-unsplash.jpg", width: 1200, height: 630, alt: "BASI Systems Pilates equipment review — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BASI Systems Pilates (2026): Equipment Review",
    description: "BASI Systems — the luxury reformer by Rael Isacowitz reviewed.",
    images: ["https://pilatescollectiveclub.com/pictures/ahmet-kurt-0xn-8kRWOhE-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/basi-systems-pilates" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "BASI Systems Reformer",
    price: "From $4,800",
    verdict: "The flagship — longest carriage in the industry",
    description:
      "The BASI Systems Reformer is one of the most engineered pieces of Pilates apparatus available, designed in direct collaboration with Rael Isacowitz — the founder of BASI Pilates and one of the most influential figures in contemporary Pilates education globally. The defining specification is carriage travel: the BASI reformer offers the longest carriage excursion in the production reformer market, which is why the machine has become a reference choice for working with professional athletes, dancers, and practitioners over 6'2\". The frame is constructed from solid beechwood and aerospace-grade aluminium — a combination that provides structural rigidity comparable to steel while maintaining the warmth and resonance of wood. The carriage glides on custom-milled bearings that give it a distinctive, weighted feel that experienced practitioners describe as having more presence and resistance character than lighter-framed competitors. The five-spring system uses BASI's colour-coded calibration. A genuine investment piece for serious studios.",
    affiliateUrl: "https://basisystems.com/product-category/reformers/",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "BASI Systems Reformer with F2 Tower",
    price: "From $6,200",
    verdict: "Best complete BASI apparatus",
    description:
      "The BASI Systems Reformer with the F2 modular tower is the complete BASI apparatus — the reformer platform combined with the F2's push-through bar, arm spring system, leg springs, and roll-down bar. The F2 System is engineered as a modular attachment rather than a fixed addition, which means the tower can be reconfigured or removed as the studio's needs change. This modularity extends to the multi-angle pulley system that is unique to the BASI F2 — a mechanism that changes the line of pull for arm and leg spring exercises, expanding the functional repertoire beyond what fixed-tower attachments offer. For instructors who teach the BASI method curriculum, the F2 tower is the intended apparatus that exercises are sequenced around. At $6,200+, this is a professional-grade investment appropriate for dedicated studios and very serious home practitioners.",
    affiliateUrl: "https://basisystems.com/product-category/reformers/",
    tag: "Complete Apparatus",
  },
  {
    rank: "03",
    name: "BASI Systems Arc",
    price: "From $380",
    verdict: "Best BASI small apparatus",
    description:
      "The BASI Systems Arc is the brand's Pilates Arc — a small apparatus that provides thoracic extension support, hip flexor stretching, and abdominal strengthening that mat work cannot replicate. What distinguishes the BASI Arc from competing arcs (Balanced Body Arc, Merrithew Arc) is the density and curvature calibration: Rael Isacowitz designed the curve geometry specifically for the spinal articulation exercises in the BASI curriculum. The construction is denser and more stable than budget arcs, maintaining its shape and resistance through years of regular use. For BASI-trained practitioners and instructors who want the apparatus that the curriculum was designed around, this is the appropriate choice. For general practitioners, Balanced Body's Arc is a practical and significantly cheaper alternative.",
    affiliateUrl: "https://basisystems.com/product-category/arc/",
    tag: "Best Small Apparatus",
  },
  {
    rank: "04",
    name: "BASI Systems Stability Chair",
    price: "From $2,400",
    verdict: "Best BASI chair for advanced work",
    description:
      "The BASI Systems Stability Chair is the brand's take on the Wunda Chair — a split-pedal design with a four-spring configuration that covers the complete BASI chair curriculum. The construction standards match the reformer line: beechwood and aluminium frame, dense upholstery, and the precision spring calibration that defines BASI's approach. The Stability Chair is particularly favoured by instructors who work with clinical populations and professional athletes, where the precise resistance control of the BASI spring system matters more than it does in general fitness contexts. The pedal geometry and spring attachment points are designed around the biomechanical principles that Rael Isacowitz codified in the BASI curriculum.",
    affiliateUrl: "https://basisystems.com/product-category/chairs/",
    tag: "Best Chair",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "BASI Systems Pilates (2026): Equipment Review & Brand Guide",
      "description": "BASI Systems Pilates equipment reviewed — the reformer, F2 tower, Arc, and Stability Chair designed by Rael Isacowitz.",
      "url": "https://pilatescollectiveclub.com/blog/basi-systems-pilates",
      "datePublished": "2026-05-21",
      "dateModified": "2026-05-21",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/ahmet-kurt-0xn-8kRWOhE-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/basi-systems-pilates" },
    },
    {
      "@type": "ItemList",
      "name": "BASI Systems Equipment (2026)",
      "numberOfItems": 4,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "BASI Systems Pilates Review", "item": "https://pilatescollectiveclub.com/blog/basi-systems-pilates" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is BASI Systems?", "acceptedAnswer": { "@type": "Answer", "text": "BASI Systems is the equipment manufacturing arm of BASI Pilates, the global education organisation founded by Rael Isacowitz in 1989. The equipment is designed to match the biomechanical principles and exercise repertoire developed in the BASI curriculum, with a particular emphasis on extended carriage travel, modular apparatus configurations, and premium material construction." } },
        { "@type": "Question", "name": "Who is Rael Isacowitz?", "acceptedAnswer": { "@type": "Answer", "text": "Rael Isacowitz is one of the most respected figures in contemporary Pilates education globally. He founded BASI (Body Arts and Science International) Pilates in 1989 and has trained thousands of instructors across more than 25 countries. He trained under second-generation Pilates teachers and has written multiple definitive texts on Pilates anatomy and methodology. BASI Systems equipment is designed to his specifications." } },
        { "@type": "Question", "name": "How does BASI Systems compare to Balanced Body and Merrithew?", "acceptedAnswer": { "@type": "Answer", "text": "BASI Systems occupies a more premium position than Balanced Body and Merrithew in price and specification. The key differentiator is carriage travel length — BASI offers the longest in the production market — and the modular F2 tower system, which provides more configuration options than comparable tower accessories from competing brands. For practitioners following the BASI curriculum, the equipment is the intended apparatus. For practitioners using other methodologies, Balanced Body or Merrithew will serve equally well at a lower cost." } },
        { "@type": "Question", "name": "Is BASI Systems good for tall practitioners?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — the BASI Systems Reformer was specifically designed with extended carriage travel to accommodate taller practitioners, professional athletes, and dancers who find the carriage travel on standard reformers limiting. It is one of the primary reasons the machine has been adopted in dance academies, professional sports performance centres, and clinical practices working with tall athlete populations." } },
      ],
    },
  ],
};

export default function BasiSystemsPilatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Brand Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Equipment</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              BASI Systems<br /><span style={{ color: "#8b4a31" }}>(2026): Equipment Reviewed</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 9 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              BASI Systems is the equipment expression of one of Pilates education's most rigorous methodologies. Designed by Rael Isacowitz — the founder of BASI Pilates and the author of the most widely used academic texts on Pilates anatomy and exercise science — the apparatus is built to match the biomechanical precision that BASI's curriculum demands. The BASI Systems Reformer offers the longest carriage travel in the production market, making it the machine of choice for professional athletes, dancers, and practitioners above 6'2\" who find standard reformers limiting. This is equipment for practitioners who know exactly what they need.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/ahmet-kurt-0xn-8kRWOhE-unsplash.jpg" alt="BASI Systems Pilates reformer and equipment reviewed" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-12 mt-4 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Brand overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: "Founded", value: "1989 by Rael Isacowitz" },
                  { label: "Standout feature", value: "Longest carriage travel in the market" },
                  { label: "Best for", value: "Athletes, dancers, tall practitioners, BASI curriculum studios" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#9a9490", fontFamily: "'Montserrat', sans-serif" }}>{item.label}</p>
                    <p className="text-sm" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

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
                  <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                    style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                  >Buy →</a>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>4 Models · Reviewed</p>
              <div className="space-y-10">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
                    </div>
                    <ProductCard name={p.name} description={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "What is BASI Systems?", a: "BASI Systems is the equipment manufacturing arm of BASI Pilates, the global education organisation founded by Rael Isacowitz in 1989. The equipment is designed to match the biomechanical principles of the BASI curriculum, with extended carriage travel, modular apparatus configurations, and premium material construction." },
                  { q: "Who is Rael Isacowitz?", a: "Rael Isacowitz is one of the most respected figures in contemporary Pilates education globally. He founded BASI Pilates in 1989, has trained thousands of instructors across more than 25 countries, and has written definitive texts on Pilates anatomy and methodology. BASI Systems equipment is designed to his specifications." },
                  { q: "How does BASI Systems compare to Balanced Body and Merrithew?", a: "BASI Systems occupies a more premium position in price and specification. The key differentiator is carriage travel length — BASI offers the longest in the production market — and the modular F2 tower system, which provides more configuration options than comparable tower accessories from competing brands." },
                  { q: "Is BASI Systems good for tall practitioners?", a: "Yes — the BASI Systems Reformer was specifically designed with extended carriage travel to accommodate taller practitioners, professional athletes, and dancers. It is one of the primary reasons the machine has been adopted in dance academies, professional sports performance centres, and clinical practices working with tall athlete populations." },
                ].map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Pilates Reformers for Tall People" excerpt="Long-carriage options across all brands — BASI, Balanced Body, Gratz, and more." href="/blog/best-pilates-reformer-for-tall-people" category="Equipment" readTime="9 min read" date="May 2026" imageUrl="/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg" />
                <ArticleCard title="Best Premium Pilates Reformers" excerpt="The top-tier reformers for serious practitioners across all brands." href="/blog/best-premium-pilates-reformer" category="Equipment" readTime="11 min read" date="May 2026" imageUrl="/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg" />
                <ArticleCard title="Best Studio Pilates Reformers" excerpt="How BASI Systems compares against Peak, Balanced Body, and Gratz for professional studio use." href="/blog/best-studio-pilates-reformers" category="Equipment" readTime="14 min read" date="May 2026" imageUrl="/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg" />
                <ArticleCard title="Best Pilates Cadillac" excerpt="BASI builds one of the most respected cadillac/tower combos available for studio purchase." href="/blog/best-pilates-cadillac" category="Equipment" readTime="9 min read" date="May 2026" imageUrl="/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in New York…" />

        {/* Gear Section */}
        <section style={{ backgroundColor: "#fcf9f8", padding: "60px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8b4a31", marginBottom: "12px" }}>Equipment</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 600, color: "#1b1c1c", marginBottom: "8px" }}>Essential Pilates equipment to get started</h2>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", color: "#53433e", marginBottom: "32px", lineHeight: 1.7 }}>
              Whatever method you train in, a quality mat and the core props are universal starting points.{" "}<a href="/affiliate-disclosure" style={{ color: "#8b4a31", textDecoration: "underline" }}>Affiliate disclosure.</a>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
              
                <a href="https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20" target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: "none" }}>
                  <div style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)", borderRadius: "12px", padding: "20px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 600, color: "#1b1c1c", marginBottom: "8px" }}>Pilates Mat (6mm)</h3>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#53433e", lineHeight: 1.6, marginBottom: "12px" }}>A quality non-slip mat for mat class and home practice. Thicker than a standard yoga mat.</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#8b4a31" }}>From $45</span>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c5a882" }}>Shop →</span>
                    </div>
                  </div>
                </a>
                <a href="https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20" target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: "none" }}>
                  <div style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)", borderRadius: "12px", padding: "20px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 600, color: "#1b1c1c", marginBottom: "8px" }}>Magic Circle</h3>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#53433e", lineHeight: 1.6, marginBottom: "12px" }}>One of Pilates&apos; most versatile props — adds resistance to dozens of reformer and mat exercises.</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#8b4a31" }}>From $24</span>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c5a882" }}>Shop →</span>
                    </div>
                  </div>
                </a>
                <a href="https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20" target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: "none" }}>
                  <div style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)", borderRadius: "12px", padding: "20px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 600, color: "#1b1c1c", marginBottom: "8px" }}>Pilates Grip Socks</h3>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#53433e", lineHeight: 1.6, marginBottom: "12px" }}>Required at every reformer studio. Full-toe grip socks prevent slipping on the carriage.</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#8b4a31" }}>From $16</span>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c5a882" }}>Shop →</span>
                    </div>
                  </div>
                </a>
                <a href="https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20" target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: "none" }}>
                  <div style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)", borderRadius: "12px", padding: "20px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 600, color: "#1b1c1c", marginBottom: "8px" }}>Resistance Bands</h3>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#53433e", lineHeight: 1.6, marginBottom: "12px" }}>Fabric loops extend your home practice and complement reformer spring work effectively.</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#8b4a31" }}>From $22</span>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c5a882" }}>Shop →</span>
                    </div>
                  </div>
                </a>
                <a href="https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20" target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: "none" }}>
                  <div style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)", borderRadius: "12px", padding: "20px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 600, color: "#1b1c1c", marginBottom: "8px" }}>Foam Roller</h3>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#53433e", lineHeight: 1.6, marginBottom: "12px" }}>Essential for spinal mobility, fascial release, and warm-up before class.</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#8b4a31" }}>From $28</span>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c5a882" }}>Shop →</span>
                    </div>
                  </div>
                </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
