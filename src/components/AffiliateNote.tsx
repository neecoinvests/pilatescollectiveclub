import Link from "next/link";
import type { ReactNode } from "react";

// Affiliate disclosure placed where the shopping starts (after the Quick Picks
// or just before the first product list), not in the page header.
export default function AffiliateNote({ children, className = "mb-10" }: { children?: ReactNode; className?: string }) {
  return (
    <p className={`text-xs leading-relaxed ${className}`} style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
      {children ?? "Some links on this page go to Amazon, where we earn a small commission on qualifying purchases at no extra cost to you."}{" "}
      <Link href="/affiliate-disclosure" style={{ color: "#8b4a31", textDecoration: "underline" }}>Affiliate disclosure</Link>
    </p>
  );
}
