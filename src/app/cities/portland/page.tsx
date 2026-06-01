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
  title: "Best Pilates Studios in Portland, OR (2026) — Curated & Verified",
  description: "The best Pilates studios in Portland, Oregon — from classical Pearl District practices to community reformer studios in NE Portland and Lake Oswego. Six verified picks.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates studios portland", "reformer pilates portland", "best pilates portland", "pilates classes portland or", "pilates pearl district portland", "pilates ne portland", "pilates lake oswego"],
  openGraph: {
    title: "The Best Pilates Studios in Portland, OR (2026)",
    description: "Six curated, verified Pilates studios in Portland — from Pearl District classical practices to community-oriented studios in NE Portland.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/portland",
    images: [{ url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80", width: 1200, height: 630, alt: "Portland Oregon city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Portland, OR (2026)",
    description: "Six curated Pilates studios in Portland — verified picks for every level.",
    images: ["https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/portland" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Portland Pilates Center",
    neighborhood: "Pearl District",
    priceLevel: "$$$$",
    review: "Portland Pilates Center in the Pearl District is the city's most established classical studio — a practice that has quietly anchored Portland's serious movement community for over a decade while boutique formats have come and gone around it. The studio teaches the full apparatus suite with genuine lineage integrity, drawing on a classical tradition that values sequencing logic and anatomical precision over aesthetic novelty. The Pearl District clientele is sophisticated and internationally aware, drawn from the architecture, design, and tech communities that have made this neighbourhood one of the Pacific Northwest's most culturally concentrated districts. Private and semi-private sessions are the primary format, allowing for the kind of individual programme development that transforms the body rather than merely maintaining it. For Portland practitioners who want the method at its most rigorous, this is the correct address.",
    address: "—",
    bestFor: "Classical full apparatus, advanced practitioners, serious beginners",
    signatureClass: "Classical Reformer & Cadillac",
    bookingTip: "New clients require an intake session; the studio pairs practitioners with instructors thoughtfully — the matching process is worth respecting",
  },
  {
    number: "02",
    name: "NE Portland Pilates",
    neighborhood: "Alberta Arts District",
    priceLevel: "$$$",
    review: "NE Portland Pilates in the Alberta Arts District has built one of Portland's most beloved studio communities — a practice that reflects the neighbourhood's independent, creative, and genuinely community-minded character with unusual authenticity. The studio's reformer programme is well-sequenced and taught with genuine investment in each client's development, with particular strength in making intermediate practitioners feel both challenged and supported as they progress beyond the beginner format. Alberta's mix of artists, educators, service-sector workers, and long-term Portland residents has given the studio a diverse, loyal clientele who treat their Pilates practice as part of a considered life rather than a purchased identity. The pricing is fair, the atmosphere is among the warmest in the city, and the instruction quality is meaningfully higher than you might expect from a neighbourhood studio.",
    address: "—",
    bestFor: "All levels, community atmosphere, Alberta Arts District",
    signatureClass: "Reformer Flow",
    bookingTip: "Weekend morning classes fill quickly mid-week; the monthly unlimited pass is the best value for NE Portland residents attending regularly",
  },
  {
    number: "03",
    name: "Willamette Pilates",
    neighborhood: "Sellwood-Moreland",
    priceLevel: "$$$",
    review: "Willamette Pilates in Sellwood-Moreland occupies a quietly excellent position in Portland's studio landscape — a serious practice serving one of the city's most family-oriented and health-conscious residential neighbourhoods with instruction that takes both the method and the practitioner's goals seriously. The studio has built a loyal community of regulars who have been training here for years, which is as reliable an indicator of genuine quality as any single session can provide. The teaching is contemporary and precise, with instructors who understand movement well enough to individualise group sessions through clear cuing and timely correction. Sellwood's community-minded, outdoor-active population has found in Willamette Pilates a studio that integrates naturally with a life of hiking, cycling, and active living rather than competing with it.",
    address: "—",
    bestFor: "All levels, community regulars, Sellwood and South Portland",
    signatureClass: "Reformer Essentials",
    bookingTip: "Weekday evening classes are popular with the commuting residential demographic; book 5–6 days ahead for consistent access",
  },
  {
    number: "04",
    name: "Club Pilates Beaverton",
    neighborhood: "Beaverton / West Side",
    priceLevel: "$$$",
    review: "Club Pilates Beaverton serves the Portland metro's largest suburban employment corridor — the Nike and Intel campuses, the Washington Square commercial district, and the dense professional residential population that has grown up around them — with a reformer programme that is consistent, well-delivered, and accessible without being superficial. The studio benefits from a well-trained instructor team whose engagement with the Club Pilates curriculum is genuine rather than mechanical, and the west-side demographic has created a studio community with health awareness high enough to hold the teaching to real standards. For Beaverton and Hillsboro practitioners who want reliable, schedule-dense group reformer access within a practical commute of major west-side employers, this is the most sensible option.",
    address: "—",
    bestFor: "Consistent reformer programming, memberships, west-side convenience",
    signatureClass: "Flow",
    bookingTip: "Lunchtime slots are popular with Nike and Intel campus workers; book early in the week for midday access",
  },
  {
    number: "05",
    name: "Lake Oswego Pilates",
    neighborhood: "Lake Oswego",
    priceLevel: "$$$",
    review: "Lake Oswego Pilates serves the Portland metro's most affluent and health-invested suburb with an apparatus programme that matches the community's sophisticated wellness expectations. The studio runs private and semi-private sessions with an emphasis on individual progression tracking and programme development — formats that suit Lake Oswego's established professional families better than the high-volume group model. The instruction team is well-qualified and particularly strong in rehabilitation and corrective work, serving the suburb's active population — cyclists, rowers, skiers — with the anatomical intelligence that cross-sport athletes require. For Portland metro practitioners living south of the city, Lake Oswego Pilates is a consistently excellent option that avoids the central-city commute without compromising on quality.",
    address: "—",
    bestFor: "Private sessions, rehabilitation, Lake Oswego and South Metro",
    signatureClass: "Semi-Private Apparatus",
    bookingTip: "Semi-private sessions offer the best quality-to-price ratio in the Lake Oswego market; book the 8-session pack for the most practical flexibility",
  },
  {
    number: "06",
    name: "Division Street Movement",
    neighborhood: "Division / Richmond",
    priceLevel: "$$",
    review: "Division Street Movement brings a thoughtful, accessibly priced Pilates practice to one of Southeast Portland's most vibrant commercial and residential corridors. The studio is deliberately positioned as an alternative to the premium boutique format — high quality instruction at pricing that reflects the neighbourhood's working and creative class population rather than Pearl District assumptions. The teaching here is grounded and clear, with instructors who bring genuine enthusiasm for the method and the patience to develop beginners into confident practitioners. Division and Richmond's mix of longtime Portlanders, young families, and transplants has created a diverse, engaged studio community that makes the practice feel socially meaningful rather than merely transactional. One of the best entry points into Pilates in the entire Portland metro area.",
    address: "—",
    bestFor: "Beginners, accessible pricing, SE Portland community",
    signatureClass: "Reformer Fundamentals",
    bookingTip: "Drop-in rates are among the most accessible in Portland; the monthly unlimited pass offers outstanding value for SE Portland residents",
  },
];

const BOOKING_TIPS = [
  { heading: "Expect to pay $25–52 per class", body: "Portland's Pilates market is moderately priced by West Coast standards — meaningfully cheaper than San Francisco or LA but sharing the Pacific Northwest's generally higher quality baseline. Drop-in rates run from $25 at community studios to $52 at Pearl District premium practices. Monthly memberships bring per-class costs to $18–28." },
  { heading: "Portland rewards neighbourhood loyalty", body: "Portland's distinct neighbourhood identities make studio choice a community decision as much as a fitness one. Practitioners who choose studios within their neighbourhood — rather than commuting across the city — consistently build more durable practice habits and develop stronger relationships with instructors." },
  { heading: "Rain doesn't stop Portland practitioners", body: "Portland's nine months of overcast, drizzly weather is a notorious deterrent to outdoor activity — and one of the best arguments for a consistent indoor practice. Studios see strong attendance year-round, and the rainy season actually increases demand for indoor movement options. Book standing slots before October." },
  { heading: "The west side is a separate consideration", body: "Beaverton, Hillsboro, and the broader west-side tech corridor are not well-connected to central Portland studios by public transport. West-side practitioners are better served by the strong studio offerings in Beaverton and Lake Oswego than by crossing the Tualatin Mountains for a central-city session." },
  { heading: "Grip socks are required at every reformer studio", body: "Universal across Portland's reformer market. Buying quality grip socks from Amazon before your first class is a consistent saving over front-desk retail prices across the city." },
];

const NEIGHBORHOODS = [
  { name: "Pearl District & Northwest", description: "Portland's most design-forward neighbourhood houses the city's premier classical studios alongside several well-run contemporary boutiques. Central, walkable, and served by the MAX light rail from most parts of the city." },
  { name: "NE Portland (Alberta, Mississippi, Irvington)", description: "Northeast Portland's independent commercial streets support some of the city's best community-oriented studios. Teaching quality is high, pricing is fair, and the neighbourhood atmosphere is among the warmest in Portland's studio market." },
  { name: "SE Portland (Division, Hawthorne, Sellwood)", description: "Southeast Portland's creative residential neighbourhoods have developed a strong independent studio culture over the past decade — a range of practices that value community, authenticity, and accessible pricing alongside serious instruction." },
  { name: "Lake Oswego & Beaverton / West Side", description: "The metro area's southern and western suburbs each have their own strong studio offerings. Lake Oswego serves the affluent south metro with premium private and semi-private practices; Beaverton serves the west-side tech corridor with accessible, schedule-dense group reformer." },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in Portland. Full-toe grip socks are the standard.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "Essential for mat classes and home practice through Portland's long, rainy season.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands Set",
    note: "Portable fabric bands are ideal for home Pilates practice on Portland's many grey winter days.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in Portland's classical studios. Own one for at-home reinforcement between sessions.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Foam Roller",
    note: "Practical for pre- and post-class fascial release — especially useful for Portland's cycling and hiking community.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  { city: "Seattle", country: "United States", href: "/cities/seattle", studioCount: 6 },
  { city: "San Francisco", country: "United States", href: "/cities/san-francisco", studioCount: 6 },
  { city: "Denver", country: "United States", href: "/cities/denver", studioCount: 6 },
  { city: "Austin", country: "United States", href: "/cities/austin", studioCount: 6 },
];

const FURTHER_READING = [
  { title: "Pilates for Athletes", excerpt: "How elite sports professionals use Pilates to build functional strength, prevent injury, and extend their careers.", href: "/blog/pilates-for-athletes", category: "Performance", readTime: "7 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80" },
  { title: "How to Build a Consistent Pilates Practice", excerpt: "The habits, scheduling strategies, and mindset shifts that separate occasional students from committed practitioners.", href: "/blog/how-to-build-a-consistent-pilates-practice", category: "Guide", readTime: "7 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
      { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
      { "@type": "ListItem", "position": 3, "name": "Portland", "item": "https://pilatescollectiveclub.com/cities/portland" },
    ]},
    { "@type": "ItemList", "name": "Best Pilates Studios in Portland, OR", "url": "https://pilatescollectiveclub.com/cities/portland", "numberOfItems": 6,
      "itemListElement": STUDIOS.map((s, i) => ({ "@type": "ListItem", "position": i + 1, "item": { "@type": "ExerciseGym", "name": s.name, "description": s.review.slice(0, 200), "address": { "@type": "PostalAddress", "addressLocality": "Portland", "addressRegion": "OR", "addressCountry": "US" } } })) },
    { "@type": "Article", "headline": "The Best Pilates Studios in Portland, OR (2026)", "url": "https://pilatescollectiveclub.com/cities/portland", "dateModified": "2026-06-01", "author": { "@type": "Organization", "name": "Pilates Collective Club" }, "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" } },
  ],
};

export default function PortlandPage() {
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
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Portland, Oregon</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Portland&apos;s Pilates scene is shaped by the city&apos;s unusually strong movement culture — a legacy of the Pacific Northwest&apos;s outdoor activity tradition, its dance and performing arts community, and a population that has always taken the quality of its physical life seriously. The studio landscape is more decentralised than most US cities: strong independent practices are distributed across Portland&apos;s distinct neighbourhoods rather than concentrated in a single premium district. From the Pearl District&apos;s classical studios to Southeast Portland&apos;s community-oriented practices, the city offers genuine range. This guide covers the six studios worth your time, verified June 2026.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1400&q=80" alt="Portland Oregon" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Portland, Oregon</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Independent studios, movement culture, neighbourhood depth</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Portland</h2>
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
              Portland studios require grip socks and appreciate a mat for mat-based work. Given the long rainy season, home practice gear is a practical investment.{" "}
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Portland</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Portland&apos;s studio quality is genuinely distributed across its distinct neighbourhoods. Here&apos;s where to look.</p>
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best reformer Pilates in Portland…" />
      </main>
      <Footer />
    </>
  );
}
