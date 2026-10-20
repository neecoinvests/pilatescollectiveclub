import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import AffiliateNote from "@/components/AffiliateNote";
import QuickPicks from "@/components/QuickPicks";
import TopPick from "@/components/TopPick";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml, productItemList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Pilates Gifts for Him (2026)",
  description: "The best pilates gifts for men — from Lululemon ABC pants and Vuori joggers to Theragun recovery and Manduka mats. Gifts for husbands, boyfriends, and male practitioners.",
  keywords: [
    "best pilates gifts for him",
    "pilates gift ideas for men",
    "pilates gifts for boyfriend",
    "pilates gift for husband",
    "men's pilates gear gift",
    "pilates Christmas gift for men",
    "pilates birthday gift men",
    "pilates gift guide men 2026",
  ],
  openGraph: {
    title: "Best Pilates Gifts for Him (2026)",
    description: "The best pilates gifts for men — gear he'll actually use, from top brands that perform.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-gifts-for-him",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Gifts for Him 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Gifts for Him (2026)",
    description: "Pilates gifts for the man in your life who trains — practical, premium, and actually useful.",
    images: ["https://pilatescollectiveclub.com/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-gifts-for-him" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Lululemon ABC Pant (Classic Fit)",
    price: "$128",
    verdict: "The Best Men's Pilates Pant",
    description: "The Lululemon ABC pant is the men's activewear piece that converts sceptics — designed with a gusseted crotch for full range of motion, four-way stretch fabric, and a tailored silhouette that works on the reformer as well as in a meeting. Made from Warpstreme fabric, which is moisture-wicking, lightweight, and wrinkle-resistant. The flat waistband sits flush against the reformer carriage padding. Available in slim and classic fits, in neutral and seasonal colours. For a man who does pilates regularly, this is the gift that immediately becomes the pant he reaches for every class. Not sold on Amazon: this link goes to Lululemon's own site.",
    affiliateUrl: "https://shop.lululemon.com",
  },
  {
    rank: "02",
    name: "Vuori Ponto Performance Jogger",
    price: "$89",
    verdict: "Best Relaxed-Fit Training Pant",
    description: "Vuori is the activewear brand that the pilates and wellness community has quietly adopted for men who want quality without the Lululemon logo. The Ponto Jogger is their most refined piece — made from a four-way stretch French terry that's soft enough for mat work and structured enough to wear out of the studio. Tapered leg, hidden side pockets, and a waistband that stays put through every spinal articulation and footbar press. Available in Vuori's muted, earthy palette. A gift that earns its keep in his regular rotation. Not sold on Amazon: this link goes to Vuori's own site.",
    affiliateUrl: "https://vuoriclothing.com",
  },
  {
    rank: "03",
    name: "Theragun Elite (5th Gen)",
    price: "$399.00",
    verdict: "Best Recovery Gift for Men",
    description: "For a man who trains regularly — in pilates or otherwise — the Theragun Elite is the recovery tool that makes a genuine, immediately-felt difference. It reaches 16mm of amplitude at 1,750–2,400 RPM, penetrating deep enough to address the hip flexors, thoracic extensors, and shoulders that accumulate tension through reformer practice. Five attachments cover every muscle group from the glutes to the neck. 120-minute battery life, quieter operation than previous generations, and Bluetooth connectivity to the Therabody app for guided protocols. A premium gift he'll use daily.",
    affiliateUrl: "https://www.amazon.com/dp/B0C42NTLYC?tag=pilatescollective-20",
  },
  {
    rank: "04",
    name: "Manduka PRO Yoga & Pilates Mat",
    price: "$144.00",
    verdict: "Best Mat for Serious Practitioners",
    description: "The Manduka PRO is the professional standard in pilates and yoga mats — and one of the few pieces of studio equipment that men and women buy identically. At 6mm thick, it provides full joint protection for knees and spine during mat work; the closed-cell PVC surface grips without sticking, and the lifetime guarantee means it's the last mat he'll need to buy. Professional instructors buy this for themselves. For a man who is serious about his practice, it's the most impactful equipment upgrade available at this price.",
    affiliateUrl: "https://www.amazon.com/dp/B0066T7I54?tag=pilatescollective-20",
  },
  {
    rank: "05",
    name: "Hydro Flask 32oz Wide Mouth Water Bottle",
    price: "$44.70",
    verdict: "Best Everyday Gift",
    description: "The 32oz Hydro Flask is the water bottle that the serious training community has settled on — genuinely double-wall vacuum insulated, so water stays cold for 24 hours and hot drinks stay warm for 12. The 32oz wide mouth is the men's standard: large enough to cover a full class and a post-class stretch without needing a refill, with a wide opening that takes ice easily. The flex cap is simple, leak-proof, and secure in any bag. Available in a wide range of solid colours. A practical, premium gift that travels everywhere he does.",
    affiliateUrl: "https://www.amazon.com/dp/B0FJZHK6YQ?tag=pilatescollective-20",
  },
  {
    rank: "06",
    name: "TriggerPoint GRID Foam Roller",
    price: "$28.99",
    verdict: "Best Value Recovery Gift",
    description: "TriggerPoint is the foam roller brand that physical therapists prescribe and professional sports teams specify. The GRID's multi-density surface works harder than a uniform roller — three zone patterns that replicate the varying pressure of a therapist's hand, targeting the IT band, thoracic spine, and glutes that accumulate tension in pilates training. The hollow core supports up to 500 lbs and won't compress over time. At $36 it is the single best-value recovery gift in this category — he'll use it before and after every training session.",
    affiliateUrl: "https://www.amazon.com/dp/B0040EGNIU?tag=pilatescollective-20",
  },
];

const CRITERIA = [
  {
    heading: "Prioritise what he'll actually wear",
    body: "Men in pilates are often in whatever they grabbed from their workout drawer. The right gift is training pants that are genuinely built for pilates: four-way stretch, a gusseted fit, and a silhouette that looks intentional. Lululemon ABC and Vuori Ponto are the two brands worth trusting.",
  },
  {
    heading: "Recovery gifts land exceptionally well for men",
    body: "Men who train regularly often invest in performance but under-invest in recovery. A Theragun or TriggerPoint GRID isn't just equipment — it addresses a real gap. These are gifts he would eventually buy for himself but hasn't yet, which makes them uniquely appreciated.",
  },
  {
    heading: "Skip the generic and go brand-specific",
    body: "Generic resistance bands and foam rollers from unrecognised brands communicate the wrong thing. Theragun, Manduka, TriggerPoint, Lululemon, and Vuori are names that signal quality in training circles — they tell him you understand what he actually does.",
  },
  {
    heading: "Know whether he goes to a studio",
    body: "Studio practitioners need reformer-appropriate gear: fitted pants, a mat for home practice, a quality water bottle. Home practitioners need equipment: resistance bands, a mat, a foam roller. Ask or look at how he talks about his practice before deciding.",
  },
];

const FAQ = [
  {
    q: "What is the best pilates gift for a man?",
    a: "The Lululemon ABC Pant ($128) is the best pilates gift for a man — it is the standard men's pilates pant, loved for its range of motion, clean look, and premium fabric. For recovery, the Theragun Elite ($399) is the most impactful investment at a higher price point. At a more accessible budget, the TriggerPoint GRID Roller ($28.99) is the best value recovery gift available.",
  },
  {
    q: "What do men need for pilates?",
    a: "Men doing pilates need: fitted or tapered training pants (Lululemon ABC, Vuori Ponto), grip socks for reformer studios, a quality mat for home practice (Manduka PRO), and a water bottle. Recovery tools like foam rollers and percussion devices are highly appreciated as gifts because men who train hard often under-invest in recovery.",
  },
  {
    q: "Is Lululemon good for men's pilates?",
    a: "Yes — Lululemon ABC pants are the most recommended men's pilates pant by both instructors and regular practitioners. The Warpstreme fabric stretches in every direction for full pilates range of motion, and the gusseted construction prevents restriction during footwork and leg circles. The fit is tailored enough to look intentional in a studio setting.",
  },
  {
    q: "What is a good under-$50 pilates gift for a man?",
    a: "The TriggerPoint GRID Foam Roller ($28.99) is the best under-$50 pilates gift for a man — physical therapists recommend it, it addresses the thoracic spine, IT band, and hip flexors that accumulate tension in pilates, and the quality is obvious on first use. A Hydro Flask 32oz ($45) is the best non-equipment option at this budget.",
  },
];

const RELATED = [
  { title: "Best Pilates Equipment for Men", excerpt: "The complete guide to pilates gear for male practitioners.", href: "/blog/best-pilates-equipment-for-men", category: "Equipment", readTime: "11 min", imageUrl: "/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg" },
  { title: "Best Pilates Clothes for Men", excerpt: "The best activewear for men doing pilates — compared and ranked.", href: "/blog/best-pilates-clothes-for-men", category: "Clothing", readTime: "9 min", imageUrl: "/pictures/ahmet-kurt-0xn-8kRWOhE-unsplash.jpg" },
  { title: "Best Luxury Pilates Gifts", excerpt: "Investment-grade gifts for the serious practitioner.", href: "/blog/best-luxury-pilates-gifts", category: "Guide", readTime: "9 min", imageUrl: "/pictures/stitch-studio-bench-towels.png" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Gifts for Him (2026)",
      "description": "The best pilates gifts for men — from Lululemon ABC pants and Vuori joggers to Theragun recovery and Manduka mats.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-gifts-for-him",
      "image": "https://pilatescollectiveclub.com/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg",
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "datePublished": "2026-07-30",
      "dateModified": "2026-10-20",
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Gifts for Him",
      "numberOfItems": 6,
      "itemListElement": PRODUCTS.map((p, i) => ({ "@type": "ListItem", "position": i + 1, "name": p.name, "url": p.affiliateUrl })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Gifts for Him", "item": "https://pilatescollectiveclub.com/blog/best-pilates-gifts-for-him" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQ.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
  ],
};

const QP_NOTES = ["The Best Men's Pilates Pant", "Best Relaxed-Fit Training Pant", "Best Recovery Gift for Men", "Best Mat for Serious Practitioners", "Best Everyday Gift", "Best Value Recovery Gift"];

const ITEM_LIST = productItemList("Best Pilates Gifts for Him (2026)", PRODUCTS.filter((pr) => /amazon\.[a-z.]+\/dp\//.test(pr.affiliateUrl)).map((pr) => ({ name: pr.name, description: pr.description, price: pr.price, url: pr.affiliateUrl })));

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml({ "@context": "https://schema.org", ...ITEM_LIST }) }} />
      <Header />
      <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
            Best Pilates Gifts for Him
          </h1>
          <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Prices checked October 20, 2026 · 9 min read</p>
          <TopPick name={PRODUCTS[2].name} price={PRODUCTS[2].price} note={QP_NOTES[2]} url={PRODUCTS[2].affiliateUrl} />
          <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
          <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
            Men who do pilates tend to be particular about their gear — and they rarely buy the good stuff for themselves. This guide is built for the husband, boyfriend, or father who shows up to class in whatever he grabbed first, and deserves the Lululemon pants, the real foam roller, and the recovery tool he's been vaguely meaning to invest in. All picks are men's-specific or gender-neutral, from brands that have earned their place in serious training culture.
          </p>
        </div>
      </section>
      <section className="px-6" style={{ backgroundColor: "#fcf9f8" }}>
        <div className="max-w-5xl mx-auto">
          <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
            <Image src="/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg" alt="Best Pilates Gifts for Him" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
          </div>
        </div>
      </section>
      <section className="px-6 py-20 pcc-content-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">

          {/* Quick picks table */}
          <QuickPicks className="mb-6" picks={PRODUCTS.map((pr, i) => ({ name: pr.name, price: pr.price, url: pr.affiliateUrl, note: QP_NOTES[i] }))} />
          <AffiliateNote className="mb-14" />

          <div style={{ display: "flex", flexDirection: "column", gap: "52px" }}>
            {PRODUCTS.map((p) => (
              <div key={p.rank} style={{ borderTop: "1px solid #ede9e3", paddingTop: "40px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", marginBottom: "6px", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "13px", color: "#c5a882", minWidth: "24px" }}>{p.rank}</span>
                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: 400, color: "#1a1714", margin: 0 }}>{p.name}</h2>
                  </div>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "#c5a882", whiteSpace: "nowrap" }}>{p.price}</span>
                </div>
                <div style={{ paddingLeft: "40px" }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b4a31", display: "block", marginBottom: "12px" }}>{p.verdict}</span>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "#4a4540", lineHeight: 1.85, marginBottom: "20px" }}>{p.description}</p>
                  <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#ffffff", backgroundColor: "#0a0a0a", padding: "12px 24px", textDecoration: "none" }}>
                    Shop Now →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* How to choose */}
          <div style={{ marginTop: "72px", padding: "40px", backgroundColor: "#faf8f5", borderLeft: "3px solid #c5a882" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 400, color: "#1a1714", marginBottom: "28px", marginTop: 0 }}>How to choose the right pilates gift for him</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
              {CRITERIA.map((c) => (
                <div key={c.heading} style={{ backgroundColor: "#ffffff", padding: "20px", border: "1px solid #ede9e3" }}>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", color: "#1a1714", marginBottom: "8px", marginTop: 0 }}>{c.heading}</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "#6b6560", lineHeight: 1.75, margin: 0 }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div style={{ marginTop: "72px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", fontWeight: 400, color: "#1a1714", marginBottom: "32px" }}>Frequently Asked Questions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {FAQ.map((item) => (
                <div key={item.q} style={{ padding: "24px 28px", backgroundColor: "#faf8f5", border: "1px solid #ede9e3" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 400, color: "#1a1714", marginBottom: "10px", marginTop: 0 }}>{item.q}</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "#4a4540", lineHeight: 1.8, margin: 0 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "#9a9490", lineHeight: 1.7, marginTop: "64px", paddingTop: "24px", borderTop: "1px solid #ede9e3" }}>
            Pilates Collective Club participates in the Amazon Associates programme. Purchases through our links earn us a small commission at no additional cost to you. All recommendations are independently chosen.
          </p>
        </div>
      </section>
      <section className="px-6 pb-20 pcc-content-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b4a31", marginBottom: "28px" }}>More Gift Guides</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "24px" }}>
            {RELATED.map((a) => <ArticleCard key={a.href} title={a.title} excerpt={a.excerpt} href={a.href} category={a.category} readTime={a.readTime} imageUrl={a.imageUrl} />)}
          </div>
        </div>
      </section>
      <CTASection title="Find a Pilates Studio Near You" subtitle="Discover the best reformer studios in your city." />
      <Footer />
    </>
  );
}
