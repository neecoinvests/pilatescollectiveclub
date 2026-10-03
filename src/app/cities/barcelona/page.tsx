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
  title: "Best Pilates Studios in Barcelona (2026) — Curated Guide",
  description: "The best Pilates studios in Barcelona — reformer boutiques in Eixample, Gràcia, and the Gothic Quarter. Six curated picks, verified October 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates barcelona", "reformer pilates barcelona", "best pilates studios barcelona", "pilates studio barcelona", "pilates clases barcelona", "pilates eixample", "pilates gracia barcelona", "pilates spain", "best reformer pilates barcelona", "estudio pilates barcelona"],
  openGraph: {
    title: "Best Pilates Studios in Barcelona (2026)",
    description: "Six curated Pilates studios in Barcelona — reformer and classical picks from Eixample to Gràcia. Verified October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/barcelona",
    images: [{ url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=80", width: 1200, height: 630, alt: "Barcelona city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Barcelona (2026)",
    description: "Our curated guide to Barcelona's best Pilates studios — six verified picks.",
    images: ["https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/barcelona",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "SimplyBe Pilates",
    neighborhood: "Eixample (near Urquinaona)",
    priceLevel: "$$$",
    review: "SimplyBe is a boutique studio on Carrer de Pau Claris, a three-minute walk from Urquinaona metro, that combines Pilates with osteopathy and massage. It has been operating in Barcelona for more than 13 years, and classes cover Pilates, strength training, barre, pregnancy, injury prevention and rehabilitation — all taught in English, which makes it the most straightforward choice for expats and visitors.",
    caveat: "it is a smaller wellness centre that mixes Pilates with manual therapy rather than a large reformer room — check the schedule for the class format you want.",
    address: "Carrer de Pau Claris, 83, 3-3, 08010 Barcelona",
    bestFor: "English-speaking expats and visitors; Pilates for injury and pregnancy",
    signatureClass: "Pilates (taught in English)",
    bookingTip: "If you are managing pain or an injury, ask about combining Pilates with an osteopathy session.",
  },
  {
    number: "02",
    name: "PILAT3S Gràcia",
    neighborhood: "Gràcia",
    priceLevel: "$$$",
    review: "PILAT3S Gràcia is a design-led boutique reformer studio on Carrer del Perill that pairs traditional Pilates with modern technology. It teaches the brand's three class types — Align, Tone and Power — for all levels, and offers showers with toiletries, changing rooms and lockers, which makes it easy to fit a class around a workday.",
    caveat: "this is a polished boutique chain format — consistent and well-run, but less individual than a small owner-run studio.",
    address: "Carrer del Perill, 40, Gràcia, 08012 Barcelona",
    bestFor: "Reformer classes with full amenities, early-morning and evening slots",
    signatureClass: "Align · Tone · Power",
    bookingTip: "Weekday classes run from 7:00, with later evening classes on Tuesdays and Thursdays.",
  },
  {
    number: "03",
    name: "BCN Pilates Poblenou — Llull",
    neighborhood: "Poblenou",
    priceLevel: "$$",
    review: "BCN Pilates runs several studios around Poblenou, and the Carrer Llull location has two mat Pilates rooms for groups of up to nine people plus a reformer room with four machines. That small reformer room means a genuinely small class, at prices that are friendlier than the central boutique chains.",
    caveat: "with only four reformers, reformer slots are limited — mat classes are much easier to get into.",
    address: "Carrer de Llull, 233, 08025 Barcelona",
    bestFor: "Small-group reformer and mat Pilates in Poblenou",
    signatureClass: "Reformer (4-person class)",
    bookingTip: "If Llull is full, check the brand's other Poblenou studios on Pere Ripoll and Llatzeret.",
  },
  {
    number: "04",
    name: "Area Pilates",
    neighborhood: "Sarrià-Sant Gervasi",
    priceLevel: "$$$",
    review: "Area Pilates is a 150 m² studio in Sarrià-Sant Gervasi equipped with the full range of Pilates apparatus — Cadillac, reformer, chair and barrel — plus small props. Changing rooms and showers come with towels, shampoo and gel, and subscribers get an hour of free parking, a real perk in the upper part of the city.",
    caveat: "we could not confirm the exact street address independently — check the studio's listing on Urban Sports Club or its own site before your visit.",
    address: "—",
    bestFor: "Full-apparatus Pilates in the upper city, with parking",
    signatureClass: "Reformer & Cadillac",
    bookingTip: "Ask about the free parking when you sign up — it only applies to subscription and monthly plans.",
  },
  {
    number: "05",
    name: "Mou Pilates — Santaló",
    neighborhood: "Sant Gervasi",
    priceLevel: "$$",
    review: "Mou Pilates has a reformer studio on Carrer de Santaló in Sant Gervasi, a residential part of the upper city close to Muntaner and Via Augusta. It is available through Urban Sports Club, which makes it easy to try before committing to a monthly plan.",
    caveat: "there is limited published detail about the instructors and class formats — take a trial class first.",
    address: "Carrer de Santaló, 15, 08021 Barcelona",
    bestFor: "Upper-city residents who want a neighbourhood reformer studio",
    signatureClass: "Reformer Pilates",
    bookingTip: "Use an Urban Sports Club trial or a single class to test the teaching before buying a pack.",
  },
  {
    number: "06",
    name: "PILAT3S Sagrada Família",
    neighborhood: "Sagrada Família / Sant Martí",
    priceLevel: "$$$",
    review: "PILAT3S Sagrada Família on Carrer de la Independència runs the brand's Tone, Power and Align reformer classes in small groups, taught in Spanish and English. It is rated 4.9 stars from more than 600 reviews on Urban Sports Club, and it opens early and closes late on weekdays.",
    caveat: "bookings are required and you will not be let in once class has started — arrive a few minutes early.",
    address: "Carrer de la Independència, 273, 08026 Barcelona",
    bestFor: "Bilingual small-group reformer classes near Sagrada Família",
    signatureClass: "Tone · Power · Align",
    bookingTip: "Weekday classes run from 7:00 to late evening, with Saturday morning sessions.",
  },
];

const BOOKING_TIPS = [
  { heading: "€20–38 per class is typical", body: "Barcelona reformer Pilates pricing is more accessible than London or Paris. Drop-in rates run from €20 at neighbourhood studios to €38 at premium boutiques. Bonos (class packs) of 5 or 10 sessions offer the best per-class rate." },
  { heading: "Spanish and English instruction are both widely available", body: "Barcelona's international population has pushed most quality studios to offer English-language instruction as standard. Catalan is occasionally used at neighbourhood studios — confirm language preference when booking." },
  { heading: "Bonos (class packs) are the standard purchase model", body: "Unlike monthly memberships common in the US and UK, Barcelona studios typically sell bonos — packs of 5 or 10 sessions. These usually expire after three months, so be realistic about frequency when purchasing." },
  { heading: "Book 2–3 days ahead", body: "Barcelona studios are popular but rarely as pressured as their London counterparts. Two to three days' notice is generally sufficient, with Saturday morning and early evening classes requiring more advance planning." },
  { heading: "August is quiet", body: "Many Barcelona studios operate reduced schedules in August as the city empties for summer. If visiting in August, confirm the studio is open and running a full schedule before planning around it." },
];

const NEIGHBORHOODS = [
  { name: "Eixample", description: "Barcelona's elegant central district hosts the city's most established classical studios. The nineteenth-century grid's beautiful apartments make for memorable practice spaces, and the density of quality instruction is high." },
  { name: "Gràcia & Sarrià", description: "The village-within-the-city feel of Gràcia has produced a strong community studio culture. Sarrià-Sant Gervasi to the north hosts the city's premium private session specialists, serving Barcelona's most affluent residential area." },
  { name: "Born, Barceloneta & El Raval", description: "The old city's most creative and internationally frequented districts have a growing studio scene that combines beautiful historic settings with accessible pricing and a cosmopolitan clientele." },
  { name: "Poblenou & Sant Martí", description: "Barcelona's former industrial waterfront is now home to a thriving creative and tech community that has driven demand for high-quality movement studios. Some of the city's best contemporary reformer instruction at accessible prices." },
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
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 6 },
  { city: "Amsterdam", country: "Netherlands", href: "/cities/amsterdam", studioCount: 6 },
  { city: "Berlin", country: "Germany", href: "/cities/berlin", studioCount: 6 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 6 },
];

const FURTHER_READING = [
  { title: "The Best Pilates Retreats in Europe", excerpt: "The finest Pilates immersion experiences across the continent, from Provence to Puglia.", href: "/blog/best-pilates-retreats-europe", category: "Travel", readTime: "8 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1540541338537-1220059df4b5?w=800&q=80" },
  { title: "Pilates for Athletes", excerpt: "How elite sports professionals use Pilates to build strength, prevent injury, and extend their careers.", href: "/blog/pilates-for-athletes", category: "Performance", readTime: "7 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Barcelona", "item": "https://pilatescollectiveclub.com/cities/barcelona" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Barcelona",
      "description": "Curated guide to the top 5 Pilates studios in Barcelona.",
      "url": "https://pilatescollectiveclub.com/cities/barcelona",
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
            "addressLocality": "Barcelona",
            "addressCountry": "ES",
          },
        },
      })),
    },
  ],
};

export default function BarcelonaPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Spain</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Barcelona</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 7 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Barcelona's relationship with wellness is deeply embedded in its culture — the city's climate, its architecture, its café rhythms all encourage a certain attentiveness to physical wellbeing. The Pilates scene here reflects this: studios tend to be beautifully housed, thoughtfully run, and staffed by teachers who treat the method seriously. This guide covers the six studios we rate most highly across the city's distinct neighbourhoods.
            </p>
          </div>
        </section>
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1400&q=80" alt="Barcelona architecture" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Barcelona, Spain</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>A city that takes movement seriously</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Barcelona</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Barcelona</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Barcelona's diverse neighbourhoods each offer a distinct studio culture and price point.</p>
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
              Grip socks are required at most reformer studios in Barcelona. These are our recommended picks — all available on Amazon.{" "}
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
        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best Pilates studios in Barcelona…" />
      </main>
      <Footer />
    </>
  );
}
