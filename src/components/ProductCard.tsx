"use client";

import Image from "next/image";

interface ProductCardProps {
  name: string;
  description: string;
  price?: string;
  affiliateUrl?: string;
  imageUrl?: string;
}

export default function ProductCard({ name, description, price, affiliateUrl = "#", imageUrl }: ProductCardProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {imageUrl && (
        <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", marginBottom: "0", backgroundColor: "#f0ece6" }}>
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div style={{ borderTop: "1px solid #ede9e3", paddingTop: "24px", paddingBottom: "28px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", marginBottom: "10px" }}>
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
              color: "#c5a882",
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
          marginBottom: "24px",
          flex: 1,
        }}>
          {description}
        </p>

        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          style={{
            display: "block",
            fontFamily: "var(--font-sans)",
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#ffffff",
            textDecoration: "none",
            backgroundColor: "#0a0a0a",
            padding: "14px 20px",
            textAlign: "center",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#c5a882"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#0a0a0a"; }}
        >
          Shop on Amazon
        </a>
      </div>
    </div>
  );
}
