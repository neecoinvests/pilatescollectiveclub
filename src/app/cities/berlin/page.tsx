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
  title: "Best Pilates Studios in Berlin (2026) — Curated Guide",
  description: "The best Pilates studios in Berlin — reformer boutiques in Mitte, Prenzlauer Berg, and Charlottenburg. Five curated picks, verified June 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates berlin", "reformer pilates berlin", "best pilates studios berlin", "pilates studio berlin", "pilates mitte", "pilates prenzlauer berg", "pilates charlottenburg", "pilates germany", "best reformer pilates berlin", "pilates kurs berlin"],
  openGraph: {
    title: "Best Pilates Studios in Berlin (2026)",
    description: "Five curated Pilates studios in Berlin — reformer picks from Mitte to Prenzlauer Berg. Verified June 2026."s best Pilates studios — five verified picks from Mitte to Prenzlauer Berg.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/berlin",
    images: [{ url: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=80", width: 1200, height: 630, alt: "Berlin city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Berlin (2026)",
    description: "Our curated guide to Berlin's best Pilates studios — five verified picks.",
    images: ["https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/berlin",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "YTTP Kreuzberg",
    neighborhood: "Kreuzberg",
    priceLevel: "€€€",
    review: "YTTP — You Touch The People — has become one of the most talked-about movement studios in Berlin, and the Kreuzberg flagship is where the brand's philosophy is most fully expressed. The studio is visually arresting: raw industrial architecture softened by warm light, high-quality equipment arranged with curatorial precision, and an atmosphere that occupies the space between serious training and genuine hospitality. Instruction is taught in English and German, the teacher roster is strong, and the method blends classical Pilates with somatic movement in a way that feels contemporary without being gimmicky. Kreuzberg's creative and international community has made YTTP its studio of choice, and the energy in class reflects that demographic accurately. It suits practitioners who value both quality and cultural credibility in equal measure.",
    address: "—",
    bestFor: "Somatic reformer & design-forward space",
    signatureClass: "YTTP Reformer Flow",
    bookingTip: "Book 3+ days ahead; evening slots fill fastest",
  },
  {
    number: "02",
    name: "YTTP Charlottenburg",
    neighborhood: "Charlottenburg",
    priceLevel: "€€€",
    review: "The Charlottenburg outpost of YTTP brings the brand's distinctive aesthetic to west Berlin's most elegant residential district, where it sits comfortably alongside the neighbourhood's long-established culture of considered living. The space is quieter than the Kreuzberg flagship — classes are a little calmer, the clientele a little older — but the instruction quality is consistent across both locations, which speaks well of how the studio manages its teaching team. Charlottenburg practitioners tend to be regulars rather than drop-ins, and the studio has cultivated a community feel that rewards loyalty. The programme includes a broader range of levels and formats than the Kreuzberg site, making it particularly well-suited to practitioners returning after injury or approaching Pilates for the first time at a serious studio.",
    address: "—",
    bestFor: "Established community, multilevel programming",
    signatureClass: "YTTP Restore & Reform",
    bookingTip: "Intro offer available for first-time clients",
  },
  {
    number: "03",
    name: "REALZ Pilates",
    neighborhood: "Mitte",
    priceLevel: "€€",
    review: "REALZ Pilates has established itself as Mitte's most accessible serious reformer studio — a genuinely difficult balance to strike in a district where both rents and expectations run high. The studio prioritises clean, effective instruction over atmosphere-building, which suits the neighbourhood's working population of professionals who train efficiently and move on. Classes are available throughout the day including early morning and lunchtime slots, the pricing is honest, and the instructors maintain standards without the boutique-fitness preciousness that can make premium studios feel unwelcoming. The equipment is Balanced Body, the space is well-maintained, and the programming is straightforward. It suits practitioners who want the real thing without the performance around it.",
    address: "—",
    bestFor: "No-frills reformer, central location",
    signatureClass: "REALZ Classic Reformer",
    bookingTip: "Midday slots often available same day",
  },
  {
    number: "04",
    name: "The Frame Kreuzberg",
    neighborhood: "Kreuzberg",
    priceLevel: "€€€",
    review: "The Frame is the London-born fitness brand that has found in Kreuzberg an audience almost perfectly aligned with its original East London clientele: young professionals, creatives, and fitness-conscious urbanists who want variety and quality under one roof. The Kreuzberg studio offers reformer Pilates alongside barre, yoga, and strength classes, which makes it a practical choice for practitioners who want to cross-train without juggling multiple memberships. Pilates instruction quality is high — the London pedigree shows — and the bilingual programming (English-German) makes it fully accessible to Berlin's large international community. The space is well-designed and the class energy is reliably upbeat. It suits active movers who want premium instruction without committing to a single-discipline studio.",
    address: "—",
    bestFor: "Reformer Pilates & cross-training under one roof",
    signatureClass: "Frame Reformer 50",
    bookingTip: "App booking; weekday morning classes most available",
  },
  {
    number: "05",
    name: "Momax Pilates",
    neighborhood: "Prenzlauer Berg",
    priceLevel: "€€",
    review: "Momax Pilates has earned genuine affection in Prenzlauer Berg, the tree-lined district north of Mitte where Berlin's young families, freelancers, and long-term residents have settled in largest numbers. The studio has the feel of a well-run neighbourhood institution rather than a branded boutique — the instructors know their regulars, the scheduling accommodates family life, and the pricing reflects a real commitment to accessibility. Classes range from foundational mat work to more demanding reformer sessions, and the teaching is careful and attentive throughout the range. The physical space is modest but well-kept, and the atmosphere is warm in a way that larger studios rarely manage. It suits practitioners who want consistent, trustworthy instruction close to home rather than a destination experience.",
    address: "—",
    bestFor: "Neighbourhood community studio, family-friendly",
    signatureClass: "Momax Reformer Fundamentals",
    bookingTip: "Early morning and postnatal classes book quickly",
  },
  {
    number: "06",
    name: "RO Studios Roform",
    neighborhood: "Neukölln",
    priceLevel: "€€",
    review: "RO Studios has planted itself in Neukölln at precisely the right moment, as the district's rapid creative and demographic shift has produced a young, health-conscious population with real appetite for quality movement instruction at honest prices. The Roform format — RO's take on contemporary group reformer — is energetic, well-sequenced, and taught by instructors who seem to genuinely enjoy their work. The studio space has the raw, considered aesthetic that Neukölln does better than anywhere in Berlin, and the overall experience feels authentically of its neighbourhood rather than parachuted in. Pricing is among the most competitive in the city for this standard of instruction, which keeps the class schedule consistently full. It suits practitioners who want discovery-level quality at pre-gentrification prices — while that combination still exists.",
    address: "—",
    bestFor: "Affordable reformer, local creative clientele",
    signatureClass: "Roform Signature",
    bookingTip: "Weekend morning slots fill by Thursday; book early",
  }
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
