import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Bags (2026): Studio Totes & Carry-Alls Ranked",
  description: "The best bags for Pilates studio sessions — Lululemon, Alo Yoga, Manduka, and more tested for size, organisation, and everyday carry from studio to street.",
  keywords: ["best pilates bag", "pilates studio bag", "best bag for pilates class", "pilates tote bag", "pilates gym bag", "lululemon pilates bag", "alo yoga bag", "manduka bag", "best bag for reformer pilates", "pilates carry bag 2026"],
  openGraph: {
    title: "Best Pilates Bags (2026): Studio Totes & Carry-Alls Ranked",
    description: "The best bags for Pilates — tested for studio organisation and everyday carry.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-bag",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Bags — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Bags (2026)",
    description: "The best bags for Pilates — tested and ranked.",
    images: ["https://pilatescollectiveclub.com/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-bag" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Lululemon Everywhere Tote 29L",
    price: "From $98",
    verdict: "Best overall studio bag",
    description:
      "The Lululemon Everywhere Tote has become the de facto standard studio bag across boutique Pilates, and its dominance is justified. The 29-litre capacity comfortably holds a change of clothes, grip socks, water bottle, and full-size toiletries without feeling bulky. The structured base keeps the bag upright on studio benches and locker-room floors, an underappreciated feature when you're changing quickly between appointments. The internal organisation — a zip pocket, card slots, and a key clip — is genuinely thoughtful rather than decorative, and the smooth exterior fabric wipes clean easily after studio use. The dual-carry design transitions from hand to shoulder as needed.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+everywhere+tote+29l&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Alo Yoga Move Mat Tote",
    price: "From $88",
    verdict: "Best for mat carriers",
    description:
      "Alo's Move Mat Tote is the rare bag that solves the mat-carrying problem elegantly. External straps secure a rolled mat to the exterior of the bag, keeping your gear contained in a single carry rather than requiring a separate mat strap. The main compartment is spacious enough for a full studio kit including shoes and a change of clothes, and the interior organisation is sufficient for everyday carry items. The aesthetic is unmistakably Alo — clean, minimal, and appropriate for both studio and street. Note that this bag is best suited for mat Pilates practitioners; reformer-focused practitioners who don't travel with a mat may prefer a simpler tote.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+move+mat+tote+bag&tag=pilatescollective-20",
    tag: "Best Mat Carrier",
  },
  {
    rank: "03",
    name: "Manduka Go Play 2.0 Duffel",
    price: "From $78",
    verdict: "Best duffel for studio",
    description:
      "Manduka's Go Play 2.0 Duffel is purpose-built for studio-to-street carry. The main compartment is structured and spacious — large enough for a full change of clothes, towel, and accessories with room to spare — and the shoe compartment at the base keeps studio shoes separate from clean clothes and personal items. The duffel format distributes weight more evenly than a tote on longer commutes, and the padded shoulder strap makes it comfortable for 20-minute walks or transit journeys. The interior organisation includes multiple pockets and a key hook. Manduka's reputation for durability means this bag outlasts most fabric-only alternatives significantly.",
    affiliateUrl: "https://www.amazon.com/s?k=manduka+go+play+duffel+bag&tag=pilatescollective-20",
    tag: "Best Duffel",
  },
  {
    rank: "04",
    name: "Sweaty Betty Get It Together Bag",
    price: "From $65",
    verdict: "Best organised studio bag",
    description:
      "Sweaty Betty's Get It Together Bag earns its name through exceptional internal organisation. The layout includes dedicated compartments for wet gear, a waterproof internal lining, and enough structured pockets to keep grip socks, cards, phone, and studio essentials separated without digging. The capacity is moderate — better suited for practitioners who travel light to class rather than those carrying a full kit change — but the thoughtful organisation makes it faster to locate items in the dim lighting of a studio changing room. The exterior is water-resistant and maintains its structure well through regular use.",
    affiliateUrl: "https://www.amazon.com/s?k=sweaty+betty+studio+bag+tote&tag=pilatescollective-20",
    tag: "Best Organisation",
  },
  {
    rank: "05",
    name: "Calpak Luka Duffel Bag",
    price: "From $68",
    verdict: "Best convertible carry",
    description:
      "The Calpak Luka Duffel converts between a hand-carry duffel, a backpack, and a tote — a versatility that suits the varied commutes of urban studio-goers. The 20-litre capacity is on the moderate side but handles a complete Pilates studio kit without issue. The organisation is clean rather than elaborate, with a shoe pocket and two exterior slip pockets covering the essentials. The fabric is scratch-resistant and wipes clean, and the structured base keeps the bag off locker-room floors. The convertible strap system adds meaningful practical value for practitioners who walk to the studio, commute by transit, and then carry the bag to subsequent appointments.",
    affiliateUrl: "https://www.amazon.com/s?k=calpak+luka+duffel+bag&tag=pilatescollective-20",
    tag: "Best Convertible",
  },
  {
    rank: "06",
    name: "CRZ YOGA Lightweight Sports Tote",
    price: "From $29",
    verdict: "Best value studio bag",
    description:
      "CRZ YOGA's Sports Tote punches well above its price point for studio use. The capacity is generous for a budget tote, the interior organisation includes a zip pocket and a sleeve large enough for a tablet, and the fabric is water-resistant and easy to wipe down. The structured handles maintain their shape through repeated use rather than slouching like many budget totes. As a secondary bag for shorter sessions, a gym bag upgrade from a freebie tote, or a practical alternative while saving for a premium option, it consistently delivers more value than its price suggests.",
    affiliateUrl: "https://www.amazon.com/s?k=crz+yoga+sports+tote+bag+women&tag=pilatescollective-20",
    tag: "Best Value",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Bags (2026): Studio Totes & Carry-Alls Ranked",
      "description": "The best bags for Pilates studio sessions — tested for capacity, organisation, and studio-to-street carry.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-bag",
      "datePublished": "2026-05-21",
      "dateModified": "2026-05-21",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-bag" },
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Bags (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Bags", "item": "https://pilatescollectiveclub.com/blog/best-pilates-bag" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What size bag do I need for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "For a standard reformer or mat class, a 15–25 litre bag is sufficient to carry grip socks, a small towel, a change of clothes, and personal items. If you shower at the studio or commute directly from work, a 25–35 litre bag gives you the space for a full change of clothes and toiletries." } },
        { "@type": "Question", "name": "Do I need a separate mat bag for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Only if you practice mat Pilates and carry your own mat. Most reformer studios provide mats and equipment. If you attend mat classes or practice at home, a dedicated mat bag or a tote with external mat straps keeps your gear organised and your mat protected." } },
        { "@type": "Question", "name": "What features matter most in a Pilates studio bag?", "acceptedAnswer": { "@type": "Answer", "text": "A structured base (so it stands up in changing rooms), at least one wet compartment or waterproof lining, and enough pockets to keep grip socks and personal items separate. A key hook and a dedicated phone pocket prevent the frustrating bottom-of-bag search that's all too common in mid-session studio visits." } },
      ],
    },
  ],
};

export default function BestPilatesBagPage() {
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
              Best Pilates Bags<br /><span style={{ color: "#8b4a31" }}>(2026): Studio Totes Ranked</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 7 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              A good studio bag is one you barely notice — it holds everything, stays organised, and transitions from studio to street without announcing itself as gym kit. A bad one means tangled grip socks, a wet towel against clean clothes, and a ten-second locker-room excavation to find your card. These six bags have been selected for Pilates-specific use: the right capacity for a studio kit, the right organisation for changing quickly, and the durability to survive multiple sessions per week across years of practice.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" alt="Best bags for Pilates studio sessions" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Bags · Studio-Tested</p>
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
                  { q: "What size bag do I need for Pilates?", a: "For a standard reformer or mat class, a 15–25 litre bag is sufficient to carry grip socks, a small towel, a change of clothes, and personal items. If you shower at the studio or commute directly from work, a 25–35 litre bag gives you the space for a full change of clothes and toiletries." },
                  { q: "Do I need a separate mat bag for Pilates?", a: "Only if you practice mat Pilates and carry your own mat. Most reformer studios provide mats and equipment. If you attend mat classes or practice at home, a dedicated mat bag or a tote with external mat straps keeps your gear organised and your mat protected." },
                  { q: "What features matter most in a Pilates studio bag?", a: "A structured base (so it stands up in changing rooms), at least one wet compartment or waterproof lining, and enough pockets to keep grip socks and personal items separate. A key hook and a dedicated phone pocket prevent the frustrating bottom-of-bag search that's all too common in mid-session studio visits." },
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
                <ArticleCard title="Best Pilates Grip Socks" excerpt="The essential studio accessory — five options across every price point." href="/blog/best-pilates-grip-socks" category="Equipment" readTime="7 min read" date="May 2026" imageUrl="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" />
                <ArticleCard title="What to Wear to Pilates" excerpt="The complete guide to choosing the right clothes for studio and reformer classes." href="/blog/what-to-wear-to-pilates" category="Guide" readTime="6 min read" date="May 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
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
