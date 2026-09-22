import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Personal Hour Pilates Reformer Review (2026)",
  description: "Personal Hour Pilates reformer reviewed — build quality, spring system, carriage glide, and honest value assessment for home practitioners on a budget.",
  keywords: ["personal hour pilates review", "personalhour reformer review 2026", "personal hour pilates reformer", "is personal hour pilates good", "personal hour vs aeropilates", "personal hour pilates buy"],
  openGraph: {
    title: "PersonalHour Pilates (2026): Janet La Force Plus, Honestly Reviewed",
    description: "PersonalHour Pilates reviewed — the Janet La Force Plus, the model genuinely sold on Amazon.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/personalhour-pilates",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg", width: 1200, height: 630, alt: "PersonalHour Pilates reformer review — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PersonalHour Pilates (2026): Janet La Force Plus",
    description: "PersonalHour's wood-frame reformer honestly reviewed.",
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
    verdict: "The real PersonalHour reformer confirmed sold on Amazon",
    description:
      "The Janet La Force Plus is PersonalHour's foldable wood-frame reformer and the model that is genuinely, currently sold on Amazon. Its defining feature is a wood frame rather than the aluminium construction most competitors use at this price point — the added weight and rigidity is the reason owners cite it for stability during more demanding work. Beyond that, we're being careful about specifics: an earlier version of this review cited an exact spring count, included accessories, and a folding-plus-wheels storage mechanism that we could not verify against the current listing, and the brand overview box on this page previously gave a different spring count than the product description did — a sign those details were not sourced reliably. Confirm spring count, what ships in the box, and any folding or tower-compatibility claim against the current Amazon listing before you buy, rather than relying on any of those specifics being quoted here.",
    affiliateUrl: "https://www.amazon.com/dp/B0GNDHZXZK?tag=pilatescollective-20",
    tag: "The Real Listing",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "PersonalHour Pilates (2026): Janet La Force Plus, Honestly Reviewed",
      "description": "PersonalHour Pilates reviewed — the Janet La Force Plus, the model genuinely sold on Amazon, honestly assessed. Other PersonalHour models could not be verified as live Amazon listings.",
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
      "numberOfItems": 1,
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
        { "@type": "Question", "name": "Is PersonalHour a good reformer brand?", "acceptedAnswer": { "@type": "Answer", "text": "PersonalHour has built a reputation in the home reformer market for using a solid wood frame rather than aluminium. The Janet La Force Plus, the model genuinely sold on Amazon, is priced at $2,555. PersonalHour markets other model names (including a 'Zous 2.0'), but we could not verify a live Amazon listing for any model besides the Janet La Force Plus, so treat those other names as unconfirmed until you check a current listing yourself." } },
        { "@type": "Question", "name": "How does PersonalHour compare to Elina Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Both brands market wood-frame construction, but we have not independently verified Elina's Amazon listings or specifications, so we can't responsibly compare exact materials or weight here. What we can say with confidence: the PersonalHour Janet La Force Plus is a real, currently-sold Amazon listing at $2,555 with a wood frame; verify any comparison claim about Elina against a current, live listing rather than assuming it here." } },
        { "@type": "Question", "name": "Does the PersonalHour Janet La Force Plus fold?", "acceptedAnswer": { "@type": "Answer", "text": "We could not verify a folding or transport-wheel feature against the current Amazon listing at the time of writing. If folding storage is a requirement for you, confirm it directly on the current listing before buying rather than relying on this or any other article." } },
        { "@type": "Question", "name": "Is PersonalHour good for tall people?", "acceptedAnswer": { "@type": "Answer", "text": "We could not verify specific carriage-length or rated-user-height figures for the Janet La Force Plus. Check the current Amazon listing's stated dimensions against your own height before buying, rather than relying on a general claim about the brand." } },
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
              PersonalHour has built a following in the home reformer market by committing to a solid wood frame rather than the aluminium or engineered composites most competitors use at this price tier. The one model we could verify as a genuine, currently-sold Amazon listing is the Janet La Force Plus, at $2,555. PersonalHour markets other model names, but we could not confirm a live Amazon listing for them, and an earlier version of this review made specific claims — spring count, included accessories, a folding mechanism — that we could not source reliably, so this review has been narrowed to what we could actually verify.
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
                  { label: "Construction", value: "Wood frame (exact species and spring count — confirm on the current listing)" },
                  { label: "Resistance type", value: "Spring-based" },
                  { label: "Best for", value: "Home practitioners who want a wood-frame reformer, confirmed real on Amazon" },
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>The Real Listing · Reviewed</p>
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
                  { q: "Is PersonalHour a good reformer brand?", a: "PersonalHour has built a reputation in the home reformer market for its wood-frame construction. The Janet La Force Plus, at $2,555, is the model we could confirm as a genuine, currently-sold Amazon listing. PersonalHour markets other model names, but we could not verify a live Amazon listing for them — treat those as unconfirmed until you check a current listing yourself." },
                  { q: "How does PersonalHour compare to Elina Pilates?", a: "Both brands market wood-frame construction, but we have not independently verified Elina's Amazon listings or exact materials, so we can't responsibly compare specifics here. What we can confirm: the PersonalHour Janet La Force Plus is a real, currently-sold Amazon listing with a wood frame, at $2,555." },
                  { q: "Does the PersonalHour Janet La Force Plus fold?", a: "We could not verify a folding or transport-wheel feature against the current Amazon listing at the time of writing. If folding storage is a requirement for you, confirm it directly on the current listing before buying." },
                  { q: "Is PersonalHour good for tall people?", a: "We could not verify specific carriage-length or rated-user-height figures for the Janet La Force Plus. Check the current Amazon listing's stated dimensions against your own height before buying." },
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
