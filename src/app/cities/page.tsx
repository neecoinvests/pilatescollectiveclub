import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pilates Studio Guides by City | Pilates Collective Club",
  description: "Curated guides to the best Pilates studios in 45 cities worldwide — London, New York, Paris, Charlotte, Tampa, Las Vegas, Raleigh, Salt Lake City and more. Find the right studio before you book.",
  keywords: ["pilates studios by city", "best pilates studios worldwide", "pilates city guides", "reformer pilates cities", "pilates london paris new york"],
  openGraph: {
    title: "Pilates Studio Guides by City — Pilates Collective Club",
    description: "Find the best Pilates studios in 25 cities worldwide. Curated picks with booking tips.",
    type: "website",
    url: "https://pilatescollectiveclub.com/cities",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg", width: 1200, height: 630, alt: "Pilates city guides" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Studio Guides by City — Pilates Collective Club",
    description: "Find the best Pilates studios in 25 cities worldwide. Curated picks with booking tips.",
    images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const CITIES: { city: string; country: string; region: string; href: string }[] = [
  { city: "London", country: "United Kingdom", region: "Europe", href: "/cities/london" },
  { city: "Paris", country: "France", region: "Europe", href: "/cities/paris" },
  { city: "Amsterdam", country: "Netherlands", region: "Europe", href: "/cities/amsterdam" },
  { city: "Berlin", country: "Germany", region: "Europe", href: "/cities/berlin" },
  { city: "Barcelona", country: "Spain", region: "Europe", href: "/cities/barcelona" },
  { city: "Milan", country: "Italy", region: "Europe", href: "/cities/milan" },
  { city: "Rome", country: "Italy", region: "Europe", href: "/cities/rome" },
  { city: "Stockholm", country: "Sweden", region: "Europe", href: "/cities/stockholm" },
  { city: "Copenhagen", country: "Denmark", region: "Europe", href: "/cities/copenhagen" },
  { city: "Zurich", country: "Switzerland", region: "Europe", href: "/cities/zurich" },
  { city: "Geneva", country: "Switzerland", region: "Europe", href: "/cities/geneva" },
  { city: "Lausanne", country: "Switzerland", region: "Europe", href: "/cities/lausanne" },
  { city: "Lisbon", country: "Portugal", region: "Europe", href: "/cities/lisbon" },
  { city: "New York", country: "United States", region: "Americas", href: "/cities/new-york" },
  { city: "Los Angeles", country: "United States", region: "Americas", href: "/cities/los-angeles" },
  { city: "Miami", country: "United States", region: "Americas", href: "/cities/miami" },
  { city: "Chicago", country: "United States", region: "Americas", href: "/cities/chicago" },
  { city: "San Francisco", country: "United States", region: "Americas", href: "/cities/san-francisco" },
  { city: "Toronto", country: "Canada", region: "Americas", href: "/cities/toronto" },
  { city: "Austin", country: "United States", region: "Americas", href: "/cities/austin" },
  { city: "Seattle", country: "United States", region: "Americas", href: "/cities/seattle" },
  { city: "Boston", country: "United States", region: "Americas", href: "/cities/boston" },
  { city: "Denver", country: "United States", region: "Americas", href: "/cities/denver" },
  { city: "Washington DC", country: "United States", region: "Americas", href: "/cities/washington-dc" },
  { city: "Atlanta", country: "United States", region: "Americas", href: "/cities/atlanta" },
  { city: "Nashville", country: "United States", region: "Americas", href: "/cities/nashville" },
  { city: "Dallas", country: "United States", region: "Americas", href: "/cities/dallas" },
  { city: "Houston", country: "United States", region: "Americas", href: "/cities/houston" },
  { city: "Philadelphia", country: "United States", region: "Americas", href: "/cities/philadelphia" },
  { city: "Portland", country: "United States", region: "Americas", href: "/cities/portland" },
  { city: "Minneapolis", country: "United States", region: "Americas", href: "/cities/minneapolis" },
  { city: "San Diego", country: "United States", region: "Americas", href: "/cities/san-diego" },
  { city: "Phoenix", country: "United States", region: "Americas", href: "/cities/phoenix" },
  { city: "Charlotte", country: "United States", region: "Americas", href: "/cities/charlotte" },
  { city: "Las Vegas", country: "United States", region: "Americas", href: "/cities/las-vegas" },
  { city: "New Orleans", country: "United States", region: "Americas", href: "/cities/new-orleans" },
  { city: "Salt Lake City", country: "United States", region: "Americas", href: "/cities/salt-lake-city" },
  { city: "Tampa", country: "United States", region: "Americas", href: "/cities/tampa" },
  { city: "Raleigh", country: "United States", region: "Americas", href: "/cities/raleigh" },
  { city: "Dubai", country: "United Arab Emirates", region: "Middle East & Asia", href: "/cities/dubai" },
  { city: "Singapore", country: "Singapore", region: "Middle East & Asia", href: "/cities/singapore" },
  { city: "Hong Kong", country: "Hong Kong SAR", region: "Middle East & Asia", href: "/cities/hong-kong" },
  { city: "Tokyo", country: "Japan", region: "Middle East & Asia", href: "/cities/tokyo" },
  { city: "Sydney", country: "Australia", region: "Oceania", href: "/cities/sydney" },
  { city: "Melbourne", country: "Australia", region: "Oceania", href: "/cities/melbourne" },
];

const REGIONS = ["Europe", "Americas", "Middle East & Asia", "Oceania"];

const citiesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://pilatescollectiveclub.com/cities/#webpage",
      "url": "https://pilatescollectiveclub.com/cities",
      "name": "Pilates Studio Guides by City",
      "description": "Curated guides to the best Pilates studios in 45 cities worldwide.",
      "isPartOf": { "@id": "https://pilatescollectiveclub.com/#website" },
      "inLanguage": "en-US",
    },
    {
      "@type": "ItemList",
      "name": "Pilates City Guides",
      "url": "https://pilatescollectiveclub.com/cities",
      "numberOfItems": CITIES.length,
      "itemListElement": CITIES.map((c, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "url": `https://pilatescollectiveclub.com${c.href}`,
        "name": `Pilates Studios in ${c.city}`,
      })),
    },
  ],
};

export default function CitiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citiesJsonLd) }} />
      <Header />
      <main className="pt-20" style={{ backgroundColor: "#fcf9f8", minHeight: "100vh" }}>

        {/* Hero */}
        <section className="px-6 pt-16 pb-12">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
              City Guides
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Studios worldwide.
            </h1>
            <p className="text-lg max-w-xl" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Curated picks in {CITIES.length} cities across the US and worldwide — the studios worth booking, with advice on what to expect before you arrive.
            </p>
          </div>
        </section>

        {/* Cities by region */}
        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto space-y-16">
            {REGIONS.map((region) => {
              const regionCities = CITIES.filter((c) => c.region === region);
              return (
                <div key={region}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-8 h-px" style={{ backgroundColor: "#d9c2ba" }} />
                    <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
                      {region}
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {regionCities.map((c) => (
                      <Link key={c.href} href={c.href} style={{ textDecoration: "none" }}>
                        <div
                          className="group flex items-center justify-between px-6 py-5 rounded-xl"
                          style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.4)", transition: "border-color 0.2s" }}
                        >
                          <div>
                            <p className="font-semibold mb-0.5 group-hover:text-[#8b4a31] transition-colors" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif", fontSize: "17px" }}>
                              {c.city}
                            </p>
                            <p className="text-xs" style={{ color: "#9a9490", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
                              {c.country}
                            </p>
                          </div>
                          <span style={{ color: "#c5a882", fontSize: "18px" }}>→</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
