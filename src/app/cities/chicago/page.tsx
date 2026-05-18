import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Chicago (2026)",
  description:
    "Find the best Pilates studios in Chicago — from Lincoln Park reformer boutiques to River North wellness studios. Our curated guide to Chicago Pilates in 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: [
    "pilates studios chicago",
    "reformer pilates chicago",
    "best pilates chicago",
    "pilates classes chicago",
    "chicago pilates 2026",
    "pilates lincoln park",
    "pilates river north chicago",
    "chicago reformer studios",
    "best reformer pilates chicago",
  ],
  openGraph: {
    title: "Best Pilates Studios in Chicago (2026)",
    description: "Our curated guide to Chicago's finest Pilates studios — five verified picks with booking tips.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/chicago",
    images: [{ url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80", width: 1200, height: 630, alt: "Chicago city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Chicago (2026)",
    description: "Our curated guide to Chicago's finest Pilates studios — five verified picks with booking tips.",
    images: ["https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/chicago" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Reform Studios",
    neighborhood: "River North",
    priceLevel: "$$$",
    review: "Reform Studios occupies a striking 4,000-square-foot ground-floor space in River North and quickly earned one of the highest ClassPass ratings of any studio in the city after opening. The studio is the only Chicago location equipped with the ReformRX smart reformer, which tracks resistance and rep data in real time, giving the experience a genuinely data-driven edge. Classes blend low-impact cardio intervals with DJ-curated playlists, attracting the kind of clients who want their Pilates to feel athletic without sacrificing precision. It suits driven beginners and experienced reformer devotees equally — the instruction is sharp, the aesthetic is sleek, and the locker rooms are the best in the city.",
    address: "—",
    bestFor: "Tech-forward reformer, athletic clients, music-driven classes",
    signatureClass: "The REFORM Method (50 min)",
    bookingTip: "First-timers must complete a free machine orientation before their first class — book it alongside your session. Grippy socks are required and available to purchase on-site.",
  },
  {
    number: "02",
    name: "Frog Temple Pilates",
    neighborhood: "Bucktown",
    priceLevel: "$$",
    review: "Frog Temple has anchored the Bucktown wellness scene since 2000, making it one of the longest-running Pilates studios in Chicago and a genuine neighbourhood institution. The format range is unmatched for a studio of its size — mat, reformer, tower, and yoga wall classes run throughout the week, taught by an instructor team that has cultivated loyalty over decades. The atmosphere is warm and deliberately uncommercial, a place where serious practitioners come to learn rather than be seen. Drop-in mat rates are among the fairest in the city, and long-term students say the teaching only deepens with time.",
    address: "—",
    bestFor: "Classical and mixed-format group Pilates, mat, reformer, tower, exceptional value",
    signatureClass: "Classical Reformer Group (open level)",
    bookingTip: "Weekend morning mat classes fill quickly — book at least 48 hours ahead. A 10-class package offers the best per-class value and never expires.",
  },
  {
    number: "03",
    name: "Lincoln Park Pilates",
    neighborhood: "Lincoln Park",
    priceLevel: "$$$",
    review: "Lincoln Park Pilates is one of Chicago's most comprehensively equipped boutique studios, housing reformer, mat, barre, and yoga classes alongside an infrared sauna in a handsomely designed Southport Corridor space. The instructor roster is carefully curated — classes are genuinely challenging with intelligent progressions, and modifications are offered without condescension. It draws a committed crowd of Lincoln Park locals who treat it as a full weekly wellness practice rather than a drop-in habit. Monthly unlimited memberships make the economics work for regulars, while flexible drop-in pricing keeps the door open for visitors.",
    address: "—",
    bestFor: "Full-service reformer, barre, yoga, and infrared sauna; ideal for committed regulars",
    signatureClass: "Reformer Flow",
    bookingTip: "Drop-in classes are $40, but the 12-class monthly package cuts the per-class cost significantly. First-timers can trial an intro class before committing to a membership.",
  },
  {
    number: "04",
    name: "The Pilates Advantage",
    neighborhood: "Wrigleyville",
    priceLevel: "$$",
    review: "The Pilates Advantage is Chicago's clearest address for classical Pilates in the Romana lineage, staffed entirely by Romana's Pilates-certified instructors working on authentic Gratz apparatus — a combination rare anywhere in the Midwest. The studio has served the Lakeview and Wrigleyville community for over twelve years and earns consistent recognition in the Gratz Pilates Studio Series. Reformer classes are capped at three clients and tower classes at seven, guaranteeing individualized attention that group-format studios simply cannot replicate. Practitioners who have plateaued elsewhere consistently describe their first session here as a recalibration.",
    address: "—",
    bestFor: "Classical method purists, Gratz apparatus, Romana-certified instruction",
    signatureClass: "Classical Reformer Semi-Private",
    bookingTip: "Private and semi-private sessions are the core offering. Contact the studio directly before your first visit to discuss your background and set up a proper intake session.",
  },
  {
    number: "05",
    name: "Restore Pilates Chicago",
    neighborhood: "Andersonville",
    priceLevel: "$$",
    review: "Restore Pilates has earned back-to-back recognition — a Distinguished Teaching Award in 2023 and a Quality Business Award in 2025 — and the Andersonville regulars who pack its classes will tell you both are deserved. The instructors are hands-on in the best sense, offering real-time cues and individual modifications rather than counting reps from a distance, and class sizes are kept small enough that no client disappears into the background. A live virtual programme extends the same quality to clients who train from home, with genuine feedback rather than a passive stream. Fair pricing, a clean and welcoming space, and an absence of pretension make it the neighbourhood studio Chicago needed.",
    address: "—",
    bestFor: "Small-group reformer, neighbourhood feel, beginners through advanced",
    signatureClass: "Reformer Small Group",
    bookingTip: "Weekday morning classes sell out the night before — book online as soon as slots open. Virtual sessions are a genuine option, not an afterthought, with real-time instructor correction.",
  },
  {
    number: "06",
    name: "ONYX Heated Reformer Pilates",
    neighborhood: "River North",
    priceLevel: "$$$",
    review: "Co-founded by former Chicago Bear Christian Jones and his wife Liz, ONYX holds the distinction of being Chicago's original heated reformer studio and a certified Black- and LGBTQ-owned fitness business with a genuinely inclusive culture. The patent-pending reformer design places clients facing the instructor throughout the session, a layout that sharpens form feedback and creates unusual camaraderie for a reformer class. The warmth amplifies muscle engagement and flexibility in ways that convert sceptics quickly, and the energy in the room — driven by a diverse and motivated clientele — is consistently described as the best in the city. A Wicker Park location offers the same programme for clients on the west side.",
    address: "—",
    bestFor: "Heated reformer, athletes, diverse and inclusive community",
    signatureClass: "ONYX Heated Reformer (55 min)",
    bookingTip: "The heat is genuine — wear minimal, moisture-wicking clothing and bring water. Reserve at least 24 hours ahead as morning classes fill the evening before.",
  }
];

const BOOKING_TIPS = [
  {
    heading: "Book 5–7 days in advance for sought-after slots",
    body: "Chicago's busiest Pilates studios release bookings 7 days ahead, and morning and evening slots at Lincoln Park, River North, and Gold Coast studios fill quickly. Monday morning is the most reliable time to book your week.",
  },
  {
    heading: "Introductory packages are the smartest way to start",
    body: "Most Chicago studios offer new-client intro packs — typically 3 classes for $45–75. Use these to trial instruction quality before committing to a monthly membership, which is how most Chicago regulars structure their practice.",
  },
  {
    heading: "ClassPass works well across Chicago",
    body: "ClassPass has strong coverage in Chicago and is useful for sampling studios across neighbourhoods — from Lincoln Park to the West Loop — before settling. It's also a practical solution for visitors staying in the city for a week or two.",
  },
  {
    heading: "Tipping is standard practice",
    body: "Tipping Pilates instructors is an established norm in Chicago. A $5–10 tip for group classes and $15–20 for private sessions is typical and genuinely valued, particularly at independently-run studios.",
  },
  {
    heading: "Expect to pay $25–50 per reformer class",
    body: "Drop-in reformer Pilates in Chicago ranges from around $25 at franchise studios to $50 at premium boutiques. Monthly unlimited memberships typically run $150–220 and offer strong value for practitioners attending 3 or more times per week.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Lincoln Park & Old Town",
    description:
      "Chicago's most established neighbourhood for serious Pilates. Lincoln Park has a high concentration of quality studios, from classical practices to modern reformer boutiques, serving a residential population that prioritises health and wellness. The area rewards those looking to build a long-term practice rather than sample what's new.",
  },
  {
    name: "River North & Gold Coast",
    description:
      "The premium heart of Chicago's downtown wellness scene. Studios in River North are typically design-forward, premium-priced, and well-suited to professionals working in the surrounding offices. Gold Coast offers a slightly calmer alternative with some of the city's most experienced independent instructors.",
  },
  {
    name: "West Loop & Fulton Market",
    description:
      "Chicago's fastest-growing neighbourhood has attracted a new generation of studios targeting the tech and creative professional community. Studios here are modern, schedule-dense, and increasingly sophisticated — and the neighbourhood's rapid growth means new openings are frequent.",
  },
  {
    name: "Wicker Park & Bucktown",
    description:
      "The north-west's creative heart has a growing Pilates scene that reflects its neighbourhood energy — younger, more eclectic, and less corporate than the Gold Coast or River North. Studios here tend to be more affordable and community-oriented, with a mix of beginners and intermediate practitioners.",
  },
];

const RELATED_CITIES = [
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 5 },
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "Amsterdam", country: "Netherlands", href: "/cities/amsterdam", studioCount: 5 },
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
        { "@type": "ListItem", "position": 2, "name": "Chicago", "item": "https://pilatescollectiveclub.com/cities/chicago" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Chicago",
      "description": "Curated guide to the top 5 Pilates studios in Chicago.",
      "url": "https://pilatescollectiveclub.com/cities/chicago",
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
            "addressLocality": "Chicago",
            "addressCountry": "US",
          },
        },
      })),
    },
  ],
};

export default function ChicagoPage() {
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
              <span style={{ color: "#8b4a31" }}>in Chicago</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Updated May 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Chicago is a city that takes movement seriously — and its Pilates scene reflects that practicality and depth. Less trend-driven than Los Angeles, less saturated than New York, Chicago has cultivated a reformer and mat Pilates market built around genuine instruction quality and community loyalty. From the classical studios of Lincoln Park to the design-forward boutiques of River North, the city offers every type of Pilates practitioner something to invest in. This guide covers the five studios we rate most highly in Chicago, from the Gold Coast to Wicker Park, with everything you need before booking.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1400&q=80"
                alt="Chicago skyline"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Chicago, United States</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Serious instruction and lasting community — Chicago's Pilates scene</p>
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
              Tips for booking Pilates in Chicago
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
              Best neighbourhoods for Pilates in Chicago
            </h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Chicago's Pilates landscape is shaped by its neighbourhoods. Here's where to look depending on where you're based.
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
