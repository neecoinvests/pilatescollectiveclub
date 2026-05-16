import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Merrithew for Pilates (2026): STOTT Equipment, Certification & Review | Pilates Collective Club",
  description: "The complete guide to Merrithew and STOTT Pilates — At Home SPX, V2 Max reformers, accessories, instructor certification, and who their equipment suits.",
  keywords: ["merrithew pilates", "stott pilates review", "merrithew reformer review", "merrithew v2 max", "stott pilates equipment", "merrithew at home spx", "merrithew spx max", "stott pilates certification", "merrithew vs balanced body", "merrithew pilates 2026"],
  openGraph: {
    title: "Merrithew for Pilates (2026): STOTT Equipment & Honest Review",
    description: "Everything Merrithew makes — At Home SPX, V2 Max, STOTT certification, and who their equipment suits.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/merrithew-pilates",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg", width: 1200, height: 630, alt: "Merrithew Pilates equipment — Pilates Collective Club" }],
  },
  twitter: { card: "summary_large_image", title: "Merrithew for Pilates (2026)", description: "Everything Merrithew makes for Pilates — STOTT reformers, certification, and honest review.", images: ["https://pilatescollectiveclub.com/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg"] },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/merrithew-pilates" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Merrithew At Home SPX Reformer",
    price: "From $1,399",
    verdict: "Best home reformer under $1,500",
    description:
      "The At Home SPX is the most accessible full-spring reformer from a serious professional brand. Unlike cord-based home alternatives, the SPX uses a genuine spring system — five springs of varying tension — giving you the authentic reformer feel that mat-plus-resistance machines cannot replicate. The frame is lighter than the studio SPX Max but maintains the precision that STOTT Pilates instruction demands. The footbar adjusts to three positions, the shoulder rests fold flat, and the machine can be stored vertically. For practitioners who want a genuine professional-grade spring system without the studio reformer footprint or price, the At Home SPX is the clearest recommendation in its segment.",
    affiliateUrl: "https://www.amazon.com/s?k=merrithew+at+home+spx+reformer&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Merrithew SPX Max Reformer",
    price: "From $2,199",
    verdict: "Best professional studio reformer",
    description:
      "The SPX Max is the machine you find in professional training facilities and STOTT Pilates certification programmes worldwide. The heavier frame, longer rails, and more substantial carriage provide the stability and precision that advanced work requires. The five-spring system covers a wider resistance range than the At Home SPX, and the accessories ecosystem (jump board, vertical stand, tower) makes this a complete apparatus platform. Built to last decades of daily multi-client use. For home practitioners who want studio-quality equipment and have the space for a fixed machine, the SPX Max is as serious as home Pilates equipment gets.",
    affiliateUrl: "https://www.amazon.com/s?k=merrithew+spx+max+reformer&tag=pilatescollective-20",
    tag: "Studio Grade",
  },
  {
    rank: "03",
    name: "STOTT Pilates Flex Band Resistance Band",
    price: "From $15",
    verdict: "Best resistance band for Pilates",
    description:
      "The STOTT Pilates Flex Band is the resistance band used in certified STOTT instructor training programmes and sold in a resistance range appropriate for Pilates work — Light, Medium, and Heavy in standard Pilates colours. Unlike generic exercise bands, these are calibrated to the specific resistance required for Pilates exercises including the Rowing series, arm circles, and standing work. The latex construction provides smooth, consistent resistance throughout the range of motion. For home practitioners, these bands bridge the gap between mat work and equipment work, adding resistance to exercises that typically require a reformer.",
    affiliateUrl: "https://www.amazon.com/s?k=stott+pilates+flex+band&tag=pilatescollective-20",
    tag: "Best Band",
  },
  {
    rank: "04",
    name: "Merrithew Stability Ball (65cm)",
    price: "From $28",
    verdict: "Best stability ball for Pilates",
    description:
      "Merrithew's Stability Ball is used in STOTT Pilates programming as a proprioception and core challenge tool — specifically for exercises in the Stability Ball repertoire taught in Level 1 and 2 certifications. The 65cm size is appropriate for practitioners of average height; the burst-resistant construction and anti-roll base make it safe for spinal exercises over the ball. The material quality is noticeably superior to generic exercise balls — it holds its shape and pressure consistently, which matters for exercises where the ball is used as a spine support. An honest, functional piece of equipment rather than a trend accessory.",
    affiliateUrl: "https://www.amazon.com/s?k=merrithew+stability+ball+65cm&tag=pilatescollective-20",
    tag: "Best Ball",
  },
  {
    rank: "05",
    name: "STOTT Pilates Mini Stability Ball",
    price: "From $18",
    verdict: "Best prop for advanced mat work",
    description:
      "The Mini Stability Ball (approximately 23cm when inflated) is used in STOTT Pilates programming to modify and challenge mat exercises — placed beneath the lumbar spine during supine exercises to increase proprioceptive demand, or between the knees during footwork to activate the inner thighs. Small, inexpensive, and genuinely useful for practitioners looking to add challenge to a home mat practice without equipment. The inflation level affects the difficulty level — slightly deflated for beginners, fully inflated for a more demanding surface. One of the most cost-effective Pilates accessories available.",
    affiliateUrl: "https://www.amazon.com/s?k=stott+pilates+mini+stability+ball&tag=pilatescollective-20",
    tag: "Home Practice",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Merrithew for Pilates (2026): STOTT Equipment, Certification & Review",
      "description": "The complete guide to Merrithew and STOTT Pilates — At Home SPX, V2 Max reformers, accessories, instructor certification, and who their equipment suits.",
      "url": "https://pilatescollectiveclub.com/blog/merrithew-pilates",
      "datePublished": "2026-05-16",
      "dateModified": "2026-05-16",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/merrithew-pilates" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Merrithew for Pilates", "item": "https://pilatescollectiveclub.com/blog/merrithew-pilates" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the difference between STOTT Pilates and Merrithew?", "acceptedAnswer": { "@type": "Answer", "text": "STOTT PILATES is the instructor certification programme; Merrithew is the parent company and equipment brand. They are the same company — Merrithew Corporation — operating under both names. STOTT PILATES refers specifically to their internationally recognised training and certification system, while the Merrithew name appears on their equipment range." } },
        { "@type": "Question", "name": "Is the Merrithew At Home SPX worth it over a Balanced Body Allegro 2?", "acceptedAnswer": { "@type": "Answer", "text": "Different strengths. The At Home SPX is significantly cheaper than the Allegro 2 at similar build quality for home use. The Allegro 2 has a broader accessory ecosystem and upgrade path. Both are excellent; the At Home SPX wins on price, the Allegro 2 on expandability." } },
        { "@type": "Question", "name": "Where can I buy Merrithew equipment?", "acceptedAnswer": { "@type": "Answer", "text": "Directly from merrithew.com; authorised dealers; some Amazon listings exist but verify the seller is authorised. Accessories such as resistance bands, stability balls, and the mini stability ball are reliably purchased through Amazon." } },
        { "@type": "Question", "name": "Do Merrithew reformers work with Balanced Body accessories?", "acceptedAnswer": { "@type": "Answer", "text": "No. The spring systems and accessory mounting points differ between brands. Accessories — including jump boards, towers, and upholstery — are not interchangeable between Merrithew and Balanced Body equipment. Always buy accessories from your reformer's manufacturer." } },
      ],
    },
  ],
};

export default function MerrithewPilatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero section */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Merrithew</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Merrithew for Pilates (2026):<br /><span style={{ color: "#8b4a31" }}>STOTT Equipment, Certification &amp; Guide</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 12 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Merrithew is one of the two dominant names in professional Pilates equipment — the other being Balanced Body. Founded in Toronto in 1988, the company operates under both the Merrithew and STOTT PILATES® brands: Merrithew on the equipment, STOTT PILATES on the internationally recognised instructor certification programme. Their reformers are found in hotel spas, physical therapy clinics, and certified training facilities on every continent. This guide covers the full product range, the STOTT methodology, and an honest assessment of who their equipment suits — from home practitioners to studio owners.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg"
                alt="Merrithew Pilates reformer equipment — STOTT Pilates studio setup reviewed"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.85)" }}
              />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Brand overview */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The studio-trusted brand behind STOTT Pilates</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Merrithew was founded in 1988 by Moira and Lindsay Merrithew in Toronto, Canada. Moira brought a background as a professional dancer — she had studied under Alan Herdman, one of the first instructors to bring classical Pilates to the United Kingdom — and it was this grounding in movement science and performance training that shaped the STOTT methodology. Working with a team of physiotherapists, sports medicine specialists, and fitness experts, Moira developed what became STOTT PILATES: a contemporary approach to Pilates built on anatomically correct, evidence-based principles, with particular attention to spine-neutral positioning. Where classical Pilates emphasises a flat back and imprinted lumbar spine, STOTT methodology works to restore and maintain the natural curves of the spine — a distinction that matters in both clinical and fitness contexts.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The STOTT PILATES certification programme became one of the most internationally respected instructor credentials in the industry. Programmes now run in more than 100 countries, and the curriculum goes significantly beyond movement instruction: STOTT-certified instructors study anatomy, kinesiology, and exercise science alongside the method itself. The breadth of that education is part of why STOTT-certified instructors are preferred by physical therapy clinics and rehabilitation centres — the credential carries genuine clinical credibility that many Pilates certifications do not. For practitioners choosing a studio or instructor, seeing the STOTT PILATES designation is a reliable signal of rigorous training.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                On the equipment side, Merrithew&apos;s philosophy is precision over volume. Their product line is narrower than Balanced Body&apos;s, with each reformer tier clearly differentiated by intended use. The V2 Max Plus Reformer sits at the top — their pinnacle product, used in certified training facilities globally, featuring the widest carriage platform and the greatest range of adjustability for multi-body advanced programming. Below it, the SPX Max serves professional studio environments, and the At Home SPX brings genuine spring-based reformer technology into the home market at an accessible price point. The distinctive blue colour scheme and quieter carriage operation are consistent across the range and have become recognisable markers of Merrithew equipment in the studio environments where it most commonly appears.
              </p>
            </div>

            {/* Products section */}
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Merrithew Products · Studio-Tested</p>
              <div className="space-y-10">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
                    </div>
                    <ProductCard name={p.name} description={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />
                  </div>
                ))}
              </div>
            </div>

            {/* Product line breakdown */}
            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#8b4a31" }}>
              <h2 className="text-2xl font-semibold mb-2" style={{ color: "#fcf9f8", fontFamily: "'Playfair Display', serif" }}>Understanding the Merrithew product line</h2>
              <p className="text-sm mb-6" style={{ color: "rgba(252,249,248,0.75)", fontFamily: "'Montserrat', sans-serif" }}>Three reformer tiers, clearly differentiated by use case and budget</p>
              <div className="space-y-0 divide-y" style={{ borderColor: "rgba(252,249,248,0.15)" }}>
                {[
                  {
                    model: "At Home SPX Reformer",
                    use: "Consumer / Home Use",
                    price: "~$1,400",
                    notes: "Genuine five-spring system. Lighter frame than studio models. Footbar adjusts to three positions. Shoulder rests fold flat. Storable vertically. The accessible entry point into professional Pilates equipment.",
                  },
                  {
                    model: "SPX Max Reformer",
                    use: "Professional Studio",
                    price: "~$2,200",
                    notes: "Heavier frame. Longer rails. Wider resistance range. Full accessory ecosystem: jump board, vertical stand, tower available. Built for daily multi-client use over many years.",
                  },
                  {
                    model: "V2 Max Plus Reformer",
                    use: "Premium Training Facility",
                    price: "~$3,500",
                    notes: "Widest carriage platform. Maximum adjustability. Used in STOTT PILATES certified training facilities globally. The pinnacle Merrithew product for advanced programming and multi-body instruction.",
                  },
                ].map((row) => (
                  <div key={row.model} className="py-5">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <p className="text-base font-semibold" style={{ color: "#fcf9f8", fontFamily: "'Playfair Display', serif" }}>{row.model}</p>
                      <span className="text-sm font-semibold whitespace-nowrap" style={{ color: "rgba(252,249,248,0.6)", fontFamily: "'Montserrat', sans-serif" }}>{row.price}</span>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "rgba(252,249,248,0.5)", fontFamily: "'Montserrat', sans-serif" }}>{row.use}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(252,249,248,0.8)", fontFamily: "'Montserrat', sans-serif" }}>{row.notes}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(252,249,248,0.15)" }}>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(252,249,248,0.6)", fontFamily: "'Montserrat', sans-serif" }}>
                  Note: all Merrithew reformers require professional assembly. Springs should be inspected annually and replaced according to the manufacturer&apos;s schedule — spring integrity is critical to safe operation and consistent resistance calibration.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What is the difference between STOTT Pilates and Merrithew?",
                    a: "STOTT PILATES is their instructor certification programme; Merrithew is the parent company and equipment brand. They are the same company — Merrithew Corporation — operating under both names. STOTT PILATES refers specifically to their internationally recognised training and certification system, while the Merrithew name appears on their equipment range. When a studio says they are \"STOTT-certified,\" they mean their instructors hold the Merrithew Corporation certification.",
                  },
                  {
                    q: "Is the Merrithew At Home SPX worth it over a Balanced Body Allegro 2?",
                    a: "Different strengths. The At Home SPX is significantly cheaper than the Allegro 2 at similar build quality for home use. The Allegro 2 has a broader accessory ecosystem and a clearer upgrade path within the Balanced Body range. Both machines use genuine spring systems and are a significant step above cord-based home reformers. The At Home SPX wins on price; the Allegro 2 wins on expandability. If you plan to buy accessories over time and potentially upgrade your machine, Balanced Body's ecosystem is deeper. If you want the best value for a standalone home reformer from a professional brand, the At Home SPX is the stronger purchase.",
                  },
                  {
                    q: "Where can I buy Merrithew equipment?",
                    a: "Directly from merrithew.com, which is the most reliable source for new equipment and accessories. Authorised dealers stock reformers and some accessories. Amazon carries some Merrithew-branded accessories — resistance bands, stability balls, mini stability balls — and these are reliably purchased there. For major equipment (reformers, stability chairs, Cadillac), always purchase through merrithew.com or a verified authorised dealer to ensure warranty coverage.",
                  },
                  {
                    q: "Do Merrithew reformers work with Balanced Body accessories?",
                    a: "No. The spring systems and accessory mounting points differ between brands. Jump boards, towers, vertical stands, and upholstery components are all manufacturer-specific. Attempting to fit Balanced Body accessories to a Merrithew reformer — or vice versa — will not work and could compromise the machine's structural integrity. Always source accessories from your reformer's manufacturer.",
                  },
                ].map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Further reading */}
            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard
                  title="Balanced Body vs Merrithew (2026)"
                  excerpt="Head-to-head of the two dominant professional reformer brands — spring feel, build quality, and honest verdict."
                  href="/blog/balanced-body-vs-merrithew"
                  category="Comparison"
                  readTime="10 min read"
                  date="May 2026"
                  imageUrl="/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg"
                />
                <ArticleCard
                  title="Best Home Pilates Reformer (2026)"
                  excerpt="Every price point honestly reviewed — from AeroPilates to Merrithew and Balanced Body."
                  href="/blog/best-home-pilates-reformer"
                  category="Equipment Guide"
                  readTime="10 min read"
                  date="May 2026"
                  imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg"
                />
              </div>
            </div>

          </div>
        </section>

        <CTASection
          title="Find a STOTT-certified studio near you"
          subtitle="Our city guides help you find studios using Merrithew equipment and STOTT-certified instructors."
        />
      </main>
      <Footer />
    </>
  );
}
