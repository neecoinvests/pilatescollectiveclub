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
  title: "Best Pilates Studios in Singapore (2026)",
  description: "The best Pilates studios in Singapore: reformer and physio-led studios on Orchard Road, in the CBD, Holland Village and beyond. Six picks, verified 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates singapore", "reformer pilates singapore", "best pilates studios singapore", "pilates studio singapore", "pilates classes singapore", "pilates orchard singapore", "pilates dempsey", "pilates tiong bahru", "best reformer pilates singapore", "pilates cbd singapore"],
  openGraph: {
    title: "Best Pilates Studios in Singapore (2026)",
    description: "Six curated Pilates studios in Singapore: Orchard, CBD and Holland Village picks. Verified October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/singapore",
    images: [{ url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80", width: 1200, height: 630, alt: "Singapore city guide: Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Singapore (2026)",
    description: "Our curated guide to Singapore's finest Pilates studios: six verified picks with booking tips.",
    images: ["https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/singapore" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Absolute Pilates The Centrepoint",
    neighborhood: "Orchard Road",
    priceLevel: "$$$",
    review: "Absolute is one of Singapore's best-known boutique fitness brands, and its Pilates studios run reformer and Wunda chair classes. The Centrepoint studio on Orchard Road is the most central; there is another at i12 Katong. New clients have been offered two trial classes for $49.",
    caveat: "a larger brand: consistent and polished, but less intimate than a small independent studio.",
    address: "176 Orchard Rd, #04-06 & #04-101, The Centrepoint, Singapore 238843",
    bestFor: "Reformer and Wunda chair classes on Orchard Road",
    signatureClass: "Reformer & Wunda Chair",
    bookingTip: "Use the trial offer to compare formats before buying a pack.",
  },
  {
    number: "02",
    name: "Breathe Pilates",
    neighborhood: "Raffles Quay · United Square · Katong · The Heeren · Galaxis",
    priceLevel: "$$$",
    review: "Breathe Pilates combines physiotherapy and Pilates for rehab and fitness, with programs for injury recovery and chronic pain. It runs five studios with more than 100 weekly classes, including Raffles Quay in the CBD, and moved its flagship from Novena to United Square in 2026.",
    caveat: "physio-led programs are priced accordingly: classes have started from about $55.",
    address: "6 Raffles Quay, #11-02, Singapore 048580",
    bestFor: "Physio-informed Pilates for rehab and chronic pain",
    signatureClass: "Rehab Reformer",
    bookingTip: "Ask about a physiotherapy assessment if you are managing an injury.",
  },
  {
    number: "03",
    name: "STRONG Pilates Tanjong Pagar",
    neighborhood: "Tanjong Pagar",
    priceLevel: "$$",
    review: "STRONG Pilates, the Australian brand, runs HIIT-style reformer classes in Singapore, with studios including Tanjong Pagar, Holland Village and Orchard.",
    caveat: "high-intensity, music-driven classes, not classical Pilates.",
    address: "",
    bestFor: "HIIT-style reformer in the CBD",
    signatureClass: "STRONG Reformer",
    bookingTip: "Trial prices vary by studio: check the one closest to you.",
  },
  {
    number: "04",
    name: "MORF",
    neighborhood: "Geylang / Sims Avenue",
    priceLevel: "$$$",
    review: "MORF is a women-only reformer studio that leads ClassPass's Singapore reformer ranking, with a 4.85 average from more than 140 reformer-specific reviews and nearly 4.9 overall across more than 18,000 sessions.",
    caveat: "women-only.",
    address: "483 Sims Ave, Singapore",
    bestFor: "Women-only reformer with top ratings",
    signatureClass: "Reformer Pilates",
    bookingTip: "Popular classes fill quickly: book a few days ahead.",
  },
  {
    number: "05",
    name: "Lab Studios Holland Village",
    neighborhood: "Holland Village",
    priceLevel: "$$",
    review: "Lab Studios runs yoga, barre and Pilates, with a dedicated reformer Pilates outpost; its Holland Village studio is on Holland Avenue.",
    caveat: "a multi-discipline brand: check which classes are reformer.",
    address: "245A Holland Ave, Singapore",
    bestFor: "Pilates alongside yoga and barre in Holland Village",
    signatureClass: "Reformer Pilates",
    bookingTip: "Check the schedule for reformer classes specifically.",
  },
  {
    number: "06",
    name: "Pure Fitness Pilates",
    neighborhood: "Central Singapore",
    priceLevel: "$$$",
    review: "Pure is a large gym brand whose Pilates classes focus on strengthening and lengthening muscles, building flexibility and agility: a convenient option if you already train at Pure.",
    caveat: "a gym-based class rather than a boutique Pilates studio.",
    address: "",
    bestFor: "Pilates for existing Pure members",
    signatureClass: "Pilates Class",
    bookingTip: "Check your membership tier covers Pilates classes.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Book 5–7 days ahead: Singapore studios fill fast",
    body: "Singapore's premium Pilates studios run tight schedules and fill well in advance. Premium studios typically open bookings 7 days ahead; set a reminder and book immediately when slots open for popular morning and evening classes.",
  },
  {
    heading: "ClassPass is widely used and well-supported",
    body: "ClassPass has strong coverage in Singapore and is genuinely useful for sampling studios across districts before committing to a membership. Peak-time classes may carry a credit premium, but off-peak sessions are often excellent value.",
  },
  {
    heading: "GST applies to all studio fees",
    body: "Singapore's 9% GST applies to all wellness and studio services. Published prices may or may not include GST: check before booking to avoid surprises at payment.",
  },
  {
    heading: "Grip socks are mandatory everywhere",
    body: "Every reformer studio in Singapore requires grip socks. Bring your own (toeless style is the norm) or buy at the studio for about $16–22. Most studios also sell branded socks as a keepsake.",
  },
  {
    heading: "Expect to pay about $35–70 per reformer class",
    body: "Drop-in rates range from around $35 at volume studios to $70 for private or premium boutique sessions. Monthly memberships and class packs typically offer 20–35% savings over drop-in rates.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "CBD & Tanjong Pagar",
    description:
      "Singapore's financial district has a high density of studios catering to the lunchtime and early-morning professional crowd. Scheduling density is high, and studios here are optimized for convenience and efficiency. Some of the city's most classical and technically rigorous studios are also found here.",
  },
  {
    name: "Orchard & River Valley",
    description:
      "The Orchard corridor is home to several of Singapore's most established premium studios. Convenient, well-connected, and with a loyal residential and hotel-staying clientele, this is a reliable area to find high-quality reformer Pilates in clean, well-maintained facilities.",
  },
  {
    name: "Holland Village & Buona Vista",
    description:
      "Holland Village is a long-time expat enclave and has one of Singapore's most consistent concentrations of independent wellness studios. The atmosphere is relaxed and community-oriented, and studios here tend to have particularly loyal, long-term client bases.",
  },
  {
    name: "Dempsey Hill & Tanglin",
    description:
      "Set in beautifully converted colonial-era barracks, Dempsey Hill is a tranquil wellness enclave away from the urban density. Studios here are typically smaller, more holistic, and attract clients who prioritize calm, quality, and privacy over convenience.",
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
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 6 },
  { city: "Amsterdam", country: "Netherlands", href: "/cities/amsterdam", studioCount: 6 },
  { city: "Berlin", country: "Germany", href: "/cities/berlin", studioCount: 6 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 6 },
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
  { q: "What are the best Pilates studios in Singapore?", a: "Our 6 curated picks are Absolute Pilates (The Centrepoint (Orchard Road), Breathe Pilates (Raffles Quay · United Square · Katong · The Heeren · Galaxis), STRONG Pilates) Tanjong Pagar (Tanjong Pagar), MORF (Geylang / Sims Avenue), Lab Studios, Holland Village (Holland Village) and Pure Fitness, Pilates (Central Singapore). Each listing above covers what the studio is best for, its signature class and a booking tip." },
  { q: "Which Singapore neighborhoods are best for Pilates?", a: "This guide covers CBD & Tanjong Pagar, Orchard & River Valley, Holland Village & Buona Vista and Dempsey Hill & Tanglin. CBD & Tanjong Pagar: Singapore's financial district has a high density of studios catering to the lunchtime and early-morning professional crowd." },
  { q: "What should I know about booking Pilates classes in Singapore?", a: "Book 5–7 days ahead: Singapore studios fill fast. Singapore's premium Pilates studios run tight schedules and fill well in advance." },
  { q: "What should I bring to a Pilates class in Singapore?", a: "Grip socks are required at most reformer studios. Our gear list for Singapore covers Pilates grip socks, Pilates mat, magic circle, resistance bands, foam roller and home Pilates reformer." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Singapore (2026)",
      "description": "The best Pilates studios in Singapore: reformer and physio-led studios on Orchard Road, in the CBD, Holland Village and beyond. Six picks, verified 2026.",
      "url": "https://pilatescollectiveclub.com/cities/singapore",
      "datePublished": "2026-06-28",
      "dateModified": "2026-10-20",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1400&q=80" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/singapore" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Singapore", GEAR.filter((g) => /amazon\.[a-z.]+\/dp\//.test(g.url)).map((g) => ({ name: g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name, description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Singapore", "item": "https://pilatescollectiveclub.com/cities/singapore" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Singapore",
      "description": "Curated guide to the top 5 Pilates studios in Singapore.",
      "url": "https://pilatescollectiveclub.com/cities/singapore",
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
            "addressLocality": "Singapore",
            "addressCountry": "SG",
          },
        },
      })),
    },
  ],
};

export default function SingaporePage() {
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
                Singapore
              </span>
            </div>
            <h1 className="mb-6 r-d r-h1">
              The Best Pilates Studios<br />
              <span style={{ color: "#a98a5f" }}>in Singapore</span>
            </h1>
            <p className="text-base mb-8" style={{ color: "#6f6964" }}>
              Updated May 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#ddd6cc" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#3a3530" }}>
              Singapore has quietly become one of Asia's most sophisticated Pilates markets. A city that takes health seriously, and with a large international professional population accustomed to quality, Singapore has nurtured both classical lineage studios and forward-thinking reformer boutiques that hold their own against the best in London or New York. From Orchard Road to the CBD and Holland Village, there is a strong studio within reach of most of the island. This guide covers six studios we rate highly, with everything you need before booking your first session.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image relative r-ah-img">
              <Image
                src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1400&q=80"
                alt="Singapore skyline"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-base font-bold mb-1">Singapore</p>
                  <p className="text-white/70 text-xs">Asia's most sophisticated Pilates market</p>
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
              Tips for booking Pilates in Singapore
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
              Best neighborhoods for Pilates in Singapore
            </h2>
            <p className="text-base mb-10" style={{ color: "#3a3530" }}>
              Singapore's Pilates landscape is shaped by its neighborhoods. Here's where to look depending on where you're based.
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
              Grip socks are required at most reformer studios in Singapore. These are our recommended picks: all available on Amazon.{" "}
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
