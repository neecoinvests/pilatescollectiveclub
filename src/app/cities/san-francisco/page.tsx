import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in San Francisco",
  description:
    "Discover the best Pilates studios in San Francisco — from Pacific Heights reformer boutiques to SoMa functional fitness hybrids. Five curated picks for 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: [
    "pilates studios san francisco",
    "reformer pilates san francisco",
    "best pilates san francisco",
    "pilates classes sf",
    "san francisco pilates guide",
    "boutique pilates sf",
    "pilates pacific heights",
    "pilates soma san francisco",
    "sf pilates 2026",
  ],
  openGraph: {
    title: "Best Pilates Studios in San Francisco (2026)",
    description:
      "Discover the best Pilates studios in San Francisco — five curated picks with booking tips for 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/san-francisco",
    images: [
      {
        url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "San Francisco city guide — Pilates Collective Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in San Francisco (2026)",
    description:
      "Discover the best Pilates studios in San Francisco — five curated picks with booking tips for 2026.",
    images: ["https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/san-francisco",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Mighty Pilates",
    neighborhood: "Presidio Heights",
    priceLevel: "$$$",
    review: "Mighty Pilates has become one of San Francisco's most recognisable boutique fitness brands, and the Presidio Heights location reflects the neighbourhood's understated affluence — clean lines, quality equipment, and instruction that is polished without being performative. The studio attracts a clientele of professionals and long-term practitioners who expect precise teaching and get it, with instructors who adjust to the room rather than running a fixed script. Group reformer classes are programmed with enough variety to challenge regulars without disorientating beginners, and the community has a loyalty that speaks to consistency over time. Multiple SF locations make it practical across the city.",
    address: "—",
    bestFor: "Group reformer, consistent quality across locations, experienced practitioners",
    signatureClass: "Mighty Reformer (50 min)",
    bookingTip: "The Mighty app makes booking and cancellation straightforward. A founding membership or class pack delivers the best value — drop-in rates at this level reflect the San Francisco premium.",
  },
  {
    number: "02",
    name: "Bright Star Pilates",
    neighborhood: "Castro/Noe Valley",
    priceLevel: "$$",
    review: "Bright Star Pilates occupies a thoughtful position in the Castro and Noe Valley community — a studio where the instruction is classical in foundation but delivered with the warmth and accessibility that the neighbourhood's longtime residents have come to expect. The instructors here have deep roots in the method and are known for hands-on adjustments that reveal something new about a movement pattern even for experienced practitioners. Class sizes are deliberately kept small, ensuring that every session functions closer to a semi-private than a group class in terms of individual attention. It is the kind of studio that creates practitioners rather than fitness clients.",
    address: "—",
    bestFor: "Classical reformer and mat, small group instruction, all levels",
    signatureClass: "Classical Reformer",
    bookingTip: "Early morning slots are popular with the neighbourhood's working professionals — book a week ahead. The studio offers a genuine introductory rate for new clients that is worth using before committing to a package.",
  },
  {
    number: "03",
    name: "NICE Pilates",
    neighborhood: "Inner Richmond",
    priceLevel: "$$$",
    review: "NICE Pilates has carved out a distinctive identity in the Inner Richmond by combining high-production reformer classes with an emphasis on genuine mindfulness — a combination that sounds obvious but is rarely executed well. The studio's design is intentional and calming, and instructors are selected as much for their ability to teach presence as for their physical cuing. The clientele includes a notable number of practitioners who have migrated from louder, more performance-oriented studios and found they prefer the quieter intensity here. For those training in the Richmond or visiting from the Sunset, it is the area's most compelling premium option.",
    address: "—",
    bestFor: "Mindful reformer, experienced practitioners, design-forward atmosphere",
    signatureClass: "NICE Reformer (50 min)",
    bookingTip: "Parking in the Inner Richmond is easier than downtown SF — street parking is usually available within a block. New client intro packages offer a meaningful discount on the standard rate.",
  },
  {
    number: "04",
    name: "Blue Sparrow Pilates",
    neighborhood: "North Beach",
    priceLevel: "$$$",
    review: "Blue Sparrow Pilates sits in the North Beach neighbourhood with the quiet confidence of a studio that has earned its reputation through instruction rather than marketing. The teaching draws on classical Pilates lineage and is delivered by instructors with comprehensive apparatus training — reformer, Cadillac, chair, and barrel work all feature in the programme, which is unusual for a group-format studio. The clientele is a mix of longtime San Francisco residents and North Beach locals who discovered Pilates here and have never felt the need to look elsewhere. Visitors staying in or around North Beach, Fisherman's Wharf, or Telegraph Hill will find it a genuinely world-class local option.",
    address: "—",
    bestFor: "Full classical apparatus, serious practitioners, North Beach location",
    signatureClass: "Classical Reformer (60 min)",
    bookingTip: "Classes are kept intentionally small — book as early as the system allows, especially for weekend morning slots. Private sessions on the Cadillac or chair are available and worth inquiring about.",
  },
  {
    number: "05",
    name: "CORE MVMT",
    neighborhood: "Castro",
    priceLevel: "$$",
    review: "CORE MVMT has become a Castro neighbourhood staple by offering well-taught reformer classes at price points that feel honest for the quality delivered, which is a notable achievement in San Francisco's fitness market. The studio runs a tight programme focused on reformer work, and the instructors maintain standards that would hold up at studios charging considerably more. The atmosphere is inclusive and unpretentious — a reflection of its neighbourhood — and the regular crowd is diverse in age, background, and experience level. For Castro and Mission residents who want rigorous instruction without the premium boutique surcharge, CORE MVMT is the clear choice.",
    address: "—",
    bestFor: "Reformer, value for quality, Castro community",
    signatureClass: "Reformer Group",
    bookingTip: "Evening classes fill quickly with after-work bookings — aim to reserve 48–72 hours ahead. The studio's intro offer is the most economical way to assess fit before committing to a package.",
  },
  {
    number: "06",
    name: "Pilates Vita SF",
    neighborhood: "Russian Hill",
    priceLevel: "$$$",
    review: "Pilates Vita SF occupies a light-filled Russian Hill space that frames the practice in an appropriately serene context — this is a studio designed for clients who take their Pilates seriously and want an environment that reflects that. The instruction draws from classical foundations and is delivered by teachers with extensive training backgrounds, and the programme is calibrated to develop real competence over time rather than provide a different choreographed workout each visit. Russian Hill and Nob Hill residents have made it their training home, and the consistency of the client base signals an unusual degree of satisfaction with both the teaching and the experience. It is one of the most refined studios operating in the city.",
    address: "—",
    bestFor: "Classical-grounded reformer, serious practitioners, Russian Hill and Nob Hill clients",
    signatureClass: "Reformer Fundamentals & Flow",
    bookingTip: "Russian Hill street parking is limited — plan to arrive by rideshare or allow extra time. Private session availability is best secured by contacting the studio directly.",
  }
];

const BOOKING_TIPS = [
  {
    heading: "Expect to pay $30–55 per class",
    body: "San Francisco boutique Pilates sits at the higher end of the US market. Drop-in reformer classes range from around $30 at value studios to $50–55 at premium boutiques. Monthly unlimited memberships typically run $220–320 and represent the best per-class value for regular practitioners.",
  },
  {
    heading: "Intro offers are standard — use them strategically",
    body: "Most SF studios offer a new-client deal, typically three classes for $49–79 or an unlimited two-week pass for $79. Take these at two or three studios before committing — the instruction style and community culture vary considerably across the city.",
  },
  {
    heading: "ClassPass covers the mid-tier well",
    body: "ClassPass has strong coverage of San Francisco's mid-range studios. It's less useful for top-tier boutiques that either don't participate or restrict ClassPass slots to off-peak hours. Use it for sampling, then switch to a direct membership once you've found your studio.",
  },
  {
    heading: "Grip socks are mandatory at every studio",
    body: "No exceptions — bring your own. The standard is toeless grip socks, available at most studios for $15–18 or cheaper online. A few studios will loan a pair for your first visit but will charge for them.",
  },
  {
    heading: "Neighbourhood matters for your routine",
    body: "San Francisco's hills and traffic patterns make cross-city commutes genuinely inconvenient at peak times. Choose a studio within fifteen minutes of your home or office — consistency matters far more than prestige, and a studio you'll actually attend is always the right studio.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Pacific Heights",
    description:
      "San Francisco's wealthiest residential quarter has a corresponding density of premium wellness studios. Pacific Heights Pilates tends toward the boutique and intimate, with small class sizes and high instruction standards. Alchemy and several independents make this the city's most refined postcode for the method.",
  },
  {
    name: "Noe Valley",
    description:
      "A quieter, family-oriented neighbourhood with a strong community wellness culture. Studios here lean toward private and semi-private work, and the pace is deliberately unhurried. Excellent for clients seeking a more personal relationship with their instructor and a less scene-driven environment.",
  },
  {
    name: "Russian Hill & Polk Gulch",
    description:
      "Home to some of the city's most classically-minded studios. The elevated streets and neighbourhood calm suit the focused, methodical approach these studios bring. The Pilates Studio SF sets the tone — serious, traditional, and deeply invested in the original method.",
  },
  {
    name: "SoMa",
    description:
      "South of Market is where San Francisco's tech and creative industries converge, and the studios reflect it: modern, data-literate, and efficient. Studios here are typically newer, well-designed, and built for clients who approach fitness with a measurable-outcome mindset.",
  },
];

const RELATED_CITIES = [
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 5 },
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 5 },
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
        { "@type": "ListItem", "position": 2, "name": "San Francisco", "item": "https://pilatescollectiveclub.com/cities/san-francisco" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in San Francisco",
      "description": "Curated guide to the top 5 Pilates studios in San Francisco.",
      "url": "https://pilatescollectiveclub.com/cities/san-francisco",
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
            "addressLocality": "San Francisco",
            "addressCountry": "US",
          },
        },
      })),
    },
  ],
};

export default function SanFranciscoPage() {
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
              <span style={{ color: "#8b4a31" }}>in San Francisco</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Updated May 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              San Francisco has cultivated one of the most discerning wellness cultures in the United States. The city's Pilates scene reflects that — ranging from classical studios with Gratz apparatus and lineage credentials to sleek SoMa boutiques built for high-achieving professionals. Whether you're looking for private instruction in Noe Valley or a rigorous group reformer class in Pacific Heights, this guide covers the five studios that consistently deliver on both instruction quality and experience.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1400&q=80"
                alt="San Francisco city guide"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>San Francisco, United States</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Classical roots and tech-era innovation, side by side</p>
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
              Tips for booking Pilates in San Francisco
            </h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((tip) => (
                <div key={tip.heading} className="pcc-booking-tip flex gap-5 rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217, 194, 186, 0.3)" }}>
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
              Best neighbourhoods for Pilates in San Francisco
            </h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              San Francisco's Pilates landscape is shaped by its neighbourhoods.
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
          searchPlaceholder="Ask: best reformer Pilates in San Francisco…"
        />
      </main>
      <Footer />
    </>
  );
}
