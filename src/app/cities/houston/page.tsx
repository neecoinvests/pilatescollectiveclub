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
  title: "Best Pilates Studios in Houston, TX (2026) — Curated & Verified",
  description: "The best Pilates studios in Houston, Texas — from classical River Oaks practices to contemporary reformer studios in Montrose and the Heights. Six verified picks for every level.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates studios houston", "reformer pilates houston", "best pilates houston", "pilates classes houston tx", "pilates river oaks houston", "pilates montrose houston", "pilates the heights houston"],
  openGraph: {
    title: "The Best Pilates Studios in Houston, TX (2026)",
    description: "Six curated, verified Pilates studios in Houston — from River Oaks classical practices to contemporary reformer rooms in Montrose.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/houston",
    images: [{ url: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=1200&q=80", width: 1200, height: 630, alt: "Houston Texas city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Houston, TX (2026)",
    description: "Six curated Pilates studios in Houston — verified picks for every level.",
    images: ["https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/houston",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Houston Pilates",
    neighborhood: "River Oaks",
    priceLevel: "$$$$",
    review: "Houston Pilates in River Oaks is the city's most established classical practice — a studio that has operated at the intersection of serious method education and premier-tier client service for long enough to have shaped Houston's broader Pilates culture in ways that are still visible across the city's studio landscape today. The River Oaks location serves Houston's wealthiest residential community with an apparatus-complete programme that takes the classical method as its starting point and applies it with genuine intelligence rather than nostalgic rigidity. Private and semi-private sessions are the primary format, and the teaching team has the depth of training and experience to justify the investment. For Houston practitioners who have spent time at serious studios in New York, LA, or London and want something comparable at home — this is the closest equivalent.",
    address: "—",
    bestFor: "Classical full apparatus, advanced practitioners, River Oaks clientele",
    signatureClass: "Classical Reformer & Apparatus",
    bookingTip: "New clients need an intake assessment; the studio pairs clients with instructors carefully — the matching process adds value worth respecting",
  },
  {
    number: "02",
    name: "Montrose Pilates",
    neighborhood: "Montrose",
    priceLevel: "$$$",
    review: "Montrose Pilates has built one of Houston's most respected community-oriented practices in one of the city's most culturally diverse and health-aware neighbourhoods. The studio's approach is contemporary and inclusive — challenging for the fit, accessible for the new, and genuinely attentive to the range of physical backgrounds that Montrose's eclectic population brings through the door. The reformer programme is intelligently sequenced and delivered by a teaching team that combines classical training with functional movement knowledge, producing sessions that feel educationally rich as well as physically effective. The Montrose community has adopted the studio with the kind of loyalty that sustains genuinely good small businesses, and the atmosphere reflects a practice that has been earned rather than marketed into existence.",
    address: "—",
    bestFor: "All levels, community atmosphere, diverse clientele",
    signatureClass: "Reformer Flow",
    bookingTip: "Weekend morning classes are extremely popular; book by mid-week for the following weekend's prime slots",
  },
  {
    number: "03",
    name: "Equilibrium Pilates Houston",
    neighborhood: "Upper Kirby",
    priceLevel: "$$$",
    review: "Equilibrium Pilates in Upper Kirby takes its name seriously — the studio is designed around the conviction that the method's deepest value lies in its capacity to bring the body into genuine physical and neurological balance rather than simply aesthetic conditioning. The teaching team has strong rehabilitation and movement therapy backgrounds, and the studio's programming reflects this in the quality of its corrective work and its ability to serve clients with complex musculoskeletal histories. Upper Kirby's professional and medical community has found in Equilibrium a practice that speaks their language — evidence-informed, precisely delivered, and invested in outcomes rather than optics. Particularly strong for post-surgical clients, those managing chronic pain, and practitioners who want Pilates integrated with a broader rehabilitation programme.",
    address: "—",
    bestFor: "Rehabilitation, therapeutic Pilates, medical community",
    signatureClass: "Therapeutic Reformer",
    bookingTip: "Rehabilitation clients should request an extended intake session; the clinical assessment takes additional time but directly improves programme quality",
  },
  {
    number: "04",
    name: "The Heights Pilates Studio",
    neighborhood: "The Heights",
    priceLevel: "$$$",
    review: "The Heights Pilates Studio serves one of Houston's most rapidly evolving residential neighbourhoods with a reformer programme that reflects the area's distinctive character: active, family-oriented, and invested in quality of life in ways that go beyond surface-level wellness. The studio has become a genuine neighbourhood anchor — the kind of place where regulars know each other, instructors know their clients' bodies, and the practice is woven into the rhythm of daily life rather than scheduled as an occasional fitness luxury. Teaching quality is consistently high, with particular strengths in prenatal and postnatal programming that serves The Heights' large young-family population. The pricing is fair and the atmosphere is one of the warmest in Houston's broader studio market.",
    address: "—",
    bestFor: "All levels, prenatal & postnatal, neighbourhood community",
    signatureClass: "Reformer Essentials",
    bookingTip: "Prenatal classes are in high demand — book 2–3 weeks ahead; the studio also offers postnatal return-to-movement packages",
  },
  {
    number: "05",
    name: "Club Pilates River Oaks",
    neighborhood: "River Oaks / West University",
    priceLevel: "$$$",
    review: "Club Pilates River Oaks serves Houston's most wellness-invested residential corridor with a franchise reformer programme that is among the best-delivered in the Texas market. The River Oaks and West University demographic — established professionals, medical families, and long-term Houston residents with high wellness awareness — has attracted an instructor team that brings genuine competence and engagement to the Club Pilates curriculum. The studio runs a wide schedule window with sufficient class density to accommodate the varied timetables of Houston's professional class, and the membership structure makes regular attendance financially practical without requiring the investment of a private studio. A reliable, well-managed option for practitioners who want consistent group reformer access in this part of the city.",
    address: "—",
    bestFor: "Consistent reformer programming, memberships, West University convenience",
    signatureClass: "Flow",
    bookingTip: "Monthly memberships cut per-class cost significantly for regular practitioners; the intro offer covers enough class types to make an informed decision",
  },
  {
    number: "06",
    name: "East End Movement",
    neighborhood: "East End / EaDo",
    priceLevel: "$$",
    review: "East End Movement in Houston's East End and East Downtown corridor is one of the city's most interesting independent studios — a practice that has committed to serving a historically underserved part of Houston with quality Pilates instruction at pricing that reflects the neighbourhood's economic diversity. The teaching is grounded, thoughtful, and genuinely attentive to beginners — the studio's pathways for new practitioners are among the most carefully designed in the Houston market. The East End's growing creative and professional community has made East End Movement one of the city's fastest-growing independent studios, and the atmosphere is one of genuine welcome rather than the performative inclusivity that characterises many franchise offerings. Worth the drive for practitioners based anywhere in Houston who want to experience one of the city's most authentic independent practices.",
    address: "—",
    bestFor: "Beginners, accessible pricing, East End community",
    signatureClass: "Reformer Foundation",
    bookingTip: "Drop-in rates are among the most accessible in Houston; the monthly unlimited pass is exceptional value for East End and EaDo residents",
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
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "Essential for mat classes and home practice during Houston's long, hot summers.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in Houston's classical and therapeutic studios. Supports at-home practice between studio sessions.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands Set",
    note: "Portable and practical for home practice on days when Houston traffic or heat makes the studio commute impractical.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
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
      "description": "Curated guide to the top Pilates studios in Houston, Texas, verified June 2026.",
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
      "description": "A curated guide to the six best Pilates studios in Houston, Texas — verified June 2026.",
      "url": "https://pilatescollectiveclub.com/cities/houston",
      "dateModified": "2026-06-01",
      "author": { "@type": "Organization", "name": "Pilates Collective Club" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function HoustonPage() {
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
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Houston, Texas</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Houston is the United States&apos; fourth-largest city and one of its most underrated Pilates markets. The combination of the world&apos;s largest medical complex, a wealthy international professional class, and a strong performing arts scene has produced a studio landscape with unusual range and genuine depth — from classical River Oaks practices that serve the city&apos;s most discerning practitioners to community-oriented East End studios built on honest pricing and serious instruction. The city&apos;s heat makes movement practice more important, not less. This guide covers the six studios worth your time, verified June 2026.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=1400&q=80" alt="Houston Texas skyline" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Houston, Texas</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>America&apos;s most international city — with a Pilates scene to match</p>
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

        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
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
