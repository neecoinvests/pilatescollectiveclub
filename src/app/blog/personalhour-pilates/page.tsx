import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Personal Hour Pilates Reformer Review (2026) | Pilates Collective Club",
  description: "Personal Hour Pilates reformer reviewed — build quality, spring system, carriage glide, and honest value assessment for home practitioners on a budget.",
  keywords: ["personal hour pilates review", "personalhour reformer review 2026", "personal hour pilates reformer", "is personal hour pilates good", "personal hour vs aeropilates", "personal hour pilates buy"],
  openGraph: {
    title: "PersonalHour Pilates (2026): Janet Elite & Zous Pro Reviewed",
    description: "PersonalHour Pilates reviewed — solid oak reformers for advanced home practitioners.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/personalhour-pilates",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg", width: 1200, height: 630, alt: "PersonalHour Pilates reformer review — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PersonalHour Pilates (2026): Janet Elite & Zous Pro",
    description: "PersonalHour solid oak wood reformers reviewed honestly.",
    images: ["https://pilatescollectiveclub.com/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/personalhour-pilates" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "PersonalHour Janet Elite Plus Reformer",
    price: "From $2,499",
    verdict: "Best PersonalHour reformer overall",
    description:
      "The Janet Elite Plus is PersonalHour's flagship reformer and the product most responsible for the brand's rapid growth in the premium home market. The most immediately distinctive feature is the construction: solid oak wood rather than the aluminium or MDF used by most competitors at this price point. The weight and rigidity of the oak frame eliminates the subtle flex that lighter reformers develop during high-intensity sequences, giving the Janet Elite Plus a stability during advanced athletic work that mid-range aluminium machines cannot match. The five-spring system uses industry-standard colour-coded springs, and the carriage's sealed bearing system provides a smooth, quiet glide. The extended carriage specification accommodates practitioners up to 6'3\". The vertical fold mechanism stores the machine in a footprint approximately half its operational width — a genuine space solution without the structural compromise that cheaper folding mechanisms introduce.",
    affiliateUrl: "https://www.amazon.com/s?k=personalhour+janet+elite+plus+pilates+reformer&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "PersonalHour Zous Pro Reformer",
    price: "From $1,899",
    verdict: "Best PersonalHour for value",
    description:
      "The Zous Pro is PersonalHour's mid-range reformer — built to the same oak-first construction philosophy as the Janet Elite Plus but at a lower specification and price point. The solid oak frame is retained, giving the Zous Pro a weight and stability that aluminium competitors at this price cannot match, and the five-spring system covers the same resistance range as the flagship. The primary differences from the Janet Elite Plus are footbar adjustment positions (two versus three), carriage padding density, and the absence of the Elite's refined vertical fold mechanism — the Zous Pro folds but with a slightly more manual process. For practitioners who want oak-frame stability and genuine build quality without the full Janet Elite Plus investment, the Zous Pro is a strong choice.",
    affiliateUrl: "https://www.amazon.com/s?k=personalhour+zous+pro+pilates+reformer&tag=pilatescollective-20",
    tag: "Best Value",
  },
  {
    rank: "03",
    name: "PersonalHour Janet Elite Plus with Tower",
    price: "From $3,299",
    verdict: "Best complete PersonalHour setup",
    description:
      "The Janet Elite Plus with tower bundle adds PersonalHour's integrated tower attachment to the flagship reformer, creating a complete home apparatus in a single footprint. The tower includes a push-through bar, arm springs, leg springs, and a roll-down bar — covering the core tower exercises that extend reformer practice into a more comprehensive full-body apparatus system. The oak frame of the Janet Elite Plus extends into the tower structure, maintaining the aesthetic consistency of the whole unit. For practitioners building a dedicated home studio around PersonalHour's oak-forward aesthetic, the tower bundle provides the best value entry point to a complete apparatus setup.",
    affiliateUrl: "https://www.amazon.com/s?k=personalhour+janet+elite+tower+pilates&tag=pilatescollective-20",
    tag: "Complete Setup",
  },
  {
    rank: "04",
    name: "PersonalHour Pilates Box Set",
    price: "From $149",
    verdict: "Essential accessory",
    description:
      "The PersonalHour Box Set is the most important accessory purchase for any PersonalHour reformer owner. The long box and short box unlock the short-box series, long-box kneeling and prone exercises, and the transition between supine and seated work that characterises intermediate and advanced programming. PersonalHour's box set is engineered to match the carriage dimensions of the Janet Elite Plus and Zous Pro specifically — the fit is precise and the construction uses the same oak accents as the reformer frame. The boxes are sold as a matched pair and store neatly on the reformer platform when not in use.",
    affiliateUrl: "https://www.amazon.com/s?k=personalhour+pilates+box+set&tag=pilatescollective-20",
    tag: "Must-Have Accessory",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "PersonalHour Pilates (2026): Janet Elite & Zous Pro Reviewed",
      "description": "PersonalHour Pilates reviewed — the Janet Elite Plus and Zous Pro solid oak reformers tested for advanced home practitioners.",
      "url": "https://pilatescollectiveclub.com/blog/personalhour-pilates",
      "datePublished": "2026-05-21",
      "dateModified": "2026-05-21",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/personalhour-pilates" },
    },
    {
      "@type": "ItemList",
      "name": "PersonalHour Pilates Equipment (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "PersonalHour Pilates Review", "item": "https://pilatescollectiveclub.com/blog/personalhour-pilates" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is PersonalHour a good reformer brand?", "acceptedAnswer": { "@type": "Answer", "text": "PersonalHour has established a strong reputation in the premium home reformer market, particularly for their use of solid oak wood construction. The Janet Elite Plus is consistently rated highly by practitioners who prioritise build solidity and stability for advanced athletic work. The brand is newer than Balanced Body or Merrithew but has grown rapidly based on the quality of its hardware." } },
        { "@type": "Question", "name": "How does PersonalHour compare to Elina Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Both brands use wood construction for aesthetic and structural reasons, but PersonalHour uses solid oak while Elina uses engineered wood composites and aluminium. PersonalHour machines are heavier and more stable; Elina machines are lighter and easier to move. Both brands are targeted at the home studio market and occupy similar price points." } },
        { "@type": "Question", "name": "Does the PersonalHour reformer fold?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — the Janet Elite Plus and Zous Pro both fold for storage. The Janet Elite Plus features a refined vertical fold mechanism that reduces the operational footprint by approximately half. Despite the folding mechanism, the machines maintain full stability during use — the oak frame's weight prevents any movement during advanced sequences." } },
        { "@type": "Question", "name": "Is PersonalHour good for tall people?", "acceptedAnswer": { "@type": "Answer", "text": "The Janet Elite Plus features an extended carriage specification that accommodates practitioners up to approximately 6'3\" through the full reformer repertoire. The extended frame is one of the brand's intentional design features, alongside the oak construction, positioning PersonalHour for athletes and taller practitioners who need more carriage travel than standard reformers provide." } },
      ],
    },
  ],
};

export default function PersonalHourPilatesPage() {
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
              PersonalHour Pilates<br /><span style={{ color: "#8b4a31" }}>(2026): Equipment Reviewed</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              PersonalHour has carved out a fast-growing position in the premium home reformer market by committing to solid oak wood construction when most competitors at this price tier use aluminium or engineered composites. The result is a reformer that combines the stability and aesthetic warmth of real wood with smart engineering for home use — folding mechanisms that maintain full stability during advanced practice, extended carriage frames for taller practitioners, and a premium finish that makes the machine appropriate for a living room as much as a studio. The Janet Elite Plus in particular has become a reference point for practitioners who want serious performance with furniture-grade design.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg" alt="PersonalHour solid oak Pilates reformers — Janet Elite Plus and Zous Pro reviewed" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-12 mt-4 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Brand overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: "Construction", value: "Solid oak wood frame" },
                  { label: "Resistance type", value: "Spring-based (5 springs)" },
                  { label: "Best for", value: "Advanced home practitioners, tall users, aesthetic-first buyers" },
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
                  { q: "Is PersonalHour a good reformer brand?", a: "PersonalHour has established a strong reputation in the premium home reformer market, particularly for their use of solid oak wood construction. The Janet Elite Plus is consistently rated highly by practitioners who prioritise build solidity and stability for advanced athletic work." },
                  { q: "How does PersonalHour compare to Elina Pilates?", a: "Both brands use wood construction, but PersonalHour uses solid oak while Elina uses engineered composites and aluminium. PersonalHour machines are heavier and more stable; Elina machines are lighter and easier to move. Both target the home studio market at similar price points." },
                  { q: "Does the PersonalHour reformer fold?", a: "Yes — the Janet Elite Plus and Zous Pro both fold for storage. The Janet Elite Plus features a refined vertical fold mechanism that reduces the operational footprint by approximately half. Despite folding, the machines maintain full stability during use — the oak frame's weight prevents movement during advanced sequences." },
                  { q: "Is PersonalHour good for tall people?", a: "The Janet Elite Plus features an extended carriage specification that accommodates practitioners up to approximately 6'3\" through the full reformer repertoire. The extended frame is one of the brand's intentional design features, positioning PersonalHour for athletes and taller practitioners." },
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
                <ArticleCard title="Elina Pilates Review" excerpt="Another wood-construction brand at a similar price — compared honestly." href="/blog/elina-pilates" category="Brand Guide" readTime="10 min read" date="May 2026" imageUrl="/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg" />
                <ArticleCard title="Best Pilates Reformers for Tall People" excerpt="Extended carriage options for practitioners over 6 feet." href="/blog/best-pilates-reformer-for-tall-people" category="Equipment" readTime="9 min read" date="May 2026" imageUrl="/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg" />
                <ArticleCard title="Best Premium Pilates Reformers" excerpt="How PersonalHour compares against Elina, Peak, and Balanced Body at the premium tier." href="/blog/best-premium-pilates-reformer" category="Equipment" readTime="11 min read" date="May 2026" imageUrl="/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg" />
                <ArticleCard title="Best Studio Pilates Reformers" excerpt="Professional-grade reformers for studio owners — including high-spec Asian-manufactured machines." href="/blog/best-studio-pilates-reformers" category="Equipment" readTime="14 min read" date="May 2026" imageUrl="/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in Dubai…" />
      </main>
      <Footer />
    </>
  );
}
