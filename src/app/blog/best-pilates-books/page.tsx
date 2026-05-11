import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Books (2026): From Beginner to Advanced Practitioner | Pilates Collective Club",
  description:
    "The best Pilates books for every level — from Joseph Pilates' original texts to modern anatomy guides and beginner programmes. Reviewed and ranked by our editorial team.",
  openGraph: {
    title: "Best Pilates Books (2026): From Beginner to Advanced Practitioner",
    description: "The best Pilates books for every level — from Joseph Pilates' original texts to modern anatomy guides. Reviewed and ranked.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-books",
    images: [{ url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80", width: 1200, height: 630, alt: "Best Pilates Books — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Books (2026): From Beginner to Advanced Practitioner",
    description: "The best Pilates books for every level — reviewed and ranked.",
    images: ["https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80"],
  },
};

const BOOKS = [
  {
    rank: "01",
    name: "Return to Life Through Contrology — Joseph H. Pilates",
    price: "From $14",
    tag: "The Original",
    description:
      "Written by Joseph Pilates himself in 1945, this is the foundational text of the entire method. It contains the complete original mat repertoire — 34 exercises photographed and described in Pilates' own words — alongside his philosophy of health, breathing, and the relationship between mind and body. Every serious practitioner should read it at least once. The exercises are harder than they look; the philosophy is more modern than you'd expect from an 80-year-old text.",
    affiliateUrl: "https://www.amazon.com/s?k=return+to+life+through+contrology+joseph+pilates&tag=pilatescollective-20",
    bestFor: "All practitioners",
  },
  {
    rank: "02",
    name: "The Pilates Body — Brooke Siler",
    price: "From $18",
    tag: "Best for Beginners",
    description:
      "Brooke Siler studied directly under Romana Kryzanowska — one of Joseph Pilates' original students — and wrote what remains the clearest, most accessible introduction to the classical mat method. The photography is exceptional, the cueing is precise, and the progression from beginner to advanced is intelligently structured. If you recommend one Pilates book to a new practitioner, this is it. Siler understands both the technical and philosophical dimensions of the work.",
    affiliateUrl: "https://www.amazon.com/s?k=the+pilates+body+brooke+siler&tag=pilatescollective-20",
    bestFor: "Beginners and intermediate practitioners",
  },
  {
    rank: "03",
    name: "Pilates Anatomy — Rael Isacowitz & Karen Clippinger",
    price: "From $24",
    tag: "Best for Understanding the Body",
    description:
      "The definitive anatomy reference for Pilates practitioners and teachers. Isacowitz and Clippinger map each classical exercise to the muscles it targets, the joints it mobilises, and the common alignment errors that compromise its effectiveness. Full-colour anatomical illustrations show exactly what's happening beneath the surface during the hundred, spine stretch, and side-lying series. Essential reading for anyone who wants to understand why Pilates works, not just how to do it.",
    affiliateUrl: "https://www.amazon.com/s?k=pilates+anatomy+rael+isacowitz+karen+clippinger&tag=pilatescollective-20",
    bestFor: "Intermediate to advanced practitioners and teachers",
  },
  {
    rank: "04",
    name: "The Pilates Bible — Lynne Robinson",
    price: "From $20",
    tag: "Best Reference",
    description:
      "A comprehensive, well-photographed reference covering the full breadth of the Pilates method — mat, reformer, Cadillac, chair, and barrel. Robinson's approach is more contemporary than Siler's but rooted in classical principles, and the book's format makes it genuinely useful as an ongoing reference rather than a one-time read. The sections on modifications for injury and pregnancy are particularly strong. The most complete single-volume Pilates reference available.",
    affiliateUrl: "https://www.amazon.com/s?k=the+pilates+bible+lynne+robinson&tag=pilatescollective-20",
    bestFor: "Practitioners wanting a comprehensive ongoing reference",
  },
  {
    rank: "05",
    name: "Your Body, Your Pilates — Tom Mccook",
    price: "From $28",
    tag: "Best for Injury & Rehabilitation",
    description:
      "Mccook's book addresses a gap in the Pilates literature — how to adapt the method intelligently for bodies with structural variation, injury history, and chronic pain. Drawing on his background in movement science and somatics, Mccook explains how spinal mechanics, breathing, and deep core function interact, and how to modify classical exercises when the standard form isn't working. Required reading for practitioners dealing with back pain, hip issues, or post-surgical recovery.",
    affiliateUrl: "https://www.amazon.com/s?k=your+body+your+pilates+tom+mccook&tag=pilatescollective-20",
    bestFor: "Practitioners with injuries, chronic pain, or structural limitations",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Books (2026): From Beginner to Advanced Practitioner",
      "description": "The best Pilates books for every level — from Joseph Pilates' original texts to modern anatomy guides. Reviewed and ranked.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-books",
      "datePublished": "2026-05-01",
      "dateModified": "2026-05-01",
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Books", "item": "https://pilatescollectiveclub.com/blog/best-pilates-books" },
      ],
    },
  ],
};

export default function BestPilatesBooksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Reading List</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Method & Practice</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Books<br /><span style={{ color: "#8b4a31" }}>(2026): Every Level</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The Pilates literature spans an enormous range — from Joseph Pilates&apos; own 1945 manifesto to modern biomechanics texts and beginner-friendly visual guides. The best practitioners read widely. Understanding the method intellectually accelerates physical progress by building body awareness that technique cues alone can&apos;t deliver. These are the five books we recommend most frequently, across every stage of the journey.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1400&q=80" alt="Pilates books for study" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Reading path */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>How to approach the Pilates reading list</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Start with Siler&apos;s <em>The Pilates Body</em> if you&apos;re new — it&apos;s the most accessible entry point to both the exercises and the philosophy. Then read the original Pilates text once you have some physical foundation; it will make much more sense when you can feel what he&apos;s describing.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Add the anatomy text when you&apos;re genuinely intermediate and starting to ask &ldquo;why does this exercise target that?&rdquo; rather than just following the instruction. The reference and rehabilitation books serve different practitioners at different moments — buy them when you need them.
              </p>
            </div>

            {/* Books */}
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Books · Curated & Reviewed</p>
              <div className="space-y-10">
                {BOOKS.map((book) => (
                  <div key={book.name}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{book.rank}</span>
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{book.tag}</span>
                        <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "#f0f7f1", color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Best for: {book.bestFor}</span>
                      </div>
                    </div>
                    <ProductCard
                      name={book.name}
                      description={book.description}
                      price={book.price}
                      affiliateUrl={book.affiliateUrl}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Classical vs Contemporary note */}
            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>A note on classical vs contemporary Pilates books</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The Pilates book market splits clearly between classical texts (rooted in Pilates&apos; original method and its direct lineage through Romana Kryzanowska, Kathy Grant, and others) and contemporary texts (which integrate modern exercise science, physiotherapy, and somatic movement).
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Both are valuable. Classical texts give you depth of method and direct lineage to the original intention. Contemporary texts give you the biomechanical and anatomical understanding that the classical tradition sometimes assumes rather than explains. Our reading list includes both, because the strongest practitioners draw on both traditions.
              </p>
            </div>

            {/* Further reading */}
            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Classical vs Contemporary Pilates" excerpt="Understanding the key differences between the original method and modern interpretations." href="/blog/classical-vs-contemporary-pilates" category="Method" readTime="7 min read" date="May 2026" imageUrl="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800&q=80" />
                <ArticleCard title="The 6 Core Principles of Pilates, Explained" excerpt="Concentration, control, centering, precision, breath, and flow — what they actually mean in practice." href="/blog/6-core-principles-of-pilates-explained" category="Method" readTime="6 min read" date="May 2026" imageUrl="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a Pilates studio near you" subtitle="Explore our curated city guides to find the best Pilates instruction worldwide." showSearch searchPlaceholder="Ask: best classical Pilates studios in Paris…" />
      </main>
      <Footer />
    </>
  );
}
