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
  title: "Best Pilates Studios in London (2026) — Curated Guide",
  description: "The best Pilates studios in London — reformer and classical studios in Chelsea, Notting Hill, Marylebone, Fitzrovia and Islington. Six curated picks, verified October 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates london", "reformer pilates london", "best pilates studios london", "pilates studio london", "pilates classes london", "chelsea pilates", "notting hill pilates", "pilates marylebone", "pilates shoreditch", "best reformer pilates london"],
  openGraph: {
    title: "Best Pilates Studios in London (2026)",
    description: "Six curated Pilates studios in London — Chelsea, Marylebone, Notting Hill and Islington picks. Verified October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/london",
    images: [{ url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80", width: 1200, height: 630, alt: "London city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in London (2026)",
    description: "Our curated guide to London's finest Pilates studios — five verified picks with booking tips.",
    images: ["https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/london",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Heartcore Chelsea",
    neighborhood: "Chelsea",
    priceLevel: "$$$$",
    review: "Heartcore Chelsea is on Burnsall Street, a short walk from the King's Road and about ten minutes from South Kensington. Its signature class is the Coreformer, built to increase strength, mobility and ease in everyday movement, alongside mat classes, more intense formats, pregnancy classes and bespoke personal training. It is open from 6:30am to 8:30pm.",
    caveat: "premium London pricing — and Chelsea classes are in high demand at peak times.",
    address: "6 Burnsall Street, London SW3 3ST",
    bestFor: "Signature reformer classes and pregnancy Pilates in Chelsea",
    signatureClass: "Coreformer",
    bookingTip: "Book 48 hours ahead for early-morning and evening classes.",
  },
  {
    number: "02",
    name: "Exhale Pilates London",
    neighborhood: "Marylebone · Primrose Hill · North Finchley",
    priceLevel: "$$$$",
    review: "Exhale, founded by Gaby Noble after Pilates helped her recover from a serious car accident, is one of the UK's best-known classical Pilates brands. Classes and privates are taught on the full apparatus — reformers, towers, a Cadillac, Wunda chairs, barrels and an electric chair — and every teacher completes 600 hours of comprehensive training. Its studios are in Marylebone, Primrose Hill and North Finchley.",
    caveat: "classical teaching is precise and methodical — expect technique, not a high-energy workout.",
    address: "90 Wimpole Street, London W1G 0EE",
    bestFor: "Classical Pilates on the full apparatus",
    signatureClass: "Classical Small Group",
    bookingTip: "Look for an intro offer; midweek daytime classes usually have the best availability.",
  },
  {
    number: "03",
    name: "Pilates in the Clouds",
    neighborhood: "Notting Hill · Harvey Nichols Knightsbridge",
    priceLevel: "$$$$",
    review: "Pilates in the Clouds was founded in 2014 by Los Angeles-born instructor Lauren Masaoka and has long been London's most exclusive reformer studio: its Notting Hill studio works by appointment only, with sessions of one to three people and no published address for client privacy. It has since opened to the public with a new home in Harvey Nichols.",
    caveat: "this is a very exclusive, premium experience — sessions are tiny and priced accordingly.",
    address: "—",
    bestFor: "Ultra-private reformer sessions for one to three people",
    signatureClass: "Private Reformer (1–3 people)",
    bookingTip: "Book through the studio directly — Notting Hill sessions are by appointment only.",
  },
  {
    number: "04",
    name: "Ten Health & Fitness — Fitzrovia",
    neighborhood: "Fitzrovia",
    priceLevel: "$$$",
    review: "Ten combines reformer Pilates with physiotherapy and treatment under one roof, and has grown from its first studio in Notting Hill to sites across London, including Fitzrovia, Chiswick, Little Venice, St James's, Nine Elms and the City. The Fitzrovia studio on Great Titchfield Street is close to Marylebone and Oxford Circus.",
    caveat: "a multi-site London brand — consistent and well-run, but less intimate than an owner-run classical studio.",
    address: "83 Great Titchfield Street, London W1W 6RH",
    bestFor: "Reformer Pilates with physiotherapy on hand",
    signatureClass: "Reformer Pilates",
    bookingTip: "New clients can start with Ten's intro offer (3 classes) before choosing a membership.",
  },
  {
    number: "05",
    name: "Complete Pilates Islington",
    neighborhood: "Islington",
    priceLevel: "$$$",
    review: "Complete Pilates Islington is inside the Business Design Centre on Upper Street, offering expert-led traditional Pilates on equipment and reformer, specialist one-to-one sessions for all experience levels, group classes and online classes.",
    caveat: "a method-focused studio — great for technique and rehab, less so if you want a high-energy class.",
    address: "Unit 226, Business Design Centre, 52 Upper Street, London N1 0QH",
    bestFor: "Traditional equipment Pilates and one-to-ones in north London",
    signatureClass: "Equipment & Reformer",
    bookingTip: "If you have an injury, start with a one-to-one before joining group classes.",
  },
  {
    number: "06",
    name: "Bootcamp Pilates — Notting Hill",
    neighborhood: "Notting Hill / Bayswater",
    priceLevel: "$$$",
    review: "Bootcamp Pilates does what the name suggests: athletic, challenging reformer sessions that combine strength and cardio. It has studios in Notting Hill — on Porchester Road in Bayswater — and in Richmond.",
    caveat: "a high-intensity format — not the place for slow classical technique.",
    address: "64 Porchester Road, London W2 6ET",
    bestFor: "Athletic, high-intensity reformer workouts",
    signatureClass: "Bootcamp Reformer",
    bookingTip: "Bring a towel — the classes are sweaty.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Book at least 48 hours ahead for peak slots",
    body: "London's top studios fill rapidly. Morning and lunchtime weekday slots at premium studios go within minutes of opening. Most apps allow booking 5–7 days in advance — set a calendar reminder.",
  },
  {
    heading: "Introductory offers are your friend",
    body: "Almost every London studio runs a new-client special — typically 2–3 classes for £30–50. Use these to assess the instruction quality and culture before committing to a monthly membership.",
  },
  {
    heading: "ClassPass works well for London",
    body: "ClassPass gives access to many excellent London studios without a long-term commitment. Useful for sampling before settling on a home studio.",
  },
  {
    heading: "Grip socks are required almost everywhere",
    body: "Bring your own — most studios sell them, but they're cheaper from Amazon or sports retailers. Toeless grip socks are the standard.",
  },
  {
    heading: "Expect to pay £20–35 per class",
    body: "Drop-in reformer Pilates in London runs from around £20 at value studios to £35+ at premium boutiques. Monthly memberships typically bring the per-class cost down to £15–22.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Kensington & Chelsea",
    description:
      "The heartland of London's premium wellness scene. Studios here tend to be beautifully designed, highly priced, and attended by a discerning clientele. Heartcore and several independent boutiques make this the most saturated — in a good way — postcode for Pilates in the city.",
  },
  {
    name: "Shoreditch & East London",
    description:
      "Creative energy meets serious instruction. East London has seen the most exciting studio openings in recent years. Ten Health and Frame both operate here, offering different ends of the spectrum — one clinical, one communal — both excellent.",
  },
  {
    name: "Notting Hill & Westbourne Grove",
    description:
      "Notting Hill is home to some of London's most exclusive wellness addresses. Bodyism leads the field. Expect a neighbourhood-feel mixed with genuine luxury — and long waiting lists for private sessions.",
  },
  {
    name: "Canary Wharf & The City",
    description:
      "Built for convenience around London's financial district. Studios here prioritise schedule density, lunchtime availability, and efficient class formats. Excellent for busy professionals who need quality without the trek west.",
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
  {
    name: "Home Pilates Reformer",
    note: "A home reformer extends your studio practice — AeroPilates and Align entry models deliver a genuine full-body session.",
    price: "From $450",
    url: "https://www.amazon.com/s?k=home+pilates+reformer+aeropilates+align&tag=pilatescollective-20",
  },
];


const RELATED_CITIES = [
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
  { city: "Zurich", country: "Switzerland", href: "/cities/zurich", studioCount: 5 },
  { city: "Geneva", country: "Switzerland", href: "/cities/geneva", studioCount: 5 },
  { city: "Lausanne", country: "Switzerland", href: "/cities/lausanne", studioCount: 5 },
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
        { "@type": "ListItem", "position": 2, "name": "London", "item": "https://pilatescollectiveclub.com/cities/london" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in London",
      "description": "Curated guide to the top 5 Pilates studios in London.",
      "url": "https://pilatescollectiveclub.com/cities/london",
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
            "addressLocality": "London",
            "addressCountry": "GB",
          },
        },
      })),
    },
  ],
};

export default function LondonPage() {
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
                United Kingdom
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in London</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Updated May 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              London has one of the most sophisticated Pilates markets in the world. The city's appetite for high-quality instruction, premium studio design, and method-driven classes has produced a scene that rivals — and in many ways leads — New York and Los Angeles. This guide covers six studios we rate highly, from Islington to Chelsea, along with everything you need to know before booking your first class.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1400&q=80"
                alt="London skyline"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>London, United Kingdom</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>One of the world's most dynamic Pilates markets</p>
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
              Tips for booking Pilates in London
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
              Best neighbourhoods for Pilates in London
            </h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              London's Pilates landscape is shaped by its neighbourhoods. Here's where to look depending on where you're based.
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
              Grip socks are required at most reformer studios in London. These are our recommended picks — all available on Amazon.{" "}
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
          subtitle="Use our AI Finder to discover studios in any city — coming soon."
          showSearch
          searchPlaceholder="Ask: best reformer Pilates in London…"
        />
      </main>
      <Footer />
    </>
  );
}
