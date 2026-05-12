"use client";

interface ProductCardProps {
  name: string;
  description: string;
  price?: string;
  affiliateUrl?: string;
  imageAlt?: string;
  imageUrl?: string;
}

export default function ProductCard({ name, description, price, affiliateUrl = "#" }: ProductCardProps) {
  return (
    <div style={{ borderTop: "1px solid #ede9e3", paddingTop: "28px", paddingBottom: "28px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", marginBottom: "12px" }}>
        <h3 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "20px",
          fontWeight: 400,
          color: "#0a0a0a",
          lineHeight: 1.2,
          margin: 0,
        }}>
          {name}
        </h3>
        {price && (
          <span style={{
            fontFamily: "var(--font-sans)",
            fontSize: "12px",
            fontWeight: 400,
            color: "#9a9490",
            whiteSpace: "nowrap",
            letterSpacing: "0.05em",
          }}>
            {price}
          </span>
        )}
      </div>

      <p style={{
        fontFamily: "var(--font-sans)",
        fontSize: "13px",
        fontWeight: 300,
        color: "#6b6560",
        lineHeight: 1.75,
        marginBottom: "18px",
      }}>
        {description}
      </p>

      <a
        href={affiliateUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        style={{
          display: "inline-block",
          fontFamily: "var(--font-sans)",
          fontSize: "10px",
          fontWeight: 500,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#0a0a0a",
          textDecoration: "none",
          borderBottom: "1px solid #0a0a0a",
          paddingBottom: "2px",
          transition: "color 0.2s, border-color 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#c5a882";
          e.currentTarget.style.borderColor = "#c5a882";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#0a0a0a";
          e.currentTarget.style.borderColor = "#0a0a0a";
        }}
      >
        Shop on Amazon
      </a>
    </div>
  );
}
