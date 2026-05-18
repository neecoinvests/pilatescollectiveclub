import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Milan (2026)",
  description:
    "Find the best Pilates studios in Milan — from Brera reformer boutiques to Navigli wellness centres. Five expert picks for discerning practitioners in 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: [
    "pilates studios milan",
    "reformer pilates milan",
    "best pilates milan",
    "pilates classes milano",
    "milan pilates guide",
    "boutique pilates milan",
    "pilates brera milan",
    "wellness milan",
    "pilates milano 2026",
  ],
  openGraph: {
    title: "Best Pilates Studios in Milan (2026)",
    description:
      "Find the best Pilates studios in Milan — five curated picks with booking tips for 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/milan",
    images: [
      {
        url: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Milan city guide — Pilates Collective Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Milan (2026)",
    description:
      "Find the best Pilates studios in Milan — five curated picks with booking tips for 2026.",
    images: ["https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/milan",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Attimo Pilates",
    neighborhood: "Brera",
    priceLevel: "€€€",
    review: "4.9 · 490+ reviews",
    address: "Via Pontaccio 12, Brera, Milano 20121",
    bestFor: "Design-forward studio in fashion district",
    signatureClass: "Attimo Signature Reformer",
    bookingTip: "Book via Instagram DM or app; Brera classes fill fast",
  },
  {
    number: "02",
    name: "CoreWork Fitness Pilates",
    neighborhood: "Porta Romana",
    priceLevel: "€€",
    review: "4.8 · 360+ reviews",
    address: "Via Crema 13, Porta Romana, Milano 20135",
    bestFor: "Athletic Pilates & functional training",
    signatureClass: "CoreWork Power Reformer",
    bookingTip: "10-class card saves €40 vs. drop-in rate",
  },
  {
    number: "03",
    name: "Hey Pilates",
    neighborhood: "Isola",
    priceLevel: "€€€",
    review: "4.9 · 310+ reviews",
    address: "Via Pastrengo 16, Isola, Milano 20159",
    bestFor: "Trendy reformer in up-and-coming Isola",
    signatureClass: "Hey Reformer Flow",
    bookingTip: "Online-only booking; 24-hr cancellation policy",
  },
  {
    number: "04",
    name: "THE Studio Pilates Italia",
    neighborhood: "CityLife",
    priceLevel: "€€€",
    review: "4.8 · 580+ reviews",
    address: "Piazza Tre Torri 1, CityLife, Milano 20145",
    bestFor: "International chain with Zaha Hadid backdrop",
    signatureClass: "THE Studio Reformer Signature",
    bookingTip: "Corporate memberships for CityLife business tenants",
  },
  {
    number: "05",
    name: "Möt Studios",
    neighborhood: "Navigli",
    priceLevel: "€€",
    review: "4.9 · 420+ reviews",
    address: "Via Vigevano 18, Navigli, Milano 20144",
    bestFor: "Canal-side studio with eclectic crowd",
    signatureClass: "Möt Reformer & Tower",
    bookingTip: "Evening classes post-aperitivo; book same week",
  },
  {
    number: "06",
    name: "Ceresio 7",
    neighborhood: "Porta Nuova",
    priceLevel: "€€€€",
    review: "4.8 · 350+ reviews",
    address: "Via Ceresio 7, Porta Nuova, Milano 20154",
    bestFor: "Luxury rooftop studio in Dsquared2 HQ",
    signatureClass: "Ceresio Reformer Private",
    bookingTip: "One of Milan's most exclusive studios; members only",
  }
];

const BOOKING_TIPS = [
  {
    heading: "Expect to pay €25–65 per class",
    body: "Milan's Pilates pricing spans a wide range. Group reformer classes at mid-range studios run €25–40; private sessions at premium boutiques can reach €60–80. Monthly memberships — typically four to eight classes — bring the per-class cost down to €22–35 and are the most common payment model.",
  },
  {
    heading: "Many studios close in August",
    body: "Ferragosto is real. The majority of Milan's independent studios close for two to four weeks in August. If you're visiting in summer, confirm opening dates before booking. September sees a significant surge in class demand as regulars return.",
  },
  {
    heading: "Most apps are in Italian — prepare accordingly",
    body: "A number of Milan's independent studios use Italian-language booking platforms. Google Translate handles most of it, but if you're booking by phone, a few basic phrases help considerably. Studios in Brera and the international districts typically have English-speaking reception staff.",
  },
  {
    heading: "Grip socks are mandatory",
    body: "As across Europe, toeless grip socks are required at every studio. Most sell them at reception (€12–16) but bringing your own saves both money and the awkwardness of arriving unprepared.",
  },
  {
    heading: "Introductory offers vary — check the terms",
    body: "Many Milan studios offer first-time client packages, but expiry windows can be short — some as tight as three weeks. Read the terms before purchasing and book your sessions immediately after buying to avoid losing them.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Brera",
    description:
      "Milan&apos;s most artistically prestigious quarter is also home to its most sophisticated wellness offering. Studios here tend toward the boutique and considered — small class sizes, carefully sourced equipment, and an instructor quality that matches the neighbourhood&apos;s exacting standards. The premium for a Brera address is real but justified.",
  },
  {
    name: "Porta Venezia & Corso Buenos Aires",
    description:
      "A more accessible and diverse neighbourhood with a growing wellness infrastructure. Studios here offer better value than central Milan without compromising significantly on quality. The Corso Buenos Aires corridor in particular has seen strong studio growth over the last three years.",
  },
  {
    name: "Moscova",
    description:
      "Quiet, residential, and home to several of Milan&apos;s best private instruction studios. Moscova suits clients seeking a more personal, appointment-based approach to Pilates rather than the group class model. Expect excellent instruction in intimate settings.",
  },
  {
    name: "Navigli",
    description:
      "Historically overlooked for wellness, Navigli is now a legitimate destination for Pilates. The studios here tend to be newer, more dynamic in their programming, and notably more affordable than central Milan alternatives. An excellent area for evening classes after work.",
  },
];

const RELATED_CITIES = [
  { city: "Rome", country: "Italy", href: "/cities/rome", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
  { city: "Barcelona", country: "Spain", href: "/cities/barcelona", studioCount: 5 },
  { city: "Zurich", country: "Switzerland", href: "/cities/zurich", studioCount: 5 },
];

const FURTHER_READING = [
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt: "Everything you need between studio sessions — from a quality mat to resistance bands.",
    href: "/blog/best-pilates-equipment-for-home-practice",
    category: "Equipment",
    readTime: "10 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80",
  },
  {
    title: "The Beginner's Guide to Reformer Pilates",
    excerpt: "What to expect in your first reformer class, how to choose a studio, and how to progress.",
    href: "/blog/beginners-guide-to-reformer-pilates",
    category: "Beginner Guide",
    readTime: "8 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=800&q=80",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Milan", "item": "https://pilatescollectiveclub.com/cities/milan" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Milan",
      "description": "Curated guide to the top 5 Pilates studios in Milan.",
      "url": "https://pilatescollectiveclub.com/cities/milan",
      "numberOfItems": 6,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": {
            "@type": "PostalAddress",
            "streetAddress": s.address,
            "addressLocality": "Milan",
            "addressCountry": "IT",
          },
        },
      })),
    },
  ],
};

export default function MilanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
                City Guide
              </span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>
                Italy
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Milan</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Updated May 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Milan&apos;s wellness culture has matured considerably in recent years, and the city&apos;s Pilates scene is one of the most compelling in southern Europe. The same instinct for quality and aesthetics that drives Milan&apos;s fashion and design industries is increasingly visible in its studios — from the intimate private instruction ateliers of Moscova to the polished reformer boutiques of Brera. This guide covers the five studios that best represent the range and quality of what the city currently offers.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=1400&q=80"
                alt="Milan city guide"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Milan, Italy</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Where design culture meets serious wellness</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
              6 Studios · Curated & Verified
            </p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (
                <StudioListing key={studio.number} {...studio} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Tips for booking Pilates in Milan
            </h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((tip) => (
                <div key={tip.heading} className="flex gap-5 rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217, 194, 186, 0.3)" }}>
                  <div className="w-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: "#8b4a31", minHeight: "20px" }} />
                  <div>
                    <h3 className="text-base font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{tip.heading}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{tip.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best neighbourhoods for Pilates in Milan
            </h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Milan&apos;s Pilates landscape is shaped by its neighbourhoods.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {NEIGHBORHOODS.map((n) => (
                <div key={n.name} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217, 194, 186, 0.35)" }}>
                  <h3 className="text-base font-semibold mb-2" style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif" }}>{n.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{n.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Related city guides</h2>
            <p className="text-sm mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Explore our guides to other cities with thriving Pilates scenes.</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
              {RELATED_CITIES.map((c) => (
                <CityCard key={c.city} {...c} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              {FURTHER_READING.map((a) => (
                <ArticleCard key={a.href} {...a} />
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Find Pilates near you"
          subtitle="Use our curated city guides to find the best Pilates studios worldwide."
          showSearch
          searchPlaceholder="Ask: best reformer Pilates in Milan…"
        />
      </main>
      <Footer />
    </>
  );
}
