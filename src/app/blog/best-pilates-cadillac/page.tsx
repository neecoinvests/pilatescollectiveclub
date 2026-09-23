import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Cadillac (2026): Top Trapeze Tables Reviewed",
  description: "The best Pilates cadillac tables of 2026 — Balanced Body, Gratz, and Merrithew trapeze tables compared on spring configuration, build quality, and price.",
  keywords: ["best pilates cadillac", "pilates trapeze table review 2026", "pilates cadillac buy", "best pilates trapeze table", "balanced body cadillac review", "gratz cadillac pilates", "pilates cadillac vs reformer", "pilates cadillac table home"],
  openGraph: {
    title: "Best Pilates Cadillac & Trapeze Table (2026)",
    description: "The Pilates Cadillac — what it does, who needs one, and which brand to buy. Balanced Body vs Merrithew vs Gratz.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-cadillac",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg", width: 1200, height: 630, alt: "Pilates Cadillac guide — Pilates Collective Club" }],
  },
  twitter: { card: "summary_large_image", title: "Best Pilates Cadillac & Trapeze Table (2026)", description: "What the Cadillac does, who needs one, and which brand to buy.", images: ["https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg"] },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-cadillac" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Balanced Body Trapeze Table / Cadillac",
    price: "$5,030",
    verdict: "The only Cadillac we could verify as a real, live Amazon listing",
    description:
      "This is the real Balanced Body Trapeze Table (Cadillac), and as far as we could verify, it is the only genuine Cadillac-type apparatus actually sold on Amazon — every other brand in this category is dealer-direct only. It ships as a lead-time item rather than in-stock, so budget for a delivery window rather than immediate shipping. We could not independently verify a detailed spring or bar configuration for the current listing, so confirm exactly what's included (push-through bar, roll-down bar, trapeze, spring set) on the live product page before ordering. Commercial-grade build, appropriate for working instructors, clinical Pilates facilities, and serious home practitioners with dedicated studio space and the ceiling clearance a full Cadillac requires.",
    affiliateUrl: "https://www.amazon.com/dp/B01N5OIH13?tag=pilatescollective-20",
    tag: "The Real Listing",
  },
  {
    rank: "02",
    name: "Merrithew Cadillac / Trapeze Table",
    price: "Price on request",
    verdict: "Not sold on Amazon — genuine STOTT PILATES apparatus, dealer-direct",
    description:
      "We could not find a live Amazon listing for Merrithew's Cadillac / Trapeze Table, and we could not verify a specific public price for it either, so we're not quoting one. It is the reference apparatus for the STOTT PILATES Cadillac repertoire, and instructors certified in that method train on this machine. If your studio is already built around Merrithew equipment, buying through Merrithew directly or an authorised dealer keeps the spring conventions and programming consistent — but go in expecting to request a quote rather than seeing a fixed sticker price.",
    affiliateUrl: "https://www.merrithew.com",
    tag: "STOTT PILATES · Dealer-Direct",
  },
  {
    rank: "03",
    name: "Align-Pilates Cadillac Frame (Reformer Conversion)",
    price: "Price on request",
    verdict: "Not sold on Amazon — converts an existing Align reformer",
    description:
      "We could not find a live Amazon listing for this frame, and we could not verify a specific public price, so we're not quoting one. Unlike Balanced Body and Merrithew, Align-Pilates doesn't sell a standalone Cadillac table — instead it sells a frame that adds the overhead structure, push-through bar, roll-down bar and trapeze to a reformer you already own. It requires a compatible Align reformer as a base; it is not a standalone machine. Purchased through an authorised Align-Pilates dealer.",
    affiliateUrl: "https://pilatesmatters.com/products/align-pilates-full-cadillac-frame-a-c-series-reformer-pap-c1profcad",
    tag: "Reformer Conversion · Dealer-Direct",
  },
  {
    rank: "04",
    name: "Gratz Trapeze Table",
    price: "Price on request",
    verdict: "Not sold on Amazon — the classical standard, dealer-direct",
    description:
      "We could not find a live Amazon listing for the Gratz Trapeze Table, and we could not verify a specific public price, so we're not quoting one — Gratz pricing is generally supplied on request. It's manufactured to Joseph Pilates' original specifications in New York, and for classical-lineage teachers and studios teaching the exercises as originally designed, it's the standard reference. Purchased directly from Gratz (gratzpilates.com); expect a significant, generational investment.",
    affiliateUrl: "https://www.gratzpilates.com/collections/trapeze-table",
    tag: "Classical Standard · Dealer-Direct",
  },
  {
    rank: "05",
    name: "Balanced Body Studio Reformer (Revo Footbar)",
    price: "$4,700",
    verdict: "Real home alternative — reformer with full tower compatibility",
    description:
      "For home practitioners who want a meaningful share of the Cadillac repertoire without the ceiling clearance and price of a full Cadillac, this is the real Balanced Body flagship reformer sold on Amazon, and it carries full tower compatibility, so it can be paired with a tower unit for push-through bar, roll-down bar and spring work. We could not verify a specific bundled tower price or a standalone tower Amazon listing, so treat the tower as a separate purchase to price out directly with Balanced Body. It does not fold and is made to order, so it's a permanent-installation purchase, not a quick add-on.",
    affiliateUrl: "https://www.amazon.com/dp/B002XVWIFE?tag=pilatescollective-20",
    tag: "Home Alternative",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Cadillac & Trapeze Table (2026): The Complete Apparatus Guide",
      "description": "The Pilates Cadillac (Trapeze Table) explained — Balanced Body, Merrithew, and Gratz compared. What it does, who needs one, and what a full setup costs.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-cadillac",
      "datePublished": "2026-05-16",
      "dateModified": "2026-09-23",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-cadillac" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Cadillac & Trapeze Table", "item": "https://pilatescollectiveclub.com/blog/best-pilates-cadillac" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the difference between a Cadillac and a Trapeze Table?", "acceptedAnswer": { "@type": "Answer", "text": "They are the same apparatus. \"Cadillac\" is the nickname used in contemporary Pilates; \"Trapeze Table\" is the more descriptive name and common in classical lineages. Both refer to the same full-frame table apparatus." } },
        { "@type": "Question", "name": "Do I need a Cadillac or will a Reformer + Tower do?", "acceptedAnswer": { "@type": "Answer", "text": "For most home practitioners, a Reformer + Tower is the more proportionate choice — it covers approximately 60–70% of Cadillac exercises at 40–50% of the cost, and fits in a normal room. A full Cadillac is justified for working instructors, clinical settings, and practitioners whose teacher programs regular trapeze work." } },
        { "@type": "Question", "name": "What ceiling height do I need for a Pilates Cadillac?", "acceptedAnswer": { "@type": "Answer", "text": "Minimum 230–240cm of clear ceiling height above the table. The overhead frame itself is approximately 200cm tall; the trapeze exercises require additional clearance. Measure your space carefully before purchasing." } },
        { "@type": "Question", "name": "How much does a Pilates Cadillac cost in total?", "acceptedAnswer": { "@type": "Answer", "text": "The only price we could independently verify is the Balanced Body Trapeze Table / Cadillac on Amazon, at $5,030, plus delivery and installation. Merrithew, Align-Pilates and Gratz do not publish fixed prices for their Cadillac apparatus and quote on request through dealers, so we're not asserting a specific figure for those — expect a substantial investment, and get a current quote before budgeting." } },
      ],
    },
  ],
};

export default function BestPilatesCadillaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero section */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Cadillac</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Cadillac &amp; Trapeze Table (2026):<br /><span style={{ color: "#8b4a31" }}>The Complete Apparatus Guide</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 10 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The Pilates Cadillac — also called the Trapeze Table — is the most comprehensive single piece of apparatus in the classical Pilates system, and the one most people have never used. It combines the spring resistance of a reformer with hanging, suspension, and vertical spring work that no other apparatus can replicate. This guide explains what the Cadillac does, who genuinely needs one, and which brands make it — honestly: of the brands compared below, only the Balanced Body Trapeze Table/Cadillac turned up as a real, live Amazon listing. Merrithew, Align-Pilates and Gratz build genuine Cadillac apparatus too, but it&apos;s dealer-direct only, so we&apos;ve linked to the manufacturers rather than a fabricated Amazon offer.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" alt="Pilates Cadillac and Trapeze Table — the complete apparatus guide" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* What is the Pilates Cadillac */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What is the Pilates Cadillac and what does it do?</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The Cadillac was designed by Joseph Pilates, and the name was a nickname given by his students — a reference to the luxury American car of the era, suggesting both its size and its status as the ultimate piece of apparatus. The machine is a full table with an overhead frame — approximately 210cm long, 70cm wide, and 200cm tall including the frame — carrying an array of springs, bars, and a trapeze. It is the largest single piece of Pilates apparatus. Exercises are performed in every orientation: lying, sitting, kneeling, standing, and hanging directly from the frame.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                What sets the Cadillac apart from every other piece of apparatus is the trapeze bar and the overhead spring system. The trapeze bar and hanging springs allow suspension exercises that develop traction, spinal decompression, and extraordinary shoulder girdle strength — exercises that are simply not possible on any other apparatus. The push-through bar, which can be loaded from above or below, creates unique resistance profiles for spine work that differ fundamentally from reformer spring loading. The full horizontal table surface provides a mat working space with spring attachments at both ends and sides, giving a single machine the range of a fully equipped studio.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The Cadillac is used in professional Pilates studios, physiotherapy-adjacent Pilates facilities, dance companies, rehabilitation clinics, and advanced private teaching. It is the reference apparatus for working instructors who teach from a fully equipped studio. Clinical Pilates practitioners treating complex spinal conditions use it for its traction and decompression capabilities. Advanced practitioners training under a classical teacher may work on the Cadillac regularly. It is not, however, a home purchase for most practitioners — the ceiling height requirement alone (minimum 230–240cm) rules out most domestic spaces, and a Reformer with Tower covers the majority of the Cadillac repertoire at a fraction of the cost.
              </p>
            </div>

            {/* Buying criteria cards */}
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-6" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Four Things to Consider Before Buying</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    heading: "Ceiling height",
                    body: "Non-negotiable. The full Cadillac overhead frame requires minimum 230–240cm ceiling clearance. Measure your space before requesting a quote from any dealer.",
                  },
                  {
                    heading: "Studio vs home",
                    body: "The Cadillac is primarily a commercial studio purchase. For home practitioners, a Reformer + Tower covers most of the Cadillac repertoire at a fraction of the cost and space requirement.",
                  },
                  {
                    heading: "Brand ecosystem",
                    body: "If your studio is all Balanced Body, choose the Balanced Body Cadillac. If STOTT-trained, Merrithew. Spring conventions carry across the brand and your existing programming transfers directly.",
                  },
                  {
                    heading: "Budget reality",
                    body: "The only price we could verify is the Balanced Body Trapeze Table/Cadillac on Amazon, at $5,030. Merrithew, Align-Pilates and Gratz quote on request rather than publishing a fixed price, so get a current quote before budgeting rather than relying on a figure quoted elsewhere. Factor in delivery and installation either way — a Cadillac is not self-assembled.",
                  },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick-picks table */}
            <div className="mb-10 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Cadillac Options &amp; Alternatives · Fact-Checked</p>
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

            {/* ProductCards */}
            <div className="mb-16">
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

            {/* Cadillac vs Reformer + Tower editorial section */}
            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Cadillac vs Reformer + Tower: the honest comparison</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The most common question when considering a Cadillac is whether a Reformer with Tower achieves the same outcome. It does not — but it comes closer than most people expect.
              </p>
              <div className="space-y-4">
                {[
                  {
                    heading: "What the Cadillac has that the Reformer + Tower does not",
                    body: "The trapeze bar and hanging suspension work are the decisive difference. No other apparatus provides traction-based exercises, full-body hanging, or the suspension spring configuration of the Cadillac overhead frame. The Cadillac also has more spring positions along the full overhead frame, a dedicated full-length mat table surface, and the complete classical Cadillac repertoire — including exercises that simply cannot be adapted to a tower.",
                  },
                  {
                    heading: "What the Reformer + Tower replicates",
                    body: "A Reformer + Tower covers approximately 60–70% of the Cadillac repertoire. Push-through bar work, roll-down bar exercises, arm springs, and leg springs all transfer directly. For practitioners whose teacher does not program regular trapeze work, this is a meaningful overlap.",
                  },
                  {
                    heading: "For whom the full Cadillac is justified",
                    body: "Working instructors with a full studio who teach clients on the Cadillac daily. Clinical practitioners treating complex spinal conditions requiring traction and decompression. Classical teachers whose repertoire demands the complete trapeze and overhead spring configuration as Pilates designed it.",
                  },
                  {
                    heading: "For whom the Reformer + Tower is sufficient",
                    body: "Home practitioners. Instructors with limited studio space or a limited budget. Anyone whose teacher does not program regular trapeze work. The Reformer + Tower is not a compromise — for most practitioners, it is the proportionate and correct choice.",
                  },
                ].map((item) => (
                  <div key={item.heading}>
                    <p className="text-sm font-semibold mb-1" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What is the difference between a Cadillac and a Trapeze Table?",
                    a: "They are the same apparatus. \"Cadillac\" is the nickname used in contemporary Pilates; \"Trapeze Table\" is the more descriptive name and common in classical lineages. Both refer to the same full-frame table apparatus.",
                  },
                  {
                    q: "Do I need a Cadillac or will a Reformer + Tower do?",
                    a: "For most home practitioners, a Reformer + Tower is the more proportionate choice — it covers approximately 60–70% of Cadillac exercises at 40–50% of the cost, and fits in a normal room. A full Cadillac is justified for working instructors, clinical settings, and practitioners whose teacher programs regular trapeze work.",
                  },
                  {
                    q: "What ceiling height do I need for a Pilates Cadillac?",
                    a: "Minimum 230–240cm of clear ceiling height above the table. The overhead frame itself is approximately 200cm tall; the trapeze exercises require additional clearance. Measure your space carefully before purchasing.",
                  },
                  {
                    q: "How much does a Pilates Cadillac cost in total?",
                    a: "Machine: $3,500–$12,000+ depending on brand. Delivery and installation (typically included by dealers for equipment at this price): factor in separately. Accessories (additional springs, pads): $200–$500. Realistic total for a Balanced Body or Merrithew Cadillac: $8,500–$12,000+.",
                  },
                ].map((item) => (
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
                <ArticleCard
                  title="Pilates Reformer with Tower (2026)"
                  excerpt="The home alternative to a full Cadillac — what a tower adds and which setup is worth it."
                  href="/blog/pilates-reformer-with-tower"
                  category="Equipment Guide"
                  readTime="10 min read"
                  date="May 2026"
                  imageUrl="/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg"
                />
                <ArticleCard
                  title="Balanced Body Studio Reformer Review (2026)"
                  excerpt="The gold standard home reformer — an honest deep review."
                  href="/blog/balanced-body-allegro-2-review"
                  category="Equipment Review"
                  readTime="12 min read"
                  date="May 2026"
                  imageUrl="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg"
                />
              </div>
            </div>

          </div>
        </section>

        <CTASection title="Find a studio with a full Cadillac" subtitle="Our city guides identify studios with complete apparatus including the Cadillac." />
      </main>
      <Footer />
    </>
  );
}
