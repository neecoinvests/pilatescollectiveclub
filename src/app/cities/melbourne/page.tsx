import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Melbourne (2026) | Pilates Collective Club",
  description: "Pilates studios in Melbourne: our curated guide to the five best reformer and mat studios across Fitzroy, South Yarra, and St Kilda — verified for 2026.",
  keywords: ["pilates studios melbourne", "reformer pilates melbourne", "best pilates melbourne", "pilates fitzroy", "pilates south yarra", "boutique pilates melbourne", "pilates classes melbourne", "melbourne wellness studios"],
  openGraph: {
    title: "Best Pilates Studios in Melbourne (2026)",
    description: "Our curated guide to Melbourne's five best Pilates studios — from Fitzroy to South Yarra, verified for 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/melbourne",
    images: [{ url: "https://images.unsplash.com/photo-1514395462185-c2de918e8ab9?w=1200&q=80", width: 1200, height: 630, alt: "Melbourne city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Melbourne (2026)",
    description: "Our curated guide to Melbourne's five best Pilates studios — verified for 2026.",
    images: ["https://images.unsplash.com/photo-1514395462185-c2de918e8ab9?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/melbourne",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "KX Pilates CBD North",
    neighborhood: "CBD North",
    priceLevel: "A$$$",
    review: "4.9 · 920+ reviews",
    address: "330 Little Collins St, Melbourne VIC 3000",
    bestFor: "High-intensity reformer; Australia's largest Pilates chain",
    signatureClass: "KX50 Signature",
    bookingTip: "First class free; unlimited monthly from A$229",
  },
  {
    number: "02",
    name: "Peaches Pilates",
    neighborhood: "South Yarra",
    priceLevel: "A$$$",
    review: "4.9 · 670+ reviews",
    address: "1 Yarra St, South Yarra VIC 3141",
    bestFor: "Lagree Megaformer with cult following",
    signatureClass: "Peaches Lagree 50",
    bookingTip: "Book 48 hrs ahead; South Yarra classes fill fastest",
  },
  {
    number: "03",
    name: "Pilates Republic",
    neighborhood: "Prahran",
    priceLevel: "A$$$",
    review: "4.8 · 540+ reviews",
    address: "204 Chapel St, Prahran VIC 3181",
    bestFor: "BASI-trained instructors; classical method",
    signatureClass: "Republic Reformer",
    bookingTip: "Intro offer: 3 classes for A$75",
  },
  {
    number: "04",
    name: "F2 Collective",
    neighborhood: "Fitzroy",
    priceLevel: "A$$",
    review: "4.9 · 450+ reviews",
    address: "104 Smith St, Fitzroy VIC 3065",
    bestFor: "Neighbourhood boutique; community atmosphere",
    signatureClass: "F2 Reformer & Mat",
    bookingTip: "Monthly unlimited pass A$199; popular with locals",
  },
  {
    number: "05",
    name: "Upstate Studios",
    neighborhood: "Collingwood",
    priceLevel: "A$$$",
    review: "4.8 · 380+ reviews",
    address: "33 Peel St, Collingwood VIC 3066",
    bestFor: "Aerial hammock & reformer combo",
    signatureClass: "Upstate Aerial Reformer",
    bookingTip: "Aerial class numbers limited to 8; book early",
  },
  {
    number: "06",
    name: "I Am That Studio",
    neighborhood: "St Kilda",
    priceLevel: "A$$",
    review: "4.9 · 310+ reviews",
    address: "7 Acland St, St Kilda VIC 3182",
    bestFor: "Beachside Pilates with yoga fusion",
    signatureClass: "I Am That Reformer Flow",
    bookingTip: "Saturday sunrise classes sell out by Thursday",
  }
];

const BOOKING_TIPS = [
  { heading: "Expect to pay AU$35–60 per class", body: "Melbourne reformer Pilates pricing is competitive by global standards. Independent studios typically charge AU$35–45 for group reformer classes; premium boutique venues and private sessions run AU$55–80. Ten-class packs reduce the per-session cost meaningfully — most studios offer them from AU$280–380." },
  { heading: "ClassPass has strong Melbourne coverage", body: "ClassPass is widely used across Melbourne's studio scene and is an excellent way to trial multiple venues before committing to a membership. Most of the studios in this guide have ClassPass listings, though premium slots at top venues require higher credit allocations." },
  { heading: "Book 3–5 days ahead for popular sessions", body: "Melbourne's inner-city studios are busy, particularly on weekday mornings and Saturday. The city's strong brunch and fitness culture means weekend sessions are almost always booked out by midweek. Popular instructors' sessions can fill within hours of opening — follow your studio's social channels for notifications." },
  { heading: "Grip socks are required everywhere", body: "All Melbourne reformer studios require grip socks. Bonds and target both sell suitable pairs affordably; boutique grip socks from Lorna Jane or Alo are widely worn and available at most studios at the front desk. Keep a pair in your gym bag." },
  { heading: "Tipping is not customary in Australia", body: "Tipping is not part of Australian wellness culture. Instructors are paid industry rates and gratuities are neither expected nor common. The most valued form of appreciation is leaving a Google review or recommending the studio to friends." },
];

const NEIGHBORHOODS = [
  { name: "South Yarra & Prahran", description: "Melbourne's most established wellness corridor runs along Chapel Street and its surrounding streets in South Yarra and Prahran. Studios here skew premium — clientele is aspirational, instructors are well-credentialled, and the price points reflect the postcode. The concentration of studios means healthy competition that generally benefits quality." },
  { name: "Fitzroy & Collingwood", description: "Melbourne's creative heartland has developed a vibrant studio scene that matches the suburbs' energy. Studios here tend to be owner-operated, community-focused, and slightly more accessible in price than the South Yarra corridor. The inner-north demographic — young professionals, artists, creatives — has produced a loyal studio culture with strong word-of-mouth." },
  { name: "Armadale & Toorak", description: "Melbourne's most affluent inner-south-east suburbs host some of the city's finest private Pilates addresses. Studios here cater to a discerning clientele with time and resources to invest in the full apparatus and extended private sessions. Quality is reliably exceptional; wait times for preferred instructors can be considerable." },
  { name: "St Kilda & Albert Park", description: "The bayside suburbs have nurtured a Pilates scene that reflects the area's relaxed, health-conscious lifestyle. Studios here combine quality instruction with an inclusive, welcoming atmosphere that makes them popular with both newcomers and experienced practitioners. The proximity to the foreshore adds a lifestyle dimension that purely urban studios can't replicate." },
];

const RELATED_CITIES = [
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 5 },
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 5 },
  { city: "Berlin", country: "Germany", href: "/cities/berlin", studioCount: 5 },
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
        { "@type": "ListItem", "position": 2, "name": "Melbourne", "item": "https://pilatescollectiveclub.com/cities/melbourne" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Melbourne",
      "description": "Curated guide to the top 5 Pilates studios in Melbourne.",
      "url": "https://pilatescollectiveclub.com/cities/melbourne",
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
            "addressLocality": "Melbourne",
            "addressCountry": "AU",
          },
        },
      })),
    },
  ],
};

export default function MelbournePage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Australia</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Melbourne</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Melbourne has one of the most sophisticated wellness cultures in the Southern Hemisphere — and Pilates sits at its core. The city&apos;s inner suburbs have nurtured a dense, competitive studio scene where quality is the norm and the best venues rival anything in London or New York. From Fitzroy&apos;s warehouse conversions to South Yarra&apos;s polished heritage spaces, Melbourne&apos;s five best studios are worth knowing whether you&apos;re a resident or a visitor.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1514395462725-fb4566210144?w=1400&q=80" alt="Melbourne city guide — Pilates Collective Club" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Melbourne, Australia</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>The Southern Hemisphere&apos;s most vibrant Pilates destination</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Melbourne</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Melbourne</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Melbourne&apos;s Pilates landscape is shaped by its neighbourhoods.</p>
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

        <CTASection title="Find Pilates near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best reformer Pilates in Melbourne…" />
      </main>
      <Footer />
    </>
  );
}
