import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Sweat Towel for Lagree & Pilates (2026): Studio Towels Ranked",
  description: "The best sweat towels for Lagree Fitness and Pilates studios — quick-dry microfibre, non-slip surface towels, and compact gym towels tested for absorbency, grip, and wash durability.",
  keywords: [
    "best sweat towel for lagree",
    "lagree fitness towel",
    "pilates sweat towel",
    "gym towel quick dry",
    "microfibre workout towel",
    "best gym towel",
    "pilates studio towel",
    "non-slip workout towel",
  ],
  openGraph: {
    title: "Best Sweat Towel for Lagree & Pilates (2026): Studio Towels Ranked",
    description: "The best sweat towels for Lagree Fitness and Pilates — quick-dry microfibre, non-slip surface towels, and compact gym towels compared.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-sweat-towel-for-lagree",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-water-towel-bench.png", width: 1200, height: 630, alt: "Best Sweat Towel for Lagree" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Sweat Towel for Lagree & Pilates (2026): Studio Towels Ranked",
    description: "The best sweat towels for Lagree Fitness and Pilates — quick-dry microfibre, non-slip surface towels, and compact gym towels compared.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-water-towel-bench.png"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/best-sweat-towel-for-lagree",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Rainleaf Microfibre Towel — Fast Drying Gym Towel",
    price: "From $14",
    verdict: "Best overall for Lagree sweat management",
    description: "Rainleaf's microfibre towel is the most popular gym towel on Amazon for good reason: it absorbs 4x its weight in moisture, dries in under 30 minutes, and packs into a compact carry pouch that fits any Pilates bag. The 16x32 inch size is ideal for face-and-neck use during Megaformer sessions without excessive bulk on the carriage.",
    affiliateUrl: "https://www.amazon.com/s?k=Rainleaf+Microfibre+Towel+Fast+Drying+Gym&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Youphoria Outdoors Microfiber Towel — Sport & Gym",
    price: "From $16",
    verdict: "Best value for daily studio use",
    description: "Youphoria's sport microfibre comes in a two-pack — a practical advantage for practitioners who attend Lagree or Pilates multiple times per week. The 300gsm fabric strikes the right balance between absorbency and quick-dry time. Hangs confidently on reformer rails between exercises and holds up to daily machine washing at 40°C.",
    affiliateUrl: "https://www.amazon.com/s?k=Youphoria+Microfiber+Towel+Sport+Gym&tag=pilatescollective-20",
    tag: "Best Value",
  },
  {
    rank: "03",
    name: "Dock & Bay Workout Towel — Compact Quick Dry",
    price: "From $22",
    verdict: "Best for aesthetics and portability",
    description: "Dock & Bay's workout towels are the most visually appealing option in this category — available in dozens of colour-blocked prints that have made them a favourite in boutique Lagree studios. The compact roll packs flat, the snap loop clips to reformer rails, and the fast-dry performance matches the best functional options. A premium feel at a mid-range price.",
    affiliateUrl: "https://www.amazon.com/s?k=Dock+Bay+Workout+Towel+Compact+Quick+Dry&tag=pilatescollective-20",
    tag: "Studio Aesthetic",
  },
  {
    rank: "04",
    name: "TOPLUS Gym Towels — 3-Pack Microfibre",
    price: "From $18",
    verdict: "Best multi-pack for frequent practitioners",
    description: "TOPLUS's three-pack covers the full weekly Lagree schedule without laundry anxiety. The medium-weight microfibre is absorbent enough for an intense Megaformer session, and the separate hand towel, gym towel, and cooling towel format suits practitioners who want dedicated options for face, neck, and equipment wipe-down.",
    affiliateUrl: "https://www.amazon.com/s?k=TOPLUS+Gym+Towels+3+Pack+Microfibre&tag=pilatescollective-20",
    tag: "Multi-Pack",
  },
  {
    rank: "05",
    name: "PackTowl Personal Quick Dry Towel — Sport Size",
    price: "From $24",
    verdict: "Best build quality for long-term use",
    description: "PackTowl has been making premium sport towels for outdoor and fitness use for over two decades. The Polygiene® OdorCon permanent odour treatment keeps these fresh even after weeks of intensive Lagree use without laundering. The TENCEL fibre blend is notably softer than standard microfibre alternatives — a noticeable difference when pressed against sweaty skin.",
    affiliateUrl: "https://www.amazon.com/s?k=PackTowl+Personal+Quick+Dry+Towel+Sport&tag=pilatescollective-20",
    tag: "Long-Term Pick",
  },
  {
    rank: "06",
    name: "Manduka Yogitoes Skidless Towel — Non-Slip",
    price: "From $68",
    verdict: "Best for non-slip mat coverage",
    description: "While primarily a yoga mat towel, the Manduka Yogitoes is used by many Pilates practitioners as a non-slip reformer pad for sweaty sessions. The silicone nub underside grips the carriage or mat surface, while the 100% recycled PET top absorbs sweat. More expensive than standard gym towels, but uniquely useful for reformer box work where grip matters.",
    affiliateUrl: "https://www.amazon.com/s?k=Manduka+Yogitoes+Skidless+Towel+Non+Slip&tag=pilatescollective-20",
    tag: "Non-Slip Option",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best Sweat Towel for Lagree & Pilates (2026): Studio Towels Ranked",
      description: "The best sweat towels for Lagree Fitness and Pilates — quick-dry microfibre, non-slip surface towels, and compact gym towels compared.",
      url: "https://pilatescollectiveclub.com/blog/best-sweat-towel-for-lagree",
      datePublished: "2026-06-28",
      dateModified: "2026-06-28",
      image: "https://pilatescollectiveclub.com/pictures/stitch-water-towel-bench.png",
      author: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com", logo: { "@type": "ImageObject", url: "https://pilatescollectiveclub.com/logo.png" } },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-sweat-towel-for-lagree" },
    },
    {
      "@type": "ItemList",
      name: "Best Sweat Towel for Lagree 2026",
      numberOfItems: PRODUCTS.length,
      itemListElement: PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: p.name,
          description: p.description,
          offers: { "@type": "Offer", priceCurrency: "USD", price: p.price.replace(/[^0-9]/g, ""), availability: "https://schema.org/InStock", url: p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", position: 3, name: "Best Sweat Towel for Lagree", item: "https://pilatescollectiveclub.com/blog/best-sweat-towel-for-lagree" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do Lagree studios provide towels?",
          acceptedAnswer: { "@type": "Answer", text: "Most boutique Lagree studios do not provide complimentary towels, though some offer them for rent or purchase at the front desk. Bringing your own towel is standard practice — particularly important given how intensely Lagree workouts generate sweat compared to traditional Pilates classes." },
        },
        {
          "@type": "Question",
          name: "What size towel should I bring to Lagree?",
          acceptedAnswer: { "@type": "Answer", text: "A medium gym towel (approximately 16x32 inches) is ideal for Lagree — large enough for face and neck use, small enough not to interfere with equipment. Some practitioners bring a second small hand towel for wiping the Megaformer handles and platform between exercises." },
        },
        {
          "@type": "Question",
          name: "Is microfibre better than cotton for gym towels?",
          acceptedAnswer: { "@type": "Answer", text: "Yes, for fitness use. Microfibre absorbs more moisture than cotton, dries significantly faster (30 minutes vs several hours), and packs far more compactly in a gym bag. Cotton towels are softer against skin but impractical for daily studio attendance — they stay damp and can develop odour between washes." },
        },
      ],
    },
  ],
};

export default function BestSweatTowelForLagreePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-2 mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide" style={{ backgroundColor: "#f0ebe8", color: "#5c4a3d" }}>Studio Essentials</span>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide" style={{ backgroundColor: "#f0ebe8", color: "#5c4a3d" }}>Lagree</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "#2d1f17" }}>
              Best Sweat Towel for Lagree &amp; Pilates (2026): Studio Towels Ranked
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9e8a7e" }}>Updated June 28, 2026 · 5 min read</p>
            <div className="p-4 rounded-xl mb-8 text-sm" style={{ backgroundColor: "#f0ebe8", color: "#7a6358" }}>
              <strong>Affiliate disclosure:</strong> We may earn a commission on purchases made through links on this page, at no extra cost to you. We only recommend products we have researched thoroughly.
            </div>
            <hr style={{ borderColor: "#e8e0db" }} className="mb-8" />
            <p className="text-lg leading-relaxed" style={{ color: "#5c4a3d" }}>
              Lagree generates more sweat per class than almost any other studio format — the sustained slow-burn tension and 90-second holds are genuinely intense. A proper sweat towel is not an afterthought; it&apos;s essential kit. You need something that absorbs fast, dries before your next class, and fits in the compact Pilates bag you&apos;re already carrying. These six options cover every scenario from daily studio attendance to occasional mat Pilates.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-water-towel-bench.png" alt="Studio sweat towel and water bottle for Lagree fitness" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
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

            {PRODUCTS.map((p) => (
              <div key={p.rank} className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-black" style={{ color: "#e8e0db" }}>{p.rank}</span>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#f0ebe8", color: "#c4956a" }}>{p.tag}</span>
                </div>
                <ProductCard name={p.name} description={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />
              </div>
            ))}

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

            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#2d1f17" }}>Further Reading</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ArticleCard
                  title="Best Pilates Water Bottle (2026): Hydration for Studio & Reformer"
                  excerpt="Owala, HydroFlask, Lululemon — the water bottles that actually fit in a reformer studio and keep drinks cold through class."
                  href="/blog/best-pilates-water-bottle"
                  category="Accessories"
                  readTime="6 min"
                  date="2026-06-28"
                  imageUrl="/pictures/stitch-water-towel-bench.png"
                />
                <ArticleCard
                  title="Best Yoga Mat Towel for Pilates (2026): Non-Slip Picks Tested"
                  excerpt="Manduka eQua, Liforme, Gaiam — the mat towels that turn any surface into a non-slip Pilates platform."
                  href="/blog/best-yoga-mat-towel-for-pilates"
                  category="Equipment"
                  readTime="6 min"
                  date="2026-06-28"
                  imageUrl="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Find a Lagree studio near you"
          subtitle="Use our curated city guides to discover the best Lagree Fitness and Pilates studios in your area."
          showSearch
          searchPlaceholder="Ask: best Lagree studios in Miami..."
        />
      </main>
      <Footer />
    </>
  );
}
