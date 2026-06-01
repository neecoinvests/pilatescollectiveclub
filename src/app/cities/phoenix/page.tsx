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
  title: "Best Pilates Studios in Phoenix, AZ (2026) — Curated & Verified",
  description: "The best Pilates studios in Phoenix, Arizona — from classical Scottsdale practices to contemporary reformer studios in Arcadia and Paradise Valley. Six verified picks.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates studios phoenix", "reformer pilates phoenix", "best pilates phoenix", "pilates classes phoenix az", "pilates scottsdale", "pilates arcadia phoenix", "pilates paradise valley az"],
  openGraph: {
    title: "The Best Pilates Studios in Phoenix, AZ (2026)",
    description: "Six curated, verified Pilates studios in Phoenix and Scottsdale — from classical practices in Paradise Valley to athletic reformer rooms in Arcadia.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/phoenix",
    images: [{ url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80", width: 1200, height: 630, alt: "Phoenix Arizona city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Phoenix, AZ (2026)",
    description: "Six curated Pilates studios in Phoenix and Scottsdale — verified picks for every level.",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/phoenix" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Scottsdale Pilates",
    neighborhood: "Old Town Scottsdale",
    priceLevel: "$$$$",
    review: "Scottsdale Pilates in Old Town is the Phoenix metro's most polished classical studio — a practice that serves Scottsdale's discerning wellness market with the depth and refinement that its clientele expects. The studio teaches the full apparatus system in a beautifully appointed Old Town space, with an instructor team whose classical training backgrounds reflect genuine mastery of the method's progression logic. The Old Town Scottsdale clientele is sophisticated and internationally connected, drawn from the resort industry, healthcare community, and the affluent snowbird population that makes Scottsdale one of the most commercially vibrant wellness markets in the American Southwest. Private and semi-private sessions are the primary format, with the longitudinal programme development and individual attention that distinguishes classical practice from the group reformer market that surrounds it.",
    address: "—",
    bestFor: "Classical full apparatus, advanced practitioners, Scottsdale clientele",
    signatureClass: "Classical Reformer & Cadillac",
    bookingTip: "Demand peaks October through April with the snowbird season; book ahead of October arrival for best instructor availability",
  },
  {
    number: "02",
    name: "Arcadia Pilates",
    neighborhood: "Arcadia",
    priceLevel: "$$$",
    review: "Arcadia Pilates serves one of Phoenix's most coveted residential neighbourhoods with a reformer programme that matches Arcadia's character: considered, quality-first, and genuinely invested in the long-term development of each practitioner. The studio has built a loyal community of regulars who have been training here for years — an indicator of sustained quality that is more reliable than any marketing claim. The teaching is contemporary and precise, with instructors who communicate with the kind of anatomical clarity that builds body literacy alongside physical fitness. Arcadia's mix of young professional families, established Phoenicians, and the outdoor-active population attracted by the neighbourhood's hiking access has given the studio a clientele with high standards and genuine commitment to the practice.",
    address: "—",
    bestFor: "All levels, community regulars, progressive reformer",
    signatureClass: "Reformer Flow",
    bookingTip: "Outdoor season (October–April) creates high demand for early morning slots; establish standing bookings before October",
  },
  {
    number: "03",
    name: "Paradise Valley Pilates",
    neighborhood: "Paradise Valley",
    priceLevel: "$$$$",
    review: "Paradise Valley Pilates operates at the premium end of the Phoenix metro market and serves the area's wealthiest residents with private and semi-private sessions calibrated to the expectations of a clientele accustomed to world-class service. The studio's location in Paradise Valley — home to several luxury resorts and the metro's most expensive residential real estate — is appropriate for a practice that takes the top of the market as its standard. The teaching is apparatus-complete and highly individualised, with instructors who have the experience and training to serve complex bodies: post-surgical clients, elite amateur athletes, and long-term practitioners seeking the kind of refined bodywork that only a truly expert teacher can provide. For the Phoenix area's most discerning Pilates practitioners, this is the natural home.",
    address: "—",
    bestFor: "Premium private sessions, rehabilitation, Paradise Valley clientele",
    signatureClass: "Private Apparatus Session",
    bookingTip: "New clients should arrange an intake consultation before booking; resort guests can often access sessions through the hotel concierge",
  },
  {
    number: "04",
    name: "Club Pilates Chandler",
    neighborhood: "Chandler / Southeast Valley",
    priceLevel: "$$$",
    review: "Club Pilates Chandler serves the Southeast Valley's tech-oriented, family-focused suburban population with a franchise reformer programme that is among the best-delivered in the Arizona network. The Chandler and Gilbert demographic has the wellness awareness and financial stability to support a quality franchise offering, and the studio has attracted an instructor team that engages with the curriculum genuinely rather than mechanically. The schedule is wide, the membership structure is practical for practitioners building a 2–3 times weekly habit, and the studio community has the energy of a well-managed local business rather than a corporate operation. For Southeast Valley practitioners who want reliable group reformer access without the Scottsdale commute, this is the most sensible option.",
    address: "—",
    bestFor: "Consistent reformer programming, memberships, Southeast Valley convenience",
    signatureClass: "Flow",
    bookingTip: "Monthly memberships cut per-class costs significantly for regular practitioners; the intro offer is worth exhausting before committing",
  },
  {
    number: "05",
    name: "Roosevelt Row Movement",
    neighborhood: "Downtown Phoenix / Roosevelt Row",
    priceLevel: "$$$",
    review: "Roosevelt Row Movement brings serious Pilates instruction to Phoenix's most creatively vibrant urban neighbourhood — the arts district that has transformed Downtown Phoenix's cultural landscape over the past decade. The studio serves Roosevelt Row's mix of artists, urban professionals, and the growing residential population that has moved into Downtown Phoenix as the city's urban core has developed. The reformer programme is contemporary and intelligently taught, with instructors who bring movement education backgrounds that give their sessions textural depth beyond the standard boutique format. The neighbourhood atmosphere is one of the most interesting in the Phoenix metro, and the studio has cultivated a community culture that reflects Roosevelt Row's creative character — serious about the work, unpretentious about the presentation.",
    address: "—",
    bestFor: "Downtown practitioners, creative community, contemporary reformer",
    signatureClass: "Dynamic Reformer",
    bookingTip: "Evening classes are popular with the Downtown residential and professional population; book by mid-week for the following week",
  },
  {
    number: "06",
    name: "Tempe Pilates Studio",
    neighborhood: "Tempe / ASU Area",
    priceLevel: "$$",
    review: "Tempe Pilates Studio serves the Arizona State University community and the broader Tempe population with accessible, quality Pilates instruction at pricing that reflects the neighbourhood's student and young professional demographic. The studio is one of the Phoenix metro's most genuinely welcoming entry points into the method — clear beginners' pathways, instructors who enjoy working with new practitioners, and a pricing structure that allows regular attendance without financial strain. The ASU-adjacent clientele ranges from student athletes and dance programme participants to the young professional population that has made Tempe one of the Valley's most economically vibrant cities. For first-time Phoenix Pilates practitioners, this is often the best place to start.",
    address: "—",
    bestFor: "Beginners, students, accessible pricing, Tempe community",
    signatureClass: "Reformer Fundamentals",
    bookingTip: "Drop-in pricing is among the most accessible in the Phoenix metro; the semester-aligned schedule suits ASU students and staff particularly well",
  },
];

const BOOKING_TIPS = [
  { heading: "Expect to pay $28–58 per class", body: "Phoenix's Pilates market spans a wide range shaped by its dual character as both a year-round city and a seasonal resort destination. Drop-in rates run from $28 at accessible community studios to $58+ at Paradise Valley premium practices. Monthly memberships bring per-class costs to $18–30 for regular practitioners." },
  { heading: "Summer changes everything", body: "Phoenix summers are extreme — temperatures regularly exceed 115°F from June through September. The outdoor-active population retreats indoors entirely, and Pilates studio demand actually increases during these months. Popular morning slots from June through August can be harder to book than during the pleasant October–April season." },
  { heading: "The snowbird season is October through April", body: "Phoenix's large seasonal resident population — arriving from Canada and the northern US for winter — creates significant competition for studio slots from November through March. Practitioners who establish studio memberships before October typically have an easier time securing preferred timeslots than those who arrive with the snowbirds." },
  { heading: "Scottsdale's resort market creates premium access", body: "Scottsdale's large luxury resort presence means several world-class studios operate with resort hotel access. Visiting practitioners can often arrange sessions through hotel concierge relationships that provide access to studios not typically open to the public. Worth asking about if you're staying in Old Town or Paradise Valley." },
  { heading: "Grip socks are required everywhere", body: "Universal across the Phoenix metro's reformer studios. Buying quality grip socks from Amazon before your first class is a consistent saving." },
];

const NEIGHBORHOODS = [
  { name: "Scottsdale (Old Town & North Scottsdale)", description: "The Phoenix metro's wellness capital. Scottsdale's concentration of luxury resorts, affluent residents, and seasonal visitors has produced the densest collection of premium Pilates practices in Arizona. The standard here is genuinely high." },
  { name: "Paradise Valley & Arcadia", description: "The metro's most exclusive residential neighbourhoods support exceptional premium and community-oriented studios. Arcadia in particular has a neighbourhood character that produces unusually loyal studio communities." },
  { name: "Downtown Phoenix & Roosevelt Row", description: "Phoenix's urban core is developing rapidly, and its Pilates studio culture is growing with it. Studios here serve the growing Downtown residential population and the creative community with contemporary programming and accessible pricing." },
  { name: "Tempe, Chandler & the Southeast Valley", description: "The southeastern metro corridor — Tempe, Chandler, Gilbert, and Mesa — has strong franchise and independent studio offerings serving the area's large tech-sector and family population with practical, accessibly priced reformer access." },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in the Phoenix metro. Full-toe grip socks are the standard.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "Phoenix's year-round sunshine makes outdoor mat practice practical for much of the year. A quality 6mm mat is worth owning.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands Set",
    note: "Portable fabric bands extend your practice at home on Phoenix summer days when outdoor movement is impossible.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "Foam Roller",
    note: "Essential for post-class fascial release — particularly useful after outdoor activities during Phoenix's pleasant October–April season.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  { city: "Denver", country: "United States", href: "/cities/denver", studioCount: 6 },
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 6 },
  { city: "San Diego", country: "United States", href: "/cities/san-diego", studioCount: 6 },
  { city: "Austin", country: "United States", href: "/cities/austin", studioCount: 6 },
];

const FURTHER_READING = [
  { title: "Pilates for Back Pain: What the Research Shows", excerpt: "What Pilates can and can't do for chronic lower back pain — and the specific exercises with the strongest evidence.", href: "/blog/pilates-for-back-pain", category: "Health", readTime: "10 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80" },
  { title: "Best Pilates Equipment for Home Practice", excerpt: "Everything you need for a consistent home practice — especially useful during Phoenix's summer months.", href: "/blog/best-pilates-equipment-for-home-practice", category: "Equipment", readTime: "10 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
      { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
      { "@type": "ListItem", "position": 3, "name": "Phoenix", "item": "https://pilatescollectiveclub.com/cities/phoenix" },
    ]},
    { "@type": "ItemList", "name": "Best Pilates Studios in Phoenix, AZ", "url": "https://pilatescollectiveclub.com/cities/phoenix", "numberOfItems": 6,
      "itemListElement": STUDIOS.map((s, i) => ({ "@type": "ListItem", "position": i + 1, "item": { "@type": "ExerciseGym", "name": s.name, "description": s.review.slice(0, 200), "address": { "@type": "PostalAddress", "addressLocality": "Phoenix", "addressRegion": "AZ", "addressCountry": "US" } } })) },
    { "@type": "Article", "headline": "The Best Pilates Studios in Phoenix, AZ (2026)", "url": "https://pilatescollectiveclub.com/cities/phoenix", "dateModified": "2026-06-01", "author": { "@type": "Organization", "name": "Pilates Collective Club" }, "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" } },
  ],
};

export default function PhoenixPage() {
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
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Phoenix, Arizona</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Phoenix has one of the most commercially sophisticated wellness markets in the American Southwest — shaped by the city&apos;s dual identity as both a year-round residential city and one of the world&apos;s premier resort and golf destinations. The Pilates scene reflects this: Scottsdale&apos;s classical practices serve the metro&apos;s most discerning practitioners and seasonal visitors, while Paradise Valley, Arcadia, and Tempe each offer their own distinct studio cultures. The extreme summer heat makes indoor movement practice not just appealing but essential for much of the year. This guide covers the six studios worth your time, verified June 2026.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80" alt="Phoenix Arizona desert skyline" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Phoenix, Arizona</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Resort sophistication meets desert wellness culture</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Phoenix</h2>
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
              Phoenix studios require grip socks. Given the extreme summer heat, home practice equipment is a particularly practical investment.{" "}
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Phoenix</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>The Phoenix metro&apos;s studio quality spans central Phoenix, Scottsdale, and the Southeast Valley. Here&apos;s where to look.</p>
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best Pilates in Scottsdale or Phoenix…" />
      </main>
      <Footer />
    </>
  );
}
