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
  title: "Best Pilates Studios in Atlanta, GA (2026) — Curated Guide",
  description: "The best Pilates studios in Atlanta — from Buckhead reformer boutiques to Midtown method studios. Six verified picks for every level, 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates atlanta", "reformer pilates atlanta", "best pilates studios atlanta", "pilates studio atlanta ga", "pilates classes atlanta", "buckhead pilates", "midtown atlanta pilates", "pilates georgia", "best reformer pilates atlanta"],
  openGraph: {
    title: "Best Pilates Studios in Atlanta, GA (2026)",
    description: "Six curated Pilates studios in Atlanta — Buckhead reformer boutiques to Midtown method practices. Verified October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/atlanta",
    images: [{ url: "https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?w=1200&q=80", width: 1200, height: 630, alt: "Atlanta Georgia city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Atlanta (2026)",
    description: "Six curated Pilates studios in Atlanta — verified picks for every level.",
    images: ["https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/atlanta",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Club Pilates Buckhead",
    neighborhood: "Buckhead (Peachtree Battle)",
    priceLevel: "$$$",
    review: "Club Pilates' first in-town Atlanta studio opened in February 2017 in the Peachtree Battle Shopping Center, in the heart of Buckhead. It runs the national Club Pilates group reformer format, so classes are levelled and standardised: a Level 1 Reformer Flow here follows the same structure as one anywhere else in the country, which makes it an easy, low-risk place to learn the reformer.",
    caveat: "this is a franchise format — consistent and well-organised, but programming comes from a national curriculum rather than an individual owner-teacher, so it will not feel like a classical boutique.",
    address: "2391 Peachtree Rd NE, Atlanta, GA 30305",
    bestFor: "Beginners and regulars who want a structured, levelled reformer programme",
    signatureClass: "Reformer Flow",
    bookingTip: "New to Club Pilates? Book an intro class first — studios use it to fit you into the right level before you buy a membership.",
  },
  {
    number: "02",
    name: "Intown Pilates",
    neighborhood: "Amsterdam Walk (Virginia-Highland / Morningside)",
    priceLevel: "$$$",
    review: "Intown Pilates works across the full range of Pilates apparatus — reformer, Cadillac, towers, Wunda chairs and the ladder barrel — and builds customised programmes around them. Group options include mat and tower classes such as Pilates Sculpt, Pilates Pump and Tower Stretch, alongside private sessions, which makes it one of the more apparatus-complete independent studios in town.",
    caveat: "group classes here lean toward mat and tower rather than big reformer rooms — if you specifically want a high-energy group reformer class, a reformer-focused studio will suit you better.",
    address: "500 Amsterdam Ave NE, Suite L5, Atlanta, GA 30306",
    bestFor: "Private sessions and tower work on the full range of Pilates apparatus",
    signatureClass: "Tower Stretch",
    bookingTip: "Scheduling runs through the Mindbody app — check it for private-session availability before you call.",
  },
  {
    number: "03",
    name: "The Studio Pilates — West Midtown",
    neighborhood: "West Midtown",
    priceLevel: "$$$",
    review: "Opened in 2024 on the Trabert Avenue corridor near Westside Provisions and the BeltLine Westside Trail, The Studio Pilates' West Midtown location is built around premium Balanced Body reformers. The layout covers every format: a 14-reformer group room, a four-person tower/reformer semi-private room, and a private room with a Cadillac and chair. Every group class is reformer-based and led by certified instructors.",
    caveat: "a 14-reformer room is larger than a true boutique class — if you want very small groups, book the semi-private room or a private session instead.",
    address: "763 Trabert Ave NW, Unit D, Atlanta, GA 30318",
    bestFor: "Reformer classes with a step up to semi-private and private apparatus work",
    signatureClass: "Group Reformer",
    bookingTip: "The brand also runs a studio at 1583 N Decatur Rd near Emory — handy if West Midtown is out of your way.",
  },
  {
    number: "04",
    name: "HIPfit",
    neighborhood: "Virginia-Highland (on the BeltLine)",
    priceLevel: "$$",
    review: "HIPfit is a boutique studio inside The Training Room at 742 Ponce de Leon Place, directly on the Atlanta BeltLine in Virginia-Highland. Its classes blend the precision of Pilates with the intensity of modern conditioning, so expect more sweat and pace than in a traditional method class.",
    caveat: "this is Pilates-inspired conditioning rather than classical Pilates — purists looking for traditional repertoire should look at Intown Pilates instead.",
    address: "742 Ponce de Leon Pl NE, Atlanta, GA 30306",
    bestFor: "Pilates-based conditioning with a BeltLine location",
    signatureClass: "Pilates conditioning class",
    bookingTip: "Read the studio's new-client page before your first class, and walk or bike in on the BeltLine to skip parking.",
  },
  {
    number: "05",
    name: "Club Pilates Decatur",
    neighborhood: "North Decatur / Toco Hills",
    priceLevel: "$$",
    review: "Club Pilates Decatur sits on Church Street in the North Decatur and Toco Hills area, convenient for Decatur, Druid Hills and Emory-area residents. It offers the same levelled Club Pilates class system as the Buckhead studio, which suits people who want a predictable format and membership pricing.",
    caveat: "despite the name, the studio is on Church Street toward Toco Hills rather than on Decatur Square — check the map before assuming it is walkable from downtown Decatur.",
    address: "1605 Church St, Suite 660, Decatur, GA 30033",
    bestFor: "East-side residents who want a levelled reformer programme",
    signatureClass: "Reformer Flow",
    bookingTip: "If you hold a Club Pilates membership, check whether your plan lets you book at other Atlanta-area studios too.",
  },
  {
    number: "06",
    name: "Club Pilates Sandy Springs",
    neighborhood: "Sandy Springs (Exchange at Hammond)",
    priceLevel: "$$$",
    review: "Club Pilates Sandy Springs is in the Exchange at Hammond shopping centre on Roswell Road, serving the north-Atlanta residential corridor inside and just outside I-285. Like the other Club Pilates studios, it runs a levelled group reformer curriculum, which makes it a practical choice for people who want to train several times a week close to home.",
    caveat: "a franchise studio rather than an independent — reliable structure, less individual programming.",
    address: "5968 Roswell Rd, Sandy Springs, GA 30328",
    bestFor: "North-Atlanta residents, consistent reformer programming, memberships",
    signatureClass: "Reformer Flow",
    bookingTip: "Monthly memberships are the most cost-effective option if you plan to attend three or more times per week.",
  },
];

const BOOKING_TIPS = [
  { heading: "Expect to pay $28–55 per class", body: "Atlanta's Pilates market is meaningfully more accessible than coastal US cities. Drop-in rates run from around $28 at community studios to $55 at Buckhead premium practices. Monthly memberships bring per-class costs to $18–30 for regular practitioners — making Atlanta one of the more financially viable US cities for building a consistent practice." },
  { heading: "Traffic in Atlanta is serious business", body: "Atlanta has some of the worst traffic congestion in the United States. The I-285 and I-75/I-85 corridors are genuinely impassable during rush hour. Choose a studio on your home or work commute route rather than the 'best' studio on the other side of the city — attendance consistency is the most important variable in practice development." },
  { heading: "The studio market is neighbourhood-defined", body: "Atlanta's sprawl means the studio scene is more fragmented than comparable US cities. Buckhead, Midtown, and Decatur each have their own distinct studio cultures and clientele profiles. Spend a week exploring the Pilates offering nearest to where you spend most of your time before committing to a membership." },
  { heading: "Summer heat affects scheduling preferences", body: "Atlanta's summers are extremely hot and humid. Pilates studios' climate-controlled environments make morning and early evening classes particularly popular in July and August — book those slots well in advance from May onwards." },
  { heading: "Bring grip socks", body: "Most reformer studios in Atlanta require or strongly recommend grip socks. Buying a pair before your first class is usually cheaper than front-desk retail — check your studio's policy when you book." },
];

const NEIGHBORHOODS = [
  { name: "Buckhead", description: "Atlanta's wealthiest neighbourhood houses the city's most premium Pilates practices. Higher price points are matched by excellent instruction and a wellness-invested clientele that sets a high bar. The natural starting point for practitioners who prioritise quality above all other variables." },
  { name: "Midtown", description: "Atlanta's cultural and professional centre supports a diverse range of studios serving the city's creative and corporate communities. Excellent MARTA access from most of the metro area makes Midtown studios genuinely practical for practitioners who don't drive into the city." },
  { name: "Virginia-Highland, Inman Park & Candler Park", description: "The in-town residential neighbourhoods east of Midtown have developed excellent independent studio cultures — community-focused, intelligently taught, and priced for the neighbourhood demographic. Strong options for practitioners who live in or commute through this corridor." },
  { name: "Decatur & Sandy Springs", description: "Atlanta's eastern and northern suburbs have increasingly strong Pilates offerings serving the city's sprawling professional class. Studios here are well-run and practically accessible for practitioners who live beyond the I-285 perimeter." },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in Atlanta. Full-toe grip socks are the universal standard.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "A quality 6mm mat is essential for mat classes and home practice in Atlanta's climate-controlled studios.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard prop in many Atlanta classical studios. Useful for at-home reinforcement between sessions.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands Set",
    note: "Fabric-loop resistance bands extend your studio practice and are ideal for home use on days Atlanta traffic makes the commute impractical.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "Foam Roller",
    note: "Essential for post-class myofascial release — particularly useful after long commutes in Atlanta traffic.",
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
  { city: "Nashville", country: "United States", href: "/cities/nashville", studioCount: 6 },
  { city: "Miami", country: "United States", href: "/cities/miami", studioCount: 6 },
  { city: "Washington DC", country: "United States", href: "/cities/washington-dc", studioCount: 6 },
  { city: "Austin", country: "United States", href: "/cities/austin", studioCount: 6 },
];

const FURTHER_READING = [
  { title: "The Beginner's Guide to Reformer Pilates", excerpt: "What to expect in your first reformer class and how to choose a studio that fits your goals.", href: "/blog/beginners-guide-to-reformer-pilates", category: "Beginner Guide", readTime: "8 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1616439069669-66dbe74bcdad?w=800&q=80" },
  { title: "How to Find a Good Pilates Studio", excerpt: "What to look for in a studio, and the questions worth asking before you commit to a membership.", href: "/blog/how-to-find-a-good-pilates-studio", category: "Guide", readTime: "6 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Atlanta", "item": "https://pilatescollectiveclub.com/cities/atlanta" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Atlanta, GA",
      "description": "Curated guide to the top Pilates studios in Atlanta, Georgia, verified October 2026.",
      "url": "https://pilatescollectiveclub.com/cities/atlanta",
      "numberOfItems": 6,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "addressLocality": "Atlanta", "addressRegion": "GA", "addressCountry": "US" },
        },
      })),
    },
    {
      "@type": "Article",
      "headline": "The Best Pilates Studios in Atlanta, GA (2026)",
      "description": "A curated guide to the six best Pilates studios in Atlanta, Georgia — verified October 2026.",
      "url": "https://pilatescollectiveclub.com/cities/atlanta",
      "dateModified": "2026-10-03",
      "author": { "@type": "Organization", "name": "Pilates Collective Club" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function AtlantaPage() {
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
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Atlanta, Georgia</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Atlanta's Pilates scene has matured significantly over the past decade, shaped by the city's growing population of coastal transplants, a strong arts and performance culture, and an affluent professional class that invests seriously in wellness. The market spans genuine extremes — from structured franchise reformer studios in Buckhead and Sandy Springs to apparatus-rich independents and BeltLine conditioning studios in-town. Understanding which studio suits your level, budget, and commute radius matters more in Atlanta than in more compact cities. This guide covers the six studios that consistently deliver, verified October 2026.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?w=1400&q=80" alt="Atlanta Georgia skyline" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Atlanta, Georgia</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>A maturing market spanning classical depth and community accessibility</p>
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
              Atlanta studios require grip socks and appreciate a mat for mat-based work. Our top picks, available on Amazon.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#8b4a31", textDecoration: "underline", fontFamily: "'Montserrat', sans-serif", fontSize: "inherit" }}>Affiliate disclosure.</Link>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {GEAR.map((g) => (
                <a key={g.name} href={g.url} target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: "none" }}>
                  <div className="rounded-xl p-5 h-full flex flex-col justify-between" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)" }}>
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

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Atlanta</h2>
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

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Atlanta</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Atlanta&apos;s sprawl makes neighbourhood choice as important as studio quality. Here&apos;s where to look.</p>
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

        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Related city guides</h2>
            <p className="text-sm mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Explore our guides to other cities with thriving Pilates scenes.</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">{RELATED_CITIES.map((c) => <CityCard key={c.city} {...c} />)}</div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">{FURTHER_READING.map((a) => <ArticleCard key={a.href} {...a} />)}</div>
          </div>
        </section>

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best classical Pilates in Atlanta…" />
      </main>
      <Footer />
    </>
  );
}
