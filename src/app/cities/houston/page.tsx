import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Houston, TX (2026) — Curated Guide",
  description: "The best Pilates studios in Houston — from River Oaks reformer boutiques to classical method in the Heights and Midtown. Six verified picks, 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates houston", "reformer pilates houston", "best pilates studios houston tx", "pilates studio houston", "pilates classes houston", "river oaks pilates", "heights pilates houston", "pilates texas", "best reformer pilates houston", "pilates midtown houston"],
  openGraph: {
    title: "Best Pilates Studios in Houston, TX (2026)",
    description: "Six curated Pilates studios in Houston — River Oaks reformer boutiques to the Heights. Verified October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/houston",
    images: [{ url: "https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?w=1200&q=80", width: 1200, height: 630, alt: "Houston Texas city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Houston (2026)",
    description: "Six curated Pilates studios in Houston — verified picks for every level.",
    images: ["https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/houston",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "ONESWEAT Pilates",
    neighborhood: "The Heights",
    priceLevel: "$$$",
    review: "ONESWEAT Pilates on West 18th Street is one of the most-reviewed reformer studios in Houston on ClassPass, rated 4.9 from more than 15,000 reviews. That volume of consistently high ratings makes it a safe first choice in the Heights.",
    caveat: "its popularity means prime-time classes fill fast — book ahead.",
    address: "730 W 18th St, Unit A, Houston, TX 77008",
    bestFor: "Highly rated group reformer in the Heights",
    signatureClass: "Group Reformer",
    bookingTip: "Book evening and weekend classes several days ahead.",
  },
  {
    number: "02",
    name: "Revival Pilates",
    neighborhood: "Montrose",
    priceLevel: "$$$",
    review: "Revival Pilates is a boutique reformer studio on Westheimer Road in Montrose, founded by the team behind Black Swan Yoga Houston. Classes are taught by nationally accredited instructors.",
    caveat: "a reformer-only boutique — if you want classical apparatus beyond the reformer, look for a classical studio.",
    address: "1201 Westheimer Rd, Suite D, Houston, TX 77006",
    bestFor: "Boutique reformer classes in Montrose",
    signatureClass: "Reformer Pilates",
    bookingTip: "Weekend mornings are the most popular — book by midweek.",
  },
  {
    number: "03",
    name: "The Studio BE — Montrose",
    neighborhood: "Montrose",
    priceLevel: "$$",
    review: "The Studio BE is a boutique fitness studio on Westheimer Road offering reformer Pilates, mat Pilates and private sessions for all levels, along with yoga, aerial, prenatal and strength classes. It is open from 6:30am to 8pm daily.",
    caveat: "a multi-discipline studio — check that your class is reformer if that is what you want.",
    address: "888 Westheimer Rd, Ste 209, Houston, TX 77006",
    bestFor: "Reformer and prenatal Pilates with long daily hours",
    signatureClass: "Reformer Pilates",
    bookingTip: "Early and late classes make it easy to fit around a workday.",
  },
  {
    number: "04",
    name: "Method Pilates",
    neighborhood: "River Oaks District / Uptown",
    priceLevel: "$$$",
    review: "Method Pilates is next to River Oaks District on West Loop South and is rated 4.9 from more than 2,500 reviews on ClassPass, making it one of the strongest reformer options on the west side of the Loop.",
    caveat: "Galleria-area traffic is heavy at rush hour — allow extra time.",
    address: "2111 West Loop South, Unit 140, Houston, TX 77027",
    bestFor: "Reformer classes near River Oaks District and the Galleria",
    signatureClass: "Reformer Pilates",
    bookingTip: "Midday classes avoid the worst West Loop traffic.",
  },
  {
    number: "05",
    name: "DUO Coffee & Pilates",
    neighborhood: "River Oaks / Montrose",
    priceLevel: "$$",
    review: "DUO pairs a coffee bar with a reformer Pilates studio on Westheimer Road, and it is one of the most-reviewed Pilates studios in Houston on ClassPass, rated 4.9 from more than 10,000 reviews.",
    caveat: "a social, café-and-class concept — great for community, less so if you want a quiet classical session.",
    address: "2147 Westheimer Rd, Houston, TX 77098",
    bestFor: "Reformer plus coffee and community",
    signatureClass: "Reformer Pilates",
    bookingTip: "Arrive early and grab a coffee — that is half the point.",
  },
  {
    number: "06",
    name: "Club Pilates The Heights",
    neighborhood: "The Heights",
    priceLevel: "$$",
    review: "Club Pilates The Heights on North Shepherd Drive offers the brand's levelled group reformer system for all ages and fitness levels, with classes including Reformer Flow, Cardio Sculpt, Control and Restore.",
    caveat: "a franchise format — consistent, but less personalised than an independent studio.",
    address: "2401 N Shepherd Dr, Suite 120, Houston, TX 77008",
    bestFor: "Structured, levelled reformer classes in the Heights",
    signatureClass: "Reformer Flow",
    bookingTip: "Memberships cut the per-class cost if you train three or more times a week.",
  },
];

const BOOKING_TIPS = [
  { heading: "Expect to pay $28–58 per class", body: "Houston's Pilates market spans a wide range. Drop-in rates run from $28 at community studios to $58 at River Oaks premium practices. Monthly memberships bring per-class costs to $18–32 for regular practitioners. The River Oaks and West University premium is real and reflects genuinely higher instruction quality at the top end of the market." },
  { heading: "Houston's heat is the dominant scheduling variable", body: "Temperatures from May through September frequently exceed 100°F with high humidity. Houston's Pilates studios become preferred movement spaces during these months — demand for popular morning and evening slots peaks in summer. Establishing standing bookings before June is strongly advisable." },
  { heading: "The Medical Center creates unusual opportunity", body: "Houston is home to the world's largest medical complex. The resulting concentration of physicians, nurses, and healthcare professionals has created unusual demand for evidence-informed movement practice — several Houston studios are notable for their clinical and rehabilitation programming that serves this community directly." },
  { heading: "Car dependency means neighbourhood proximity is paramount", body: "Houston has almost no public transport to speak of. Choosing a studio within a practical drive of home or work — accounting for Houston's formidable traffic during peak hours — is the single most important variable for long-term practice consistency." },
  { heading: "Grip socks are required everywhere", body: "Universal across Houston's reformer studios. Buying quality grip socks from Amazon before your first class is a consistent saving over front-desk pricing at every studio in the city." },
];

const NEIGHBORHOODS = [
  { name: "River Oaks & West University", description: "Houston's wealthiest residential corridor houses the city's most premium Pilates practices. Studios here serve a discerning clientele with the resources and sophistication to support excellent instruction. The highest price points in the city are found here — matched by correspondingly strong teaching quality." },
  { name: "Montrose & Midtown", description: "Houston's most culturally diverse and arts-oriented neighbourhoods support a strong independent studio culture. Studios here tend to be community-focused, more accessibly priced, and staffed by instructors who value neighbourhood integration as much as brand presentation." },
  { name: "The Heights", description: "One of Houston's fastest-growing and most family-oriented in-town neighbourhoods has developed an excellent studio culture particularly strong in prenatal and postnatal programming. Studios here are community-anchored and increasingly sophisticated in their method offerings." },
  { name: "Upper Kirby & Greenway Plaza", description: "The professional and medical community corridor between River Oaks and Midtown supports several excellent studios with therapeutic and rehabilitation specialisms that serve Houston's large healthcare population with unusual competence." },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in Houston. Full-toe grip socks are the standard across the city.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "Essential for mat classes and home practice during Houston's long, hot summers.",
    price: "From $18",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in Houston's classical and therapeutic studios. Supports at-home practice between studio sessions.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands Set",
    note: "Portable and practical for home practice on days when Houston traffic or heat makes the studio commute impractical.",
    price: "From $10",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
];

const HOME_REFORMERS = [
  { tag: "Budget Pick", name: "Stamina AeroPilates 287", note: "An accessible entry point to home reformer work — three bungee-cord resistance, a padded footbar and an adjustable headrest.", price: "$256.49", url: "https://www.amazon.com/dp/B01FMODVAE?tag=pilatescollective-20" },
  { tag: "Mid-Range Pick", name: "AeroPilates Pro XP 557", note: "AeroPilates' top-of-the-range home reformer, a step up for practitioners training several times a week.", price: "$1,330", url: "https://www.amazon.com/dp/B0012TJI8S?tag=pilatescollective-20" },
  { tag: "Buy Once", name: "Balanced Body Allegro Stretch Reformer", note: "Studio-grade and made to order — an anodised aluminium frame, nonslip standing platform and 36-inch adjustable footbar, with a longer, wider carriage for taller users.", price: "$3,710", url: "https://www.amazon.com/dp/B093R8DYC9?tag=pilatescollective-20" },
];

const RELATED_CITIES = [
  { city: "Dallas", country: "United States", href: "/cities/dallas", studioCount: 6 },
  { city: "Austin", country: "United States", href: "/cities/austin", studioCount: 6 },
  { city: "Miami", country: "United States", href: "/cities/miami", studioCount: 6 },
  { city: "Atlanta", country: "United States", href: "/cities/atlanta", studioCount: 6 },
];

const FURTHER_READING = [
  { title: "Pilates for Back Pain: What the Research Shows", excerpt: "What Pilates can and can't do for chronic lower back pain — and the specific exercises with the strongest evidence.", href: "/blog/pilates-for-back-pain", category: "Health", readTime: "10 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80" },
  { title: "Best Pilates Equipment for Home Practice", excerpt: "Everything you actually need to build a consistent home practice during Houston summers when the studio feels far away.", href: "/blog/best-pilates-equipment-for-home-practice", category: "Equipment", readTime: "10 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Houston", "item": "https://pilatescollectiveclub.com/cities/houston" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Houston, TX",
      "description": "Curated guide to the top Pilates studios in Houston, Texas, verified October 2026.",
      "url": "https://pilatescollectiveclub.com/cities/houston",
      "numberOfItems": 6,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "addressLocality": "Houston", "addressRegion": "TX", "addressCountry": "US" },
        },
      })),
    },
    {
      "@type": "Article",
      "headline": "The Best Pilates Studios in Houston, TX (2026)",
      "description": "A curated guide to the six best Pilates studios in Houston, Texas — verified October 2026.",
      "url": "https://pilatescollectiveclub.com/cities/houston",
      "dateModified": "2026-10-03",
      "author": { "@type": "Organization", "name": "Pilates Collective Club" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function HoustonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
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
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Houston, Texas</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Houston is the United States&apos; fourth-largest city and one of its most underrated Pilates markets. The combination of the world&apos;s largest medical complex, a wealthy international professional class, and a strong performing arts scene has produced a studio landscape with unusual range and genuine depth — from classical River Oaks practices that serve the city&apos;s most discerning practitioners to community-oriented East End studios built on honest pricing and serious instruction. The city&apos;s heat makes movement practice more important, not less. This guide covers the six studios worth your time, verified October 2026.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?w=1400&q=80" alt="Houston Texas skyline" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Houston, Texas</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>America&apos;s most international city — with a Pilates scene to match</p>
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
              Houston studios require grip socks and appreciate a mat for mat-based work. Given the city&apos;s heat, home practice gear is particularly valuable.{" "}
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Houston</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Houston</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Houston&apos;s studio quality is distributed across the city. Here&apos;s how the landscape breaks down by area.</p>
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best therapeutic Pilates in Houston…" />
      </main>
      <Footer />
    </>
  );
}
