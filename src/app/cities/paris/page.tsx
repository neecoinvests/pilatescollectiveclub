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
  title: "Best Pilates Studios in Paris (2026)",
  description: "The best Pilates studios in Paris: reformer boutiques in the Marais, Saint-Germain, and the 16th arrondissement. Six curated picks, verified October 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates paris", "studio pilates paris", "reformer pilates paris", "best pilates studios paris", "pilates paris 16", "pilates marais paris", "pilates saint-germain", "pilates france", "cours pilates paris", "best reformer pilates paris"],
  openGraph: {
    title: "Best Pilates Studios in Paris (2026)",
    description: "Six curated Pilates studios in Paris: Marais, Saint-Germain, and 16th arrondissement reformer picks. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/paris",
    images: [{ url: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1200&q=80", width: 1200, height: 630, alt: "Paris city guide: Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Paris (2026)",
    description: "Our curated guide to the best Pilates studios in Paris: six verified picks with booking tips.",
    images: ["https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/paris",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Reformation Pilates",
    neighborhood: "Le Marais · Palais-Royal",
    priceLevel: "$$$",
    review: "Reformation opened in 2017 and is known for both the quality of its classes and its warm welcome. Group classes run on reformer or tower machines with certified trainers, in two light-filled studios on Rue du Temple in the Marais and Rue de Richelieu near the Palais-Royal.",
    caveat: "popular weekend classes fill early in the week.",
    address: "175 Rue du Temple, 75003 Paris",
    bestFor: "Reformer and tower group classes in the center",
    signatureClass: "Reformer & Tower",
    bookingTip: "If the Marais is full, try the Palais-Royal studio at 47 Rue de Richelieu.",
  },
  {
    number: "02",
    name: "The New Me",
    neighborhood: "16+ studios across Paris",
    priceLevel: "$$",
    review: "The New Me has more than 15 Parisian studios and a fresh, upbeat take on reformer Pilates, including its own Newformer Pilates classes: the most convenient choice if you want a studio near home and work.",
    caveat: "a large chain: consistent and accessible, but less intimate than a boutique.",
    address: "",
    bestFor: "Accessible reformer with many locations",
    signatureClass: "Newformer Pilates",
    bookingTip: "Check which studio is closest before buying a membership.",
  },
  {
    number: "03",
    name: "RIISE Reformer",
    neighborhood: "8th arrondissement · Boulogne",
    priceLevel: "$$$",
    review: "After building a following with yoga and Pilates, RIISE created its own reformer method, working the whole body in sync with music with passionate, experienced coaches. Its reformer studios are on Rue La Boétie in the 8th and in Boulogne.",
    caveat: "music-driven group classes: energetic rather than classical.",
    address: "79 rue La Boétie, 75008 Paris",
    bestFor: "Music-driven reformer in the 8th and Boulogne",
    signatureClass: "RIISE Reformer",
    bookingTip: "Look for a discounted first session before buying a pack.",
  },
  {
    number: "04",
    name: "YUJ",
    neighborhood: "Louvre (1st arrondissement)",
    priceLevel: "$$$",
    review: "YUJ combines yoga with reformer Pilates, and its reformer classes are limited to five people, so the coach can follow and correct each participant's movement.",
    caveat: "with five places per class, slots are limited: book ahead. Reformer classes run only at the Louvre studio.",
    address: "68 rue Jean-Jacques Rousseau, 75001 Paris",
    bestFor: "Small reformer classes alongside yoga",
    signatureClass: "Reformer (max 5)",
    bookingTip: "Use the YUJ app for live availability.",
  },
  {
    number: "05",
    name: "Sense Club",
    neighborhood: "Saint-Germain-des-Prés",
    priceLevel: "$$$",
    review: "Sense Club opened in early 2025 as a Pilates studio and coffee shop in Saint-Germain. Members describe instructors who are gentle and demanding at the same time, pushing people to surpass themselves in a safe, welcoming setting.",
    caveat: "a newer studio: its track record is shorter than the longer-established names here.",
    address: "",
    bestFor: "Reformer and coffee on the Left Bank",
    signatureClass: "Reformer Pilates",
    bookingTip: "Stay for a coffee after class: that is part of the concept.",
  },
  {
    number: "06",
    name: "DNA Pilates",
    neighborhood: "Paris",
    priceLevel: "$$$",
    review: "DNA Pilates tops ClassPass's ranking of reformer studios in France and is one of the most-reviewed reformer studios in Paris.",
    caveat: "we could not confirm the exact address independently: check the booking app for the studio location.",
    address: "",
    bestFor: "Top-rated reformer in Paris",
    signatureClass: "Reformer Pilates",
    bookingTip: "Its popularity means classes fill: book a few days ahead.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Reservations are essential",
    body: "Paris studios do not operate a reliable walk-in culture. Book in advance through the studio's website or app: last-minute availability is rare at the better studios.",
  },
  {
    heading: "Expect classes in French",
    body: "Most Paris Pilates classes are taught in French. Many instructors speak English, but do check in advance if you're not comfortable following cues en français.",
  },
  {
    heading: "The intro offer window is short",
    body: "Parisian studios typically offer introductory pricing for new clients valid for a limited period (often two to four weeks). Use it strategically to assess the studio's teaching style properly.",
  },
  {
    heading: "About $20–39 per class is typical",
    body: "Drop-in rates at quality Paris studios range from around $20 at value-positioned studios to $39 at premium boutiques. Carnet (class pack) pricing brings the per-session cost down meaningfully.",
  },
  {
    heading: "Cancellation policies are strict",
    body: "Most Paris studios enforce a 12–24 hour cancellation window. Late cancellations are charged in full. Set a phone reminder the evening before your class if you're prone to schedule changes.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "The Marais (3rd & 4th Arr.)",
    description:
      "The spiritual home of Paris's boutique wellness scene. The Marais houses some of the city's most design-forward studios, attracting a creative, fashion-conscious clientele. Expect premium pricing and exceptional aesthetics.",
  },
  {
    name: "Saint-Germain-des-Prés (6th Arr.)",
    description:
      "The Left Bank's quiet, intellectual character suits Pilates particularly well. Studios here tend toward the classical and clinical: excellent for those who take the method seriously.",
  },
  {
    name: "République & Oberkampf (10th & 11th Arr.)",
    description:
      "Paris's most exciting emerging wellness neighborhood. A younger, more diverse crowd, more accessible pricing, and some genuinely excellent independent studios that haven't been discovered by tourist guides yet.",
  },
  {
    name: "15th Arrondissement",
    description:
      "A residential neighborhood with a loyal local clientele and several long-established studios. Quieter, less trendy, and often significantly better value than the central arrondissements.",
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
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 6 },
  { city: "Zurich", country: "Switzerland", href: "/cities/zurich", studioCount: 6 },
  { city: "Geneva", country: "Switzerland", href: "/cities/geneva", studioCount: 6 },
  { city: "Lausanne", country: "Switzerland", href: "/cities/lausanne", studioCount: 4 },
];

const FURTHER_READING = [
  {
    title: "Classical vs Contemporary Pilates: Which Style Is Right for You?",
    excerpt: "Understanding the key differences between the original method and modern interpretations.",
    href: "/blog/classical-vs-contemporary-pilates",
    category: "Method",
    readTime: "7 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800&q=80",
  },
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt: "Build a home practice that complements your studio sessions.",
    href: "/blog/best-pilates-equipment-for-home-practice",
    category: "Equipment",
    readTime: "10 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1616279969862-6a5a367f9e2b?w=800&q=80",
  },
];

const CITY_FAQS = [
  { q: "What are the best Pilates studios in Paris?", a: "Our 6 curated picks are Reformation Pilates (Le Marais · Palais-Royal), The New Me (16+ studios across Paris), RIISE Reformer (8th arrondissement · Boulogne), YUJ (Louvre, 1st arrondissement), Sense Club (Saint-Germain-des-Prés) and DNA Pilates (Paris). Each listing above covers what the studio is best for, its signature class and a booking tip." },
  { q: "Which Paris neighborhoods are best for Pilates?", a: "This guide covers The Marais (3rd & 4th Arr.), Saint-Germain-des-Prés (6th Arr.), République & Oberkampf (10th & 11th Arr.) and 15th Arrondissement. The spiritual home of Paris's boutique wellness scene." },
  { q: "What should I know about booking Pilates classes in Paris?", a: "Reservations are essential. Paris studios do not operate a reliable walk-in culture." },
  { q: "What should I bring to a Pilates class in Paris?", a: "Grip socks are required at most reformer studios. Our gear list for Paris covers Pilates grip socks, Pilates mat, magic circle, resistance bands, foam roller and home Pilates reformer." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Paris (2026)",
      "description": "The best Pilates studios in Paris: reformer boutiques in the Marais, Saint-Germain, and the 16th arrondissement. Six curated picks, verified October 2026.",
      "url": "https://pilatescollectiveclub.com/cities/paris",
      "datePublished": "2026-06-28",
      "dateModified": "2026-10-20",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1400&q=80" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/paris" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Paris", GEAR.filter((g) => /amazon\.[a-z.]+\/dp\//.test(g.url)).map((g) => ({ name: g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name, description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Paris", "item": "https://pilatescollectiveclub.com/cities/paris" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Paris",
      "description": "Curated guide to the top 5 Pilates studios in Paris.",
      "url": "https://pilatescollectiveclub.com/cities/paris",
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
            "addressLocality": "Paris",
            "addressCountry": "FR",
          },
        },
      })),
    },
  ],
};

export default function ParisPage() {
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
              <span className="text-[12.5px] font-bold" style={{ color: "#3a3530" }}>France</span>
            </div>
            <h1 className="mb-6 r-d r-h1">
              The Best Pilates Studios<br />
              <span style={{ color: "#a98a5f" }}>in Paris</span>
            </h1>
            <p className="text-base mb-8" style={{ color: "#6f6964" }}>Updated May 2026 · 8 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#ddd6cc" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#3a3530" }}>
              Paris has developed a Pilates scene that, like everything in the city, carries its own distinct character. Studios here tend to be intimate, instruction-led, and deeply serious about the method: reflecting a Parisian cultural preference for genuine expertise over spectacle. This guide covers the six studios we rate most highly, from the Marais to the 15th, along with everything you need to navigate the city's booking culture and find your perfect match.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image relative r-ah-img">
              <Image
                src="https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1400&q=80"
                alt="Paris cityscape"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-base font-bold mb-1">Paris, France</p>
                  <p className="text-white/70 text-xs">An intimate and instruction-led Pilates culture</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-[12.5px] font-bold mb-10" style={{ color: "#0a0a0a" }}>6 Studios · Curated & Verified</p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (
                <StudioListing key={studio.number} {...studio} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-10 r-d r-h2">Tips for booking Pilates in Paris</h2>
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
            <h2 className="mb-4 r-d r-h2">Best neighborhoods for Pilates in Paris</h2>
            <p className="text-base mb-10" style={{ color: "#3a3530" }}>Paris's arrondissement system shapes where you'll find each type of studio. Here's a quick reference.</p>
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
              Grip socks are required at most reformer studios in Paris. These are our recommended picks: all available on Amazon.{" "}
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city: coming soon." showSearch searchPlaceholder="Ask: best Pilates studios in Paris…" />
      </main>
      <Footer />
    </>
  );
}
