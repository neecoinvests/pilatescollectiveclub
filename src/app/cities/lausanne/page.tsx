import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "The Best Pilates Studios in Lausanne",
  description:
    "Our curated guide to Lausanne's best Pilates studios. Overlooking Lake Geneva, this university city has a growing and quality-conscious wellness scene.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates lausanne", "reformer pilates lausanne", "best pilates lausanne", "pilates studios lausanne", "pilates vaud"],
  openGraph: {
    title: "The Best Pilates Studios in Lausanne",
    description: "Our curated guide to Lausanne's best Pilates studios — five verified studios with booking tips.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/lausanne",
    images: [{ url: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1200&q=80", width: 1200, height: 630, alt: "Lausanne city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Lausanne",
    description: "Our curated guide to Lausanne's best Pilates studios — five verified studios with booking tips.",
    images: ["https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/lausanne",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "PILAT3S Marterey",
    neighborhood: "Centre-ville",
    priceLevel: "CHF ··",
    review: "PILAT3S Marterey is Lausanne's most recognisable reformer address, operating from the city centre with the confident assurance of a brand that has refined its formula across multiple Swiss locations and understands precisely what its clients expect. The studio's central position makes it accessible from both the old town and the lake-facing districts, drawing a broad professional clientele that values consistency of delivery as much as technical depth. Classes follow the PILAT3S method — structured, progressive, and demanding enough to be credible as a primary training discipline — with instructors who apply the framework intelligently rather than mechanically. Equipment is premium and immaculately maintained throughout, and the booking system is efficient and bilingual. For practitioners new to Lausanne and wanting a reliable, high-quality reformer experience without the research burden of navigating an unfamiliar city, PILAT3S Marterey is the logical first call.",
    address: "—",
    bestFor: "Practitioners new to Lausanne and those wanting consistent, method-driven reformer work",
    signatureClass: "PILAT3S Signature Reformer",
    bookingTip: "Online booking is straightforward and bilingual; prime slots fill two to three days ahead",
  },
  {
    number: "02",
    name: "JOIA Studio Lausanne",
    neighborhood: "Ouchy",
    priceLevel: "CHF ··",
    review: "JOIA Studio sits in Ouchy — Lausanne's lakefront district, where the Léman opens wide and the pace drops perceptibly from the city above — and the studio inhabits its setting with an intelligence that elevates it above a simple wellness offering. The interior is calm and generously proportioned, with views that on clear days extend to the French Alps across the water, which creates a training environment of uncommon quality. Instruction is thoughtful and personalised, with a teaching team that takes the time to understand each client's body history before advancing the work. JOIA appeals particularly to practitioners in their thirties and forties who have some movement background and are looking for a studio that offers both physical challenge and genuine restoration. The post-session quality — that particular calm that follows genuinely well-instructed Pilates — is reliably present here.",
    address: "—",
    bestFor: "Experienced practitioners seeking a restorative and technically demanding lakefront studio",
    signatureClass: "JOIA Lakefront Reformer",
    bookingTip: "Semi-private sessions are particularly well-regarded; worth the modest premium over group rates",
  },
  {
    number: "03",
    name: "Vivid Pilates",
    neighborhood: "Flon",
    priceLevel: "CHF ·",
    review: "Vivid Pilates has positioned itself intelligently in Flon — the former industrial district that now functions as Lausanne's cultural and nightlife hub — where it serves a young, energetic clientele that takes its physical training seriously but does not want its wellness to feel precious or inaccessible. The studio's design reflects the neighbourhood: industrial materials softened with warmth, an atmosphere that feels lived-in rather than aspirationally staged. Instruction emphasises movement quality and body awareness, with classes that build genuine challenge over time rather than recycling the same beginner-appropriate sequences indefinitely. Pricing is the most accessible in central Lausanne for the level of instruction offered, which has built a strong base of regulars — students, young professionals, and creative workers — who treat Vivid as a cornerstone of their weekly routine. A consistently excellent all-rounder.",
    address: "—",
    bestFor: "Young professionals and beginners to intermediate practitioners in Lausanne's creative community",
    signatureClass: "Vivid Flow Reformer",
    bookingTip: "Monthly memberships represent outstanding value; introductory pack is the best entry point",
  },
  {
    number: "04",
    name: "Studio Rituels",
    neighborhood: "Montriond",
    priceLevel: "CHF ··",
    review: "Studio Rituels occupies a quiet corner of Montriond — one of Lausanne's most pleasantly residential neighbourhoods, where the city's characteristic hills provide a backdrop of green even in the studio's immediate surroundings — and operates with the intentional, ritual-driven philosophy its name suggests. Sessions here are not rushed. Classes are small, instruction is detailed, and the studio's founders have been deliberate about building a space where Pilates is practised as a considered discipline rather than consumed as a fitness product. The teaching team has international training backgrounds and a shared commitment to classical methodology adapted thoughtfully for contemporary bodies. Studio Rituels suits practitioners who have moved beyond curiosity about Pilates and are ready to build a genuine long-term practice, ideally with consistent instructors who will come to know their bodies over time.",
    address: "—",
    bestFor: "Dedicated practitioners seeking long-term studio relationships and classical rigour",
    signatureClass: "Rituels Reformer & Apparatus",
    bookingTip: "Enrol in a class series rather than booking ad hoc — the studio's depth rewards consistency",
  },
  {
    number: "05",
    name: "Sculpt Pilates Studio",
    neighborhood: "Chailly",
    priceLevel: "CHF ·",
    review: "Sculpt Pilates Studio operates from Chailly — a calm, upper-residential neighbourhood above the city centre with a community-oriented character — where it has built a reputation as Lausanne's most approachable quality studio for practitioners who find the city-centre options either too expensive or too pressured. The programming balances reformer work with mat-based classes and occasional barre fusion formats, giving clients variety without losing the technical core that distinguishes proper Pilates instruction from general fitness classes. Instructors are personable and genuinely invested in client progress, with a teaching approach that meets people where they are rather than assuming a baseline that many newcomers do not have. Sculpt suits families, retirees, and neighbourhood regulars as much as it suits younger fitness-oriented clients — and the scheduling reflects that breadth.",
    address: "—",
    bestFor: "All levels, particularly families and neighbourhood regulars seeking quality without pressure",
    signatureClass: "Sculpt Reformer & Mat",
    bookingTip: "Morning classes suit the neighbourhood's family schedule; evening sessions are popular with commuters",
  }
];

const BOOKING_TIPS = [
  {
    heading: "Lausanne is smaller than Zurich or Geneva",
    body: "The city's Pilates scene is more intimate, which means quality studios have fewer spots and regulars tend to book recurring slots. Flexibility on timing helps if you're new to a studio.",
  },
  {
    heading: "CHF 30–50 per class is the typical range",
    body: "Drop-in rates across Lausanne's studios run from around CHF 30 at more accessible studios to CHF 50 at premium private session specialists. Abonnements are available at all studios and offer significant savings.",
  },
  {
    heading: "French is the primary language",
    body: "Most Lausanne studios teach in French. However, several offer English instruction on request or have bilingual teachers — check when you book.",
  },
  {
    heading: "Ouchy is worth the commute",
    body: "If you're based in central Lausanne, the metro M2 gets you to the lakeside Ouchy neighbourhood in under 10 minutes. The studios there often have the most beautiful settings in the region.",
  },
  {
    heading: "Early booking is essential",
    body: "Unlike larger cities with many competing studios, Lausanne's best spots fill quickly. Book three to five days ahead for prime morning slots.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Centre-Ville",
    description:
      "The city centre is well-served by public transport and has the highest concentration of studios. Practical for practitioners who are visiting or working centrally.",
  },
  {
    name: "Ouchy",
    description:
      "The lakeside neighbourhood at the foot of the city, reached via the funicular or metro. Studios here offer the most scenic practice environments in the region.",
  },
  {
    name: "Flon",
    description:
      "Lausanne's revitalised cultural and commercial district. A younger crowd, energetic studios, and a vibrant social scene that makes the before-and-after ritual particularly enjoyable.",
  },
  {
    name: "Pully",
    description:
      "The quiet eastern suburb is home to neighbourhood studios with a loyal local following. Lower prices, intimate atmosphere, and the kind of long-term community feel that's hard to manufacture.",
  },
];

const RELATED_CITIES = [
  { city: "Geneva", country: "Switzerland", href: "/cities/geneva", studioCount: 5 },
  { city: "Zurich", country: "Switzerland", href: "/cities/zurich", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
];

const FURTHER_READING = [
  {
    title: "The 6 Core Principles of Pilates, Explained",
    excerpt: "Concentration, control, centering, precision, breath, and flow — what they actually mean in practice.",
    href: "/blog/6-core-principles-of-pilates-explained",
    category: "Method",
    readTime: "6 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80",
  },
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt: "Build a home practice that complements your studio sessions.",
    href: "/blog/best-pilates-equipment-for-home-practice",
    category: "Equipment",
    readTime: "10 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1567013127542-490d757e6349?w=800&q=80",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Lausanne", "item": "https://pilatescollectiveclub.com/cities/lausanne" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Lausanne",
      "description": "Curated guide to the top 5 Pilates studios in Lausanne.",
      "url": "https://pilatescollectiveclub.com/cities/lausanne",
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
            "addressLocality": "Lausanne",
            "addressCountry": "CH",
          },
        },
      })),
    },
  ],
};

export default function LausannePage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Switzerland</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Lausanne</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 7 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Lausanne sits on the terraced shores of Lake Geneva — a city of hills, academic energy, and a wellness culture that has evolved quietly into something genuinely impressive. Smaller than Zurich or Geneva, it rewards those who take the time to look. The studios here are intimate, instruction-led, and almost always stunning in location. This guide covers the five we rate most highly.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1400&q=80"
                alt="Lausanne lakeside terrace view"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Lausanne, Switzerland</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Intimate studios above a stunning lakeshore</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Lausanne</h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((tip) => (
                <div key={tip.heading} className="pcc-booking-tip flex gap-5 rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217, 194, 186, 0.3)" }}>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Lausanne</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Lausanne's hills shape its neighbourhoods as much as its culture. Here's where to look.</p>
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best Pilates studios in Lausanne…" />
      </main>
      <Footer />
    </>
  );
}
