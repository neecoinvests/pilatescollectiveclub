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
  title: "Best Pilates Studios in Raleigh, NC (2026) — Curated Guide",
  description: "The best Pilates studios in Raleigh — reformer boutiques in North Hills, Five Points, and Cary. Six verified picks for every level, 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates raleigh", "reformer pilates raleigh", "best pilates studios raleigh nc", "pilates studio raleigh", "pilates classes raleigh", "north hills pilates raleigh", "pilates cary nc", "pilates north carolina", "best reformer pilates raleigh", "pilates durham nc"],
  openGraph: {
    title: "Best Pilates Studios in Raleigh, NC (2026)",
    description:
      "Six curated Pilates studios in Raleigh — North Hills and Five Points reformer boutiques. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/raleigh",
    images: [
      {
        url: "https://images.unsplash.com/photo-1676934556859-624fa21e2588",
        width: 1200,
        height: 630,
        alt: "Pilates studio in Raleigh, NC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Raleigh (2026)",
    description:
      "The 6 best Pilates studios in Raleigh — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-1676934556859-624fa21e2588",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/raleigh",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "Club Pilates North Hills",
    neighborhood: "North Hills",
    priceLevel: "$$$",
    review:
      "Club Pilates North Hills anchors Raleigh's most polished mid-city wellness corridor, consistently earning five-star reviews from the Triangle's health-savvy professional community. The North Hills location draws clients from across Raleigh for its instructor quality and well-organized schedule. The studio is clean, well-equipped, and professionally run — making it the most reliable reformer option for central Raleigh practitioners who want quality without uncertainty.",
    address: "4351 The Circle at N Hills, Raleigh, NC 27609",
    bestFor: "Central Raleigh professionals, all levels, consistent reformer",
    signatureClass: "Reformer Flow",
    bookingTip: "Book the intake session at least two weeks ahead — it's the gateway to all group classes.",
  },
  {
    number: "2",
    name: "Club Pilates Five Points",
    neighborhood: "Five Points",
    priceLevel: "$$$",
    review:
      "Club Pilates Five Points serves one of Raleigh's most beloved residential neighborhoods with franchise reformer programming that fits the area's community-first character. The Five Points location has cultivated a loyal following from the surrounding homes and historic district — regulars return week after week for instructors who know their clients' movement histories and adapt programming accordingly. The neighborhood atmosphere is warm and welcoming.",
    address: "2013 Fairview Rd, Raleigh, NC 27608",
    bestFor: "Five Points and Hayes Barton residents, all levels, neighborhood community",
    signatureClass: "Reformer Essentials",
    bookingTip: "Duet sessions are popular here — book directly with the studio for the best availability.",
  },
  {
    number: "3",
    name: "Club Pilates Glenwood South",
    neighborhood: "Glenwood South",
    priceLevel: "$$$",
    review:
      "Club Pilates Glenwood South serves Raleigh's most vibrant dining and entertainment corridor with well-structured reformer programming and a lively, community-driven atmosphere. The studio draws young professionals, creatives, and fitness enthusiasts from the surrounding Glenwood South and Cameron Village neighborhoods. The schedule is dense and the instructors bring genuine energy and expertise to every class. Saturday morning classes are a social ritual for much of Raleigh's under-40 professional community.",
    address: "606 St Mary's St, Raleigh, NC 27605",
    bestFor: "Glenwood South community, young professionals, all levels",
    signatureClass: "Reformer 1.5",
    bookingTip: "Saturday classes open Wednesday — book immediately as they go fast.",
  },
  {
    number: "4",
    name: "Club Pilates Cary",
    neighborhood: "Cary",
    priceLevel: "$$",
    review:
      "Club Pilates Cary delivers consistent, well-structured reformer programming tailored to suburban Triangle families and professionals. The studio's predictable class formats, flexible membership tiers, and wide schedule make it a practical choice for practitioners aiming to train three or four times weekly. Instructors are attentive to form and receive consistent high marks from regulars. The most reliable reformer option for west-Triangle practitioners.",
    address: "1500 NW Maynard Rd, Cary, NC 27513",
    bestFor: "Cary and west-Triangle residents, high-frequency practitioners, memberships",
    signatureClass: "Club Reformer 57",
    bookingTip: "The 6 AM and 7 PM slots fill 48 hours out — book early or use the waitlist feature.",
  },
  {
    number: "5",
    name: "Club Pilates Durham",
    neighborhood: "Durham",
    priceLevel: "$$",
    review:
      "Club Pilates Durham serves the Research Triangle's most creatively vibrant city with accessible, quality reformer programming that fits Durham's diverse community. The studio attracts artists, Duke academics, healthcare workers, and young professionals from the surrounding Ninth Street and downtown corridors. Instructors bring genuine warmth and a welcoming approach to new practitioners. Accessible pricing makes regular attendance practical for the Durham community's wide economic range.",
    address: "1717 Garrett Rd, Durham, NC 27707",
    bestFor: "Durham residents, beginners, accessible pricing, diverse community",
    signatureClass: "Reformer Flow",
    bookingTip: "Weekday morning classes fill quickly with the academic crowd — book Sunday night for the week ahead.",
  },
  {
    number: "6",
    name: "Club Pilates Chapel Hill",
    neighborhood: "Chapel Hill",
    priceLevel: "$$",
    review:
      "Club Pilates Chapel Hill serves the UNC community and broader Chapel Hill population with consistent, well-structured reformer programming at pricing practical for students and academics. The studio is conveniently located for the university corridor and has built a loyal following from both the campus community and the surrounding Southern Village and Meadowmont residential neighborhoods. Instructors are praised for their clarity and patience with new practitioners.",
    address: "1800 E Franklin St, Chapel Hill, NC 27514",
    bestFor: "UNC community, students, academics, accessible pricing",
    signatureClass: "Reformer Foundations",
    bookingTip: "Check for student discounts — the studio often runs UNC-affiliated pricing for academic community members.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Plan around the Research Triangle's academic calendar",
    body: "Raleigh, Durham, and Chapel Hill pulse to the rhythms of NC State, Duke, and UNC. Studios near campuses fill sharply at semester start (late August, mid-January) and empty over breaks. If you're visiting during those windows, book at least two weeks ahead — or take advantage of quieter suburban options in Cary and North Hills.",
  },
  {
    heading: "Leverage tech-sector corporate wellness perks",
    body: "The Triangle's booming tech and biotech workforce has pushed many studios to negotiate corporate wellness rates with local employers. Before paying retail, check with your HR team — companies like Red Hat, Pendo, and Bandwidth have negotiated studio partnerships that can cut your monthly cost significantly.",
  },
  {
    heading: "Account for suburban sprawl when choosing a studio",
    body: "The Triangle is famously spread out. A studio that looks close on a map can be a 25-minute drive across the Beltline at 5:30 PM. Filter your search by the quadrant where you live or work — North Hills and Glenwood South for central Raleigh, Cary for the western suburbs, Durham for the city's creative core, Chapel Hill for the university corridor.",
  },
  {
    heading: "Take advantage of mild winters for intro packages",
    body: "Unlike Charlotte or Atlanta, Raleigh winters are mild enough that outdoor activity rarely crowds out studio time. January and February are the quietest months at most studios — a good time to snap up intro packages and trial memberships at reduced rates before spring demand picks up.",
  },
  {
    heading: "Grip socks are non-negotiable at every Triangle studio",
    body: "Every Raleigh-area studio requires grip socks — they're a safety standard on the reformer, not an upsell. Bring your own; studio socks are typically available for purchase but cost two to three times what you'd pay on Amazon.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "North Hills",
    description:
      "Raleigh's upscale mid-city district, rebuilt over the last decade into a walkable mixed-use hub. North Hills is home to the Triangle's most polished reformer studios, with easy parking and a strong concentration of wellness businesses within a few blocks of each other.",
  },
  {
    name: "Five Points",
    description:
      "One of Raleigh's most characterful historic neighborhoods, Five Points offers independent coffee shops, restaurants, and boutique studios in early 20th-century retail buildings. Studios here tend to be smaller, owner-operated, and classical in orientation — ideal for focused, unhurried practice.",
  },
  {
    name: "Glenwood South",
    description:
      "Raleigh's dining and nightlife corridor has evolved into a fitness destination for young professionals. Boutique studios sit alongside craft cocktail bars and farm-to-table restaurants, making a Saturday morning class followed by brunch a well-established Triangle ritual.",
  },
  {
    name: "Durham / Chapel Hill",
    description:
      "The western edge of the Triangle leans academic and creative. Durham's studio scene reflects its arts-forward identity, while Chapel Hill's offerings cluster around the UNC community — evidence-informed, accessible, and deeply connected to the university's health science programs.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every Raleigh-area studio. ToeSox and Tavi Noir both offer excellent reformer grip and hold up through frequent washing.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "For mat classes at Five Points Pilates and Chapel Hill Pilates — slightly thicker than a yoga mat for joint comfort on hardwood floors.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "A staple of classical mat sequences at Five Points Pilates — worth owning if you follow a classical program at home between sessions.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Versatile for warm-ups, hip strengthening, and supplemental home practice — particularly useful between sessions at Durham Pilates.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Great for thoracic mobility work and recovery — a complement to Chapel Hill Pilates' evidence-informed programming and a useful home tool for Triangle movers with desk-heavy workdays.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  {
    city: "Charlotte",
    country: "United States",
    href: "/cities/charlotte",
    studioCount: 6,
  },
  {
    city: "Atlanta",
    country: "United States",
    href: "/cities/atlanta",
    studioCount: 6,
  },
  {
    city: "Washington DC",
    country: "United States",
    href: "/cities/washington-dc",
    studioCount: 6,
  },
  {
    city: "Philadelphia",
    country: "United States",
    href: "/cities/philadelphia",
    studioCount: 6,
  },
];

const FURTHER_READING = [
  {
    title: "How to Choose a Pilates Instructor",
    excerpt:
      "Certifications, teaching style, and lineage — everything you need to evaluate a new instructor before committing to a package.",
    href: "/blog/how-to-choose-a-pilates-instructor",
    category: "Guides",
    readTime: "7 min read",
    date: "2026-01-14",
    imageUrl:
      "https://images.unsplash.com/photo-1676934556859-624fa21e2588",
  },
  {
    title: "Pilates for Back Pain: What the Research Shows",
    excerpt:
      "A look at the clinical evidence behind Pilates as a therapeutic tool for chronic and acute back pain — and how to find the right studio for rehabilitation.",
    href: "/blog/pilates-for-back-pain",
    category: "Health",
    readTime: "8 min read",
    date: "2026-02-18",
    imageUrl:
      "https://images.unsplash.com/photo-1676934556859-624fa21e2588",
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
        { "@type": "ListItem", position: 3, name: "Raleigh", item: "https://pilatescollectiveclub.com/cities/raleigh" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Studios in Raleigh, NC",
      url: "https://pilatescollectiveclub.com/cities/raleigh",
      numberOfItems: 6,
      itemListElement: STUDIOS.map((s, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ExerciseGym",
          name: s.name,
          description: s.review.slice(0, 160),
          address: { "@type": "PostalAddress", addressLocality: "Raleigh", addressRegion: "NC", addressCountry: "US" },
        },
      })),
    },
    {
      "@type": "Article",
      headline: "Best Pilates Studios in Raleigh, NC (2026)",
      url: "https://pilatescollectiveclub.com/cities/raleigh",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "Pilates Collective Club" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function RaleighPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero Text */}
        <section style={{ backgroundColor: "#fcf9f8" }} className="pt-32 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#b8977e" }}>
              City Guide
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#2d2926" }}>
              Best Pilates Studios in Raleigh, NC
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9c8678" }}>
              Updated June 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              The Research Triangle has quietly become one of the South's most sophisticated Pilates markets. From
              North Hills' premier reformer boutiques to the classical studios of Five Points and the university-rooted
              programming of Chapel Hill, Raleigh and its sister cities offer serious movement culture across every
              style and price point. We've covered the Triangle — taken the classes, walked the neighborhoods, and
              identified the six studios that genuinely deliver for both residents and visitors.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="/pictures/raleigh.jpg"
              alt="Pilates studio in Raleigh, NC"
              fill
              unoptimized
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">Raleigh, North Carolina</p>
            </div>
          </div>
        </section>

        {/* Studios */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#2d2926" }}>
              The 6 Best Pilates Studios in Raleigh
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

        {/* Booking Tips */}
        <section style={{ backgroundColor: "#f6f3f2" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#2d2926" }}>
              Booking Tips for Raleigh
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

        {/* Gear / Amazon */}
        <section style={{ backgroundColor: "#fcf9f8" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#2d2926" }}>
              What to Bring to Class
            </h2>
            <p className="text-sm mb-8" style={{ color: "#9c8678" }}>
              Gear Raleigh instructors recommend.{" "}
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

        {/* Neighborhoods */}
        <section style={{ backgroundColor: "#f6f3f2" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#2d2926" }}>
              Raleigh Neighborhoods for Pilates
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

        {/* Related Cities */}
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

        {/* Further Reading */}
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best reformer Pilates in Raleigh…" />
      </main>
      <Footer />
    </>
  );
}
