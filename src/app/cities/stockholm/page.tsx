import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Stockholm (2026) — Curated Guide",
  description: "The best Pilates studios in Stockholm — reformer studios in Östermalm, Vasastan and Norrmalm. Four curated picks, verified October 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates stockholm", "reformer pilates stockholm", "best pilates studios stockholm", "pilates studio stockholm", "pilates sweden", "pilates östermalm", "pilates södermalm", "pilates vasastan", "best reformer pilates stockholm", "pilates classes stockholm"],
  openGraph: {
    title: "Best Pilates Studios in Stockholm (2026)",
    description:
      "Four curated Pilates studios in Stockholm — Östermalm, Södermalm, and Vasastan reformer picks. Verified 2026.",
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
    title: "Best Pilates Studios in Stockholm (2026)",
    description:
      "Find the best Pilates studios in Stockholm — four curated picks with booking tips for 2026.",
    images: ["https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/stockholm",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "The Place Stockholm",
    neighborhood: "Östermalm",
    priceLevel: "$$$",
    review: "The Place leads ClassPass's reformer ranking for Sweden, with a 4.88 overall score across nearly 9,000 sessions. It has two Östermalm studios: G37 on Grevgatan and K29 on Kommendörsgatan.",
    caveat: "popular classes fill quickly — book ahead.",
    address: "Grevgatan 37, 114 53 Stockholm",
    bestFor: "Top-rated reformer in Östermalm",
    signatureClass: "Reformer Pilates",
    bookingTip: "If G37 is full, try K29 at Kommendörsgatan 29.",
  },
  {
    number: "02",
    name: "Tim's Pilates",
    neighborhood: "Östermalm",
    priceLevel: "$$$",
    review: "Tim's Pilates offers private and group training in classical Pilates mat and reformer, with group apparatus classes on Tysta Gatan.",
    caveat: "classical teaching is precise and methodical — expect technique rather than a high-energy class.",
    address: "Tysta Gatan 9, Stockholm",
    bestFor: "Classical mat and reformer",
    signatureClass: "Group Apparatus",
    bookingTip: "Start with a private session if you are new to classical Pilates.",
  },
  {
    number: "03",
    name: "Energii — Sigtunagatan",
    neighborhood: "Vasastan",
    priceLevel: "$$$",
    review: "Energii is one of Scandinavia's larger reformer brands, and its Sigtunagatan studio in Vasastan is an exclusive reformer studio where Scandinavian design meets high-performance training. The brand also has a second Vasastan studio on Markvardsgatan with showers and towel rental.",
    caveat: "enter through the red door to the right of number 14 — it is easy to miss.",
    address: "Sigtunagatan 14, Stockholm",
    bestFor: "Design-led reformer in Vasastan",
    signatureClass: "Reformer Pilates",
    bookingTip: "If Sigtunagatan is full, try Markvardsgatan nearby.",
  },
  {
    number: "04",
    name: "Energii — Lästmakargatan",
    neighborhood: "Norrmalm",
    priceLevel: "$$",
    review: "Energii's Lästmakargatan studio in central Stockholm is bright and modern with 20 reformers, making it the brand's best option for central-city workers.",
    caveat: "a 20-reformer room is larger than a boutique class.",
    address: "Lästmakargatan 5, Stockholm",
    bestFor: "Central reformer near Stureplan",
    signatureClass: "Reformer Pilates",
    bookingTip: "Lunchtime classes suit people working in the centre.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Expect to pay €25–55 per class",
    body: "Stockholm is an expensive city and its Pilates studios reflect that. Group reformer classes at mid-range studios run 280–420 SEK (approximately €25–38); boutique small-group sessions reach 500–600 SEK. Monthly memberships typically offer the best per-session economics for regular practitioners.",
  },
  {
    heading: "Book well in advance — particularly in winter",
    body: "Stockholm's indoor wellness culture intensifies in the darker months. January through March sees peak demand across all studios. During this period, prime-time classes can sell out within hours of the weekly booking window opening. Set a calendar reminder for your preferred studio's release day.",
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
      "Stockholm's most prestigious residential district sets the standard for premium Pilates in Sweden. Studios here are beautifully designed, meticulously operated, and priced accordingly. The clientele is discerning and the instruction consistently strong. Pilates Östermalm is the landmark address.",
  },
  {
    name: "Vasastan",
    description:
      "An inner-city neighbourhood with genuine community warmth and a growing wellness infrastructure. Vasastan studios tend to prioritise instruction quality and regular-client relationships over aesthetic positioning. Reform Studio captures this approach well — serious about the work, welcoming in character.",
  },
  {
    name: "Norrmalm",
    description:
      "Stockholm's commercial centre has become an increasingly viable location for boutique wellness thanks to studios like Studio Norr, which prove that quality and central convenience aren't mutually exclusive. Excellent for visitors and professionals without time to travel to residential neighbourhoods.",
  },
  {
    name: "Södermalm",
    description:
      "The island south of the city centre is Stockholm's creative quarter — and it's produced a Pilates culture to match. Studios here tend to be more accessible in price and more progressive in programming, with a community culture that's warmer and less scene-driven than the northern neighbourhoods.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at most reformer studios. Full-toe grip socks are the standard.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "A quality 6mm mat is worth having for mat classes and home practice between studio sessions.",
    price: "From $18",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Many studios incorporate the magic circle — worth owning for home reinforcement work.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands",
    note: "Fabric resistance loops extend your home Pilates practice and support reformer spring work.",
    price: "From $10",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "Foam Roller",
    note: "Essential for fascial release and spinal mobility work before and after class.",
    price: "From $13",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
  {
    name: "Home Pilates Reformer",
    note: "A home reformer extends your studio practice — AeroPilates and Align entry models deliver a genuine full-body session.",
    price: "From $359",
    url: "https://www.amazon.com/s?k=home+pilates+reformer+aeropilates+align&tag=pilatescollective-20",
  },
];


const RELATED_CITIES = [
  { city: "Amsterdam", country: "Netherlands", href: "/cities/amsterdam", studioCount: 6 },
  { city: "Berlin", country: "Germany", href: "/cities/berlin", studioCount: 6 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 6 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 6 },
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
        { "@type": "ListItem", "position": 2, "name": "Stockholm", "item": "https://pilatescollectiveclub.com/cities/stockholm" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Stockholm",
      "description": "Curated guide to the top 5 Pilates studios in Stockholm.",
      "url": "https://pilatescollectiveclub.com/cities/stockholm",
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
            "addressLocality": "Stockholm",
            "addressCountry": "SE",
          },
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
              Stockholm has developed one of northern Europe's most coherent wellness cultures, and its Pilates scene is a reflection of that. The city's instinct for quality design, combined with a population that takes movement seriously, has produced a group of studios that compare favourably with anything in London or Paris. From the premium reformer boutiques of Östermalm to the community-minded spaces of Södermalm, this guide covers the four studios that best represent Stockholm's considerable Pilates offering.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
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
              4 Studios · Curated & Verified
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
              Best neighbourhoods for Pilates in Stockholm
            </h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Stockholm's Pilates landscape is shaped by its neighbourhoods.
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

        {/* Studio Gear */}
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to bring to your first class</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Grip socks are required at most reformer studios in Stockholm. These are our recommended picks — all available on Amazon.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#8b4a31", textDecoration: "underline", fontFamily: "'Montserrat', sans-serif", fontSize: "inherit" }}>Affiliate disclosure.</Link>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {GEAR.map((g) => (
                <a key={g.name} href={g.url} target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: "none" }}>
                  <div className="rounded-xl p-5 h-full flex flex-col justify-between" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)", transition: "border-color 0.2s" }}>
                    <div>
                      <h3 className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{g.name}</h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{g.note}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{g.price}</span>
                      <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#c5a882", fontFamily: "'Montserrat', sans-serif" }}>Shop →</span>
                    </div>
                  </div>
                </a>
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
