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
  title: "Best Pilates Studios in Tokyo (2026) — Curated Guide",
  description: "The best Pilates studios in Tokyo — reformer boutiques in Omotesando, Ebisu, and Daikanyama. Five curated picks, verified June 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates tokyo", "reformer pilates tokyo", "best pilates studios tokyo", "pilates studio tokyo", "pilates omotesando", "pilates ebisu", "pilates daikanyama", "pilates japan", "best reformer pilates tokyo", "pilates classes tokyo"],
  openGraph: {
    title: "Best Pilates Studios in Tokyo (2026)",
    description: "Five curated Pilates studios in Tokyo — Omotesando, Ebisu, and Daikanyama reformer picks. Verified June 2026.",
    url: "https://pilatescollectiveclub.com/cities/tokyo",
    images: [{ url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80", width: 1200, height: 630, alt: "Tokyo city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Tokyo (2026)",
    description: "Our curated guide to Tokyo's five best Pilates studios — verified for 2026.",
    images: ["https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/tokyo",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Re-Juvenate Pilates",
    neighborhood: "Minami-Aoyama",
    priceLevel: "¥¥¥¥",
    review: "Re-Juvenate occupies a discreet upper-floor studio in the heart of Minami-Aoyama, where the neighbourhood's appetite for understated excellence translates directly into the teaching. The approach is rooted in classical Pilates methodology, but instructors here have the depth to adapt intelligently for each client — whether a recovering dancer or a first-time practitioner navigating chronic back pain. Equipment is immaculate, sessions are unhurried, and the atmosphere carries the particular calm of a studio that has never needed to advertise. It draws a loyal clientele of architects, gallery owners, and international residents who treat it as a non-negotiable part of their week. Serious practitioners who want precision over novelty will find it difficult to train anywhere else after experiencing the standard set here.",
    address: "—",
    bestFor: "Classical Pilates precision in Tokyo's design quarter",
    signatureClass: "Re-Juvenate Signature Reformer",
    bookingTip: "English-friendly staff; book at least 3 days ahead for peak slots",
  },
  {
    number: "02",
    name: "My Body My Pilates",
    neighborhood: "Omotesando",
    priceLevel: "¥¥¥¥",
    review: "Tucked into one of Omotesando's quieter side streets, My Body My Pilates has built its reputation on the kind of individualised attention that group-class culture cannot replicate. Every session begins with a short dialogue about the body's current state — injuries, energy levels, goals — and the programming adjusts accordingly. The studio attracts professionals in their thirties and forties who have moved past the group-fitness phase and want training that actually changes their body composition and posture over time. Instructors hold international certifications and several have backgrounds in physical therapy, which lends the cueing a clinical precision that clients quickly come to depend on. The minimalist interior, quality Balanced Body equipment, and near-silent atmosphere make each visit feel restorative rather than merely functional.",
    address: "—",
    bestFor: "Semi-private reformer and postural correction work",
    signatureClass: "Body Composition Reformer",
    bookingTip: "Initial sessions include a full movement assessment; book private before group",
  },
  {
    number: "03",
    name: "Sky Pilates Tokyo",
    neighborhood: "Shibuya",
    priceLevel: "¥¥¥",
    review: "Sky Pilates earns its name with a studio floor positioned high above Shibuya's perpetual motion, offering the unusual experience of training with city panoramas stretching in every direction. The instruction blends reformer fundamentals with aerial apparatus work, making it genuinely distinctive in a market where most studios adhere to conventional formats. Classes are energetic without being aggressive, and the teaching team is notably strong at motivating clients who are still building their Pilates vocabulary. It suits urban practitioners who need the efficiency of a well-run group class but want something more inspiring than a basement box room. The combination of views, varied programming, and accessible pricing for the neighbourhood makes Sky one of the more straightforward recommendations in central Tokyo.",
    address: "—",
    bestFor: "Aerial and reformer Pilates with panoramic city views",
    signatureClass: "Sky Aerial Reformer",
    bookingTip: "Window reformer spots go first — book online the moment the schedule opens",
  },
  {
    number: "04",
    name: "KX Pilates Higashi-Shinjuku",
    neighborhood: "Shinjuku",
    priceLevel: "¥¥¥",
    review: "The Tokyo outpost of the Australian KX Pilates network brings the brand's signature high-intensity reformer methodology to Shinjuku with notable fidelity to the original concept. Classes are fifty minutes of structured, progressive work — heavier spring loads, faster transitions, and a cardio underpinning that separates it clearly from studios emphasising slow, corrective movement. The studio is popular with younger professionals and athletes who want the physical challenge of a proper workout alongside the joint-safe benefits of reformer work. Instructors are certified through KX's own training pipeline and maintain consistent cueing standards across the class lineup. For practitioners who find conventional Pilates too gentle, this is the logical answer in a neighbourhood that otherwise has limited premium options.",
    address: "—",
    bestFor: "High-intensity Australian reformer method for athletic clients",
    signatureClass: "KX50 Power",
    bookingTip: "First class free for new clients; unlimited monthly memberships available",
  },
  {
    number: "05",
    name: "LAGREE MICRO Studio",
    neighborhood: "Daikanyama",
    priceLevel: "¥¥¥¥",
    review: "LAGREE MICRO Studio operates at the extreme end of the boutique spectrum: maximum four clients per class, Megaformer machines, and a format that has nothing in common with the loosely branded 'Lagree-inspired' classes proliferating elsewhere in the city. The studio's Daikanyama address signals its positioning — this is a neighbourhood of concept stores and independent coffee roasters, and the clientele matches that sensibility in their approach to wellness. Instructors coach each client through every transition, maintaining the slow-twitch muscular fatigue that the Lagree method depends on for its results. Regular clients often describe a noticeable change in body composition within six to eight weeks, which drives the strong word-of-mouth that keeps the booking calendar perpetually full. Those willing to invest in the higher per-session cost will find the results-to-effort ratio among the best in Tokyo.",
    address: "—",
    bestFor: "Lagree Megaformer method in an ultra-intimate setting",
    signatureClass: "LAGREE MICRO 50",
    bookingTip: "Class sizes cap at four — book one week ahead minimum",
  },
  {
    number: "06",
    name: "zen place pilates",
    neighborhood: "Ebisu",
    priceLevel: "¥¥¥",
    review: "zen place pilates is Japan's most significant Pilates operator, and the Ebisu location exemplifies why the brand has succeeded where many boutique competitors have struggled to scale without diluting quality. The studios are spacious, the Stott-certified equipment is maintained to a high standard, and the instructor development programme is rigorous enough to produce genuinely skilled teachers across a large network. The Ebisu branch draws a mixed clientele — local executives, expat families, and committed practitioners who appreciate the reliability of consistent, technically grounded instruction. The membership structure allows clients to train across multiple city locations, which is a practical advantage in a metropolitan area where commuting patterns change week to week. For those new to Tokyo or new to Pilates, zen place offers the best combination of accessibility, quality, and logistical flexibility in the city.",
    address: "—",
    bestFor: "Reliable, technically grounded Pilates across multiple locations",
    signatureClass: "zen place Signature Reformer",
    bookingTip: "City-wide memberships work across all branches; Ebisu tends to be quieter mornings",
  }
];

const BOOKING_TIPS = [
  { heading: "Expect to pay ¥3,500–8,000 per class", body: "Tokyo reformer pricing varies considerably by format. Group classes at accessible studios run ¥3,500–5,000; premium boutique and semi-private sessions range from ¥6,000–8,000. Private sessions at top studios can reach ¥15,000. Monthly memberships offer the best per-session economics for regular practitioners." },
  { heading: "Cancellation policies are strictly enforced", body: "Tokyo studios universally enforce 24-hour cancellation policies, and many require 48 hours for premium slots. Late cancellations forfeit the full fee — this is cultural as much as commercial. Plan your schedule carefully and cancel promptly if plans change." },
  { heading: "English instruction is available but ask ahead", body: "Tokyo's wellness scene is increasingly bilingual, but not universally so. Studios in Aoyama, Ebisu, and Daikanyama are most likely to offer English instruction. When booking, confirm the language of instruction — most studios are happy to accommodate English-speaking clients with advance notice." },
  { heading: "Bring your own grip socks", body: "Grip socks are required at every reformer studio in Tokyo. While most studios sell them, Japanese-produced grip socks can be found at reasonable prices in Loft, Tokyu Hands, or sports stores near major stations — buying in advance saves you the premium studio markup." },
  { heading: "Punctuality is paramount", body: "Japanese business culture's emphasis on punctuality applies fully to wellness studios. Arriving even five minutes late may result in being turned away from a class, particularly at smaller studios with tightly structured sessions. Aim to arrive ten minutes early for your first visit." },
];

const NEIGHBORHOODS = [
  { name: "Minami-Aoyama & Omotesando", description: "Tokyo's most fashion-conscious district is home to its most polished wellness addresses. Studios here attract design professionals, international residents, and serious practitioners seeking technically rigorous instruction. Premium pricing is the norm, but the quality justifies it — expect world-class equipment and instructors with international training pedigrees." },
  { name: "Ebisu & Daikanyama", description: "These adjacent neighbourhoods have developed a creative, international wellness culture that supports a strong cluster of independent studios. The atmosphere is warmer and less corporate than Aoyama, and several studios offer bilingual instruction that makes them particularly accessible to Tokyo's expat community. A favourite zone for practitioners who value atmosphere alongside quality." },
  { name: "Shinjuku & Shibuya", description: "Central Tokyo's busiest commercial hubs are home to several of the city's larger studio networks. Convenience is the key virtue here — multiple studios are within a short walk of major transit hubs, making them practical choices for practitioners who commute from across the metropolitan area. Group class quality is reliable if rarely exceptional." },
  { name: "Nishi-Azabu & Hiroo", description: "Among Tokyo's most affluent residential pockets, these quiet streets between Roppongi and Ebisu host the city's most discreet and exclusive wellness venues. Studios here tend toward private sessions and small-group formats, with pricing to match. The neighbourhood's diplomatic and executive residential population sustains a Pilates culture that prioritises privacy and precision." },
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
  {
    name: "Home Pilates Reformer",
    note: "A home reformer extends your studio practice — AeroPilates and Align entry models deliver a genuine full-body session.",
    price: "From $450",
    url: "https://www.amazon.com/s?k=home+pilates+reformer+aeropilates+align&tag=pilatescollective-20",
  },
];


const RELATED_CITIES = [
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 5 },
];

const FURTHER_READING = [
  { title: "Best Pilates Equipment for Home Practice", excerpt: "Everything you need between studio sessions — from a quality mat to resistance bands.", href: "/blog/best-pilates-equipment-for-home-practice", category: "Equipment", readTime: "10 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80" },
  { title: "The Beginner's Guide to Reformer Pilates", excerpt: "What to expect in your first reformer class, how to choose a studio, and how to progress.", href: "/blog/beginners-guide-to-reformer-pilates", category: "Beginner Guide", readTime: "8 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Tokyo", "item": "https://pilatescollectiveclub.com/cities/tokyo" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Tokyo",
      "description": "Curated guide to the top 5 Pilates studios in Tokyo.",
      "url": "https://pilatescollectiveclub.com/cities/tokyo",
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
            "addressLocality": "Tokyo",
            "addressCountry": "JP",
          },
        },
      })),
    },
  ],
};

export default function TokyoPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Japan</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Tokyo</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Tokyo's Pilates scene reflects the city itself: meticulous, quietly excellent, and far deeper than its international profile suggests. Concentrated in the upscale neighbourhoods of Minami-Aoyama, Ebisu, and Nishi-Azabu, the city's best studios combine Japanese precision with instructors trained across Europe, the US, and Australia — producing a practice culture that is technical, disciplined, and increasingly sophisticated. This guide covers the five studios we rate most highly across the city.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1400&q=80" alt="Tokyo city guide — Pilates Collective Club" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Tokyo, Japan</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Meticulous, precise, and quietly world-class</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Studios · Curated & Verified</p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (<StudioListing key={studio.number} {...studio} />))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Tokyo</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Tokyo</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Tokyo's Pilates landscape is shaped by its neighbourhoods.</p>
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
              Grip socks are required at most reformer studios in Tokyo. These are our recommended picks — all available on Amazon.{" "}
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

        <CTASection title="Find Pilates near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best reformer Pilates in Tokyo…" />
      </main>
      <Footer />
    </>
  );
}
