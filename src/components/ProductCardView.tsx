"use client";

import Image from "next/image";

interface ProductCardProps {
  name: string;
  description: string;
  price?: string;
  affiliateUrl?: string;
  imageUrl?: string;
  /** Square product photo (e.g. an Amazon image URL), shown beside the text on desktop and above it on mobile. */
  productImageUrl?: string;
  ctaLabel?: string;
  /** Description containing inline HTML (bold, links) from the page's own copy. */
  descriptionHtml?: string;
}

export default function ProductCardView({ name, description, price, affiliateUrl = "#", imageUrl, productImageUrl, ctaLabel, descriptionHtml }: ProductCardProps) {
  const buttonLabel = ctaLabel ?? (/amazon\.[a-z.]+\//.test(affiliateUrl) ? "Shop on Amazon" : "Shop Direct");
  const linkRel = /amazon\./i.test(affiliateUrl) ? "noopener noreferrer nofollow sponsored" : "noopener noreferrer nofollow";
  if (productImageUrl) {
    return (
      // Container query: photo beside the text when the card is wide (single-column lists), above it in narrow grid cells.
      <div className="@container h-full" style={{ borderTop: "1px solid #ede9e3", paddingTop: "24px", paddingBottom: "28px" }}>
      <div className="flex flex-col @lg:flex-row @lg:items-start gap-6 @lg:gap-8 h-full">
        <a
          href={affiliateUrl}
          target="_blank"
          rel={linkRel}
          aria-label={`${name} on Amazon`}
          className="block relative w-full max-w-[280px] mx-auto @lg:mx-0 @lg:w-[200px] @lg:max-w-none shrink-0 aspect-square"
          style={{ backgroundColor: "#ffffff", border: "1px solid #ede9e3" }}
        >
          <Image
            src={productImageUrl}
            alt={name}
            fill
            unoptimized
            sizes="280px"
            className="object-contain"
            style={{ padding: "14px" }}
          />
        </a>
        <div className="flex-1 min-w-0 flex flex-col">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", marginBottom: "10px" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 400, color: "#0a0a0a", lineHeight: 1.2, margin: 0 }}>
              {name}
            </h3>
            {price && (
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "12px", fontWeight: 400, color: "#c5a882", whiteSpace: "nowrap", textAlign: "right", letterSpacing: "0.05em" }}>
                {price}
              </span>
            )}
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "#6b6560", lineHeight: 1.75, marginBottom: "24px", flex: 1 }} dangerouslySetInnerHTML={descriptionHtml ? { __html: descriptionHtml } : undefined}>
            {descriptionHtml ? null : description}
          </p>
          <a
            href={affiliateUrl}
            target="_blank"
            rel={linkRel}
            style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "14px 20px", textAlign: "center", transition: "background-color 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#c5a882"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#0a0a0a"; }}
          >
            {buttonLabel}
          </a>
        </div>
      </div>
      </div>
    );
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {imageUrl && (
        <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", marginBottom: "0", backgroundColor: "#f0ece6" }}>
          <Image
            src={imageUrl}
            alt={`${name}: Pilates equipment`}
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
              whiteSpace: price.length > 16 ? "normal" : "nowrap",
              maxWidth: price.length > 16 ? "45%" : undefined,
              textAlign: "right",
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
        }} dangerouslySetInnerHTML={descriptionHtml ? { __html: descriptionHtml } : undefined}>
          {descriptionHtml ? null : description}
        </p>

        <a
          href={affiliateUrl}
          target="_blank"
          rel={/amazon\./i.test(affiliateUrl) ? "noopener noreferrer nofollow sponsored" : "noopener noreferrer nofollow"}
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
          {buttonLabel}
        </a>
      </div>
    </div>
  );
}
