import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "The Best Pilates Studios in Paris | Pilates Collective Club",
  description:
    "Our curated guide to the best Pilates studios in Paris — from The New Me and Les Ailes du Canal to Le Cercle Pilates in Saint-Germain. Five verified studios with booking tips.",
  keywords: ["pilates paris", "studios pilates paris", "reformer pilates paris", "best pilates paris", "pilates 16eme"],
  openGraph: {
    title: "The Best Pilates Studios in Paris",
    description: "Our curated guide to the best Pilates studios in Paris — five verified picks with booking tips.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/paris",
    images: [{ url: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1200&q=80", width: 1200, height: 630, alt: "Paris city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Paris",
    description: "Our curated guide to the best Pilates studios in Paris — five verified picks with booking tips.",
    images: ["https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/paris",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Reformation Pilates",
    neighborhood: "Marais",
    priceLevel: "€€€",
    review: "4.9 · 580+ reviews",
    address: "12 Rue des Arquebusiers, 3e, 75003",
    bestFor: "Reformer & mat in English/French",
    signatureClass: "Reformation Flow",
    bookingTip: "Book via app; Tuesday evenings fill first",
  },
  {
    number: "02",
    name: "Hundred Pilates",
    neighborhood: "Saint-Germain",
    priceLevel: "€€€",
    review: "4.8 · 470+ reviews",
    address: "8 Rue de l'Abbaye, 6e, 75006",
    bestFor: "Classical & contemporary method",
    signatureClass: "The Hundred Reformer",
    bookingTip: "Intro offer: 3 classes for €90",
  },
  {
    number: "03",
    name: "The New Me",
    neighborhood: "8th Arr.",
    priceLevel: "€€€",
    review: "4.8 · 390+ reviews",
    address: "14 Av. de Friedland, 8e, 75008",
    bestFor: "Lagree Megaformer",
    signatureClass: "New Me 45",
    bookingTip: "Monthly unlimited pass best for regulars",
  },
  {
    number: "04",
    name: "RIISE Reformer",
    neighborhood: "Batignolles",
    priceLevel: "€€",
    review: "4.9 · 340+ reviews",
    address: "31 Rue des Batignolles, 17e, 75017",
    bestFor: "Affordable small-group reformer",
    signatureClass: "RIISE Express 40",
    bookingTip: "Off-peak morning classes have most availability",
  },
  {
    number: "05",
    name: "YUJ Yoga & Reformer Pilates",
    neighborhood: "Sentier",
    priceLevel: "€€€",
    review: "4.8 · 620+ reviews",
    address: "18 Rue du Faubourg Poissonnière, 10e, 75010",
    bestFor: "Yoga-Pilates fusion",
    signatureClass: "YUJ Reformer Slow",
    bookingTip: "New member: first week unlimited €30",
  },
  {
    number: "06",
    name: "Ateliers Ground Control",
    neighborhood: "Nation",
    priceLevel: "€€",
    review: "4.9 · 290+ reviews",
    address: "81 Cours de Vincennes, 12e, 75012",
    bestFor: "Industrial-chic boutique reformer",
    signatureClass: "Ground Control Reformer",
    bookingTip: "Saturday morning classes most popular",
  }
];

const BOOKING_TIPS = [
  {
    heading: "Reservations are essential",
    body: "Paris studios do not operate a reliable walk-in culture. Book in advance through the studio's website or app — last-minute availability is rare at the better studios.",
  },
  {
    heading: "Expect classes in French",
    body: "Most Paris Pilates classes are taught in French. Many instructors speak English, but do check in advance if you're not comfortable following cues en français.",
  },
  {
    heading: "The intro offer window is short",
    body: "Parisian studios typically offer introductory pricing for new clients valid for a limited period (often two to four weeks). Use it strategically to assess the studio's teaching style properly.",
  },
  {
    heading: "€18–35 per class is typical",
    body: "Drop-in rates at quality Paris studios range from around €18 at value-positioned studios to €35 at premium boutiques. Carnet (class pack) pricing brings the per-session cost down meaningfully.",
  },
  {
    heading: "Cancellation policies are strict",
    body: "Most Paris studios enforce a 12–24 hour cancellation window. Late cancellations are charged in full. Set a phone reminder the evening before your class if you're prone to schedule changes.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "The Marais (3rd & 4th Arr.)",
    description:
      "The spiritual home of Paris's boutique wellness scene. The Marais houses some of the city's most design-forward studios, attracting a creative, fashion-conscious clientele. Expect premium pricing and exceptional aesthetics.",
  },
  {
    name: "Saint-Germain-des-Prés (6th Arr.)",
    description:
      "The Left Bank's quiet, intellectual character suits Pilates particularly well. Studios here tend toward the classical and clinical — excellent for those who take the method seriously.",
  },
  {
    name: "République & Oberkampf (10th & 11th Arr.)",
    description:
      "Paris's most exciting emerging wellness neighbourhood. A younger, more diverse crowd, more accessible pricing, and some genuinely excellent independent studios that haven't been discovered by tourist guides yet.",
  },
  {
    name: "15th Arrondissement",
    description:
      "A residential neighbourhood with a loyal local clientele and several long-established studios. Quieter, less trendy, and often significantly better value than the central arrondissements.",
  },
];

const RELATED_CITIES = [
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "Zurich", country: "Switzerland", href: "/cities/zurich", studioCount: 5 },
  { city: "Geneva", country: "Switzerland", href: "/cities/geneva", studioCount: 5 },
  { city: "Lausanne", country: "Switzerland", href: "/cities/lausanne", studioCount: 5 },
];

const FURTHER_READING = [
  {
    title: "Classical vs Contemporary Pilates: Which Style Is Right for You?",
    excerpt: "Understanding the key differences between the original method and modern interpretations.",
    href: "/blog/classical-vs-contemporary-pilates",
    category: "Method",
    readTime: "7 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800&q=80",
  },
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt: "Build a home practice that complements your studio sessions.",
    href: "/blog/best-pilates-equipment-for-home-practice",
    category: "Equipment",
    readTime: "10 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1616279969862-6a5a367f9e2b?w=800&q=80",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Paris", "item": "https://pilatescollectiveclub.com/cities/paris" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Paris",
      "description": "Curated guide to the top 5 Pilates studios in Paris.",
      "url": "https://pilatescollectiveclub.com/cities/paris",
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
            "addressLocality": "Paris",
            "addressCountry": "FR",
          },
        },
      })),
    },
  ],
};

export default function ParisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>City Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>France</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Paris</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Paris has developed a Pilates scene that, like everything in the city, carries its own distinct character. Studios here tend to be intimate, instruction-led, and deeply serious about the method — reflecting a Parisian cultural preference for genuine expertise over spectacle. This guide covers the five studios we rate most highly, from the Marais to the 15th, along with everything you need to navigate the city&apos;s booking culture and find your perfect match.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1400&q=80"
                alt="Paris cityscape"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Paris, France</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>An intimate and instruction-led Pilates culture</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Studios · Curated & Verified</p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (
                <StudioListing key={studio.number} {...studio} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Paris</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Paris</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Paris&apos;s arrondissement system shapes where you&apos;ll find each type of studio. Here&apos;s a quick reference.</p>
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
              {RELATED_CITIES.map((c) => (<CityCard key={c.city} {...c} />))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              {FURTHER_READING.map((a) => (<ArticleCard key={a.href} {...a} />))}
            </div>
          </div>
        </section>

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best Pilates studios in Paris…" />
      </main>
      <Footer />
    </>
  );
}
