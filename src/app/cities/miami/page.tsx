import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Miami (2026)",
  description:
    "Find the best Pilates studios in Miami — from South Beach reformer boutiques to Brickell wellness studios. Our curated guide to Miami Pilates in 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: [
    "pilates studios miami",
    "reformer pilates miami",
    "best pilates miami",
    "pilates classes miami",
    "miami pilates 2026",
    "pilates south beach",
    "pilates brickell",
    "miami reformer studios",
    "best reformer pilates miami",
  ],
  openGraph: {
    title: "Best Pilates Studios in Miami (2026)",
    description: "Our curated guide to Miami's finest Pilates studios — five verified picks with booking tips.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/miami",
    images: [{ url: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1200&q=80", width: 1200, height: 630, alt: "Miami city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Miami (2026)",
    description: "Our curated guide to Miami's finest Pilates studios — five verified picks with booking tips.",
    images: ["https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1200&q=80"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/miami" },
};

const STUDIOS = [
  {
    number: "01",
    name: "JETSET Pilates",
    neighborhood: "Downtown Miami / Brickell",
    priceLevel: "$$$",
    review:
      "JETSET Pilates is the Miami-born studio that turned reformer Pilates into a fitness phenomenon across Florida and beyond. The 50-minute sessions cycle through fast, punchy sequences set to DJ-curated playlists on custom JETSET reformers, keeping heart rate elevated throughout. Reviewers describe it as the P90X of the Pilates world — a challenging, low-impact, high-energy workout with city views and a polished boutique experience. Multiple Miami metro locations including Downtown, Miami Beach, and North Miami mean convenient access from almost anywhere in the city.",
    address: "40 SW 13th St, Miami, FL 33130",
    bestFor: "High-energy cardio-reformer, music-driven classes, fitness-focused clients",
    signatureClass: "JETSET 50 (50-min full-body reformer)",
    bookingTip: "Book through the JETSET app at least 24 hours ahead — evening classes in Brickell sell out quickly after work hours. Check for multi-class intro packs for new members on their website.",
  },
  {
    number: "02",
    name: "Reforming Pilates",
    neighborhood: "Miami Beach / Bay Harbor Islands",
    priceLevel: "$$$",
    review:
      "Consistently described as the most wait-listed Pilates studio in South Florida, Reforming Pilates maintains a 94% recommendation rate and is the studio Miami insiders recommend to each other. The atmosphere is welcoming and semi-private even in group settings. Instructor Tatiana is frequently singled out for clear, precise instruction and the personal attention she gives each client. A second location at Bay Harbor Islands serves those in northern Miami Beach.",
    address: "1560 Lenox Ave, Miami Beach, FL 33139",
    bestFor: "Classical boutique reformer, proper technique, tight-knit Pilates community",
    signatureClass: "Classical Reformer Group",
    bookingTip: "Join the waitlist proactively — popular slots are often fully booked weeks in advance. Following their Instagram gives the earliest notice when spots open due to cancellations.",
  },
  {
    number: "03",
    name: "The Pilates Place",
    neighborhood: "South Beach",
    priceLevel: "$$$",
    review:
      "With over 18 years in Miami Beach and a stellar 4.9-star rating from more than 4,000 ClassPass reviews, The Pilates Place is one of the most trusted studios in South Florida. Small class sizes and fully certified instructors make every session feel more like a semi-private than a group class. The studio is known for a polished, traditional approach to the reformer that emphasizes proper alignment and progressive skill development. A second location at 5400 NE 4th Court serves clients in the MiMo/Biscayne corridor.",
    address: "1253 Washington Ave, Suite 302, Miami Beach, FL 33139",
    bestFor: "Traditional reformer, all levels, consistency over 18+ years",
    signatureClass: "Classical Reformer (all levels)",
    bookingTip: "The Washington Ave location is steps from the beach — easy to combine with a morning walk. Book at least a week ahead for weekend classes, which fill especially fast in winter tourist season.",
  },
  {
    number: "04",
    name: "Fuze House",
    neighborhood: "Sunset Harbour, Miami Beach",
    priceLevel: "$$$",
    review:
      "Named Best Pilates Studio in Miami by Miami New Times, Fuze House operates at over 95°F using infrared heat panels to intensify mat-work and sculpt formats. The studio&apos;s aesthetic is jaw-dropping — clean minimal luxury with premium Bala equipment and organic amenities — and classes are tailored to all levels. Reviewers consistently note the heat makes the workout dramatically more effective for flexibility and muscle activation. A second location in South Miami serves those on the mainland.",
    address: "1201 20th St, CU-8, Miami Beach, FL 33139",
    bestFor: "Infrared-heated mat Pilates sculpt, luxury wellness experience",
    signatureClass: "Infrared Mat Pilates Sculpt",
    bookingTip: "Hydrate aggressively before class — the infrared heat is genuine and intense, especially in summer. First-timers can access an intro class for $32. Wear minimal, moisture-wicking clothing.",
  },
  {
    number: "05",
    name: "Kenergy Pilates",
    neighborhood: "Allapattah / Little River",
    priceLevel: "$$",
    review:
      "Founded by instructor Karina Ramirez, Kenergy Pilates is known across Miami&apos;s fitness community for its unusually small class sizes that feel semi-private, brand-new top-of-the-line reformers, and a rehabilitation philosophy that treats Pilates as post-injury recovery and performance enhancement. Reviewers call it the best studio with the best instructor in Miami, and its off-the-tourist-path location in Allapattah keeps the atmosphere local and unpretentious. The studio draws both professional athletes and clients recovering from surgeries or chronic pain.",
    address: "3404 NW 7th Ave, Miami, FL 33127",
    bestFor: "Athletic reformer, post-injury rehabilitation, personalized instruction",
    signatureClass: "Reformer Athletic",
    bookingTip: "Book directly through their website or by calling ahead — availability is limited due to small class sizes. Mention any injuries or physical limitations when booking so the instructor can prepare modifications.",
  },
  {
    number: "06",
    name: "Pilatay",
    neighborhood: "Coral Way",
    priceLevel: "$$$",
    review:
      "Pilatay is run by dual-certified Pilates teacher Tracy Belcher and is one of the most equipment-complete classical studios in Miami, offering sessions on the Cadillac, Reformer, Wunda Chair, High Chair, and a full range of barrels in true classical sequence. The clientele ranges from professional athletes to clients in their 90s. Semi-private classes are capped at four people, maintaining the quality of a private session. Located on historic Coral Way, it is centrally accessible from Coconut Grove, Brickell, and Little Havana.",
    address: "2357 SW 22nd St, Miami, FL 33145",
    bestFor: "Full classical apparatus Pilates, semi-private sessions, all ages",
    signatureClass: "Classical Circuit Private Session",
    bookingTip: "Sessions are by appointment only. Contact via Studio@pilatay.com or call (305) 417-8223. There is a 24-hour cancellation policy, and first-time clients should arrive 10 minutes early for a brief intake conversation.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Book 5–7 days in advance for premium morning slots",
    body: "Miami&apos;s most popular studios — especially South Beach and Brickell — fill their early morning and lunchtime slots within hours of opening. Most apps allow 7-day advance booking; treat Monday morning as your booking window for the full week.",
  },
  {
    heading: "Introductory offers are widely available",
    body: "Nearly every Miami studio runs a new-client intro deal — typically 3 classes for $49–79. Use these to assess instruction quality and culture before committing to a monthly membership, which is how most Miami practitioners structure their practice.",
  },
  {
    heading: "ClassPass covers most Miami studios",
    body: "ClassPass works well across Miami and is particularly useful for exploring the range of studios from South Beach to Coral Gables before settling on a home base. Peak-time bookings may require more credits.",
  },
  {
    heading: "Tipping is customary — $5–10 per class",
    body: "Unlike in some other cities, tipping Pilates instructors is an established norm in Miami. A $5–10 tip for group classes and $15–25 for private sessions is standard practice and genuinely appreciated by instructors.",
  },
  {
    heading: "Expect to pay $28–55 per reformer class",
    body: "Drop-in reformer Pilates in Miami ranges from $28 at volume studios to $55+ at premium boutiques. Monthly unlimited memberships typically run $175–250 and represent significant savings for practitioners attending 3+ times per week.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "South Beach & Miami Beach",
    description:
      "The most concentrated wellness corridor in Miami. South Beach and the broader Miami Beach area have a high density of Pilates and boutique fitness studios, ranging from serious classical practices to high-energy reformer boutiques. The clientele is fit, internationally diverse, and accustomed to quality.",
  },
  {
    name: "Brickell & Downtown",
    description:
      "Miami&apos;s financial district has seen rapid wellness studio growth, driven by a large professional population needing convenient, high-quality lunchtime and early-morning options. Studios here are sleek, modern, and optimised for efficiency — ideal for time-pressed professionals.",
  },
  {
    name: "Coconut Grove & Coral Gables",
    description:
      "The residential south of Miami offers a calmer, more community-oriented Pilates scene. Studios here tend to attract long-term clients building multi-year practices, and the atmosphere is noticeably less transactional than the beach and financial district studios.",
  },
  {
    name: "Wynwood & Design District",
    description:
      "Miami&apos;s creative quarter has attracted a younger, more experimental wellness crowd, and the studios that have opened here reflect that — more concept-driven, atmospheric, and design-forward than traditional Pilates boutiques. The neighbourhood is ideal for practitioners who want their workout to feel like an experience.",
  },
];

const RELATED_CITIES = [
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 5 },
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "Barcelona", country: "Spain", href: "/cities/barcelona", studioCount: 5 },
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
        { "@type": "ListItem", "position": 2, "name": "Miami", "item": "https://pilatescollectiveclub.com/cities/miami" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Miami",
      "description": "Curated guide to the top 5 Pilates studios in Miami.",
      "url": "https://pilatescollectiveclub.com/cities/miami",
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
            "addressLocality": "Miami",
            "addressCountry": "US",
          },
        },
      })),
    },
  ],
};

export default function MiamiPage() {
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
                United States
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Miami</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Updated May 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Miami has always taken fitness seriously — but the city&apos;s Pilates scene has matured well beyond the beach-body culture of its past. A city that attracts international residents, professional athletes, and wellness-conscious visitors year-round has built a reformer studio market that is simultaneously premium, diverse, and surprisingly deep. From the classical lineage practices of Coconut Grove to the design-forward boutiques of Wynwood, Miami now offers serious Pilates across every neighbourhood and every level. This guide covers the five studios we rate most highly, with everything you need before booking.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1400&q=80"
                alt="Miami skyline"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Miami, United States</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>From South Beach boutiques to classical Grove studios</p>
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
              Tips for booking Pilates in Miami
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
              Best neighbourhoods for Pilates in Miami
            </h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Miami&apos;s Pilates landscape is shaped by its neighbourhoods. Here&apos;s where to look depending on where you&apos;re based.
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
          searchPlaceholder="Ask: best reformer Pilates in London…"
        />
      </main>
      <Footer />
    </>
  );
}
