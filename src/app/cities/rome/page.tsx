import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Rome (2026) | Pilates Collective Club",
  description:
    "Discover the best Pilates studios in Rome — from Prati reformer boutiques to Parioli wellness centres. Five curated picks for serious practitioners in 2026.",
  keywords: [
    "pilates studios rome",
    "reformer pilates rome",
    "best pilates rome",
    "pilates classes roma",
    "rome pilates guide",
    "boutique pilates rome",
    "pilates prati rome",
    "pilates parioli rome",
    "pilates roma 2026",
  ],
  openGraph: {
    title: "Best Pilates Studios in Rome (2026) | Pilates Collective Club",
    description:
      "Discover the best Pilates studios in Rome — five curated picks with booking tips for 2026.",
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
    title: "Best Pilates Studios in Rome (2026) | Pilates Collective Club",
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
    name: "Roma Pilates Studio",
    neighborhood: "Prati",
    priceLevel: "€€€",
    review:
      "Roma Pilates Studio is the reference point for serious practitioners in the capital. Located on a quiet residential street in Prati — the neighbourhood directly opposite the Vatican — the studio has operated for over a decade and accumulated both a loyal client base and a reputation for instruction that stands up to European comparison. The apparatus room features eight Balanced Body reformers and a full cadillac, and the instruction team holds qualifications from institutions in both Italy and the UK. The classical programme is demanding in the best possible way.",
    address: "Via Candia 52, 00192 Roma",
    bestFor: "Classical reformer, experienced practitioners, all levels",
    signatureClass: "Reformer Classic",
    bookingTip: "The Saturday morning sessions are the studio&apos;s most sought-after. Book a full week ahead through the online system. New clients must complete an introductory private session first.",
  },
  {
    number: "02",
    name: "Pilates Parioli",
    neighborhood: "Parioli",
    priceLevel: "€€€",
    review:
      "Parioli is Rome&apos;s most affluent residential neighbourhood, and Pilates Parioli matches the postcode&apos;s standard for quality and discretion. The studio operates on a semi-private model — groups of no more than four — which maintains the quality of instruction while keeping pricing accessible relative to fully private sessions. The head instructor, Elena Marchetti, has trained extensively in New York and brings a thoroughness to her teaching that the neighbourhood&apos;s professional clientele clearly values. The waiting list for regular weekly slots reflects the demand.",
    address: "Viale dei Parioli 78, 00197 Roma",
    bestFor: "Semi-private instruction, professional clientele, consistent results",
    signatureClass: "Semi-Private Reformer & Tower",
    bookingTip: "Contact the studio directly by phone or email. The consultation process takes a week — plan accordingly if you have a short visit.",
  },
  {
    number: "03",
    name: "Studio Core Roma",
    neighborhood: "Trastevere",
    priceLevel: "€€",
    review:
      "Studio Core brings a refreshingly unpretentious energy to Rome&apos;s Pilates scene without sacrificing instructional rigour. The Trastevere location — in the city&apos;s most characterful medieval neighbourhood — draws a mix of expats, creative professionals, and long-term residents who appreciate the studio&apos;s combination of genuine quality and accessible pricing. Group reformer classes run to a maximum of eight, and the teaching is notably more hands-on than at many competitors. The evening schedule is one of the most extensive in the city, making it a practical option for working clients.",
    address: "Via della Lungara 14, 00165 Roma",
    bestFor: "Group reformer, expats, value, evening classes",
    signatureClass: "Core Reformer",
    bookingTip: "ClassPass coverage is available for group classes. Direct membership packs offer better value for regular practitioners — ask about the eight-class option.",
  },
  {
    number: "04",
    name: "Movimento Pilates",
    neighborhood: "Flaminio",
    priceLevel: "€€",
    review:
      "Movimento Pilates has built a loyal following in the Flaminio district — a neighbourhood of galleries, residential streets, and the Renzo Piano-designed MAXXI museum — by offering a consistently high standard of group instruction at mid-market pricing. The studio&apos;s programming is well-structured from beginner to advanced, and the instructor team has the rare quality of being technically strong while remaining genuinely encouraging. It&apos;s the kind of studio where beginners feel welcome and advanced practitioners feel challenged.",
    address: "Via Guido Reni 4, 00196 Roma",
    bestFor: "Structured beginner to advanced progression, group classes, community",
    signatureClass: "Movimento Flow Reformer",
    bookingTip: "The beginner reformer series runs in four-week blocks — enrol at the start of a new cycle for the best experience. Dates are posted on the website monthly.",
  },
  {
    number: "05",
    name: "The Pilates Room Rome",
    neighborhood: "Testaccio",
    priceLevel: "€€",
    review:
      "The Pilates Room arrived in Testaccio in 2022 and has become one of the more talked-about new openings in the city&apos;s fitness scene. The studio is modern and well-designed, with Merrithew reformers and a programming philosophy that blends classical Pilates with functional movement principles. The clientele skews younger than the Parioli and Prati studios, and the atmosphere is more social — which suits certain practitioners perfectly. The pricing is competitive, and the online booking system is one of the most user-friendly in Rome.",
    address: "Via Marmorata 39, 00153 Roma",
    bestFor: "Younger clientele, functional reformer, social atmosphere, value",
    signatureClass: "Functional Reformer",
    bookingTip: "Online booking opens seven days in advance. Evening classes on Tuesday and Thursday fill within 24 hours. Weekend slots are more reliably available.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Expect to pay €20–60 per class",
    body: "Rome&apos;s Pilates pricing varies considerably by model and neighbourhood. Group reformer classes at accessible studios run €20–35; semi-private sessions at premium addresses reach €50–70 per person. Carnet packages of eight to ten sessions typically save 15–20% versus drop-in rates.",
  },
  {
    heading: "August closures are universal",
    body: "Like Milan and most of Italy, Rome&apos;s independent wellness studios close for two to four weeks in August. Larger gyms with Pilates programmes may stay open, but boutique studios will be shut. Plan around this — September sees very high demand as regulars return.",
  },
  {
    heading: "Private sessions first — everywhere",
    body: "The majority of Rome&apos;s dedicated Pilates studios require at least one private intake session before you join group classes. This isn&apos;t just bureaucracy — it&apos;s part of how the method works, and studios that skip it generally deliver lower-quality group instruction as a result.",
  },
  {
    heading: "English is increasingly available",
    body: "International-facing studios in Prati, Trastevere, and Flaminio typically have at least one English-speaking instructor. Studios in more residential neighbourhoods like Parioli may be Italian-only. If this matters, check before booking.",
  },
  {
    heading: "Grip socks are non-negotiable",
    body: "Every studio in Rome requires grip socks. Bring your own — the studio-sold options are typically €14–18 and you can find better value online. A few studios offer loaner pairs for first visits, but don&apos;t count on it.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Prati",
    description:
      "Rome&apos;s most coherent modern neighbourhood — wide boulevards, good transport links, and a density of professional services that includes several excellent Pilates studios. Prati is the most practical base for consistent Pilates practice in central Rome, with studios that attract a serious, committed clientele.",
  },
  {
    name: "Parioli",
    description:
      "The capital&apos;s most affluent residential area rewards patient exploration. The studios here operate quietly — minimal marketing, word-of-mouth reputation — but the instruction quality is among the highest in the city. Expect premium pricing and an equally premium experience.",
  },
  {
    name: "Trastevere",
    description:
      "Characterful, expat-friendly, and increasingly well-served for wellness. Trastevere&apos;s studios tend toward the community-oriented and accessible, which makes the neighbourhood an excellent starting point for visitors or newcomers to the city looking to establish a practice.",
  },
  {
    name: "Flaminio & Testaccio",
    description:
      "Two distinct but increasingly dynamic neighbourhoods for Pilates. Flaminio appeals to the gallery-and-design crowd with its considered wellness offering; Testaccio is younger and more energetic, with newer studios that bring fresh programming ideas to a neighbourhood discovering its wellness identity.",
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
              Rome may not have the density of Milan&apos;s studio scene, but what the capital offers is something different: a Pilates culture with genuine depth, built slowly over two decades and now producing some of the most technically serious instruction in Italy. From the elegant semi-private studios of Parioli to the community-minded reformer spaces of Trastevere, this guide identifies the five studios that represent Rome&apos;s Pilates landscape at its best.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
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
              5 Studios · Curated & Verified
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
                <div key={tip.heading} className="flex gap-5 rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217, 194, 186, 0.3)" }}>
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
              Rome&apos;s Pilates landscape is shaped by its neighbourhoods.
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
