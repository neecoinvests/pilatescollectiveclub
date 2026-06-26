import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Tote Bags for Women (2026): Studio Totes Ranked | Pilates Collective Club",
  description: "The best Pilates tote bags for women — reviewed for capacity, structure, mat carry, and studio-to-street style in 2026.",
  keywords: ["best pilates tote bag", "pilates tote bag women 2026", "best tote bag for pilates", "pilates studio tote", "womens pilates bag", "best yoga tote bag", "pilates tote review", "lululemon pilates tote"],
  openGraph: {
    title: "Best Pilates Tote Bags for Women (2026)",
    description: "The best Pilates tote bags for women — tested for studio use and everyday carry.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-tote-bag",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Tote Bags for Women — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Tote Bags for Women (2026)",
    description: "The best Pilates tote bags for women — tested and ranked.",
    images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-tote-bag" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Lululemon Everywhere Tote 22L",
    price: "From $88",
    verdict: "Best overall Pilates tote",
    description:
      "The Lululemon Everywhere Tote 22L has become the benchmark against which other Pilates totes are judged — and for good reason. The 22-litre capacity is the sweet spot for a studio kit: generous enough for grip socks, a change of clothes, a water bottle, and personal items, but compact enough to sit neatly under a bench without dominating the changing room. The structured base keeps the bag upright rather than collapsing in a heap, and the interior organisation — zip pocket, card slots, key clip — is genuinely functional rather than decorative. The smooth exterior wipes clean after studio use, and the dual-carry handles transition naturally from hand to shoulder without awkwardness.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+everywhere+tote+22l&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Alo Yoga Accolade Tote",
    price: "From $98",
    verdict: "Best premium Pilates tote",
    description:
      "Alo's Accolade Tote occupies the premium end of the Pilates tote market and justifies its price through a combination of materials quality, thoughtful organisation, and unmistakable aesthetic. The bag is structured enough to stand on its own, with a reinforced base that survives daily studio use without losing its shape. Interior pockets are positioned logically for studio use — phone and cards accessible at the top, a deeper compartment for clothes and shoes below. The exterior fabric is water-resistant and maintains its appearance through repeated use. For practitioners who want a bag that reads as polished in a boardroom as it does in a studio changing room, the Accolade is the natural choice.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+accolade+tote+bag&tag=pilatescollective-20",
    tag: "Best Premium",
  },
  {
    rank: "03",
    name: "CRZ YOGA Lightweight Tote Bag",
    price: "From $29",
    verdict: "Best value Pilates tote",
    description:
      "CRZ YOGA's Lightweight Tote Bag consistently outperforms its price bracket for studio use. The capacity is generous for a budget option, and the water-resistant fabric wipes clean after class without special treatment. Interior organisation includes a zip pocket large enough for a phone and a main compartment that fits a full studio kit without being crammed. The handles are reinforced and maintain their shape through regular use rather than stretching and distorting over time. As a first studio bag, a secondary bag for lighter sessions, or a budget alternative while saving for a premium tote, it delivers far more value than its price suggests.",
    affiliateUrl: "https://www.amazon.com/s?k=crz+yoga+lightweight+tote+bag+women&tag=pilatescollective-20",
    tag: "Best Value",
  },
  {
    rank: "04",
    name: "Manduka Go Steady 3.0 Tote",
    price: "From $72",
    verdict: "Best structured tote",
    description:
      "Manduka's Go Steady 3.0 Tote is built for practitioners who want their bag to behave like a proper piece of kit rather than a soft fashion accessory. The structured design holds its shape fully loaded or empty, with a reinforced base that stays firm on locker-room floors and studio benches. The organisation is comprehensive — multiple internal pockets, a secure zip closure, and a dedicated exterior slip pocket for items that need to be accessed without opening the main compartment. The durable fabric is consistent with Manduka's reputation for longevity, and the bag improves with use rather than degrading over time.",
    affiliateUrl: "https://www.amazon.com/s?k=manduka+go+steady+tote+bag&tag=pilatescollective-20",
    tag: "Best Structured",
  },
  {
    rank: "05",
    name: "Vuori Ripstop Tote",
    price: "From $68",
    verdict: "Best minimalist tote",
    description:
      "Vuori's Ripstop Tote strips the studio bag back to its essentials — a clean silhouette, durable ripstop nylon, and just enough organisation to function without visual clutter. The result is a bag that looks equally appropriate in a studio, a café, and a weekend market, which suits practitioners whose tote doubles as their daily carry. The capacity is focused rather than expansive, which keeps the bag light when partially loaded — a meaningful advantage for practitioners who walk or cycle to class. The ripstop construction is more durable than standard nylon and resists the snags and abrasions that come with repeated locker-room use.",
    affiliateUrl: "https://www.amazon.com/s?k=vuori+ripstop+tote+bag&tag=pilatescollective-20",
    tag: "Best Minimalist",
  },
  {
    rank: "06",
    name: "Athleta Studio Tote Bag",
    price: "From $58",
    verdict: "Best sporty tote",
    description:
      "Athleta's Studio Tote leans into its athletic identity with a design that prioritises function over form without sacrificing style. The capacity is generous, the interior organisation includes a dedicated wet pocket for damp items, and the exterior material handles the wear of daily studio commutes without showing it. The bag's sporty aesthetic is well-matched to practitioners who attend high-intensity reformer or mat classes and want their bag to reflect that energy rather than trying to pass as a fashion tote. The price-to-feature ratio is strong for a mid-market option, and Athleta's quality control is consistent across their bag range.",
    affiliateUrl: "https://www.amazon.com/s?k=athleta+studio+tote+bag&tag=pilatescollective-20",
    tag: "Best Sporty",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Tote Bags for Women (2026)",
      "description": "The best Pilates tote bags for women — reviewed for capacity, structure, mat carry, and studio-to-street style.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-tote-bag",
      "datePublished": "2026-06-01",
      "dateModified": "2026-06-01",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-tote-bag" },
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Tote Bags for Women (2026)",
      "numberOfItems": 6,
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
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Tote Bags", "item": "https://pilatescollectiveclub.com/blog/best-pilates-tote-bag" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What size tote bag do I need for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "A 15–25 litre tote is ideal for most Pilates sessions. This gives you room for grip socks, a small towel, a change of clothes, and personal items without the bag becoming unwieldy. If you shower at the studio or head somewhere after class, lean toward the larger end of that range." } },
        { "@type": "Question", "name": "What should I look for in a Pilates tote bag?", "acceptedAnswer": { "@type": "Answer", "text": "A structured base so the bag stands upright in changing rooms, at least one interior zip pocket for valuables, water-resistant exterior fabric for easy wiping after class, and dual-carry handles that are comfortable both in hand and over the shoulder. A key clip prevents the bottom-of-bag search that's common after a class." } },
        { "@type": "Question", "name": "Can a tote bag fit a Pilates mat?", "acceptedAnswer": { "@type": "Answer", "text": "Standard tote bags are not designed to carry a rolled Pilates mat — mats are typically too long to fit inside a tote. If you carry your own mat to class, look for a tote with external mat straps, or use a dedicated mat bag or carrier alongside your tote." } },
      ],
    },
  ],
};

export default function BestPilatesToteBagPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Accessories</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Tote Bags<br /><span style={{ color: "#8b4a31" }}>for Women (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 7 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The right tote bag for Pilates is the one you stop noticing — it holds everything you need, stays organised through a rushed post-class change, and looks presentable enough to take from studio to wherever your day takes you next. The wrong one means a damp towel against your clean clothes and a two-minute excavation to find your keys in the lobby. These six tote bags have been chosen specifically for Pilates use: the right capacity for a studio kit, enough organisation to matter, and the durability to survive five sessions a week over years of practice.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" alt="Best Pilates tote bags for women" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-10 mt-4 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Totes · Studio-Tested</p>
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
                  { q: "What size tote bag do I need for Pilates?", a: "A 15–25 litre tote is ideal for most Pilates sessions. This gives you room for grip socks, a small towel, a change of clothes, and personal items without the bag becoming unwieldy. If you shower at the studio or head somewhere after class, lean toward the larger end of that range." },
                  { q: "What should I look for in a Pilates tote bag?", a: "A structured base so the bag stands upright in changing rooms, at least one interior zip pocket for valuables, water-resistant exterior fabric for easy wiping after class, and dual-carry handles that are comfortable both in hand and over the shoulder. A key clip prevents the bottom-of-bag search that's common after a class." },
                  { q: "Can a tote bag fit a Pilates mat?", a: "Standard tote bags are not designed to carry a rolled Pilates mat — mats are typically too long to fit inside a tote. If you carry your own mat to class, look for a tote with external mat straps, or use a dedicated mat bag or carrier alongside your tote." },
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
                <ArticleCard title="Best Pilates Bags (2026)" excerpt="Studio totes, duffels, and mat carriers — the complete guide for every type of practitioner." href="/blog/best-pilates-bag" category="Equipment" readTime="7 min read" date="May 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
                <ArticleCard title="Best Pilates Grip Socks" excerpt="The essential studio accessory — five options across every price point." href="/blog/best-pilates-grip-socks" category="Equipment" readTime="7 min read" date="May 2026" imageUrl="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in Sydney…" />
      </main>
      <Footer />
    </>
  );
}
