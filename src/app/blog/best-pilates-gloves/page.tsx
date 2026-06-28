import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Gloves (2026): Grip Gloves for Reformer & Lagree",
  description: "The best pilates and Lagree gloves for reformer grip, wrist support, and hand protection. Tested picks from Harbinger, Nike, Bear Grips, and more — with honest pros and cons.",
  keywords: [
    "best pilates gloves",
    "lagree gloves",
    "reformer pilates gloves",
    "grip gloves pilates",
    "pilates wrist support gloves",
    "best workout gloves women",
    "pilates hand protection",
    "lagree fitness gloves",
  ],
  openGraph: {
    title: "Best Pilates Gloves (2026): Grip Gloves for Reformer & Lagree",
    description: "The best pilates and Lagree gloves for reformer grip, wrist support, and hand protection — tested picks with honest pros and cons.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-gloves",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Gloves" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Gloves (2026): Grip Gloves for Reformer & Lagree",
    description: "The best pilates and Lagree gloves for reformer grip, wrist support, and hand protection — tested picks with honest pros and cons.",
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
    name: "Harbinger Women's Pro Wash & Dry Fitness Gloves",
    price: "From $19",
    verdict: "Best overall Pilates glove",
    description: "Patented Wash & Dry technology keeps them fresh after sweaty Megaformer sessions. The perforated mesh back and TechGel palm padding make these the most practical all-around glove for reformer and mat work. Available in multiple sizes with a secure wrist wrap.",
    affiliateUrl: "https://www.amazon.com/s?k=Harbinger+Women+Pro+Wash+Dry+Fitness+Gloves&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Bear Grips Workout Gloves — Full Finger Grip Pads",
    price: "From $29",
    verdict: "Best for Lagree & bar work",
    description: "Full-finger silicone grip pads with an open-back design — preferred by Lagree practitioners who need maximum contact on the carriage handles and footbar. The fingerless-style variants allow phone use between sets. Machine washable.",
    affiliateUrl: "https://www.amazon.com/s?k=Bear+Grips+Workout+Gloves+Full+Finger&tag=pilatescollective-20",
    tag: "Lagree Favourite",
  },
  {
    rank: "03",
    name: "Nike Fundamental Training Gloves (Women's)",
    price: "From $22",
    verdict: "Best for brand-conscious practitioners",
    description: "Nike's Dri-FIT liner wicks sweat during intense reformer circuits. Neoprene knuckle padding protects during weight work, while the slim profile doesn't interfere with footstrap adjustments. Velcro wrist closure for a custom fit.",
    affiliateUrl: "https://www.amazon.com/s?k=Nike+Fundamental+Training+Gloves+Women&tag=pilatescollective-20",
    tag: "Popular Pick",
  },
  {
    rank: "04",
    name: "RIMSports Premium Weight Lifting Gloves with Wrist Support",
    price: "From $25",
    verdict: "Best wrist support for Pilates",
    description: "Integrated wrist wraps provide 6-inch compression ideal for practitioners with wrist hypermobility — common in Pilates. The silicone dotted palm gives secure purchase on jump boards and box accessories without reducing dexterity.",
    affiliateUrl: "https://www.amazon.com/s?k=RIMSports+Premium+Weight+Lifting+Gloves+Wrist+Support&tag=pilatescollective-20",
    tag: "Wrist Support",
  },
  {
    rank: "05",
    name: "SIMARI Workout Gloves — Fingerless with Wrist Wrap",
    price: "From $16",
    verdict: "Best budget option",
    description: "A reliable fingerless glove with double-stitched palm padding and breathable microfibre. At under $20, these are the go-to recommendation for beginners or those unsure if gloves suit their practice. Widely reviewed for reformer and Lagree use.",
    affiliateUrl: "https://www.amazon.com/s?k=SIMARI+Workout+Gloves+Fingerless+Wrist+Wrap&tag=pilatescollective-20",
    tag: "Best Value",
  },
  {
    rank: "06",
    name: "Trideer Padded Weight Lifting Gloves — Women's",
    price: "From $18",
    verdict: "Best for reformer hand placements",
    description: "Trideer's ultra-thin padding preserves hand feel during plank and push-up variations on the reformer box, while protecting palms from the carriage frame. The wrap-around wrist strap doubles as a sweat absorber — a neat detail at this price.",
    affiliateUrl: "https://www.amazon.com/s?k=Trideer+Padded+Weight+Lifting+Gloves+Women&tag=pilatescollective-20",
    tag: "Reformer Approved",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best Pilates Gloves (2026): Grip Gloves for Reformer & Lagree",
      description: "The best pilates and Lagree gloves for reformer grip, wrist support, and hand protection — tested picks with honest pros and cons.",
      url: "https://pilatescollectiveclub.com/blog/best-pilates-gloves",
      datePublished: "2026-06-28",
      dateModified: "2026-06-28",
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
            price: p.price.replace(/[^0-9]/g, ""),
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
          name: "What type of gloves are best for reformer Pilates?",
          acceptedAnswer: { "@type": "Answer", text: "Fingerless or half-finger gloves with silicone grip pads are ideal for reformer Pilates — they protect palms while keeping fingertip sensitivity for footstrap and spring adjustments. Look for a slim profile that won't catch on reformer straps." },
        },
        {
          "@type": "Question",
          name: "Are Lagree gloves different from regular workout gloves?",
          acceptedAnswer: { "@type": "Answer", text: "Lagree practitioners often prefer full-grip or full-finger gloves because the Megaformer's handles and carriage bars require sustained grip. The key difference is prioritising grip coverage over dexterity, since Lagree movements are slow and controlled rather than requiring fine motor adjustments." },
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
            <p className="text-sm mb-6" style={{ color: "#9e8a7e" }}>Updated June 28, 2026 · 6 min read</p>
            <div className="p-4 rounded-xl mb-8 text-sm" style={{ backgroundColor: "#f0ebe8", color: "#7a6358" }}>
              <strong>Affiliate disclosure:</strong> We may earn a commission on purchases made through links on this page, at no extra cost to you. We only recommend products we have researched thoroughly.
            </div>
            <hr style={{ borderColor: "#e8e0db" }} className="mb-8" />
            <p className="text-lg leading-relaxed" style={{ color: "#5c4a3d" }}>
              Most Pilates practitioners never think about gloves until their palms are raw after a sweaty Megaformer session or their wrists start complaining mid-plank. The right glove adds grip where you need it — footbar, carriage handles, push-through bar — without sacrificing the hand sensitivity that makes Pilates feedback so valuable. These six picks cover every need from budget-conscious beginners to dedicated Lagree regulars.
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
                  <p>If wrist hypermobility is an issue — extremely common among flexible Pilates practitioners — look for integrated wrap straps that add 15–20° of flexion control. These can significantly reduce discomfort during planks and push-up sequences on the box.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "#2d1f17" }}>Palm padding thickness</h3>
                  <p>Thin padding (2–3mm) preserves proprioception for classical Pilates exercises. Thicker padding (5mm+) makes sense for weight work or long Lagree sessions where callus prevention is the priority.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "#2d1f17" }}>Washability</h3>
                  <p>Pilates gloves get sweaty fast. Prioritise machine-washable options — Harbinger&apos;s Wash &amp; Dry line and Bear Grips both handle repeated laundering without delaminating the silicone grip.</p>
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
                <ArticleCard
                  title="Best Pilates Grip Socks (2026): Non-Slip Picks for Every Studio"
                  excerpt="ToeSox, Tavi Noir, Lululemon and the other grip socks worth buying for reformer and mat classes."
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
