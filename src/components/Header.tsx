"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV = [
  { label: "Journal", href: "/blog" },
  { label: "Brands", href: "/brands" },
  { label: "Cities", href: "/cities" },
  { label: "About", href: "/#about" },
];

const SHOP_HREF = "/blog/best-pilates-equipment-for-home-practice";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(245,240,235,0.97)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid #ddd8d0",
      }}
    >
      <div className="pcc-header-inner max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <div className="pcc-logo" style={{ position: "relative", width: 210, height: 70, flexShrink: 0 }}>
            <Image
              src="/pictures/pcc-logo.png"
              alt="Pilates Collective Club"
              fill
              style={{ objectFit: "contain", objectPosition: "left center" }}
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#9a9490",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0a0a0a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9a9490")}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={SHOP_HREF}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#ffffff",
              textDecoration: "none",
              backgroundColor: "#8b4a31",
              padding: "10px 20px",
              display: "inline-block",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#7a3f29")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#8b4a31")}
          >
            Shop Gear →
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#0a0a0a",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div
          style={{
            backgroundColor: "#ffffff",
            borderTop: "1px solid #ede9e3",
          }}
          className="md:hidden px-8 py-10 flex flex-col gap-7"
        >
          {NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#0a0a0a",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={SHOP_HREF}
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#ffffff",
              textDecoration: "none",
              backgroundColor: "#8b4a31",
              padding: "14px 20px",
              display: "inline-block",
              alignSelf: "flex-start",
            }}
          >
            Shop Gear →
          </Link>
        </div>
      )}
    </header>
  );
}
