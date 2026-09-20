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
  title: "Best Pilates Studios in Chicago, IL (2026) — Curated Guide",
  description: "The best Pilates studios in Chicago — from Lincoln Park reformer boutiques to River North classical practices. Six curated picks, verified June 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates chicago", "reformer pilates chicago", "best pilates studios chicago", "pilates studio chicago il", "pilates classes chicago", "lincoln park pilates", "river north pilates chicago", "pilates illinois", "best reformer pilates chicago", "pilates wicker park"],
  openGraph: {
    title: "Best Pilates Studios in Chicago, IL (2026)",
    description: "Six curated Pilates studios in Chicago — Lincoln Park reformer boutiques to River North classical practices. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/chicago",
    images: [{ url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80", width: 1200, height: 630, alt: "Chicago city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Chicago (2026)",
    description: "Our curated guide to Chicago's finest Pilates studios — five verified picks with booking tips.",
    images: ["https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/chicago" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Amplified Pilates Center",
    neighborhood: "River North",
    priceLevel: "$$$",
    review: "Amplified Pilates Center at 314 West Institute Place has been operating in River North since 2011 and was named Best Pilates Studio by CS Modern Luxury Magazine in both 2024 and 2025. Group classes cap at six students, and the 80-plus Yelp reviews consistently single out instructors for making technical corrections without breaking the flow of class.",
    caveat: "the small six-person cap that makes coaching so personal also means fewer time slots overall — popular classes book out fast, so this isn't the studio for same-day spontaneity.",
    address: "314 W Institute Place, 3W, Chicago, IL 60610",
    bestFor: "Small group instruction with individualized coaching",
    signatureClass: "Amplified Reformer",
    bookingTip: "Centrally located one block north of the Chicago Ave Brown Line. Book at least 48 hours ahead; small classes fill fast.",
    websiteUrl: "https://www.amplifiedpilates.com/",
  },
  {
    number: "02",
    name: "Page One Pilates",
    neighborhood: "West Loop / Fulton Market",
    priceLevel: "$$$",
    review: "Page One Pilates sits in Fulton Market at 213 N Morgan St, carrying a 4.8-star rating across its (still small, 14-review) Yelp presence. It's a genuinely intimate setup — just a handful of reformers — which reviewers credit for consistent, close instructor attention rather than a crowded studio-chain feel.",
    caveat: "the review count here is thin (14 on Yelp) compared to the bigger downtown names — the rating looks excellent, but you're trusting a smaller sample size than at, say, Amplified.",
    address: "213 N Morgan St, Unit 1C, Chicago, IL 60607",
    bestFor: "Athletic reformer classes in a boutique setting",
    signatureClass: "Full Body Reformer Flow",
    bookingTip: "Classes are especially popular with the Fulton Market work crowd — book the early morning and lunchtime slots well in advance.",
    rating: "4.8★ (14 Yelp reviews)",
  },
  {
    number: "03",
    name: "Heat 3.0",
    neighborhood: "Lincoln Park",
    priceLevel: "$$$",
    review: "Heat 3.0 on North Southport Avenue (the rebrand of the long-running Lincoln Park Pilates) combines reformer classes in infrared-heated rooms with spa-like amenities — showers, lockers, towels, a proper lobby for recovery. Beyond reformer, it runs barre, mat, yoga, and stretch sessions, positioning itself as a one-stop wellness stop rather than a Pilates-only studio. Open Mon–Fri 6am–8pm, Sat 8am–5pm, Sun 7:30am–1pm.",
    caveat: "this is a multi-modality wellness studio, not a Pilates specialist — if you want a room that only does classical Pilates, the barre/yoga/sauna crowd mixed in might not be what you're after.",
    address: "2105 N Southport Ave, Suite 200, Chicago, IL 60614",
    bestFor: "Infrared-heated reformer Pilates with premium spa amenities",
    signatureClass: "Heated Reformer Sculpt",
    bookingTip: "The infrared sauna add-on is a fan favorite — book a class + sauna session combo in advance as sauna slots are limited.",
  },
  {
    number: "04",
    name: "Studio 8 Pilates",
    neighborhood: "North Center",
    priceLevel: "$$$",
    review: "Studio 8 Pilates opened in North Center on July 1, 2015, founded by Christine Hall, a PMA-certified instructor, and remains 100% woman-owned. All instructors carry Pilates Method Alliance certification — a genuine credentialing standard, not just marketing language — and the studio specializes in private, duet, and small-group programming for athletes, prenatal/postpartum clients, and post-injury rehab. Free street parking, confirmed by reviewers, is a real practical perk in a city where that's rare.",
    caveat: "the specialization in customized/rehab-oriented programming means fewer large drop-in group classes than a typical boutique studio — if you want a big-energy group scene, this isn't primarily built for that.",
    address: "3656 N Lincoln Ave, Suite F, Chicago, IL 60613",
    bestFor: "Private and small group sessions; prenatal/postpartum and rehab clients",
    signatureClass: "Personalized Reformer Session",
    bookingTip: "Free street parking is readily available — rare for a Chicago fitness studio. First-time clients should book a private intake session before joining group classes.",
    websiteUrl: "http://www.studio8chicago.com/",
  },
  {
    number: "05",
    name: "btone FITNESS",
    neighborhood: "Lakeview East",
    priceLevel: "$$",
    review: "btone FITNESS Lakeview, which opened in September 2024, is the brand's first location outside its home base of Massachusetts. The format is a hybrid of Pilates-inspired movement and strength training on custom resistance equipment in a 45-minute class — deliberately high-intensity, low-impact. Reviewers consistently name specific instructors and cite the modifications offered as genuinely inclusive of different fitness levels, not just a talking point.",
    caveat: "as a brand-new-to-Chicago outpost of an out-of-state chain, it doesn't have the years-deep local reputation of Studio 8 or Amplified — you're betting on a proven national format rather than an established local name.",
    address: "556 W Diversey Pkwy, Chicago, IL 60614",
    bestFor: "High-intensity, low-impact Pilates-strength hybrid",
    signatureClass: "btone 45",
    bookingTip: "The 14-day unlimited intro offer for $49 is exceptional value — use it to find your favorite instructor and class time before committing to a package.",
  },
  {
    number: "06",
    name: "The Pilates Advantage",
    neighborhood: "Lakeview / Uptown",
    priceLevel: "$$$",
    rating: "5.0★ (Yelp, small sample)",
    review: "The Pilates Advantage, on North Broadway near the Lakeview/Uptown border, is one of the few Chicago studios built entirely around Romana's Pilates certification and original Gratz equipment — the classical lineage and apparatus tradition that traces directly back to Joseph Pilates' own studio. It's a small, owner-led operation; one longtime client mentioned training with the owner for over a decade, which tells you more about retention than any marketing copy could.",
    caveat: "its online review count is genuinely small — a handful of reviews, not hundreds — so treat the perfect rating as a promising signal from real regulars, not statistically robust proof the way Amplified's 80-review track record is.",
    address: "4027 N Broadway, Chicago, IL 60613",
    bestFor: "Authentic classical method on Gratz equipment",
    signatureClass: "Classical Reformer (Romana's Pilates lineage)",
    bookingTip: "This is a small, owner-led studio — call ahead rather than relying on an online booking widget to find true availability.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Book 5–7 days in advance for sought-after slots",
    body: "Chicago's busiest Pilates studios release bookings 7 days ahead, and morning and evening slots at Lincoln Park, River North, and Gold Coast studios fill quickly. Monday morning is the most reliable time to book your week.",
  },
  {
    heading: "Introductory packages are the smartest way to start",
    body: "Most Chicago studios offer new-client intro packs — typically 3 classes for $45–75. Use these to trial instruction quality before committing to a monthly membership, which is how most Chicago regulars structure their practice.",
  },
  {
    heading: "ClassPass works well across Chicago",
    body: "ClassPass has strong coverage in Chicago and is useful for sampling studios across neighbourhoods — from Lincoln Park to the West Loop — before settling. It's also a practical solution for visitors staying in the city for a week or two.",
  },
  {
    heading: "Tipping is standard practice",
    body: "Tipping Pilates instructors is an established norm in Chicago. A $5–10 tip for group classes and $15–20 for private sessions is typical and genuinely valued, particularly at independently-run studios.",
  },
  {
    heading: "Expect to pay $25–50 per reformer class",
    body: "Drop-in reformer Pilates in Chicago ranges from around $25 at franchise studios to $50 at premium boutiques. Monthly unlimited memberships typically run $150–220 and offer strong value for practitioners attending 3 or more times per week.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Lincoln Park & Old Town",
    description:
      "Chicago's most established neighbourhood for serious Pilates. Lincoln Park has a high concentration of quality studios, from classical practices to modern reformer boutiques, serving a residential population that prioritises health and wellness. The area rewards those looking to build a long-term practice rather than sample what's new.",
  },
  {
    name: "River North & Gold Coast",
    description:
      "The premium heart of Chicago's downtown wellness scene. Studios in River North are typically design-forward, premium-priced, and well-suited to professionals working in the surrounding offices. Gold Coast offers a slightly calmer alternative with some of the city's most experienced independent instructors.",
  },
  {
    name: "West Loop & Fulton Market",
    description:
      "Chicago's fastest-growing neighbourhood has attracted a new generation of studios targeting the tech and creative professional community. Studios here are modern, schedule-dense, and increasingly sophisticated — and the neighbourhood's rapid growth means new openings are frequent.",
  },
  {
    name: "Wicker Park & Bucktown",
    description:
      "The north-west's creative heart has a growing Pilates scene that reflects its neighbourhood energy — younger, more eclectic, and less corporate than the Gold Coast or River North. Studios here tend to be more affordable and community-oriented, with a mix of beginners and intermediate practitioners.",
  },
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
];

const HOME_REFORMERS = [
  { tag: "Budget Pick", name: "Stamina AeroPilates 287", note: "The most accessible full-function reformer — four cords, a rebounder, and a frame that folds flat for storage.", price: "From $299", url: "https://www.amazon.com/s?k=stamina+aeropilates+287&tag=pilatescollective-20" },
  { tag: "Mid-Range Pick", name: "AeroPilates Pro XP 557", note: "A smoother carriage, standing platform, and adjustable footbar for practitioners training several times a week.", price: "From $1,329", url: "https://www.amazon.com/s?k=aeropilates+pro+557&tag=pilatescollective-20" },
  { tag: "Buy Once", name: "Balanced Body Allegro 2", note: "The studio-grade machine serious home practitioners never need to replace — full spring system and fold-flat storage.", price: "From $3,995", url: "https://www.amazon.com/s?k=balanced+body+allegro+2+reformer&tag=pilatescollective-20" },
];

const RELATED_CITIES = [
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 5 },
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 5 },
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
        { "@type": "ListItem", "position": 2, "name": "Chicago", "item": "https://pilatescollectiveclub.com/cities/chicago" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Chicago",
      "description": "Curated guide to the top 5 Pilates studios in Chicago.",
      "url": "https://pilatescollectiveclub.com/cities/chicago",
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
            "addressLocality": "Chicago",
            "addressCountry": "US",
          },
        },
      })),
    },
  ],
};

export default function ChicagoPage() {
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
              <span style={{ color: "#8b4a31" }}>in Chicago</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Updated September 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Chicago is a city that takes movement seriously — and its Pilates scene reflects that practicality and depth. Less trend-driven than Los Angeles, less saturated than New York, Chicago has cultivated a reformer and mat Pilates market built around genuine instruction quality and community loyalty. From the classical studios of Lincoln Park to the design-forward boutiques of River North, the city offers every type of Pilates practitioner something to invest in. This guide covers the five studios we rate most highly in Chicago, from the Gold Coast to Wicker Park, with everything you need before booking.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1400&q=80"
                alt="Chicago skyline"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Chicago, United States</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Serious instruction and lasting community — Chicago's Pilates scene</p>
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
              Grip socks are required at most reformer studios in Chicago. These are our recommended picks — all available on Amazon.{" "}
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
              6 Studios · Curated & Verified
            </p>
            <p className="text-sm mb-10" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Addresses, pricing, and ratings independently checked against each studio's own site and public review platforms in September 2026. We call out at least one real trade-off per studio — no pick here is presented as flawless.
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
              Tips for booking Pilates in Chicago
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
              Best neighbourhoods for Pilates in Chicago
            </h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Chicago's Pilates landscape is shaped by its neighbourhoods. Here's where to look depending on where you're based.
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
