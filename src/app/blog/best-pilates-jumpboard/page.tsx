import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Jumpboards (2026): Tested & Ranked",
  description: "The best Pilates jumpboards for home reformers — Balanced Body, Merrithew, AeroPilates, and more tested for compatibility, bounce quality, and build.",
  keywords: ["best pilates jumpboard", "pilates jumpboard", "balanced body jumpboard", "merrithew jumpboard", "aeropilates jumpboard", "pilates reformer jumpboard", "jumpboard pilates cardio", "best jumpboard for home reformer 2026"],
  openGraph: {
    title: "Best Pilates Jumpboards (2026): Tested & Ranked",
    description: "The best jumpboards for Pilates reformers — tested for compatibility and cardio performance.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-jumpboard",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Jumpboards — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Jumpboards (2026)",
    description: "The best jumpboards for Pilates reformers — tested and ranked.",
    images: ["https://pilatescollectiveclub.com/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-jumpboard" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Balanced Body Jump Board",
    price: "From $295",
    verdict: "Best jumpboard for Balanced Body reformers",
    description:
      "Balanced Body's Jump Board is the reference standard for reformer cardio accessories — engineered specifically for the Allegro 2, Studio Reformer, and compatible Balanced Body models. The board attaches to the footbar position with a secure clip system that eliminates play or movement during high-intensity jumping sequences, and the dual-density foam surface provides a responsive, joint-friendly landing surface that translates well to both two-foot and single-leg jump variations. The spring tension recommendations for jumpboard work (lighter springs to increase demand on stabilisers) are well-documented in Balanced Body's curriculum, making the integration into structured programming seamless. A high-quality, purpose-built accessory that justifies its price for practitioners with compatible equipment.",
    affiliateUrl: "https://www.amazon.com/s?k=balanced+body+jump+board+pilates+reformer&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Merrithew Jumpboard for SPX & V2 Max",
    price: "From $320",
    verdict: "Best for Merrithew reformers",
    description:
      "Merrithew's Jumpboard is precision-engineered for the SPX Max, V2 Max, and compatible Merrithew/STOTT reformer models. The attachment mechanism is model-specific and requires no adaptation — it mounts in the footbar position with the same stability as the standard footbar itself. The padded board surface is firm enough to provide proprioceptive feedback during single-leg work while absorbing enough impact to make 20-minute cardio sessions sustainable without joint fatigue. Merrithew's instructor education includes detailed jumpboard programming, which makes this accessory a genuine curriculum extension for practitioners following the STOTT methodology rather than an improvised addition.",
    affiliateUrl: "https://www.amazon.com/s?k=merrithew+jumpboard+pilates+reformer&tag=pilatescollective-20",
    tag: "Best for Merrithew",
  },
  {
    rank: "03",
    name: "AeroPilates Cardio Rebounder",
    price: "From $149",
    verdict: "Best for AeroPilates systems",
    description:
      "AeroPilates' Cardio Rebounder is the most accessible jumpboard option by price and the appropriate choice for AeroPilates reformer owners. The rebounder format uses a slightly different mechanism than traditional jumpboards — it attaches at the end of the reformer rather than the footbar position — which creates a slightly different movement pattern but equivalent cardiovascular demand. The foam surface is softer than the Balanced Body or Merrithew boards, making it particularly suitable for practitioners with knee or ankle concerns who want to add cardio work gradually. A practical, compatible accessory for AeroPilates systems that is widely unavailable from any other manufacturer.",
    affiliateUrl: "https://www.amazon.com/s?k=aeropilates+cardio+rebounder+jumpboard&tag=pilatescollective-20",
    tag: "Best Value",
  },
  {
    rank: "04",
    name: "Align Pilates Jumpboard",
    price: "From $199",
    verdict: "Best for Align Pilates reformers",
    description:
      "Align Pilates produces one of the most underrated home reformer lines on the market, and their Jumpboard is a well-engineered companion accessory to the C8, H1, and compatible models. The board is constructed from high-density foam over a rigid backing plate — more substantial than budget alternatives — and the mounting system is secure enough to handle full-power jumping sequences without requiring mid-session adjustment. The Align Jumpboard represents the best option for practitioners who own an Align reformer and want to add cardio capacity without investing in a separate machine or studio membership for cardio Pilates classes.",
    affiliateUrl: "https://www.amazon.com/s?k=align+pilates+jumpboard+reformer&tag=pilatescollective-20",
    tag: "Best for Align",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Jumpboards (2026): Tested & Ranked",
      "description": "The best jumpboards for Pilates reformers — tested for compatibility, bounce quality, and build.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-jumpboard",
      "datePublished": "2026-05-21",
      "dateModified": "2026-05-21",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-jumpboard" },
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Jumpboards (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Jumpboards", "item": "https://pilatescollectiveclub.com/blog/best-pilates-jumpboard" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is a Pilates jumpboard?", "acceptedAnswer": { "@type": "Answer", "text": "A Pilates jumpboard is an accessory that attaches to the footbar position of a reformer, allowing the practitioner to perform jumping and rebounding exercises while lying supine on the carriage. It converts the reformer into a low-impact cardio machine and is used extensively in cardio Pilates and reformer conditioning classes." } },
        { "@type": "Question", "name": "Are Pilates jumpboards compatible with all reformers?", "acceptedAnswer": { "@type": "Answer", "text": "No — jumpboards are model-specific and must be compatible with your reformer brand. Balanced Body jumpboards work on Balanced Body machines; Merrithew jumpboards on Merrithew/STOTT machines; AeroPilates rebounders on AeroPilates machines. Always verify compatibility with the manufacturer before purchasing." } },
        { "@type": "Question", "name": "Is jumpboard Pilates good for cardio?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — jumpboard sequences can raise the heart rate significantly while maintaining the joint-protective benefits of reformer spring resistance. Most instructors recommend 10–20 minute jumpboard intervals within a full reformer session rather than extended standalone cardio sessions." } },
        { "@type": "Question", "name": "Can beginners use a Pilates jumpboard?", "acceptedAnswer": { "@type": "Answer", "text": "Beginners should establish basic reformer competence before adding jumpboard work — typically 2–3 months of consistent reformer practice. The foundational footwork patterns (two-foot landing, controlled spring return) are accessible to beginners; single-leg and advanced variations should wait until greater stabiliser strength is established." } },
      ],
    },
  ],
};

export default function BestPilatesJumpboardPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Reformer Accessories</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Jumpboards<br /><span style={{ color: "#8b4a31" }}>(2026): Tested & Ranked</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 7 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The jumpboard is the most transformative single accessory for a home reformer. It adds genuine cardio capacity to the machine — elevating the heart rate through jumping and rebounding sequences while maintaining the joint-protective, resistance-based benefits that define Pilates. For practitioners who own a reformer at home and want to avoid a separate cardio machine or outdoor running, a jumpboard makes the reformer a complete conditioning system. The critical caveat: jumpboards are model-specific. This guide covers the best options by reformer brand.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg" alt="Best Pilates jumpboards for home reformers" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-10 rounded-2xl p-6" style={{ backgroundColor: "#fff8f5", border: "1px solid rgba(197,168,130,0.3)" }}>
              <p className="text-sm font-semibold mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Compatibility note</p>
              <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Jumpboards are not universal. Always verify that a jumpboard is compatible with your specific reformer model before purchasing. The footbar attachment mechanism, carriage width, and spring system vary significantly between brands. Purchasing the wrong jumpboard typically results in a non-returnable accessory that cannot be used.</p>
            </div>

            <div className="mb-10 mt-4 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Quick Picks — By Reformer Brand</p>
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>4 Jumpboards · Reformer-Tested</p>
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
                  { q: "What is a Pilates jumpboard?", a: "A Pilates jumpboard is an accessory that attaches to the footbar position of a reformer, allowing the practitioner to perform jumping and rebounding exercises while lying supine on the carriage. It converts the reformer into a low-impact cardio machine and is used extensively in cardio Pilates and reformer conditioning classes." },
                  { q: "Are Pilates jumpboards compatible with all reformers?", a: "No — jumpboards are model-specific and must be compatible with your reformer brand. Balanced Body jumpboards work on Balanced Body machines; Merrithew jumpboards on Merrithew/STOTT machines; AeroPilates rebounders on AeroPilates machines. Always verify compatibility with the manufacturer before purchasing." },
                  { q: "Is jumpboard Pilates good for cardio?", a: "Yes — jumpboard sequences can raise the heart rate significantly while maintaining the joint-protective benefits of reformer spring resistance. Most instructors recommend 10–20 minute jumpboard intervals within a full reformer session rather than extended standalone cardio sessions." },
                  { q: "Can beginners use a Pilates jumpboard?", a: "Beginners should establish basic reformer competence before adding jumpboard work — typically 2–3 months of consistent reformer practice. The foundational footwork patterns are accessible to beginners; single-leg and advanced variations should wait until greater stabiliser strength is established." },
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
                <ArticleCard title="Best Home Pilates Reformers" excerpt="The complete guide to buying a reformer for home practice." href="/blog/best-home-pilates-reformer" category="Equipment" readTime="14 min read" date="May 2026" imageUrl="/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg" />
                <ArticleCard title="Best Pilates Reformer Accessories" excerpt="Everything worth adding to your home reformer beyond the jumpboard." href="/blog/best-pilates-reformer-accessories" category="Equipment" readTime="8 min read" date="May 2026" imageUrl="/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in Singapore…" />
      </main>
      <Footer />
    </>
  );
}
