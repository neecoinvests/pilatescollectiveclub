import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Water Bottle Holders for Spin Bikes (2026) | Pilates Collective Club",
  description: "Never lose your water mid-ride. We ranked the best water bottle holders and cages for Peloton, Schwinn, NordicTrack, and other spin bikes by grip, fit, and stability.",
  keywords: [
    "best water bottle holder spin bike",
    "spin bike water bottle cage",
    "peloton water bottle holder",
    "bike water bottle mount",
    "indoor cycling hydration",
    "best bottle cage indoor bike",
    "schwinn ic4 water bottle holder",
    "spin bike accessories 2026",
  ],
  openGraph: {
    title: "Best Water Bottle Holders for Spin Bikes (2026)",
    description: "Never lose your water mid-ride. Best water bottle holders and cages for Peloton, Schwinn, NordicTrack, and other spin bikes.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-water-bottle-holder-for-spin-bike",
    images: [
      {
        url: "https://pilatescollectiveclub.com/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg",
        width: 1200,
        height: 630,
        alt: "Water bottle holder for spin bike",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Water Bottle Holders for Spin Bikes (2026)",
    description: "Never lose your water mid-ride. Best water bottle holders for Peloton, Schwinn, and other spin bikes.",
    images: ["https://pilatescollectiveclub.com/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/best-water-bottle-holder-for-spin-bike",
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
    name: "Peloton Original Water Bottle Cage",
    price: "$29",
    verdict: "Best for Peloton",
    description:
      "Designed to fit Peloton's proprietary frame rails exactly, this is the only holder that attaches without any adapters or modification. The spring-loaded cage grips bottles from 20 oz to 32 oz securely even during climbs and sprints. If you have a Peloton Bike or Bike+, start here.",
    affiliateUrl:
      "https://www.amazon.com/s?k=peloton+water+bottle+cage+holder&tag=pilatescollective-20",
    tag: "Peloton Pick",
  },
  {
    rank: "02",
    name: "Topeak Modula Cage EX",
    price: "$18",
    verdict: "Best Adjustable Cage",
    description:
      "The Modula Cage EX adjusts to fit bottles from 550 ml to 1 litre with a simple hex-key screw. It mounts to any standard 74 mm bolt pattern, making it compatible with Schwinn IC4, NordicTrack S22i, and most belt-drive spin bikes. A reliable workhorse for any home studio setup.",
    affiliateUrl:
      "https://www.amazon.com/s?k=topeak+modula+cage+EX+bottle+holder&tag=pilatescollective-20",
    tag: "Most Versatile",
  },
  {
    rank: "03",
    name: "Elite Ciussi Evo Cage",
    price: "$22",
    verdict: "Best Grip",
    description:
      "Elite's Ciussi Evo has an unusually deep basket with side-entry release that prevents bottles from bouncing out during high-cadence intervals. Polypropylene construction is lightweight and non-scratch. Works with oversized bottles and hydration cups from major spin brands.",
    affiliateUrl:
      "https://www.amazon.com/s?k=elite+ciussi+evo+bottle+cage&tag=pilatescollective-20",
    tag: "Best Grip",
  },
  {
    rank: "04",
    name: "CyclingDeal Water Bottle Cage with Handlebar Mount",
    price: "$14",
    verdict: "Best Handlebar Mount",
    description:
      "For spin bikes with no frame cage mounts, this clamp-on handlebar adapter solves everything. The adjustable clamp fits handlebars from 22 mm to 32 mm and positions the bottle within easy reach during your ride. Budget-friendly and easy to install without tools.",
    affiliateUrl:
      "https://www.amazon.com/s?k=spin+bike+handlebar+water+bottle+cage+mount&tag=pilatescollective-20",
    tag: "No-Mount Solution",
  },
  {
    rank: "05",
    name: "Arundel Mandible Cage",
    price: "$35",
    verdict: "Best Premium Option",
    description:
      "Arundel makes some of the best road cycling cages in the world, and the Mandible's fibreglass construction and side-entry design translate perfectly to intense indoor training. It grips bottles from the top third rather than the base, preventing loosening as the bottle empties and vibration increases.",
    affiliateUrl:
      "https://www.amazon.com/s?k=arundel+mandible+water+bottle+cage&tag=pilatescollective-20",
    tag: "Premium",
  },
  {
    rank: "06",
    name: "Kuou 2-Pack Universal Bottle Cage",
    price: "$9",
    verdict: "Best Budget",
    description:
      "At under $5 per cage, the Kuou universal cage is a no-brainer backup or starter option. PP plastic construction handles spin studio temperatures without deforming, and the wide spring opening fits most standard water bottles. Order two and fit both sides of your bike frame.",
    affiliateUrl:
      "https://www.amazon.com/s?k=universal+spin+bike+water+bottle+cage+2+pack&tag=pilatescollective-20",
    tag: "Budget Pick",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best Water Bottle Holders for Spin Bikes (2026)",
      description:
        "We ranked the best water bottle holders and cages for Peloton, Schwinn, NordicTrack, and other spin bikes by grip, fit, and stability.",
      url: "https://pilatescollectiveclub.com/blog/best-water-bottle-holder-for-spin-bike",
      datePublished: "2026-07-02",
      dateModified: "2026-07-02",
      image:
        "https://pilatescollectiveclub.com/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg",
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
        "https://pilatescollectiveclub.com/blog/best-water-bottle-holder-for-spin-bike",
    },
    {
      "@type": "ItemList",
      name: "Best Water Bottle Holders for Spin Bikes",
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
          name: "Best Water Bottle Holders for Spin Bikes",
          item: "https://pilatescollectiveclub.com/blog/best-water-bottle-holder-for-spin-bike",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do all spin bikes have water bottle mounts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Peloton, Schwinn IC4, and NordicTrack S22i all have at least one standard cage mount. Budget spin bikes often omit them entirely. If your bike has no mount, a handlebar clamp adapter like the CyclingDeal mount is the cleanest solution.",
          },
        },
        {
          "@type":
            "Question",
          name: "What size water bottle fits a spin bike cage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most cages accept standard 74 mm diameter bottles — typically 20 oz to 32 oz sizes. Insulated bottles like a Hydro Flask or YETI Rambler are slightly wider (80 mm) and need an adjustable or side-entry cage to fit securely.",
          },
        },
        {
          "@type": "Question",
          name: "How do I stop my water bottle from falling out during sprints?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use a cage with side-entry release (like the Elite Ciussi Evo) rather than a top-loading cage. Side-entry designs grip the bottle from multiple directions and require a deliberate lateral pull to remove — vibration alone won't eject the bottle.",
          },
        },
      ],
    },
  ],
};

export default function BestWaterBottleHolderPage() {
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
                Spinning
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
                7 min read
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
              Best Water Bottle Holders for Spin Bikes (2026)
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
              Staying hydrated during a 45-minute spin session is non-negotiable, but most riders underestimate how much the right cage matters. A bottle that pops out mid-sprint, wobbles during climbs, or simply doesn&apos;t fit your bike costs you focus and momentum. These are the holders worth installing.
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
                src="/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg"
                alt="Water bottle holder attached to spin bike"
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
                  key={p.name}
                  name={p.name}
                  price={p.price}
                  description={p.description}
                  affiliateUrl={p.affiliateUrl}
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
                  q: "Do all spin bikes have water bottle mounts?",
                  a: "No. Peloton, Schwinn IC4, and NordicTrack S22i all have at least one standard cage mount. Budget spin bikes often omit them entirely. If your bike has no mount, a handlebar clamp adapter like the CyclingDeal mount is the cleanest solution.",
                },
                {
                  q: "What size water bottle fits a spin bike cage?",
                  a: "Most cages accept standard 74 mm diameter bottles — typically 20 oz to 32 oz sizes. Insulated bottles like a Hydro Flask or YETI Rambler are slightly wider (80 mm) and need an adjustable or side-entry cage to fit securely.",
                },
                {
                  q: "How do I stop my water bottle from falling out during sprints?",
                  a: "Use a cage with side-entry release (like the Elite Ciussi Evo) rather than a top-loading cage. Side-entry designs grip the bottle from multiple directions and require a deliberate lateral pull to remove — vibration alone won't eject the bottle.",
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
                  title="Best Indoor Spin Bike for Home Studios"
                  excerpt="Peloton, Schwinn IC4, NordicTrack, and budget picks compared for resistance, ride feel, and connected training apps."
                  href="/blog/best-indoor-spin-bike-for-home-studio"
                  category="Equipment"
                  readTime="11 min"
                  imageUrl="/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg"
                />
                <ArticleCard
                  title="Best Floor Mat for Spin Bike"
                  excerpt="Protect your floors and reduce vibration with the right equipment mat — compared by thickness, grip, and size."
                  href="/blog/best-floor-mat-for-spin-bike"
                  category="Equipment"
                  readTime="6 min"
                  imageUrl="/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Find Your Studio"
          subtitle="Explore top-rated spin and Pilates studios near you."
          showSearch
          searchPlaceholder="Search by city or neighbourhood..."
        />
      </main>
      <Footer />
    </>
  );
}
