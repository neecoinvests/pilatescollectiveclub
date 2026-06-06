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
  title: "Best Pilates Studios in Miami (2026)",
  description:
    "Find the best Pilates studios in Miami — from South Beach reformer boutiques to Brickell wellness studios. Our curated guide to Miami Pilates in 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: [
    "pilates studios miami",
    "reformer pilates miami",
    "best pilates miami",
    "pilates classes miami",
    "miami pilates 2026",
    "pilates south beach",
    "pilates brickell",
    "miami reformer studios",
    "best reformer pilates miami",
  ],
  openGraph: {
    title: "Best Pilates Studios in Miami (2026)",
    description: "Our curated guide to Miami's finest Pilates studios — five verified picks with booking tips.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/miami",
    images: [{ url: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1200&q=80", width: 1200, height: 630, alt: "Miami city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Miami (2026)",
    description: "Our curated guide to Miami's finest Pilates studios — five verified picks with booking tips.",
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
    review: "Pilates in the Grove at 3316 Virginia Street has been Miami's most respected classical Pilates studio since opening in 2008, offering small-group classes (maximum four students) that blend mat, tower, reformer, and chair work. The studio serves everyone from beginners to post-rehab clients to advanced Pilates athletes, with a clear progression system across class levels. A second location in South Miami extends their reach across the metro. Over fifteen years of operation in the same neighborhood is the most honest possible testimonial to the quality of the work here.",
    address: "3316 Virginia St, Miami, FL 33133",
    bestFor: "Full-apparatus classical Pilates; rehabilitation clients",
    signatureClass: "Elevated Flow",
    bookingTip: "Group class packages have a one-year expiration; advanced classes require prior experience — be honest about your level when booking.",
  },
  {
    number: "02",
    name: "JetSet Pilates",
    neighborhood: "South of Fifth, Miami Beach",
    priceLevel: "$$$",
    review: "JetSet Pilates is the Miami-born studio that helped define the city's obsession with reformer Pilates, combining fast-paced sequencing, driving playlists, and a sleek, high-design environment at 110 Washington Avenue in the South of Fifth neighborhood. The South of Fifth original location remains the most iconic, though Downtown Miami and North Miami locations are equally strong. Classes keep your heart rate elevated while building lean strength in a way that feels energetic rather than clinical.",
    address: "110 Washington Ave, Miami Beach, FL 33139",
    bestFor: "Fast-paced, music-driven athletic reformer classes",
    signatureClass: "JetSet Reformer",
    bookingTip: "The SoFi location books out days in advance, especially weekend mornings — use their app and book as soon as the schedule opens.",
  },
  {
    number: "03",
    name: "Pilathon",
    neighborhood: "Wynwood",
    priceLevel: "$$",
    review: "Pilathon is a top-rated boutique studio tucked into the rooftop gym of the Cynergi building at 2700 North Miami Avenue in Wynwood, offering group reformer and private sessions with expert instruction in one of Miami's most creative neighborhoods. Free parking in the building's garage makes it refreshingly accessible. Reviewers praise the instructors for their ability to challenge experienced practitioners while keeping beginners safe and engaged — a balance that benefits the whole room.",
    address: "2700 N Miami Ave, 6th Floor, Miami, FL 33127",
    bestFor: "High-quality Pilates in a unique rooftop setting; accessible pricing",
    signatureClass: "Pilathon Reformer Flow",
    bookingTip: "The somewhat hidden location (6th floor, enter through parking level) surprises first-timers — review the directions on their website before your first visit. Free parking on level 5.",
  },
  {
    number: "04",
    name: "CADiLab Pilates",
    neighborhood: "Coral Way",
    priceLevel: "$$$",
    review: "CADiLab at 2750 Coral Way is one of Miami's most distinctive studios, specializing in small-group classes that use the Cadillac reformer — a larger, more versatile apparatus that most studios don't offer in group format. This makes CADiLab ideal for clients who have outgrown standard reformer classes and want a deeper, more varied practice. The elevated, contemporary studio environment and capped class sizes keep instruction quality high. A genuine step up for practitioners ready for the next level of apparatus work.",
    address: "2750 Coral Way, Suite 206, Miami, FL 33145",
    bestFor: "Innovative Cadillac-reformer hybrid classes in small groups",
    signatureClass: "Cadillac Reformer Sculpt",
    bookingTip: "If you've never worked on a Cadillac, request a brief orientation call first — the apparatus is different from a standard reformer and the intro will make your first group class far more productive.",
  },
  {
    number: "05",
    name: "Fuze House",
    neighborhood: "Sunset Harbour, Miami Beach",
    priceLevel: "$$$",
    review: "Fuze House at 1201 20th Street brings a design-forward, spa-level aesthetic to heated Pilates in one of Miami Beach's most desirable neighborhoods. Rooms are heated to 95°F or higher using infrared technology, and all equipment is premium reformers. Named Best Pilates Studio in Miami by Miami New Times in 2025, Fuze House appeals to clients who want their workout to feel like an indulgent experience, not just exercise. A South Miami location at 7202 SW 58th Avenue serves the mainland.",
    address: "1201 20th St, Miami Beach, FL 33139",
    bestFor: "Infrared-heated Pilates with a design-forward spa-level experience",
    signatureClass: "Heated Reformer Sculpt",
    bookingTip: "Arrive 10 minutes early to acclimate to the heated room, especially if it's your first heated Pilates experience — the infrared heat is subtler than hot yoga but still takes adjustment.",
  },
  {
    number: "06",
    name: "JetSet Pilates Downtown Miami",
    neighborhood: "Brickell / Downtown",
    priceLevel: "$$$",
    review: "The Downtown Miami JetSet location at 40 SW 13th Street brings the brand's signature music-driven, athletic reformer format to the Brickell corridor, steps from the bay. The after-work and early-morning slots draw a high-energy professional crowd, and the sleek studio design matches the neighborhood's upscale vibe. Same world-class instruction as the original South of Fifth location in a more central, business-district-accessible setting for those based in Brickell or working in downtown Miami.",
    address: "40 SW 13th St, Miami, FL 33130",
    bestFor: "After-work reformer classes for Brickell's professional crowd",
    signatureClass: "JetSet Power Reformer",
    bookingTip: "Evening classes 5–7pm Monday through Thursday fill within hours of opening — use the waitlist feature, as cancellations are common among the after-work crowd.",
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
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "A quality 6mm mat is worth having for mat classes and home practice between studio sessions.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Many studios incorporate the magic circle — worth owning for home reinforcement work.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands",
    note: "Fabric resistance loops extend your home Pilates practice and support reformer spring work.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "Foam Roller",
    note: "Essential for fascial release and spinal mobility work before and after class.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
];


const RELATED_CITIES = [
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 5 },
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "Barcelona", country: "Spain", href: "/cities/barcelona", studioCount: 5 },
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
              Miami has always taken fitness seriously — but the city's Pilates scene has matured well beyond the beach-body culture of its past. A city that attracts international residents, professional athletes, and wellness-conscious visitors year-round has built a reformer studio market that is simultaneously premium, diverse, and surprisingly deep. From the classical lineage practices of Coconut Grove to the design-forward boutiques of Wynwood, Miami now offers serious Pilates across every neighbourhood and every level. This guide covers the five studios we rate most highly, with everything you need before booking.
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

        {/* Studio Gear */}
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
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
