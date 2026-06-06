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
  title: "The Best Pilates Studios in Zurich",
  description:
    "The best Pilates studios in Zurich — from Seefeld lake-view reformer to physio-Pilates in Hottingen. Curated & verified picks for every level.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates zürich", "pilates zurich", "reformer pilates zurich", "best pilates zurich", "pilates studios zürich"],
  openGraph: {
    title: "The Best Pilates Studios in Zurich",
    description: "Our curated guide to the best Pilates studios in Zurich — five verified studios with booking tips.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/zurich",
    images: [{ url: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=1200&q=80", width: 1200, height: 630, alt: "Zurich city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Zurich",
    description: "Our curated guide to the best Pilates studios in Zurich — five verified studios with booking tips.",
    images: ["https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/zurich",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "ProPilates",
    neighborhood: "Seefeld",
    priceLevel: "CHF ··",
    review: "ProPilates has been the benchmark for classical instruction in Zurich for over a decade, operating from a light-filled studio in the residential Seefeld quarter where the city's lake-adjacent calm seems to enter through the windows. The teaching here is rooted in the Stott Pilates method and delivered by instructors who have accumulated real hours — this is not a studio that hires quickly or trains superficially. Equipment is comprehensive and impeccably maintained, and the programming ranges from beginner-appropriate mat work to demanding intermediate reformer sequences that reward consistent attendance. The clientele is largely made up of Zurich's business and medical community, many of whom have been coming for years and treat sessions here as non-negotiable in their weekly schedules. Newcomers are welcomed but the studio's soul belongs to its long-term members.",
    address: "—",
    bestFor: "Classical practitioners and long-term Zurich residents seeking rigour",
    signatureClass: "ProPilates Reformer Intensive",
    bookingTip: "Long-term members fill most slots; book at least a week ahead as a new client",
  },
  {
    number: "02",
    name: "ilu move",
    neighborhood: "Kreis 5",
    priceLevel: "CHF ··",
    review: "ilu move arrived in Kreis 5 — Zurich's most culturally alive district — and immediately found its people: the creative class, the design-minded, the young professionals who want their wellness to reflect the same values as the neighbourhood they've chosen to live in. The studio's aesthetic is deliberate and warm, with natural materials and a spatial generosity that distinguishes it from the more clinical Swiss wellness offer. Instruction leans toward contemporary Pilates with a movement-positive philosophy — classes emphasise flow and body awareness alongside the technical precision that Zurich practitioners tend to demand. Small group sizes keep the work genuinely instructed rather than broadly supervised. ilu move suits clients at the intermediate level who are looking for a studio that feels like a community rather than a facility.",
    address: "—",
    bestFor: "Creative professionals and intermediate practitioners in the Kreis 5 community",
    signatureClass: "ilu Reformer Flow",
    bookingTip: "Introductory class packs offer the best entry point; check current offers online",
  },
  {
    number: "03",
    name: "Form Studio Zurich",
    neighborhood: "Wiedikon",
    priceLevel: "CHF ·",
    review: "Form Studio operates in Wiedikon with the unpretentious confidence of a studio that understands exactly who it serves: residents of one of Zurich's most liveable — and increasingly sought-after — neighbourhoods who want serious Pilates without the premium that a lakefront address would add to the invoice. The space is clean, thoughtfully arranged, and equipped with a solid fleet of reformers that see consistent use across a schedule dense with well-attended classes. Instructors are approachable and technically capable, with a particular strength in beginner and early-intermediate programming that makes this an excellent entry point for new practitioners. The studio's value proposition is the strongest of any quality Pilates address in Zurich, which sustains a large and genuinely loyal regular base. Form is the studio you build your practice at before you decide whether the more expensive options are really necessary.",
    address: "—",
    bestFor: "Beginners and early-intermediate practitioners seeking honest value",
    signatureClass: "Form Reformer Foundations",
    bookingTip: "Class card offers better per-session rates; purchase before your first visit",
  },
  {
    number: "04",
    name: "Protagonist Zurich",
    neighborhood: "Enge",
    priceLevel: "CHF ··",
    review: "Protagonist is one of the most thoughtfully programmed studios in Zurich, occupying a refined space in the residential Enge quarter that draws practitioners from across the city's lakeside and city centre neighbourhoods. The teaching philosophy here places anatomy and functional movement at the centre of every session — instructors are encouraged to understand clients' bodies deeply rather than simply directing them through sequences, and the depth of that approach is palpable from the first session. Equipment includes a full reformer suite alongside cadillac and chair units, allowing for programming that can accommodate rehabilitation clients alongside performance-focused practitioners. The clientele tends to be health-literate and precise in what they expect from a session, which suits the studio's teaching style perfectly. Private and semi-private sessions are particularly strong here.",
    address: "—",
    bestFor: "Anatomy-aware practitioners and those managing injury or rehabilitation",
    signatureClass: "Protagonist Functional Reformer",
    bookingTip: "Semi-private sessions offer excellent instructor attention at a reasonable premium over group rates",
  },
  {
    number: "05",
    name: "Trunk Pilates",
    neighborhood: "Oerlikon",
    priceLevel: "CHF ·",
    review: "Trunk Pilates has established itself quietly and confidently in Oerlikon — a northern district that has transformed substantially in recent years and now supports a wellness infrastructure that would once have required a trip to the city centre. The studio is practical and well-equipped, with a focus on classical reformer work that prioritises correct spinal mechanics and genuine core engagement over the kind of high-intensity hybrid formats that have become fashionable elsewhere. Instructors are methodical and clear in their teaching, making Trunk an excellent choice for those rebuilding a practice after injury or returning to Pilates after a significant gap. Pricing is among the most accessible in the city for the quality offered, which has generated a broad client base spanning students, families, and working professionals from the surrounding neighbourhood.",
    address: "—",
    bestFor: "Returning practitioners and those seeking classical work at accessible prices",
    signatureClass: "Trunk Classical Reformer",
    bookingTip: "Monthly memberships offer strong value; the studio rewards consistent attendance",
  },
  {
    number: "06",
    name: "in2motion",
    neighborhood: "Hottingen",
    priceLevel: "CHF ··",
    review: "In the leafy, residential Hottingen quarter — perched on the gentle rise between the city centre and the Zürichberg forest — in2motion has built a reputation for high-calibre instruction delivered in an environment of considerable calm. The studio's positioning reflects its clientele: Zurich's established professional and family community who value discretion and depth over novelty or social media visibility. Teaching is personal and thorough, with instructors who invest time in understanding each client's history and movement patterns before progressing the work. Equipment is premium throughout, and the studio's smaller scale ensures that nothing about a session feels rushed or impersonal. in2motion is particularly well-regarded for its work with post-natal clients and those managing chronic back conditions — a specificity of expertise that distinguishes it from the broader reformer boutique category.",
    address: "—",
    bestFor: "Established professionals, post-natal clients, and those with chronic back conditions",
    signatureClass: "in2motion Personalised Reformer",
    bookingTip: "New clients are encouraged to book an assessment session before joining regular classes",
  }
];

const BOOKING_TIPS = [
  {
    heading: "Book early for morning slots",
    body: "Quality studios in Zurich fill up fast. Most release their weekly schedule on Sunday evening — set a phone reminder if you want prime morning slots.",
  },
  {
    heading: "Introductory offers are common",
    body: "Most studios offer a discounted first-class or introductory pack for new clients. Always check the website before booking a full-price drop-in.",
  },
  {
    heading: "Swiss punctuality is expected",
    body: "Arrive 5–10 minutes early. Arriving late to a small group class is considered disruptive. Some studios have a strict no-late-entry policy.",
  },
  {
    heading: "Grip socks are usually required",
    body: "Almost every reformer studio in Zurich requires grip socks. Some sell them on arrival, but it's cheaper to bring your own.",
  },
  {
    heading: "CHF 30–50 per class is standard",
    body: "Drop-in rates at premium Zurich studios typically fall between CHF 30 and CHF 50. Monthly memberships and class packs offer meaningful savings.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Seefeld",
    description:
      "The upscale eastern lakeside district is home to Zurich's most polished studios. Expect pristine spaces, premium pricing, and a well-heeled clientele.",
  },
  {
    name: "Kreis 1 / Niederdorf",
    description:
      "The historic city centre is surprisingly well-served by boutique studios. Easy to access and perfect for combining a class with a day in the old town.",
  },
  {
    name: "Kreis 4 / Langstrasse",
    description:
      "Increasingly popular with creatives and young professionals, Kreis 4 has seen a wave of new studio openings with accessible pricing and strong community energy.",
  },
  {
    name: "Kreis 1 / Central",
    description:
      "The area around Central station is a convenient choice for practitioners commuting from elsewhere in the city, with several quality studios within walking distance.",
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
  { city: "Geneva", country: "Switzerland", href: "/cities/geneva", studioCount: 5 },
  { city: "Lausanne", country: "Switzerland", href: "/cities/lausanne", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
];

const FURTHER_READING = [
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt:
      "Everything you need to complement your studio sessions at home, from a quality mat to resistance bands.",
    href: "/blog/best-pilates-equipment-for-home-practice",
    category: "Equipment",
    readTime: "10 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1598300056393-4aac492f4344?w=800&q=80",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Zurich", "item": "https://pilatescollectiveclub.com/cities/zurich" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Zurich",
      "description": "Curated guide to the top 5 Pilates studios in Zurich.",
      "url": "https://pilatescollectiveclub.com/cities/zurich",
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
            "addressLocality": "Zürich",
            "addressCountry": "CH",
          },
        },
      })),
    },
  ],
};

export default function ZurichPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Article Header */}
        <section
          className="pt-32 pb-16 px-6"
          style={{ backgroundColor: "#fcf9f8" }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
              >
                City Guide
              </span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span
                className="text-xs font-semibold uppercase tracking-[0.15em]"
                style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}
              >
                Switzerland
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6"
              style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
            >
              The Best Pilates Studios
              <br />
              <span style={{ color: "#8b4a31" }}>in Zurich</span>
            </h1>

            <p
              className="text-sm mb-8"
              style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}
            >
              Updated May 2026 · 8 min read
            </p>

            {/* Divider */}
            <div
              className="w-16 h-px mb-8"
              style={{ backgroundColor: "#d9c2ba" }}
            />

            <p
              className="text-lg leading-relaxed"
              style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
            >
              Zurich has quietly become one of Europe's most compelling cities for Pilates. Swiss
              precision and a culture of excellence have shaped a studio scene that takes the method
              seriously — whether you're stepping onto a reformer for the first time or deepening
              a decade-long practice. This guide covers the five studios we return to again and
              again, the neighbourhoods worth knowing, and everything you need before booking your
              first class.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="/pictures/henrique-ferreira-omiTbS-nb_M-unsplash.jpg"
                alt="Zurich city view"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.9)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.5) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Zürich, Switzerland</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>The lakeside city's thriving Pilates scene</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Listings */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-10"
              style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
            >
              6 Studios · Curated & Verified
            </p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (
                <StudioListing key={studio.number} {...studio} />
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section
          className="py-20 px-6"
          style={{ backgroundColor: "#f6f3f2" }}
        >
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-3xl font-semibold mb-10"
              style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
            >
              Tips for booking Pilates in Zurich
            </h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((tip) => (
                <div
                  key={tip.heading}
                  className="pcc-booking-tip flex gap-5 rounded-xl p-6"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(217, 194, 186, 0.3)",
                  }}
                >
                  <div
                    className="w-1.5 rounded-full shrink-0 mt-1"
                    style={{ backgroundColor: "#8b4a31", minHeight: "20px" }}
                  />
                  <div>
                    <h3
                      className="text-base font-semibold mb-1.5"
                      style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
                    >
                      {tip.heading}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {tip.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-3xl font-semibold mb-4"
              style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
            >
              Best neighbourhoods for Pilates in Zurich
            </h2>
            <p
              className="text-base mb-10"
              style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
            >
              Where you book depends on where you're staying or working. Here's a quick breakdown.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {NEIGHBORHOODS.map((n) => (
                <div
                  key={n.name}
                  className="rounded-xl p-6"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(217, 194, 186, 0.35)",
                  }}
                >
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif" }}
                  >
                    {n.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {n.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Cities */}
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-3xl font-semibold mb-3"
              style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
            >
              Related city guides
            </h2>
            <p
              className="text-sm mb-10"
              style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
            >
              Explore our guides to other cities with thriving Pilates scenes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
              {RELATED_CITIES.map((c) => (
                <CityCard key={c.city} {...c} />
              ))}
            </div>
          </div>
        </section>

        {/* Further Reading */}
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-3xl font-semibold mb-10"
              style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
            >
              Further reading
            </h2>
            <div className="max-w-sm">
              {FURTHER_READING.map((a) => (
                <ArticleCard key={a.href} {...a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="Find Pilates near you"
          subtitle="Use our AI Finder to discover studios in any city — coming soon."
          showSearch
          searchPlaceholder="Ask: best beginner Pilates in Zurich…"
        />
      </main>
      <Footer />
    </>
  );
}
