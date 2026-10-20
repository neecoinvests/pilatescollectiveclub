import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import QuickPicks from "@/components/QuickPicks";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml, productItemList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Lausanne (2026)",
  description: "The best Pilates studios in Lausanne — reformer studios from the city centre to Montchoisi and Avenue de France. Four curated picks, verified October 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates lausanne", "reformer pilates lausanne", "best pilates studios lausanne", "pilates studio lausanne", "pilates ouchy", "pilates suisse romande", "pilates switzerland", "best pilates lausanne", "pilates classes lausanne", "pilates vaud"],
  openGraph: {
    title: "Best Pilates Studios in Lausanne (2026)",
    description: "Four curated Pilates studios in Lausanne — reformer and classical method picks from Ouchy to the city centre. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/lausanne",
    images: [{ url: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1200&q=80", width: 1200, height: 630, alt: "Lausanne city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Lausanne (2026)",
    description: "Our curated guide to Lausanne's best Pilates studios — four verified studios with booking tips.",
    images: ["https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/lausanne",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Sculpt Pilates Studio",
    neighborhood: "Avenue de France (west centre)",
    priceLevel: "$$$",
    review: "Sculpt Pilates Studio on Avenue de France is Lausanne's most-reviewed reformer studio on ClassPass, rated 4.8 from more than 1,000 ratings. It runs reformer and mat classes for all levels, a short walk from the city centre.",
    caveat: "its popularity means prime-time classes go quickly — book in advance.",
    address: "Avenue de France 18C, 1004 Lausanne",
    bestFor: "Proven group reformer close to the centre",
    signatureClass: "Reformer & Mat",
    bookingTip: "Morning classes suit early starters; evening sessions are popular with commuters, so book those first.",
  },
  {
    number: "02",
    name: "Neo Pilates Reformer Studio",
    neighborhood: "Montchoisi",
    priceLevel: "$$$",
    review: "Neo Pilates is a dedicated reformer studio on Avenue de Montchoisi, between the centre and the lake at Ouchy. It is rated 4.9 on ClassPass, from a smaller number of reviews than Sculpt.",
    caveat: "its review count is still modest, so treat the rating as a promising signal rather than proof.",
    address: "Avenue de Montchoisi 27, 1006 Lausanne",
    bestFor: "Dedicated reformer classes near Ouchy",
    signatureClass: "Reformer Pilates",
    bookingTip: "Pair a morning class with a walk down to the lake at Ouchy.",
  },
  {
    number: "03",
    name: "Kysko Studio",
    neighborhood: "Flon / Centre",
    priceLevel: "$$$",
    review: "Kysko Studio on Rue du Rôtillon sits in the heart of Lausanne beside the Flon district, offering reformer Pilates in a central location that is easy to reach from the metro.",
    caveat: "limited published detail about class formats — take a trial class first.",
    address: "Rue du Rôtillon 8, 1003 Lausanne",
    bestFor: "Central reformer classes near the Flon",
    signatureClass: "Reformer Pilates",
    bookingTip: "Lunchtime classes are convenient for people working in the centre.",
  },
  {
    number: "04",
    name: "Alex Pilates & Yoga",
    neighborhood: "Lausanne (Longeraie)",
    priceLevel: "$$",
    review: "Alex Pilates & Yoga on Chemin de Longeraie combines reformer Pilates with yoga, making it a good fit for people who want both disciplines in one studio.",
    caveat: "a Pilates-and-yoga studio — check that the class you book is reformer if that is what you want.",
    address: "Chemin de Longeraie 9b, 1006 Lausanne",
    bestFor: "Reformer Pilates alongside yoga",
    signatureClass: "Reformer Pilates",
    bookingTip: "Contact the studio to find the right level before your first reformer class.",
  },
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

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios. Full-toe grip socks are the standard.",
    price: "$30.00",
    url: "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A quality 6mm mat is worth having for mat classes and home practice between studio sessions.",
    price: "$144.00",
    url: "https://www.amazon.com/dp/B0066T7I54?tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios incorporate the magic circle — worth owning for home reinforcement work.",
    price: "$35.00",
    url: "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands",
    note: "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric resistance loops extend your home Pilates practice and support reformer spring work.",
    price: "$29.00",
    url: "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20",
  },
  {
    name: "Foam Roller",
    note: "Our pick: OPTP PRO-Roller Foam Roller (36-inch). Essential for fascial release and spinal mobility work before and after class.",
    price: "$62.99",
    url: "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20",
  },
  {
    name: "Home Pilates Reformer",
    note: "Our pick: PAETA Wooden Foldable Reformer. A home reformer extends your studio practice — AeroPilates and Align entry models deliver a genuine full-body session.",
    price: "$699.98",
    url: "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20",
  },
];


const RELATED_CITIES = [
  { city: "Geneva", country: "Switzerland", href: "/cities/geneva", studioCount: 6 },
  { city: "Zurich", country: "Switzerland", href: "/cities/zurich", studioCount: 6 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 6 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 6 },
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

const CITY_FAQS = [
  { q: "What are the best Pilates studios in Lausanne?", a: "Our 4 curated picks are Sculpt Pilates Studio (Avenue de France, west centre), Neo Pilates Reformer Studio (Montchoisi), Kysko Studio (Flon / Centre) and Alex Pilates & Yoga (Lausanne, Longeraie). Each listing above covers what the studio is best for, its signature class and a booking tip." },
  { q: "Which Lausanne neighbourhoods are best for Pilates?", a: "This guide covers Centre-Ville, Ouchy, Flon and Pully. Centre-Ville: The city centre is well-served by public transport and has the highest concentration of studios." },
  { q: "What should I know about booking Pilates classes in Lausanne?", a: "Lausanne is smaller than Zurich or Geneva. The city's Pilates scene is more intimate, which means quality studios have fewer spots and regulars tend to book recurring slots." },
  { q: "What should I bring to a Pilates class in Lausanne?", a: "Grip socks are required at most reformer studios. Our gear list for Lausanne covers Pilates grip socks, Pilates mat, magic circle, resistance bands, foam roller and home Pilates reformer." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Lausanne (2026)",
      "description": "The best Pilates studios in Lausanne — reformer studios from the city centre to Montchoisi and Avenue de France. Four curated picks, verified October 2026.",
      "url": "https://pilatescollectiveclub.com/cities/lausanne",
      "datePublished": "2026-06-28",
      "dateModified": "2026-10-20",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1400&q=80" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/lausanne" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Lausanne", GEAR.filter((g) => /amazon\.[a-z.]+\/dp\//.test(g.url)).map((g) => ({ name: g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name, description: g.note, price: g.price, url: g.url }))),
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
              <span style={{ color: "#8b4a31" }}>in Lausanne</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 7 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Lausanne sits on the terraced shores of Lake Geneva — a city of hills, academic energy, and a wellness culture that has evolved quietly into something genuinely impressive. Smaller than Zurich or Geneva, it rewards those who take the time to look. The studio scene is compact, so a few well-run reformer studios cover most of the city. This guide covers four we rate highly.
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>4 Studios · Curated & Verified</p>
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

        {/* Studio Gear */}
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to bring to your first class</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Grip socks are required at most reformer studios in Lausanne. These are our recommended picks — all available on Amazon.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#8b4a31", textDecoration: "underline", fontFamily: "'Montserrat', sans-serif", fontSize: "inherit" }}>Affiliate disclosure.</Link>
            </p>
            <QuickPicks className="mb-0" picks={GEAR.map((g) => ({ name: g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name, price: g.price, url: g.url, note: g.name }))} />
          </div>
        </section>


        <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
            <div className="space-y-6">
              {CITY_FAQS.map((f) => (
                <div key={f.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                  <h3 className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{f.q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{f.a}</p>
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
