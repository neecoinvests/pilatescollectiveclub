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
  title: "Best Pilates Studios in Indianapolis, IN (2026) — Curated Guide",
  description: "The best Pilates studios in Indianapolis — small-group reformer in Nora, Downtown Indy and the northern suburbs. Verified 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates indianapolis", "reformer pilates indianapolis", "best pilates studios indianapolis", "pilates studio indy", "pilates classes indianapolis", "broad ripple pilates", "pilates carmel in", "pilates indiana", "best reformer pilates indianapolis"],
  openGraph: {
    title: "Best Pilates Studios in Indianapolis, IN (2026)",
    description:
      "Curated Pilates studios in Indianapolis — Nora, Downtown and north-suburban reformer picks. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/indianapolis",
    images: [
      {
        url: "https://images.unsplash.com/photo-1564862384608-2fb0e2b5e0e4?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pilates studio in Indianapolis, IN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Indianapolis (2026)",
    description:
      "The 6 best Pilates studios in Indianapolis — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-1564862384608-2fb0e2b5e0e4?w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/indianapolis",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "Foundations Studio",
    neighborhood: "Nora / Far North Side",
    priceLevel: "$$",
    review: "Foundations Studio is a woman-owned Pilates and wellness studio on East 86th Street, and it tops ClassPass's Indianapolis reformer ranking with a 4.97 rating. With only four reformers, classes feel personal, and the teaching treats spring selection and body position as skills to build over time. It also offers mat Pilates, yoga, pre/postnatal yoga and myofascial release.",
    caveat: "only four reformers means reformer classes book up — plan ahead.",
    address: "1726 E 86th St, Indianapolis, IN 46240",
    bestFor: "Precise, small-group reformer instruction",
    signatureClass: "Reformer (4-person class)",
    bookingTip: "Book reformer classes several days ahead — the small room fills fast.",
  },
  {
    number: "2",
    name: "Club Pilates Downtown Indy",
    neighborhood: "Mass Ave / Downtown",
    priceLevel: "$$$",
    review: "Club Pilates Downtown Indy on Massachusetts Avenue is the most central reformer studio in the city, convenient for downtown residents, Lockerbie Square and the medical district. It runs the brand's levelled group reformer system.",
    caveat: "a franchise format — consistent, but less personalised than an independent studio.",
    address: "530 Massachusetts Ave, Suite 160, Indianapolis, IN 46204",
    bestFor: "Downtown professionals wanting structured reformer classes",
    signatureClass: "Reformer Flow",
    bookingTip: "Lunchtime and post-work classes fill quickly — book 48 hours ahead.",
  },
  {
    number: "3",
    name: "Reforming Indy",
    neighborhood: "Fall Creek / Northeast (Fishers area)",
    priceLevel: "$$",
    review: "Reforming Indy is an independent Pilates and barre studio on Fall Creek Road in the northeast of the city, near Fishers. It is a convenient option for north-east residents who want an independent studio rather than a franchise.",
    caveat: "there is limited published detail about its instructors and class formats — try a single class first.",
    address: "11250 Fall Creek Rd, Indianapolis, IN 46256",
    bestFor: "Northeast-side reformer and barre",
    signatureClass: "Reformer Pilates",
    bookingTip: "Compare the intro offer with a single class before committing.",
  },
  {
    number: "4",
    name: "Club Pilates North Indy",
    neighborhood: "Keystone at the Crossing",
    priceLevel: "$$$",
    review: "Club Pilates' North Indy studio at Keystone at the Crossing serves the north side — Nora, Meridian-Kessler and Castleton — with levelled group reformer classes and a wide daily schedule.",
    caveat: "we could not confirm the exact suite address independently — check the Club Pilates website before your visit.",
    address: "—",
    bestFor: "North-side residents wanting a convenient reformer studio",
    signatureClass: "Reformer Flow",
    bookingTip: "Morning classes are the most competitive — book two days ahead.",
  },
  {
    number: "5",
    name: "Align Pilates Indy",
    neighborhood: "Noblesville",
    priceLevel: "$$$",
    review: "Align Pilates leads ClassPass's Indianapolis aesthetic list with a 4.9 rating, and its Noblesville studio is known for a calm, design-led reformer environment of clean lines and deliberate lighting, paired with a wellness-focused approach.",
    caveat: "Noblesville is a drive from central Indianapolis — best for north-suburban residents.",
    address: "470 Lafayette Rd, Noblesville, IN 46060",
    bestFor: "Design-led reformer studio in the northern suburbs",
    signatureClass: "Reformer Pilates",
    bookingTip: "Evening classes suit commuters returning north from the city.",
  },
  {
    number: "6",
    name: "Club Pilates Zionsville",
    neighborhood: "Zionsville",
    priceLevel: "$$",
    review: "Club Pilates Zionsville is in The Shoppes at Weston Pointe on North Michigan Road, serving Zionsville, Carmel's west side and northwest Indianapolis with levelled group reformer classes.",
    caveat: "a franchise studio — reliable structure, less individual programming.",
    address: "10895 N Michigan Rd, Suite 110, Zionsville, IN 46077",
    bestFor: "Northwest suburban residents, membership-based training",
    signatureClass: "Reformer Flow",
    bookingTip: "Use the intro offer before choosing a membership tier.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Indianapolis rewards consistent practice through its winters",
    body: "Indianapolis winters are cold, grey, and long — from November through March, outdoor movement is limited and the case for a consistent indoor practice is at its strongest. Practitioners who establish studio routines before the cold arrives maintain them through winter. Book standing slots in September.",
  },
  {
    heading: "The Indy 500 season brings unusual demand",
    body: "The month of May is Indy 500 season, when Indianapolis hosts hundreds of thousands of visitors and the city's professional population is on an unusual schedule. Studios near the downtown and north-side corridors see schedule disruptions and increased demand during race weekend. Book well ahead if you're visiting in May.",
  },
  {
    heading: "The medical corridor creates strong demand for therapeutic instruction",
    body: "Indianapolis is a major healthcare hub — Indiana University Health, Eskenazi, and St. Vincent are among the large systems anchored here. The resulting concentration of healthcare professionals creates strong demand for evidence-informed, therapeutically aware Pilates instruction. Studios with rehabilitation specializations are particularly well-supported.",
  },
  {
    heading: "Intro packages are the most cost-effective entry point",
    body: "Every Indianapolis studio offers a new-client introductory rate. Indianapolis's moderate price point makes the intro package an excellent value — typically three reformer sessions for the price of one drop-in. Use it to evaluate instructor quality and community fit before committing to a membership.",
  },
  {
    heading: "Grip socks are required at every reformer studio",
    body: "Universal across Indianapolis's reformer market. Bring your own — full-toe grip socks from Amazon cost a fraction of front-desk retail at every studio in the city.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Mass Ave & Downtown",
    description:
      "Indianapolis's most vibrant arts and entertainment corridor anchors the city's downtown Pilates scene. The Massachusetts Avenue stretch is walkable, dense with young professionals, and supports a studio culture that reflects the area's creative energy and health-consciousness.",
  },
  {
    name: "Broad Ripple & Near North",
    description:
      "Indianapolis's most active and community-oriented residential district supports independent studios that serve a young, health-invested population with accessible programming and a genuine neighborhood atmosphere.",
  },
  {
    name: "Nora & Far North Side",
    description:
      "The established residential corridor along the 86th Street spine — Nora, Keystone, Meridian-Kessler — supports both franchise and independent studios serving the area's professional and family communities with high-quality, consistently reliable programming.",
  },
  {
    name: "Carmel & North Suburbs",
    description:
      "Indiana's most affluent suburb has developed a strong wellness infrastructure that serves its health-invested residential community with premium franchise studios and a growing number of independent practices. Convenient for practitioners who live or work north of I-465.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in Indianapolis. Full-toe grip socks are the universal standard.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "Essential for Indianapolis's mat classes and home practice through the city's significant winter season.",
    price: "From $18",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in Indianapolis's classical studios. Useful for at-home reinforcement between sessions.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Essential for home practice through Indianapolis's long winters when outdoor movement is limited.",
    price: "From $10",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Post-class fascia release — invaluable on cold Indianapolis winter evenings after studio sessions.",
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
  { city: "Chicago", country: "United States", href: "/cities/chicago", studioCount: 6 },
  { city: "Minneapolis", country: "United States", href: "/cities/minneapolis", studioCount: 6 },
  { city: "Nashville", country: "United States", href: "/cities/nashville", studioCount: 6 },
  { city: "Columbus", country: "United States", href: "/cities/columbus", studioCount: 6 },
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
    title: "How Often Should You Do Pilates?",
    excerpt:
      "The research on training frequency — and how to build a sustainable weekly practice that actually works.",
    href: "/blog/how-often-should-you-do-pilates",
    category: "Education",
    readTime: "6 min read",
    date: "2026-02-01",
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
        { "@type": "ListItem", position: 3, name: "Indianapolis", item: "https://pilatescollectiveclub.com/cities/indianapolis" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Studios in Indianapolis, IN",
      url: "https://pilatescollectiveclub.com/cities/indianapolis",
      numberOfItems: 6,
      itemListElement: STUDIOS.map((s, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ExerciseGym",
          name: s.name,
          description: s.review.slice(0, 160),
          address: { "@type": "PostalAddress", streetAddress: s.address, addressLocality: "Indianapolis", addressRegion: "IN", addressCountry: "US" },
        },
      })),
    },
    {
      "@type": "Article",
      headline: "Best Pilates Studios in Indianapolis, IN (2026)",
      url: "https://pilatescollectiveclub.com/cities/indianapolis",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "Pilates Collective Club" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function IndianapolisPage() {
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
              Best Pilates Studios in Indianapolis, IN
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9c8678" }}>
              Updated October 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              Indianapolis — the Circle City — has grown into one of the Midwest's most dynamic wellness
              markets. The city's sports culture (Colts, Pacers, the Indy 500), large healthcare sector,
              and rapidly expanding young professional population have created genuine demand for
              high-quality movement practices. From the arts corridor of Massachusetts Avenue to the
              polished north suburbs of Carmel, Indianapolis's Pilates scene in 2026 offers a range of
              options that would surprise anyone who hasn't visited recently. These six studios represent
              the best the city has to offer.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="https://images.unsplash.com/photo-1564862384608-2fb0e2b5e0e4?w=1400&h=840&fit=crop"
              alt="Pilates studio in Indianapolis, IN"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">Indianapolis, Indiana</p>
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
              Gear Indianapolis instructors recommend.{" "}
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
              The 6 Best Pilates Studios in Indianapolis
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
              Booking Tips for Indianapolis
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
              Indianapolis Neighborhoods for Pilates
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
          searchPlaceholder="Ask: best reformer Pilates in Indianapolis…"
        />
      </main>
      <Footer />
    </>
  );
}
