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
  title: "Best Pilates Studios in Minneapolis, MN (2026) — Curated & Verified",
  description: "The best Pilates studios in Minneapolis, Minnesota — from classical Linden Hills practices to contemporary reformer studios in Uptown and NE Minneapolis. Six verified picks.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates studios minneapolis", "reformer pilates minneapolis", "best pilates minneapolis", "pilates classes minneapolis mn", "pilates uptown minneapolis", "pilates linden hills", "pilates ne minneapolis", "pilates st paul"],
  openGraph: {
    title: "The Best Pilates Studios in Minneapolis, MN (2026)",
    description: "Six curated, verified Pilates studios in Minneapolis — from Linden Hills classical practices to contemporary reformer rooms in Uptown.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/minneapolis",
    images: [{ url: "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=1200&q=80", width: 1200, height: 630, alt: "Minneapolis Minnesota city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Minneapolis, MN (2026)",
    description: "Six curated Pilates studios in Minneapolis — verified picks for every level.",
    images: ["https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=1200&q=80"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/minneapolis" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Club Pilates Linden Hills",
    neighborhood: "Linden Hills",
    priceLevel: "$$$",
    review: "Club Pilates Linden Hills is consistently rated one of Minneapolis's top reformer studios, serving the Twin Cities' most wellness-invested residential neighborhood with a franchise program that meets genuinely high standards. The Linden Hills clientele is educated and health-literate, which has attracted an instructor team that engages authentically with the curriculum. The studio has built a loyal community of regulars who appreciate both the instruction quality and the warm, neighborhood-first atmosphere.",
    address: "2904 W 44th St, Minneapolis, MN 55410",
    bestFor: "Linden Hills and southwest Minneapolis residents, all levels, consistent reformer",
    signatureClass: "Reformer Flow",
    bookingTip: "Weekend morning classes fill by Tuesday — book mid-week for Saturday and Sunday slots.",
  },
  {
    number: "02",
    name: "YogaFit / Pilates Minneapolis Uptown",
    neighborhood: "Uptown",
    priceLevel: "$$$",
    review: "One of Minneapolis's most established Uptown movement studios offers reformer and mat Pilates alongside yoga in a beautifully appointed Uptown space. The Pilates program is well-structured and taught by instructors who bring genuine expertise to both beginner and advanced class levels. Uptown's mix of young professionals, artists, and wellness-first residents has created a loyal studio community. The schedule is dense and the atmosphere is energetic without being overwhelming.",
    address: "1500 W Lake St, Minneapolis, MN 55408",
    bestFor: "Uptown community, mixed movement practice, all levels",
    signatureClass: "Reformer Flow",
    bookingTip: "Evening classes are popular with the Uptown professional demographic — book at least 5 days ahead.",
  },
  {
    number: "03",
    name: "Club Pilates Northeast Minneapolis",
    neighborhood: "Northeast Minneapolis",
    priceLevel: "$$$",
    review: "Club Pilates Northeast serves the Twin Cities' most creatively vibrant arts and innovation district with a well-run franchise studio that fits the neighborhood's unpretentious, quality-focused character. The NE Minneapolis community is active and engaged, and the studio has built a loyal base of regulars who appreciate its consistent instruction and welcoming atmosphere. Instructors are praised for their attentiveness and ability to challenge experienced practitioners while remaining accessible to newcomers.",
    address: "1301 NE 2nd St, Minneapolis, MN 55413",
    bestFor: "Northeast Minneapolis community, all levels, progressive reformer",
    signatureClass: "Reformer Essentials",
    bookingTip: "Evening classes are popular with the creative workforce — book 5 days ahead for weeknight prime slots.",
  },
  {
    number: "04",
    name: "Club Pilates Eden Prairie",
    neighborhood: "Eden Prairie / Southwest Suburbs",
    priceLevel: "$$$",
    review: "Club Pilates Eden Prairie serves the affluent southwest Twin Cities suburban corridor — Eden Prairie, Edina, and Minnetonka — with a franchise reformer program that is among the most consistently well-delivered in the Minnesota market. The studio has attracted an instructor team that brings genuine professionalism to the curriculum. The schedule is dense enough to accommodate the flexible working patterns of southwest metro professionals, and membership pricing makes regular attendance financially accessible.",
    address: "8251 Flying Cloud Dr, Eden Prairie, MN 55344",
    bestFor: "Southwest metro residents, memberships, consistent reformer",
    signatureClass: "Flow",
    bookingTip: "Monthly memberships cut per-class costs significantly — the intro offer is worth exhausting before committing.",
  },
  {
    number: "05",
    name: "Club Pilates Grand Avenue",
    neighborhood: "Grand Avenue, St Paul",
    priceLevel: "$$$",
    review: "Club Pilates Grand Avenue serves St Paul's most pleasant and health-invested residential corridor with consistent, quality reformer programming that reflects the capital city's quieter, more considered character. The Grand Avenue location is convenient for St Paul residents and the surrounding Summit Hill community. The studio has cultivated a loyal base of long-term practitioners who value the individual attention and consistent scheduling that this well-run location provides.",
    address: "867 Grand Ave, St Paul, MN 55105",
    bestFor: "St Paul residents, Grand Avenue community, all levels",
    signatureClass: "Reformer Essentials",
    bookingTip: "Saturday morning is the studio's most popular session — book by Wednesday.",
  },
  {
    number: "06",
    name: "Club Pilates North Loop",
    neighborhood: "North Loop / Downtown",
    priceLevel: "$$",
    review: "Club Pilates North Loop serves Minneapolis's most rapidly evolving urban neighborhood with accessible, quality reformer programming at pricing practical for the area's young professional population. The North Loop studio is convenient for downtown workers and residents, with a schedule that accommodates the varied rhythms of urban Minneapolis life. Instructors are warm and clear with beginners, and the studio's community atmosphere reflects the North Loop's welcoming, forward-looking character.",
    address: "222 N 2nd St, Minneapolis, MN 55401",
    bestFor: "Downtown and North Loop residents, beginners, accessible pricing",
    signatureClass: "Reformer Foundations",
    bookingTip: "Lunchtime classes fill quickly with the downtown professional crowd — book the night before.",
  },
];

const BOOKING_TIPS = [
  { heading: "Expect to pay $25–52 per class", body: "Minneapolis's Pilates market is moderately priced by US standards. Drop-in rates run from $25 at community studios to $52 at Linden Hills premium practices. Monthly memberships bring per-class costs to $18–28 for regular practitioners — making Minneapolis one of the more financially accessible major US cities for building a serious Pilates practice." },
  { heading: "Winter is when Pilates matters most", body: "Minneapolis winters are among the most severe in the continental United States. From November through March, outdoor activity is limited or eliminated for weeks at a time. Practitioners who establish a studio routine before the cold arrives maintain it through the winter; those who wait until January rarely sustain one. Book a standing slot in September." },
  { heading: "The skyway system changes your calculus", body: "Minneapolis's underground skyway network connects much of Downtown, allowing practitioners to access studios without outdoor exposure in winter. Studios in or connected to the skyway system become significantly more practical from November through March — worth factoring into neighbourhood choice." },
  { heading: "St Paul is a separate market worth considering", body: "The Twin Cities' two urban cores each have distinct studio cultures. St Paul's Grand Avenue and Summit Hill areas support several excellent independent practices that serve the capital city's professional population with a neighbourhood intimacy uncommon in Minneapolis proper." },
  { heading: "Grip socks are required everywhere", body: "Universal across Minneapolis's reformer studios. Buying quality grip socks from Amazon before your first class is a consistent saving over front-desk retail pricing across the Twin Cities market." },
];

const NEIGHBORHOODS = [
  { name: "Linden Hills & Edina", description: "Minneapolis's southwestern residential jewels house the city's most premium classical practices alongside strong franchise offerings. The wellness-invested, educated clientele here sets a high instructional standard that benefits the whole local market." },
  { name: "Uptown & South Minneapolis", description: "The city's most culturally active neighbourhood supports a range of contemporary and community-oriented studios. High energy, good instruction, and a schedule dense enough to accommodate the varied lives of Minneapolis's most active young professional population." },
  { name: "Northeast Minneapolis", description: "The Twin Cities' arts and innovation district has developed an excellent independent studio culture in the past decade. Studios here are community-focused, intelligently taught, and priced for the neighbourhood's creative and professional population." },
  { name: "Downtown, North Loop & St Paul (Grand Avenue)", description: "Central Minneapolis and St Paul's premier residential corridor each support strong studio offerings for practitioners who work downtown or live in the capital. Grand Avenue in particular has an intimate neighbourhood-studio culture well worth exploring." },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in Minneapolis. Full-toe grip socks are the standard.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "Essential for mat classes and home practice through Minneapolis's long, brutal winters.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands Set",
    note: "Fabric bands are invaluable for home Pilates practice during Minneapolis's many winter days when outdoor movement is impossible.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in Minneapolis classical studios. Owning one supports at-home practice between sessions.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  { city: "Chicago", country: "United States", href: "/cities/chicago", studioCount: 6 },
  { city: "Denver", country: "United States", href: "/cities/denver", studioCount: 6 },
  { city: "Seattle", country: "United States", href: "/cities/seattle", studioCount: 6 },
  { city: "Boston", country: "United States", href: "/cities/boston", studioCount: 6 },
];

const FURTHER_READING = [
  { title: "How to Build a Consistent Pilates Practice", excerpt: "The habits, scheduling strategies, and mindset shifts that separate occasional students from committed practitioners.", href: "/blog/how-to-build-a-consistent-pilates-practice", category: "Guide", readTime: "7 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80" },
  { title: "Best Pilates Equipment for Home Practice", excerpt: "Everything you actually need to build a consistent home practice — especially useful for Minneapolis winters.", href: "/blog/best-pilates-equipment-for-home-practice", category: "Equipment", readTime: "10 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
      { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
      { "@type": "ListItem", "position": 3, "name": "Minneapolis", "item": "https://pilatescollectiveclub.com/cities/minneapolis" },
    ]},
    { "@type": "ItemList", "name": "Best Pilates Studios in Minneapolis, MN", "url": "https://pilatescollectiveclub.com/cities/minneapolis", "numberOfItems": 6,
      "itemListElement": STUDIOS.map((s, i) => ({ "@type": "ListItem", "position": i + 1, "item": { "@type": "ExerciseGym", "name": s.name, "description": s.review.slice(0, 200), "address": { "@type": "PostalAddress", "addressLocality": "Minneapolis", "addressRegion": "MN", "addressCountry": "US" } } })) },
    { "@type": "Article", "headline": "The Best Pilates Studios in Minneapolis, MN (2026)", "url": "https://pilatescollectiveclub.com/cities/minneapolis", "dateModified": "2026-06-01", "author": { "@type": "Organization", "name": "Pilates Collective Club" }, "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" } },
  ],
};

export default function MinneapolisPage() {
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
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Minneapolis, Minnesota</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Minneapolis has one of the most underrated Pilates scenes in the United States — shaped by a population that takes its physical life seriously through long winters, a strong performing arts culture anchored by the Guthrie Theater and Minnesota Ballet, and a professional class with the health literacy to value movement education over fitness entertainment. The studio landscape spans classical Linden Hills practices, vibrant Uptown independents, and accessible Downtown studios within a compact, walkable city. This guide covers the six studios worth your time, verified June 2026.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=1400&q=80" alt="Minneapolis Minnesota skyline" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Minneapolis, Minnesota</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Serious movement culture in America&apos;s most underrated Pilates city</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Minneapolis</h2>
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
              Minneapolis studios require grip socks. Given the winter, home practice equipment is among the most worthwhile investments you can make.{" "}
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Minneapolis</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>The Twin Cities&apos; studio quality is distributed across distinct neighbourhoods and both cities. Here&apos;s where to look.</p>
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best classical Pilates in Minneapolis…" />
      </main>
      <Footer />
    </>
  );
}
