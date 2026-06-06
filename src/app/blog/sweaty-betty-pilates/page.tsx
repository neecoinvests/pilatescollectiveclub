import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Sweaty Betty for Pilates (2026): Best Pieces & Honest Review | Pilates Collective Club",
  description: "Sweaty Betty Pilates wear reviewed: Power leggings, bras, and shorts tested for reformer and mat. UK-based activewear brand compared vs. Lululemon.",
  keywords: ["sweaty betty pilates", "sweaty betty for pilates", "sweaty betty power workout legging", "sweaty betty garudasana legging", "sweaty betty pilates review", "sweaty betty vs lululemon pilates", "sweaty betty uk pilates", "sweaty betty activewear pilates 2026", "best sweaty betty leggings", "sweaty betty pilates clothes"],
  openGraph: {
    title: "Sweaty Betty for Pilates (2026): Best Pieces & Honest Review",
    description: "The complete guide to Sweaty Betty activewear for Pilates — the best leggings, bras, and layers for studio and reformer classes.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/sweaty-betty-pilates",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg", width: 1200, height: 630, alt: "Sweaty Betty for Pilates — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sweaty Betty for Pilates (2026): Best Pieces & Honest Review",
    description: "The complete guide to Sweaty Betty activewear for Pilates — honestly reviewed for the studio practitioner.",
    images: ["https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/sweaty-betty-pilates",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Sweaty Betty Power Workout Legging",
    price: "From $120",
    verdict: "Best Overall Legging",
    description:
      "The Power is Sweaty Betty&apos;s most versatile Pilates legging and the piece most consistently recommended by UK studio instructors. The fabric has a firm, smooth compression that holds through spinal articulation and dynamic reformer sequences without the stiff, gym-adjacent feel of over-engineered compression leggings. The high waistband uses a double-layer construction that provides genuine hold through roll-ups and spine stretch without folding at the front — a failure mode that affects many mid-range leggings. Fully opaque in all Pilates positions, including the deep hip flexion of footwork. The Power sits at a price point below Lululemon Align ($98 vs SB&apos;s $120) in the US market, though the quality is comparable.",
    affiliateUrl: "https://www.amazon.com/s?k=sweaty+betty+power+workout+legging&tag=pilatescollective-20",
    tag: "Top Pick",
  },
  {
    rank: "02",
    name: "Sweaty Betty Garudasana Yoga Legging",
    price: "From $110",
    verdict: "Best for Mat Work",
    description:
      "Named for an eagle-pose yoga posture and designed for the full range of hip external rotation and spinal extension that yoga demands — which overlaps almost entirely with what classical mat Pilates requires. The Garudasana fabric is softer and lighter than the Power, sitting closer to a Lululemon Align in hand feel while maintaining full opacity. The waistband is wider and flatter than the Power, which distributes pressure more evenly during prone prone exercises and side-lying sequences. For practitioners who divide their time between mat Pilates and yoga — a common combination — the Garudasana is the legging that works authentically in both contexts rather than compromising in either.",
    affiliateUrl: "https://www.amazon.com/s?k=sweaty+betty+garudasana+yoga+legging&tag=pilatescollective-20",
    tag: "Best for Mat Work",
  },
  {
    rank: "03",
    name: "Sweaty Betty Super Sculpt Sports Bra",
    price: "From $65",
    verdict: "Best Bra",
    description:
      "The Super Sculpt is Sweaty Betty&apos;s most technically accomplished bra for Pilates. The medium-support construction holds cleanly through reformer dynamic sequences without the chest compression of high-impact bras that can restrict the lateral ribcage expansion Pilates breathing demands. The racerback geometry is cut generously enough that the shoulder straps do not obstruct the scapular mobility required for arm series and straps work. The bra band sits below the ribcage without digging into the spine during bridge or the dead bug positions common in reformer core work. The fabric quality is noticeably above Gymshark and comparable to Lululemon&apos;s Energy Bra at roughly the same price.",
    affiliateUrl: "https://www.amazon.com/s?k=sweaty+betty+super+sculpt+sports+bra&tag=pilatescollective-20",
    tag: "Best Bra",
  },
  {
    rank: "04",
    name: "Sweaty Betty Zero Gravity Run Legging",
    price: "From $100",
    verdict: "Best Lightweight",
    description:
      "Designed primarily for running but worth attention for Pilates practitioners who run warm or train in heated studios. The Zero Gravity fabric is noticeably lighter and more breathable than the Power, with a four-way stretch that accommodates the full hip flexion range without restriction. The trade-off is a slightly softer waistband — it holds well for a 55-minute Pilates class but does not have the fortress-like hold of the Power during more vigorous reformer sequences. For morning mat practice in a warm home studio, private sessions where temperature control matters more than maximum waistband security, or practitioners who genuinely overheat in standard compression fabric, the Zero Gravity is a well-considered lightweight option.",
    affiliateUrl: "https://www.amazon.com/s?k=sweaty+betty+zero+gravity+run+legging&tag=pilatescollective-20",
    tag: "Best Lightweight",
  },
  {
    rank: "05",
    name: "Sweaty Betty Blossom Layer Tank",
    price: "From $55",
    verdict: "Best Tank",
    description:
      "Sweaty Betty&apos;s layering tanks are consistently better than their standalone counterparts for Pilates because the fabric weight and construction are designed for close-to-body wear rather than as a fashion outer layer. The Blossom sits at hip length — correct for reformer work where longer tanks catch on shoulder blocks — and the fabric has enough drape to move with the body rather than restricting it. The back construction allows full scapular mobility. It layers cleanly over the Super Sculpt bra without bunching at the waist during seated or standing work. For practitioners who want coverage beyond a bra but find cropped tanks too short for their comfort, the Blossom provides a proportioned middle option.",
    affiliateUrl: "https://www.amazon.com/s?k=sweaty+betty+blossom+layer+tank&tag=pilatescollective-20",
    tag: "Best Tank",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Sweaty Betty for Pilates (2026): Best Pieces & Honest Review",
      "description": "The complete guide to Sweaty Betty activewear for Pilates — the best leggings, bras, and layers for studio and reformer classes.",
      "url": "https://pilatescollectiveclub.com/blog/sweaty-betty-pilates",
      "datePublished": "2026-05-14",
      "dateModified": "2026-05-14",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/sweaty-betty-pilates" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Sweaty Betty for Pilates", "item": "https://pilatescollectiveclub.com/blog/sweaty-betty-pilates" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is Sweaty Betty good for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Sweaty Betty is genuinely excellent for Pilates and has been part of the UK studio circuit longer than almost any other brand. Founded in 1998, the brand predates the boutique fitness explosion and has always been oriented toward studio movement rather than gym culture. The Power Workout Legging and Super Sculpt Bra are specifically designed for the kind of controlled, full-range movement Pilates demands. The brand understands what practitioners need because it has been dressing them for over 25 years." } },
        { "@type": "Question", "name": "How does Sweaty Betty sizing work?", "acceptedAnswer": { "@type": "Answer", "text": "Sweaty Betty uses standard UK sizing (XS–XL, 6–16) and runs true to size in most styles. The Power Workout Legging has a slight compression bias — if you are between sizes and prefer a less-held feeling for mat work, size up. The Garudasana runs more generously due to its softer fabric. For international buyers: Sweaty Betty&apos;s size guide includes US conversions, and their website is the most reliable source for up-to-date measurements as they adjust the patterns seasonally." } },
        { "@type": "Question", "name": "Is Sweaty Betty worth the price?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for the specific pieces in this guide. The Power Workout Legging at $120 competes directly with Lululemon Align ($98) and Varley ($110+) and holds its own on fabric quality, construction, and Pilates functionality. Where Sweaty Betty is less strong value is in their casualwear and lounge ranges, where the premium is less justified. For active Pilates studio wear, the brand earns its price point through genuine product quality and thoughtful design for movement." } },
        { "@type": "Question", "name": "Sweaty Betty vs Lululemon for Pilates — which is better?", "acceptedAnswer": { "@type": "Answer", "text": "They are more evenly matched than most UK practitioners realise. Lululemon&apos;s Align fabric is marginally softer in a direct comparison. Sweaty Betty&apos;s Power Legging has marginally better waistband security for vigorous reformer sequences. The aesthetic difference is real: Sweaty Betty has a more European, less LA-influenced design language, which many UK and European practitioners actively prefer. For bras, the Super Sculpt and Lululemon Energy Bra are comparable. The honest answer: the brand you choose is partly functional, partly aesthetic preference — and Sweaty Betty is a completely legitimate choice on both grounds." } },
      ],
    },
  ],
};

export default function SweatyBettyPilatesPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Sweaty Betty</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Sweaty Betty for Pilates (2026):<br /><span style={{ color: "#8b4a31" }}>Best Pieces &amp; Honest Review</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 10 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Sweaty Betty has been dressing London Pilates studios since before boutique fitness was a concept. Founded in 1998 and still the dominant brand on the UK studio circuit, it occupies the premium activewear tier without the LA aesthetic that characterises Alo and Lululemon. For European practitioners, it is often the brand of first choice. This is a specific guide to what works for Pilates — and what to skip.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" alt="Sweaty Betty activewear for Pilates — Power Workout Legging and Super Sculpt Bra reviewed for studio and reformer classes" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Why Sweaty Betty leads the UK Pilates market</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Sweaty Betty&apos;s Pilates credentials are genuine rather than marketing-constructed. The brand was founded by Tamara Hill-Norton in Notting Hill — a neighbourhood with an extraordinarily dense concentration of Pilates studios — and the core customer from the beginning was the studio practitioner, not the gym-goer. That origin shapes the product design in ways that matter: the waistband architecture accounts for spinal articulation; the fabric weight choices are calibrated for controlled movement rather than cardio; the aesthetic is understated enough for the studio environment.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Following the Wolverine Worldwide acquisition, the brand has expanded into the US market while retaining its UK design sensibility. The American market has been slower to adopt Sweaty Betty than the European one — largely because Lululemon and Alo dominate US brand awareness — but practitioners who discover the brand through recommendation rarely go back.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The brand&apos;s weaknesses are a slightly narrower size range than Athleta and Lululemon, and a run range that is too prominent in the product mix — several pieces that look appropriate for Pilates are actually engineered for running and perform less well on a reformer carriage or mat.
              </p>
            </div>

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>How Sweaty Betty compares</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { brand: "vs Lululemon", summary: "Similar quality, different aesthetic. Sweaty Betty has a more European design sensibility — quieter branding, more muted colourways. The Power Legging and Align are technically comparable; the choice is often personal." },
                  { brand: "vs Varley", summary: "Both occupy similar positioning in the premium UK market. Varley is slightly more fashion-forward; Sweaty Betty is more function-oriented. The Power Legging is better for vigorous reformer work than most Varley options." },
                  { brand: "vs Alo Yoga", summary: "Less compression-focused and better suited to UK climate and studio temperatures. Alo skews warmer; Sweaty Betty fabrics are better calibrated for the cooler studio environments common in Europe." },
                ].map((item) => (
                  <div key={item.brand} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{item.brand}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Sweaty Betty Pieces · Pilates-Tested</p>
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

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Sweaty Betty pieces to avoid for Pilates</h2>
              <ul className="space-y-3">
                {[
                  "Sweaty Betty Run range for Pilates: the Zero Gravity Run Legging is included in this guide as a lightweight option, but the wider run range — including the Sprint 7/8 and Fast Track styles — uses running-specific construction with articulated knees and ventilation panels that are less suited to reformer carriage contact and slow floor work.",
                  "Oversized lounge pieces for in-class wear: Sweaty Betty&apos;s loungewear and co-ord sets are excellent quality but sized and constructed for casual wear. In a Pilates class, oversized fabric interferes with an instructor&apos;s ability to observe alignment, catches on reformer hardware, and shifts during prone or supine sequences.",
                  "Minimal bralettes without structured support for vigorous reformer work: Sweaty Betty&apos;s softer bralette styles are appropriate for mat work and private sessions, but jump board sequences and dynamic footwork series benefit from the Super Sculpt&apos;s more structured construction.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold flex-shrink-0" style={{ color: "#8b4a31" }}>✕</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Is Sweaty Betty good for Pilates?", a: "Sweaty Betty is genuinely excellent for Pilates and has been part of the UK studio circuit longer than almost any other brand. Founded in 1998, the brand predates the boutique fitness explosion and has always been oriented toward studio movement rather than gym culture. The Power Workout Legging and Super Sculpt Bra are specifically designed for the kind of controlled, full-range movement Pilates demands." },
                  { q: "How does Sweaty Betty sizing work?", a: "Sweaty Betty uses standard UK sizing (XS–XL, 6–16) and runs true to size in most styles. The Power Workout Legging has a slight compression bias — if you are between sizes and prefer a less-held feeling for mat work, size up. The Garudasana runs more generously due to its softer fabric. For international buyers, their website includes US size conversions." },
                  { q: "Is Sweaty Betty worth the price?", a: "Yes, for the specific pieces in this guide. The Power Workout Legging at $120 competes directly with Lululemon Align and Varley and holds its own on fabric quality, construction, and Pilates functionality. Where Sweaty Betty is less strong value is in their casualwear and lounge ranges. For active Pilates studio wear, the brand earns its price point." },
                  { q: "Sweaty Betty vs Lululemon for Pilates — which is better?", a: "They are more evenly matched than most practitioners realise. Lululemon&apos;s Align fabric is marginally softer in a direct comparison. Sweaty Betty&apos;s Power Legging has marginally better waistband security for vigorous reformer sequences. The aesthetic difference is real: Sweaty Betty has a more European design language, which many UK practitioners actively prefer. The honest answer: both are completely legitimate choices — the decision is partly functional, partly aesthetic." },
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
                <ArticleCard title="Varley for Pilates (2026)" excerpt="The LA brand with cult status in UK and European Pilates studios — the best pieces, honestly reviewed." href="/blog/varley-pilates-activewear" category="Brand Guide" readTime="9 min read" date="May 2026" imageUrl="/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg" />
                <ArticleCard title="Lululemon for Pilates (2026)" excerpt="The best Lululemon pieces for Pilates — tested across reformer, mat, and barre classes." href="/blog/lululemon-pilates" category="Brand Guide" readTime="10 min read" date="May 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in London…" />
      </main>
      <Footer />
    </>
  );
}
