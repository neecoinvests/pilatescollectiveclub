import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pilates Brand Guides — Activewear & Equipment Reviews | Pilates Collective Club",
  description: "Honest brand guides for every major Pilates activewear and equipment brand. Lululemon, Alo, Varley, Splits59, Manduka, Gymshark — tested by practitioners, not marketers.",
  keywords: ["pilates activewear brands", "best pilates brand", "lululemon pilates review", "alo yoga pilates review", "varley pilates review", "splits59 pilates", "manduka pilates mat", "gymshark pilates", "sweaty betty pilates", "pilates brand comparison", "best pilates clothes", "pilates equipment brands"],
  openGraph: {
    title: "Pilates Brand Guides — Activewear & Equipment Reviews",
    description: "Complete brand guides for Pilates activewear and equipment. Honest reviews for every major brand.",
    type: "website",
    url: "https://pilatescollectiveclub.com/brands",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg", width: 1200, height: 630, alt: "Pilates brand guides — activewear and equipment reviews" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Brand Guides — Activewear & Equipment Reviews",
    description: "Complete brand guides for Pilates activewear and equipment. Honest reviews for every major brand.",
    images: ["https://pilatescollectiveclub.com/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/brands",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const brandsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://pilatescollectiveclub.com/brands/#webpage",
      "url": "https://pilatescollectiveclub.com/brands",
      "name": "Pilates Brand Guides — Activewear & Equipment Reviews",
      "description": "Complete brand guides for Pilates activewear and equipment. Honest reviews for every major brand.",
      "isPartOf": { "@id": "https://pilatescollectiveclub.com/#website" },
      "inLanguage": "en-US",
    },
    {
      "@type": "ItemList",
      "name": "Pilates Brand Guides",
      "url": "https://pilatescollectiveclub.com/brands",
      "numberOfItems": 13,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://pilatescollectiveclub.com/blog/lululemon-pilates", "name": "Lululemon for Pilates" },
        { "@type": "ListItem", "position": 2, "url": "https://pilatescollectiveclub.com/blog/alo-yoga-pilates", "name": "Alo Yoga for Pilates" },
        { "@type": "ListItem", "position": 3, "url": "https://pilatescollectiveclub.com/blog/varley-pilates-activewear", "name": "Varley for Pilates" },
        { "@type": "ListItem", "position": 4, "url": "https://pilatescollectiveclub.com/blog/splits59-pilates", "name": "Splits59 for Pilates" },
        { "@type": "ListItem", "position": 5, "url": "https://pilatescollectiveclub.com/blog/sweaty-betty-pilates", "name": "Sweaty Betty for Pilates" },
        { "@type": "ListItem", "position": 6, "url": "https://pilatescollectiveclub.com/blog/gymshark-pilates", "name": "Gymshark for Pilates" },
        { "@type": "ListItem", "position": 7, "url": "https://pilatescollectiveclub.com/blog/athleta-pilates", "name": "Athleta for Pilates" },
        { "@type": "ListItem", "position": 8, "url": "https://pilatescollectiveclub.com/blog/vuori-pilates", "name": "Vuori for Pilates" },
        { "@type": "ListItem", "position": 9, "url": "https://pilatescollectiveclub.com/blog/free-people-movement-pilates", "name": "Free People Movement for Pilates" },
        { "@type": "ListItem", "position": 10, "url": "https://pilatescollectiveclub.com/blog/girlfriend-collective-pilates", "name": "Girlfriend Collective for Pilates" },
        { "@type": "ListItem", "position": 11, "url": "https://pilatescollectiveclub.com/blog/manduka-pilates-mat", "name": "Manduka Pilates Mat Guide" },
        { "@type": "ListItem", "position": 12, "url": "https://pilatescollectiveclub.com/blog/balanced-body-vs-merrithew", "name": "Balanced Body vs Merrithew" },
        { "@type": "ListItem", "position": 13, "url": "https://pilatescollectiveclub.com/blog/club-pilates-review", "name": "Club Pilates Review" },
      ],
    },
  ],
};

const ACTIVEWEAR_BRANDS = [
  {
    name: "Lululemon",
    tagline: "The benchmark. Best-in-class Align legging for reformer and mat.",
    tier: "Premium",
    priceRange: "$$$",
    href: "/blog/lululemon-pilates",
    imageUrl: "/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg",
    bestFor: "Reformer & studio",
    topPick: "Align Legging",
  },
  {
    name: "Alo Yoga",
    tagline: "High-compression performance. The Airbrush legging is built for serious movement.",
    tier: "Premium",
    priceRange: "$$$",
    href: "/blog/alo-yoga-pilates",
    imageUrl: "/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg",
    bestFor: "High-intensity reformer",
    topPick: "Airbrush Legging",
  },
  {
    name: "Varley",
    tagline: "The European boutique brand. Sophisticated, muted, and precisely cut for the studio.",
    tier: "Premium",
    priceRange: "$$$",
    href: "/blog/varley-pilates-activewear",
    imageUrl: "/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg",
    bestFor: "Boutique studio",
    topPick: "Reeves Legging",
  },
  {
    name: "Splits59",
    tagline: "Built explicitly for Pilates and barre. The Raquel legging is the method’s finest.",
    tier: "Premium",
    priceRange: "$$$",
    href: "/blog/splits59-pilates",
    imageUrl: "/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg",
    bestFor: "Pilates-first practitioners",
    topPick: "Raquel Legging",
  },
  {
    name: "Sweaty Betty",
    tagline: "The UK studio standard. Excellent European credentials, genuine Pilates performance.",
    tier: "Premium",
    priceRange: "$$$",
    href: "/blog/sweaty-betty-pilates",
    imageUrl: "/pictures/jade-stephens-N21356amsyw-unsplash.jpg",
    bestFor: "UK & European studios",
    topPick: "Power Workout Legging",
  },
  {
    name: "Athleta",
    tagline: "Best value in the premium tier. B Corp certified. Excellent size range XXS–3X.",
    tier: "Mid-Premium",
    priceRange: "$$",
    href: "/blog/athleta-pilates",
    imageUrl: "/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg",
    bestFor: "Value-conscious practitioners",
    topPick: "Salutation Stash Tight",
  },
  {
    name: "Vuori",
    tagline: "The best brand for men doing Pilates. Women’s range excellent too.",
    tier: "Mid-Premium",
    priceRange: "$$",
    href: "/blog/vuori-pilates",
    imageUrl: "/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg",
    bestFor: "Men & coastal lifestyle",
    topPick: "Performance Jogger",
  },
  {
    name: "Free People Movement",
    tagline: "The pilates girl aesthetic. Lifestyle-forward with genuine studio credentials.",
    tier: "Mid-Premium",
    priceRange: "$$",
    href: "/blog/free-people-movement-pilates",
    imageUrl: "/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg",
    bestFor: "Lifestyle-first practitioners",
    topPick: "Good Karma Legging",
  },
  {
    name: "Gymshark",
    tagline: "Accessible entry point. Best budget option with real quality for studio use.",
    tier: "Mid",
    priceRange: "$$",
    href: "/blog/gymshark-pilates",
    imageUrl: "/pictures/ahmet-kurt-0xn-8kRWOhE-unsplash.jpg",
    bestFor: "Budget-conscious beginners",
    topPick: "Flex Legging",
  },
  {
    name: "Girlfriend Collective",
    tagline: "Sustainable and serious. Made from recycled materials, performs like premium.",
    tier: "Mid-Premium",
    priceRange: "$$",
    href: "/blog/girlfriend-collective-pilates",
    imageUrl: "/pictures/juls-p-lB6lbkbe1XA-unsplash.jpg",
    bestFor: "Sustainability-focused",
    topPick: "Compressive Legging",
  },
];

const EQUIPMENT_BRANDS = [
  {
    name: "Manduka",
    tagline: "The premium mat brand. The PRO mat has a lifetime guarantee and unmatched spinal feedback.",
    tier: "Premium",
    priceRange: "$$$",
    href: "/blog/manduka-pilates-mat",
    imageUrl: "/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg",
    bestFor: "Home studio mats",
    topPick: "PRO Mat (6mm)",
  },
  {
    name: "Balanced Body",
    tagline: "The world’s leading reformer brand. Used in more studios globally than any other.",
    tier: "Professional",
    priceRange: "$$$$",
    href: "/blog/balanced-body-pilates",
    imageUrl: "/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg",
    bestFor: "Studio & serious home",
    topPick: "Allegro 2 Reformer",
  },
  {
    name: "Merrithew / STOTT",
    tagline: "Contemporary method’s flagship brand. The V2 Max is the clinical benchmark.",
    tier: "Professional",
    priceRange: "$$$$",
    href: "/blog/merrithew-pilates",
    imageUrl: "/pictures/roxana-popovici-cZ0WYsBFHhs-unsplash.jpg",
    bestFor: "STOTT-trained instructors",
    topPick: "V2 Max Plus Reformer",
  },
  {
    name: "Peak Pilates",
    tagline: "Classical-leaning precision. Baltic Birch wood construction meets modern engineering.",
    tier: "Professional",
    priceRange: "$$$$",
    href: "/blog/peak-pilates",
    imageUrl: "/pictures/ahmet-kurt-a1IhqqW8JQE-unsplash.jpg",
    bestFor: "Classical studios & home",
    topPick: "MVe® Reformer",
  },
  {
    name: "Gratz",
    tagline: "The original. Authorized by Joseph Pilates himself. For classical purists only.",
    tier: "Professional",
    priceRange: "$$$$",
    href: "/blog/gratz-pilates",
    imageUrl: "/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg",
    bestFor: "Classical lineage studios",
    topPick: "Universal Reformer",
  },
  {
    name: "Elina Pilates",
    tagline: "Studio-grade quality at a more accessible price. The Elite Wood is a home studio icon.",
    tier: "Professional",
    priceRange: "$$$",
    href: "/blog/elina-pilates",
    imageUrl: "/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg",
    bestFor: "Boutique studios & home",
    topPick: "Elite Wood Reformer",
  },
];

const tierColor: Record<string, string> = {
  Premium: "#8b4a31",
  "Mid-Premium": "#536257",
  Mid: "#6b6560",
  Professional: "#0a0a0a",
};

export default function BrandsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brandsJsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
              Brand Guides
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Every brand.<br /><span style={{ color: "#8b4a31" }}>Honest verdict.</span>
            </h1>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              We have tested every major Pilates activewear and equipment brand so you can buy with confidence. Each guide covers the best pieces, what to avoid, sizing notes, and our honest verdict on whether the brand is worth your money.
            </p>
          </div>
        </section>

        {/* Activewear Brands */}
        <section className="px-6 pb-20" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-px" style={{ backgroundColor: "#d9c2ba" }} />
              <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Activewear</p>
            </div>
            <h2 className="text-3xl font-semibold mb-12" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Activewear brand guides
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ACTIVEWEAR_BRANDS.map((brand) => (
                <Link key={brand.name} href={brand.href} style={{ textDecoration: "none" }}>
                  <div
                    className="group rounded-2xl overflow-hidden h-full"
                    style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)", transition: "box-shadow 0.2s" }}
                  >
                    <div className="relative overflow-hidden" style={{ height: "200px" }}>
                      <Image
                        src={brand.imageUrl}
                        alt={`${brand.name} for Pilates — activewear brand guide`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ filter: "brightness(0.88)" }}
                      />
                      <div className="absolute top-4 left-4">
                        <span
                          className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                          style={{ backgroundColor: "rgba(255,255,255,0.92)", color: tierColor[brand.tier] || "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {brand.tier}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span
                          className="text-xs font-semibold tracking-widest px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: "rgba(0,0,0,0.6)", color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {brand.priceRange}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
                        {brand.name}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b6560", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
                        {brand.tagline}
                      </p>
                      <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(217,194,186,0.3)" }}>
                        <div>
                          <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "#9a9490", fontFamily: "'Montserrat', sans-serif" }}>Top pick</p>
                          <p className="text-xs font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{brand.topPick}</p>
                        </div>
                        <span
                          className="text-xs font-semibold uppercase tracking-widest"
                          style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", borderBottom: "1px solid #8b4a31", paddingBottom: "1px" }}
                        >
                          Read guide →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Brands */}
        <section className="px-6 pb-24" style={{ backgroundColor: "#ffffff" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-px" style={{ backgroundColor: "#d9c2ba" }} />
              <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment</p>
            </div>
            <h2 className="text-3xl font-semibold mb-12" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Equipment brand guides
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {EQUIPMENT_BRANDS.map((brand) => (
                <Link key={brand.name} href={brand.href} style={{ textDecoration: "none" }}>
                  <div
                    className="group rounded-2xl overflow-hidden h-full"
                    style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)", transition: "box-shadow 0.2s" }}
                  >
                    <div className="relative overflow-hidden" style={{ height: "200px" }}>
                      <Image
                        src={brand.imageUrl}
                        alt={`${brand.name} Pilates equipment brand guide`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ filter: "brightness(0.88)" }}
                      />
                      <div className="absolute top-4 left-4">
                        <span
                          className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                          style={{ backgroundColor: "rgba(255,255,255,0.92)", color: tierColor[brand.tier] || "#0a0a0a", fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {brand.tier}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
                        {brand.name}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b6560", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
                        {brand.tagline}
                      </p>
                      <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(217,194,186,0.3)" }}>
                        <div>
                          <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "#9a9490", fontFamily: "'Montserrat', sans-serif" }}>Top pick</p>
                          <p className="text-xs font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{brand.topPick}</p>
                        </div>
                        <span
                          className="text-xs font-semibold uppercase tracking-widest"
                          style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", borderBottom: "1px solid #8b4a31", paddingBottom: "1px" }}
                        >
                          Read guide →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA strip */}
        <section className="px-6 py-20" style={{ backgroundColor: "#f7f4f0" }}>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
              Equipment Roundups
            </p>
            <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Looking for the best across brands?
            </h2>
            <p className="text-base mb-10" style={{ color: "#6b6560", fontFamily: "'Montserrat', sans-serif", fontWeight: 300, lineHeight: 1.75 }}>
              Our equipment roundups test the best products across every brand — so you get the honest winner, not a brand-specific view.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/blog/best-pilates-leggings"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "14px 28px", display: "inline-block" }}
              >
                Best Leggings
              </Link>
              <Link
                href="/blog/best-pilates-mat"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#0a0a0a", textDecoration: "none", border: "1px solid #0a0a0a", padding: "14px 28px", display: "inline-block" }}
              >
                Best Mats
              </Link>
              <Link
                href="/blog/best-pilates-starter-kit"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#0a0a0a", textDecoration: "none", border: "1px solid #0a0a0a", padding: "14px 28px", display: "inline-block" }}
              >
                Starter Kit
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
