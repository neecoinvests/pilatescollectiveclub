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
  description: "The best Pilates studios in Austin — from classical reformer boutiques on South Lamar to athletic Lagree studios near the Domain. Six verified picks, 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates austin", "reformer pilates austin", "best pilates studios austin tx", "pilates studio austin", "pilates classes austin", "south lamar pilates", "lagree austin", "pilates texas", "best reformer pilates austin", "pilates east austin"],
  openGraph: {
    title: "Best Pilates Studios in Austin, TX (2026)",
    description: "Six curated Pilates studios in Austin — South Lamar boutiques to East Austin Lagree rooms. Verified June 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/austin",
    images: [{ url: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1200&q=80", width: 1200, height: 630, alt: "Austin Texas city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Austin (2026)",
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
    name: "Pure Pilates Austin",
    neighborhood: "South Lamar / SoCo",
    priceLevel: "$$$",
    review: "Pure Pilates Austin at 1414 South Lamar is a Lagree Method studio using Megaformer machines, delivering a low-impact but exceptionally high-intensity full-body workout in 45 minutes. The South Lamar flagship is sleek, light-filled, and highly reviewed on both Yelp and Google for its knowledgeable trainers and the tangible physical results clients see. With three Austin locations — South Lamar, Rio Grande, and the Domain — it is one of the most established Lagree studios in Texas.",
    address: "1414 S Lamar Blvd, Ste 101, Austin, TX 78704",
    bestFor: "High-intensity Lagree Megaformer workouts; results-driven training",
    signatureClass: "45-Minute Mega Sculpt",
    bookingTip: "Classes fill within hours of the schedule opening; download the app and turn on notifications to grab spots early.",
  },
  {
    number: "02",
    name: "ALIGN Pilates Studios",
    neighborhood: "Clarksville / West Downtown",
    priceLevel: "$$$",
    review: "ALIGN is consistently voted one of Austin's best Pilates studios year after year, with two locations — Clarksville West and Springdale East. The West Austin studio at 1204 West 6th Street is a bright, beautiful space with wood floors, natural light, and experienced instructors known for precise cueing and individual attention. Reviews highlight the welcoming and homey environment that still delivers a legitimately demanding workout — a balance Austin's fitness-conscious community has responded to with lasting loyalty.",
    address: "1204 W 6th St, Austin, TX 78703",
    bestFor: "Boutique reformer Pilates; downtown convenience; warm community feel",
    signatureClass: "Reformer Group Class",
    bookingTip: "Street parking on W 6th is limited; the studio recommends parking in a nearby garage or arriving by rideshare for morning rush classes.",
  },
  {
    number: "03",
    name: "ATX Pilates",
    neighborhood: "South Austin / South Lamar",
    priceLevel: "$$",
    review: "ATX Pilates at 2300 South Lamar is one of the highest-rated contemporary reformer studios on the South Lamar corridor, offering small-group classes that blend classical Pilates principles with modern fitness programming. Instructors are noted for clear instruction, good energy, and making clients of all experience levels feel comfortable. The studio sits in one of Austin's most fitness-oriented neighborhoods, with a clientele that takes movement seriously without taking itself too seriously.",
    address: "2300 S Lamar Blvd, Austin, TX 78704",
    bestFor: "Contemporary reformer Pilates; South Austin locals; flexible class formats",
    signatureClass: "Reformer Sculpt",
    bookingTip: "Intro packages are among the best deals in the city — lock one in for your first month before committing to a full membership.",
  },
  {
    number: "04",
    name: "Pilates West",
    neighborhood: "Oak Hill (West Austin)",
    priceLevel: "$$",
    review: "Pilates West at 6340 Highway 290 West is a small, appointment-based classical Pilates studio on Austin's far west side that prioritizes form, tradition, and individual attention above all else. With a maximum of six to seven clients per class, every student receives careful observation and correction. A trusted neighborhood studio for Oak Hill and Westlake-area residents seeking authentic classical method instruction without the boutique gym pricing of central Austin.",
    address: "6340 Hwy 290 W, Ste 105, Austin, TX 78735",
    bestFor: "Classical Pilates method; small intimate classes; west-side residents",
    signatureClass: "Reformer + Tower Group",
    bookingTip: "The studio is by appointment only and fills up fast — call or book online several days ahead, especially for Tuesday/Thursday evening slots.",
  },
  {
    number: "05",
    name: "Urban Lagree Austin",
    neighborhood: "East Austin",
    priceLevel: "$$$",
    review: "Urban Lagree at 1212 Chicon Street brought the Lagree Megaformer method to East Austin, offering 50-minute high-intensity, low-impact classes in a modern studio on the Chicon corridor. With strong Yelp ratings and consistent praise from reviewers, the studio appeals to East Austin's younger, active crowd looking for a serious strength-building workout. Instructors keep classes moving at a challenging pace with strong emphasis on the slow, controlled muscle burn that defines the Lagree method.",
    address: "1212 Chicon St, Unit 104, Austin, TX 78702",
    bestFor: "Lagree method on the east side; energetic classes",
    signatureClass: "Lagree 50",
    bookingTip: "New clients should take the introductory class first — the Megaformer has a learning curve that makes the first session more manageable with guidance.",
  },
  {
    number: "06",
    name: "Sharp Pilates Austin",
    neighborhood: "South Lamar / Manchaca Village",
    priceLevel: "$$$",
    review: "Sharp Pilates at 3801 South Lamar has accumulated an impressive run of five-star reviews from clients praising the exceptional individual attention provided in both private and small-group formats. The instructors are known for comprehensive knowledge of classical and contemporary Pilates equipment, and for adapting sessions to clients with past injuries or specific athletic demands. An excellent choice for those who want a serious, personalized experience rather than a standard drop-in group class.",
    address: "3801 S Lamar Blvd, Ste 220, Austin, TX 78704",
    bestFor: "Personalized private training; five-star instructor quality; post-injury rehab",
    signatureClass: "Private Reformer + Apparatus",
    bookingTip: "Private sessions require advance scheduling — the studio has limited slots and a waitlist during peak morning hours.",
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
