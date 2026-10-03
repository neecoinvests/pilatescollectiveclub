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
  title: "Best Pilates Studios in Nashville, TN (2026) — Curated Guide",
  description: "The best Pilates studios in Nashville — from Green Hills reformer and Lagree studios to classical practices in The Nations and East Nashville. Six verified picks, 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates nashville", "reformer pilates nashville", "best pilates studios nashville tn", "pilates studio nashville", "pilates classes nashville", "green hills pilates", "12 south pilates", "pilates tennessee", "best reformer pilates nashville", "east nashville pilates"],
  openGraph: {
    title: "Best Pilates Studios in Nashville, TN (2026)",
    description: "Six curated Pilates studios in Nashville — Green Hills, the Gulch and East Nashville picks. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/nashville",
    images: [{ url: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=1200&q=80", width: 1200, height: 630, alt: "Nashville Tennessee city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Nashville (2026)",
    description: "Six curated Pilates studios in Nashville — verified picks for every level.",
    images: ["https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/nashville",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "SESSION Pilates — Green Hills",
    neighborhood: "Green Hills",
    priceLevel: "$$$",
    review: "SESSION Pilates in Green Hills runs a 50-minute, music-synced reformer class on Balanced Body Allegro 2 machines, capped at 15 spots — beat-driven, with quick transitions between exercises.",
    caveat: "contemporary, music-driven reformer — not classical technique.",
    address: "2109 Abbott Martin Rd, Nashville, TN 37215",
    bestFor: "Upbeat, music-synced reformer in Green Hills",
    signatureClass: "SESSION Reformer (50 min)",
    bookingTip: "With 15 spots per class, book prime-time slots a few days ahead.",
  },
  {
    number: "02",
    name: "Frame Pilates",
    neighborhood: "Hillsboro Pike / Green Hills",
    priceLevel: "$$",
    review: "Frame Pilates on Hillsboro Pike specialises in classical reformer Pilates and offers one of the friendliest entry prices in town — an intro offer of three classes for $49.",
    caveat: "we could not confirm the exact suite address independently — check the studio's website for directions.",
    address: "—",
    bestFor: "Classical reformer with an affordable intro offer",
    signatureClass: "Classical Reformer",
    bookingTip: "Start with the three-class intro offer before buying a pack.",
  },
  {
    number: "03",
    name: "Somos Pilates",
    neighborhood: "The Nations · East Nashville",
    priceLevel: "$$",
    review: "Somos Pilates has two studios, in The Nations and East Nashville, and anchors the classical-roots end of Nashville's Pilates scene, with explicit specialisations in orthopaedic, autoimmune and prenatal clients.",
    caveat: "a method-led approach — slower and more precise than a sculpt class.",
    address: "—",
    bestFor: "Classical Pilates for orthopaedic, autoimmune and prenatal clients",
    signatureClass: "Classical Reformer",
    bookingTip: "Tell the studio about any condition when booking so they can place you correctly.",
  },
  {
    number: "04",
    name: "Lagree Nashville",
    neighborhood: "Green Hills",
    priceLevel: "$$$",
    review: "Lagree Nashville is Green Hills' dedicated Megaformer studio and has become the city's benchmark for Lagree training, drawing clients from across the metro.",
    caveat: "Lagree is not traditional Pilates — slower, heavier and sweatier.",
    address: "—",
    bestFor: "Lagree on the Megaformer",
    signatureClass: "Lagree Megaformer class",
    bookingTip: "New to Lagree? Tell the instructor — the first class has a learning curve.",
  },
  {
    number: "05",
    name: "Club Pilates North Gulch",
    neighborhood: "North Gulch",
    priceLevel: "$$",
    review: "Club Pilates North Gulch on 11th Avenue North is the brand's most central Nashville studio, convenient for the Gulch, Midtown and downtown, with levelled group reformer classes.",
    caveat: "a franchise format — consistent, but less personalised than an independent studio.",
    address: "402 11th Ave N, Nashville, TN 37203",
    bestFor: "Central reformer classes near the Gulch",
    signatureClass: "Reformer Flow",
    bookingTip: "Lunchtime classes fill with the downtown crowd — book the night before.",
  },
  {
    number: "06",
    name: "Club Pilates Belle Meade",
    neighborhood: "Belle Meade",
    priceLevel: "$$",
    review: "Club Pilates Belle Meade on Harding Pike serves west Nashville — Belle Meade, West Meade and Sylvan Park — with the brand's levelled group reformer programme.",
    caveat: "a franchise studio — reliable structure, less individual programming.",
    address: "4326 Harding Pike, Ste 105, Nashville, TN 37205",
    bestFor: "West Nashville residents wanting structured reformer classes",
    signatureClass: "Reformer Flow",
    bookingTip: "Use the intro offer before committing to a membership.",
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
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "Useful for mat classes and home practice. A 6mm closed-cell mat handles Nashville's studio variety well.",
    price: "From $18",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in Nashville's classical and fusion studios. Owning one supports at-home practice between sessions.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands Set",
    note: "Fabric resistance loops extend your Pilates practice at home and are ideal for Nashville days when studio commutes are impractical.",
    price: "From $10",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
];

const HOME_REFORMERS = [
  { tag: "Budget Pick", name: "Stamina AeroPilates 287", note: "An accessible entry point to home reformer work — three bungee-cord resistance, a padded footbar and an adjustable headrest.", price: "$359", url: "https://www.amazon.com/dp/B01FMODVAE?tag=pilatescollective-20" },
  { tag: "Mid-Range Pick", name: "AeroPilates Pro XP 557", note: "AeroPilates' top-of-the-range home reformer, a step up for practitioners training several times a week.", price: "$1,330", url: "https://www.amazon.com/dp/B0012TJI8S?tag=pilatescollective-20" },
  { tag: "Buy Once", name: "Balanced Body Allegro Stretch Reformer", note: "Studio-grade and made to order — an anodised aluminium frame, nonslip standing platform and 36-inch adjustable footbar, with a longer, wider carriage for taller users.", price: "$3,710", url: "https://www.amazon.com/dp/B093R8DYC9?tag=pilatescollective-20" },
];

const RELATED_CITIES = [
  { city: "Atlanta", country: "United States", href: "/cities/atlanta", studioCount: 6 },
  { city: "Austin", country: "United States", href: "/cities/austin", studioCount: 6 },
  { city: "Chicago", country: "United States", href: "/cities/chicago", studioCount: 6 },
  { city: "Miami", country: "United States", href: "/cities/miami", studioCount: 6 },
];

const FURTHER_READING = [
  { title: "Classical vs Contemporary Pilates", excerpt: "The split between Joseph Pilates' original system and modern interpretations — what it means for your practice.", href: "/blog/classical-vs-contemporary-pilates", category: "Method", readTime: "8 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=1200&q=80" },
  { title: "How to Build a Consistent Pilates Practice", excerpt: "The habits, scheduling strategies, and mindset shifts that separate occasional students from committed practitioners.", href: "/blog/how-to-build-a-consistent-pilates-practice", category: "Guide", readTime: "7 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=1200&q=80" },
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
      "description": "Curated guide to the top Pilates studios in Nashville, Tennessee, verified October 2026.",
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
      "description": "A curated guide to the six best Pilates studios in Nashville, Tennessee — verified October 2026.",
      "url": "https://pilatescollectiveclub.com/cities/nashville",
      "dateModified": "2026-10-03",
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
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Nashville&apos;s Pilates scene is one of the most interesting in the American South — shaped by the city&apos;s unusual mix of performing arts culture, an influx of coastal transplants, and a healthcare industry that has seeded the market with movement-literate practitioners and clients alike. The city&apos;s rapid growth has produced a studio landscape that spans classical Green Hills practices and contemporary 12 South boutiques to community-oriented East Nashville studios. The range is genuine and the quality has risen sharply in recent years. This guide covers the six studios worth your time, verified October 2026.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/nashville.jpg" alt="Nashville Tennessee skyline" fill unoptimized className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Nashville, Tennessee</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Performing arts roots, rapid growth, rising standards</p>
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

        <section className="px-6 py-20">
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best reformer Pilates in Nashville…" />
      </main>
      <Footer />
    </>
  );
}
