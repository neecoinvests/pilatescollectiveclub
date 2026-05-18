import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Sydney (2026)",
  description:
    "Discover the best Pilates studios in Sydney — from harbourside reformer boutiques in Bondi to method-focused studios in the CBD. Our curated 2026 guide.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: [
    "pilates studios sydney",
    "reformer pilates sydney",
    "best pilates sydney",
    "pilates classes sydney",
    "sydney pilates 2026",
    "bondi pilates",
    "pilates sydney cbd",
    "sydney reformer studios",
    "best reformer pilates sydney",
  ],
  openGraph: {
    title: "Best Pilates Studios in Sydney (2026)",
    description: "Our curated guide to Sydney's finest Pilates studios — five verified picks with booking tips.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/sydney",
    images: [{ url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=80", width: 1200, height: 630, alt: "Sydney city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Sydney (2026)",
    description: "Our curated guide to Sydney's finest Pilates studios — five verified picks with booking tips.",
    images: ["https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=80"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/sydney" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Fluidform Pilates",
    neighborhood: "Paddington",
    priceLevel: "A$$$",
    review: "4.9 · 680+ reviews",
    address: "83 William St, Paddington NSW 2021",
    bestFor: "Reformer & mat with postural focus",
    signatureClass: "Fluidform Signature",
    bookingTip: "Online booking opens 7 days ahead",
  },
  {
    number: "02",
    name: "BodyMindLife",
    neighborhood: "Surry Hills",
    priceLevel: "A$$$",
    review: "4.8 · 920+ reviews",
    address: "38 Oxford St, Surry Hills NSW 2010",
    bestFor: "Yoga-Pilates-meditation centre",
    signatureClass: "Reformer Flow",
    bookingTip: "Unlimited monthly pass great value",
  },
  {
    number: "03",
    name: "Studio Mouvoir",
    neighborhood: "Potts Point",
    priceLevel: "A$$$",
    review: "4.9 · 370+ reviews",
    address: "1 Kellett Way, Potts Point NSW 2011",
    bestFor: "Aerial & reformer Pilates",
    signatureClass: "Mouvoir Aerial Reformer",
    bookingTip: "Book aerial classes 72 hrs in advance",
  },
  {
    number: "04",
    name: "Mode Pilates",
    neighborhood: "Newtown",
    priceLevel: "A$$",
    review: "4.9 · 450+ reviews",
    address: "188 King St, Newtown NSW 2042",
    bestFor: "Affordable boutique reformer",
    signatureClass: "Mode Power Reformer",
    bookingTip: "Intro offer: 2 weeks unlimited A$49",
  },
  {
    number: "05",
    name: "KX Pilates",
    neighborhood: "Bondi Junction",
    priceLevel: "A$$$",
    review: "4.8 · 1,100+ reviews",
    address: "500 Oxford St, Bondi Junction NSW 2022",
    bestFor: "High-intensity reformer circuit",
    signatureClass: "KX50 Signature",
    bookingTip: "First class free for new members",
  },
  {
    number: "06",
    name: "Bodylove Pilates",
    neighborhood: "Manly",
    priceLevel: "A$$",
    review: "4.9 · 340+ reviews",
    address: "46 Pittwater Rd, Manly NSW 2095",
    bestFor: "Beach-side reformer studio",
    signatureClass: "Bodylove Reformer",
    bookingTip: "Saturday ocean-view classes book out first",
  }
];

const BOOKING_TIPS = [
  {
    heading: "Book 5–7 days ahead for popular morning classes",
    body: "Sydney's premium studios release bookings 7 days in advance, and the 6am–8am weekday slots vanish almost immediately. Set a reminder and book as soon as the window opens.",
  },
  {
    heading: "Introductory offers are widely available and genuinely useful",
    body: "Most Sydney reformer studios offer new-client intro packs — typically 3 classes for $59–99. Use these to assess instruction quality and studio culture before signing a monthly membership.",
  },
  {
    heading: "ClassPass works well across Sydney",
    body: "ClassPass covers a wide range of Sydney studios and is particularly useful for sampling the reformer scene across suburbs — from Bondi to the CBD to the lower north shore — before committing.",
  },
  {
    heading: "Grip socks are mandatory — and sold at most studios",
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
      "The epicentre of Sydney's wellness culture. Bondi Beach and the surrounding eastern suburbs have the highest concentration of Pilates studios in the city, ranging from high-energy reformer boutiques to quieter mat-focused spaces. The clientele is health-conscious and the competition between studios is strong — which generally means high instruction standards.",
  },
  {
    name: "CBD & Surry Hills",
    description:
      "The city centre and its inner-south neighbour cater to different crowds — the CBD for convenience-driven lunchtime and before-work classes, Surry Hills for more independent studios with a stronger method focus. Between them, they cover most of what a Sydney resident might need.",
  },
  {
    name: "Lower North Shore",
    description:
      "Mosman, Neutral Bay, and Cremorne host some of Sydney's most established and community-rooted studios. These tend to be smaller, more personalised, and frequented by long-term locals building multi-year practices. Less trend-driven, more consistency-focused.",
  },
  {
    name: "Inner West",
    description:
      "Newtown, Balmain, and Leichhardt have seen meaningful Pilates growth in recent years, with independent studios catering to a younger, more eclectic crowd. Less polished than the east, but often more adventurous in programming and generally friendlier to beginners.",
  },
];

const RELATED_CITIES = [
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 5 },
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "Amsterdam", country: "Netherlands", href: "/cities/amsterdam", studioCount: 5 },
];

const FURTHER_READING = [
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt: "Everything you need between studio sessions — from a quality mat to resistance bands.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
                City Guide
              </span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>
                Australia
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Sydney</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Updated May 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Sydney has one of the most developed Pilates cultures in the southern hemisphere. The city&apos;s appetite for high-quality movement, outdoor living, and physical wellness has produced a reformer studio scene that punches well above its weight globally. From harbourside boutiques in Mosman to high-energy reformer studios in Bondi, the standard of instruction is consistently impressive. This guide covers the five studios we rate most highly, from the CBD to the eastern suburbs, along with everything you need to know before booking your first class.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1400&q=80"
                alt="Sydney skyline"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Sydney, Australia</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>One of the southern hemisphere&apos;s most vibrant Pilates markets</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
              6 Studios · Curated & Verified
            </p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (
                <StudioListing key={studio.number} {...studio} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Tips for booking Pilates in Sydney
            </h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((tip) => (
                <div key={tip.heading} className="flex gap-5 rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217, 194, 186, 0.3)" }}>
                  <div className="w-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: "#8b4a31", minHeight: "20px" }} />
                  <div>
                    <h3 className="text-base font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{tip.heading}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{tip.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best neighbourhoods for Pilates in Sydney
            </h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Sydney&apos;s Pilates landscape is shaped by its neighbourhoods. Here&apos;s where to look depending on where you&apos;re based.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {NEIGHBORHOODS.map((n) => (
                <div key={n.name} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217, 194, 186, 0.35)" }}>
                  <h3 className="text-base font-semibold mb-2" style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif" }}>{n.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{n.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Related city guides</h2>
            <p className="text-sm mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Explore our guides to other cities with thriving Pilates scenes.</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
              {RELATED_CITIES.map((c) => (
                <CityCard key={c.city} {...c} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
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
