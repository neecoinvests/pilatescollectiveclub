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
  title: "Best Pilates Studios in Copenhagen (2026) — Curated Guide",
  description: "The best Pilates studios in Copenhagen — reformer boutiques in Østerbro, Frederiksberg, and the city centre. Six curated picks, verified October 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates copenhagen", "reformer pilates copenhagen", "best pilates studios copenhagen", "pilates studio copenhagen", "pilates denmark", "pilates østerbro", "pilates frederiksberg", "pilates classes copenhagen", "best reformer pilates denmark"],
  openGraph: {
    title: "Best Pilates Studios in Copenhagen (2026)",
    description:
      "Six curated Pilates studios in Copenhagen — reformer picks from Østerbro to Frederiksberg. Verified 2026.",
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
      "Find the best Pilates studios in Copenhagen — six curated picks with booking tips for 2026.",
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
    neighborhood: "Vesterbro",
    priceLevel: "$$$$",
    review: "Studio 41 is a purely classical Pilates studio on Vesterbrogade, fully equipped with Gratz apparatus — reformers, Cadillac, Wunda chair, ladder barrel and spine corrector. Classes are taught as Joseph Pilates designed them, with small groups and an emphasis on form, and they are conducted in English. Showers come with Aesop products, towel service and a Dyson Supersonic hairdryer, so it is easy to train before work.",
    caveat: "classical teaching is disciplined and precise — expect technique, not a music-driven workout.",
    address: "Vesterbrogade 41E, 1620 København V",
    bestFor: "Classical Pilates on Gratz apparatus, taught in English",
    signatureClass: "Classical Reformer",
    bookingTip: "Small groups mean limited spots — book evening and weekend classes a week ahead.",
  },
  {
    number: "02",
    name: "Pilates CPH",
    neighborhood: "Central Copenhagen",
    priceLevel: "$$$",
    review: "Pilates CPH has been operating since 2008 as both a Pilates studio and a training academy. It offers small group classes and private sessions, plus specialist training for pregnancy, postnatal recovery and rehabilitation, which makes it one of the most established options in the city.",
    caveat: "we could not confirm the current street address independently — check the studio's website before your first visit.",
    address: "—",
    bestFor: "Pregnancy, postnatal and rehab-focused Pilates",
    signatureClass: "Small Group Pilates",
    bookingTip: "If you are pregnant or postnatal, ask about the specialist classes rather than joining a general group.",
  },
  {
    number: "03",
    name: "Copenhagen Pilates Studio",
    neighborhood: "Indre By (Nyhavn)",
    priceLevel: "$$$",
    review: "Copenhagen Pilates Studio on Peder Skrams Gade sits in the old city near Nyhavn, a short walk from Kongens Nytorv metro. It is a dedicated Pilates studio listed on Bruce Studios, convenient for anyone working in the centre.",
    caveat: "there is limited published detail about its class formats and equipment — check the schedule or take an intro class first.",
    address: "Peder Skrams Gade 5, København K",
    bestFor: "Central Pilates near Nyhavn",
    signatureClass: "Pilates Class",
    bookingTip: "Check the schedule on Bruce Studios or the studio's own site for the current class formats.",
  },
  {
    number: "04",
    name: "Rama Reformer Club",
    neighborhood: "Amager",
    priceLevel: "$$$",
    review: "Rama Reformer Club on Strandlodsvej is a boutique reformer studio combined with a café and community space, focused on mindful movement, strength and well-being in small groups. It has a sauna, showers, lockers and parking, and it is rated 4.9 from more than 1,000 reviews across fitness platforms.",
    caveat: "it is on Amager, away from the central districts — easy by metro or car, but not a walk from Indre By.",
    address: "Strandlodsvej 13Y, 2300 København S",
    bestFor: "Small-group reformer with sauna and café",
    signatureClass: "Classic Reformer",
    bookingTip: "Memberships are visit-based (e.g. 2 or 4 visits a month), so pick the plan that matches how often you train.",
  },
  {
    number: "05",
    name: "Power Studio by Power House",
    neighborhood: "Indre By",
    priceLevel: "$$$",
    review: "Power Studio by Power House runs power reformer Pilates in a small, aesthetic studio in Indre By. Having only a few machines leaves the instructors plenty of time to guide each person, and it is rated 4.8 from about 300 reviews on Bruce Studios.",
    caveat: "power reformer classes are high-energy — beginners should tell the instructor it is their first class.",
    address: "—",
    bestFor: "Energetic power reformer in the city centre",
    signatureClass: "Power Reformer",
    bookingTip: "With few machines per class, book ahead — especially for after-work slots.",
  },
  {
    number: "06",
    name: "PWR.8 Studio",
    neighborhood: "Frederiksberg",
    priceLevel: "$$",
    review: "PWR.8 Studio is an inclusive training studio in a backyard building on Nyvej in Frederiksberg (it also has an Østerbro location). It offers Power Reformer classes alongside strength, cardio and mobility concepts with breathwork and relaxation elements.",
    caveat: "a multi-concept studio rather than a dedicated Pilates room — choose the Power Reformer classes specifically.",
    address: "Nyvej 17B (Baghuset), Frederiksberg",
    bestFor: "Power Reformer in Frederiksberg",
    signatureClass: "Power Reformer",
    bookingTip: "The studio is in the backyard building (baghuset) — allow a minute to find the entrance.",
  },
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
  { city: "Amsterdam", country: "Netherlands", href: "/cities/amsterdam", studioCount: 6 },
  { city: "Berlin", country: "Germany", href: "/cities/berlin", studioCount: 6 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 6 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 6 },
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
              Copenhagen has emerged as one of northern Europe's most compelling destinations for Pilates, combining the Scandinavian instinct for considered design and purposeful movement with a studio culture that takes instruction seriously. The city's wellness market is relatively compact but remarkably coherent — from the classical rigour of Vesterbro to small-group reformer clubs on Amager. This guide identifies six studios that represent the range of what Copenhagen currently offers, from classical Gratz apparatus in Vesterbro to power reformer in Indre By.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
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

        {/* Studio Gear */}
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to bring to your first class</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Grip socks are required at most reformer studios in Copenhagen. These are our recommended picks — all available on Amazon.{" "}
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
