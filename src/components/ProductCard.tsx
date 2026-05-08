import Badge from "./Badge";

interface ProductCardProps {
  name: string;
  description: string;
  price?: string;
  affiliateUrl?: string;
  imageAlt?: string;
  badge?: boolean;
}

export default function ProductCard({
  name,
  description,
  price,
  affiliateUrl = "#",
  imageAlt,
  badge = true,
}: ProductCardProps) {
  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col"
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid rgba(217, 194, 186, 0.4)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      {/* Image placeholder */}
      <div className="relative overflow-hidden aspect-video">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #e4e2e1 0%, #f0eded 50%, #d9c2ba 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-sm font-medium"
            style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}
          >
            {imageAlt || name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className="text-base font-semibold leading-snug"
            style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
          >
            {name}
          </h3>
          {badge && <Badge variant="affiliate" />}
        </div>

        <p
          className="text-sm leading-relaxed mb-4 flex-1"
          style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
        >
          {description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          {price && (
            <span
              className="text-base font-semibold"
              style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
            >
              {price}
            </span>
          )}
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={`inline-block px-5 py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90 ${!price ? "ml-auto" : ""}`}
            style={{
              backgroundColor: "#8b4a31",
              color: "#ffffff",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Shop Now →
          </a>
        </div>
      </div>
    </div>
  );
}
