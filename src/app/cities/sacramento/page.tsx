import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Sacramento, CA (2026) — Curated & Verified",
  description:
    "Discover the 6 best Pilates studios in Sacramento, CA. From Midtown boutiques to Natomas and Fair Oaks reformer studios — expert picks, honest reviews, and booking tips for 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: [
    "pilates studios Sacramento CA",
    "best pilates Sacramento",
    "reformer pilates Sacramento",
    "Midtown Sacramento pilates",
    "Fair Oaks pilates studio",
    "Sacramento pilates classes 2026",
    "Club Pilates Sacramento",
    "East Sacramento pilates",
  ],
  openGraph: {
    title: "Best Pilates Studios in Sacramento, CA (2026) — Curated & Verified",
    description:
      "Discover the 6 best Pilates studios in Sacramento, CA. From Midtown to Natomas — expert picks and booking tips for 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/sacramento",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pilates studio in Sacramento, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Sacramento, CA (2026)",
    description:
      "The 6 best Pilates studios in Sacramento — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=630&fit=crop",
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
    priceLevel: "$$$",
    review:
      "Club Pilates Midtown Sacramento is the highest-rated reformer studio in the city's most walkable and culturally vibrant neighborhood, consistently earning five-star reviews from Sacramento's young professional and arts community. The 21st Street location is convenient for Midtown residents and accessible from the broader grid by bike or light rail. Instructors receive strong marks for their attentiveness and genuine engagement with the curriculum — above the franchise average. The schedule is dense and well-suited to the varied rhythms of Midtown's creative and government worker population.",
    address: "1330 21st St #101, Sacramento, CA 95811",
    bestFor: "Midtown residents, all levels, urban professionals",
    signatureClass: "Reformer Flow",
    bookingTip: "Lunchtime and evening classes fill fastest with the Midtown professional crowd — book 48 hours ahead.",
  },
  {
    number: "2",
    name: "Club Pilates Fair Oaks",
    neighborhood: "Fair Oaks / Carmichael",
    priceLevel: "$$$",
    review:
      "Club Pilates Fair Oaks serves Sacramento's northeast suburban corridor with a well-run franchise studio that consistently meets the community's health-conscious expectations. The Fair Oaks Boulevard location draws from the surrounding Carmichael, Orangevale, and Fair Oaks residential neighborhoods — a wellness-invested, family-oriented demographic that holds the studio to real standards. The schedule is wide, the instructor team is experienced, and membership pricing makes regular attendance financially practical for suburban families and professionals.",
    address: "2529 Fair Oaks Blvd, Sacramento, CA 95825",
    bestFor: "Northeast-corridor residents, families, consistent reformer programming",
    signatureClass: "Club Reformer 57",
    bookingTip: "Morning drop-off slots are the first to fill with the family-oriented Fair Oaks demographic — book two days ahead.",
  },
  {
    number: "3",
    name: "Club Pilates Natomas",
    neighborhood: "Natomas",
    priceLevel: "$$",
    review:
      "Club Pilates Natomas brings accessible, quality reformer programming to Sacramento's rapidly growing north-side suburban corridor. The Natomas community is young, active, and diverse — a mix of state government workers, healthcare professionals, and families who want a convenient, well-priced studio close to home. The studio earns strong reviews for its welcoming atmosphere and instructors who are genuinely patient with new clients. Membership pricing is among the most competitive in the Sacramento metro.",
    address: "2860 Del Paso Rd #200, Sacramento, CA 95834",
    bestFor: "Natomas and north-side residents, beginners, accessible memberships",
    signatureClass: "Reformer Foundations",
    bookingTip: "The intro 3-class package is the best way to audit the studio before committing to a membership.",
  },
  {
    number: "4",
    name: "P2O Hot Pilates & Fitness",
    neighborhood: "Midtown / Downtown",
    priceLevel: "$$$",
    review:
      "P2O Hot Pilates is Sacramento's most distinctive independent studio — a heated reformer format that combines classical Pilates sequencing with the detoxifying and mobility-enhancing effects of a warm practice environment. The P Street location is steps from the Midtown grid, drawing a loyal following from Sacramento's wellness community who appreciate the studio's commitment to pushing the method beyond its standard parameters. Classes are small, instructors are attentive, and the heated environment adds a challenge that separates serious practitioners from casual ones. One of Sacramento's most talked-about studios.",
    address: "2012 P St, Sacramento, CA 95811",
    bestFor: "Intermediate to advanced practitioners, heated reformer, Midtown community",
    signatureClass: "Hot Pilates Reformer",
    bookingTip: "Classes are capped small — book the new-client intro to understand the heated format before committing to a full session.",
  },
  {
    number: "5",
    name: "Thrive Movement Arts",
    neighborhood: "Arden-Arcade",
    priceLevel: "$$$",
    review:
      "Thrive Movement Arts is Sacramento's most thoughtfully curated independent movement studio — a space that takes Pilates seriously as both a physical discipline and a movement education practice. The El Camino Avenue location serves the Arden-Arcade and Carmichael communities with small-group reformer classes capped for quality, alongside mat work and apparatus sessions for practitioners who want to develop beyond the standard group format. Instructors bring genuine depth of training and a teaching style that prioritizes body understanding over class throughput.",
    address: "4128 El Camino Ave, Sacramento, CA 95821",
    bestFor: "Movement-educated practitioners, small-group reformer, Arden-Arcade community",
    signatureClass: "Apparatus & Reformer",
    bookingTip: "Private and semi-private sessions book quickly — contact the studio directly to get on the schedule.",
  },
  {
    number: "6",
    name: "PILAX Pilates",
    neighborhood: "South Sacramento / Land Park",
    priceLevel: "$$",
    review:
      "PILAX Pilates is one of Sacramento's most welcoming independent studios, serving the South Sacramento and Land Park communities with accessible, quality reformer programming at pricing that reflects the neighborhood's diverse economic profile. The studio has built a genuinely inclusive community — practitioners of all ages, backgrounds, and fitness levels — and the instruction is clear, grounded, and genuinely attentive to individual needs. An excellent entry point for Sacramento practitioners who are new to the reformer format and want a non-intimidating environment to learn.",
    address: "4500 Freeport Blvd, Sacramento, CA 95822",
    bestFor: "Beginners, South Sacramento and Land Park residents, accessible pricing",
    signatureClass: "Reformer Flow",
    bookingTip: "Drop-in rates are among the most accessible in Sacramento — great for sampling before committing to a membership.",
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
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "Essential for mat classes and Sacramento's extended warm seasons when outdoor practice is appealing.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in Sacramento's classical and independent studios. Ideal for at-home practice.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Portable and practical for home practice on Sacramento's many hot summer days when outdoor movement is difficult.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Post-class fascia release — especially useful for Sacramento's cycling and running community.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
              Updated June 2026 · 6 studios reviewed
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
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1400&h=840&fit=crop"
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

        <section className="px-6 pb-20">
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

        <section style={{ backgroundColor: "#fcf9f8" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
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
