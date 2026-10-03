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
  title: "Best Pilates Studios in Charlotte, NC (2026) — Curated Guide",
  description: "The best Pilates studios in Charlotte — reformer and Lagree studios in South End, classical studios in Myers Park, Dilworth and Elizabeth. Six verified picks, 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates charlotte", "reformer pilates charlotte", "best pilates studios charlotte nc", "pilates studio charlotte", "pilates classes charlotte", "south end pilates charlotte", "myers park pilates", "pilates north carolina", "best reformer pilates charlotte"],
  openGraph: {
    title: "Best Pilates Studios in Charlotte, NC (2026)",
    description:
      "Six curated Pilates studios in Charlotte — South End reformer boutiques to Myers Park classical method. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/charlotte",
    images: [
      {
        url: "https://images.unsplash.com/photo-1563387852576-964bc31b73af?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Pilates studio in Charlotte, NC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Charlotte (2026)",
    description:
      "The 6 best Pilates studios in Charlotte — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-1563387852576-964bc31b73af?w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/charlotte",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "Strength and Wellness Collective",
    neighborhood: "West Morehead / Uptown edge",
    priceLevel: "$$$",
    review: "Strength and Wellness Collective on West Morehead Street tops ClassPass's ranking of Charlotte reformer studios, with a 4.8 rating from close to 10,000 reviews. Its carriage-based classes are Lagree Method on the Megaformer, alongside strength and yoga circuits and a hybrid Mega+ format — genuine strength work inside a broader wellness studio.",
    caveat: "the reformer work here is Lagree on the Megaformer rather than traditional Pilates — slower, heavier and sweatier.",
    address: "628 W Morehead St, Charlotte, NC 28208",
    bestFor: "Lagree Megaformer strength training with yoga and strength circuits",
    signatureClass: "Mega+ (Megaformer hybrid)",
    bookingTip: "With this many regulars, prime-time classes fill fast — book a few days ahead.",
  },
  {
    number: "2",
    name: "BK Pilates — South End",
    neighborhood: "South End",
    priceLevel: "$$$",
    review: "BK Pilates runs studios across the Carolinas — South End, SouthPark and Optimist Park in Charlotte, plus Concord and Mount Pleasant, SC. The South End studio on South Boulevard sits in what has become Charlotte's Pilates corridor, and its signature group reformer classes build on classical Pilates principles for all levels.",
    caveat: "a growing multi-studio brand — consistent, but less intimate than the private-session studios on this list.",
    address: "1520 South Blvd, Suite 120, Charlotte, NC 28203",
    bestFor: "Group reformer classes in South End, multi-location access",
    signatureClass: "Signature Group Reformer",
    bookingTip: "If South End is full, check the SouthPark and Optimist Park schedules.",
  },
  {
    number: "3",
    name: "Iron Butterfly Pilates",
    neighborhood: "South End (Atherton Lofts)",
    priceLevel: "$$$",
    review: "Iron Butterfly Pilates in the Atherton Lofts on South Boulevard offers private sessions, small-group reformer classes and physical therapy under one roof. Expert reformer instructors welcome beginners, and the in-house physical therapy makes it a strong choice if you are coming back from an injury.",
    caveat: "small-group and private formats mean fewer drop-in spots than the bigger group studios.",
    address: "2108 South Blvd, #202, Charlotte, NC 28203",
    bestFor: "Small-group reformer and Pilates alongside physical therapy",
    signatureClass: "Small Group Reformer",
    bookingTip: "Coming back from an injury? Ask whether a physical therapy assessment should come before group classes.",
  },
  {
    number: "4",
    name: "Charlotte Pilates",
    neighborhood: "Myers Park",
    priceLevel: "$$$",
    review: "Charlotte Pilates is a boutique Myers Park studio on Randolph Road, run by owner Michele and a team of certified instructors. It offers classical reformer Pilates through private sessions, semi-private sessions for couples and friends, small groups of three to six, and virtual sessions, and it is rated 5.0 on Google (from a small number of reviews).",
    caveat: "the review count is small — the rating is a promising signal rather than robust proof.",
    address: "2711 Randolph Rd, Ste 509, Charlotte, NC 28207",
    bestFor: "Classical reformer in private and small-group formats",
    signatureClass: "Classical Reformer (small group)",
    bookingTip: "Small groups cap at six — book recurring slots once you find a time that works.",
  },
  {
    number: "5",
    name: "Pilates Body Shaping",
    neighborhood: "Elizabeth",
    priceLevel: "$$",
    review: "Pilates Body Shaping on East 8th Street in the Elizabeth neighbourhood says it teaches Pilates as it was originally developed by Joseph Pilates, in the classical Romana's Pilates lineage. It offers mat and tower classes as well as private lessons, close to Uptown.",
    caveat: "a classical studio — expect traditional repertoire and precision rather than a modern sculpt class.",
    address: "1940 E 8th St, Charlotte, NC 28204",
    bestFor: "Classical mat and tower work near Uptown",
    signatureClass: "Classical Tower",
    bookingTip: "New to classical Pilates? Start with a private lesson before joining group mat or tower classes.",
  },
  {
    number: "6",
    name: "Clinging Grace Pilates",
    neighborhood: "Dilworth",
    priceLevel: "$$$",
    review: "Clinging Grace Pilates is a fully equipped private studio in Dilworth run by Julia Hartstein, and one of two Charlotte studios teaching in the classical Romana's Pilates lineage. Sessions are private, so the programme is built around you from the first session.",
    caveat: "private-session only — not the place for drop-in group classes; we could not confirm the street address independently, so contact the studio for directions.",
    address: "—",
    bestFor: "Private classical Pilates on the full apparatus",
    signatureClass: "Private Classical Session",
    bookingTip: "Contact the studio directly to book — private studios rarely release slots through class apps.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Time your visit around Charlotte's mild spring",
    body: "Charlotte's spring (March–May) is ideal for visiting — mild temperatures, in-bloom dogwoods, and studios running seasonal new-client specials. Summer heat sends residents indoors, making July and August peak booking months, so plan further ahead then.",
  },
  {
    heading: "Many studios offer intro packages for new clients",
    body: "Most Charlotte studios offer a first-week or first-month introductory rate — typically three reformer classes for the price of one. These are the best way to audition a studio before committing to a membership.",
  },
  {
    heading: "Ask about corporate wellness partnerships",
    body: "Charlotte's large banking and finance sector means many studios have negotiated rates through corporate wellness programs. Check with your employer's HR team before paying full retail.",
  },
  {
    heading: "Arrive 10 minutes early for equipment orientation",
    body: "Reformers vary slightly between brands and studios. Arriving early lets you adjust footbar height, headrest angle, and spring tension before class starts — critical for getting full value from the session.",
  },
  {
    heading: "Grip socks are required at every Charlotte studio",
    body: "All Charlotte studios require grip socks — bare feet on the reformer are a safety and hygiene issue. Pack a pair; studio socks are available for purchase but cost more than bringing your own.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "South End",
    description:
      "Charlotte's most dynamic neighborhood for fitness and wellness. The Light Rail corridor is lined with boutique studios, healthy cafés, and post-workout brunch spots. Easy to explore on foot or by scooter after class.",
  },
  {
    name: "Myers Park",
    description:
      "An elegant, tree-lined neighborhood south of Uptown. Home to classical studios and wellness practitioners in beautifully restored early 20th-century homes. Quiet and unhurried — perfect for focused Pilates sessions.",
  },
  {
    name: "NoDa (North Davidson)",
    description:
      "Charlotte's arts and music district, full of murals, independent studios, and creative energy. NoDa's Pilates offerings reflect the neighborhood's inclusive, community-first spirit and are generally more accessible in price.",
  },
  {
    name: "Plaza Midwood",
    description:
      "A walkable, eclectic neighborhood popular with young professionals and creatives. Small, owner-operated studios thrive here alongside independent coffee shops and restaurants — great for a full morning of movement and café culture.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every Charlotte studio. ToeSox and Tavi Noir both have excellent grip for reformer work.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "For mat classes at Myers Park Pilates and Plaza Midwood — slightly thicker than a yoga mat for joint comfort.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Used in classical mat sequences — great to own if you're practicing at Myers Park or following a classical program at home.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Versatile for warm-ups, hip work, and supplemental home practice between studio sessions.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Ideal for thoracic mobility work — a great complement to Dilworth Pilates' therapeutic programming.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
];

const HOME_REFORMERS = [
  { tag: "Budget Pick", name: "Stamina AeroPilates 287", note: "The most accessible full-function reformer — four cords, a rebounder, and a frame that folds flat for storage.", price: "From $299", url: "https://www.amazon.com/s?k=stamina+aeropilates+287&tag=pilatescollective-20" },
  { tag: "Mid-Range Pick", name: "AeroPilates Pro XP 557", note: "A smoother carriage, standing platform, and adjustable footbar for practitioners training several times a week.", price: "From $1,329", url: "https://www.amazon.com/s?k=aeropilates+pro+557&tag=pilatescollective-20" },
  { tag: "Buy Once", name: "Balanced Body Allegro 2", note: "The studio-grade machine serious home practitioners never need to replace — full spring system and fold-flat storage.", price: "From $3,995", url: "https://www.amazon.com/s?k=balanced+body+allegro+2+reformer&tag=pilatescollective-20" },
];

const RELATED_CITIES = [
  {
    city: "Atlanta",
    country: "United States",
    href: "/cities/atlanta",
    studioCount: 6,
  },
  {
    city: "Nashville",
    country: "United States",
    href: "/cities/nashville",
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
      "https://images.unsplash.com/photo-1563387852576-964bc31b73af?w=1200&q=80",
  },
  {
    title: "Classical vs Contemporary Pilates",
    excerpt:
      "What actually separates classical and contemporary methods — and how to decide which approach suits your body and goals.",
    href: "/blog/classical-vs-contemporary-pilates",
    category: "Education",
    readTime: "6 min read",
    date: "2026-02-05",
    imageUrl:
      "https://images.unsplash.com/photo-1563387852576-964bc31b73af?w=1200&q=80",
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
        { "@type": "ListItem", position: 3, name: "Charlotte", item: "https://pilatescollectiveclub.com/cities/charlotte" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Studios in Charlotte, NC",
      url: "https://pilatescollectiveclub.com/cities/charlotte",
      numberOfItems: 6,
      itemListElement: STUDIOS.map((s, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ExerciseGym",
          name: s.name,
          description: s.review.slice(0, 160),
          address: { "@type": "PostalAddress", addressLocality: "Charlotte", addressRegion: "NC", addressCountry: "US" },
        },
      })),
    },
    {
      "@type": "Article",
      headline: "Best Pilates Studios in Charlotte, NC (2026)",
      url: "https://pilatescollectiveclub.com/cities/charlotte",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "Pilates Collective Club" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function CharlottePage() {
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
              Best Pilates Studios in Charlotte, NC
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9c8678" }}>
              Updated October 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              Charlotte has emerged as one of the Southeast's most dynamic Pilates cities. From South End's
              reformer and Lagree studios to the classical Romana's-lineage studios of Myers Park, Dilworth and Elizabeth, the Queen City
              offers serious Pilates across every style and budget. We've checked every studio's location and details
              against public listings and selected six that stand out — whether you're a first-timer or
              a seasoned mover relocating from another city.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="/pictures/charlotte.jpg"
              alt="Pilates studio in Charlotte, NC"
              fill
              unoptimized
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">Charlotte, North Carolina</p>
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
              Gear Charlotte instructors recommend.{" "}
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
              The 6 Best Pilates Studios in Charlotte
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
              Booking Tips for Charlotte
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
              Charlotte Neighborhoods for Pilates
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best reformer Pilates in Charlotte…" />
      </main>
      <Footer />
    </>
  );
}
