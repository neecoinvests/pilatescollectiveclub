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
  title: "Best Pilates Studios in Tampa, FL (2026) — Curated Guide",
  description: "The best Pilates studios in Tampa: reformer studios in South Tampa, Westchase, Carrollwood, New Tampa and St. Pete. Six picks, addresses verified October 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates tampa", "reformer pilates tampa", "best pilates studios tampa fl", "pilates studio tampa", "pilates classes tampa", "south tampa pilates", "carrollwood pilates", "pilates florida", "best reformer pilates tampa", "pilates westchase fl"],
  openGraph: {
    title: "Best Pilates Studios in Tampa, FL (2026)",
    description:
      "Six Pilates studios across Tampa Bay, from South Tampa to St. Pete. Verified October 2026.",
    url: "https://pilatescollectiveclub.com/cities/tampa",
    images: [
      {
        url: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Pilates studio in Tampa, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Tampa (2026)",
    description:
      "Six Pilates studios across Tampa Bay, addresses verified October 2026.",
    images: [
      "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/tampa",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "Club Pilates South Tampa",
    neighborhood: "South Tampa",
    priceLevel: "$$$",
    review:
      "Club Pilates' South Tampa studio sits on South Howard Avenue, close to Hyde Park and the Bayshore Boulevard corridor. Like every Club Pilates studio, it runs a timetable of reformer-based group classes taught to the brand's own curriculum, with levels that let beginners start slowly and build up.",
    address: "940 S. Howard Ave., Tampa, FL 33606",
    bestFor: "South Tampa and Hyde Park residents, all levels",
    signatureClass: "Reformer Flow",
    bookingTip: "Use the intro offer to try a few class formats before choosing a membership.",
  },
  {
    number: "2",
    name: "Club Pilates Westchase",
    neighborhood: "Westchase",
    priceLevel: "$$",
    review:
      "The Westchase studio is on West Linebaugh Avenue and serves northwest Tampa. The franchise's tiered memberships and wide schedule suit people who want to train several times a week close to home.",
    address: "12125 W. Linebaugh Ave., Suite 202, Tampa, FL 33626",
    bestFor: "Westchase and northwest Tampa, regular practice",
    signatureClass: "Reformer Flow",
    bookingTip: "Early-morning and after-work slots are the busiest; book a few days ahead.",
  },
  {
    number: "3",
    name: "Club Pilates Carrollwood",
    neighborhood: "Carrollwood",
    priceLevel: "$$",
    review:
      "Carrollwood's studio is on North Dale Mabry Highway, an easy drive for north-central Tampa. It offers the standard Club Pilates format of small reformer group classes at several levels.",
    address: "13254 N. Dale Mabry Hwy, Tampa, FL 33618",
    bestFor: "North-central Tampa, beginners and regulars",
    signatureClass: "Reformer Flow",
    bookingTip: "Check the level of each class on the schedule before you book.",
  },
  {
    number: "4",
    name: "Club Pilates New Tampa",
    neighborhood: "New Tampa",
    priceLevel: "$$",
    review:
      "The New Tampa studio on Amberly Drive covers the city's fast-growing northeast suburbs. Expect the same reformer curriculum and membership structure as the brand's other Tampa studios.",
    address: "15341 Amberly Drive, Tampa, FL 33647",
    bestFor: "New Tampa and Wesley Chapel side, memberships",
    signatureClass: "Reformer Flow",
    bookingTip: "Memberships can usually be used across studios; confirm the rules for yours.",
  },
  {
    number: "5",
    name: "Club Pilates St. Petersburg",
    neighborhood: "Downtown St. Petersburg",
    priceLevel: "$$$",
    review:
      "Club Pilates' downtown St. Pete studio is on Central Avenue, a short walk from the waterfront. A second studio, North St. Pete, is at 347 62nd Ave N if you live further north.",
    address: "120 Central Ave, Saint Petersburg, FL 33701",
    bestFor: "Downtown St. Pete, all levels",
    signatureClass: "Reformer Flow",
    bookingTip: "Allow time for downtown parking before class.",
  },
  {
    number: "6",
    name: "Club Pilates Valrico",
    neighborhood: "Valrico (near Brandon)",
    priceLevel: "$$",
    review:
      "The Valrico studio on Lithia Pinecrest Road is the closest Club Pilates to Brandon and the eastern Hillsborough suburbs, with the brand's usual reformer class levels and memberships.",
    address: "3438 Lithia Pinecrest Rd., Valrico, FL 33596",
    bestFor: "Brandon, Valrico and east Hillsborough",
    signatureClass: "Reformer Flow",
    bookingTip: "Try the intro offer before committing to a membership.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Plan around Florida's heat and humidity",
    body: "Tampa's summers (June–September) are intensely hot and humid — arriving sweaty from a parking lot walk is the norm. Many studios crank the AC, so bring a light layer for cool-down stretches. Morning classes before 9 AM are the most comfortable for the commute in.",
  },
  {
    heading: "Snowbird season drives up demand (November–March)",
    body: "Tampa's population swells significantly from November through March as snowbirds arrive from the Northeast and Midwest. Studio classes fill faster during this window, and intro packages sell out quickly. Book a week ahead rather than a day ahead during the winter season.",
  },
  {
    heading: "Intro packages are the best way to audition a studio",
    body: "Most Tampa studios offer a first-week or three-class introductory rate — often dramatically reduced from the standard drop-in price. Use these to try two or three studios before committing to a membership. The variety across Tampa neighborhoods is wide enough to be worth exploring.",
  },
  {
    heading: "Hurricane season can disrupt schedules (June–November)",
    body: "Florida's hurricane season overlaps with summer and fall. Studios may close or shift to virtual classes during weather events. Download the studio's app or follow their social accounts so you receive real-time cancellation notices — and always know the refund or credit policy before booking a multi-class package.",
  },
  {
    heading: "Beach lifestyle means grip socks are non-negotiable",
    body: "Tampa's beach-adjacent lifestyle means many clients come to class directly from errands or the water. Every studio requires grip socks — studios sell them, but bringing your own saves money and ensures you have the right fit for reformer work. Pack a pair in your bag permanently.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "South Tampa",
    description:
      "South Tampa runs from Hyde Park and Bayshore Boulevard down through the peninsula's residential streets. It's dense with fitness studios, coffee shops and places to eat after class.",
  },
  {
    name: "North Tampa: Carrollwood and New Tampa",
    description:
      "Suburban, family-oriented areas north of the city centre. Studios here are in shopping plazas with easy parking, which makes regular weekday classes practical.",
  },
  {
    name: "St. Petersburg",
    description:
      "Across the bay, St. Pete has a walkable downtown and a strong arts and wellness scene. Club Pilates has studios both downtown and in North St. Pete.",
  },
  {
    name: "Westchase",
    description:
      "A planned community in northwest Tampa popular with families and professionals. Studios here prioritise flexible schedules and membership value.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every Tampa studio. ToeSox and Tavi Noir both perform well in Florida's warm, humid conditions.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "For mat work at home between classes: slightly thicker than a yoga mat for joint comfort on hard floors.",
    price: "From $18",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Used in classical mat sequences — ideal if you're following a classical program at South Tampa Pilates or practicing at home between sessions.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Versatile for warm-ups, hip work, and supplemental home practice — especially useful during hurricane-season studio closures.",
    price: "From $10",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Great for thoracic mobility work and recovery after St. Pete Pilates' sport-focused sessions.",
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
    city: "Miami",
    country: "United States",
    href: "/cities/miami",
    studioCount: 6,
  },
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
    city: "Houston",
    country: "United States",
    href: "/cities/houston",
    studioCount: 6,
  },
];

const FURTHER_READING = [
  {
    title: "Pilates for Back Pain: What the Research Shows",
    excerpt:
      "A clear-eyed look at the clinical evidence behind Pilates as a treatment for chronic and acute back pain — what works, what doesn't, and what to ask your instructor.",
    href: "/blog/pilates-for-back-pain",
    category: "Health",
    readTime: "8 min read",
    date: "2026-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=80",
  },
  {
    title: "How to Choose a Pilates Instructor",
    excerpt:
      "Certifications, teaching style, and lineage — everything you need to evaluate a new instructor before committing to a package.",
    href: "/blog/how-to-choose-a-pilates-instructor",
    category: "Guides",
    readTime: "7 min read",
    date: "2026-01-14",
    imageUrl:
      "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=80",
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
        { "@type": "ListItem", position: 3, name: "Tampa", item: "https://pilatescollectiveclub.com/cities/tampa" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Studios in Tampa, FL",
      url: "https://pilatescollectiveclub.com/cities/tampa",
      numberOfItems: 6,
      itemListElement: STUDIOS.map((s, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ExerciseGym",
          name: s.name,
          description: s.review.slice(0, 160),
          address: { "@type": "PostalAddress", streetAddress: s.address, addressRegion: "FL", addressCountry: "US" },
        },
      })),
    },
    {
      "@type": "Article",
      headline: "Best Pilates Studios in Tampa, FL (2026)",
      url: "https://pilatescollectiveclub.com/cities/tampa",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "Pilates Collective Club" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function TampaPage() {
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
              Best Pilates Studios in Tampa, FL
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9c8678" }}>
              Updated October 2026 · 6 studios
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              Reformer Pilates is easy to find across Tampa Bay, from South Tampa and Westchase to Carrollwood, New Tampa
              and across the bay in St. Pete. Below are six studios whose addresses we checked against the operator&apos;s
              own location listings in October 2026, spread across the area so there is one close to most of the city.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="/pictures/tampa.jpg"
              alt="Pilates studio in Tampa, FL"
              fill
              unoptimized
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">Tampa, Florida</p>
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
              Gear Tampa instructors recommend.{" "}
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
              The 6 Best Pilates Studios in Tampa
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
              Booking Tips for Tampa
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
              Tampa Neighborhoods for Pilates
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best reformer Pilates in Tampa…" />
      </main>
      <Footer />
    </>
  );
}
