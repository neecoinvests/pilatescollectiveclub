import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "The Best Pilates Studios in Amsterdam | Pilates Collective Club",
  description: "Our curated guide to Amsterdam's best Pilates studios — from Jordaan to De Pijp, the five studios leading the city's growing wellness scene.",
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
    name: "PLTS",
    neighborhood: "Jordaan",
    priceLevel: "€€",
    review: "PLTS is the Netherlands' leading boutique reformer Pilates concept — a high-intensity studio brand with seven Amsterdam locations including the flagship Jordaan studio on Lindengracht. Calling themselves the premium Reformer Pilates concept in the Netherlands, PLTS delivers challenging, energetic classes designed to be genuinely demanding. The Jordaan studio is beautifully designed, the community of regulars is strong, and the network of locations across the city means flexibility for practitioners who travel between neighbourhoods.",
    address: "Lindengracht 60, 1015 KJ Amsterdam",
    bestFor: "High-intensity reformer, all levels, city-wide accessibility",
    signatureClass: "PLTS Reformer Power",
    bookingTip: "Book through their app. The studio network gives flexibility — if the Jordaan slot is full, check other Amsterdam locations. Grip socks are available from the vending machine.",
  },
  {
    number: "02",
    name: "PILAT3S De Pijp",
    neighborhood: "De Pijp",
    priceLevel: "€€",
    review: "PILAT3S De Pijp is Amsterdam's most distinctive reformer studio concept — a beautifully designed space in the heart of De Pijp that combines premium dynamic reformer classes with a coffee bar serving matcha and collagen drinks. The 17-reformer room is state-of-the-art, the classes are demanding and well-structured, and the community that has formed around the studio reflects De Pijp's bohemian, health-conscious culture. PILAT3S has locations across the Netherlands and Switzerland, and the De Pijp studio is among the brand's finest.",
    address: "Ceintuurbaan 131H, 1072 GD Amsterdam",
    bestFor: "Premium reformer, De Pijp community, post-class coffee ritual",
    signatureClass: "PILAT3S Dynamic Reformer",
    bookingTip: "Book through their app. Morning and early evening De Pijp classes fill fastest — secure your slot at least 48 hours ahead.",
  },
  {
    number: "03",
    name: "Body Language Amsterdam",
    neighborhood: "Oud-Zuid",
    priceLevel: "€€€",
    review: "Body Language is one of Amsterdam's most elegant wellness addresses — a studio in the prestigious Oud-Zuid district that serves the Museumkwartier's discerning clientele with a blend of classical Pilates, Gyrotonic, and bespoke movement coaching. Private sessions are the studio's core offering and are genuinely exceptional — the teaching team brings backgrounds in dance, physiotherapy, and long-form Pilates training that is evident in every session. For those seeking a truly bespoke, high-touch experience in Amsterdam, this is the address.",
    address: "Cornelis Schuytstraat 44, 1071 JL Amsterdam",
    bestFor: "Private sessions, high-end bespoke experience, Gyrotonic",
    signatureClass: "Bespoke Private Movement Session",
    bookingTip: "Private sessions by appointment only. Email to discuss your goals and movement history before booking — the intake process is thorough and worth doing.",
  },
  {
    number: "04",
    name: "Studio 9 Pilates",
    neighborhood: "Amsterdam-Oost / Watergraafsmeer",
    priceLevel: "€€",
    review: "Studio 9 is a beautiful boutique studio in Amsterdam-Oost that offers both reformer and mat Pilates in a genuinely intimate setting. With a maximum of eight clients per reformer class, the instruction here is personalised and attentive — the teaching team focuses on full-body workouts with careful attention to core stability, posture, and individual progression. The Middenweg location is slightly removed from the city centre, giving it a neighbourhood feel that Amsterdam's best independent studios share.",
    address: "Middenweg 67F, 1098 AE Amsterdam",
    bestFor: "Small-group reformer, personalised instruction, Amsterdam-Oost community",
    signatureClass: "Studio 9 Reformer",
    bookingTip: "Book through their website at least 48 hours ahead. The small class sizes mean cancellations are rare — add yourself to the list and check availability regularly.",
  },
  {
    number: "05",
    name: "Studio Pilates Amsterdam West",
    neighborhood: "Amsterdam-West",
    priceLevel: "€€",
    review: "Studio Pilates West serves the increasingly trendy Amsterdam-West neighbourhoods with high-quality reformer and mat instruction at price points that don't require a premium postcode address. The studio is clean, well-equipped, and managed by an owner-instructor whose genuine passion for the method shows in every aspect of the operation. It doesn't have the brand recognition of some competitors, but it's the kind of studio you return to because the teaching is simply very good.",
    address: "Bilderdijkstraat 165, 1053 KP Amsterdam",
    bestFor: "Value pricing, owner-operated quality, westside residents",
    signatureClass: "West Side Reformer",
    bookingTip: "The Saturday morning class has become a westside institution. Book it by Wednesday to secure your spot.",
  },
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
        { "@type": "ListItem", "position": 2, "name": "Studio Guides", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Amsterdam", "item": "https://pilatescollectiveclub.com/cities/amsterdam" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Amsterdam",
      "description": "Curated guide to the top 5 Pilates studios in Amsterdam.",
      "url": "https://pilatescollectiveclub.com/cities/amsterdam",
      "numberOfItems": 5,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "LocalBusiness",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": {
            "@type": "PostalAddress",
            "streetAddress": s.address,
            "addressLocality": "Amsterdam",
            "addressCountry": "NL",
          },
          "priceRange": s.priceLevel,
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
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Studio Guides", href: "/cities" }, { label: "Amsterdam" }]} />
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
              Amsterdam&apos;s wellness culture has evolved considerably in recent years — and Pilates has been among the primary beneficiaries. The city&apos;s international population, strong cycling culture, and general openness to quality movement practices have produced a studio scene that punches well above its geographic size. This guide covers the five studios we rate most highly across the city&apos;s distinct neighbourhoods.
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
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>A growing Pilates scene in Europe&apos;s most liveable city</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Studios · Curated & Verified</p>
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
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Amsterdam&apos;s neighbourhoods each have a distinct character that shapes the studios within them.</p>
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
