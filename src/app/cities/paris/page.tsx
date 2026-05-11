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
};

const STUDIOS = [
  {
    number: "01",
    name: "The New Me",
    neighborhood: "17th Arrondissement",
    priceLevel: "€€€",
    review:
      "The New Me is the undisputed leader of Pilates Reformer in France — a brand with over 17 studios across Paris and a presence that has defined what the city's contemporary reformer scene looks like. The Batignolles flagship in the 17th is a benchmark: beautiful interiors, state-of-the-art reformers, and a coffee bar to complete the wellness ritual. The instruction is consistently high-quality across all locations, and the studio's community of regulars reflects the energy and seriousness the brand brings to the method.",
    address: "37 Rue Jouffroy d'Abbans, 75017 Paris",
    bestFor: "Contemporary reformer, all levels, Paris-wide accessibility",
    signatureClass: "Reformer Pilates Express",
    bookingTip: "Book through the app at least 48 hours ahead. The studio's widespread network of locations means flexibility — if your preferred spot is full, another is usually nearby.",
  },
  {
    number: "02",
    name: "Les Ailes du Canal",
    neighborhood: "10th Arrondissement / Canal Saint-Martin",
    priceLevel: "€€",
    review:
      "Les Ailes du Canal is one of Paris's most beloved independent studios — a boutique in a quiet tree-lined courtyard near the Canal Saint-Martin that has built an exceptional reputation for passionate instruction and genuine community. The studio is not the largest or most polished in Paris, but its teaching quality and warmth consistently draw practitioners from across the city who are prepared to make the trip. Instruction here covers mat, reformer, and fusion formats in an atmosphere that feels intimate and purposeful.",
    address: "42 Rue Albert Thomas, 75010 Paris",
    bestFor: "Passionate instruction, community, independent boutique experience",
    signatureClass: "Reformer Flow",
    bookingTip: "Book through ClassPass or directly via the studio website. Morning and evening classes fill fastest — reserve three to four days ahead.",
  },
  {
    number: "03",
    name: "YUJ Yoga & Reformer Pilates",
    neighborhood: "1st Arrondissement / Louvre",
    priceLevel: "€€€",
    review:
      "YUJ has built one of Paris's finest wellness brands across its yoga and Pilates studios, and the Louvre location's dedicated Reformer room is a gem: an intimate space with just five machines that allows instructors to provide genuinely personalised attention in every session. Situated in the heart of the first arrondissement between the Louvre and the Sentier district, the semi-private Reformer classes here operate at €45 per session — reflecting the quality of instruction and the exclusivity of the format.",
    address: "68 Rue Jean-Jacques Rousseau, 75001 Paris",
    bestFor: "Semi-private reformer, personalised attention, central location",
    signatureClass: "Semi-Private Reformer",
    bookingTip: "The studio operates on online reservation only — no walk-ins. Book through their website well in advance as the five-machine format fills quickly.",
  },
  {
    number: "04",
    name: "Chez Simone",
    neighborhood: "2nd Arrondissement",
    priceLevel: "€€",
    review:
      "Chez Simone occupies a beautiful space in the 2nd arrondissement that feels genuinely Parisian — a chic studio built around a philosophy of well-being that extends beyond exercise to community, restoration, and enjoyment. The Pilates programme here is thoughtfully constructed, with reformer and mat classes that cater to a range of experience levels without sacrificing quality. The studio's atmosphere is warm and welcoming without being informal — exactly the balance Paris does best.",
    address: "226 Rue Saint Denis, 75002 Paris",
    bestFor: "Holistic wellness approach, community, mid-range pricing",
    signatureClass: "Pilates Reformer",
    bookingTip: "Classes book through ClassPass and the studio's own platform. The evening weekday sessions are most popular — book by Monday for that week.",
  },
  {
    number: "05",
    name: "Le Cercle Pilates",
    neighborhood: "6th Arrondissement / Saint-Germain",
    priceLevel: "€€€",
    review:
      "Le Cercle Pilates is the Left Bank's finest dedicated Pilates studio — a boutique in the heart of the 6th arrondissement that takes the method with the intellectual seriousness that Saint-Germain demands. The reformer classes are small and technique-driven, the teaching team is exceptionally well-trained, and the studio's position in the Notre-Dame-des-Champs neighbourhood gives it a refined, local character. An excellent choice for serious practitioners who want classical foundations without clinical austerity.",
    address: "73 Rue du Cherche-Midi, 75006 Paris",
    bestFor: "Classical method, Left Bank residents, serious technique",
    signatureClass: "Reformer Classique",
    bookingTip: "Book directly through their website. The Tuesday and Thursday morning classes are the studio's most sought-after — reserve at least a week ahead.",
  },
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
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt: "Build a home practice that complements your studio sessions.",
    href: "/blog/best-pilates-equipment-for-home-practice",
    category: "Equipment",
    readTime: "10 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
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
      "numberOfItems": 5,
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
                src="https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1400&q=80"
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Studios · Curated & Verified</p>
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
