import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import UpsellCTA from "@/components/UpsellCTA";

export const metadata: Metadata = {
  title: "Best Pilates Gloves (2026): 5 Verified Grip Gloves",
  description: "5 verified, in-stock Pilates grip gloves on Amazon: TAVI, Gaiam, oasymala and Eurzom for reformer, barre and mat, plus one wrist-support pick for Lagree.",
  keywords: [
    "best pilates gloves",
    "lagree gloves",
    "reformer pilates gloves",
    "grip gloves pilates",
    "pilates wrist support gloves",
    "tavi grip gloves",
    "fingerless yoga gloves",
    "barre grip gloves",
    "pilates hand protection",
    "lagree fitness gloves",
  ],
  openGraph: {
    title: "Best Pilates Gloves (2026): 5 Verified Grip Gloves",
    description: "Five verified, in-stock Pilates grip gloves for reformer, barre and mat — plus one wrist-support pick for Lagree. Real ASINs, exact prices, honest notes.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-gloves",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Gloves" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Gloves (2026): 5 Verified Grip Gloves",
    description: "Five verified, in-stock Pilates grip gloves — TAVI, Gaiam, oasymala, Eurzom and MhIL.",
    images: ["https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/best-pilates-gloves",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "TAVI Half Finger Gym Gloves (Full Coverage Grips)",
    price: "$31.99",
    verdict: "Best overall — from a dedicated Pilates/barre grip brand",
    description: "TAVI is a dedicated Pilates and barre grip brand, and this half-finger glove pairs a full-coverage grip palm with open fingertips for reformer handles, straps and mat work. Sold on Amazon by The Active Footwear Store, TAVI's official distributor. At $31.99 it's the priciest glove here — the one to buy if you want a glove designed for the studio rather than the weights floor.",
    affiliateUrl: "https://www.amazon.com/dp/B09GPVMF86?tag=pilatescollective-20",
    tag: "Best Overall",
  },
  {
    rank: "02",
    name: "Gaiam Grippy Yoga Gloves",
    price: "$7.65",
    verdict: "Best budget — an established brand for under $8",
    description: "Gaiam is an established yoga and Pilates accessories brand, and its Grippy Yoga Gloves are the lowest-priced pair on this list at $7.65, sold by W&E Distribution. A sensible way to find out whether you like training in grip gloves before spending more.",
    affiliateUrl: "https://www.amazon.com/dp/B001VROVEM?tag=pilatescollective-20",
    tag: "Best Budget",
  },
  {
    rank: "03",
    name: "oasymala Non-Slip Fingerless Yoga Gloves",
    price: "$13.98",
    verdict: "Best fingerless — marketed specifically for Pilates and barre",
    description: "A non-slip fingerless glove sold by OasyMala and marketed for Pilates and barre. At $13.98 it sits between the budget Gaiam pair and the TAVI glove — a mid-priced option if you want a fingerless style aimed at studio work.",
    affiliateUrl: "https://www.amazon.com/dp/B0DHKLSXLY?tag=pilatescollective-20",
    tag: "Best Fingerless",
  },
  {
    rank: "04",
    name: "Eurzom 2-Pairs Yoga Pilates Gloves with Grips",
    price: "$9.99",
    verdict: "Best value 2-pack — two pairs for under $10",
    description: "Two pairs of yoga/Pilates grip gloves for $9.99, sold by Yaoshinegoup. Having a second pair means one can dry while you wear the other — useful if you practise several times a week.",
    affiliateUrl: "https://www.amazon.com/dp/B0DZ2CZS1J?tag=pilatescollective-20",
    tag: "Best Value 2-Pack",
  },
  {
    rank: "05",
    name: "MhIL Workout Gloves for Women",
    price: "$9.99",
    verdict: "Best wrist support — for Lagree and weighted work",
    description: "A breathable glove with wrist wrap support built in, sold by MhIL. The wrist wrap is a useful detail for Pilates practitioners who feel strain during plank and push-up work on the reformer box, and the breathable construction helps during sweaty Megaformer sessions.",
    affiliateUrl: "https://www.amazon.com/dp/B08R6CB2K6?tag=pilatescollective-20",
    tag: "Best Wrist Support",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best Pilates Gloves (2026): Grip Gloves for Reformer & Lagree",
      description: "Five verified Pilates grip gloves for reformer, barre and mat — led by TAVI's half-finger glove — plus one wrist-support glove for Lagree and weighted work.",
      url: "https://pilatescollectiveclub.com/blog/best-pilates-gloves",
      datePublished: "2026-06-28",
      dateModified: "2026-09-27",
      image: "https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg",
      author: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com", logo: { "@type": "ImageObject", url: "https://pilatescollectiveclub.com/logo.png" } },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-gloves" },
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Gloves 2026",
      numberOfItems: PRODUCTS.length,
      itemListElement: PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: p.name,
          description: p.description,
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: p.price.replace(/[^0-9.]/g, ""),
            availability: "https://schema.org/InStock",
            url: p.affiliateUrl,
          },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", position: 3, name: "Best Pilates Gloves", item: "https://pilatescollectiveclub.com/blog/best-pilates-gloves" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you need gloves for Pilates?",
          acceptedAnswer: { "@type": "Answer", text: "Gloves are not required for Pilates or Lagree, but many practitioners use them to prevent calluses, improve grip on sweaty reformer handles and footbars, and add wrist support. They're especially useful during high-intensity Lagree sessions." },
        },
        {
          "@type": "Question",
          name: "Are Pilates grip gloves the same as weight-lifting gloves?",
          acceptedAnswer: { "@type": "Answer", text: "No. Pilates grip gloves are usually thin, fingerless or half-finger gloves with a grippy palm, designed for reformer handles, straps, barre and mat work. Weight-lifting gloves are typically bulkier and padded for barbells and dumbbells. That's why this guide focuses on grip gloves, with one wrist-support glove (MhIL) for Lagree or weighted work." },
        },
        {
          "@type": "Question",
          name: "What type of gloves are best for reformer Pilates?",
          acceptedAnswer: { "@type": "Answer", text: "Fingerless or half-finger gloves with silicone grip pads are ideal for reformer Pilates — they protect palms while keeping fingertip sensitivity for footstrap and spring adjustments. Look for a slim profile that won't catch on reformer straps. The TAVI Half Finger Gym Gloves are our top pick." },
        },
        {
          "@type": "Question",
          name: "Are Lagree gloves different from regular workout gloves?",
          acceptedAnswer: { "@type": "Answer", text: "Lagree practitioners often prefer full-grip or full-finger gloves because the Megaformer's handles and carriage bars require sustained grip. The key difference is prioritising grip coverage over dexterity, since Lagree movements are slow and controlled rather than requiring fine motor adjustments. If you also want wrist support for Lagree or weighted work, the MhIL gloves with built-in wrist wraps are our pick." },
        },
      ],
    },
  ],
};

export default function BestPilatesGlovesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-2 mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide" style={{ backgroundColor: "#f0ebe8", color: "#5c4a3d" }}>Equipment</span>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide" style={{ backgroundColor: "#f0ebe8", color: "#5c4a3d" }}>Accessories</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "#2d1f17" }}>
              Best Pilates Gloves (2026): Grip Gloves for Reformer &amp; Lagree
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9e8a7e" }}>Updated September 27, 2026 · 6 min read</p>
            <div className="p-4 rounded-xl mb-8 text-sm" style={{ backgroundColor: "#f0ebe8", color: "#7a6358" }}>
              <strong>Affiliate disclosure:</strong> We may earn a commission on purchases made through links on this page, at no extra cost to you. We only recommend products we have researched thoroughly.
            </div>
            <hr style={{ borderColor: "#e8e0db" }} className="mb-8" />
            <p className="text-lg leading-relaxed" style={{ color: "#5c4a3d" }}>
              Most Pilates practitioners never think about gloves until their palms are raw after a sweaty Megaformer session or their wrists start complaining mid-plank. The right glove adds grip where you need it — footbar, carriage handles, push-through bar — without sacrificing the hand sensitivity that makes Pilates feedback so valuable. We checked five gloves against live Amazon listings and confirmed all five as real, currently-sold, in-stock products. Four are true Pilates grip gloves — fingerless or half-finger styles for reformer, barre and mat — from TAVI, Gaiam, oasymala and Eurzom, ranging from $7.65 to $31.99. The fifth, from MhIL, adds built-in wrist wraps for Lagree and weighted work.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg"
                alt="Pilates gloves for reformer and Lagree grip"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.85)" }}
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            {/* Quick picks */}
            <div className="rounded-2xl p-6 mb-12" style={{ backgroundColor: "#fcf9f8", border: "1px solid #e8e0db" }}>
              <h2 className="text-lg font-bold mb-4" style={{ color: "#2d1f17" }}>Quick Picks</h2>
              <ul className="space-y-2 text-sm" style={{ color: "#5c4a3d" }}>
                {PRODUCTS.map((p) => (
                  <li key={p.rank} className="flex gap-3">
                    <span className="font-bold" style={{ color: "#c4956a", minWidth: "28px" }}>{p.rank}</span>
                    <span><a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" className="font-semibold hover:underline" style={{ color: "#2d1f17" }}>{p.name}</a> — {p.verdict}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product cards */}
            {PRODUCTS.map((p) => (
              <div key={p.rank} className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-black" style={{ color: "#e8e0db" }}>{p.rank}</span>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#f0ebe8", color: "#c4956a" }}>{p.tag}</span>
                </div>
                <ProductCard
                  name={p.name}
                  description={p.description}
                  price={p.price}
                  affiliateUrl={p.affiliateUrl}
                />
              </div>
            ))}

            <UpsellCTA
              eyebrow="Complete Your Studio Kit"
              title="Grip handled. The upgrade that matters more"
              body="Gloves protect your hands; the surface under you and the machine you train on shape everything else. If you practise at home, a dense studio-grade mat and a budget home reformer are the two upgrades regulars say they wish they had bought sooner."
              picks={[
                { name: "Manduka PRO Yoga Mat (6mm)", price: "$144", url: "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20", note: "Sold by Amazon.com. The dense mat studios use — firm enough for Pilates wrist and knee work." },
                { name: "WINDFOOT Foldable Pilates Reformer", price: "$295.99", url: "https://www.amazon.com/dp/B0D31767J1?tag=pilatescollective-20", note: "A budget spring reformer from a newer brand — folds away after use." },
              ]}
              guideHref="/blog/best-pilates-reformer-under-500"
              guideLabel="Compare home reformers under $500"
            />

            {/* Buyer's guide */}
            <div className="rounded-2xl p-8 mb-12" style={{ backgroundColor: "#fcf9f8", border: "1px solid #e8e0db" }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#2d1f17" }}>How to Choose Pilates Gloves</h2>
              <div className="space-y-5 text-base leading-relaxed" style={{ color: "#5c4a3d" }}>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "#2d1f17" }}>Fingerless vs. full-finger</h3>
                  <p>Fingerless gloves dominate mat and classical reformer work — they protect palms while keeping fingertip sensitivity for strap adjustments. Full-finger designs suit Lagree, where sustained grip on the carriage handles matters more than dexterity.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "#2d1f17" }}>Wrist support</h3>
                  <p>Most Pilates grip gloves offer no wrist support. If wrist strain is an issue during planks and push-up sequences on the box, or you do Lagree or weighted work, look for a glove with integrated wrap straps, like the MhIL pick above.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "#2d1f17" }}>Grip gloves vs. weight-lifting gloves</h3>
                  <p>Pilates grip gloves are thin, with a grippy palm, so you keep a feel for the handles and straps. Padded weight-lifting gloves are bulkier and built for barbells and dumbbells — they can make reformer work feel clumsy.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "#2d1f17" }}>Washability</h3>
                  <p>Pilates gloves get sweaty fast. Look at the current listing for washing guidance for your specific pair, and let gloves air dry fully between sessions to protect the grip surface and padding.</p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#2d1f17" }}>Frequently Asked Questions</h2>
              <div className="space-y-6">
                {(jsonLd["@graph"][3] as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] }).mainEntity.map((faq) => (
                  <div key={faq.name}>
                    <h3 className="font-semibold mb-2" style={{ color: "#2d1f17" }}>{faq.name}</h3>
                    <p className="text-base leading-relaxed" style={{ color: "#5c4a3d" }}>{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Further reading */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#2d1f17" }}>Further Reading</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ArticleCard title="Pilates Essentials: The Complete List" excerpt="The best, budget and splurge pick in every category — clothing, props, recovery and a home reformer, all on one page." href="/blog/pilates-essentials" category="Equipment" readTime="14 min read" date="September 2026" />
                <ArticleCard title="Reformer Pilates Essentials" excerpt="What to wear, bring and buy for reformer class — and when a home reformer starts paying for itself." href="/blog/reformer-pilates-essentials" category="Equipment" readTime="12 min read" date="September 2026" />
                <ArticleCard
                  title="Best Pilates Grip Socks (2026): Non-Slip Picks for Every Studio"
                  excerpt="toesox, TAVI, Tucketts and the budget grip socks worth buying for reformer and mat classes."
                  href="/blog/best-pilates-grip-socks"
                  category="Equipment"
                  readTime="6 min"
                  date="2026-06-28"
                  imageUrl="/pictures/jade-stephens-N21356amsyw-unsplash.jpg"
                />
                <ArticleCard
                  title="Best Mini Resistance Loops for Pilates (2026)"
                  excerpt="Peach Bands, Lululemon Emerge, TheraBand CLX — the loops that add targeted glute and hip resistance to reformer and mat work."
                  href="/blog/best-mini-resistance-loops-for-pilates"
                  category="Equipment"
                  readTime="6 min"
                  date="2026-06-28"
                  imageUrl="/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Find a studio near you"
          subtitle="Use our curated city guides to discover the best Pilates and Lagree studios in your area."
          showSearch
          searchPlaceholder="Ask: best Pilates studios in New York..."
        />
      </main>
      <Footer />
    </>
  );
}
