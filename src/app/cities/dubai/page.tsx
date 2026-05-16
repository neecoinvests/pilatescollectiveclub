import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Dubai (2026) | Pilates Collective Club",
  description:
    "Find the best Pilates studios in Dubai — from luxury reformer boutiques in DIFC to community studios in Jumeirah. Our curated guide to Dubai Pilates in 2026.",
  keywords: [
    "pilates studios dubai",
    "reformer pilates dubai",
    "best pilates dubai",
    "pilates classes dubai",
    "dubai pilates 2026",
    "pilates difc",
    "pilates jumeirah",
    "dubai reformer studios",
    "best reformer pilates dubai",
  ],
  openGraph: {
    title: "Best Pilates Studios in Dubai (2026)",
    description: "Our curated guide to Dubai's finest Pilates studios — five verified picks with booking tips.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/dubai",
    images: [{ url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80", width: 1200, height: 630, alt: "Dubai city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Dubai (2026)",
    description: "Our curated guide to Dubai's finest Pilates studios — five verified picks with booking tips.",
    images: ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/dubai" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Pilates & Co",
    neighborhood: "DIFC",
    priceLevel: "$$$$",
    review:
      "Pilates & Co is the premium benchmark for reformer Pilates in Dubai — a studio that has built its reputation on genuinely high instruction standards and an environment that matches the ambitions of the DIFC district. The space is architecturally considered, with wide reformer spacing, excellent ventilation (a meaningful factor in Dubai), and Balanced Body equipment throughout. The instructors are predominantly trained in Australia and the UK, bringing a rigorous approach that Dubai&apos;s wellness-savvy expat community has rewarded with fierce loyalty.",
    address: "Gate Village Building 1, DIFC, Dubai",
    bestFor: "Premium reformer, expat professional clientele, all levels",
    signatureClass: "Reformer Flow Advanced",
    bookingTip: "DIFC slots on weekday mornings and evenings book out quickly. Use the app and set a 7-day booking reminder — the 7am class is particularly contested.",
  },
  {
    number: "02",
    name: "The Hundred Wellness Centre",
    neighborhood: "Jumeirah",
    priceLevel: "$$$",
    review:
      "The Hundred is a holistic wellness centre with one of Dubai&apos;s most thoughtful Pilates programmes. The studio integrates classical Pilates with physiotherapy principles, and the instructors are required to hold both Pilates certification and anatomy training. The Jumeirah setting draws a mix of long-term residents and wellness tourists, and the atmosphere is notably calm compared to more high-energy competitors. Private and duet sessions are available alongside group reformer classes, allowing genuine progression at your own pace.",
    address: "Villa 30, Al Wasl Road, Jumeirah 1, Dubai",
    bestFor: "Holistic wellness approach, private sessions, rehabilitation",
    signatureClass: "Classical Reformer & Cadillac",
    bookingTip: "Private sessions with the senior instructors book 2–3 weeks in advance. For group classes, 48 hours ahead is generally sufficient outside Ramadan.",
  },
  {
    number: "03",
    name: "Exhale Dubai",
    neighborhood: "City Walk",
    priceLevel: "$$$",
    review:
      "Exhale is Dubai&apos;s answer to the New York boutique reformer studio — high-energy, design-conscious, and unapologetically trend-forward. The City Walk location is beautiful, with floor-to-ceiling glass, premium reformers, and an atmosphere that feels closer to a luxury lounge than a gym. Classes lean towards dynamic, cardio-inflected reformer work, and the instructors are selected as much for their presence as their technical knowledge. Not the place for classical Pilates purists, but for high-energy reformer in a premium setting, Exhale delivers.",
    address: "Unit G-19, Building 6, City Walk, Al Safa, Dubai",
    bestFor: "Dynamic reformer, premium experience, fitness-focused clients",
    signatureClass: "Power Reformer",
    bookingTip: "Weekend morning classes are extremely popular with the brunch-and-wellness crowd. Book on Wednesday for Saturday sessions.",
  },
  {
    number: "04",
    name: "Fit Pilates",
    neighborhood: "Mirdif / Al Barsha",
    priceLevel: "$$",
    review:
      "Fit Pilates serves Dubai&apos;s less central communities with a no-nonsense, quality-first approach that has earned it one of the most loyal client bases in the city. The Al Barsha location is unpretentious but well-equipped, with a tight-knit community that rewards regular attendance. Instructors here are consistent, methodical, and particularly good with modifications — making it an excellent choice for beginners, post-natal clients, and those managing specific physical conditions. Pricing is competitive for Dubai, making consistency genuinely affordable.",
    address: "Ground Floor, Sama Tower, Sheikh Zayed Road, Al Barsha, Dubai",
    bestFor: "Community atmosphere, beginners, accessible pricing, modifications",
    signatureClass: "Fit Reformer Fundamentals",
    bookingTip: "Monthly memberships here offer the best per-class value in Dubai. The intro offer is a good way to assess the teaching quality before committing.",
  },
  {
    number: "05",
    name: "Soul Fit",
    neighborhood: "Bluewaters Island",
    priceLevel: "$$$",
    review:
      "Soul Fit on Bluewaters Island is one of Dubai&apos;s most scenically positioned studios — a waterfront wellness space with views across to Ain Dubai and the Marina skyline. The Pilates programme blends reformer, tower, and mat work in a more integrative format than most Dubai studios, and the class sizes are deliberately kept small. The instructors are experienced and attentive, and the studio has a genuine community feel that can be hard to find in a city that turns over residents quickly. A hidden gem worth seeking out.",
    address: "Level 1, Bluewaters Island, Jumeirah Beach Residence, Dubai",
    bestFor: "Integrative reformer and mat, small-group classes, scenic setting",
    signatureClass: "Reformer & Tower Fusion",
    bookingTip: "The evening classes here have spectacular sunset views over the Marina. The Thursday 6pm slot is particularly sought after — book a week in advance.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Book at least 48–72 hours ahead for peak slots",
    body: "Dubai&apos;s top Pilates studios fill quickly, particularly morning slots before 9am and evening slots from 6pm. Weekend classes at premium studios in DIFC and City Walk can book out within minutes of opening.",
  },
  {
    heading: "Tipping is not customary but always appreciated",
    body: "Unlike in some Western cities, tipping Pilates instructors is not an established norm in Dubai. A kind word and consistent return are the most meaningful currency. If you do tip, 20–30 AED is a generous gesture.",
  },
  {
    heading: "ClassPass has good coverage in Dubai",
    body: "ClassPass operates well in Dubai and is particularly useful for sampling the range of reformer studios before settling on a home base. Many premium studios participate, though peak times may carry a credit premium.",
  },
  {
    heading: "Dress code is studio-appropriate, not street-casual",
    body: "While Dubai has relaxed significantly, arriving to your Pilates studio in appropriate workout attire is expected. Most studios ask that you change on-site rather than arriving in outdoor clothes.",
  },
  {
    heading: "Expect to pay 150–300 AED per reformer class",
    body: "Drop-in reformer classes range from around 150 AED at community studios to 300 AED at premium boutiques in DIFC and City Walk. Monthly memberships and class packs typically bring the per-session cost down by 30–40%.",
  },
  {
    heading: "Summer scheduling shifts significantly",
    body: "Many Dubai residents travel in July and August, and some studios reduce scheduling or run summer-only promotions. If you&apos;re visiting in summer, confirm class availability in advance.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "DIFC & Downtown Dubai",
    description:
      "The financial heart of Dubai is also its premium wellness hub. Studios in DIFC target the city&apos;s international professional class — well-equipped, highly priced, and consistently excellent. Expect polished interiors, top-tier equipment, and a client base that knows exactly what it wants.",
  },
  {
    name: "Jumeirah & Al Safa",
    description:
      "Jumeirah&apos;s villa-lined streets house some of Dubai&apos;s most established and community-rooted studios. The clientele skews towards long-term residents and wellness-oriented families. Studios here tend to be calmer, more holistic, and more integrative in their approach.",
  },
  {
    name: "Dubai Marina & JBR",
    description:
      "The waterfront residential district has a dense cluster of studios serving the large expat community that lives here. Convenient scheduling, good value, and a high density of options make this one of the best postcodes for building a regular Pilates practice in Dubai.",
  },
  {
    name: "City Walk & Business Bay",
    description:
      "Dubai&apos;s newer mixed-use districts host the city&apos;s most design-forward boutique studios. If you want premium reformer in a setting that looks as good as it performs, City Walk and Business Bay are where to look.",
  },
];

const RELATED_CITIES = [
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 5 },
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
        { "@type": "ListItem", "position": 2, "name": "Dubai", "item": "https://pilatescollectiveclub.com/cities/dubai" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Dubai",
      "description": "Curated guide to the top 5 Pilates studios in Dubai.",
      "url": "https://pilatescollectiveclub.com/cities/dubai",
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
            "addressLocality": "Dubai",
            "addressCountry": "AE",
          },
        },
      })),
    },
  ],
};

export default function DubaiPage() {
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
                United Arab Emirates
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Dubai</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Updated May 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Dubai has transformed into one of the Middle East&apos;s most ambitious wellness destinations, and its Pilates scene reflects that ambition fully. A city of high expectations and high standards, Dubai has attracted instructors and studio concepts from London, New York, and Sydney — producing a reformer market that is simultaneously premium, diverse, and competitive. From the financial towers of DIFC to the waterfront studios of Bluewaters Island, the city now offers world-class Pilates across neighbourhoods. This guide covers the five studios we rate most highly, with everything you need to know before booking.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=80"
                alt="Dubai skyline"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Dubai, United Arab Emirates</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>The Middle East&apos;s most ambitious wellness destination</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
              5 Studios · Curated & Verified
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
              Tips for booking Pilates in Dubai
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
              Best neighbourhoods for Pilates in Dubai
            </h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Dubai&apos;s Pilates landscape is shaped by its neighbourhoods. Here&apos;s where to look depending on where you&apos;re based.
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
