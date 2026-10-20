import Link from "next/link";
import type { ReactNode } from "react";

// Affiliate disclosure placed where the shopping starts (after the Quick Picks
// or just before the first product list), not in the page header.
export default function AffiliateNote({ children, className = "mb-10" }: { children?: ReactNode; className?: string }) {
  return (
    <p className={`text-[11px] leading-relaxed ${className}`} style={{ color: "#c4b8b3", fontFamily: "'Montserrat', sans-serif" }}>
      {children ?? "Some links on this page go to Amazon. As an Amazon Associate we earn from qualifying purchases, at no extra cost to you."}{" "}
      <Link href="/affiliate-disclosure" style={{ color: "#c4b8b3", textDecoration: "underline" }}>Affiliate disclosure</Link>
    </p>
  );
}
