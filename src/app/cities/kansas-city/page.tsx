import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Kansas City, MO (2026) — Curated Guide",
  description: "The best Pilates studios in Kansas City — reformer boutiques in the Plaza, Westport, and Leawood. Six verified picks, 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates kansas city", "reformer pilates kansas city", "best pilates studios kansas city", "pilates studio kc", "pilates classes kansas city", "plaza pilates kc", "westport pilates", "pilates missouri", "best reformer pilates kansas city", "pilates leawood ks"],
  openGraph: {
    title: "Best Pilates Studios in Kansas City, MO (2026)",
    description:
      "Curated Pilates studios in Kansas City — Plaza and Westport reformer picks. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/kansas-city",
    images: [
      {
        url: "https://images.unsplash.com/photo-1613069344419-ce7e1e869daa?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pilates studio in Kansas City",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Kansas City (2026)",
    description:
      "The 6 best Pilates studios in Kansas City — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-1613069344419-ce7e1e869daa?w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/kansas-city",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "Pilates Stance",
    neighborhood: "Kansas City, MO",
    priceLevel: "$$$",
    review: "Pilates Stance is a pure Pilates studio where every instructor is certified through Romana's Pilates — the programme that continues Joseph and Clara Pilates' teaching as directly as possible. For people who want authentic classical method rather than a reformer workout, it is the most traditional option in the metro.",
    caveat: "classical teaching is precise and methodical — and we could not confirm the current street address independently, so check the studio's website before visiting.",
    address: "—",
    bestFor: "Authentic classical Pilates (Romana's lineage)",
    signatureClass: "Classical Reformer",
    bookingTip: "Contact the studio directly for private-session availability.",
  },
  {
    number: "2",
    name: "Club Pilates Country Club Plaza",
    neighborhood: "Country Club Plaza / Midtown",
    priceLevel: "$$$",
    review: "Club Pilates Country Club Plaza on West 48th Street sits at the west side of the Plaza, convenient for midtown residents and anyone combining a class with the Plaza's shops and restaurants. It runs the brand's levelled group reformer system.",
    caveat: "a franchise format — consistent, but less personalised than an independent studio.",
    address: "610 W 48th St, Kansas City, MO 64112",
    bestFor: "Structured reformer classes at the Plaza",
    signatureClass: "Reformer Flow",
    bookingTip: "Lunchtime classes fill early with midtown professionals — book ahead.",
  },
  {
    number: "3",
    name: "Pilates 1901",
    neighborhood: "Kansas City, KS (Rosedale)",
    priceLevel: "$$",
    review: "Pilates 1901 is a STOTT Pilates and fitness studio on West 43rd Avenue in Kansas City, Kansas. It offers personal training and small-group classes across mat, reformer, tower and ball, plus Pilates cardio and tramp stretch, restore and stretch, aerial hammock inversion work and Yamuna body rolling — one of the broadest Pilates menus in the metro.",
    caveat: "a wide-ranging fitness menu — choose apparatus classes specifically if you want classic Pilates work.",
    address: "1901 W 43rd Ave, Kansas City, KS 66103",
    bestFor: "STOTT-based small groups and personal training",
    signatureClass: "STOTT Reformer",
    bookingTip: "Start with a personal training session to find the right small-group class.",
  },
  {
    number: "4",
    name: "The Body Lab",
    neighborhood: "Prairie Village",
    priceLevel: "$$$",
    review: "The Body Lab on The Mall in Prairie Village specialises in Lagree Fitness on the Megaformer, and it holds a 5.0 rating on ClassPass. It is the go-to Lagree option for Prairie Village and the Kansas side of the state line.",
    caveat: "Lagree is very different from Pilates — slower, heavier and sweatier.",
    address: "11 On The Mall, Prairie Village, KS 66208",
    bestFor: "Lagree on the Megaformer",
    signatureClass: "Lagree Megaformer class",
    bookingTip: "New to Lagree? Tell the instructor — the first class has a learning curve.",
  },
  {
    number: "5",
    name: "Club Pilates Prairie Village",
    neighborhood: "Prairie Village",
    priceLevel: "$$",
    review: "Club Pilates Prairie Village on West 83rd Street offers small-group and private reformer training and is rated 4.8 on ClassPass. It is convenient for Prairie Village, Leawood and the northern Johnson County suburbs.",
    caveat: "a franchise studio — reliable structure, less individual programming.",
    address: "3905 W 83rd St, Prairie Village, KS 66208",
    bestFor: "Johnson County residents wanting structured reformer classes",
    signatureClass: "Reformer Flow",
    bookingTip: "Weekend mornings fill first — book by Thursday.",
  },
  {
    number: "6",
    name: "BODYBAR Pilates South Overland Park",
    neighborhood: "South Overland Park",
    priceLevel: "$$",
    review: "BODYBAR Pilates opened its South Overland Park studio in the Deer Creek Woods shopping centre in April 2024. Its 40–50 minute classes target strength, balance, toning and flexibility using jump boards, tower springs and stability chairs. At opening, single classes were $32 and memberships ran from $99 (four classes a month) to $199 (unlimited).",
    caveat: "a franchise brand — upbeat and consistent, but less individual than a private-session studio.",
    address: "13340 Metcalf Ave, Overland Park, KS 66213",
    bestFor: "Upbeat reformer classes in southern Johnson County",
    signatureClass: "BODYBAR Reformer",
    bookingTip: "BODYBAR also has a Lenexa studio — check both schedules.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "KC's winters and summers both favor a studio commitment",
    body: "Kansas City gets both brutal winters and sweltering summers — two seasons that push outdoor exercisers indoors and create year-round demand spikes at reformer studios. Practitioners who build indoor studio routines maintain them across seasons. The best time to establish a recurring slot is September or early spring.",
  },
  {
    heading: "The Missouri-Kansas split matters for scheduling",
    body: "The KC metro spans two states, and a surprisingly large number of practitioners live in one state and work in the other. Studios in Prairie Village, close to State Line Road, and along the Metcalf corridor serve both sides easily. Factor your daily route across the state line into your studio choice.",
  },
  {
    heading: "Johnson County has the highest density of fitness investment in the metro",
    body: "Overland Park, Leawood, Prairie Village, and the surrounding Johnson County suburbs have developed a dense wellness infrastructure that reflects the area's above-average household income and health-consciousness. Studios in this corridor maintain high instruction standards to compete for a sophisticated client base.",
  },
  {
    heading: "Intro packages are universal — use them before committing",
    body: "Every Kansas City studio offers new-client introductory rates. Use the intro to evaluate instructor quality and community fit before committing to a membership. Classical studios (Pilates Stance) expect a private intake session first — it is not optional.",
  },
  {
    heading: "Grip socks are required at every reformer and BODYBAR studio",
    body: "Universal across the Kansas City reformer market. Full-toe grip socks — bring your own rather than paying front-desk retail prices.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Country Club Plaza & Midtown",
    description:
      "KC's most iconic commercial district anchors the city-core Pilates scene, with both franchise and boutique studios serving the surrounding midtown residential neighborhoods and the Plaza's professional and shopping traffic.",
  },
  {
    name: "Waldo & Brookside",
    description:
      "Kansas City's most character-rich south-city neighborhoods support independent studios that serve a health-invested, community-oriented residential population with specialized programming and genuine instructor depth.",
  },
  {
    name: "Prairie Village & Overland Park",
    description:
      "The Johnson County corridor has developed the metro's highest density of reformer studios — a reflection of the area's affluent, health-conscious suburban population that holds studios to real standards and sustains them with consistent membership.",
  },
  {
    name: "South Overland Park & Leawood",
    description:
      "The southern Johnson County suburbs are the fastest-growing segment of the KC fitness market, with new boutique studios arriving to serve a large residential population that has historically underserved for premium fitness options.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in Kansas City. Full-toe grip socks are the universal standard.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "Essential for Kansas City's mat classes and home practice through the city's extreme winters and summers.",
    price: "From $18",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in Kansas City's classical studios. Useful for at-home reinforcement between sessions.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Recommended for home practice between the intensive sessions at KC's classical studios.",
    price: "From $10",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Post-class fascia release — standard recovery tool across Kansas City's reformer and BODYBAR studios.",
    price: "From $13",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
];

const HOME_REFORMERS = [
  { tag: "Budget Pick", name: "Stamina AeroPilates 287", note: "An accessible entry point to home reformer work — three bungee-cord resistance, a padded footbar and an adjustable headrest.", price: "$359", url: "https://www.amazon.com/dp/B01FMODVAE?tag=pilatescollective-20" },
  { tag: "Mid-Range Pick", name: "AeroPilates Pro XP 557", note: "AeroPilates' top-of-the-range home reformer, a step up for practitioners training several times a week.", price: "$1,330", url: "https://www.amazon.com/dp/B0012TJI8S?tag=pilatescollective-20" },
  { tag: "Buy Once", name: "Balanced Body Allegro Stretch Reformer", note: "Studio-grade and made to order — an anodised aluminium frame, nonslip standing platform and 36-inch adjustable footbar, with a longer, wider carriage for taller users.", price: "$3,710", url: "https://www.amazon.com/dp/B093R8DYC9?tag=pilatescollective-20" },
];

const RELATED_CITIES = [
  { city: "St. Louis", country: "United States", href: "/cities/st-louis", studioCount: 6 },
  { city: "Denver", country: "United States", href: "/cities/denver", studioCount: 6 },
  { city: "Dallas", country: "United States", href: "/cities/dallas", studioCount: 6 },
  { city: "Minneapolis", country: "United States", href: "/cities/minneapolis", studioCount: 6 },
];

const FURTHER_READING = [
  {
    title: "The Beginner's Guide to Reformer Pilates",
    excerpt:
      "What to expect in your first reformer class, how to choose a studio, and what to bring.",
    href: "/blog/beginners-guide-to-reformer-pilates",
    category: "Beginner Guide",
    readTime: "8 min read",
    date: "2026-03-01",
    imageUrl:
      "https://images.unsplash.com/photo-1616439069669-66dbe74bcdad?w=800&h=450&fit=crop",
  },
  {
    title: "Classical vs Contemporary Pilates",
    excerpt:
      "The real differences between classical and contemporary approaches — and how to choose the right method for your goals.",
    href: "/blog/classical-vs-contemporary-pilates",
    category: "Education",
    readTime: "7 min read",
    date: "2026-01-01",
    imageUrl:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=450&fit=crop",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", position: 2, name: "Cities", item: "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", position: 3, name: "Kansas City", item: "https://pilatescollectiveclub.com/cities/kansas-city" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Studios in Kansas City",
      url: "https://pilatescollectiveclub.com/cities/kansas-city",
      numberOfItems: 6,
      itemListElement: STUDIOS.map((s, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ExerciseGym",
          name: s.name,
          description: s.review.slice(0, 160),
          address: { "@type": "PostalAddress", streetAddress: s.address, addressLocality: "Kansas City", addressRegion: "MO", addressCountry: "US" },
        },
      })),
    },
    {
      "@type": "Article",
      headline: "Best Pilates Studios in Kansas City (2026)",
      url: "https://pilatescollectiveclub.com/cities/kansas-city",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "Pilates Collective Club" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function KansasCityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section style={{ backgroundColor: "#fcf9f8" }} className="pt-32 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#b8977e" }}>
              City Guide
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#2d2926" }}>
              Best Pilates Studios in Kansas City
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9c8678" }}>
              Updated October 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              Kansas City's Pilates market spans two states and covers some of the most contrasting
              fitness geographies in the Midwest — from a Romana's Pilates® classical studio to
              STOTT-based small groups in Kansas City, Kansas, Lagree in Prairie Village and BODYBAR
              in south Overland Park. The Country Club Plaza franchise anchors the city core. If you know where to look, Kansas
              City in 2026 delivers quality reformer instruction at every level and price point.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="https://images.unsplash.com/photo-1613069344419-ce7e1e869daa?w=1400&h=840&fit=crop"
              alt="Pilates studio in Kansas City"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">Kansas City, Missouri & Kansas</p>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#fdf3ec", borderTop: "1px solid rgba(184,151,126,0.35)", borderBottom: "1px solid rgba(184,151,126,0.35)" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#b8977e" }}>
              Before You Go
            </p>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#2d2926" }}>
              What to Bring to Class
            </h2>
            <p className="text-sm mb-8" style={{ color: "#9c8678" }}>
              Gear Kansas City instructors recommend.{" "}
              <Link href="/affiliate-disclosure" className="underline">Affiliate disclosure</Link>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {GEAR.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block rounded-xl p-5 border transition-shadow hover:shadow-md"
                  style={{ borderColor: "#e8ddd6", backgroundColor: "#fff" }}
                >
                  <p className="font-semibold mb-1" style={{ color: "#2d2926" }}>{item.name}</p>
                  <p className="text-sm mb-3" style={{ color: "#5c4f47" }}>{item.note}</p>
                  <p className="text-sm font-semibold" style={{ color: "#b8977e" }}>{item.price} on Amazon →</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#2d2926" }}>
              The 6 Best Pilates Studios in Kansas City
            </h2>
            <p className="mb-10" style={{ color: "#9c8678" }}>
              Ranked by quality, instructor expertise, and overall experience.
            </p>
            <div className="space-y-10">
              {STUDIOS.map((studio) => (
                <StudioListing key={studio.name} {...studio} />
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#f6f3f2" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#2d2926" }}>
              Booking Tips for Kansas City
            </h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((tip) => (
                <div key={tip.heading} className="flex gap-4">
                  <div className="w-1 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: "#b8977e", minHeight: "100%" }} />
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: "#2d2926" }}>{tip.heading}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#5c4f47" }}>{tip.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#f6f3f2" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#2d2926" }}>
              Kansas City Neighborhoods for Pilates
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {NEIGHBORHOODS.map((n) => (
                <div key={n.name} className="rounded-xl p-6" style={{ backgroundColor: "#fff", border: "1px solid #e8ddd6" }}>
                  <h3 className="font-semibold mb-2" style={{ color: "#2d2926" }}>{n.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5c4f47" }}>{n.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#f6f3f2" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#b8977e" }}>
              Prefer To Train At Home?
            </p>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#2d2926" }}>
              Not Convinced? How About Pilates at Home?
            </h2>
            <p className="text-sm mb-8" style={{ color: "#9c8678" }}>
              A home reformer gets you a genuine session on your own schedule.{" "}
              <Link href="/blog/best-home-pilates-reformer" className="underline">See the full reformer guide</Link>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {HOME_REFORMERS.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block rounded-xl p-5 border transition-shadow hover:shadow-md"
                  style={{ borderColor: "#e8ddd6", backgroundColor: "#fff" }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#b8977e" }}>{item.tag}</p>
                  <p className="font-semibold mb-1" style={{ color: "#2d2926" }}>{item.name}</p>
                  <p className="text-sm mb-3" style={{ color: "#5c4f47" }}>{item.note}</p>
                  <p className="text-sm font-semibold" style={{ color: "#b8977e" }}>{item.price} on Amazon →</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#fcf9f8" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#2d2926" }}>
              Explore More US Cities
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {RELATED_CITIES.map((c) => (
                <CityCard key={c.city} {...c} />
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#f6f3f2" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#2d2926" }}>
              Further Reading
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {FURTHER_READING.map((a) => (
                <ArticleCard key={a.href} {...a} />
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Find Pilates near you"
          subtitle="Use our AI Finder to discover studios in any city — coming soon."
          showSearch
          searchPlaceholder="Ask: best reformer Pilates in Kansas City…"
        />
      </main>
      <Footer />
    </>
  );
}
