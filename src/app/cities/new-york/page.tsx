import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "The Best Pilates Studios in New York City | Pilates Collective Club",
  description: "Our curated guide to NYC's finest Pilates studios — from classical powerhouses in Chelsea to boutique reformer rooms in SoHo, the West Village, and Gramercy. Book with confidence.",
  openGraph: {
    title: "The Best Pilates Studios in New York City",
    description: "Our curated guide to NYC's finest Pilates studios — five verified picks from Chelsea to the West Village.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/new-york",
    images: [{ url: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80", width: 1200, height: 630, alt: "New York city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in New York City",
    description: "Our curated guide to NYC's finest Pilates studios — five verified picks.",
    images: ["https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80"],
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "New York Pilates",
    neighborhood: "West Village",
    priceLevel: "$$$",
    review: "New York Pilates has become one of the city's most talked-about reformer studios since launching in the West Village — a studio that brings downtown energy and serious technique together in a way that's difficult to replicate. The West Village flagship on Houston Street is beautifully designed, the instructors are excellent, and the brand's signature Arms Abs Ass class has developed a loyal following among practitioners who want results alongside their method. Multiple Manhattan locations make it highly accessible.",
    address: "124 W Houston St, New York, NY 10012",
    bestFor: "Contemporary reformer, fitness-forward clients, all levels",
    signatureClass: "Arms Abs Ass Reformer",
    bookingTip: "Book through the app. West Village morning slots go within the first hour of release — set notifications for Monday.",
  },
  {
    number: "02",
    name: "Kinected Center for Movement",
    neighborhood: "Chelsea",
    priceLevel: "$$$",
    review: "Kinected is widely regarded as one of the finest classical Pilates studios in New York — a studio that has maintained extraordinary standards through decades of change in the city's fitness landscape. The teaching here is rigorous and lineage-connected, with several instructors who trained under Romana Kryzanowska. Group apparatus classes are small (maximum six), private sessions are deeply personalised, and the studio's commitment to the original method is absolute. Not for those seeking a trends-forward experience — exactly for those who want the real thing.",
    address: "255 West 23rd Street, New York, NY 10011",
    bestFor: "Classical purists, private apparatus work, advanced practitioners",
    signatureClass: "Romana's Pilates Apparatus",
    bookingTip: "First-time clients must complete an intake session before joining group apparatus classes. It's well worth doing — the assessment shapes every subsequent session.",
  },
  {
    number: "03",
    name: "Gramercy Pilates NYC",
    neighborhood: "Gramercy / Flatiron",
    priceLevel: "$$",
    review: "Gramercy Pilates NYC has earned a devoted following in the Flatiron district through exceptional instruction and a certification school that keeps its teaching talent at the highest level. Named 2025 Pilates Studio of the Year by The Pilates Journal, the studio offers reformer, tower, chair, and mat Pilates in small group and private formats. The combination of Certified Pilates Teachers, dynamic Reformer work, and deep Tower stretching makes this one of the most technically rigorous — and rewarding — studios in the city.",
    address: "39 E 20th St, New York, NY 10003",
    bestFor: "Classical method, technique-focused, all equipment formats",
    signatureClass: "Reformer & Tower",
    bookingTip: "Book online at least 48 hours ahead for group classes. Private sessions with senior instructors benefit from a waitlist — add yourself and check cancellations.",
  },
  {
    number: "04",
    name: "Body Evolutions",
    neighborhood: "Greenwich Village",
    priceLevel: "$$$",
    review: "Body Evolutions occupies a beautiful studio in the Village and has developed a reputation for exceptional private instruction in the classical method. Owner and director Jennifer DeLuca is among New York's most decorated classical teachers, and the studio's culture reflects her standards throughout. The group classes here are excellent, but the private session programme is where Body Evolutions truly distinguishes itself — patient, precise, and transformatively effective for clients willing to invest in the work.",
    address: "18 West 18th Street, New York, NY 10011",
    bestFor: "Private sessions, classical method, serious commitment",
    signatureClass: "Classical Private Apparatus",
    bookingTip: "The studio maintains a waitlist for new private clients with senior teachers. Group classes are more immediately accessible — start there to get acquainted.",
  },
  {
    number: "05",
    name: "SLT (Strengthen Lengthen Tone)",
    neighborhood: "SoHo / Multiple Locations",
    priceLevel: "$$$",
    review: "SLT is New York's most successful Pilates-adjacent boutique — a Megaformer-based workout that borrows the reformer's architecture and Pilates vocabulary while delivering something closer to slow-burn strength training. It's not classical Pilates, and serious method practitioners will note the difference. But SLT is exceptionally well-run, the Megaformer classes are genuinely challenging, and the teaching quality across their New York locations is high. For clients who want an intense, reformer-based workout in a premium environment, SLT is a consistent choice.",
    address: "18 Spring Street, New York, NY 10012",
    bestFor: "Megaformer training, fitness-forward clients, boutique experience",
    signatureClass: "SLT Megaformer",
    bookingTip: "Book through the app up to five days in advance. Weekday morning slots in SoHo go within an hour of opening.",
  },
];

const BOOKING_TIPS = [
  { heading: "ClassPass is genuinely useful in NYC", body: "New York's studio density makes ClassPass an excellent tool for discovering the right studio before committing to a membership. Most of the better studios participate, though some restrict peak-time access to members." },
  { heading: "Expect to pay $35–55 per class", body: "NYC reformer Pilates drop-in rates run from around $35 at more accessible studios to $55+ at premium boutiques. Monthly memberships typically bring the per-class cost to $22–35." },
  { heading: "Book 3–5 days ahead for prime slots", body: "Popular morning and lunchtime classes at established NYC studios fill quickly. Most apps open booking five to seven days ahead — set a recurring reminder for Monday morning." },
  { heading: "Grip socks are universal", body: "Every reformer studio in New York requires grip socks. Most sell them at the front desk, but they're far cheaper from Amazon or a sports retailer." },
  { heading: "Intro offers expire quickly", body: "Most NYC studios offer a new-client intro package valid for 30 days. Use it intentionally — sample multiple class types and times before committing to a membership." },
];

const NEIGHBORHOODS = [
  { name: "Upper West Side & Upper East Side", description: "Manhattan's established residential districts have a high concentration of classical Pilates studios with loyal neighbourhood clienteles. Less trendy, more serious — and often better value than downtown alternatives." },
  { name: "Chelsea & Flatiron", description: "The Flatiron district and Chelsea house several of New York's most respected classical studios alongside newer boutique reformer rooms. Excellent public transport access makes this one of the most convenient areas for studio-hopping." },
  { name: "SoHo & West Village", description: "Downtown's most design-conscious neighbourhoods attract the city's premium fitness offerings. Expect beautiful interiors, social atmospheres, and correspondingly higher price points." },
  { name: "Brooklyn (Williamsburg & Park Slope)", description: "Brooklyn's growing Pilates scene has produced several excellent independent studios with strong community cultures and more accessible pricing than Manhattan. Worth the subway ride if you're based in the borough." },
];

const RELATED_CITIES = [
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
  { city: "Zurich", country: "Switzerland", href: "/cities/zurich", studioCount: 5 },
];

const FURTHER_READING = [
  { title: "The Beginner's Guide to Reformer Pilates", excerpt: "What to expect in your first reformer class and how to choose a studio.", href: "/blog/beginners-guide-to-reformer-pilates", category: "Beginner Guide", readTime: "8 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1616439069669-66dbe74bcdad?w=800&q=80" },
  { title: "How to Choose the Right Pilates Instructor", excerpt: "What credentials, experience, and red flags to look for when selecting a teacher.", href: "/blog/how-to-choose-a-pilates-instructor", category: "Guide", readTime: "6 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "New York", "item": "https://pilatescollectiveclub.com/cities/new-york" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in New York City",
      "description": "Curated guide to the top 5 Pilates studios in New York City.",
      "url": "https://pilatescollectiveclub.com/cities/new-york",
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
            "addressLocality": "New York",
            "addressRegion": "NY",
            "addressCountry": "US",
          },
        },
      })),
    },
  ],
};

export default function NewYorkPage() {
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
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in New York City</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              New York City is where modern Pilates was born — Joseph Pilates opened his original studio on Eighth Avenue in 1926, and the method's roots in the city run deeper than anywhere else in the world. Today, NYC has one of the most diverse and rigorous Pilates scenes on the planet, from lineage-connected classical studios in Chelsea to sleek reformer boutiques in SoHo. This guide covers the five we rate most highly.
            </p>
          </div>
        </section>
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1400&q=80" alt="New York City skyline" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>New York, United States</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Where the Pilates method was born</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in New York</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in New York</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Manhattan's studio landscape is shaped by neighbourhood culture. Here's where to look.</p>
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
        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best classical Pilates in New York…" />
      </main>
      <Footer />
    </>
  );
}
