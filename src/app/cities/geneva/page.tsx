import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "The Best Pilates Studios in Geneva",
  description:
    "The best Pilates studios in Geneva — classical reformer near the lake, expat-friendly English classes, and wellness retreats. Curated & verified picks.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates genève", "pilates geneva", "reformer pilates geneva", "best pilates geneva", "pilates studios geneva"],
  openGraph: {
    title: "The Best Pilates Studios in Geneva",
    description: "Our curated guide to the best Pilates studios in Geneva — five verified studios with booking tips.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/geneva",
    images: [{ url: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1200&q=80", width: 1200, height: 630, alt: "Geneva city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Geneva",
    description: "Our curated guide to the best Pilates studios in Geneva — five verified studios with booking tips.",
    images: ["https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/geneva",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Form Studio Geneva",
    neighborhood: "Pâquis",
    priceLevel: "CHF ··",
    review: "Form Studio has transplanted its clean, considered aesthetic from its Zurich original to a Geneva address in the Pâquis neighbourhood — a lakeside district with a cosmopolitan, slightly louche energy that provides an interesting contrast to the studio's precise interior. The reformer suite is immaculate and the instruction quality is consistent with the brand's established reputation: technically rigorous, internationally trained, and genuinely attentive to individual clients rather than performing to a room. The programming here suits intermediate practitioners who have moved past the basics and want to be genuinely challenged in a well-resourced environment. Geneva's expatriate community — substantial and wellness-literate — has taken to Form quickly, and the waiting list for prime-time slots reflects the studio's standing. English is the working language as often as French.",
    address: "—",
    bestFor: "Expatriate professionals and intermediate-to-advanced practitioners",
    signatureClass: "Form Reformer Signature",
    bookingTip: "Prime-time slots book out fast; register and set notification alerts for new availability",
  },
  {
    number: "02",
    name: "Pilates Social Club",
    neighborhood: "Plainpalais",
    priceLevel: "CHF ··",
    review: "Pilates Social Club brings a genuinely social dimension to Geneva's Pilates scene — operating from Plainpalais, the city's most characterful and student-adjacent quarter, in a studio that manages to be both technically serious and noticeably enjoyable to train in. The social dimension here is real: the studio hosts occasional community evenings, workshops, and informal events that create a membership culture rather than a transactional class-booking relationship. Instruction is delivered by a teaching team with strong contemporary Pilates credentials, and the programming reflects a genuine interest in keeping long-term clients progressing rather than simply cycling newcomers through an introductory format. The clientele is younger on average than most Swiss Pilates studios and noticeably more diverse in background. A strong social media presence has driven awareness, but the studio's in-person quality is what keeps people coming back.",
    address: "—",
    bestFor: "Community-minded practitioners and those new to Geneva seeking a studio home",
    signatureClass: "Social Club Reformer",
    bookingTip: "Follow on Instagram for workshop announcements; community events often include class discounts",
  },
  {
    number: "03",
    name: "Flex & Flow",
    neighborhood: "Champel",
    priceLevel: "CHF ·",
    review: "Flex & Flow serves the residential Champel neighbourhood — one of Geneva's most quietly affluent — with a pragmatic, accessible approach to Pilates that offers genuine quality at a price point that does not assume its clients are indifferent to what they spend. The studio runs a mixed schedule of reformer, mat, and stretch-focused classes, with an emphasis on functional movement and muscular balance that appeals equally to those recovering from overuse injuries and those simply wanting to move better through daily life. Instructors are warm and unpretentious, with a particular skill for meeting clients exactly where they are rather than pushing them toward a predetermined template. The studio is compact but thoughtfully organised, and the neighbourhood's calm extends naturally into the training environment. Flex & Flow is the kind of reliable, relationship-driven studio that Geneva's long-term residents return to for years.",
    address: "—",
    bestFor: "Local residents and those seeking accessible, functional Pilates without the premium price",
    signatureClass: "Flex & Flow Reformer Mix",
    bookingTip: "Monthly packages offer the strongest value; ask about the studio's referral scheme",
  },
  {
    number: "04",
    name: "Geneva Pilates Studio",
    neighborhood: "Eaux-Vives",
    priceLevel: "CHF ··",
    review: "Geneva Pilates Studio occupies a settled, established position in the Eaux-Vives neighbourhood — a lakeside quarter of outdoor café culture and easy elegance — where it has been developing its reputation long enough to have trained multiple generations of the same family in some cases. The studio offers the full spectrum of apparatus work: reformer, cadillac, tower, chair, and barrel, which is rare in Geneva and speaks to the seriousness of both the facility and the teaching team. Instruction here follows a classical lineage with contemporary sensitivity to anatomy and individual variance — the instructors have seen enough bodies to know that no two need precisely the same thing. The studio is particularly respected for its private and duet session work, which delivers a level of personalisation that group classes cannot replicate. A consistently high-demand address that rewards clients who invest in an ongoing relationship with the studio.",
    address: "—",
    bestFor: "Classical Pilates enthusiasts and clients committed to long-term private instruction",
    signatureClass: "Geneva Full Apparatus Session",
    bookingTip: "Private and duet sessions are the studio's strength; commit to a series for best pricing",
  },
  {
    number: "05",
    name: "Sol Studio",
    neighborhood: "Eaux-Vives",
    priceLevel: "CHF ·",
    review: "Sol Studio sits in the Eaux-Vives quarter on Geneva's right bank — a neighbourhood of independent shops, neighbourhood restaurants, and a relaxed, non-corporate energy that suits the studio's personality exactly. The programming spans reformer, mat, and occasional specialty workshops, with instructors who bring genuine enthusiasm to classes that rarely feel formulaic or rushed. Sol is notably welcoming of practitioners at every level, from complete beginners to experienced movers, without making anyone feel like a logistical afterthought. The pricing is the most accessible of any studio operating at this quality level in central Geneva, which has built a devoted following among the neighbourhood's young professionals, local creatives, and expat families. It is the kind of studio that people stumble into once and then book monthly memberships without being asked.",
    address: "—",
    bestFor: "All levels, especially beginners and those seeking a welcoming community studio",
    signatureClass: "Sol Reformer & Mat",
    bookingTip: "Drop-in rates are reasonable; a monthly card offers the best combination of flexibility and value",
  },
  {
    number: "06",
    name: "Le Bod",
    neighborhood: "Les Délices",
    priceLevel: "CHF ··",
    review: "Le Bod occupies a refined niche in the Les Délices quarter, delivering a high-production reformer Pilates experience that draws heavily on the contemporary London and New York boutique model while grounding itself firmly in Geneva's specific wellness culture. The studio is visually striking — high ceilings, premium equipment, and a lighting scheme that manages to be both energising and flattering — and the instruction quality matches the setting. Classes tend to run at pace, with instructors who maintain momentum without losing technical precision, making Le Bod particularly well-suited to clients with existing fitness backgrounds who want reformer work to constitute a genuine training stimulus rather than gentle rehabilitation. The clientele skews toward Geneva's international banking and legal community. Booking fills reliably; advance planning is necessary for premium time slots.",
    address: "—",
    bestFor: "Fitness-forward practitioners and international professionals wanting a high-energy studio",
    signatureClass: "Le Bod Power Reformer",
    bookingTip: "Book weekend slots at least four to five days in advance; weekday mornings have more availability",
  }
];

const BOOKING_TIPS = [
  {
    heading: "Geneva studios expect punctuality",
    body: "Arrive at least 10 minutes before your class. Several Geneva studios operate a strict door policy — arriving late means being turned away. Swiss punctuality applies.",
  },
  {
    heading: "French is the working language",
    body: "Most Geneva studios teach in French. However, given the city's international character, many instructors speak excellent English. Check when booking if this matters to you.",
  },
  {
    heading: "CHF 35–55 per class is standard",
    body: "Drop-in reformer classes in Geneva run from CHF 35 at value studios to CHF 55 at premium boutiques. Class packs and abonnements (monthly memberships) offer meaningful savings.",
  },
  {
    heading: "Grip socks are required",
    body: "Every reformer studio in Geneva requires grip socks. Most sell them on-site, but bringing your own will cost significantly less over time.",
  },
  {
    heading: "Book 3–5 days in advance",
    body: "Premium morning slots at well-regarded studios fill quickly. Most studios open weekly schedules on Sunday — set a reminder to book priority slots early.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Eaux-Vives (Rive Gauche)",
    description:
      "Geneva's most vibrant lakeside neighbourhood, with excellent studio access and easy transport links. A natural home for wellness practitioners and a growing number of quality studios.",
  },
  {
    name: "Champel",
    description:
      "One of Geneva's most affluent residential areas, home to premium wellness studios that prioritise private sessions and bespoke experiences. Expect high standards and correspondingly higher prices.",
  },
  {
    name: "Plainpalais & Acacias",
    description:
      "Geneva's creative quarter has seen significant studio growth in recent years. More accessible pricing, younger clientele, and some genuinely excellent instruction at studios that haven't yet been discovered by the luxury wellness crowd.",
  },
  {
    name: "Carouge",
    description:
      "This charming, independent neighbourhood just south of Geneva proper has an authentic village character that attracts loyal local practitioners. Studios here are intimate and community-focused.",
  },
];

const RELATED_CITIES = [
  { city: "Lausanne", country: "Switzerland", href: "/cities/lausanne", studioCount: 5 },
  { city: "Zurich", country: "Switzerland", href: "/cities/zurich", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
];

const FURTHER_READING = [
  {
    title: "How to Build a Consistent Pilates Practice",
    excerpt: "Practical strategies for making Pilates a lasting habit, even with a busy schedule.",
    href: "/blog/how-to-build-a-consistent-pilates-practice",
    category: "Lifestyle",
    readTime: "7 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&q=80",
  },
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt: "Build a home practice that complements your studio sessions.",
    href: "/blog/best-pilates-equipment-for-home-practice",
    category: "Equipment",
    readTime: "10 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Geneva", "item": "https://pilatescollectiveclub.com/cities/geneva" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Geneva",
      "description": "Curated guide to the top 5 Pilates studios in Geneva.",
      "url": "https://pilatescollectiveclub.com/cities/geneva",
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
            "addressLocality": "Geneva",
            "addressCountry": "CH",
          },
        },
      })),
    },
  ],
};

export default function GenevaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>City Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Switzerland</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Geneva</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Geneva's status as one of Europe's most international cities has shaped a Pilates scene of real quality and diversity. The city's affluent, health-conscious population has driven demand for premium instruction, while a growing community of younger practitioners has opened space for more accessible, community-led studios. This guide navigates both worlds — from lakeside private sessions in Champel to energised group classes in Plainpalais.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg"
                alt="Geneva lake view"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Genève, Switzerland</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>International excellence meets Swiss precision</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Studios · Curated & Verified</p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (<StudioListing key={studio.number} {...studio} />))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Geneva</h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((tip) => (
                <div key={tip.heading} className="pcc-booking-tip flex gap-5 rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217, 194, 186, 0.3)" }}>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Geneva</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Geneva's neighbourhoods each have a distinct character. Here's where to look.</p>
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
              {RELATED_CITIES.map((c) => (<CityCard key={c.city} {...c} />))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              {FURTHER_READING.map((a) => (<ArticleCard key={a.href} {...a} />))}
            </div>
          </div>
        </section>

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best Pilates in Geneva…" />
      </main>
      <Footer />
    </>
  );
}
