import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "The Best Pilates Studios in Paris | Pilates Collective Club",
  description:
    "Our curated guide to Parisian Pilates. From the Marais to Saint-Germain — the five studios we rate most highly, with everything you need to book with confidence.",
};

const STUDIOS = [
  {
    number: "01",
    name: "La Maison du Pilates",
    neighborhood: "11th Arrondissement",
    priceLevel: "€€€",
    review:
      "La Maison du Pilates has established itself as the finest dedicated Pilates studio in Paris — a space that takes the method with the seriousness it deserves in a city better known for yoga and barre. The Oberkampf location is warmly designed with high-quality Balanced Body reformers, and the teaching is exceptional: precise, patient, and deeply knowledgeable. Sessions here are conducted in small groups (maximum eight), which ensures a level of individual attention rare in Paris.",
    address: "17 Rue Saint-Sébastien, 75011 Paris",
    bestFor: "Dedicated Pilates practitioners, all levels, small-group reformer",
    signatureClass: "Reformer Flow",
    bookingTip: "Book through their website at least three days in advance. The morning classes on Tuesday and Thursday are consistently the most popular.",
  },
  {
    number: "02",
    name: "Studio Pilates de Paris",
    neighborhood: "15th Arrondissement",
    priceLevel: "€€",
    review:
      "Studio Pilates de Paris is a well-established institution in the 15th — one of the older dedicated Pilates studios in the city and still one of the best. The teaching here is rooted in classical method, which gives the studio a different character from the more trend-forward boutiques closer to the Marais. Clients tend to return for years, which speaks to the quality and consistency of instruction. Excellent for beginners who want to understand the foundations before exploring contemporary variations.",
    address: "142 Rue Lecourbe, 75015 Paris",
    bestFor: "Classical method, beginners, long-term practitioners",
    signatureClass: "Classical Reformer",
    bookingTip: "The studio runs regular beginner introductory workshops. Starting with one of these before group classes is strongly recommended.",
  },
  {
    number: "03",
    name: "Pilates Factory Paris",
    neighborhood: "Marais (4th Arrondissement)",
    priceLevel: "€€€",
    review:
      "Pilates Factory occupies a beautiful space in the Marais and has attracted a loyal following among Parisians who want a more dynamic, energy-forward reformer experience. The instruction here is high-quality and the class formats — particularly the signature 45-minute express sessions — are intelligently designed for busy urban schedules. The studio has a clear visual identity and a community feel that's genuinely welcoming. A strong choice for those who find more traditional studios too austere.",
    address: "34 Rue du Bourg Tibourg, 75004 Paris",
    bestFor: "Dynamic reformer, time-efficient sessions, design-forward environment",
    signatureClass: "Factory Express Reformer",
    bookingTip: "The Marais location is always busy. The 8am session is your best bet for spontaneous availability.",
  },
  {
    number: "04",
    name: "Perform Pilates",
    neighborhood: "Saint-Germain-des-Prés (6th Arrondissement)",
    priceLevel: "€€€",
    review:
      "Perform Pilates is the choice of many of Paris's professional athletes and serious wellness practitioners — a studio that bridges the gap between clinical Pilates and high-performance training. The instruction is evidence-based and often draws on physiotherapy principles. The Saint-Germain location is refined and relatively quiet, attracting a mature, dedicated clientele. If you're dealing with an injury or want to use Pilates as a structured rehabilitation tool, this is the first place to call.",
    address: "8 Rue de l'École de Médecine, 75006 Paris",
    bestFor: "Performance training, injury rehabilitation, experienced practitioners",
    signatureClass: "Athletic Reformer Performance",
    bookingTip: "First-time clients are invited to a 30-minute intake assessment before group classes. Worth doing — the personalisation it unlocks is significant.",
  },
  {
    number: "05",
    name: "Le Reformeur Paris",
    neighborhood: "République (10th Arrondissement)",
    priceLevel: "€€",
    review:
      "Le Reformeur has become a favourite with younger Parisians through a combination of accessible pricing, a genuinely fun atmosphere, and instruction quality that punches above its price point. The République studio is bright and unpretentious, with a community energy that makes first-timers feel immediately at home. The class structure is clear and progressive, and the teaching team is engaged and enthusiastic. Not the most refined studio in the guide, but possibly the one you'll enjoy most.",
    address: "12 Passage du Caire, 75002 Paris",
    bestFor: "Accessible pricing, community atmosphere, beginners and intermediates",
    signatureClass: "Le Reform Flow",
    bookingTip: "First class is discounted for new clients. The 6:30pm weekday classes are the busiest — book well ahead.",
  },
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
  },
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt: "Build a home practice that complements your studio sessions.",
    href: "/blog/best-pilates-equipment-for-home-practice",
    category: "Equipment",
    readTime: "10 min read",
    date: "May 2026",
  },
];

export default function ParisPage() {
  return (
    <>
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
              Paris has developed a Pilates scene that, like everything in the city, carries its own distinct character. Studios here tend to be intimate, instruction-led, and deeply serious about the method — reflecting a Parisian cultural preference for genuine expertise over spectacle. This guide covers the five studios we rate most highly, from the Marais to the 15th, along with everything you need to navigate the city&apos;s booking culture and find your perfect match.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1400&q=80"
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Studios · Curated & Verified</p>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Paris</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Paris&apos;s arrondissement system shapes where you&apos;ll find each type of studio. Here&apos;s a quick reference.</p>
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
