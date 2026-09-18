import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Commercial vs Home Pilates Reformer (2026): What Differs",
  description: "Frame construction, weight rating, warranty terms and duty cycle compared. What the commercial tier buys you, and when a home reformer is the right machine.",
  keywords: ["commercial vs home pilates reformer", "commercial pilates reformer", "studio grade reformer", "pilates reformer weight capacity", "pilates reformer warranty commercial use", "home reformer vs studio reformer", "pilates reformer frame construction", "is a commercial reformer worth it"],
  openGraph: {
    title: "Commercial vs Home Pilates Reformer (2026)",
    description: "Frame, weight rating, warranty and duty cycle: what separates the two tiers, and which one you need.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/commercial-vs-home-pilates-reformer",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-reformer-spring-detail.png", width: 1200, height: 630, alt: "Commercial vs Home Pilates Reformer — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial vs Home Pilates Reformer (2026)",
    description: "What the commercial tier actually buys you, and when it is wasted money.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-reformer-spring-detail.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/commercial-vs-home-pilates-reformer" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Commercial vs Home Pilates Reformer (2026): What Actually Differs",
      "description": "A technical comparison of commercial and home-grade Pilates reformers: frame construction, weight rating, warranty terms, duty cycle, serviceability and price.",
      "url": "https://pilatescollectiveclub.com/blog/commercial-vs-home-pilates-reformer",
      "datePublished": "2026-09-16",
      "dateModified": "2026-09-16",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-reformer-spring-detail.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/commercial-vs-home-pilates-reformer" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Commercial vs Home Pilates Reformer", "item": "https://pilatescollectiveclub.com/blog/commercial-vs-home-pilates-reformer" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the difference between a commercial and a home Pilates reformer?", "acceptedAnswer": { "@type": "Answer", "text": "Four things, in order of how much they matter. The frame is built to a higher standard, usually heavier-gauge aluminium or hardwood with fully welded or mortised joints rather than bolted sections. The stated user weight rating is higher. The warranty explicitly covers commercial use, where a domestic warranty typically excludes it. And the machine is designed to be serviced, so springs, ropes, wheels and upholstery are replaceable parts with a supply chain behind them. The carriage glide and footbar adjustment tend to be better too, but those are refinements. The warranty and the serviceability are the substance." } },
        { "@type": "Question", "name": "Can I use a home reformer in a studio?", "acceptedAnswer": { "@type": "Answer", "text": "Physically yes, contractually usually not. Manufacturer warranties commonly distinguish domestic from commercial use, so putting a home-rated machine on a paid timetable typically voids cover from the first paid class. That matters more than it sounds: you lose the warranty precisely when the machine is doing the work most likely to break it. Your insurer may also ask questions after an incident involving equipment used outside its stated rating. If you are teaching for money, buy machines rated for it." } },
        { "@type": "Question", "name": "Is a commercial reformer worth it for home use?", "acceptedAnswer": { "@type": "Answer", "text": "For many serious home practitioners, yes, and the reason is not durability. A commercial machine gives you the same carriage travel, footbar geometry and spring range you feel in a studio, so the repertoire you learn in class transfers directly to your own machine. A shorter home frame changes how several exercises feel. If you take class regularly and want your practice at home to match it, the commercial tier is a genuine upgrade rather than overbuilding. If you use a reformer a couple of times a week for general fitness, it is money that would be better spent elsewhere." } },
        { "@type": "Question", "name": "How much more does a commercial reformer cost?", "acceptedAnswer": { "@type": "Answer", "text": "Entry commercial-rated machines start around $1,400 to $1,800, which overlaps with the upper end of home reformers, so the step up at that point is small. The larger gap is at the top: studio-standard machines from the established brands generally run $2,200 to $4,500, and classical wood or aluminium apparatus reaches $5,000 and beyond. Compared like for like on the same footprint and spring system, the commercial version of a machine typically costs a few hundred to a couple of thousand more, and lasts long enough in studio use that the per-year cost is lower." } },
      ],
    },
  ],
};

const COMPARISON = [
  {
    factor: "Frame construction",
    home: "Lighter-gauge aluminium or composite, frequently bolted sections that can be flat-packed for delivery. Adequate for single-user loads, but more prone to developing flex and rattle over years of use.",
    commercial: "Heavier-gauge aluminium, welded steel or mortised hardwood, arriving substantially assembled. The rigidity is the point: a frame that does not flex is what keeps the carriage tracking true under a heavy load.",
  },
  {
    factor: "Stated weight rating",
    home: "Typically specified for a single user within a moderate range, and the figure is often for static load rather than dynamic use.",
    commercial: "Higher stated capacity, specified with dynamic loading in mind, because a studio cannot choose its clients. This is the specification to check first if any user is above average height or weight.",
  },
  {
    factor: "Warranty terms",
    home: "Domestic use only in most cases. Commercial or institutional use is a common exclusion, and it applies from the first paid session rather than after some grace period.",
    commercial: "Explicitly covers commercial use, usually with separate terms for frame and for wear parts. For a studio this is the single most important line in the whole comparison.",
  },
  {
    factor: "Duty cycle",
    home: "Designed around a few sessions a week. Bearings, wheels and upholstery are specified for that pattern.",
    commercial: "Designed for continuous use across a full timetable, which is a completely different demand on wheels, bearings, ropes and upholstery. This is where a home machine in a studio fails first.",
  },
  {
    factor: "Serviceability and parts",
    home: "Some models have replaceable springs and ropes, others effectively do not, and parts availability for budget machines can disappear along with the importer.",
    commercial: "Built to be maintained. Springs, ropes, straps, wheels and upholstery are catalogued parts with a supply chain, which is what allows a good frame to last a decade or more.",
  },
  {
    factor: "Carriage travel and footbar",
    home: "Often a shorter carriage run and fewer footbar positions, sometimes with a simpler adjustment mechanism. Compact models trade travel for footprint deliberately.",
    commercial: "Full carriage travel and a multi-position footbar with a mechanism designed to be adjusted many times a day. This is what makes studio repertoire transfer without modification.",
  },
  {
    factor: "Spring system",
    home: "Fewer springs or less differentiation between them. Workable, but it limits how finely resistance can be set for a given client.",
    commercial: "A graded spring set with clear tension differences, usually colour coded, and the range a full syllabus assumes. Also the part most likely to need replacing on schedule.",
  },
  {
    factor: "Noise",
    home: "Rarely specified and rarely great. Fine alone in a spare room, noticeable when it is the only sound in the house.",
    commercial: "Quieter wheels and better tracking, which matters more in a studio running six machines at once than it does at home, but is a real quality-of-life difference either way.",
  },
];

const REFORMERS = [
  { name: "Align Pilates C8 Pro Reformer", description: "The value pick among commercial-rated machines, and genuinely not a compromise. Aluminium rails, a graded colour-coded spring set, and a build specified for studio use, at a real discount to anything comparable from Balanced Body.", price: "From $2,750", affiliateUrl: "https://www.amazon.com/s?k=align+pilates+c8+pro+reformer&tag=pilatescollective-20" },
  { name: "Merrithew SPX Max Reformer", description: "The STOTT PILATES reference machine, and the one that folds completely flat onto castors to roll under a bed. Five colour-coded springs with unusually fine gradation at the light end, which is what makes it the pick for rehabilitation and prenatal work.", price: "From $3,649", affiliateUrl: "https://www.amazon.com/s?k=merrithew+spx+max+reformer&tag=pilatescollective-20" },
  { name: "Balanced Body Allegro 2 Reformer", description: "The folding studio machine most home buyers end up comparing everything else against. Upright fold against a wall, the deepest accessory ecosystem in the industry, and the strongest resale of any reformer here. $3,995 standard, around $4,325 with the leg kit.", price: "From $3,995", affiliateUrl: "https://www.amazon.com/dp/B0D3G2BJZ7?tag=pilatescollective-20" },
  { name: "Balanced Body Studio Reformer", description: "The permanent-installation machine that populates certification centres and clinics. Strata rock maple frame, five signature springs, and full tower compatibility. Price runs $4,400 to $4,800 depending on which of the four footbars you choose. It does not fold.", price: "From $4,400", affiliateUrl: "https://www.amazon.com/dp/B0C9G88VJS?tag=pilatescollective-20" },
  { name: "AeroPilates Pro XP 557 Reformer", description: "The one machine from a recognised brand that genuinely costs under $2,000. It uses elastic cord rather than coil springs, which is a real difference in how resistance builds, but for building a habit it is a workable trade.", price: "From $1,329", affiliateUrl: "https://www.amazon.com/s?k=aeropilates+pro+xp+557+reformer&tag=pilatescollective-20" },
  { name: "Gratz Universal Aluminum Reformer", description: "The original Gratz design, built to the classical specification and still the reference for that lineage. Buy this if the classical repertoire is what you are training, not because it is the most expensive option. Sold direct at gratzpilates.com, not available on Amazon.", price: "From $4,590", affiliateUrl: "https://www.gratzpilates.com/collections/reformers" },
];

const PRODUCTS = [
  { name: "Reformer Replacement Springs", description: "The wear part that defines both tiers. Commercial machines treat springs as scheduled consumables with catalogued replacements; many budget machines do not. Whichever you own, springs lose tension long before they visibly fail, and a set that has drifted quietly changes every resistance setting you teach or train with. Check compatibility with your exact model, since spring ends and lengths are not interchangeable across brands.", price: "From $45", affiliateUrl: "https://www.amazon.com/s?k=pilates+reformer+replacement+springs&tag=pilatescollective-20" },
  { name: "Reformer Ropes and Straps", description: "Ropes stretch and fray, and a stretched rope changes the working length of every strap exercise without anyone noticing the cause. Replace them as a set rather than individually so both sides match. If you own a machine with fixed-length ropes, adjustable replacements are one of the few genuine upgrades available to a home reformer.", price: "From $35", affiliateUrl: "https://www.amazon.com/s?k=pilates+reformer+ropes+straps+replacement&tag=pilatescollective-20" },
  { name: "Reformer Wheel and Bearing Cleaning Kit", description: "Carriage noise and a gritty glide are almost always dirt in the wheel track rather than a worn bearing. Cleaning the rails and wheels on a schedule is the single highest-return maintenance task on any reformer, and it is the difference between a machine that feels studio-grade at year five and one that does not.", price: "From $20", affiliateUrl: "https://www.amazon.com/s?k=equipment+cleaning+kit+microfiber+lubricant+silicone&tag=pilatescollective-20" },
  { name: "Vinyl-Safe Upholstery Cleaner", description: "Upholstery is the first thing to look tired on any reformer at any price. Alcohol-heavy and bleach-based cleaners dry the vinyl until it cracks, which converts a wipe-down into a re-upholstery bill. A formula rated for vinyl and leatherette costs the same and does not do that.", price: "From $18", affiliateUrl: "https://www.amazon.com/s?k=vinyl+upholstery+cleaner+conditioner+gym+equipment&tag=pilatescollective-20" },
  { name: "Reformer Jumpboard", description: "Available for most machines in both tiers and the cheapest way to add a genuinely different training stimulus to a reformer you already own. Confirm the fit for your specific model before ordering: jumpboards mount to the footbar or frame and the mountings are not universal.", price: "From $199", affiliateUrl: "https://www.amazon.com/s?k=pilates+reformer+jumpboard&tag=pilatescollective-20" },
  { name: "Non-Slip Reformer Mat Topper", description: "A thin grip topper is the cheapest fix for a carriage that has become slick with use, and it makes standing and kneeling work feel secure on an older machine. Worth having on a home reformer where the upholstery is past its best but the frame is sound.", price: "From $30", affiliateUrl: "https://www.amazon.com/s?k=pilates+reformer+non+slip+mat+topper+grip&tag=pilatescollective-20" },
];

export default function CommercialVsHomePilatesReformerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Comparison</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Reformers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Commercial vs Home<br /><span style={{ color: "#8b4a31" }}>Pilates Reformer</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 11 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Commercial and home reformers look similar in photographs and they are not the same product. The differences that matter are not the ones the marketing leads with: the frame and the spring set are real, but the decisive ones are the warranty wording and whether the machine is designed to be repaired. Here is what separates the tiers, item by item, and the three situations where paying for commercial grade is the wrong call.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformer-spring-detail.png" alt="Close detail of the spring assembly and frame of a Pilates reformer" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-14 mt-4 rounded-2xl p-7" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>The short version</p>
              <p className="text-base leading-relaxed mb-0" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Teaching for money: buy commercial, because a domestic warranty almost certainly excludes commercial use and you lose cover on day one. Practising at home and taking studio classes regularly: commercial grade is a real upgrade, but for carriage travel and spring range rather than durability. Practising at home a couple of times a week: a good home reformer is the correct machine and the commercial premium buys you nothing you will use.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The comparison, factor by factor</h2>
              <div className="space-y-4">
                {COMPARISON.map((row) => (
                  <div key={row.factor} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{row.factor}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div style={{ minWidth: 0 }}>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-2" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Home grade</p>
                        <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{row.home}</p>
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Commercial grade</p>
                        <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{row.commercial}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The warranty clause is the whole argument</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Everything above is a matter of degree except this. Manufacturer warranties on home apparatus commonly limit cover to domestic, non-commercial use, and that exclusion is not triggered by wear or by time. It is triggered the first time you take money for a session on the machine.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The consequence is worse than losing a warranty you might never have claimed on, because the exclusion lands exactly where the risk concentrates. A machine on a studio timetable does perhaps twenty times the work of the same machine in a spare bedroom. You are removing cover at the precise moment the duty cycle makes a failure likely, and a reformer frame or spring failure with a client on the carriage is not a maintenance issue.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                So before comparing anything else, read the warranty on the specific model, not the brand, and find the words that define permitted use. If you intend to teach even a handful of paid sessions, that clause decides the purchase on its own. Our{" "}
                <Link href="/blog/pilates-studio-equipment-cost-breakdown" style={{ color: "#8b4a31", textDecoration: "underline" }}>studio equipment cost breakdown</Link>{" "}
                prices out what the commercial tier actually adds to a fit-out, and it is smaller than most people expect.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Where the price gap really sits</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The tiers are not separated by a cliff. Entry commercial-rated machines overlap with premium home reformers, and the step up at that crossover point is genuinely small. Align Pilates sits in that overlap, with commercial-rated frames from around $1,400, which is why it appears both in studio fit-outs and in serious home setups.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Above that, the studio standard from the established brands runs from roughly $2,200 for a Merrithew SPX Max to around $4,000 for a Balanced Body Allegro 2, and classical wood and aluminium apparatus from Gratz reaches $5,000 and beyond. The premium at the top is buying refinement, lineage and resale value rather than a step change in durability, which is worth knowing before assuming that more money means a more robust machine.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Set against a working life measured in a decade or more, the annual cost of commercial apparatus is lower than the sticker suggests, and lower than replacing home machines that were never rated for the work. That arithmetic is the honest case for the tier, and it only applies if the machine is actually being used hard.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Three cases where home grade is the right answer</h2>
              <div className="space-y-4">
                {[
                  { label: "You practise two or three times a week for general fitness", body: "A good home reformer is specified for exactly this and will do it for years. The commercial premium buys duty cycle you will never consume and a warranty clause that is irrelevant to you. Spend the difference on props, a jumpboard and some instruction instead, all of which will change your practice more than the frame will." },
                  { label: "Space or storage is the binding constraint", body: "Folding and compact reformers are overwhelmingly home-grade, and that is not a compromise you can buy your way out of. A commercial machine is longer, heavier and not designed to be moved. If the machine has to live under a bed or against a wall between sessions, the home tier is not a downgrade, it is the only category that solves your problem. Check the figures in our reformer dimensions guide before assuming a full-size frame fits." },
                  { label: "You are testing whether you will keep it up", body: "Buying at the entry end first is a reasonable way to find out whether a reformer earns its floor space in your life. Reformers hold their value comparatively well, so the cost of discovering you want a better one is mostly the depreciation and the hassle of selling. That is a cheaper way to learn than committing five figures up front." },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14 rounded-2xl p-8" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Ask the seller these before ordering</h2>
              <ul className="space-y-3">
                {[
                  "Does the warranty on this specific model cover commercial use, and what are the separate terms for the frame and for wear parts?",
                  "What is the stated user weight rating, and is it a static or a dynamic figure?",
                  "Are springs, ropes, straps, wheels and upholstery available as replacement parts, and for how long will they be stocked?",
                  "What is the carriage travel length, and how many footbar positions does it have?",
                  "Does it arrive assembled or flat-packed, and will it fit through the doorways and turns on the way to the room?",
                  "Is assembly and calibration included, and who does it?",
                  "What is the response time on a warranty claim, and does anyone come out to the machine?",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold" style={{ color: "#8b4a31" }}>⚠</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "What is the difference between a commercial and a home Pilates reformer?", a: "Four things, in order of how much they matter. The frame is built to a higher standard, usually heavier-gauge aluminium or hardwood with fully welded or mortised joints rather than bolted sections. The stated user weight rating is higher. The warranty explicitly covers commercial use, where a domestic warranty typically excludes it. And the machine is designed to be serviced, so springs, ropes, wheels and upholstery are replaceable parts with a supply chain behind them. The carriage glide and footbar adjustment tend to be better too, but those are refinements. The warranty and the serviceability are the substance." },
                  { q: "Can I use a home reformer in a studio?", a: "Physically yes, contractually usually not. Manufacturer warranties commonly distinguish domestic from commercial use, so putting a home-rated machine on a paid timetable typically voids cover from the first paid class. That matters more than it sounds: you lose the warranty precisely when the machine is doing the work most likely to break it. Your insurer may also ask questions after an incident involving equipment used outside its stated rating. If you are teaching for money, buy machines rated for it." },
                  { q: "Is a commercial reformer worth it for home use?", a: "For many serious home practitioners, yes, and the reason is not durability. A commercial machine gives you the same carriage travel, footbar geometry and spring range you feel in a studio, so the repertoire you learn in class transfers directly to your own machine. A shorter home frame changes how several exercises feel. If you take class regularly and want your practice at home to match it, the commercial tier is a genuine upgrade rather than overbuilding. If you use a reformer a couple of times a week for general fitness, it is money that would be better spent elsewhere." },
                  { q: "How much more does a commercial reformer cost?", a: "Entry commercial-rated machines start around $1,400 to $1,800, which overlaps with the upper end of home reformers, so the step up at that point is small. The larger gap is at the top: studio-standard machines from the established brands generally run $2,200 to $4,500, and classical wood or aluminium apparatus reaches $5,000 and beyond. Compared like for like on the same footprint and spring system, the commercial version of a machine typically costs a few hundred to a couple of thousand more, and lasts long enough in studio use that the per-year cost is lower." },
                ].map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reformers */}
            <div className="mt-16 pt-12" style={{ borderTop: "1px solid rgba(217,194,186,0.4)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Reformers</p>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Machines at each tier</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Commercial-rated machines first, then the home-grade option, so you can see what the tier actually costs. Check the warranty covers your intended use before ordering, and confirm the machine fits the room and the route into it.
              </p>
              <div className="space-y-8">
                {REFORMERS.map((p) => (
                  <ProductCard key={p.name} name={p.name} description={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />
                ))}
              </div>
            </div>

            {/* Equipment */}
            <div className="mt-16 pt-12" style={{ borderTop: "1px solid rgba(217,194,186,0.4)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment</p>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Parts and care, whichever tier you own</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The wear parts and care items below are what keep either tier of machine feeling like it did when it arrived, and they are the same products whoever sells them. Check compatibility with your exact model before ordering any part.
              </p>
              <div className="space-y-8">
                {PRODUCTS.map((p) => (
                  <ProductCard key={p.name} name={p.name} description={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Reformer Dimensions & Space Requirements" excerpt="Footprints by model, ceiling height, clearance and what actually fits in a spare room." href="/blog/pilates-reformer-dimensions-and-space-requirements" category="Equipment" readTime="11 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-sunlit-minimal.png" />
                <ArticleCard title="Best Studio Pilates Reformers" excerpt="Commercial-grade machines reviewed on durability, spring range and long-term value." href="/blog/best-studio-pilates-reformers" category="Equipment" readTime="12 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
                <ArticleCard title="Best Home Pilates Reformer" excerpt="Start from your constraint, not the price list. Every home reformer bracket compared." href="/blog/best-home-pilates-reformer" category="Equipment" readTime="12 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-morning-light.png" />
                <ArticleCard title="Pilates Studio Equipment Cost Breakdown" excerpt="Itemised budgets for a 3, 6 and 10 reformer studio at real list prices." href="/blog/pilates-studio-equipment-cost-breakdown" category="Guide" readTime="12 min read" date="September 2026" imageUrl="/pictures/stitch-reformers-aerial-row.png" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in London…" />
      </main>
      <Footer />
    </>
  );
}
