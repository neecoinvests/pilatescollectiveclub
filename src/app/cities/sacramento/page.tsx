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
  title: "Best Pilates Studios in Sacramento, CA (2026) — Curated Guide",
  description: "The best Pilates studios in Sacramento — reformer and hot Pilates in Midtown, East Sacramento, Arden-Arcade and Land Park. Six verified picks, 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates sacramento", "reformer pilates sacramento", "best pilates studios sacramento ca", "pilates studio sacramento", "pilates classes sacramento", "midtown pilates sacramento", "east sacramento pilates", "pilates california", "best reformer pilates sacramento", "pilates roseville ca"],
  openGraph: {
    title: "Best Pilates Studios in Sacramento, CA (2026)",
    description:
      "Six curated Pilates studios in Sacramento — Midtown and East Sacramento reformer boutiques. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/sacramento",
    images: [
      {
        url: "https://images.unsplash.com/photo-1606461978153-5d15a8067fd7?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pilates studio in Sacramento, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Sacramento (2026)",
    description:
      "The 6 best Pilates studios in Sacramento — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-1606461978153-5d15a8067fd7?w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/sacramento",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "Club Pilates Midtown Sacramento",
    neighborhood: "Midtown",
    priceLevel: "$$",
    review: "Club Pilates Midtown on 21st Street is the brand's most central Sacramento studio, with levelled group reformer classes.",
    caveat: "a franchise format — consistent, but less personalised than an independent studio.",
    address: "1330 21st St, Ste 101, Sacramento, CA 95811",
    bestFor: "Midtown residents wanting structured reformer classes",
    signatureClass: "Reformer Flow",
    bookingTip: "Use the intro offer before committing to a membership.",
  },
  {
    number: "2",
    name: "P2O Hot Pilates & Fitness",
    neighborhood: "Midtown / Downtown",
    priceLevel: "$$",
    review: "P2O on P Street describes itself as Sacramento's first and only dedicated hot Pilates studio.",
    caveat: "heated classes are demanding — hydrate well, and check with your doctor if heat is a concern.",
    address: "2012 P St, Sacramento, CA 95811",
    bestFor: "Hot Pilates in Midtown",
    signatureClass: "Hot Pilates",
    bookingTip: "Arrive early to acclimatise to the heat.",
  },
  {
    number: "3",
    name: "DOMA Studio",
    neighborhood: "Midtown",
    priceLevel: "$$",
    review: "DOMA is an independent, locally owned heated yoga and Pilates studio in Midtown, founded by Katlyn Matic in 2018. Its classes, including Pilates core and heated power Pilates, run at 93° with humidification.",
    caveat: "heated, humid classes — not for everyone.",
    address: "—",
    bestFor: "Heated Pilates and yoga in Midtown",
    signatureClass: "Heated Power Pilates",
    bookingTip: "Bring water and a towel.",
  },
  {
    number: "4",
    name: "Paz Pilates Studio",
    neighborhood: "East Sacramento (McKinley Blvd)",
    priceLevel: "$$$",
    review: "Paz Pilates Studio is an independent studio on McKinley Boulevard offering reformer Pilates, mat Pilates and private sessions.",
    caveat: "we could not confirm the exact street number independently — check the studio's website.",
    address: "—",
    bestFor: "Independent reformer and privates in East Sac",
    signatureClass: "Reformer Pilates",
    bookingTip: "Start with a private session if you are new to the reformer.",
  },
  {
    number: "5",
    name: "Thrive Movement Arts",
    neighborhood: "Arden-Arcade",
    priceLevel: "$$",
    review: "Thrive Movement Arts on El Camino Avenue offers reformer Pilates classes and is listed on ClassPass, a convenient option for Arden-Arcade and Carmichael residents.",
    caveat: "limited published detail about class formats — try a single class first.",
    address: "4128 El Camino Ave, Sacramento, CA 95821",
    bestFor: "Reformer Pilates in Arden-Arcade",
    signatureClass: "Reformer Pilates",
    bookingTip: "Compare the intro offer with a single class.",
  },
  {
    number: "6",
    name: "PILAX Pilates",
    neighborhood: "Land Park / South Sacramento",
    priceLevel: "$$",
    review: "PILAX is a Pilates studio on Freeport Boulevard, convenient for Land Park and south Sacramento.",
    caveat: "limited published detail about class formats — try a single class first.",
    address: "4500 Freeport Blvd, Sacramento, CA 95822",
    bestFor: "Pilates near Land Park",
    signatureClass: "Reformer Pilates",
    bookingTip: "Check the schedule for reformer-specific classes.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Sacramento's government calendar shapes studio demand",
    body: "As the state capital, Sacramento's professional population follows California's legislative calendar. Studios near Midtown and Downtown see heightened demand during legislative sessions (January through September) and quieter periods during recess. If you're visiting during an active session period, book popular slots at least a week ahead.",
  },
  {
    heading: "Summer heat sends practitioners indoors",
    body: "Sacramento summers are hot and dry — temperatures regularly exceed 100°F from June through September. The Central Valley heat makes studio classes the preferred movement option during these months, and demand for early morning slots (before 9 AM) and evening slots (after 6 PM) increases significantly. Book those windows in advance.",
  },
  {
    heading: "The Sacramento grid makes central studios accessible",
    body: "Sacramento's famous grid street system and flat terrain make cycling to Midtown and central studios genuinely practical for much of the year. Studios on the grid are often faster to reach by bike or light rail than by car during commute hours — factor this into your studio selection.",
  },
  {
    heading: "Intro packages are the most cost-effective entry point",
    body: "Every Sacramento studio offers a new-client introductory rate. Use it. Three sessions at an introductory price gives you enough exposure to judge instructor quality, community fit, and scheduling practicality before committing to a monthly membership.",
  },
  {
    heading: "Grip socks are required at every reformer studio",
    body: "Universal across Sacramento's reformer market. Bring your own — full-toe grip socks from Amazon cost a fraction of front-desk retail prices at every studio in the city.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Midtown & Downtown",
    description:
      "Sacramento's most walkable and culturally vibrant neighborhoods anchor the city's independent studio scene. Midtown's grid of coffee shops, restaurants, and wellness businesses creates a natural community around regular studio practice. Accessible by light rail from across the metro.",
  },
  {
    name: "Fair Oaks & Carmichael",
    description:
      "Sacramento's northeast suburban corridor supports a strong franchise studio presence serving the area's established professional and family population. Well-equipped studios with wide schedules and practical membership tiers — the natural choice for northeast-side residents.",
  },
  {
    name: "Natomas & North Sacramento",
    description:
      "The rapidly growing north side has developed a strong accessible studio culture that serves its young, diverse, and family-oriented population. Studios here prioritize welcoming atmospheres and practical pricing for practitioners new to the method.",
  },
  {
    name: "Arden-Arcade & Land Park",
    description:
      "The central and south Sacramento corridors support independent studios that serve established residential communities with genuine quality instruction. Less flashy than Midtown boutiques, but consistently strong in teaching depth and community warmth.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in Sacramento. Full-toe grip socks are the universal standard.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "Essential for mat classes and Sacramento's extended warm seasons when outdoor practice is appealing.",
    price: "From $18",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in Sacramento's classical and independent studios. Ideal for at-home practice.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Portable and practical for home practice on Sacramento's many hot summer days when outdoor movement is difficult.",
    price: "From $10",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Post-class fascia release — especially useful for Sacramento's cycling and running community.",
    price: "From $13",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
];

const HOME_REFORMERS = [
  { tag: "Budget Pick", name: "Stamina AeroPilates 287", note: "An accessible entry point to home reformer work — three bungee-cord resistance, a padded footbar and an adjustable headrest.", price: "$256.49", url: "https://www.amazon.com/dp/B01FMODVAE?tag=pilatescollective-20" },
  { tag: "Mid-Range Pick", name: "AeroPilates Pro XP 557", note: "AeroPilates' top-of-the-range home reformer, a step up for practitioners training several times a week.", price: "$1,330", url: "https://www.amazon.com/dp/B0012TJI8S?tag=pilatescollective-20" },
  { tag: "Buy Once", name: "Balanced Body Allegro Stretch Reformer", note: "Studio-grade and made to order — an anodised aluminium frame, nonslip standing platform and 36-inch adjustable footbar, with a longer, wider carriage for taller users.", price: "$3,710", url: "https://www.amazon.com/dp/B093R8DYC9?tag=pilatescollective-20" },
];

const RELATED_CITIES = [
  { city: "San Francisco", country: "United States", href: "/cities/san-francisco", studioCount: 6 },
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 6 },
  { city: "Portland", country: "United States", href: "/cities/portland", studioCount: 6 },
  { city: "Seattle", country: "United States", href: "/cities/seattle", studioCount: 6 },
];

const FURTHER_READING = [
  {
    title: "How to Find a Good Pilates Studio",
    excerpt:
      "What to look for in a studio, and the questions worth asking before you commit to a membership.",
    href: "/blog/how-to-find-a-good-pilates-studio",
    category: "Guide",
    readTime: "6 min read",
    date: "2026-02-10",
    imageUrl:
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=450&fit=crop",
  },
  {
    title: "Classical vs Contemporary Pilates",
    excerpt:
      "The split between Joseph Pilates' original system and modern interpretations — what it means for your practice.",
    href: "/blog/classical-vs-contemporary-pilates",
    category: "Method",
    readTime: "8 min read",
    date: "2026-01-05",
    imageUrl:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=450&fit=crop",
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
        { "@type": "ListItem", position: 3, name: "Sacramento", item: "https://pilatescollectiveclub.com/cities/sacramento" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Studios in Sacramento, CA",
      url: "https://pilatescollectiveclub.com/cities/sacramento",
      numberOfItems: 6,
      itemListElement: STUDIOS.map((s, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ExerciseGym",
          name: s.name,
          description: s.review.slice(0, 160),
          address: { "@type": "PostalAddress", streetAddress: s.address, addressLocality: "Sacramento", addressRegion: "CA", addressCountry: "US" },
        },
      })),
    },
    {
      "@type": "Article",
      headline: "Best Pilates Studios in Sacramento, CA (2026)",
      url: "https://pilatescollectiveclub.com/cities/sacramento",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "Pilates Collective Club" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function SacramentoPage() {
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
              Best Pilates Studios in Sacramento, CA
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9c8678" }}>
              Updated October 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              Sacramento is California's capital and one of the state's most underrated wellness cities. The
              farm-to-fork culture, flat grid that's built for cycling, and a professional class drawn from
              state government, healthcare, and a growing tech sector have created a Pilates market that punches
              well above its profile. From Midtown's walkable independent studios to the suburban franchise
              options serving Natomas and Fair Oaks, Sacramento's Pilates scene in 2026 is thoughtful, diverse,
              and increasingly sophisticated. Here are the six studios worth your time.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="https://images.unsplash.com/photo-1606461978153-5d15a8067fd7?w=1400&h=840&fit=crop"
              alt="Pilates studio in Sacramento, CA"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">Sacramento, California</p>
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
              Gear Sacramento instructors recommend.{" "}
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
              The 6 Best Pilates Studios in Sacramento
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
              Booking Tips for Sacramento
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
              Sacramento Neighborhoods for Pilates
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
          searchPlaceholder="Ask: best reformer Pilates in Sacramento…"
        />
      </main>
      <Footer />
    </>
  );
}
