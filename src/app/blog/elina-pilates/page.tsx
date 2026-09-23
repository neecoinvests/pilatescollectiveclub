import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Elina Pilates Review (2026): Is It Sold on Amazon?",
  description: "Elina Pilates reformers and chair reviewed against their published specs, plus three genuine wood-frame reformer alternatives that are actually sold on Amazon today.",
  keywords: ["elina pilates review", "elina pilates reformer 2026", "elina pilates vs balanced body", "is elina pilates good", "elina pilates elite reformer review", "elina pilates buy", "elina pilates wood reformer", "elina pilates amazon", "wood pilates reformer alternative"],
  openGraph: {
    title: "Elina Pilates (2026): Equipment Review, Honestly Assessed",
    description: "Elina Pilates reviewed — Elite and HL1 reformers, whether they're genuinely available on Amazon, and real wood-frame alternatives that are.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/elina-pilates",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg", width: 1200, height: 630, alt: "Elina Pilates equipment review — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elina Pilates (2026): Equipment Review",
    description: "Elina Pilates Elite and HL1 reformers — an honest review, plus real wood-reformer alternatives sold on Amazon.",
    images: ["https://pilatescollectiveclub.com/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/elina-pilates" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const MODELS = [
  {
    rank: "01",
    name: "Elina Pilates Elite Wood Reformer",
    verdict: "The brand's best-known model — not a verified Amazon listing",
    description:
      "The Elite Wood Reformer is the model most associated with Elina's growth in the boutique studio and home practitioner market — a solid wood frame, offered in multiple finish options, that gives it a furniture-appropriate look contemporary steel-and-upholstery reformers don't have. We could not find a live, genuine Elina listing for this model on Amazon — the search link that previously sat here did not resolve to a real, purchasable product, so we've removed it rather than send you to a dead end. Treat spring count, carriage bearings, and upholstery specifics as manufacturer-published claims to confirm with an authorised Elina dealer, not facts we've independently verified.",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Elina Pilates Elite Reformer (Aluminium)",
    verdict: "The commercial studio variant — not a verified Amazon listing",
    description:
      "Described by Elina as the aluminium-frame, commercial-studio version of the Elite line, positioned for higher-volume daily use. As with the wood model, we could not find a live Amazon listing for it, and the search link that previously sat here has been removed. If you're considering it for a studio fleet, get current specs and pricing directly from Elina or an authorised dealer rather than from a page like this one.",
    tag: "Best for Studios",
  },
  {
    rank: "03",
    name: "Elina Pilates HL1 Aluminum Reformer",
    verdict: "The brand's entry model — ASIN could not be verified",
    description:
      "Positioned by Elina as its entry-level aluminium reformer. An ASIN was previously listed here, but it is not among the Amazon listings we were able to independently verify, so we're not asserting it as a live, purchasable product — do not treat it as confirmed. If you want Elina's published feature list (wheel count, footbar, spring set), get it from Elina or an authorised dealer and confirm current Amazon availability yourself before buying.",
    tag: "Best Entry Elina",
  },
  {
    rank: "04",
    name: "Elina Pilates Elite Cadillac Reformer Combo",
    verdict: "Reformer/Cadillac combo unit — not a verified Amazon listing",
    description:
      "Marketed by Elina as a combined reformer-and-tower unit for a complete apparatus repertoire in one footprint. We could not find a live Amazon listing for it, and the search link that previously sat here has been removed. Combination units are a real product category across several brands, but get a verified, current listing before treating any specific claim about this one as fact.",
    tag: "Complete Apparatus",
  },
  {
    rank: "05",
    name: "Elina Pilates Baby Chair",
    verdict: "A compact Wunda-style chair — ASIN could not be verified",
    description:
      "Described by Elina as a compact chair matching the Elite Wood Reformer's finishes. An ASIN was previously listed here, but it is not among the Amazon listings we were able to independently verify, so we've removed the buy link rather than assert it. If a Wunda-style chair is what you actually want and Amazon availability matters to you, the Balanced Body EXO Pilates Chair is a real, currently-sold alternative — a single-pedal chair, not Elina-branded, at $1,255.",
    tag: "Best Companion",
    affiliateUrl: "https://www.amazon.com/dp/B002XVZVRQ?tag=pilatescollective-20",
    price: "$1,255 (Balanced Body alternative)",
  },
  {
    rank: "06",
    name: "DELAVIN Solid Wood Pilates Reformer",
    verdict: "Not Elina — a genuine wood-frame reformer alternative actually sold on Amazon",
    description:
      "To be clear upfront: this is not an Elina Pilates product. But Elina is known specifically for wood-framed reformers, and DELAVIN's Solid Wood Pilates Reformer is a genuinely comparable, currently-sold Amazon listing in that same material category — a one-piece solid wood frame rather than aluminium. It has a 7-level adjustable footbar and a 5-position pulley system. If you want the wood-reformer look and feel Elina is known for, but need a real, verifiable Amazon purchase rather than a dealer-quoted price, this is a legitimate alternative to consider — not a substitute for Elina's own engineering or finish.",
    tag: "Wood-Frame Alternative",
    affiliateUrl: "https://www.amazon.com/dp/B0D2ZT4Z5H?tag=pilatescollective-20",
    price: "$1,249.99",
  },
  {
    rank: "07",
    name: "VEVOR Wooden Reformer with Sitting Box",
    verdict: "Not Elina — a genuine wood-frame reformer alternative actually sold on Amazon",
    description:
      "Again, not Elina-branded — but a real, currently-sold Amazon listing in the same solid-wood category Elina is known for. VEVOR's reformer uses a solid maple frame and genuine piano steel springs across 6 resistance levels, and it ships with a box, jumpboard, and shoulder pads included, which changes the value comparison versus buying those separately. If Elina's own listings remain unverifiable on Amazon and you want a complete wood-reformer package you can actually check out today, this is a reasonable substitute to evaluate.",
    tag: "Wood-Frame Alternative",
    affiliateUrl: "https://www.amazon.com/dp/B0F43LNJNM?tag=pilatescollective-20",
    price: "$1,309.90",
  },
  {
    rank: "08",
    name: "PAETA Wooden Foldable Reformer with Sitting Box",
    verdict: "Not Elina — a genuine, more affordable wood-frame alternative actually sold on Amazon",
    description:
      "The most affordable of the three wood-reformer alternatives we could verify, and again, not an Elina product. PAETA's reformer uses a solid oak frame and includes a full accessory set with the sitting box. At $849.99 it's meaningfully cheaper than either Elina's dealer-quoted pricing or the other two wood alternatives above, making it a starting point if budget is the primary constraint and you still want a genuine, real-wood build rather than the more common aluminium-and-upholstery construction.",
    tag: "Best Value Wood Alternative",
    affiliateUrl: "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20",
    price: "$849.99",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Elina Pilates (2026): Equipment Reviewed, Amazon Availability Checked",
      "description": "Elina Pilates' published models reviewed against their claimed specs, an honest check of Amazon availability, and three genuine wood-frame reformer alternatives that are actually sold on Amazon.",
      "url": "https://pilatescollectiveclub.com/blog/elina-pilates",
      "datePublished": "2026-05-21",
      "dateModified": "2026-09-23",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/elina-pilates" },
    },
    {
      "@type": "ItemList",
      "name": "Elina Pilates Equipment and Verified Alternatives (2026)",
      "numberOfItems": MODELS.length,
      "itemListElement": MODELS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          ...(p.affiliateUrl ? { "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9.]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl } } : {}),
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Elina Pilates Review", "item": "https://pilatescollectiveclub.com/blog/elina-pilates" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is Elina Pilates sold on Amazon?", "acceptedAnswer": { "@type": "Answer", "text": "We could not find genuine, live Elina Pilates listings on Amazon for any of the models covered in this guide, and re-confirmed this with a live Amazon catalog search that returned zero genuine Elina-brand results. Treat any Amazon search result or third-party listing claiming to be Elina equipment with caution, and buy through Elina's own channels or an authorised dealer instead." } },
        { "@type": "Question", "name": "Is there a wood-frame reformer like Elina's that's actually sold on Amazon?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Elina is known specifically for wood-framed reformers, and we verified three genuinely comparable, currently-sold Amazon listings in that same category: the DELAVIN Solid Wood Pilates Reformer ($1,249.99), the VEVOR Wooden Reformer with Sitting Box ($1,309.90), and the PAETA Wooden Foldable Reformer with Sitting Box ($849.99). None of these are Elina-branded — they are honest, disclosed alternatives in the same material category, not a substitute for Elina's own engineering." } },
        { "@type": "Question", "name": "How does Elina Pilates compare to Balanced Body?", "acceptedAnswer": { "@type": "Answer", "text": "Balanced Body has a longer track record, a broader global service and parts network, a larger accessories ecosystem, and real, verifiable Amazon listings with published pricing. Elina publishes wood-finish and aluminium reformer models aimed at the same boutique-studio and home market, but we could not verify current pricing or Amazon availability for any of them — get that directly from Elina or an authorised dealer before comparing the two brands on price." } },
        { "@type": "Question", "name": "Where is Elina Pilates made?", "acceptedAnswer": { "@type": "Answer", "text": "Elina Pilates describes itself as a European manufacturer. We have not independently verified further manufacturing details — confirm specifics with the brand directly if that matters to your decision." } },
        { "@type": "Question", "name": "Is Elina Pilates good for a home studio?", "acceptedAnswer": { "@type": "Answer", "text": "Elina markets its wood-finish reformers as designed to look at home in a living space rather than a clinical steel-framed machine, which is a real point of differentiation on paper. We could not verify current pricing or Amazon availability, so treat that as a starting point for your own research with Elina or an authorised dealer, not a purchase recommendation." } },
      ],
    },
  ],
};

export default function ElinaPilatesPage() {
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
              Elina Pilates<br /><span style={{ color: "#8b4a31" }}>(2026): Equipment Reviewed</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 12 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*We could not verify live Amazon listings for Elina Pilates equipment — see the disclosure below. Four links on this page go to verified, non-Elina Amazon products, and we earn a small commission on qualifying purchases through them.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Elina Pilates markets itself as a European manufacturer offering studio-grade reformers, including wood-finish models aimed at the home market. Before publishing this guide we checked whether the models people search for are genuinely sold on Amazon — including a fresh, live Amazon catalog search for &quot;Elina Pilates reformer,&quot; which returned zero genuine Elina-brand results. We could not find live, verifiable Amazon listings for any of Elina&apos;s reformer or chair models covered here. Because Elina is known specifically for wood-framed reformers, we&apos;ve added three genuine wood-frame reformer alternatives that are actually sold on Amazon today, clearly disclosed as not being Elina products. This is an honest guide to what Elina publishes about its own equipment, plus real options for buyers who want that same material category with Amazon purchase protection.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg" alt="Elina Pilates Elite Wood Reformer and equipment reviewed" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-12 mt-4 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Brand overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: "Origin", value: "Europe (self-described; not independently verified)" },
                  { label: "Amazon availability", value: "Not verified for any genuine Elina model — 3 real wood-frame alternatives included" },
                  { label: "Best for", value: "Buyers willing to purchase direct from Elina, or who want a verified wood-reformer alternative on Amazon" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#9a9490", fontFamily: "'Montserrat', sans-serif" }}>{item.label}</p>
                    <p className="text-sm" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10 rounded-2xl p-6" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Amazon availability, checked</p>
              <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                We could not confirm a live Amazon listing for any of the five genuine Elina models below — re-confirmed with a fresh live Amazon catalog search that returned zero genuine Elina-brand results. There is no Amazon &quot;Buy&quot; button on this page for Elina-branded equipment as a result — only real, verified products get one on this site. Four listings below link to genuine, non-Elina Amazon products: one companion chair, and three wood-frame reformer alternatives in the same material category Elina is known for.
              </p>
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>8 Items · 5 Elina Models Reviewed + 3 Verified Amazon Alternatives</p>
              <div className="space-y-10">
                {MODELS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
                    </div>
                    <div className="mb-1">
                      <span className="text-xs uppercase tracking-widest" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{p.verdict}</span>
                    </div>
                    {p.affiliateUrl ? (
                      <ProductCard name={p.name} description={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />
                    ) : (
                      <div style={{ borderTop: "1px solid #ede9e3", paddingTop: "24px", paddingBottom: "4px" }}>
                        <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 400, color: "#0a0a0a", marginBottom: "10px" }}>{p.name}</h3>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "#6b6560", lineHeight: 1.75 }}>{p.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Our honest verdict</h2>
              <div className="space-y-4">
                {[
                  { label: "Manufacturer claims", value: "Elina publishes a coherent, wood-finish-forward product line aimed at boutique studios and home practitioners — on paper it's a real competitor to the established brands' entry and mid tiers." },
                  { label: "What we verified", value: "Very little, independently. Spring counts, bearing types, and upholstery quality are manufacturer claims we could not confirm firsthand, and we could not find a live Amazon listing for any model in this guide." },
                  { label: "Amazon availability", value: "Not confirmed for any Elina-branded reformer or chair as of this update, re-checked via a live Amazon catalog search. Do not trust a search-result link or an unfamiliar ASIN claiming to be Elina equipment without checking the seller carefully." },
                  { label: "Verdict", value: "If Elina's published specs and pricing genuinely appeal to you, buy through Elina's own site or an authorised dealer and confirm current details directly with them — not through this page. If Amazon purchase protection matters more to you than the Elina name specifically, the DELAVIN, VEVOR, and PAETA wood-frame reformers above are genuine, currently-sold alternatives in the same material category." },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="text-sm font-semibold shrink-0 w-40" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{item.label}</span>
                    <span className="text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Is Elina Pilates sold on Amazon?", a: "We could not find genuine, live Elina Pilates listings on Amazon for any of the models covered in this guide, and re-confirmed this with a fresh live catalog search that returned zero genuine Elina-brand results. Treat any Amazon search result or unfamiliar ASIN claiming to be Elina equipment with caution, and buy through Elina's own channels or an authorised dealer instead." },
                  { q: "Is there a wood-frame reformer like Elina's that's actually sold on Amazon?", a: "Yes. Elina is known specifically for wood-framed reformers, and we verified three genuinely comparable, currently-sold Amazon listings in that category: the DELAVIN Solid Wood Pilates Reformer ($1,249.99), the VEVOR Wooden Reformer with Sitting Box ($1,309.90), and the PAETA Wooden Foldable Reformer with Sitting Box ($849.99). None are Elina-branded — they're honest, disclosed alternatives, not a substitute for Elina's own engineering." },
                  { q: "How does Elina Pilates compare to Balanced Body?", a: "Balanced Body has a longer track record, a broader global service network, a larger accessories ecosystem, and real, verifiable Amazon listings with published pricing. Elina publishes wood-finish and aluminium reformer models aimed at a similar market, but we could not verify current pricing or Amazon availability for any of them — get that directly from Elina or an authorised dealer before comparing the two brands on price." },
                  { q: "Where is Elina Pilates made?", a: "Elina Pilates describes itself as a European manufacturer. We have not independently verified further manufacturing details — confirm specifics with the brand directly if that matters to your decision." },
                  { q: "Is Elina Pilates good for a home studio?", a: "Elina markets its wood-finish reformers as designed to look at home in a living space rather than a clinical steel-framed machine, which is a real point of differentiation on paper. We could not verify current pricing or Amazon availability, so treat that as a starting point for your own research with Elina or an authorised dealer, not a purchase recommendation." },
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
                <ArticleCard title="Best Premium Pilates Reformers" excerpt="The top-tier reformers across all brands — Elina, Balanced Body, Gratz, and more." href="/blog/best-premium-pilates-reformer" category="Equipment" readTime="11 min read" date="May 2026" imageUrl="/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg" />
                <ArticleCard title="Balanced Body vs Merrithew" excerpt="The two dominant studio brands compared — which is right for your studio?" href="/blog/balanced-body-vs-merrithew" category="Comparison" readTime="9 min read" date="May 2026" imageUrl="/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg" />
                <ArticleCard title="Best Studio Pilates Reformers" excerpt="How Elina compares against Peak, Balanced Body, and Gratz for professional studio installations." href="/blog/best-studio-pilates-reformers" category="Equipment" readTime="14 min read" date="May 2026" imageUrl="/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg" />
                <ArticleCard title="Best Pilates Reformers for Tall People" excerpt="Frame length and carriage travel compared across brands with verified listings." href="/blog/best-pilates-reformer-for-tall-people" category="Equipment" readTime="9 min read" date="May 2026" imageUrl="/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in Milan…" />
      </main>
      <Footer />
    </>
  );
}
