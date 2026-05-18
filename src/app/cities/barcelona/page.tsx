import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "The Best Pilates Studios in Barcelona",
  description: "Our curated guide to Barcelona's best Pilates studios — from Eixample to Gràcia, the five studios leading the city's vibrant wellness scene.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates barcelona", "reformer pilates barcelona", "best pilates barcelona", "pilates studios barcelona", "pilates eixample"],
  openGraph: {
    title: "The Best Pilates Studios in Barcelona",
    description: "Our curated guide to Barcelona's best Pilates studios — five verified picks from Eixample to Poblenou.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/barcelona",
    images: [{ url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=80", width: 1200, height: 630, alt: "Barcelona city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Barcelona",
    description: "Our curated guide to Barcelona's best Pilates studios — five verified picks.",
    images: ["https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/barcelona",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "PilatesBCN",
    neighborhood: "Eixample",
    priceLevel: "€€€",
    review: "4.9 · 540+ reviews",
    address: "Carrer de Balmes 112, Eixample, 08008",
    bestFor: "Balanced Body reformers, bilingual classes",
    signatureClass: "BCN Reformer Signature",
    bookingTip: "Monthly pass offers 20% discount vs. drop-in",
  },
  {
    number: "02",
    name: "Estudio 3 Pilates Reformer",
    neighborhood: "Gràcia",
    priceLevel: "€€",
    review: "4.9 · 390+ reviews",
    address: "Carrer de Verdi 20, Gràcia, 08012",
    bestFor: "Small-group reformer in a boutique space",
    signatureClass: "Estudio 3 Flow",
    bookingTip: "Afternoon classes most available mid-week",
  },
  {
    number: "03",
    name: "SimplyBe Pilates",
    neighborhood: "Sant Pere",
    priceLevel: "€€€",
    review: "4.8 · 320+ reviews",
    address: "Carrer dels Carders 36, Sant Pere, 08003",
    bestFor: "English-friendly reformer studio",
    signatureClass: "Be Flow Reformer",
    bookingTip: "New client intro: 3 classes for €75",
  },
  {
    number: "04",
    name: "MUDRA Pilates Reformer",
    neighborhood: "Sarrià-Sant Gervasi",
    priceLevel: "€€€",
    review: "4.9 · 280+ reviews",
    address: "Carrer de Mandri 57, Sarrià, 08022",
    bestFor: "Upscale Pilates & mindfulness",
    signatureClass: "MUDRA Reformer Deep",
    bookingTip: "Private sessions available by appointment",
  },
  {
    number: "05",
    name: "Sinergia BCN",
    neighborhood: "Poblenou",
    priceLevel: "€€",
    review: "4.8 · 410+ reviews",
    address: "Carrer del Pallars 193, Poblenou, 08005",
    bestFor: "Athletic reformer & HIIT fusion",
    signatureClass: "Sinergia Power 45",
    bookingTip: "Drop-in friendly; no advance booking required",
  },
  {
    number: "06",
    name: "PILAT3S Sagrada Família",
    neighborhood: "Sagrada Família",
    priceLevel: "€€€",
    review: "4.8 · 570+ reviews",
    address: "Carrer de Provença 361, 08025",
    bestFor: "Tech-enabled reformer boutique chain",
    signatureClass: "PILAT3S Signature 45",
    bookingTip: "App-based booking; early cancellation policy 8 hrs",
  }
];

const BOOKING_TIPS = [
  { heading: "€20–38 per class is typical", body: "Barcelona reformer Pilates pricing is more accessible than London or Paris. Drop-in rates run from €20 at neighbourhood studios to €38 at premium boutiques. Bonos (class packs) of 5 or 10 sessions offer the best per-class rate." },
  { heading: "Spanish and English instruction are both widely available", body: "Barcelona's international population has pushed most quality studios to offer English-language instruction as standard. Catalan is occasionally used at neighbourhood studios — confirm language preference when booking." },
  { heading: "Bonos (class packs) are the standard purchase model", body: "Unlike monthly memberships common in the US and UK, Barcelona studios typically sell bonos — packs of 5 or 10 sessions. These usually expire after three months, so be realistic about frequency when purchasing." },
  { heading: "Book 2–3 days ahead", body: "Barcelona studios are popular but rarely as pressured as their London counterparts. Two to three days' notice is generally sufficient, with Saturday morning and early evening classes requiring more advance planning." },
  { heading: "August is quiet", body: "Many Barcelona studios operate reduced schedules in August as the city empties for summer. If visiting in August, confirm the studio is open and running a full schedule before planning around it." },
];

const NEIGHBORHOODS = [
  { name: "Eixample", description: "Barcelona's elegant central district hosts the city's most established classical studios. The nineteenth-century grid's beautiful apartments make for memorable practice spaces, and the density of quality instruction is high." },
  { name: "Gràcia & Sarrià", description: "The village-within-the-city feel of Gràcia has produced a strong community studio culture. Sarrià-Sant Gervasi to the north hosts the city's premium private session specialists, serving Barcelona's most affluent residential area." },
  { name: "Born, Barceloneta & El Raval", description: "The old city's most creative and internationally frequented districts have a growing studio scene that combines beautiful historic settings with accessible pricing and a cosmopolitan clientele." },
  { name: "Poblenou & Sant Martí", description: "Barcelona's former industrial waterfront is now home to a thriving creative and tech community that has driven demand for high-quality movement studios. Some of the city's best contemporary reformer instruction at accessible prices." },
];

const RELATED_CITIES = [
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
  { city: "Amsterdam", country: "Netherlands", href: "/cities/amsterdam", studioCount: 5 },
  { city: "Berlin", country: "Germany", href: "/cities/berlin", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
];

const FURTHER_READING = [
  { title: "The Best Pilates Retreats in Europe", excerpt: "The finest Pilates immersion experiences across the continent, from Provence to Puglia.", href: "/blog/best-pilates-retreats-europe", category: "Travel", readTime: "8 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1540541338537-1220059df4b5?w=800&q=80" },
  { title: "Pilates for Athletes", excerpt: "How elite sports professionals use Pilates to build strength, prevent injury, and extend their careers.", href: "/blog/pilates-for-athletes", category: "Performance", readTime: "7 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Barcelona", "item": "https://pilatescollectiveclub.com/cities/barcelona" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Barcelona",
      "description": "Curated guide to the top 5 Pilates studios in Barcelona.",
      "url": "https://pilatescollectiveclub.com/cities/barcelona",
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
            "addressLocality": "Barcelona",
            "addressCountry": "ES",
          },
        },
      })),
    },
  ],
};

export default function BarcelonaPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Spain</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Barcelona</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 7 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Barcelona&apos;s relationship with wellness is deeply embedded in its culture — the city&apos;s climate, its architecture, its café rhythms all encourage a certain attentiveness to physical wellbeing. The Pilates scene here reflects this: studios tend to be beautifully housed, thoughtfully run, and staffed by teachers who treat the method seriously. This guide covers the five studios we rate most highly across the city&apos;s distinct neighbourhoods.
            </p>
          </div>
        </section>
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1400&q=80" alt="Barcelona architecture" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Barcelona, Spain</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>A city that takes movement seriously</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Barcelona</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Barcelona</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Barcelona&apos;s diverse neighbourhoods each offer a distinct studio culture and price point.</p>
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
        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best Pilates studios in Barcelona…" />
      </main>
      <Footer />
    </>
  );
}
