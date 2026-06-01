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
  title: "Best Pilates Studios in Washington DC (2026) — Curated & Verified",
  description: "The best Pilates studios in Washington DC — from Georgetown classical practices to Capitol Hill reformer boutiques. Six verified picks across DC, Arlington, and Bethesda.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates studios washington dc", "reformer pilates dc", "best pilates washington dc", "pilates classes dc", "pilates georgetown dc", "pilates capitol hill dc", "pilates bethesda maryland", "pilates arlington virginia"],
  openGraph: {
    title: "The Best Pilates Studios in Washington DC (2026)",
    description: "Six curated, verified Pilates studios across Washington DC, Arlington, and Bethesda — the best picks for every level and neighbourhood.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/washington-dc",
    images: [{ url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=80", width: 1200, height: 630, alt: "Washington DC city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Pilates Studios in Washington DC (2026)",
    description: "Six curated Pilates studios in Washington DC — verified picks for every level.",
    images: ["https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/washington-dc",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "ThinkPilates",
    neighborhood: "Georgetown",
    priceLevel: "$$$$",
    review: "ThinkPilates in Georgetown is Washington DC's most intellectually serious Pilates studio — a practice whose name is a genuine statement of intent. The studio operates on the conviction that Pilates is most transformative when it is understood rather than merely performed, and the teaching reflects this: sessions are rich with anatomical explanation, movement principle, and the kind of feedback that builds body literacy alongside physical competence. The Georgetown clientele is correspondingly engaged — policy professionals, academics, journalists, and members of the diplomatic community who bring high standards and the patience to develop real skill over time. The studio works predominantly in private and small-group formats, and the depth of individual attention available here is among the highest in the DC metro area. For practitioners who want to understand the method from the inside out, this is the correct address.",
    address: "—",
    bestFor: "Intellectually-engaged practitioners, private sessions, classical depth",
    signatureClass: "Private Apparatus Session",
    bookingTip: "Initial intake consultation is required and worth completing carefully; the studio's matching of client to instructor is thoughtful and makes a genuine difference",
  },
  {
    number: "02",
    name: "Capital City Pilates",
    neighborhood: "Dupont Circle",
    priceLevel: "$$$",
    review: "Capital City Pilates at Dupont Circle has built one of the most diverse and consistently high-quality practices in the DC area — a studio that serves the transient, professionally ambitious population of one of the city's most cosmopolitan neighbourhoods. The reformer programme here is contemporary and physically demanding, with class sequencing that rewards regular attendance and treats clients as capable adults rather than fitness consumers. The instruction team has strong cross-training backgrounds, and the studio's approach to group dynamics — maintaining genuine individual attention within shared sessions through careful class size limits — sets it apart from the volume-focused boutiques that have colonised much of the DC market. For embassy staff, Hill staffers, and the NGO professionals who populate Dupont Circle, Capital City is the obvious home studio.",
    address: "—",
    bestFor: "All levels, contemporary reformer, diverse clientele",
    signatureClass: "Reformer Flow",
    bookingTip: "Classes open 7 days ahead and fill quickly for early morning and lunchtime slots; set a recurring booking reminder",
  },
  {
    number: "03",
    name: "Align Pilates DC",
    neighborhood: "Logan Circle",
    priceLevel: "$$$",
    review: "Align Pilates in Logan Circle is a studio that has found its identity through genuine commitment to the physical therapy-adjacent end of the Pilates spectrum — a practice that serves not just the healthy and wellness-curious but the post-surgical, the chronically injured, and those managing complex musculoskeletal conditions. The instruction team includes practitioners with dual qualifications in Pilates and physical therapy or sports rehabilitation, giving the corrective work a clinical authority that boutique studios typically cannot match. Logan Circle's mix of young professionals, creative industry workers, and established neighbourhood residents provides a broad client base that the studio serves with equal competence across the ability and health spectrum. For DC practitioners who have been told they need something more specialised than generic reformer — this is it.",
    address: "—",
    bestFor: "Rehabilitation, injury management, mixed-ability programming",
    signatureClass: "Therapeutic Reformer",
    bookingTip: "New rehabilitation clients should request an extended intake session; the clinical assessment takes time but pays dividends in programme quality",
  },
  {
    number: "04",
    name: "Joy of Motion Pilates",
    neighborhood: "Friendship Heights",
    priceLevel: "$$$",
    review: "Joy of Motion's Pilates programme operates within one of DC's most respected dance and movement centres — a context that gives it a performing arts pedigree uncommon in the standard boutique fitness market. The studio serves both the professional performing community that uses the broader Joy of Motion facility and the general public, maintaining quality standards across both populations with admirable consistency. Pilates here is taught as a movement discipline rather than a fitness product — with an emphasis on quality of movement, spatial awareness, and the embodied understanding that comes from teachers who also work in dance, somatic practice, and performance. The Friendship Heights location serves Northwest DC's established residential population alongside the performing arts community, and the two clienteles have created an unusually rich studio culture.",
    address: "—",
    bestFor: "Performers, movement-educated practitioners, dance community",
    signatureClass: "Pilates for Dancers & Movers",
    bookingTip: "Pilates programmes are listed separately from dance classes on the booking platform; filter by discipline when scheduling",
  },
  {
    number: "05",
    name: "Club Pilates Bethesda",
    neighborhood: "Bethesda, Maryland",
    priceLevel: "$$$",
    review: "Club Pilates Bethesda is the strongest franchise location in the DC metro area, serving the affluent, health-invested Bethesda and Chevy Chase population with a reformer programme that is consistent, accessible, and professionally staffed. The studio's curriculum is well-taught by a team that engages with the material genuinely rather than mechanically, and the Bethesda demographic — high-earning professionals and established families with robust wellness budgets — has attracted instructors who are among the most experienced in the franchise network. For practitioners living in Montgomery County who want the convenience of a wide schedule and the security of a structured progression system, Club Pilates Bethesda is the most practically sensible choice in the area.",
    address: "—",
    bestFor: "Consistent reformer programming, memberships, Montgomery County convenience",
    signatureClass: "Flow",
    bookingTip: "Monthly memberships bring per-class cost to competitive levels for regular practitioners; the intro package is worth exhausting before deciding",
  },
  {
    number: "06",
    name: "Kinesis Pilates Arlington",
    neighborhood: "Arlington, Virginia",
    priceLevel: "$$$",
    review: "Kinesis Pilates in Arlington serves Northern Virginia's Pentagon, tech, and consulting professional population with a reformer programme that matches the area's performance-focused, analytically-minded culture. The studio is efficient and well-run, with class sequencing that is genuinely progressive — clients who attend regularly develop measurable strength, stability, and movement quality improvements over a 3–6 month horizon rather than simply maintaining a static fitness level. The Arlington location is convenient for Pentagon City and Rosslyn commuters, and the class schedule accommodates the early morning and post-work patterns that characterise the Northern Virginia professional population. An excellent option for DC area practitioners who live or work on the Virginia side.",
    address: "—",
    bestFor: "Professional commuters, performance-focused reformer, Virginia side",
    signatureClass: "Reformer Precision",
    bookingTip: "Early morning slots fill fastest with the commuter population; book by Thursday for the following week",
  },
];

const BOOKING_TIPS = [
  { heading: "Expect to pay $32–60 per class", body: "Washington DC's Pilates market is priced in line with other major US cities. Drop-in rates run from $32 at accessible studios to $60+ at premium private practices. Monthly memberships bring the per-class cost down to $22–38 for regular practitioners. Bethesda and Arlington pricing is comparable to DC proper." },
  { heading: "The city's transience affects studio character", body: "DC's political and diplomatic population turns over frequently with election cycles and administration changes. Studios that have maintained consistent quality through multiple cycles are more reliable long-term bets than newer entrants who may not have weathered the city's characteristic churn." },
  { heading: "Government schedules create consistent windows", body: "The federal government's relatively predictable work patterns — including reliable lunchtime breaks and earlier evening ends than many private sector cities — create strong class demand at 12pm and 6pm. Book those windows furthest in advance." },
  { heading: "The metro area spans two states", body: "DC's effective studio market includes Northern Virginia and Montgomery County, Maryland. Don't limit your search to the District itself — some of the best studios in the metro area are in Arlington, Bethesda, and Alexandria. The Metro makes them more accessible than the distance suggests." },
  { heading: "Grip socks are required across the metro", body: "Every reformer studio in the DC metro area — in the District, Virginia, and Maryland — requires grip socks. Buying a pair in advance from Amazon is a simple and consistent saving compared to front-desk retail prices." },
];

const NEIGHBORHOODS = [
  { name: "Georgetown & Dupont Circle", description: "DC's most internationally oriented residential areas support a sophisticated Pilates market. Studios here serve diplomatic and professional populations with high standards and strong disposable income. A natural starting point for practitioners who value quality above all." },
  { name: "Logan Circle & Columbia Heights", description: "The revitalised central neighbourhoods have developed strong independent studio cultures in the past decade — instructors who prioritise depth and specificity over volume. Often better value and more technically serious than the premium Georgetown options." },
  { name: "Bethesda & Chevy Chase (Maryland)", description: "Montgomery County's most affluent communities house several excellent studios serving the DC metro's wealthiest health-conscious population. Comparable quality to Georgetown with slightly better parking and scheduling accessibility." },
  { name: "Arlington & Alexandria (Virginia)", description: "Northern Virginia's professional population is increasingly well-served by studios that understand the particular needs of commuters, veterans, and government contractors. The Metro connection makes Virginia studios genuinely practical for practitioners based in the District." },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio across the DC metro area — DC, Virginia, and Maryland.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "A quality 6mm mat is useful for mat classes and home practice through DC's cold winters.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard prop in many DC classical and therapeutic studios. Useful for home reinforcement.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Foam Roller",
    note: "A practical pre- and post-session tool for practitioners with demanding DC commutes.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands Set",
    note: "Compact, portable, and useful for hotel-room and home practice during congressional recess and travel periods.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 6 },
  { city: "Boston", country: "United States", href: "/cities/boston", studioCount: 6 },
  { city: "Chicago", country: "United States", href: "/cities/chicago", studioCount: 6 },
  { city: "Miami", country: "United States", href: "/cities/miami", studioCount: 6 },
];

const FURTHER_READING = [
  { title: "How to Find a Good Pilates Studio", excerpt: "What to look for in a studio, and the questions worth asking before you commit to a membership.", href: "/blog/how-to-find-a-good-pilates-studio", category: "Guide", readTime: "6 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80" },
  { title: "Pilates for Back Pain: What the Research Shows", excerpt: "What Pilates can and can't do for chronic lower back pain — and which exercises have the strongest evidence.", href: "/blog/pilates-for-back-pain", category: "Health", readTime: "10 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Washington DC", "item": "https://pilatescollectiveclub.com/cities/washington-dc" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Washington DC",
      "description": "Curated guide to the top Pilates studios in Washington DC, verified June 2026.",
      "url": "https://pilatescollectiveclub.com/cities/washington-dc",
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
            "addressLocality": "Washington",
            "addressRegion": "DC",
            "addressCountry": "US",
          },
        },
      })),
    },
    {
      "@type": "Article",
      "headline": "The Best Pilates Studios in Washington DC (2026)",
      "description": "A curated guide to the six best Pilates studios across Washington DC, Arlington, and Bethesda — verified June 2026.",
      "url": "https://pilatescollectiveclub.com/cities/washington-dc",
      "dateModified": "2026-06-01",
      "author": { "@type": "Organization", "name": "Pilates Collective Club" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function WashingtonDCPage() {
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
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Washington DC</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Washington DC's Pilates scene is as serious as the city itself. The concentration of medical professionals, policy experts, military personnel, and internationally mobile professionals has produced a movement culture that values evidence, precision, and the kind of body intelligence that serves long careers and demanding schedules. From Georgetown's classical studios to the therapeutic practices of Logan Circle, and extending into Bethesda and Arlington, the metro area offers genuine depth. This guide covers the six studios that merit your time, verified June 2026.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1400&q=80" alt="Washington DC" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Washington, DC</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Precise, evidence-led, internationally influenced</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Washington DC</h2>
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
              Grip socks are required across the DC metro area. A mat and portable props support home practice through the city&apos;s demanding schedule and cold winters.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#8b4a31", textDecoration: "underline", fontFamily: "'Montserrat', sans-serif", fontSize: "inherit" }}>Affiliate disclosure.</Link>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Washington DC</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>DC's compact geography and Metro access make the full metro area a practical search zone. Here's where to look across the District and its suburbs.</p>
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best therapeutic Pilates in Washington DC…" />
      </main>
      <Footer />
    </>
  );
}
