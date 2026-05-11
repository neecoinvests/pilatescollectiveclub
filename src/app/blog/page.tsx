import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Pilates Collective Club",
  description: "Guides, equipment reviews, and studio advice for every stage of your Pilates practice.",
  openGraph: {
    title: "Blog — Pilates Collective Club",
    description: "Guides, equipment reviews, and studio advice for every stage of your Pilates practice.",
    type: "website",
    url: "https://pilatescollectiveclub.com/blog",
    images: [{ url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80", width: 1200, height: 630, alt: "Pilates Collective Club Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Pilates Collective Club",
    description: "Guides, equipment reviews, and studio advice for every stage of your Pilates practice.",
    images: ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80"],
  },
};

interface Post {
  title: string;
  excerpt: string;
  href: string;
  category: string;
  readTime: string;
  imageUrl: string;
  featured?: boolean;
}

const posts: Post[] = [
  {
    title: "Best Home Pilates Reformer (2026): Every Budget",
    excerpt: "A quality home reformer changes your practice permanently. We tested every price tier so you know exactly what you get.",
    href: "/blog/best-home-pilates-reformer",
    category: "Equipment",
    readTime: "11 min",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    featured: true,
  },
  {
    title: "Best Pilates Grip Socks (2026): Tested & Ranked",
    excerpt: "Required at virtually every reformer studio. Five options across every price point and preference.",
    href: "/blog/best-pilates-grip-socks",
    category: "Equipment",
    readTime: "7 min",
    imageUrl: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&q=80",
  },
  {
    title: "Best Pilates Books (2026): Every Level",
    excerpt: "From Joseph Pilates' 1945 manifesto to modern biomechanics texts. The books we recommend most frequently.",
    href: "/blog/best-pilates-books",
    category: "Reading",
    readTime: "8 min",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80",
  },
  {
    title: "Best Pilates Ball (2026): Mini & Stability",
    excerpt: "Mini ball or stability ball? We explain the difference and cover the best of both.",
    href: "/blog/best-pilates-ball",
    category: "Equipment",
    readTime: "8 min",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
  },
  {
    title: "What to Wear to Pilates (2026)",
    excerpt: "Instructors need to see your alignment. Here's exactly what works — and what to avoid — for reformer, mat, and barre.",
    href: "/blog/what-to-wear-to-pilates",
    category: "Beginners",
    readTime: "6 min",
    imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
  },
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt: "The essential kit for a serious home setup, from mats to resistance rings to foam rollers.",
    href: "/blog/best-pilates-equipment-for-home-practice",
    category: "Equipment",
    readTime: "10 min",
    imageUrl: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=800&q=80",
  },
  {
    title: "Beginner's Guide to Reformer Pilates",
    excerpt: "What to expect from your first reformer class and how to prepare.",
    href: "/blog/beginners-guide-to-reformer-pilates",
    category: "Beginners",
    readTime: "8 min",
    imageUrl: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
  },
  {
    title: "6 Core Principles of Pilates Explained",
    excerpt: "Breath, concentration, control, centring, precision, flow — understanding the method's foundations.",
    href: "/blog/6-core-principles-of-pilates-explained",
    category: "Method",
    readTime: "7 min",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
  },
  {
    title: "Pilates vs Yoga: Which Is Right for You?",
    excerpt: "An honest comparison of two movement disciplines that are often confused but serve different goals.",
    href: "/blog/pilates-vs-yoga",
    category: "Method",
    readTime: "9 min",
    imageUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
  },
  {
    title: "Pilates for Back Pain: What the Evidence Says",
    excerpt: "Clinical research meets practical guidance on using Pilates to address chronic lower back pain.",
    href: "/blog/pilates-for-back-pain",
    category: "Health",
    readTime: "10 min",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
  },
  {
    title: "Pilates for Athletes",
    excerpt: "How professional athletes use Pilates for injury prevention and performance enhancement.",
    href: "/blog/pilates-for-athletes",
    category: "Performance",
    readTime: "9 min",
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
  },
  {
    title: "Pilates and Pregnancy",
    excerpt: "Safe, effective Pilates throughout pregnancy — trimester by trimester.",
    href: "/blog/pilates-and-pregnancy",
    category: "Health",
    readTime: "11 min",
    imageUrl: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=800&q=80",
  },
  {
    title: "Classical vs Contemporary Pilates",
    excerpt: "The split between the original Contrology method and modern functional interpretations.",
    href: "/blog/classical-vs-contemporary-pilates",
    category: "Method",
    readTime: "8 min",
    imageUrl: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800&q=80",
  },
  {
    title: "How to Choose a Pilates Instructor",
    excerpt: "Credentials, lineage, teaching style — what actually matters when selecting your teacher.",
    href: "/blog/how-to-choose-a-pilates-instructor",
    category: "Guide",
    readTime: "7 min",
    imageUrl: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
  },
  {
    title: "How to Build a Consistent Pilates Practice",
    excerpt: "The habits and routines that separate practitioners who see results from those who plateau.",
    href: "/blog/how-to-build-a-consistent-pilates-practice",
    category: "Guide",
    readTime: "8 min",
    imageUrl: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&q=80",
  },
  {
    title: "Best Pilates Retreats in Europe (2026)",
    excerpt: "Immersive studio retreats across Switzerland, France, Italy, and Portugal for serious practitioners.",
    href: "/blog/best-pilates-retreats-europe",
    category: "Travel",
    readTime: "12 min",
    imageUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
  },
];

const featured = posts.find((p) => p.featured)!;
const rest = posts.filter((p) => !p.featured);

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-20" style={{ backgroundColor: "#fcf9f8", minHeight: "100vh" }}>

        {/* Hero */}
        <section className="px-6 pt-16 pb-12">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Journal</p>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Blog
            </h1>
            <p className="text-lg max-w-xl" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Guides, equipment reviews, and studio advice for every stage of your practice.
            </p>
          </div>
        </section>

        {/* Featured post */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <Link href={featured.href} className="group block">
              <div className="grid md:grid-cols-2 gap-8 rounded-2xl overflow-hidden" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.4)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                  <Image src={featured.imageUrl} alt={featured.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 inline-block" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{featured.category} · Featured</span>
                  <h2 className="text-3xl font-semibold leading-snug mb-4 group-hover:text-[#8b4a31] transition-colors" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{featured.title}</h2>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{featured.excerpt}</p>
                  <span className="text-sm font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Read article →</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* All posts grid */}
        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((post) => (
                <Link key={post.href} href={post.href} className="group block">
                  <div className="rounded-xl overflow-hidden h-full flex flex-col" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.4)", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                    <div className="relative aspect-video overflow-hidden">
                      <Image src={post.imageUrl} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] mb-2 block" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{post.category} · {post.readTime}</span>
                      <h3 className="text-base font-semibold leading-snug mb-2 group-hover:text-[#8b4a31] transition-colors" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{post.title}</h3>
                      <p className="text-xs leading-relaxed mt-auto pt-2" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{post.excerpt}</p>
                    </div>
                  </div>
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
