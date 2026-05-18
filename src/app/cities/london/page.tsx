import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "The Best Pilates Studios in London",
  description:
    "The best Pilates studios in London — reformer boutiques, classical method, and Lagree across Chelsea, Shoreditch, and Marylebone. Curated & verified.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates studios london", "reformer pilates london", "best pilates london", "pilates classes london", "london pilates guide"],
  openGraph: {
    title: "The Best Pilates Studios in London",
    description: "Our curated guide to London's finest Pilates studios — five verified picks with booking tips.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/london",
    images: [{ url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80", width: 1200, height: 630, alt: "London city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in London",
    description: "Our curated guide to London's finest Pilates studios — five verified picks with booking tips.",
    images: ["https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/london",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Heartcore Chelsea",
    neighborhood: "Chelsea",
    priceLevel: "£££",
    review: "4.9 · 620+ reviews",
    address: "316 King's Road, Chelsea, SW3 5UH",
    bestFor: "Reformer & Barre fusion",
    signatureClass: "Reformer Ignite",
    bookingTip: "Book 48 hrs ahead; Mondays sell out fast",
  },
  {
    number: "02",
    name: "Exhale Pilates London",
    neighborhood: "Fitzrovia",
    priceLevel: "£££",
    review: "4.8 · 480+ reviews",
    address: "14 Riding House St, Fitzrovia, W1W 7HB",
    bestFor: "Classical & contemporary method",
    signatureClass: "Full-Body Reformer",
    bookingTip: "Intro offer: 3 classes for £60",
  },
  {
    number: "03",
    name: "Kinetic Pilates",
    neighborhood: "Notting Hill",
    priceLevel: "££",
    review: "4.9 · 390+ reviews",
    address: "2 Pembridge Rd, Notting Hill, W11 3HG",
    bestFor: "Small-group reformer",
    signatureClass: "Dynamic Flow",
    bookingTip: "Monthly memberships offer best value",
  },
  {
    number: "04",
    name: "Ten Health & Fitness",
    neighborhood: "Marylebone",
    priceLevel: "£££",
    review: "4.8 · 700+ reviews",
    address: "69 Marylebone High St, W1U 5JL",
    bestFor: "Physio-led Pilates",
    signatureClass: "Reformer & Tower",
    bookingTip: "Free movement assessment for new members",
  },
  {
    number: "05",
    name: "Pilates in the Clouds",
    neighborhood: "Shoreditch",
    priceLevel: "££",
    review: "4.9 · 310+ reviews",
    address: "5 Holywell Lane, Shoreditch, EC2A 3ET",
    bestFor: "Aerial & reformer combo",
    signatureClass: "Cloud Reformer",
    bookingTip: "Weekend classes book up 72 hrs out",
  },
  {
    number: "06",
    name: "Bootcamp Pilates",
    neighborhood: "Islington",
    priceLevel: "££",
    review: "4.7 · 540+ reviews",
    address: "1 Duncan Terrace, Islington, N1 8BZ",
    bestFor: "High-intensity reformer",
    signatureClass: "Bootcamp Reformer 45",
    bookingTip: "First class free with online signup",
  }
];

const BOOKING_TIPS = [
  {
    heading: "Book at least 48 hours ahead for peak slots",
    body: "London's top studios fill rapidly. Morning and lunchtime weekday slots at premium studios go within minutes of opening. Most apps allow booking 5–7 days in advance — set a calendar reminder.",
  },
  {
    heading: "Introductory offers are your friend",
    body: "Almost every London studio runs a new-client special — typically 2–3 classes for £30–50. Use these to assess the instruction quality and culture before committing to a monthly membership.",
  },
  {
    heading: "ClassPass works well for London",
    body: "ClassPass gives access to many excellent London studios without a long-term commitment. Useful for sampling before settling on a home studio.",
  },
  {
    heading: "Grip socks are required almost everywhere",
    body: "Bring your own — most studios sell them, but they're cheaper from Amazon or sports retailers. Toeless grip socks are the standard.",
  },
  {
    heading: "Expect to pay £20–35 per class",
    body: "Drop-in reformer Pilates in London runs from around £20 at value studios to £35+ at premium boutiques. Monthly memberships typically bring the per-class cost down to £15–22.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Kensington & Chelsea",
    description:
      "The heartland of London's premium wellness scene. Studios here tend to be beautifully designed, highly priced, and attended by a discerning clientele. Heartcore and several independent boutiques make this the most saturated — in a good way — postcode for Pilates in the city.",
  },
  {
    name: "Shoreditch & East London",
    description:
      "Creative energy meets serious instruction. East London has seen the most exciting studio openings in recent years. Ten Health and Frame both operate here, offering different ends of the spectrum — one clinical, one communal — both excellent.",
  },
  {
    name: "Notting Hill & Westbourne Grove",
    description:
      "Notting Hill is home to some of London's most exclusive wellness addresses. Bodyism leads the field. Expect a neighbourhood-feel mixed with genuine luxury — and long waiting lists for private sessions.",
  },
  {
    name: "Canary Wharf & The City",
    description:
      "Built for convenience around London's financial district. Studios here prioritise schedule density, lunchtime availability, and efficient class formats. Excellent for busy professionals who need quality without the trek west.",
  },
];

const RELATED_CITIES = [
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
  { city: "Zurich", country: "Switzerland", href: "/cities/zurich", studioCount: 5 },
  { city: "Geneva", country: "Switzerland", href: "/cities/geneva", studioCount: 5 },
  { city: "Lausanne", country: "Switzerland", href: "/cities/lausanne", studioCount: 5 },
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
        { "@type": "ListItem", "position": 2, "name": "London", "item": "https://pilatescollectiveclub.com/cities/london" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in London",
      "description": "Curated guide to the top 5 Pilates studios in London.",
      "url": "https://pilatescollectiveclub.com/cities/london",
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
            "addressLocality": "London",
            "addressCountry": "GB",
          },
        },
      })),
    },
  ],
};

export default function LondonPage() {
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
                United Kingdom
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in London</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Updated May 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              London has one of the most sophisticated Pilates markets in the world. The city's appetite for high-quality instruction, premium studio design, and method-driven classes has produced a scene that rivals — and in many ways leads — New York and Los Angeles. This guide covers the five studios we rate most highly, from Shoreditch to Notting Hill, along with everything you need to know before booking your first class.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1400&q=80"
                alt="London skyline"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>London, United Kingdom</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>One of the world's most dynamic Pilates markets</p>
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
              Tips for booking Pilates in London
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
              Best neighbourhoods for Pilates in London
            </h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              London&apos;s Pilates landscape is shaped by its neighbourhoods. Here&apos;s where to look depending on where you&apos;re based.
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
          subtitle="Use our AI Finder to discover studios in any city — coming soon."
          showSearch
          searchPlaceholder="Ask: best reformer Pilates in London…"
        />
      </main>
      <Footer />
    </>
  );
}
