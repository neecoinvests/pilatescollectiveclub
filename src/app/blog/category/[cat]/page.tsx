import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { posts, CATEGORIES, type Category } from "@/lib/posts";

const BASE_URL = "https://pilatescollectiveclub.com";

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  Equipment: "In-depth reviews and comparisons of Pilates equipment — from mats and rings to reformers and barrels.",
  "Brand Guide": "Honest brand reviews for Pilates activewear and equipment, tested against the method's real demands.",
  Method: "Guides to Pilates methodology — classical vs contemporary, principles, and how the approach compares to other disciplines.",
  Health: "How Pilates addresses specific health concerns: back pain, pregnancy, scoliosis, menopause, and more.",
  Guide: "Practical guides for finding studios, choosing instructors, and building a consistent practice.",
  Beginners: "Everything a new Pilates practitioner needs — from what to wear to what to expect in a first class.",
  Performance: "How Pilates benefits athletes and performance-focused practitioners.",
  Comparison: "Head-to-head comparisons of popular products and approaches.",
  Reading: "The best books on Pilates methodology, history, and movement science.",
  Travel: "Pilates retreats and destinations for practitioners who want to deepen their practice on the road.",
};

export async function generateStaticParams() {
  return CATEGORIES.filter((c) => c !== "All").map((cat) => ({
    cat: cat.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ cat: string }> }): Promise<Metadata> {
  const { cat } = await params;
  const category = CATEGORIES.find(
    (c) => c !== "All" && c.toLowerCase().replace(/\s+/g, "-") === cat
  ) as Category | undefined;

  if (!category) return { title: "Not Found" };

  const url = `${BASE_URL}/blog/category/${cat}`;
  const title = `${category} — Pilates Journal | Pilates Collective Club`;
  const description = CATEGORY_DESCRIPTIONS[category] ?? `Pilates articles in the ${category} category.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      images: [{ url: `${BASE_URL}/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg`, width: 1200, height: 630, alt: "Pilates Collective Club Journal" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg`],
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ cat: string }> }) {
  const { cat } = await params;
  const category = CATEGORIES.find(
    (c) => c !== "All" && c.toLowerCase().replace(/\s+/g, "-") === cat
  ) as Category | undefined;

  if (!category) notFound();

  const categoryPosts = posts.filter((p) => p.category === category);
  const url = `${BASE_URL}/blog/category/${cat}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}/#webpage`,
        "url": url,
        "name": `${category} — Pilates Journal`,
        "description": CATEGORY_DESCRIPTIONS[category] ?? `Pilates articles in the ${category} category.`,
        "isPartOf": { "@id": `${BASE_URL}/#website` },
        "inLanguage": "en-US",
      },
      {
        "@type": "ItemList",
        "name": `Pilates ${category} Articles`,
        "url": url,
        "numberOfItems": categoryPosts.length,
        "itemListElement": categoryPosts.map((p, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "url": `${BASE_URL}${p.href}`,
          "name": p.title,
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Journal", href: "/blog" }, { label: category }]} />
      <main style={{ backgroundColor: "#fcf9f8", minHeight: "100vh" }}>
        <section className="px-6 pt-12 pb-10">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
              Journal · {category}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              {category}
            </h1>
            <p className="text-base max-w-xl mb-2" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {CATEGORY_DESCRIPTIONS[category]}
            </p>
            <p className="text-xs mt-4" style={{ color: "#9a9490", fontFamily: "'Montserrat', sans-serif" }}>
              {categoryPosts.length} {categoryPosts.length === 1 ? "article" : "articles"}
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto">
            {categoryPosts.length === 0 ? (
              <p style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}>No articles in this category yet.</p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryPosts.map((post) => (
                  <Link key={post.href} href={post.href} className="group block">
                    <div
                      className="rounded-xl overflow-hidden h-full flex flex-col"
                      style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.4)", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <Image src={post.imageUrl} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] mb-2 block" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
                          {post.category} · {post.readTime}
                        </span>
                        <h2 className="text-base font-semibold leading-snug mb-2 group-hover:text-[#8b4a31] transition-colors" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
                          {post.title}
                        </h2>
                        <p className="text-xs leading-relaxed mt-auto pt-2" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="px-6 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-16 h-px mb-6" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Browse all categories</p>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.filter((c) => c !== "All").map((c) => (
                <Link
                  key={c}
                  href={`/blog/category/${c.toLowerCase().replace(/\s+/g, "-")}`}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "10px",
                    fontWeight: c === category ? 600 : 400,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    padding: "7px 14px",
                    border: c === category ? "1px solid #8b4a31" : "1px solid rgba(217,194,186,0.7)",
                    backgroundColor: c === category ? "#8b4a31" : "transparent",
                    color: c === category ? "#ffffff" : "#86736d",
                    borderRadius: "2px",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  {c}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
