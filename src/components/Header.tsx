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

const SHOP_CATEGORIES = [
  {
    label: "Reformers",
    links: [
      { label: "Best Home Reformers", href: "/blog/best-home-pilates-reformer" },
      { label: "Best for Beginners", href: "/blog/best-pilates-reformer-for-beginners" },
      { label: "Under $500", href: "/blog/best-pilates-reformer-under-500" },
      { label: "Under $1,000", href: "/blog/best-pilates-reformer-under-1000" },
      { label: "Under $2,000", href: "/blog/best-pilates-reformer-under-2000" },
      { label: "Luxury Reformers", href: "/blog/best-luxury-pilates-reformer" },
      { label: "Foldable Reformers", href: "/blog/best-foldable-pilates-reformer" },
      { label: "Mini Reformers", href: "/blog/best-mini-pilates-reformer" },
      { label: "For Small Spaces", href: "/blog/best-pilates-reformer-for-small-spaces" },
      { label: "For Tall People", href: "/blog/best-pilates-reformer-for-tall-people" },
    ],
  },
  {
    label: "Equipment",
    links: [
      { label: "Home Equipment Guide", href: "/blog/best-pilates-equipment-for-home-practice" },
      { label: "Pilates Mat", href: "/blog/best-pilates-mat" },
      { label: "Luxury Mat", href: "/blog/best-luxury-pilates-mat" },
      { label: "Pilates Ring", href: "/blog/best-pilates-ring" },
      { label: "Pilates Ball", href: "/blog/best-pilates-ball" },
      { label: "Foam Roller", href: "/blog/best-pilates-foam-roller" },
      { label: "Resistance Bands", href: "/blog/best-pilates-resistance-bands" },
      { label: "Pilates Chair", href: "/blog/best-pilates-chair" },
      { label: "Pilates Barrel", href: "/blog/best-pilates-barrel" },
      { label: "Pilates Cadillac", href: "/blog/best-pilates-cadillac" },
    ],
  },
  {
    label: "Clothing",
    links: [
      { label: "Pilates Leggings", href: "/blog/best-pilates-leggings" },
      { label: "High-Waist Leggings", href: "/blog/best-high-waist-pilates-leggings" },
      { label: "Luxury Leggings", href: "/blog/best-luxury-pilates-leggings" },
      { label: "Pilates Shorts", href: "/blog/best-pilates-shorts" },
      { label: "Sports Bras", href: "/blog/best-pilates-sports-bra" },
      { label: "Seamless Bras", href: "/blog/best-pilates-seamless-sports-bra" },
      { label: "Tank Tops", href: "/blog/best-pilates-tank-tops" },
      { label: "T-Shirts", href: "/blog/best-pilates-tshirts" },
      { label: "Hoodies", href: "/blog/best-pilates-hoodie" },
      { label: "Grip Socks", href: "/blog/best-pilates-grip-socks" },
    ],
  },
  {
    label: "Bags & Accessories",
    links: [
      { label: "Designer Pilates Bags", href: "/blog/best-designer-pilates-bag" },
      { label: "Studio Bags (Women)", href: "/blog/best-pilates-studio-bag-women" },
      { label: "Mat Tote Bag", href: "/blog/best-pilates-mat-tote" },
      { label: "Tote Bag", href: "/blog/best-pilates-tote-bag" },
      { label: "Luxury Accessories", href: "/blog/best-luxury-pilates-accessories" },
      { label: "Starter Kit", href: "/blog/best-pilates-starter-kit" },
      { label: "Reformer Accessories", href: "/blog/best-pilates-reformer-accessories" },
      { label: "Ankle Weights", href: "/blog/best-pilates-ankle-weights" },
      { label: "Exercise Sliders", href: "/blog/best-exercise-sliders-for-pilates" },
      { label: "Stretch Strap", href: "/blog/best-stretch-strap-for-pilates" },
    ],
  },
  {
    label: "Lagree & Spin",
    links: [
      { label: "Best Megaformer", href: "/blog/best-megaformer-machine" },
      { label: "Lagree Springs & Cables", href: "/blog/best-lagree-resistance-springs-cables" },
      { label: "Lagree Carriage Handles", href: "/blog/best-lagree-carriage-handles" },
      { label: "Indoor Spin Bike", href: "/blog/best-indoor-spin-bike-for-home-studio" },
      { label: "Cycling Shoes", href: "/blog/best-cycling-shoes-for-spin-class" },
      { label: "Cycling Gloves", href: "/blog/best-cycling-gloves-for-spin-class" },
      { label: "Padded Shorts", href: "/blog/best-padded-cycling-shorts-for-spin" },
      { label: "Spin Floor Mat", href: "/blog/best-floor-mat-for-spin-bike" },
      { label: "Bike Computer", href: "/blog/best-bike-computer-for-indoor-cycling" },
      { label: "Water Bottle Holder", href: "/blog/best-water-bottle-holder-for-spin-bike" },
    ],
  },
  {
    label: "Gift Guides",
    links: [
      { label: "Gifts for Her (Girlfriend)", href: "/blog/best-pilates-gifts-for-girlfriend" },
      { label: "Luxury Pilates Gifts", href: "/blog/best-luxury-pilates-gifts" },
      { label: "Gifts Under $100", href: "/blog/best-pilates-gifts-under-100" },
      { label: "Gifts for Beginners", href: "/blog/best-pilates-gifts-for-beginners" },
      { label: "Gifts Under $50", href: "/blog/best-pilates-gifts-under-50" },
      { label: "Best Pilates Leggings", href: "/blog/best-pilates-leggings" },
      { label: "Best Grip Socks", href: "/blog/best-pilates-grip-socks" },
      { label: "Best Pilates Mat", href: "/blog/best-pilates-mat" },
      { label: "Best Starter Kit", href: "/blog/best-pilates-starter-kit" },
      { label: "All Equipment →", href: "/blog?category=Equipment" },
    ],
  },
  {
    label: "Tech & Wellness",
    links: [
      { label: "Smart Watch", href: "/blog/best-smartwatch-for-pilates" },
      { label: "Smart Ring", href: "/blog/best-smart-ring-for-pilates" },
      { label: "Heart Rate Monitor", href: "/blog/best-heart-rate-monitor-for-pilates-and-spin" },
      { label: "Massage Gun", href: "/blog/best-massage-gun-for-pilates" },
      { label: "Vibrating Foam Roller", href: "/blog/best-vibrating-foam-roller-for-pilates" },
      { label: "Red Light Therapy", href: "/blog/best-red-light-therapy-device-for-pilates" },
      { label: "Personal Fan", href: "/blog/best-personal-fan-for-home-gym" },
      { label: "Moisture-Wicking Tops", href: "/blog/best-moisture-wicking-top-for-pilates-and-spin" },
      { label: "Water Bottle", href: "/blog/best-pilates-water-bottle" },
      { label: "All Tech & Devices", href: "/blog?category=Tech+%26+Devices" },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [shopHovered, setShopHovered] = useState(false);

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

        {/* Desktop nav */}
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

          {/* Shop Gear mega-dropdown trigger */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setShopHovered(true)}
            onMouseLeave={() => setShopHovered(false)}
          >
            <button
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#ffffff",
                textDecoration: "none",
                backgroundColor: shopHovered ? "#7a3f29" : "#8b4a31",
                padding: "10px 20px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transition: "background-color 0.2s",
                border: "none",
                cursor: "pointer",
              }}
            >
              Shop Gear
              <span style={{ fontSize: "9px", transition: "transform 0.2s", display: "inline-block", transform: shopHovered ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
            </button>

            {/* Mega dropdown */}
            {shopHovered && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 1px)",
                  right: 0,
                  width: "min(860px, 90vw)",
                  backgroundColor: "#ffffff",
                  borderTop: "2px solid #8b4a31",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                  padding: "32px",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                  gap: "28px 32px",
                }}
              >
                {SHOP_CATEGORIES.map((cat) => (
                  <div key={cat.label}>
                    <p style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "9px",
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#8b4a31",
                      marginBottom: "12px",
                      marginTop: 0,
                    }}>
                      {cat.label}
                    </p>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "7px" }}>
                      {cat.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "11px",
                              fontWeight: 400,
                              color: "#4a4540",
                              textDecoration: "none",
                              letterSpacing: "0.02em",
                              transition: "color 0.15s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#8b4a31")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#4a4540")}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Footer row */}
                <div style={{ gridColumn: "1 / -1", borderTop: "1px solid #ede9e3", paddingTop: "20px", display: "flex", gap: "24px", alignItems: "center" }}>
                  <Link
                    href="/blog?category=Equipment"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9490", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0a0a0a")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#9a9490")}
                  >
                    All Equipment →
                  </Link>
                  <Link
                    href="/blog?category=Clothing"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9490", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0a0a0a")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#9a9490")}
                  >
                    All Clothing →
                  </Link>
                  <Link
                    href="/blog?category=Studio+Essentials"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9490", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0a0a0a")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#9a9490")}
                  >
                    Studio Essentials →
                  </Link>
                  <Link
                    href="/blog?category=Lagree"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9490", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0a0a0a")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#9a9490")}
                  >
                    Lagree →
                  </Link>
                  <Link
                    href="/blog?category=Spinning"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9490", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0a0a0a")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#9a9490")}
                  >
                    Spinning →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
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
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{ backgroundColor: "#ffffff", borderTop: "1px solid #ede9e3" }}
          className="md:hidden px-8 py-10 flex flex-col gap-7"
        >
          {NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
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

          {/* Shop Gear accordion on mobile */}
          <div>
            <button
              onClick={() => setShopOpen(!shopOpen)}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#ffffff",
                backgroundColor: "#8b4a31",
                padding: "14px 20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                border: "none",
                cursor: "pointer",
                width: "100%",
                textAlign: "left",
              }}
            >
              Shop Gear
              <span style={{ marginLeft: "auto", fontSize: "12px" }}>{shopOpen ? "▴" : "▾"}</span>
            </button>

            {shopOpen && (
              <div style={{ backgroundColor: "#faf8f5", borderTop: "1px solid #ede9e3", padding: "20px 0" }}>
                {SHOP_CATEGORIES.map((cat) => (
                  <div key={cat.label} style={{ marginBottom: "20px", paddingLeft: "20px", paddingRight: "20px" }}>
                    <p style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "9px",
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#8b4a31",
                      marginBottom: "10px",
                      marginTop: 0,
                    }}>
                      {cat.label}
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                      {cat.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => { setMenuOpen(false); setShopOpen(false); }}
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "11px",
                            color: "#4a4540",
                            textDecoration: "none",
                            letterSpacing: "0.02em",
                          }}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                <div style={{ borderTop: "1px solid #ede9e3", marginTop: "8px", paddingTop: "16px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    { label: "All Equipment", href: "/blog?category=Equipment" },
                    { label: "All Clothing", href: "/blog?category=Clothing" },
                    { label: "Studio Essentials", href: "/blog?category=Studio+Essentials" },
                    { label: "Lagree", href: "/blog?category=Lagree" },
                    { label: "Spinning", href: "/blog?category=Spinning" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => { setMenuOpen(false); setShopOpen(false); }}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#0a0a0a",
                        textDecoration: "none",
                      }}
                    >
                      {link.label} →
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
