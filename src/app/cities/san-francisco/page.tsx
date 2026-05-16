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
  title: "Best Pilates Studios in San Francisco (2026) | Pilates Collective Club",
  description:
    "Discover the best Pilates studios in San Francisco — from Pacific Heights reformer boutiques to SoMa functional fitness hybrids. Five curated picks for 2026.",
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
    title: "Best Pilates Studios in San Francisco (2026) | Pilates Collective Club",
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
    title: "Best Pilates Studios in San Francisco (2026) | Pilates Collective Club",
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
    name: "Alchemy Pilates",
    neighborhood: "Pacific Heights",
    priceLevel: "$$$",
    review:
      "Alchemy has quietly established itself as Pacific Heights' most serious Pilates address. The studio occupies a beautifully converted Victorian space on Sacramento Street, where Balanced Body Reformers and a meticulous cueing philosophy sit side by side. The instructors bring a rare combination of anatomical knowledge and genuine warmth — classes never feel clinical. The small class sizes (six per reformer session) ensure every client receives meaningful attention throughout.",
    address: "2325 Sacramento Street, San Francisco, CA 94115",
    bestFor: "Precision reformer, small-group sessions, all levels",
    signatureClass: "Reformer Foundations",
    bookingTip: "Early-morning Pacific Heights slots fill within hours of the weekly release. Book via their app on Sunday evening for the best selection.",
  },
  {
    number: "02",
    name: "Cardio Barre & Pilates",
    neighborhood: "Lower Pacific Heights",
    priceLevel: "$$",
    review:
      "Cardio Barre occupies an important middle ground in San Francisco's fitness landscape — accessible pricing, energetic instruction, and a genuine commitment to the Pilates method beneath the branded exterior. The Lower Pacific Heights studio is well-equipped and efficiently run. The reformer programme here is structured clearly from introductory to advanced, which makes it an excellent entry point for newcomers to the method who want a proper foundation without the intimidation of a luxury boutique.",
    address: "2166 Market Street, San Francisco, CA 94114",
    bestFor: "Beginners to intermediate, structured progression, value",
    signatureClass: "Reformer Level 1 Series",
    bookingTip: "Class packs of ten offer the best per-class rate. The 6am slots are almost always available mid-week.",
  },
  {
    number: "03",
    name: "Studio Vitae",
    neighborhood: "Noe Valley",
    priceLevel: "$$$",
    review:
      "Studio Vitae is the kind of neighbourhood gem that San Francisco does particularly well. Tucked into a quiet Noe Valley street, it operates on a semi-private and private basis only — no group reformer classes, which means every session is genuinely bespoke. The head instructor brings fifteen years of classical Pilates training and has a particular strength in postpartum and spinal rehabilitation work. For clients with specific goals or injury histories, this is among the most thoughtful studios in the city.",
    address: "3982 24th Street, San Francisco, CA 94114",
    bestFor: "Private and semi-private sessions, rehabilitation, postpartum",
    signatureClass: "Bespoke Reformer & Mat",
    bookingTip: "Wait times for a regular slot can be four to six weeks. Join the cancellation list immediately and be flexible on timing.",
  },
  {
    number: "04",
    name: "The Pilates Studio SF",
    neighborhood: "Russian Hill",
    priceLevel: "$$$",
    review:
      "One of the city's longest-running dedicated Pilates studios, The Pilates Studio SF maintains the classical lineage with uncommon seriousness. The Russian Hill location is compact but thoughtfully equipped — Gratz apparatus throughout, which tells you everything about the studio's commitment to traditional methodology. The teaching is disciplined and demanding, and the instructor roster includes several who trained directly with first-generation Pilates teachers. An essential stop for anyone with a serious interest in the classical system.",
    address: "1020 Hyde Street, San Francisco, CA 94109",
    bestFor: "Classical Pilates, advanced practitioners, method purists",
    signatureClass: "Classical Reformer",
    bookingTip: "New clients must complete a private intake session before joining group apparatus classes. Budget two sessions before the group schedule opens up.",
  },
  {
    number: "05",
    name: "Forge Pilates",
    neighborhood: "SoMa",
    priceLevel: "$$",
    review:
      "Forge emerged from SoMa's tech-adjacent wellness scene and has matured into one of the most coherent value offerings in the city. The studio is sleek and modern, with Merrithew equipment and a class structure that rewards regulars — the level system here is genuinely rigorous, not just marketing. The instructors skew younger than many SF competitors but bring real technical depth. Forge is a strong choice for tech-industry professionals who want measurable progress in limited weekly hours.",
    address: "340 Brannan Street, San Francisco, CA 94107",
    bestFor: "Intermediate to advanced, structured progression, professionals",
    signatureClass: "Forge Reformer Signature",
    bookingTip: "Membership tiers allow two to four classes per week. The Tuesday and Thursday evening classes at 7pm are consistently the most popular — book three days out.",
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
        { "@type": "ListItem", "position": 2, "name": "Studio Guides", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "San Francisco", "item": "https://pilatescollectiveclub.com/cities/san-francisco" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in San Francisco",
      "description": "Curated guide to the top 5 Pilates studios in San Francisco.",
      "url": "https://pilatescollectiveclub.com/cities/san-francisco",
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
            "addressLocality": "San Francisco",
            "addressCountry": "US",
          },
          "priceRange": s.priceLevel,
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
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Studio Guides", href: "/cities" }, { label: "San Francisco (2026)" }]} />
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
              San Francisco has cultivated one of the most discerning wellness cultures in the United States. The city&apos;s Pilates scene reflects that — ranging from classical studios with Gratz apparatus and lineage credentials to sleek SoMa boutiques built for high-achieving professionals. Whether you&apos;re looking for private instruction in Noe Valley or a rigorous group reformer class in Pacific Heights, this guide covers the five studios that consistently deliver on both instruction quality and experience.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
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
              Tips for booking Pilates in San Francisco
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
              Best neighbourhoods for Pilates in San Francisco
            </h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              San Francisco&apos;s Pilates landscape is shaped by its neighbourhoods.
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
