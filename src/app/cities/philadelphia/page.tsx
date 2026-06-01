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
  title: "Best Pilates Studios in Philadelphia, PA (2026) — Curated & Verified",
  description: "The best Pilates studios in Philadelphia, Pennsylvania — from classical Rittenhouse Square practices to community reformer studios in Fishtown and Manayunk. Six verified picks.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates studios philadelphia", "reformer pilates philadelphia", "best pilates philadelphia", "pilates classes philly", "pilates rittenhouse square", "pilates fishtown philadelphia", "pilates main line philadelphia"],
  openGraph: {
    title: "The Best Pilates Studios in Philadelphia, PA (2026)",
    description: "Six curated, verified Pilates studios in Philadelphia — from Rittenhouse Square classical studios to community-oriented reformer rooms in Fishtown.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/philadelphia",
    images: [{ url: "https://images.unsplash.com/photo-1569761316261-9a8696fa2ca3?w=1200&q=80", width: 1200, height: 630, alt: "Philadelphia Pennsylvania city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Philadelphia, PA (2026)",
    description: "Six curated Pilates studios in Philadelphia — verified picks for every level.",
    images: ["https://images.unsplash.com/photo-1569761316261-9a8696fa2ca3?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/philadelphia",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Philadelphia Pilates",
    neighborhood: "Rittenhouse Square",
    priceLevel: "$$$$",
    review: "Philadelphia Pilates at Rittenhouse Square is the city's most respected classical practice — a studio that has operated at the highest level of the method for long enough to have trained instructors now teaching across the greater Philadelphia market. The Rittenhouse location is appropriate for a studio of this calibre: central, accessible, and serving a sophisticated clientele drawn from the medical, legal, and cultural institutions that make Centre City Philadelphia one of the most intellectually concentrated urban environments on the East Coast. The teaching is apparatus-complete and lineage-connected, with instruction quality that would hold its own against comparable studios in New York or Boston. For Philadelphia practitioners who want the method in its full depth — rather than the group reformer approximation that dominates the boutique market — this is the correct address.",
    address: "—",
    bestFor: "Classical full apparatus, advanced practitioners, serious beginners",
    signatureClass: "Classical Reformer & Cadillac",
    bookingTip: "Private and semi-private are the primary formats; new clients should request an intake assessment before their first session",
  },
  {
    number: "02",
    name: "The Movement Lab Philly",
    neighborhood: "Fitler Square",
    priceLevel: "$$$",
    review: "The Movement Lab in Fitler Square has positioned itself as Philadelphia's most intelligently designed contemporary Pilates studio — a practice that takes the classical method seriously without being rigid about its presentation, and applies current movement science to produce programming that is simultaneously rigorously correct and practically modern. The Fitler Square location serves a professional and academic clientele from the University of Pennsylvania community, the hospital network, and the Centre City business district, and the studio's teaching reflects the evidence-literate standards this population brings. Group reformer classes are small, instructor-to-client ratios are high, and the progression logic is communicated clearly enough that practitioners understand what they're developing and why. Among Philadelphia's most thoughtfully run studios.",
    address: "—",
    bestFor: "Contemporary reformer, evidence-informed programming, University City adjacent",
    signatureClass: "Reformer Flow",
    bookingTip: "Prime morning slots fill early in the week with the professional clientele; book 5–6 days ahead for consistent access",
  },
  {
    number: "03",
    name: "Fishtown Pilates",
    neighborhood: "Fishtown",
    priceLevel: "$$$",
    review: "Fishtown Pilates serves one of Philadelphia's most culturally dynamic neighbourhoods with a programme that reflects Fishtown's mix of long-term residents, artists, and young professionals who have made this formerly industrial district one of the most interesting places to live in the American Northeast. The studio is independent-minded and community-oriented, with pricing that is accessible enough for the neighbourhood's creative population without compromising the quality of instruction. The reformer programme is well-sequenced and taught with genuine investment in client development — instructors here are the kind of people who chose teaching because they love the method, and that enthusiasm translates into sessions that feel both rigorous and alive. Fishtown Pilates has built one of the most loyal studio communities in Philadelphia.",
    address: "—",
    bestFor: "All levels, community atmosphere, Fishtown and Northern Liberties",
    signatureClass: "Reformer Essentials",
    bookingTip: "Evening classes are popular with the neighbourhood's creative workforce; book by mid-week for weekend and peak evening slots",
  },
  {
    number: "04",
    name: "Main Line Pilates",
    neighborhood: "Ardmore / Main Line",
    priceLevel: "$$$",
    review: "Main Line Pilates in Ardmore serves the Philadelphia suburbs' most affluent residential corridor with a practice that maintains the kind of teaching standards that the Main Line's discerning population has every right to expect. The studio runs private, semi-private, and small-group reformer sessions with an emphasis on individual attention and genuine progression tracking — formats that suit the suburb's established professional families better than the high-volume group reformer model that dominates more urban markets. The Main Line clientele is health-literate and consistent, and the studio has built a long-term community of practitioners who have been training here for years. Instruction quality is among the highest in the greater Philadelphia area, and the studio's commitment to the method as a discipline rather than a fitness product is evident in everything from the intake process to the session programming.",
    address: "—",
    bestFor: "Main Line suburban practitioners, private and semi-private formats",
    signatureClass: "Semi-Private Reformer",
    bookingTip: "Semi-private sessions are the studio's strongest format; the 8-session pack offers the best value for Main Line practitioners attending regularly",
  },
  {
    number: "05",
    name: "Club Pilates Center City",
    neighborhood: "Center City",
    priceLevel: "$$$",
    review: "Club Pilates Center City serves Philadelphia's dense downtown professional population with a reformer programme that is well-structured, accessibly priced by Centre City standards, and efficiently delivered. The studio benefits from a central location with good public transport access from across the metro area, making it genuinely practical for practitioners who work or live downtown. The instruction team at this location is well-trained and brings more engagement to the curriculum than the franchise average — a reflection of the competitive urban fitness market that rewards genuine teaching quality over volume alone. For Philadelphia professionals who want reliable, membership-supported group reformer access within walking distance of City Hall and the major office districts, this is the most practically sensible central-city option.",
    address: "—",
    bestFor: "Consistent reformer programming, memberships, Center City convenience",
    signatureClass: "Flow",
    bookingTip: "Monthly memberships cut per-class cost significantly for regular practitioners; the intro package covers enough class types to make an informed membership decision",
  },
  {
    number: "06",
    name: "South Philly Movement",
    neighborhood: "South Philadelphia",
    priceLevel: "$$",
    review: "South Philly Movement is Philadelphia's most community-rooted independent Pilates practice — a studio that has made the deliberate choice to serve South Philadelphia's diverse, working-class population with quality instruction at pricing that doesn't require a Centre City salary. The teaching is grounded and clear, with a genuine commitment to making the method accessible to practitioners who have been priced out of the premium market. South Philadelphia's Italian-American, immigrant, and artist communities have found in South Philly Movement a practice that speaks their language: no pretension, genuine care, and instruction that respects the client's intelligence. The studio has built one of Philadelphia's warmest and most loyal communities, and the quality of the human experience here is as high as the instruction.",
    address: "—",
    bestFor: "Accessible pricing, South Philly community, all levels",
    signatureClass: "Reformer Fundamentals",
    bookingTip: "Drop-in rates are among the most reasonable in Philadelphia; the monthly unlimited pass is exceptional value for South Philadelphia residents",
  },
];

const BOOKING_TIPS = [
  { heading: "Expect to pay $28–55 per class", body: "Philadelphia's Pilates market is slightly more accessible than New York but shares the Northeast's generally higher price baseline. Drop-in rates run from $28 at community studios to $55+ at Rittenhouse Square premium practices. Monthly memberships bring per-class costs to $20–32 for regular practitioners." },
  { heading: "The academic calendar shapes demand", body: "Philadelphia's enormous university population — Penn, Drexel, Temple, Jefferson, and many others — creates unusual seasonality in the fitness market. Summer sees reduced competition for popular timeslots, while September through November and January through April are the most demand-intensive periods." },
  { heading: "The Main Line is a separate market", body: "The Philadelphia suburban corridor along the SEPTA Regional Rail — Ardmore, Bryn Mawr, Wayne, and beyond — has its own excellent studio landscape that serves the western suburbs with high-quality instruction. Don't overlook Main Line options if you live or work in the suburbs." },
  { heading: "SEPTA makes Philly studios genuinely accessible", body: "Unlike most American cities, Philadelphia's transit system is functional enough to make studios across the city genuinely accessible without a car. The Broad Street Line and Market-Frankford Line connect most major studio districts, and the transit network rewards practitioners willing to explore beyond their immediate neighbourhood." },
  { heading: "Grip socks are required everywhere", body: "Universal across Philadelphia's reformer studios. Buying quality grip socks from Amazon before your first class is a consistent and practical saving over front-desk retail prices at every studio in the city." },
];

const NEIGHBORHOODS = [
  { name: "Rittenhouse Square & Center City", description: "Philadelphia's most commercially sophisticated residential neighbourhood houses the city's premier Pilates practices alongside a strong franchise studio presence. Excellent public transport access makes these studios genuinely accessible from across the metro area." },
  { name: "Fitler Square, Graduate Hospital & South Street", description: "The neighbourhoods between Rittenhouse and South Philadelphia support a strong independent studio culture with academic and medical community influences. Studios here combine high instruction standards with a somewhat more accessible price point than Rittenhouse proper." },
  { name: "Fishtown & Northern Liberties", description: "Philadelphia's most creatively vibrant east-side neighbourhoods have developed excellent independent studio cultures over the past decade. Studios here are community-focused, honestly priced, and staffed by instructors who chose these neighbourhoods because they share their values." },
  { name: "Main Line (Ardmore, Bryn Mawr, Wayne)", description: "The western suburbs along the SEPTA Regional Rail offer several excellent private and semi-private practices serving the Main Line's affluent, health-invested residential community. Strong options for practitioners based outside the city." },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in Philadelphia. Full-toe grip socks are the standard across the city.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "A quality 6mm mat is essential for Philadelphia's mat classes and home practice through long Northeast winters.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in Philadelphia's classical studios. Owning one supports home practice between sessions.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Foam Roller",
    note: "Practical for pre- and post-class work, and invaluable on cold Philadelphia winter mornings.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands Set",
    note: "Portable fabric bands extend your Pilates practice at home through Philadelphia's significant winter season.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 6 },
  { city: "Boston", country: "United States", href: "/cities/boston", studioCount: 6 },
  { city: "Washington DC", country: "United States", href: "/cities/washington-dc", studioCount: 6 },
  { city: "Chicago", country: "United States", href: "/cities/chicago", studioCount: 6 },
];

const FURTHER_READING = [
  { title: "Classical vs Contemporary Pilates", excerpt: "The split between Joseph Pilates' original system and modern interpretations — what it means for your practice.", href: "/blog/classical-vs-contemporary-pilates", category: "Method", readTime: "8 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80" },
  { title: "The Beginner's Guide to Reformer Pilates", excerpt: "What to expect in your first reformer class and how to choose a studio that fits your goals.", href: "/blog/beginners-guide-to-reformer-pilates", category: "Beginner Guide", readTime: "8 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1616439069669-66dbe74bcdad?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Philadelphia", "item": "https://pilatescollectiveclub.com/cities/philadelphia" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Philadelphia, PA",
      "description": "Curated guide to the top Pilates studios in Philadelphia, Pennsylvania, verified June 2026.",
      "url": "https://pilatescollectiveclub.com/cities/philadelphia",
      "numberOfItems": 6,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "addressLocality": "Philadelphia", "addressRegion": "PA", "addressCountry": "US" },
        },
      })),
    },
    {
      "@type": "Article",
      "headline": "The Best Pilates Studios in Philadelphia, PA (2026)",
      "description": "A curated guide to the six best Pilates studios in Philadelphia, Pennsylvania — verified June 2026.",
      "url": "https://pilatescollectiveclub.com/cities/philadelphia",
      "dateModified": "2026-06-01",
      "author": { "@type": "Organization", "name": "Pilates Collective Club" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function PhiladelphiaPage() {
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
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Philadelphia, Pennsylvania</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Philadelphia occupies an interesting position in the American Pilates landscape — close enough to New York to be influenced by its classical tradition, large enough to have developed its own genuine studio culture, and dense enough with universities, hospitals, and arts institutions to have produced an unusually body-literate population of potential practitioners. The city&apos;s Pilates scene spans the full spectrum from Rittenhouse Square&apos;s classical practices to community-oriented South Philly studios built on honest pricing. This guide covers the six studios worth your time, verified June 2026.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1569761316261-9a8696fa2ca3?w=1400&q=80" alt="Philadelphia Pennsylvania skyline" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Philadelphia, Pennsylvania</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Classical roots, community character, genuine range</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Studios · Curated & Verified</p>
            <div className="space-y-8">{STUDIOS.map((s) => <StudioListing key={s.number} {...s} />)}</div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Philadelphia</h2>
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
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to bring to your first class</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Philadelphia studios require grip socks and appreciate a mat for mat-based work. Given the city&apos;s cold winters, home practice gear is a particularly worthwhile investment.{" "}
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

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Philadelphia</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Philadelphia&apos;s compact size and functioning transit system make the whole city accessible. Here&apos;s where to look.</p>
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best classical Pilates in Philadelphia…" />
      </main>
      <Footer />
    </>
  );
}
