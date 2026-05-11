import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Grip Socks (2026): Studio-Tested and Ranked | Pilates Collective Club",
  description:
    "The best grip socks for Pilates, tested across reformer, mat, and barre classes. From ToeSox to Tavi Noir — honest reviews, sizing notes, and our top pick.",
};

const PRODUCTS = [
  {
    rank: "01",
    name: "ToeSox Half Toe Low Rise",
    price: "From $18",
    verdict: "Best overall grip sock",
    description:
      "ToeSox are the industry standard for good reason. The individual toe pockets allow your toes to splay naturally on the footbar and mat, improving proprioception and balance during footwork. The half-toe design means your actual toe tips are exposed, which most practitioners prefer for tactile feedback. The grip pattern extends across the full sole and up the heel — essential for exercises like elephant and down-stretch on the reformer.",
    affiliateUrl: "https://www.amazon.com/s?k=toesox+half+toe+low+rise+grip+socks&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Tavi Noir Nola Grip Sock",
    price: "From $22",
    verdict: "Best for reformer classes",
    description:
      "Tavi Noir's Nola is a studio favourite with a full-toe design and one of the most aggressive grip patterns on the market — small silicone dots covering the full sole and heel. The compression fit keeps the sock perfectly positioned during dynamic movements, and the bamboo-blend fabric is noticeably softer than standard grip sock materials. Preferred by practitioners who find individual toe pockets uncomfortable.",
    affiliateUrl: "https://www.amazon.com/s?k=tavi+noir+nola+grip+socks+pilates&tag=pilatescollective-20",
    tag: "Most Popular",
  },
  {
    rank: "03",
    name: "Shashi Loop Sock",
    price: "From $20",
    verdict: "Best for style-conscious practitioners",
    description:
      "Shashi grip socks have become a fixture of boutique studio culture — recognisable, well-made, and available in an enormous range of colours and prints. The grip pattern is reliable without being as aggressive as Tavi Noir, which some practitioners prefer for mat work where you want some slip for transitions. The loop detail at the ankle is distinctive and prevents the sock from sliding down during class.",
    affiliateUrl: "https://www.amazon.com/s?k=shashi+loop+grip+socks&tag=pilatescollective-20",
    tag: "Style Pick",
  },
  {
    rank: "04",
    name: "Bellarina Grip Socks",
    price: "From $14",
    verdict: "Best budget grip sock",
    description:
      "Bellarina occupies the upper end of the budget tier — meaningfully cheaper than ToeSox or Tavi Noir but with a grip pattern and fabric quality that holds up to regular studio use. The full-toe design is well-constructed, and the sizing is true-to-size. For practitioners who go through socks quickly or want a multi-pack for a lower per-pair cost, Bellarina is the strongest option in its price bracket.",
    affiliateUrl: "https://www.amazon.com/s?k=bellarina+grip+socks+pilates&tag=pilatescollective-20",
    tag: "Best Value",
  },
  {
    rank: "05",
    name: "Sticky Be Socks Be Grateful",
    price: "From $16",
    verdict: "Best for mat and barre",
    description:
      "Sticky Be Socks started in the yoga and barre community and their mat grip is exceptional — the dot pattern is denser than most reformer-focused socks, which makes them outstanding for standing, balancing, and any mat work where foot placement and lateral stability matter. Slightly less ideal for footbar use than individual-toe options, but among the best-feeling socks for studio mat classes.",
    affiliateUrl: "https://www.amazon.com/s?k=sticky+be+socks+grip&tag=pilatescollective-20",
    tag: "Mat & Barre",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Grip Socks (2026): Studio-Tested and Ranked",
      "description": "The best grip socks for Pilates, tested across reformer, mat, and barre classes. From ToeSox to Tavi Noir — honest reviews and our top pick.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-grip-socks",
      "datePublished": "2026-05-01",
      "dateModified": "2026-05-01",
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Grip Socks", "item": "https://pilatescollectiveclub.com/blog/best-pilates-grip-socks" },
      ],
    },
  ],
};

export default function BestGripSocksPage() {
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
              Best Pilates Grip Socks<br /><span style={{ color: "#8b4a31" }}>(2026): Tested & Ranked</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 7 min read</p>
            <div className="rounded-xl px-5 py-4 mb-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
              <p className="text-xs leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                <span className="font-semibold">Affiliate disclosure:</span> This article contains affiliate links. We earn a commission if you purchase through our links, at no extra cost to you.
              </p>
            </div>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Grip socks are required at virtually every reformer and mat Pilates studio — and for good reason. They prevent slipping on the footbar and carriage, protect the studio&apos;s equipment, and genuinely improve proprioception during footwork by allowing the foot to grip actively rather than slide passively. But not all grip socks are equal. This guide covers the five best options across every use case, price point, and preference.
            </p>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* What to look for */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What makes a grip sock worth buying</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "Grip pattern coverage", body: "The best grip socks cover the full sole and heel. A sparse dot pattern at the ball of the foot only is insufficient for reformer footwork." },
                  { heading: "Toe style", body: "Individual toe pockets (ToeSox) improve proprioception. Full-toe styles (Tavi Noir) are more comfortable for wide feet. Neither is objectively better — it&apos;s personal preference." },
                  { heading: "Fabric quality", body: "Look for cotton or bamboo blends that breathe and don&apos;t retain odour. Pure synthetic fabrics become unpleasant quickly in a studio environment." },
                  { heading: "Compression fit", body: "The sock must stay in place during dynamic movement. A loose grip sock that bunches or slides is both annoying and a safety issue on the carriage." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Products */}
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Grip Socks · Studio-Tested</p>
              <div className="space-y-10">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
                      </div>
                    </div>
                    <ProductCard
                      name={p.name}
                      description={p.description}
                      price={p.price}
                      affiliateUrl={p.affiliateUrl}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Care tips */}
            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>How to make grip socks last</h2>
              <ul className="space-y-3">
                {[
                  "Wash inside-out on a cold cycle. High temperatures degrade the silicone grip dots.",
                  "Air dry flat rather than tumble drying. Heat damages both the grip and the elastane that keeps the sock fitted.",
                  "Never iron over the grip dots.",
                  "Buy at least two pairs so you always have a fresh pair while one is drying.",
                  "Replace when the grip dots are more than 30% worn — compromised grip is not just annoying, it's a slip risk on a moving carriage.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold" style={{ color: "#8b4a31" }}>{i + 1}.</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Do I need grip socks for Pilates?", a: "For studio reformer classes, yes — most studios require them for hygiene and safety reasons. For home mat practice, they're optional, but many practitioners find they genuinely improve balance and foot connection during standing and mat exercises." },
                  { q: "Can I use yoga socks for Pilates?", a: "Yoga grip socks typically have a dot pattern only at the ball of the foot. This is insufficient for reformer footwork where the heel also needs grip on the footbar. Use Pilates-specific socks with full sole coverage for reformer classes." },
                  { q: "What size should I buy?", a: "Size true-to-foot for ToeSox and Tavi Noir. Shashi and Bellarina run slightly large — size down if you're between sizes. Most brands offer S/M (US W 5-8) and M/L (US W 8-11) as the two main options." },
                  { q: "How many pairs do I need?", a: "Two pairs minimum. If you practice three or more times per week, three pairs means you'll always have a fresh, dry pair available without rushing laundry." },
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
                <ArticleCard title="What to Wear to Pilates" excerpt="The complete guide to choosing the right clothes for studio and reformer classes." href="/blog/what-to-wear-to-pilates" category="Guide" readTime="6 min read" date="May 2026" />
                <ArticleCard title="Best Pilates Equipment for Home Practice" excerpt="Mats, resistance bands, rings, and reformer alternatives for your home setup." href="/blog/best-pilates-equipment-for-home-practice" category="Equipment" readTime="10 min read" date="May 2026" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in Amsterdam…" />
      </main>
      <Footer />
    </>
  );
}
