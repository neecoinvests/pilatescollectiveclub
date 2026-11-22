import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import QuickPicks from "@/components/QuickPicks";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml, productItemList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Pilates Studios in London (2026)",
  description: "The best Pilates studios in London: reformer and classical studios in Chelsea, Notting Hill, Marylebone, Fitzrovia and Islington. Six picks, verified 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates london", "reformer pilates london", "best pilates studios london", "pilates studio london", "pilates classes london", "chelsea pilates", "notting hill pilates", "pilates marylebone", "pilates shoreditch", "best reformer pilates london"],
  openGraph: {
    title: "Best Pilates Studios in London (2026)",
    description: "Six curated Pilates studios in London: Chelsea, Marylebone, Notting Hill and Islington picks. Verified October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/london",
    images: [{ url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80", width: 1200, height: 630, alt: "London city guide: Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in London (2026)",
    description: "Our curated guide to London's finest Pilates studios: six verified picks with booking tips.",
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
    caveat: "premium London pricing, and Chelsea classes are in high demand at peak times.",
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
    review: "Exhale, founded by Gaby Noble after Pilates helped her recover from a serious car accident, is one of the UK's best-known classical Pilates brands. Classes and privates are taught on the full apparatus (reformers, towers, a Cadillac, Wunda chairs, barrels and an electric chair) and every teacher completes 600 hours of comprehensive training. Its studios are in Marylebone, Primrose Hill and North Finchley.",
    caveat: "classical teaching is precise and methodical: expect technique, not a high-energy workout.",
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
    caveat: "this is a very exclusive, premium experience: sessions are tiny and priced accordingly.",
    address: "",
    bestFor: "Ultra-private reformer sessions for one to three people",
    signatureClass: "Private Reformer (1–3 people)",
    bookingTip: "Book through the studio directly: Notting Hill sessions are by appointment only.",
  },
  {
    number: "04",
    name: "Ten Health & Fitness Fitzrovia",
    neighborhood: "Fitzrovia",
    priceLevel: "$$$",
    review: "Ten combines reformer Pilates with physiotherapy and treatment under one roof, and has grown from its first studio in Notting Hill to sites across London, including Fitzrovia, Chiswick, Little Venice, St James's, Nine Elms and the City. The Fitzrovia studio on Great Titchfield Street is close to Marylebone and Oxford Circus.",
    caveat: "a multi-site London brand: consistent and well-run, but less intimate than an owner-run classical studio.",
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
    caveat: "a method-focused studio, great for technique and rehab, less so if you want a high-energy class.",
    address: "Unit 226, Business Design Centre, 52 Upper Street, London N1 0QH",
    bestFor: "Traditional equipment Pilates and one-to-ones in north London",
    signatureClass: "Equipment & Reformer",
    bookingTip: "If you have an injury, start with a one-to-one before joining group classes.",
  },
  {
    number: "06",
    name: "Bootcamp Pilates Notting Hill",
    neighborhood: "Notting Hill / Bayswater",
    priceLevel: "$$$",
    review: "Bootcamp Pilates does what the name suggests: athletic, challenging reformer sessions that combine strength and cardio. It has studios in Notting Hill, on Porchester Road in Bayswater, and in Richmond.",
    caveat: "a high-intensity format, not the place for slow classical technique.",
    address: "64 Porchester Road, London W2 6ET",
    bestFor: "Athletic, high-intensity reformer workouts",
    signatureClass: "Bootcamp Reformer",
    bookingTip: "Bring a towel: the classes are sweaty.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Book at least 48 hours ahead for peak slots",
    body: "London's top studios fill rapidly. Morning and lunchtime weekday slots at premium studios go within minutes of opening. Most apps allow booking 5–7 days in advance: set a calendar reminder.",
  },
  {
    heading: "Introductory offers are your friend",
    body: "Almost every London studio runs a new-client special, typically 2–3 classes for about $40–67. Use these to assess the instruction quality and culture before committing to a monthly membership.",
  },
  {
    heading: "ClassPass works well for London",
    body: "ClassPass gives access to many excellent London studios without a long-term commitment. Useful for sampling before settling on a home studio.",
  },
  {
    heading: "Grip socks are required almost everywhere",
    body: "Bring your own: most studios sell them, but they're cheaper from Amazon or sports retailers. Toeless grip socks are the standard.",
  },
  {
    heading: "Expect to pay about $27–47 per class",
    body: "Drop-in reformer Pilates in London runs from around $27 at value studios to $47+ at premium boutiques. Monthly memberships typically bring the per-class cost down to $20–30.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Kensington & Chelsea",
    description:
      "The heartland of London's premium wellness scene. Studios here tend to be beautifully designed, highly priced, and attended by a discerning clientele. Heartcore and several independent boutiques make this the most saturated, in a good way, postcode for Pilates in the city.",
  },
  {
    name: "Shoreditch & East London",
    description:
      "Creative energy meets serious instruction. East London has seen the most exciting studio openings in recent years. Ten Health and Frame both operate here, offering different ends of the spectrum (one clinical, one communal) both excellent.",
  },
  {
    name: "Notting Hill & Westbourne Grove",
    description:
      "Notting Hill is home to some of London's most exclusive wellness addresses. Bodyism leads the field. Expect a neighborhood-feel mixed with genuine luxury, and long waiting lists for private sessions.",
  },
  {
    name: "Canary Wharf & The City",
    description:
      "Built for convenience around London's financial district. Studios here prioritize schedule density, lunchtime availability, and efficient class formats. Excellent for busy professionals who need quality without the trek west.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios. Full-toe grip socks are the standard.",
    price: "$30.00",
    url: "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A quality 6mm mat is worth having for mat classes and home practice between studio sessions.",
    price: "$144.00",
    url: "https://www.amazon.com/dp/B0066T7I54?tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios incorporate the magic circle: worth owning for home reinforcement work.",
    price: "$35.00",
    url: "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands",
    note: "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric resistance loops extend your home Pilates practice and support reformer spring work.",
    price: "$29.00",
    url: "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20",
  },
  {
    name: "Foam Roller",
    note: "Our pick: OPTP PRO-Roller Foam Roller (36-inch). Essential for fascial release and spinal mobility work before and after class.",
    price: "$62.99",
    url: "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20",
  },
  {
    name: "Home Pilates Reformer",
    note: "Our pick: PAETA Wooden Foldable Reformer. A home reformer extends your studio practice: AeroPilates and Align entry models deliver a genuine full-body session.",
    price: "$699.98",
    url: "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20",
  },
];


const RELATED_CITIES = [
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 6 },
  { city: "Zurich", country: "Switzerland", href: "/cities/zurich", studioCount: 6 },
  { city: "Geneva", country: "Switzerland", href: "/cities/geneva", studioCount: 6 },
  { city: "Lausanne", country: "Switzerland", href: "/cities/lausanne", studioCount: 4 },
];

const FURTHER_READING = [
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt: "Everything you need between studio sessions, from a quality mat to resistance bands.",
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

const CITY_FAQS = [
  { q: "What are the best Pilates studios in London?", a: "Our 6 curated picks are Heartcore Chelsea (Chelsea), Exhale Pilates London (Marylebone · Primrose Hill · North Finchley), Pilates in the Clouds (Notting Hill · Harvey Nichols Knightsbridge), Ten Health & Fitness (Fitzrovia (Fitzrovia), Complete Pilates Islington (Islington) and Bootcamp Pilates) Notting Hill (Notting Hill / Bayswater). Each listing above covers what the studio is best for, its signature class and a booking tip." },
  { q: "Which London neighborhoods are best for Pilates?", a: "This guide covers Kensington & Chelsea, Shoreditch & East London, Notting Hill & Westbourne Grove and Canary Wharf & The City. Kensington & Chelsea: The heartland of London's premium wellness scene." },
  { q: "What should I know about booking Pilates classes in London?", a: "Book at least 48 hours ahead for peak slots. London's top studios fill rapidly." },
  { q: "What should I bring to a Pilates class in London?", a: "Grip socks are required at most reformer studios. Our gear list for London covers Pilates grip socks, Pilates mat, magic circle, resistance bands, foam roller and home Pilates reformer." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in London (2026)",
      "description": "The best Pilates studios in London: reformer and classical studios in Chelsea, Notting Hill, Marylebone, Fitzrovia and Islington. Six picks, verified 2026.",
      "url": "https://pilatescollectiveclub.com/cities/london",
      "datePublished": "2026-06-28",
      "dateModified": "2026-10-20",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1400&q=80" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/london" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in London", GEAR.filter((g) => /amazon\.[a-z.]+\/dp\//.test(g.url)).map((g) => ({ name: g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name, description: g.note, price: g.price, url: g.url }))),
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="r-ah r-ah-legacy">
          <div className="r-wrap">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[12.5px] font-bold" style={{ color: "#0a0a0a" }}>
                City Guide
              </span>
              <span style={{ color: "#9a9490" }}>·</span>
              <span className="text-[12.5px] font-bold" style={{ color: "#3a3530" }}>
                United Kingdom
              </span>
            </div>
            <h1 className="mb-6 r-d r-h1">
              The Best Pilates Studios<br />
              <span style={{ color: "#a98a5f" }}>in London</span>
            </h1>
            <p className="text-base mb-8" style={{ color: "#6f6964" }}>
              Updated May 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#ddd6cc" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#3a3530" }}>
              London has one of the most sophisticated Pilates markets in the world. The city's appetite for high-quality instruction, premium studio design, and method-driven classes has produced a scene that rivals, and in many ways leads, New York and Los Angeles. This guide covers six studios we rate highly, from Islington to Chelsea, along with everything you need to know before booking your first class.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image relative r-ah-img">
              <Image
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1400&q=80"
                alt="London skyline"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-base font-bold mb-1">London, United Kingdom</p>
                  <p className="text-white/70 text-xs">One of the world's most dynamic Pilates markets</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-[12.5px] font-bold mb-10" style={{ color: "#0a0a0a" }}>
              6 Studios · Curated & Verified
            </p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (
                <StudioListing key={studio.number} {...studio} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-10 r-d r-h2">
              Tips for booking Pilates in London
            </h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((tip) => (
                <div key={tip.heading} className="pcc-booking-tip flex gap-5 rounded-2xl p-6" style={{ backgroundColor: "#ede9e3" }}>
                  <div className="w-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: "#0a0a0a", minHeight: "20px" }} />
                  <div>
                    <h3 className="text-base mb-1.5 r-hx" style={{ color: "#0a0a0a" }}>{tip.heading}</h3>
                    <p className="text-base leading-relaxed" style={{ color: "#3a3530" }}>{tip.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-4 r-d r-h2">
              Best neighborhoods for Pilates in London
            </h2>
            <p className="text-base mb-10" style={{ color: "#3a3530" }}>
              London's Pilates landscape is shaped by its neighborhoods. Here's where to look depending on where you're based.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {NEIGHBORHOODS.map((n) => (
                <div key={n.name} className="rounded-2xl p-6" style={{ backgroundColor: "#ede9e3" }}>
                  <h3 className="text-base mb-2 r-hx" style={{ color: "#0a0a0a" }}>{n.name}</h3>
                  <p className="text-base leading-relaxed" style={{ color: "#3a3530" }}>{n.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Gear */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-3 r-d r-h2">What to bring to your first class</h2>
            <p className="text-base mb-10" style={{ color: "#3a3530" }}>
              Grip socks are required at most reformer studios in London. These are our recommended picks: all available on Amazon.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#0a0a0a", textDecoration: "underline", fontSize: "inherit" }}>Affiliate disclosure.</Link>
            </p>
            <QuickPicks className="mb-0" picks={GEAR.map((g) => ({ name: g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name, price: g.price, url: g.url, note: g.name }))} />
          </div>
        </section>


        <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 r-d r-h2">Frequently asked questions</h2>
            <div className="space-y-6">
              {CITY_FAQS.map((f) => (
                <div key={f.q} className="rounded-2xl p-6" style={{ backgroundColor: "#ede9e3" }}>
                  <h3 className="text-base mb-2 r-hx" style={{ color: "#0a0a0a" }}>{f.q}</h3>
                  <p className="text-base leading-relaxed" style={{ color: "#3a3530" }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-3 r-d r-h2">Related city guides</h2>
            <p className="text-base mb-10" style={{ color: "#3a3530" }}>Explore our guides to other cities with thriving Pilates scenes.</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
              {RELATED_CITIES.map((c) => (
                <CityCard key={c.city} {...c} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-10 r-d r-h2">Further reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              {FURTHER_READING.map((a) => (
                <ArticleCard key={a.href} {...a} />
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Find Pilates near you"
          subtitle="Use our AI Finder to discover studios in any city: coming soon."
          showSearch
          searchPlaceholder="Ask: best reformer Pilates in London…"
        />
      </main>
      <Footer />
    </>
  );
}
