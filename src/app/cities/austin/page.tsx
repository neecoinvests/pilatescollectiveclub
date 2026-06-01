import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Austin, TX (2026) — Curated & Verified",
  description: "The best Pilates studios in Austin, Texas — from classical reformer boutiques in South Lamar to athletic conditioning studios near the Domain. Six verified picks for every level.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates studios austin", "reformer pilates austin tx", "best pilates austin", "pilates classes austin", "pilates south lamar", "pilates domain austin", "pilates downtown austin"],
  openGraph: {
    title: "The Best Pilates Studios in Austin, TX (2026)",
    description: "Six curated, verified Pilates studios in Austin — from classical South Lamar boutiques to athletic conditioning rooms near the Domain.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/austin",
    images: [{ url: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1200&q=80", width: 1200, height: 630, alt: "Austin Texas city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Austin, TX (2026)",
    description: "Six curated Pilates studios in Austin — verified picks for every level.",
    images: ["https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/austin",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Austin Pilates",
    neighborhood: "Rosedale / Central Austin",
    priceLevel: "$$$$",
    review: "Austin Pilates is the city's most established classical studio — the kind of place that has quietly shaped the local Pilates culture while others chased trends. Founded with a deep commitment to the Pilates method in its original form, the studio teaches full apparatus work including Reformer, Cadillac, Wunda Chair, and Ladder Barrel, drawing on a lineage that connects directly to the core of the discipline. The Rosedale location attracts a mature, serious clientele: long-term practitioners, dancers, and rehabilitation clients who understand exactly what they're investing in. Instruction quality is uniformly high, with teachers who have years of training behind them and the patience to work with each client as an individual. For anyone who wants to understand what Pilates actually is — rather than what the boutique market has made of it — this is the right starting point in Austin.",
    address: "—",
    bestFor: "Classical full apparatus, serious practitioners",
    signatureClass: "Classical Reformer & Cadillac",
    bookingTip: "Private and semi-private sessions fill quickly; contact the studio to discuss an intake session before your first booking",
  },
  {
    number: "02",
    name: "Trifecta Pilates",
    neighborhood: "South Congress",
    priceLevel: "$$$",
    review: "Trifecta Pilates on South Congress occupies a well-lit, thoughtfully designed space that feels native to the neighbourhood — creative, community-minded, and genuinely expert without being intimidating. The teaching here is progressive and anatomically rigorous: instructors work with an understanding of movement science that elevates the quality of cueing and correction well above the boutique average. The studio runs group reformer classes alongside a robust private programme, which makes it unusually accessible for beginners while retaining enough depth to satisfy advanced practitioners. South Congress regulars are health-literate and consistent — the kind of community that attracts and keeps excellent teachers. The programme also incorporates Pilates-based rehabilitation for common injuries, making it particularly well-regarded among Austin's active running and cycling community.",
    address: "—",
    bestFor: "All levels, injury rehabilitation",
    signatureClass: "Reformer Flow",
    bookingTip: "Book weekend morning slots a full week ahead; the studio's intro package is excellent value for new clients",
  },
  {
    number: "03",
    name: "Club Pilates South Lamar",
    neighborhood: "South Lamar",
    priceLevel: "$$$",
    review: "Club Pilates South Lamar is the strongest entry in the franchise network across Austin, benefiting from a location that draws a large, fitness-committed clientele from one of the city's most active residential corridors. The studio runs a consistent reformer programme anchored by the Club Pilates curriculum — structured, progressively designed, and well-taught by a team whose engagement with the method is genuine rather than perfunctory. The South Lamar location is conveniently placed for practitioners living in the 78704 and 78745 zip codes, and the membership structure makes it among the most financially accessible paths into regular Pilates practice in the city. Classes run at a wide range of times, including early morning and late evening slots that work well for Austin's varied work schedules. A reliable, well-managed studio for practitioners who value consistency and community.",
    address: "—",
    bestFor: "Consistent reformer programming, memberships",
    signatureClass: "Flow",
    bookingTip: "Monthly memberships cut per-class cost significantly; explore the Intro package before committing",
  },
  {
    number: "04",
    name: "Pilates by Michele",
    neighborhood: "West Lake Hills",
    priceLevel: "$$$$",
    review: "Pilates by Michele operates at the intimate, high-quality end of Austin's studio market — a private and semi-private practice that serves a discerning West Lake Hills clientele with the kind of personalised attention that only small-format studios can deliver. Michele's teaching background combines classical Pilates training with deep knowledge of functional movement and physical therapy principles, which makes her practice particularly valuable for clients navigating complex injuries or returning to movement after medical procedures. Sessions are carefully programmed to each client's history and goals, with progression tracked over time rather than reset with each class. The West Lake Hills location is residential and quiet, which suits the studio's approach: serious, focused, and entirely free of the marketing noise that surrounds much of Austin's boutique fitness market.",
    address: "—",
    bestFor: "Private sessions, post-rehabilitation, advanced work",
    signatureClass: "Private Apparatus Session",
    bookingTip: "New clients should request an intake call before booking; the personalised approach starts from the first contact",
  },
  {
    number: "05",
    name: "Define Body & Mind",
    neighborhood: "Domain / North Austin",
    priceLevel: "$$$",
    review: "Define Body & Mind at the Domain brings a contemporary, fusion-oriented approach to the reformer that appeals strongly to Austin's professional north-side population — tech workers, executives, and young families who want an efficient, results-driven workout that doesn't require deep prior knowledge of the Pilates method. Classes combine reformer Pilates with barre and light weight training in a choreographed format that keeps sessions varied and physically demanding. The Domain studio is spacious and well-equipped, with a class schedule dense enough to accommodate the complex calendars of North Austin's working population. Instructors are personable and skilled at keeping energy high without sacrificing correct form. For practitioners whose primary goal is conditioning and body composition rather than classical method education, Define delivers consistently.",
    address: "—",
    bestFor: "Fusion reformer, fitness-focused conditioning",
    signatureClass: "Reformer Fusion",
    bookingTip: "First class is discounted; the app allows same-day booking for cancellation slots that open regularly",
  },
  {
    number: "06",
    name: "East Austin Pilates Collective",
    neighborhood: "East Austin",
    priceLevel: "$$",
    review: "East Austin Pilates Collective brings an accessible, community-oriented Pilates practice to one of the city's most culturally vibrant districts. The studio is deliberately priced to be reachable for East Austin's creative and working-class population — a thoughtful counter-programming to the premium positioning of most Austin boutiques. The instruction quality, however, is no less serious: the team is well-trained, enthusiastic, and genuinely invested in making the method available to practitioners who might otherwise be priced out of the discipline. Mat and reformer classes run throughout the day and evening, with a particular emphasis on programmes for beginners, prenatal clients, and seniors. The community atmosphere is among the warmest in the Austin market, and the studio functions as a genuine neighbourhood anchor rather than a transactional fitness provider.",
    address: "—",
    bestFor: "Beginners, community-focused practice, accessible pricing",
    signatureClass: "Reformer Fundamentals",
    bookingTip: "Drop-in rates are among the most reasonable in Austin; the monthly unlimited pass offers outstanding value",
  },
];

const BOOKING_TIPS = [
  { heading: "Expect to pay $28–55 per class", body: "Austin's Pilates market spans a wide price range — from around $28 at accessible community studios to $55 at premium private and semi-private practices. Monthly memberships, especially at Club Pilates and similar studios, bring per-class costs down to $18–28 for regular practitioners." },
  { heading: "Austin's fitness culture rewards consistency", body: "Unlike New York or LA, Austin studios tend to build tight-knit communities of regulars. Committing to a studio rather than perpetually class-hopping pays dividends here — instructors learn your body, and your practice improves measurably faster as a result." },
  { heading: "Traffic affects your experience", body: "South Lamar and South Congress can be slow during Austin rush hour. Factor in 20–30 minutes of buffer if you're commuting from north of the river to a morning or evening class. Choosing a studio near your workplace often outperforms choosing the 'best' studio across town." },
  { heading: "Grip socks are non-negotiable", body: "Every reformer studio in Austin requires grip socks. Most sell them at the front desk at retail prices — buying a quality pair in advance from Amazon saves money and ensures you have exactly the fit you prefer." },
  { heading: "Use intro packages strategically", body: "Most Austin studios offer new-client intro packages valid for 2–4 weeks. Use the window to visit at different times of day, try multiple instructors, and assess the commute at your typical scheduling times before committing to a membership." },
];

const NEIGHBORHOODS = [
  { name: "South Lamar & South Congress (SoCo)", description: "Austin's most established wellness corridor. The concentration of high-quality independent studios along South Lamar and South Congress makes this the best single area to explore the city's Pilates scene. Walkable, well-serviced, and home to a genuinely health-focused residential community." },
  { name: "East Austin", description: "The fastest-growing area for independent studios in the city. East Austin's Pilates offerings tend to be community-oriented, more accessibly priced, and often more adventurous in programming than their westside counterparts. Worth exploring if you value neighbourhood feel over premium presentation." },
  { name: "West Lake Hills & Westlake", description: "Austin's western suburbs house several exceptional private and semi-private practices serving a discerning, wellness-invested clientele. Studios here are typically appointment-based and operate at the higher end of the price range, but the quality of individual attention is correspondingly elevated." },
  { name: "Domain / North Austin", description: "The Domain area and surrounding North Austin tech corridor are well-served by franchise and boutique studios with schedules designed around professional working hours. Reliable, convenient, and increasingly well-staffed as Austin's fitness market matures." },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in Austin. Full-toe grip socks are the standard.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "A quality 6mm mat is worth having for mat classes and home practice between studio sessions.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Many Austin studios incorporate the magic circle — worth owning for home reinforcement work.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands",
    note: "Fabric resistance loops extend your home Pilates practice and support reformer spring work.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "Foam Roller",
    note: "Essential for fascial release and spinal mobility work before and after class.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  { city: "Houston", country: "United States", href: "/cities/houston", studioCount: 5 },
  { city: "Dallas", country: "United States", href: "/cities/dallas", studioCount: 5 },
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 6 },
  { city: "Miami", country: "United States", href: "/cities/miami", studioCount: 6 },
];

const FURTHER_READING = [
  { title: "The Beginner's Guide to Reformer Pilates", excerpt: "What to expect in your first reformer class and how to choose a studio that fits your goals.", href: "/blog/beginners-guide-to-reformer-pilates", category: "Beginner Guide", readTime: "8 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1616439069669-66dbe74bcdad?w=800&q=80" },
  { title: "How to Build a Consistent Pilates Practice", excerpt: "The habits, scheduling strategies, and mindset shifts that separate occasional students from committed practitioners.", href: "/blog/how-to-build-a-consistent-pilates-practice", category: "Guide", readTime: "7 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Austin", "item": "https://pilatescollectiveclub.com/cities/austin" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Austin, TX",
      "description": "Curated guide to the top Pilates studios in Austin, Texas, verified June 2026.",
      "url": "https://pilatescollectiveclub.com/cities/austin",
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
            "addressLocality": "Austin",
            "addressRegion": "TX",
            "addressCountry": "US",
          },
        },
      })),
    },
    {
      "@type": "Article",
      "headline": "The Best Pilates Studios in Austin, TX (2026)",
      "description": "A curated guide to the six best Pilates studios in Austin, Texas — verified June 2026.",
      "url": "https://pilatescollectiveclub.com/cities/austin",
      "dateModified": "2026-06-01",
      "author": { "@type": "Organization", "name": "Pilates Collective Club" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function AustinPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>City Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>United States</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Austin, Texas</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Austin has evolved into one of the most interesting Pilates cities in the American South. Fuelled by an influx of wellness-conscious professionals and a long-established arts and movement culture, the city now supports a genuinely diverse studio landscape — from rigorous classical practices in Rosedale to community-oriented reformer rooms in East Austin. The range in price, format, and philosophy is wider than you might expect. This guide covers the six studios worth your time, verified for June 2026.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1400&q=80" alt="Austin Texas skyline" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Austin, Texas</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>A rapidly maturing Pilates scene with genuine depth</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Studios */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Studios · Curated & Verified</p>
            <div className="space-y-8">{STUDIOS.map((s) => <StudioListing key={s.number} {...s} />)}</div>
          </div>
        </section>

        {/* Booking Tips */}
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Austin</h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((t) => (
                <div key={t.heading} className="pcc-booking-tip flex gap-5 rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                  <div className="w-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: "#8b4a31", minHeight: "20px" }} />
                  <div>
                    <h3 className="text-base font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{t.heading}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{t.body}</p>
                  </div>
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
              Austin studios require grip socks and appreciate a mat for mat classes. These are our recommended picks — all available on Amazon with the affiliate tag <span style={{ color: "#8b4a31" }}>pilatescollective-20</span>.{" "}
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

        {/* Neighbourhoods */}
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Austin</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Austin's studio landscape is shaped by the city's distinct neighbourhoods. Here's where to look.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {NEIGHBORHOODS.map((n) => (
                <div key={n.name} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)" }}>
                  <h3 className="text-base font-semibold mb-2" style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif" }}>{n.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{n.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Cities */}
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Related city guides</h2>
            <p className="text-sm mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Explore our guides to other cities with thriving Pilates scenes.</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">{RELATED_CITIES.map((c) => <CityCard key={c.city} {...c} />)}</div>
          </div>
        </section>

        {/* Further Reading */}
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">{FURTHER_READING.map((a) => <ArticleCard key={a.href} {...a} />)}</div>
          </div>
        </section>

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best classical Pilates in Austin…" />
      </main>
      <Footer />
    </>
  );
}
