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
    images: [{ url: "https://images.unsplash.com/photo-e5ZRWZizFF4?w=1200&q=80", width: 1200, height: 630, alt: "Boston Massachusetts city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Boston, MA (2026)",
    description: "Six curated Pilates studios in Boston — verified picks for every level.",
    images: ["https://images.unsplash.com/photo-e5ZRWZizFF4?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/boston",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Endurance Pilates and Yoga",
    neighborhood: "South End",
    priceLevel: "$$$",
    review: "Endurance Pilates at 1636 Washington Street is widely regarded as one of Boston's premier classical Pilates studios, featuring a full suite of authentic Gratz apparatus — reformers, Cadillac, Wunda Chair, and barrels. Small class sizes ensure individualized attention, and instructors are among the most rigorously trained in the city. Rated 4.8 stars, the studio draws a loyal clientele of athletes, dancers, and those recovering from injury who need instruction they can genuinely trust.",
    address: "1636 Washington St, Boston, MA 02118",
    bestFor: "Classical Pilates on authentic Gratz apparatus; serious practitioners and rehab clients",
    signatureClass: "Classical Reformer Session",
    bookingTip: "Private sessions fill weeks in advance; sign up for a group mat class to get started and build a relationship with instructors first.",
  },
  {
    number: "02",
    name: "Boston Pilates Studio",
    neighborhood: "Jamaica Plain",
    priceLevel: "$$",
    review: "Established in 1998 and rated 4.8 stars on Yelp, Boston Pilates Studio at 160 Green Street is a gem of the Jamaica Plain neighborhood committed to the classical Pilates method. Classes are intentionally kept small so every participant receives personalized attention from fully certified instructors. Located steps from the Orange Line's Green Street stop, it is one of the most transit-accessible studios in Boston.",
    address: "160 Green St, Jamaica Plain, MA 02130",
    bestFor: "Classical Pilates method; small groups; neighborhood accessibility",
    signatureClass: "Classical Apparatus Group",
    bookingTip: "Walk-in slots are rare; book online ahead of time. Street parking and a lot across the street make driving easy too.",
  },
  {
    number: "03",
    name: "Boston Body Pilates — Back Bay",
    neighborhood: "Back Bay",
    priceLevel: "$$$",
    review: "Boston Body Pilates is one of the largest and most established Pilates studios in the city, with six locations across Greater Boston. Their Back Bay flagship is a welcoming, professionally run studio known for excellent instructor consistency and a clean, calm atmosphere. Instructors are praised for being patient, encouraging, and attentive to individual form. The multi-location network means that with one membership, you're covered across the metro.",
    address: "17 Arlington St, First Floor, Boston, MA 02116",
    bestFor: "Reformer group classes; all fitness levels; multi-location convenience",
    signatureClass: "Reformer Flow",
    bookingTip: "Book at least 3–5 days in advance for prime morning slots; their intro packages offer the best per-class value.",
  },
  {
    number: "04",
    name: "Boston Body Pilates — Waterfront",
    neighborhood: "Waterfront / North End",
    priceLevel: "$$$",
    review: "The Waterfront outpost of Boston Body Pilates is a bright, well-equipped studio perched on the historic Commercial Wharf near the North End. It serves the Financial District and waterfront crowds with a flexible schedule including early morning and early evening classes. The jump board reformer classes — a rarity in Boston — are especially popular with clients who want to add a cardiovascular dimension to their Pilates practice.",
    address: "34 Commercial Wharf, Boston, MA 02110",
    bestFor: "Downtown location; reformer classes; jump board reformer",
    signatureClass: "Reformer + Jump Board",
    bookingTip: "The jump board Reformer class sells out first — book it immediately when the schedule opens for the week.",
  },
  {
    number: "05",
    name: "Pilates Back Bay",
    neighborhood: "Back Bay",
    priceLevel: "$$$",
    review: "Pilates Back Bay at 376 Boylston Street is a boutique, appointment-based studio that focuses on private and small-group instruction rather than packed group classes. Instructors tailor sessions to individual goals, making this studio especially popular with clients managing injuries, postpartum recovery, or specific athletic training needs. The prime Back Bay location and intimate setting justify the premium pricing.",
    address: "376 Boylston St, Boston, MA 02116",
    bestFor: "Private and semi-private sessions; personalized programming",
    signatureClass: "Private Reformer Session",
    bookingTip: "First-timers should book a private intro session; the small-group reformer classes open up based on instructor availability — check back if slots are full.",
  },
  {
    number: "06",
    name: "Club Pilates Back Bay",
    neighborhood: "Back Bay",
    priceLevel: "$$",
    review: "Club Pilates Back Bay at 255 Newbury Street is one of the most accessible entry points to reformer Pilates in the city, offering a broad class schedule at more affordable membership rates than boutique competitors. Classes are reformer-fusion based and categorized by level — 1.0, 2.0, 3.0 — making it easy to progress without guessing where you stand. The Newbury Street location is polished, clean, and reliably staffed.",
    address: "255 Newbury St, Boston, MA 02116",
    bestFor: "Beginners; membership value; consistent reformer class formats",
    signatureClass: "Reform [+Stretch]",
    bookingTip: "Purchase a membership for unlimited classes — drop-in rates are steep. Intro offers (first week free or discounted) are regularly available.",
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
              <Image src="https://images.unsplash.com/photo-e5ZRWZizFF4?w=1400&q=80" alt="Boston Massachusetts skyline" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
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
