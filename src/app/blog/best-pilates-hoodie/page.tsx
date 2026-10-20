import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import QuickPicks from "@/components/QuickPicks";
import TopPick from "@/components/TopPick";
import AffiliateNote from "@/components/AffiliateNote";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml, productItemList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Pilates Hoodies & Warm-Up Jackets (2026)",
  description: "The best hoodies and warm-up jackets for Pilates, compared on warmth, freedom of movement and studio style, with picks from Lululemon, Alo, Vuori and more.",
  keywords: [
    "best pilates hoodie",
    "best warm up jacket pilates",
    "pilates hoodie women",
    "best sweatshirt for pilates",
    "pilates zip up jacket",
    "best cover up after pilates",
    "pilates studio hoodie 2026",
    "best hoodie lagree pilates",
  ],
  openGraph: {
    title: "Best Pilates Hoodies & Warm-Up Jackets (2026)",
    description: "The best hoodies and warm-up jackets for Pilates — compared on warmth, movement freedom, and studio style.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-hoodie",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Hoodies 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Hoodies & Warm-Up Jackets (2026)",
    description: "The best hoodies and warm-up jackets for Pilates — compared on warmth, movement freedom, and studio style.",
    images: ["https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-hoodie" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Lululemon Scuba Oversized Half-Zip Hoodie",
    price: "$118",
    verdict: "Best Overall",
    description: "The Lululemon Scuba is the most-recognised hoodie in the global Pilates community. The French terry fabric is soft enough to wear against bare skin and warm enough for cold studios, pre-class warm-ups, and post-class cool-downs. The oversized fit layers easily over any Pilates outfit. The half-zip makes removal easy between exercises without needing to fully undress. Not sold on Amazon: this link goes to Lululemon's own site.",
    affiliateUrl: "https://shop.lululemon.com",
    tag: "Top Pick",
  },
  {
    rank: "02",
    name: "Alo Yoga Muse Sweatshirt",
    price: "$114",
    verdict: "Best Premium",
    description: "Alo's Muse Sweatshirt has become a studio staple for practitioners who want their warm-up layer to look as considered as their workout kit. The heavyweight French terry drapes beautifully and the dropped shoulders allow complete arm mobility for warm-up stretches. A crossover piece that transitions from studio to daily wear without looking like gym kit. Not sold on Amazon: this link goes to Alo Yoga's own site.",
    affiliateUrl: "https://www.aloyoga.com",
    tag: "Premium",
  },
  {
    rank: "03",
    name: "Vuori Halo Performance Hoodie",
    price: "$89",
    verdict: "Best Performance Hoodie",
    description: "Vuori's Halo Performance Hoodie bridges technical and lifestyle wear better than almost any other option. The CloudKnit fabric is moisture-wicking, quick-drying, and soft against the skin — meaning you can keep it on through your entire session if the studio is cool. The athletic-tapered silhouette doesn't bunch during reformer exercises or restrict shoulder movement. Not sold on Amazon: this link goes to Vuori's own site.",
    affiliateUrl: "https://vuoriclothing.com",
    tag: "Best Performance",
  },
  {
    rank: "04",
    name: "Gymshark Crest Hoodie",
    price: "$60",
    verdict: "Best Value",
    description: "The Gymshark Crest Hoodie is the most straightforward, no-nonsense option on this list. The brushed-back fleece interior is genuinely warm, the kangaroo pocket is functional, and the relaxed fit accommodates layers underneath without feeling sloppy. Excellent durability at $60 — a reliable pick for practitioners who need a warm-up layer without the premium price tag. Not sold on Amazon: this link goes to Gymshark's own site.",
    affiliateUrl: "https://www.gymshark.com",
    tag: "Best Value",
  },
  {
    rank: "05",
    name: "Girlfriend Collective Restored Fleece Hoodie",
    price: "$78",
    verdict: "Best Sustainable",
    description: "Made from 100% recycled post-consumer plastic bottles, the Girlfriend Collective Restored Fleece is the most environmentally responsible warm-up layer on this list. The fleece is soft, pill-resistant, and comes in an inclusive size range. Fair Trade certified. For practitioners who want their values reflected in every garment they own.",
    affiliateUrl: "https://www.amazon.com/s?k=girlfriend+collective+restored+fleece+hoodie&tag=pilatescollective-20",
    tag: "Eco Choice",
  },
  {
    rank: "06",
    name: "Amazon Essentials Full-Zip Fleece Hoodie",
    price: "$15.50",
    verdict: "Best Budget",
    description: "At $15.50, Amazon's Essentials Full-Zip Fleece Hoodie is the most accessible warm-up option on this list. The full-zip design makes layering and removal effortless, the fleece is adequately warm for most studio temperatures, and the classic cut suits any studio environment. For practitioners just building out their Pilates wardrobe, this is the sensible starting point.",
    affiliateUrl: "https://www.amazon.com/dp/B07BJ8GVFJ?tag=pilatescollective-20",
    tag: "Budget Pick",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best Pilates Hoodies & Warm-Up Jackets (2026)",
      description: "The best hoodies and warm-up jackets for Pilates — compared on warmth, movement freedom, and studio style.",
      url: "https://pilatescollectiveclub.com/blog/best-pilates-hoodie",
      datePublished: "2026-07-06",
      dateModified: "2026-10-20",
      image: "https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg",
      author: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", logo: { "@type": "ImageObject", url: "https://pilatescollectiveclub.com/logo.png" } },
      mainEntityOfPage: "https://pilatescollectiveclub.com/blog/best-pilates-hoodie",
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Hoodies & Warm-Up Jackets",
      numberOfItems: 6,
      itemListElement: PRODUCTS.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: p.affiliateUrl })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", position: 2, name: "Journal", item: "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", position: 3, name: "Best Pilates Hoodies & Warm-Up Jackets", item: "https://pilatescollectiveclub.com/blog/best-pilates-hoodie" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Should I wear a hoodie during a Pilates session?", acceptedAnswer: { "@type": "Answer", text: "In most cases, hoodies are worn before and after rather than during a Pilates session. However, in cold studios or during the first few minutes of a mat warm-up, wearing a lightweight hoodie until your body temperature rises is practical. Remove it before reformer work — excess fabric can interfere with straps and inhibit the instructor's view of your alignment." } },
        { "@type": "Question", name: "What makes a good Pilates hoodie different from a regular one?", acceptedAnswer: { "@type": "Answer", text: "A good Pilates hoodie prioritises arm mobility (raglan or dropped shoulder seams), stays in place when arms are raised, is soft enough to wear against bare skin, and is easy to remove mid-class if needed. A half-zip or full-zip design is more practical than a pullover for layering purposes in a studio setting." } },
        { "@type": "Question", name: "What is the most popular hoodie worn at Pilates studios?", acceptedAnswer: { "@type": "Answer", text: "The Lululemon Scuba Oversized Half-Zip Hoodie is by far the most-seen hoodie in Pilates and reformer studios globally. Its reputation is well-earned: the French terry fabric is exceptionally soft, the oversized fit is comfortable over any base layer, and it has become a recognisable signifier of the Pilates community aesthetic worldwide." } },
      ],
    },
  ],
};

const QP_NOTES = ["Best Overall", "Best Premium", "Best Performance Hoodie", "Best Value", "Best Sustainable", "Best Budget"];

const ITEM_LIST = productItemList("Best Pilates Hoodies & Warm-Up Jackets (2026)", PRODUCTS.filter((pr) => /amazon\.[a-z.]+\/dp\//.test(pr.affiliateUrl)).map((pr) => ({ name: pr.name, description: pr.description, price: pr.price, url: pr.affiliateUrl })));

export default function BestPilatesHoodiePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml({ "@context": "https://schema.org", ...ITEM_LIST }) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Clothing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Hoodies &amp; Warm-Up Jackets<br /><span style={{ color: "#8b4a31" }}>(2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Prices checked October 20, 2026 · 8 min read</p>
            <TopPick name={PRODUCTS[5].name} price={PRODUCTS[5].price} note={QP_NOTES[5]} url={PRODUCTS[5].affiliateUrl} />
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The warm-up layer you throw on before class and reach for immediately after is as much a part of your Pilates kit as your leggings. The right hoodie keeps muscles warm between exercises and signals the kind of considered approach to training that the Pilates method demands.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg" alt="Best Pilates Hoodies 2026" fill className="object-cover" style={{ filter: "brightness(0.85)" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <QuickPicks className="mb-6 mt-4" picks={PRODUCTS.map((pr, i) => ({ name: pr.name, price: pr.price, url: pr.affiliateUrl, note: QP_NOTES[i] }))} />
            <AffiliateNote>This page contains affiliate links. We may earn a commission if you purchase through our links, at no extra cost to you.</AffiliateNote>

            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              {PRODUCTS.map((p) => (
                <div key={p.rank} style={{ borderTop: "1px solid #ede9e3", paddingTop: "36px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", marginBottom: "8px" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "14px" }}>
                      <span style={{ fontFamily: "var(--font-serif)", fontSize: "13px", color: "#c5a882" }}>{p.rank}</span>
                      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 400, color: "#1a1714", margin: 0 }}>{p.name}</h3>
                    </div>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "#c5a882", whiteSpace: "nowrap" }}>{p.price}</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9490", display: "block", marginBottom: "14px" }}>{p.verdict}</span>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 300, color: "#4a4540", lineHeight: 1.8, marginBottom: "20px" }}>{p.description}</p>
                  <a href={p.affiliateUrl} target="_blank" rel={/amazon\./i.test(p.affiliateUrl) ? "noopener noreferrer nofollow sponsored" : "noopener noreferrer nofollow"} style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "13px 24px" }}>
                    Shop on Amazon
                  </a>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "64px" }}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 400, color: "#1a1714", marginBottom: "32px" }}>Frequently Asked Questions</h2>
              {[
                { q: "Should I wear a hoodie during a Pilates session?", a: "In most cases, hoodies are worn before and after rather than during a Pilates session. However, in cold studios or during the first few minutes of a mat warm-up, wearing a lightweight hoodie until your body temperature rises is practical. Remove it before reformer work — excess fabric can interfere with straps and inhibit the instructor's view of your alignment." },
                { q: "What makes a good Pilates hoodie different from a regular one?", a: "A good Pilates hoodie prioritises arm mobility (raglan or dropped shoulder seams), stays in place when arms are raised, is soft enough to wear against bare skin, and is easy to remove mid-class if needed. A half-zip or full-zip design is more practical than a pullover for layering purposes in a studio setting." },
                { q: "What is the most popular hoodie worn at Pilates studios?", a: "The Lululemon Scuba Oversized Half-Zip Hoodie is by far the most-seen hoodie in Pilates and reformer studios globally. Its reputation is well-earned: the French terry fabric is exceptionally soft, the oversized fit is comfortable over any base layer, and it has become a recognisable signifier of the Pilates community aesthetic worldwide." },
              ].map((item) => (
                <div key={item.q} style={{ borderTop: "1px solid #ede6dc", paddingTop: "24px", paddingBottom: "24px" }}>
                  <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 500, color: "#1a1714", marginBottom: "10px" }}>{item.q}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 300, color: "#4a4540", lineHeight: 1.75 }}>{item.a}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "64px" }}>
              <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9a9490", marginBottom: "28px" }}>Further Reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Pilates T-Shirts (2026)" excerpt="Technical tees from Lululemon, Vuori, Alo Yoga, and Nike — compared on breathability and studio-ready style." href="/blog/best-pilates-tshirts" category="Clothing" readTime="8 min" imageUrl="/pictures/stitch-retail-activewear.png" />
                <ArticleCard title="What to Wear to Pilates" excerpt="The complete guide to Pilates clothing — what works, what to avoid, and how to dress for reformer vs mat." href="/blog/what-to-wear-to-pilates" category="Beginners" readTime="7 min" imageUrl="/pictures/stitch-retail-activewear.png" />
                <ArticleCard title="Best Pilates Grip Socks (2026): 5 Verified Picks" excerpt="5 verified, in-stock Pilates grip socks on Amazon: toesox and TAVI studio favourites, Tucketts toeless, plus Gaiam…" href="/blog/best-pilates-grip-socks" category="Activewear" readTime="6 min read" imageUrl="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" />
                <ArticleCard title="Best Pilates Leggings (2026): 5 Picks for Reformer & Mat" excerpt="The 5 best Pilates leggings on Amazon, from $26 to $134: Lululemon Align, Beyond Yoga, Sweaty Betty, Varley and…" href="/blog/best-pilates-leggings" category="Activewear" readTime="9 min read" imageUrl="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg" />
                <ArticleCard title="Athleta for Pilates (2026): Best Leggings & Tops Reviewed" excerpt="Best Athleta pieces for Pilates, Salutation, Elation, and Brooklyn leggings reviewed for reformer class…" href="/blog/athleta-pilates" category="Activewear" readTime="9 min read" imageUrl="/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find Your Studio" subtitle="Explore top-rated Pilates studios near you." showSearch searchPlaceholder="Search by city or neighbourhood..." />
      </main>
      <Footer />
    </>
  );
}
