import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "What to Wear to Pilates (2026): The Complete Outfit Guide | Pilates Collective Club",
  description:
    "Exactly what to wear to Pilates — for reformer, mat, and barre classes. The best leggings, tops, and layers reviewed, with what to avoid and why fit matters more than brand.",
};

const PRODUCTS = [
  {
    category: "Leggings",
    name: "CRZ YOGA Naked Feeling High Waist Leggings",
    price: "From $28",
    tag: "Best Leggings",
    description:
      "CRZ YOGA's Naked Feeling fabric has become a genuine cult choice among Pilates practitioners who want the performance of Lululemon Align at a fraction of the price. The fabric is buttery-soft, squat-proof, and has enough compression to stay put during leg circles and side-lying work without feeling restrictive. The high waist stays up through all inversions and doesn't roll. Available in 20+ colours. Consistently one of the highest-rated Pilates leggings on Amazon.",
    affiliateUrl: "https://www.amazon.com/s?k=crz+yoga+naked+feeling+high+waist+leggings&tag=pilatescollective-20",
  },
  {
    category: "Leggings",
    name: "Halara Cloudful High-Waisted Leggings",
    price: "From $32",
    tag: "Best for Reformer",
    description:
      "Halara's Cloudful leggings are specifically praised by reformer practitioners for their four-way stretch and close fit that doesn't bunch on the carriage. The fabric doesn't pill, the colour holds through repeated washing, and the waistband has a hidden pocket large enough for a key or card. The lack of seams at the inner thigh prevents the irritation some practitioners experience during footwork and side-splits work.",
    affiliateUrl: "https://www.amazon.com/s?k=halara+cloudful+leggings+pilates&tag=pilatescollective-20",
  },
  {
    category: "Top",
    name: "Amazon Essentials Studio Terry Cropped Sweatshirt",
    price: "From $22",
    tag: "Best Warm-Up Layer",
    description:
      "A studio-appropriate warm-up layer is essential for Pilates — you want to keep your core warm during setup and rest periods, and remove it for the active work. This cropped terry sweatshirt hits the right length (doesn't bunch when lying down), is lightweight enough to pack into a bag without adding bulk, and the relaxed fit accommodates full arm movement. One of the best-value warm-up pieces available, and the neutral colourway works over any legging.",
    affiliateUrl: "https://www.amazon.com/s?k=amazon+essentials+studio+terry+cropped+sweatshirt&tag=pilatescollective-20",
  },
  {
    category: "Sports Bra",
    name: "ODODOS High Impact Cross-Back Sports Bra",
    price: "From $24",
    tag: "Best Sports Bra",
    description:
      "Pilates demands a bra that stays put during rolling exercises, inversions, and all the transitions where a traditional sports bra can shift. The ODODOS cross-back design distributes the load evenly across the back, the racerback cut allows complete arm and shoulder mobility, and the medium-to-high support level is appropriate for the dynamic range of reformer and mat work without over-compressing. Available from XS to 3XL.",
    affiliateUrl: "https://www.amazon.com/s?k=ododos+cross+back+sports+bra&tag=pilatescollective-20",
  },
  {
    category: "Socks",
    name: "ToeSox Half Toe Low Rise Grip Sock",
    price: "From $18",
    tag: "Essential Accessory",
    description:
      "Required at most reformer studios and genuinely useful for mat work — grip socks are as much a part of your Pilates outfit as the leggings. ToeSox individual-toe design allows the foot to function naturally on the footbar, improving the proprioceptive feedback that makes Pilates effective. See our full grip sock guide for alternatives and detailed comparisons.",
    affiliateUrl: "https://www.amazon.com/s?k=toesox+half+toe+low+rise&tag=pilatescollective-20",
  },
];

const DO_DONT = {
  dos: [
    "Fitted, stretchy leggings — full-length or capri",
    "A close-fitting top that won't fall over your face during roll-overs",
    "Grip socks (required at most studios)",
    "A light warm-up layer you can remove easily",
    "Hair tied back or off the neck for mat work",
  ],
  donts: [
    "Baggy shorts or trousers — the instructor needs to see your alignment",
    "Jeans, denim, or anything with hardware that damages equipment",
    "Slippery socks or bare feet on a studio reformer",
    "Strong perfume or fragrance in a shared studio space",
    "Jewellery that can snag on the reformer's straps or springs",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "What to Wear to Pilates (2026): The Complete Outfit Guide",
      "description": "Exactly what to wear to Pilates — for reformer, mat, and barre classes. The best leggings, tops, and layers reviewed.",
      "url": "https://pilatescollectiveclub.com/blog/what-to-wear-to-pilates",
      "datePublished": "2026-05-01",
      "dateModified": "2026-05-01",
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "What to Wear to Pilates", "item": "https://pilatescollectiveclub.com/blog/what-to-wear-to-pilates" },
      ],
    },
  ],
};

export default function WhatToWearToPilatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Studio Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Beginners</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              What to Wear<br /><span style={{ color: "#8b4a31" }}>to Pilates (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 6 min read</p>
            <div className="rounded-xl px-5 py-4 mb-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
              <p className="text-xs leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                <span className="font-semibold">Affiliate disclosure:</span> This article contains affiliate links. We earn a commission if you purchase through our links, at no extra cost to you.
              </p>
            </div>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              What you wear to Pilates matters more than it does in most fitness contexts. Instructors need to see your body alignment — how your spine curves, where your shoulders are, whether your pelvis is neutral — to give you accurate corrections. Loose or baggy clothing obscures this and makes good instruction harder. Here&apos;s exactly what to wear, what to avoid, and the specific pieces that work best across reformer, mat, and barre classes.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1400&q=80" alt="Pilates studio outfit and activewear" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1400&q=80" alt="Pilates studio outfit and activewear" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Do and Don't */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The quick reference</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="rounded-xl p-6" style={{ backgroundColor: "#f0f7f1", border: "1px solid rgba(83,98,87,0.2)" }}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Do wear</p>
                  <ul className="space-y-2.5">
                    {DO_DONT.dos.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                        <span style={{ color: "#536257" }}>✓</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl p-6" style={{ backgroundColor: "#fdf5f3", border: "1px solid rgba(139,74,49,0.15)" }}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Don&apos;t wear</p>
                  <ul className="space-y-2.5">
                    {DO_DONT.donts.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                        <span style={{ color: "#8b4a31" }}>✕</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Class-specific guidance */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to wear for each class type</h2>
              <div className="space-y-4">
                {[
                  {
                    type: "Reformer Pilates",
                    guidance: "Full-length or capri leggings are ideal — the footbar and straps can catch on loose fabric. A fitted tank or T-shirt. Grip socks are required. If the studio is cold between exercises, a lightweight cropped sweatshirt you can remove easily.",
                  },
                  {
                    type: "Mat Pilates",
                    guidance: "Same as reformer but slightly more flexibility is acceptable — you're on a mat rather than a machine. Still avoid baggy shorts. Grip socks are recommended for hardwood studio floors and required at most mat studios.",
                  },
                  {
                    type: "Clinical or Rehabilitation Pilates",
                    guidance: "Comfortable, fitted clothing that your physiotherapist or teacher can see through easily. Avoid anything that compresses the spine or restricts breathing — this type of session focuses heavily on breath and internal body awareness.",
                  },
                  {
                    type: "Pilates barre or fusion",
                    guidance: "Similar to reformer. Some fusion formats that incorporate cardio intervals benefit from slightly more ventilated fabric. The grip sock rule applies universally across studio barre formats.",
                  },
                ].map((item) => (
                  <div key={item.type} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <h3 className="text-base font-semibold mb-2" style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif" }}>{item.type}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.guidance}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Products */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Our recommended pieces</h2>
              <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Selected for fit, function, and value — all available on Amazon.</p>
              <div className="space-y-8">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>{p.category}</p>
                    <ProductCard
                      name={p.name}
                      description={p.description}
                      price={p.price}
                      affiliateUrl={p.affiliateUrl}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Fit over brand */}
            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Fit matters more than brand</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The Pilates community has a strong association with high-end activewear brands, but the function of what you wear matters far more than the label. A well-fitted pair of £30 leggings that stays in place, allows full movement range, and lets your instructor see your alignment is better Pilates kit than a £120 designer pair that gaps at the waist in roll-over.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The one non-negotiable investment is grip socks — cheaper alternatives often have inferior grip patterns that fail quickly, and this is both a quality and safety issue in a studio environment.
              </p>
            </div>

            {/* Further reading */}
            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Pilates Grip Socks (2026)" excerpt="Studio-tested grip socks ranked — from ToeSox to Tavi Noir and the best budget picks." href="/blog/best-pilates-grip-socks" category="Equipment" readTime="7 min read" date="May 2026" imageUrl="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&w=800&q=80" />
                <ArticleCard title="Beginner's Guide to Reformer Pilates" excerpt="What to expect from your first reformer class and how to prepare." href="/blog/beginners-guide-to-reformer-pilates" category="Guide" readTime="8 min read" date="May 2026" imageUrl="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Explore our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in London…" />
      </main>
      <Footer />
    </>
  );
}
