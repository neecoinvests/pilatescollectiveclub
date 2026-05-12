import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "The Best Pilates Studios in Geneva | Pilates Collective Club",
  description:
    "Our curated guide to the best Pilates studios in Geneva — from Form Studio and Pilates Social Club to Swissbody®, the region's most established classical studio. Five verified picks.",
  openGraph: {
    title: "The Best Pilates Studios in Geneva",
    description: "Our curated guide to the best Pilates studios in Geneva — five verified studios with booking tips.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/geneva",
    images: [{ url: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1200&q=80", width: 1200, height: 630, alt: "Geneva city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Geneva",
    description: "Our curated guide to the best Pilates studios in Geneva — five verified studios with booking tips.",
    images: ["https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1200&q=80"],
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Form Studio Geneva",
    neighborhood: "Pâquis",
    priceLevel: "CHF ···",
    review:
      "Form Studio's Geneva location brings the same music-driven reformer energy that has made the brand one of Switzerland's most respected boutique Pilates offers. Situated in the vibrant Pâquis district near the lake, the studio transforms effort into flow with carefully curated playlists and precise instruction delivered in an elegant space. The Geneva flagship is the natural pairing to the Zurich studios — consistent in quality, beautiful in design, and accessible to all experience levels.",
    address: "Place de la Navigation 8, 1201 Genève",
    bestFor: "Music-driven reformer, all levels, boutique experience",
    signatureClass: "Form Flow Reformer",
    bookingTip: "Book through their app at least 24 hours ahead. Evening classes near the waterfront fill quickly — secure your spot on Sunday for the week ahead.",
  },
  {
    number: "02",
    name: "Body Mind Center Geneva",
    neighborhood: "Champel",
    priceLevel: "CHF ····",
    review:
      "Body Mind Center occupies a beautiful space in Champel, one of Geneva's most refined residential neighbourhoods. The studio integrates Pilates with somatic movement practices and mindfulness in a way that feels genuinely holistic rather than merely fashionable. The instructors here are among the most experienced in the city, and the private session offer is particularly strong. For clients who want more than a workout — who are looking to re-pattern movement, recover from injury, or develop a sophisticated practice — this is the first port of call.",
    address: "Avenue de Champel 28, 1206 Genève",
    bestFor: "Private sessions, rehabilitation, somatic movement",
    signatureClass: "Integrative Body Pilates",
    bookingTip: "Private sessions require an initial assessment booking. Allow a week's lead time and email ahead with your movement history.",
  },
  {
    number: "03",
    name: "Pilates Social Club",
    neighborhood: "Eaux-Vives",
    priceLevel: "CHF ···",
    review:
      "Pilates Social Club is one of Geneva's most community-minded reformer studios — a concept with multiple locations across the city that brings together group classes designed to build strength and create meaningful connections. The Eaux-Vives studio on the Rive Gauche is the flagship, and the ethos of combining excellent reformer instruction with genuine sociability has resonated strongly in a city known for its international community. An excellent choice for those who want quality Pilates alongside a welcoming social environment.",
    address: "Rue des Pierres-du-Niton 8, 1207 Genève",
    bestFor: "Group reformer, social community, all levels",
    signatureClass: "Social Club Reformer",
    bookingTip: "Book through their website or ClassPass. The studio has multiple Geneva locations — check all of them if your preferred slot is full.",
  },
  {
    number: "04",
    name: "Swissbody® Pilates",
    neighborhood: "City Centre / Rive Droite",
    priceLevel: "CHF ····",
    review:
      "Swissbody® is the most historically significant Pilates studio in French-speaking Switzerland — established in 1998 as the first fully-equipped Pilates studio in the region and still one of Europe's premier Pilates training facilities. The central Geneva location on the Rive Droite features four large, sunny studios with the full range of classical apparatus. The institution's decades of experience and its status as a leading European training centre make it the reference address for anyone seeking the classical method at its most complete.",
    address: "Cr de Rive 4, 1204 Genève",
    bestFor: "Classical Pilates, full apparatus, institutional standard",
    signatureClass: "Classical Apparatus Session",
    bookingTip: "Swissbody® serves both regular clients and student practitioners. First-time clients should reach out to discuss the appropriate programme before booking.",
  },
  {
    number: "05",
    name: "Espace Pilates Genève",
    neighborhood: "Carouge",
    priceLevel: "CHF ··",
    review:
      "Espace Pilates sits in the charming Carouge neighbourhood — a village-within-a-city that attracts a local, neighbourhood-first clientele. The studio is warm and intimate, with the feel of a small family-run operation — which it essentially is. The instruction here is classical and careful, with a genuine interest in each client's individual development. It doesn't have the design credentials of some competitors, but it has something harder to manufacture: a sense of real community and genuine care.",
    address: "Rue Saint-Victor 6, 1227 Carouge, Genève",
    bestFor: "Classical method, community feel, neighbourhood studio experience",
    signatureClass: "Classical Mat & Reformer",
    bookingTip: "The Saturday morning class has become a weekly ritual for many regulars — book it by Wednesday to guarantee a spot.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Geneva studios expect punctuality",
    body: "Arrive at least 10 minutes before your class. Several Geneva studios operate a strict door policy — arriving late means being turned away. Swiss punctuality applies.",
  },
  {
    heading: "French is the working language",
    body: "Most Geneva studios teach in French. However, given the city's international character, many instructors speak excellent English. Check when booking if this matters to you.",
  },
  {
    heading: "CHF 35–55 per class is standard",
    body: "Drop-in reformer classes in Geneva run from CHF 35 at value studios to CHF 55 at premium boutiques. Class packs and abonnements (monthly memberships) offer meaningful savings.",
  },
  {
    heading: "Grip socks are required",
    body: "Every reformer studio in Geneva requires grip socks. Most sell them on-site, but bringing your own will cost significantly less over time.",
  },
  {
    heading: "Book 3–5 days in advance",
    body: "Premium morning slots at well-regarded studios fill quickly. Most studios open weekly schedules on Sunday — set a reminder to book priority slots early.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Eaux-Vives (Rive Gauche)",
    description:
      "Geneva's most vibrant lakeside neighbourhood, with excellent studio access and easy transport links. A natural home for wellness practitioners and a growing number of quality studios.",
  },
  {
    name: "Champel",
    description:
      "One of Geneva's most affluent residential areas, home to premium wellness studios that prioritise private sessions and bespoke experiences. Expect high standards and correspondingly higher prices.",
  },
  {
    name: "Plainpalais & Acacias",
    description:
      "Geneva's creative quarter has seen significant studio growth in recent years. More accessible pricing, younger clientele, and some genuinely excellent instruction at studios that haven't yet been discovered by the luxury wellness crowd.",
  },
  {
    name: "Carouge",
    description:
      "This charming, independent neighbourhood just south of Geneva proper has an authentic village character that attracts loyal local practitioners. Studios here are intimate and community-focused.",
  },
];

const RELATED_CITIES = [
  { city: "Lausanne", country: "Switzerland", href: "/cities/lausanne", studioCount: 5 },
  { city: "Zurich", country: "Switzerland", href: "/cities/zurich", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
];

const FURTHER_READING = [
  {
    title: "How to Build a Consistent Pilates Practice",
    excerpt: "Practical strategies for making Pilates a lasting habit, even with a busy schedule.",
    href: "/blog/how-to-build-a-consistent-pilates-practice",
    category: "Lifestyle",
    readTime: "7 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&q=80",
  },
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt: "Build a home practice that complements your studio sessions.",
    href: "/blog/best-pilates-equipment-for-home-practice",
    category: "Equipment",
    readTime: "10 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Geneva", "item": "https://pilatescollectiveclub.com/cities/geneva" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Geneva",
      "description": "Curated guide to the top 5 Pilates studios in Geneva.",
      "url": "https://pilatescollectiveclub.com/cities/geneva",
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
            "addressLocality": "Geneva",
            "addressCountry": "CH",
          },
        },
      })),
    },
  ],
};

export default function GenevaPage() {
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
              <span style={{ color: "#8b4a31" }}>in Geneva</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Geneva&apos;s status as one of Europe&apos;s most international cities has shaped a Pilates scene of real quality and diversity. The city&apos;s affluent, health-conscious population has driven demand for premium instruction, while a growing community of younger practitioners has opened space for more accessible, community-led studios. This guide navigates both worlds — from lakeside private sessions in Champel to energised group classes in Plainpalais.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1400&q=80"
                alt="Geneva lake view"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Genève, Switzerland</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>International excellence meets Swiss precision</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Geneva</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Geneva</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Geneva&apos;s neighbourhoods each have a distinct character. Here&apos;s where to look.</p>
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best Pilates in Geneva…" />
      </main>
      <Footer />
    </>
  );
}
