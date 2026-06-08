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
  title: "Best Pilates Studios in Rome (2026) — Curated Guide",
  description: "The best Pilates studios in Rome — reformer boutiques in Prati, Parioli, and Trastevere. Five curated picks, verified June 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates rome", "pilates roma", "reformer pilates rome", "best pilates studios rome", "pilates studio roma", "pilates prati rome", "pilates parioli", "pilates italy", "best reformer pilates rome", "pilates classes rome"],
  openGraph: {
    title: "Best Pilates Studios in Rome (2026)",
    description:
      "Five curated Pilates studios in Rome — Prati, Parioli, and Trastevere reformer picks. Verified June 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/rome",
    images: [
      {
        url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Rome city guide — Pilates Collective Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Rome (2026)",
    description:
      "Discover the best Pilates studios in Rome — five curated picks with booking tips for 2026.",
    images: ["https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/rome",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Gaia Pilates Roma",
    neighborhood: "Trastevere",
    priceLevel: "€€€",
    review: "Gaia Pilates Roma is tucked into the cobblestoned streets of Trastevere and has become the neighbourhood's most trusted Pilates address, drawing both Roman professionals and informed visiting practitioners who have done their research before arriving. The studio offers reformer and mat classes taught by instructors with international training backgrounds, and the teaching reflects an understanding of the body that goes beyond the surface-level corrections common in newer studios. The Trastevere setting lends the experience a particular quality — arriving through the neighbourhood's medieval lanes and entering a calm, well-equipped studio is one of Rome's more unexpected pleasures. It suits clients who want genuine Pilates rather than a wellness-branded workout.",
    address: "—",
    bestFor: "Reformer and mat, internationally trained instructors, Trastevere neighbourhood",
    signatureClass: "Reformer Group (open level)",
    bookingTip: "Book sessions well in advance, particularly for morning slots that attract local professionals. The studio communicates primarily in Italian — WhatsApp is often the fastest way to confirm availability for non-Italian speakers.",
  },
  {
    number: "02",
    name: "Plexus",
    neighborhood: "Campo de' Fiori",
    priceLevel: "€€€",
    review: "Plexus occupies a considered space in the Campo de' Fiori area and has built a reputation in Rome's discerning wellness community for instruction that is anatomically sophisticated and thoughtfully sequenced. The studio works across reformer and functional movement disciplines, and the instructors bring a level of individual attention to group classes that keeps the teaching quality high even as the space fills. The clientele is a mix of Roman professionals, expats, and visiting practitioners from other European cities who treat a Plexus session as a fixed point in their Rome itinerary. The location, close to some of Rome's most frequented piazzas, makes scheduling around sightseeing straightforward.",
    address: "—",
    bestFor: "Reformer, functional movement, experienced practitioners, central Rome location",
    signatureClass: "Reformer Flow",
    bookingTip: "Booking online in advance is strongly recommended as the studio's central location attracts consistent demand. English-language instruction is available — confirm when booking.",
  },
  {
    number: "03",
    name: "Pilates Muse",
    neighborhood: "Parioli",
    priceLevel: "€€€",
    review: "Pilates Muse is one of Parioli's most established wellness addresses, serving the neighbourhood's affluent and well-travelled clientele with reformer and apparatus instruction that matches the expectations of clients who also train when they visit London, New York, or Milan. The teaching is precise and classical in orientation, and the studio's small class caps ensure that individual attention remains consistent regardless of the format. The atmosphere is elegant without formality — Parioli in miniature — and the instructors are known for building genuine relationships with regular clients that deepen the quality of the teaching over time. Practitioners who live or stay in the northern residential quarters of Rome need look no further.",
    address: "—",
    bestFor: "Classical reformer and apparatus, experienced practitioners, Parioli residents",
    signatureClass: "Classical Reformer (small group)",
    bookingTip: "Parioli is best reached by car or taxi from central Rome — the neighbourhood is not particularly well-served by metro. Sessions book up among a loyal regular clientele, so advance reservation is essential.",
  },
  {
    number: "04",
    name: "Postural Pilates Academy",
    neighborhood: "Salario",
    priceLevel: "€€",
    review: "Postural Pilates Academy approaches the method from a rehabilitative and postural correction standpoint that reflects the professional backgrounds of its instructors, several of whom have training in physiotherapy and movement medicine alongside their Pilates certifications. The studio serves the residential Salario neighbourhood and draws clients recovering from injury, managing chronic postural conditions, and seeking the kind of structured progression that results-oriented practitioners require. Classes and private sessions are conducted with a clinical precision that distinguishes it from most group-format studios, and the client outcomes reported here are genuinely distinctive. It is the studio to know in Rome if Pilates is part of a recovery or corrective programme rather than a fitness pursuit alone.",
    address: "—",
    bestFor: "Rehabilitative Pilates, postural correction, injury recovery, all levels",
    signatureClass: "Postural Correction Private Session",
    bookingTip: "An initial assessment session is recommended before joining group classes — contact the studio to arrange. The Salario location is accessible by several bus lines from the city centre.",
  },
  {
    number: "05",
    name: "Aletheia Studio Pilates",
    neighborhood: "Prati",
    priceLevel: "€€€",
    review: "Aletheia Studio Pilates sits in the orderly, residential Prati neighbourhood within easy reach of the Vatican and Castel Sant'Angelo, and the studio's atmosphere has the same composed quality as its surroundings. The instruction draws from classical Pilates lineage and is delivered with the kind of unhurried attention that marks a studio more interested in long-term client development than class throughput. The equipment is well-maintained and the space is calm, attracting Prati residents and Vatican-area professionals who treat their sessions here as a weekly anchor. Visitors staying in Prati — one of Rome's most practical bases for first-time visitors — will find it a genuinely world-class local option.",
    address: "—",
    bestFor: "Classical reformer, Prati and Vatican area, serious practitioners",
    signatureClass: "Classical Reformer",
    bookingTip: "Book by phone or WhatsApp rather than waiting for online confirmation — the studio manages availability personally. Prati has better street parking than central Rome; mid-morning slots are easiest for arrivals by car.",
  },
  {
    number: "06",
    name: "True Pilates Parioli",
    neighborhood: "Parioli",
    priceLevel: "€€€€",
    review: "True Pilates Parioli operates within the global True Pilates network — the direct lineage studio system descended from Romana Kryzanowska — and is Rome's most authoritative address for the classical method as Joseph Pilates originally codified it, taught on authentic Gratz apparatus by certified instructors who have trained within the lineage. The studio attracts a client base that has typically trained extensively before arriving here, often including professional dancers, athletes, and practitioners who have specifically sought out True Pilates certification globally. Sessions are unhurried, deeply technical, and genuinely transformative for clients prepared to engage at that level. For the serious practitioner visiting Rome, it is not optional.",
    address: "—",
    bestFor: "True classical Pilates, Gratz apparatus, lineage instruction, advanced practitioners",
    signatureClass: "True Pilates Classical Session",
    bookingTip: "First-time clients should expect an intake assessment — the studio places clients appropriately before beginning work. Private and semi-private sessions are the primary format; contact in advance to confirm availability and discuss your training background.",
  }
];

const BOOKING_TIPS = [
  {
    heading: "Expect to pay €20–60 per class",
    body: "Rome's Pilates pricing varies considerably by model and neighbourhood. Group reformer classes at accessible studios run €20–35; semi-private sessions at premium addresses reach €50–70 per person. Carnet packages of eight to ten sessions typically save 15–20% versus drop-in rates.",
  },
  {
    heading: "August closures are universal",
    body: "Like Milan and most of Italy, Rome's independent wellness studios close for two to four weeks in August. Larger gyms with Pilates programmes may stay open, but boutique studios will be shut. Plan around this — September sees very high demand as regulars return.",
  },
  {
    heading: "Private sessions first — everywhere",
    body: "The majority of Rome's dedicated Pilates studios require at least one private intake session before you join group classes. This isn't just bureaucracy — it's part of how the method works, and studios that skip it generally deliver lower-quality group instruction as a result.",
  },
  {
    heading: "English is increasingly available",
    body: "International-facing studios in Prati, Trastevere, and Flaminio typically have at least one English-speaking instructor. Studios in more residential neighbourhoods like Parioli may be Italian-only. If this matters, check before booking.",
  },
  {
    heading: "Grip socks are non-negotiable",
    body: "Every studio in Rome requires grip socks. Bring your own — the studio-sold options are typically €14–18 and you can find better value online. A few studios offer loaner pairs for first visits, but don't count on it.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Prati",
    description:
      "Rome's most coherent modern neighbourhood — wide boulevards, good transport links, and a density of professional services that includes several excellent Pilates studios. Prati is the most practical base for consistent Pilates practice in central Rome, with studios that attract a serious, committed clientele.",
  },
  {
    name: "Parioli",
    description:
      "The capital's most affluent residential area rewards patient exploration. The studios here operate quietly — minimal marketing, word-of-mouth reputation — but the instruction quality is among the highest in the city. Expect premium pricing and an equally premium experience.",
  },
  {
    name: "Trastevere",
    description:
      "Characterful, expat-friendly, and increasingly well-served for wellness. Trastevere's studios tend toward the community-oriented and accessible, which makes the neighbourhood an excellent starting point for visitors or newcomers to the city looking to establish a practice.",
  },
  {
    name: "Flaminio & Testaccio",
    description:
      "Two distinct but increasingly dynamic neighbourhoods for Pilates. Flaminio appeals to the gallery-and-design crowd with its considered wellness offering; Testaccio is younger and more energetic, with newer studios that bring fresh programming ideas to a neighbourhood discovering its wellness identity.",
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
  { city: "Milan", country: "Italy", href: "/cities/milan", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
  { city: "Barcelona", country: "Spain", href: "/cities/barcelona", studioCount: 5 },
  { city: "Berlin", country: "Germany", href: "/cities/berlin", studioCount: 5 },
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
        { "@type": "ListItem", "position": 2, "name": "Rome", "item": "https://pilatescollectiveclub.com/cities/rome" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Rome",
      "description": "Curated guide to the top 5 Pilates studios in Rome.",
      "url": "https://pilatescollectiveclub.com/cities/rome",
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
            "addressLocality": "Rome",
            "addressCountry": "IT",
          },
        },
      })),
    },
  ],
};

export default function RomePage() {
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
                Italy
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Rome</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Updated May 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Rome may not have the density of Milan's studio scene, but what the capital offers is something different: a Pilates culture with genuine depth, built slowly over two decades and now producing some of the most technically serious instruction in Italy. From the elegant semi-private studios of Parioli to the community-minded reformer spaces of Trastevere, this guide identifies the five studios that represent Rome's Pilates landscape at its best.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1400&q=80"
                alt="Rome city guide"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Rome, Italy</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Serious instruction beneath the eternal city</p>
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
              Tips for booking Pilates in Rome
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
              Best neighbourhoods for Pilates in Rome
            </h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Rome's Pilates landscape is shaped by its neighbourhoods.
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
              Grip socks are required at most reformer studios in Rome. These are our recommended picks — all available on Amazon.{" "}
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
          subtitle="Use our curated city guides to find the best Pilates studios worldwide."
          showSearch
          searchPlaceholder="Ask: best reformer Pilates in Rome…"
        />
      </main>
      <Footer />
    </>
  );
}
