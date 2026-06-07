import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "How Much Does a Pilates Reformer Cost? (2026 Price Guide) | Pilates Collective Club",
  description: "Pilates reformer price guide 2026 — from budget $300 machines to $10,000+ professional models, with honest guidance on what you get at each price point.",
  keywords: ["how much does a pilates reformer cost", "pilates reformer price 2026", "pilates reformer cost guide", "pilates reformer price range", "how expensive is pilates reformer", "pilates reformer budget", "cheap vs expensive reformer pilates", "pilates reformer investment"],
  openGraph: {
    title: "How Much Does a Pilates Reformer Cost? (2026 Price Guide)",
    description: "Every price tier from $299 to $12,000+ — what you actually get at each level and the real total cost of ownership.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/how-much-does-a-pilates-reformer-cost",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg", width: 1200, height: 630, alt: "Pilates reformer cost guide — Pilates Collective Club" }],
  },
  twitter: { card: "summary_large_image", title: "How Much Does a Pilates Reformer Cost? (2026)", description: "Every price tier from $299 to $12,000+ — what you get at each level.", images: ["https://pilatescollectiveclub.com/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg"] },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/how-much-does-a-pilates-reformer-cost" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRICE_TIERS = [
  {
    label: "Tier 1",
    range: "$200–$500",
    heading: "Budget / Cord-Based",
    tag: "Entry Level",
    body: "Elastic cord resistance (not springs), foldable aluminium frame, nylon-wheel carriage. Representative machines: AeroPilates 287 ($299), AeroPilates 4-Cord Sport ($349), AeroPilates Pro 557 ($449–$799).",
    forWho: "Beginners testing whether reformer Pilates suits them; practitioners with genuine budget constraints.",
    sacrifice: "Spring resistance feel, long-term durability (3–5 year lifespan with regular use), full exercise range, and accessory compatibility.",
    lifespan: "3–5 years",
  },
  {
    label: "Tier 2",
    range: "$800–$1,800",
    heading: "Entry Spring Reformers",
    tag: "First Real Spring",
    body: "Real coil springs, sealed or semi-sealed bearings, professional proportions. Representative: Align-Pilates C2 Pro (~$1,499, spring). The Align-Pilates C2 Pro is the most accessible genuine spring reformer with professional specifications.",
    forWho: "Practitioners ready for authentic spring resistance who cannot yet commit to premium pricing.",
    sacrifice: "Narrower accessory ecosystem, slightly less refined carriage feel, shorter expected lifespan (5–8 years vs 10–15+).",
    lifespan: "5–8 years",
  },
  {
    label: "Tier 3",
    range: "$1,800–$2,600",
    heading: "Premium Home Reformers",
    tag: "Best for Home",
    body: "Full professional spring system, sealed bearings, fold mechanism, major brand accessory compatibility. Representative: Merrithew SPX Max (~$2,199–$2,599). Same quality as studio machines; designed for daily home use.",
    forWho: "Practitioners with consistent studio experience who are ready to invest properly in home practice.",
    sacrifice: "Price of entry — but very little else. These machines match studio quality.",
    lifespan: "10–15 years",
  },
  {
    label: "Tier 4",
    range: "$2,600–$4,000+",
    heading: "Professional / Studio Grade",
    tag: "The Long-Term Buy",
    body: "The best carriage smoothness available, the fullest accessory ecosystem, commercial build quality. Representative: Balanced Body Allegro 2 (~$3,495). The machine you buy once.",
    forWho: "Serious long-term home practitioners, private instructors, and small studios.",
    sacrifice: "Nothing meaningful. This is the ceiling of what any practitioner needs.",
    lifespan: "15+ years",
  },
  {
    label: "Tier 5",
    range: "$6,500+",
    heading: "Classical / Commercial Studio",
    tag: "Studio / Collector",
    body: "Original specifications (Gratz), or highest-specification commercial machines for multi-unit studio installations. Representative: Gratz Universal Reformer (~$6,500–$7,500).",
    forWho: "Classical lineage teachers, established commercial studios, collectors. Not appropriate for casual home purchase.",
    sacrifice: "Not a concern at this level — this is the pinnacle of the apparatus.",
    lifespan: "20+ years",
  },
];

const TECH_FACTORS = [
  {
    heading: "Carriage bearings",
    body: "Sealed ball-bearing carriages (premium) vs nylon rollers (budget). The difference is smoothness, noise, and longevity — sealed bearings last the life of the machine; nylon rollers wear and become rough within 2–4 years of regular use.",
  },
  {
    heading: "Spring system",
    body: "Coil springs (all professional machines) vs elastic cords (budget). Springs provide progressive resistance that builds through the movement arc; cords provide linear resistance. Not better or worse for beginners; meaningfully different for experienced practitioners.",
  },
  {
    heading: "Frame material",
    body: "Aircraft-grade aluminium (all professional machines) vs steel or mixed construction (budget). Aluminium is lighter, resistant to corrosion, and structurally superior for a machine that folds and unfolds daily.",
  },
  {
    heading: "Accessory ecosystem",
    body: "Major brands (Balanced Body, Merrithew) have extensive accessory ranges that fit their reformers without adaptation. Budget machines rarely have compatible accessories — you are capped at whatever comes in the box.",
  },
];

const FAQS = [
  {
    q: "Is a $500 Pilates reformer good enough?",
    a: "For a beginner testing reformer Pilates, yes. For building a sustained practice, the limitations become apparent within a few months. Budget cord machines are starting points, not long-term solutions for serious practitioners.",
  },
  {
    q: "What is the cheapest real spring reformer?",
    a: "The Align-Pilates C2 Pro at approximately $1,499 is the most accessible genuine spring reformer with professional specifications. Below this price point, you are looking at cord-based machines.",
  },
  {
    q: "Should I buy a used Pilates reformer?",
    a: "A used Balanced Body or Merrithew reformer from a reputable seller is a good purchase — these machines last decades and hold their value. Inspect springs (replace if stretched or uneven), carriage (should roll without noise or resistance), and upholstery (repadding is inexpensive). Avoid used budget machines; they rarely have replacement parts available.",
  },
  {
    q: "How much do Pilates reformer springs cost to replace?",
    a: "Approximately $30–$60 per individual spring from Balanced Body or Merrithew. A full 4–5 spring replacement runs $120–$300. Springs should be replaced when they lose their consistent tension — typically every 1–3 years for daily-use machines.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "How Much Does a Pilates Reformer Cost? (2026 Complete Price Guide)",
      "description": "The complete 2026 Pilates reformer price guide — from $299 budget machines to $12,000+ studio apparatus.",
      "url": "https://pilatescollectiveclub.com/blog/how-much-does-a-pilates-reformer-cost",
      "datePublished": "2026-05-16",
      "dateModified": "2026-05-16",
      "image": {
        "@type": "ImageObject",
        "url": "https://pilatescollectiveclub.com/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg",
        "width": 1200,
        "height": 630,
      },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/how-much-does-a-pilates-reformer-cost" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "How Much Does a Pilates Reformer Cost?", "item": "https://pilatescollectiveclub.com/blog/how-much-does-a-pilates-reformer-cost" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": { "@type": "Answer", "text": faq.a },
      })),
    },
  ],
};

export default function HowMuchDoesAPilatesReformerCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>

        {/* ── Hero ── */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
              >
                Buyer&apos;s Guide
              </span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span
                className="text-xs font-semibold uppercase tracking-[0.15em]"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                Equipment
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6"
              style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
            >
              How Much Does a Pilates Reformer Cost?{" "}
              <span style={{ color: "#8b4a31" }}>(2026 Complete Price Guide)</span>
            </h1>

            <p
              className="text-sm mb-8"
              style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}
            >
              Updated May 2026 · 8 min read
            </p>

            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />

            <p
              className="text-lg leading-relaxed"
              style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
            >
              A Pilates reformer costs anywhere from $299 to over $12,000 — a range so wide it is nearly meaningless without context. What actually determines price is not brand prestige but the resistance system (cords vs springs), construction quality (sealed bearings vs nylon rollers, aluminium vs steel), and the accessory ecosystem it supports. This guide breaks down every price tier honestly, with what you actually get and the total cost of ownership at each level.
            </p>
          </div>
        </section>

        {/* ── Hero image ── */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div
              className="w-full rounded-2xl overflow-hidden relative"
              style={{ height: "420px" }}
            >
              <Image
                src="/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg"
                alt="Pilates reformer cost guide — complete price breakdown from budget to studio grade"
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

            {/* ── Price tier breakdown ── */}
            <div className="mb-16 mt-4">
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-2"
                style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
              >
                Price tiers
              </p>
              <h2
                className="text-3xl font-semibold mb-4"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                Every price tier, honestly broken down
              </h2>
              <p
                className="text-base leading-relaxed mb-10"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                The five tiers below represent distinct product categories — different resistance systems, build standards, and long-term trajectories. Moving from one tier to the next is not just spending more money; it is buying a qualitatively different machine.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {PRICE_TIERS.map((tier) => (
                  <div
                    key={tier.label}
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "16px",
                      border: "1px solid rgba(217,194,186,0.35)",
                      overflow: "hidden",
                    }}
                  >
                    {/* Card header */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        padding: "20px 24px",
                        borderBottom: "1px solid rgba(217,194,186,0.25)",
                        backgroundColor: "#fcf9f8",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#8b4a31",
                          borderRadius: "10px",
                          padding: "8px 14px",
                          flexShrink: 0,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "13px",
                            fontWeight: 700,
                            color: "#ffffff",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {tier.range}
                        </span>
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "18px",
                            fontWeight: 600,
                            color: "#1b1c1c",
                            lineHeight: 1.2,
                            marginBottom: "2px",
                          }}
                        >
                          {tier.heading}
                        </p>
                        <span
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "10px",
                            fontWeight: 600,
                            letterSpacing: "0.15em",
                            textTransform: "uppercase" as const,
                            color: "#8b4a31",
                          }}
                        >
                          {tier.tag}
                        </span>
                      </div>
                    </div>

                    {/* Card body */}
                    <div style={{ padding: "20px 24px" }}>
                      <p
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "14px",
                          lineHeight: 1.75,
                          color: "#53433e",
                          marginBottom: "16px",
                        }}
                      >
                        {tier.body}
                      </p>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                          gap: "12px",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: "#f6f3f2",
                            borderRadius: "10px",
                            padding: "12px 14px",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontSize: "9px",
                              fontWeight: 700,
                              letterSpacing: "0.18em",
                              textTransform: "uppercase" as const,
                              color: "#8b4a31",
                              marginBottom: "6px",
                            }}
                          >
                            Who it&apos;s for
                          </p>
                          <p
                            style={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontSize: "13px",
                              lineHeight: 1.6,
                              color: "#53433e",
                            }}
                          >
                            {tier.forWho}
                          </p>
                        </div>

                        <div
                          style={{
                            backgroundColor: "#f6f3f2",
                            borderRadius: "10px",
                            padding: "12px 14px",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontSize: "9px",
                              fontWeight: 700,
                              letterSpacing: "0.18em",
                              textTransform: "uppercase" as const,
                              color: "#8b4a31",
                              marginBottom: "6px",
                            }}
                          >
                            What you sacrifice
                          </p>
                          <p
                            style={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontSize: "13px",
                              lineHeight: 1.6,
                              color: "#53433e",
                            }}
                          >
                            {tier.sacrifice}
                          </p>
                        </div>

                        <div
                          style={{
                            backgroundColor: "#f6f3f2",
                            borderRadius: "10px",
                            padding: "12px 14px",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontSize: "9px",
                              fontWeight: 700,
                              letterSpacing: "0.18em",
                              textTransform: "uppercase" as const,
                              color: "#8b4a31",
                              marginBottom: "6px",
                            }}
                          >
                            Expected lifespan
                          </p>
                          <p
                            style={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontSize: "13px",
                              fontWeight: 600,
                              color: "#1b1c1c",
                            }}
                          >
                            {tier.lifespan}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Total cost of ownership ── */}
            <div className="mb-16">
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-2"
                style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
              >
                Real cost
              </p>
              <h2
                className="text-3xl font-semibold mb-4"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                The real total cost: machine + accessories
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                The sticker price of the reformer is only the beginning. A fully equipped machine includes a box (required for the Long Box and Short Box exercise series), and optionally a jump board, a tower, and a pole. Budget at least an extra $250–$1,500 for accessories, depending on the depth of practice you plan.
              </p>

              {/* Accessories breakdown table */}
              <div
                style={{
                  borderRadius: "16px",
                  border: "1px solid rgba(217,194,186,0.4)",
                  overflow: "hidden",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    padding: "14px 24px",
                    backgroundColor: "#f6f3f2",
                    borderBottom: "1px solid rgba(217,194,186,0.3)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase" as const,
                      color: "#8b4a31",
                    }}
                  >
                    Accessory costs — at a glance
                  </p>
                </div>
                {[
                  { name: "Box (Long/Short Box series)", cost: "~$250", note: "Required for the full repertoire" },
                  { name: "Jump Board", cost: "~$200", note: "Optional — adds cardio work" },
                  { name: "Tower / Vertical Stand", cost: "~$700–$900", note: "Optional — tower exercise system" },
                  { name: "Pole", cost: "~$89", note: "Optional — balance and standing work" },
                ].map((item, i) => (
                  <div
                    key={item.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "14px 24px",
                      borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.2)",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#1b1c1c",
                          marginBottom: "2px",
                        }}
                      >
                        {item.name}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "12px",
                          color: "#86736d",
                        }}
                      >
                        {item.note}
                      </p>
                    </div>
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#8b4a31",
                        whiteSpace: "nowrap" as const,
                      }}
                    >
                      {item.cost}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total setup cost cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "14px",
                }}
              >
                {[
                  { label: "Budget setup", total: "$299–$499", note: "No accessories compatible", detail: "Machine only — cord-based machines lack accessory ecosystems" },
                  { label: "Premium home setup", total: "$2,450–$2,850", note: "Machine + box", detail: "Merrithew SPX Max + Long/Short Box" },
                  { label: "Professional setup", total: "$3,750–$4,100", note: "Machine + box + pole", detail: "Balanced Body Allegro 2 + accessories" },
                  { label: "Full studio setup", total: "$4,500–$5,500", note: "Machine + box + tower + jump board", detail: "Balanced Body or Merrithew with complete accessory suite" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "12px",
                      border: "1px solid rgba(217,194,186,0.35)",
                      padding: "18px 20px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase" as const,
                        color: "#8b4a31",
                        marginBottom: "8px",
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "22px",
                        fontWeight: 600,
                        color: "#1b1c1c",
                        marginBottom: "4px",
                      }}
                    >
                      {item.total}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "#53433e",
                        marginBottom: "6px",
                      }}
                    >
                      {item.note}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "12px",
                        color: "#86736d",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Studio class comparison ── */}
            <div
              className="mb-16 rounded-2xl p-8"
              style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}
            >
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase" as const,
                  color: "#8b4a31",
                  marginBottom: "8px",
                }}
              >
                Economics
              </p>
              <h2
                className="text-3xl font-semibold mb-4"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                Does a home reformer save money vs studio classes?
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                The average studio reformer class costs $30–$50 per session in most major cities — higher in New York, London, and Zurich, where $60–$80 per session is common. At the typical range, a premium home reformer at $3,495 pays for itself in approximately 70–120 avoided studio sessions. At three sessions per week, that is roughly 1.5–2.5 years of practice.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "12px",
                  marginBottom: "24px",
                }}
              >
                {[
                  { label: "Average class cost", value: "$30–$50", sub: "per session (major cities)" },
                  { label: "Premium home reformer", value: "~$3,495", sub: "Balanced Body Allegro 2" },
                  { label: "Break-even point", value: "70–120 sessions", sub: "1.5–2.5 years at 3x/week" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "12px",
                      padding: "16px 18px",
                      border: "1px solid rgba(217,194,186,0.3)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase" as const,
                        color: "#8b4a31",
                        marginBottom: "6px",
                      }}
                    >
                      {stat.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "20px",
                        fontWeight: 600,
                        color: "#1b1c1c",
                        marginBottom: "2px",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "11px",
                        color: "#86736d",
                      }}
                    >
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>

              <div
                style={{
                  borderLeft: "3px solid #8b4a31",
                  paddingLeft: "18px",
                  marginBottom: "16px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#1b1c1c",
                    marginBottom: "4px",
                  }}
                >
                  The honest caveat
                </p>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "13px",
                    lineHeight: 1.7,
                    color: "#53433e",
                  }}
                >
                  Self-teaching on a reformer without an instructor is less effective than studio sessions. Most practitioners benefit from continuing some studio sessions alongside home practice — using the home machine for volume and the studio for technique refinement.
                </p>
              </div>

              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "13px",
                  lineHeight: 1.75,
                  color: "#53433e",
                }}
              >
                For a practitioner who plans to use the machine three or more times per week for five or more years, the economics of a premium home reformer are strongly positive. For anyone less certain of that commitment, studio classes — or a budget entry machine — are more proportionate.
              </p>
            </div>

            {/* ── Technical factors ── */}
            <div className="mb-16">
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-2"
                style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
              >
                What drives price
              </p>
              <h2
                className="text-3xl font-semibold mb-4"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                What makes reformers more expensive: the technical factors
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                Price differences between tiers are not marketing. They reflect four specific engineering choices that have direct consequences for your practice.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "14px",
                }}
              >
                {TECH_FACTORS.map((factor) => (
                  <div
                    key={factor.heading}
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "14px",
                      padding: "22px",
                      border: "1px solid rgba(217,194,186,0.3)",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "3px",
                        backgroundColor: "#8b4a31",
                        borderRadius: "2px",
                        marginBottom: "14px",
                      }}
                    />
                    <p
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#1b1c1c",
                        marginBottom: "10px",
                      }}
                    >
                      {factor.heading}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "13px",
                        lineHeight: 1.75,
                        color: "#53433e",
                      }}
                    >
                      {factor.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── FAQ ── */}
            <div className="mb-16">
              <h2
                className="text-3xl font-semibold mb-8"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                Frequently asked questions
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {FAQS.map((item) => (
                  <div
                    key={item.q}
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "14px",
                      padding: "22px 24px",
                      border: "1px solid rgba(217,194,186,0.3)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "17px",
                        fontWeight: 600,
                        color: "#1b1c1c",
                        marginBottom: "10px",
                        lineHeight: 1.35,
                      }}
                    >
                      {item.q}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "13px",
                        lineHeight: 1.75,
                        color: "#53433e",
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Further reading ── */}
            <div>
              <h2
                className="text-2xl font-semibold mb-8"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                Further reading
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  title="Best Pilates Reformer for Beginners (2026)"
                  excerpt="Which reformer to start on — and when NOT to buy before you're ready."
                  href="/blog/best-pilates-reformer-for-beginners"
                  category="Beginners"
                  readTime="9 min read"
                  date="May 2026"
                  imageUrl="/pictures/ahmet-kurt-0xn-8kRWOhE-unsplash.jpg"
                />
              </div>
            </div>

          </div>
        </section>

        <CTASection
          title="Find a Pilates studio to try the reformer first"
          subtitle="Use our curated city guides before making an investment."
        />
      </main>
      <Footer />
    </>
  );
}
