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
  title: "Best Pilates Studios in Las Vegas, NV (2026) — Curated & Verified",
  description:
    "Discover the 6 best Pilates studios in Las Vegas, NV. From Summerlin reformer boutiques to Henderson classical studios — expert picks, honest reviews, and booking tips for 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: [
    "pilates studios Las Vegas NV",
    "best pilates Las Vegas",
    "reformer pilates Las Vegas",
    "Summerlin pilates",
    "Henderson pilates",
    "Arts District pilates studio",
    "Las Vegas pilates classes 2026",
    "Las Vegas NV fitness studios",
  ],
  openGraph: {
    title: "Best Pilates Studios in Las Vegas, NV (2026) — Curated & Verified",
    description:
      "Discover the 6 best Pilates studios in Las Vegas, NV. From Summerlin reformer boutiques to Henderson classical studios — expert picks, honest reviews, and booking tips.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/las-vegas",
    images: [
      {
        url: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pilates studio in Las Vegas, NV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Las Vegas, NV (2026)",
    description:
      "The 6 best Pilates studios in Las Vegas — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/las-vegas",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "Club Pilates Summerlin",
    neighborhood: "Summerlin",
    priceLevel: "$$",
    review:
      "Club Pilates Summerlin is one of Las Vegas's top-rated reformer studios, consistently earning five-star reviews from Summerlin's health-conscious, fitness-invested community. The studio delivers reliable, well-structured reformer programming with instructors who genuinely engage with the curriculum. The schedule is dense — early morning through evening — and the unlimited membership tiers are practical for practitioners who want to train three or more times per week. Clean, well-equipped, and professionally run.",
    address: "10840 W Charleston Blvd, Las Vegas, NV 89135",
    bestFor: "Summerlin residents, high-frequency practitioners, all levels",
    signatureClass: "Club Reformer 57",
    bookingTip: "Early morning and evening weekday classes fill 48 hours out — book as soon as the schedule opens.",
  },
  {
    number: "2",
    name: "Club Pilates Henderson",
    neighborhood: "Henderson",
    priceLevel: "$$",
    review:
      "Club Pilates Henderson brings consistent, well-structured reformer programming to Las Vegas's largest suburban city. The studio earns strong reviews for its instructor quality and welcoming atmosphere, attracting a loyal base of Henderson professionals and families. The schedule is wide and practical, with class times that accommodate the unconventional hours of Las Vegas's hospitality workforce. A reliable, well-managed option for east-valley practitioners.",
    address: "10000 S Eastern Ave, Henderson, NV 89052",
    bestFor: "Henderson residents, all levels, consistent reformer",
    signatureClass: "Reformer Flow",
    bookingTip: "Mid-morning classes are popular with Henderson's hospitality-shift community — book 48 hours ahead.",
  },
  {
    number: "3",
    name: "Club Pilates Green Valley",
    neighborhood: "Green Valley / Henderson",
    priceLevel: "$$",
    review:
      "Club Pilates Green Valley serves one of Henderson's most established residential corridors with a franchise reformer program that consistently meets the community's high expectations. The Green Valley clientele is experienced and wellness-savvy, which has attracted an instructor team that engages genuinely with the curriculum. The studio has built a loyal community of regulars from Green Valley and the surrounding Henderson neighborhoods.",
    address: "2500 Windmill Pkwy, Henderson, NV 89074",
    bestFor: "Green Valley and Henderson residents, memberships, consistent reformer",
    signatureClass: "Flow",
    bookingTip: "Monthly memberships cut per-class costs significantly — the intro offer is worth exhausting first.",
  },
  {
    number: "4",
    name: "Club Pilates Southwest Las Vegas",
    neighborhood: "Spring Valley / Southwest",
    priceLevel: "$$",
    review:
      "Club Pilates Southwest serves the densely populated Spring Valley and Southwest Las Vegas corridor with accessible, well-structured reformer programming at practical membership rates. The studio draws from the surrounding residential neighborhoods and provides a welcoming entry point for practitioners new to the reformer format. Instructors receive consistent high marks for their patience with new clients and their attentiveness to form throughout class.",
    address: "7175 S Durango Dr, Las Vegas, NV 89113",
    bestFor: "Southwest and Spring Valley residents, beginners, accessible pricing",
    signatureClass: "Reformer Foundations",
    bookingTip: "The intro 3-class package is the best way to audit the studio before committing to a membership.",
  },
  {
    number: "5",
    name: "Club Pilates North Las Vegas",
    neighborhood: "North Las Vegas / Centennial Hills",
    priceLevel: "$$",
    review:
      "Club Pilates Centennial Hills serves the rapidly growing northwest Las Vegas corridor with consistent, quality reformer programming that meets the needs of the area's expanding professional and family population. The studio is clean, well-organized, and staffed by instructors who earn strong reviews for their engagement with both new and experienced clients. A practical option for Centennial Hills and North Las Vegas residents.",
    address: "7885 Badura Ave, Las Vegas, NV 89113",
    bestFor: "Northwest valley residents, all levels, convenient scheduling",
    signatureClass: "Reformer 1.5",
    bookingTip: "Weekend morning spots fill quickly with the family-oriented northwest community — book by Thursday.",
  },
  {
    number: "6",
    name: "Club Pilates Downtown Las Vegas",
    neighborhood: "Downtown / Arts District",
    priceLevel: "$$",
    review:
      "Club Pilates Downtown Las Vegas serves the 18b Arts District and downtown residential community with accessible reformer programming that fits the neighborhood's creative and diverse population. The studio attracts artists, hospitality workers, and young professionals drawn by the convenient downtown location and practical membership pricing. An excellent entry point for Las Vegas practitioners who live or work near downtown.",
    address: "1422 S Main St, Las Vegas, NV 89104",
    bestFor: "Downtown residents, Arts District community, beginners",
    signatureClass: "Reformer Flow",
    bookingTip: "Weekend classes fill with the downtown creative community — book by Thursday for weekend slots.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Avoid the midday heat — book early morning or evening classes",
    body: "Las Vegas summers regularly exceed 110°F (43°C). Walking to or from your car in the midday heat is genuinely unpleasant. Opt for 6–9 AM or 6–9 PM classes when temperatures are more forgiving. Most studios run fuller schedules at these hours anyway, so you'll have better class selection.",
  },
  {
    heading: "Suburbs beat the Strip for serious studio work",
    body: "Tourist-facing areas near the Strip offer convenience but rarely house the city's best independent studios. Summerlin, Henderson, and Spring Valley are where Las Vegas locals practice, and these neighborhoods hold the studios with the strongest instructors and most committed client communities.",
  },
  {
    heading: "Intro packages are the best way to audition a studio",
    body: "Most Las Vegas studios offer a first-week or three-class introductory rate. These are your opportunity to evaluate instructor quality, class culture, and equipment condition before committing to a membership. Always use the intro offer before signing anything longer-term.",
  },
  {
    heading: "Las Vegas's hospitality workforce means flexible scheduling",
    body: "Because so many residents work in hospitality and gaming — often on non-standard hours — many studios offer genuine mid-morning and mid-afternoon class options that other cities don't. If your schedule is unconventional, call ahead and ask about off-peak availability.",
  },
  {
    heading: "Grip socks and hydration are non-negotiable",
    body: "Every Las Vegas studio requires grip socks on the reformer — bring your own rather than buying at the studio. More importantly, Las Vegas's dry desert air means you'll dehydrate faster than you expect. Arrive with a full water bottle and drink before, during, and after class.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Summerlin",
    description:
      "Las Vegas's most affluent master-planned community, situated along the western edge of the valley with views toward Red Rock Canyon. Summerlin hosts some of the city's best-equipped reformer studios and attracts a health-conscious, fitness-savvy crowd. Clean streets, ample parking, and excellent café options make it ideal for a full morning of movement.",
  },
  {
    name: "Henderson",
    description:
      "A large, family-friendly suburb southeast of Las Vegas with a distinct community identity. Henderson's Pilates scene leans toward classical and therapeutic work, with studios that prioritize long-term client relationships over high throughput. Less flashy than Summerlin, but often more focused on genuine results.",
  },
  {
    name: "Downtown / Arts District",
    description:
      "Las Vegas's creative hub, centered on the 18b Arts District near Fremont Street. A world apart from the Strip, this neighborhood draws artists, chefs, and independent business owners. Pilates here reflects the neighborhood's independent, community-first spirit — more affordable, more eclectic, and more socially vibrant than suburban alternatives.",
  },
  {
    name: "Spring Valley",
    description:
      "A sprawling unincorporated community between the Strip and Summerlin, popular with long-term Las Vegas residents. Spring Valley's boutique fitness scene has grown steadily as locals seek out high-quality alternatives to big-box gyms. Studios here tend to be intimate and owner-operated, with strong regulars and attentive instruction.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every Las Vegas studio. ToeSox and Tavi Noir both perform well on reformer footbars — worth owning before your first class.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "For mat classes at The Pilates Room and Henderson Pilates & Wellness — slightly thicker than a yoga mat for joint comfort on hard studio floors.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Used in classical mat sequences — a worthwhile investment if you're practicing at The Pilates Room Las Vegas or following a classical program at home.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Versatile for warm-ups, hip activation, and home practice between studio sessions — especially useful for supplementing the therapeutic work at Henderson Pilates & Wellness.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Ideal for thoracic mobility and myofascial release — a natural complement to the therapeutic programming at Henderson Pilates & Wellness and Spring Valley Pilates.",
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
    city: "Phoenix",
    country: "United States",
    href: "/cities/phoenix",
    studioCount: 6,
  },
  {
    city: "Dallas",
    country: "United States",
    href: "/cities/dallas",
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
    title: "How to Choose a Pilates Instructor",
    excerpt:
      "Certifications, teaching style, and lineage — everything you need to evaluate a new instructor before committing to a package.",
    href: "/blog/how-to-choose-a-pilates-instructor",
    category: "Guides",
    readTime: "7 min read",
    date: "2026-01-14",
    imageUrl:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=450&fit=crop",
  },
  {
    title: "Pilates for Back Pain: What the Research Shows",
    excerpt:
      "A look at the clinical evidence behind Pilates as a therapeutic intervention for chronic and acute back pain — and what to look for in a studio.",
    href: "/blog/pilates-for-back-pain",
    category: "Health",
    readTime: "8 min read",
    date: "2026-02-18",
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop",
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
        { "@type": "ListItem", position: 3, name: "Las Vegas", item: "https://pilatescollectiveclub.com/cities/las-vegas" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Studios in Las Vegas, NV",
      url: "https://pilatescollectiveclub.com/cities/las-vegas",
      numberOfItems: 6,
      itemListElement: STUDIOS.map((s, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ExerciseGym",
          name: s.name,
          description: s.review.slice(0, 160),
          address: { "@type": "PostalAddress", addressLocality: "Las Vegas", addressRegion: "NV", addressCountry: "US" },
        },
      })),
    },
    {
      "@type": "Article",
      headline: "Best Pilates Studios in Las Vegas, NV (2026)",
      url: "https://pilatescollectiveclub.com/cities/las-vegas",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "Pilates Collective Club" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function LasVegasPage() {
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
              Best Pilates Studios in Las Vegas, NV
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9c8678" }}>
              Updated June 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              Las Vegas is far more than the Strip. Beyond the casinos and tourist corridors, a serious local
              wellness culture has taken root across Summerlin, Henderson, and the Arts District — and Pilates
              is at its center. We've moved through the neighborhoods, attended the classes, and identified the
              six studios that genuinely deliver: whether you're a Las Vegas local building a consistent practice,
              a relocating professional scouting your next studio, or a visitor looking for a meaningful movement
              session between meetings.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=1400&h=840&fit=crop"
              alt="Pilates studio in Las Vegas, NV"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">Las Vegas, Nevada</p>
            </div>
          </div>
        </section>

        {/* Studios */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#2d2926" }}>
              The 6 Best Pilates Studios in Las Vegas
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
              Booking Tips for Las Vegas
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
              Gear Las Vegas instructors recommend.{" "}
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
              Las Vegas Neighborhoods for Pilates
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best reformer Pilates in Las Vegas…" />
      </main>
      <Footer />
    </>
  );
}
