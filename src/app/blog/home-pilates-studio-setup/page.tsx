import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "How to Set Up a Home Pilates Studio (2026): Complete Guide | Pilates Collective Club",
  description: "How to set up a home Pilates studio — space planning, reformer selection, flooring, lighting, and essential accessories covered in a complete 2026 guide.",
  keywords: ["home pilates studio setup", "home pilates studio guide 2026", "how to set up pilates room", "home reformer pilates room", "pilates studio at home", "best home pilates equipment", "pilates studio room design", "home pilates space setup"],
  openGraph: {
    title: "How to Set Up a Home Pilates Studio (2026)",
    description: "What equipment to buy, in what order, for what budget — the complete home Pilates studio guide.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/home-pilates-studio-setup",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg", width: 1200, height: 630, alt: "Home Pilates studio setup guide — Pilates Collective Club" }],
  },
  twitter: { card: "summary_large_image", title: "How to Set Up a Home Pilates Studio (2026)", description: "The complete equipment guide — what to buy, in what order, for what budget.", images: ["https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg"] },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/home-pilates-studio-setup" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "How to Set Up a Home Pilates Studio (2026): The Complete Equipment Guide",
      "description": "The complete guide to setting up a home Pilates studio — what equipment to buy, in what order, for what budget, and how much space you actually need.",
      "url": "https://pilatescollectiveclub.com/blog/home-pilates-studio-setup",
      "datePublished": "2026-05-16",
      "dateModified": "2026-05-16",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/home-pilates-studio-setup" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "How to Set Up a Home Pilates Studio", "item": "https://pilatescollectiveclub.com/blog/home-pilates-studio-setup" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do I need a dedicated room for a home Pilates studio?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. A foldable reformer stores upright against a wall in a living room or bedroom. The mat equipment (mat, bands, ring, roller) stores in a bag. A full home studio with non-folding apparatus benefits from a dedicated room, but most home practitioners set up and fold away in a shared space." },
        },
        {
          "@type": "Question",
          "name": "In what order should I buy Pilates equipment?",
          "acceptedAnswer": { "@type": "Answer", "text": "Mat first, always. Then small accessories (socks, bands, ring, roller). Then reformer when you have studio experience. Then box (immediately with the reformer). Then tower or jump board as the practice deepens. Never buy a reformer as a first piece of equipment before studio experience." },
        },
        {
          "@type": "Question",
          "name": "What is the minimum space for a home reformer?",
          "acceptedAnswer": { "@type": "Answer", "text": "Approximately 3m × 4m for comfortable reformer use with safe exit clearance on all sides. The reformer itself is approximately 244cm × 61cm; you need 90cm+ of clear space either end and to the sides for mounting and dismounting safely." },
        },
        {
          "@type": "Question",
          "name": "Is rubber flooring necessary for a home Pilates studio?",
          "acceptedAnswer": { "@type": "Answer", "text": "Not strictly necessary, but strongly recommended for any space with a reformer. Rubber flooring prevents the reformer base from sliding, cushions mat work, and reduces noise. 8mm interlocking gym tiles are the most practical solution — installed in an afternoon, removable if you move." },
        },
      ],
    },
  ],
};

const EQUIPMENT_STAGES = [
  {
    stage: "01",
    item: "Mat",
    cost: "$100–$140",
    unlocks: "The entire mat repertoire — The Hundred, Roll Up, Single Leg Circles, Rolling Like a Ball, and the full classical sequence. This is the foundation for every other piece of apparatus. No other equipment purchase is worth making before you have a quality mat and a consistent mat practice.",
  },
  {
    stage: "02",
    item: "grip socks + resistance bands + magic circle",
    cost: "$80–$150 total",
    unlocks: "Extended mat work with resistance: hip abductor and adductor work with the ring, shoulder and leg resistance band exercises, and the grip socks you will need for safe reformer footwork later. These three items represent the most cost-efficient expansion of any Pilates practice.",
  },
  {
    stage: "03",
    item: "Foam roller or Arc barrel",
    cost: "$35–$265",
    unlocks: "Thoracic mobility and extension work that the flat mat cannot provide. The foam roller addresses thoracic extension and self-myofascial release. The arc barrel goes further — it supports extension exercises, Breaststroke, and Swan variations, and introduces balance challenge to mat exercises. A foam roller is the budget entry; the arc barrel is the functional upgrade.",
  },
  {
    stage: "04",
    item: "Reformer",
    cost: "$300–$3,500+",
    unlocks: "The full reformer repertoire — Footwork, Leg Circles, Elephant, Long Stretch, Short Spine, and the hundreds of exercises that define the Pilates system beyond the mat. This is the most significant equipment step, and the one that requires prior studio experience to use safely and effectively.",
  },
  {
    stage: "05",
    item: "Reformer Box",
    cost: "$250",
    unlocks: "The Long Box and Short Box series — Pulling Straps, T-Pull, Rowing, Swan, Teaser variations on the box. The box should be purchased with the reformer; these series are part of the basic reformer repertoire and are not optional add-ons.",
  },
  {
    stage: "06",
    item: "Jump Board",
    cost: "$200",
    unlocks: "Cardio intervals on the reformer — jumping footwork sequences that elevate heart rate while maintaining spring-loaded feedback. A lower-impact complement to the standard footwork sequence. Most useful for practitioners looking to add cardiovascular conditioning to their reformer sessions.",
  },
  {
    stage: "07",
    item: "Tower or Vertical Stand",
    cost: "$700–$900",
    unlocks: "Push-through bar exercises, roll-down bar, arm springs, and leg spring work — the full mat tower repertoire. The tower attaches to the foot end of the reformer and does not require additional floor space, though it does require a ceiling height of at least 2.1m for push-through bar exercises.",
  },
  {
    stage: "08",
    item: "Wunda Chair",
    cost: "$1,800–$2,200",
    unlocks: "Advanced balance, hip flexor, and standing work — including Pumping, Swan, Washerwoman, and Tendon Stretch. The most demanding apparatus in the Pilates system. The Wunda Chair requires genuine proficiency on the mat and reformer before it is used safely, and it is the least essential apparatus for home setups.",
  },
];

const SPACE_REQUIREMENTS = [
  { scenario: "Mat-only practice", space: "2m × 2m minimum", note: "The length of a yoga mat plus arm extension width. Sufficient for the full classical mat sequence." },
  { scenario: "Mat + accessories (bands, ring, roller)", space: "2m × 2m minimum", note: "Same footprint as mat-only. The accessories do not require additional floor area." },
  { scenario: "Foldable reformer (stored upright)", space: "244cm × 240cm working area + 110cm × 25cm wall clearance when folded", note: "The working area accounts for 90cm+ clearance either side for safe mounting and dismounting. The wall footprint when upright is minimal." },
  { scenario: "Non-folding reformer", space: "244cm × 61cm permanent footprint + approx. 244cm × 200cm total working area", note: "A non-folding reformer requires a permanent installation. The working clearance around the apparatus is the practical limiting factor." },
  { scenario: "Reformer + Wunda Chair", space: "Add approx. 60cm × 50cm to the reformer working area", note: "The Wunda Chair has a small footprint but requires clearance on all sides for safe use." },
  { scenario: "Reformer + Tower", space: "Same floor footprint as the reformer", note: "The tower attaches to the reformer foot end. No additional floor space required, but ceiling height must be 2.1m+ for push-through bar exercises." },
  { scenario: "Full apparatus (reformer + chair + barrel + tower)", space: "Minimum 4m × 5m room, 2.4m+ ceiling", note: "A dedicated room of this size covers approximately 80% of a professional studio's offering." },
];

const BUDGET_SCENARIOS = [
  {
    label: "01",
    title: "Minimal setup",
    cost: "$250–$500",
    items: ["Quality Pilates mat (6mm)", "Grip socks (2–3 pairs)", "Resistance bands (set)", "Magic circle / Pilates ring", "Foam roller"],
    covers: "The full mat repertoire — all classical mat exercises, hip and shoulder accessory work, thoracic mobility. A complete and challenging practice at a fraction of the cost of any apparatus.",
  },
  {
    label: "02",
    title: "Serious mat practitioner",
    cost: "$400–$700",
    items: ["Everything in the Minimal setup", "Arc barrel (upgrade from foam roller)", "Quality mat bag for storage and organisation"],
    covers: "Everything the minimal setup covers, plus extension work, Swan and Breaststroke variations, and balance challenges that the flat mat cannot provide. The arc barrel is the most versatile single upgrade to a mat-only practice.",
  },
  {
    label: "03",
    title: "Home reformer practitioner",
    cost: "$4,000–$5,000",
    items: ["Premium home reformer", "Reformer box (essential — buy with the reformer)", "Jump board", "Quality mat", "Grip socks (multiple pairs)"],
    covers: "The full reformer and mat repertoire — footwork, all spring-based exercises, Long Box and Short Box series, cardio jump board intervals. This is the setup that covers 90% of what a weekly studio visitor experiences.",
  },
  {
    label: "04",
    title: "Full home apparatus",
    cost: "$10,000–$15,000",
    items: ["Premium reformer + box", "Tower / Vertical stand", "Wunda Chair", "Arc barrel", "Mat, grip socks, bands, ring"],
    covers: "Approximately 80% of a professional studio's full offering. The tower adds the complete mat tower repertoire; the Wunda Chair adds advanced balance and standing work. A setup of this scale genuinely replicates a studio environment.",
  },
];

const FAQS = [
  {
    q: "Do I need a dedicated room for a home Pilates studio?",
    a: "No. A foldable reformer stores upright against a wall in a living room or bedroom. The mat equipment (mat, bands, ring, roller) stores in a bag. A full home studio with non-folding apparatus benefits from a dedicated room, but most home practitioners set up and fold away in a shared space.",
  },
  {
    q: "In what order should I buy Pilates equipment?",
    a: "Mat first, always. Then small accessories (socks, bands, ring, roller). Then reformer when you have studio experience. Then box (immediately with the reformer). Then tower or jump board as the practice deepens. Never buy a reformer as a first piece of equipment before studio experience.",
  },
  {
    q: "What is the minimum space for a home reformer?",
    a: "Approximately 3m × 4m for comfortable reformer use with safe exit clearance on all sides. The reformer itself is approximately 244cm × 61cm; you need 90cm+ of clear space either end and to the sides for mounting and dismounting safely.",
  },
  {
    q: "Is rubber flooring necessary for a home Pilates studio?",
    a: "Not strictly necessary, but strongly recommended for any space with a reformer. Rubber flooring prevents the reformer base from sliding, cushions mat work, and reduces noise. 8mm interlocking gym tiles are the most practical solution — installed in an afternoon, removable if you move.",
  },
];

export default function HomePilatesStudioSetupPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>

        {/* ── Hero section ── */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
              >
                Home Studio
              </span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span
                className="text-xs font-semibold uppercase tracking-[0.15em]"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                Equipment Guide
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6"
              style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
            >
              How to Set Up a Home Pilates Studio (2026):<br />
              <span style={{ color: "#8b4a31" }}>The Complete Equipment Guide</span>
            </h1>

            <p
              className="text-sm mb-8"
              style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}
            >
              Updated May 2026 · 10 min read
            </p>

            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />

            <p
              className="text-lg leading-relaxed"
              style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
            >
              A home Pilates studio does not need to be a dedicated room or a six-figure investment. The most effective home setups are built incrementally — starting with the essential foundation and adding apparatus as the practice deepens and the budget allows. This guide covers the right order to buy equipment, the minimum space requirements, and what a complete setup at every budget level actually looks like.
            </p>
          </div>
        </section>

        {/* ── Hero image ── */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div
              className="w-full rounded-2xl overflow-hidden relative"
              style={{ height: "420px" }}
            >
              <Image
                src="/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg"
                alt="Home Pilates studio setup — reformer, mat, and equipment guide"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.85)" }}
                priority
              />
            </div>
          </div>
        </section>

        {/* ── Main content ── */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Section A — Start here: the foundation before the reformer */}
            <div className="mb-16">
              <h2
                className="text-3xl font-semibold mb-6"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                Start here: the foundation before the reformer
              </h2>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                The single most common mistake in home studio building is buying a reformer first. The reformer is the most versatile piece of Pilates apparatus — and the most unforgiving of poor movement patterns. A practitioner without mat foundations will load the reformer incorrectly, compensate through the neck and hip flexors, and miss the muscular connections the apparatus is designed to train. The equipment amplifies whatever patterns the practitioner brings to it.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                The professional recommendation is 6–12 months of mat work or studio reformer sessions before purchasing your own reformer. This is not a conservative suggestion — it is the minimum time required to develop the body awareness that makes reformer work productive rather than just expensive. Build the foundation first. The correct order is mat work, then accessories, then reformer.
              </p>

              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-6"
                style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
              >
                Foundation items — what to start with
              </p>

              <div className="space-y-4">
                {[
                  {
                    name: "Mat (firm, 6mm)",
                    desc: "The foundation of everything. A quality mat provides the spinal feedback necessary for articulation exercises — you should feel each vertebra make contact distinctly during roll-down and roll-up movements. 6mm is the professional standard: firm enough for feedback, enough cushioning for sustained floor contact. Do not use a yoga mat as a substitute for daily Pilates work.",
                  },
                  {
                    name: "Grip socks",
                    desc: "Essential for reformer work later, and useful on the mat for exercises where bare feet slide on the surface. Grip socks are a small investment with outsized safety implications — particularly for standing reformer exercises where foot slippage is a fall risk.",
                  },
                  {
                    name: "Resistance bands",
                    desc: "A set of resistance bands extends the mat repertoire significantly, adding hip abductor and shoulder work that the mat sequence alone does not cover. Light, medium, and heavy resistance covers the full range of exercises. They store in a bag and cost very little.",
                  },
                  {
                    name: "Magic circle (Pilates ring)",
                    desc: "The magic circle is the most underestimated small accessory in the Pilates system. Inner thigh and adductor work, chest and arm resistance exercises, and lateral rib cage compression — the ring adds genuine resistance challenge to mat exercises without requiring any floor clearance beyond the mat.",
                  },
                  {
                    name: "Foam roller",
                    desc: "Thoracic mobility work and self-myofascial release that the flat mat cannot provide. The foam roller allows thoracic extension over a curved surface, addressing the thoracic kyphosis that sedentary work patterns create. Used before mat sessions as mobilisation, or after sessions for recovery.",
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="rounded-xl p-5"
                    style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}
                  >
                    <p
                      className="text-sm font-semibold mb-1.5"
                      style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.name}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section B — Space requirements */}
            <div className="mb-16">
              <h2
                className="text-3xl font-semibold mb-6"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                Space requirements: the honest numbers
              </h2>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                Reformer dimensions are widely underestimated. The carriage extends the reformer to its full 244cm length during footwork and long stretch sequences — the working space requirement is significantly larger than the equipment footprint alone. Safe entry and exit require 90cm of clearance on all sides. The ceiling height requirement (230cm minimum) eliminates some converted attic and basement spaces.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                Below are the precise space requirements for each configuration. These are minimums — the numbers where the setup is functional, not where it is comfortable. Add buffer where possible.
              </p>

              <div className="overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
                <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.2em]"
                    style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Space requirements by configuration
                  </p>
                </div>
                {SPACE_REQUIREMENTS.map((row, i) => (
                  <div
                    key={row.scenario}
                    className="px-6 py-5"
                    style={{
                      borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <p
                      className="text-sm font-semibold mb-1"
                      style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {row.scenario}
                    </p>
                    <p
                      className="text-sm font-semibold mb-1.5"
                      style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {row.space}
                    </p>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {row.note}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 rounded-xl px-6 py-5"
                style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.3)" }}
              >
                <p
                  className="text-sm font-semibold mb-1.5"
                  style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
                >
                  Ceiling height note
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
                >
                  The minimum ceiling height for all reformer exercises is 230cm — specifically for standing exercises performed on the reformer platform. Most standard residential ceilings (240–260cm) meet this requirement. Spaces with ceilings below 230cm should be limited to lying and seated reformer work only.
                </p>
              </div>
            </div>

            {/* Section C — Equipment acquisition order */}
            <div className="mb-16">
              <h2
                className="text-3xl font-semibold mb-3"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                Equipment acquisition order: 8 stages
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                The order below reflects the professional consensus on how a home Pilates setup should be built. Each stage is predicated on having genuine competence with the previous stage. Moving ahead of this sequence is how expensive equipment sits unused and how injuries occur.
              </p>

              <div className="space-y-5">
                {EQUIPMENT_STAGES.map((stage) => (
                  <div
                    key={stage.stage}
                    className="rounded-xl overflow-hidden"
                    style={{ border: "1px solid rgba(217,194,186,0.35)" }}
                  >
                    <div
                      className="flex items-center gap-4 px-6 py-4"
                      style={{ backgroundColor: "#f6f3f2", borderBottom: "1px solid rgba(217,194,186,0.3)" }}
                    >
                      <span
                        className="text-2xl font-semibold shrink-0"
                        style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}
                      >
                        {stage.stage}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-base font-semibold"
                          style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
                        >
                          {stage.item}
                        </p>
                      </div>
                      <span
                        className="text-sm font-semibold shrink-0"
                        style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {stage.cost}
                      </span>
                    </div>
                    <div className="px-6 py-4" style={{ backgroundColor: "#ffffff" }}>
                      <p
                        className="text-xs font-semibold uppercase tracking-[0.12em] mb-2"
                        style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}
                      >
                        What it unlocks
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {stage.unlocks}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section D — Flooring, mirrors, and lighting */}
            <div className="mb-16">
              <h2
                className="text-3xl font-semibold mb-6"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                Flooring, mirrors, and lighting
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                The environment a home studio creates has a direct effect on practice quality. Flooring affects reformer safety and mat cushioning. Lighting affects concentration during floor work. These are practical decisions — not aesthetic ones — and they are worth making deliberately.
              </p>

              <div className="space-y-6">
                {[
                  {
                    heading: "Flooring",
                    content: "Rubber gym flooring (minimum 8mm) is the professional standard for home Pilates studios. It provides grip for the reformer base — preventing the apparatus from sliding during spring-loaded exercises — cushioning for mat work, and reduces noise transfer to rooms below. Interlocking tiles are the most practical format: installed in an afternoon, removable if you move, and expandable as the studio grows. Standard interlocking gym tiles from hardware stores work well. Horse stall mat rubber (12–20mm thickness) is a popular choice among home practitioners for its durability and lower cost per square metre — available in 6' × 4' panels at farm supply stores.",
                  },
                  {
                    heading: "Mirrors",
                    content: "A full-wall or full-length mirror is standard in all professional studios, and for good reason: self-correction during mat work and standing reformer exercises is significantly more effective with visual feedback. The minimum useful size is 120cm wide, full length (180cm+). Mirrors are not essential for a mat-only setup but become genuinely valuable once reformer standing exercises are introduced. A wall-mounted mirror does not require additional floor space.",
                  },
                  {
                    heading: "Lighting",
                    content: "Avoid harsh downward-facing spotlights. Overhead spots create direct glare during floor exercises — lying on your back with a spotlight directly above is uncomfortable and distracting. Wall sconces, floor lamps at the perimeter, or diffused ceiling panels eliminate this problem. Natural light is the ideal: a room with good window coverage on the north or east wall provides consistent diffused light without direct sun through sessions. If the space has no natural light, warm diffused artificial lighting (3000–3500K) is preferable to cool overhead fluorescents.",
                  },
                  {
                    heading: "Ventilation",
                    content: "Pilates is low-intensity cardiovascular work. Unlike spin or HIIT, a Pilates session does not generate extreme body heat or require industrial ventilation. A fan, open window, or basic room ventilation is generally sufficient for home use. Dedicated HVAC is not required unless the space has no natural airflow. Ensure the room does not become humid — especially if rubber flooring is installed, as trapped moisture beneath the tiles creates mould risk.",
                  },
                ].map((item) => (
                  <div
                    key={item.heading}
                    className="rounded-xl p-6"
                    style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}
                  >
                    <p
                      className="text-base font-semibold mb-3"
                      style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.heading}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section E — Budget scenarios */}
            <div className="mb-16">
              <h2
                className="text-3xl font-semibold mb-3"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                Budget scenarios: what a home studio costs at each level
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                The four scenarios below represent natural stopping points in home studio development. Most practitioners settle at the first or third level. The fourth level is a studio, not a home setup — but it is achievable and worth understanding for those planning a full installation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {BUDGET_SCENARIOS.map((scenario) => (
                  <div
                    key={scenario.label}
                    className="rounded-xl overflow-hidden"
                    style={{ border: "1px solid rgba(217,194,186,0.35)" }}
                  >
                    <div
                      className="px-5 py-4"
                      style={{ backgroundColor: "#1b1c1c" }}
                    >
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <span
                          className="text-xs font-semibold uppercase tracking-[0.2em]"
                          style={{ color: "#d9c2ba", fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {scenario.label}
                        </span>
                        <span
                          className="text-sm font-semibold"
                          style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {scenario.cost}
                        </span>
                      </div>
                      <p
                        className="text-base font-semibold"
                        style={{ color: "#fcf9f8", fontFamily: "'Playfair Display', serif" }}
                      >
                        {scenario.title}
                      </p>
                    </div>
                    <div className="px-5 py-4" style={{ backgroundColor: "#ffffff" }}>
                      <ul className="space-y-1.5 mb-4">
                        {scenario.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm"
                            style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
                          >
                            <span style={{ color: "#8b4a31", flexShrink: 0 }}>—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div
                        className="rounded-lg px-4 py-3"
                        style={{ backgroundColor: "#f6f3f2" }}
                      >
                        <p
                          className="text-xs font-semibold uppercase tracking-[0.12em] mb-1"
                          style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}
                        >
                          Covers
                        </p>
                        <p
                          className="text-xs leading-relaxed"
                          style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {scenario.covers}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section F — FAQ */}
            <div className="mb-16">
              <h2
                className="text-3xl font-semibold mb-8"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                Frequently asked questions
              </h2>
              <div className="space-y-5">
                {FAQS.map((item) => (
                  <div
                    key={item.q}
                    className="rounded-xl p-6"
                    style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}
                  >
                    <p
                      className="text-base font-semibold mb-2"
                      style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.q}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section G — Further reading */}
            <div>
              <h2
                className="text-2xl font-semibold mb-2"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                Further reading
              </h2>
              <div>
                <ArticleCard
                  title="Best Home Pilates Reformer (2026)"
                  excerpt="The best home reformers at every price point — from entry-level to studio-grade."
                  href="/blog/best-home-pilates-reformer"
                  category="Equipment Guide"
                  readTime="10 min read"
                  date="May 2026"
                  imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg"
                />
                <ArticleCard
                  title="Best Pilates Starter Kit (2026)"
                  excerpt="Everything a beginner needs — mat, grip socks, bands, and ring, in the right order."
                  href="/blog/best-pilates-starter-kit"
                  category="Beginners"
                  readTime="9 min read"
                  date="May 2026"
                  imageUrl="/pictures/roxana-popovici-Zp4APUiwEsM-unsplash.jpg"
                />
              </div>
            </div>

          </div>
        </section>

        <CTASection
          title="Find a studio to train before building your home setup"
          subtitle="Our city guides help you find the best Pilates studios to learn on first."
        />

        {/* Gear Section */}
        <section style={{ backgroundColor: "#fcf9f8", padding: "60px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8b4a31", marginBottom: "12px" }}>Equipment</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 600, color: "#1b1c1c", marginBottom: "8px" }}>Everything you need to build your home studio</h2>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", color: "#53433e", marginBottom: "32px", lineHeight: 1.7 }}>
              The core equipment list for a functional home Pilates space, from essential to aspirational.{" "}Affiliate disclosure.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
              
                <a href="https://www.amazon.com/s?k=stamina+aeropilates+reformer+home+use&tag=pilatescollective-20" target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: "none" }}>
                  <div style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)", borderRadius: "12px", padding: "20px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 600, color: "#1b1c1c", marginBottom: "8px" }}>Budget Reformer (Under $1,000)</h3>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#53433e", lineHeight: 1.6, marginBottom: "12px" }}>AeroPilates and Stamina models deliver a genuine full-body session without the studio price.</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#8b4a31" }}>From $450</span>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c5a882" }}>Shop →</span>
                    </div>
                  </div>
                </a>
                <a href="https://www.amazon.com/s?k=align+pilates+reformer+home&tag=pilatescollective-20" target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: "none" }}>
                  <div style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)", borderRadius: "12px", padding: "20px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 600, color: "#1b1c1c", marginBottom: "8px" }}>Mid-Range Reformer ($1,000–$2,000)</h3>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#53433e", lineHeight: 1.6, marginBottom: "12px" }}>Align Pilates and Merrithew entry-level machines offer markedly better spring feel and stability.</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#8b4a31" }}>From $999</span>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c5a882" }}>Shop →</span>
                    </div>
                  </div>
                </a>
                <a href="https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20" target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: "none" }}>
                  <div style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)", borderRadius: "12px", padding: "20px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 600, color: "#1b1c1c", marginBottom: "8px" }}>Pilates Mat (6mm)</h3>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#53433e", lineHeight: 1.6, marginBottom: "12px" }}>A quality non-slip mat for mat class and home practice. Thicker than a standard yoga mat.</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#8b4a31" }}>From $45</span>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c5a882" }}>Shop →</span>
                    </div>
                  </div>
                </a>
                <a href="https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20" target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: "none" }}>
                  <div style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)", borderRadius: "12px", padding: "20px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 600, color: "#1b1c1c", marginBottom: "8px" }}>Magic Circle</h3>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#53433e", lineHeight: 1.6, marginBottom: "12px" }}>One of Pilates&apos; most versatile props — adds resistance to dozens of reformer and mat exercises.</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#8b4a31" }}>From $24</span>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c5a882" }}>Shop →</span>
                    </div>
                  </div>
                </a>
                <a href="https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20" target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: "none" }}>
                  <div style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)", borderRadius: "12px", padding: "20px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 600, color: "#1b1c1c", marginBottom: "8px" }}>Foam Roller</h3>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#53433e", lineHeight: 1.6, marginBottom: "12px" }}>Essential for spinal mobility, fascial release, and warm-up before class.</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#8b4a31" }}>From $28</span>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c5a882" }}>Shop →</span>
                    </div>
                  </div>
                </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
