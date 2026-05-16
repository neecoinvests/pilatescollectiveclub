import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Chicago (2026) | Pilates Collective Club",
  description:
    "Find the best Pilates studios in Chicago — from Lincoln Park reformer boutiques to River North wellness studios. Our curated guide to Chicago Pilates in 2026.",
  keywords: [
    "pilates studios chicago",
    "reformer pilates chicago",
    "best pilates chicago",
    "pilates classes chicago",
    "chicago pilates 2026",
    "pilates lincoln park",
    "pilates river north chicago",
    "chicago reformer studios",
    "best reformer pilates chicago",
  ],
  openGraph: {
    title: "Best Pilates Studios in Chicago (2026)",
    description: "Our curated guide to Chicago's finest Pilates studios — five verified picks with booking tips.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/chicago",
    images: [{ url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80", width: 1200, height: 630, alt: "Chicago city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Chicago (2026)",
    description: "Our curated guide to Chicago's finest Pilates studios — five verified picks with booking tips.",
    images: ["https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/chicago" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Balanced Body Pilates Chicago",
    neighborhood: "Lincoln Park",
    priceLevel: "$$$",
    review:
      "Balanced Body Pilates Chicago is Lincoln Park&apos;s most respected classical studio — a serious practice that traces its teaching lineage directly to the New York tradition. The studio is immaculate, with Gratz apparatus for private classical work and Balanced Body reformers for group classes. The instruction team is led by a senior teacher with over two decades of experience, and the teaching quality throughout is unusually consistent. For practitioners who want Pilates to mean something — posture, breath, and genuine body intelligence — this is Chicago&apos;s essential address.",
    address: "2233 N Lincoln Avenue, Chicago, IL 60614",
    bestFor: "Classical method, serious practitioners, rehabilitation, all levels",
    signatureClass: "Classical Reformer Level 2",
    bookingTip: "Private sessions with the principal instructor book 3 weeks ahead. For group reformer classes, book online Monday for the full week — the 7am and 8:15am slots are first to go.",
  },
  {
    number: "02",
    name: "Studio Three",
    neighborhood: "River North",
    priceLevel: "$$$",
    review:
      "Studio Three is Chicago&apos;s most design-conscious boutique fitness studio, and its Pilates programme holds its own alongside the cycling and rowing offerings that made the brand famous. The River North flagship is architecturally striking — exposed brick, high ceilings, and premium reformer equipment in a space that feels like it belongs in New York. The Pilates instructors are experienced and technically strong, with a progressive reformer programme that rewards consistent attendance. The community here is motivated, friendly, and takes their practice seriously.",
    address: "113 W Illinois Street, Chicago, IL 60654",
    bestFor: "Premium boutique experience, dynamic reformer, fitness-focused professionals",
    signatureClass: "Reformer Sculpt & Burn",
    bookingTip: "Studio Three&apos;s membership bundles its Pilates, cycling, and rowing, which is genuine value for clients who want variety. Book Pilates classes separately if you&apos;re Pilates-only.",
  },
  {
    number: "03",
    name: "Chicago Pilates",
    neighborhood: "Gold Coast",
    priceLevel: "$$",
    review:
      "Chicago Pilates on the Gold Coast has earned a loyal following by doing something most studios claim but few achieve: consistently good teaching at a fair price. The Gold Coast studio is unpretentious and focused, with an experienced team that includes several instructors with physical therapy backgrounds. The class formats cover mat, reformer, and tower work, and the programming is genuinely progressive. For residents of the north side looking for a reliable, community-oriented studio without boutique prices, this is one of the city&apos;s best kept secrets.",
    address: "57 W Huron Street, Chicago, IL 60654",
    bestFor: "Community atmosphere, value, mat and reformer combination, north side residents",
    signatureClass: "Reformer & Tower Blend",
    bookingTip: "The Wednesday evening and Saturday morning classes are particularly popular with regulars. Book 3–4 days ahead — the community here values consistency, and slots fill with returning clients.",
  },
  {
    number: "04",
    name: "Form Pilates",
    neighborhood: "West Loop",
    priceLevel: "$$",
    review:
      "Form Pilates in the West Loop serves Chicago&apos;s fastest-growing residential neighbourhood with a modern, well-executed reformer programme that suits the area&apos;s professional demographic perfectly. The studio is modern and well-lit, with a schedule dense enough to accommodate early-morning, lunchtime, and evening sessions. The instructors are young, enthusiastic, and technically solid — particularly good with beginners who need patient, clear cuing. Pricing is competitive for the level of equipment and instruction quality on offer.",
    address: "800 W Fulton Market, Suite 310, Chicago, IL 60607",
    bestFor: "West Loop professionals, beginners, dynamic reformer, accessible pricing",
    signatureClass: "Form Reformer Flow",
    bookingTip: "The West Loop sees heavy demand during lunch hours from the tech and finance offices nearby. The 12pm and 12:30pm sessions book out the fastest — reserve them a full week ahead.",
  },
  {
    number: "05",
    name: "Club Pilates Wicker Park",
    neighborhood: "Wicker Park",
    priceLevel: "$",
    review:
      "Club Pilates Wicker Park brings the franchise&apos;s structured, accessible approach to one of Chicago&apos;s most eclectic and youthful neighbourhoods. The studio is clean, consistent, and well-staffed, with a level-based class system that makes reformer Pilates genuinely approachable for newcomers. The Wicker Park clientele brings an energy that distinguishes this location from the more corporate franchise locations, and the instruction is solid if not exceptional. For beginners and budget-conscious practitioners on the north-west side, it&apos;s a reliable and affordable home base.",
    address: "1520 N Damen Avenue, Chicago, IL 60622",
    bestFor: "Beginners, affordable membership, Wicker Park and Bucktown residents",
    signatureClass: "CP Signature Reformer",
    bookingTip: "Complete the CP1 intro series before joining group classes — the level structure here is taken seriously, and it&apos;ll make your practice more effective from day one.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Book 5–7 days in advance for sought-after slots",
    body: "Chicago&apos;s busiest Pilates studios release bookings 7 days ahead, and morning and evening slots at Lincoln Park, River North, and Gold Coast studios fill quickly. Monday morning is the most reliable time to book your week.",
  },
  {
    heading: "Introductory packages are the smartest way to start",
    body: "Most Chicago studios offer new-client intro packs — typically 3 classes for $45–75. Use these to trial instruction quality before committing to a monthly membership, which is how most Chicago regulars structure their practice.",
  },
  {
    heading: "ClassPass works well across Chicago",
    body: "ClassPass has strong coverage in Chicago and is useful for sampling studios across neighbourhoods — from Lincoln Park to the West Loop — before settling. It&apos;s also a practical solution for visitors staying in the city for a week or two.",
  },
  {
    heading: "Tipping is standard practice",
    body: "Tipping Pilates instructors is an established norm in Chicago. A $5–10 tip for group classes and $15–20 for private sessions is typical and genuinely valued, particularly at independently-run studios.",
  },
  {
    heading: "Expect to pay $25–50 per reformer class",
    body: "Drop-in reformer Pilates in Chicago ranges from around $25 at franchise studios to $50 at premium boutiques. Monthly unlimited memberships typically run $150–220 and offer strong value for practitioners attending 3 or more times per week.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Lincoln Park & Old Town",
    description:
      "Chicago&apos;s most established neighbourhood for serious Pilates. Lincoln Park has a high concentration of quality studios, from classical practices to modern reformer boutiques, serving a residential population that prioritises health and wellness. The area rewards those looking to build a long-term practice rather than sample what&apos;s new.",
  },
  {
    name: "River North & Gold Coast",
    description:
      "The premium heart of Chicago&apos;s downtown wellness scene. Studios in River North are typically design-forward, premium-priced, and well-suited to professionals working in the surrounding offices. Gold Coast offers a slightly calmer alternative with some of the city&apos;s most experienced independent instructors.",
  },
  {
    name: "West Loop & Fulton Market",
    description:
      "Chicago&apos;s fastest-growing neighbourhood has attracted a new generation of studios targeting the tech and creative professional community. Studios here are modern, schedule-dense, and increasingly sophisticated — and the neighbourhood&apos;s rapid growth means new openings are frequent.",
  },
  {
    name: "Wicker Park & Bucktown",
    description:
      "The north-west&apos;s creative heart has a growing Pilates scene that reflects its neighbourhood energy — younger, more eclectic, and less corporate than the Gold Coast or River North. Studios here tend to be more affordable and community-oriented, with a mix of beginners and intermediate practitioners.",
  },
];

const RELATED_CITIES = [
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 5 },
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 5 },
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
        { "@type": "ListItem", "position": 2, "name": "Studio Guides", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Chicago", "item": "https://pilatescollectiveclub.com/cities/chicago" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Chicago",
      "description": "Curated guide to the top 5 Pilates studios in Chicago.",
      "url": "https://pilatescollectiveclub.com/cities/chicago",
      "numberOfItems": 5,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "LocalBusiness",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": {
            "@type": "PostalAddress",
            "streetAddress": s.address,
            "addressLocality": "Chicago",
            "addressCountry": "US",
          },
          "priceRange": s.priceLevel,
        },
      })),
    },
  ],
};

export default function ChicagoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Studio Guides", href: "/cities" }, { label: "Chicago (2026)" }]} />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
                City Guide
              </span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>
                United States
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Chicago</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Updated May 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Chicago is a city that takes movement seriously — and its Pilates scene reflects that practicality and depth. Less trend-driven than Los Angeles, less saturated than New York, Chicago has cultivated a reformer and mat Pilates market built around genuine instruction quality and community loyalty. From the classical studios of Lincoln Park to the design-forward boutiques of River North, the city offers every type of Pilates practitioner something to invest in. This guide covers the five studios we rate most highly in Chicago, from the Gold Coast to Wicker Park, with everything you need before booking.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1400&q=80"
                alt="Chicago skyline"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Chicago, United States</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Serious instruction and lasting community — Chicago&apos;s Pilates scene</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
              5 Studios · Curated & Verified
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
              Tips for booking Pilates in Chicago
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
              Best neighbourhoods for Pilates in Chicago
            </h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Chicago&apos;s Pilates landscape is shaped by its neighbourhoods. Here&apos;s where to look depending on where you&apos;re based.
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
