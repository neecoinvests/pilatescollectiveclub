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
  title: "Best Pilates Studios in Lisbon (2026) — Curated Guide",
  description: "The best Pilates studios in Lisbon — reformer studios in Príncipe Real, Amoreiras, Saldanha and Campolide. Six curated picks, verified October 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates lisbon", "pilates lisboa", "reformer pilates lisbon", "best pilates studios lisbon", "pilates studio lisboa", "pilates principe real", "pilates chiado", "pilates portugal", "best reformer pilates lisbon", "pilates classes lisbon"],
  openGraph: {
    title: "Best Pilates Studios in Lisbon (2026)",
    description: "Six curated Pilates studios in Lisbon — Príncipe Real, Amoreiras and Saldanha reformer picks. Verified October 2026.",
    url: "https://pilatescollectiveclub.com/cities/lisbon",
    images: [{ url: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200&q=80", width: 1200, height: 630, alt: "Lisbon city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Lisbon (2026)",
    description: "Our curated guide to Lisbon's six best Pilates studios — verified for 2026.",
    images: ["https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/lisbon",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "The Kynd Space",
    neighborhood: "Príncipe Real",
    priceLevel: "$$$",
    review: "The Kynd Space opened in Príncipe Real in 2023 and has quickly become one of Lisbon's most-reviewed studios: its reformer studio is rated 4.8 from more than 13,000 reviews on ClassPass, and its mat studio even higher. Instructors take time at the start of each session to understand where everyone is, so first-timers and experienced members can share a class.",
    caveat: "its popularity means classes fill — morning sessions early in the week go first.",
    address: "Travessa do Noronha 17 (Atelier), Lisboa",
    bestFor: "Highly rated reformer and mat in Príncipe Real",
    signatureClass: "Reformer Pilates",
    bookingTip: "Book via the studio app; Príncipe Real morning sessions sell out earliest in the week.",
  },
  {
    number: "02",
    name: "The Reformer Lab — Amoreiras",
    neighborhood: "Amoreiras",
    priceLevel: "$$$",
    review: "The Reformer Lab on Rua Artilharia 1 in Amoreiras is one of the highest-rated reformer studios in Portugal, at 4.9 from more than 20,000 reviews on ClassPass.",
    caveat: "high demand means prime-time classes book out — plan a few days ahead.",
    address: "Rua Artilharia 1, 79B, Lisboa",
    bestFor: "Top-rated group reformer near Amoreiras",
    signatureClass: "Reformer Pilates",
    bookingTip: "First-timer packages are good value; check the expiry window before buying.",
  },
  {
    number: "03",
    name: "Prescription Pilates — Saldanha",
    neighborhood: "Saldanha",
    priceLevel: "$$",
    review: "Prescription Pilates has three studios in Lisbon, and its Saldanha studio in the business district draws local professionals and visitors looking for efficient, high-quality reformer sessions in a central location. It is rated 4.6 from more than 8,000 reviews on ClassPass.",
    caveat: "a multi-studio brand — efficient and consistent rather than intimate.",
    address: "—",
    bestFor: "Central reformer for Saldanha professionals",
    signatureClass: "Reformer Pilates",
    bookingTip: "If Saldanha is full, check the brand's other Lisbon studios.",
  },
  {
    number: "04",
    name: "PILAT3S Palácio SottoMayor",
    neighborhood: "Saldanha / Picoas",
    priceLevel: "$$$$",
    review: "PILAT3S runs a premium boutique reformer studio inside Holmes Place at the Palácio SottoMayor on Avenida Fontes Pereira de Melo. It teaches the brand's three classes — Align, Tone and Power — for all levels, in an exclusive setting.",
    caveat: "it is inside a Holmes Place club — check how access works for non-members when booking.",
    address: "Avenida Fontes Pereira de Melo 16, 1050-121 Lisboa",
    bestFor: "Premium reformer in a historic palace setting",
    signatureClass: "Align · Tone · Power",
    bookingTip: "Midweek mornings have the best availability.",
  },
  {
    number: "05",
    name: "Alinéa Wellness Club",
    neighborhood: "Campolide",
    priceLevel: "$$",
    review: "Alinéa Wellness Club on Rua General Taborda offers reformer Pilates and yoga, a practical option for Campolide and the residential areas north-west of the centre.",
    caveat: "limited published detail about instructors — try a single class first.",
    address: "Rua General Taborda 52A, 1070-271 Lisboa",
    bestFor: "Reformer and yoga in Campolide",
    signatureClass: "Reformer Pilates",
    bookingTip: "Compare drop-in and pack pricing before committing.",
  },
  {
    number: "06",
    name: "beHaus Lisbon",
    neighborhood: "Lisbon",
    priceLevel: "$$$",
    review: "beHaus describes itself as an urban refuge for conscious well-being, a sophisticated space where tradition and modernity meet, and it offers reformer Pilates through Urban Sports Club as well as directly.",
    caveat: "we could not confirm the exact street address independently — check the studio's listing before visiting.",
    address: "—",
    bestFor: "A calm, design-led wellness studio",
    signatureClass: "Reformer Pilates",
    bookingTip: "Look out for introductory rates and workshops for new clients.",
  },
];

const BOOKING_TIPS = [
  { heading: "Expect to pay €18–45 per class", body: "Lisbon's Pilates pricing remains among the most accessible of any major European city. Community studios and mat classes can be found from €12–18; group reformer classes at quality independent studios run €20–30; premium private sessions at boutique venues typically cost more. Class packs (typically five or ten sessions) offer meaningful discounts at most studios." },
  { heading: "ClassPass has growing coverage in Lisbon", body: "ClassPass has expanded its Lisbon coverage in recent years and is a practical option for visitors wanting to trial studios without committing to packs. Coverage is best in Chiado, Alcântara, and Parque das Nações. Some of the more traditional studios in Príncipe Real and Mouraria do not participate." },
  { heading: "Booking in English is widely possible", body: "Lisbon's international character means most studios are comfortable with English-language bookings and correspondence. Email and WhatsApp are the dominant communication channels — don't be surprised if a studio's booking system is simply a WhatsApp number rather than an online platform. Response times are typically same-day." },
  { heading: "Bring your own grip socks", body: "Grip socks are required at reformer studios but less universally available for purchase than in Northern European cities. Pack a pair in your bag before your first session. Decathlon stores across Lisbon sell suitable fitness socks at very reasonable prices if you arrive unprepared." },
  { heading: "Tipping is not expected in Portugal", body: "Tipping in Portuguese wellness studios follows the country's generally low-tipping culture — it is appreciated but by no means expected. The most valued gesture of appreciation is word-of-mouth recommendation, which drives a significant proportion of new client acquisition at Lisbon's independent studios." },
];

const NEIGHBORHOODS = [
  { name: "Príncipe Real & Bairro Alto", description: "Lisbon's most affluent and historically significant neighbourhood is home to the city's finest premium wellness addresses. Studios here occupy converted palaces and townhouses, attracting an international creative and professional community willing to invest in exceptional instruction. The neighbourhood's dense concentration of galleries, restaurants, and design boutiques makes it the natural home of Lisbon's luxury wellness culture." },
  { name: "Chiado & Baixa", description: "The city's historic commercial centre offers the most accessible quality Pilates in central Lisbon. Studios here benefit from excellent public transport connections and a steady flow of international residents and visitors — most have adapted to offer bilingual instruction. Good value for central Lisbon, with group classes at competitive prices and a convenient location for most of the city's short-term visitors." },
  { name: "Alcântara & Santos", description: "Lisbon's post-industrial west has become a creative wellness hub — converted factories and warehouses host some of the city's most design-forward studios. The neighbourhood's arts and tech community has driven a Pilates scene that is contemporary, community-focused, and distinctly cosmopolitan. Weekend mornings in Alcântara have a particular energy that is worth experiencing." },
  { name: "Mouraria & Intendente", description: "The city's most authentically Lisboeta neighbourhoods — historically working-class, now undergoing careful gentrification — host a small number of community-focused studios that offer exceptional value and genuine cultural experience. Mat Pilates and hybrid movement practices are more prevalent here than reformer-focused offerings, reflecting both the space constraints and the ethos of studios that prioritise accessibility." },
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
  { city: "Barcelona", country: "Spain", href: "/cities/barcelona", studioCount: 6 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 6 },
  { city: "Amsterdam", country: "Netherlands", href: "/cities/amsterdam", studioCount: 6 },
  { city: "Berlin", country: "Germany", href: "/cities/berlin", studioCount: 6 },
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
        { "@type": "ListItem", "position": 2, "name": "Lisbon", "item": "https://pilatescollectiveclub.com/cities/lisbon" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Lisbon",
      "description": "Curated guide to the top 5 Pilates studios in Lisbon.",
      "url": "https://pilatescollectiveclub.com/cities/lisbon",
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
            "addressLocality": "Lisbon",
            "addressCountry": "PT",
          },
        },
      })),
    },
  ],
};

export default function LisbonPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Portugal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Lisbon</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Lisbon's Pilates scene has grown rapidly alongside the city's emergence as one of Europe's most desirable destinations for international residents and wellness-conscious travellers. The city's combination of a young, internationally educated professional class, a large digital nomad community, and an increasingly sophisticated local demand for quality movement practices has produced a studio landscape that is diverse, accessible, and — at its best — genuinely exceptional. This guide covers six studios we rate highly across the city's distinct neighbourhoods.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1400&q=80" alt="Lisbon city guide — Pilates Collective Club" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Lisbon, Portugal</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Europe's most accessible great city, with a Pilates scene to match</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Lisbon</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Lisbon</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Lisbon's Pilates landscape is shaped by its neighbourhoods.</p>
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
              Grip socks are required at most reformer studios in Lisbon. These are our recommended picks — all available on Amazon.{" "}
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

        <CTASection title="Find Pilates near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best reformer Pilates in Lisbon…" />
      </main>
      <Footer />
    </>
  );
}
