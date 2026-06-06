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
  title: "Best Pilates Studios in San Diego, CA (2026) — Curated & Verified",
  description: "The best Pilates studios in San Diego, California — from classical La Jolla practices to athletic reformer studios in Mission Hills and North Park. Six verified picks.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates studios san diego", "reformer pilates san diego", "best pilates san diego", "pilates classes san diego ca", "pilates la jolla", "pilates north park san diego", "pilates mission hills san diego"],
  openGraph: {
    title: "The Best Pilates Studios in San Diego, CA (2026)",
    description: "Six curated, verified Pilates studios in San Diego — from La Jolla classical practices to athletic reformer rooms in North Park.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/san-diego",
    images: [{ url: "https://images.unsplash.com/photo-1538689621163-f0aa0c3db346?w=1200&q=80", width: 1200, height: 630, alt: "San Diego California city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in San Diego, CA (2026)",
    description: "Six curated Pilates studios in San Diego — verified picks for every level.",
    images: ["https://images.unsplash.com/photo-1538689621163-f0aa0c3db346?w=1200&q=80"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/san-diego" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Club Pilates La Jolla",
    neighborhood: "La Jolla",
    priceLevel: "$$$",
    review: "Club Pilates La Jolla is one of San Diego's top-rated reformer studios, consistently earning five-star reviews from the coastal enclave's demanding wellness community. The La Jolla clientele — physicians, researchers from UCSD and the Salk Institute, and established professional families — holds the studio to high standards, and the instructor team rises to meet them. The schedule is wide and well-organized, and the studio captures some of the relaxed coastal energy that makes San Diego's wellness culture distinct from Los Angeles's more high-pressure market.",
    address: "7510 Girard Ave, La Jolla, CA 92037",
    bestFor: "La Jolla residents, all levels, coastal wellness community",
    signatureClass: "Reformer Flow",
    bookingTip: "Monthly memberships are the most financially efficient route for regular practitioners — exhaust the intro offer first.",
  },
  {
    number: "02",
    name: "Club Pilates North Park",
    neighborhood: "North Park",
    priceLevel: "$$$",
    review: "Club Pilates North Park has built one of San Diego's most loyal studio communities in a neighborhood known for its creative independence and genuine community standards. The studio's reformer program is well-sequenced and taught with real investment in client development. North Park's mix of young professionals, artists, and long-term San Diegans has created a diverse clientele that holds the studio to a genuinely useful quality bar. Instructors receive consistent high marks for their warmth and attentiveness to individual form.",
    address: "3702 Park Blvd, San Diego, CA 92103",
    bestFor: "All levels, North Park and Hillcrest community, progressive reformer",
    signatureClass: "Reformer Essentials",
    bookingTip: "Weekend morning classes fill by Wednesday — book mid-week for Saturday and Sunday slots.",
  },
  {
    number: "03",
    name: "Club Pilates Mission Hills",
    neighborhood: "Mission Hills",
    priceLevel: "$$$",
    review: "Club Pilates Mission Hills serves one of San Diego's most architecturally characterful neighborhoods with consistent, quality reformer programming. The studio is clean, professionally run, and particularly strong in its work with intermediate practitioners who want to progress beyond beginner formats. Mission Hills' mix of healthcare workers, established professionals, and longtime San Diego families has created a studio community with high standards and a warm, neighborhood-first atmosphere.",
    address: "1012 W Washington St, San Diego, CA 92103",
    bestFor: "Mission Hills and Hillcrest residents, intermediate progression, all levels",
    signatureClass: "Reformer Intermediate",
    bookingTip: "Request a standing weekly slot — the studio's loyal community means availability can tighten for popular time windows.",
  },
  {
    number: "04",
    name: "Club Pilates Del Mar",
    neighborhood: "Del Mar / Carmel Valley",
    priceLevel: "$$$",
    review: "Club Pilates Del Mar is among the best-executed franchise locations in the Southern California network, serving one of the San Diego metro's most affluent and wellness-invested coastal communities. The Del Mar and Carmel Valley demographic — tech professionals, biotech researchers, and established coastal families — has attracted an instructor team that engages genuinely with the curriculum. The schedule is wide and dense, and membership pricing makes regular attendance financially practical.",
    address: "3725 Del Mar Heights Rd, San Diego, CA 92130",
    bestFor: "North County coastal residents, memberships, consistent reformer",
    signatureClass: "Flow",
    bookingTip: "Monthly memberships are the most financially efficient route for regular practitioners — the intro package is worth exhausting first.",
  },
  {
    number: "05",
    name: "Body Central Pilates",
    neighborhood: "Hillcrest / Uptown",
    priceLevel: "$$$",
    review: "Body Central Pilates is one of San Diego's most respected independent studios, serving the Hillcrest and Uptown community with a reformer program that values genuine instruction quality over volume. The studio has cultivated an inclusive, welcoming atmosphere that reflects the neighborhood's open community spirit. The instructor team is praised for their clear cueing, anatomical knowledge, and warmth with both beginners and experienced practitioners. A neighborhood institution with a well-deserved loyal following.",
    address: "3767 5th Ave, San Diego, CA 92103",
    bestFor: "Hillcrest and Uptown community, inclusive atmosphere, all levels",
    signatureClass: "Reformer Flow",
    bookingTip: "Evening classes are popular with the neighborhood's working population — book by mid-week for prime evening slots.",
  },
  {
    number: "06",
    name: "Club Pilates Encinitas",
    neighborhood: "Encinitas / North County",
    priceLevel: "$$",
    review: "Club Pilates Encinitas captures the spirit of North County San Diego's active wellness culture, serving the coastal communities of Encinitas, Solana Beach, and Cardiff with accessible reformer programming and a welcoming atmosphere. The studio integrates naturally with the area's surfing, running, and yoga cultures — instructors are well-versed in sport-specific applications of the method. Membership pricing is among the most accessible on the North County coast, making regular attendance genuinely practical.",
    address: "1014 N El Camino Real, Encinitas, CA 92024",
    bestFor: "North County coastal practitioners, athletes, accessible pricing",
    signatureClass: "Reformer 1.5",
    bookingTip: "Early morning slots fill with the surfer and runner demographic — book by mid-week for the following week.",
  },
];

const BOOKING_TIPS = [
  { heading: "Expect to pay $30–58 per class", body: "San Diego's Pilates market sits between Los Angeles and the broader California baseline — premium but not LA-extreme. Drop-in rates run from $30 at community studios to $58 at La Jolla premium practices. Monthly memberships bring per-class costs to $20–32 for regular practitioners." },
  { heading: "San Diego's outdoor culture complements Pilates well", body: "The city's year-round temperate climate supports an unusually active outdoor population — surfers, trail runners, cyclists, and triathletes who find Pilates an ideal complement to their primary activities. Studios that understand this crossover, particularly in North County and coastal communities, produce programming that serves the active San Diego body particularly well." },
  { heading: "North County is a distinct market", body: "Encinitas, Del Mar, Carlsbad, and Oceanside have their own strong studio cultures that are distinct from central San Diego. North County practitioners don't need to drive into the city for quality — the studio density and instruction quality in coastal North County is genuinely excellent." },
  { heading: "Military community shapes the market", body: "San Diego's large military presence creates specific demand for movement practices suited to post-deployment rehabilitation, performance maintenance, and the needs of practitioners moving between duty stations. Studios with strong rehabilitation credentials are particularly well-served for this population." },
  { heading: "Grip socks are required at every reformer studio", body: "Universal across San Diego's reformer market. Buying quality grip socks from Amazon before your first class is a consistent saving over front-desk pricing." },
];

const NEIGHBORHOODS = [
  { name: "La Jolla & Torrey Pines", description: "San Diego's most exclusive coastal enclave houses the city's premier Pilates practices. Exceptional instruction quality, premium pricing, and a clientele drawn from the Salk Institute, UCSD, and the city's most accomplished professional community." },
  { name: "North Park, Hillcrest & Mission Hills", description: "San Diego's most vibrant urban neighbourhoods support a range of independent studios that combine strong instruction with genuine community character. More accessibly priced than La Jolla with teaching quality that is often comparable." },
  { name: "Del Mar, Encinitas & North County Coastal", description: "The coastal communities north of central San Diego have their own excellent studio landscape that serves the active, outdoors-first North County culture with instruction calibrated for athletic bodies and accessible pricing." },
  { name: "Mission Valley & East San Diego", description: "The city's central residential and commercial corridors support a growing number of franchise and independent studios serving the broader San Diego population. Practical and accessible for practitioners based east of the I-5 corridor." },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in San Diego. Full-toe grip socks are the standard.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "San Diego's year-round climate makes outdoor and home mat practice genuinely practical — a quality 6mm mat is worth owning.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in San Diego's classical studios. Useful for home reinforcement and beach-adjacent practice.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands Set",
    note: "Portable fabric bands are perfect for the San Diego outdoor-active lifestyle — use them before surfing, running, or at home.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 6 },
  { city: "San Francisco", country: "United States", href: "/cities/san-francisco", studioCount: 6 },
  { city: "Miami", country: "United States", href: "/cities/miami", studioCount: 6 },
  { city: "Austin", country: "United States", href: "/cities/austin", studioCount: 6 },
];

const FURTHER_READING = [
  { title: "Pilates for Athletes", excerpt: "How elite sports professionals use Pilates to build functional strength, prevent injury, and extend their careers.", href: "/blog/pilates-for-athletes", category: "Performance", readTime: "7 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80" },
  { title: "The Beginner's Guide to Reformer Pilates", excerpt: "What to expect in your first reformer class and how to choose a studio that fits your goals.", href: "/blog/beginners-guide-to-reformer-pilates", category: "Beginner Guide", readTime: "8 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1616439069669-66dbe74bcdad?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
      { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
      { "@type": "ListItem", "position": 3, "name": "San Diego", "item": "https://pilatescollectiveclub.com/cities/san-diego" },
    ]},
    { "@type": "ItemList", "name": "Best Pilates Studios in San Diego, CA", "url": "https://pilatescollectiveclub.com/cities/san-diego", "numberOfItems": 6,
      "itemListElement": STUDIOS.map((s, i) => ({ "@type": "ListItem", "position": i + 1, "item": { "@type": "ExerciseGym", "name": s.name, "description": s.review.slice(0, 200), "address": { "@type": "PostalAddress", "addressLocality": "San Diego", "addressRegion": "CA", "addressCountry": "US" } } })) },
    { "@type": "Article", "headline": "The Best Pilates Studios in San Diego, CA (2026)", "url": "https://pilatescollectiveclub.com/cities/san-diego", "dateModified": "2026-06-01", "author": { "@type": "Organization", "name": "Pilates Collective Club" }, "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" } },
  ],
};

export default function SanDiegoPage() {
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
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in San Diego, California</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              San Diego&apos;s Pilates scene is shaped by the city&apos;s distinctly physical character — a year-round outdoor culture built around surfing, running, cycling, and the Pacific, combined with a large military population, a world-class biotech and research cluster, and a wellness consciousness that is genuine rather than fashionable. The studio landscape spans La Jolla&apos;s classical practices and Del Mar&apos;s coastal boutiques to North Park&apos;s independent community studios and the athletic offerings of Encinitas. This guide covers the six studios worth your time, verified June 2026.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1538689621163-f0aa0c3db346?w=1400&q=80" alt="San Diego California coastline" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>San Diego, California</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Pacific culture, active bodies, year-round movement</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in San Diego</h2>
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
              San Diego studios require grip socks. The city&apos;s climate also makes outdoor mat practice and portable props particularly useful year-round.{" "}
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in San Diego</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>San Diego&apos;s studio quality extends from La Jolla to Encinitas and from North Park to the coast. Here&apos;s where to look.</p>
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best Pilates for surfers in San Diego…" />
      </main>
      <Footer />
    </>
  );
}
