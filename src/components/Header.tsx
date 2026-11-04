"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import SiteSearch from "@/components/SiteSearch";
import { MENUS, SHOP_CATEGORIES, SHOP_MENU, type Menu } from "@/components/nav-menus";

const NAV = MENUS.map((m) => ({ label: m.label, href: m.href ?? "/" }));
const BRAND = "#8b4a31";

function MegaPanel({ menu, active, setActive, onNavigate }: { menu: Menu; active: number; setActive: (i: number) => void; onNavigate: () => void }) {
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);
  // Keep the panel inside the window on short laptop screens; it scrolls on its own if it is taller.
  const fitRef = useCallback((el: HTMLDivElement | null) => {
    if (!el) return;
    setMaxHeight(Math.max(240, window.innerHeight - el.getBoundingClientRect().top - 16));
  }, []);
  const hasRail = menu.tabs.length > 1;
  const tab = menu.tabs[Math.min(active, menu.tabs.length - 1)];
  const side = tab.featured || tab.intro;

  return (
    <div
      id={`mega-${menu.id}`}
      ref={fitRef}
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        maxHeight,
        overflowY: "auto",
        overscrollBehavior: "contain",
        backgroundColor: "#ffffff",
        borderTop: "1px solid #ddd8d0",
        boxShadow: "0 18px 40px rgba(20,16,14,0.10)",
      }}
    >
      <div className={`pcc-mega-grid${hasRail ? "" : " pcc-mega-norail"}${side ? "" : " pcc-mega-noside"} max-w-7xl mx-auto`} style={{ padding: "36px 32px 40px" }}>
        {hasRail && (
          <ul style={{ listStyle: "none", margin: 0, padding: 0, borderRight: "1px solid #ede9e3", paddingRight: "24px" }}>
            {menu.tabs.map((t, i) => {
              const on = t === tab;
              return (
                <li key={t.label}>
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
                    {t.label}
                    <span aria-hidden style={{ fontSize: "11px", color: BRAND, opacity: on ? 1 : 0, transition: "opacity 0.15s" }}>→</span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        {/* Links of the active tab */}
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${tab.groups.length}, minmax(0, 1fr))`, gap: "32px", alignContent: "start" }}>
          {tab.groups.map((g) => (
            <div key={g.label}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: BRAND, margin: "0 0 16px" }}>
                {g.label}
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
                {g.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onNavigate}
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

        {/* Featured guide or intro text (hidden on narrower laptop screens) */}
        {side && (
          <div className="pcc-mega-feature">
            {tab.featured ? (
              <Link
                href={tab.featured.href}
                onClick={onNavigate}
                className="pcc-mega-card"
                style={{ display: "block", textDecoration: "none", border: "1px solid #ede9e3", backgroundColor: "#faf8f5" }}
              >
                <div style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden", backgroundColor: "#f0ece6" }}>
                  <Image src={tab.featured.image} alt="" fill sizes="280px" className="object-cover" />
                </div>
                <div style={{ padding: "16px 18px 18px" }}>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: BRAND, margin: "0 0 8px" }}>
                    Start here
                  </p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "17px", fontWeight: 400, color: "#0a0a0a", lineHeight: 1.3, margin: 0 }}>
                    {tab.featured.title}
                  </p>
                </div>
              </Link>
            ) : tab.intro ? (
              <div style={{ border: "1px solid #ede9e3", backgroundColor: "#faf8f5", padding: "24px 22px" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "19px", fontWeight: 400, color: "#0a0a0a", lineHeight: 1.3, margin: "0 0 12px" }}>
                  {tab.intro.title}
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "#6b6560", lineHeight: 1.7, margin: 0 }}>
                  {tab.intro.body}
                </p>
              </div>
            ) : null}
            {tab.all && (
              <Link
                href={tab.all.href}
                onClick={onNavigate}
                className="pcc-mega-link"
                style={{ display: "inline-block", marginTop: "16px", fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a0a0a", textDecoration: "none" }}
              >
                {tab.all.label} →
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeTabs, setActiveTabs] = useState<Record<string, number>>({});
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const openMenu = (id: string) => {
    cancelClose();
    setOpenId(id);
  };
  // Short delay so the panel does not vanish while the pointer crosses the gap below the menu row.
  const closeSoon = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenId(null), 180);
  };
  const closeNow = () => {
    cancelClose();
    setOpenId(null);
  };

  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpenId(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openId]);

  const openMenuData = openId === SHOP_MENU.id ? SHOP_MENU : MENUS.find((m) => m.id === openId);
  const shopIsOpen = openId === SHOP_MENU.id;

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

        {/* Desktop nav: every item opens a full-width panel (positioned against the fixed header). */}
        <nav className="hidden md:flex items-center gap-10" onMouseEnter={cancelClose} onMouseLeave={closeSoon}>
          {MENUS.map((m) => {
            const on = openId === m.id;
            return (
              <Link
                key={m.id}
                href={m.href ?? "/"}
                onMouseEnter={() => openMenu(m.id)}
                onClick={closeNow}
                aria-expanded={on}
                aria-controls={`mega-${m.id}`}
                className="pcc-nav-trigger"
                data-open={on ? "true" : undefined}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: on ? "#0a0a0a" : "#9a9490",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  position: "relative",
                  padding: "8px 0",
                }}
              >
                {m.label}
                <span aria-hidden style={{ fontSize: "8px", display: "inline-block", transition: "transform 0.2s", transform: on ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
              </Link>
            );
          })}

          <div onMouseEnter={closeNow}>
            <SiteSearch />
          </div>

          <button
            type="button"
            aria-expanded={shopIsOpen}
            aria-controls={`mega-${SHOP_MENU.id}`}
            onMouseEnter={() => openMenu(SHOP_MENU.id)}
            onClick={() => (shopIsOpen ? closeNow() : openMenu(SHOP_MENU.id))}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#ffffff",
              textDecoration: "none",
              backgroundColor: shopIsOpen ? "#7a3f29" : BRAND,
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
            <span style={{ fontSize: "9px", transition: "transform 0.2s", display: "inline-block", transform: shopIsOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
          </button>

          {openMenuData && (
            <MegaPanel
              key={openMenuData.id}
              menu={openMenuData}
              active={activeTabs[openMenuData.id] ?? 0}
              setActive={(i) => setActiveTabs((a) => ({ ...a, [openMenuData.id]: i }))}
              onNavigate={closeNow}
            />
          )}
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
