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
  title: "Best Pilates Studios in Dallas, TX (2026) — Curated & Verified",
  description: "The best Pilates studios in Dallas, Texas — from classical Highland Park practices to athletic reformer studios in Uptown and Lakewood. Six verified picks for every level.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates studios dallas", "reformer pilates dallas", "best pilates dallas", "pilates classes dallas tx", "pilates highland park dallas", "pilates uptown dallas", "pilates lakewood dallas"],
  openGraph: {
    title: "The Best Pilates Studios in Dallas, TX (2026)",
    description: "Six curated, verified Pilates studios in Dallas — from Highland Park classical practices to athletic reformer rooms in Uptown.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/dallas",
    images: [{ url: "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?w=1200&q=80", width: 1200, height: 630, alt: "Dallas Texas city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Dallas, TX (2026)",
    description: "Six curated Pilates studios in Dallas — verified picks for every level.",
    images: ["https://images.unsplash.com/photo-1545158535-c3f7168c28b6?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/dallas",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Club Pilates Uptown Dallas",
    neighborhood: "Uptown Dallas",
    priceLevel: "$$$",
    review: "Club Pilates Uptown Dallas is one of the highest-rated reformer studios in the city, drawing a loyal following from the surrounding Uptown residential towers and McKinney Avenue office corridor. The studio's contemporary reformer programme is well-structured and taught by instructors who balance genuine instructional care with the efficient pacing that Uptown's professional clientele expects. The schedule is dense enough to fit around unpredictable work patterns, and the instructor-to-client ratio is consistently managed well even during peak classes.",
    address: "2720 McKinney Ave, Dallas, TX 75204",
    bestFor: "Uptown professionals, all levels, contemporary reformer",
    signatureClass: "Reformer Flow",
    bookingTip: "Lunchtime and early-evening slots fill fastest — book at least 5 days ahead for prime-time windows.",
  },
  {
    number: "02",
    name: "Club Pilates Preston Hollow",
    neighborhood: "Preston Hollow",
    priceLevel: "$$$",
    review: "Club Pilates Preston Hollow serves one of Dallas's wealthiest residential areas with a franchise reformer programme that is among the most consistently well-delivered in the Texas network. The Preston Hollow clientele — established families, healthcare professionals, and long-term Dallas residents with high wellness awareness — has attracted an instructor team that brings genuine professionalism and engagement to the curriculum. The studio is efficiently run with a wide schedule and a membership structure that makes regular attendance financially manageable.",
    address: "6030 Luther Lane, Dallas, TX 75225",
    bestFor: "Park Cities and Preston Hollow residents, memberships, consistent reformer",
    signatureClass: "Flow",
    bookingTip: "Monthly memberships are the most financially efficient option for practitioners attending 3+ times per week.",
  },
  {
    number: "03",
    name: "Pilates Barre Uptown",
    neighborhood: "Oak Lawn / Uptown",
    priceLevel: "$$$",
    review: "Pilates Barre Uptown is a boutique studio on Oak Lawn Avenue that blends reformer Pilates with barre-inspired work in small-group classes capped for quality. The studio has built an intensely loyal following — regulars often book the same slot every week for months — due to its instructor team's genuine investment in client progress. The programming is carefully periodised and the studio does not sacrifice quality for volume. An excellent option for Oak Lawn and Uptown residents who want thoughtful, personalized instruction in a non-franchise setting.",
    address: "3309 Oak Lawn Ave, Dallas, TX 75219",
    bestFor: "Boutique reformer, barre fusion, Oak Lawn community",
    signatureClass: "Reformer Barre Fusion",
    bookingTip: "Standing weekly bookings are the norm here — call or book online as soon as you decide to commit.",
  },
  {
    number: "04",
    name: "Club Pilates Lakewood",
    neighborhood: "Lakewood / East Dallas",
    priceLevel: "$$$",
    review: "Club Pilates Lakewood serves East Dallas's most active and community-minded residential neighborhood with well-structured reformer programming and a welcoming atmosphere that reflects the area's independent, neighborhood-first character. The studio has cultivated a loyal community of regulars who appreciate both the quality of instruction and the flexibility of the membership format. Instructors are particularly strong in their work with intermediate practitioners who want to progress beyond beginner class formats.",
    address: "2220 Abrams Rd, Dallas, TX 75214",
    bestFor: "East Dallas residents, community regulars, intermediate progression",
    signatureClass: "Reformer 2",
    bookingTip: "The studio's loyal community means availability can tighten — join the waitlist for standing bookings early.",
  },
  {
    number: "05",
    name: "The Pilates Room",
    neighborhood: "Lower Greenville",
    priceLevel: "$$$",
    review: "The Pilates Room on Greenville Avenue is a well-regarded independent studio with a classical foundation and a thoughtful contemporary programme. The instructor team brings genuine depth in both classical Pilates lineage and functional movement, making this one of the most educationally rich studios in East Dallas. Sessions are appropriately small, and the instructors know their clients well enough to adjust the work in real time. Lower Greenville's active, community-minded clientele has found in this studio a practice that rewards regular attendance.",
    address: "5519 Greenville Ave, Dallas, TX 75206",
    bestFor: "Classical and contemporary Pilates, Lower Greenville regulars, injury recovery",
    signatureClass: "Classical Reformer",
    bookingTip: "Private sessions book out several weeks in advance — contact the studio directly to get on the schedule.",
  },
  {
    number: "06",
    name: "Club Pilates Henderson",
    neighborhood: "Knox-Henderson",
    priceLevel: "$$$",
    review: "Club Pilates Henderson sits in one of Dallas's most walkable and commercially vibrant corridors, making it the most accessible studio for residents of Knox-Henderson, M-Streets, and the surrounding in-town neighborhoods. The studio is well-run and consistently staffed by instructors who engage genuinely with the curriculum. The Henderson Avenue location is ideal for practitioners who live or work nearby and want a high-quality reformer practice that fits into an already-active urban lifestyle.",
    address: "4514 McKinney Ave, Dallas, TX 75205",
    bestFor: "Knox-Henderson and M-Streets residents, walkable convenience, all levels",
    signatureClass: "Club Reformer 57",
    bookingTip: "Weekend morning slots fill fast — book by Thursday for the following week.",
  },
];

const BOOKING_TIPS = [
  { heading: "Expect to pay $28–58 per class", body: "Dallas's Pilates market spans a wide range — from $28 at community and East Dallas studios to $58+ at Highland Park premium practices. Monthly memberships and packs bring per-class costs down to $18–32 for regular practitioners. The Park Cities and Preston Hollow premium commands a genuine price differential over the broader city market." },
  { heading: "Dallas traffic is worse than it looks", body: "The Dallas metro — especially the North Dallas Tollway corridor and the I-75 Central Expressway — can double or triple expected commute times during rush hour. Choosing a studio within 10 minutes of home or work is a more important variable for long-term attendance than choosing the 'best' studio across town." },
  { heading: "The heat eliminates outdoor alternatives", body: "Dallas summers are extreme — temperatures routinely exceed 100°F from June through September. This makes Pilates studios' climate-controlled environments particularly attractive during these months, and booking demand for popular slots increases accordingly. Establishing standing bookings before summer begins is strongly advisable." },
  { heading: "The DFW market is distinct from Dallas proper", body: "Fort Worth, Frisco, Plano, and the broader DFW metro area have their own excellent studio offerings that may be more convenient for practitioners based north or west of Dallas proper. Don't limit your search to within the city limits if a suburban studio is meaningfully more accessible." },
  { heading: "Grip socks are required at every reformer studio", body: "Universal across Dallas's reformer market. Buying quality grip socks from Amazon before your first class is a consistent and worthwhile saving over front-desk retail prices across all Dallas studios." },
];

const NEIGHBORHOODS = [
  { name: "Highland Park & University Park (The Park Cities)", description: "Dallas's most affluent residential enclave houses the city's premier Pilates practices. Studios here serve a discerning, wellness-invested clientele that has the sophistication to recognise quality and the resources to sustain it. The correct starting point for practitioners who prioritise depth of method." },
  { name: "Uptown & Knox-Henderson", description: "Dallas's most commercially vibrant entertainment and residential districts support a strong contemporary studio market. Studios here are design-forward and professionally staffed, serving the city's young professional population with sessions calibrated for efficiency and results." },
  { name: "Lakewood & East Dallas", description: "East Dallas's characterful residential neighbourhoods have developed strong independent studio cultures over the past decade — community-focused, intelligently taught, and more accessibly priced than the Park Cities premium market." },
  { name: "Deep Ellum & Design District", description: "Dallas's creative districts are home to the city's most interesting independent movement practices — studios that take Pilates seriously while approaching its presentation unconventionally. Worth exploring for practitioners who find standard boutique formats limiting." },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in Dallas. Full-toe grip socks are the universal standard.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "A quality mat is essential for mat classes and home practice during Dallas's extreme summer heat.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in Dallas classical studios. Own one for at-home reinforcement between sessions.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands Set",
    note: "Portable fabric loops extend your Pilates practice on days when Dallas traffic makes the studio commute impractical.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "Foam Roller",
    note: "Practical for pre-class warm-up and post-class release — especially useful after long Texas summer commutes.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  { city: "Houston", country: "United States", href: "/cities/houston", studioCount: 6 },
  { city: "Austin", country: "United States", href: "/cities/austin", studioCount: 6 },
  { city: "Miami", country: "United States", href: "/cities/miami", studioCount: 6 },
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 6 },
];

const FURTHER_READING = [
  { title: "Pilates for Athletes", excerpt: "How elite sports professionals use Pilates to build functional strength, prevent injury, and extend their careers.", href: "/blog/pilates-for-athletes", category: "Performance", readTime: "7 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80" },
  { title: "How to Choose the Right Pilates Instructor", excerpt: "What credentials, experience, and red flags to look for when selecting a teacher.", href: "/blog/how-to-choose-a-pilates-instructor", category: "Guide", readTime: "6 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Dallas", "item": "https://pilatescollectiveclub.com/cities/dallas" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Dallas, TX",
      "description": "Curated guide to the top Pilates studios in Dallas, Texas, verified June 2026.",
      "url": "https://pilatescollectiveclub.com/cities/dallas",
      "numberOfItems": 6,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "addressLocality": "Dallas", "addressRegion": "TX", "addressCountry": "US" },
        },
      })),
    },
    {
      "@type": "Article",
      "headline": "The Best Pilates Studios in Dallas, TX (2026)",
      "description": "A curated guide to the six best Pilates studios in Dallas, Texas — verified June 2026.",
      "url": "https://pilatescollectiveclub.com/cities/dallas",
      "dateModified": "2026-06-01",
      "author": { "@type": "Organization", "name": "Pilates Collective Club" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function DallasPage() {
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
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Dallas, Texas</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Dallas has one of the most commercially sophisticated fitness markets in the American South — a product of the city&apos;s wealth concentration, its internationally connected professional class, and a wellness culture that takes both aesthetics and performance seriously. The Pilates scene reflects this: from classical Highland Park studios that would hold their own against anything in New York to community-oriented East Dallas practices where the method is treated as a genuine movement discipline rather than a premium lifestyle accessory. The range is wide and the quality at the top end is genuinely high. This guide covers the six studios worth your time, verified June 2026.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1545158535-c3f7168c28b6?w=1400&q=80" alt="Dallas Texas skyline" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Dallas, Texas</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Premium range, serious standards, genuine depth</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Dallas</h2>
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
              Dallas studios require grip socks and appreciate a mat for mat-based work. Our picks, all available on Amazon.{" "}
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Dallas</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Dallas&apos;s studio landscape maps closely to the city&apos;s neighbourhood wealth and character. Here&apos;s where to look.</p>
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best classical Pilates in Dallas…" />
      </main>
      <Footer />
    </>
  );
}
