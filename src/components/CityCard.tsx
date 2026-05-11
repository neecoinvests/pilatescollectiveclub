import Link from "next/link";
import Image from "next/image";

interface CityCardProps {
  city: string;
  country: string;
  href: string;
  studioCount?: number;
}

const cityImages: Record<string, string> = {
  Zurich: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
  London: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
  Paris: "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=800&q=80",
  Geneva: "https://images.unsplash.com/photo-1537961048527-c838686bac4e?auto=format&fit=crop&w=800&q=80",
  Lausanne: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
  "New York": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80",
  "Los Angeles": "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=800&q=80",
  Barcelona: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80",
  Amsterdam: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=800&q=80",
  Berlin: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80",
};

export default function CityCard({ city, country, href, studioCount }: CityCardProps) {
  const imageUrl = cityImages[city];

  return (
    <Link href={href} className="group block">
      <div
        className="relative rounded-2xl overflow-hidden aspect-[4/5] transition-all duration-300 group-hover:shadow-lg"
        style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.07)" }}
      >
        {/* Background */}
        {imageUrl ? (
          <div className="absolute inset-0">
            <Image
              src={imageUrl}
              alt={city}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ filter: "brightness(0.85)" }}
            />
          </div>
        ) : (
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            style={{ background: "linear-gradient(135deg, #e4e2e1 0%, #d9c2ba 100%)" }}
          />
        )}

        {/* Subtle overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: "rgba(139, 74, 49, 0.08)" }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div
            className="rounded-xl p-4"
            style={{ backgroundColor: "rgba(252, 249, 248, 0.92)" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-0.5"
              style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}
            >
              {country}
            </p>
            <h3
              className="text-xl font-semibold leading-tight"
              style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
            >
              {city}
            </h3>
            {studioCount !== undefined && (
              <p
                className="text-xs mt-1"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                {studioCount} curated studios
              </p>
            )}
          </div>
        </div>

        {/* Arrow badge */}
        <div
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0"
          style={{ backgroundColor: "#8b4a31" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
