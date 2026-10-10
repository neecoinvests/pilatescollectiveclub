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
  title: "Best Pilates Studios in Miami, FL (2026) — Curated Guide",
  description: "The best Pilates studios in Miami — reformer boutiques in Brickell, Coconut Grove, South Beach, and Coral Gables. Six curated picks, verified October 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates miami", "reformer pilates miami", "best pilates studios miami", "pilates studio miami fl", "pilates classes miami", "brickell pilates", "south beach pilates", "pilates coral gables", "pilates coconut grove", "best reformer pilates miami"],
  openGraph: {
    title: "Best Pilates Studios in Miami, FL (2026)",
    description: "Six curated Pilates studios in Miami — Brickell, South Beach, and Coconut Grove reformer picks. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/miami",
    images: [{ url: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1200&q=80", width: 1200, height: 630, alt: "Miami city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Miami (2026)",
    description: "Our curated guide to Miami's finest Pilates studios — six verified picks with booking tips.",
    images: ["https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1200&q=80"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/miami" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Pilates in the Grove",
    neighborhood: "Coconut Grove",
    priceLevel: "$$$",
    review: "Pilates in the Grove, owned by Christa Gurka, has been part of Coconut Grove for well over a decade on Virginia Street. It offers small-group Pilates classes, one-to-one sessions, rehab and recovery sessions and massage therapy, plus online options, and the owner credits its success to the community that has grown around the studio.",
    caveat: "advanced classes require prior experience — be honest about your level when booking.",
    address: "3316 Virginia St, Miami, FL 33133",
    bestFor: "Small-group and one-to-one Pilates, rehab and recovery",
    signatureClass: "Small Group Pilates",
    bookingTip: "Check the expiry on class packages before buying.",
  },
  {
    number: "02",
    name: "JETSET Pilates — South of Fifth",
    neighborhood: "South of Fifth, Miami Beach",
    priceLevel: "$$$",
    review: "JETSET is the Miami-founded reformer brand that helped define the city's obsession with music-driven, fast-paced reformer classes, and its South of Fifth studio on Washington Avenue is the original. The brand has since expanded across the US and into the UK.",
    caveat: "high-energy, music-driven classes — not slow classical technique.",
    address: "110 Washington Ave, Miami Beach, FL 33139",
    bestFor: "Fast, music-driven reformer on South Beach",
    signatureClass: "JETSET Reformer",
    bookingTip: "Weekend mornings book out days ahead — book as soon as the schedule opens.",
  },
  {
    number: "03",
    name: "Pilathon",
    neighborhood: "Wynwood",
    priceLevel: "$$",
    review: "Pilathon describes itself as the first boutique Pilates studio in Wynwood, offering reformer and props classes for all levels in one of Miami's most creative neighbourhoods.",
    caveat: "we could not confirm the current street address independently — check the studio's directions before your first visit.",
    address: "—",
    bestFor: "Boutique reformer in Wynwood",
    signatureClass: "Reformer Pilates",
    bookingTip: "Read the studio's directions before your first class — it can be tricky to find.",
  },
  {
    number: "04",
    name: "CADiLab Pilates",
    neighborhood: "Coral Way",
    priceLevel: "$$$",
    review: "CADiLab describes itself as a first-of-its-kind Miami studio teaching tower and reformer Pilates on Cadillacs, with drop-in group classes for all levels and private one-to-one sessions. Classes also include jumpboard and EXO Chair work, and the founder has 15 years of Pilates practice.",
    caveat: "Cadillac-based classes feel different from a standard reformer — expect a short learning curve.",
    address: "2750 Coral Way, Suite 206, Miami, FL 33145",
    bestFor: "Tower and reformer work on Cadillacs",
    signatureClass: "Cadillac Tower & Reformer",
    bookingTip: "New to the Cadillac? Book a private session first to learn the apparatus.",
  },
  {
    number: "05",
    name: "Fuze House — Sunset Harbour",
    neighborhood: "Sunset Harbour, Miami Beach",
    priceLevel: "$$$",
    review: "Fuze House was named Best Pilates Studio in Miami New Times' Best of Miami 2025. Founded in Miami by Eli Kaylin after lockdown (it has since expanded to New York), it runs mat-based classes that mix Pilates and sculpt, warmed by infrared heat, in a spa-like space with natural and organic products.",
    caveat: "these are heated mat classes, not reformer — choose another studio if you want machine work.",
    address: "—",
    bestFor: "Infrared-heated mat Pilates and sculpt",
    signatureClass: "Heated Mat Pilates & Sculpt",
    bookingTip: "Arrive a few minutes early to acclimatise to the heat, and hydrate well.",
  },
  {
    number: "06",
    name: "JETSET Pilates — Brickell",
    neighborhood: "Brickell / Downtown",
    priceLevel: "$$$",
    review: "JETSET's Brickell studio on SW 13th Street brings the brand's music-driven, athletic reformer format to the Brickell corridor, a convenient after-work option for downtown professionals.",
    caveat: "after-work classes fill quickly — use the waitlist.",
    address: "40 SW 13th St, #504, Miami, FL 33130",
    bestFor: "After-work reformer in Brickell",
    signatureClass: "JETSET Reformer",
    bookingTip: "Join the waitlist for 5–7pm classes — cancellations are common.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Book 5–7 days in advance for premium morning slots",
    body: "Miami's most popular studios — especially South Beach and Brickell — fill their early morning and lunchtime slots within hours of opening. Most apps allow 7-day advance booking; treat Monday morning as your booking window for the full week.",
  },
  {
    heading: "Introductory offers are widely available",
    body: "Nearly every Miami studio runs a new-client intro deal — typically 3 classes for $49–79. Use these to assess instruction quality and culture before committing to a monthly membership, which is how most Miami practitioners structure their practice.",
  },
  {
    heading: "ClassPass covers most Miami studios",
    body: "ClassPass works well across Miami and is particularly useful for exploring the range of studios from South Beach to Coral Gables before settling on a home base. Peak-time bookings may require more credits.",
  },
  {
    heading: "Tipping is customary — $5–10 per class",
    body: "Unlike in some other cities, tipping Pilates instructors is an established norm in Miami. A $5–10 tip for group classes and $15–25 for private sessions is standard practice and genuinely appreciated by instructors.",
  },
  {
    heading: "Expect to pay $28–55 per reformer class",
    body: "Drop-in reformer Pilates in Miami ranges from $28 at volume studios to $55+ at premium boutiques. Monthly unlimited memberships typically run $175–250 and represent significant savings for practitioners attending 3+ times per week.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "South Beach & Miami Beach",
    description:
      "The most concentrated wellness corridor in Miami. South Beach and the broader Miami Beach area have a high density of Pilates and boutique fitness studios, ranging from serious classical practices to high-energy reformer boutiques. The clientele is fit, internationally diverse, and accustomed to quality.",
  },
  {
    name: "Brickell & Downtown",
    description:
      "Miami's financial district has seen rapid wellness studio growth, driven by a large professional population needing convenient, high-quality lunchtime and early-morning options. Studios here are sleek, modern, and optimised for efficiency — ideal for time-pressed professionals.",
  },
  {
    name: "Coconut Grove & Coral Gables",
    description:
      "The residential south of Miami offers a calmer, more community-oriented Pilates scene. Studios here tend to attract long-term clients building multi-year practices, and the atmosphere is noticeably less transactional than the beach and financial district studios.",
  },
  {
    name: "Wynwood & Design District",
    description:
      "Miami's creative quarter has attracted a younger, more experimental wellness crowd, and the studios that have opened here reflect that — more concept-driven, atmospheric, and design-forward than traditional Pilates boutiques. The neighbourhood is ideal for practitioners who want their workout to feel like an experience.",
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

const HOME_REFORMERS = [
  { tag: "Budget Pick", name: "Stamina AeroPilates 287", note: "An accessible entry point to home reformer work — three bungee-cord resistance, a padded footbar and an adjustable headrest.", price: "$256.49", url: "https://www.amazon.com/dp/B01FMODVAE?tag=pilatescollective-20" },
  { tag: "Mid-Range Pick", name: "AeroPilates Pro XP 557", note: "AeroPilates' top-of-the-range home reformer, a step up for practitioners training several times a week.", price: "$1,330", url: "https://www.amazon.com/dp/B0012TJI8S?tag=pilatescollective-20" },
  { tag: "Buy Once", name: "Balanced Body Allegro Stretch Reformer", note: "Studio-grade and made to order — an anodised aluminium frame, nonslip standing platform and 36-inch adjustable footbar, with a longer, wider carriage for taller users.", price: "$3,710", url: "https://www.amazon.com/dp/B093R8DYC9?tag=pilatescollective-20" },
];

const RELATED_CITIES = [
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 6 },
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 6 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 6 },
  { city: "Barcelona", country: "Spain", href: "/cities/barcelona", studioCount: 6 },
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
        { "@type": "ListItem", "position": 2, "name": "Miami", "item": "https://pilatescollectiveclub.com/cities/miami" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Miami",
      "description": "Curated guide to the top 5 Pilates studios in Miami.",
      "url": "https://pilatescollectiveclub.com/cities/miami",
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
            "addressLocality": "Miami",
            "addressCountry": "US",
          },
        },
      })),
    },
  ],
};

export default function MiamiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
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
                United States
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Miami</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Updated May 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Miami has always taken fitness seriously — but the city's Pilates scene has matured well beyond the beach-body culture of its past. A city that attracts international residents, professional athletes, and wellness-conscious visitors year-round has built a reformer studio market that is simultaneously premium, diverse, and surprisingly deep. From the classical lineage practices of Coconut Grove to the design-forward boutiques of Wynwood, Miami now offers serious Pilates across every neighbourhood and every level. This guide covers the six studios we rate most highly, with everything you need before booking.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1400&q=80"
                alt="Miami skyline"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Miami, United States</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>From South Beach boutiques to classical Grove studios</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#fdf5f3", borderTop: "1px solid rgba(139,74,49,0.2)", borderBottom: "1px solid rgba(139,74,49,0.2)" }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Before You Go</p>
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to bring to your first class</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Grip socks are required at most reformer studios in Miami. These are our recommended picks — all available on Amazon.{" "}
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

        <section className="px-6 py-20">
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
              Tips for booking Pilates in Miami
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
              Best neighbourhoods for Pilates in Miami
            </h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Miami's Pilates landscape is shaped by its neighbourhoods. Here's where to look depending on where you're based.
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
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Prefer To Train At Home?</p>
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Not convinced? How about Pilates at home?</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Studio pricing or scheduling not for you right now? A home reformer gets you a genuine Pilates session on your own time. Here's where to start — from a $299 entry point to the machine serious practitioners buy once.{" "}
              <Link href="/blog/best-home-pilates-reformer" style={{ color: "#8b4a31", textDecoration: "underline", fontFamily: "'Montserrat', sans-serif", fontSize: "inherit" }}>See the full reformer guide.</Link>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {HOME_REFORMERS.map((g) => (
                <a key={g.name} href={g.url} target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: "none" }}>
                  <div className="rounded-xl p-5 h-full flex flex-col justify-between" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)" }}>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{g.tag}</p>
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
          searchPlaceholder="Ask: best reformer Pilates in London…"
        />
      </main>
      <Footer />
    </>
  );
}
