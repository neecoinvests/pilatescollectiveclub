import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "PersonalHour Pilates Reformers Reviewed (2026): Full Range",
  description: "PersonalHour Pilates' full reformer range reviewed — six real, verified Amazon listings from $1,415 to $2,690, compared for build quality, spring system, and value.",
  keywords: ["personal hour pilates review", "personalhour reformer review 2026", "personal hour pilates reformer", "is personal hour pilates good", "personal hour vs aeropilates", "personal hour pilates buy", "janet la force plus", "personalhour zous pro", "personalhour nour 2.0"],
  openGraph: {
    title: "PersonalHour Pilates (2026): Full Reformer Range, Honestly Reviewed",
    description: "PersonalHour Pilates reviewed — six genuine, live Amazon listings spanning $1,415 to $2,690.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/personalhour-pilates",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg", width: 1200, height: 630, alt: "PersonalHour Pilates reformer review — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PersonalHour Pilates (2026): Full Range Reviewed",
    description: "PersonalHour's wood-frame reformer range, honestly reviewed — six real listings.",
    images: ["https://pilatescollectiveclub.com/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/personalhour-pilates" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "PersonalHour Janet La Force Plus Reformer",
    price: "$2,555",
    verdict: "The brand's luxury flagship — foldable walnut frame with lifetime classes",
    description:
      "The Janet La Force Plus sits at the top of PersonalHour's real, currently-verified Amazon lineup. It's a foldable luxury reformer built on a walnut frame — wood rather than the aluminium construction most competitors use at this price point, which is the reason owners cite it for stability during demanding work. It's sold by PilatesUS (currently IN_STOCK_SCARCE, so availability can be tight) and includes the Pilates box, a jumpboard, and access to lifetime classes in the box. If you want the top of the PersonalHour range and are comfortable with the walnut-and-wood build, this is the model to buy.",
    affiliateUrl: "https://www.amazon.com/dp/B0GNDHZXZK?tag=pilatescollective-20",
    tag: "Flagship",
  },
  {
    rank: "02",
    name: "PersonalHour Nano Elite Plus Premium Thick Wood Studio Reformer",
    price: "$2,690",
    verdict: "The most heavy-duty build in the range — studio-grade thick-wood frame",
    description:
      "The Nano Elite Plus is PersonalHour's most heavily built reformer and, at $2,690, the most expensive model in the real Amazon lineup. It uses premium layered maple wood at 2 inches of frame thickness — double the standard thickness most home reformers use — paired with an aluminum chrome footbar and an adjustable headrest. It also has an enhanced rope holder system versus the entry models. Sold by PilatesUS with a lead time rather than immediate stock, so plan your order timing accordingly. This is the pick for practitioners who want studio-grade rigidity in a home reformer and are willing to wait for it.",
    affiliateUrl: "https://www.amazon.com/dp/B0DL4HSKG5?tag=pilatescollective-20",
    tag: "Most Heavy-Duty",
  },
  {
    rank: "03",
    name: "PersonalHour Luraush Reformer",
    price: "$1,897",
    verdict: "Aluminum-frame mid-tier with the fullest accessory bundle",
    description:
      "The Luraush is PersonalHour's aluminum-frame option, sitting in the middle of the real Amazon range at $1,897 and currently in stock through PilatesUS. It runs on six springs, has an adjustable headrest, and its padded jumpboard is rated to a 400lb capacity — worth noting if that's a consideration for your household. It ships with the most complete accessory bundle in the lineup: box, foot extender, foot strap, shoulder rests, and loops included, which meaningfully changes the value calculation versus buying those separately.",
    affiliateUrl: "https://www.amazon.com/dp/B0FH7MXR1R?tag=pilatescollective-20",
    tag: "Fullest Accessory Bundle",
  },
  {
    rank: "04",
    name: "PersonalHour Janet 2.0 Foldable Reformer",
    price: "$1,753.34",
    verdict: "The quick-fold pick for households short on storage space",
    description:
      "The Janet 2.0 is a step down in price from the Janet La Force Plus but keeps a quick-fold mechanism as its headline feature, which matters if floor space is at a premium between sessions. It's currently in stock through PilatesUS at $1,753.34 and includes professional-grade carriage wheels, six adjustable springs, and a full accessory set. If the walnut Janet La Force Plus is out of your budget but you still want the fold-and-store convenience associated with the Janet name, this is the real, currently-sold alternative within the same range.",
    affiliateUrl: "https://www.amazon.com/dp/B0FH7QTTF3?tag=pilatescollective-20",
    tag: "Best Fold-and-Store",
  },
  {
    rank: "05",
    name: "PersonalHour Nour 2.0 Advanced Studio-Quality Reformer",
    price: "$1,480",
    verdict: "Hand-finished wood at a mid-range price, with a lead time",
    description:
      "The Nour 2.0 is priced closer to the accessible end of the range at $1,480 but keeps some of the finishing detail associated with the pricier models — a hand-finished wood build, high-resilience PU wheels, and a wooden adjustable rope lock with 0.5-inch adjustable rope. It's sold by PilatesUS on a lead-time basis rather than immediate stock. It's a reasonable middle ground if you want real wood detailing without paying flagship pricing, as long as you can plan around the lead time.",
    affiliateUrl: "https://www.amazon.com/dp/B0DK5T3SDF?tag=pilatescollective-20",
    tag: "Best Mid-Range Value",
  },
  {
    rank: "06",
    name: "PersonalHour Zous Pro Foldable Reformer",
    price: "$1,415.51",
    verdict: "The most accessible entry point in the real PersonalHour range",
    description:
      "The Zous Pro is the least expensive model we could verify as a genuine, currently-sold PersonalHour listing on Amazon, at $1,415.51 through PilatesUS (currently IN_STOCK_SCARCE). It uses the same quick-fold mechanism as the Janet 2.0 and runs on six springs, with a full accessory set — jumpboard, box, foot strap, cushion, and loops — included. If your budget is the deciding factor and you still want a genuine PersonalHour wood-adjacent build rather than a generic import, this is the real entry point into the brand.",
    affiliateUrl: "https://www.amazon.com/dp/B0FH7GFNDX?tag=pilatescollective-20",
    tag: "Best Value / Entry Point",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "PersonalHour Pilates (2026): Full Reformer Range, Honestly Reviewed",
      "description": "PersonalHour Pilates' full reformer range reviewed — six genuine, live Amazon listings spanning $1,415 to $2,690, from the entry-level Zous Pro to the flagship Janet La Force Plus.",
      "url": "https://pilatescollectiveclub.com/blog/personalhour-pilates",
      "datePublished": "2026-05-21",
      "dateModified": "2026-09-23",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/personalhour-pilates" },
    },
    {
      "@type": "ItemList",
      "name": "PersonalHour Pilates Equipment (2026)",
      "numberOfItems": PRODUCTS.length,
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
        { "@type": "Question", "name": "Is PersonalHour a good reformer brand?", "acceptedAnswer": { "@type": "Answer", "text": "PersonalHour has built a reputation in the home reformer market for using solid wood in its frames rather than aluminium alone. We verified six genuine, currently-sold Amazon listings spanning $1,415.51 (Zous Pro) to $2,690 (Nano Elite Plus), all sold by PilatesUS, covering entry, mid-range, and luxury tiers." } },
        { "@type": "Question", "name": "Which PersonalHour reformer should I buy?", "acceptedAnswer": { "@type": "Answer", "text": "For most home buyers, the Luraush ($1,897) or Janet 2.0 ($1,753.34) offer the best balance of price and accessories. Budget-conscious buyers should look at the Zous Pro ($1,415.51). Buyers who want the most rigid, studio-grade build should look at the Nano Elite Plus ($2,690), and those who want the brand's signature walnut-frame flagship should choose the Janet La Force Plus ($2,555)." } },
        { "@type": "Question", "name": "Does PersonalHour make a foldable reformer?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Both the Janet 2.0 and the Zous Pro use a quick-fold mechanism, and the Janet La Force Plus is also foldable. Confirm exact folded dimensions on the current Amazon listing before buying if storage space is a constraint." } },
        { "@type": "Question", "name": "How does PersonalHour compare to Elina Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "PersonalHour has six confirmed, live Amazon listings across its range. We could not verify a live Amazon listing for any genuine Elina-branded reformer at the time of writing — Elina is sold direct or through dealers. If Amazon purchase with buyer protection matters to you, PersonalHour is the verified option between the two." } },
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
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 10 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              PersonalHour has built a following in the home reformer market by committing to solid wood in its frames rather than the aluminium or engineered composites most competitors use at this price tier. We verified six genuine, currently-sold Amazon listings across the full range, from the $1,415.51 Zous Pro up to the $2,690 Nano Elite Plus, all sold by PilatesUS. This guide covers the real range as it exists on Amazon today, rather than the single model an earlier version of this review was limited to.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg" alt="PersonalHour Janet La Force Plus wood-frame Pilates reformer reviewed" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-12 mt-4 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Brand overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: "Construction", value: "Wood-frame range, from aluminum-accented to solid walnut" },
                  { label: "Price range", value: "$1,415.51 – $2,690 across 6 verified Amazon listings" },
                  { label: "Best for", value: "Home practitioners who want a real, wood-forward reformer verified on Amazon" },
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Reformers · Reviewed</p>
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
                  { q: "Is PersonalHour a good reformer brand?", a: "PersonalHour has built a reputation in the home reformer market for its wood-forward construction. We verified six genuine, currently-sold Amazon listings spanning $1,415.51 to $2,690, all sold by PilatesUS, covering entry, mid-range, and luxury tiers." },
                  { q: "Which PersonalHour reformer should I buy?", a: "For most home buyers, the Luraush ($1,897) or Janet 2.0 ($1,753.34) offer the best balance of price and accessories. Budget-conscious buyers should look at the Zous Pro ($1,415.51). Buyers who want the most rigid, studio-grade build should choose the Nano Elite Plus ($2,690), and those who want the brand's signature walnut-frame flagship should pick the Janet La Force Plus ($2,555)." },
                  { q: "Does PersonalHour make a foldable reformer?", a: "Yes. The Janet 2.0 and Zous Pro both use a quick-fold mechanism, and the Janet La Force Plus also folds for storage. Confirm exact folded dimensions on the current Amazon listing before buying if storage space is tight." },
                  { q: "How does PersonalHour compare to Elina Pilates?", a: "PersonalHour has six confirmed, live Amazon listings across its range. We could not verify a live Amazon listing for any genuine Elina-branded reformer — Elina is sold direct or through dealers instead. If buying through Amazon matters to you, PersonalHour is the verified option between the two." },
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
