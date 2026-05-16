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
  title: "Best Pilates Studios in Miami (2026) | Pilates Collective Club",
  description:
    "Find the best Pilates studios in Miami — from South Beach reformer boutiques to Brickell wellness studios. Our curated guide to Miami Pilates in 2026.",
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
    name: "Anatomy at 1220",
    neighborhood: "South Beach",
    priceLevel: "$$$",
    review:
      "Anatomy at 1220 is South Beach&apos;s most serious wellness destination — a sprawling, multi-discipline space that includes one of Miami&apos;s finest Pilates programmes. The reformer studio within Anatomy is impeccably equipped with Balanced Body apparatus, and the instructors are drawn from the upper tier of Miami&apos;s teaching community. The atmosphere is sophisticated without being exclusionary, attracting everyone from professional athletes to retirees. The integration with other modalities — physical therapy, nutrition, massage — makes it genuinely valuable for holistic health.",
    address: "1220 16th Street, Miami Beach, FL 33139",
    bestFor: "Premium holistic wellness, athlete recovery, all levels",
    signatureClass: "Anatomy Reformer Intensive",
    bookingTip: "Book the introductory assessment before your first group class — the staff use it to stream you correctly. Morning slots fill fast; the app allows 7-day advance booking.",
  },
  {
    number: "02",
    name: "Pilates Miami",
    neighborhood: "Coconut Grove",
    priceLevel: "$$",
    review:
      "Pilates Miami in Coconut Grove is the city&apos;s most respected classical studio — a genuine lineage practice run by instructors trained in the New York tradition. The studio is small, focused, and uninterested in trends: Gratz equipment, classical order, and a student-teacher ratio that allows for real instruction. The Coconut Grove setting is leafy and calm, a deliberate contrast to the high-energy boutiques elsewhere in the city. For practitioners who want to understand the method rather than just work out, this is Miami&apos;s essential destination.",
    address: "2901 Florida Avenue, Suite 7, Coconut Grove, FL 33133",
    bestFor: "Classical Pilates method, advanced and intermediate practitioners, private work",
    signatureClass: "Classical Reformer & Mat",
    bookingTip: "Private sessions with the senior instructors are limited. Contact the studio directly — the website booking system is for group classes only.",
  },
  {
    number: "03",
    name: "SoulBody Miami",
    neighborhood: "Brickell",
    priceLevel: "$$$",
    review:
      "SoulBody brings a high-energy, design-forward reformer experience to Brickell&apos;s wellness market. The studio is beautifully designed — bright, airy, with views of the Brickell skyline — and the programming leans toward dynamic, cardio-inflected reformer work that suits Miami&apos;s fitness-oriented culture. The instructors are energetic and well-cued, and the class format is demanding in the best possible way. For professionals in the financial district looking for a premium lunchtime or early-morning reformer session, SoulBody is the natural choice.",
    address: "801 Brickell Avenue, Suite 100, Miami, FL 33131",
    bestFor: "Dynamic reformer, fitness-focused professionals, Brickell convenience",
    signatureClass: "Power Reformer Flow",
    bookingTip: "The 6:30am Brickell slots are popular with the finance crowd and go fast. Book via the app Monday morning for the full week ahead.",
  },
  {
    number: "04",
    name: "Y7 Pilates",
    neighborhood: "Wynwood",
    priceLevel: "$$",
    review:
      "Y7 brings its candlelit reformer concept to Wynwood&apos;s arts district with a format that feels unique in Miami&apos;s studio landscape. The low-lit, music-driven reformer sessions offer a genuinely different atmosphere from the sunlit boutiques elsewhere in the city — more immersive, more focused, and appealing to a younger, creatively-minded clientele. Technically the instruction is solid, and the class structure is well-designed for intermediate practitioners. Not classical Pilates, but an excellent workout in a setting that Miami makes its own.",
    address: "2750 NW 3rd Avenue, Wynwood, Miami, FL 33127",
    bestFor: "Atmospheric reformer experience, intermediate level, Wynwood arts crowd",
    signatureClass: "Candlelit Reformer",
    bookingTip: "Evenings at Wynwood have an electric atmosphere. The 7pm and 8pm classes are particularly popular — book mid-week for the following week.",
  },
  {
    number: "05",
    name: "Club Pilates Coral Gables",
    neighborhood: "Coral Gables",
    priceLevel: "$",
    review:
      "Club Pilates in Coral Gables offers the most accessible entry point to reformer Pilates in Miami&apos;s upscale residential neighbourhoods. The studio is clean, consistent, and well-run, with a level-based class structure that makes progression clear and motivating. The membership model encourages the kind of regularity that the Pilates method demands, and the pricing is genuinely approachable for Miami. Not the most exciting studio in the city, but one of the most reliably dependable for building a consistent weekly practice.",
    address: "258 Miracle Mile, Coral Gables, FL 33134",
    bestFor: "Beginner-to-intermediate structured progression, membership value, Coral Gables residents",
    signatureClass: "CP Signature Reformer",
    bookingTip: "The intro series is a genuine requirement here before group classes — complete the three introductory sessions and you&apos;ll be streamed correctly into the right level.",
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
        { "@type": "ListItem", "position": 2, "name": "Studio Guides", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Miami", "item": "https://pilatescollectiveclub.com/cities/miami" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Miami",
      "description": "Curated guide to the top 5 Pilates studios in Miami.",
      "url": "https://pilatescollectiveclub.com/cities/miami",
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
            "addressLocality": "Miami",
            "addressCountry": "US",
          },
          "priceRange": s.priceLevel,
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
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Studio Guides", href: "/cities" }, { label: "Miami (2026)" }]} />
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
