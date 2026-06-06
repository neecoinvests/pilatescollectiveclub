import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "The Best Pilates Studios in Paris",
  description:
    "The best Pilates studios in Paris — reformer boutiques and Lagree studios from the Marais to Saint-Germain. Curated & verified picks for every level.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates paris", "studios pilates paris", "reformer pilates paris", "best pilates paris", "pilates 16eme"],
  openGraph: {
    title: "The Best Pilates Studios in Paris",
    description: "Our curated guide to the best Pilates studios in Paris — five verified picks with booking tips.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/paris",
    images: [{ url: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1200&q=80", width: 1200, height: 630, alt: "Paris city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Paris",
    description: "Our curated guide to the best Pilates studios in Paris — five verified picks with booking tips.",
    images: ["https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/paris",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Reformation Pilates",
    neighborhood: "Le Marais",
    priceLevel: "€€€",
    review: "Reformation Pilates in the Marais occupies a beautifully converted space that manages to feel both Parisian and international — exposed stone walls alongside immaculate Balanced Body reformers. The studio draws a fashion-conscious but serious clientele from the surrounding galleries and design studios, and the instruction matches the elevated surroundings. Classes are conducted primarily in French with English available on request, and the sequencing leans contemporary with a strong postural emphasis. The neighbourhood energy seeps into the experience: there is a particular rigour here, an aesthetic standard applied to the movement itself. Best suited to intermediate and advanced practitioners who want to be challenged rather than guided.",
    address: "—",
    bestFor: "Contemporary reformer for intermediates",
    signatureClass: "Reformer Intensif",
    bookingTip: "Book via the studio app; Saturday morning slots fill by Wednesday",
  },
  {
    number: "02",
    name: "Hundred Pilates",
    neighborhood: "Saint-Germain-des-Prés",
    priceLevel: "€€€",
    review: "Hundred Pilates sits in the literary heart of the Left Bank and carries something of the neighbourhood's intellectual seriousness into its approach to the method. The studio is named for the foundational Pilates exercise and the teaching reflects that reverence for first principles — clear progressions, respect for the classical order, and instructors who can explain the biomechanical rationale for every movement. The clientele is quietly affluent and includes a number of osteopaths and physiotherapists who send their own patients here. Saint-Germain regulars tend to be loyal, and the studio rewards that loyalty with attentive ongoing coaching. A reliable home studio for anyone living or working on the Left Bank.",
    address: "—",
    bestFor: "Classical method with rehabilitation awareness",
    signatureClass: "Reformer Classique",
    bookingTip: "A ten-class carnet offers the best value; beginners should start with the Reformer Débutant",
  },
  {
    number: "03",
    name: "The New Me",
    neighborhood: "8th Arrondissement",
    priceLevel: "€€€",
    review: "The New Me is situated in the 8th arrondissement — Paris's most polished neighbourhood — and it operates with corresponding ambition. The studio's reformer and tower programme is extensive and the space is large enough to run multiple simultaneous class formats without feeling crowded. The instructors skew young and internationally trained, bringing a contemporary sensibility to sessions that are nonetheless technically precise. The clientele includes expats working in finance and luxury goods, as well as Parisians who want a premium wellness experience close to the Champs-Élysées. It suits professionals who need reliable quality and flexibility across a varied weekly schedule.",
    address: "—",
    bestFor: "Premium reformer & tower",
    signatureClass: "Full-Body Reformer",
    bookingTip: "Monthly memberships include guest passes; early morning slots are the least competitive",
  },
  {
    number: "04",
    name: "RIISE Reformer",
    neighborhood: "Batignolles",
    priceLevel: "€€",
    review: "RIISE arrived in Batignolles and immediately became the neighbourhood's most talked-about wellness opening — a modern reformer studio that prioritises substance over styling while still managing to look very good. The classes are structured around progressive programming rather than standalone sessions, which means the studio rewards regular attendance in a way that drop-in models don't. Pricing is notably more accessible than studios in the more central arrondissements, making it a genuine option for Parisians who want serious reformer training without the 8th arrondissement premium. The Batignolles clientele is younger and more neighbourhood-rooted than the studio's more westerly competitors. A strong recommendation for anyone based in the 17th.",
    address: "—",
    bestFor: "Progressive reformer programming",
    signatureClass: "RIISE Reformer Flow",
    bookingTip: "Membership packages unlock progressive class tracks; first session is discounted",
  },
  {
    number: "05",
    name: "YUJ Yoga & Reformer Pilates",
    neighborhood: "Sentier",
    priceLevel: "€€€",
    review: "YUJ is Paris's most established premium wellness studio and its integration of yoga and reformer Pilates is genuinely thoughtful rather than merely fashionable. The Sentier studio is a flagship space: high ceilings, natural materials, and an atmosphere that rewards the slow kind of attention the work demands. The Pilates programme is taught by instructors with strong somatic backgrounds, and classes frequently incorporate breathwork and mindful sequencing in ways that feel earned rather than affected. The clientele is creative, well-travelled, and tends to hold strong opinions about wellness — the studio meets them at that level. Ideal for practitioners who move between yoga and Pilates and want both disciplines treated with equal seriousness.",
    address: "—",
    bestFor: "Yoga-Pilates integration",
    signatureClass: "Reformer & Restore",
    bookingTip: "The YUJ app has live availability; hybrid yoga-reformer packages offer good flexibility",
  },
  {
    number: "06",
    name: "Ateliers Ground Control",
    neighborhood: "Nation",
    priceLevel: "€€",
    review: "Ateliers Ground Control occupies a large, industrial-influenced space near Nation that manages to feel both serious and welcoming — a balance many studios aspire to and few achieve. The reformer programme is taught by instructors with contemporary dance backgrounds, and the movement quality in the room is consistently high. Ground Control has built a loyal local following in the 11th and 12th arrondissements, and the community feel here is genuine rather than manufactured. Pricing is among the most competitive for quality reformer Pilates in Paris, making it accessible to the neighbourhood's younger professional demographic. An excellent base studio for Pilates practitioners who don't need the postcode to match the practice.",
    address: "—",
    bestFor: "Contemporary reformer with dance influence",
    signatureClass: "Reformer Contemporain",
    bookingTip: "Block bookings available; look for off-peak morning slots for maximum space on the reformers",
  }
];

const BOOKING_TIPS = [
  {
    heading: "Reservations are essential",
    body: "Paris studios do not operate a reliable walk-in culture. Book in advance through the studio's website or app — last-minute availability is rare at the better studios.",
  },
  {
    heading: "Expect classes in French",
    body: "Most Paris Pilates classes are taught in French. Many instructors speak English, but do check in advance if you're not comfortable following cues en français.",
  },
  {
    heading: "The intro offer window is short",
    body: "Parisian studios typically offer introductory pricing for new clients valid for a limited period (often two to four weeks). Use it strategically to assess the studio's teaching style properly.",
  },
  {
    heading: "€18–35 per class is typical",
    body: "Drop-in rates at quality Paris studios range from around €18 at value-positioned studios to €35 at premium boutiques. Carnet (class pack) pricing brings the per-session cost down meaningfully.",
  },
  {
    heading: "Cancellation policies are strict",
    body: "Most Paris studios enforce a 12–24 hour cancellation window. Late cancellations are charged in full. Set a phone reminder the evening before your class if you're prone to schedule changes.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "The Marais (3rd & 4th Arr.)",
    description:
      "The spiritual home of Paris's boutique wellness scene. The Marais houses some of the city's most design-forward studios, attracting a creative, fashion-conscious clientele. Expect premium pricing and exceptional aesthetics.",
  },
  {
    name: "Saint-Germain-des-Prés (6th Arr.)",
    description:
      "The Left Bank's quiet, intellectual character suits Pilates particularly well. Studios here tend toward the classical and clinical — excellent for those who take the method seriously.",
  },
  {
    name: "République & Oberkampf (10th & 11th Arr.)",
    description:
      "Paris's most exciting emerging wellness neighbourhood. A younger, more diverse crowd, more accessible pricing, and some genuinely excellent independent studios that haven't been discovered by tourist guides yet.",
  },
  {
    name: "15th Arrondissement",
    description:
      "A residential neighbourhood with a loyal local clientele and several long-established studios. Quieter, less trendy, and often significantly better value than the central arrondissements.",
  },
];

const RELATED_CITIES = [
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "Zurich", country: "Switzerland", href: "/cities/zurich", studioCount: 5 },
  { city: "Geneva", country: "Switzerland", href: "/cities/geneva", studioCount: 5 },
  { city: "Lausanne", country: "Switzerland", href: "/cities/lausanne", studioCount: 5 },
];

const FURTHER_READING = [
  {
    title: "Classical vs Contemporary Pilates: Which Style Is Right for You?",
    excerpt: "Understanding the key differences between the original method and modern interpretations.",
    href: "/blog/classical-vs-contemporary-pilates",
    category: "Method",
    readTime: "7 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800&q=80",
  },
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt: "Build a home practice that complements your studio sessions.",
    href: "/blog/best-pilates-equipment-for-home-practice",
    category: "Equipment",
    readTime: "10 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1616279969862-6a5a367f9e2b?w=800&q=80",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Paris", "item": "https://pilatescollectiveclub.com/cities/paris" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Paris",
      "description": "Curated guide to the top 5 Pilates studios in Paris.",
      "url": "https://pilatescollectiveclub.com/cities/paris",
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
            "addressLocality": "Paris",
            "addressCountry": "FR",
          },
        },
      })),
    },
  ],
};

export default function ParisPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>France</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Paris</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Paris has developed a Pilates scene that, like everything in the city, carries its own distinct character. Studios here tend to be intimate, instruction-led, and deeply serious about the method — reflecting a Parisian cultural preference for genuine expertise over spectacle. This guide covers the five studios we rate most highly, from the Marais to the 15th, along with everything you need to navigate the city's booking culture and find your perfect match.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1400&q=80"
                alt="Paris cityscape"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Paris, France</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>An intimate and instruction-led Pilates culture</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Studios · Curated & Verified</p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (
                <StudioListing key={studio.number} {...studio} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Paris</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Paris</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Paris's arrondissement system shapes where you'll find each type of studio. Here's a quick reference.</p>
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best Pilates studios in Paris…" />
      </main>
      <Footer />
    </>
  );
}
