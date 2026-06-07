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
  description: "The best Pilates studios in Barcelona — reformer boutiques in Eixample, Gràcia, and the Gothic Quarter. Five curated picks, verified June 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates barcelona", "reformer pilates barcelona", "best pilates studios barcelona", "pilates studio barcelona", "pilates clases barcelona", "pilates eixample", "pilates gracia barcelona", "pilates spain", "best reformer pilates barcelona", "estudio pilates barcelona"],
  openGraph: {
    title: "Best Pilates Studios in Barcelona (2026)",
    description: "Five curated Pilates studios in Barcelona — reformer and classical picks from Eixample to Gràcia. Verified June 2026."s best Pilates studios — five verified picks from Eixample to Poblenou.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/barcelona",
    images: [{ url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=80", width: 1200, height: 630, alt: "Barcelona city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Barcelona (2026)",
    description: "Our curated guide to Barcelona's best Pilates studios — five verified picks.",
    images: ["https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/barcelona",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "PilatesBCN",
    neighborhood: "Eixample",
    priceLevel: "€€€",
    review: "PilatesBCN has quietly become the benchmark for classical reformer instruction in Eixample, drawing a sophisticated mix of local professionals and expats who take their practice seriously. The spacious studio occupies a beautifully converted apartment floor in the heart of the grid, with high ceilings, natural light, and a fleet of Balanced Body reformers that are kept in meticulous condition. Instruction is bilingual Spanish-English as standard, delivered by teachers with genuine conservatory-level training — corrections are precise, cues are thoughtful, and sessions rarely feel rushed. The programming moves logically from foundational mat work through to advanced equipment combinations, making it equally rewarding for first-timers and experienced movers. It suits the kind of practitioner who values rigour over trend, and is willing to pay accordingly.",
    address: "—",
    bestFor: "Balanced Body reformers, bilingual classes",
    signatureClass: "BCN Reformer Signature",
    bookingTip: "Monthly pass offers 20% discount vs. drop-in",
  },
  {
    number: "02",
    name: "Estudio 3 Pilates Reformer",
    neighborhood: "Gràcia",
    priceLevel: "€€",
    review: "Tucked into one of Gràcia's quieter side streets, Estudio 3 has the warm, unhurried atmosphere that neighbourhood studios elsewhere only aspire to. The space is small by design — classes are capped to keep the teacher-to-student ratio genuinely useful — and the reformer fleet is well-maintained and thoughtfully arranged. Instructors here have a gift for making the method feel accessible without dumbing it down, which is why the studio attracts a loyal local following of all ages and fitness levels. Pricing is honest and the bono system is flexible, making it a sensible choice for anyone based in the upper part of the city who trains regularly. It suits independent movers who prefer character over corporate polish.",
    address: "—",
    bestFor: "Small-group reformer in a boutique space",
    signatureClass: "Estudio 3 Flow",
    bookingTip: "Afternoon classes most available mid-week",
  },
  {
    number: "03",
    name: "SimplyBe Pilates",
    neighborhood: "Sant Pere",
    priceLevel: "€€€",
    review: "SimplyBe occupies a considered space in Sant Pere — the neighbourhood where Barcelona's creative and international residents have settled in growing numbers — and the studio has calibrated itself accordingly. Instruction is conducted entirely in English, which makes it the most reliably accessible choice for expatriates and visiting practitioners who want to train without a language barrier. The atmosphere is calm and considered, the equipment is well-maintained, and the programming draws on a clean, contemporary interpretation of the classical method. Class sizes are deliberately kept small, allowing instructors to offer hands-on attention that justifies the premium price point. It particularly suits professionals relocating to Barcelona who want a studio that feels familiar from day one.",
    address: "—",
    bestFor: "English-friendly reformer studio",
    signatureClass: "Be Flow Reformer",
    bookingTip: "New client intro: 3 classes for €75",
  },
  {
    number: "04",
    name: "MUDRA Pilates Reformer",
    neighborhood: "Sarrià-Sant Gervasi",
    priceLevel: "€€€",
    review: "MUDRA occupies a serene, well-appointed studio in Sarrià-Sant Gervasi, the residential district above the city where Barcelona's most established families and senior professionals tend to live. The studio brings a mindfulness dimension to reformer work that is uncommon in Barcelona — sessions are slower, more somatic, and more attuned to the connection between breath, posture, and long-term physical health. Instructors are credentialed and calm, the equipment immaculate, and the overall atmosphere one of quiet seriousness rather than boutique-fitness energy. Private and semi-private sessions are the preferred format here, and the studio does them exceptionally well. It suits practitioners dealing with rehabilitation, chronic tension, or simply a preference for depth over pace.",
    address: "—",
    bestFor: "Upscale Pilates & mindfulness",
    signatureClass: "MUDRA Reformer Deep",
    bookingTip: "Private sessions available by appointment",
  },
  {
    number: "05",
    name: "Sinergia BCN",
    neighborhood: "Poblenou",
    priceLevel: "€€",
    review: "Sinergia BCN reflects the character of Poblenou itself — energetic, unpretentious, and a little more experimental than what you find in the established central districts. The studio has built its reputation on athletic, fast-paced reformer classes that borrow from functional training and HIIT without abandoning the Pilates fundamentals, and the clientele skews younger and more fitness-oriented as a result. Instructors here are energetic and motivating without being performatively so, and the class atmosphere has a communal quality that regulars clearly value. Pricing is well below the city average for the quality on offer, and the drop-in policy is genuinely flexible. It suits active movers who want a serious physical challenge in a studio that doesn't take itself too seriously.",
    address: "—",
    bestFor: "Athletic reformer & HIIT fusion",
    signatureClass: "Sinergia Power 45",
    bookingTip: "Drop-in friendly; no advance booking required",
  },
  {
    number: "06",
    name: "PILAT3S Sagrada Família",
    neighborhood: "Sagrada Família",
    priceLevel: "€€€",
    review: "PILAT3S is the most polished of Barcelona's boutique reformer chains, and the Sagrada Família location — positioned in the broad residential belt that surrounds Gaudí's cathedral — is among its best-executed outposts. The studio design is striking: dark finishes, dramatic lighting, and rows of equipment that signal a serious commitment to the reformer experience as a visual as well as physical proposition. Classes are fast-moving, music-driven, and structured for maximum efficiency within a 45-minute format, which suits professionals with tight schedules. The app-based booking system is slick and the cancellation policy is enforced, both signs of an operation that runs at genuine scale. It suits practitioners who want a consistent, high-production-value experience without the variability of independent studios.",
    address: "—",
    bestFor: "Tech-enabled reformer boutique chain",
    signatureClass: "PILAT3S Signature 45",
    bookingTip: "App-based booking; early cancellation policy 8 hrs",
  }
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
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
  { city: "Amsterdam", country: "Netherlands", href: "/cities/amsterdam", studioCount: 5 },
  { city: "Berlin", country: "Germany", href: "/cities/berlin", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
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
              Barcelona's relationship with wellness is deeply embedded in its culture — the city's climate, its architecture, its café rhythms all encourage a certain attentiveness to physical wellbeing. The Pilates scene here reflects this: studios tend to be beautifully housed, thoughtfully run, and staffed by teachers who treat the method seriously. This guide covers the five studios we rate most highly across the city's distinct neighbourhoods.
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
