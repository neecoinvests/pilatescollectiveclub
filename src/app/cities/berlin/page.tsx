import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "The Best Pilates Studios in Berlin | Pilates Collective Club",
  description: "Our curated guide to Berlin's best Pilates studios — from Mitte to Prenzlauer Berg, the five studios leading the city's thriving wellness scene.",
  openGraph: {
    title: "The Best Pilates Studios in Berlin",
    description: "Our curated guide to Berlin's best Pilates studios — five verified picks from Mitte to Prenzlauer Berg.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/berlin",
    images: [{ url: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=80", width: 1200, height: 630, alt: "Berlin city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Berlin",
    description: "Our curated guide to Berlin's best Pilates studios — five verified picks.",
    images: ["https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=80"],
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "ROFORM Berlin (Rocycle)",
    neighborhood: "Prenzlauer Berg",
    priceLevel: "€€",
    review: "ROFORM is the reformer Pilates concept from Rocycle — Berlin's premium boutique fitness brand — and the Prenzlauer Berg studio is its flagship. The ROFORM concept centres on controlled, flowing Reformer Pilates with precision, tempo, and strength in 50-minute sessions that target the whole body with a specific focus on core, posture, and mobility. The studio occupies a high-specification space on Schönhauser Allee with two fully-equipped reformer rooms, offering some of the most consistently well-executed group reformer classes in the city.",
    address: "Schönhauser Allee 9, 10119 Berlin",
    bestFor: "Dynamic reformer, full-body conditioning, structured progression",
    signatureClass: "ROFORM Signature 50",
    bookingTip: "Book through the Rocycle app. Morning weekday slots are the most popular — book at least three days ahead for prime times.",
  },
  {
    number: "02",
    name: "Body & Soul Pilates Studio",
    neighborhood: "Charlottenburg",
    priceLevel: "€€€",
    review: "Body & Soul is one of Berlin's most established Pilates addresses — a Charlottenburg studio that has maintained excellent standards and a loyal clientele through over a decade of operation in the city's most prestigious western district. The instruction is classical and precise, private sessions are deeply personalised, and the studio's setting in a Gründerzeit apartment building gives the practice an elegance that distinguishes it from Berlin's newer boutique offerings. The teachers here are among the city's most experienced.",
    address: "Kurfürstendamm 101, 10711 Berlin",
    bestFor: "Classical private sessions, experienced practitioners, premium setting",
    signatureClass: "Classical Apparatus Private",
    bookingTip: "Private sessions with the senior instructor book two to three weeks ahead. New clients are encouraged to book an introductory session to establish technique before group classes.",
  },
  {
    number: "03",
    name: "REALZ Pilates",
    neighborhood: "Mitte",
    priceLevel: "€€",
    review: "REALZ Pilates is one of Berlin Mitte's most respected classical Pilates studios — a centrally located space designed with quality and authenticity in mind. The highly qualified, international teaching team brings passion and rigour to every session, and the studio's focus on the foundational principles of the method gives it a depth that differentiates it from newer boutique reformer offerings. REALZ is the choice for practitioners who want the real thing: honest instruction, proper technique, and lasting results.",
    address: "Albrechtstraße 19, 10117 Berlin",
    bestFor: "Classical Pilates, technique-focused, central Mitte location",
    signatureClass: "Classical Reformer & Apparatus",
    bookingTip: "Book through their website. Group classes in Mitte are popular — reserve at least 48 hours ahead for weekday sessions.",
  },
  {
    number: "04",
    name: "Momax Pilates",
    neighborhood: "Mitte / Mitte-Nord",
    priceLevel: "€€",
    review: "Momax Pilates stands for authentic, health-focused reformer training with an unusual emphasis on precision, breathing, and deep body awareness. The studio is consciously designed without mirrors — encouraging practitioners to turn their attention inward and develop genuine proprioception rather than relying on visual feedback. The result is a workout that strengthens deep muscles while improving balance, mobility, and mental presence. An excellent choice for those who take their practice seriously.",
    address: "Gipsstraße 23, 10119 Berlin",
    bestFor: "Mindful reformer, proprioceptive training, no-mirror approach",
    signatureClass: "Momax Reformer Deep",
    bookingTip: "The intro offer is excellent value for new clients. Evening classes fill fastest — book by Tuesday for the week ahead.",
  },
  {
    number: "05",
    name: "The Movement Space Berlin",
    neighborhood: "Schöneberg",
    priceLevel: "€€",
    review: "The Movement Space is one of Berlin's most thoughtfully conceived movement studios — a Schöneberg space that combines classical Pilates with somatic movement practices and an ethos of intelligent, body-led training. The instruction is careful and individualised, the studio's community is warm and inclusive, and the teaching team brings diverse backgrounds including physiotherapy, dance, and long-form Pilates training. An excellent choice for practitioners who want their Pilates embedded in a broader movement philosophy.",
    address: "Akazienstraße 26, 10823 Berlin",
    bestFor: "Somatic movement, community ethos, thoughtful instruction",
    signatureClass: "Movement & Pilates Integration",
    bookingTip: "The monthly open house class is a good introduction to the studio's ethos before committing to a class pack. Booking via their online system is essential — walk-ins are rarely accommodated.",
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

const RELATED_CITIES = [
  { city: "Amsterdam", country: "Netherlands", href: "/cities/amsterdam", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "Barcelona", country: "Spain", href: "/cities/barcelona", studioCount: 5 },
];

const FURTHER_READING = [
  { title: "The Best Pilates Retreats in Europe", excerpt: "The finest Pilates immersion experiences across the continent, from Provence to Puglia.", href: "/blog/best-pilates-retreats-europe", category: "Travel", readTime: "8 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&q=80" },
  { title: "Classical vs Contemporary Pilates", excerpt: "Understanding the key differences between the original method and modern interpretations.", href: "/blog/classical-vs-contemporary-pilates", category: "Method", readTime: "7 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1573384666979-47b6a9b4b16d?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
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
      "numberOfItems": 5,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
              Berlin&apos;s wellness culture is more nuanced than its reputation for nightlife and creative industry might suggest. The city has a serious and growing movement practice scene — one shaped by its large international population, its mix of eastern and western cultural influences, and a general appreciation for quality that doesn&apos;t require premium pricing. This guide covers the five Pilates studios we rate most highly across the city&apos;s distinct districts.
            </p>
          </div>
        </section>
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1400&q=80" alt="Berlin cityscape" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Berlin, Germany</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>A serious movement culture in Europe&apos;s most dynamic city</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Studios · Curated & Verified</p>
            <div className="space-y-8">{STUDIOS.map((s) => <StudioListing key={s.number} {...s} />)}</div>
          </div>
        </section>
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Berlin</h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((t) => (
                <div key={t.heading} className="flex gap-5 rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
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
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Berlin&apos;s studio scene spans both the former East and West, with each district having a distinct character.</p>
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
