import Link from "next/link";

interface CityCardProps {
  city: string;
  country: string;
  href: string;
  studioCount?: number;
}

const cityGradients: Record<string, string> = {
  Zurich: "linear-gradient(135deg, #e8e2d6 0%, #cbc6ba 100%)",
  London: "linear-gradient(135deg, #e4e2e1 0%, #d9c2ba 100%)",
  "New York": "linear-gradient(135deg, #f0eded 0%, #dcd9d9 100%)",
  Paris: "linear-gradient(135deg, #ffdbce 0%, #d9c2ba 100%)",
};

export default function CityCard({ city, country, href, studioCount }: CityCardProps) {
  const gradient = cityGradients[city] || "linear-gradient(135deg, #e4e2e1 0%, #d9c2ba 100%)";

  return (
    <Link href={href} className="group block">
      <div
        className="relative rounded-2xl overflow-hidden aspect-[4/5] transition-all duration-300 group-hover:shadow-lg"
        style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.07)" }}
      >
        {/* Background */}
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
          style={{ background: gradient }}
        />

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
