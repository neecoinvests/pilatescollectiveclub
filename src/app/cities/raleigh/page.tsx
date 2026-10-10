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
  title: "Best Pilates Studios in Raleigh, NC (2026) — Curated Guide",
  description: "The best Pilates studios in Raleigh — top-rated reformer boutiques plus Club Pilates across Raleigh, Durham and Chapel Hill. Six verified picks, 2026.",
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
    name: "BK Pilates Raleigh",
    neighborhood: "Raleigh",
    priceLevel: "$$$",
    review: "BK Pilates runs reformer classes in a clean, focused boutique setting and has become a go-to for Triangle professionals, with a perfect 5.0 rating from more than 4,100 reviews on ClassPass. The Carolinas-based brand also has studios in Charlotte and beyond.",
    caveat: "we could not confirm the exact street address independently — check the booking app for directions.",
    address: "—",
    bestFor: "Highly rated boutique reformer",
    signatureClass: "Group Reformer",
    bookingTip: "Prime-time classes fill quickly — book a few days ahead.",
  },
  {
    number: "2",
    name: "JETSET Pilates — Downtown Raleigh",
    neighborhood: "Downtown",
    priceLevel: "$$$",
    review: "JETSET's Downtown Raleigh studio has more reformer-specific reviews than any other studio in the Triangle on ClassPass (rated 4.6), bringing the Miami-founded brand's fast, music-driven reformer classes to downtown.",
    caveat: "high-energy classes — not slow classical technique.",
    address: "—",
    bestFor: "Music-driven reformer downtown",
    signatureClass: "JETSET Reformer",
    bookingTip: "Weekend mornings book out — use the app as soon as the schedule opens.",
  },
  {
    number: "3",
    name: "Studio 104",
    neighborhood: "Rolesville",
    priceLevel: "$$",
    review: "Studio 104 in Rolesville earns the top spot in ClassPass's Triangle reformer ranking (4.9) through an intimate studio experience that larger reformer chains cannot replicate.",
    caveat: "Rolesville is north-east of Raleigh — best for residents on that side of the city.",
    address: "—",
    bestFor: "Intimate reformer classes north-east of Raleigh",
    signatureClass: "Reformer Pilates",
    bookingTip: "Small classes fill — book ahead.",
  },
  {
    number: "4",
    name: "Club Pilates Midtown Raleigh",
    neighborhood: "Midtown / North Hills",
    priceLevel: "$$",
    review: "Club Pilates Midtown Raleigh on Sherman Oak Place is the brand's closest studio to North Hills, with levelled group reformer classes.",
    caveat: "a franchise format — consistent, but less personalised than an independent studio.",
    address: "2920 Sherman Oak Place, Suite 130, Raleigh, NC 27609",
    bestFor: "North Hills and Midtown residents",
    signatureClass: "Reformer Flow",
    bookingTip: "Use the intro offer before committing to a membership.",
  },
  {
    number: "5",
    name: "Club Pilates Durham",
    neighborhood: "Durham",
    priceLevel: "$$",
    review: "Club Pilates Durham on NC 54 serves south Durham and the RTP side of the Triangle with levelled group reformer classes.",
    caveat: "a franchise format — consistent, but less personalised than an independent studio.",
    address: "1125 NC 54, Suite 404, Durham, NC 27707",
    bestFor: "Durham and RTP residents",
    signatureClass: "Reformer Flow",
    bookingTip: "Lunchtime classes suit RTP commuters — book the night before.",
  },
  {
    number: "6",
    name: "Club Pilates Chapel Hill",
    neighborhood: "Chapel Hill",
    priceLevel: "$$",
    review: "Club Pilates Chapel Hill on East Franklin Street serves Chapel Hill and Carrboro with levelled group reformer classes.",
    caveat: "a franchise format — consistent, but less personalised than an independent studio.",
    address: "1800 E Franklin St, #9, Chapel Hill, NC 27514",
    bestFor: "Chapel Hill and Carrboro residents",
    signatureClass: "Reformer Flow",
    bookingTip: "Student-heavy schedules make mid-morning classes easier to get.",
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
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "For mat classes at Five Points Pilates and Chapel Hill Pilates — slightly thicker than a yoga mat for joint comfort on hardwood floors.",
    price: "From $18",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "A staple of classical mat sequences at Five Points Pilates — worth owning if you follow a classical program at home between sessions.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Versatile for warm-ups, hip strengthening, and supplemental home practice — particularly useful between sessions at Durham Pilates.",
    price: "From $10",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Great for thoracic mobility work and recovery — a complement to Chapel Hill Pilates' evidence-informed programming and a useful home tool for Triangle movers with desk-heavy workdays.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
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
              Updated October 2026 · 6 studios reviewed
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
        <section style={{ backgroundColor: "#fdf3ec", borderTop: "1px solid rgba(184,151,126,0.35)", borderBottom: "1px solid rgba(184,151,126,0.35)" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#b8977e" }}>
              Before You Go
            </p>
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

        <section className="px-6 py-20">
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

        {/* Pilates at Home */}
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
