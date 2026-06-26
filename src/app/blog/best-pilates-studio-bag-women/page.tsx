import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studio Bags for Women (2026): Duffels & Carry-Alls Ranked | Pilates Collective Club",
  description: "The best studio bags for women who do Pilates — duffels and carry-alls reviewed for capacity, wet compartments, and studio-to-street style in 2026.",
  keywords: ["best pilates studio bag women", "pilates gym bag women 2026", "best bag for pilates class", "pilates studio duffel women", "womens pilates bag 2026", "best gym bag for pilates", "pilates bag review women", "lululemon pilates bag"],
  openGraph: {
    title: "Best Pilates Studio Bags for Women (2026)",
    description: "The best studio bags for Pilates — tested for capacity, organisation, and wet-dry separation.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-studio-bag-women",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Studio Bags for Women — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studio Bags for Women (2026)",
    description: "The best studio bags for Pilates — tested and ranked.",
    images: ["https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-studio-bag-women" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Lululemon Wunderlust Duffle",
    price: "From $118",
    verdict: "Best overall studio bag",
    description:
      "The Lululemon Wunderlust Duffle is purpose-built for the practitioner who commutes to class. The structured silhouette holds its shape fully loaded, and the 27-litre capacity handles a complete kit change — clothes, towel, grip socks, shoes, and toiletries — without stretching at the seams. The wet-dry separation pocket keeps damp post-class kit away from clean items, and the interior organisation is thorough enough to make packing and unpacking swift. The padded shoulder strap manages the bag's weight over longer commutes. Lululemon's material quality translates directly into longevity.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+wunderlust+duffle+bag&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Sweaty Betty Get It Together Bag",
    price: "From $65",
    verdict: "Best organised studio bag",
    description:
      "Sweaty Betty's Get It Together Bag earns its name through exceptional internal organisation. A dedicated waterproof lining handles damp towels and post-shower items without odour or leakage, and the layout of pockets — including a separate exterior zip for phone and keys — makes class-to-street transitions fast. The capacity suits practitioners who travel light rather than those carrying a full overnight kit, but the organisation quality means it functions more efficiently than larger bags with less thought given to layout. The fabric is water-resistant and structured enough to stand upright on a studio bench.",
    affiliateUrl: "https://www.amazon.com/s?k=sweaty+betty+studio+gym+bag+women&tag=pilatescollective-20",
    tag: "Best Organised",
  },
  {
    rank: "03",
    name: "Alo Yoga Hatha Gym Bag",
    price: "From $78",
    verdict: "Best aesthetic studio bag",
    description:
      "Alo's Hatha Gym Bag brings the brand's signature aesthetic sensibility to a fully functional studio bag. The clean lines and neutral colourway look appropriate in upscale studios and transition naturally to post-class errands without announcing themselves as gym kit. The capacity is generous, the interior organisation is practical without being elaborate, and the coated canvas fabric wipes clean easily and maintains its appearance through regular use. For practitioners who attend premium reformer studios where the changing room doubles as a social space, the Hatha Bag's presentation is a genuine consideration alongside its functionality.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+hatha+gym+bag&tag=pilatescollective-20",
    tag: "Best Aesthetic",
  },
  {
    rank: "04",
    name: "Manduka Go Play 3.0 Duffel",
    price: "From $78",
    verdict: "Best duffel for studio",
    description:
      "Manduka's Go Play 3.0 Duffel is the most thoughtfully engineered bag on this list for pure studio functionality. The shoe compartment at the base keeps studio shoes separated from clothing and personal items — a feature that matters more than it sounds after a sweaty reformer session. The main compartment is spacious and structured, with a padded shoulder strap that makes the bag comfortable over a 20-minute walk or transit commute. Manduka's reputation for durability means this bag outlasts most alternatives, a relevant consideration given the wear that five weekly sessions generates over years of practice.",
    affiliateUrl: "https://www.amazon.com/s?k=manduka+go+play+duffel+bag&tag=pilatescollective-20",
    tag: "Best Duffel",
  },
  {
    rank: "05",
    name: "Nike Brasilia 9.5 Training Duffel",
    price: "From $35",
    verdict: "Best budget studio bag",
    description:
      "Nike's Brasilia 9.5 is the standard against which budget studio bags are measured, and it earns that position through consistent delivery of the fundamentals. The capacity is generous for the price, the shoe bag pocket keeps footwear separated, and the main compartment handles a full studio kit without issue. The organisation is straightforward rather than elaborate, and the fabric handles repeated use without showing it disproportionately. For practitioners who want a reliable functional bag while keeping costs low — or want a second bag to leave packed and ready at home — the Brasilia 9.5 is the honest recommendation.",
    affiliateUrl: "https://www.amazon.com/s?k=nike+brasilia+9.5+gym+bag+women&tag=pilatescollective-20",
    tag: "Best Budget",
  },
  {
    rank: "06",
    name: "Calpak Luka Convertible Duffel",
    price: "From $68",
    verdict: "Best convertible carry",
    description:
      "The Calpak Luka Duffel converts between a hand-carry duffel, a backpack, and a shoulder bag — practical versatility for practitioners whose commute involves a mix of walking, transit, and carrying the bag into subsequent appointments. The 20-litre capacity covers a complete studio kit without the bulk of a full-size duffel. The organisation is efficient rather than exhaustive, with a shoe pocket and exterior slip pockets for essentials. The backpack conversion distributes weight well on longer walks to the studio or across town afterwards, making this the most versatile option on the list for urban practitioners.",
    affiliateUrl: "https://www.amazon.com/s?k=calpak+luka+duffel+bag&tag=pilatescollective-20",
    tag: "Best Convertible",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studio Bags for Women (2026)",
      "description": "The best studio bags for Pilates women — duffels and carry-alls tested for capacity, wet compartments, and studio-to-street use.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-studio-bag-women",
      "datePublished": "2026-06-01",
      "dateModified": "2026-06-26",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-studio-bag-women" },
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studio Bags for Women (2026)",
      "numberOfItems": 6,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Studio Bags for Women", "item": "https://pilatescollectiveclub.com/blog/best-pilates-studio-bag-women" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How big should a Pilates studio bag be?", "acceptedAnswer": { "@type": "Answer", "text": "For a standard reformer or mat class, 20-30 litres covers a full kit change, grip socks, a towel, and personal items comfortably. If you shower at the studio or commute from work, the higher end of that range gives you space for toiletries and a change of clothes without the bag becoming unwieldy." } },
        { "@type": "Question", "name": "Should a Pilates bag have a wet pocket?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, if you shower at the studio or regularly carry a damp towel home. A waterproof-lined wet compartment keeps damp items separate from clean clothes and prevents the musty odour that develops when wet fabric sits against dry clothing in a sealed bag." } },
        { "@type": "Question", "name": "Is a duffel or tote better for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Duffels offer more capacity and tend to be better organised with shoe compartments and wet pockets. Totes are lighter and easier to manage for shorter commutes or lighter kits. Most practitioners who attend class multiple times a week prefer a duffel for its organisation and capacity." } },
      ],
    },
  ],
};

export default function BestPilatesStudioBagWomenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Accessories</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Studio Bags<br /><span style={{ color: "#8b4a31" }}>for Women (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 7 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              A proper studio bag makes the logistics of regular Pilates practice invisible. The right one holds your full kit, keeps wet items away from dry ones, and transitions from studio changing room to the rest of your day without broadcasting that you have just come from the gym. These six bags have been selected specifically for women attending reformer and mat classes multiple times per week — prioritising real capacity, practical organisation, and the durability to survive daily studio commutes across years of use.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" alt="Best Pilates studio bags for women" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-10 mt-4 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Quick Picks — At a Glance</p>
              </div>
              {PRODUCTS.map((p, i) => (
                <div key={p.name} className="flex items-center gap-3 sm:gap-4 px-6 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" }}>
                  <span className="text-base font-semibold w-7 shrink-0 text-center" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold leading-tight" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{p.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{p.verdict}</p>
                  </div>
                  <span className="text-xs font-semibold hidden md:block shrink-0 mr-3" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{p.price}</span>
                  <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                    style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                  >Buy →</a>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Bags · Studio-Tested</p>
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
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "How big should a Pilates studio bag be?", a: "For a standard reformer or mat class, 20-30 litres covers a full kit change, grip socks, a towel, and personal items comfortably. If you shower at the studio or commute from work, the higher end of that range gives you space for toiletries and a change of clothes without the bag becoming unwieldy." },
                  { q: "Should a Pilates bag have a wet pocket?", a: "Yes, if you shower at the studio or regularly carry a damp towel home. A waterproof-lined wet compartment keeps damp items separate from clean clothes and prevents the musty odour that develops when wet fabric sits against dry clothing in a sealed bag." },
                  { q: "Is a duffel or tote better for Pilates?", a: "Duffels offer more capacity and tend to be better organised with shoe compartments and wet pockets. Totes are lighter and easier to manage for shorter commutes or lighter kits. Most practitioners who attend class multiple times a week prefer a duffel for its organisation and capacity." },
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
                <ArticleCard title="Best Pilates Bags (2026)" excerpt="The complete guide — totes, duffels, and mat carriers for every type of practitioner." href="/blog/best-pilates-bag" category="Equipment" readTime="7 min read" date="May 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
                <ArticleCard title="Best Pilates Tote Bags for Women" excerpt="Six totes chosen for studio carry, organisation, and studio-to-street style." href="/blog/best-pilates-tote-bag" category="Equipment" readTime="7 min read" date="June 2026" imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in Paris..." />
      </main>
      <Footer />
    </>
  );
}
