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
  title: "Best Pilates Studios in Washington DC (2026) — Curated & Verified",
  description: "The best Pilates studios in Washington DC — from Georgetown classical practices to Capitol Hill reformer boutiques. Six verified picks across DC, Arlington, and Bethesda.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates studios washington dc", "reformer pilates dc", "best pilates washington dc", "pilates classes dc", "pilates georgetown dc", "pilates capitol hill dc", "pilates bethesda maryland", "pilates arlington virginia"],
  openGraph: {
    title: "The Best Pilates Studios in Washington DC (2026)",
    description: "Six curated, verified Pilates studios across Washington DC, Arlington, and Bethesda — the best picks for every level and neighbourhood.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/washington-dc",
    images: [{ url: "https://images.unsplash.com/photo-bzXCVIkZ_4M?w=1200&q=80", width: 1200, height: 630, alt: "Washington DC city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Washington DC (2026)",
    description: "Six curated Pilates studios in Washington DC — verified picks for every level.",
    images: ["https://images.unsplash.com/photo-bzXCVIkZ_4M?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/washington-dc",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "District Pilates",
    neighborhood: "Shaw",
    priceLevel: "$$$",
    review: "District Pilates at 1302 9th Street NW is a boutique contemporary studio with two DC locations — Shaw and Petworth — with consistent strong ratings on Yelp. Instructors are widely praised for tailoring sessions to whoever is in the room — from beginners to prenatal clients to experienced practitioners — while still delivering a demanding workout. Class sizes are intentionally small so instructors can provide focused corrections throughout, which is exactly why the clientele keeps coming back.",
    address: "1302 9th St NW, Washington, DC 20001",
    bestFor: "Contemporary reformer Pilates; small intentional classes; diverse clientele",
    signatureClass: "Reformer Group",
    bookingTip: "Morning and evening classes fill daily — the studio recommends booking the moment the schedule opens to secure preferred time slots.",
  },
  {
    number: "02",
    name: "Fuse Pilates",
    neighborhood: "Logan Circle / U Street Corridor",
    priceLevel: "$$$",
    review: "Named Best Pilates Studio in DC in 2016 and 2017, Fuse Pilates at 1401 14th Street NW is one of the most distinctive studios in the city — home of the Fuse Ladder workout, named one of the most innovative fitness programs in America. The original studio in a historic Dupont Circle townhouse established the brand; the 14th Street location serves the Logan Circle and U Street corridor. Over 100 Yelp reviews back up the studio's reputation for skilled, high-energy instructors.",
    address: "1401 14th St NW, Washington, DC 20005",
    bestFor: "Unique Fuse Ladder apparatus; creative programming",
    signatureClass: "Fuse Ladder Class",
    bookingTip: "Try the Fuse Ladder class specifically — it's unlike anything at other studios and showcases what makes Fuse worth the visit.",
  },
  {
    number: "03",
    name: "Toolbox Pilates",
    neighborhood: "NoMa",
    priceLevel: "$$",
    review: "Toolbox Pilates Art Studio at 320 Florida Avenue NE is consistently ranked among DC's top Pilates destinations. The NoMa studio blends exposed brick walls with contemporary art and warm lighting, creating an unusually beautiful and inviting workout environment. Instructors are individually named in reviews for their patient, skilled teaching that explains both form and function. A second location in Dupont Circle extends the brand's reach across the city.",
    address: "320 Florida Ave NE, Washington, DC 20002",
    bestFor: "Beautifully designed studio space; group reformer and mat classes; all levels",
    signatureClass: "Reformer Fundamentals",
    bookingTip: "For NoMa, parking is easier and transit (NoMa-Gallaudet Metro) is steps away. The Dupont Circle location is in a back alley — check directions before your first visit.",
  },
  {
    number: "04",
    name: "Excel Pilates DC",
    neighborhood: "Brookland",
    priceLevel: "$$$",
    review: "Excel Pilates DC has been operating since 1998 — making it one of the longest-running Pilates studios in the Washington area — and offers a comprehensive classical Pilates experience with reformers, Cadillacs, Wall Units, Chairs, and barrels at 3407 8th Street NE. Located in the Brookland neighborhood with easy Metro access via the Red Line, the studio draws clients from across the city who seek rigorous classical training with knowledgeable, safety-conscious instructors.",
    address: "3407 8th St NE, Washington, DC 20017",
    bestFor: "Classical Pilates on full apparatus; established since 1998",
    signatureClass: "Classical Apparatus Private",
    bookingTip: "Class passes do expire — keep an eye on your remaining sessions and rebook as soon as a series is finished.",
  },
  {
    number: "05",
    name: "Capital Pilates Studio",
    neighborhood: "Spring Valley / American University Park",
    priceLevel: "$$$",
    review: "Capital Pilates Studio at 4900 Massachusetts Avenue NW is the only Romana's Pilates-certified studio in Washington DC, with all instructors holding Romana's Pilates certification — a mark of rigorous classical training. The Spring Valley studio carries a perfect 5-star ClassPass rating and is ideal for clients who want the most authentic classical Pilates experience in the city. Small mat classes of four to eight clients and private sessions ensure genuine individualized attention.",
    address: "4900 Massachusetts Ave NW, Ste 310, Washington, DC 20016",
    bestFor: "Authentic Romana's Pilates method; classical purists; northwest DC",
    signatureClass: "Classical Mat Group",
    bookingTip: "This is a high-demand niche studio — first-time visitors should call ahead rather than relying solely on online booking, as slots go fast.",
  },
  {
    number: "06",
    name: "DC Pilates",
    neighborhood: "Downtown / Penn Quarter",
    priceLevel: "$$$",
    review: "DC Pilates is a Black-owned studio that has earned strong reviews for its knowledgeable and inclusive teaching approach. Lead instructor Alessandra is specifically mentioned across multiple reviews for being technically thorough and focused on making every student feel supported regardless of experience level. The downtown location makes it convenient for government workers and professionals with midday or after-work flexibility.",
    address: "Downtown Washington, DC 20005",
    bestFor: "Downtown DC location; Black-owned studio; inclusive instruction",
    signatureClass: "Reformer Group",
    bookingTip: "Verify the current address directly on their website before visiting — DC Pilates has moved locations in recent years.",
  },
];

const BOOKING_TIPS = [
  { heading: "Expect to pay $32–60 per class", body: "Washington DC's Pilates market is priced in line with other major US cities. Drop-in rates run from $32 at accessible studios to $60+ at premium private practices. Monthly memberships bring the per-class cost down to $22–38 for regular practitioners. Bethesda and Arlington pricing is comparable to DC proper." },
  { heading: "The city's transience affects studio character", body: "DC's political and diplomatic population turns over frequently with election cycles and administration changes. Studios that have maintained consistent quality through multiple cycles are more reliable long-term bets than newer entrants who may not have weathered the city's characteristic churn." },
  { heading: "Government schedules create consistent windows", body: "The federal government's relatively predictable work patterns — including reliable lunchtime breaks and earlier evening ends than many private sector cities — create strong class demand at 12pm and 6pm. Book those windows furthest in advance." },
  { heading: "The metro area spans two states", body: "DC's effective studio market includes Northern Virginia and Montgomery County, Maryland. Don't limit your search to the District itself — some of the best studios in the metro area are in Arlington, Bethesda, and Alexandria. The Metro makes them more accessible than the distance suggests." },
  { heading: "Grip socks are required across the metro", body: "Every reformer studio in the DC metro area — in the District, Virginia, and Maryland — requires grip socks. Buying a pair in advance from Amazon is a simple and consistent saving compared to front-desk retail prices." },
];

const NEIGHBORHOODS = [
  { name: "Georgetown & Dupont Circle", description: "DC's most internationally oriented residential areas support a sophisticated Pilates market. Studios here serve diplomatic and professional populations with high standards and strong disposable income. A natural starting point for practitioners who value quality above all." },
  { name: "Logan Circle & Columbia Heights", description: "The revitalised central neighbourhoods have developed strong independent studio cultures in the past decade — instructors who prioritise depth and specificity over volume. Often better value and more technically serious than the premium Georgetown options." },
  { name: "Bethesda & Chevy Chase (Maryland)", description: "Montgomery County's most affluent communities house several excellent studios serving the DC metro's wealthiest health-conscious population. Comparable quality to Georgetown with slightly better parking and scheduling accessibility." },
  { name: "Arlington & Alexandria (Virginia)", description: "Northern Virginia's professional population is increasingly well-served by studios that understand the particular needs of commuters, veterans, and government contractors. The Metro connection makes Virginia studios genuinely practical for practitioners based in the District." },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio across the DC metro area — DC, Virginia, and Maryland.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "A quality 6mm mat is useful for mat classes and home practice through DC's cold winters.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard prop in many DC classical and therapeutic studios. Useful for home reinforcement.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Foam Roller",
    note: "A practical pre- and post-session tool for practitioners with demanding DC commutes.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands Set",
    note: "Compact, portable, and useful for hotel-room and home practice during congressional recess and travel periods.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 6 },
  { city: "Boston", country: "United States", href: "/cities/boston", studioCount: 6 },
  { city: "Chicago", country: "United States", href: "/cities/chicago", studioCount: 6 },
  { city: "Miami", country: "United States", href: "/cities/miami", studioCount: 6 },
];

const FURTHER_READING = [
  { title: "How to Find a Good Pilates Studio", excerpt: "What to look for in a studio, and the questions worth asking before you commit to a membership.", href: "/blog/how-to-find-a-good-pilates-studio", category: "Guide", readTime: "6 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80" },
  { title: "Pilates for Back Pain: What the Research Shows", excerpt: "What Pilates can and can't do for chronic lower back pain — and which exercises have the strongest evidence.", href: "/blog/pilates-for-back-pain", category: "Health", readTime: "10 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Washington DC", "item": "https://pilatescollectiveclub.com/cities/washington-dc" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Washington DC",
      "description": "Curated guide to the top Pilates studios in Washington DC, verified June 2026.",
      "url": "https://pilatescollectiveclub.com/cities/washington-dc",
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
            "addressLocality": "Washington",
            "addressRegion": "DC",
            "addressCountry": "US",
          },
        },
      })),
    },
    {
      "@type": "Article",
      "headline": "The Best Pilates Studios in Washington DC (2026)",
      "description": "A curated guide to the six best Pilates studios across Washington DC, Arlington, and Bethesda — verified June 2026.",
      "url": "https://pilatescollectiveclub.com/cities/washington-dc",
      "dateModified": "2026-06-01",
      "author": { "@type": "Organization", "name": "Pilates Collective Club" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function WashingtonDCPage() {
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
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Washington DC</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Washington DC's Pilates scene is as serious as the city itself. The concentration of medical professionals, policy experts, military personnel, and internationally mobile professionals has produced a movement culture that values evidence, precision, and the kind of body intelligence that serves long careers and demanding schedules. From Georgetown's classical studios to the therapeutic practices of Logan Circle, and extending into Bethesda and Arlington, the metro area offers genuine depth. This guide covers the six studios that merit your time, verified June 2026.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-bzXCVIkZ_4M?w=1400&q=80" alt="Washington DC" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Washington, DC</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Precise, evidence-led, internationally influenced</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Washington DC</h2>
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
              Grip socks are required across the DC metro area. A mat and portable props support home practice through the city&apos;s demanding schedule and cold winters.{" "}
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

        {/* Neighbourhoods */}
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Washington DC</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>DC's compact geography and Metro access make the full metro area a practical search zone. Here's where to look across the District and its suburbs.</p>
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best therapeutic Pilates in Washington DC…" />
      </main>
      <Footer />
    </>
  );
}
