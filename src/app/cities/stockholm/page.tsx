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
  title: "Best Pilates Studios in Stockholm (2026) | Pilates Collective Club",
  description:
    "Find the best Pilates studios in Stockholm — from Östermalm reformer boutiques to Södermalm wellness spaces. Five expert picks for 2026.",
  keywords: [
    "pilates studios stockholm",
    "reformer pilates stockholm",
    "best pilates stockholm",
    "pilates classes stockholm",
    "stockholm pilates guide",
    "boutique pilates stockholm",
    "pilates östermalm stockholm",
    "pilates södermalm",
    "stockholm pilates 2026",
  ],
  openGraph: {
    title: "Best Pilates Studios in Stockholm (2026) | Pilates Collective Club",
    description:
      "Find the best Pilates studios in Stockholm — five curated picks with booking tips for 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/stockholm",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Stockholm city guide — Pilates Collective Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Stockholm (2026) | Pilates Collective Club",
    description:
      "Find the best Pilates studios in Stockholm — five curated picks with booking tips for 2026.",
    images: ["https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/stockholm",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Pilates Östermalm",
    neighborhood: "Östermalm",
    priceLevel: "€€€",
    review:
      "Pilates Östermalm occupies a quiet corner of Stockholm&apos;s most affluent district and has been the city&apos;s reference point for premium reformer instruction for over a decade. The studio is designed with the understated precision characteristic of the best Scandinavian interiors — pale birch, clean lines, natural light — and the instruction matches that standard throughout. The class sizes are deliberately small (six maximum), and the teaching team holds qualifications from both the UK and the US. For experienced practitioners visiting Stockholm, this is the first call.",
    address: "Karlavägen 58, 114 49 Stockholm",
    bestFor: "Premium reformer, experienced practitioners, small-group instruction",
    signatureClass: "Reformer Advanced",
    bookingTip: "Book seven days ahead via the online system. The Tuesday and Thursday morning sessions are consistently the most competitive. New clients need an orientation session first.",
  },
  {
    number: "02",
    name: "Reform Studio Stockholm",
    neighborhood: "Vasastan",
    priceLevel: "€€",
    review:
      "Reform Studio has built a genuinely loyal following in Vasastan — one of Stockholm&apos;s most characterful inner-city neighbourhoods — through consistent, technically strong instruction and a community atmosphere that&apos;s notably warmer than many boutique competitors. The studio runs a thoughtful curriculum from beginner reformer through to advanced apparatus, with a structured progression that rewards regular attendance. The pricing is well-calibrated for the quality, and the introduction offer is among the most generous in the city.",
    address: "Upplandsgatan 44, 113 28 Stockholm",
    bestFor: "Structured progression, community atmosphere, value, beginners to advanced",
    signatureClass: "Reform Signature Reformer",
    bookingTip: "The three-for-one introductory offer is excellent value — use it across different class levels to understand where you fit. Direct membership packs of ten offer the best ongoing rate.",
  },
  {
    number: "03",
    name: "Studio Norr",
    neighborhood: "Norrmalm",
    priceLevel: "€€€",
    review:
      "Studio Norr opened in central Norrmalm in 2021 and has rapidly established itself as one of the most thoughtfully designed Pilates environments in Scandinavia. The studio&apos;s founders — both trained in London — brought a particular sensitivity to both the method and the spatial experience, resulting in a studio that feels simultaneously rigorous and calm. The reformer classes cap at five and the instruction is hands-on throughout. The Norrmalm central location makes it unusually accessible for a boutique studio of this quality.",
    address: "Drottninggatan 88, 111 36 Stockholm",
    bestFor: "Boutique reformer, hands-on instruction, central location",
    signatureClass: "Norr Reformer Signature",
    bookingTip: "The 7.30am sessions before the business day begin are consistently popular. Book at the weekly release on Sunday evenings. The studio app sends notifications when a new week opens.",
  },
  {
    number: "04",
    name: "Söder Pilates",
    neighborhood: "Södermalm",
    priceLevel: "€€",
    review:
      "Söder Pilates reflects the character of its neighbourhood perfectly — creative, unpretentious, and quietly excellent. Södermalm&apos;s independent spirit has produced a studio that refuses to compete on aesthetics alone, investing instead in instructor quality and programming depth. The group reformer classes run to a maximum of eight and cover a genuine range from foundations to advanced. The studio has also developed one of the better prenatal and postnatal Pilates programmes in Stockholm, which has become a meaningful part of its offering.",
    address: "Götgatan 62, 118 26 Stockholm",
    bestFor: "Group reformer, prenatal and postnatal, community, Södermalm locals",
    signatureClass: "Söder Flow Reformer",
    bookingTip: "Evening classes on weekdays are the busiest — book three to four days ahead. The prenatal programme requires a brief intake call with an instructor before your first session.",
  },
  {
    number: "05",
    name: "Sthlm Pilates & Wellness",
    neighborhood: "Kungsholmen",
    priceLevel: "€€",
    review:
      "Sthlm Pilates & Wellness takes a genuinely holistic approach to its offering — combining reformer Pilates with a considered programme of yoga, physiotherapy, and recovery treatments that makes the studio a destination rather than simply a class venue. The Pilates instruction here is solid rather than exceptional, but the broader wellness context gives it a depth that purely Pilates-focused studios lack. For clients who want a single address for a range of movement practices, Sthlm Pilates is the most complete option in the city.",
    address: "Hantverkargatan 72, 112 38 Stockholm",
    bestFor: "Holistic wellness, combined practices, recovery-focused clients",
    signatureClass: "Reformer & Recovery",
    bookingTip: "The combined reformer and recovery packages represent the best value in the studio&apos;s offer. Ask about the monthly wellness membership when you visit.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Expect to pay €25–55 per class",
    body: "Stockholm is an expensive city and its Pilates studios reflect that. Group reformer classes at mid-range studios run 280–420 SEK (approximately €25–38); boutique small-group sessions reach 500–600 SEK. Monthly memberships typically offer the best per-session economics for regular practitioners.",
  },
  {
    heading: "Book well in advance — particularly in winter",
    body: "Stockholm&apos;s indoor wellness culture intensifies in the darker months. January through March sees peak demand across all studios. During this period, prime-time classes can sell out within hours of the weekly booking window opening. Set a calendar reminder for your preferred studio&apos;s release day.",
  },
  {
    heading: "Most studios use MindBody or proprietary apps",
    body: "The booking experience in Stockholm is generally smooth and digital. Most studios operate English-language interfaces, and the majority of instructors speak excellent English — language is rarely a barrier at any quality studio.",
  },
  {
    heading: "Grip socks at every studio — no exceptions",
    body: "As across Europe, toeless grip socks are mandatory. Most studios sell them (approximately 150 SEK), but bringing your own is cheaper. A number of Stockholm studios also have proprietary branded socks at a premium — your own will serve just as well.",
  },
  {
    heading: "Trial packages are universally available",
    body: "Stockholm studios are competitive enough that intro offers are standard across the market — typically three to five classes for a reduced rate. The quality gap between studios is real, so sampling two or three before committing to a membership is time well spent.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Östermalm",
    description:
      "Stockholm&apos;s most prestigious residential district sets the standard for premium Pilates in Sweden. Studios here are beautifully designed, meticulously operated, and priced accordingly. The clientele is discerning and the instruction consistently strong. Pilates Östermalm is the landmark address.",
  },
  {
    name: "Vasastan",
    description:
      "An inner-city neighbourhood with genuine community warmth and a growing wellness infrastructure. Vasastan studios tend to prioritise instruction quality and regular-client relationships over aesthetic positioning. Reform Studio captures this approach well — serious about the work, welcoming in character.",
  },
  {
    name: "Norrmalm",
    description:
      "Stockholm&apos;s commercial centre has become an increasingly viable location for boutique wellness thanks to studios like Studio Norr, which prove that quality and central convenience aren&apos;t mutually exclusive. Excellent for visitors and professionals without time to travel to residential neighbourhoods.",
  },
  {
    name: "Södermalm",
    description:
      "The island south of the city centre is Stockholm&apos;s creative quarter — and it&apos;s produced a Pilates culture to match. Studios here tend to be more accessible in price and more progressive in programming, with a community culture that&apos;s warmer and less scene-driven than the northern neighbourhoods.",
  },
];

const RELATED_CITIES = [
  { city: "Amsterdam", country: "Netherlands", href: "/cities/amsterdam", studioCount: 5 },
  { city: "Berlin", country: "Germany", href: "/cities/berlin", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
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
        { "@type": "ListItem", "position": 3, "name": "Stockholm", "item": "https://pilatescollectiveclub.com/cities/stockholm" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Stockholm",
      "description": "Curated guide to the top 5 Pilates studios in Stockholm.",
      "url": "https://pilatescollectiveclub.com/cities/stockholm",
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
            "addressLocality": "Stockholm",
            "addressCountry": "SE",
          },
          "priceRange": s.priceLevel,
        },
      })),
    },
  ],
};

export default function StockholmPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Studio Guides", href: "/cities" }, { label: "Stockholm (2026)" }]} />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
                City Guide
              </span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>
                Sweden
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Stockholm</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Updated May 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Stockholm has developed one of northern Europe&apos;s most coherent wellness cultures, and its Pilates scene is a reflection of that. The city&apos;s instinct for quality design, combined with a population that takes movement seriously, has produced a group of studios that compare favourably with anything in London or Paris. From the premium reformer boutiques of Östermalm to the community-minded spaces of Södermalm, this guide covers the five studios that best represent Stockholm&apos;s considerable Pilates offering.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1400&q=80"
                alt="Stockholm city guide"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Stockholm, Sweden</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Scandinavian design meets serious Pilates culture</p>
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
              Tips for booking Pilates in Stockholm
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
              Best neighbourhoods for Pilates in Stockholm
            </h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Stockholm&apos;s Pilates landscape is shaped by its neighbourhoods.
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
          searchPlaceholder="Ask: best reformer Pilates in Stockholm…"
        />
      </main>
      <Footer />
    </>
  );
}
