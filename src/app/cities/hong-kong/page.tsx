import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Hong Kong (2026) | Pilates Collective Club",
  description: "Pilates studios in Hong Kong: our curated guide to the five best reformer and mat studios across Central, Wan Chai, and the Southside — verified for 2026.",
  keywords: ["pilates studios hong kong", "reformer pilates hong kong", "best pilates hong kong", "pilates central hong kong", "pilates wan chai", "boutique pilates hk", "pilates classes hong kong", "hong kong wellness studios"],
  openGraph: {
    title: "Best Pilates Studios in Hong Kong (2026)",
    description: "Our curated guide to Hong Kong's five best Pilates studios — from Central to Stanley, verified for 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/hong-kong",
    images: [{ url: "https://images.unsplash.com/photo-1532986374557-50e0d7c07a42?w=1200&q=80", width: 1200, height: 630, alt: "Hong Kong city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Hong Kong (2026)",
    description: "Our curated guide to Hong Kong's five best Pilates studios — verified for 2026.",
    images: ["https://images.unsplash.com/photo-1532986374557-50e0d7c07a42?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/hong-kong",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Pure Yoga & Pilates — Central",
    neighborhood: "Central",
    priceLevel: "$$$",
    review: "Pure Yoga's Pilates offering in their landmark Central studio is among the most polished in Asia — a fleet of Balanced Body reformers, a full cadillac and tower setup, and an instructor roster trained across Australia, the UK, and the US. The studio occupies two floors above Pacific Place and draws a sophisticated crowd of bankers, expatriates, and serious practitioners. Group reformer classes are tight and technically demanding; private sessions with their senior instructors represent genuinely world-class coaching. The membership model rewards commitment with meaningful discounts.",
    address: "38/F, Soundwill Plaza II, 38 Russell Street, Causeway Bay",
    bestFor: "High-end reformer, expat community, rigorous technique",
    signatureClass: "Pure Reformer Fundamentals",
    bookingTip: "Book through the Pure app. Peak slots (7–9am and 6–8pm weekdays) fill within minutes of opening. Add the class to your watchlist the moment it goes live, typically seven days ahead.",
  },
  {
    number: "02",
    name: "Flex Studio",
    neighborhood: "Wan Chai",
    priceLevel: "$$$",
    review: "Flex Studio has been part of Hong Kong's premium wellness landscape since 2004 and remains among the most respected Pilates addresses in the city. Their Wan Chai flagship is thoughtfully designed — natural light, a calm palette, and enough reformers to avoid the queuing that plagues busier venues. The instruction quality is consistently high, the programming balances classical and contemporary approaches, and the teachers bring genuine depth of knowledge. Flex is particularly strong for those new to Pilates: their introductory programme is one of the most thorough in Asia.",
    address: "2/F, 1 Harbour Road, Wan Chai",
    bestFor: "Beginners, classical method, quality-assured instruction",
    signatureClass: "Flex Reformer Essentials",
    bookingTip: "Purchase an Intro Pass for your first three classes — it's the most cost-efficient entry point and gives you exposure to the full teaching team before committing to a package.",
  },
  {
    number: "03",
    name: "Studio Bloom",
    neighborhood: "Sai Ying Pun",
    priceLevel: "$$",
    review: "Studio Bloom has quietly become the go-to address for Hong Kong's wellness-savvy West Island community. Set in a light-filled second-floor space on Third Street, Bloom offers small-group reformer classes with a maximum of six clients — unusual for the city — and a teaching philosophy that prioritises connection to movement over output metrics. The owner-instructor trained with Romana's Pilates in New York and brings a rigorously classical sensibility to every session. Pricing is notably fairer than Central studios, making this a genuine discovery for residents west of the MTR.",
    address: "2/F, 89 Third Street, Sai Ying Pun",
    bestFor: "Small-group reformer, classical method, Sai Ying Pun residents",
    signatureClass: "Bloom Classical Reformer",
    bookingTip: "Classes cap at six so cancellations happen rarely. Book the full week ahead when the schedule opens on Sunday evenings. The 8am Saturday slot is the studio's most coveted.",
  },
  {
    number: "04",
    name: "The Movement Lab",
    neighborhood: "Kennedy Town",
    priceLevel: "$$",
    review: "The Movement Lab occupies a corner space in Kennedy Town's burgeoning wellness corridor and has become a community anchor for the neighbourhood's growing population of young professionals. The studio blends reformer Pilates with functional movement and mobility work — sessions integrate stability exercises drawn from physiotherapy into conventional reformer programming, making it particularly popular with those managing chronic back or hip issues. The instructors are approachable and communicative, and the non-intimidating atmosphere has earned the studio strong word-of-mouth on the Island.",
    address: "G/F, 6 Catchick Street, Kennedy Town",
    bestFor: "Injury rehabilitation, functional movement, Kennedy Town locals",
    signatureClass: "MoveLab Reformer & Mobility",
    bookingTip: "Walk-ins are occasionally possible on weekday afternoons, but the studio is busier than it looks. Book at least three days in advance. Grip socks are required and available for purchase at the front desk.",
  },
  {
    number: "05",
    name: "Align Pilates Studio",
    neighborhood: "Stanley",
    priceLevel: "$$$",
    review: "Align is one of Hong Kong's finest Southside studios — a serene, beach-adjacent space in Stanley that serves the area's residential community with a level of care rarely found at busier city-centre venues. Sessions here feel genuinely unhurried: the studio limits reformer classes to eight, the teacher-to-student attention is exceptional, and the post-class atmosphere encourages the kind of community exchange that the best small studios foster. For those living or working on the Southside, Align is simply the best option on the peninsula.",
    address: "Shop 4, 92 Stanley Main Street, Stanley",
    bestFor: "Small-group reformer, Southside community, unhurried experience",
    signatureClass: "Align Full-Body Reformer",
    bookingTip: "The studio opens its weekly schedule on Monday mornings. The Tuesday and Thursday 9:30am sessions are consistently the first to fill — book immediately if your schedule allows.",
  },
];

const BOOKING_TIPS = [
  { heading: "Expect to pay HK$250–450 per group class", body: "Hong Kong reformer pricing is among the highest in Asia, reflecting the city's real-estate costs and demand. Group classes typically run HK$250–300 at independent studios and HK$350–450 at premium branded venues. Ten-class packs offer the best per-session rate for regulars." },
  { heading: "ClassPass is available in Hong Kong", body: "ClassPass has solid coverage in Hong Kong and is a practical way to trial studios before committing to a pack. Premium venues like Pure require higher credit allocations, so factor that into your plan if you're targeting the top-tier studios." },
  { heading: "Book 3–7 days ahead for peak slots", body: "Hong Kong's best studios fill quickly. Morning classes (7–9am) and post-work slots (6–8pm) at popular venues are typically fully booked within hours of opening. Check studio apps Sunday evening when many open the following week's schedule." },
  { heading: "Grip socks are mandatory, everywhere", body: "Every studio in Hong Kong requires grip socks on the reformer. Some sell branded pairs at the desk; others require you to bring your own. Keep a pair in your bag to avoid being turned away or paying premium for studio socks." },
  { heading: "Tipping is not customary", body: "Unlike in North America, tipping instructors in Hong Kong wellness studios is not a cultural norm. The premium pricing generally reflects instructor compensation — there's no expectation of gratuity after your session." },
];

const NEIGHBORHOODS = [
  { name: "Central & Admiralty", description: "Hong Kong's financial heart concentrates some of the city's most premium wellness addresses. Studios here serve a time-pressed, expense-account clientele — expect world-class instructors, state-of-the-art equipment, and prices to match. Ideal for weekday lunchtime sessions or early-morning sessions before the markets open." },
  { name: "Wan Chai & Causeway Bay", description: "The city's most accessible districts for Pilates offer a strong mix of established studios and newer boutique entrants. Wan Chai in particular has become a wellness hub, with studios clustered around the harbour-facing streets. Good transport links make it easy to reach from most parts of the Island." },
  { name: "Sai Ying Pun & Kennedy Town", description: "The western end of Hong Kong Island has developed a thriving independent wellness scene over the past decade. Studios here tend to be owner-operated, smaller in scale, and more community-focused — with pricing that's more accessible than the Central corridor. The neighbourhood's young professional population has created a loyal studio clientele." },
  { name: "The Southside (Stanley & Repulse Bay)", description: "Hong Kong's southern peninsula is home to a quieter, more residential studio scene. Venues here prioritise quality over volume — small class sizes, beautiful natural settings, and a pace that feels distinct from the frenetic city centre. Worth the commute for those seeking a more unhurried practice." },
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
        { "@type": "ListItem", "position": 2, "name": "Hong Kong", "item": "https://pilatescollectiveclub.com/cities/hong-kong" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Hong Kong",
      "description": "Curated guide to the top 5 Pilates studios in Hong Kong.",
      "url": "https://pilatescollectiveclub.com/cities/hong-kong",
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
            "addressLocality": "Hong Kong",
            "addressCountry": "HK",
          },
        },
      })),
    },
  ],
};

export default function HongKongPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Hong Kong SAR</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Hong Kong</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Hong Kong&apos;s Pilates scene is one of Asia&apos;s most sophisticated — shaped by a large expatriate community, a high-performance culture, and the city&apos;s characteristic appetite for premium wellness experiences. Studios here compete fiercely on instructor quality and equipment, and the best venues stand comfortably alongside their counterparts in London or New York. This guide covers the five we rate most highly across the Island&apos;s distinct districts.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1532986374557-50e0d7c07a42?w=1400&q=80" alt="Hong Kong city guide — Pilates Collective Club" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Hong Kong, Hong Kong SAR</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Asia&apos;s most dynamic city, and one of its finest Pilates destinations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Studios · Curated & Verified</p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (<StudioListing key={studio.number} {...studio} />))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Hong Kong</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Hong Kong</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Hong Kong&apos;s Pilates landscape is shaped by its neighbourhoods.</p>
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

        <CTASection title="Find Pilates near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best reformer Pilates in Hong Kong…" />
      </main>
      <Footer />
    </>
  );
}
