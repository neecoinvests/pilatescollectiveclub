import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "The Best Pilates Studios in Amsterdam",
  description: "Our curated guide to Amsterdam's best Pilates studios — from Jordaan to De Pijp, the five studios leading the city's growing wellness scene.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates amsterdam", "reformer pilates amsterdam", "best pilates amsterdam", "pilates studios amsterdam", "pilates jordaan"],
  openGraph: {
    title: "The Best Pilates Studios in Amsterdam",
    description: "Our curated guide to Amsterdam's best Pilates studios — five verified picks from Jordaan to De Pijp.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/amsterdam",
    images: [{ url: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1200&q=80", width: 1200, height: 630, alt: "Amsterdam city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Amsterdam",
    description: "Our curated guide to Amsterdam's best Pilates studios — five verified picks.",
    images: ["https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/amsterdam",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "PILAT3S De Pijp",
    neighborhood: "De Pijp",
    priceLevel: "€€€",
    review: "PILAT3S has chosen De Pijp for its Amsterdam flagship, and the neighbourhood — dense, international, and full of the kind of young professionals who treat fitness as a serious part of their week — fits the brand's proposition precisely. The studio design is bold and intentional: dark interiors, dramatic lighting, and an equipment floor that communicates investment in both the reformer experience and the aesthetic around it. Classes run to a tight 45-minute format, music-driven and efficiently choreographed, which suits De Pijp's working population. Instruction quality is consistent and the app-based booking system is one of the slickest in the city. It suits practitioners who want a reliable, high-energy reformer session without the variability of a smaller independent studio.",
    address: "—",
    bestFor: "High-production reformer boutique, efficient format",
    signatureClass: "PILAT3S Signature 45",
    bookingTip: "App booking; 8-hour cancellation policy enforced",
  },
  {
    number: "02",
    name: "Studio 191",
    neighborhood: "Jordaan",
    priceLevel: "€€€",
    review: "Studio 191 is the kind of studio that Amsterdam does particularly well: small, serious, beautifully located, and built around a genuine teaching philosophy rather than a brand concept. Positioned in the Jordaan — the city's most architecturally beautiful and intellectually engaged neighbourhood — the studio draws a clientele of artists, academics, and quietly affluent professionals who want depth over spectacle. Classes are capped at very small numbers, allowing instructors to provide the kind of individual attention that makes real progress possible, and the programming spans classical mat and apparatus work with unusual rigour. The physical space is warm and considered, making excellent use of the Dutch light that floods through canal-house windows. It suits practitioners at intermediate to advanced level who want to be genuinely challenged.",
    address: "—",
    bestFor: "Classical method, small groups, architectural setting",
    signatureClass: "Studio 191 Classical Reformer",
    bookingTip: "Join the waitlist; popular classes sell out weeks in advance",
  },
  {
    number: "03",
    name: "BASI Pilates Academy Amsterdam",
    neighborhood: "Oud-Zuid",
    priceLevel: "€€€",
    review: "BASI Amsterdam carries the full weight of one of the world's most respected Pilates teacher-training organisations, and the studio practice reflects that pedigree in every session. Located in Oud-Zuid — Amsterdam's most established residential quarter, home to the Concertgebouw and Rijksmuseum — the studio attracts both serious practitioners and movement professionals seeking continuing education. The method is taught comprehensively, covering mat, reformer, cadillac, chair, and barrel work to a standard that makes this one of the few studios in the Netherlands where advanced practitioners can genuinely progress. Instructors hold BASI certification and the teaching culture is rigorous without being austere. It suits practitioners who understand that Pilates is a lifelong discipline and want to train somewhere that treats it as such.",
    address: "—",
    bestFor: "Comprehensive apparatus work, teacher-level rigour",
    signatureClass: "BASI Comprehensive Reformer",
    bookingTip: "Private and duet sessions bookable direct; call ahead",
  },
  {
    number: "04",
    name: "Pilates 13",
    neighborhood: "Amsterdam-Noord",
    priceLevel: "€€",
    review: "Pilates 13 has positioned itself well in Amsterdam-Noord, the post-industrial neighbourhood across the IJ that has become the city's most interesting creative quarter over the past decade. The studio is refreshingly straightforward — no concept branding, no elaborate retail, just well-taught reformer classes in a clean, comfortable space at prices that reflect Noord's more accessible rental environment. Instructors are personable and technically sound, class sizes are moderate, and the scheduling is thoughtfully constructed for a neighbourhood that still has a working-day rhythm rather than a flexible freelance one. The ferry connection makes it viable even for practitioners based in Centrum, and the North Amsterdam demographic adds a genuinely local energy to each session. It suits practitioners looking for excellent value who are open to crossing the water.",
    address: "—",
    bestFor: "Honest reformer, Noord creative community",
    signatureClass: "Pilates 13 Reformer Classic",
    bookingTip: "Factor in 10-min ferry crossing from Centraal Station",
  },
  {
    number: "05",
    name: "Studio 9 Pilates",
    neighborhood: "Oud-West",
    priceLevel: "€€€",
    review: "Studio 9 has earned a devoted following in Oud-West, the neighbourhood of independent shops, young families, and creative professionals that sits between the Vondelpark and the canal ring. The studio has a cohesive identity: warm without being casual, professional without being corporate, and deeply committed to the classical Pilates lineage in a way that rewards consistent attendance over occasional visits. Class sizes are kept to a level that allows instructors to offer meaningful correction, and the programming is designed to develop across a proper progression rather than simply offering a rotating series of equivalent sessions. The physical space is considered and calm. It particularly suits practitioners who want to feel genuinely known by their studio rather than processed through it.",
    address: "—",
    bestFor: "Classical progression, community-oriented studio",
    signatureClass: "Studio 9 Reformer Journey",
    bookingTip: "Regulars hold recurring slots; new spots open Mondays",
  },
  {
    number: "06",
    name: "CORE40",
    neighborhood: "Centrum",
    priceLevel: "€€",
    review: "CORE40 occupies a smart strategic position in Amsterdam Centrum — the area of highest tourist and expat density — and has built a studio model designed to accommodate both visitors and regulars with equal competence. The 40-minute class format is unambiguous in its purpose: efficient, concentrated reformer work that fits into a busy schedule without sacrificing technical integrity. Instructors are multilingual, the onboarding for new clients is among the smoothest in the city, and the pricing makes it a realistic option for practitioners who want to train several times a week without significant financial commitment. The space is clean and functional rather than atmospheric, which is an honest trade-off for its location. It suits travelling practitioners and Amsterdam-based professionals who value access and flexibility above all else.",
    address: "—",
    bestFor: "Tourist and expat-friendly, flexible drop-in format",
    signatureClass: "CORE40 Express Reformer",
    bookingTip: "Drop-ins welcome; online pre-registration recommended",
  }
];

const BOOKING_TIPS = [
  { heading: "€20–40 per class is typical", body: "Amsterdam reformer studio pricing runs from around €20 at accessible studios to €40 at premium private session specialists. Class packs (strippenkaarten) offer the best per-class rate for regular practitioners." },
  { heading: "English instruction is widely available", body: "Amsterdam's highly international population has driven most studios to offer English instruction as standard. Check when booking if you prefer Dutch-language classes." },
  { heading: "iDEAL and bank transfer are common payment methods", body: "Many Amsterdam studios prefer iDEAL for online payments rather than credit card. Ensure your payment method is set up before trying to book for the first time." },
  { heading: "Cycling to your studio is the norm", body: "Amsterdam's cycling infrastructure is world-class. Most studios have bike storage. Factor cycling time into your schedule — it often beats public transport and adds a pleasant ritual to the practice." },
  { heading: "Book 2–3 days ahead", body: "Amsterdam studios are busy but rarely as oversubscribed as London or Paris. Two to three days' advance booking is usually sufficient for most sessions, with morning peak slots requiring more notice." },
];

const NEIGHBORHOODS = [
  { name: "Jordaan & Canal Ring", description: "Amsterdam's most coveted neighbourhood is home to several of the city's finest independent studios. Beautiful settings, discerning clientele, and premium pricing — but the quality justifies it." },
  { name: "De Pijp", description: "Young, international, and increasingly wellness-focused. De Pijp has seen significant studio growth and offers some of the best value-to-quality ratios in the city." },
  { name: "Oud-Zuid & Museumkwartier", description: "The city's most prestigious residential district hosts Amsterdam's premium wellness addresses. Studios here skew toward private sessions and bespoke experiences." },
  { name: "Amsterdam-Oost & West", description: "The city's eastern and western districts have developed strong independent studio scenes that serve local communities with excellent instruction at more accessible price points." },
];

const RELATED_CITIES = [
  { city: "Berlin", country: "Germany", href: "/cities/berlin", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "Barcelona", country: "Spain", href: "/cities/barcelona", studioCount: 5 },
];

const FURTHER_READING = [
  { title: "The Best Pilates Retreats in Europe", excerpt: "The finest Pilates immersion experiences across the continent, from Provence to Puglia.", href: "/blog/best-pilates-retreats-europe", category: "Travel", readTime: "8 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1502224562085-639556652f33?w=800&q=80" },
  { title: "Classical vs Contemporary Pilates", excerpt: "Understanding the key differences between the original method and modern interpretations.", href: "/blog/classical-vs-contemporary-pilates", category: "Method", readTime: "7 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Amsterdam", "item": "https://pilatescollectiveclub.com/cities/amsterdam" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Amsterdam",
      "description": "Curated guide to the top 5 Pilates studios in Amsterdam.",
      "url": "https://pilatescollectiveclub.com/cities/amsterdam",
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
            "addressLocality": "Amsterdam",
            "addressCountry": "NL",
          },
        },
      })),
    },
  ],
};

export default function AmsterdamPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Netherlands</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Amsterdam</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 7 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Amsterdam's wellness culture has evolved considerably in recent years — and Pilates has been among the primary beneficiaries. The city's international population, strong cycling culture, and general openness to quality movement practices have produced a studio scene that punches well above its geographic size. This guide covers the five studios we rate most highly across the city's distinct neighbourhoods.
            </p>
          </div>
        </section>
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1400&q=80" alt="Amsterdam canals" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Amsterdam, Netherlands</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>A growing Pilates scene in Europe's most liveable city</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Studios · Curated & Verified</p>
            <div className="space-y-8">{STUDIOS.map((s) => <StudioListing key={s.number} {...s} />)}</div>
          </div>
        </section>
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Amsterdam</h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((t) => (
                <div key={t.heading} className="flex gap-5 rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                  <div className="w-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: "#8b4a31", minHeight: "20px" }} />
                  <div>
                    <h3 className="text-base font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{t.heading}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Amsterdam</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Amsterdam's neighbourhoods each have a distinct character that shapes the studios within them.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {NEIGHBORHOODS.map((n) => (
                <div key={n.name} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)" }}>
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
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">{RELATED_CITIES.map((c) => <CityCard key={c.city} {...c} />)}</div>
          </div>
        </section>
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">{FURTHER_READING.map((a) => <ArticleCard key={a.href} {...a} />)}</div>
          </div>
        </section>
        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best Pilates studios in Amsterdam…" />
      </main>
      <Footer />
    </>
  );
}
