import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Mat Cleaner (2026): Sprays & Wipes for Every Mat",
  description: "The best Pilates mat cleaners for rubber, PU, TPE, and natural rubber mats — Manduka All Purpose Cleaner, Gaiam, Branch Basics, and more. What actually cleans without degrading your mat.",
  keywords: [
    "best pilates mat cleaner",
    "yoga mat cleaner spray",
    "pilates mat spray",
    "manduka mat cleaner",
    "how to clean pilates mat",
    "mat cleaning spray",
    "natural yoga mat cleaner",
    "pilates mat wipes",
  ],
  openGraph: {
    title: "Best Pilates Mat Cleaner (2026): Sprays & Wipes for Every Mat",
    description: "The best Pilates mat cleaners — Manduka, Gaiam, Branch Basics, and more. What actually cleans without degrading your mat.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-mat-cleaner",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-mats-corner-sunlit.png", width: 1200, height: 630, alt: "Best Pilates Mat Cleaner" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Mat Cleaner (2026): Sprays & Wipes for Every Mat",
    description: "The best Pilates mat cleaners — Manduka, Gaiam, Branch Basics, and more. What actually cleans without degrading your mat.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-mats-corner-sunlit.png"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/best-pilates-mat-cleaner",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Manduka All Purpose Mat Wash — Concentrate",
    price: "From $15",
    verdict: "Best overall mat cleaner",
    description: "Manduka's All Purpose Mat Wash is the industry standard for good reason. The plant-based formula is safe on all mat materials — natural rubber, PU, TPE, and closed-cell foam — and the concentrated version makes approximately 32 sprays per cap. Subtly scented with eucalyptus and tea tree, both of which have mild antimicrobial properties. No silicone, no petroleum, no harsh solvents.",
    affiliateUrl: "https://www.amazon.com/s?k=Manduka+All+Purpose+Mat+Wash+Cleaner&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Gaiam Yoga Mat Spray Cleaner",
    price: "From $12",
    verdict: "Best budget spray cleaner",
    description: "Gaiam's ready-to-use spray is the most accessible mat cleaner at any price point. The gentle formula is safe for PVC, TPE, and rubber mats and comes pre-diluted — no mixing required. Lightly scented with lavender. Works effectively for between-session wiping and doesn't leave residue that affects grip. A reliable everyday option.",
    affiliateUrl: "https://www.amazon.com/s?k=Gaiam+Yoga+Mat+Spray+Cleaner&tag=pilatescollective-20",
    tag: "Best Value",
  },
  {
    rank: "03",
    name: "Branch Basics Concentrate — All-Purpose Cleaner",
    price: "From $39",
    verdict: "Best for natural rubber and premium mats",
    description: "Branch Basics is a non-toxic, fragrance-free concentrate that Manduka and Liforme mat owners frequently use as an alternative to branded sprays. The formula contains no essential oils (which can degrade natural rubber over time) and no harsh surfactants that strip mat coatings. One bottle makes over 60 spray bottles of cleaner — a long-term value proposition despite the upfront cost.",
    affiliateUrl: "https://www.amazon.com/s?k=Branch+Basics+Concentrate+All+Purpose+Cleaner&tag=pilatescollective-20",
    tag: "Natural Rubber Safe",
  },
  {
    rank: "04",
    name: "Asutra Yoga Mat Cleaner Spray — Tea Tree & Lavender",
    price: "From $13",
    verdict: "Best scented option",
    description: "Asutra's yoga mat cleaner combines tea tree oil (antimicrobial), lavender (refreshing), and witch hazel in a pre-mixed spray. The scent profile is among the best in the category — noticeable enough to refresh the mat without being overwhelming in a closed studio. Safe for TPE, PVC, and standard rubber mats. Not recommended for open-cell natural rubber.",
    affiliateUrl: "https://www.amazon.com/s?k=Asutra+Yoga+Mat+Cleaner+Spray+Tea+Tree+Lavender&tag=pilatescollective-20",
    tag: "Best Scent",
  },
  {
    rank: "05",
    name: "GYM WIPES Pro — Antibacterial Surface Wipes",
    price: "From $22",
    verdict: "Best for shared studio equipment",
    description: "For Pilates studios that need to quickly clean shared mats, reformer pads, and handles between clients, GYM WIPES Pro are the standard commercial solution. EPA-registered for surface disinfection, pre-moistened, and designed for gym equipment surfaces including vinyl, rubber, and PU leather. Used by many boutique studios for post-class Megaformer wipe-downs.",
    affiliateUrl: "https://www.amazon.com/s?k=GYM+WIPES+Pro+Antibacterial+Surface+Wipes+Gym&tag=pilatescollective-20",
    tag: "Studio Standard",
  },
  {
    rank: "06",
    name: "Better Life Yoga Mat Spray — Plant-Based",
    price: "From $11",
    verdict: "Best eco-friendly pick",
    description: "Better Life uses a surfactant derived from coconut and corn in a water-based formula that's biodegradable and safe for septic systems. No dyes, no synthetic fragrance, no harmful preservatives. At under $12, it offers strong eco credentials without premium pricing. Effective for standard session cleaning but may require a second pass after particularly sweaty classes.",
    affiliateUrl: "https://www.amazon.com/s?k=Better+Life+Yoga+Mat+Spray+Plant+Based&tag=pilatescollective-20",
    tag: "Eco Pick",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best Pilates Mat Cleaner (2026): Sprays & Wipes for Every Mat",
      description: "The best Pilates mat cleaners — Manduka, Gaiam, Branch Basics, and more. What actually cleans without degrading your mat.",
      url: "https://pilatescollectiveclub.com/blog/best-pilates-mat-cleaner",
      datePublished: "2026-06-28",
      dateModified: "2026-06-28",
      image: "https://pilatescollectiveclub.com/pictures/stitch-mats-corner-sunlit.png",
      author: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com", logo: { "@type": "ImageObject", url: "https://pilatescollectiveclub.com/logo.png" } },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-mat-cleaner" },
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Mat Cleaner 2026",
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
        { "@type": "ListItem", position: 3, name: "Best Pilates Mat Cleaner", item: "https://pilatescollectiveclub.com/blog/best-pilates-mat-cleaner" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What should you not use to clean a Pilates mat?",
          acceptedAnswer: { "@type": "Answer", text: "Avoid bleach, hydrogen peroxide, alcohol-based sprays, and essential oil concentrations above 2%. Bleach degrades rubber and PVC, hydrogen peroxide yellows natural rubber, and undiluted essential oils break down the adhesive layers in open-cell natural rubber mats like the Manduka PRO. Dish soap leaves residue that reduces grip." },
        },
        {
          "@type": "Question",
          name: "How often should you clean a Pilates mat?",
          acceptedAnswer: { "@type": "Answer", text: "Wipe your mat with a spray cleaner after every use to remove sweat and skin oils. Do a deeper clean with diluted mat wash weekly if you practice daily, or every two to three weeks for occasional practitioners. Air dry completely before rolling — rolling a damp mat causes mildew in the inner layers." },
        },
        {
          "@type": "Question",
          name: "Can you clean a Pilates mat in the washing machine?",
          acceptedAnswer: { "@type": "Answer", text: "No — most Pilates and yoga mats should not go in a washing machine. The agitation damages the surface texture and internal structure. Manduka, Liforme, and most PU/rubber mats are wipe-clean only. A small number of TPE mats tolerate gentle hand washing, but always check the manufacturer's care instructions before submerging any mat." },
        },
      ],
    },
  ],
};

export default function BestPilatesMatCleanerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-2 mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide" style={{ backgroundColor: "#f0ebe8", color: "#5c4a3d" }}>Studio Essentials</span>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide" style={{ backgroundColor: "#f0ebe8", color: "#5c4a3d" }}>Accessories</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "#2d1f17" }}>
              Best Pilates Mat Cleaner (2026): Sprays &amp; Wipes for Every Mat
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9e8a7e" }}>Updated June 28, 2026 · 6 min read</p>
            <div className="p-4 rounded-xl mb-8 text-sm" style={{ backgroundColor: "#f0ebe8", color: "#7a6358" }}>
              <strong>Affiliate disclosure:</strong> We may earn a commission on purchases made through links on this page, at no extra cost to you. We only recommend products we have researched thoroughly.
            </div>
            <hr style={{ borderColor: "#e8e0db" }} className="mb-8" />
            <p className="text-lg leading-relaxed" style={{ color: "#5c4a3d" }}>
              The wrong cleaner can destroy a $150 Pilates mat in months — essential oils degrade natural rubber, bleach breaks down PVC, and alcohol strips the grip surface from PU leather. The right cleaner extends mat life, keeps the surface hygienic, and doesn&apos;t leave a residue that makes you slip during downward dog or spine stretch. Here are six cleaners that actually work, matched to mat type and practice frequency.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-mats-corner-sunlit.png" alt="Pilates mats ready for cleaning and maintenance" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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

            <div className="rounded-2xl p-8 mb-12" style={{ backgroundColor: "#fcf9f8", border: "1px solid #e8e0db" }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#2d1f17" }}>Mat Material Guide: Which Cleaner to Use</h2>
              <div className="space-y-4 text-sm" style={{ color: "#5c4a3d" }}>
                <div className="flex gap-4 p-4 rounded-xl" style={{ backgroundColor: "#fff" }}>
                  <div className="font-bold" style={{ color: "#c4956a", minWidth: "120px" }}>Natural Rubber</div>
                  <div>Branch Basics or Manduka All Purpose Wash (no essential oils — degrades rubber over time)</div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl" style={{ backgroundColor: "#fff" }}>
                  <div className="font-bold" style={{ color: "#c4956a", minWidth: "120px" }}>PU Leather</div>
                  <div>Manduka or Gaiam spray — avoid alcohol-based sprays that strip the coating</div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl" style={{ backgroundColor: "#fff" }}>
                  <div className="font-bold" style={{ color: "#c4956a", minWidth: "120px" }}>TPE</div>
                  <div>Any of the above — TPE is the most tolerant material; mild soap and water also works</div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl" style={{ backgroundColor: "#fff" }}>
                  <div className="font-bold" style={{ color: "#c4956a", minWidth: "120px" }}>PVC / Closed Cell</div>
                  <div>Gaiam or Asutra — standard vinyl-safe cleaners; Gym Wipes Pro for shared studio mats</div>
                </div>
              </div>
            </div>

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
                  title="Best Pilates Mat (2026): Manduka, Liforme & More Compared"
                  excerpt="The mats worth spending money on — thickness, grip, durability, and material honesty from Manduka PRO to budget TPE options."
                  href="/blog/best-pilates-mat"
                  category="Equipment"
                  readTime="8 min"
                  date="2026-06-28"
                  imageUrl="/pictures/stitch-mat-setup-beige.png"
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
          title="Find a studio near you"
          subtitle="Use our curated city guides to discover the best Pilates and Lagree studios in your area."
          showSearch
          searchPlaceholder="Ask: best Pilates studios in Chicago..."
        />
      </main>
      <Footer />
    </>
  );
}
