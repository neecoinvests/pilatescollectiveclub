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
  title: "Best Pilates Studios in Sydney (2026)",
  description: "The best Pilates studios in Sydney: reformer studios in Surry Hills, the North Shore, Manly and beyond. Six curated picks, verified October 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates sydney", "reformer pilates sydney", "best pilates studios sydney", "pilates studio sydney", "pilates classes sydney", "bondi pilates", "surry hills pilates", "pilates sydney cbd", "best reformer pilates sydney", "pilates eastern suburbs sydney"],
  openGraph: {
    title: "Best Pilates Studios in Sydney (2026)",
    description: "Six curated Pilates studios in Sydney: Surry Hills, North Shore and Manly picks. Verified October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/sydney",
    images: [{ url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=80", width: 1200, height: 630, alt: "Sydney city guide: Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Sydney (2026)",
    description: "Our curated guide to Sydney's finest Pilates studios: six verified picks with booking tips.",
    images: ["https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=80"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/sydney" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Studio Mouvoir",
    neighborhood: "Surry Hills",
    priceLevel: "$$$",
    review: "Studio Mouvoir is the vision of friends Erin Brooks and Claire Victor, who brought together their love of fitness, design, food and community. It sits in the iconic Paramount building in Surry Hills and takes a fresh, progressive approach to Pilates.",
    caveat: "a design-led boutique: expect boutique pricing.",
    address: "Paramount House Hotel (rooftop), 80 Commonwealth St, Surry Hills NSW 2010",
    bestFor: "Progressive reformer in Surry Hills",
    signatureClass: "Reformer Pilates",
    bookingTip: "Book ahead for after-work classes.",
  },
  {
    number: "02",
    name: "BodyMindLife",
    neighborhood: "Surry Hills",
    priceLevel: "$$",
    review: "BodyMindLife is a long-running Sydney yoga and Pilates studio on Elizabeth Street in Surry Hills.",
    caveat: "a yoga-and-Pilates studio: check that your class is Pilates if that is what you want.",
    address: "432–434 Elizabeth Street, Surry Hills NSW 2010",
    bestFor: "Pilates alongside yoga in Surry Hills",
    signatureClass: "Pilates",
    bookingTip: "Check the timetable for Pilates-specific classes.",
  },
  {
    number: "03",
    name: "Fluidform Pilates",
    neighborhood: "Multiple Sydney locations",
    priceLevel: "$$$",
    review: "Fluidform Pilates is the creation of Kirsten King and operates studios across several locations, with a reputation for precise, sculpting reformer classes.",
    caveat: "we could not confirm which studio is closest to you: check Fluidform's location list before booking.",
    address: "",
    bestFor: "Sculpting reformer classes across Sydney",
    signatureClass: "Fluidform Reformer",
    bookingTip: "Pick the studio closest to home or work and book a few days ahead.",
  },
  {
    number: "04",
    name: "Mode Pilates",
    neighborhood: "North Sydney · Mosman · Manly",
    priceLevel: "$$",
    review: "Mode Pilates has studios in North Sydney, Mosman and Manly, where progressive Pilates meets barre and cardio.",
    caveat: "a Pilates–barre–cardio blend rather than classical Pilates.",
    address: "",
    bestFor: "Pilates with barre and cardio on the North Shore",
    signatureClass: "Progressive Pilates",
    bookingTip: "If one studio is full, try another on the North Shore.",
  },
  {
    number: "05",
    name: "Bodylove Pilates",
    neighborhood: "Manly",
    priceLevel: "$$",
    review: "Bodylove Pilates on The Corso in Manly offers its Mindful Burn™ practice: a good option for northern beaches locals.",
    caveat: "a signature method rather than classical Pilates.",
    address: "29-33 The Corso, Manly NSW 2095",
    bestFor: "The Mindful Burn™ in Manly",
    signatureClass: "The Mindful Burn™",
    bookingTip: "Pair an early class with a swim at Manly Beach.",
  },
  {
    number: "06",
    name: "KX Pilates",
    neighborhood: "Multiple Sydney locations",
    priceLevel: "$$",
    review: "KX Pilates is one of Australia's best-known reformer chains, known for intense, fast-moving reformer classes, with studios across Sydney.",
    caveat: "a chain format: consistent and energetic, but less individual than a boutique.",
    address: "",
    bestFor: "High-intensity reformer near home or work",
    signatureClass: "KX Reformer",
    bookingTip: "Check which KX studio is closest before buying a pack.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Book 5–7 days ahead for popular morning classes",
    body: "Sydney's premium studios release bookings 7 days in advance, and the 6am–8am weekday slots vanish almost immediately. Set a reminder and book as soon as the window opens.",
  },
  {
    heading: "Introductory offers are widely available and genuinely useful",
    body: "Most Sydney reformer studios offer new-client intro packs, typically 3 classes for $59–99. Use these to assess instruction quality and studio culture before signing a monthly membership.",
  },
  {
    heading: "ClassPass works well across Sydney",
    body: "ClassPass covers a wide range of Sydney studios and is particularly useful for sampling the reformer scene across suburbs, from Bondi to the CBD to the lower north shore, before committing.",
  },
  {
    heading: "Grip socks are mandatory: and sold at most studios",
    body: "Every reformer studio requires grip socks. Bring your own (toeless style is the norm) or expect to pay $20–25 at the desk. Buying in advance is cheaper and more convenient.",
  },
  {
    heading: "Expect to pay $35–55 per reformer class",
    body: "Drop-in reformer Pilates in Sydney runs from around $35 at volume studios to $55 at boutique or small-group offerings. Membership and class packs bring the per-session cost down to $25–38.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Bondi & Eastern Suburbs",
    description:
      "The epicenter of Sydney's wellness culture. Bondi Beach and the surrounding eastern suburbs have the highest concentration of Pilates studios in the city, ranging from high-energy reformer boutiques to quieter mat-focused spaces. The clientele is health-conscious and the competition between studios is strong, which generally means high instruction standards.",
  },
  {
    name: "CBD & Surry Hills",
    description:
      "The city center and its inner-south neighbor cater to different crowds: the CBD for convenience-driven lunchtime and before-work classes, Surry Hills for more independent studios with a stronger method focus. Between them, they cover most of what a Sydney resident might need.",
  },
  {
    name: "Lower North Shore",
    description:
      "Mosman, Neutral Bay, and Cremorne host some of Sydney's most established and community-rooted studios. These tend to be smaller, more personalized, and frequented by long-term locals building multi-year practices. Less trend-driven, more consistency-focused.",
  },
  {
    name: "Inner West",
    description:
      "Newtown, Balmain, and Leichhardt have seen meaningful Pilates growth in recent years, with independent studios catering to a younger, more eclectic crowd. Less polished than the east, but often more adventurous in programming and generally friendlier to beginners.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios. Full-toe grip socks are the standard.",
    price: "$30.00",
    url: "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A quality 6mm mat is worth having for mat classes and home practice between studio sessions.",
    price: "$144.00",
    url: "https://www.amazon.com/dp/B0066T7I54?tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios incorporate the magic circle: worth owning for home reinforcement work.",
    price: "$35.00",
    url: "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands",
    note: "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric resistance loops extend your home Pilates practice and support reformer spring work.",
    price: "$29.00",
    url: "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20",
  },
  {
    name: "Foam Roller",
    note: "Our pick: OPTP PRO-Roller Foam Roller (36-inch). Essential for fascial release and spinal mobility work before and after class.",
    price: "$62.99",
    url: "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20",
  },
  {
    name: "Home Pilates Reformer",
    note: "Our pick: PAETA Wooden Foldable Reformer. A home reformer extends your studio practice: AeroPilates and Align entry models deliver a genuine full-body session.",
    price: "$699.98",
    url: "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20",
  },
];


const RELATED_CITIES = [
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 6 },
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 6 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 6 },
  { city: "Amsterdam", country: "Netherlands", href: "/cities/amsterdam", studioCount: 6 },
];

const FURTHER_READING = [
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt: "Everything you need between studio sessions, from a quality mat to resistance bands.",
    href: "/blog/best-pilates-equipment-for-home-practice",
    category: "Equipment",
    readTime: "10 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80",
  },
  {
    title: "The Beginner's Guide to Reformer Pilates",
    excerpt: "What to expect in your first reformer class, how to choose a studio, and how to progress.",
    href: "/blog/beginners-guide-to-reformer-pilates",
    category: "Beginner Guide",
    readTime: "8 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=800&q=80",
  },
];

const CITY_FAQS = [
  { q: "What are the best Pilates studios in Sydney?", a: "Our 6 curated picks are Studio Mouvoir (Surry Hills), BodyMindLife (Surry Hills), Fluidform Pilates (Multiple Sydney locations), Mode Pilates (North Sydney · Mosman · Manly), Bodylove Pilates (Manly) and KX Pilates (Multiple Sydney locations). Each listing above covers what the studio is best for, its signature class and a booking tip." },
  { q: "Which Sydney neighborhoods are best for Pilates?", a: "This guide covers Bondi & Eastern Suburbs, CBD & Surry Hills, Lower North Shore and Inner West. Bondi & Eastern Suburbs: The epicenter of Sydney's wellness culture." },
  { q: "What should I know about booking Pilates classes in Sydney?", a: "Book 5–7 days ahead for popular morning classes. Sydney's premium studios release bookings 7 days in advance, and the 6am–8am weekday slots vanish almost immediately." },
  { q: "What should I bring to a Pilates class in Sydney?", a: "Grip socks are required at most reformer studios. Our gear list for Sydney covers Pilates grip socks, Pilates mat, magic circle, resistance bands, foam roller and home Pilates reformer." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Sydney (2026)",
      "description": "The best Pilates studios in Sydney: reformer studios in Surry Hills, the North Shore, Manly and beyond. Six curated picks, verified October 2026.",
      "url": "https://pilatescollectiveclub.com/cities/sydney",
      "datePublished": "2026-06-28",
      "dateModified": "2026-10-20",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1400&q=80" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/sydney" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Sydney", GEAR.filter((g) => /amazon\.[a-z.]+\/dp\//.test(g.url)).map((g) => ({ name: g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name, description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Sydney", "item": "https://pilatescollectiveclub.com/cities/sydney" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Sydney",
      "description": "Curated guide to the top 5 Pilates studios in Sydney.",
      "url": "https://pilatescollectiveclub.com/cities/sydney",
      "numberOfItems": 6,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": {
            "@type": "PostalAddress",
            "streetAddress": s.address,
            "addressLocality": "Sydney",
            "addressCountry": "AU",
          },
        },
      })),
    },
  ],
};

export default function SydneyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="r-ah r-ah-legacy">
          <div className="r-wrap">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[12.5px] font-bold" style={{ color: "#0a0a0a" }}>
                City Guide
              </span>
              <span style={{ color: "#9a9490" }}>·</span>
              <span className="text-[12.5px] font-bold" style={{ color: "#3a3530" }}>
                Australia
              </span>
            </div>
            <h1 className="mb-6 r-d r-h1">
              The Best Pilates Studios<br />
              <span style={{ color: "#a98a5f" }}>in Sydney</span>
            </h1>
            <p className="text-base mb-8" style={{ color: "#6f6964" }}>
              Updated May 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#ddd6cc" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#3a3530" }}>
              Sydney has one of the most developed Pilates cultures in the southern hemisphere. The city's appetite for high-quality movement, outdoor living, and physical wellness has produced a reformer studio scene that punches well above its weight globally. From harborside boutiques in Mosman to high-energy reformer studios in Bondi, the standard of instruction is consistently impressive. This guide covers the six studios we rate most highly, from the CBD to the eastern suburbs, along with everything you need to know before booking your first class.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image relative r-ah-img">
              <Image
                src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1400&q=80"
                alt="Sydney skyline"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-base font-bold mb-1">Sydney, Australia</p>
                  <p className="text-white/70 text-xs">One of the southern hemisphere's most vibrant Pilates markets</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-[12.5px] font-bold mb-10" style={{ color: "#0a0a0a" }}>
              6 Studios · Curated & Verified
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
            <h2 className="mb-10 r-d r-h2">
              Tips for booking Pilates in Sydney
            </h2>
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
            <h2 className="mb-4 r-d r-h2">
              Best neighborhoods for Pilates in Sydney
            </h2>
            <p className="text-base mb-10" style={{ color: "#3a3530" }}>
              Sydney's Pilates landscape is shaped by its neighborhoods. Here's where to look depending on where you're based.
            </p>
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
              Grip socks are required at most reformer studios in Sydney. These are our recommended picks: all available on Amazon.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#0a0a0a", textDecoration: "underline", fontSize: "inherit" }}>Affiliate disclosure.</Link>
            </p>
            <QuickPicks className="mb-0" picks={GEAR.map((g) => ({ name: g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name, price: g.price, url: g.url, note: g.name }))} />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              {FURTHER_READING.map((a) => (
                <ArticleCard key={a.href} {...a} />
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Find Pilates near you"
          subtitle="Use our curated city guides to find the best Pilates studios worldwide."
          showSearch
          searchPlaceholder="Ask: best reformer Pilates in London…"
        />
      </main>
      <Footer />
    </>
  );
}
