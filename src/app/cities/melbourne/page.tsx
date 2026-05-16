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
    name: "Body Organics Pilates — South Yarra",
    neighborhood: "South Yarra",
    priceLevel: "$$$",
    review: "Body Organics is one of Melbourne's most respected Pilates institutions — a studio with over two decades of history in South Yarra that has trained some of the city's finest instructors. The curriculum is deeply classical, drawing on the Pilates–Zen approach developed by founder Cathy Balcombe, and the standard of instruction is consistently exceptional. Private and small-group sessions are the studio's core offering; the teaching team includes physiotherapists and movement specialists who bring clinical rigour to every session. For practitioners who take the method seriously, Body Organics is Melbourne's benchmark.",
    address: "Level 1, 432 Chapel Street, South Yarra VIC 3141",
    bestFor: "Classical method, physiotherapy-informed instruction, serious practitioners",
    signatureClass: "Pilates–Zen Private Session",
    bookingTip: "New clients are required to complete a private intake session before joining group classes. Email the studio to arrange this — it typically takes 60 minutes and is worth doing thoroughly. All slots must be booked online in advance.",
  },
  {
    number: "02",
    name: "Studio Pilates International — Fitzroy",
    neighborhood: "Fitzroy",
    priceLevel: "$$",
    review: "Studio Pilates International's Fitzroy location is one of the brand's strongest studios nationally, benefiting from a teaching team that reflects the suburb's creative, health-conscious character. The studio runs a structured 40-minute reformer programme that delivers a full-body workout with notable efficiency — popular with Fitzroy's café-culture professionals who want results without a ninety-minute commitment. The equipment is well-maintained, the programming progresses systematically through levels, and the community of regulars is notably engaged and welcoming.",
    address: "306 Smith Street, Fitzroy VIC 3065",
    bestFor: "Efficient reformer workout, level progression, Fitzroy community",
    signatureClass: "SPI Reformer 40",
    bookingTip: "Purchase an introductory pass for your first three sessions — it's significantly discounted and lets you try different instructors before committing to a membership. The Thursday 6:30am and Saturday 9am sessions are consistently the first to fill.",
  },
  {
    number: "03",
    name: "The Pilates Practice",
    neighborhood: "Armadale",
    priceLevel: "$$$",
    review: "The Pilates Practice occupies a beautifully refurbished heritage space in Armadale and has established itself as the definitive address for discerning practitioners in Melbourne's inner south-east. The studio is genuinely equipment-rich — a full cadillac, Wunda chairs, ladder barrel, and a fleet of Gratz reformers sit alongside the contemporary Balanced Body machines used for group classes. Owner-instructor Sarah Lowe trained with Pilates Anytime and brings an exceptionally deep knowledge of the classical system to every session. A genuinely special studio.",
    address: "1127 High Street, Armadale VIC 3143",
    bestFor: "Full apparatus, classical Gratz equipment, Armadale residents",
    signatureClass: "Classical Full Apparatus Session",
    bookingTip: "The studio's full apparatus sessions — which include work on the cadillac, chair, and barrel — are only available as privates or duets. Book these at least two weeks ahead. Group reformer classes are available with five to seven days' notice.",
  },
  {
    number: "04",
    name: "Coastal Pilates",
    neighborhood: "St Kilda",
    priceLevel: "$$",
    review: "Coastal Pilates has earned a loyal following in St Kilda by combining quality reformer instruction with the kind of open, inclusive atmosphere that makes it an easy first studio for newcomers to the method. The studio's proximity to the foreshore attracts a health-conscious clientele that values the connection between movement and environment — morning classes before a walk along the bay have become a local ritual. Pricing is sensible for the area, and the instructors communicate clearly across ability levels, making this one of Melbourne's most accessible entry points into reformer Pilates.",
    address: "2/14 Acland Street, St Kilda VIC 3182",
    bestFor: "Beginners, accessible pricing, beachside lifestyle",
    signatureClass: "Coastal Reformer Morning Flow",
    bookingTip: "Saturday morning slots are exceptionally popular — book by Wednesday if you want a weekend session. The studio offers a ClassPass-compatible introductory rate; check the Coastal Pilates listing directly on ClassPass for current availability.",
  },
  {
    number: "05",
    name: "Form Pilates Studio",
    neighborhood: "Collingwood",
    priceLevel: "$$",
    review: "Form occupies a converted warehouse space in Collingwood that perfectly captures Melbourne's industrial-chic aesthetic while delivering a Pilates experience of genuine quality. The studio specialises in reformer and mat Pilates with a contemporary approach — classes are energetic, technically sound, and structured around clear progressions that make improvement visible over a matter of weeks. The instruction team is young and well-trained, and the studio's community ethos — monthly events, social media engagement, regular challenges — has built an unusually tight-knit group of regulars for a studio that opened relatively recently.",
    address: "1/88 Johnston Street, Collingwood VIC 3066",
    bestFor: "Contemporary reformer, young community, progressive programming",
    signatureClass: "Form Reformer Progression",
    bookingTip: "Form uses Mindbody for all bookings. The studio has a 12-hour cancellation window — shorter than most Melbourne studios — so check the policy carefully before you book to avoid unexpected charges.",
  },
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Studios · Curated & Verified</p>
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
