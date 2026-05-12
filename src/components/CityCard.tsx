import Link from "next/link";
import Image from "next/image";

interface CityCardProps {
  city: string;
  country: string;
  href: string;
  studioCount?: number;
}

const cityImages: Record<string, string> = {
  Zurich: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80",
  London: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
  Paris: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800&q=80",
  Geneva: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
  Lausanne: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&q=80",
  "New York": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
  "Los Angeles": "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&q=80",
  Barcelona: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80",
  Amsterdam: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80",
  Berlin: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80",
};

export default function CityCard({ city, country, href, studioCount }: CityCardProps) {
  const imageUrl = cityImages[city];

  return (
    <Link href={href} className="group block" style={{ textDecoration: "none" }}>
      <div style={{ position: "relative", overflow: "hidden", aspectRatio: "3/4" }}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={city}
            fill
            className="object-cover"
            style={{ transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)", transform: "scale(1)" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ) : (
          <div style={{ position: "absolute", inset: 0, backgroundColor: "#ede9e3" }} />
        )}

        {/* Gradient overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.2) 50%, transparent 100%)",
        }} />

        {/* Text */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 20px" }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "10px",
            fontWeight: 400,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "4px",
          }}>
            {country}
          </p>
          <h3 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "22px",
            fontWeight: 400,
            color: "#ffffff",
            lineHeight: 1.1,
            margin: 0,
          }}>
            {city}
          </h3>
          {studioCount !== undefined && (
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "10px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.5)",
              marginTop: "4px",
              letterSpacing: "0.05em",
            }}>
              {studioCount} curated studios
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
