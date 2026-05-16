import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Copenhagen (2026) | Pilates Collective Club",
  description:
    "Find the best Pilates studios in Copenhagen — from Frederiksberg reformer boutiques to Vesterbro wellness spaces. Five curated picks for 2026.",
  keywords: [
    "pilates studios copenhagen",
    "reformer pilates copenhagen",
    "best pilates copenhagen",
    "pilates classes copenhagen",
    "copenhagen pilates guide",
    "boutique pilates copenhagen",
    "pilates frederiksberg",
    "pilates vesterbro",
    "copenhagen pilates 2026",
  ],
  openGraph: {
    title: "Best Pilates Studios in Copenhagen (2026) | Pilates Collective Club",
    description:
      "Find the best Pilates studios in Copenhagen — five curated picks with booking tips for 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/copenhagen",
    images: [
      {
        url: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Copenhagen city guide — Pilates Collective Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Copenhagen (2026) | Pilates Collective Club",
    description:
      "Find the best Pilates studios in Copenhagen — five curated picks with booking tips for 2026.",
    images: ["https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/copenhagen",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Studio CPH Pilates",
    neighborhood: "Frederiksberg",
    priceLevel: "€€€",
    review:
      "Studio CPH is Copenhagen&apos;s most consistently referenced Pilates address among practitioners with international standards of comparison. The Frederiksberg studio occupies a beautifully converted ground-floor space with Balanced Body apparatus throughout, and the instructors hold qualifications from training programmes in both London and New York. The reformer classes are capped at six, and the teaching approach prioritises anatomical precision over pace — sessions require genuine concentration, which the clientele clearly appreciates. The studio also runs one of the city&apos;s better teacher training programmes.",
    address: "Gammel Kongevej 112, 1850 Frederiksberg",
    bestFor: "Precision reformer, small-group instruction, teacher training, experienced practitioners",
    signatureClass: "CPH Reformer Level 2",
    bookingTip: "The booking window opens on Monday at 8am for the following week. Morning slots at Frederiksberg go within two to three hours. Set a phone reminder.",
  },
  {
    number: "02",
    name: "The Reformery Copenhagen",
    neighborhood: "Østerbro",
    priceLevel: "€€",
    review:
      "The Reformery occupies a warm, well-lit space in Østerbro and has built one of Copenhagen&apos;s most loyal studio communities over five years of operation. The programming here is notably well-structured — a genuine curriculum from beginner through to advanced that makes the method accessible without oversimplifying it. The instructors have an unusual knack for adjusting in real time, which means both newcomers and experienced practitioners feel appropriately challenged in the same class. The intro offer is one of the best in the city.",
    address: "Classensgade 52, 2100 København Ø",
    bestFor: "Structured progression, community, beginners to advanced, eastern Copenhagen",
    signatureClass: "Reformery Signature",
    bookingTip: "The unlimited two-week intro pass is genuinely worth using — aim for six to eight classes in those two weeks to properly assess the studio. Membership packs of eight are the best long-term option.",
  },
  {
    number: "03",
    name: "Nørrebro Pilates",
    neighborhood: "Nørrebro",
    priceLevel: "€€",
    review:
      "Nørrebro Pilates occupies a distinctive place in Copenhagen&apos;s wellness landscape — it&apos;s one of the few studios in the city that has genuinely succeeded in making the method accessible across social and economic backgrounds without compromising on instruction quality. The studio&apos;s sliding-scale pricing for select sessions has drawn a more diverse clientele than most boutique competitors, and the teaching is consistently impressive throughout the schedule. The community here is one of the most welcoming in Copenhagen — beginners are genuinely made to feel that they belong.",
    address: "Ravnsborggade 14, 2200 København N",
    bestFor: "Community, accessible pricing, inclusive atmosphere, all levels",
    signatureClass: "Nørrebro Reformer Flow",
    bookingTip: "Sliding-scale slots open 48 hours before the class and go quickly. Standard slots can be booked five days ahead. The studio runs a monthly community class that&apos;s pay-what-you-can.",
  },
  {
    number: "04",
    name: "Vesterbro Body Lab",
    neighborhood: "Vesterbro",
    priceLevel: "€€",
    review:
      "Vesterbro Body Lab emerged from Copenhagen&apos;s most creatively energetic neighbourhood and has developed a hybrid programming philosophy that blends classical Pilates with functional movement and somatic awareness work. The result is a studio that attracts a distinctly engaged clientele — dancers, designers, and movement practitioners who appreciate both rigour and intellectual curiosity in their physical practice. The reformer classes are more varied in structure than many competitors, which rewards regular attendance and keeps experienced clients genuinely challenged.",
    address: "Istedgade 104, 1650 København V",
    bestFor: "Creative practitioners, hybrid reformer, functional movement, Vesterbro locals",
    signatureClass: "Body Lab Reformer",
    bookingTip: "Workshop and masterclass events sell out particularly quickly — sign up to the newsletter to get early notification. Regular class booking opens five days ahead.",
  },
  {
    number: "05",
    name: "Copenhagen Pilates Centre",
    neighborhood: "Indre By",
    priceLevel: "€€€",
    review:
      "The Copenhagen Pilates Centre has operated from its central Indre By location for nearly fifteen years, making it one of the longest-established dedicated Pilates studios in Denmark. The studio maintains a deliberately classical approach — Gratz equipment, small groups or private sessions only, and an instructor lineage that traces back to first-generation teachers. This is not the studio for clients seeking dynamic or hybrid class formats; it is, however, the finest destination in Copenhagen for practitioners who want the method taught exactly as it was designed.",
    address: "Store Kongensgade 110, 1264 København K",
    bestFor: "Classical Pilates, method purists, private sessions, advanced practitioners",
    signatureClass: "Classical Apparatus",
    bookingTip: "New clients must complete an assessment session before joining the group programme. Call or email to book the intake — the waiting time for a regular slot is typically four to six weeks.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Expect to pay €25–55 per class",
    body: "Copenhagen&apos;s Pilates pricing is comparable to Stockholm and London. Group reformer classes run approximately 250–450 DKK (€33–60); private sessions at classical studios reach 600–750 DKK. Monthly membership packages — typically four to eight sessions — provide the best per-class economics for regular practitioners.",
  },
  {
    heading: "Book early — demand consistently outstrips supply",
    body: "Copenhagen&apos;s boutique fitness market is mature and competitive, which means popular classes at quality studios fill quickly. Most studios release their schedule one week ahead; setting a booking reminder is not excessive — it&apos;s genuinely necessary for prime morning slots.",
  },
  {
    heading: "English is universal in Copenhagen studios",
    body: "Copenhagen has one of the highest English-language proficiency rates in the world. Every studio in this guide operates entirely comfortably in English — for instructors, reception staff, and booking systems. This is never a concern for international visitors.",
  },
  {
    heading: "Grip socks are required and worth buying your own",
    body: "All Copenhagen studios require toeless grip socks. The studio-sold options typically run 120–150 DKK — buying online ahead of your visit saves money and the minor inconvenience of arriving without them.",
  },
  {
    heading: "Introductory offers — use them before committing",
    body: "The instruction style and community culture vary considerably across Copenhagen studios. All major studios offer new-client deals; using intro offers at two or three studios before committing to a membership is the best way to find your fit. Don&apos;t rush the choice.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Frederiksberg",
    description:
      "Technically its own municipality, Frederiksberg sits at the heart of Copenhagen&apos;s premium wellness offer. The boulevard-lined streets and affluent residential character have produced a cluster of serious, well-equipped studios. Studio CPH is the landmark address, and several excellent independents operate nearby.",
  },
  {
    name: "Østerbro",
    description:
      "A prosperous, family-oriented neighbourhood east of the centre with a strong wellness culture and growing studio infrastructure. The Reformery represents the best of what Østerbro offers — community warmth combined with genuine instruction quality at pricing that doesn&apos;t require Frederiksberg budgets.",
  },
  {
    name: "Nørrebro",
    description:
      "Copenhagen&apos;s most culturally diverse and creatively animated neighbourhood has developed an unexpectedly coherent wellness scene. Nørrebro studios are typically more accessible in both price and atmosphere than the western districts, without making significant compromises on instruction.",
  },
  {
    name: "Vesterbro & Indre By",
    description:
      "Two distinct but complementary options. Vesterbro&apos;s studios reflect the neighbourhood&apos;s creative and independent character — innovative, energetic, and community-minded. Indre By, the historic city centre, is home to the Copenhagen Pilates Centre — the city&apos;s most classically rigorous and long-established address.",
  },
];

const RELATED_CITIES = [
  { city: "Amsterdam", country: "Netherlands", href: "/cities/amsterdam", studioCount: 5 },
  { city: "Berlin", country: "Germany", href: "/cities/berlin", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
];

const FURTHER_READING = [
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt: "Everything you need between studio sessions — from a quality mat to resistance bands.",
    href: "/blog/best-pilates-equipment-for-home-practice",
    category: "Equipment",
    readTime: "10 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80",
  },
  {
    title: "The Beginner's Guide to Reformer Pilates",
    excerpt: "What to expect in your first reformer class, how to choose a studio, and how to progress.",
    href: "/blog/beginners-guide-to-reformer-pilates",
    category: "Beginner Guide",
    readTime: "8 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=800&q=80",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Studio Guides", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Copenhagen", "item": "https://pilatescollectiveclub.com/cities/copenhagen" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Copenhagen",
      "description": "Curated guide to the top 5 Pilates studios in Copenhagen.",
      "url": "https://pilatescollectiveclub.com/cities/copenhagen",
      "numberOfItems": 5,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "LocalBusiness",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": {
            "@type": "PostalAddress",
            "streetAddress": s.address,
            "addressLocality": "Copenhagen",
            "addressCountry": "DK",
          },
          "priceRange": s.priceLevel,
        },
      })),
    },
  ],
};

export default function CopenhagenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Studio Guides", href: "/cities" }, { label: "Copenhagen (2026)" }]} />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
                City Guide
              </span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>
                Denmark
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Copenhagen</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Updated May 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Copenhagen has emerged as one of northern Europe&apos;s most compelling destinations for Pilates, combining the Scandinavian instinct for considered design and purposeful movement with a studio culture that takes instruction seriously. The city&apos;s wellness market is relatively compact but remarkably coherent — from the classical rigour of Indre By to the community-driven accessibility of Nørrebro. This guide identifies the five studios that represent the full range of what Copenhagen currently offers.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1400&q=80"
                alt="Copenhagen city guide"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Copenhagen, Denmark</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Nordic wellness culture at its most considered</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
              5 Studios · Curated & Verified
            </p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (
                <StudioListing key={studio.number} {...studio} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Tips for booking Pilates in Copenhagen
            </h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best neighbourhoods for Pilates in Copenhagen
            </h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Copenhagen&apos;s Pilates landscape is shaped by its neighbourhoods.
            </p>
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
              {RELATED_CITIES.map((c) => (
                <CityCard key={c.city} {...c} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              {FURTHER_READING.map((a) => (
                <ArticleCard key={a.href} {...a} />
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Find Pilates near you"
          subtitle="Use our curated city guides to find the best Pilates studios worldwide."
          showSearch
          searchPlaceholder="Ask: best reformer Pilates in Copenhagen…"
        />
      </main>
      <Footer />
    </>
  );
}
