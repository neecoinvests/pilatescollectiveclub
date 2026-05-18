import type { Metadata } from "next";
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
    name: "JETSET Pilates",
    neighborhood: "Brickell",
    priceLevel: "$$$",
    review: "JETSET Pilates built its reputation in Miami before expanding nationally, and the Brickell flagship still carries the energy of a studio with something to prove. The proprietary reformer is designed for a faster-paced, rhythm-driven workout that splits the difference between classical Pilates and boutique fitness, drawing a clientele that is equally at home in a cycling studio or a traditional apparatus room. Instructors are trained in-house to an exacting standard, and the music programming is treated with the same seriousness as the movement cues. It suits results-focused practitioners who want the postural benefits of Pilates delivered at a tempo that matches Miami&apos;s pace.",
    address: "—",
    bestFor: "Rhythm-driven reformer, high-energy atmosphere, results-focused clients",
    signatureClass: "JETSET Reformer (50 min)",
    bookingTip: "The JETSET app offers the smoothest booking experience. Intro packages are the most economical entry point — standard drop-in rates reflect the premium Brickell location.",
  },
  {
    number: "02",
    name: "Reforming Pilates",
    neighborhood: "South Beach",
    priceLevel: "$$$",
    review: "Reforming Pilates sits in the heart of South Beach and has cultivated a following that spans visiting athletes, local dancers, and year-round Miami residents who treat it as the backbone of their training. The instruction is precise without being rigid — teachers bring genuine anatomical knowledge to every session and adapt intelligently to what they observe in the room. The studio&apos;s aesthetic is warm and unintimidating despite its South Beach address, which is part of why its community has proven so durable. Clients who have trained at studios across the country regularly rate it among the best they&apos;ve encountered.",
    address: "—",
    bestFor: "Precision reformer, experienced practitioners, visiting athletes",
    signatureClass: "Reformer Group (open level)",
    bookingTip: "South Beach parking is unpredictable — factor in extra time or use rideshare. Classes fill fast on weekend mornings; book three to four days ahead during high season.",
  },
  {
    number: "03",
    name: "The Pilates Place",
    neighborhood: "South Beach",
    priceLevel: "$$",
    review: "The Pilates Place has been a South Beach fixture long enough to have trained multiple generations of Miami residents, and its staying power comes from consistent, unhurried instruction that prioritises form over volume. The studio offers both mat and reformer classes in a space that feels deliberately calm against the frenzy of the surrounding neighbourhood. Instructors have long tenures here — an unusual quality in Miami&apos;s fitness market — and the continuity shows in the depth of the teaching. It is the natural choice for practitioners who want to build a real foundation rather than a fast-moving class experience.",
    address: "—",
    bestFor: "Classical reformer and mat, foundational instruction, all levels",
    signatureClass: "Reformer Fundamentals",
    bookingTip: "Smaller class sizes mean spots go quickly even though the studio is less visible than some South Beach competitors. Call ahead for first-timer availability as the booking system is not always current online.",
  },
  {
    number: "04",
    name: "Fuze House",
    neighborhood: "Edgewater",
    priceLevel: "$$$",
    review: "Fuze House sits in Edgewater&apos;s design district corridor and has established itself as one of Miami&apos;s most thoughtfully constructed wellness spaces, combining Pilates reformer programming with a broader movement philosophy that draws from yoga and functional training. The studio&apos;s design is considered — materials, light, and acoustics have all been attended to — and the atmosphere rewards the kind of client who thinks of their practice as a long-term relationship rather than a transaction. Instructors hold certifications across multiple disciplines and bring genuine versatility to their cuing. The Edgewater location makes it convenient to Wynwood and Midtown without the South Beach premium.",
    address: "—",
    bestFor: "Cross-disciplinary movement, reformer, design-conscious practitioners",
    signatureClass: "Reformer Fusion (55 min)",
    bookingTip: "Parking in Edgewater is easier than South Beach but still limited — the studio can advise on the nearest garage. Membership structures offer meaningful savings for clients training three or more times per week.",
  },
  {
    number: "05",
    name: "Kenergy Pilates",
    neighborhood: "Wynwood",
    priceLevel: "$$",
    review: "Kenergy Pilates occupies a bright, well-ventilated space in Wynwood that feels at home in the neighbourhood&apos;s creative, community-oriented energy. The studio runs small-group reformer classes with a strong emphasis on breath work and postural awareness, and the instruction has a clear classical grounding even when the format is contemporary. The clientele skews younger than South Beach studios and includes many first-generation Pilates practitioners who come for the accessible pricing and stay for the quality of teaching. It is the kind of studio where regulars know each other&apos;s names, a rarity in Miami&apos;s transient fitness market.",
    address: "—",
    bestFor: "Small-group reformer, accessible pricing, community-focused atmosphere",
    signatureClass: "Reformer Small Group",
    bookingTip: "The intro package is genuinely good value — three classes at a rate well below the standard drop-in. Weekday evening classes fill fastest among the after-work Wynwood crowd.",
  },
  {
    number: "06",
    name: "Pilatay",
    neighborhood: "Little Havana",
    priceLevel: "$$",
    review: "Pilatay brings disciplined reformer instruction to Little Havana at price points that reflect the neighbourhood rather than the beachfront, making it one of the most genuinely accessible quality studios in Miami. The teaching is rooted in classical method principles, and the instructors take time with new clients to ensure technique is established before progressing to more demanding work. The studio is compact and personal — there is no anonymity here, which suits practitioners who want accountability alongside expertise. For visitors wanting to experience a local, non-tourist-facing side of Miami&apos;s wellness scene, Pilatay is the honest answer.",
    address: "—",
    bestFor: "Classical reformer, accessible pricing, neighbourhood community",
    signatureClass: "Reformer Foundations",
    bookingTip: "Book directly through the studio rather than third-party platforms to access the best rates. Street parking in Little Havana is more manageable than most Miami studio locations.",
  }
];

const BOOKING_TIPS = [
  {
    heading: "Book 5–7 days in advance for premium morning slots",
    body: "Miami&apos;s most popular studios — especially South Beach and Brickell — fill their early morning and lunchtime slots within hours of opening. Most apps allow 7-day advance booking; treat Monday morning as your booking window for the full week.",
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
      "Miami&apos;s financial district has seen rapid wellness studio growth, driven by a large professional population needing convenient, high-quality lunchtime and early-morning options. Studios here are sleek, modern, and optimised for efficiency — ideal for time-pressed professionals.",
  },
  {
    name: "Coconut Grove & Coral Gables",
    description:
      "The residential south of Miami offers a calmer, more community-oriented Pilates scene. Studios here tend to attract long-term clients building multi-year practices, and the atmosphere is noticeably less transactional than the beach and financial district studios.",
  },
  {
    name: "Wynwood & Design District",
    description:
      "Miami&apos;s creative quarter has attracted a younger, more experimental wellness crowd, and the studios that have opened here reflect that — more concept-driven, atmospheric, and design-forward than traditional Pilates boutiques. The neighbourhood is ideal for practitioners who want their workout to feel like an experience.",
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
              Miami has always taken fitness seriously — but the city&apos;s Pilates scene has matured well beyond the beach-body culture of its past. A city that attracts international residents, professional athletes, and wellness-conscious visitors year-round has built a reformer studio market that is simultaneously premium, diverse, and surprisingly deep. From the classical lineage practices of Coconut Grove to the design-forward boutiques of Wynwood, Miami now offers serious Pilates across every neighbourhood and every level. This guide covers the five studios we rate most highly, with everything you need before booking.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
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
              Best neighbourhoods for Pilates in Miami
            </h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Miami&apos;s Pilates landscape is shaped by its neighbourhoods. Here&apos;s where to look depending on where you&apos;re based.
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
          searchPlaceholder="Ask: best reformer Pilates in London…"
        />
      </main>
      <Footer />
    </>
  );
}
