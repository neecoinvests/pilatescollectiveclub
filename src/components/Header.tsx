"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import SiteSearch from "@/components/SiteSearch";

const NAV = [
  { label: "Journal", href: "/blog" },
  { label: "Brands", href: "/brands" },
  { label: "Cities", href: "/cities" },
  { label: "About", href: "/#about" },
];

type ShopLink = { label: string; href: string };
type ShopCategory = {
  label: string;
  groups: { label: string; links: ShopLink[] }[];
  featured: { title: string; href: string; image: string };
  all?: ShopLink;
};

const SHOP_CATEGORIES: ShopCategory[] = [
  {
    label: "Deals",
    groups: [
      {
        label: "Black Friday",
        links: [
          { label: "Black Friday Deals Hub", href: "/blog/black-friday-pilates-deals" },
          { label: "Reformer Deals", href: "/blog/black-friday-pilates-reformer-deals" },
          { label: "Studio Reformer Deals", href: "/blog/black-friday-cyber-monday-studio-reformer-deals" },
          { label: "Recovery Deals", href: "/blog/black-friday-cyber-monday-recovery-deals" },
          { label: "Pilates Clothing Deals", href: "/blog/black-friday-pilates-clothing-deals" },
          { label: "Pilates Gifts Under $50", href: "/blog/black-friday-pilates-gifts-under-50" },
          { label: "Equipment Price Guide", href: "/blog/pilates-equipment-black-friday-guide" },
          { label: "Lagree Deals", href: "/blog/black-friday-lagree-deals" },
          { label: "Lagree Clothing & Gear", href: "/blog/black-friday-lagree-clothing-gear" },
          { label: "Spin & Cycling Deals", href: "/blog/black-friday-spin-deals" },
        ],
      },
      {
        label: "Cyber Monday",
        links: [
          { label: "Cyber Monday Deals Hub", href: "/blog/cyber-monday-pilates-deals" },
          { label: "Reformer Deals", href: "/blog/cyber-monday-pilates-reformer-deals" },
          { label: "Equipment Deals", href: "/blog/cyber-monday-pilates-equipment-deals" },
          { label: "Clothing Deals", href: "/blog/cyber-monday-pilates-clothing-deals" },
          { label: "Gift Deals", href: "/blog/cyber-monday-pilates-gift-deals" },
        ],
      },
    ],
    featured: { title: "Pilates Black Friday Deals 2026: The Watchlist", href: "/blog/black-friday-pilates-deals", image: "/pictures/stitch-luxury-studio-wide.png" },
    all: { label: "Cyber Monday deals", href: "/blog/cyber-monday-pilates-deals" },
  },
  {
    label: "Reformers",
    groups: [
      {
        label: "By need",
        links: [
          { label: "Best Home Reformers", href: "/blog/best-home-pilates-reformer" },
          { label: "Best for Beginners", href: "/blog/best-pilates-reformer-for-beginners" },
          { label: "Foldable Reformers", href: "/blog/best-foldable-pilates-reformer" },
          { label: "Mini Reformers", href: "/blog/best-mini-pilates-reformer" },
          { label: "For Small Spaces", href: "/blog/best-pilates-reformer-for-small-spaces" },
          { label: "For Tall People", href: "/blog/best-pilates-reformer-for-tall-people" },
          { label: "Wood vs Aluminium", href: "/blog/wood-vs-aluminium-pilates-reformer" },
          { label: "Reformer Accessories", href: "/blog/best-pilates-reformer-accessories" },
        ],
      },
      {
        label: "By budget",
        links: [
          { label: "Under $500", href: "/blog/best-pilates-reformer-under-500" },
          { label: "Under $1,000", href: "/blog/best-pilates-reformer-under-1000" },
          { label: "Under $2,000", href: "/blog/best-pilates-reformer-under-2000" },
          { label: "Under $3,000", href: "/blog/best-pilates-reformer-under-3000" },
          { label: "Under $5,000", href: "/blog/best-pilates-reformer-under-5000" },
          { label: "Luxury Reformers", href: "/blog/best-luxury-pilates-reformer" },
        ],
      },
    ],
    featured: { title: "Best Home Pilates Reformer (2026): $359 to $4,700 Compared", href: "/blog/best-home-pilates-reformer", image: "/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" },
    all: { label: "All equipment", href: "/blog?category=Equipment" },
  },
  {
    label: "Equipment",
    groups: [
      {
        label: "Mat & props",
        links: [
          { label: "Pilates Mat", href: "/blog/best-pilates-mat" },
          { label: "Luxury Mat", href: "/blog/best-luxury-pilates-mat" },
          { label: "Pilates Ring", href: "/blog/best-pilates-ring" },
          { label: "Pilates Ball", href: "/blog/best-pilates-ball" },
          { label: "Foam Roller", href: "/blog/best-pilates-foam-roller" },
          { label: "Resistance Bands", href: "/blog/best-pilates-resistance-bands" },
          { label: "Ankle Weights", href: "/blog/best-pilates-ankle-weights" },
          { label: "Exercise Sliders", href: "/blog/best-exercise-sliders-for-pilates" },
          { label: "Stretch Strap", href: "/blog/best-stretch-strap-for-pilates" },
        ],
      },
      {
        label: "Studio apparatus",
        links: [
          { label: "Home Equipment Guide", href: "/blog/best-pilates-equipment-for-home-practice" },
          { label: "Pilates Chair", href: "/blog/best-pilates-chair" },
          { label: "Pilates Barrel", href: "/blog/best-pilates-barrel" },
          { label: "Pilates Cadillac", href: "/blog/best-pilates-cadillac" },
        ],
      },
    ],
    featured: { title: "Best Pilates Equipment for Home Practice (2026)", href: "/blog/best-pilates-equipment-for-home-practice", image: "/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg" },
    all: { label: "All equipment", href: "/blog?category=Equipment" },
  },
  {
    label: "Clothing",
    groups: [
      {
        label: "Leggings & shorts",
        links: [
          { label: "Pilates Leggings", href: "/blog/best-pilates-leggings" },
          { label: "High-Waist Leggings", href: "/blog/best-high-waist-pilates-leggings" },
          { label: "Luxury Leggings", href: "/blog/best-luxury-pilates-leggings" },
          { label: "Pilates Shorts", href: "/blog/best-pilates-shorts" },
        ],
      },
      {
        label: "Tops & layers",
        links: [
          { label: "Sports Bras", href: "/blog/best-pilates-sports-bra" },
          { label: "Seamless Bras", href: "/blog/best-pilates-seamless-sports-bra" },
          { label: "Tank Tops", href: "/blog/best-pilates-tank-tops" },
          { label: "T-Shirts", href: "/blog/best-pilates-tshirts" },
          { label: "Hoodies", href: "/blog/best-pilates-hoodie" },
          { label: "Moisture-Wicking Tops", href: "/blog/best-moisture-wicking-top-for-pilates-and-spin" },
        ],
      },
      {
        label: "Grip",
        links: [
          { label: "Grip Socks", href: "/blog/best-pilates-grip-socks" },
          { label: "Pilates Gloves", href: "/blog/best-pilates-gloves" },
        ],
      },
    ],
    featured: { title: "Best Pilates Leggings (2026): 5 Picks for Reformer & Mat", href: "/blog/best-pilates-leggings", image: "/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg" },
    all: { label: "All clothing", href: "/blog?category=Clothing" },
  },
  {
    label: "Bags & Essentials",
    groups: [
      {
        label: "Essentials lists",
        links: [
          { label: "Pilates Essentials (Full List)", href: "/blog/pilates-essentials" },
          { label: "Reformer Essentials", href: "/blog/reformer-pilates-essentials" },
          { label: "Pilates Princess Essentials", href: "/blog/pilates-princess-essentials" },
          { label: "Starter Kit", href: "/blog/best-pilates-starter-kit" },
          { label: "Luxury Accessories", href: "/blog/best-luxury-pilates-accessories" },
          { label: "Water Bottle", href: "/blog/best-pilates-water-bottle" },
        ],
      },
      {
        label: "Bags",
        links: [
          { label: "Designer Pilates Bags", href: "/blog/best-designer-pilates-bag" },
          { label: "Studio Bags (Women)", href: "/blog/best-pilates-studio-bag-women" },
          { label: "Mat Tote Bag", href: "/blog/best-pilates-mat-tote" },
          { label: "Tote Bag", href: "/blog/best-pilates-tote-bag" },
        ],
      },
    ],
    featured: { title: "Pilates Essentials (2026): Every Must-Have in One List", href: "/blog/pilates-essentials", image: "/pictures/stitch-pilates-essentials-logbook.png" },
    all: { label: "Studio essentials", href: "/blog?category=Studio+Essentials" },
  },
  {
    label: "Lagree",
    groups: [
      {
        label: "Learn",
        links: [
          { label: "Lagree Fitness (Brand Guide)", href: "/blog/lagree-fitness" },
          { label: "Lagree for Beginners", href: "/blog/lagree-for-beginners" },
          { label: "Lagree Exercises", href: "/blog/lagree-exercises" },
          { label: "Lagree vs Solidcore", href: "/blog/lagree-vs-solidcore" },
          { label: "Lagree for Weight Loss", href: "/blog/lagree-for-weight-loss" },
          { label: "Lagree Calories Burned", href: "/blog/how-many-calories-does-lagree-burn" },
          { label: "Sore After Lagree", href: "/blog/lagree-recovery" },
          { label: "What to Wear to Lagree", href: "/blog/what-to-wear-to-lagree" },
          { label: "Lagree for Men", href: "/blog/lagree-for-men" },
        ],
      },
      {
        label: "Machines",
        links: [
          { label: "Lagree Micro Review", href: "/blog/lagree-micro-review" },
          { label: "Lagree Micro vs Megaformer", href: "/blog/lagree-micro-vs-megaformer" },
          { label: "Best Megaformer", href: "/blog/best-megaformer-machine" },
          { label: "Best Reformer for Lagree at Home", href: "/blog/best-reformer-for-lagree-at-home" },
          { label: "Lagree Springs & Cables", href: "/blog/best-lagree-resistance-springs-cables" },
          { label: "Lagree Carriage Handles", href: "/blog/best-lagree-carriage-handles" },
        ],
      },
      {
        label: "Gear",
        links: [
          { label: "Lagree Essentials", href: "/blog/lagree-essentials" },
          { label: "Lagree Socks", href: "/blog/best-lagree-grip-socks" },
          { label: "Lagree Gloves", href: "/blog/best-lagree-gloves" },
          { label: "Lagree Tops", href: "/blog/best-lagree-tops" },
          { label: "Lagree Shirts & Hoodies", href: "/blog/best-lagree-shirts" },
          { label: "Lagree Jacket", href: "/blog/best-lagree-jacket" },
          { label: "Lagree Workout Sets", href: "/blog/best-lagree-workout-sets" },
          { label: "Lagree Headbands", href: "/blog/best-headband-for-lagree" },
          { label: "Lagree Bag", href: "/blog/best-lagree-bag" },
          { label: "Lagree Water Bottle", href: "/blog/best-water-bottle-for-lagree" },
          { label: "Lagree Gifts", href: "/blog/best-lagree-gifts" },
        ],
      },
    ],
    featured: { title: "Lagree Micro Review (2026): Specs, Springs & Real Cost", href: "/blog/lagree-micro-review", image: "/pictures/stitch-reformer-spring-detail.png" },
    all: { label: "All Lagree", href: "/blog?category=Lagree" },
  },
  {
    label: "Spin",
    groups: [
      {
        label: "Home setup",
        links: [
          { label: "Indoor Spin Bike", href: "/blog/best-indoor-spin-bike-for-home-studio" },
          { label: "Spin Floor Mat", href: "/blog/best-floor-mat-for-spin-bike" },
          { label: "Bike Computer", href: "/blog/best-bike-computer-for-indoor-cycling" },
          { label: "Water Bottle Holder", href: "/blog/best-water-bottle-holder-for-spin-bike" },
        ],
      },
      {
        label: "What to wear",
        links: [
          { label: "Cycling Shoes", href: "/blog/best-cycling-shoes-for-spin-class" },
          { label: "Cycling Gloves", href: "/blog/best-cycling-gloves-for-spin-class" },
          { label: "Padded Shorts", href: "/blog/best-padded-cycling-shorts-for-spin" },
        ],
      },
    ],
    featured: { title: "Best Indoor Spin Bike for Home Studios (2026)", href: "/blog/best-indoor-spin-bike-for-home-studio", image: "/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg" },
    all: { label: "All spinning", href: "/blog?category=Spinning" },
  },
  {
    label: "Gift Guides",
    groups: [
      {
        label: "Christmas",
        links: [
          { label: "Christmas Gifts", href: "/blog/best-pilates-christmas-gifts" },
          { label: "Gifts for Her", href: "/blog/best-pilates-christmas-gifts-for-her" },
          { label: "Reformer Pilates Gifts", href: "/blog/reformer-pilates-christmas-gifts" },
          { label: "Stocking Stuffers", href: "/blog/pilates-christmas-stocking-stuffers" },
          { label: "Secret Santa Gifts", href: "/blog/pilates-secret-santa-christmas-gifts" },
          { label: "Luxury Recovery Gifts", href: "/blog/luxury-recovery-christmas-gifts-for-pilates" },
          { label: "Fitness Tech Gifts", href: "/blog/fitness-tech-christmas-gifts-for-pilates-lovers" },
          { label: "Luxury Gifts for Him", href: "/blog/luxury-fitness-christmas-gifts-for-him" },
          { label: "Home Studio Gift", href: "/blog/home-pilates-studio-christmas-gift" },
          { label: "Home Machine Gifts", href: "/blog/best-home-workout-machine-christmas-gift" },
          { label: "Lagree Micro Gift", href: "/blog/lagree-micro-christmas-gift" },
          { label: "Gifts Over $500", href: "/blog/pilates-christmas-gifts-over-500" },
        ],
      },
      {
        label: "For someone",
        links: [
          { label: "Gifts for Girlfriend", href: "/blog/best-pilates-gifts-for-girlfriend" },
          { label: "Gifts for Him", href: "/blog/best-pilates-gifts-for-him" },
          { label: "Gifts for Mom", href: "/blog/best-pilates-gifts-for-mom" },
          { label: "Gifts for Instructor", href: "/blog/best-pilates-gifts-for-pilates-instructor" },
          { label: "Gifts for Beginners", href: "/blog/best-pilates-gifts-for-beginners" },
        ],
      },
      {
        label: "By budget",
        links: [
          { label: "Gifts Under $50", href: "/blog/best-pilates-gifts-under-50" },
          { label: "Gifts Under $100", href: "/blog/best-pilates-gifts-under-100" },
          { label: "Gift Sets & Bundles", href: "/blog/best-pilates-gift-sets" },
          { label: "Luxury Gifts", href: "/blog/best-luxury-pilates-gifts" },
          { label: "Reformer as a Gift", href: "/blog/best-pilates-reformer-gift" },
          { label: "Reformer Gift Under $500", href: "/blog/best-pilates-reformer-gift-under-500" },
        ],
      },
    ],
    featured: { title: "Best Pilates Christmas Gifts (2026)", href: "/blog/best-pilates-christmas-gifts", image: "/pictures/stitch-studio-entryway.png" },
  },
  {
    label: "Tech & Recovery",
    groups: [
      {
        label: "Wearables",
        links: [
          { label: "Smart Watch", href: "/blog/best-smartwatch-for-pilates" },
          { label: "Smart Ring", href: "/blog/best-smart-ring-for-pilates" },
          { label: "Heart Rate Monitor", href: "/blog/best-heart-rate-monitor-for-pilates-and-spin" },
        ],
      },
      {
        label: "Recovery",
        links: [
          { label: "Massage Gun", href: "/blog/best-massage-gun-for-pilates" },
          { label: "Vibrating Foam Roller", href: "/blog/best-vibrating-foam-roller-for-pilates" },
          { label: "Red Light Therapy", href: "/blog/best-red-light-therapy-device-for-pilates" },
          { label: "Personal Fan", href: "/blog/best-personal-fan-for-home-gym" },
        ],
      },
    ],
    featured: { title: "Best Smart Ring for Pilates (2026): Oura & Budget Picks", href: "/blog/best-smart-ring-for-pilates", image: "/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg" },
    all: { label: "All tech & devices", href: "/blog?category=Tech+%26+Devices" },
  },
];

const BRAND = "#8b4a31";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [megaMaxHeight, setMegaMaxHeight] = useState<number | undefined>(undefined);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keep the Shop Gear panel inside the window on short laptop screens; it scrolls on its own if it is taller.
  const megaRef = useCallback((el: HTMLDivElement | null) => {
    if (!el) return;
    setMegaMaxHeight(Math.max(240, window.innerHeight - el.getBoundingClientRect().top - 16));
  }, []);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  // Short delay so the panel does not vanish while the pointer crosses the gap below the button.
  const closeMegaSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 180);
  };
  const closeMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(false);
  };

  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMegaOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [megaOpen]);

  const cat = SHOP_CATEGORIES[active];

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

          <SiteSearch />

          {/* Shop Gear: the panel below spans the full header width (positioned against the fixed header). */}
          <div onMouseEnter={openMega} onMouseLeave={closeMegaSoon}>
            <button
              type="button"
              aria-expanded={megaOpen}
              aria-controls="shop-gear-panel"
              onClick={() => (megaOpen ? closeMega() : openMega())}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#ffffff",
                textDecoration: "none",
                backgroundColor: megaOpen ? "#7a3f29" : BRAND,
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
              <span style={{ fontSize: "9px", transition: "transform 0.2s", display: "inline-block", transform: megaOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
            </button>

            {megaOpen && (
              <div
                id="shop-gear-panel"
                ref={megaRef}
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  maxHeight: megaMaxHeight,
                  overflowY: "auto",
                  overscrollBehavior: "contain",
                  backgroundColor: "#ffffff",
                  borderTop: "1px solid #ddd8d0",
                  boxShadow: "0 18px 40px rgba(20,16,14,0.10)",
                }}
              >
                <div className="pcc-mega-grid max-w-7xl mx-auto" style={{ padding: "36px 32px 40px" }}>
                  {/* Category list */}
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, borderRight: "1px solid #ede9e3", paddingRight: "24px" }}>
                    {SHOP_CATEGORIES.map((c, i) => {
                      const on = i === active;
                      return (
                        <li key={c.label}>
                          <button
                            type="button"
                            onMouseEnter={() => setActive(i)}
                            onFocus={() => setActive(i)}
                            onClick={() => setActive(i)}
                            aria-current={on ? "true" : undefined}
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              background: on ? "#f5f0eb" : "none",
                              border: "none",
                              cursor: "pointer",
                              padding: "9px 12px",
                              marginBottom: "2px",
                              fontFamily: "var(--font-sans)",
                              fontSize: "13px",
                              fontWeight: on ? 500 : 400,
                              color: on ? "#0a0a0a" : "#6b6560",
                              textAlign: "left",
                              transition: "background-color 0.15s, color 0.15s",
                            }}
                          >
                            {c.label}
                            <span aria-hidden style={{ fontSize: "11px", color: BRAND, opacity: on ? 1 : 0, transition: "opacity 0.15s" }}>→</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Links of the active category */}
                  <div style={{ display: "grid", gridTemplateColumns: `repeat(${cat.groups.length}, minmax(0, 1fr))`, gap: "32px", alignContent: "start" }}>
                    {cat.groups.map((g) => (
                      <div key={g.label}>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: BRAND, margin: "0 0 16px" }}>
                          {g.label}
                        </p>
                        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
                          {g.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                onClick={closeMega}
                                className="pcc-mega-link"
                                style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 400, color: "#4a4540", textDecoration: "none", lineHeight: 1.35 }}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Featured guide (hidden on narrower laptop screens) */}
                  <div className="pcc-mega-feature">
                    <Link
                      href={cat.featured.href}
                      onClick={closeMega}
                      className="pcc-mega-card"
                      style={{ display: "block", textDecoration: "none", border: "1px solid #ede9e3", backgroundColor: "#faf8f5" }}
                    >
                      <div style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden", backgroundColor: "#f0ece6" }}>
                        <Image src={cat.featured.image} alt="" fill sizes="280px" className="object-cover" />
                      </div>
                      <div style={{ padding: "16px 18px 18px" }}>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: BRAND, margin: "0 0 8px" }}>
                          Start here
                        </p>
                        <p style={{ fontFamily: "var(--font-serif)", fontSize: "17px", fontWeight: 400, color: "#0a0a0a", lineHeight: 1.3, margin: 0 }}>
                          {cat.featured.title}
                        </p>
                      </div>
                    </Link>
                    {cat.all && (
                      <Link
                        href={cat.all.href}
                        onClick={closeMega}
                        className="pcc-mega-link"
                        style={{ display: "inline-block", marginTop: "16px", fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a0a0a", textDecoration: "none" }}
                      >
                        {cat.all.label} →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile search + hamburger */}
        <div className="md:hidden flex items-center gap-3">
        <SiteSearch variant="mobile" />
        <button
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
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{ backgroundColor: "#ffffff", borderTop: "1px solid #ede9e3" }}
          className="pcc-mobile-menu md:hidden px-8 py-10 flex flex-col gap-7"
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
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {cat.groups.flatMap((g) => g.links).map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => { setMenuOpen(false); setShopOpen(false); }}
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "12px",
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
