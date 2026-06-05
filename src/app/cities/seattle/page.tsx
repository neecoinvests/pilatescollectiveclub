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
  title: "Best Pilates Studios in Seattle, WA (2026) — Curated & Verified",
  description: "The best Pilates studios in Seattle, Washington — from classical reformer practices in Capitol Hill to athletic conditioning studios in Bellevue. Six verified picks for every level.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates studios seattle", "reformer pilates seattle", "best pilates seattle", "pilates classes seattle wa", "pilates capitol hill seattle", "pilates bellevue", "pilates fremont seattle"],
  openGraph: {
    title: "The Best Pilates Studios in Seattle, WA (2026)",
    description: "Six curated, verified Pilates studios in Seattle — from Capitol Hill classical practices to athletic conditioning rooms on the Eastside.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/seattle",
    images: [{ url: "https://images.unsplash.com/photo-skUTVJi8-jc?w=1200&q=80", width: 1200, height: 630, alt: "Seattle Washington city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Seattle, WA (2026)",
    description: "Six curated Pilates studios in Seattle — verified picks for every level.",
    images: ["https://images.unsplash.com/photo-skUTVJi8-jc?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/seattle",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Metropolitan Pilates",
    neighborhood: "University District / University Village",
    priceLevel: "$$$",
    review: "Winner of Best Pilates Studio in Best of Western Washington, Metropolitan Pilates at University Village is a classical studio with soaring 15-foot ceilings and a full complement of Gratz Pilates apparatus. The studio offers private, duet, and semi-private sessions as well as group classes and a certified teacher training program. It is one of the most highly regarded classical studios in the Pacific Northwest — the place serious Pilates practitioners in Seattle point newcomers toward when they want the real thing.",
    address: "2623 NE University Village St, Seattle, WA 98105",
    bestFor: "Classical Pilates on authentic Gratz equipment; teacher training",
    signatureClass: "Private Apparatus Session",
    bookingTip: "Private sessions fill quickly; commit to a package to lock in consistent appointment times with a preferred instructor.",
  },
  {
    number: "02",
    name: "Pilates Seattle International",
    neighborhood: "South Lake Union",
    priceLevel: "$$$",
    review: "Now in its 31st year, Pilates Seattle International at 501 Dexter Avenue North is the only Romana's Pilates certified instructor school in the Northwest. The South Lake Union studio uniquely integrates a team of physical therapists and Pilates instructors who work together, making it the top choice in the city for anyone dealing with injuries, chronic pain, or post-surgical recovery. Clients routinely report lasting relief from shoulder, back, and hip issues that other approaches failed to resolve.",
    address: "501 Dexter Ave N, Seattle, WA 98109",
    bestFor: "Pilates + physical therapy integration; rehab clients; Romana's method",
    signatureClass: "Therapeutic Reformer Session",
    bookingTip: "First-time clients should book a PT/Pilates intake evaluation to ensure sessions are properly tailored from day one.",
  },
  {
    number: "03",
    name: "Atlas Pilates",
    neighborhood: "Belltown",
    priceLevel: "$$$",
    review: "Atlas Pilates at 2612 3rd Avenue is one of Seattle's most tenured studios, operating for over 25 years and consistently rated 4.6 stars or above. The Belltown studio is known for having some of the best Pilates equipment in the city and a staff that effectively blends classical technique with modern athletic training goals. Instructors are praised for improving posture, muscle development, and injury prevention even among skeptical first-timers who arrived doubting the method.",
    address: "2612 3rd Ave, Seattle, WA 98121",
    bestFor: "Equipment quality; injury prevention; athletic training",
    signatureClass: "Reformer + Tower",
    bookingTip: "Walk-ins are rarely available; schedule at least a week out, especially for weekend classes.",
  },
  {
    number: "04",
    name: "Pilates on 10th",
    neighborhood: "Capitol Hill",
    priceLevel: "$$$",
    review: "Open since 2003 and rated 4.8 stars on ClassPass with nearly 1,500 reviews, Pilates on 10th at 2351 10th Avenue East is a Capitol Hill institution. The spacious, spotless studio offers reformer, mat, tower, chair, and private session options, with professionally certified instructors known for activating deep core muscles and providing thoughtful individual cues. A favorite of longtime Seattle residents who have returned session after session for over two decades.",
    address: "2351 10th Ave E, Seattle, WA 98102",
    bestFor: "Comprehensive apparatus variety; welcoming atmosphere; long-established",
    signatureClass: "Reformer Group Class",
    bookingTip: "The studio is in a residential Capitol Hill location — street parking can be tight; arrive 10 minutes early.",
  },
  {
    number: "05",
    name: "Vitality Pilates — Phinney Ridge",
    neighborhood: "Phinney Ridge",
    priceLevel: "$$",
    review: "Vitality Pilates has earned consistent top ratings across its three Seattle locations — Phinney Ridge, Ravenna, and Mount Baker — with reviewers noting that classes meaningfully improve both physical and mental well-being. The Phinney Ridge flagship is beloved for its warm instructors, accessible class progressions, and genuine community atmosphere. The studio feels like something the neighborhood built for itself rather than a fitness business that moved in.",
    address: "7216 Greenwood Ave N, Seattle, WA 98103",
    bestFor: "Holistic well-being; all levels; neighborhood community feel",
    signatureClass: "Reformer Fundamentals",
    bookingTip: "The Fundamentals series is ideal for newcomers — complete it before jumping into open reformer classes.",
  },
  {
    number: "06",
    name: "Vitality Pilates — Ravenna",
    neighborhood: "Ravenna",
    priceLevel: "$$",
    review: "The Ravenna location of Vitality Pilates brings the same high standard of personalized instruction as the Phinney Ridge flagship to the northeast side of Seattle. The studio is compact and intimate, with a loyal neighborhood following and instructors who remember clients' individual needs class to class. For northeast Seattle residents, it removes the commute barrier that keeps many people from maintaining a consistent Pilates practice.",
    address: "2201 NE 65th St, Seattle, WA 98115",
    bestFor: "Northeast Seattle residents; consistent instruction; group reformer",
    signatureClass: "Reformer Open Level",
    bookingTip: "Class sizes are small — cancellations are strictly enforced, so cancel at least 12 hours ahead to avoid charges.",
  },
];

const BOOKING_TIPS = [
  { heading: "Expect to pay $32–58 per class", body: "Seattle's Pilates market sits in the upper-middle range nationally. Drop-in rates run from around $32 at community studios to $58 at premium practices. Monthly memberships and packs reduce the per-session cost to $22–35 for regular practitioners." },
  { heading: "Seattle rewards studio loyalty", body: "Unlike transient fitness markets, Seattle's Pilates studios tend to build genuinely committed communities. Practitioners who commit to a single studio for several months consistently report faster progress — instructors learn their bodies and programme accordingly." },
  { heading: "Weather affects scheduling discipline", body: "Seattle's long grey winters can erode fitness motivation. Studios with early morning or lunchtime slots tend to serve practitioners better through the winter months. Committing to a standing booking before you feel demotivated is more effective than trying to reschedule mid-slump." },
  { heading: "The Eastside has excellent options", body: "Bellevue, Kirkland, and Redmond have developed genuinely strong Pilates offerings in recent years. If you work or live on the Eastside, don't assume you need to cross the bridge for quality — some of the most technically proficient studios in the metro area are in Eastside neighbourhoods." },
  { heading: "Grip socks are required everywhere", body: "Every reformer studio in Seattle requires grip socks. Buying a quality pair in advance is far cheaper than purchasing at the front desk. Full-toe grip socks are the standard — half-toe styles are typically not accepted at Seattle studios." },
];

const NEIGHBORHOODS = [
  { name: "Fremont & Ballard", description: "Two of Seattle's most community-focused neighbourhoods, home to studios that prioritise accessibility, depth of teaching, and loyal clienteles. The independent studio culture here is among the strongest in the city." },
  { name: "Capitol Hill & First Hill", description: "Central Seattle's most diverse and culturally active district supports a range of Pilates offerings from classical studios to contemporary boutiques. Excellent public transport access from most of the city." },
  { name: "Queen Anne & Magnolia", description: "These established residential neighbourhoods house several excellent smaller studios with loyal communities. Studios here tend toward the serious and consistent rather than the trendy — good ground for long-term practitioners." },
  { name: "South Lake Union & Eastside (Bellevue/Kirkland)", description: "The corporate tech presence in South Lake Union and the Eastside has driven investment in premium fitness infrastructure. Studios in these areas are well-equipped, professionally staffed, and designed for practitioners with demanding work schedules." },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in Seattle. Full-toe grip socks are standard.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "Useful for mat classes and home practice. A 6mm closed-cell mat handles Seattle's climate well.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands Set",
    note: "Extend your studio work at home. Fabric-loop bands in three resistance levels are the versatile choice.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Many Seattle classical studios incorporate the magic circle — useful for at-home reinforcement.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  { city: "San Francisco", country: "United States", href: "/cities/san-francisco", studioCount: 6 },
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 6 },
  { city: "Denver", country: "United States", href: "/cities/denver", studioCount: 6 },
  { city: "Boston", country: "United States", href: "/cities/boston", studioCount: 6 },
];

const FURTHER_READING = [
  { title: "The Beginner's Guide to Reformer Pilates", excerpt: "What to expect in your first reformer class and how to choose a studio that fits your goals.", href: "/blog/beginners-guide-to-reformer-pilates", category: "Beginner Guide", readTime: "8 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1616439069669-66dbe74bcdad?w=800&q=80" },
  { title: "Pilates for Athletes", excerpt: "How elite sports professionals use Pilates to build functional strength and extend their careers.", href: "/blog/pilates-for-athletes", category: "Performance", readTime: "7 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Seattle", "item": "https://pilatescollectiveclub.com/cities/seattle" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Seattle, WA",
      "description": "Curated guide to the top Pilates studios in Seattle, Washington, verified June 2026.",
      "url": "https://pilatescollectiveclub.com/cities/seattle",
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
            "addressLocality": "Seattle",
            "addressRegion": "WA",
            "addressCountry": "US",
          },
        },
      })),
    },
    {
      "@type": "Article",
      "headline": "The Best Pilates Studios in Seattle, WA (2026)",
      "description": "A curated guide to the six best Pilates studios in Seattle, Washington — verified June 2026.",
      "url": "https://pilatescollectiveclub.com/cities/seattle",
      "dateModified": "2026-06-01",
      "author": { "@type": "Organization", "name": "Pilates Collective Club" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function SeattlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>City Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>United States</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Seattle, Washington</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Seattle's Pilates scene is more serious than its modesty suggests. Behind the city's outdoor-focused identity lies a strong classical movement culture — shaped in part by Pacific Northwest Ballet, the University of Washington's dance programme, and a technology sector whose workers are increasingly investing in the kind of body knowledge that survives a desk job. From Fremont's classical studios to South Lake Union's high-spec boutiques, the city offers genuine range. This guide covers the six studios that merit your time, verified June 2026.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-skUTVJi8-jc?w=1400&q=80" alt="Seattle Washington skyline" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Seattle, Washington</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Classical depth beneath a Pacific Northwest exterior</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Studios */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Studios · Curated & Verified</p>
            <div className="space-y-8">{STUDIOS.map((s) => <StudioListing key={s.number} {...s} />)}</div>
          </div>
        </section>

        {/* Booking Tips */}
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Seattle</h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((t) => (
                <div key={t.heading} className="pcc-booking-tip flex gap-5 rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                  <div className="w-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: "#8b4a31", minHeight: "20px" }} />
                  <div>
                    <h3 className="text-base font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{t.heading}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Gear */}
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to bring to your first class</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Seattle studios require grip socks and generally appreciate a mat for mat-based work. Our picks, available on Amazon.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#8b4a31", textDecoration: "underline", fontFamily: "'Montserrat', sans-serif", fontSize: "inherit" }}>Affiliate disclosure.</Link>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {GEAR.map((g) => (
                <a key={g.name} href={g.url} target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: "none" }}>
                  <div className="rounded-xl p-5 h-full flex flex-col justify-between" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)" }}>
                    <div>
                      <h3 className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{g.name}</h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{g.note}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{g.price}</span>
                      <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#c5a882", fontFamily: "'Montserrat', sans-serif" }}>Shop →</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Neighbourhoods */}
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Seattle</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Seattle's studio landscape follows the city's distinct neighbourhood cultures. Here's where to look.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {NEIGHBORHOODS.map((n) => (
                <div key={n.name} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)" }}>
                  <h3 className="text-base font-semibold mb-2" style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif" }}>{n.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{n.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Cities */}
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Related city guides</h2>
            <p className="text-sm mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Explore our guides to other cities with thriving Pilates scenes.</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">{RELATED_CITIES.map((c) => <CityCard key={c.city} {...c} />)}</div>
          </div>
        </section>

        {/* Further Reading */}
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">{FURTHER_READING.map((a) => <ArticleCard key={a.href} {...a} />)}</div>
          </div>
        </section>

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best reformer Pilates in Seattle…" />
      </main>
      <Footer />
    </>
  );
}
