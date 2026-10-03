import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Paris (2026) — Curated Guide",
  description: "The best Pilates studios in Paris — reformer boutiques in the Marais, Saint-Germain, and the 16th arrondissement. Six curated picks, verified October 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates paris", "studio pilates paris", "reformer pilates paris", "best pilates studios paris", "pilates paris 16", "pilates marais paris", "pilates saint-germain", "pilates france", "cours pilates paris", "best reformer pilates paris"],
  openGraph: {
    title: "Best Pilates Studios in Paris (2026)",
    description: "Six curated Pilates studios in Paris — Marais, Saint-Germain, and 16th arrondissement reformer picks. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/paris",
    images: [{ url: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1200&q=80", width: 1200, height: 630, alt: "Paris city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Paris (2026)",
    description: "Our curated guide to the best Pilates studios in Paris — six verified picks with booking tips.",
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
    neighborhood: "Le Marais · Palais-Royal",
    priceLevel: "$$$",
    review: "Reformation opened in 2017 and is known for both the quality of its classes and its warm welcome. Group classes run on reformer or tower machines with certified trainers, in two light-filled studios on Rue du Temple in the Marais and Rue de Richelieu near the Palais-Royal.",
    caveat: "popular weekend classes fill early in the week.",
    address: "175 Rue du Temple, 75003 Paris",
    bestFor: "Reformer and tower group classes in the centre",
    signatureClass: "Reformer & Tower",
    bookingTip: "If the Marais is full, try the Palais-Royal studio at 47 Rue de Richelieu.",
  },
  {
    number: "02",
    name: "The New Me",
    neighborhood: "13 studios across Paris",
    priceLevel: "$$",
    review: "The New Me has 13 Parisian studios and a fresh, upbeat take on reformer Pilates, including its own Newformer Pilates classes — the most convenient choice if you want a studio near home and work.",
    caveat: "a large chain — consistent and accessible, but less intimate than a boutique.",
    address: "—",
    bestFor: "Accessible reformer with many locations",
    signatureClass: "Newformer Pilates",
    bookingTip: "Check which of the 13 studios is closest before buying a membership.",
  },
  {
    number: "03",
    name: "RIISE Reformer",
    neighborhood: "8th arrondissement · Boulogne",
    priceLevel: "$$$",
    review: "After building a following with yoga and Pilates, RIISE created its own reformer method, working the whole body in sync with music with passionate, experienced coaches. Its reformer studios are on Rue La Boétie in the 8th and in Boulogne.",
    caveat: "music-driven group classes — energetic rather than classical.",
    address: "—",
    bestFor: "Music-driven reformer in the 8th and Boulogne",
    signatureClass: "RIISE Reformer",
    bookingTip: "Look for a discounted first session before buying a pack.",
  },
  {
    number: "04",
    name: "YUJ",
    neighborhood: "Paris",
    priceLevel: "$$$",
    review: "YUJ combines yoga with reformer Pilates, and its reformer classes are limited to five people, so the coach can follow and correct each participant's movement.",
    caveat: "with five places per class, slots are limited — book ahead.",
    address: "—",
    bestFor: "Small reformer classes alongside yoga",
    signatureClass: "Reformer (max 5)",
    bookingTip: "Use the YUJ app for live availability.",
  },
  {
    number: "05",
    name: "Sense Club",
    neighborhood: "Saint-Germain-des-Prés",
    priceLevel: "$$$",
    review: "Sense Club opened in early 2025 as a Pilates studio and coffee shop in Saint-Germain. Members describe instructors who are gentle and demanding at the same time, pushing people to surpass themselves in a safe, welcoming setting.",
    caveat: "a newer studio — its track record is shorter than the longer-established names here.",
    address: "—",
    bestFor: "Reformer and coffee on the Left Bank",
    signatureClass: "Reformer Pilates",
    bookingTip: "Stay for a coffee after class — that is part of the concept.",
  },
  {
    number: "06",
    name: "DNA Pilates",
    neighborhood: "Paris",
    priceLevel: "$$$",
    review: "DNA Pilates tops ClassPass's ranking of reformer studios in France and is one of the most-reviewed reformer studios in Paris.",
    caveat: "we could not confirm the exact address independently — check the booking app for the studio location.",
    address: "—",
    bestFor: "Top-rated reformer in Paris",
    signatureClass: "Reformer Pilates",
    bookingTip: "Its popularity means classes fill — book a few days ahead.",
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
    price: "From $359",
    url: "https://www.amazon.com/s?k=home+pilates+reformer+aeropilates+align&tag=pilatescollective-20",
  },
];


const RELATED_CITIES = [
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 6 },
  { city: "Zurich", country: "Switzerland", href: "/cities/zurich", studioCount: 6 },
  { city: "Geneva", country: "Switzerland", href: "/cities/geneva", studioCount: 6 },
  { city: "Lausanne", country: "Switzerland", href: "/cities/lausanne", studioCount: 4 },
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
              Paris has developed a Pilates scene that, like everything in the city, carries its own distinct character. Studios here tend to be intimate, instruction-led, and deeply serious about the method — reflecting a Parisian cultural preference for genuine expertise over spectacle. This guide covers the six studios we rate most highly, from the Marais to the 15th, along with everything you need to navigate the city's booking culture and find your perfect match.
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

        {/* Studio Gear */}
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to bring to your first class</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Grip socks are required at most reformer studios in Paris. These are our recommended picks — all available on Amazon.{" "}
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best Pilates studios in Paris…" />
      </main>
      <Footer />
    </>
  );
}
