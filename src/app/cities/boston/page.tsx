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
  title: "Best Pilates Studios in Boston, MA (2026) — Curated & Verified",
  description: "The best Pilates studios in Boston, Massachusetts — from South End classical studios to Beacon Hill reformer boutiques. Six verified picks for every level and neighbourhood.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates studios boston", "reformer pilates boston", "best pilates boston", "pilates classes boston ma", "pilates south end boston", "pilates back bay boston", "pilates beacon hill"],
  openGraph: {
    title: "The Best Pilates Studios in Boston, MA (2026)",
    description: "Six curated, verified Pilates studios in Boston — from South End classical practices to high-performance reformer rooms in Back Bay.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/boston",
    images: [{ url: "https://images.unsplash.com/photo-1501979376754-e1b564b25ed6?w=1200&q=80", width: 1200, height: 630, alt: "Boston Massachusetts city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Boston, MA (2026)",
    description: "Six curated Pilates studios in Boston — verified picks for every level.",
    images: ["https://images.unsplash.com/photo-1501979376754-e1b564b25ed6?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/boston",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Boston Body Pilates",
    neighborhood: "South End",
    priceLevel: "$$$$",
    review: "Boston Body Pilates in the South End is the city's most widely respected classical studio — a practice built on genuine depth of knowledge and a commitment to the method that predates the boutique reformer wave by years. The South End location fits the neighbourhood perfectly: considered, intellectually serious, and inhabited by a clientele that understands the difference between fitness and movement education. The studio runs private and semi-private sessions across the full apparatus suite — Reformer, Cadillac, Chair, and Ladder Barrel — and the teaching is rooted in a lineage that values precision over novelty. Instructors here are typically among the most experienced working in Boston, having trained for years before taking on paying clients. For serious practitioners and rehabilitation clients, this is the natural first address in the city.",
    address: "—",
    bestFor: "Classical apparatus, rehabilitation, advanced practitioners",
    signatureClass: "Classical Reformer & Cadillac",
    bookingTip: "New clients require an initial consultation; the waitlist for preferred instructors moves slowly — join early",
  },
  {
    number: "02",
    name: "The Movement Space",
    neighborhood: "Back Bay",
    priceLevel: "$$$",
    review: "The Movement Space in Back Bay has positioned itself as Boston's most intelligently designed contemporary studio — a place where the classical Pilates foundation is honoured but the programming is updated by genuine engagement with movement science and functional rehabilitation research. The instruction team has an unusually strong cross-disciplinary background: several instructors hold dual certifications in Pilates and physical therapy or athletic training, which gives the corrective work an authority that generalist boutiques can't match. The Back Bay location serves a professional clientele — lawyers, doctors, academics, and financial services workers — who have high standards and the body literacy to recognise when those standards are being met. Group reformer classes are small, well-paced, and challenging without being reckless.",
    address: "—",
    bestFor: "Contemporary reformer, functional rehabilitation",
    signatureClass: "Reformer Flow",
    bookingTip: "Weekday morning and lunchtime slots fill fastest with the professional clientele; book 5–6 days ahead",
  },
  {
    number: "03",
    name: "Beacon Hill Pilates",
    neighborhood: "Beacon Hill",
    priceLevel: "$$$$",
    review: "Beacon Hill Pilates occupies a narrow townhouse space that is so quintessentially Boston — old brick, quiet elegance, and residents who know exactly what they want and expect to get it. The studio is boutique in the truest sense: small, personal, and entirely focused on quality over volume. Sessions are predominantly private and semi-private, and the intimacy of the format allows for the kind of progressive, longitudinal tracking of individual progress that group classes fundamentally cannot provide. The Beacon Hill clientele — an affluent mix of established professionals, academics, and old Boston families — values discretion as much as quality, and the studio delivers both. For practitioners who have been disappointed by what group reformer can offer and want something fundamentally more serious, this is the correct conversation.",
    address: "—",
    bestFor: "Private sessions, premium boutique experience",
    signatureClass: "Private Apparatus Session",
    bookingTip: "Availability is very limited; contact the studio directly and be patient — the quality justifies the wait",
  },
  {
    number: "04",
    name: "Club Pilates Cambridge",
    neighborhood: "Cambridge",
    priceLevel: "$$$",
    review: "Club Pilates Cambridge serves the dense academic and young professional population that surrounds Harvard Square with a reformer programme that is consistent, accessible, and well-run. The franchise format's emphasis on standardised curriculum means you know exactly what you're getting: a competent group reformer experience taught by instructors who have completed the Club Pilates training programme and are supervised within a quality framework. For Cambridge practitioners who want regularity — a standing weekly slot at a reliable studio — this is the most practical and financially accessible option in the immediate area. The membership structure is well-designed for practitioners who plan to attend 2–3 times per week, bringing per-session costs into the range of a standard gym membership.",
    address: "—",
    bestFor: "Consistent reformer programming, memberships",
    signatureClass: "Flow",
    bookingTip: "Monthly unlimited membership is the best value proposition for regulars; try the intro offer before committing",
  },
  {
    number: "05",
    name: "Exhale Boston",
    neighborhood: "Back Bay / Newbury Street",
    priceLevel: "$$$",
    review: "Exhale on Newbury Street occupies a position in Boston's fitness landscape that is partly about the location and partly about the format: a spa-meets-studio concept that integrates reformer Pilates, barre, and yoga under one roof with a level of environmental design that appeals to practitioners who value the full sensory experience of where they work out. The Pilates offering is contemporary and fitness-focused — barre and reformer crossover classes are a studio strength — and the instructors are skilled at keeping energy high across mixed-ability groups. Newbury Street's clientele is fashion-adjacent and wellness-invested, and Exhale serves them with a polish that makes the experience feel premium even within a group format. Best for practitioners who enjoy variety and a social atmosphere alongside their movement work.",
    address: "—",
    bestFor: "Reformer-barre fusion, spa-studio experience",
    signatureClass: "Core Fusion Barre",
    bookingTip: "Book evening classes 4–5 days ahead; intro packages are generous and worth exhausting before buying a membership",
  },
  {
    number: "06",
    name: "Balanced Pilates Boston",
    neighborhood: "Jamaica Plain",
    priceLevel: "$$",
    review: "Balanced Pilates in Jamaica Plain is the kind of studio that Boston's wider Pilates community quietly values — a neighbourhood anchor that delivers excellent instruction at prices that don't require a Back Bay salary to sustain. The studio serves Jamaica Plain's diverse, community-focused population with a programme that takes beginners seriously and challenges advanced practitioners without condescension. Mat and reformer classes run throughout the week, and the teaching is grounded in classical principles communicated in accessible language. The studio has built a genuinely loyal community of practitioners who have trained here for years — a reliable indicator of sustained quality in a market where novelty is more easily monetised than consistency.",
    address: "—",
    bestFor: "Accessible pricing, all levels, neighbourhood community",
    signatureClass: "Reformer Fundamentals",
    bookingTip: "Drop-in pricing is among the fairest in Boston; the monthly package offers excellent value for neighbourhood practitioners",
  },
];

const BOOKING_TIPS = [
  { heading: "Expect to pay $30–60 per class", body: "Boston's reformer market sits at the upper-middle end nationally. Drop-in rates run from $30 at community and neighbourhood studios to $60+ at private boutiques. Monthly memberships and session packs bring the per-class cost down to $22–38 for regular practitioners." },
  { heading: "The university calendar affects class availability", body: "Boston's enormous student population thins out in summer and peaks in September and January. Studio class density and pricing can shift with the academic calendar — an advantage for year-round practitioners willing to experiment with new timeslots over the summer months." },
  { heading: "Cambridge is its own market", body: "The Cambridge studio scene has its own distinct character — more academic in atmosphere, slightly more accessible in pricing, and served by a community of instructors who are often associated with the arts and performance scene connected to Harvard and MIT." },
  { heading: "Cold winters reward advance planning", body: "Boston's January and February winters can disrupt scheduling discipline. Studios report higher attendance consistency among practitioners with standing bookings — commit in advance, especially for early morning slots." },
  { heading: "Grip socks are non-negotiable", body: "Every reformer studio in Boston requires grip socks. The studios that sell them at the door price them at a meaningful premium over Amazon or specialty retailers. Buying a quality pair before your first class is a straightforward saving." },
];

const NEIGHBORHOODS = [
  { name: "South End & Back Bay", description: "Boston's two premier lifestyle districts house the city's most design-conscious and professionally staffed Pilates studios. Higher price points are matched by correspondingly strong instruction quality and beautiful spaces." },
  { name: "Beacon Hill & Downtown", description: "The city's historic heart supports a small number of genuinely exceptional boutique practices serving Boston's most discerning practitioners. Studios here are typically small, appointment-based, and deeply focused on individual progression." },
  { name: "Cambridge", description: "The academic community around Harvard and MIT has produced a studio scene that values intellectual rigour and accessible pricing in roughly equal measure. Worth exploring for practitioners who want quality without Back Bay price points." },
  { name: "Jamaica Plain & South Boston", description: "These residential neighbourhoods have developed increasingly strong independent studio cultures in recent years — community-focused, honestly priced, and well-taught by instructors who chose neighbourhood over prestige." },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in Boston. Full-toe grip socks are standard across the city.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "A quality 6mm mat is essential for mat classes and home practice during Boston's long winters.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in many Boston classical studios. Own one for home work between sessions.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Foam Roller",
    note: "Essential for pre-class warm-up and post-class fascial release — especially useful in winter.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands Set",
    note: "Fabric-loop bands extend your studio Pilates practice on days you can't make it to class.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 6 },
  { city: "Washington DC", country: "United States", href: "/cities/washington-dc", studioCount: 6 },
  { city: "Chicago", country: "United States", href: "/cities/chicago", studioCount: 6 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 6 },
];

const FURTHER_READING = [
  { title: "Classical vs Contemporary Pilates", excerpt: "The split between Joseph Pilates' original system and modern interpretations — what it means for your practice.", href: "/blog/classical-vs-contemporary-pilates", category: "Method", readTime: "8 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80" },
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
        { "@type": "ListItem", "position": 3, "name": "Boston", "item": "https://pilatescollectiveclub.com/cities/boston" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Boston, MA",
      "description": "Curated guide to the top Pilates studios in Boston, Massachusetts, verified June 2026.",
      "url": "https://pilatescollectiveclub.com/cities/boston",
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
            "addressLocality": "Boston",
            "addressRegion": "MA",
            "addressCountry": "US",
          },
        },
      })),
    },
    {
      "@type": "Article",
      "headline": "The Best Pilates Studios in Boston, MA (2026)",
      "description": "A curated guide to the six best Pilates studios in Boston, Massachusetts — verified June 2026.",
      "url": "https://pilatescollectiveclub.com/cities/boston",
      "dateModified": "2026-06-01",
      "author": { "@type": "Organization", "name": "Pilates Collective Club" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function BostonPage() {
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
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Boston, Massachusetts</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Boston's Pilates scene reflects the city itself: historically grounded, intellectually demanding, and quietly excellent in ways that don't require announcement. The concentration of hospitals, universities, and healthcare professionals has produced a particularly strong culture of anatomically literate movement practice — instructors here tend to have more cross-disciplinary training than their counterparts in purely fashion-forward markets. From the South End's classical studios to Cambridge's academic-adjacent practices, the city offers range without compromise. These are the six studios worth your time, verified June 2026.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1501979376754-e1b564b25ed6?w=1400&q=80" alt="Boston Massachusetts skyline" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Boston, Massachusetts</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Anatomically serious, historically grounded, quietly excellent</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Boston</h2>
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
              Boston studios require grip socks and appreciate a mat for mat-based work. Our top picks, all available on Amazon.{" "}
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Boston</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Boston's compact geography means neighbourhood choice matters more for commute time than studio quality. Here's where to look.</p>
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best classical Pilates in Boston…" />
      </main>
      <Footer />
    </>
  );
}
