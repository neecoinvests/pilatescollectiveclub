import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Gratz Pilates (2026): Classical Apparatus, Honest Review & Who It's For | Pilates Collective Club",
  description: "Gratz Pilates makes classical apparatus to Joseph Pilates' original specifications. An honest guide to their reformer, cadillac, chair — and whether the price premium is justified.",
  keywords: ["gratz pilates", "gratz pilates reformer", "classical pilates equipment", "gratz pilates review", "gratz vs balanced body", "classical pilates apparatus", "gratz reformer price", "joseph pilates equipment", "classical pilates reformer", "gratz pilates 2026"],
  openGraph: {
    title: "Gratz Pilates (2026): Classical Apparatus Honestly Reviewed",
    description: "Gratz makes classical apparatus to Joseph Pilates' original specs. Is the premium worth it?",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/gratz-pilates",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg", width: 1200, height: 630, alt: "Gratz Pilates classical apparatus — Pilates Collective Club" }],
  },
  twitter: { card: "summary_large_image", title: "Gratz Pilates (2026): Classical Apparatus Review", description: "Gratz makes apparatus to Joseph Pilates' original specs. An honest guide to their equipment and pricing.", images: ["https://pilatescollectiveclub.com/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg"] },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/gratz-pilates" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Gratz Universal Reformer",
    price: "From $6,500",
    verdict: "The classical reformer benchmark",
    description:
      "The Gratz Universal Reformer is the closest production equipment gets to the apparatus Joseph Pilates designed in his 8th Avenue studio. The spring system uses original-specification springs with a characteristic tension profile — what classical teachers describe as having more immediacy and 'life' than modern springs. The wooden frame, canvas straps, and natural rubber components give it an aesthetic and tactile quality that contemporary steel-and-upholstery reformers cannot replicate. At $6,500+, this is a lifelong investment purchased by serious classical studios, first-generation teacher lineages, and dedicated practitioners for whom authenticity is non-negotiable. Note: sold direct at gratzpilates.com, not typically available on Amazon.",
    affiliateUrl: "https://www.amazon.com/s?k=gratz+pilates+reformer&tag=matchaspot-20",
    tag: "Classical Standard",
  },
  {
    rank: "02",
    name: "Gratz Wunda Chair",
    price: "From $2,000",
    verdict: "Best classical chair for advanced work",
    description:
      "The Wunda Chair was invented by Joseph Pilates and remains one of the most challenging apparatus in the classical system. The Gratz version is built to original specifications — a solid wood construction with the specific spring tensions and pedal geometry that the classical Chair exercises require. Unlike contemporary chairs with split pedals and multiple spring configurations, the Gratz Wunda Chair maintains the single pedal design with stepped spring heights. For classical studios and advanced practitioners, no contemporary version provides the same exercise quality. Purchase direct from Gratz; expect 6-8 week delivery.",
    affiliateUrl: "https://www.amazon.com/s?k=gratz+wunda+chair+pilates&tag=matchaspot-20",
    tag: "Advanced Apparatus",
  },
  {
    rank: "03",
    name: "Gratz Spine Corrector",
    price: "From $800",
    verdict: "Best classical barrel accessory",
    description:
      "The Spine Corrector is one of the most functional Pilates accessories available and the Gratz version is built to original specifications. The curved barrel shape, when used correctly, provides thoracic extension, hip flexor lengthening, and abdominal strengthening that mat work alone cannot achieve. At $800+, it is significantly more expensive than contemporary alternatives — Balanced Body's Pilates Arc serves a similar function at $240. The honest distinction: the Gratz Spine Corrector is the correct tool for the classical repertoire as Pilates designed it. For practitioners training in the classical lineage, it's worth the price. For home practitioners without a classical teacher, the Arc is a sensible alternative.",
    affiliateUrl: "https://www.amazon.com/s?k=gratz+pilates+spine+corrector&tag=matchaspot-20",
    tag: "Classical Barrel",
  },
  {
    rank: "04",
    name: "Classical Pilates Leather Foot Straps (compatible)",
    price: "From $35",
    verdict: "Best classical-style replacement straps",
    description:
      "Gratz reformers use leather foot straps in the classical tradition — a feel distinct from the nylon and canvas straps of contemporary reformers. Leather straps have a subtle flex and hand feel that many classical practitioners prefer for long-spring and short-spring work. While Gratz sells original straps directly, compatible classical-style leather straps for reformer work are available on Amazon and through Pilates equipment suppliers. If you own a Gratz reformer, always replace straps with leather — synthetic straps change the exercise feel in a way that matters for classical precision.",
    affiliateUrl: "https://www.amazon.com/s?k=pilates+reformer+leather+foot+straps&tag=matchaspot-20",
    tag: "Replacement Straps",
  },
  {
    rank: "05",
    name: "Pilates Wooden Push Through Bar Spring (compatible)",
    price: "From $45",
    verdict: "Best replacement spring for classical equipment",
    description:
      "Classical Pilates apparatus springs are heavier and have a different tension profile than contemporary springs. Over time, springs lose tension and require replacement. Gratz sells original replacement springs directly; compatible springs meeting classical specifications are also available through specialist Pilates suppliers and occasionally on Amazon. When replacing springs on classical equipment, verify the spring weight (light/medium/heavy designation differs between brands) and coil count — an incorrect spring will change the exercise feel and potentially compromise safety. Always purchase springs rated for Pilates apparatus rather than generic hardware springs.",
    affiliateUrl: "https://www.amazon.com/s?k=pilates+reformer+replacement+springs+classical&tag=matchaspot-20",
    tag: "Maintenance",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Gratz Pilates (2026): The Classical Apparatus Standard, Reviewed",
      "description": "Gratz Pilates makes classical apparatus to Joseph Pilates' original specifications. An honest guide to their reformer, cadillac, chair — and whether the price premium is justified.",
      "url": "https://pilatescollectiveclub.com/blog/gratz-pilates",
      "datePublished": "2026-05-16",
      "dateModified": "2026-05-16",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/gratz-pilates" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Gratz Pilates", "item": "https://pilatescollectiveclub.com/blog/gratz-pilates" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Gratz better than Balanced Body?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Different, not better. Gratz is built to classical specifications; Balanced Body reflects contemporary exercise science modifications. Classical practitioners prefer Gratz; contemporary practitioners often prefer the Balanced Body carriage feel. Neither is objectively superior — they serve different training philosophies.",
          },
        },
        {
          "@type": "Question",
          "name": "Why does Gratz cost so much more than other reformers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gratz equipment is handcrafted in New York to original specifications, using natural materials including leather and wood, made in very small quantities compared to commercially manufactured alternatives. The price reflects genuine craft production, not marketing premium.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I buy Gratz on Amazon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically not. Gratz sells directly at gratzpilates.com and through a small network of authorised dealers. If you see a Gratz listing on Amazon, verify the seller carefully.",
          },
        },
        {
          "@type": "Question",
          "name": "What's the difference between Gratz and a classical Pilates reformer from another brand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most brands calling their equipment 'classical' use modified dimensions. Only Gratz consistently maintains the original Joseph Pilates specifications. Equipment from Pilates Design Gruppe (PDG) in Germany is another authentic classical maker; BASI Systems offers a hybrid approach.",
          },
        },
      ],
    },
  ],
};

export default function GratzPilatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Gratz Pilates</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Gratz Pilates (2026):<br /><span style={{ color: "#8b4a31" }}>The Classical Apparatus Standard, Reviewed</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 11 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              *Gratz apparatus is sold directly through gratzpilates.com and certified dealers — not on Amazon. Links below may show search results rather than the actual product. For accessories such as leather straps and replacement springs, generic-compatible options are available on Amazon and we earn a small commission on qualifying purchases.
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Gratz Industries has manufactured Pilates apparatus since the 1920s — building the original equipment for Joseph Pilates&apos; studio at 939 8th Avenue in New York City. Today, trading as Gratz Pilates, they remain the only production manufacturer that holds an unbroken line to those original specifications. Every piece of apparatus they make is handcrafted in New York, using the same spring tensions, dimensions, and material choices that the classical repertoire was built around. This guide is for classical practitioners, studio owners, and serious enthusiasts trying to understand whether the Gratz premium is warranted — and exactly what they are buying.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg"
                alt="Gratz Pilates classical apparatus — handcrafted reformer and Cadillac in a classical Pilates studio"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.85)" }}
              />
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Brand overview */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
                The manufacturer that built equipment for Joseph Pilates himself
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Gratz Industries began building Pilates apparatus in the 1920s when Joseph Pilates operated his studio at 939 8th Avenue, New York. The relationship was direct: Gratz manufactured the equipment to Pilates&apos; own specifications, and those specifications have been maintained without modification through every subsequent decade. When Pilates died in 1967, Gratz continued producing apparatus to the same drawings, spring weights, and dimensions he had specified. There is no other production manufacturer with a comparable provenance. The result is that a Gratz Universal Reformer built today is, functionally and dimensionally, the same apparatus that the first-generation Pilates teachers — Romana Kryzanowska, Kathy Grant, Ron Fletcher, Carola Trier — trained on and taught from.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The classical versus contemporary distinction matters here. Contemporary manufacturers such as Merrithew (STOTT Pilates) and Balanced Body have deliberately modified the original apparatus — adjusting spring tensions, adding padded headrests, widening carriages, and introducing split pedal chairs — to align with modern exercise science and accommodate a broader range of bodies and fitness levels. These are reasonable design decisions for the contemporary market. Gratz has made none of them. The spring tensions remain heavier, the reformer carriage narrower, and the geometry unchanged. Classical practitioners describe this as having more &apos;pep&apos; and immediacy in the resistance — a quality that requires and rewards precise technique in a way that softer contemporary springs do not. Both approaches are valid. They are, however, incompatible philosophies, and a practitioner trained on Balanced Body equipment will find Gratz apparatus demanding in a different way.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Gratz apparatus is the equipment of choice for classical Pilates studios maintaining first-generation lineages. Teacher training programs in the Romana Kryzanowska tradition — and the studios carrying the Kathy Grant and Ron Fletcher heritage — predominantly train and teach on Gratz. For practitioners working within these lineages, using Gratz is not an aesthetic preference: it is a functional requirement, since the exercises were calibrated to this specific apparatus. For those outside the classical lineage, Gratz represents a studied choice to work with the apparatus as Joseph Pilates intended — a position some practitioners arrive at after years in contemporary studios, and one that carries its own discipline.
              </p>
            </div>

            {/* Products */}
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Gratz Pilates Products · Classical Standard</p>
              <p className="text-sm leading-relaxed mb-10" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
                Gratz equipment is sold directly through{" "}
                <a href="https://www.gratzpilates.com" target="_blank" rel="noopener noreferrer" style={{ color: "#8b4a31", textDecoration: "underline" }}>gratzpilates.com</a>{" "}
                and certified dealers. Links below show Amazon search results; for the actual product, visit Gratz directly. Items 04 and 05 are compatible accessories and generic-style components that are available through Amazon.
              </p>
              <div className="space-y-10">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
                    </div>
                    <div className="mb-1">
                      <span className="text-xs uppercase tracking-widest" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{p.verdict}</span>
                    </div>
                    <ProductCard name={p.name} description={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />
                  </div>
                ))}
              </div>
            </div>

            {/* Price premium editorial box */}
            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "rgba(139,74,49,0.06)", border: "1px solid rgba(139,74,49,0.18)" }}>
              <h2 className="text-2xl font-semibold mb-5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Is Gratz worth the price premium?</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                <strong style={{ color: "#1b1c1c" }}>The quality argument:</strong> Every piece of Gratz apparatus is handcrafted in New York by skilled craftspeople working to original specifications. The materials — solid wood, leather, natural rubber — are chosen for their functional properties, not their cost. A Gratz Universal Reformer built today will outlast multiple generations of commercially manufactured alternatives. Classical practitioners who inherit studio equipment from their teachers are frequently working on Gratz apparatus built decades ago. That longevity is built into the price.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                <strong style={{ color: "#1b1c1c" }}>The accessibility argument:</strong> At $6,500 or more for a reformer — and $12,000+ for a Cadillac — Gratz is priced for professional studios and serious long-term investors. The price point effectively excludes casual home practitioners. Lead times of 6-8 weeks and direct-only purchasing add further friction. Gratz does not sell on Amazon and does not compete for the home fitness market. That is a deliberate choice, not an oversight.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                <strong style={{ color: "#1b1c1c" }}>The verdict:</strong> Yes, if you are training in a classical lineage and your instructor works on Gratz — the apparatus is a functional requirement, not a luxury. Yes, if you are opening a classical studio and building equipment that will serve decades of teaching. No, if you are a home practitioner who attends studio classes occasionally — a Balanced Body Allegro 2 at approximately $2,800 serves the same home practice purpose without the classical specification premium. The price difference is real, the distinction is real, and the honest answer depends entirely on which lineage you are working in.
              </p>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Is Gratz better than Balanced Body?",
                    a: "Different, not better. Gratz is built to classical specifications; Balanced Body reflects contemporary exercise science modifications. Classical practitioners prefer Gratz; contemporary practitioners often prefer the Balanced Body carriage feel and adjustability. Neither is objectively superior — they serve different training philosophies, and the right answer depends on which system you are training in.",
                  },
                  {
                    q: "Why does Gratz cost so much more than other reformers?",
                    a: "Handcrafted in New York to original specifications, using natural materials including leather and wood, made in very small quantities compared to commercially manufactured alternatives. The price reflects genuine craft production — not a marketing premium. A Gratz reformer built to the same process as one made 50 years ago will carry the same cost structure. You are buying a piece of equipment intended to last a lifetime.",
                  },
                  {
                    q: "Can I buy Gratz on Amazon?",
                    a: "Typically not. Gratz sells directly at gratzpilates.com and through a small network of authorised dealers. If you see a Gratz listing on Amazon, verify the seller carefully — it may be a third-party reseller or a misrepresented item. The search links in this guide go to Amazon's search results, which exist so you can compare; for actual Gratz apparatus, go directly to Gratz.",
                  },
                  {
                    q: "What's the difference between Gratz and a classical Pilates reformer from another brand?",
                    a: "Most brands calling their equipment 'classical' use modified dimensions. Only Gratz consistently maintains the original Joseph Pilates specifications across their full range. Equipment from Pilates Design Gruppe (PDG) in Germany is another authentic classical maker with a long-standing reputation among European classical studios. BASI Systems offers a hybrid approach — quality contemporary manufacture with some classical influences. If the classical lineage and original specifications matter to your practice, Gratz and PDG are the two names that classical teachers reference consistently.",
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
                  title="Classical vs Contemporary Pilates"
                  excerpt="Understanding the key differences between the original method and modern interpretations — and which is right for you."
                  href="/blog/classical-vs-contemporary-pilates"
                  category="Method"
                  readTime="7 min read"
                  date="May 2026"
                  imageUrl="/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg"
                />
                <ArticleCard
                  title="Balanced Body vs Merrithew (2026)"
                  excerpt="Head-to-head of the two dominant contemporary reformer brands."
                  href="/blog/balanced-body-vs-merrithew"
                  category="Comparison"
                  readTime="10 min read"
                  date="May 2026"
                  imageUrl="/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg"
                />
              </div>
            </div>

          </div>
        </section>

        <CTASection
          title="Find a classical Pilates studio near you"
          subtitle="Our city guides identify the best Pilates studios — including those using Gratz apparatus."
          showSearch
          searchPlaceholder="Ask: best classical Pilates studios in New York…"
        />
      </main>
      <Footer />
    </>
  );
}
