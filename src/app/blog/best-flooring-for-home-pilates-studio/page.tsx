import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Flooring for a Home Pilates Studio (2026)",
  description: "Home Pilates studio flooring compared — interlocking EVA foam tiles ranked by price, coverage and durability, including a heavier rubber-top option for equipment.",
  keywords: ["best flooring for home pilates studio", "pilates studio flooring", "home gym flooring pilates", "interlocking foam tiles pilates", "EVA foam floor tiles", "reformer flooring", "pilates floor mat large room", "home pilates room floor", "rubber top exercise mat", "pilates flooring 2026"],
  openGraph: {
    title: "Best Flooring for a Home Pilates Studio (2026)",
    description: "Interlocking EVA foam tiles compared by price, coverage and durability, plus a rubber-top option for equipment.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-flooring-for-home-pilates-studio",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-mats-corner-sunlit.png", width: 1200, height: 630, alt: "Best Flooring for a Home Pilates Studio — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Flooring for a Home Pilates Studio (2026)",
    description: "Interlocking EVA foam tiles compared for home Pilates rooms, from budget starter packs to full-room coverage.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-mats-corner-sunlit.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-flooring-for-home-pilates-studio" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "ProsourceFit Exercise Puzzle Mat (144 sq ft, 36 tiles)",
    price: "$139.99",
    verdict: "Best for covering a full room",
    description:
      "ProsourceFit is an established name in this category, and this set is sold directly by Amazon.com rather than a third-party marketplace listing. The 36-tile set covers 144 square feet in one purchase, which is enough to floor a genuinely large room without piecing together multiple smaller packs — a real advantage if you're doing the whole space at once rather than building it up over time. The tiles are half-inch EVA foam with interlocking edges, so no adhesive or professional installation is needed; they lift out individually if one gets damaged and come up entirely if you move. Half-inch foam is on the thinner side as EVA goes, so this is best suited to mat, floor and prop-based practice rather than a room with a reformer or other equipment sitting on it permanently.",
    affiliateUrl: "https://www.amazon.com/dp/B07YMZZ12Q?tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Haulcove EVA Foam Floor Tiles (18 pc)",
    price: "$22.49",
    verdict: "Best budget starter set",
    description:
      "The Haulcove set is the cheapest way onto this list and the obvious starting point if you're flooring a single corner rather than a whole room. Eighteen interlocking EVA foam tiles from Haulcove US give you a practical practice area for mat work without committing to a full-room budget. Because the tiles interlock, you can buy a second pack later and extend the coverage as the space you've given over to practice grows, rather than needing to plan the whole room out from day one.",
    affiliateUrl: "https://www.amazon.com/dp/B0GLQH4453?tag=pilatescollective-20",
    tag: "Best Budget Starter",
  },
  {
    rank: "03",
    name: "bemaxx EVA Interlocking Foam Floor Tiles",
    price: "$22.94",
    verdict: "Best budget pick",
    description:
      "At almost exactly the same price as the Haulcove set, the bemaxx tiles (sold by PLConcepts) are the alternative budget pick on this list — worth comparing if you want a second option to check finish, colour or tile size against before you buy, or if the Haulcove set happens to be out of stock. Like the other EVA foam tiles here, they interlock without adhesive and are a straightforward, low-cost way to cover a small practice area.",
    affiliateUrl: "https://www.amazon.com/dp/B019DZDM3O?tag=pilatescollective-20",
    tag: "Best Budget Pick",
  },
  {
    rank: "04",
    name: "Nazhura Home Gym Mat (12-pack, 48 sq ft)",
    price: "$39.95",
    verdict: "Best for mid-size rooms",
    description:
      "The Nazhura set sits between the small starter packs and the full-room ProsourceFit option. Twelve interlocking tiles from seller PEARSONS1979 cover 48 square feet, which is a sensible amount for a mid-size room without paying for far more coverage than you need. It's the pick for anyone who has measured their space and landed somewhere between 'one corner' and 'the whole room.'",
    affiliateUrl: "https://www.amazon.com/dp/B0DRSVXM1S?tag=pilatescollective-20",
    tag: "Best Mid-Size Room",
  },
  {
    rank: "05",
    name: "AIRHOP Exercise Equipment Mats (48 sq ft, rubber top)",
    price: "$119.99",
    verdict: "Best heavier-duty option",
    description:
      "AIRHOP's mats cover the same 48 square feet as the Nazhura set but are built differently — a rubber top over the tile rather than plain EVA foam. That construction is the reason to choose this over the cheaper foam-only options: a rubber surface resists compression and denting under sustained or concentrated weight far better than foam alone, which matters if a reformer or other apparatus is going to sit in the room. The higher price reflects that heavier-duty build rather than extra square footage, so this is the pick when durability under equipment matters more than covering the largest possible area for the least money.",
    affiliateUrl: "https://www.amazon.com/dp/B0CNG8MDWB?tag=pilatescollective-20",
    tag: "Best Heavy-Duty",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Flooring for a Home Pilates Studio (2026)",
      "description": "Interlocking EVA foam tiles compared for home Pilates studios by price, coverage and durability, including a heavier rubber-top option for equipment.",
      "url": "https://pilatescollectiveclub.com/blog/best-flooring-for-home-pilates-studio",
      "datePublished": "2026-09-09",
      "dateModified": "2026-09-24",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-mats-corner-sunlit.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-flooring-for-home-pilates-studio" },
    },
    {
      "@type": "ItemList",
      "name": "Best Flooring for a Home Pilates Studio (2026)",
      "numberOfItems": PRODUCTS.length,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9.]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Flooring for a Home Pilates Studio", "item": "https://pilatescollectiveclub.com/blog/best-flooring-for-home-pilates-studio" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Can interlocking foam tiles handle a reformer or other Pilates equipment?", "acceptedAnswer": { "@type": "Answer", "text": "Standard EVA foam tiles, like the ProsourceFit, Haulcove, bemaxx and Nazhura sets, aren't built for concentrated point loads and can dent under a reformer's feet or wheels over time. If equipment will live in the room, the AIRHOP rubber-top tiles are the better choice — the rubber surface resists compression far better than foam alone. For rooms used for mat, floor and prop work only, any of the pure-foam options are fine." } },
        { "@type": "Question", "name": "How much flooring do I actually need?", "acceptedAnswer": { "@type": "Answer", "text": "It depends entirely on the room. An 18-piece starter pack like the Haulcove set is enough for a single practice corner, a 12-pack such as the Nazhura set covers roughly 48 square feet — a mid-size room — and the ProsourceFit set's 144 square feet is built for covering a full room in one purchase. Measure your space in square feet first and add a little extra for trimming at the walls." } },
        { "@type": "Question", "name": "Do budget and premium interlocking tiles actually differ?", "acceptedAnswer": { "@type": "Answer", "text": "Among pure EVA foam tiles, the main differences are pack size and finish quality rather than dramatic performance gaps — the Haulcove and bemaxx sets are both genuinely budget options at a similar price point, while the ProsourceFit set costs more mainly because it covers far more square footage in one purchase, not because the tile itself is a different category of product. The real step up in durability comes from switching to a rubber-top tile like AIRHOP, which is built to handle heavier use than any of the foam-only options." } },
      ],
    },
  ],
};

export default function BestFlooringForHomePilatesStudioPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Home Studio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Flooring for a<br /><span style={{ color: "#8b4a31" }}>Home Pilates Studio</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Flooring is the decision people make last and regret first. Buy too little coverage and you&apos;re stuck taping tiles together at the edge of your mat; buy the wrong type and equipment leaves permanent dents within weeks. Interlocking EVA foam tiles are the practical, do-it-yourself answer for almost every home Pilates room — no adhesive, no professional installation, and tiles that lift out individually if one gets damaged or come up entirely when you move. The real decisions are how much square footage you need and whether anything heavier than a mat will sit on the floor. These five options span a small budget starter pack up to full-room coverage, plus a heavier rubber-top tile built to take equipment.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-mats-corner-sunlit.png" alt="A sunlit home Pilates corner with mats laid out over studio flooring" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Options · Ranked</p>
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

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Measure and check before you order</h2>
              <ul className="space-y-3">
                {[
                  "Measure your room in square feet before ordering — coverage varies hugely between these options, from an 18-piece starter pack up to the 144-square-foot full-room set.",
                  "Add roughly 10 percent to your tile count for cuts and trimming at walls and doorways — interlocking tiles rarely divide evenly into a room's exact dimensions.",
                  "If a reformer or other apparatus will use the room, go for the rubber-top AIRHOP tiles rather than pure EVA foam — concentrated point loads dent standard foam faster.",
                  "Confirm the subfloor is reasonably level. Interlocking tiles conform to an uneven floor rather than correcting it.",
                  "Look for low-VOC or certified products where listed. Budget EVA foam can smell strongly when new, so air the room out for a few days before using it.",
                  "If you're renting, this is one of the few flooring types that needs no adhesive at all — tiles lift up cleanly and travel with you when you move.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold" style={{ color: "#8b4a31" }}>⚠</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Can interlocking foam tiles handle a reformer or other Pilates equipment?", a: "Standard EVA foam tiles, like the ProsourceFit, Haulcove, bemaxx and Nazhura sets, aren't built for concentrated point loads and can dent under a reformer's feet or wheels over time. If equipment will live in the room, the AIRHOP rubber-top tiles are the better choice — the rubber surface resists compression far better than foam alone. For rooms used for mat, floor and prop work only, any of the pure-foam options are fine." },
                  { q: "How much flooring do I actually need?", a: "It depends entirely on the room. An 18-piece starter pack like the Haulcove set is enough for a single practice corner, a 12-pack such as the Nazhura set covers roughly 48 square feet — a mid-size room — and the ProsourceFit set's 144 square feet is built for covering a full room in one purchase. Measure your space in square feet first and add a little extra for trimming at the walls." },
                  { q: "Do budget and premium interlocking tiles actually differ?", a: "Among pure EVA foam tiles, the main differences are pack size and finish quality rather than dramatic performance gaps — the Haulcove and bemaxx sets are both genuinely budget options at a similar price point, while the ProsourceFit set costs more mainly because it covers far more square footage in one purchase, not because the tile itself is a different category of product. The real step up in durability comes from switching to a rubber-top tile like AIRHOP, which is built to handle heavier use than any of the foam-only options." },
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
                <ArticleCard title="Home Pilates Studio Setup" excerpt="Space, flooring, equipment and lighting — how to plan a home studio that actually gets used." href="/blog/home-pilates-studio-setup" category="Guide" readTime="11 min read" date="June 2026" imageUrl="/pictures/stitch-studio-open-window.png" />
                <ArticleCard title="Best Pilates Reformer for Small Spaces" excerpt="Foldable and compact machines that fit a flat without dominating it." href="/blog/best-pilates-reformer-for-small-spaces" category="Equipment" readTime="10 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-sunlit-minimal.png" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in New York..." />
      </main>
      <Footer />
    </>
  );
}
