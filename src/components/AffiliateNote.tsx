import Link from "next/link";
import type { ReactNode } from "react";

// Affiliate disclosure placed where the shopping starts (after the Quick Picks
// or just before the first product list), not in the page header.
export default function AffiliateNote({ children, className = "mb-10" }: { children?: ReactNode; className?: string }) {
  return (
    <p className={`r-note ${className}`}>
      {children ?? "Some links on this page go to Amazon. As an Amazon Associate we earn from qualifying purchases, at no extra cost to you."}{" "}
      <Link href="/affiliate-disclosure">Affiliate disclosure</Link>
    </p>
  );
}
