import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Geneva (2026) — Curated Guide",
  description: "The best Pilates studios in Geneva — reformer boutiques and classical method in Eaux-Vives, Champel, and Carouge. Six curated picks, verified October 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates geneve", "pilates geneva", "reformer pilates geneva", "best pilates studios geneva", "pilates studio geneve", "pilates eaux-vives", "pilates carouge", "pilates switzerland", "best pilates suisse", "pilates classes geneva"],
  openGraph: {
    title: "Best Pilates Studios in Geneva (2026)",
    description: "Six curated Pilates studios in Geneva — reformer and classical method picks from Eaux-Vives to Carouge. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/geneva",
    images: [{ url: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1200&q=80", width: 1200, height: 630, alt: "Geneva city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Geneva (2026)",
    description: "Our curated guide to the best Pilates studios in Geneva — six verified studios with booking tips.",
    images: ["https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/geneva",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Form Studio — Pâquis",
    neighborhood: "Pâquis",
    priceLevel: "$$$$",
    review: "Form Studio is a woman-owned reformer studio with two Geneva locations; the Pâquis studio on Place de la Navigation is the busier of the two, rated 4.8 from more than 1,000 reviews on ClassPass. It takes a modern, high-energy approach to reformer and mat Pilates, with showers, lockers and towels on site.",
    caveat: "high-energy contemporary classes — classical purists may prefer a slower, method-led studio.",
    address: "Place de la Navigation 8, 1201 Genève",
    bestFor: "Modern, high-energy reformer close to the lake",
    signatureClass: "Reformer Pilates",
    bookingTip: "Form's second studio is at Avenue de la Gare des Eaux-Vives 28 — useful if Pâquis is full.",
  },
  {
    number: "02",
    name: "Pilates Social Club",
    neighborhood: "Champel · Eaux-Vives · Pâquis",
    priceLevel: "$$$",
    review: "Pilates Social Club offers Pilates, barre and stretching in a warm, welcoming atmosphere across three Geneva studios — Avenue Dumas in Champel, Rue des Pierres-du-Niton in Eaux-Vives and Rue de Zurich in Pâquis — each rated around 4.8 on ClassPass. Having three studios makes it one of the most flexible options in the city.",
    caveat: "a multi-studio brand — consistent, but less intimate than a single owner-run studio.",
    address: "Avenue Dumas 12, 1206 Genève (Champel)",
    bestFor: "Reformer, barre and stretch across three neighbourhoods",
    signatureClass: "Reformer Pilates",
    bookingTip: "Book at whichever of the three studios is closest — schedules differ, so check all three.",
  },
  {
    number: "03",
    name: "Soho Studio",
    neighborhood: "Old Town (Vieille-Ville)",
    priceLevel: "$$$",
    review: "Soho Studio on Rue de la Pélisserie, just below the Old Town, tops ClassPass's ranking of reformer studios in Switzerland, with a 4.7 rating from more than 5,000 reviews. That volume of reviews makes it one of the most proven reformer studios in the country.",
    caveat: "its popularity means prime-time classes go quickly — book in advance.",
    address: "Rue de la Pélisserie 16, 1204 Genève",
    bestFor: "Well-proven group reformer in the centre",
    signatureClass: "Reformer Pilates",
    bookingTip: "Set booking alerts for evening and weekend classes — they fill first.",
  },
  {
    number: "04",
    name: "Glow Pilates Studio",
    neighborhood: "Eaux-Vives",
    priceLevel: "$$$",
    review: "Glow Pilates Studio on Rue de la Terrassière runs 50-minute group reformer classes in Eaux-Vives, a lively lakeside quarter of cafés and independent shops. At around CHF 49 per class it is typical of Geneva's premium reformer pricing.",
    caveat: "there is limited published detail about the instructors — take a single class before buying a pack.",
    address: "Rue de la Terrassière 28, 1207 Genève",
    bestFor: "50-minute group reformer in Eaux-Vives",
    signatureClass: "Group Reformer (50 min)",
    bookingTip: "Compare single-class and pack pricing — packs usually lower the per-class cost.",
  },
  {
    number: "05",
    name: "Sol Studio",
    neighborhood: "Eaux-Vives · Plainpalais",
    priceLevel: "$$$",
    review: "Sol Studio is a holistic movement space offering yoga and Pilates, with studios on Rue Maunoir in Eaux-Vives and Rue des Bains in Plainpalais. The Eaux-Vives studio is rated 4.9 from more than 1,000 reviews on ClassPass, and its classes include reformer and postnatal options.",
    caveat: "a yoga-and-Pilates studio — check that the class you book is reformer if that is what you want.",
    address: "Rue Maunoir 14, 1207 Genève",
    bestFor: "Reformer and postnatal Pilates alongside yoga",
    signatureClass: "Reformer Pilates",
    bookingTip: "The Plainpalais studio (Rue des Bains 52) is a good alternative on the left bank.",
  },
  {
    number: "06",
    name: "Aerial MVMT Pilates Studio",
    neighborhood: "Carouge",
    priceLevel: "$$",
    review: "Aerial MVMT is a reformer Pilates studio on the first floor of Route des Jeunes 43 in Carouge, just south of central Geneva. It is a useful option for people living or working on the Carouge and La Praille side of the city.",
    caveat: "limited published detail about class formats — take a trial class first; the entrance uses an access code, so read your booking confirmation.",
    address: "Route des Jeunes 43 (1st floor), 1227 Carouge",
    bestFor: "Reformer Pilates in Carouge",
    signatureClass: "Reformer Pilates",
    bookingTip: "Check your booking email for the building access code before you arrive.",
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

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at most reformer studios. Full-toe grip socks are the standard.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "A quality 6mm mat is worth having for mat classes and home practice between studio sessions.",
    price: "From $18",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Many studios incorporate the magic circle — worth owning for home reinforcement work.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands",
    note: "Fabric resistance loops extend your home Pilates practice and support reformer spring work.",
    price: "From $10",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "Foam Roller",
    note: "Essential for fascial release and spinal mobility work before and after class.",
    price: "From $13",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
  {
    name: "Home Pilates Reformer",
    note: "A home reformer extends your studio practice — AeroPilates and Align entry models deliver a genuine full-body session.",
    price: "From $257",
    url: "https://www.amazon.com/s?k=home+pilates+reformer+aeropilates+align&tag=pilatescollective-20",
  },
];


const RELATED_CITIES = [
  { city: "Lausanne", country: "Switzerland", href: "/cities/lausanne", studioCount: 4 },
  { city: "Zurich", country: "Switzerland", href: "/cities/zurich", studioCount: 6 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 6 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 6 },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
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
              Geneva's status as one of Europe's most international cities has shaped a Pilates scene of real quality and diversity. The city's affluent, health-conscious population has driven demand for premium instruction, while a growing community of younger practitioners has opened space for more accessible, community-led studios. This guide navigates both worlds — from lakeside private sessions in Champel to energised group classes in Plainpalais.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg"
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Studios · Curated & Verified</p>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Geneva</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Geneva's neighbourhoods each have a distinct character. Here's where to look.</p>
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

        {/* Studio Gear */}
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to bring to your first class</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Grip socks are required at most reformer studios in Geneva. These are our recommended picks — all available on Amazon.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#8b4a31", textDecoration: "underline", fontFamily: "'Montserrat', sans-serif", fontSize: "inherit" }}>Affiliate disclosure.</Link>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {GEAR.map((g) => (
                <a key={g.name} href={g.url} target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: "none" }}>
                  <div className="rounded-xl p-5 h-full flex flex-col justify-between" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)", transition: "border-color 0.2s" }}>
                    <div>
                      <h3 className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{g.name}</h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{g.note}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{g.price}</span>
                      <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#c5a882", fontFamily: "'Montserrat', sans-serif" }}>Shop →</span>
                    </div>
                  </div>
                </a>
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
