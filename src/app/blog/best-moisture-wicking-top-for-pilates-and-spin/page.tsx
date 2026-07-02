import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Moisture-Wicking Tops for Pilates & Spin (2026) | Pilates Collective Club",
  description: "Stay dry and comfortable through the hardest Lagree and spin sessions. We tested the best moisture-wicking tops for women and men across breathability, fit, and durability.",
  keywords: [
    "best moisture wicking top pilates",
    "best workout top spin class",
    "moisture wicking shirt lagree",
    "best athletic top women pilates",
    "sweat wicking top indoor cycling",
    "best pilates shirt 2026",
    "spin class top womens",
    "lagree workout clothing",
  ],
  openGraph: {
    title: "Best Moisture-Wicking Tops for Pilates & Spin (2026)",
    description: "Stay dry through Lagree and spin sessions. Top-tested moisture-wicking shirts for breathability, fit, and durability.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-moisture-wicking-top-for-pilates-and-spin",
    images: [
      {
        url: "https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg",
        width: 1200,
        height: 630,
        alt: "Moisture wicking tops for pilates and spin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Moisture-Wicking Tops for Pilates & Spin (2026)",
    description: "Stay dry through Lagree and spin sessions. Top-tested moisture-wicking shirts for breathability, fit, and durability.",
    images: ["https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/best-moisture-wicking-top-for-pilates-and-spin",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Lululemon Swiftly Tech Long Sleeve",
    price: "$78",
    verdict: "Best Overall",
    description:
      "Lululemon's Swiftly Tech fabric wicks sweat faster than almost anything on the market. The four-way stretch and flatlock seams mean zero chafing during Megaformer planks or a 45-minute spin climb. Available in a slim or relaxed fit and holds its shape after dozens of washes.",
    affiliateUrl:
      "https://www.amazon.com/s?k=lululemon+swiftly+tech+long+sleeve&tag=pilatescollective-20",
    tag: "Top Pick",
  },
  {
    rank: "02",
    name: "Nike Dri-FIT ADV Rise 365 Short-Sleeve Top",
    price: "$55",
    verdict: "Best for Spin",
    description:
      "Nike's ADV-tier Dri-FIT uses a textured yarn that channels moisture away from skin more aggressively than standard Dri-FIT. The open back panel is a major advantage in a hot spin studio. Lightweight enough that you almost forget you're wearing it at full RPM.",
    affiliateUrl:
      "https://www.amazon.com/s?k=nike+dri-fit+adv+rise+365+short+sleeve&tag=pilatescollective-20",
    tag: "Spin Favourite",
  },
  {
    rank: "03",
    name: "Alo Yoga Amplify Tank",
    price: "$64",
    verdict: "Best for Lagree",
    description:
      "Alo's Amplify fabric is thick enough for full Megaformer sessions without feeling heavy, and the elongated hem stays tucked during inversion-adjacent moves like pike and mountain climber. The ribbed texture adds stretch recovery that keeps the silhouette clean set after set.",
    affiliateUrl:
      "https://www.amazon.com/s?k=alo+yoga+amplify+tank+top&tag=pilatescollective-20",
    tag: "Lagree Pick",
  },
  {
    rank: "04",
    name: "Under Armour HeatGear Armour Compression Top",
    price: "$35",
    verdict: "Best Budget",
    description:
      "HeatGear moves sweat to the surface almost instantly and dries in minutes. The compression fit supports muscle engagement cues during Lagree slow-twitch work and the UPF 30 protection is a bonus for outdoor cooldowns. Exceptional value — stock up in two colours.",
    affiliateUrl:
      "https://www.amazon.com/s?k=under+armour+heatgear+compression+top+women&tag=pilatescollective-20",
    tag: "Best Value",
  },
  {
    rank: "05",
    name: "Gymshark Speed Seamless Top",
    price: "$45",
    verdict: "Best Seamless Construction",
    description:
      "Seamless construction eliminates all pressure points and rubbing that can occur in long Megaformer sessions. The Speed fabric is engineered for high-output workouts with ventilation zones across the upper back and underarm. A cult favourite in Lagree studios worldwide.",
    affiliateUrl:
      "https://www.amazon.com/s?k=gymshark+speed+seamless+top&tag=pilatescollective-20",
    tag: "Studio Favourite",
  },
  {
    rank: "06",
    name: "Patagonia Capilene Cool Daily Shirt",
    price: "$49",
    verdict: "Best Sustainable Option",
    description:
      "Made from recycled polyester with HeiQ Fresh odour control, the Capilene Cool Daily is the most sustainable pick on this list without sacrificing performance. Dries incredibly fast and resists the post-workout smell that plagues cheaper synthetics. A smart buy for daily training.",
    affiliateUrl:
      "https://www.amazon.com/s?k=patagonia+capilene+cool+daily+shirt&tag=pilatescollective-20",
    tag: "Eco Choice",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best Moisture-Wicking Tops for Pilates & Spin (2026)",
      description:
        "Stay dry and comfortable through the hardest Lagree and spin sessions. We tested the best moisture-wicking tops across breathability, fit, and durability.",
      url: "https://pilatescollectiveclub.com/blog/best-moisture-wicking-top-for-pilates-and-spin",
      datePublished: "2026-07-02",
      dateModified: "2026-07-02",
      image:
        "https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg",
      author: {
        "@type": "Organization",
        name: "Pilates Collective Club",
        url: "https://pilatescollectiveclub.com",
      },
      publisher: {
        "@type": "Organization",
        name: "Pilates Collective Club",
        logo: {
          "@type": "ImageObject",
          url: "https://pilatescollectiveclub.com/logo.png",
        },
      },
      mainEntityOfPage:
        "https://pilatescollectiveclub.com/blog/best-moisture-wicking-top-for-pilates-and-spin",
    },
    {
      "@type": "ItemList",
      name: "Best Moisture-Wicking Tops for Pilates & Spin",
      numberOfItems: 6,
      itemListElement: PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        url: p.affiliateUrl,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", position: 2, name: "Journal", item: "https://pilatescollectiveclub.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Moisture-Wicking Tops for Pilates & Spin",
          item: "https://pilatescollectiveclub.com/blog/best-moisture-wicking-top-for-pilates-and-spin",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What fabric is best for moisture-wicking in Pilates and spin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Polyester and nylon blends with proprietary moisture-management finishes (like Dri-FIT, Swiftly, or HeatGear) are the most effective. They draw sweat away from skin to the fabric surface where it evaporates quickly. Avoid 100% cotton — it absorbs moisture and stays wet.",
          },
        },
        {
          "@type": "Question",
          name: "Should I wear a tight or loose top for Lagree?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A fitted or compression-style top is generally better for Lagree. It stays in place during planks and pike movements, doesn't bunch under straps, and allows your instructor to observe your form. Loose tops can ride up and obscure alignment.",
          },
        },
        {
          "@type": "Question",
          name: "How do I prevent workout tops from smelling after spin class?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wash moisture-wicking tops immediately after training, turn them inside out, and use a sports-specific detergent. Avoid fabric softeners — they clog the moisture-wicking fibres over time. Air-dry rather than tumble-dry to preserve the technical finish.",
          },
        },
      ],
    },
  ],
};

export default function BestMoistureWickingTopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#9a9490",
                }}
              >
                Clothing
              </span>
              <span style={{ color: "#d4c5b5", fontSize: "10px" }}>·</span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "10px",
                  fontWeight: 400,
                  color: "#b5a99a",
                }}
              >
                9 min read
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: "#1a1714",
                marginBottom: "24px",
              }}
            >
              Best Moisture-Wicking Tops for Pilates &amp; Spin (2026)
            </h1>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "17px",
                fontWeight: 300,
                color: "#4a4540",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              A soaked cotton tee in a Lagree session is not just uncomfortable — it throws off your grip, your instructor&apos;s visibility of your form, and your motivation to push through the last four minutes. The right moisture-wicking top makes an outsized difference in how your training feels and performs.
            </p>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                fontWeight: 300,
                color: "#9a9490",
                lineHeight: 1.7,
                borderLeft: "2px solid #d4c5b5",
                paddingLeft: "16px",
              }}
            >
              This page contains affiliate links. We may earn a commission if you purchase through our links, at no extra cost to you.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-3xl mx-auto">
            <div
              style={{
                position: "relative",
                height: "420px",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/pictures/jade-stephens-N21356amsyw-unsplash.jpg"
                alt="Moisture wicking workout tops for Pilates and spin class"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            {/* Quick picks */}
            <div
              style={{
                backgroundColor: "#faf7f4",
                border: "1px solid #e8e0d6",
                borderRadius: "4px",
                padding: "28px 32px",
                marginBottom: "48px",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#9a9490",
                  marginBottom: "20px",
                }}
              >
                Quick Picks
              </h2>
              {PRODUCTS.map((p) => (
                <div
                  key={p.rank}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    paddingBottom: "12px",
                    marginBottom: "12px",
                    borderBottom: "1px solid #ede6dc",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "10px",
                        color: "#b5a99a",
                        marginRight: "10px",
                      }}
                    >
                      {p.rank}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#1a1714",
                      }}
                    >
                      {p.name}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "12px",
                      fontWeight: 300,
                      color: "#9a9490",
                    }}
                  >
                    {p.verdict}
                  </span>
                </div>
              ))}
            </div>

            {/* Product cards */}
            <div className="space-y-10">
              {PRODUCTS.map((p) => (
                <ProductCard
                  key={p.rank}
                  rank={p.rank}
                  name={p.name}
                  price={p.price}
                  verdict={p.verdict}
                  description={p.description}
                  affiliateUrl={p.affiliateUrl}
                  tag={p.tag}
                />
              ))}
            </div>

            {/* FAQ */}
            <div style={{ marginTop: "64px" }}>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.6rem",
                  fontWeight: 400,
                  color: "#1a1714",
                  marginBottom: "32px",
                }}
              >
                Frequently Asked Questions
              </h2>

              {[
                {
                  q: "What fabric is best for moisture-wicking in Pilates and spin?",
                  a: "Polyester and nylon blends with proprietary moisture-management finishes (like Dri-FIT, Swiftly, or HeatGear) are the most effective. They draw sweat away from skin to the fabric surface where it evaporates quickly. Avoid 100% cotton — it absorbs moisture and stays wet.",
                },
                {
                  q: "Should I wear a tight or loose top for Lagree?",
                  a: "A fitted or compression-style top is generally better for Lagree. It stays in place during planks and pike movements, doesn't bunch under straps, and allows your instructor to observe your form. Loose tops can ride up and obscure alignment.",
                },
                {
                  q: "How do I prevent workout tops from smelling after spin class?",
                  a: "Wash moisture-wicking tops immediately after training, turn them inside out, and use a sports-specific detergent. Avoid fabric softeners — they clog the moisture-wicking fibres over time. Air-dry rather than tumble-dry to preserve the technical finish.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  style={{
                    borderTop: "1px solid #ede6dc",
                    paddingTop: "24px",
                    paddingBottom: "24px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#1a1714",
                      marginBottom: "10px",
                    }}
                  >
                    {item.q}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "14px",
                      fontWeight: 300,
                      color: "#4a4540",
                      lineHeight: 1.75,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            {/* Further reading */}
            <div style={{ marginTop: "64px" }}>
              <h2
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#9a9490",
                  marginBottom: "28px",
                }}
              >
                Further Reading
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard
                  title="Best Padded Cycling Shorts for Spin Class"
                  excerpt="Chamois padding, compression fits, and waistband comfort compared for long rides and spin sessions."
                  href="/blog/best-padded-cycling-shorts-for-spin"
                  category="Equipment"
                  readTime="8 min"
                  imageUrl="/pictures/jade-stephens-N21356amsyw-unsplash.jpg"
                />
                <ArticleCard
                  title="Best Cycling Shoes for Spin Class"
                  excerpt="SPD vs Look Delta cleats, stiff soles, and breathable uppers — everything you need for efficient power transfer."
                  href="/blog/best-cycling-shoes-for-spin-class"
                  category="Equipment"
                  readTime="9 min"
                  imageUrl="/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Find Your Studio"
          subtitle="Explore top-rated Pilates and Lagree studios near you."
          showSearch
          searchPlaceholder="Search by city or neighbourhood..."
        />
      </main>
      <Footer />
    </>
  );
}
