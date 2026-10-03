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
    description: "Six curated Pilates studios in Austin — South Lamar boutiques to East Austin Lagree rooms. Verified October 2026.",
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
    review: "Despite the name, Pure Pilates Austin is a Lagree Method studio: classes run on Megaformer machines for a low-impact but very high-intensity full-body workout. The South Lamar studio opened in late 2017 with 10 Megaformers and free parking, and the brand also has a studio at the Domain in North Austin, so it is one of the easiest places in town to try Lagree.",
    caveat: "this is Lagree, not Pilates in the classical sense — expect slow, burning Megaformer work rather than traditional Pilates repertoire.",
    address: "1414 S Lamar Blvd, Ste 101, Austin, TX 78704",
    bestFor: "Lagree on the Megaformer, high-intensity low-impact strength",
    signatureClass: "Megaformer (Lagree Method) class",
    bookingTip: "Classes have only 10 machines at South Lamar, so book ahead; if it is full, check the Domain studio's schedule.",
  },
  {
    number: "02",
    name: "ALIGN Pilates Studios",
    neighborhood: "Clarksville / West Downtown",
    priceLevel: "$$$",
    review: "ALIGN is an education-driven studio founded by Brooke Bowersock. The original studio, ALIGN West on West 6th Street, offers reformer, mat and fully equipped Pilates classes in small groups, with an emphasis on expert, thoughtful instruction for both beginners and experienced movers. ALIGN also runs a teacher-training studio on Springdale Road in East Austin and a studio in Houston.",
    caveat: "the focus on precise, education-led teaching means classes favour technique over a fast, high-energy workout — if you want a sweaty sculpt class, look at the Lagree options on this list.",
    address: "1204 W 6th St, Austin, TX 78703",
    bestFor: "Technique-focused small-group reformer and equipment classes",
    signatureClass: "Reformer Group Class",
    bookingTip: "Parking around West 6th can be tight at peak times — allow a few extra minutes or come by rideshare.",
  },
  {
    number: "03",
    name: "ATX Pilates",
    neighborhood: "South Austin / South Lamar",
    priceLevel: "$$",
    review: "ATX Pilates is an independent studio on the South Lamar corridor offering small-group reformer and Pilates classes for all levels. It is a convenient option for South Austin residents who want a neighbourhood studio rather than a chain, and it is bookable through ClassPass as well as directly.",
    caveat: "there is less published information about this studio's instructors and programming than about the larger names here — take an intro class to judge the teaching for yourself.",
    address: "2300 S Lamar Blvd, #105, Austin, TX 78704",
    bestFor: "South Austin residents wanting an independent reformer studio",
    signatureClass: "Reformer Class",
    bookingTip: "Try a class through ClassPass first if you use it, then compare with the studio's own intro offer.",
  },
  {
    number: "04",
    name: "Pilates West",
    neighborhood: "Oak Hill (Southwest Austin)",
    priceLevel: "$$",
    review: "Pilates West opened on Highway 290 West in Oak Hill in July 2018, built on more than 25 years of fitness and Pilates experience. It offers small-group sessions and private lessons for all levels and ages on new equipment, and reviewers on ClassPass rate it highly (4.9). A good choice for Oak Hill and southwest Austin residents who would rather not drive into central Austin.",
    caveat: "its online review count on Yelp is small, so ratings are a promising signal rather than robust proof.",
    address: "6340 Hwy 290 W, Ste 105, Austin, TX 78735",
    bestFor: "Small-group and private Pilates in southwest Austin",
    signatureClass: "Small Group Reformer",
    bookingTip: "Small groups mean limited spots — book a few days ahead for evening classes.",
  },
  {
    number: "05",
    name: "Urban Lagree — Chicon",
    neighborhood: "East Austin",
    priceLevel: "$$$",
    review: "Urban Lagree opened on Chicon Street in East Austin in 2019, bringing Lagree Megaformer classes to the east side. The brand has since grown with further studios, including Rosedale and a South Austin location that opened in 2024, so members have several Lagree options across the city.",
    caveat: "Lagree is a different workout from Pilates — slower, longer holds and heavier sweat — so treat your first class as a learning session.",
    address: "1212 Chicon St, Ste 104, Austin, TX 78702",
    bestFor: "Lagree on the Megaformer in East Austin",
    signatureClass: "Lagree Megaformer class",
    bookingTip: "New clients should take an introductory class first — the Megaformer has a learning curve.",
  },
  {
    number: "06",
    name: "Sharp Pilates",
    neighborhood: "Rosedale (Central Austin)",
    priceLevel: "$$$",
    review: "Sharp Pilates is a classical Pilates studio whose instructors are trained in Romana's Pilates, the lineage that traces back to Joseph Pilates' own teaching. It offers private sessions, semi-private sessions for two to four people and small group classes, which makes it one of the best options in Austin for people who want traditional method instruction with close attention.",
    caveat: "classical instruction is precise and methodical — if you want an athletic, music-driven reformer class, a contemporary studio will suit you better.",
    address: "4111 Marathon Blvd, Suite 150, Austin, TX 78756",
    bestFor: "Classical Pilates in private and semi-private formats",
    signatureClass: "Classical Private Session",
    bookingTip: "Start with a private session — classical studios usually want to learn your body before placing you in group work.",
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

const HOME_REFORMERS = [
  { tag: "Budget Pick", name: "Stamina AeroPilates 287", note: "The most accessible full-function reformer — four cords, a rebounder, and a frame that folds flat for storage.", price: "From $299", url: "https://www.amazon.com/s?k=stamina+aeropilates+287&tag=pilatescollective-20" },
  { tag: "Mid-Range Pick", name: "AeroPilates Pro XP 557", note: "A smoother carriage, standing platform, and adjustable footbar for practitioners training several times a week.", price: "From $1,329", url: "https://www.amazon.com/s?k=aeropilates+pro+557&tag=pilatescollective-20" },
  { tag: "Buy Once", name: "Balanced Body Allegro 2", note: "The studio-grade machine serious home practitioners never need to replace — full spring system and fold-flat storage.", price: "From $3,995", url: "https://www.amazon.com/s?k=balanced+body+allegro+2+reformer&tag=pilatescollective-20" },
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
      "description": "Curated guide to the top Pilates studios in Austin, Texas, verified October 2026.",
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
      "description": "A curated guide to the six best Pilates studios in Austin, Texas — verified October 2026.",
      "url": "https://pilatescollectiveclub.com/cities/austin",
      "dateModified": "2026-10-03",
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
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 9 min read</p>
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
        <section className="py-20 px-6" style={{ backgroundColor: "#fdf5f3", borderTop: "1px solid rgba(139,74,49,0.2)", borderBottom: "1px solid rgba(139,74,49,0.2)" }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Before You Go</p>
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

        <section className="px-6 py-20">
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
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Prefer To Train At Home?</p>
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Not convinced? How about Pilates at home?</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Studio pricing or scheduling not for you right now? A home reformer gets you a genuine Pilates session on your own time. Here's where to start — from a $299 entry point to the machine serious practitioners buy once.{" "}
              <Link href="/blog/best-home-pilates-reformer" style={{ color: "#8b4a31", textDecoration: "underline", fontFamily: "'Montserrat', sans-serif", fontSize: "inherit" }}>See the full reformer guide.</Link>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {HOME_REFORMERS.map((g) => (
                <a key={g.name} href={g.url} target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: "none" }}>
                  <div className="rounded-xl p-5 h-full flex flex-col justify-between" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)" }}>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{g.tag}</p>
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
