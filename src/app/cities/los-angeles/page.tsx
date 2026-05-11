import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "The Best Pilates Studios in Los Angeles | Pilates Collective Club",
  description: "Our curated guide to LA's finest Pilates studios — from Brentwood to Silver Lake, the five studios leading the city's world-class wellness scene.",
  openGraph: {
    title: "The Best Pilates Studios in Los Angeles",
    description: "Our curated guide to LA's finest Pilates studios — five verified picks from Santa Monica to West Hollywood.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/los-angeles",
    images: [{ url: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=1200&q=80", width: 1200, height: 630, alt: "Los Angeles city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Los Angeles",
    description: "Our curated guide to LA's finest Pilates studios — five verified picks.",
    images: ["https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=1200&q=80"],
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Westside Pilates",
    neighborhood: "Santa Monica / Brentwood",
    priceLevel: "$$$",
    review: "Westside Pilates is a Santa Monica institution — one of LA's most respected and long-standing classical studios, with a teaching lineage traceable to the original New York teachers. The instruction here is meticulous and classical in approach, drawing a clientele of professional dancers, film industry clients, and dedicated practitioners who take the method seriously. The studio's reputation precedes it: this is where people come when they want Pilates done properly, without compromise to trend or aesthetics.",
    address: "1338 Lincoln Boulevard, Santa Monica, CA 90401",
    bestFor: "Classical method, experienced practitioners, private apparatus work",
    signatureClass: "Classical Apparatus Session",
    bookingTip: "Senior teachers book out weeks in advance. New clients are encouraged to start with a private intake session before joining group apparatus classes.",
  },
  {
    number: "02",
    name: "Performing Arts Physical Therapy & Pilates",
    neighborhood: "West Hollywood",
    priceLevel: "$$$$",
    review: "PAPT is one of LA's most clinically rigorous Pilates offerings — a studio that sits at the intersection of physiotherapy and classical Pilates, with a particular focus on performing artists, professional athletes, and post-surgical rehabilitation clients. The treatment is genuinely bespoke: every client is assessed and every programme is individually designed. Not the choice for someone seeking a group class experience, but unmatched for anyone dealing with complex movement issues or injury recovery.",
    address: "8383 Wilshire Boulevard, Beverly Hills, CA 90211",
    bestFor: "Clinical rehabilitation, injury recovery, performers and athletes",
    signatureClass: "Bespoke Clinical Pilates",
    bookingTip: "Begins with a clinical assessment. Call to discuss your needs before booking — the studio will advise which programme is appropriate.",
  },
  {
    number: "03",
    name: "Glow Pilates",
    neighborhood: "Melrose / Fairfax",
    priceLevel: "$$",
    review: "Glow Pilates is one of LA's most exciting newer reformer studios — a Melrose Avenue boutique founded by two sisters that fuses a modern athletic approach with the foundational principles of Joseph Pilates. With a 5.0 rating across dozens of reviews and class formats ranging from Beginner Burn to Total Body Glow Up, the studio has quickly become a go-to for the city's creative and wellness-forward community. The instruction is energetic and technically sound, and the environment strikes the right balance between serious and welcoming.",
    address: "7823 Melrose Ave, Los Angeles, CA 90046",
    bestFor: "Contemporary reformer, all levels, creative community",
    signatureClass: "Total Body Glow Up",
    bookingTip: "Book through their website. Evening classes on weekdays fill fast — reserve by Tuesday for the week ahead.",
  },
  {
    number: "04",
    name: "Be Kind Studios",
    neighborhood: "West Hollywood",
    priceLevel: "$$$",
    review: "Be Kind Studios has built one of LA's most thoughtfully crafted reformer experiences — a West Hollywood boutique created to offer elevated Pilates with strong programming, attentive instruction, and a studio environment people genuinely enjoy returning to. The teaching quality is consistently high, the class structure is intelligently designed, and the WeHo location places it at the heart of the city's premium wellness corridor. For clients who want a refined reformer experience in West Hollywood, Be Kind is the address.",
    address: "607 N W Knoll Dr, West Hollywood, CA 90069",
    bestFor: "Premium reformer, West Hollywood clientele, polished experience",
    signatureClass: "Be Kind Signature Reformer",
    bookingTip: "Book through the app. West Hollywood morning slots are competitive — set notifications and book at the earliest available window.",
  },
  {
    number: "05",
    name: "The Pilates Class (Studio)",
    neighborhood: "West Hollywood",
    priceLevel: "$$$",
    review: "The Pilates Class began as a wildly successful online platform and has extended its brand into a West Hollywood studio space that has quickly become one of LA's most talked-about reformer destinations. The teaching quality is high, the production values are exceptional, and the community that has formed around the brand translates well into the physical studio. Not the most classical experience in the city, but one of the most motivating and well-executed contemporary offerings.",
    address: "8560 Sunset Boulevard, West Hollywood, CA 90069",
    bestFor: "Contemporary reformer, community, media-savvy wellness culture",
    signatureClass: "The Pilates Class Reformer",
    bookingTip: "Book through the app. West Hollywood morning slots are competitive — set notifications and book the moment new slots open.",
  },
];

const BOOKING_TIPS = [
  { heading: "Traffic matters more than you think", body: "LA's Pilates scene spans a vast geography. Factor in commute time realistically — a studio 8 miles away might be 40 minutes during rush hour. Choose one close to home or your workplace for long-term consistency." },
  { heading: "Expect to pay $38–65 per class", body: "LA's premium reformer studios run from around $38 at accessible boutiques to $65+ at semi-private and clinical studios. Monthly memberships bring the per-class cost down meaningfully for regular practitioners." },
  { heading: "Intro packages are widely offered", body: "Almost every quality LA studio offers a new-client intro package. The first two weeks are your most important research window — use classes across different times of day to assess both the instruction and the commute." },
  { heading: "ClassPass works well on the westside", body: "ClassPass participation is strong among LA's reformer studios. Use it to sample before committing. Note that peak-time slots are often restricted to direct members." },
  { heading: "The semi-private format is LA's sweet spot", body: "Many of LA's best studios offer semi-private sessions (2–4 clients) as their signature format. These offer substantially more individual attention than group classes at a price point meaningfully below private sessions." },
];

const NEIGHBORHOODS = [
  { name: "Santa Monica & Brentwood", description: "LA's most established Pilates neighbourhood. The concentration of classical studios, experienced instructors, and wellness-conscious clientele here is unmatched in the city. Worth the traffic." },
  { name: "West Hollywood & Beverly Hills", description: "Premium boutique territory. Studios here tend toward the contemporary, design-forward, and celebrity-adjacent. Expect excellent instruction alongside elevated price points." },
  { name: "Los Feliz, Silver Lake & Echo Park", description: "The eastside has developed a genuinely excellent independent studio scene in recent years — community-focused, intelligently taught, and substantially more accessible in pricing than the westside." },
  { name: "Manhattan Beach & the South Bay", description: "LA's beach communities have a distinct wellness culture — active, outdoors-oriented, and increasingly well-served by reformer studios that appeal to surfers, triathletes, and fitness-focused professionals." },
];

const RELATED_CITIES = [
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "Barcelona", country: "Spain", href: "/cities/barcelona", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
];

const FURTHER_READING = [
  { title: "Pilates vs Yoga: Key Differences and How to Choose", excerpt: "A clear comparison of two of the world's most popular movement practices.", href: "/blog/pilates-vs-yoga", category: "Method", readTime: "7 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80" },
  { title: "How to Choose the Right Pilates Instructor", excerpt: "What credentials, experience, and red flags to look for when selecting a teacher.", href: "/blog/how-to-choose-a-pilates-instructor", category: "Guide", readTime: "6 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Los Angeles", "item": "https://pilatescollectiveclub.com/cities/los-angeles" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Los Angeles",
      "description": "Curated guide to the top 5 Pilates studios in Los Angeles.",
      "url": "https://pilatescollectiveclub.com/cities/los-angeles",
      "numberOfItems": 5,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": {
            "@type": "PostalAddress",
            "streetAddress": s.address,
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "addressCountry": "US",
          },
        },
      })),
    },
  ],
};

export default function LosAngelesPage() {
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
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Los Angeles</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Los Angeles has one of the world's most sophisticated wellness cultures, and its Pilates scene reflects that. The city spans a vast geography — from classical powerhouses in Santa Monica to community studios in Los Feliz — and the range in quality, price, and approach is correspondingly wide. This guide navigates the best of it: five studios across different parts of the city that consistently deliver excellent work.
            </p>
          </div>
        </section>
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=1400&q=80" alt="Los Angeles" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Los Angeles, California</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>A world-class wellness city with a diverse Pilates landscape</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Studios · Curated & Verified</p>
            <div className="space-y-8">{STUDIOS.map((s) => <StudioListing key={s.number} {...s} />)}</div>
          </div>
        </section>
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Los Angeles</h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((t) => (
                <div key={t.heading} className="flex gap-5 rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Los Angeles</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>LA&apos;s sheer size means neighbourhood choice significantly affects your experience. Here&apos;s a guide.</p>
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
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Related city guides</h2>
            <p className="text-sm mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Explore our guides to other cities with thriving Pilates scenes.</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">{RELATED_CITIES.map((c) => <CityCard key={c.city} {...c} />)}</div>
          </div>
        </section>
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">{FURTHER_READING.map((a) => <ArticleCard key={a.href} {...a} />)}</div>
          </div>
        </section>
        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best reformer Pilates in Los Angeles…" />
      </main>
      <Footer />
    </>
  );
}
