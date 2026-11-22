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
  title: "Best Pilates Studios in Melbourne (2026)",
  description: "The best Pilates studios in Melbourne, from Chapel Street reformer boutiques to the inner north and a Southbank bathhouse studio. Six curated picks, verified 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates melbourne", "reformer pilates melbourne", "best pilates studios melbourne", "pilates studio melbourne", "pilates classes melbourne", "south yarra pilates", "fitzroy pilates", "st kilda pilates", "pilates victoria australia", "best reformer pilates melbourne"],
  openGraph: {
    title: "Best Pilates Studios in Melbourne (2026)",
    description: "Six curated Pilates studios in Melbourne: CBD, South Yarra, Fitzroy, Collingwood and Southbank picks. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/melbourne",
    images: [{ url: "https://images.unsplash.com/photo-1514395462185-c2de918e8ab9?w=1200&q=80", width: 1200, height: 630, alt: "Melbourne city guide: Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Melbourne (2026)",
    description: "Our curated guide to Melbourne's six best Pilates studios: verified for 2026.",
    images: ["https://images.unsplash.com/photo-1514395462185-c2de918e8ab9?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/melbourne",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "KX Pilates Melbourne CBD",
    neighborhood: "CBD",
    priceLevel: "$$",
    review: "KX Pilates is one of Australia's best-known reformer chains, known for intense, fast-moving reformer classes rather than gentle stretching. Its Melbourne CBD studio on Bourke Street is a convenient lunchtime or after-work option for city workers.",
    caveat: "a chain format: consistent and energetic, but less individual than an owner-run studio.",
    address: "Level 3, 130 Bourke Street, Melbourne VIC 3000",
    bestFor: "High-intensity reformer for CBD workers",
    signatureClass: "KX Reformer",
    bookingTip: "Lunchtime classes fill first: book as soon as the schedule opens.",
  },
  {
    number: "02",
    name: "Peaches Pilates Fitzroy",
    neighborhood: "Fitzroy · Windsor",
    priceLevel: "$$$",
    review: "Peaches Pilates is a collection of boutique reformer studios in Sydney and Melbourne with a bright, unpretentious identity. In Melbourne it has studios on Brunswick Street in Fitzroy and on Chapel Street in Windsor.",
    caveat: "popular instructors book out: check the app early for cancellations.",
    address: "2/175 Brunswick Street, Fitzroy VIC 3065",
    bestFor: "Boutique reformer in Fitzroy and Windsor",
    signatureClass: "Peaches Reformer",
    bookingTip: "If Fitzroy is full, try the Windsor studio at 105B Chapel Street.",
  },
  {
    number: "03",
    name: "Pilates Republic Collingwood",
    neighborhood: "Collingwood · Brunswick",
    priceLevel: "$$",
    review: "Pilates Republic runs reformer studios in Melbourne's inner north, including Collingwood on Glasshouse Road and Brunswick, with high-intensity reformer classes that suit people who want a serious workout.",
    caveat: "a fast, athletic format, not the place for slow classical technique.",
    address: "3A Glasshouse Road, Collingwood VIC 3066",
    bestFor: "Athletic reformer in the inner north",
    signatureClass: "Reformer Pilates",
    bookingTip: "Book ahead for after-work classes, the busiest time.",
  },
  {
    number: "04",
    name: "1R South Yarra",
    neighborhood: "South Yarra",
    priceLevel: "$$$",
    review: "1R on Chapel Street is the most-reviewed studio on ClassPass's Melbourne reformer list, and members describe its South Yarra space as beautiful and luxurious: very much in keeping with Chapel Street.",
    caveat: "premium, design-led studio: expect South Yarra pricing.",
    address: "625 Chapel Street, South Yarra VIC 3141",
    bestFor: "Design-led reformer on Chapel Street",
    signatureClass: "Reformer Pilates",
    bookingTip: "Evening and weekend classes fill fast: book a few days ahead.",
  },
  {
    number: "05",
    name: "Upstate Studios Fitzroy",
    neighborhood: "Fitzroy",
    priceLevel: "$$",
    review: "Upstate is a fast-growing Victorian studio brand with locations across Melbourne and regional Victoria: Fitzroy, Richmond, South Yarra, South Melbourne, Balaclava, Elsternwick, Ascot Vale, Geelong, Ballarat, Torquay and more. The Fitzroy studio on Johnston Street offers reformer and mat Pilates.",
    caveat: "a multi-site brand: consistent and well-run, but less intimate than a single independent studio.",
    address: "62–70 Johnston Street, Fitzroy VIC 3065",
    bestFor: "Reformer and mat with many locations across Melbourne",
    signatureClass: "Reformer Pilates",
    bookingTip: "Look for an intro offer, and check which Upstate studio is closest to home or work.",
  },
  {
    number: "06",
    name: "Project Mood",
    neighborhood: "Southbank",
    priceLevel: "$$$$",
    review: "Project Mood on Coventry Street in Southbank pairs reformer sessions with a bathhouse: after class you can use heated magnesium pools and other bathing facilities, which makes it as much a recovery ritual as a workout.",
    caveat: "a premium reformer-and-bathhouse concept: more expensive than a standard class.",
    address: "95 Coventry Street, Southbank VIC 3006",
    bestFor: "Reformer followed by bathhouse recovery",
    signatureClass: "Reformer + Bathhouse",
    bookingTip: "Leave time after class for the pools: that is half the point.",
  },
];

const BOOKING_TIPS = [
  { heading: "Expect to pay about $24–41 per class", body: "Melbourne reformer Pilates pricing is competitive by global standards. Independent studios typically charge about $24–31 for group reformer classes; premium boutique venues and private sessions run about $38–55. Ten-class packs reduce the per-session cost meaningfully: most studios offer them from about $195–260." },
  { heading: "ClassPass has strong Melbourne coverage", body: "ClassPass is widely used across Melbourne's studio scene and is an excellent way to trial multiple venues before committing to a membership. Most of the studios in this guide have ClassPass listings, though premium slots at top venues require higher credit allocations." },
  { heading: "Book 3–5 days ahead for popular sessions", body: "Melbourne's inner-city studios are busy, particularly on weekday mornings and Saturday. The city's strong brunch and fitness culture means weekend sessions are almost always booked out by midweek. Popular instructors' sessions can fill within hours of opening: follow your studio's social channels for notifications." },
  { heading: "Grip socks are required everywhere", body: "All Melbourne reformer studios require grip socks. Bonds and target both sell suitable pairs affordably; boutique grip socks from Lorna Jane or Alo are widely worn and available at most studios at the front desk. Keep a pair in your gym bag." },
  { heading: "Tipping is not customary in Australia", body: "Tipping is not part of Australian wellness culture. Instructors are paid industry rates and gratuities are neither expected nor common. The most valued form of appreciation is leaving a Google review or recommending the studio to friends." },
];

const NEIGHBORHOODS = [
  { name: "South Yarra & Prahran", description: "Melbourne's most established wellness corridor runs along Chapel Street and its surrounding streets in South Yarra and Prahran. Studios here skew premium: clientele is aspirational, instructors are well-credentialled, and the price points reflect the postcode. The concentration of studios means healthy competition that generally benefits quality." },
  { name: "Fitzroy & Collingwood", description: "Melbourne's creative heartland has developed a vibrant studio scene that matches the suburbs' energy. Studios here tend to be owner-operated, community-focused, and slightly more accessible in price than the South Yarra corridor. The inner-north demographic (young professionals, artists, creatives) has produced a loyal studio culture with strong word-of-mouth." },
  { name: "Armadale & Toorak", description: "Melbourne's most affluent inner-south-east suburbs host some of the city's finest private Pilates addresses. Studios here cater to a discerning clientele with time and resources to invest in the full apparatus and extended private sessions. Quality is reliably exceptional; wait times for preferred instructors can be considerable." },
  { name: "St Kilda & Albert Park", description: "The bayside suburbs have nurtured a Pilates scene that reflects the area's relaxed, health-conscious lifestyle. Studios here combine quality instruction with an inclusive, welcoming atmosphere that makes them popular with both newcomers and experienced practitioners. The proximity to the foreshore adds a lifestyle dimension that purely urban studios can't replicate." },
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
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 6 },
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 6 },
  { city: "Berlin", country: "Germany", href: "/cities/berlin", studioCount: 6 },
];

const FURTHER_READING = [
  { title: "Best Pilates Equipment for Home Practice", excerpt: "Everything you need between studio sessions, from a quality mat to resistance bands.", href: "/blog/best-pilates-equipment-for-home-practice", category: "Equipment", readTime: "10 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80" },
  { title: "The Beginner's Guide to Reformer Pilates", excerpt: "What to expect in your first reformer class, how to choose a studio, and how to progress.", href: "/blog/beginners-guide-to-reformer-pilates", category: "Beginner Guide", readTime: "8 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=800&q=80" },
];

const CITY_FAQS = [
  { q: "What are the best Pilates studios in Melbourne?", a: "Our 6 curated picks are KX Pilates (Melbourne CBD (CBD), Peaches Pilates) Fitzroy (Fitzroy · Windsor), Pilates Republic (Collingwood (Collingwood · Brunswick), 1R) South Yarra (South Yarra), Upstate Studios: Fitzroy (Fitzroy) and Project Mood (Southbank). Each listing above covers what the studio is best for, its signature class and a booking tip." },
  { q: "Which Melbourne neighborhoods are best for Pilates?", a: "This guide covers South Yarra & Prahran, Fitzroy & Collingwood, Armadale & Toorak and St Kilda & Albert Park. South Yarra & Prahran: Melbourne's most established wellness corridor runs along Chapel Street and its surrounding streets in South Yarra and Prahran." },
  { q: "What should I know about booking Pilates classes in Melbourne?", a: "Expect to pay about $24–41 per class. Melbourne reformer Pilates pricing is competitive by global standards." },
  { q: "What should I bring to a Pilates class in Melbourne?", a: "Grip socks are required at most reformer studios. Our gear list for Melbourne covers Pilates grip socks, Pilates mat, magic circle, resistance bands, foam roller and home Pilates reformer." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Melbourne (2026)",
      "description": "The best Pilates studios in Melbourne, from Chapel Street reformer boutiques to the inner north and a Southbank bathhouse studio. Six curated picks, verified 2026.",
      "url": "https://pilatescollectiveclub.com/cities/melbourne",
      "datePublished": "2026-06-28",
      "dateModified": "2026-10-20",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/melbourne.jpg" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/melbourne" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Melbourne", GEAR.filter((g) => /amazon\.[a-z.]+\/dp\//.test(g.url)).map((g) => ({ name: g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name, description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Melbourne", "item": "https://pilatescollectiveclub.com/cities/melbourne" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Melbourne",
      "description": "Curated guide to the top 5 Pilates studios in Melbourne.",
      "url": "https://pilatescollectiveclub.com/cities/melbourne",
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
            "addressLocality": "Melbourne",
            "addressCountry": "AU",
          },
        },
      })),
    },
  ],
};

export default function MelbournePage() {
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
              <span className="text-[12.5px] font-bold" style={{ color: "#3a3530" }}>Australia</span>
            </div>
            <h1 className="mb-6 r-d r-h1">
              The Best Pilates Studios<br /><span style={{ color: "#a98a5f" }}>in Melbourne</span>
            </h1>
            <p className="text-base mb-8" style={{ color: "#6f6964" }}>Updated May 2026 · 8 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#ddd6cc" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#3a3530" }}>
              Melbourne has one of the most sophisticated wellness cultures in the Southern Hemisphere, and Pilates sits at its core. The city's inner suburbs have nurtured a dense, competitive studio scene where quality is the norm and the best venues rival anything in London or New York. From Fitzroy's warehouse conversions to South Yarra's polished heritage spaces, Melbourne's six best studios are worth knowing whether you're a resident or a visitor.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image relative r-ah-img">
              <Image src="/pictures/melbourne.jpg" alt="Melbourne city guide: Pilates Collective Club" fill className="object-cover" />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-base font-bold mb-1">Melbourne, Australia</p>
                  <p className="text-white/70 text-xs">The Southern Hemisphere's most vibrant Pilates destination</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-[12.5px] font-bold mb-10" style={{ color: "#0a0a0a" }}>6 Studios · Curated & Verified</p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (<StudioListing key={studio.number} {...studio} />))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-10 r-d r-h2">Tips for booking Pilates in Melbourne</h2>
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
            <h2 className="mb-4 r-d r-h2">Best neighborhoods for Pilates in Melbourne</h2>
            <p className="text-base mb-10" style={{ color: "#3a3530" }}>Melbourne's Pilates landscape is shaped by its neighborhoods.</p>
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
              Grip socks are required at most reformer studios in Melbourne. These are our recommended picks: all available on Amazon.{" "}
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
              {RELATED_CITIES.map((c) => (<CityCard key={c.city} {...c} />))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-10 r-d r-h2">Further reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              {FURTHER_READING.map((a) => (<ArticleCard key={a.href} {...a} />))}
            </div>
          </div>
        </section>

        <CTASection title="Find Pilates near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best reformer Pilates in Melbourne…" />
      </main>
      <Footer />
    </>
  );
}
