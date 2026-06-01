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
  title: "Best Pilates Studios in Atlanta, GA (2026) — Curated & Verified",
  description: "The best Pilates studios in Atlanta, Georgia — from classical Buckhead practices to athletic reformer studios in Midtown and Decatur. Six verified picks for every level.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates studios atlanta", "reformer pilates atlanta", "best pilates atlanta", "pilates classes atlanta ga", "pilates buckhead atlanta", "pilates midtown atlanta", "pilates decatur ga"],
  openGraph: {
    title: "The Best Pilates Studios in Atlanta, GA (2026)",
    description: "Six curated, verified Pilates studios in Atlanta — from Buckhead classical practices to athletic reformer rooms in Midtown.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/atlanta",
    images: [{ url: "https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?w=1200&q=80", width: 1200, height: 630, alt: "Atlanta Georgia city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Atlanta, GA (2026)",
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
    name: "Atlanta Pilates",
    neighborhood: "Buckhead",
    priceLevel: "$$$$",
    review: "Atlanta Pilates in Buckhead is the studio that has defined the city's classical Pilates standard for over a decade. The practice is rooted in a direct lineage from the original method — full apparatus work taught with the precision and sequencing integrity that distinguishes genuine classical training from the group reformer market that has grown up alongside it. The Buckhead location fits the neighbourhood: polished, serious, and serving a clientele that has the sophistication to recognise quality and the disposable income to invest in it. Private and semi-private sessions are the studio's primary format, which allows for the kind of longitudinal programme development that transforms the body rather than merely maintaining it. For practitioners who have exhausted what the boutique fitness market can offer, this is the correct Atlanta address.",
    address: "—",
    bestFor: "Classical full apparatus, advanced practitioners, serious beginners",
    signatureClass: "Classical Reformer & Cadillac",
    bookingTip: "New clients require an initial consultation; the intake process is thorough and worth completing in full before your first session",
  },
  {
    number: "02",
    name: "Form Pilates Studio",
    neighborhood: "Midtown",
    priceLevel: "$$$",
    review: "Form Pilates in Midtown Atlanta occupies a position in the city's studio market that is both geographically and philosophically central: accessible enough to draw from across the metropolitan area, serious enough to retain practitioners who value progression over novelty. The reformer programme is contemporary and physically demanding, with small-group class sizes that allow instructors to deliver meaningful individual attention within a shared session. The Midtown clientele spans the city's creative and professional communities — advertising executives, architects, tech workers, and performing artists — and the studio's programming reflects a sophisticated understanding of the diverse physical histories this group brings. Instructors here are well-trained and genuinely enthusiastic about the method, which translates into sessions that feel both rigorous and educationally rich.",
    address: "—",
    bestFor: "All levels, contemporary reformer, Midtown convenience",
    signatureClass: "Reformer Flow",
    bookingTip: "Weekday morning and lunchtime slots fill fastest; book at least 5 days ahead for prime times",
  },
  {
    number: "03",
    name: "The Pilates Room",
    neighborhood: "Virginia-Highland",
    priceLevel: "$$$",
    review: "The Pilates Room in Virginia-Highland has built one of Atlanta's most loyal studio communities through a combination of excellent instruction, genuine neighbourhood integration, and a teaching philosophy that prioritises understanding over spectacle. The studio serves the Inman Park and Virginia-Highland residential corridor with a programme that takes both beginners and advanced practitioners seriously — a balance that many studios claim but few actually achieve. Classes are appropriately small, the sequencing is intelligent, and the instructors share a commitment to the kind of precise, anatomically grounded cueing that distinguishes this studio from the more volume-focused boutiques elsewhere in the city. The neighbourhood atmosphere is warm and community-minded, which makes regular attendance feel like a genuine life habit rather than a transactional fitness purchase.",
    address: "—",
    bestFor: "All levels, community atmosphere, progressive reformer",
    signatureClass: "Reformer Essentials",
    bookingTip: "Weekend morning classes book out early in the week; the monthly unlimited pass offers strong value for neighbourhood regulars",
  },
  {
    number: "04",
    name: "Club Pilates Buckhead North",
    neighborhood: "Buckhead North",
    priceLevel: "$$$",
    review: "Club Pilates Buckhead North is the strongest franchise location in Atlanta's northern metro arc, serving the Sandy Springs and Buckhead boundary population with a reformer programme that is well-structured, consistently taught, and genuinely accessible without being simplistic. The studio's curriculum is delivered by a team that engages with the material thoughtfully rather than mechanically, and the Buckhead North demographic — affluent professionals and established families with high wellness awareness — has created a studio community with genuine standards. For Atlanta practitioners who want the reliability of a well-managed franchise format with a schedule dense enough to accommodate flexible working patterns, this is the most practical and consistently high-quality option in the northern suburbs.",
    address: "—",
    bestFor: "Consistent reformer programming, memberships, northern suburbs",
    signatureClass: "Flow",
    bookingTip: "Monthly memberships are the most financially efficient route for practitioners attending 2–3 times per week; exhaust the intro offer before deciding",
  },
  {
    number: "05",
    name: "Decatur Pilates",
    neighborhood: "Decatur",
    priceLevel: "$$$",
    review: "Decatur Pilates has become the eastern Atlanta metro's most trusted movement practice — a studio that serves Decatur's progressive, health-literate community with an approach that is simultaneously rigorous and genuinely inclusive. The instruction team brings a combination of classical Pilates training and functional rehabilitation knowledge that makes the studio particularly well-suited to the diverse physical needs of an active suburban population. Sessions challenge experienced practitioners without overwhelming beginners, and the studio's progressions are clearly communicated and honestly sequenced. The Decatur community is intellectually engaged and loyal — exactly the kind of client base that attracts and retains excellent teachers over the long term. Worth the short MARTA or car journey for practitioners based in central Atlanta.",
    address: "—",
    bestFor: "All levels, rehabilitation integration, Decatur community",
    signatureClass: "Reformer & Mat",
    bookingTip: "Early morning slots are popular with the working-parent demographic; book by mid-week for the following week",
  },
  {
    number: "06",
    name: "Balanced Pilates Atlanta",
    neighborhood: "Candler Park / Little Five Points",
    priceLevel: "$$",
    review: "Balanced Pilates in the Candler Park area brings an accessible, community-oriented approach to a neighbourhood that values independence, authenticity, and honest pricing in roughly equal measure. The studio is one of Atlanta's most accessibly priced options and deliberately so — the founding philosophy holds that quality Pilates instruction should not be the exclusive province of the city's wealthiest postcodes. The teaching is grounded and clear, with a particular emphasis on making beginners feel capable rather than overwhelmed. The Candler Park and Little Five Points community is creative, health-aware, and diverse, and the studio's atmosphere reflects this: welcoming without being performatively so, and serious about the work without being intimidating about it. An excellent entry point for Atlanta practitioners who are new to the method.",
    address: "—",
    bestFor: "Beginners, accessible pricing, community atmosphere",
    signatureClass: "Reformer Fundamentals",
    bookingTip: "Drop-in rates are among the most reasonable in Atlanta; the monthly unlimited pass is excellent value for east-side practitioners",
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
