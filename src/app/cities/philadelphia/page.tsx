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
  title: "Best Pilates Studios in Philadelphia, PA (2026) — Curated Guide",
  description: "The best Pilates studios in Philadelphia — private classical studios and reformer boutiques in Rittenhouse, Fishtown and Spring Garden. Six verified picks for every level, 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates philadelphia", "reformer pilates philadelphia", "best pilates studios philadelphia", "pilates studio philly", "pilates classes philadelphia", "rittenhouse square pilates", "fishtown pilates", "pilates main line pa", "pilates pennsylvania", "best reformer pilates philly"],
  openGraph: {
    title: "Best Pilates Studios in Philadelphia, PA (2026)",
    description: "Six curated Pilates studios in Philadelphia — Rittenhouse Square and Fishtown reformer boutiques. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/philadelphia",
    images: [{ url: "https://images.unsplash.com/photo-1569761316261-9a8696fa2ca3?w=1200&q=80", width: 1200, height: 630, alt: "Philadelphia Pennsylvania city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Philadelphia (2026)",
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
    name: "Star Pilates",
    neighborhood: "Rittenhouse",
    priceLevel: "$$$$",
    review: "Star Pilates on Locust Street offers private sessions only, taught on Gratz Pilates equipment, including the reformer — classical, one-to-one instruction in the heart of Rittenhouse.",
    caveat: "private sessions only — there are no group classes.",
    address: "2043 Locust St, Philadelphia, PA 19103",
    bestFor: "Private classical Pilates on Gratz equipment",
    signatureClass: "Private Classical Session",
    bookingTip: "Book a series of privates — progress compounds with consistency.",
  },
  {
    number: "02",
    name: "CenterSpace Pilates",
    neighborhood: "Rittenhouse / Center City",
    priceLevel: "$$$",
    review: "CenterSpace Pilates on Walnut Street offers private and duet sessions with the reformer as the primary machine, a strong option for focused, individual work in Center City.",
    caveat: "private and duet only — not a drop-in group studio.",
    address: "1420 Walnut St, Suite 1420, Philadelphia, PA 19102",
    bestFor: "Private and duet reformer sessions",
    signatureClass: "Private Reformer",
    bookingTip: "Bring a friend and book a duet to share the cost.",
  },
  {
    number: "03",
    name: "Retro Pilates",
    neighborhood: "Fishtown",
    priceLevel: "$$",
    review: "Retro Pilates in Fishtown, a 2022 Best of Philly winner, teaches on Balanced Body Allegro 2 reformers with six people or fewer per class, from introductory sessions to classes focused on specific body parts.",
    caveat: "small classes fill quickly — book ahead.",
    address: "—",
    bestFor: "Small-group reformer in Fishtown",
    signatureClass: "Intro to Reformer",
    bookingTip: "Start with an introductory class before joining body-part-focused sessions.",
  },
  {
    number: "04",
    name: "Midsection Connection",
    neighborhood: "Spring Garden",
    priceLevel: "$$",
    review: "Midsection Connection on Brandywine Street is a classical Pilates studio offering mat sessions and reformer classes, a long-standing option close to the Art Museum area.",
    caveat: "a classical studio — expect precise technique rather than a high-energy class.",
    address: "1827 Brandywine St, Philadelphia, PA 19130",
    bestFor: "Classical mat and reformer",
    signatureClass: "Classical Reformer",
    bookingTip: "Ask about the right class level before your first visit.",
  },
  {
    number: "05",
    name: "FS8 Fishtown",
    neighborhood: "Fishtown",
    priceLevel: "$$",
    review: "FS8, an Australian-founded brand, runs a 50-minute fusion format in Fishtown that combines reformer, yoga and barre influences, alongside mat Pilates.",
    caveat: "a fusion workout rather than traditional Pilates.",
    address: "—",
    bestFor: "Reformer–yoga–barre fusion in Fishtown",
    signatureClass: "FS8 Fusion (50 min)",
    bookingTip: "Try a mat class and a fusion class to see which suits you.",
  },
  {
    number: "06",
    name: "Club Pilates Rittenhouse",
    neighborhood: "Rittenhouse Square",
    priceLevel: "$$$",
    review: "Club Pilates Rittenhouse on Walnut Street brings the brand's levelled group reformer system to Center City.",
    caveat: "a franchise format — consistent, but less personalised than an independent studio.",
    address: "1616 Walnut St, Philadelphia, PA 19103",
    bestFor: "Structured reformer classes in Center City",
    signatureClass: "Reformer Flow",
    bookingTip: "Lunchtime classes fill with office workers — book ahead.",
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

const HOME_REFORMERS = [
  { tag: "Budget Pick", name: "Stamina AeroPilates 287", note: "The most accessible full-function reformer — four cords, a rebounder, and a frame that folds flat for storage.", price: "From $299", url: "https://www.amazon.com/s?k=stamina+aeropilates+287&tag=pilatescollective-20" },
  { tag: "Mid-Range Pick", name: "AeroPilates Pro XP 557", note: "A smoother carriage, standing platform, and adjustable footbar for practitioners training several times a week.", price: "From $1,329", url: "https://www.amazon.com/s?k=aeropilates+pro+557&tag=pilatescollective-20" },
  { tag: "Buy Once", name: "Balanced Body Allegro 2", note: "The studio-grade machine serious home practitioners never need to replace — full spring system and fold-flat storage.", price: "From $3,995", url: "https://www.amazon.com/s?k=balanced+body+allegro+2+reformer&tag=pilatescollective-20" },
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
      "description": "Curated guide to the top Pilates studios in Philadelphia, Pennsylvania, verified October 2026.",
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
      "description": "A curated guide to the six best Pilates studios in Philadelphia, Pennsylvania — verified October 2026.",
      "url": "https://pilatescollectiveclub.com/cities/philadelphia",
      "dateModified": "2026-10-03",
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
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Philadelphia occupies an interesting position in the American Pilates landscape — close enough to New York to be influenced by its classical tradition, large enough to have developed its own genuine studio culture, and dense enough with universities, hospitals, and arts institutions to have produced an unusually body-literate population of potential practitioners. The city&apos;s Pilates scene spans the full spectrum from Rittenhouse Square&apos;s classical practices to community-oriented South Philly studios built on honest pricing. This guide covers the six studios worth your time, verified October 2026.
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

        <section className="py-20 px-6" style={{ backgroundColor: "#fdf5f3", borderTop: "1px solid rgba(139,74,49,0.2)", borderBottom: "1px solid rgba(139,74,49,0.2)" }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Before You Go</p>
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

        <section className="px-6 py-20">
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best classical Pilates in Philadelphia…" />
      </main>
      <Footer />
    </>
  );
}
