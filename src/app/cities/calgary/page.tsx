import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import QuickPicks from "@/components/QuickPicks";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml, productItemList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Calgary (2026)",
  description: "The best Pilates studios in Calgary: reformer and yoga in Inglewood, heated reformer in Mission, an award-winning center and more. Six picks for 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates calgary", "reformer pilates calgary", "best pilates studios calgary", "pilates inglewood", "pilates mission calgary", "heated reformer calgary", "pilates marda loop", "pilates classes calgary"],
  openGraph: {
    title: "Best Pilates Studios in Calgary (2026)",
    description: "Six curated Pilates studios in Calgary: Inglewood, Mission, Bridgeland, Marda Loop, Mayfair and south Calgary. Checked November 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/calgary",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-water-towel-bench.png", width: 1200, height: 630, alt: "Calgary Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Calgary (2026)",
    description: "Six curated Pilates studios in Calgary: Inglewood, Mission, Bridgeland, Marda Loop, Mayfair and south Calgary. Checked November 2026.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-water-towel-bench.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/calgary" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Junction 9 Yoga & Pilates",
    neighborhood: "Inglewood · Mission",
    priceLevel: "$$",
    review: "Junction 9 runs yoga, mat Pilates and reformer Pilates from studios in Inglewood and Mission, and is rated 4.9 from thousands of ClassPass reviews. Its Inglewood rooftop hosts open-air summer classes.",
    caveat: "it is a yoga and Pilates studio, so check that you have booked a reformer class.",
    address: "919 9 Ave SE, Calgary, AB",
    bestFor: "Reformer and yoga under one roof",
    signatureClass: "Reformer",
    bookingTip: "Look out for rooftop classes in summer.",
  },
  {
    number: "02",
    name: "Reformed Pilates Mission",
    neighborhood: "Mission",
    priceLevel: "$$",
    review: "Reformed Pilates runs reformer classes in rooms that are heated but not hot, with several studios across Calgary. The Mission studio on 4 Street SW is the most central.",
    caveat: "warm rooms; dress in light layers.",
    address: "2115 4 St SW, Calgary, AB",
    bestFor: "Warm-room reformer",
    signatureClass: "Heated Reformer",
    bookingTip: "Pick the studio nearest you; the schedules differ.",
  },
  {
    number: "03",
    name: "Calgary Pilates Centre",
    neighborhood: "Mayfair (Elbow Drive)",
    priceLevel: "$$$",
    review: "Calgary Pilates Centre in Mayfair Place on Elbow Drive received the 2025 Consumer Choice Award for Pilates studios in Southern Alberta.",
    caveat: "a traditional studio; book privates ahead.",
    address: "6707 Elbow Dr SW, Suite 231, Calgary, AB T2V 0E4",
    bestFor: "Established equipment studio",
    signatureClass: "Private Session",
    bookingTip: "Start with a private to learn the equipment.",
  },
  {
    number: "04",
    name: "Refine Pilates Method",
    neighborhood: "Bridgeland",
    priceLevel: "$$",
    review: "Refine Pilates Method on Memorial Drive runs Level 1 and Level 2 reformer classes, workshops, online classes and teacher training, and reviewers praise its inclusive atmosphere.",
    caveat: "a smaller studio with limited class times.",
    address: "414 Memorial Dr NE, Calgary, AB T2E 4Y7",
    bestFor: "Inclusive, leveled reformer",
    signatureClass: "Reformer Level 1",
    bookingTip: "Start at Level 1 before moving up.",
  },
  {
    number: "05",
    name: "Club Pilates Marda Loop",
    neighborhood: "Marda Loop",
    priceLevel: "$$",
    review: "Club Pilates Marda Loop on 34 Avenue SW runs the chain's leveled reformer program, a reliable choice for beginners in the inner southwest.",
    caveat: "franchise format with larger classes than the independents.",
    address: "2107 34 Ave SW, #130, Calgary, AB T2T 2C5",
    bestFor: "Structured beginner reformer",
    signatureClass: "CP Reformer Flow",
    bookingTip: "Start with an Intro class before booking Level 1.",
  },
  {
    number: "06",
    name: "Reformed Pilates Macleod Trail",
    neighborhood: "South Calgary",
    priceLevel: "$$",
    review: "Reformed Pilates' Macleod Trail studio brings the same warm-room reformer classes to south Calgary.",
    caveat: "same brand as the Mission studio, so choose by location.",
    address: "10816 Macleod Trail SE, Unit 412, Calgary, AB",
    bestFor: "Warm-room reformer in the south",
    signatureClass: "Heated Reformer",
    bookingTip: "Handy if you live near Southcentre or Willow Park.",
  },
];

const BOOKING_TIPS = [{"heading": "Choose warm or cool", "body": "Some Calgary studios heat their reformer rooms. Check the class description if you prefer a cool room."}, {"heading": "Book early mornings ahead", "body": "Before-work classes fill first. Book as soon as the schedule opens."}, {"heading": "Plan for winter", "body": "Allow extra travel time in snow, and bring layers for the walk to the studio."}, {"heading": "Start with leveled classes", "body": "Several studios run Level 1 and Level 2 reformer. Start at Level 1."}, {"heading": "Bring grip socks", "body": "Grip socks are required at most reformer studios in Calgary."}];

const NEIGHBORHOODS = [{"name": "Inglewood", "description": "Yoga and reformer on 9 Avenue SE, with rooftop classes in summer."}, {"name": "Mission & Marda Loop", "description": "Warm-room reformer on 4 Street SW and Club Pilates on 34 Avenue SW."}, {"name": "Bridgeland", "description": "Inclusive, leveled reformer on Memorial Drive."}, {"name": "Mayfair & south Calgary", "description": "An established center on Elbow Drive and warm-room reformer on Macleod Trail."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Vancouver", "country": "Canada", "href": "/cities/vancouver", "studioCount": 6}, {"city": "Toronto", "country": "Canada", "href": "/cities/toronto", "studioCount": 6}, {"city": "Montreal", "country": "Canada", "href": "/cities/montreal", "studioCount": 6}, {"city": "Denver", "country": "United States", "href": "/cities/denver", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favorites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}, {"title": "Best Pilates Reformer Brands (2026)", "excerpt": "Every major reformer brand ranked, for home practitioners and studio owners.", "href": "/blog/best-pilates-reformer-brands", "category": "Equipment", "readTime": "18 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Calgary?", "a": "Our 6 picks are Junction 9 Yoga & Pilates (Inglewood · Mission), Reformed Pilates Mission (Mission), Calgary Pilates Centre (Mayfair (Elbow Drive)), Refine Pilates Method (Bridgeland), Club Pilates Marda Loop (Marda Loop) and Reformed Pilates Macleod Trail (South Calgary). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Calgary neighborhoods are best for Pilates?", "a": "This guide covers Inglewood, Mission & Marda Loop, Bridgeland and Mayfair & south Calgary. Yoga and reformer on 9 Avenue SE, with rooftop classes in summer."}, {"q": "What should I know about booking Pilates classes in Calgary?", "a": "Choose warm or cool. Book early mornings ahead. Plan for winter."}, {"q": "What should I bring to a Pilates class in Calgary?", "a": "Grip socks are required at most reformer studios. Our gear list for Calgary covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Is there heated reformer Pilates in Calgary?", "a": "Yes. Reformed Pilates runs reformer classes in rooms that are heated but not hot, at studios in Mission, south Calgary and elsewhere."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Calgary (2026)",
      "description": "The best Pilates studios in Calgary: reformer and yoga in Inglewood, heated reformer in Mission, an award-winning center and more. Six picks for 2026.",
      "url": "https://pilatescollectiveclub.com/cities/calgary",
      "datePublished": "2026-11-01",
      "dateModified": "2026-11-01",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-water-towel-bench.png" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/calgary" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Calgary", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Calgary", "item": "https://pilatescollectiveclub.com/cities/calgary" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Calgary, AB",
      "url": "https://pilatescollectiveclub.com/cities/calgary",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Calgary", "addressCountry": "CA" },
        },
      })),
    },
  ],
};

export default function CalgaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="r-ah r-ah-legacy">
          <div className="r-wrap">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[12.5px] font-bold" style={{ color: "#0a0a0a" }}>City Guide</span>
              <span style={{ color: "#9a9490" }}>·</span>
              <span className="text-[12.5px] font-bold" style={{ color: "#3a3530" }}>Canada</span>
            </div>
            <h1 className="mb-6 r-d r-h1">
              The Best Pilates Studios<br />
              <span style={{ color: "#a98a5f" }}>in Calgary, AB</span>
            </h1>
            <p className="text-base mb-8" style={{ color: "#6f6964" }}>
              Studios checked November 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#ddd6cc" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#3a3530" }}>
              {"Calgary's Pilates scene ranges from a highly rated yoga and reformer studio in Inglewood to heated reformer in Mission, a long-running award-winning center on Elbow Drive and small studios in Bridgeland and Marda Loop. This guide covers six studios with confirmed addresses, what each does best and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image relative r-ah-img">
              <Image src="/pictures/stitch-water-towel-bench.png" alt="Water bottle and towel on a studio bench" fill priority className="object-cover" />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-base font-bold mb-1">Calgary, AB, Canada</p>
                  <p className="text-white/70 text-xs">Reformer, heated reformer and yoga studios from Inglewood to Mission and Bridgeland</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-[12.5px] font-bold mb-10" style={{ color: "#0a0a0a" }}>
              {STUDIOS.length} Studios · Curated & Verified
            </p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (
                <StudioListing key={studio.number} {...studio} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-10 r-d r-h2">Tips for booking Pilates in Calgary</h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((tip) => (
                <div key={tip.heading} className="pcc-booking-tip flex gap-5 rounded-2xl p-6" style={{ backgroundColor: "#ede9e3" }}>
                  <div className="w-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: "#0a0a0a", minHeight: "20px" }} />
                  <div>
                    <h3 className="text-base mb-1.5 r-hx" style={{ color: "#0a0a0a" }}>{tip.heading}</h3>
                    <p className="text-base leading-relaxed" style={{ color: "#3a3530" }}>{tip.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-4 r-d r-h2">Best neighborhoods for Pilates in Calgary</h2>
            <p className="text-base mb-10" style={{ color: "#3a3530" }}>Where to look depending on where you live, work or stay.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {NEIGHBORHOODS.map((n) => (
                <div key={n.name} className="rounded-2xl p-6" style={{ backgroundColor: "#ede9e3" }}>
                  <h3 className="text-base mb-2 r-hx" style={{ color: "#0a0a0a" }}>{n.name}</h3>
                  <p className="text-base leading-relaxed" style={{ color: "#3a3530" }}>{n.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Gear */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-3 r-d r-h2">What to bring to your first class</h2>
            <p className="text-base mb-10" style={{ color: "#3a3530" }}>
              Grip socks are required at most reformer studios in Calgary. These are our recommended picks, all available on Amazon.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#0a0a0a", textDecoration: "underline", fontSize: "inherit" }}>Affiliate disclosure.</Link>
            </p>
            <QuickPicks className="mb-0" picks={GEAR.map((g) => ({ name: gearName(g), price: g.price, url: g.url, note: g.name }))} />
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 r-d r-h2">Frequently asked questions</h2>
            <div className="space-y-6">
              {CITY_FAQS.map((f) => (
                <div key={f.q} className="rounded-2xl p-6" style={{ backgroundColor: "#ede9e3" }}>
                  <h3 className="text-base mb-2 r-hx" style={{ color: "#0a0a0a" }}>{f.q}</h3>
                  <p className="text-base leading-relaxed" style={{ color: "#3a3530" }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-3 r-d r-h2">Related city guides</h2>
            <p className="text-base mb-10" style={{ color: "#3a3530" }}>Explore our guides to other cities with thriving Pilates scenes.</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
              {RELATED_CITIES.map((c) => (
                <CityCard key={c.city} {...c} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-10 r-d r-h2">Further reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {FURTHER_READING.map((a) => (
                <ArticleCard key={a.href} {...a} />
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Find Pilates near you"
          subtitle="Explore our curated guides to the best studios in cities worldwide."
          showSearch
          searchPlaceholder="Ask: best reformer Pilates in Calgary…"
        />
      </main>
      <Footer />
    </>
  );
}
