import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Elina Pilates (2026): Equipment Review — Elite & Essence Reformers",
  description: "Elina Pilates reviewed — the Elite and Essence reformers tested for boutique studios and serious home practitioners. Studio-grade quality at a more accessible price.",
  keywords: ["elina pilates", "elina pilates reformer", "elina pilates elite reformer", "elina pilates essence", "elina pilates review", "elina pilates wood reformer", "best boutique studio reformer", "elina pilates 2026", "elina pilates vs balanced body"],
  openGraph: {
    title: "Elina Pilates (2026): Equipment Review — Elite & Essence Reformers",
    description: "Elina Pilates reviewed — Elite and Essence reformers tested for studios and serious home practitioners.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/elina-pilates",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg", width: 1200, height: 630, alt: "Elina Pilates equipment review — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elina Pilates (2026): Equipment Review",
    description: "Elina Pilates Elite and Essence reformers — honest review for studios and home practitioners.",
    images: ["https://pilatescollectiveclub.com/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/elina-pilates" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Elina Pilates Elite Wood Reformer",
    price: "From $2,800",
    verdict: "Best Elina reformer for home studios",
    description:
      "The Elina Pilates Elite Wood Reformer is the brand's best-known product and the model responsible for much of the brand's rapid growth in the boutique studio and serious home practitioner market. The solid wood frame — available in multiple wood finish options — gives it a visual warmth and furniture-appropriate aesthetic that no steel-framed reformer at any price can match. The five-spring colour-coded system is calibrated to clinical standards, and the carriage glides on sealed bearings with a smoothness that compares favourably to Balanced Body machines costing significantly more. The upholstery quality is exceptional — a dense foam density with a high-grade material covering that doesn't show wear or deformation after extended daily use. For practitioners who want a machine that lives visibly in the home rather than being hidden in a spare room, the Elite Wood is the reference choice.",
    affiliateUrl: "https://www.amazon.com/s?k=elina+pilates+elite+wood+reformer&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Elina Pilates Elite Reformer (Aluminium)",
    price: "From $2,600",
    verdict: "Best Elina for studio environments",
    description:
      "The aluminium-frame Elite Reformer is the commercial studio variant of Elina's flagship — the same spring system and carriage construction as the wood model, in a frame designed for higher-volume daily studio use. The powder-coated aluminium is resistant to the wear that accumulates from multiple daily sessions and frequent cleaning, and the frame's lighter weight makes reconfiguring a studio space more manageable. The machine is visually clean and professional — it reads as high-end equipment in a boutique studio environment without the premium pricing of Balanced Body or Merrithew. For studio owners building out a reformer fleet without the budget for full Balanced Body specification, Elina's aluminium Elite represents the strongest value proposition in the market.",
    affiliateUrl: "https://www.amazon.com/s?k=elina+pilates+elite+reformer+aluminium&tag=pilatescollective-20",
    tag: "Best for Studios",
  },
  {
    rank: "03",
    name: "Elina Pilates Essence Reformer",
    price: "From $1,950",
    verdict: "Best Elina entry-level model",
    description:
      "The Elina Pilates Essence is the brand's mid-range reformer — a machine positioned below the Elite in price and specification while retaining the core quality markers that define Elina's reputation. The Essence uses a four-spring system rather than the Elite's five, which covers the standard spring range used in most intermediate programming but limits the light-spring work available on the higher-specification machine. The carriage glide and frame construction are consistent with the Elite. For practitioners who want Elina quality at a more accessible price point, or for home practitioners establishing a first serious reformer practice before potentially upgrading, the Essence is an honest and capable starting point.",
    affiliateUrl: "https://www.amazon.com/s?k=elina+pilates+essence+reformer&tag=pilatescollective-20",
    tag: "Best Entry Elina",
  },
  {
    rank: "04",
    name: "Elina Pilates Elite Cadillac Reformer Combo",
    price: "From $4,200",
    verdict: "Best complete home apparatus",
    description:
      "Elina's Elite Cadillac Reformer combination unit integrates the reformer platform with a full tower and Cadillac apparatus in a single machine footprint — the most space-efficient path to a complete home Pilates studio. The Cadillac component adds push-through bar work, spring-loaded arm and leg exercises, and the hanging and rolling back exercises of the classical Cadillac repertoire. The wood and aluminium construction maintains the Elina aesthetic throughout. For serious practitioners or instructors who want to work the complete apparatus repertoire from home without dedicating separate floor space to multiple machines, the combo unit is one of the most compelling investments available.",
    affiliateUrl: "https://www.amazon.com/s?k=elina+pilates+cadillac+reformer+combo&tag=pilatescollective-20",
    tag: "Complete Apparatus",
  },
  {
    rank: "05",
    name: "Elina Pilates Wunda Chair",
    price: "From $1,300",
    verdict: "Best companion piece for Elina owners",
    description:
      "The Elina Wunda Chair matches the aesthetic of the Elite Wood Reformer precisely — same wood finishes, same upholstery options — making it the natural companion for practitioners building a coordinated home studio around Elina's wood line. Functionally, the split-pedal design and four-spring configuration cover the full contemporary Wunda Chair repertoire, and the construction quality is consistent with Elina's reformer line. It is one of the few chairs available where the visual integration with a companion reformer is deliberately engineered rather than incidental. For a dedicated home studio, the pairing of the Elite Wood Reformer and Elina Wunda Chair creates one of the most aesthetically cohesive and functionally complete home setups available below the Balanced Body price ceiling.",
    affiliateUrl: "https://www.amazon.com/s?k=elina+pilates+wunda+chair&tag=pilatescollective-20",
    tag: "Best Companion",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Elina Pilates (2026): Equipment Review — Elite & Essence Reformers",
      "description": "Elina Pilates reviewed — Elite and Essence reformers, Cadillac combo, and Wunda Chair tested for studios and serious home practitioners.",
      "url": "https://pilatescollectiveclub.com/blog/elina-pilates",
      "datePublished": "2026-05-21",
      "dateModified": "2026-05-21",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/elina-pilates" },
    },
    {
      "@type": "ItemList",
      "name": "Elina Pilates Equipment (2026)",
      "numberOfItems": 5,
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
        { "@type": "ListItem", "position": 3, "name": "Elina Pilates Review", "item": "https://pilatescollectiveclub.com/blog/elina-pilates" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is Elina Pilates good quality?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Elina Pilates has established a reputation for delivering studio-grade build quality at a price point below Balanced Body and Merrithew. The spring systems, carriage bearings, and upholstery quality are consistently rated highly by studio owners and practitioners who have compared them directly against established brands. The wood finish models in particular are often described as exceeding expectations for the price." } },
        { "@type": "Question", "name": "How does Elina Pilates compare to Balanced Body?", "acceptedAnswer": { "@type": "Answer", "text": "Balanced Body has a longer track record, a broader global service and parts network, and a larger accessories ecosystem. Elina Pilates offers comparable build quality on the reformer itself at a lower price, with better wood aesthetic options for home studio environments. For a studio owner who needs service infrastructure and broad accessory compatibility, Balanced Body retains an advantage. For a home practitioner who prioritises equipment quality and aesthetics, Elina is a serious competitor." } },
        { "@type": "Question", "name": "Where is Elina Pilates made?", "acceptedAnswer": { "@type": "Answer", "text": "Elina Pilates equipment is manufactured in Europe, which contributes to the build quality and material standards that have driven the brand's growth. The brand ships globally through an authorised distributor network. Lead times for custom colour or wood finish options vary — standard configurations are typically available faster." } },
        { "@type": "Question", "name": "Is Elina Pilates good for a home studio?", "acceptedAnswer": { "@type": "Answer", "text": "Elina is particularly well-suited for home studios because the wood finish models look appropriate in a home environment in a way that steel-framed clinical machines do not. The Elite Wood Reformer in particular is designed to be displayed rather than hidden — a significant advantage for practitioners who don't have a dedicated studio room." } },
      ],
    },
  ],
};

export default function ElinaPilatesPage() {
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
              Elina Pilates<br /><span style={{ color: "#8b4a31" }}>(2026): Equipment Reviewed</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 10 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Elina Pilates has been one of the most significant new entrants in professional Pilates equipment over the past decade — a European manufacturer that has rapidly built a strong reputation by delivering studio-grade build quality at a price point that challenges the established premium brands. The brand is now found in boutique studios across Europe, North America, and Asia, and its Elite Wood Reformer has become particularly well-regarded in the home studio market where aesthetic as well as functional considerations drive purchasing decisions. Here is an honest review of their full equipment range.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg" alt="Elina Pilates Elite Wood Reformer and equipment reviewed" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-12 mt-4 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Brand overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: "Origin", value: "Europe (Spain)" },
                  { label: "Method alignment", value: "Contemporary & classical compatible" },
                  { label: "Best for", value: "Boutique studios, home studios, value-conscious buyers" },
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Models · Reviewed</p>
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
              <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Our verdict</h2>
              <div className="space-y-4">
                {[
                  { label: "Build quality", value: "Excellent — particularly the upholstery density and wood finish quality, which exceed expectations at this price point." },
                  { label: "Spring feel", value: "Contemporary — well-calibrated, consistent, and appropriate for the full range of contemporary and hybrid programming." },
                  { label: "Aesthetics", value: "The strongest wood aesthetic option in the market below Gratz pricing. The Elite Wood is genuinely home-appropriate." },
                  { label: "Value for money", value: "The best value proposition for studio-grade performance at this price — better than comparable machines from lesser-known brands." },
                  { label: "Verdict", value: "Elina Pilates is the recommended choice for boutique studio owners building out their first fleet and for home practitioners who prioritise both performance and aesthetics. A serious brand that has earned its growing reputation." },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="text-sm font-semibold shrink-0 w-40" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{item.label}</span>
                    <span className="text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Is Elina Pilates good quality?", a: "Yes — Elina Pilates has established a reputation for delivering studio-grade build quality at a price point below Balanced Body and Merrithew. The spring systems, carriage bearings, and upholstery quality are consistently rated highly by studio owners and practitioners who have compared them directly against established brands." },
                  { q: "How does Elina Pilates compare to Balanced Body?", a: "Balanced Body has a longer track record, a broader global service network, and a larger accessories ecosystem. Elina Pilates offers comparable build quality at a lower price, with better wood aesthetic options for home studio environments. For studio owners who need service infrastructure, Balanced Body retains an advantage. For home practitioners who prioritise aesthetics, Elina is a serious competitor." },
                  { q: "Where is Elina Pilates made?", a: "Elina Pilates equipment is manufactured in Europe, which contributes to the build quality and material standards that have driven the brand's growth. The brand ships globally through an authorised distributor network. Lead times for custom finish options vary by model." },
                  { q: "Is Elina Pilates good for a home studio?", a: "Elina is particularly well-suited for home studios because the wood finish models look appropriate in a home environment in a way that steel-framed clinical machines do not. The Elite Wood Reformer is designed to be displayed rather than hidden — a significant advantage for practitioners who don't have a dedicated studio room." },
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
                <ArticleCard title="Best Premium Pilates Reformers" excerpt="The top-tier reformers across all brands — Elina, Balanced Body, Gratz, and more." href="/blog/best-premium-pilates-reformer" category="Equipment" readTime="11 min read" date="May 2026" imageUrl="/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg" />
                <ArticleCard title="Balanced Body vs Merrithew" excerpt="The two dominant studio brands compared — which is right for your studio?" href="/blog/balanced-body-vs-merrithew" category="Comparison" readTime="9 min read" date="May 2026" imageUrl="/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg" />
                <ArticleCard title="Best Studio Pilates Reformers" excerpt="How Elina compares against Peak, Balanced Body, and Gratz for professional studio installations." href="/blog/best-studio-pilates-reformers" category="Equipment" readTime="14 min read" date="May 2026" imageUrl="/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg" />
                <ArticleCard title="Best Pilates Reformers for Tall People" excerpt="Elina's Elite Wood and Elite Aluminum reformers are built with extended rails for taller practitioners." href="/blog/best-pilates-reformer-for-tall-people" category="Equipment" readTime="9 min read" date="May 2026" imageUrl="/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in Milan…" />
      </main>
      <Footer />
    </>
  );
}
