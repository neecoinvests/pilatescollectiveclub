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
    description: "Six curated Pilates studios in Atlanta — Buckhead reformer boutiques to Midtown method practices. Verified June 2026.",
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
    neighborhood: "Buckhead",
    priceLevel: "$$$",
    review: "Club Pilates Buckhead is consistently rated one of Atlanta's top reformer studios, earning loyal regulars from Buckhead and Brookhaven alike. The Peachtree Road location is clean, well-equipped, and staffed by instructors who take alignment cues seriously across all class levels. The Buckhead clientele is wellness-savvy and expects quality, and this studio reliably delivers it. Membership options are genuinely practical for clients who want to practice three or more times per week without prohibitive per-class costs.",
    address: "3344 Peachtree Rd NE, Atlanta, GA 30326",
    bestFor: "All levels, high-frequency practitioners, Buckhead convenience",
    signatureClass: "Reformer Flow",
    bookingTip: "Morning and early-evening slots fill by mid-week — book for the following week on Wednesday or Thursday.",
  },
  {
    number: "02",
    name: "Intown Pilates",
    neighborhood: "Inman Park / Poncey-Highland",
    priceLevel: "$$$",
    review: "One of Atlanta's most enduring independent Pilates studios, Intown Pilates has served the Inman Park and Poncey-Highland community for years with intelligent, carefully programmed instruction that takes the method seriously. The studio occupies a warm, intimate space and the instructor team brings genuine depth — both in classical Pilates lineage and in the anatomical knowledge required to work safely with injured, post-surgical, or athletic clients. Class sizes are intentionally small, and instructors know their regulars well enough to adjust exercises in real time.",
    address: "1083 Austin Ave NE, Atlanta, GA 30307",
    bestFor: "Classical and contemporary Pilates, injury recovery, in-town community",
    signatureClass: "Classical Reformer",
    bookingTip: "Private and semi-private sessions book out quickly — contact the studio directly and get on the weekly waitlist.",
  },
  {
    number: "03",
    name: "Club Pilates Midtown",
    neighborhood: "Midtown",
    priceLevel: "$$$",
    review: "Club Pilates Midtown is the most accessible reformer studio for Atlanta's downtown and Midtown professional population. The schedule is dense and well-organised, with classes running from early morning through evening to accommodate the varied rhythms of surrounding office towers and residential buildings. Instructors are well-trained in the Club Pilates curriculum and consistently receive high marks for attentiveness and clear alignment cueing. An ideal home-studio for Atlanta practitioners who want quality reformer access without commuting to Buckhead.",
    address: "1375 Peachtree St NE, Atlanta, GA 30309",
    bestFor: "Midtown professionals, all levels, flexible scheduling",
    signatureClass: "Reformer 1.5",
    bookingTip: "Lunchtime and 5:30 PM classes are the first to fill — book at least 48 hours ahead for prime-time slots.",
  },
  {
    number: "04",
    name: "The Pilates Room",
    neighborhood: "Virginia-Highland",
    priceLevel: "$$$",
    review: "The Pilates Room in Virginia-Highland has cultivated one of Atlanta's most loyal studio communities through excellent instruction, genuine neighbourhood integration, and a teaching philosophy that prioritises understanding over spectacle. The studio serves the Inman Park and Virginia-Highland corridor with a programme that takes both beginners and advanced practitioners seriously. Classes are appropriately small, sequencing is intelligent, and instructors bring precise, anatomically grounded cueing that distinguishes this studio from higher-volume boutiques elsewhere in the city.",
    address: "1020 N Highland Ave NE, Atlanta, GA 30306",
    bestFor: "All levels, community atmosphere, progressive reformer",
    signatureClass: "Reformer Essentials",
    bookingTip: "Weekend morning classes book out early in the week — grab your spot by Thursday.",
  },
  {
    number: "05",
    name: "Club Pilates Decatur",
    neighborhood: "Decatur",
    priceLevel: "$$",
    review: "Serving Decatur's active, health-literate community, Club Pilates Decatur earns consistent five-star reviews for its welcoming atmosphere and high instructor standards. The east-of-Atlanta position makes it genuinely convenient for residents of Decatur, Avondale Estates, and surrounding neighborhoods — no Atlanta traffic required. The instructor team is thorough in its cueing and genuinely helpful to new clients navigating the reformer for the first time. Membership pricing is among the most accessible in the metro area.",
    address: "101 E Court Square, Decatur, GA 30030",
    bestFor: "Decatur and east-metro residents, beginners, affordable memberships",
    signatureClass: "Club Reformer 57",
    bookingTip: "Early-morning slots are popular with the working-parent demographic — book by mid-week for the following week.",
  },
  {
    number: "06",
    name: "Club Pilates Sandy Springs",
    neighborhood: "Sandy Springs",
    priceLevel: "$$$",
    review: "Club Pilates Sandy Springs serves the affluent north-Atlanta residential corridor with a well-managed franchise studio that brings reliable quality to one of the metro area's most fitness-invested zip codes. The Sandy Springs clientele is experienced and expects instructors who engage thoughtfully with the curriculum — and this location consistently delivers. The studio is clean, professional, and equipped with twelve reformers offering a wide schedule to accommodate the demanding and varied patterns of north-Atlanta professionals and families.",
    address: "6690 Roswell Rd NE, Sandy Springs, GA 30328",
    bestFor: "North-Atlanta residents, consistent reformer programming, memberships",
    signatureClass: "Flow",
    bookingTip: "Monthly memberships are the most financially efficient option for practitioners attending 3+ times per week.",
  },
];

const BOOKING_TIPS = [
  { heading: "Expect to pay $28–55 per class", body: "Atlanta's Pilates market is meaningfully more accessible than coastal US cities. Drop-in rates run from around $28 at community studios to $55 at Buckhead premium practices. Monthly memberships bring per-class costs to $18–30 for regular practitioners — making Atlanta one of the more financially viable US cities for building a consistent practice." },
  { heading: "Traffic in Atlanta is serious business", body: "Atlanta has some of the worst traffic congestion in the United States. The I-285 and I-75/I-85 corridors are genuinely impassable during rush hour. Choose a studio on your home or work commute route rather than the 'best' studio on the other side of the city — attendance consistency is the most important variable in practice development." },
  { heading: "The studio market is neighbourhood-defined", body: "Atlanta's sprawl means the studio scene is more fragmented than comparable US cities. Buckhead, Midtown, and Decatur each have their own distinct studio cultures and clientele profiles. Spend a week exploring the Pilates offering nearest to where you spend most of your time before committing to a membership." },
  { heading: "Summer heat affects scheduling preferences", body: "Atlanta's summers are extremely hot and humid. Pilates studios' climate-controlled environments make morning and early evening classes particularly popular in July and August — book those slots well in advance from May onwards." },
  { heading: "Grip socks are required at every reformer studio", body: "Universal across Atlanta's studio market. Buying quality grip socks from Amazon before your first class is a consistent saving over front-desk retail prices across every studio in the city." },
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
      "description": "Curated guide to the top Pilates studios in Atlanta, Georgia, verified June 2026.",
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
      "description": "A curated guide to the six best Pilates studios in Atlanta, Georgia — verified June 2026.",
      "url": "https://pilatescollectiveclub.com/cities/atlanta",
      "dateModified": "2026-06-01",
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
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Atlanta's Pilates scene has matured significantly over the past decade, shaped by the city's growing population of coastal transplants, a strong arts and performance culture, and an affluent professional class that invests seriously in wellness. The market spans genuine extremes — from classical Buckhead studios serving long-term practitioners to community-oriented in-town practices where accessibility is a founding principle. Understanding which studio suits your level, budget, and commute radius matters more in Atlanta than in more compact cities. This guide covers the six studios that consistently deliver, verified June 2026.
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

        <section className="px-6 pb-20">
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

        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
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
