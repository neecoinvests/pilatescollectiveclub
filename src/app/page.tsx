import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchHero from "@/components/SearchHero";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import ProductCard from "@/components/ProductCard";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Pilates Collective Club — Find Your Perfect Studio",
  description:
    "Curated city guides, expert studio recommendations, and AI-powered search for Pilates lovers worldwide.",
  openGraph: {
    title: "Pilates Collective Club",
    description: "Find your perfect Pilates studio, class, or retreat.",
    type: "website",
  },
};

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b4a31" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "AI Pilates Finder",
    description: "Describe what you're looking for and get curated studio matches instantly.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b4a31" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "City Guides",
    description: "Deep-dive guides to the best studios in cities around the world.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b4a31" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Studio Reviews",
    description: "Honest, editorial reviews by practitioners who've been there.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b4a31" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Equipment Picks",
    description: "Carefully vetted gear and mat recommendations for every level.",
  },
];

const CITIES = [
  { city: "Zurich", country: "Switzerland", href: "/cities/zurich", studioCount: 5 },
  { city: "Geneva", country: "Switzerland", href: "/cities/geneva", studioCount: 5 },
  { city: "Lausanne", country: "Switzerland", href: "/cities/lausanne", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 5 },
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 5 },
  { city: "Amsterdam", country: "Netherlands", href: "/cities/amsterdam", studioCount: 5 },
  { city: "Berlin", country: "Germany", href: "/cities/berlin", studioCount: 5 },
  { city: "Barcelona", country: "Spain", href: "/cities/barcelona", studioCount: 5 },
];

const GUIDES = [
  {
    title: "The Best Pilates Studios in London",
    excerpt: "From Heartcore in Kensington to Ten Health in Shoreditch — our complete guide to London's most respected reformer studios.",
    href: "/cities/london",
    category: "City Guide",
    readTime: "8 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "The Best Pilates Studios in Zurich",
    excerpt: "From Seefeld reformer boutiques to lakeside private studios — our complete guide to Zurich's thriving Pilates scene.",
    href: "/cities/zurich",
    category: "City Guide",
    readTime: "8 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "The Beginner's Guide to Reformer Pilates",
    excerpt: "What to expect in your first reformer class, how to choose a studio, and how to progress with confidence.",
    href: "/blog/beginners-guide-to-reformer-pilates",
    category: "Beginner Guide",
    readTime: "8 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Pilates for Back Pain: What the Research Shows",
    excerpt: "A clear-eyed look at the evidence — what Pilates can and can't do for chronic back pain, and how to start safely.",
    href: "/blog/pilates-for-back-pain",
    category: "Wellness",
    readTime: "9 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Classical vs Contemporary Pilates",
    excerpt: "Understanding the key differences between the original method and modern interpretations — and which is right for you.",
    href: "/blog/classical-vs-contemporary-pilates",
    category: "Method",
    readTime: "7 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt: "Everything you actually need to build a consistent home practice, from a quality mat to the best reformer alternatives.",
    href: "/blog/best-pilates-equipment-for-home-practice",
    category: "Equipment",
    readTime: "10 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Pilates vs Yoga: Key Differences and How to Choose",
    excerpt: "A clear, honest comparison of two of the world's most popular movement practices — and how to decide between them.",
    href: "/blog/pilates-vs-yoga",
    category: "Method",
    readTime: "7 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "The Best Pilates Retreats in Europe",
    excerpt: "The finest Pilates immersion experiences across the continent, from Provence to Puglia.",
    href: "/blog/best-pilates-retreats-europe",
    category: "Travel",
    readTime: "8 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Pilates for Athletes",
    excerpt: "How elite sports professionals use Pilates to build functional strength, prevent injury, and extend their careers.",
    href: "/blog/pilates-for-athletes",
    category: "Performance",
    readTime: "7 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "How to Choose the Right Pilates Instructor",
    excerpt: "What credentials, experience, and red flags to look for when selecting a teacher.",
    href: "/blog/how-to-choose-a-pilates-instructor",
    category: "Guide",
    readTime: "6 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Pilates and Pregnancy: A Complete Guide",
    excerpt: "How to safely practise Pilates during pregnancy and postpartum — what to do, what to avoid, and how to find a specialist.",
    href: "/blog/pilates-and-pregnancy",
    category: "Health",
    readTime: "8 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=800&q=80",
  },
];

const PRODUCTS = [
  {
    name: "Premium Pilates Mat",
    description:
      "6mm non-slip surface, eco-friendly materials, and a dense closed-cell structure that cushions joints without compromising stability. Our top pick for studio and home use.",
    price: "From $52",
  },
  {
    name: "Pilates Grip Socks",
    description:
      "Full-toe grip coverage with seamless construction. Essential for reformer work — keeps you stable on the foot bar and prevents slipping on the carriage.",
    price: "From $16",
  },
  {
    name: "Resistance Ring (Magic Circle)",
    description:
      "The classic Pilates prop. Dual padded handles, flexible yet firm resistance, and compact enough to store in any corner. Targets inner thighs, arms, and core.",
    price: "From $24",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          id="finder"
          className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center"
          style={{
            background:
              "radial-gradient(ellipse 120% 80% at 50% -10%, rgba(255, 219, 206, 0.45) 0%, rgba(252, 249, 248, 0) 60%), #fcf9f8",
          }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=60"
              alt="Pilates studio"
              fill
              className="object-cover opacity-[0.06]"
              priority
            />
          </div>

          {/* Decorative rings */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ border: "1px solid rgba(217, 194, 186, 0.25)" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ border: "1px solid rgba(217, 194, 186, 0.18)" }}
          />

          <div className="relative z-10 max-w-4xl mx-auto">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-6"
              style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
            >
              The Pilates Discovery Platform
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.12] mb-6"
              style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
            >
              Find your perfect Pilates
              <br />
              <em className="not-italic" style={{ color: "#8b4a31" }}>
                studio, class, or retreat.
              </em>
            </h1>
            <p
              className="text-lg leading-relaxed mb-10 max-w-xl mx-auto"
              style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
            >
              Curated city guides, expert recommendations, and AI-powered search — all in one place.
            </p>

            <SearchHero />

            <p
              className="text-xs mt-8 opacity-60"
              style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
            >
              Trusted by practitioners in 20+ cities
            </p>
          </div>
        </section>

        {/* Feature Cards */}
        <section
          className="py-24 px-6"
          style={{ backgroundColor: "#f6f3f2" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
                style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
              >
                What We Do
              </p>
              <h2
                className="text-3xl md:text-4xl font-semibold"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                Everything you need to find your practice
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl p-7"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(217, 194, 186, 0.35)",
                    boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: "#fff7f3" }}
                  >
                    {f.icon}
                  </div>
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Cities */}
        <section className="py-24 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-[0.2em] mb-2"
                  style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
                >
                  City Guides
                </p>
                <h2
                  className="text-3xl md:text-4xl font-semibold"
                  style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
                >
                  Popular Cities
                </h2>
              </div>
              <a
                href="/cities/zurich"
                className="text-sm font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity"
                style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
              >
                View all cities →
              </a>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
              {CITIES.map((c) => (
                <CityCard key={c.city} {...c} />
              ))}
            </div>
          </div>
        </section>

        {/* Latest Guides */}
        <section className="py-24 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
                style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
              >
                Editorial
              </p>
              <h2
                className="text-3xl md:text-4xl font-semibold"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                Latest Guides
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {GUIDES.map((g) => (
                <ArticleCard key={g.href} {...g} />
              ))}
            </div>
          </div>
        </section>

        {/* Affiliate Products */}
        <section className="py-24 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
                style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}
              >
                Affiliate Picks
              </p>
              <h2
                className="text-3xl md:text-4xl font-semibold mb-3"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                Editor&apos;s Pilates Essentials
              </h2>
              <p
                className="text-sm max-w-lg mx-auto"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                Carefully selected equipment we actually use and recommend. Some links are affiliate
                links — we may earn a small commission at no extra cost to you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PRODUCTS.map((p) => (
                <ProductCard key={p.name} {...p} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section
          className="py-24 px-6"
          style={{
            background: "linear-gradient(135deg, #8b4a31 0%, #a86247 100%)",
          }}
        >
          <div className="max-w-xl mx-auto text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 opacity-75"
              style={{ color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}
            >
              Newsletter
            </p>
            <h2
              className="text-3xl font-semibold mb-4"
              style={{ color: "#ffffff", fontFamily: "'Playfair Display', serif" }}
            >
              Stay in the loop
            </h2>
            <p
              className="text-base mb-8 opacity-85"
              style={{ color: "#ffffff", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
            >
              Weekly studio guides, class tips, and equipment picks — delivered every Sunday morning.
            </p>
            <NewsletterForm />
            <p
              className="text-xs mt-4 opacity-55"
              style={{ color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}
            >
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </section>

        {/* About anchor */}
        <section
          id="about"
          className="py-24 px-6"
          style={{ backgroundColor: "#f6f3f2" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
            >
              About
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-6"
              style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
            >
              About Pilates Collective Club
            </h2>
            <p
              className="text-lg leading-relaxed mb-4"
              style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
            >
              We are a small team of passionate Pilates practitioners who got tired of sifting
              through generic fitness directories to find truly great studios. So we built our own.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
            >
              Every studio in our guides has been personally vetted. Every equipment pick has been
              tested. We earn a small affiliate commission on some purchases, which helps us keep
              the lights on — but it never influences our recommendations.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
