"use client";

interface StudioListingProps {
  number: string;
  name: string;
  neighborhood: string;
  priceLevel: string;
  review: string;
  address: string;
  bestFor: string;
  signatureClass: string;
  bookingTip: string;
  websiteUrl?: string;
}

export default function StudioListing({
  number, name, neighborhood, priceLevel, review, address, bestFor, signatureClass, bookingTip, websiteUrl,
}: StudioListingProps) {
  return (
    <article style={{ borderTop: "1px solid #ede9e3", paddingTop: "48px", paddingBottom: "48px" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "32px", marginBottom: "24px" }}>
        <span style={{
          fontFamily: "var(--font-serif)",
          fontSize: "60px",
          fontWeight: 300,
          color: "#ede9e3",
          lineHeight: 1,
          flexShrink: 0,
        }}>
          {number}
        </span>
        <div style={{ flex: 1 }}>
          <h2 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "28px",
            fontWeight: 400,
            color: "#0a0a0a",
            lineHeight: 1.1,
            marginBottom: "8px",
          }}>
            {name}
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 300, color: "#9a9490", letterSpacing: "0.05em" }}>
              {neighborhood}
            </span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 500, color: "#c5a882", letterSpacing: "0.1em" }}>
              {priceLevel}
            </span>
          </div>
        </div>
      </div>

      <p style={{
        fontFamily: "var(--font-sans)",
        fontSize: "15px",
        fontWeight: 300,
        color: "#3a3530",
        lineHeight: 1.8,
        marginBottom: "32px",
        maxWidth: "680px",
      }}>
        {review}
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "24px 40px",
        backgroundColor: "#f7f4f0",
        padding: "28px 32px",
        marginBottom: "28px",
      }}>
        <Detail label="Address" value={address} />
        <Detail label="Best For" value={bestFor} />
        <Detail label="Signature Class" value={signatureClass} />
        <Detail label="Booking Tip" value={bookingTip} />
      </div>

      <a
        href={websiteUrl || `https://www.google.com/search?q=${encodeURIComponent(name + " " + address)}`}
        target="_blank"
        rel="noopener noreferrer"
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
        Visit Website
      </a>
    </article>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt style={{
        fontFamily: "var(--font-sans)",
        fontSize: "10px",
        fontWeight: 500,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#9a9490",
        marginBottom: "4px",
      }}>
        {label}
      </dt>
      <dd style={{
        fontFamily: "var(--font-sans)",
        fontSize: "13px",
        fontWeight: 300,
        color: "#3a3530",
        lineHeight: 1.6,
      }}>
        {value}
      </dd>
    </div>
  );
}
