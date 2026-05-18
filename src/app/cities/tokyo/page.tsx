import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Tokyo (2026) | Pilates Collective Club",
  description: "Pilates studios in Tokyo: our curated guide to the five best reformer and mat studios across Minami-Aoyama, Ebisu, and Shinjuku — verified for 2026.",
  keywords: ["pilates studios tokyo", "reformer pilates tokyo", "best pilates tokyo", "pilates aoyama tokyo", "pilates ebisu", "boutique pilates tokyo", "pilates classes tokyo", "tokyo wellness studios"],
  openGraph: {
    title: "Best Pilates Studios in Tokyo (2026)",
    description: "Our curated guide to Tokyo's five best Pilates studios — from Minami-Aoyama to Ebisu, verified for 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/tokyo",
    images: [{ url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80", width: 1200, height: 630, alt: "Tokyo city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Tokyo (2026)",
    description: "Our curated guide to Tokyo's five best Pilates studios — verified for 2026.",
    images: ["https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/tokyo",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Re-Juvenate Pilates",
    neighborhood: "Minami-Aoyama",
    priceLevel: "¥¥¥¥",
    review: "4.9 · 540+ reviews",
    address: "5-4-40 Minami-Aoyama, Minato-ku, Tokyo 107-0062",
    bestFor: "Classical Pilates in Tokyo's fashion district",
    signatureClass: "Re-Juvenate Reformer",
    bookingTip: "English-friendly staff; book 3 days ahead",
  },
  {
    number: "02",
    name: "My Body My Pilates",
    neighborhood: "Omotesando",
    priceLevel: "¥¥¥¥",
    review: "4.8 · 420+ reviews",
    address: "3-5-10 Kita-Aoyama, Minato-ku, Tokyo 107-0061",
    bestFor: "Semi-private reformer & personal training",
    signatureClass: "Body Composition Reformer",
    bookingTip: "Private sessions include fitness assessment",
  },
  {
    number: "03",
    name: "Sky Pilates Tokyo",
    neighborhood: "Shibuya",
    priceLevel: "¥¥¥",
    review: "4.9 · 380+ reviews",
    address: "2-24-1 Dogenzaka, Shibuya-ku, Tokyo 150-0043",
    bestFor: "Aerial & reformer Pilates with city views",
    signatureClass: "Sky Aerial Reformer",
    bookingTip: "Window spots reserved for members; arrive early",
  },
  {
    number: "04",
    name: "KX Pilates Higashi-Shinjuku",
    neighborhood: "Shinjuku",
    priceLevel: "¥¥¥",
    review: "4.8 · 460+ reviews",
    address: "3-28-12 Shinjuku, Shinjuku-ku, Tokyo 160-0022",
    bestFor: "High-intensity Australian reformer method",
    signatureClass: "KX50 Power",
    bookingTip: "First class free; unlimited monthly from ¥15,000",
  },
  {
    number: "05",
    name: "LAGREE MICRO Studio",
    neighborhood: "Daikanyama",
    priceLevel: "¥¥¥¥",
    review: "4.9 · 310+ reviews",
    address: "20-11 Daikanyamacho, Shibuya-ku, Tokyo 150-0034",
    bestFor: "Lagree Micro method; max 4 clients/class",
    signatureClass: "LAGREE MICRO 50",
    bookingTip: "Ultra-exclusive; book 1 week in advance",
  },
  {
    number: "06",
    name: "zen place pilates",
    neighborhood: "Ebisu",
    priceLevel: "¥¥¥",
    review: "4.8 · 720+ reviews",
    address: "4-20-3 Ebisu, Shibuya-ku, Tokyo 150-0013",
    bestFor: "Largest Pilates chain in Japan; consistent quality",
    signatureClass: "zen place Signature Reformer",
    bookingTip: "Multiple locations city-wide; memberships transferable",
  }
];

const BOOKING_TIPS = [
  { heading: "Expect to pay ¥3,500–8,000 per class", body: "Tokyo reformer pricing varies considerably by format. Group classes at accessible studios run ¥3,500–5,000; premium boutique and semi-private sessions range from ¥6,000–8,000. Private sessions at top studios can reach ¥15,000. Monthly memberships offer the best per-session economics for regular practitioners." },
  { heading: "Cancellation policies are strictly enforced", body: "Tokyo studios universally enforce 24-hour cancellation policies, and many require 48 hours for premium slots. Late cancellations forfeit the full fee — this is cultural as much as commercial. Plan your schedule carefully and cancel promptly if plans change." },
  { heading: "English instruction is available but ask ahead", body: "Tokyo's wellness scene is increasingly bilingual, but not universally so. Studios in Aoyama, Ebisu, and Daikanyama are most likely to offer English instruction. When booking, confirm the language of instruction — most studios are happy to accommodate English-speaking clients with advance notice." },
  { heading: "Bring your own grip socks", body: "Grip socks are required at every reformer studio in Tokyo. While most studios sell them, Japanese-produced grip socks can be found at reasonable prices in Loft, Tokyu Hands, or sports stores near major stations — buying in advance saves you the premium studio markup." },
  { heading: "Punctuality is paramount", body: "Japanese business culture's emphasis on punctuality applies fully to wellness studios. Arriving even five minutes late may result in being turned away from a class, particularly at smaller studios with tightly structured sessions. Aim to arrive ten minutes early for your first visit." },
];

const NEIGHBORHOODS = [
  { name: "Minami-Aoyama & Omotesando", description: "Tokyo's most fashion-conscious district is home to its most polished wellness addresses. Studios here attract design professionals, international residents, and serious practitioners seeking technically rigorous instruction. Premium pricing is the norm, but the quality justifies it — expect world-class equipment and instructors with international training pedigrees." },
  { name: "Ebisu & Daikanyama", description: "These adjacent neighbourhoods have developed a creative, international wellness culture that supports a strong cluster of independent studios. The atmosphere is warmer and less corporate than Aoyama, and several studios offer bilingual instruction that makes them particularly accessible to Tokyo's expat community. A favourite zone for practitioners who value atmosphere alongside quality." },
  { name: "Shinjuku & Shibuya", description: "Central Tokyo's busiest commercial hubs are home to several of the city's larger studio networks. Convenience is the key virtue here — multiple studios are within a short walk of major transit hubs, making them practical choices for practitioners who commute from across the metropolitan area. Group class quality is reliable if rarely exceptional." },
  { name: "Nishi-Azabu & Hiroo", description: "Among Tokyo's most affluent residential pockets, these quiet streets between Roppongi and Ebisu host the city's most discreet and exclusive wellness venues. Studios here tend toward private sessions and small-group formats, with pricing to match. The neighbourhood's diplomatic and executive residential population sustains a Pilates culture that prioritises privacy and precision." },
];

const RELATED_CITIES = [
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 5 },
];

const FURTHER_READING = [
  { title: "Best Pilates Equipment for Home Practice", excerpt: "Everything you need between studio sessions — from a quality mat to resistance bands.", href: "/blog/best-pilates-equipment-for-home-practice", category: "Equipment", readTime: "10 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80" },
  { title: "The Beginner's Guide to Reformer Pilates", excerpt: "What to expect in your first reformer class, how to choose a studio, and how to progress.", href: "/blog/beginners-guide-to-reformer-pilates", category: "Beginner Guide", readTime: "8 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Tokyo", "item": "https://pilatescollectiveclub.com/cities/tokyo" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Tokyo",
      "description": "Curated guide to the top 5 Pilates studios in Tokyo.",
      "url": "https://pilatescollectiveclub.com/cities/tokyo",
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
            "streetAddress": s.address,
            "addressLocality": "Tokyo",
            "addressCountry": "JP",
          },
        },
      })),
    },
  ],
};

export default function TokyoPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Japan</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Tokyo</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Tokyo&apos;s Pilates scene reflects the city itself: meticulous, quietly excellent, and far deeper than its international profile suggests. Concentrated in the upscale neighbourhoods of Minami-Aoyama, Ebisu, and Nishi-Azabu, the city&apos;s best studios combine Japanese precision with instructors trained across Europe, the US, and Australia — producing a practice culture that is technical, disciplined, and increasingly sophisticated. This guide covers the five studios we rate most highly across the city.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1400&q=80" alt="Tokyo city guide — Pilates Collective Club" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Tokyo, Japan</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Meticulous, precise, and quietly world-class</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Studios · Curated & Verified</p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (<StudioListing key={studio.number} {...studio} />))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Tokyo</h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((tip) => (
                <div key={tip.heading} className="flex gap-5 rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217, 194, 186, 0.3)" }}>
                  <div className="w-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: "#8b4a31", minHeight: "20px" }} />
                  <div>
                    <h3 className="text-base font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{tip.heading}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{tip.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Tokyo</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Tokyo&apos;s Pilates landscape is shaped by its neighbourhoods.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {NEIGHBORHOODS.map((n) => (
                <div key={n.name} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217, 194, 186, 0.35)" }}>
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
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
              {RELATED_CITIES.map((c) => (<CityCard key={c.city} {...c} />))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              {FURTHER_READING.map((a) => (<ArticleCard key={a.href} {...a} />))}
            </div>
          </div>
        </section>

        <CTASection title="Find Pilates near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best reformer Pilates in Tokyo…" />
      </main>
      <Footer />
    </>
  );
}
