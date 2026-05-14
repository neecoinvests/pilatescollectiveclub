import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pilates Journal — Equipment Reviews, Method Guides & Studio Advice",
  description: "In-depth Pilates guides covering equipment reviews, beginner advice, method comparisons, and studio tips. Everything from choosing a reformer to classical vs contemporary Pilates.",
  keywords: [
    "pilates blog",
    "pilates equipment reviews",
    "pilates for beginners",
    "reformer pilates guide",
    "pilates vs yoga",
    "classical pilates",
    "best pilates mat",
    "pilates grip socks",
    "pilates instructor advice",
    "pilates method explained",
  ],
  openGraph: {
    title: "Pilates Journal — Equipment Reviews, Method Guides & Studio Advice",
    description: "In-depth Pilates guides covering equipment reviews, beginner advice, method comparisons, and studio tips.",
    type: "website",
    url: "https://pilatescollectiveclub.com/blog",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg", width: 1200, height: 630, alt: "Pilates Collective Club Journal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Journal — Equipment Reviews, Method Guides & Studio Advice",
    description: "In-depth Pilates guides covering equipment reviews, beginner advice, method comparisons, and studio tips.",
    images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog",
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
    imageUrl: "/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg",
    featured: true,
  },
  {
    title: "Best Pilates Grip Socks (2026): Tested & Ranked",
    excerpt: "Required at virtually every reformer studio. Five options across every price point and preference.",
    href: "/blog/best-pilates-grip-socks",
    category: "Equipment",
    readTime: "7 min",
    imageUrl: "/pictures/jade-stephens-N21356amsyw-unsplash.jpg",
  },
  {
    title: "Best Pilates Books (2026): Every Level",
    excerpt: "From Joseph Pilates' 1945 manifesto to modern biomechanics texts. The books we recommend most frequently.",
    href: "/blog/best-pilates-books",
    category: "Reading",
    readTime: "8 min",
    imageUrl: "/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg",
  },
  {
    title: "Best Pilates Ball (2026): Mini & Stability",
    excerpt: "Mini ball or stability ball? We explain the difference and cover the best of both.",
    href: "/blog/best-pilates-ball",
    category: "Equipment",
    readTime: "8 min",
    imageUrl: "/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg",
  },
  {
    title: "What to Wear to Pilates (2026)",
    excerpt: "Instructors need to see your alignment. Here's exactly what works — and what to avoid — for reformer, mat, and barre.",
    href: "/blog/what-to-wear-to-pilates",
    category: "Beginners",
    readTime: "6 min",
    imageUrl: "/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg",
  },
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt: "The essential kit for a serious home setup, from mats to resistance rings to foam rollers.",
    href: "/blog/best-pilates-equipment-for-home-practice",
    category: "Equipment",
    readTime: "10 min",
    imageUrl: "/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg",
  },
  {
    title: "Beginner's Guide to Reformer Pilates",
    excerpt: "What to expect from your first reformer class and how to prepare.",
    href: "/blog/beginners-guide-to-reformer-pilates",
    category: "Beginners",
    readTime: "8 min",
    imageUrl: "/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg",
  },
  {
    title: "6 Core Principles of Pilates Explained",
    excerpt: "Breath, concentration, control, centring, precision, flow — understanding the method's foundations.",
    href: "/blog/6-core-principles-of-pilates-explained",
    category: "Method",
    readTime: "7 min",
    imageUrl: "/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg",
  },
  {
    title: "Pilates vs Yoga: Which Is Right for You?",
    excerpt: "An honest comparison of two movement disciplines that are often confused but serve different goals.",
    href: "/blog/pilates-vs-yoga",
    category: "Method",
    readTime: "9 min",
    imageUrl: "/pictures/henrique-ferreira-omiTbS-nb_M-unsplash.jpg",
  },
  {
    title: "Pilates for Back Pain: What the Evidence Says",
    excerpt: "Clinical research meets practical guidance on using Pilates to address chronic lower back pain.",
    href: "/blog/pilates-for-back-pain",
    category: "Health",
    readTime: "10 min",
    imageUrl: "/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg",
  },
  {
    title: "Pilates for Athletes",
    excerpt: "How professional athletes use Pilates for injury prevention and performance enhancement.",
    href: "/blog/pilates-for-athletes",
    category: "Performance",
    readTime: "9 min",
    imageUrl: "/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg",
  },
  {
    title: "Pilates and Pregnancy",
    excerpt: "Safe, effective Pilates throughout pregnancy — trimester by trimester.",
    href: "/blog/pilates-and-pregnancy",
    category: "Health",
    readTime: "11 min",
    imageUrl: "/pictures/juls-p-lB6lbkbe1XA-unsplash.jpg",
  },
  {
    title: "Classical vs Contemporary Pilates",
    excerpt: "The split between the original Contrology method and modern functional interpretations.",
    href: "/blog/classical-vs-contemporary-pilates",
    category: "Method",
    readTime: "8 min",
    imageUrl: "/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg",
  },
  {
    title: "How to Choose a Pilates Instructor",
    excerpt: "Credentials, lineage, teaching style — what actually matters when selecting your teacher.",
    href: "/blog/how-to-choose-a-pilates-instructor",
    category: "Guide",
    readTime: "7 min",
    imageUrl: "/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg",
  },
  {
    title: "How to Build a Consistent Pilates Practice",
    excerpt: "The habits and routines that separate practitioners who see results from those who plateau.",
    href: "/blog/how-to-build-a-consistent-pilates-practice",
    category: "Guide",
    readTime: "8 min",
    imageUrl: "/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg",
  },
  {
    title: "Best Pilates Retreats in Europe (2026)",
    excerpt: "Immersive studio retreats across Switzerland, France, Italy, and Portugal for serious practitioners.",
    href: "/blog/best-pilates-retreats-europe",
    category: "Travel",
    readTime: "12 min",
    imageUrl: "/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg",
  },
  {
    title: "Best Pilates Leggings (2026): Tested & Ranked",
    excerpt: "From Lululemon Align to CRZ YOGA — the leggings that genuinely serve the method, tested for opacity, waistband stability, and reformer performance.",
    href: "/blog/best-pilates-leggings",
    category: "Equipment",
    readTime: "9 min",
    imageUrl: "/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg",
  },
  {
    title: "Pilates Reformer vs Mat: Key Differences Explained",
    excerpt: "What's actually different between reformer and mat Pilates — which is harder, what you get from each, and how serious practitioners approach both.",
    href: "/blog/pilates-reformer-vs-mat",
    category: "Method",
    readTime: "10 min",
    imageUrl: "/pictures/ahmet-kurt-0xn-8kRWOhE-unsplash.jpg",
  },
  {
    title: "Best Pilates Resistance Bands (2026)",
    excerpt: "Long bands, loop bands, and fabric options — the resistance bands that actually perform in a serious Pilates context.",
    href: "/blog/best-pilates-resistance-bands",
    category: "Equipment",
    readTime: "8 min",
    imageUrl: "/pictures/ahmet-kurt-a1IhqqW8JQE-unsplash.jpg",
  },
  {
    title: "Best Pilates Starter Kit (2026): What to Buy First",
    excerpt: "Mat, grip socks, resistance bands, Pilates ring — exactly what to buy, in what order, when starting your Pilates practice.",
    href: "/blog/best-pilates-starter-kit",
    category: "Beginners",
    readTime: "9 min",
    imageUrl: "/pictures/roxana-popovici-Zp4APUiwEsM-unsplash.jpg",
  },
  {
    title: "Best Pilates Reformer Accessories (2026)",
    excerpt: "Sticky pads, jump boards, long box, leather straps — the five accessories that most meaningfully upgrade your reformer practice.",
    href: "/blog/best-pilates-reformer-accessories",
    category: "Equipment",
    readTime: "9 min",
    imageUrl: "/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg",
  },
  {
    title: "Best Pilates Mat (2026): Firmness, Grip & Durability Tested",
    excerpt: "The Pilates mat is your most important equipment purchase. We tested five across firmness, grip, and spinal feedback — from Manduka PRO to travel options.",
    href: "/blog/best-pilates-mat",
    category: "Equipment",
    readTime: "9 min",
    imageUrl: "/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg",
  },
  {
    title: "Best Foam Roller for Pilates (2026)",
    excerpt: "Spinal mobilisation, myofascial release, balance challenge — the foam rollers that actually perform in a serious Pilates context.",
    href: "/blog/best-pilates-foam-roller",
    category: "Equipment",
    readTime: "8 min",
    imageUrl: "/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg",
  },
  {
    title: "Best Pilates Ring / Magic Circle (2026)",
    excerpt: "Joseph Pilates invented it. We tested five versions — from STOTT to Balanced Body — for resistance, pad quality, and durability.",
    href: "/blog/best-pilates-ring",
    category: "Equipment",
    readTime: "8 min",
    imageUrl: "/pictures/roxana-popovici-5JQxj-zc5ng-unsplash.jpg",
  },
  {
    title: "Best Pilates Reformer Brands (2026): Compared Honestly",
    excerpt: "Gratz vs Balanced Body vs Merrithew vs Align-Pilates — an honest brand comparison for home users, studio owners, and serious practitioners.",
    href: "/blog/best-pilates-reformer-brands",
    category: "Equipment",
    readTime: "12 min",
    imageUrl: "/pictures/roxana-popovici-cZ0WYsBFHhs-unsplash.jpg",
  },
  {
    title: "Best Pilates Tops & Sports Bras (2026)",
    excerpt: "Tested for coverage across positions, instructor visibility, and reformer comfort. Lululemon, Alo, Varley, and more ranked honestly.",
    href: "/blog/best-pilates-workout-tops",
    category: "Equipment",
    readTime: "8 min",
    imageUrl: "/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg",
  },
  {
    title: "Pilates for Runners: The Work That Actually Helps",
    excerpt: "How Pilates addresses glute medius weakness, hip flexor tightness, thoracic stiffness, and breathing economy — the specific deficits that cause running injuries.",
    href: "/blog/pilates-for-runners",
    category: "Performance",
    readTime: "11 min",
    imageUrl: "/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg",
  },
  {
    title: "Pilates for Scoliosis: What Actually Works",
    excerpt: "An honest guide — what the research shows, which exercises help your specific curve pattern, what to avoid, and how to find an instructor who understands spinal asymmetry.",
    href: "/blog/pilates-for-scoliosis",
    category: "Health",
    readTime: "12 min",
    imageUrl: "/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg",
  },
  {
    title: "Pilates During Menopause: Bone Density, Hormones & Practice",
    excerpt: "How oestrogen decline changes the musculoskeletal system, why Pilates is exceptionally well-positioned to help, and how to adapt your practice.",
    href: "/blog/pilates-for-menopause",
    category: "Health",
    readTime: "13 min",
    imageUrl: "/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg",
  },
  {
    title: "The History of Pilates: From Joseph Pilates to Today",
    excerpt: "From internment camps to the New York City Ballet building to global boutique studios — the complete, honest history of how the method developed and fractured.",
    href: "/blog/pilates-history",
    category: "Method",
    readTime: "14 min",
    imageUrl: "/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg",
  },
  {
    title: "How to Find a Great Pilates Studio (Before You Commit)",
    excerpt: "The specific green flags, red flags, and questions that separate excellent studios from mediocre ones — before you spend on a class pack.",
    href: "/blog/how-to-find-a-good-pilates-studio",
    category: "Guide",
    readTime: "10 min",
    imageUrl: "/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg",
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
