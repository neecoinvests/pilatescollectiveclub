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
    review: "Mighty Pilates on Sacramento Street is San Francisco's most reviewed boutique Pilates studio with over 170 Yelp reviews consistently rated 4.7 stars or above. Located between Spruce and Locust in one of SF's most beautiful residential neighborhoods, the studio draws a loyal following for its demanding yet supportive classes and the expertise of its certified instructors. A Marin location at Marin Country Mart extends the brand's reach across the Bay for clients whose lives cross the bridge.",
    address: "3654 Sacramento St, San Francisco, CA 94118",
    bestFor: "Classical Pilates combined with high-intensity approaches",
    signatureClass: "Mighty Reformer",
    bookingTip: "Early morning slots (6–8am) fill within minutes on weekday mornings — use the Mindbody app and book at exactly midnight when the 7-day advance window opens.",
  },
  {
    number: "02",
    name: "BODYROK",
    neighborhood: "Mission District",
    priceLevel: "$$",
    review: "BODYROK's Mission location is its most-reviewed San Francisco studio with over 90 Yelp reviews at 4.7 stars, offering a signature 40-minute Sculpt Class that fuses Pilates reformer principles with resistance training and cycling in a fast, energizing format. Reviewers consistently praise the cleanliness, modern equipment, varied routines, and lively music. BODYROK has five SF locations — including Marina, Haight, Polk, and Financial District — making it the most geographically accessible Pilates brand in the city.",
    address: "3585 20th St, San Francisco, CA 94110",
    bestFor: "High-intensity, low-impact group sculpt classes",
    signatureClass: "BODYROK Sculpt",
    bookingTip: "The Mission and Marina (2128 Lombard St) locations have the most experienced instructor rosters — the best starting points for new clients.",
  },
  {
    number: "03",
    name: "Bright Star Pilates & Gyrotonic",
    neighborhood: "Castro / Mission Dolores",
    priceLevel: "$$$",
    review: "Bright Star Pilates at 493 Sanchez Street opened in 2021 and has earned nearly 80 Yelp reviews with outstanding ratings. One of the few SF studios offering both classical Pilates — reformer, tower, chair, mat — and GYROTONIC® practice under one roof, a combination that attracts dancers, athletes, and movement enthusiasts seeking multi-dimensional body work. The chic, intimate space has a focused, community-minded atmosphere that suits the neighborhood.",
    address: "493 Sanchez St, San Francisco, CA 94117",
    bestFor: "Pilates plus GYROTONIC; full-apparatus work beyond reformer",
    signatureClass: "Reformer & Tower / GYROTONIC® Session",
    bookingTip: "GYROTONIC® sessions must be booked privately — call or email ahead to schedule, as openings are limited.",
  },
  {
    number: "04",
    name: "Nice Pilates",
    neighborhood: "Central Richmond",
    priceLevel: "$$",
    review: "Nice Pilates has cultivated a warm community following in the Richmond District with two locations on 15th Avenue and Geary Boulevard, praised for offering genuine quality instruction at prices that are more accessible than downtown boutique studios. The two-studio building on 15th Avenue creates an intimate neighborhood feel, and reviewers highlight the instructors' ability to make every client feel genuinely cared for. A true local gem that serves the Richmond's diverse, community-oriented population.",
    address: "412 15th Ave, San Francisco, CA 94118",
    bestFor: "Community-focused neighborhood Pilates; accessible pricing",
    signatureClass: "Nice Reformer Flow",
    bookingTip: "The Geary Boulevard location tends to have slightly more availability than the 15th Avenue flagship; if your preferred time is full at one, check the other immediately.",
  },
  {
    number: "05",
    name: "Pilates Story",
    neighborhood: "West Portal",
    priceLevel: "$$$",
    review: "Pilates Story is an owner-operated studio by highly trained instructor Hye-Yeon Park, who brings a warm, engaged teaching style to every session at 183 West Portal Avenue. Reviewers cite the non-intimidating atmosphere and Park's genuine investment in each client's long-term health as what sets it apart from larger studios. Located on the charming West Portal strip, the studio has a cozy neighborhood feel that appeals to clients who find big-brand studios impersonal.",
    address: "183 W Portal Ave, San Francisco, CA 94127",
    bestFor: "Owner-led instruction; cozy non-intimidating studio",
    signatureClass: "Full Apparatus Private Session",
    bookingTip: "Because it's owner-operated, sessions book out quickly — reach out via the website contact form rather than waiting for open online availability.",
  },
  {
    number: "06",
    name: "Rebalanced SF",
    neighborhood: "Presidio Heights / Laurel Village",
    priceLevel: "$$$$",
    review: "Rebalanced SF at 399 Laurel Street is San Francisco's top-rated specialized studio for Pilates-based rehabilitation and strength training, earning over 85 Yelp reviews with exceptional ratings. The studio combines classical Pilates apparatus with Redcord Suspension Training — a Norwegian neuromuscular therapy system — making it uniquely effective for clients with back pain, post-surgical recovery, or movement asymmetries. Reviewers consistently cite remarkable pain reduction and improved function in just a few sessions.",
    address: "399 Laurel St, Suite 7, San Francisco, CA 94118",
    bestFor: "Pilates as rehabilitation; chronic pain, injury history, movement dysfunction",
    signatureClass: "Redcord Suspension + Pilates Rehab",
    bookingTip: "Sessions are investment-priced but the results for pain/rehab clients are documented in dozens of detailed reviews. Request an initial evaluation so your program is customized from the start.",
  },
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
