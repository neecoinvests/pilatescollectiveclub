import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Dubai (2026)",
  description:
    "Find the best Pilates studios in Dubai — from luxury reformer boutiques in DIFC to community studios in Jumeirah. Our curated guide to Dubai Pilates in 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
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
    name: "Reform Athletica",
    neighborhood: "DIFC",
    priceLevel: "AED$$$$",
    review: "Reform Athletica has positioned itself as the defining premium Pilates address in Dubai&apos;s financial quarter, drawing a clientele of international executives, athletes, and wellness professionals who treat training here as a non-negotiable investment in performance. The studio occupies a beautifully designed space within DIFC&apos;s constellation of high-end wellness addresses, and the environment communicates quality before a class has begun. Instruction is delivered by a carefully curated faculty with international training backgrounds, and the programming extends from classical reformer work through to specialised athletic conditioning formats. The client base tends to be knowledgeable and demanding, which pushes the teaching standard consistently upward. For practitioners who want the most polished, results-oriented Pilates experience available in the city, Reform Athletica is the straightforward first answer.",
    address: "—",
    bestFor: "Premium performance-oriented Pilates for executives and athletes",
    signatureClass: "Reform Athletica Signature",
    bookingTip: "DIFC location validates parking; peak slots fill Sunday through Tuesday",
  },
  {
    number: "02",
    name: "11 Pilates",
    neighborhood: "Jumeirah",
    priceLevel: "AED$$$",
    review: "11 Pilates has built one of Dubai&apos;s most coherent Pilates communities in the Jumeirah residential corridor, where a large population of wellness-committed residents has sustained a studio that prioritises teaching depth over format novelty. The studio&apos;s name references the aspiration to teach as if there were eleven of you in every session — individual attention even within group class formats. In practice, small class caps and instructors who circulate actively through reformer lines make this more than a marketing promise. The Jumeirah clientele skews toward experienced practitioners — many members have trained here for years and treat 11 Pilates as the anchor of a considered movement practice rather than a fitness fad. Newcomers are welcomed but quickly oriented toward the technical standards the studio&apos;s regulars maintain.",
    address: "—",
    bestFor: "Community-driven classical Pilates for experienced practitioners",
    signatureClass: "11 Reformer Foundation",
    bookingTip: "Morning classes are popular with school-run parents; evenings suit CBD commuters",
  },
  {
    number: "03",
    name: "Studio14",
    neighborhood: "JLT",
    priceLevel: "AED$$$",
    review: "Studio14 serves the Jumeirah Lakes Towers residential community with a Pilates programme that has grown significantly in reputation since the studio&apos;s opening, driven by instructor quality that exceeds what the address might initially suggest. The multi-tower JLT district is densely residential and the studio benefits from a built-in catchment of internationally mobile professionals and families who compare it directly against studios in DIFC and Downtown. Teaching here is strong on anatomical detail — instructors explain the intention behind exercises rather than simply cueing shape — which produces clients who understand their practice and progress more intelligently over time. The pricing positions Studio14 as a value proposition against its luxury-district competitors, but the quality gap is narrower than the price difference implies. For JLT residents, it is an exceptional local option; for practitioners willing to commute, it is worth the journey.",
    address: "—",
    bestFor: "Technical reformer Pilates with strong instructional depth in a residential hub",
    signatureClass: "Studio14 Reformer Flow",
    bookingTip: "Parking is easier than DIFC alternatives; book online as classes fill 24-48 hours ahead",
  },
  {
    number: "04",
    name: "Tula Studios",
    neighborhood: "Umm Suqeim",
    priceLevel: "AED$$$",
    review: "Tula Studios has cultivated a distinctive identity in the Umm Suqeim neighbourhood that runs against the grain of Dubai&apos;s tendency toward high-gloss, brand-forward wellness culture. The studio feels considered and human in scale — a place where the atmosphere is genuinely calm rather than performatively serene. The Pilates programme draws on both classical and contemporary influences, with instructors who are comfortable working across the full spectrum from complete beginners to practitioners with years of practice. Umm Suqeim&apos;s proximity to Jumeirah Beach and the broader Madinat district places Tula within a pocket of the city that has always prioritised residential quality over commercial intensity, and the studio reflects that. It is the kind of place where clients arrive slightly early because the atmosphere is worth experiencing before the session begins.",
    address: "—",
    bestFor: "Mindful Pilates practice with a calm, community-rooted atmosphere",
    signatureClass: "Tula Signature Reformer",
    bookingTip: "Weekend morning classes combine well with a Umm Suqeim beach walk; book by Thursday",
  },
  {
    number: "05",
    name: "CIMA Pilates",
    neighborhood: "Business Bay",
    priceLevel: "AED$$$",
    review: "CIMA Pilates has carved out a strong position in Business Bay&apos;s competitive wellness market by combining technically rigorous instruction with a programming schedule that genuinely accommodates the erratic hours of a district defined by finance and project delivery deadlines. Early morning sessions before seven and evening classes after eight fill reliably with professionals who cannot commit to fixed training windows. The studio&apos;s reformer programme is well-structured for progressive development, and the instructor team maintains consistency in cueing standards across different teachers — a harder achievement than it appears in a city with high instructor turnover. CIMA attracts a clientele that is serious about results and appreciates a studio that delivers without unnecessary theatrical energy. The Business Bay canal views from the studio add an aesthetic dimension that genuinely enhances the experience.",
    address: "—",
    bestFor: "Results-driven reformer Pilates for Business Bay professionals",
    signatureClass: "CIMA Power Reformer",
    bookingTip: "Early morning slots (pre-7am) available and less competitive than mid-morning",
  },
  {
    number: "06",
    name: "REVIVE Pilates Studio",
    neighborhood: "Al Quoz",
    priceLevel: "AED$$",
    review: "REVIVE occupies Al Quoz&apos;s creative and industrial landscape with the pragmatic honesty of a studio that has never been interested in charging for design aesthetic when the money is better spent on instruction quality. The neighbourhood — home to galleries, independent restaurants, and workshops — has attracted a Pilates clientele that tends to be curious, fitness-literate, and sceptical of premium-brand wellness theatre. The teaching reflects this: straightforward, technically grounded, and genuinely focused on client progress rather than retaining attention through format novelty. Pricing is the most accessible among the studios featured in this guide, making REVIVE the natural entry point for practitioners new to Dubai or testing reformer Pilates before committing to a higher-price-point membership elsewhere. Long-term clients often stay precisely because the no-frills directness of the teaching suits them better than any boutique alternative.",
    address: "—",
    bestFor: "Accessible, technically honest Pilates in Dubai&apos;s creative district",
    signatureClass: "REVIVE Reformer Fundamentals",
    bookingTip: "Best value per session in Dubai; introductory packages offer excellent entry pricing",
  }
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
