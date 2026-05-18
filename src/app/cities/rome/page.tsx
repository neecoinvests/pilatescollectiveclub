import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Rome (2026)",
  description:
    "Discover the best Pilates studios in Rome — from Prati reformer boutiques to Parioli wellness centres. Five curated picks for serious practitioners in 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
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
    title: "Best Pilates Studios in Rome (2026)",
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
    review:
      "Gaia Pilates Roma is one of the most critically important classical Pilates studios in Italy. Owner Gaia Faggiani studied directly under Romana Kryzanowska — Joseph Pilates&apos; chosen successor — making her a second-generation classical teacher. The studio operates entirely on original Gratz apparatus, the same brand used in the original Pilates studio in New York, and has been operating since 2007. Featured in the Gratz Pilates Studio Series, it draws Pilates professionals and purists from across Europe. Gaia is fluent in English and Italian, making the studio fully accessible to international visitors.",
    address: "Via della Lungara 26, 00165 Roma RM",
    bestFor: "Second-generation classical Pilates, Gratz apparatus, serious practitioners",
    signatureClass: "Classical Pilates Private Session (Gratz apparatus)",
    bookingTip: "Sessions are by appointment only and fill quickly, especially in tourist season. Contact the studio via gaiapilatesroma.it well in advance. Trastevere is easily reached by tram 8 from Largo Argentina.",
  },
  {
    number: "02",
    name: "Plexus",
    neighborhood: "Campo de Fiori / Jewish Ghetto",
    priceLevel: "€€€",
    review:
      "Plexus is Rome&apos;s most internationally oriented wellness studio, founded by Jonathan and Teresa with a team of multilingual, internationally certified instructors. The Plexus Method combines third-generation classical Pilates with yoga and orthopedic biomechanics into a demanding, highly effective fusion methodology. Beyond Pilates, the studio offers physiotherapy, chiropractic care, massage, and dietology under one roof. Reviewers describe it as beautiful, professional, and special — and its location on Via Arenula, minutes from Campo de&apos; Fiori and the Pantheon, makes it easy to combine with sightseeing.",
    address: "Via Arenula 53, 00186 Roma RM",
    bestFor: "Pilates-yoga fusion, multilingual instruction, expats and visitors",
    signatureClass: "Plexus Method Session (Pilates + Yoga fusion)",
    bookingTip: "English-language sessions are available — specify when booking. Contact via plexus@theplexus.it. The studio is open Monday through Saturday, 9am–8pm. Advance booking strongly recommended.",
  },
  {
    number: "03",
    name: "Pilates Muse",
    neighborhood: "Parioli",
    priceLevel: "€€€€",
    review:
      "Pilates Muse is a garden studio tucked into the elegant Parioli neighborhood, offering only private classical Pilates sessions on a complete Gratz apparatus suite — Reformer, Cadillac, Wunda Chair, High Chair, and barrels. Lead instructor Cara is praised by reviewers as one of the best professionals encountered in over 20 years of Pilates practice, for her mastery of authentic technique and her ability to deliver results. The studio carries a 5-star Yelp rating. Sessions run 55 minutes by appointment, Monday through Friday.",
    address: "Via Eleonora Duse 4, 00197 Roma RM",
    bestFor: "Private classical Pilates on full Gratz suite, discerning clients",
    signatureClass: "Classical Apparatus Private Session (55 min)",
    bookingTip: "Email info@pilatesmuse.com or call +39 338 109 6895 to schedule. Sessions are exclusively private. Street parking is available on Via Salvini and two hourly garages are nearby.",
  },
  {
    number: "04",
    name: "Postural Pilates Academy",
    neighborhood: "Porta Pia / Salario",
    priceLevel: "€€",
    review:
      "The Postural Pilates Academy&apos;s Porta Pia location is described by Rome-based fitness writers as a Pilates purist&apos;s dream, offering mat, reformer, and Cadillac classes with a strong emphasis on postural correction and classical method. The studio is on the 4th floor of a beautiful historic building near the Repubblica metro (Line A), making it among the most transit-accessible serious Pilates studios in Rome. Evening classes are particularly well-subscribed by Rome&apos;s after-work professional crowd. A second location at Via Tigre 52–54 serves the Libia neighborhood.",
    address: "Via Collina 36, 00187 Roma RM",
    bestFor: "Postural correction, classical mat/reformer/Cadillac, after-work classes",
    signatureClass: "Reformer & Cadillac Group Class",
    bookingTip: "Accessible in 7 minutes from Repubblica metro (Line A). Contact via info@pilatesroma.it or call +39 06 95 219 189. Evening classes book out fastest — reserve at least a week ahead.",
  },
  {
    number: "05",
    name: "Aletheia Studio Pilates",
    neighborhood: "Flaminio / Prati",
    priceLevel: "€€",
    review:
      "Aletheia is one of Rome&apos;s most comprehensive movement studios, with three locations across the city and a team of over 10 certified instructors covering Pilates, Yoga, Gyrotonic, Gyrokinesis, Mezières method, Blackroll, physical therapy, and osteopathy. Classes are capped at five people and the studio has a 96% recommendation rate. The Via del Vantaggio location near Flaminio — close to the MAXXI museum and Piazza del Popolo — is the most centrally convenient. All classes prioritize small group dynamics for personalized guidance.",
    address: "Via del Vantaggio 1/c, 00186 Roma RM",
    bestFor: "Multi-disciplinary movement, Gyrotonic, Pilates, yoga, small groups",
    signatureClass: "Reformer Group (max 5 students)",
    bookingTip: "Book through the Aletheia website or Fresha platform. With over 70 weekly group classes across three locations, finding a convenient slot is easier here than at most Rome studios. Flaminio location served by tram 2.",
  },
  {
    number: "06",
    name: "True Pilates Parioli",
    neighborhood: "Parioli",
    priceLevel: "€€€",
    review:
      "True Pilates Parioli is Rome&apos;s outpost of the prestigious True Pilates New York school, offering sessions on original Gratz machines and teaching the classical method through instructors authorized by the New York program. The studio also incorporates the Mezières method and osteopathy, broadening its appeal to those seeking integrated postural and therapeutic work. With a 93% TripAdvisor recommendation rate and a loyal local following in the affluent Parioli neighborhood, it is one of Rome&apos;s most credentialed Pilates destinations. Instruction is available in Italian and English.",
    address: "Viale dei Parioli 72, 00197 Roma RM",
    bestFor: "True Pilates New York lineage, Gratz apparatus, classical with therapeutic integration",
    signatureClass: "Classical Pilates on Gratz Equipment (private/duet)",
    bookingTip: "Contact the studio at pilatesparioli@gmail.com or call +39 329 109 7400. Private and duet sessions are the primary format. The Parioli neighborhood is best reached by the 360 bus line or a short taxi from Spagna metro.",
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
