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
  title: "Best Pilates Studios in Nashville, TN (2026) — Curated & Verified",
  description: "The best Pilates studios in Nashville, Tennessee — from classical Green Hills practices to contemporary reformer studios in 12 South and The Gulch. Six verified picks for every level.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates studios nashville", "reformer pilates nashville", "best pilates nashville", "pilates classes nashville tn", "pilates green hills nashville", "pilates 12 south nashville", "pilates the gulch nashville"],
  openGraph: {
    title: "The Best Pilates Studios in Nashville, TN (2026)",
    description: "Six curated, verified Pilates studios in Nashville — from Green Hills classical studios to contemporary reformer rooms in 12 South.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/nashville",
    images: [{ url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80", width: 1200, height: 630, alt: "Nashville Tennessee city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Nashville, TN (2026)",
    description: "Six curated Pilates studios in Nashville — verified picks for every level.",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/nashville",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Nashville Pilates Company",
    neighborhood: "Green Hills",
    priceLevel: "$$$$",
    review: "Nashville Pilates Company in Green Hills is the city's most respected classical studio — a practice built on deep method knowledge and the kind of teaching patience that produces genuine body transformation over time. The studio works predominantly in private and semi-private formats, which allows the instruction to be precisely calibrated to each client's movement history, goals, and current physical state. The Green Hills location serves Nashville's most wellness-invested residential community: music industry executives, healthcare professionals, and established families who have moved beyond novelty-seeking and want something that actually works. Instructors here are highly experienced and trained in a lineage that connects directly to the classical tradition, and the studio's track record with rehabilitation clients and professional performers is among the strongest in the Tennessee market.",
    address: "—",
    bestFor: "Classical apparatus, private sessions, rehabilitation, advanced practitioners",
    signatureClass: "Classical Reformer & Apparatus",
    bookingTip: "New clients require an intake session; the studio books weeks out for preferred instructors — join the waitlist early",
  },
  {
    number: "02",
    name: "The Pilates Bar Nashville",
    neighborhood: "12 South",
    priceLevel: "$$$",
    review: "The Pilates Bar in 12 South has become one of Nashville's most popular reformer studios — a contemporary practice that appeals strongly to the neighbourhood's aesthetic sensibility without sacrificing the instructional quality that serious practitioners require. The studio's approach combines classical Pilates principles with barre-influenced programming in a format that keeps sessions varied, physically demanding, and socially engaging. 12 South's mix of young professionals, music industry creatives, and wellness-first residents has given The Pilates Bar a clientele that is both commercially vibrant and genuinely committed to their practice. The space is beautiful, the instructors are skilled and personable, and the overall experience is as polished as Nashville's most design-conscious boutiques in any sector.",
    address: "—",
    bestFor: "Contemporary reformer-barre fusion, 12 South community",
    signatureClass: "Reformer Bar",
    bookingTip: "Weekend morning classes book out within hours of opening; set a booking reminder for 7 days ahead",
  },
  {
    number: "03",
    name: "Pilates Works Nashville",
    neighborhood: "Sylvan Park",
    priceLevel: "$$$",
    review: "Pilates Works in Sylvan Park serves one of Nashville's most community-focused residential neighbourhoods with a programme that takes movement education as seriously as physical conditioning. The studio has built a loyal following among Sylvan Park and Nations regulars who have been training here for years — a reliable indicator of sustained instructional quality in a market where novelty is easily monetised. The reformer programme is intelligently sequenced and delivered with the kind of individual attention that comes from small class sizes and genuinely invested instructors. The studio's particular strength is its work with intermediate and advanced practitioners who have outgrown beginner formats and want to develop more sophisticated movement skills without committing to the expense of full private sessions.",
    address: "—",
    bestFor: "Intermediate to advanced, community regulars, progressive sequencing",
    signatureClass: "Reformer Intermediate",
    bookingTip: "The studio's loyal client base means slots can be competitive; joining the waitlist for standing bookings is worth doing from day one",
  },
  {
    number: "04",
    name: "Club Pilates The Gulch",
    neighborhood: "The Gulch",
    priceLevel: "$$$",
    review: "Club Pilates The Gulch serves Nashville's most rapidly transformed neighbourhood with a reformer programme that is well-matched to the area's young, fitness-committed, professionally mobile population. The studio is clean, efficiently run, and staffed by instructors who bring genuine enthusiasm to the franchise curriculum — an important differentiator in a format that can feel mechanical when the teaching team is less engaged. The Gulch's high density of young professionals, many of them recent Nashville arrivals from coastal cities, has created a studio community with good energy and healthy standards. For practitioners who want reliable, schedule-dense group reformer access at a price point that works with a Nashville apartment budget, this is the most practical central-city option.",
    address: "—",
    bestFor: "Consistent reformer programming, memberships, The Gulch convenience",
    signatureClass: "Flow",
    bookingTip: "Monthly memberships cut per-class cost significantly; the Intro offer is worth completing across multiple class types before committing",
  },
  {
    number: "05",
    name: "Core Studio Nashville",
    neighborhood: "East Nashville",
    priceLevel: "$$$",
    review: "Core Studio in East Nashville has emerged as one of the city's most interesting independent practices — a reformer and mat studio that reflects East Nashville's creative, independent spirit in both its atmosphere and its approach to programming. The studio's instructors bring cross-disciplinary backgrounds that span dance, somatic practice, and movement therapy, which gives the teaching a textural richness uncommon in purely fitness-oriented boutiques. East Nashville's arts community has adopted Core Studio as its home Pilates practice, and the cultural osmosis between that creative community and the studio's programming has produced something genuinely distinctive. For practitioners who find the standard boutique format aesthetically or intellectually limiting, this is an unusually interesting alternative.",
    address: "—",
    bestFor: "Movement-educated practitioners, creative community, East Nashville",
    signatureClass: "Reformer & Mat Fusion",
    bookingTip: "Drop-in rates are competitive for Nashville; the monthly unlimited pass is the best value proposition in the East Nashville area",
  },
  {
    number: "06",
    name: "Move Pilates Nashville",
    neighborhood: "Hillsboro Village",
    priceLevel: "$$",
    review: "Move Pilates in Hillsboro Village is Nashville's most accessibly priced quality studio — a practice that has made the deliberate choice to serve the broader Nashville community rather than exclusively the city's wealthiest wellness consumers. The teaching is grounded, clear, and genuinely attentive to individual needs within group formats. The Hillsboro Village location serves a Vanderbilt-adjacent population of students, academics, and young professionals who want serious instruction at pricing that doesn't require a Music Row income. Classes are well-paced, intelligently sequenced, and delivered with the warmth that comes from a studio community built on genuine relationships rather than transactional fitness. One of Nashville's best-kept secrets for quality Pilates at honest pricing.",
    address: "—",
    bestFor: "Accessible pricing, all levels, Vanderbilt community, honest value",
    signatureClass: "Reformer Fundamentals",
    bookingTip: "Drop-in rates are among the most reasonable in Nashville; the monthly unlimited pass offers outstanding value in Hillsboro Village",
  },
];

const BOOKING_TIPS = [
  { heading: "Expect to pay $25–50 per class", body: "Nashville's Pilates market is slightly more accessible than major coastal cities. Drop-in rates run from around $25 at community studios to $50 at premium boutiques. Monthly memberships bring the per-class cost to $18–28 for regular practitioners — making Nashville one of the more financially accessible US cities for building a serious practice." },
  { heading: "Nashville's growth is reshaping the studio landscape", body: "Nashville's rapid population growth has brought a large wave of coastal transplants who expect the Pilates quality they found in New York, LA, or Chicago. This has raised standards city-wide and produced new studio openings in previously underserved neighbourhoods — the landscape in 2026 is meaningfully stronger than it was three years ago." },
  { heading: "The music industry connection matters", body: "Nashville's performing arts population — singers, musicians, dancers, stage performers — creates unusually strong demand for movement practices that serve the performing body. Studios with performance-aware programming, particularly in Green Hills and East Nashville, tend to have instructors with the background to serve this community particularly well." },
  { heading: "Traffic on I-65 and I-24 is significant", body: "Nashville's infrastructure has not kept pace with its population growth. The major interstates are congested during morning and evening commute windows. Choosing a studio on your commute route or within your neighbourhood is a practical consideration that significantly affects long-term attendance." },
  { heading: "Grip socks are required everywhere", body: "Universal across Nashville's reformer studios. Buying quality grip socks in advance from Amazon is a simple and consistent saving over front-desk pricing at every studio in the city." },
];

const NEIGHBORHOODS = [
  { name: "Green Hills & Belle Meade", description: "Nashville's most established wellness neighbourhood houses the city's premier classical Pilates practices. Studios here serve a discerning, health-invested clientele with correspondingly high instruction standards. The natural starting point for practitioners who prioritise method depth." },
  { name: "12 South & The Gulch", description: "Two of Nashville's most commercially vibrant neighbourhoods support strong contemporary studio offerings. Studios here are design-forward and socially engaging, attracting the young professional and creative populations that have made these areas Nashville's most photographed districts." },
  { name: "East Nashville", description: "Nashville's arts-forward east side has developed an independent studio culture that reflects the neighbourhood's creative identity — more experimental in programming, more accessible in pricing, and inhabited by practitioners who value community as much as conditioning." },
  { name: "Hillsboro Village & Midtown", description: "The Vanderbilt University corridor and surrounding Midtown area support a range of studios serving the academic and young professional population with solid instruction at more accessible price points than the Green Hills premium market." },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in Nashville. Full-toe grip socks are the standard across the city.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "Useful for mat classes and home practice. A 6mm closed-cell mat handles Nashville's studio variety well.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in Nashville's classical and fusion studios. Owning one supports at-home practice between sessions.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands Set",
    note: "Fabric resistance loops extend your Pilates practice at home and are ideal for Nashville days when studio commutes are impractical.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  { city: "Atlanta", country: "United States", href: "/cities/atlanta", studioCount: 6 },
  { city: "Austin", country: "United States", href: "/cities/austin", studioCount: 6 },
  { city: "Chicago", country: "United States", href: "/cities/chicago", studioCount: 6 },
  { city: "Miami", country: "United States", href: "/cities/miami", studioCount: 6 },
];

const FURTHER_READING = [
  { title: "Classical vs Contemporary Pilates", excerpt: "The split between Joseph Pilates' original system and modern interpretations — what it means for your practice.", href: "/blog/classical-vs-contemporary-pilates", category: "Method", readTime: "8 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80" },
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
        { "@type": "ListItem", "position": 3, "name": "Nashville", "item": "https://pilatescollectiveclub.com/cities/nashville" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Nashville, TN",
      "description": "Curated guide to the top Pilates studios in Nashville, Tennessee, verified June 2026.",
      "url": "https://pilatescollectiveclub.com/cities/nashville",
      "numberOfItems": 6,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "addressLocality": "Nashville", "addressRegion": "TN", "addressCountry": "US" },
        },
      })),
    },
    {
      "@type": "Article",
      "headline": "The Best Pilates Studios in Nashville, TN (2026)",
      "description": "A curated guide to the six best Pilates studios in Nashville, Tennessee — verified June 2026.",
      "url": "https://pilatescollectiveclub.com/cities/nashville",
      "dateModified": "2026-06-01",
      "author": { "@type": "Organization", "name": "Pilates Collective Club" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function NashvillePage() {
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
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Nashville, Tennessee</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Nashville&apos;s Pilates scene is one of the most interesting in the American South — shaped by the city&apos;s unusual mix of performing arts culture, an influx of coastal transplants, and a healthcare industry that has seeded the market with movement-literate practitioners and clients alike. The city&apos;s rapid growth has produced a studio landscape that spans classical Green Hills practices and contemporary 12 South boutiques to community-oriented East Nashville studios. The range is genuine and the quality has risen sharply in recent years. This guide covers the six studios worth your time, verified June 2026.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80" alt="Nashville Tennessee skyline" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Nashville, Tennessee</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Performing arts roots, rapid growth, rising standards</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Nashville</h2>
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
              Nashville studios require grip socks and appreciate a mat for mat-based work. Our top picks, available on Amazon.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#8b4a31", textDecoration: "underline", fontFamily: "'Montserrat', sans-serif", fontSize: "inherit" }}>Affiliate disclosure.</Link>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Nashville</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Nashville&apos;s studio scene follows the city&apos;s distinct neighbourhood identities. Here&apos;s where to look.</p>
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best reformer Pilates in Nashville…" />
      </main>
      <Footer />
    </>
  );
}
