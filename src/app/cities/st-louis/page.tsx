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
  title: "Best Pilates Studios in St. Louis, MO (2026) — Curated Guide",
  description: "The best Pilates studios in St. Louis — reformer, Lagree and classical studios in Tower Grove, Brentwood, Ladue and the Central West End. Six verified picks, 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates st louis", "reformer pilates st louis", "best pilates studios st louis mo", "pilates studio saint louis", "pilates classes st louis", "clayton pilates stl", "central west end pilates", "pilates missouri", "best reformer pilates st louis"],
  openGraph: {
    title: "Best Pilates Studios in St. Louis, MO (2026)",
    description:
      "Six curated Pilates studios in St. Louis — Clayton and Central West End reformer boutiques. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/st-louis",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pilates studio in St. Louis, MO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in St. Louis (2026)",
    description:
      "The 6 best Pilates studios in St. Louis — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/st-louis",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "The Pilates Center of St. Louis",
    neighborhood: "St. Louis County",
    priceLevel: "$$$",
    review: "The Pilates Center of St. Louis teaches the method as developed by Joseph H. Pilates and is a member of the Pilates Method Alliance, making it one of the area's more traditional, education-focused studios.",
    caveat: "we could not confirm the current street address independently — check pilatescenterstl.com or call before visiting.",
    address: "—",
    bestFor: "Traditional, education-focused Pilates",
    signatureClass: "Classical Reformer",
    bookingTip: "Call the studio to arrange a first session.",
  },
  {
    number: "2",
    name: "Club Pilates Brentwood",
    neighborhood: "Brentwood",
    priceLevel: "$$",
    review: "Club Pilates Brentwood on South Brentwood Boulevard is a convenient inner-ring option for south and central St. Louis, with the brand's levelled group reformer system; it is bookable through ClassPass and Wellhub too.",
    caveat: "a franchise format — consistent, but less personalised than an independent studio.",
    address: "2535 S Brentwood Blvd, St. Louis, MO 63144",
    bestFor: "Structured reformer classes in inner-ring St. Louis",
    signatureClass: "Reformer Flow",
    bookingTip: "Use the intro offer before committing to a membership.",
  },
  {
    number: "3",
    name: "Freeman Pilates",
    neighborhood: "Tower Grove South",
    priceLevel: "$$$",
    review: "Freeman Pilates is an intimate, instructor-led boutique studio on Morganford Road in Tower Grove South, with a second studio — Studio II by Freeman Pilates — on Washington Avenue. Reviewers on ClassPass praise its attentive, corrective cueing.",
    caveat: "small classes mean limited spots — book ahead.",
    address: "3172 Morganford Rd, St. Louis, MO 63116",
    bestFor: "Small-group reformer with attentive cueing",
    signatureClass: "Small Group Reformer",
    bookingTip: "If Morganford is full, try Studio II at 4662 Washington Ave.",
  },
  {
    number: "4",
    name: "PLNK STL",
    neighborhood: "Ladue · Central West End · Town & Country",
    priceLevel: "$$$",
    review: "PLNK opened in Ladue in 2016 and has grown into St. Louis's best-known Lagree studio, with a Central West End studio in the Citizen Park building (opened 2018) and a Town & Country location. Its 50-minute Lagree Method workouts combine cardio, strength, core, flexibility and balance.",
    caveat: "Lagree is slower, heavier and sweatier than traditional Pilates.",
    address: "1560 S Lindbergh Blvd, Saint Louis, MO 63131",
    bestFor: "Lagree Method workouts across three locations",
    signatureClass: "Lagree (50 min)",
    bookingTip: "If Ladue is full, check the CWE studio at 4647 Lindell Blvd.",
  },
  {
    number: "5",
    name: "Casa Di Pilates",
    neighborhood: "The Grove / Forest Park Southeast",
    priceLevel: "$$",
    review: "Casa Di Pilates on South Kingshighway is a boutique studio in the Grove neighbourhood offering reformer Pilates, listed on ClassPass across several Pilates categories.",
    caveat: "limited published detail about the instructors — try a single class first.",
    address: "1530 S Kingshighway Blvd, Suite 204, St. Louis, MO 63110",
    bestFor: "Boutique reformer in the Grove",
    signatureClass: "Reformer Pilates",
    bookingTip: "Compare the intro offer with a single class before buying a pack.",
  },
  {
    number: "6",
    name: "Studio Ivanhoe Pilates & Movement",
    neighborhood: "Lindenwood Park",
    priceLevel: "$$",
    review: "Studio Ivanhoe Pilates & Movement on Ivanhoe Avenue is an independent studio serving south St. Louis.",
    caveat: "limited published detail about class formats — take an intro class first.",
    address: "3219 Ivanhoe Ave, St. Louis, MO 63139",
    bestFor: "Independent Pilates in south St. Louis",
    signatureClass: "Pilates Class",
    bookingTip: "Contact the studio to find the right level.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "St. Louis summers drive studio demand differently than most cities",
    body: "Unlike many northern cities, St. Louis summers are hot and humid enough to push outdoor exercisers indoors. Studio demand peaks in summer and winter simultaneously, with spring and fall offering better availability. If you want preferred time slots, commit to a membership schedule in late summer.",
  },
  {
    heading: "The south city vs. county geography shapes your options",
    body: "St. Louis's city-county division means the practical fitness geography is split. South city (Lindenwood Park, Tower Grove, The Grove) has excellent independent boutiques. The inner-ring suburbs (Brentwood, Ladue, Clayton) concentrate the franchise and classical studios. Choose based on where you actually spend your time.",
  },
  {
    heading: "Classical studios expect a private intake session",
    body: "The Pilates Center and Freeman Pilates both expect an initial private session before placing you in small-group programming. This is standard classical practice — instructors use the intake to understand your movement history, injuries, and goals. It is worth taking seriously rather than rushing through.",
  },
  {
    heading: "Lagree is not Pilates — know what you're signing up for",
    body: "PLNK STL uses the Lagree Megaformer, which is physically significantly more demanding than traditional reformer Pilates. If you're new to either, start with conventional Pilates at Club Pilates or Casa Di Pilates before transitioning to Lagree. The intensity difference is meaningful.",
  },
  {
    heading: "Grip socks are required at every reformer and Megaformer studio",
    body: "Universal across St. Louis's reformer market. Full-toe grip socks — bring your own rather than paying front-desk retail.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Ladue & Clayton",
    description:
      "St. Louis's most affluent western suburbs have developed a premium wellness infrastructure with long-running classical studios and instructor training programs that set the standard for the broader metro market.",
  },
  {
    name: "Tower Grove & The Grove",
    description:
      "South St. Louis's most culturally vibrant neighborhoods host independent boutique studios that serve a health-invested, community-oriented population with intimate instruction at competitive price points.",
  },
  {
    name: "Central West End",
    description:
      "St. Louis's most walkable urban neighborhood supports both boutique branches of established south city studios and Lagree franchise locations serving the area's dense professional and medical corridor population.",
  },
  {
    name: "Brentwood & Inner Suburbs",
    description:
      "The inner-ring western suburbs offer the most accessible franchise reformer programming in the metro — wide schedules, ClassPass compatibility, and consistent instruction for practitioners who prioritize convenience.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in St. Louis. Full-toe grip socks are the universal standard.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "Essential for St. Louis's mat classes and home practice through the city's hot summers and cold winters.",
    price: "From $18",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in St. Louis's classical studios. Useful for at-home reinforcement between sessions.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Versatile for home practice — particularly useful between the intensive sessions common at St. Louis's classical studios.",
    price: "From $10",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Post-class fascia release — a standard recovery tool across St. Louis's reformer and Megaformer studios.",
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
  { city: "Kansas City", country: "United States", href: "/cities/kansas-city", studioCount: 6 },
  { city: "Chicago", country: "United States", href: "/cities/chicago", studioCount: 6 },
  { city: "Nashville", country: "United States", href: "/cities/nashville", studioCount: 6 },
  { city: "Indianapolis", country: "United States", href: "/cities/indianapolis", studioCount: 6 },
];

const FURTHER_READING = [
  {
    title: "Lagree vs Pilates: What's the Difference?",
    excerpt:
      "The Megaformer isn't a reformer. Here's what separates Lagree from traditional Pilates — and how to choose.",
    href: "/blog/lagree-vs-pilates",
    category: "Education",
    readTime: "6 min read",
    date: "2026-02-01",
    imageUrl:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=450&fit=crop",
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
      "https://images.unsplash.com/photo-1616439069669-66dbe74bcdad?w=800&h=450&fit=crop",
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
        { "@type": "ListItem", position: 3, name: "St. Louis", item: "https://pilatescollectiveclub.com/cities/st-louis" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Studios in St. Louis, MO",
      url: "https://pilatescollectiveclub.com/cities/st-louis",
      numberOfItems: 6,
      itemListElement: STUDIOS.map((s, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ExerciseGym",
          name: s.name,
          description: s.review.slice(0, 160),
          address: { "@type": "PostalAddress", streetAddress: s.address, addressLocality: "St. Louis", addressRegion: "MO", addressCountry: "US" },
        },
      })),
    },
    {
      "@type": "Article",
      headline: "Best Pilates Studios in St. Louis, MO (2026)",
      url: "https://pilatescollectiveclub.com/cities/st-louis",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "Pilates Collective Club" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function StLouisPage() {
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
              Best Pilates Studios in St. Louis, MO
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9c8678" }}>
              Updated October 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              St. Louis has developed a quietly serious Pilates culture — one that spans the spectrum
              from a master-instructor-led classical apparatus studio in Ladue that has been operating
              since 2008, to the city's premier Lagree Megaformer studio expanding across multiple
              locations, to intimate boutique practices in Tower Grove and Lindenwood Park where class
              caps of four mean instruction is genuinely personal. The city's combination of a large
              medical corridor, established health-conscious suburbs, and a revitalizing urban core has
              produced a market with real depth at every price point.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=1400&h=840&fit=crop"
              alt="Pilates studio in St. Louis, MO"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">St. Louis, Missouri</p>
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
              Gear St. Louis instructors recommend.{" "}
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
              The 6 Best Pilates Studios in St. Louis
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
              Booking Tips for St. Louis
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
              St. Louis Neighborhoods for Pilates
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
          searchPlaceholder="Ask: best reformer Pilates in St. Louis…"
        />
      </main>
      <Footer />
    </>
  );
}
