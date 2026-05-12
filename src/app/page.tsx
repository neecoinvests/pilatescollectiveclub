import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Pilates Collective Club — The Reference for Serious Practitioners",
  description: "Curated city guides, expert studio recommendations, and in-depth editorial for Pilates lovers worldwide.",
};

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

const FEATURED = {
  title: "The Best Pilates Studios in London",
  excerpt: "From Heartcore in Kensington to Ten Health in Shoreditch — our complete guide to London's most respected reformer studios. We visited every studio, tested every format, and ranked them honestly.",
  href: "/cities/london",
  category: "City Guide",
  readTime: "8 min read",
  date: "May 2026",
  imageUrl: "/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg",
};

const GUIDES = [
  { title: "The Best Pilates Studios in Zurich", excerpt: "From Seefeld reformer boutiques to lakeside private studios — our complete guide to Zurich's thriving Pilates scene.", href: "/cities/zurich", category: "City Guide", readTime: "8 min read", date: "May 2026" },
  { title: "The Beginner's Guide to Reformer Pilates", excerpt: "What to expect in your first reformer class, how to choose a studio, and how to progress with confidence.", href: "/blog/beginners-guide-to-reformer-pilates", category: "Beginner Guide", readTime: "8 min read", date: "May 2026" },
  { title: "Pilates for Back Pain: What the Research Shows", excerpt: "A clear-eyed look at the evidence — what Pilates can and can't do for chronic back pain, and how to start safely.", href: "/blog/pilates-for-back-pain", category: "Wellness", readTime: "9 min read", date: "May 2026" },
  { title: "Classical vs Contemporary Pilates", excerpt: "Understanding the key differences between the original method and modern interpretations — and which is right for you.", href: "/blog/classical-vs-contemporary-pilates", category: "Method", readTime: "7 min read", date: "May 2026" },
  { title: "Best Pilates Equipment for Home Practice", excerpt: "Everything you actually need to build a consistent home practice, from a quality mat to the best reformer alternatives.", href: "/blog/best-pilates-equipment-for-home-practice", category: "Equipment", readTime: "10 min read", date: "May 2026" },
  { title: "Pilates vs Yoga: Key Differences", excerpt: "A clear, honest comparison of two of the world's most popular movement practices — and how to decide between them.", href: "/blog/pilates-vs-yoga", category: "Method", readTime: "7 min read", date: "May 2026" },
  { title: "The Best Pilates Retreats in Europe", excerpt: "The finest Pilates immersion experiences across the continent, from Provence to Puglia.", href: "/blog/best-pilates-retreats-europe", category: "Travel", readTime: "8 min read", date: "May 2026" },
  { title: "Pilates for Athletes", excerpt: "How elite sports professionals use Pilates to build functional strength, prevent injury, and extend their careers.", href: "/blog/pilates-for-athletes", category: "Performance", readTime: "7 min read", date: "May 2026" },
];

const PRODUCTS = [
  {
    name: "Premium Pilates Mat",
    description: "6mm non-slip surface, eco-friendly materials, and a dense closed-cell structure that cushions joints without compromising stability.",
    price: "From $52",
    affiliateUrl: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Pilates Grip Socks",
    description: "Full-toe grip coverage with seamless construction. Essential for reformer work — keeps you stable on the foot bar and prevents slipping.",
    price: "From $16",
    affiliateUrl: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Resistance Ring (Magic Circle)",
    description: "The classic Pilates prop. Dual padded handles, flexible yet firm resistance, and compact enough to store anywhere.",
    price: "From $24",
    affiliateUrl: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
];

const label = {
  fontFamily: "var(--font-sans)",
  fontSize: "10px",
  fontWeight: 500,
  letterSpacing: "0.25em",
  textTransform: "uppercase" as const,
  color: "#9a9490",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section style={{
          padding: "160px 40px 100px",
          backgroundColor: "#ffffff",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}>
            <Image
              src="/pictures/roxana-popovici-cZ0WYsBFHhs-unsplash.jpg"
              alt=""
              fill
              style={{ objectFit: "cover", objectPosition: "center 30%", opacity: 0.07 }}
              priority
            />
          </div>
          {/* Floating decorative SVG */}
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "52%", zIndex: 0, pointerEvents: "none", display: "flex", alignItems: "center" }} aria-hidden="true">
            <svg width="560" height="620" viewBox="0 0 560 620" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Large circle — magic circle reference */}
              <circle cx="400" cy="310" r="210" stroke="#b87355" strokeWidth="1.2" opacity="0.11" fill="none"/>
              <circle cx="400" cy="310" r="175" stroke="#b87355" strokeWidth="0.6" opacity="0.07" fill="none"/>
              {/* Main flowing ribbon — echoes the logo wave mark */}
              <path d="M 540 -10 C 460 80 300 100 350 230 C 400 360 560 380 460 510 C 400 590 230 610 280 700" stroke="#b87355" strokeWidth="2.5" strokeLinecap="round" opacity="0.36" fill="none"/>
              {/* Secondary ribbon */}
              <path d="M 570 20 C 490 110 330 130 380 260 C 430 390 590 410 490 540 C 430 620 260 640 310 730" stroke="#b87355" strokeWidth="1.2" strokeLinecap="round" opacity="0.2" fill="none"/>
              {/* Tertiary ribbon — thin */}
              <path d="M 510 -30 C 430 60 270 80 320 210 C 370 340 530 360 430 490 C 370 570 200 590 250 680" stroke="#b87355" strokeWidth="0.6" strokeLinecap="round" opacity="0.12" fill="none"/>
              {/* Reformer spring lines */}
              <line x1="155" y1="340" x2="205" y2="340" stroke="#b87355" strokeWidth="1.2" strokeLinecap="round" opacity="0.22"/>
              <line x1="148" y1="354" x2="198" y2="354" stroke="#b87355" strokeWidth="1" strokeLinecap="round" opacity="0.16"/>
              <line x1="155" y1="368" x2="205" y2="368" stroke="#b87355" strokeWidth="0.8" strokeLinecap="round" opacity="0.11"/>
              {/* Dots */}
              <circle cx="460" cy="100" r="4" fill="#b87355" opacity="0.28"/>
              <circle cx="255" cy="215" r="2.5" fill="#b87355" opacity="0.22"/>
              <circle cx="510" cy="400" r="3" fill="#b87355" opacity="0.26"/>
              <circle cx="205" cy="475" r="2" fill="#b87355" opacity="0.18"/>
              <circle cx="430" cy="540" r="4.5" fill="#b87355" opacity="0.2"/>
              <circle cx="310" cy="140" r="2" fill="#b87355" opacity="0.19"/>
              {/* Cross sparkles */}
              <line x1="170" y1="158" x2="170" y2="172" stroke="#b87355" strokeWidth="1.5" strokeLinecap="round" opacity="0.26"/>
              <line x1="163" y1="165" x2="177" y2="165" stroke="#b87355" strokeWidth="1.5" strokeLinecap="round" opacity="0.26"/>
              <line x1="520" y1="480" x2="520" y2="491" stroke="#b87355" strokeWidth="1" strokeLinecap="round" opacity="0.2"/>
              <line x1="514" y1="485" x2="526" y2="485" stroke="#b87355" strokeWidth="1" strokeLinecap="round" opacity="0.2"/>
              <line x1="270" y1="570" x2="270" y2="579" stroke="#b87355" strokeWidth="1" strokeLinecap="round" opacity="0.17"/>
              <line x1="265" y1="574" x2="275" y2="574" stroke="#b87355" strokeWidth="1" strokeLinecap="round" opacity="0.17"/>
            </svg>
          </div>

          <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <p style={{ ...label, marginBottom: "32px" }}>The Pilates Collective Club</p>
            <h1 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(52px, 8vw, 104px)",
              fontWeight: 300,
              lineHeight: 1.0,
              color: "#0a0a0a",
              maxWidth: "820px",
              letterSpacing: "-0.01em",
              marginBottom: "0",
            }}>
              The reference for<br />
              <em>serious practitioners.</em>
            </h1>

            <div style={{ height: "1px", backgroundColor: "#ede9e3", margin: "52px 0" }} />

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "40px", flexWrap: "wrap" }}>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                fontWeight: 300,
                color: "#6b6560",
                lineHeight: 1.75,
                maxWidth: "480px",
                margin: 0,
              }}>
                Curated city guides, editorial studio reviews, and the best in Pilates equipment — written by practitioners, for practitioners.
              </p>
              <div style={{ display: "flex", gap: "16px", flexShrink: 0 }}>
                <Link href="/blog" style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  textDecoration: "none",
                  backgroundColor: "#0a0a0a",
                  padding: "14px 28px",
                  display: "inline-block",
                }}>
                  Read the Journal
                </Link>
                <Link href="/#cities" style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#0a0a0a",
                  textDecoration: "none",
                  border: "1px solid #0a0a0a",
                  padding: "14px 28px",
                  display: "inline-block",
                }}>
                  Browse Studios
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div style={{ height: "1px", backgroundColor: "#ede9e3", margin: "0 40px" }} />

        {/* Featured Story */}
        <section style={{ padding: "100px 40px", backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p style={{ ...label, marginBottom: "40px" }}>Featured</p>

            <Link href={FEATURED.href} style={{ textDecoration: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", alignItems: "stretch" }} className="block md:grid">
              <div style={{ position: "relative", overflow: "hidden", minHeight: "500px", backgroundColor: "#f0ece6" }}>
                <Image
                  src={FEATURED.imageUrl}
                  alt={FEATURED.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div style={{
                backgroundColor: "#f7f4f0",
                padding: "64px 56px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}>
                <span style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#c5a882",
                  display: "block",
                  marginBottom: "20px",
                }}>
                  {FEATURED.category}
                </span>
                <h2 style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(28px, 3vw, 42px)",
                  fontWeight: 400,
                  color: "#0a0a0a",
                  lineHeight: 1.15,
                  marginBottom: "24px",
                  letterSpacing: "-0.01em",
                }}>
                  {FEATURED.title}
                </h2>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "#6b6560",
                  lineHeight: 1.75,
                  marginBottom: "40px",
                }}>
                  {FEATURED.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#0a0a0a",
                    borderBottom: "1px solid #0a0a0a",
                    paddingBottom: "2px",
                  }}>
                    Read Guide →
                  </span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 300, color: "#9a9490" }}>
                    {FEATURED.readTime}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <div style={{ height: "1px", backgroundColor: "#ede9e3", margin: "0 40px" }} />

        {/* Journal */}
        <section style={{ padding: "100px 40px", backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "8px" }}>
              <div>
                <p style={{ ...label, marginBottom: "12px" }}>Editorial</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, color: "#0a0a0a", margin: 0 }}>
                  Journal
                </h2>
              </div>
              <Link href="/blog" style={{
                fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500,
                letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9490",
                textDecoration: "none", borderBottom: "1px solid #9a9490", paddingBottom: "2px",
              }}>
                All articles
              </Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0 60px" }} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {GUIDES.map((g) => (
                <ArticleCard key={g.href} {...g} />
              ))}
            </div>
          </div>
        </section>

        <div style={{ height: "1px", backgroundColor: "#ede9e3", margin: "0 40px" }} />

        {/* City Guides */}
        <section id="cities" style={{ padding: "100px 40px", backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "52px" }}>
              <div>
                <p style={{ ...label, marginBottom: "12px" }}>City Guides</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, color: "#0a0a0a", margin: 0 }}>
                  Studio guides by city
                </h2>
              </div>
              <Link href="/cities/zurich" style={{
                fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500,
                letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9490",
                textDecoration: "none", borderBottom: "1px solid #9a9490", paddingBottom: "2px",
              }}>
                All cities
              </Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2px" }} className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              {CITIES.map((c) => (
                <CityCard key={c.city} {...c} />
              ))}
            </div>
          </div>
        </section>

        <div style={{ height: "1px", backgroundColor: "#ede9e3", margin: "0 40px" }} />

        {/* Equipment */}
        <section id="equipment" style={{ padding: "100px 40px", backgroundColor: "#f7f4f0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "52px" }}>
              <div>
                <p style={{ ...label, marginBottom: "12px" }}>Equipment</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, color: "#0a0a0a", margin: 0 }}>
                  Editor&apos;s essentials
                </h2>
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "#9a9490", margin: 0 }}>
                Carefully selected. Available on Amazon.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }} className="grid-cols-1 md:grid-cols-3">
              {PRODUCTS.map((p) => (
                <ProductCard key={p.name} {...p} />
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" style={{ padding: "120px 40px", backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ ...label, marginBottom: "20px" }}>About</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 400, color: "#0a0a0a", marginBottom: "32px", lineHeight: 1.2 }}>
              Built by practitioners,<br />for practitioners.
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 300, color: "#6b6560", lineHeight: 1.85, marginBottom: "20px" }}>
              We are a small team of passionate Pilates practitioners who got tired of sifting through generic fitness directories to find truly great studios. So we built our own.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 300, color: "#9a9490", lineHeight: 1.85 }}>
              Every studio in our guides has been personally vetted. Every equipment pick has been tested. Every recommendation is independent — we are never paid to feature a studio.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
