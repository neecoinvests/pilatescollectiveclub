import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Copenhagen",
  description:
    "Find the best Pilates studios in Copenhagen — from Frederiksberg reformer boutiques to Vesterbro wellness spaces. Five curated picks for 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
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
    title: "Best Pilates Studios in Copenhagen (2026)",
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
    title: "Best Pilates Studios in Copenhagen (2026)",
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
    name: "Studio 41 Pilates",
    neighborhood: "Frederiksberg",
    priceLevel: "kr ··",
    review: "Studio 41 has positioned itself as Frederiksberg's most considered reformer studio, serving the quiet, affluent borough-within-a-city that has always maintained a slightly different sensibility from Copenhagen proper. The studio is beautifully fitted out — Frederiksberg standards demand it — with quality equipment, genuine care in the physical design of the space, and an atmosphere that prioritises focus over social energy. Instruction draws on classical foundations taught with contemporary anatomical understanding, and the teacher roster is notably stable, which allows regular clients to develop a genuine training relationship rather than navigating a rotating cast of instructors. Programming includes a well-constructed progression for serious practitioners. It suits Frederiksberg residents and anyone willing to make the short journey for what is consistently among the finest instruction in greater Copenhagen.",
    address: "—",
    bestFor: "Classical reformer, stable teaching team",
    signatureClass: "Studio 41 Signature Reformer",
    bookingTip: "Book a week ahead for evening and weekend slots",
  },
  {
    number: "02",
    name: "Copenhagen Pilates Studio",
    neighborhood: "Østerbro",
    priceLevel: "kr ··",
    review: "Copenhagen Pilates Studio is the closest thing the city has to a classical institution: long-established, seriously taught, and deeply trusted by the Østerbro community of professionals, parents, and movement practitioners who have trained there over years and decades. The studio works across the full apparatus — mat, reformer, cadillac, chair, barrel — with a comprehensiveness that is rare in Denmark and reflects genuine investment in the breadth of the Pilates system. Østerbro's educated, health-conscious residential population provides the perfect audience: committed, consistent, and sophisticated enough to appreciate instruction that prioritises long-term development over short-term intensity. The space is calm and well-maintained without being ostentatious. It suits any practitioner who wants to take the method seriously in a city where that option is more limited than it should be.",
    address: "—",
    bestFor: "Full apparatus work, long-established method",
    signatureClass: "CPS Comprehensive Apparatus",
    bookingTip: "Intro private session recommended before group classes",
  },
  {
    number: "03",
    name: "Pilates CPH",
    neighborhood: "Vesterbro",
    priceLevel: "kr ·",
    review: "Pilates CPH has found its place in Vesterbro — Copenhagen's most demographically diverse and creatively energetic district — by offering honest, well-taught reformer instruction at pricing that is genuinely competitive for the Danish market. The studio has a relaxed, inclusive atmosphere that reflects its neighbourhood, and the instructors bring a warmth to their teaching that makes classes feel welcoming for practitioners at all levels of experience. Programming leans contemporary rather than strictly classical, incorporating functional movement principles in a way that suits Vesterbro's active, fitness-literate clientele. The space is unfussy and well-kept, and the scheduling includes early-morning and lunchtime options that work for the neighbourhood's working population. It suits practitioners who want quality without the premium price tag that Frederiksberg or Østerbro studios typically carry.",
    address: "—",
    bestFor: "Accessible pricing, contemporary reformer",
    signatureClass: "CPH Reformer Flow",
    bookingTip: "Bono packs offer best per-class value",
  },
  {
    number: "04",
    name: "Rama Reformer Club",
    neighborhood: "Nørrebro",
    priceLevel: "kr ·",
    review: "Rama Reformer Club has brought something genuinely new to Nørrebro — a neighbourhood better known for its multicultural food scene and independent retail than for premium fitness — and the studio has been received with the kind of enthusiasm that suggests real unmet demand. The reformer sessions are energetic and carefully structured, drawing on a blend of classical Pilates sequencing and contemporary group fitness programming that keeps classes dynamic without becoming incoherent. Instructors are young and technically credible, and the studio culture has the informal energy that Nørrebro consistently produces in its best new enterprises. Pricing is accessible by Copenhagen standards, making it a realistic option for practitioners who want to train frequently. It suits active movers looking for a neighbourhood studio that feels alive.",
    address: "—",
    bestFor: "Energetic reformer, neighbourhood community",
    signatureClass: "Rama Power Reformer",
    bookingTip: "Weekend spots book out by Thursday; plan ahead",
  },
  {
    number: "05",
    name: "Fusion Pilates",
    neighborhood: "Indre By",
    priceLevel: "kr ··",
    review: "Fusion Pilates occupies a well-chosen location in Indre By — Copenhagen's historic centre, where office workers, tourists, and the city's cultural institutions coexist in the densest urban fabric the Danish capital offers. The studio has built its programme around the idea of integration: Pilates fundamentals fused with barre, yoga-informed movement, and functional training to produce a cross-disciplinary offer that suits practitioners who want variety alongside technical development. The space is polished and central, the instruction bilingual Danish-English, and the scheduling dense enough to accommodate both regulars and visitors with limited windows. Class sizes are managed attentively. It suits professionals working in or near the city centre who want a serious practice that can flex around a demanding schedule.",
    address: "—",
    bestFor: "Cross-disciplinary programming, central location",
    signatureClass: "Fusion Signature Reformer",
    bookingTip: "Lunchtime classes popular with city-centre workers; book 48 hrs ahead",
  },
  {
    number: "06",
    name: "Power House CPH",
    neighborhood: "Hellerup",
    priceLevel: "kr ··",
    review: "Power House CPH serves Hellerup — the affluent harbour-edge enclave north of Copenhagen where Scandinavian design sensibilities and high disposable incomes converge — with a studio that meets those standards in every particular. The space is generous and beautifully appointed, the equipment fleet is comprehensive and impeccably maintained, and the programming is serious enough to retain practitioners who have been training for years. Instructors hold solid international credentials and the teaching style is precise without being clinical — there is warmth in the room even during technically demanding sessions. The clientele includes a high proportion of athletes and former dancers for whom Pilates is a central rather than supplementary practice. It suits the kind of committed practitioner who treats the studio as a long-term training partner rather than an occasional wellness indulgence.",
    address: "—",
    bestFor: "Premium studio, athletic clientele, comprehensive apparatus",
    signatureClass: "Power House Advanced Reformer",
    bookingTip: "Private duets in high demand; book at least two weeks out",
  }
];

const BOOKING_TIPS = [
  {
    heading: "Expect to pay €25–55 per class",
    body: "Copenhagen's Pilates pricing is comparable to Stockholm and London. Group reformer classes run approximately 250–450 DKK (€33–60); private sessions at classical studios reach 600–750 DKK. Monthly membership packages — typically four to eight sessions — provide the best per-class economics for regular practitioners.",
  },
  {
    heading: "Book early — demand consistently outstrips supply",
    body: "Copenhagen's boutique fitness market is mature and competitive, which means popular classes at quality studios fill quickly. Most studios release their schedule one week ahead; setting a booking reminder is not excessive — it's genuinely necessary for prime morning slots.",
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
    body: "The instruction style and community culture vary considerably across Copenhagen studios. All major studios offer new-client deals; using intro offers at two or three studios before committing to a membership is the best way to find your fit. Don't rush the choice.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Frederiksberg",
    description:
      "Technically its own municipality, Frederiksberg sits at the heart of Copenhagen's premium wellness offer. The boulevard-lined streets and affluent residential character have produced a cluster of serious, well-equipped studios. Studio CPH is the landmark address, and several excellent independents operate nearby.",
  },
  {
    name: "Østerbro",
    description:
      "A prosperous, family-oriented neighbourhood east of the centre with a strong wellness culture and growing studio infrastructure. The Reformery represents the best of what Østerbro offers — community warmth combined with genuine instruction quality at pricing that doesn't require Frederiksberg budgets.",
  },
  {
    name: "Nørrebro",
    description:
      "Copenhagen's most culturally diverse and creatively animated neighbourhood has developed an unexpectedly coherent wellness scene. Nørrebro studios are typically more accessible in both price and atmosphere than the western districts, without making significant compromises on instruction.",
  },
  {
    name: "Vesterbro & Indre By",
    description:
      "Two distinct but complementary options. Vesterbro's studios reflect the neighbourhood's creative and independent character — innovative, energetic, and community-minded. Indre By, the historic city centre, is home to the Copenhagen Pilates Centre — the city's most classically rigorous and long-established address.",
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
        { "@type": "ListItem", "position": 2, "name": "Copenhagen", "item": "https://pilatescollectiveclub.com/cities/copenhagen" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Copenhagen",
      "description": "Curated guide to the top 5 Pilates studios in Copenhagen.",
      "url": "https://pilatescollectiveclub.com/cities/copenhagen",
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
            "addressLocality": "Copenhagen",
            "addressCountry": "DK",
          },
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
              Copenhagen has emerged as one of northern Europe's most compelling destinations for Pilates, combining the Scandinavian instinct for considered design and purposeful movement with a studio culture that takes instruction seriously. The city's wellness market is relatively compact but remarkably coherent — from the classical rigour of Indre By to the community-driven accessibility of Nørrebro. This guide identifies the five studios that represent the full range of what Copenhagen currently offers.
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
              6 Studios · Curated & Verified
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
              Copenhagen's Pilates landscape is shaped by its neighbourhoods.
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
