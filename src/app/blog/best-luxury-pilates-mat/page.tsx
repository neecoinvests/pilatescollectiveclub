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
  title: "Best Luxury Pilates Mats (2026)",
  description: "The finest Pilates mats for serious practitioners — Manduka PRO, Liforme, Hugger Mugger Para Rubber, Manduka PROlite, JadeYoga Harmony and Yoga Design Lab compared for grip, cushioning, and longevity, all available on Amazon.",
  keywords: [
    "best luxury pilates mat",
    "premium pilates mat 2026",
    "best high end pilates mat",
    "manduka pro pilates mat",
    "liforme pilates mat",
    "manduka prolite mat",
    "best investment pilates mat",
    "studio grade pilates mat",
  ],
  openGraph: {
    title: "Best Luxury Pilates Mats (2026)",
    description: "Manduka PRO, Liforme, Hugger Mugger and Manduka PROlite — the premium mats that serious practitioners actually buy once and keep for years.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-mat",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-mat-setup-beige.png", width: 1200, height: 630, alt: "Best Luxury Pilates Mats 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Luxury Pilates Mats (2026)",
    description: "Manduka PRO, Liforme, JadeYoga, and more — the premium mats serious practitioners buy once and keep for years.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-mat-setup-beige.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-mat" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Manduka PRO Yoga & Pilates Mat 6mm",
    price: "$141.00",
    verdict: "Best Overall Luxury",
    description: "The Manduka PRO is the studio standard, and it comes with a lifetime guarantee. Its 6mm ultra-dense cushioning is the right amount for spinal articulation and kneeling work without the wobble of soft foam, the closed-cell surface keeps sweat from soaking in and wipes clean easily, and a dotted underside keeps it planted. At 71 × 26 inches it's a little wider than most mats, and at 7.5 lbs it's a home mat rather than one you carry around. Expect a short break-in before it reaches full grip. Sold by Amazon.",
    affiliateUrl: "https://www.amazon.com/dp/B01I5CFUHM?tag=pilatescollective-20",
    tag: "Studio Standard",
  },
  {
    rank: "02",
    name: "Liforme Original Yoga Mat",
    price: "$165",
    verdict: "Best Alignment Lines",
    description: "Liforme's patented AlignForMe markings, etched into the surface, are genuinely useful in Pilates for setting up hands, feet and pelvis symmetrically every time. The GripForMe eco-polyurethane top over rubber has exceptional grip, even with damp hands, and the 4.2mm thickness keeps you feeling connected to the floor for balance work. It's PVC-free, it's extra-long and wide, and it comes with Liforme's own carry bag. Sold by Liforme on Amazon.",
    affiliateUrl: "https://www.amazon.com/dp/B09X66N6GX?tag=pilatescollective-20",
    tag: "Alignment",
  },
  {
    rank: "03",
    name: "Hugger Mugger Para Rubber Yoga Mat",
    price: "$128.00",
    verdict: "Best Heavyweight Mat",
    description: "If you want a mat that lies absolutely flat and never slides, the Para Rubber is it. It's a quarter-inch (about 6.4mm) of natural rubber with non-slip grip on both sides, which gives excellent cushioning for supine and kneeling work, and the density means it doesn't bottom out under the sacrum in rolling exercises. The trade-off is weight: this is a mat that lives in your home studio. Natural rubber isn't suitable if you have a latex allergy. Sold by Backcountry on Amazon.",
    affiliateUrl: "https://www.amazon.com/dp/B00TI8V6SK?tag=pilatescollective-20",
    tag: "Natural Rubber",
  },
  {
    rank: "04",
    name: "Manduka PROlite Yoga Mat 4.7mm",
    price: "$112.00",
    verdict: "Best Everyday Luxury",
    description: "Manduka's PROlite is the lightweight sibling of the PRO: 4.7mm of the same legendary closed-cell cushioning, in a mat that weighs only 4.6 lbs instead of the PRO's 7.5, so it's genuinely easy to carry to a studio and back. It has the same no-slip dotted underside and the same reputation among teachers for holding its shape and grip for years. If the full PRO feels like overkill for your practice, this is the version to buy. Sold by Amazon.com.",
    affiliateUrl: "https://www.amazon.com/dp/B0F6426TRG?tag=pilatescollective-20",
    tag: "Everyday Luxury",
  },
  {
    rank: "05",
    name: "JadeYoga Harmony Mat",
    price: "$114.95",
    verdict: "Best Natural Rubber",
    description: "JadeYoga's Harmony is made in the USA from natural open-cell rubber, with no PVC or phthalates, and it's the mat people with sweaty hands tend to swear by: the open-cell surface grips in a way synthetic mats don't. At 3/16 inch (about 4.8mm) it's cushioned enough for rolling work while staying stable for balance. JadeYoga also plants a tree for every mat sold. Natural rubber has a smell at first and isn't suitable with a latex allergy. Sold by JadeYoga on Amazon.",
    affiliateUrl: "https://www.amazon.com/dp/B000ECDSYE?tag=pilatescollective-20",
    tag: "Made in USA",
  },
  {
    rank: "06",
    name: "Yoga Design Lab Combo Mat 5.5mm",
    price: "$131",
    verdict: "Best Mat-and-Towel in One",
    description: "Yoga Design Lab's Combo Mat bonds a soft microfibre towel surface to a natural rubber base, so it gets grippier as you sweat. That makes it the pick for hot mat classes, sweaty Lagree-style sessions or anyone who usually lays a towel over their mat. The printed designs are the most distinctive here, and the 5.5mm version adds useful cushioning for Pilates. A carrying strap is included. Sold by Hugger Mugger Yoga on Amazon.",
    affiliateUrl: "https://www.amazon.com/dp/B09JWWCCH1?tag=pilatescollective-20",
    tag: "Artisan Design",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best Luxury Pilates Mats (2026)",
      description: "The finest Pilates mats for serious practitioners — Manduka PRO, Liforme, Hugger Mugger Para Rubber, Manduka PROlite, JadeYoga Harmony and Yoga Design Lab compared for grip, cushioning, and longevity, all available on Amazon.",
      url: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-mat",
      datePublished: "2026-07-06",
      dateModified: "2026-10-20",
      image: "https://pilatescollectiveclub.com/pictures/stitch-mat-setup-beige.png",
      author: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", logo: { "@type": "ImageObject", url: "https://pilatescollectiveclub.com/logo.png" } },
      mainEntityOfPage: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-mat",
    },
    {
      "@type": "ItemList",
      name: "Best Luxury Pilates Mats",
      numberOfItems: 6,
      itemListElement: PRODUCTS.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: p.affiliateUrl })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", position: 2, name: "Journal", item: "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", position: 3, name: "Best Luxury Pilates Mats", item: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-mat" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What thickness is best for a luxury Pilates mat?", acceptedAnswer: { "@type": "Answer", text: "4mm to 6mm is the professional consensus for mat Pilates. The Hugger Mugger Para Rubber (about 6.4mm) and Manduka PRO (6mm) are the most cushioned here and best for sensitive spines or lots of supine and kneeling work. The 4.7mm Manduka PROlite and the 5.5mm Yoga Design Lab Combo are the sweet spot for balance between cushioning and proprioceptive feedback. Thicker mats can reduce floor-connection feedback during balance work." } },
        { "@type": "Question", name: "Is the Manduka PRO worth the investment for Pilates?", acceptedAnswer: { "@type": "Answer", text: "Yes, unequivocally, if you train three or more times per week. The Manduka PRO carries a lifetime guarantee, holds its cushioning and grip for years with basic care, and is dense enough that it won't bottom out under the spine. Spread over years of use, it costs less than replacing a cheaper mat every year or so." } },
        { "@type": "Question", name: "Natural rubber vs PU: which is better for a luxury Pilates mat?", acceptedAnswer: { "@type": "Answer", text: "Open-cell natural rubber mats (JadeYoga, Hugger Mugger Para Rubber) offer excellent grip and cushioning, but they're heavier, have a rubber smell at first and aren't suitable with a latex allergy. PU-topped mats (Liforme) stay grippy when damp, are easier to wipe clean and feel smoother under the hands, while Manduka's closed-cell PVC (PRO and PROlite) is completely non-porous and wipes clean instantly. PU is generally preferred for reformer-adjacent mat work where hygiene is a priority; natural rubber is preferred for movement-intensive mat flow." } },
      ],
    },
  ],
};

const QP_NOTES = ["Best Overall Luxury", "Best Alignment Lines", "Best Heavyweight Mat", "Best Everyday Luxury", "Best Natural Rubber", "Best Mat-and-Towel in One"];

const ITEM_LIST = productItemList("Best Luxury Pilates Mats (2026)", PRODUCTS.filter((pr) => /amazon\.[a-z.]+\/dp\//.test(pr.affiliateUrl)).map((pr) => ({ name: pr.name, description: pr.description, price: pr.price, url: pr.affiliateUrl })));

export default function BestLuxuryPilatesMatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml({ "@context": "https://schema.org", ...ITEM_LIST }) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Luxury Pilates Mats<br /><span style={{ color: "#8b4a31" }}>(2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Prices checked October 20, 2026 · 9 min read</p>
            <TopPick name={PRODUCTS[0].name} price={PRODUCTS[0].price} note={QP_NOTES[0]} url={PRODUCTS[0].affiliateUrl} />
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "17px", fontWeight: 300, color: "#4a4540", lineHeight: 1.8, marginBottom: "16px" }}>
              A premium mat is not an indulgence — it is the single surface between your spine and the floor for every mat Pilates class you will ever take. The quality of that surface affects grip security, spinal cushioning, hygiene, and ultimately your ability to focus on movement rather than your equipment.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              These six mats represent the finest available in 2026 — each compared on grip stability, cushioning precision, ease of care, and the intangible quality of a mat that makes every session feel more considered.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-mat-setup-beige.png" alt="Best Luxury Pilates Mats 2026" fill className="object-cover" style={{ filter: "brightness(0.85)" }} priority />
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
                  <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "13px 24px" }}>
                    {p.affiliateUrl.includes("amazon.com") ? "Shop on Amazon" : "Shop Direct"}
                  </a>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "64px" }}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 400, color: "#1a1714", marginBottom: "32px" }}>Frequently Asked Questions</h2>
              {[
                { q: "What thickness is best for a luxury Pilates mat?", a: "4mm to 6mm is the professional consensus for mat Pilates. The Hugger Mugger Para Rubber (about 6.4mm) and Manduka PRO (6mm) are the most cushioned here and best for sensitive spines or lots of supine and kneeling work. The 4.7mm Manduka PROlite and the 5.5mm Yoga Design Lab Combo are the sweet spot for balance between cushioning and proprioceptive feedback. Thicker mats can reduce floor-connection feedback during balance work." },
                { q: "Is the Manduka PRO worth the investment for Pilates?", a: "Yes, unequivocally, if you train three or more times per week. The Manduka PRO carries a lifetime guarantee, holds its cushioning and grip for years with basic care, and is dense enough that it won't bottom out under the spine. Spread over years of use, it costs less than replacing a cheaper mat every year or so." },
                { q: "Natural rubber vs PU: which is better for a luxury Pilates mat?", a: "Open-cell natural rubber mats (JadeYoga, Hugger Mugger Para Rubber) offer excellent grip and cushioning, but they're heavier, have a rubber smell at first and aren't suitable with a latex allergy. PU-topped mats (Liforme) stay grippy when damp, are easier to wipe clean and feel smoother under the hands, while Manduka's closed-cell PVC (PRO and PROlite) is completely non-porous and wipes clean instantly. PU is generally preferred for reformer-adjacent mat work where hygiene is a priority; natural rubber is preferred for movement-intensive mat flow." },
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
                <ArticleCard title="Best Pilates Mat" excerpt="The full mat roundup across all price ranges — from budget picks to professional studio mats." href="/blog/best-pilates-mat" category="Equipment" readTime="8 min" imageUrl="/pictures/stitch-mat-setup-beige.png" />
                <ArticleCard title="Best Luxury Pilates Accessories" excerpt="Premium magic circles, foam rollers, resistance bands, and props — curated for the serious practitioner." href="/blog/best-luxury-pilates-accessories" category="Equipment" readTime="9 min" imageUrl="/pictures/stitch-props-cork-ring.png" />
                <ArticleCard title="Manduka PRO Mat Review (2026): Worth $144 for Pilates?" excerpt="Manduka PRO and eKO mats reviewed for Pilates at $144, thickness, grip, weight, and whether a cheaper mat does the…" href="/blog/manduka-pilates-mat" category="Guide" readTime="9 min read" imageUrl="/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg" />
                <ArticleCard title="Best Yoga Mat Towel for Pilates (2026): Compared & Ranked" excerpt="The best yoga mat towels for Pilates, Manduka eQua, Liforme, Gaiam, and more compared for grip, sweat absorption…" href="/blog/best-yoga-mat-towel-for-pilates" category="Guide" readTime="6 min read" imageUrl="/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg" />
                <ArticleCard title="Pilates Essentials (2026): Every Must-Have in One List" excerpt="Every Pilates must-have on one page, best, budget and splurge picks, verified in-stock prices, and what the full…" href="/blog/pilates-essentials" category="Guide" readTime="12 min read" imageUrl="/pictures/stitch-pilates-essentials-logbook.png" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find Your Studio" subtitle="Discover the world's finest Pilates and reformer studios." showSearch searchPlaceholder="Search by city or neighbourhood..." />
      </main>
      <Footer />
    </>
  );
}
