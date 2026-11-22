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
  title: "Best Pilates Studios in Hong Kong (2026)",
  description: "The best Pilates studios in Hong Kong, from Central reformer boutiques to studios in Wan Chai and Causeway Bay. Six curated picks, verified October 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates hong kong", "reformer pilates hong kong", "best pilates studios hong kong", "pilates studio hong kong", "pilates central hk", "pilates wan chai", "pilates causeway bay", "pilates hk", "best reformer pilates hong kong", "pilates classes hong kong"],
  openGraph: {
    title: "Best Pilates Studios in Hong Kong (2026)",
    description: "Six curated Pilates studios in Hong Kong: Central, Wan Chai, and Causeway Bay reformer picks. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/hong-kong",
    images: [{ url: "https://images.unsplash.com/photo-1532986374557-50e0d7c07a42?w=1200&q=80", width: 1200, height: 630, alt: "Hong Kong city guide: Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Hong Kong (2026)",
    description: "Our curated guide to Hong Kong's six best Pilates studios: verified for 2026.",
    images: ["https://images.unsplash.com/photo-1532986374557-50e0d7c07a42?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/hong-kong",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "FLEX Studio",
    neighborhood: "Central · Wong Chuk Hang",
    priceLevel: "$$$$",
    review: "FLEX Studio is one of Hong Kong's longest-established Pilates studios and describes itself as the city's only classical Pilates studio. It offers Pilates alongside yoga, barre and pre- and post-natal conditioning, with a studio over two floors of the Man Cheung Building on Wyndham Street and a second at One Island South in Wong Chuk Hang.",
    caveat: "premium pricing for Hong Kong: the classical depth is the reason to pay it.",
    address: "3/F–4/F, Man Cheung Building, 15–17 Wyndham Street, Central",
    bestFor: "Classical Pilates and pre/post-natal conditioning",
    signatureClass: "Classical Apparatus",
    bookingTip: "If Central is full, try the One Island South studio in Wong Chuk Hang.",
  },
  {
    number: "02",
    name: "Iso Fit",
    neighborhood: "Central",
    priceLevel: "$$$$",
    review: "Iso Fit is a top-tier Pilates and Gyrotonic studio on Wyndham Street, offering specialized training systems and equipment that it says are exclusive in Asia. It suits clients who want precise, equipment-led work rather than a group fitness class.",
    caveat: "a specialist, premium studio: better for focused private and small-group work than casual drop-ins.",
    address: "802–805, 8/F, Yu Yuet Lai Building, 43–55 Wyndham Street, Central",
    bestFor: "Pilates and Gyrotonic on specialist equipment",
    signatureClass: "Pilates & Gyrotonic Private",
    bookingTip: "Enquire well ahead for preferred instructors.",
  },
  {
    number: "03",
    name: "PILATESBEAT",
    neighborhood: "Sheung Wan",
    priceLevel: "$$$",
    review: "PILATESBEAT is a boutique reformer studio in Connaught Marina with just five reformers, so classes are genuinely small. It is one of the reformer studios that has helped make Sheung Wan a Pilates hub.",
    caveat: "with only five reformers, classes book out: plan ahead.",
    address: "Unit 1, 9/F, Connaught Marina, 48 Connaught Road West, Sheung Wan",
    bestFor: "Very small reformer classes in Sheung Wan",
    signatureClass: "Reformer (5-person class)",
    bookingTip: "Book at least 48 hours ahead for evening classes.",
  },
  {
    number: "04",
    name: "DEFIN8 Fitness Central",
    neighborhood: "Central",
    priceLevel: "$$$",
    review: "DEFIN8 Fitness runs Infrared Reformer Pilates group classes, combining reformer work with infrared heat that the studio says loosens muscles faster and shortens warm-up and recovery. Its Central studio is on the 17th floor of Silver Fortune Plaza on Wellington Street.",
    caveat: "infrared classes are warm: hydrate well, and check with your doctor if heat is a concern for you.",
    address: "17/F, Silver Fortune Plaza, 1 Wellington Street, Central",
    bestFor: "Infrared reformer classes in Central",
    signatureClass: "Infrared Reformer Pilates",
    bookingTip: "Look out for introductory offers for first-time clients.",
  },
  {
    number: "05",
    name: "Jesel Studio",
    neighborhood: "Wan Chai",
    priceLevel: "$$$",
    review: "Jesel Studio in Wan Chai is one of the highest-rated reformer studios in Hong Kong on ClassPass (4.9), with small class sizes and instructors focused on improving each member's practice.",
    caveat: "it is on the 10th floor of a commercial building, so allow a few minutes to find the lift.",
    address: "Unit A, 10/F, Shun Pont Commercial Building, 5 Thomson Road, Wan Chai",
    bestFor: "Small, attentive reformer classes in Wan Chai",
    signatureClass: "Reformer Pilates",
    bookingTip: "Small classes fill fast: book a few days ahead.",
  },
  {
    number: "06",
    name: "Mindful Pilates",
    neighborhood: "Sheung Wan",
    priceLevel: "$$",
    review: "Mindful Pilates is a Sheung Wan studio on Wing Lok Street, a convenient option for people working between Sheung Wan and Central who want a dedicated Pilates studio away from the big chains.",
    caveat: "there is limited published detail about class formats and instructors: take a trial class first.",
    address: "7B Cheong Tai Commercial Building, 64–66 Wing Lok Street, Sheung Wan",
    bestFor: "A neighborhood Pilates studio in Sheung Wan",
    signatureClass: "Pilates Class",
    bookingTip: "Contact the studio to find the right class level before your first visit.",
  },
];

const BOOKING_TIPS = [
  { heading: "Expect to pay about $32–57 per group class", body: "Hong Kong reformer pricing is among the highest in Asia, reflecting the city's real-estate costs and demand. Group classes typically run about $32–38 at independent studios and $45–57 at premium branded venues. Ten-class packs offer the best per-session rate for regulars." },
  { heading: "ClassPass is available in Hong Kong", body: "ClassPass has solid coverage in Hong Kong and is a practical way to trial studios before committing to a pack. Premium venues like Pure require higher credit allocations, so factor that into your plan if you're targeting the top-tier studios." },
  { heading: "Book 3–7 days ahead for peak slots", body: "Hong Kong's best studios fill quickly. Morning classes (7–9am) and post-work slots (6–8pm) at popular venues are typically fully booked within hours of opening. Check studio apps Sunday evening when many open the following week's schedule." },
  { heading: "Grip socks are mandatory, everywhere", body: "Every studio in Hong Kong requires grip socks on the reformer. Some sell branded pairs at the desk; others require you to bring your own. Keep a pair in your bag to avoid being turned away or paying premium for studio socks." },
  { heading: "Tipping is not customary", body: "Unlike in North America, tipping instructors in Hong Kong wellness studios is not a cultural norm. The premium pricing generally reflects instructor compensation: there's no expectation of gratuity after your session." },
];

const NEIGHBORHOODS = [
  { name: "Central & Admiralty", description: "Hong Kong's financial heart concentrates some of the city's most premium wellness addresses. Studios here serve a time-pressed, expense-account clientele: expect world-class instructors, state-of-the-art equipment, and prices to match. Ideal for weekday lunchtime sessions or early-morning sessions before the markets open." },
  { name: "Wan Chai & Causeway Bay", description: "The city's most accessible districts for Pilates offer a strong mix of established studios and newer boutique entrants. Wan Chai in particular has become a wellness hub, with studios clustered around the harbor-facing streets. Good transport links make it easy to reach from most parts of the Island." },
  { name: "Sai Ying Pun & Kennedy Town", description: "The western end of Hong Kong Island has developed a thriving independent wellness scene over the past decade. Studios here tend to be owner-operated, smaller in scale, and more community-focused, with pricing that's more accessible than the Central corridor. The neighborhood's young professional population has created a loyal studio clientele." },
  { name: "The Southside (Stanley & Repulse Bay)", description: "Hong Kong's southern peninsula is home to a quieter, more residential studio scene. Venues here prioritize quality over volume: small class sizes, beautiful natural settings, and a pace that feels distinct from the frenetic city center. Worth the commute for those seeking a more unhurried practice." },
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
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 6 },
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 6 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 6 },
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 6 },
];

const FURTHER_READING = [
  { title: "Best Pilates Equipment for Home Practice", excerpt: "Everything you need between studio sessions, from a quality mat to resistance bands.", href: "/blog/best-pilates-equipment-for-home-practice", category: "Equipment", readTime: "10 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80" },
  { title: "The Beginner's Guide to Reformer Pilates", excerpt: "What to expect in your first reformer class, how to choose a studio, and how to progress.", href: "/blog/beginners-guide-to-reformer-pilates", category: "Beginner Guide", readTime: "8 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=800&q=80" },
];

const CITY_FAQS = [
  { q: "What are the best Pilates studios in Hong Kong?", a: "Our 6 curated picks are FLEX Studio (Central · Wong Chuk Hang), Iso Fit (Central), PILATESBEAT (Sheung Wan), DEFIN8 Fitness: Central (Central), Jesel Studio (Wan Chai) and Mindful Pilates (Sheung Wan). Each listing above covers what the studio is best for, its signature class and a booking tip." },
  { q: "Which Hong Kong neighborhoods are best for Pilates?", a: "This guide covers Central & Admiralty, Wan Chai & Causeway Bay, Sai Ying Pun & Kennedy Town and The Southside (Stanley & Repulse Bay). Central & Admiralty: Hong Kong's financial heart concentrates some of the city's most premium wellness addresses." },
  { q: "What should I know about booking Pilates classes in Hong Kong?", a: "Expect to pay about $32–57 per group class. Hong Kong reformer pricing is among the highest in Asia, reflecting the city's real-estate costs and demand." },
  { q: "What should I bring to a Pilates class in Hong Kong?", a: "Grip socks are required at most reformer studios. Our gear list for Hong Kong covers Pilates grip socks, Pilates mat, magic circle, resistance bands, foam roller and home Pilates reformer." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Hong Kong (2026)",
      "description": "The best Pilates studios in Hong Kong, from Central reformer boutiques to studios in Wan Chai and Causeway Bay. Six curated picks, verified October 2026.",
      "url": "https://pilatescollectiveclub.com/cities/hong-kong",
      "datePublished": "2026-06-28",
      "dateModified": "2026-10-20",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1532986374557-50e0d7c07a42?w=1400&q=80" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/hong-kong" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Hong Kong", GEAR.filter((g) => /amazon\.[a-z.]+\/dp\//.test(g.url)).map((g) => ({ name: g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name, description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Hong Kong", "item": "https://pilatescollectiveclub.com/cities/hong-kong" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Hong Kong",
      "description": "Curated guide to the top 5 Pilates studios in Hong Kong.",
      "url": "https://pilatescollectiveclub.com/cities/hong-kong",
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
            "addressLocality": "Hong Kong",
            "addressCountry": "HK",
          },
        },
      })),
    },
  ],
};

export default function HongKongPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="r-ah r-ah-legacy">
          <div className="r-wrap">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[12.5px] font-bold" style={{ color: "#0a0a0a" }}>City Guide</span>
              <span style={{ color: "#9a9490" }}>·</span>
              <span className="text-[12.5px] font-bold" style={{ color: "#3a3530" }}>Hong Kong SAR</span>
            </div>
            <h1 className="mb-6 r-d r-h1">
              The Best Pilates Studios<br /><span style={{ color: "#a98a5f" }}>in Hong Kong</span>
            </h1>
            <p className="text-base mb-8" style={{ color: "#6f6964" }}>Updated May 2026 · 8 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#ddd6cc" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#3a3530" }}>
              Hong Kong's Pilates scene is one of Asia's most sophisticated: shaped by a large expatriate community, a high-performance culture, and the city's characteristic appetite for premium wellness experiences. Studios here compete fiercely on instructor quality and equipment, and the best venues stand comfortably alongside their counterparts in London or New York. This guide covers the six we rate most highly across the Island's distinct districts.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image relative r-ah-img">
              <Image src="https://images.unsplash.com/photo-1532986374557-50e0d7c07a42?w=1400&q=80" alt="Hong Kong city guide: Pilates Collective Club" fill className="object-cover" />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-base font-bold mb-1">Hong Kong, Hong Kong SAR</p>
                  <p className="text-white/70 text-xs">Asia's most dynamic city, and one of its finest Pilates destinations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-[12.5px] font-bold mb-10" style={{ color: "#0a0a0a" }}>6 Studios · Curated & Verified</p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (<StudioListing key={studio.number} {...studio} />))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-10 r-d r-h2">Tips for booking Pilates in Hong Kong</h2>
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
            <h2 className="mb-4 r-d r-h2">Best neighborhoods for Pilates in Hong Kong</h2>
            <p className="text-base mb-10" style={{ color: "#3a3530" }}>Hong Kong's Pilates landscape is shaped by its neighborhoods.</p>
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
              Grip socks are required at most reformer studios in Hong Kong. These are our recommended picks: all available on Amazon.{" "}
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
              {RELATED_CITIES.map((c) => (<CityCard key={c.city} {...c} />))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-10 r-d r-h2">Further reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              {FURTHER_READING.map((a) => (<ArticleCard key={a.href} {...a} />))}
            </div>
          </div>
        </section>

        <CTASection title="Find Pilates near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best reformer Pilates in Hong Kong…" />
      </main>
      <Footer />
    </>
  );
}
