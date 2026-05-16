import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Girlfriend Collective for Pilates (2026): Sustainable Activewear Reviewed | Pilates Collective Club",
  description: "Girlfriend Collective Compressive Legging, Float Bra, and Bike Short reviewed for Pilates. The sustainable brand made from recycled materials — does performance match the ethics?",
  keywords: ["girlfriend collective pilates", "girlfriend collective for pilates", "girlfriend collective leggings pilates", "sustainable pilates activewear", "eco pilates leggings", "girlfriend collective review", "girlfriend collective compressive legging", "ethical pilates activewear", "girlfriend collective vs lululemon", "sustainable activewear pilates 2026"],
  openGraph: {
    title: "Girlfriend Collective for Pilates (2026): Sustainable Activewear Reviewed",
    description: "The complete guide to Girlfriend Collective activewear for Pilates — honest review for practitioners who care about both performance and ethics.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/girlfriend-collective-pilates",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/juls-p-lB6lbkbe1XA-unsplash.jpg", width: 1200, height: 630, alt: "Girlfriend Collective sustainable activewear for Pilates — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Girlfriend Collective for Pilates (2026): Sustainable Activewear Reviewed",
    description: "Honest review of Girlfriend Collective for Pilates — performance and ethics both examined.",
    images: ["https://pilatescollectiveclub.com/pictures/juls-p-lB6lbkbe1XA-unsplash.jpg"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/girlfriend-collective-pilates",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Girlfriend Collective Compressive High-Rise Legging",
    price: "From $68",
    verdict: "Best Overall Legging",
    description:
      "The Compressive High-Rise is Girlfriend Collective&apos;s most technically accomplished piece — made from RPET fabric (recycled post-consumer plastic bottles), it provides medium-to-firm compression that holds position through the full Pilates mat repertoire without restricting the deep hip and spinal flexion the method requires. The fabric is fully opaque from every angle, which matters on a mat or reformer carriage where the instructor views your legs from below. The high waistband is wide, structured, and does not roll during abdominal series. At this price, it competes directly with Lululemon&apos;s Wunder Train — and outperforms it on ethics.",
    affiliateUrl: "https://www.amazon.com/s?k=girlfriend+collective+compressive+high+rise+legging&tag=matchaspot-20",
    tag: "Top Pick",
  },
  {
    rank: "02",
    name: "Girlfriend Collective Float Sports Bra",
    price: "From $42",
    verdict: "Best Bra for Pilates",
    description:
      "The Float is Girlfriend Collective&apos;s low-impact bra — the correct support level for a Pilates practice, which requires unrestricted ribcage expansion for breathing and does not need the heavy-duty support of a running bra. The recycled fabric is soft against skin during the prolonged floor sequences that characterise mat and reformer work, and the bra lies flat when prone, which is more than can be said for bras with structured cups or thick padding. The back closure is clean and sits below the shoulder blade, which prevents the discomfort of lying on hardware during supine exercises.",
    affiliateUrl: "https://www.amazon.com/s?k=girlfriend+collective+float+sports+bra&tag=matchaspot-20",
    tag: "Best Bra",
  },
  {
    rank: "03",
    name: "Girlfriend Collective Paloma Bra",
    price: "From $48",
    verdict: "Best Bra Top",
    description:
      "The Paloma is a bralette-style top that provides more coverage than the Float — appropriate for studio classes where a sports bra alone is insufficient for the practitioner&apos;s comfort level. The wide band sits firmly at the ribcage without digging during deep breathing exercises, and the straight neckline provides consistent coverage through every reformer exercise including those that require the torso to be horizontal or inverted. The recycled fabric quality is excellent — the Paloma is the piece that Girlfriend Collective customers most frequently cite as matching the feel of comparable Lululemon pieces at a lower price point.",
    affiliateUrl: "https://www.amazon.com/s?k=girlfriend+collective+paloma+bra+top&tag=matchaspot-20",
    tag: "Best Bra Top",
  },
  {
    rank: "04",
    name: "Girlfriend Collective Bike Short",
    price: "From $38",
    verdict: "Best Short for Pilates",
    description:
      "The Girlfriend Collective Bike Short has a 5-inch inseam — long enough to provide full coverage during all reformer exercises including those where the legs are elevated, and short enough not to bunch behind the knee during seated or bent-leg positions. The fabric is the same recycled RPET construction as the Compressive Legging, which means the opacity and compression hold up wash after wash. No ride-up on the reformer carriage, which is the specific functional test a studio short needs to pass. At under $40, this is excellent value for a performance short.",
    affiliateUrl: "https://www.amazon.com/s?k=girlfriend+collective+bike+short&tag=matchaspot-20",
    tag: "Best Short",
  },
  {
    rank: "05",
    name: "Girlfriend Collective Topanga Set",
    price: "From $108",
    verdict: "Best Value Set",
    description:
      "Buying the Topanga Bra and Legging as a set saves approximately $20 versus purchasing separately, which makes it one of the most straightforward value propositions in sustainable activewear. The set coordinates across Girlfriend Collective&apos;s full colour range — from clean neutral tones to the brand&apos;s more distinctive pigmented options. The matched set also ensures consistent fabric behaviour, which matters when you want the bra and legging to stay in position relative to each other during movement. For a new customer to the brand, the set is the correct entry point.",
    affiliateUrl: "https://www.amazon.com/s?k=girlfriend+collective+topanga+set+activewear&tag=matchaspot-20",
    tag: "Best Value",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Girlfriend Collective for Pilates (2026): Sustainable Activewear Reviewed",
      "description": "The complete guide to Girlfriend Collective activewear for Pilates — honest review for practitioners who care about both performance and ethics.",
      "url": "https://pilatescollectiveclub.com/blog/girlfriend-collective-pilates",
      "datePublished": "2026-05-14",
      "dateModified": "2026-05-14",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/juls-p-lB6lbkbe1XA-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/girlfriend-collective-pilates" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Girlfriend Collective for Pilates", "item": "https://pilatescollectiveclub.com/blog/girlfriend-collective-pilates" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is Girlfriend Collective good quality for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — and this is worth stating clearly because sustainable activewear brands sometimes sacrifice performance for ethics. Girlfriend Collective does not. The Compressive Legging holds compression and opacity through hundreds of washes. The fabric construction is competitive with Lululemon's Wunder Train legging, which sits in the same performance category. The quality independently justifies the purchase; the sustainability story is an additional reason." } },
        { "@type": "Question", "name": "Is Girlfriend Collective truly sustainable?", "acceptedAnswer": { "@type": "Answer", "text": "More so than most. The brand is B Corp certified, uses RPET fabric made from post-consumer plastic bottles and fishing nets, and has transparent supply chain documentation. The recycled content percentage is high (roughly 79 plastic bottles per legging by the brand's own figures). The manufacturing is not zero-impact — no large-scale textile production is — but the comparative footprint is meaningfully lower than virgin-material activewear at comparable quality levels." } },
        { "@type": "Question", "name": "How does Girlfriend Collective sizing work?", "acceptedAnswer": { "@type": "Answer", "text": "Girlfriend Collective runs XXS to 6X — a size range that genuinely covers more body types than any other premium activewear brand. The sizing runs true for the leggings. The bras run slightly small in the band — if you're between band sizes, go up. The brand's size guide is detailed and accurate; use your measurements rather than guessing from your usual size in other brands." } },
        { "@type": "Question", "name": "Girlfriend Collective vs Lululemon for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Performance is genuinely comparable for the core pieces. Lululemon's Align legging is softer; Girlfriend Collective's Compressive legging provides more compression. On price, Girlfriend Collective is $15-30 cheaper per piece. On ethics, there is no comparison — Girlfriend Collective's supply chain is significantly more transparent and the materials story is credibly better. If performance is equal, the reasons to choose Girlfriend Collective are price and ethics." } },
      ],
    },
  ],
};

export default function GirlfriendCollectivePilatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Brand Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Girlfriend Collective</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Girlfriend Collective<br /><span style={{ color: "#8b4a31" }}>for Pilates (2026): Honest Review</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 9 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Girlfriend Collective is the Seattle-based brand making activewear from recycled plastic bottles and fishing nets — and unlike most brands with a strong ethics story, the performance genuinely stands on its own. B Corp certified, XXS to 6X sizing, and a Compressive Legging that competes directly with Lululemon&apos;s Wunder Train at a lower price. This guide separates the ethics story from the performance review, then brings them back together.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/juls-p-lB6lbkbe1XA-unsplash.jpg" alt="Girlfriend Collective sustainable activewear for Pilates — made from recycled materials, B Corp certified" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Performance first, ethics second — both matter</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The risk with sustainable activewear brands is that the ethics story gets used to paper over performance gaps. Girlfriend Collective does not do this. The Compressive High-Rise Legging holds up to the practical tests that matter for Pilates: full opacity, compression that does not loosen over a 55-minute class, waistband that does not roll during abdominal series, and fabric durability through regular washing. These properties can be tested independently of the brand&apos;s sustainability credentials — and they hold up.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The sustainability story, once the performance baseline is established, is genuinely good. B Corp certification involves third-party auditing of social and environmental performance — it is not a self-issued label. The RPET fabric is made from post-consumer plastic waste, and the brand publishes its factory list and audit results. For the practitioner who wants their purchasing decisions to reflect their values without compromising on what they wear in the studio, Girlfriend Collective is the clearest choice in the category.
              </p>
            </div>

            <div className="mb-12 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What makes Girlfriend Collective different</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Size range", value: "XXS–6X", note: "Largest in premium activewear" },
                  { label: "Material", value: "RPET", note: "~79 recycled bottles per legging" },
                  { label: "Certification", value: "B Corp", note: "Third-party verified" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl p-4 text-center" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{item.label}</p>
                    <p className="text-xl font-semibold mb-1" style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif" }}>{item.value}</p>
                    <p className="text-xs" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Girlfriend Collective Pieces · Pilates-Reviewed</p>
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

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>How Girlfriend Collective compares to Lululemon</h2>
              <div className="space-y-3">
                {[
                  { metric: "Compression", gc: "Medium-firm — excellent for reformer and mat", lulu: "Wunder Train is comparable; Align is softer" },
                  { metric: "Opacity", gc: "Fully opaque across the range — no exceptions", lulu: "Fully opaque on Wunder Train; Align requires lining" },
                  { metric: "Price", gc: "$68–78 leggings — meaningfully lower", lulu: "$88–128 leggings — premium tier" },
                  { metric: "Size range", gc: "XXS–6X — the most inclusive in premium activewear", lulu: "0–20 — improving but not equivalent" },
                  { metric: "Ethics", gc: "B Corp, recycled materials, published supply chain", lulu: "Improving; not yet comparable on transparency" },
                ].map((row) => (
                  <div key={row.metric} className="rounded-xl p-4" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{row.metric}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <p className="text-xs" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}><span style={{ color: "#8b4a31" }}>GC:</span> {row.gc}</p>
                      <p className="text-xs" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}><span style={{ color: "#1b1c1c" }}>Lululemon:</span> {row.lulu}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Is Girlfriend Collective good quality for Pilates?", a: "Yes — and this is worth stating clearly because sustainable activewear brands sometimes sacrifice performance for ethics. Girlfriend Collective does not. The Compressive Legging holds compression and opacity through hundreds of washes. The fabric construction is competitive with Lululemon's Wunder Train legging. The quality independently justifies the purchase; the sustainability story is an additional reason." },
                  { q: "Is Girlfriend Collective truly sustainable?", a: "More so than most. The brand is B Corp certified, uses RPET fabric made from post-consumer plastic bottles and fishing nets, and has transparent supply chain documentation. The recycled content percentage is high (roughly 79 plastic bottles per legging). The manufacturing is not zero-impact — no large-scale textile production is — but the comparative footprint is meaningfully lower than virgin-material activewear at comparable quality levels." },
                  { q: "How does Girlfriend Collective sizing work?", a: "Girlfriend Collective runs XXS to 6X — a size range that genuinely covers more body types than any other premium activewear brand. The sizing runs true for the leggings. The bras run slightly small in the band — if you're between band sizes, go up. The brand's size guide is detailed and accurate; use your measurements rather than guessing from your usual size in other brands." },
                  { q: "Girlfriend Collective vs Lululemon for Pilates?", a: "Performance is genuinely comparable for the core pieces. Lululemon's Align legging is softer; Girlfriend Collective's Compressive legging provides more compression. On price, Girlfriend Collective is $15-30 cheaper per piece. On ethics, there is no comparison — Girlfriend Collective's supply chain is significantly more transparent and the materials story is credibly better. If performance is equal, the reasons to choose Girlfriend Collective are price and ethics." },
                ].map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Pilates Leggings (2026)" excerpt="Five leggings across every price point — tested for opacity, waistband stability, and reformer performance." href="/blog/best-pilates-leggings" category="Equipment" readTime="9 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg" />
                <ArticleCard title="What to Wear to Pilates" excerpt="The definitive guide to dressing for reformer and mat Pilates — what works, what to avoid, and why it matters." href="/blog/what-to-wear-to-pilates" category="Style Guide" readTime="7 min read" date="May 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
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
