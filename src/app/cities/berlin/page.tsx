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
  title: "Best Pilates Studios in Berlin (2026)",
  description: "The best Pilates studios in Berlin — reformer boutiques in Mitte, Prenzlauer Berg, and Charlottenburg. Six curated picks, verified October 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates berlin", "reformer pilates berlin", "best pilates studios berlin", "pilates studio berlin", "pilates mitte", "pilates prenzlauer berg", "pilates charlottenburg", "pilates germany", "best reformer pilates berlin", "pilates kurs berlin"],
  openGraph: {
    title: "Best Pilates Studios in Berlin (2026)",
    description: "Six curated Pilates studios in Berlin — reformer picks from Mitte to Prenzlauer Berg. Verified October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/berlin",
    images: [{ url: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=80", width: 1200, height: 630, alt: "Berlin city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Berlin (2026)",
    description: "Our curated guide to Berlin's best Pilates studios — six verified picks.",
    images: ["https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/berlin",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "YTTP Reformer Kreuzberg",
    neighborhood: "Kreuzberg",
    priceLevel: "$$$",
    review: "YTTP runs several reformer studios in Berlin, and its Kreuzberg studio sits in a backyard on Reichenberger Straße — an industrial-inspired loft of chrome and concrete where serious reformer Pilates meets modern urban design. Classes run across several levels, and the studio is bookable through Urban Sports Club as well as directly, which makes it easy to try.",
    caveat: "grip socks are mandatory — bring your own or buy YTTP's at the studio (€12.90).",
    address: "Reichenberger Straße 124 (backyard, right), 10999 Berlin",
    bestFor: "Design-led reformer classes in Kreuzberg",
    signatureClass: "Reformer Pilates",
    bookingTip: "The studio opens 15 minutes before class — use the time to check in and set up your reformer.",
  },
  {
    number: "02",
    name: "YTTP Reformer Charlottenburg",
    neighborhood: "Charlottenburg",
    priceLevel: "$$$",
    review: "YTTP's Charlottenburg studio on Pestalozzistraße brings the same industrial-chic aesthetic — chrome accents and clean architectural lines — to west Berlin. It offers the brand's reformer classes across levels, so it is the natural choice if you live or work west of the Tiergarten.",
    caveat: "as with all YTTP studios, grip socks are mandatory.",
    address: "Pestalozzistraße 77, 10625 Berlin",
    bestFor: "Reformer Pilates in west Berlin",
    signatureClass: "Reformer Pilates",
    bookingTip: "Arrive up to 15 minutes early — the studio opens before class for check-in.",
  },
  {
    number: "03",
    name: "REALZ Pilates",
    neighborhood: "Mitte",
    priceLevel: "$$",
    review: "REALZ Pilates is a reformer studio on Albrechtstraße in Mitte, close to Friedrichstraße. Its Reformer Lunch class — a dynamic, mobilising reformer session for every level, built on precise, mindful sequences that strengthen and stretch the whole core — is designed to fit into a working day.",
    caveat: "there is limited published detail about the full timetable — check the studio's booking page for current class times.",
    address: "Albrechtstraße 19, 10117 Berlin",
    bestFor: "Lunchtime reformer classes for Mitte office workers",
    signatureClass: "Reformer Lunch",
    bookingTip: "The lunchtime format is built for office hours — book it as a recurring slot if your week allows.",
  },
  {
    number: "04",
    name: "The Frame Reformer Pilates",
    neighborhood: "Kreuzberg",
    priceLevel: "$$$",
    review: "The Frame is a modern reformer studio on Waldemarstraße with a maximum of nine reformers per class, natural light and clean lines. It also has an integrated café serving matcha and protein shakes, a co-working area and a sun terrace, so it works as a place to spend the morning. Classes range from full-body flows and core sessions to stretch classes, and newcomers are pointed to a Reformer Fundamentals course first.",
    caveat: "pricing is premium for Berlin: drop-ins cost €29, with an intro offer of 3 credits plus a drink for €60 and monthly plans from €88.",
    address: "Waldemarstraße 17, 10179 Berlin",
    bestFor: "Small reformer classes with café and co-working on site",
    signatureClass: "Reformer Fundamentals",
    bookingTip: "New to the reformer? Start with the Fundamentals course before joining regular flows.",
  },
  {
    number: "05",
    name: "Momax Pilates",
    neighborhood: "Mitte",
    priceLevel: "$$",
    review: "Momax Pilates on Gipsstraße in Mitte focuses on authentic, health-focused reformer training: precision, breathing and deep body awareness. The studio is deliberately designed without mirrors to turn your attention inward, and the work builds deep strength alongside balance and mobility.",
    caveat: "the inward, mirror-free approach suits people who want mindful, precise work — if you want a high-energy, music-driven class, choose The Frame or YTTP.",
    address: "Gipsstraße 23, 10119 Berlin",
    bestFor: "Mindful, precision-focused reformer training",
    signatureClass: "Reformer Pilates",
    bookingTip: "Expect a slower, more focused class — tell the instructor about any injuries before you start.",
  },
  {
    number: "06",
    name: "Rostudios — Roform",
    neighborhood: "Prenzlauer Berg",
    priceLevel: "$$$",
    review: "Rostudios, founded in 2015 and the brand behind Rocycle and Roform, runs Roform: a 50-minute, Pilates-inspired group class on custom-made reformer machines that focuses on control, pace, strength and precision. In Berlin there are Roform studios on Schönhauser Allee in Prenzlauer Berg and on Knesebeckstraße in Charlottenburg.",
    caveat: "Roform is Pilates-inspired group fitness on custom machines rather than traditional Pilates — great for a workout, less so for classical technique.",
    address: "Schönhauser Allee 9, 10119 Berlin",
    bestFor: "Energetic, Pilates-inspired reformer workouts",
    signatureClass: "Roform (50 min)",
    bookingTip: "If Prenzlauer Berg is full, check the Charlottenburg studio at Knesebeckstraße 62–63.",
  },
];

const BOOKING_TIPS = [
  { heading: "€18–35 per class is typical", body: "Berlin's Pilates pricing reflects the city's general approach to wellness — more accessible than London or Paris, with excellent quality at mid-range price points. Premium private sessions run to €80+, but group reformer classes are consistently affordable." },
  { heading: "English is widely spoken", body: "Berlin's highly international population has produced a studio scene where English instruction is standard at most quality studios. Look for bilingual (German/English) studios if you want the option of either." },
  { heading: "10-class Zehner cards offer the best value", body: "Like most German cities, Berlin studios often offer a Zehner (10-class card) as their core product. These rarely expire quickly and represent significantly better value than drop-in rates." },
  { heading: "Neighbourhood choice matters", body: "Berlin's studio scene is genuinely distributed across the city — Prenzlauer Berg and Mitte for contemporary boutiques, Charlottenburg for classical premium studios, Friedrichshain for accessible community spaces. Choose based on proximity to home or work." },
  { heading: "Book 2–4 days ahead", body: "Berlin studios are generally less oversubscribed than their counterparts in London or Paris. Two to four days' advance booking is sufficient for most sessions, with weekend morning slots requiring more notice at popular studios." },
];

const NEIGHBORHOODS = [
  { name: "Prenzlauer Berg & Mitte", description: "East Berlin's most internationally minded neighbourhoods host the city's strongest concentration of contemporary reformer studios. Excellent instruction, well-designed spaces, and a clientele of creative professionals and families." },
  { name: "Charlottenburg & Wilmersdorf", description: "West Berlin's established residential and commercial districts house the city's more classical studios — longer-running, more formal in orientation, and serving a clientele that prizes precision and tradition." },
  { name: "Schöneberg & Kreuzberg", description: "Central-south Berlin's most diverse districts have developed a strong independent studio scene with a community ethos and pricing that reflects the neighbourhoods' more accessible cost of living." },
  { name: "Friedrichshain & Neukölln", description: "Berlin's younger, more experimental districts offer some of the city's best-value Pilates at studios that haven't compromised on teaching quality. Worth seeking out for practitioners who want excellent instruction without premium pricing." },
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
    note: "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios incorporate the magic circle — worth owning for home reinforcement work.",
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
    note: "Our pick: PAETA Wooden Foldable Reformer. A home reformer extends your studio practice — AeroPilates and Align entry models deliver a genuine full-body session.",
    price: "$699.98",
    url: "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20",
  },
];


const RELATED_CITIES = [
  { city: "Amsterdam", country: "Netherlands", href: "/cities/amsterdam", studioCount: 6 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 6 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 6 },
  { city: "Barcelona", country: "Spain", href: "/cities/barcelona", studioCount: 6 },
];

const FURTHER_READING = [
  { title: "The Best Pilates Retreats in Europe", excerpt: "The finest Pilates immersion experiences across the continent, from Provence to Puglia.", href: "/blog/best-pilates-retreats-europe", category: "Travel", readTime: "8 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&q=80" },
  { title: "Classical vs Contemporary Pilates", excerpt: "Understanding the key differences between the original method and modern interpretations.", href: "/blog/classical-vs-contemporary-pilates", category: "Method", readTime: "7 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1573384666979-47b6a9b4b16d?w=800&q=80" },
];

const CITY_FAQS = [
  { q: "What are the best Pilates studios in Berlin?", a: "Our 6 curated picks are YTTP Reformer Kreuzberg (Kreuzberg), YTTP Reformer Charlottenburg (Charlottenburg), REALZ Pilates (Mitte), The Frame Reformer Pilates (Kreuzberg), Momax Pilates (Mitte) and Rostudios — Roform (Prenzlauer Berg). Each listing above covers what the studio is best for, its signature class and a booking tip." },
  { q: "Which Berlin neighbourhoods are best for Pilates?", a: "This guide covers Prenzlauer Berg & Mitte, Charlottenburg & Wilmersdorf, Schöneberg & Kreuzberg and Friedrichshain & Neukölln. Prenzlauer Berg & Mitte: East Berlin's most internationally minded neighbourhoods host the city's strongest concentration of contemporary reformer studios." },
  { q: "What should I know about booking Pilates classes in Berlin?", a: "€18–35 per class is typical. Berlin's Pilates pricing reflects the city's general approach to wellness, more accessible than London or Paris, with excellent quality at mid-range price points." },
  { q: "What should I bring to a Pilates class in Berlin?", a: "Grip socks are required at most reformer studios. Our gear list for Berlin covers Pilates grip socks, Pilates mat, magic circle, resistance bands, foam roller and home Pilates reformer." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Berlin (2026)",
      "description": "The best Pilates studios in Berlin — reformer boutiques in Mitte, Prenzlauer Berg, and Charlottenburg. Six curated picks, verified October 2026.",
      "url": "https://pilatescollectiveclub.com/cities/berlin",
      "datePublished": "2026-06-28",
      "dateModified": "2026-10-20",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1400&q=80" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/berlin" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Berlin", GEAR.filter((g) => /amazon\.[a-z.]+\/dp\//.test(g.url)).map((g) => ({ name: g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name, description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Berlin", "item": "https://pilatescollectiveclub.com/cities/berlin" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Berlin",
      "description": "Curated guide to the top 5 Pilates studios in Berlin.",
      "url": "https://pilatescollectiveclub.com/cities/berlin",
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
            "addressLocality": "Berlin",
            "addressCountry": "DE",
          },
        },
      })),
    },
  ],
};

export default function BerlinPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>City Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Germany</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Berlin</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 7 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Berlin's wellness culture is more nuanced than its reputation for nightlife and creative industry might suggest. The city has a serious and growing movement practice scene — one shaped by its large international population, its mix of eastern and western cultural influences, and a general appreciation for quality that doesn't require premium pricing. This guide covers the five Pilates studios we rate most highly across the city's distinct districts.
            </p>
          </div>
        </section>
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1400&q=80" alt="Berlin cityscape" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Berlin, Germany</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>A serious movement culture in Europe's most dynamic city</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Studios · Curated & Verified</p>
            <div className="space-y-8">{STUDIOS.map((s) => <StudioListing key={s.number} {...s} />)}</div>
          </div>
        </section>
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Berlin</h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((t) => (
                <div key={t.heading} className="pcc-booking-tip flex gap-5 rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                  <div className="w-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: "#8b4a31", minHeight: "20px" }} />
                  <div>
                    <h3 className="text-base font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{t.heading}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Berlin</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Berlin's studio scene spans both the former East and West, with each district having a distinct character.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {NEIGHBORHOODS.map((n) => (
                <div key={n.name} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)" }}>
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
              Grip socks are required at most reformer studios in Berlin. These are our recommended picks — all available on Amazon.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#8b4a31", textDecoration: "underline", fontFamily: "'Montserrat', sans-serif", fontSize: "inherit" }}>Affiliate disclosure.</Link>
            </p>
            <QuickPicks className="mb-0" picks={GEAR.map((g) => ({ name: g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name, price: g.price, url: g.url, note: g.name }))} />
          </div>
        </section>


        <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
            <div className="space-y-6">
              {CITY_FAQS.map((f) => (
                <div key={f.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                  <h3 className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{f.q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Related city guides</h2>
            <p className="text-sm mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Explore our guides to other cities with thriving Pilates scenes.</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">{RELATED_CITIES.map((c) => <CityCard key={c.city} {...c} />)}</div>
          </div>
        </section>
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">{FURTHER_READING.map((a) => <ArticleCard key={a.href} {...a} />)}</div>
          </div>
        </section>
        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best Pilates studios in Berlin…" />
      </main>
      <Footer />
    </>
  );
}
