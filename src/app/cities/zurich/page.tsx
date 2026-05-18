import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "The Best Pilates Studios in Zurich",
  description:
    "The best Pilates studios in Zurich — from Seefeld lake-view reformer to physio-Pilates in Hottingen. Curated & verified picks for every level.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates zürich", "pilates zurich", "reformer pilates zurich", "best pilates zurich", "pilates studios zürich"],
  openGraph: {
    title: "The Best Pilates Studios in Zurich",
    description: "Our curated guide to the best Pilates studios in Zurich — five verified studios with booking tips.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/zurich",
    images: [{ url: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=1200&q=80", width: 1200, height: 630, alt: "Zurich city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Zurich",
    description: "Our curated guide to the best Pilates studios in Zurich — five verified studios with booking tips.",
    images: ["https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/zurich",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "ProPilates",
    neighborhood: "Seefeld",
    priceLevel: "CHF€€€",
    review: "4.9 · 460+ reviews",
    address: "Seefeldstrasse 93, Seefeld, Zürich 8008",
    bestFor: "Classical BASI method with lake views",
    signatureClass: "ProPilates Comprehensive Reformer",
    bookingTip: "Book privates 2 weeks ahead; groups 1 week",
  },
  {
    number: "02",
    name: "ilu move",
    neighborhood: "Kreis 5",
    priceLevel: "CHF€€€",
    review: "4.9 · 380+ reviews",
    address: "Hardstrasse 219, Kreis 5, Zürich 8005",
    bestFor: "Contemporary reformer in arts district",
    signatureClass: "ilu Reformer Flow",
    bookingTip: "Intro offer: 3 classes for CHF 120",
  },
  {
    number: "03",
    name: "Form Studio Zurich",
    neighborhood: "Wiedikon",
    priceLevel: "CHF€€",
    review: "4.8 · 310+ reviews",
    address: "Birmensdorferstrasse 127, Wiedikon, Zürich 8003",
    bestFor: "Affordable neighbourhood reformer studio",
    signatureClass: "Form Signature Reformer",
    bookingTip: "Monthly unlimited from CHF 280",
  },
  {
    number: "04",
    name: "Protagonist Zurich",
    neighborhood: "Enge",
    priceLevel: "CHF€€€",
    review: "4.8 · 420+ reviews",
    address: "Bederstrasse 109, Enge, Zürich 8002",
    bestFor: "Performance-focused Pilates & movement",
    signatureClass: "Protagonist Dynamic Reformer",
    bookingTip: "Evening slots popular with Bahnhofstrasse workers",
  },
  {
    number: "05",
    name: "Trunk Pilates",
    neighborhood: "Oerlikon",
    priceLevel: "CHF€€",
    review: "4.9 · 270+ reviews",
    address: "Hofwiesenstrasse 348, Oerlikon, Zürich 8050",
    bestFor: "North-side studio near Hallenstadion",
    signatureClass: "Trunk Core Reformer",
    bookingTip: "Connects easily via tram from city centre",
  },
  {
    number: "06",
    name: "in2motion",
    neighborhood: "Hottingen",
    priceLevel: "CHF€€€",
    review: "4.8 · 350+ reviews",
    address: "Freiestrasse 107, Hottingen, Zürich 8032",
    bestFor: "Physio-Pilates collaboration; injury rehab",
    signatureClass: "in2motion Corrective Reformer",
    bookingTip: "Physio consultations bookable alongside Pilates",
  }
];

const BOOKING_TIPS = [
  {
    heading: "Book early for morning slots",
    body: "Quality studios in Zurich fill up fast. Most release their weekly schedule on Sunday evening — set a phone reminder if you want prime morning slots.",
  },
  {
    heading: "Introductory offers are common",
    body: "Most studios offer a discounted first-class or introductory pack for new clients. Always check the website before booking a full-price drop-in.",
  },
  {
    heading: "Swiss punctuality is expected",
    body: "Arrive 5–10 minutes early. Arriving late to a small group class is considered disruptive. Some studios have a strict no-late-entry policy.",
  },
  {
    heading: "Grip socks are usually required",
    body: "Almost every reformer studio in Zurich requires grip socks. Some sell them on arrival, but it's cheaper to bring your own.",
  },
  {
    heading: "CHF 30–50 per class is standard",
    body: "Drop-in rates at premium Zurich studios typically fall between CHF 30 and CHF 50. Monthly memberships and class packs offer meaningful savings.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Seefeld",
    description:
      "The upscale eastern lakeside district is home to Zurich's most polished studios. Expect pristine spaces, premium pricing, and a well-heeled clientele.",
  },
  {
    name: "Kreis 1 / Niederdorf",
    description:
      "The historic city centre is surprisingly well-served by boutique studios. Easy to access and perfect for combining a class with a day in the old town.",
  },
  {
    name: "Kreis 4 / Langstrasse",
    description:
      "Increasingly popular with creatives and young professionals, Kreis 4 has seen a wave of new studio openings with accessible pricing and strong community energy.",
  },
  {
    name: "Kreis 1 / Central",
    description:
      "The area around Central station is a convenient choice for practitioners commuting from elsewhere in the city, with several quality studios within walking distance.",
  },
];

const RELATED_CITIES = [
  { city: "Geneva", country: "Switzerland", href: "/cities/geneva", studioCount: 5 },
  { city: "Lausanne", country: "Switzerland", href: "/cities/lausanne", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
];

const FURTHER_READING = [
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt:
      "Everything you need to complement your studio sessions at home, from a quality mat to resistance bands.",
    href: "/blog/best-pilates-equipment-for-home-practice",
    category: "Equipment",
    readTime: "10 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1598300056393-4aac492f4344?w=800&q=80",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Zurich", "item": "https://pilatescollectiveclub.com/cities/zurich" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Zurich",
      "description": "Curated guide to the top 5 Pilates studios in Zurich.",
      "url": "https://pilatescollectiveclub.com/cities/zurich",
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
            "addressLocality": "Zürich",
            "addressCountry": "CH",
          },
        },
      })),
    },
  ],
};

export default function ZurichPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Article Header */}
        <section
          className="pt-32 pb-16 px-6"
          style={{ backgroundColor: "#fcf9f8" }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
              >
                City Guide
              </span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span
                className="text-xs font-semibold uppercase tracking-[0.15em]"
                style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}
              >
                Switzerland
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6"
              style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
            >
              The Best Pilates Studios
              <br />
              <span style={{ color: "#8b4a31" }}>in Zurich</span>
            </h1>

            <p
              className="text-sm mb-8"
              style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}
            >
              Updated May 2026 · 8 min read
            </p>

            {/* Divider */}
            <div
              className="w-16 h-px mb-8"
              style={{ backgroundColor: "#d9c2ba" }}
            />

            <p
              className="text-lg leading-relaxed"
              style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
            >
              Zurich has quietly become one of Europe&apos;s most compelling cities for Pilates. Swiss
              precision and a culture of excellence have shaped a studio scene that takes the method
              seriously — whether you&apos;re stepping onto a reformer for the first time or deepening
              a decade-long practice. This guide covers the five studios we return to again and
              again, the neighbourhoods worth knowing, and everything you need before booking your
              first class.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="/pictures/henrique-ferreira-omiTbS-nb_M-unsplash.jpg"
                alt="Zurich city view"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.9)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.5) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Zürich, Switzerland</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>The lakeside city&apos;s thriving Pilates scene</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Listings */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-10"
              style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
            >
              6 Studios · Curated & Verified
            </p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (
                <StudioListing key={studio.number} {...studio} />
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section
          className="py-20 px-6"
          style={{ backgroundColor: "#f6f3f2" }}
        >
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-3xl font-semibold mb-10"
              style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
            >
              Tips for booking Pilates in Zurich
            </h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((tip) => (
                <div
                  key={tip.heading}
                  className="flex gap-5 rounded-xl p-6"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(217, 194, 186, 0.3)",
                  }}
                >
                  <div
                    className="w-1.5 rounded-full shrink-0 mt-1"
                    style={{ backgroundColor: "#8b4a31", minHeight: "20px" }}
                  />
                  <div>
                    <h3
                      className="text-base font-semibold mb-1.5"
                      style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
                    >
                      {tip.heading}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {tip.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-3xl font-semibold mb-4"
              style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
            >
              Best neighbourhoods for Pilates in Zurich
            </h2>
            <p
              className="text-base mb-10"
              style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
            >
              Where you book depends on where you&apos;re staying or working. Here&apos;s a quick breakdown.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {NEIGHBORHOODS.map((n) => (
                <div
                  key={n.name}
                  className="rounded-xl p-6"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(217, 194, 186, 0.35)",
                  }}
                >
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif" }}
                  >
                    {n.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {n.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Cities */}
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-3xl font-semibold mb-3"
              style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
            >
              Related city guides
            </h2>
            <p
              className="text-sm mb-10"
              style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
            >
              Explore our guides to other cities with thriving Pilates scenes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
              {RELATED_CITIES.map((c) => (
                <CityCard key={c.city} {...c} />
              ))}
            </div>
          </div>
        </section>

        {/* Further Reading */}
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-3xl font-semibold mb-10"
              style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
            >
              Further reading
            </h2>
            <div className="max-w-sm">
              {FURTHER_READING.map((a) => (
                <ArticleCard key={a.href} {...a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="Find Pilates near you"
          subtitle="Use our AI Finder to discover studios in any city — coming soon."
          showSearch
          searchPlaceholder="Ask: best beginner Pilates in Zurich…"
        />
      </main>
      <Footer />
    </>
  );
}
