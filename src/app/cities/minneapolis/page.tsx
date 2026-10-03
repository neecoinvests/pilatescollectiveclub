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
  title: "Best Pilates Studios in Minneapolis, MN (2026) — Curated Guide",
  description: "The best Pilates studios in Minneapolis — Lagree and reformer studios in Uptown, the lakes, the southwest suburbs and St Paul. Six verified picks for every level, 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates minneapolis", "reformer pilates minneapolis", "best pilates studios minneapolis", "pilates studio minneapolis mn", "pilates classes minneapolis", "uptown pilates minneapolis", "edina pilates mn", "pilates minnesota", "best reformer pilates minneapolis"],
  openGraph: {
    title: "Best Pilates Studios in Minneapolis, MN (2026)",
    description: "Six curated Pilates studios in Minneapolis — Uptown and Edina reformer boutiques. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/minneapolis",
    images: [{ url: "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=1200&q=80", width: 1200, height: 630, alt: "Minneapolis Minnesota city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Minneapolis (2026)",
    description: "Six curated Pilates studios in Minneapolis — verified picks for every level.",
    images: ["https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=1200&q=80"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/minneapolis" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Lagree Minneapolis",
    neighborhood: "Uptown",
    priceLevel: "$$$",
    review: "Lagree Minneapolis in Uptown is one of the most-reviewed studios in the Twin Cities on ClassPass, rated 4.9 from more than 18,000 reviews. Its 45-minute classes combine slow, high-tension sequences on the Megaformer — the intense end of the reformer spectrum.",
    caveat: "this is Lagree, not traditional Pilates — slower, heavier and much sweatier.",
    address: "—",
    bestFor: "High-intensity Lagree in Uptown",
    signatureClass: "Lagree (45 min)",
    bookingTip: "New to Lagree? Take a beginner class first — the machine has a learning curve.",
  },
  {
    number: "02",
    name: "Club Pilates — West Lake",
    neighborhood: "West Lake / Bde Maka Ska",
    priceLevel: "$$$",
    review: "Club Pilates' West Lake Street studio serves Uptown, Linden Hills and the Bde Maka Ska area with the brand's levelled group reformer system and a wide daily schedule.",
    caveat: "a franchise format — consistent, but less personalised than an independent studio.",
    address: "3200 W Lake St, Minneapolis, MN 55416",
    bestFor: "Structured reformer classes near the lakes",
    signatureClass: "Reformer Flow",
    bookingTip: "Weekend mornings fill early in the week — book by Tuesday.",
  },
  {
    number: "03",
    name: "Sunna",
    neighborhood: "Marcy-Holmes / St. Anthony Main",
    priceLevel: "$$",
    review: "Sunna on 2nd Street SE offers Pilates mat classes and is rated 4.9 from more than 2,500 reviews on ClassPass, a strong option just across the river from downtown.",
    caveat: "mat-focused — choose a reformer studio if machine work is your priority.",
    address: "514 2nd St SE, Minneapolis, MN 55414",
    bestFor: "Highly rated mat Pilates near downtown",
    signatureClass: "Pilates Mat",
    bookingTip: "Evening classes are popular — book a few days ahead.",
  },
  {
    number: "04",
    name: "Twin Cities Pilates",
    neighborhood: "Eagan · Edina",
    priceLevel: "$$$",
    review: "Twin Cities Pilates takes a classical reformer approach that prioritises alignment and control, and its Eagan studio leads ClassPass's Twin Cities list for low-impact, joint-friendly Pilates (4.9 from more than 5,000 reviews). It also has an Edina studio serving the southwest suburbs, and has announced a North Loop studio.",
    caveat: "its studios are suburban — check the closest location before booking.",
    address: "—",
    bestFor: "Classical, joint-friendly reformer",
    signatureClass: "Classical Reformer",
    bookingTip: "Check whether the North Loop studio has opened if you live downtown.",
  },
  {
    number: "05",
    name: "Club Pilates Eden Prairie",
    neighborhood: "Eden Prairie / Southwest Suburbs",
    priceLevel: "$$",
    review: "Club Pilates Eden Prairie on Prairie Center Drive serves Eden Prairie, Edina and Minnetonka with the brand's levelled group reformer programme.",
    caveat: "a franchise studio — reliable structure, less individual programming.",
    address: "574 Prairie Center Dr, Suite 155, Eden Prairie, MN 55344",
    bestFor: "Southwest suburban residents, membership-based training",
    signatureClass: "Reformer Flow",
    bookingTip: "Use the intro offer before committing to a membership.",
  },
  {
    number: "06",
    name: "Club Pilates Highland Park",
    neighborhood: "Highland Park, St Paul",
    priceLevel: "$$",
    review: "Club Pilates' Highland Park studio on Cleveland Avenue South is the convenient St Paul option, serving Highland Park, Mac-Groveland and the Grand Avenue area with levelled group reformer classes.",
    caveat: "a franchise format — consistent, but less personalised than an independent studio.",
    address: "757 Cleveland Ave S, Saint Paul, MN 55116",
    bestFor: "St Paul residents wanting structured reformer classes",
    signatureClass: "Reformer Flow",
    bookingTip: "Saturday mornings are the busiest — book by Wednesday.",
  },
];

const BOOKING_TIPS = [
  { heading: "Expect to pay $25–52 per class", body: "Minneapolis's Pilates market is moderately priced by US standards. Drop-in rates run from $25 at community studios to $52 at Linden Hills premium practices. Monthly memberships bring per-class costs to $18–28 for regular practitioners — making Minneapolis one of the more financially accessible major US cities for building a serious Pilates practice." },
  { heading: "Winter is when Pilates matters most", body: "Minneapolis winters are among the most severe in the continental United States. From November through March, outdoor activity is limited or eliminated for weeks at a time. Practitioners who establish a studio routine before the cold arrives maintain it through the winter; those who wait until January rarely sustain one. Book a standing slot in September." },
  { heading: "The skyway system changes your calculus", body: "Minneapolis's underground skyway network connects much of Downtown, allowing practitioners to access studios without outdoor exposure in winter. Studios in or connected to the skyway system become significantly more practical from November through March — worth factoring into neighbourhood choice." },
  { heading: "St Paul is a separate market worth considering", body: "The Twin Cities' two urban cores each have distinct studio cultures. St Paul's Highland Park, Grand Avenue and Summit Hill areas have their own studios, so St Paul residents rarely need to cross the river for a good class." },
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
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "Essential for mat classes and home practice through Minneapolis's long, brutal winters.",
    price: "From $18",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands Set",
    note: "Fabric bands are invaluable for home Pilates practice during Minneapolis's many winter days when outdoor movement is impossible.",
    price: "From $10",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in Minneapolis classical studios. Owning one supports at-home practice between sessions.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
];

const HOME_REFORMERS = [
  { tag: "Budget Pick", name: "Stamina AeroPilates 287", note: "An accessible entry point to home reformer work — three bungee-cord resistance, a padded footbar and an adjustable headrest.", price: "$359", url: "https://www.amazon.com/dp/B01FMODVAE?tag=pilatescollective-20" },
  { tag: "Mid-Range Pick", name: "AeroPilates Pro XP 557", note: "AeroPilates' top-of-the-range home reformer, a step up for practitioners training several times a week.", price: "$1,330", url: "https://www.amazon.com/dp/B0012TJI8S?tag=pilatescollective-20" },
  { tag: "Buy Once", name: "Balanced Body Allegro Stretch Reformer", note: "Studio-grade and made to order — an anodised aluminium frame, nonslip standing platform and 36-inch adjustable footbar, with a longer, wider carriage for taller users.", price: "$3,710", url: "https://www.amazon.com/dp/B093R8DYC9?tag=pilatescollective-20" },
];

const RELATED_CITIES = [
  { city: "Chicago", country: "United States", href: "/cities/chicago", studioCount: 6 },
  { city: "Denver", country: "United States", href: "/cities/denver", studioCount: 6 },
  { city: "Seattle", country: "United States", href: "/cities/seattle", studioCount: 6 },
  { city: "Boston", country: "United States", href: "/cities/boston", studioCount: 6 },
];

const FURTHER_READING = [
  { title: "How to Build a Consistent Pilates Practice", excerpt: "The habits, scheduling strategies, and mindset shifts that separate occasional students from committed practitioners.", href: "/blog/how-to-build-a-consistent-pilates-practice", category: "Guide", readTime: "7 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=1200&q=80" },
  { title: "Best Pilates Equipment for Home Practice", excerpt: "Everything you actually need to build a consistent home practice — especially useful for Minneapolis winters.", href: "/blog/best-pilates-equipment-for-home-practice", category: "Equipment", readTime: "10 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=1200&q=80" },
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
    { "@type": "Article", "headline": "The Best Pilates Studios in Minneapolis, MN (2026)", "url": "https://pilatescollectiveclub.com/cities/minneapolis", "dateModified": "2026-10-03", "author": { "@type": "Organization", "name": "Pilates Collective Club" }, "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" } },
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
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Minneapolis has one of the most underrated Pilates scenes in the United States — shaped by a population that takes its physical life seriously through long winters, a strong performing arts culture anchored by the Guthrie Theater and Minnesota Ballet, and a professional class with the health literacy to value movement education over fitness entertainment. The studio landscape spans classical Linden Hills practices, vibrant Uptown independents, and accessible Downtown studios within a compact, walkable city. This guide covers the six studios worth your time, verified October 2026.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/minneapolis.jpg" alt="Minneapolis Minnesota skyline" fill unoptimized className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Minneapolis, Minnesota</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Serious movement culture in America&apos;s most underrated Pilates city</p>
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

        <section className="px-6 py-20">
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best classical Pilates in Minneapolis…" />
      </main>
      <Footer />
    </>
  );
}
