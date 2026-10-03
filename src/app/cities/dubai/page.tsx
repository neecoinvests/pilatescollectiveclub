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
  title: "Best Pilates Studios in Dubai (2026) — Curated Guide",
  description: "The best Pilates studios in Dubai — reformer boutiques in DIFC, Jumeirah, Dubai Marina, and Downtown. Six curated picks, verified October 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates dubai", "reformer pilates dubai", "best pilates studios dubai", "pilates studio dubai", "pilates difc", "pilates jumeirah", "pilates marina dubai", "pilates uae", "best reformer pilates dubai", "pilates classes dubai"],
  openGraph: {
    title: "Best Pilates Studios in Dubai (2026)",
    description: "Six curated Pilates studios in Dubai — DIFC, Jumeirah, and Marina reformer picks. Verified October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/dubai",
    images: [{ url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80", width: 1200, height: 630, alt: "Dubai city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Dubai (2026)",
    description: "Our curated guide to Dubai's finest Pilates studios — six verified picks with booking tips.",
    images: ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/dubai" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Reform Athletica — DIFC",
    neighborhood: "DIFC (ICD Brookfield Place)",
    priceLevel: "$$$$",
    review: "Homegrown Reform Athletica was founded in Jumeirah in 2018 and opened its second studio at ICD Brookfield Place in DIFC in 2023. The art-filled space has two large multifunction studios, private training rooms, a café and changing facilities. Classes are capped at 10–12 people and include its signature Pilates, inspired by the Reform Method and Microform, alongside HIIT, kettlebells and TRX, deep stretch and vinyasa yoga.",
    caveat: "premium pricing — at the DIFC opening a single class cost Dhs143, with a three-class Pilates taster for Dhs238; check current rates.",
    address: "ICD Brookfield Place, DIFC, Dubai",
    bestFor: "Premium small-group reformer for DIFC professionals",
    signatureClass: "Signature Reformer Pilates",
    bookingTip: "First-timers should start with the three-class Pilates taster package.",
  },
  {
    number: "02",
    name: "11 Pilates",
    neighborhood: "Jumeirah 1 / Dubai Marina",
    priceLevel: "$$$",
    review: "11 Pilates was founded in the UK and specialises in dynamic reformer Pilates for all levels, using Merrithew reformers and Cadillacs. Its progressive classes — Core Reformer, Core Plus+ and Dynamic Reformer — build strength, flexibility, posture and coordination, and it has studios in Jumeirah 1 and Dubai Marina.",
    caveat: "weekend hours are shorter (Sundays close around 5pm), so check the schedule before planning a weekend class.",
    address: "—",
    bestFor: "Progressive reformer classes on Merrithew equipment",
    signatureClass: "Core Reformer",
    bookingTip: "Start with Core Reformer before moving up to Core Plus+ or Dynamic Reformer.",
  },
  {
    number: "03",
    name: "Studio14",
    neighborhood: "Dubai",
    priceLevel: "$$$",
    review: "Studio14 is a boutique Pilates studio built around eco-friendly principles, including self-powered equipment, and it even has its own fitness-wear line. Small classes let instructors give real attention to beginners and enthusiasts alike, across Pilates, stretching and yoga.",
    caveat: "we could not confirm the exact studio address independently — check the studio's website or Instagram before visiting.",
    address: "—",
    bestFor: "Small-group Pilates with an eco-conscious ethos",
    signatureClass: "Reformer Pilates",
    bookingTip: "Small classes fill quickly — book online 24–48 hours ahead.",
  },
  {
    number: "04",
    name: "Tula Studios — JBR",
    neighborhood: "JBR (Jumeirah Beach Residence)",
    priceLevel: "$$$",
    review: "Tula — meaning balance in Sanskrit — is a wellness studio on the podium level of Murjan 2 in JBR, with free parking in the building. It offers reformer Pilates, mat Pilates, yoga, barre, sound healing, strength training and pre- and post-natal sessions, and opens from 6:30am on weekdays. Tula also has studios in Emirates Living and Town Square.",
    caveat: "a multi-discipline wellness studio — choose reformer classes specifically if that is what you want.",
    address: "Murjan 2, Podium Level, JBR, Dubai",
    bestFor: "JBR and Marina residents; reformer plus pre/post-natal classes",
    signatureClass: "Reformer Pilates",
    bookingTip: "Use the free parking in Murjan 2 — the studio is next to Grandiose Supermarket.",
  },
  {
    number: "05",
    name: "Art of Pilates — Business Bay",
    neighborhood: "Business Bay",
    priceLevel: "$$$",
    review: "Art of Pilates is a modern reformer studio in Business Bay with showers, lockers, towels and parking. Its classes are clearly levelled — Reformer Beginners, Pilates Reformer Intermediate and Reformer Power Pilates — plus targeted sessions such as Slim Legs and Strong Core, and it is rated 4.8 from more than 500 ratings on ClassPass.",
    caveat: "we could not confirm the exact building address — check the booking app for directions.",
    address: "—",
    bestFor: "Levelled reformer classes for Business Bay and Downtown",
    signatureClass: "Reformer Power Pilates",
    bookingTip: "Begin with Reformer Beginners before booking Power Pilates.",
  },
  {
    number: "06",
    name: "Revolution Studios DXB",
    neighborhood: "Al Quoz",
    priceLevel: "$$",
    review: "Revolution Studios, one of Scotland's best-known boutique fitness brands, opened its first Middle East studio in Goshi Warehouse City, Al Quoz, in September 2025. Its Reformer Pilates class is fast-paced and athletic — Pilates principles with dynamic movement, club-style lighting and a choreographed playlist — alongside indoor cycling and strength classes.",
    caveat: "this is high-energy, music-driven reformer — not the place for slow classical technique.",
    address: "Goshi Warehouse City, Warehouse 01, 19D Street, Al Quoz Industrial Area 3, Dubai",
    bestFor: "Athletic, music-driven reformer workouts",
    signatureClass: "Reformer Pilates",
    bookingTip: "The studio runs 6am–8:30pm daily — early classes beat the Al Quoz traffic.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Book at least 48–72 hours ahead for peak slots",
    body: "Dubai's top Pilates studios fill quickly, particularly morning slots before 9am and evening slots from 6pm. Weekend classes at premium studios in DIFC and City Walk can book out within minutes of opening.",
  },
  {
    heading: "Tipping is not customary but always appreciated",
    body: "Unlike in some Western cities, tipping Pilates instructors is not an established norm in Dubai. A kind word and consistent return are the most meaningful currency. If you do tip, 20–30 AED is a generous gesture.",
  },
  {
    heading: "ClassPass has good coverage in Dubai",
    body: "ClassPass operates well in Dubai and is particularly useful for sampling the range of reformer studios before settling on a home base. Many premium studios participate, though peak times may carry a credit premium.",
  },
  {
    heading: "Dress code is studio-appropriate, not street-casual",
    body: "While Dubai has relaxed significantly, arriving to your Pilates studio in appropriate workout attire is expected. Most studios ask that you change on-site rather than arriving in outdoor clothes.",
  },
  {
    heading: "Expect to pay 150–300 AED per reformer class",
    body: "Drop-in reformer classes range from around 150 AED at community studios to 300 AED at premium boutiques in DIFC and City Walk. Monthly memberships and class packs typically bring the per-session cost down by 30–40%.",
  },
  {
    heading: "Summer scheduling shifts significantly",
    body: "Many Dubai residents travel in July and August, and some studios reduce scheduling or run summer-only promotions. If you're visiting in summer, confirm class availability in advance.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "DIFC & Downtown Dubai",
    description:
      "The financial heart of Dubai is also its premium wellness hub. Studios in DIFC target the city's international professional class — well-equipped, highly priced, and consistently excellent. Expect polished interiors, top-tier equipment, and a client base that knows exactly what it wants.",
  },
  {
    name: "Jumeirah & Al Safa",
    description:
      "Jumeirah's villa-lined streets house some of Dubai's most established and community-rooted studios. The clientele skews towards long-term residents and wellness-oriented families. Studios here tend to be calmer, more holistic, and more integrative in their approach.",
  },
  {
    name: "Dubai Marina & JBR",
    description:
      "The waterfront residential district has a dense cluster of studios serving the large expat community that lives here. Convenient scheduling, good value, and a high density of options make this one of the best postcodes for building a regular Pilates practice in Dubai.",
  },
  {
    name: "City Walk & Business Bay",
    description:
      "Dubai's newer mixed-use districts host the city's most design-forward boutique studios. If you want premium reformer in a setting that looks as good as it performs, City Walk and Business Bay are where to look.",
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
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 6 },
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 6 },
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
        { "@type": "ListItem", "position": 2, "name": "Dubai", "item": "https://pilatescollectiveclub.com/cities/dubai" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Dubai",
      "description": "Curated guide to the top 5 Pilates studios in Dubai.",
      "url": "https://pilatescollectiveclub.com/cities/dubai",
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
            "addressLocality": "Dubai",
            "addressCountry": "AE",
          },
        },
      })),
    },
  ],
};

export default function DubaiPage() {
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
                United Arab Emirates
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Dubai</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Updated May 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Dubai has transformed into one of the Middle East's most ambitious wellness destinations, and its Pilates scene reflects that ambition fully. A city of high expectations and high standards, Dubai has attracted instructors and studio concepts from London, New York, and Sydney — producing a reformer market that is simultaneously premium, diverse, and competitive. From the financial towers of DIFC to the waterfront studios of Bluewaters Island, the city now offers world-class Pilates across neighbourhoods. This guide covers the six studios we rate most highly, with everything you need to know before booking.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=80"
                alt="Dubai skyline"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Dubai, United Arab Emirates</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>The Middle East's most ambitious wellness destination</p>
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
              Tips for booking Pilates in Dubai
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
              Best neighbourhoods for Pilates in Dubai
            </h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Dubai's Pilates landscape is shaped by its neighbourhoods. Here's where to look depending on where you're based.
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
              Grip socks are required at most reformer studios in Dubai. These are our recommended picks — all available on Amazon.{" "}
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
