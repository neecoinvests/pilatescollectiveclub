import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in New York City (2026) — Curated Guide",
  description: "The best Pilates studios in New York City — from SoHo reformer boutiques to classical Tribeca studios. Six curated picks across Manhattan, independently verified September 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates new york", "pilates nyc", "reformer pilates new york", "best pilates studios nyc", "pilates studio manhattan", "pilates classes new york", "soho pilates", "tribeca pilates", "upper east side pilates", "best reformer pilates nyc"],
  openGraph: {
    title: "Best Pilates Studios in New York City (2026)",
    description: "Five curated Pilates studios in New York — SoHo, Tribeca, and uptown reformer picks. Verified June 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/new-york",
    images: [{ url: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80", width: 1200, height: 630, alt: "New York city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in NYC (2026)",
    description: "Our curated guide to NYC's finest Pilates studios — five verified picks.",
    images: ["https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/new-york",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "New York Pilates",
    neighborhood: "SoHo",
    priceLevel: "$$$$",
    rating: "4.9★ (196 Google reviews)",
    review: "Heather Andersen opened New York Pilates in 2013, and the SoHo flagship at 25 Howard Street is still the address most responsible for making group reformer a New York institution rather than a niche practice. Classes run on a music-driven, high-energy format — curated playlists, choreographed sequencing — but the instructor training behind it is rigorous enough that the pace doesn't come at the expense of form correction. Intro packages start at 6 classes for $60, with drop-in packages from $90 for 3 classes.",
    caveat: "the SoHo studio is genuinely hard to book — prime slots open 7 days out and go within hours, so this isn't the studio for spontaneous drop-ins.",
    address: "25 Howard St, 3rd Floor, New York, NY 10013",
    bestFor: "Music-driven group reformer",
    signatureClass: "Reformer Flow",
    bookingTip: "Slots open 7 days ahead and disappear within hours; set a booking alarm",
    websiteUrl: "https://www.newyorkpilates.com/",
  },
  {
    number: "02",
    name: "Real Pilates",
    neighborhood: "Tribeca",
    priceLevel: "$$$$",
    review: "Alycea Ungaro, a physical therapist, runs Real Pilates out of a loft space at 137 Duane Street, and the studio's identity follows from her background: full classical apparatus (Reformer, Cadillac, Wunda Chair, Ladder Barrel), Romana Kryzanowska-lineage instruction, and a music-free room that keeps the focus on cueing rather than energy. New clients start with a $85 trial private session (55 minutes) rather than a group class, which is unusual for the category and tells you what the studio actually prioritises.",
    caveat: "there's no cheap way in — this is a private-and-semi-private-first studio, and group class pricing isn't even published on their site. Budget-conscious beginners will find AeroPilates-style budget studios elsewhere in Tribeca first.",
    address: "137 Duane St, New York, NY 10013",
    bestFor: "Classical apparatus training",
    signatureClass: "Classical Reformer & Cadillac",
    bookingTip: "Privates book weeks out; inquire about semi-private availability for better access",
    websiteUrl: "https://www.realpilatesnyc.com/",
  },
  {
    number: "03",
    name: "Power Pilates",
    neighborhood: "Midtown",
    priceLevel: "$$$",
    rating: "4.4★ (110+ Yelp reviews)",
    review: "Power Pilates' flagship at 920 3rd Avenue is a two-floor, Romana-lineage classical studio — its teacher-training curriculum was built by three Master Teachers who trained directly under Romana Kryzanowska in the early 1980s. The no-frills approach (skylight-lit rooms, free towels and tea, but no boutique styling) keeps group class pricing more accessible than most classical studios in the borough, which is the actual draw here rather than atmosphere.",
    caveat: "this is Midtown, not the Upper West Side — if you're specifically hunting for a UWS classical studio, look at Natural Pilates on Broadway or Pilates Addiction on W 72nd instead.",
    address: "920 3rd Ave, 6th Floor, New York, NY 10022",
    bestFor: "Classical group reformer",
    signatureClass: "Group Reformer",
    bookingTip: "Long-term members often hold standing bookings; join the waitlist for peak times",
    websiteUrl: "https://powerpilates.com/flagship/",
  },
  {
    number: "04",
    name: "Solidcore",
    neighborhood: "Midtown East",
    priceLevel: "$$$",
    rating: "4.6★ chain-wide (1,431+ reviews); this location individually well-reviewed",
    review: "[solidcore]'s Midtown East studio at 800 2nd Avenue is upfront that it isn't classical Pilates: it's slow-twitch, time-under-tension strength training on a custom-built reformer, run in a darkened room with bass-heavy music, open daily 5am–9pm. Drop-ins run $35–43 depending on time of day; new clients get two weeks unlimited for $109. It's the pick for office workers who want measurable strength gains from a lunch-hour session, not for anyone chasing classical technique.",
    caveat: "if you came here expecting Pilates in the Joseph Pilates sense — breath work, precision, the full apparatus repertoire — you'll be disappointed. This is a strength-training brand that borrows the reformer, not a Pilates studio.",
    address: "800 2nd Ave, New York, NY 10017",
    bestFor: "Strength-focused reformer conditioning",
    signatureClass: "[solidcore] 50-min",
    bookingTip: "ClassPass credits work here; first-timers should arrive 10 minutes early for orientation",
    websiteUrl: "https://solidcore.co/studios/midtown-east",
  },
  {
    number: "05",
    name: "Erika Bloom Wellness",
    neighborhood: "Tribeca",
    priceLevel: "$$$$",
    review: "Erika Bloom Wellness is at 104 Franklin Street in Tribeca (not the West Village, despite what some directories list) — a townhouse-style space combining classical Pilates with acupuncture, structural integration, lymphatic drainage, and nutrition coaching under one roof. The model is almost entirely private and semi-private, and pricing reflects it: this is a $$$$ studio even by Manhattan standards, with some ongoing wellness-collective programs running into the thousands per month. Bloom has built a client base of performers and people managing complex injuries who want the Pilates instruction integrated with broader bodywork.",
    caveat: "there's essentially no low-cost entry point here — no drop-in group classes to sample the method cheaply before committing. This is a studio for people who already know they want integrative private work and can pay for it.",
    address: "104 Franklin St, Floor 2, New York, NY 10013",
    bestFor: "Integrative private sessions",
    signatureClass: "Private Integrative Pilates",
    bookingTip: "Book at least two weeks out; the intake process is thorough and worth completing carefully",
    websiteUrl: "https://erikabloom.com/tribeca/",
  },
  {
    number: "06",
    name: "Physique 57",
    neighborhood: "Upper East Side",
    priceLevel: "$$$",
    review: "Physique 57's original flagship sits at 14 E 60th Street on the Upper East Side — the \"60th & 5th\" studio that earned the brand its 5-Star Class Experience Award from The Fit Guide, one of only five New York studios to make that list. Classes blend barre, light weights, and mat Pilates in a sequence that changes enough to stay interesting; a 3-classes-for-$99 intro gets you in, with ongoing membership at $350/month on a 3-month minimum. It's a genuinely enjoyable hour, and a genuinely different thing from classical reformer training.",
    caveat: "if you're looking for reformer-based classical instruction, this isn't it — Physique 57 is a barre-and-mat format, and the label \"Pilates\" here is doing more marketing work than technical work.",
    address: "14 E 60th St, Suite 1003, New York, NY 10022",
    bestFor: "Barre-Pilates fusion",
    signatureClass: "Physique 57 Signature",
    bookingTip: "Intro packages offer significant savings; book evening classes a week ahead",
    websiteUrl: "https://physique57.com/nyc/uptown-barre-studio/",
  }
];

const BOOKING_TIPS = [
  { heading: "ClassPass is genuinely useful in NYC", body: "New York's studio density makes ClassPass an excellent tool for discovering the right studio before committing to a membership. Most of the better studios participate, though some restrict peak-time access to members." },
  { heading: "Expect to pay $35–55 per class", body: "NYC reformer Pilates drop-in rates run from around $35 at more accessible studios to $55+ at premium boutiques. Monthly memberships typically bring the per-class cost to $22–35." },
  { heading: "Book 3–5 days ahead for prime slots", body: "Popular morning and lunchtime classes at established NYC studios fill quickly. Most apps open booking five to seven days ahead — set a recurring reminder for Monday morning." },
  { heading: "Grip socks are universal", body: "Every reformer studio in New York requires grip socks. Most sell them at the front desk, but they're far cheaper from Amazon or a sports retailer." },
  { heading: "Intro offers expire quickly", body: "Most NYC studios offer a new-client intro package valid for 30 days. Use it intentionally — sample multiple class types and times before committing to a membership." },
];

const NEIGHBORHOODS = [
  { name: "SoHo & Tribeca", description: "Downtown's most design-conscious neighbourhoods carry the highest concentration of premium reformer studios in Manhattan — New York Pilates, Real Pilates, and Erika Bloom Wellness are all within a 10-minute walk of each other here. Expect beautiful interiors and correspondingly higher price points." },
  { name: "Midtown & Midtown East", description: "Less glamorous than downtown, but this is where the accessible classical studios (Power Pilates) and the lunch-hour strength-training format ([solidcore]) actually cluster, serving the office population directly." },
  { name: "Upper East Side & Upper West Side", description: "Manhattan's established residential districts carry a mix of classical studios and barre-Pilates hybrids like Physique 57's flagship. Less trendy, often better value than downtown for group classes." },
  { name: "Brooklyn (Williamsburg & Park Slope)", description: "Brooklyn's growing Pilates scene has produced several independent studios with strong community cultures and more accessible pricing than Manhattan. Worth the subway ride if you're based in the borough." },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at most reformer studios. Full-toe grip socks are the standard.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "A quality 6mm mat is worth having for mat classes and home practice between studio sessions.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Many studios incorporate the magic circle — worth owning for home reinforcement work.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands",
    note: "Fabric resistance loops extend your home Pilates practice and support reformer spring work.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "Foam Roller",
    note: "Essential for fascial release and spinal mobility work before and after class.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
  {
    name: "Home Pilates Reformer",
    note: "A home reformer extends your studio practice — AeroPilates and Align entry models deliver a genuine full-body session.",
    price: "From $450",
    url: "https://www.amazon.com/s?k=home+pilates+reformer+aeropilates+align&tag=pilatescollective-20",
  },
];

const HOME_REFORMERS = [
  { tag: "Budget Pick", name: "Stamina AeroPilates 287", note: "The most accessible full-function reformer — four cords, a rebounder, and a frame that folds flat for storage.", price: "From $299", url: "https://www.amazon.com/s?k=stamina+aeropilates+287&tag=pilatescollective-20" },
  { tag: "Mid-Range Pick", name: "AeroPilates Pro XP 557", note: "A smoother carriage, standing platform, and adjustable footbar for practitioners training several times a week.", price: "From $1,329", url: "https://www.amazon.com/s?k=aeropilates+pro+557&tag=pilatescollective-20" },
  { tag: "Buy Once", name: "Balanced Body Allegro 2", note: "The studio-grade machine serious home practitioners never need to replace — full spring system and fold-flat storage.", price: "From $3,995", url: "https://www.amazon.com/s?k=balanced+body+allegro+2+reformer&tag=pilatescollective-20" },
];

const RELATED_CITIES = [
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
  { city: "Zurich", country: "Switzerland", href: "/cities/zurich", studioCount: 5 },
];

const FURTHER_READING = [
  { title: "The Beginner's Guide to Reformer Pilates", excerpt: "What to expect in your first reformer class and how to choose a studio.", href: "/blog/beginners-guide-to-reformer-pilates", category: "Beginner Guide", readTime: "8 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1616439069669-66dbe74bcdad?w=800&q=80" },
  { title: "How to Choose the Right Pilates Instructor", excerpt: "What credentials, experience, and red flags to look for when selecting a teacher.", href: "/blog/how-to-choose-a-pilates-instructor", category: "Guide", readTime: "6 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "New York", "item": "https://pilatescollectiveclub.com/cities/new-york" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in New York City",
      "description": "Curated guide to the top 5 Pilates studios in New York City.",
      "url": "https://pilatescollectiveclub.com/cities/new-york",
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
            "addressLocality": "New York",
            "addressRegion": "NY",
            "addressCountry": "US",
          },
        },
      })),
    },
  ],
};

export default function NewYorkPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>United States</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in New York City</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 8 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              New York City is where modern Pilates was born — Joseph Pilates opened his original studio on Eighth Avenue in 1926, and the method's roots in the city run deeper than anywhere else in the world. Today, NYC has one of the most diverse and rigorous Pilates scenes on the planet, from lineage-connected classical studios in Chelsea to sleek reformer boutiques in SoHo. This guide covers the five we rate most highly.
            </p>
          </div>
        </section>
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1400&q=80" alt="New York City skyline" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>New York, United States</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Where the Pilates method was born</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 px-6" style={{ backgroundColor: "#fdf5f3", borderTop: "1px solid rgba(139,74,49,0.2)", borderBottom: "1px solid rgba(139,74,49,0.2)" }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Before You Go</p>
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to bring to your first class</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Grip socks are required at most reformer studios in New York. These are our recommended picks — all available on Amazon.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#8b4a31", textDecoration: "underline", fontFamily: "'Montserrat', sans-serif", fontSize: "inherit" }}>Affiliate disclosure.</Link>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {GEAR.map((g) => (
                <a key={g.name} href={g.url} target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: "none" }}>
                  <div className="rounded-xl p-5 h-full flex flex-col justify-between" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)", transition: "border-color 0.2s" }}>
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

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Studios · Curated & Verified</p>
            <p className="text-sm mb-10" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Addresses, pricing, and ratings independently checked against each studio's own site and public review platforms in September 2026. We call out at least one real trade-off per studio — no pick here is presented as flawless.
            </p>
            <div className="space-y-8">{STUDIOS.map((s) => <StudioListing key={s.number} {...s} />)}</div>
          </div>
        </section>
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in New York</h2>
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
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in New York</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Manhattan's studio landscape is shaped by neighbourhood culture. Here's where to look.</p>
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
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Prefer To Train At Home?</p>
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Not convinced? How about Pilates at home?</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Studio pricing or scheduling not for you right now? A home reformer gets you a genuine Pilates session on your own time. Here's where to start — from a $299 entry point to the machine serious practitioners buy once.{" "}
              <Link href="/blog/best-home-pilates-reformer" style={{ color: "#8b4a31", textDecoration: "underline", fontFamily: "'Montserrat', sans-serif", fontSize: "inherit" }}>See the full reformer guide.</Link>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {HOME_REFORMERS.map((g) => (
                <a key={g.name} href={g.url} target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: "none" }}>
                  <div className="rounded-xl p-5 h-full flex flex-col justify-between" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)" }}>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{g.tag}</p>
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

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Related city guides</h2>
            <p className="text-sm mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Explore our guides to other cities with thriving Pilates scenes.</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">{RELATED_CITIES.map((c) => <CityCard key={c.city} {...c} />)}</div>
          </div>
        </section>
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">{FURTHER_READING.map((a) => <ArticleCard key={a.href} {...a} />)}</div>
          </div>
        </section>
        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best classical Pilates in New York…" />
      </main>
      <Footer />
    </>
  );
}
