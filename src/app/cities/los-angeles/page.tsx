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
  title: "Best Pilates Studios in Los Angeles (2026) — Curated Guide",
  description: "The best Pilates studios in Los Angeles — from West Hollywood reformer boutiques to classical practices in Brentwood and Santa Monica. Five verified picks, 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates los angeles", "reformer pilates los angeles", "best pilates studios la", "pilates studio los angeles", "pilates classes la", "west hollywood pilates", "santa monica pilates", "pilates brentwood la", "best reformer pilates los angeles", "pilates california"],
  openGraph: {
    title: "Best Pilates Studios in Los Angeles (2026)",
    description: "Five curated Pilates studios in LA — West Hollywood, Santa Monica, and Brentwood reformer picks. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/los-angeles",
    images: [{ url: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=1200&q=80", width: 1200, height: 630, alt: "Los Angeles city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Los Angeles (2026)",
    description: "Our curated guide to LA's finest Pilates studios — five verified picks.",
    images: ["https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/los-angeles",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Speir Pilates",
    neighborhood: "West Hollywood",
    priceLevel: "$$$",
    review: "Founded by Andrea Speir — trainer to Hailey Bieber, Chrissy Teigen, Olivia Rodrigo, and many others — Speir Pilates at 8356 Santa Monica Blvd is a sun-soaked, nine-reformer studio that blends exercise science, functional movement, and a high-energy soundtrack. The studio is open Mon–Fri 6:15am–8:30pm, Sat 7–1pm, Sun 8am–1pm. Additional locations in Venice and Culver City extend the brand across the city.",
    caveat: "with only nine reformers and genuine celebrity clientele, class availability is the real bottleneck here, not quality — expect to compete for slots the moment booking opens.",
    address: "8356 Santa Monica Blvd, West Hollywood, CA 90069",
    bestFor: "Music-driven athletic reformer classes",
    signatureClass: "Power Reformer",
    bookingTip: "Classes sell out the moment the 24-hour window opens; use the app's notification feature and book the instant it goes live.",
    websiteUrl: "https://speirpilates.com/",
  },
  {
    number: "02",
    name: "Movement Pilates",
    neighborhood: "Koreatown",
    priceLevel: "$$",
    review: "Movement Pilates at 400 South Western Avenue is a small studio in Koreatown built around individualized instruction — instructors Gayoung and Yuna walk clients through each movement and correct form in real time rather than running a standard group script. The building offers on-site parking at roughly $2 with validation, which is cheap by LA standards even if it isn't free.",
    caveat: "the studio is genuinely small — this is a private-and-small-group format, not a place to expect a full group-class schedule to choose from.",
    address: "400 S Western Ave, Suite 205, Los Angeles, CA 90020",
    bestFor: "Affordable one-on-one and small group instruction",
    signatureClass: "Private Reformer Session",
    bookingTip: "On-site parking runs about $2 with validation — cheap for LA, not free. Call ahead to book private sessions, which are the studio's core offering.",
  },
  {
    number: "03",
    name: "Flow Pilates",
    neighborhood: "Koreatown / Arts District",
    priceLevel: "$$$",
    review: "Flow Pilates operates on the philosophy of 'Pilates that builds on itself' — classes are sequenced progressively so technique advances systematically rather than starting from scratch each session. The Koreatown location caps group classes at 6 clients for closer attention; the second location runs a larger 12-reformer room. Hours run Mon–Thu 7am–8pm, Fri 7am–7pm, weekends 8am–4pm.",
    caveat: "the progressive-sequence format works against you if you're a drop-in visitor rather than a regular — showing up occasionally means repeatedly missing steps in a sequence built to be taken in order.",
    address: "2873 W 7th St, Los Angeles, CA 90005",
    bestFor: "Structured progressive reformer programming",
    signatureClass: "Progressive Reformer",
    bookingTip: "Sign up for their intro series to get the correct class-level placement before joining open group sessions.",
    websiteUrl: "https://flow-la.com/",
  },
  {
    number: "04",
    name: "Carrie's Pilates Plus",
    neighborhood: "West Hollywood",
    priceLevel: "$$$$",
    review: "Carrie's Pilates Plus is one of Los Angeles's longer-running studios — founded by Carrie Macy Samper, it has trained a number of instructors now working elsewhere in the city's studio scene. It carries over 350 Yelp reviews at its La Cienega address, an unusually large volume for an independent studio rather than a chain, which is itself a signal of how long it's been operating in the same spot.",
    caveat: "longevity cuts both ways — the space has an established, no-frills feel rather than the polished newness of West Hollywood's newer boutique openings. Go for the instruction, not the interior design.",
    address: "613 N La Cienega Blvd, West Hollywood, CA 90069",
    bestFor: "Classical method, advanced practitioners",
    signatureClass: "Reformer & Tower",
    bookingTip: "Privates book weeks out; group classes open 5 days ahead and fill within a day.",
  },
  {
    number: "05",
    name: "The Studio MDR",
    neighborhood: "Marina del Rey",
    priceLevel: "$$$",
    review: "The Studio MDR sits close to the water on Washington Boulevard, and its 400+ Yelp reviews make it one of the most-reviewed studios on this list. Its equipment is the Megaformer, running the Lagree method — a higher-intensity, slow-controlled-tempo format built on a machine descended from the reformer rather than a classical reformer itself. Classes are physically demanding by design, and the westside clientele treats it as cross-training alongside surfing, running, and other sports.",
    caveat: "if you came here for classical Pilates technique, this isn't the studio — the Lagree/Megaformer format is a distinct discipline with its own machine, more akin to Solidcore than to classical apparatus work.",
    address: "330 W Washington Blvd, Marina del Rey, CA 90292",
    bestFor: "Athletic conditioning & cross-training",
    signatureClass: "Lagree Megaformer",
    bookingTip: "Early morning slots are most popular with the active clientele; book Sunday for the following week.",
  },
  {
    number: "06",
    name: "Natural Pilates Beverly Hills",
    neighborhood: "Beverly Hills",
    priceLevel: "$$$$",
    review: "Natural Pilates Beverly Hills carries a 4.9-star rating across 262 Yelp reviews — one of the highest review volumes of any studio on this list — built on classical apparatus training (Reformer, Cadillac, Chair, Barrel) rather than reformer-only programming. It's particularly well-regarded for post-surgical and chronic-pain clients, an area where the full-apparatus range genuinely matters for progression. Validated parking is available at the Hodes lot next door for about $1.50.",
    caveat: "\"Beverly Hills\" pricing here is more moderate than the neighbourhood's reputation suggests — it's priced closer to a well-regarded independent studio than to the ultra-premium end of the market, which is good news for your wallet but worth knowing if you were expecting the most expensive option in the city.",
    address: "9869 S Santa Monica Blvd, Suite 207, Beverly Hills, CA 90212",
    bestFor: "Private & semi-private, rehabilitation",
    signatureClass: "Full Apparatus Private",
    bookingTip: "New clients require an introductory private; waitlist for preferred instructors is long — join early.",
    rating: "4.9★ (262 Yelp reviews)",
  },
];

const BOOKING_TIPS = [
  { heading: "Traffic matters more than you think", body: "LA's Pilates scene spans a vast geography. Factor in commute time realistically — a studio 8 miles away might be 40 minutes during rush hour. Choose one close to home or your workplace for long-term consistency." },
  { heading: "Expect to pay $38–65 per class", body: "LA's premium reformer studios run from around $38 at accessible boutiques to $65+ at semi-private and clinical studios. Monthly memberships bring the per-class cost down meaningfully for regular practitioners." },
  { heading: "Intro packages are widely offered", body: "Almost every quality LA studio offers a new-client intro package. The first two weeks are your most important research window — use classes across different times of day to assess both the instruction and the commute." },
  { heading: "ClassPass works well on the westside", body: "ClassPass participation is strong among LA's reformer studios. Use it to sample before committing. Note that peak-time slots are often restricted to direct members." },
  { heading: "The semi-private format is LA's sweet spot", body: "Many of LA's best studios offer semi-private sessions (2–4 clients) as their signature format. These offer substantially more individual attention than group classes at a price point meaningfully below private sessions." },
];

const NEIGHBORHOODS = [
  { name: "Santa Monica & Brentwood", description: "LA's most established Pilates neighbourhood. The concentration of classical studios, experienced instructors, and wellness-conscious clientele here is unmatched in the city. Worth the traffic." },
  { name: "West Hollywood & Beverly Hills", description: "Premium boutique territory. Studios here tend toward the contemporary, design-forward, and celebrity-adjacent. Expect excellent instruction alongside elevated price points." },
  { name: "Los Feliz, Silver Lake & Echo Park", description: "The eastside has developed a genuinely excellent independent studio scene in recent years — community-focused, intelligently taught, and substantially more accessible in pricing than the westside." },
  { name: "Manhattan Beach & the South Bay", description: "LA's beach communities have a distinct wellness culture — active, outdoors-oriented, and increasingly well-served by reformer studios that appeal to surfers, triathletes, and fitness-focused professionals." },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at most reformer studios. Full-toe grip socks are the standard.",
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
    note: "Many studios incorporate the magic circle — worth owning for home reinforcement work.",
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
  {
    name: "Home Pilates Reformer",
    note: "A home reformer extends your studio practice — AeroPilates and Align entry models deliver a genuine full-body session.",
    price: "From $450",
    url: "https://www.amazon.com/s?k=home+pilates+reformer+aeropilates+align&tag=pilatescollective-20",
  },
];

const HOME_REFORMERS = [
  { tag: "Budget Pick", name: "Stamina AeroPilates 287", note: "The most accessible full-function reformer — four cords, a rebounder, and a frame that folds flat for storage.", price: "From $299", url: "https://www.amazon.com/s?k=stamina+aeropilates+287&tag=pilatescollective-20" },
  { tag: "Mid-Range Pick", name: "AeroPilates Pro XP 557", note: "A smoother carriage, standing platform, and adjustable footbar for practitioners training several times a week.", price: "From $1,329", url: "https://www.amazon.com/s?k=aeropilates+pro+557&tag=pilatescollective-20" },
  { tag: "Buy Once", name: "Balanced Body Allegro 2", note: "The studio-grade machine serious home practitioners never need to replace — full spring system and fold-flat storage.", price: "From $3,995", url: "https://www.amazon.com/s?k=balanced+body+allegro+2+reformer&tag=pilatescollective-20" },
];

const RELATED_CITIES = [
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "Barcelona", country: "Spain", href: "/cities/barcelona", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
];

const FURTHER_READING = [
  { title: "Pilates vs Yoga: Key Differences and How to Choose", excerpt: "A clear comparison of two of the world's most popular movement practices.", href: "/blog/pilates-vs-yoga", category: "Method", readTime: "7 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80" },
  { title: "How to Choose the Right Pilates Instructor", excerpt: "What credentials, experience, and red flags to look for when selecting a teacher.", href: "/blog/how-to-choose-a-pilates-instructor", category: "Guide", readTime: "6 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Los Angeles", "item": "https://pilatescollectiveclub.com/cities/los-angeles" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Los Angeles",
      "description": "Curated guide to the top 5 Pilates studios in Los Angeles.",
      "url": "https://pilatescollectiveclub.com/cities/los-angeles",
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
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "addressCountry": "US",
          },
        },
      })),
    },
  ],
};

export default function LosAngelesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>City Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>United States</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Los Angeles</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 8 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Los Angeles has one of the world's most sophisticated wellness cultures, and its Pilates scene reflects that. The city spans a vast geography — from classical powerhouses in Santa Monica to community studios in Los Feliz — and the range in quality, price, and approach is correspondingly wide. This guide navigates the best of it: five studios across different parts of the city that consistently deliver excellent work.
            </p>
          </div>
        </section>
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=1400&q=80" alt="Los Angeles" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Los Angeles, California</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>A world-class wellness city with a diverse Pilates landscape</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 px-6" style={{ backgroundColor: "#fdf5f3", borderTop: "1px solid rgba(139,74,49,0.2)", borderBottom: "1px solid rgba(139,74,49,0.2)" }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Before You Go</p>
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to bring to your first class</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Grip socks are required at most reformer studios in Los Angeles. These are our recommended picks — all available on Amazon.{" "}
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

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Studios · Curated & Verified</p>
            <p className="text-sm mb-10" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Addresses, pricing, and ratings independently checked against each studio's own site and public review platforms in September 2026. We call out at least one real trade-off per studio — no pick here is presented as flawless.
            </p>
            <div className="space-y-8">{STUDIOS.map((s) => <StudioListing key={s.number} {...s} />)}</div>
          </div>
        </section>
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Los Angeles</h2>
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
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Los Angeles</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>LA's sheer size means neighbourhood choice significantly affects your experience. Here's a guide.</p>
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

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Related city guides</h2>
            <p className="text-sm mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Explore our guides to other cities with thriving Pilates scenes.</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">{RELATED_CITIES.map((c) => <CityCard key={c.city} {...c} />)}</div>
          </div>
        </section>
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">{FURTHER_READING.map((a) => <ArticleCard key={a.href} {...a} />)}</div>
          </div>
        </section>
        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best reformer Pilates in Los Angeles…" />
      </main>
      <Footer />
    </>
  );
}
