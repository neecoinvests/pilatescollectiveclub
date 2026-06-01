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
  title: "Best Pilates Studios in Denver, CO (2026) — Curated & Verified",
  description: "The best Pilates studios in Denver, Colorado — from classical Cherry Creek practices to athletic conditioning studios in the Highlands. Six verified picks for every level.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates studios denver", "reformer pilates denver", "best pilates denver", "pilates classes denver co", "pilates cherry creek denver", "pilates highlands denver", "pilates lowry denver"],
  openGraph: {
    title: "The Best Pilates Studios in Denver, CO (2026)",
    description: "Six curated, verified Pilates studios in Denver — from Cherry Creek classical practices to athletic reformer rooms in the Highlands.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/denver",
    images: [{ url: "https://images.unsplash.com/photo-1546156929-a4c0ac411f47?w=1200&q=80", width: 1200, height: 630, alt: "Denver Colorado city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Denver, CO (2026)",
    description: "Six curated Pilates studios in Denver — verified picks for every level.",
    images: ["https://images.unsplash.com/photo-1546156929-a4c0ac411f47?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/denver",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Pilates by Gina",
    neighborhood: "Cherry Creek",
    priceLevel: "$$$$",
    review: "Pilates by Gina in Cherry Creek is the studio that Denver's most serious practitioners return to when they have exhausted what the boutique market offers. Gina's teaching draws from a classical lineage maintained with genuine rigour — sessions work across the full apparatus suite with an emphasis on the progression logic that defines the original method rather than the aesthetic novelty that defines many modern imitators. The Cherry Creek location is refined and unhurried, with a clientele that includes professional athletes, performers, and long-term practitioners who have been training with Gina and her team for years. The studio's focus on private and semi-private sessions allows for the kind of individual programme development that produces real, measurable change in the body over time. In a market saturated by well-branded but superficially taught group reformer, this is the honest alternative.",
    address: "—",
    bestFor: "Classical full apparatus, advanced practitioners, serious beginners",
    signatureClass: "Classical Reformer & Cadillac",
    bookingTip: "Gina's own schedule books out weeks in advance; associate instructors have excellent availability and are carefully trained",
  },
  {
    number: "02",
    name: "Highlands Pilates",
    neighborhood: "The Highlands",
    priceLevel: "$$$",
    review: "Highlands Pilates has become the Highlands neighbourhood's most trusted movement studio — an anchor practice in one of Denver's most wellness-conscious residential districts. The studio's approach is contemporary and physically demanding: reformer classes are designed with athletic clients in mind, building real functional strength rather than the aesthetic-focused conditioning that dominates many boutique formats. The teaching team is well-trained and genuinely invested in client progress, with a culture of detailed cuing and correction that elevates every session above what undifferentiated group formats typically provide. The Highlands clientele is active — hikers, skiers, cyclists, and trail runners who use Pilates as the intelligent core of a broader movement life — and the studio's programming reflects a thorough understanding of how Pilates serves athletic bodies.",
    address: "—",
    bestFor: "Athletic conditioning, cross-training, intermediate to advanced",
    signatureClass: "Athletic Reformer",
    bookingTip: "Early morning classes fill fastest with the athletic clientele; book by the weekend for the following week",
  },
  {
    number: "03",
    name: "Altitude Pilates",
    neighborhood: "Lowry",
    priceLevel: "$$$",
    review: "Altitude Pilates in Lowry serves Denver's eastern residential community with a reformer programme that takes genuine elevation — in the instructional sense — as its standard. The studio is named partly as a nod to Colorado geography and partly as a statement of intent: this is not a place content with the lowest common denominator of group reformer provision. The instruction team has strong classical training backgrounds, and the programme reflects that in both the precision of its cueing and the intelligence of its sequencing. Lowry's professional and family population tends toward the health-literate, and Altitude serves this demographic well — classes challenge without intimidating, and the studio's beginner pathways are among the most thoughtfully designed in Denver.",
    address: "—",
    bestFor: "All levels, progressive reformer, strong beginner pathway",
    signatureClass: "Reformer Essentials",
    bookingTip: "New clients should start with an intro session to establish baseline; the 10-class pack offers the best flexible value",
  },
  {
    number: "04",
    name: "Club Pilates Cherry Creek North",
    neighborhood: "Cherry Creek North",
    priceLevel: "$$$",
    review: "Club Pilates Cherry Creek North is the best-performing franchise location in the Denver metro area, benefiting from a neighbourhood clientele that has both the resources to support premium fitness and the body literacy to evaluate it properly. The studio's curriculum is consistently taught, and the Cherry Creek North location has attracted an instructor team that brings genuine professionalism to the franchise format — these are teachers who care about the method, not just the memorised sequence. For Denver practitioners who want reliable, membership-supported group reformer access across a wide schedule window, this is the most practical and consistent option in the central city area.",
    address: "—",
    bestFor: "Consistent reformer programming, memberships",
    signatureClass: "Flow",
    bookingTip: "Monthly memberships are among the most financially accessible routes to regular Pilates practice in Denver; introductory offer is worth completing in full",
  },
  {
    number: "05",
    name: "Sculpt Pilates Denver",
    neighborhood: "Washington Park",
    priceLevel: "$$$",
    review: "Sculpt Pilates near Washington Park caters to one of Denver's most fitness-oriented residential populations with a contemporary reformer programme that blends classical Pilates fundamentals with functional conditioning work. The studio is clean, well-maintained, and staffed by instructors who communicate with clarity and genuine enthusiasm. The Washington Park clientele is physically active across multiple disciplines — many are runners, cyclists, or yoga practitioners who have come to Pilates specifically for complementary strength and stability work — and the studio's programming reflects a sophisticated understanding of how reformer training integrates with broader athletic lifestyles. Weekend morning classes are particularly popular and capture the neighbourhood's active social culture at its most characteristic.",
    address: "—",
    bestFor: "Active practitioners, cross-training, contemporary reformer",
    signatureClass: "Dynamic Reformer",
    bookingTip: "Weekend morning slots are extremely popular; book Sunday evening for the following weekend",
  },
  {
    number: "06",
    name: "Core Collective Pilates",
    neighborhood: "RiNo / Art District",
    priceLevel: "$$",
    review: "Core Collective Pilates in the River North Art District is Denver's most creatively positioned Pilates studio — an independent practice that has cultivated a community of artists, makers, and young professionals who value both the method and the atmosphere in which it's delivered. The studio is unpretentious and accessibly priced, with a teaching philosophy that prioritises understanding over performance and connection over competition. RiNo's mix of longtime Denverites and recent transplants has given Core Collective a clientele with diverse movement backgrounds, and the studio's beginners' programming is among the most welcoming in the city. A natural home for practitioners who find the premium boutique format aesthetically alienating but still want high-quality instruction.",
    address: "—",
    bestFor: "Beginners, community atmosphere, accessible pricing",
    signatureClass: "Reformer Foundation",
    bookingTip: "Drop-in pricing is competitive; the monthly unlimited pass is the best value in the RiNo area for regular practitioners",
  },
];

const BOOKING_TIPS = [
  { heading: "Expect to pay $28–55 per class", body: "Denver's Pilates market is meaningfully cheaper than the coastal US cities. Drop-in rates run from around $28 at community studios to $55 at premium private practices. Monthly memberships and session packs bring per-class costs to $18–30 for regular practitioners — significantly more accessible than New York or Los Angeles." },
  { heading: "Altitude genuinely affects your first sessions", body: "Denver sits at 5,280 feet above sea level. Practitioners new to altitude commonly report that their first few sessions feel harder than expected — heart rate runs higher, breath is shorter. Allow 1–2 weeks of acclimatisation before assessing your performance relative to sea-level standards." },
  { heading: "Winter weather disrupts scheduling", body: "Colorado snowstorms can affect commute times unpredictably. Studios with late-cancellation policies are worth understanding before you commit. Building buffer time into morning appointments is good practice from October through March." },
  { heading: "The outdoor culture complements Pilates well", body: "Denver's ski, trail running, and cycling communities are among Pilates's most committed converts — the method's core and spinal work is directly applicable to mountain sports performance. Studios that understand this crossover tend to produce the most relevant programming for the city's most active practitioners." },
  { heading: "Grip socks and warm layers are both useful", body: "Studio temperatures in Denver can be cool, especially in early morning winter sessions. Grip socks are universally required; a light warm layer for the first few minutes of class is practical from November through April." },
];

const NEIGHBORHOODS = [
  { name: "Cherry Creek & Cherry Creek North", description: "Denver's most design-conscious neighbourhood is home to several of the city's best Pilates practices. Higher price points, excellent instruction quality, and a wellness-invested clientele that sets a high standard for local studios." },
  { name: "The Highlands", description: "One of Denver's most active and community-minded residential districts, with a growing concentration of high-quality reformer studios. Studios here tend toward the athletic and community-focused — well-suited to the neighbourhood's trail runners and outdoor enthusiasts." },
  { name: "Washington Park & South Denver", description: "Denver's most fitness-active residential zone outside Cherry Creek supports a strong independent studio culture. Classes here attract the regulars who have moved beyond studio-hopping and want a consistent practice close to home." },
  { name: "RiNo / River North & Downtown", description: "Denver's arts and technology corridor has developed an accessible, independent Pilates culture that welcomes practitioners across the ability spectrum. Pricing is more accessible than Cherry Creek, and the atmosphere is less formal without being less serious about the work." },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in Denver. Full-toe grip socks are the standard.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "Essential for mat classes and home practice — especially useful during Colorado winter months.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard prop in many Denver classical studios. Own one for home reinforcement between sessions.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands Set",
    note: "Portable and effective for home practice — particularly useful on days when altitude or weather disrupts your studio schedule.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  { city: "Chicago", country: "United States", href: "/cities/chicago", studioCount: 6 },
  { city: "San Francisco", country: "United States", href: "/cities/san-francisco", studioCount: 6 },
  { city: "Austin", country: "United States", href: "/cities/austin", studioCount: 6 },
  { city: "Seattle", country: "United States", href: "/cities/seattle", studioCount: 6 },
];

const FURTHER_READING = [
  { title: "Pilates for Athletes", excerpt: "How elite sports professionals use Pilates to build functional strength, prevent injury, and extend their careers.", href: "/blog/pilates-for-athletes", category: "Performance", readTime: "7 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80" },
  { title: "Best Pilates Equipment for Home Practice", excerpt: "Everything you actually need to build a consistent home practice, from a quality mat to the best reformer alternatives.", href: "/blog/best-pilates-equipment-for-home-practice", category: "Equipment", readTime: "10 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Denver", "item": "https://pilatescollectiveclub.com/cities/denver" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Denver, CO",
      "description": "Curated guide to the top Pilates studios in Denver, Colorado, verified June 2026.",
      "url": "https://pilatescollectiveclub.com/cities/denver",
      "numberOfItems": 6,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Denver",
            "addressRegion": "CO",
            "addressCountry": "US",
          },
        },
      })),
    },
    {
      "@type": "Article",
      "headline": "The Best Pilates Studios in Denver, CO (2026)",
      "description": "A curated guide to the six best Pilates studios in Denver, Colorado — verified June 2026.",
      "url": "https://pilatescollectiveclub.com/cities/denver",
      "dateModified": "2026-06-01",
      "author": { "@type": "Organization", "name": "Pilates Collective Club" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function DenverPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>City Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>United States</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Denver, Colorado</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Denver's outdoor-first identity has always coexisted with a serious indoor movement culture, and its Pilates scene is a direct expression of that duality. The city's altitude, its relationship to skiing, trail running, and cycling, and the growing professional population that has arrived from both coasts have produced a market with genuine range — from classical Cherry Creek studios to community-oriented East Colfax practices. The method thrives here because it serves the active body so well. This guide covers the six studios worth your time, verified June 2026.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1546156929-a4c0ac411f47?w=1400&q=80" alt="Denver Colorado skyline with Rockies" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Denver, Colorado</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Pilates at altitude — where the active life demands intelligent movement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Studios */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Studios · Curated & Verified</p>
            <div className="space-y-8">{STUDIOS.map((s) => <StudioListing key={s.number} {...s} />)}</div>
          </div>
        </section>

        {/* Booking Tips */}
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Denver</h2>
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

        {/* Studio Gear */}
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to bring to your first class</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Denver studios require grip socks. Given Colorado winters and altitude, a mat and warm layers are also practical investments.{" "}
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

        {/* Neighbourhoods */}
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Denver</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Denver's studio quality is distributed across the city rather than concentrated in a single area. Here's where to look.</p>
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

        {/* Related Cities */}
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Related city guides</h2>
            <p className="text-sm mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Explore our guides to other cities with thriving Pilates scenes.</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">{RELATED_CITIES.map((c) => <CityCard key={c.city} {...c} />)}</div>
          </div>
        </section>

        {/* Further Reading */}
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">{FURTHER_READING.map((a) => <ArticleCard key={a.href} {...a} />)}</div>
          </div>
        </section>

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best Pilates for athletes in Denver…" />
      </main>
      <Footer />
    </>
  );
}
