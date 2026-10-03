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
  title: "Best Pilates Studios in Salt Lake City, UT (2026) — Curated Guide",
  description: "The best Pilates studios in Salt Lake City — reformer and mat studios in Sugar House, the Granary District and downtown. Six verified picks, 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates salt lake city", "reformer pilates salt lake city", "best pilates studios slc", "pilates studio salt lake city ut", "pilates classes utah", "sugar house pilates slc", "pilates avenues slc", "pilates utah", "best reformer pilates salt lake city"],
  openGraph: {
    title: "Best Pilates Studios in Salt Lake City, UT (2026)",
    description:
      "Six curated Pilates studios in Salt Lake City — Sugar House and Avenues reformer boutiques. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/salt-lake-city",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581474588563-e4a3e2ef0234?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Pilates studio in Salt Lake City, UT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Salt Lake City (2026)",
    description:
      "The 6 best Pilates studios in Salt Lake City — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-1581474588563-e4a3e2ef0234?w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/salt-lake-city",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "The Block SLC",
    neighborhood: "Granary District / Downtown",
    priceLevel: "$$$",
    review: "The Block SLC on South Jefferson Street holds the top spot in ClassPass's Salt Lake City reformer ranking, rated 4.9.",
    caveat: "popular classes fill quickly — book ahead.",
    address: "910 S Jefferson St, Salt Lake City, UT 84101",
    bestFor: "Top-rated reformer near downtown",
    signatureClass: "Reformer Pilates",
    bookingTip: "Book a few days ahead for evening classes.",
  },
  {
    number: "2",
    name: "The Point Pilates",
    neighborhood: "Sugar House",
    priceLevel: "$$",
    review: "The Point Pilates on South 900 East specialises in reformer Pilates and is rated 4.9 on ClassPass, a strong option for Sugar House and the East Bench.",
    caveat: "a reformer-focused studio — no broader apparatus programme.",
    address: "2695 S 900 E, Salt Lake City, UT 84106",
    bestFor: "Reformer Pilates in Sugar House",
    signatureClass: "Reformer Pilates",
    bookingTip: "Use the intro offer to try a class first.",
  },
  {
    number: "3",
    name: "Seek Studio",
    neighborhood: "Sugar House",
    priceLevel: "$$",
    review: "Seek Studio on 1100 East is a Sugar House studio offering yoga, mat Pilates and indoor cycling, rated 4.9 on ClassPass.",
    caveat: "mat Pilates rather than reformer.",
    address: "1790 S 1100 E, Salt Lake City, UT 84105",
    bestFor: "Mat Pilates alongside yoga and cycling",
    signatureClass: "Mat Pilates",
    bookingTip: "Mix mat Pilates with a cycling class for a full week of training.",
  },
  {
    number: "4",
    name: "Seven Sisters Pilates",
    neighborhood: "Marmalade / Capitol Hill",
    priceLevel: "$$",
    review: "Seven Sisters Pilates on West 300 North offers mat Pilates in small to medium class sizes, close to downtown.",
    caveat: "mat-based — choose a reformer studio if machine work is your priority.",
    address: "244 W 300 N, Suite 103, Salt Lake City, UT 84103",
    bestFor: "Mat Pilates near downtown",
    signatureClass: "Mat Pilates",
    bookingTip: "Small to medium classes — arrive early to set up.",
  },
  {
    number: "5",
    name: "Club Pilates Salt Lake City",
    neighborhood: "Marmalade / North Downtown",
    priceLevel: "$$",
    review: "Club Pilates on North 300 West brings the brand's levelled group reformer system to central Salt Lake City.",
    caveat: "a franchise format — consistent, but less personalised than an independent studio.",
    address: "569 N 300 W, Salt Lake City, UT 84103",
    bestFor: "Structured reformer classes in central SLC",
    signatureClass: "Reformer Flow",
    bookingTip: "Use the intro offer before committing to a membership.",
  },
  {
    number: "6",
    name: "BODYBAR Pilates — Downtown SLC",
    neighborhood: "Downtown",
    priceLevel: "$$",
    review: "BODYBAR Pilates is a reformer studio in downtown Salt Lake City offering a modern take on traditional Pilates.",
    caveat: "we could not confirm the exact street address independently — check the studio's website before visiting.",
    address: "—",
    bestFor: "Modern reformer downtown",
    signatureClass: "BODYBAR Reformer",
    bookingTip: "Book after-work classes ahead.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Account for altitude when you first arrive",
    body: "Salt Lake City sits at 4,226 feet above sea level. If you're visiting from a lower elevation, expect reduced lung capacity during your first few sessions — even in Pilates. Hydrate generously, communicate with your instructor if you feel lightheaded, and give yourself a session or two to acclimate before pushing your hardest.",
  },
  {
    heading: "Book ski-season classes well in advance",
    body: "From late November through March, SLC's studios — especially those near the Cottonwood Canyons — fill with skiers using Pilates for pre- and in-season conditioning. Class availability tightens dramatically during this period. If you're visiting for skiing, book your Pilates sessions before you book your lift tickets.",
  },
  {
    heading: "Intro packages are the smartest entry point",
    body: "Nearly every SLC studio offers a new-client introductory rate — typically three reformer sessions for a significantly reduced price. This is the most cost-effective way to experience a studio before committing to a monthly membership, and it gives you enough sessions to judge the instruction quality and community fit.",
  },
  {
    heading: "Understand SLC's wellness culture",
    body: "Salt Lake City's wellness culture is deeply rooted in the LDS community's emphasis on physical health and clean living. Many studios maintain an alcohol-free, smoke-free environment and schedule classes early in the morning and on weekdays to accommodate family commitments. Sunday availability is limited at some studios — check schedules carefully if you're planning a weekend visit.",
  },
  {
    heading: "Outdoor athletes: tell your instructor your sport",
    body: "SLC's Pilates instructors are accustomed to working with skiers, trail runners, cyclists, and climbers. If you have a specific sport or training goal, mention it at booking or before your first class — most instructors will adjust exercises to address sport-specific weaknesses, from hip external rotation for skiers to shoulder stability for climbers.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Sugar House",
    description:
      "One of SLC's most vibrant and walkable neighborhoods, Sugar House is a hub for independent studios, healthy restaurants, and the city's active outdoor community. Pilates fits naturally into the neighborhood's ethos — you'll find serious practitioners and a studio culture that reflects the area's athleticism.",
  },
  {
    name: "The Avenues",
    description:
      "A historic residential neighborhood of Victorian homes and tree-lined streets climbing the foothills above downtown. The Avenues has a tight-knit community culture and supports small, owner-operated studios that serve local regulars. An ideal neighborhood for a morning class followed by a walk through the foothills.",
  },
  {
    name: "9th & 9th District",
    description:
      "Salt Lake City's most walkable and charming urban village, anchored by the intersection of 9th East and 9th South. Independent coffee shops, boutiques, and studios cluster here in a neighborhood that feels distinctly un-suburban. The area attracts practitioners who value quality instruction and neighborhood character in equal measure.",
  },
  {
    name: "Cottonwood Heights",
    description:
      "A suburban community at the base of Big and Little Cottonwood Canyons — the gateway to some of the best skiing in North America. Studios here cater heavily to the ski and outdoor athletic community, offering sport-specific programming that complements life in one of the most active ZIP codes in the American West.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every SLC studio. Essential for reformer work at altitude — ToeSox grip well even when feet swell slightly in dry mountain air.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "For mat classes at Avenues Pilates and 9th & 9th — slightly thicker than a yoga mat for joint comfort on hard studio floors.",
    price: "From $18",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Used in classical mat sequences at 9th & 9th Pilates — a great home-practice tool for SLC winters when getting to the studio is harder.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Versatile for hip activation and supplemental home practice — particularly useful for skiers working on glute and lateral hip strength between sessions.",
    price: "From $10",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Ideal for thoracic and IT-band mobility — a must-have for SLC's trail runners and skiers supplementing their Pilates work at home.",
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
  {
    city: "Denver",
    country: "United States",
    href: "/cities/denver",
    studioCount: 6,
  },
  {
    city: "Phoenix",
    country: "United States",
    href: "/cities/phoenix",
    studioCount: 6,
  },
  {
    city: "Portland",
    country: "United States",
    href: "/cities/portland",
    studioCount: 6,
  },
  {
    city: "Seattle",
    country: "United States",
    href: "/cities/seattle",
    studioCount: 6,
  },
];

const FURTHER_READING = [
  {
    title: "Pilates for Athletes",
    excerpt:
      "How Pilates builds the stability, mobility, and body awareness that skiers, runners, and cyclists need — and how to find a studio that programs for your sport.",
    href: "/blog/pilates-for-athletes",
    category: "Guides",
    readTime: "8 min read",
    date: "2026-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1581474588563-e4a3e2ef0234?w=1200&q=80",
  },
  {
    title: "How to Choose a Pilates Instructor",
    excerpt:
      "Certifications, teaching style, and lineage — everything you need to evaluate a new instructor before committing to a package.",
    href: "/blog/how-to-choose-a-pilates-instructor",
    category: "Education",
    readTime: "7 min read",
    date: "2026-01-14",
    imageUrl:
      "https://images.unsplash.com/photo-1581474588563-e4a3e2ef0234?w=1200&q=80",
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
        { "@type": "ListItem", position: 3, name: "Salt Lake City", item: "https://pilatescollectiveclub.com/cities/salt-lake-city" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Studios in Salt Lake City, UT",
      url: "https://pilatescollectiveclub.com/cities/salt-lake-city",
      numberOfItems: 6,
      itemListElement: STUDIOS.map((s, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ExerciseGym",
          name: s.name,
          description: s.review.slice(0, 160),
          address: { "@type": "PostalAddress", addressLocality: "Salt Lake City", addressRegion: "UT", addressCountry: "US" },
        },
      })),
    },
    {
      "@type": "Article",
      headline: "Best Pilates Studios in Salt Lake City, UT (2026)",
      url: "https://pilatescollectiveclub.com/cities/salt-lake-city",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "Pilates Collective Club" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function SaltLakeCityPage() {
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
              Best Pilates Studios in Salt Lake City, UT
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9c8678" }}>
              Updated October 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              Salt Lake City is one of America's most physically active cities — a place where the mountains
              are always visible and the outdoor calendar never stops. That athletic culture has shaped a
              Pilates scene unlike anywhere else in the Mountain West: studios that understand skiers,
              trail runners, and cyclists as well as they understand classical movement principles. From the
              charming boutiques of the 9th & 9th District to the ski-focused studios at the base of the
              Cottonwood Canyons, we've identified the six SLC studios that genuinely deliver in 2026.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="/pictures/saltlakecity.jpg"
              alt="Pilates studio in Salt Lake City, UT"
              fill
              unoptimized
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">Salt Lake City, Utah</p>
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
              Gear Salt Lake City instructors recommend.{" "}
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
              The 6 Best Pilates Studios in Salt Lake City
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
              Booking Tips for Salt Lake City
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
              Salt Lake City Neighborhoods for Pilates
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best reformer Pilates in Salt Lake City…" />
      </main>
      <Footer />
    </>
  );
}
