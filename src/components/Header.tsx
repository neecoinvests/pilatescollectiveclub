"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import SiteSearch from "@/components/SiteSearch";
import DealBanner from "@/components/DealBanner";
import { MENUS, SHOP_CATEGORIES, SHOP_MENU, type Menu } from "@/components/nav-menus";

const NAV = MENUS.map((m) => ({ label: m.label, href: m.href ?? "/" }));

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
    <div id={`mega-${menu.id}`} ref={fitRef} className="r-mega" style={{ maxHeight }}>
      <div className={`pcc-mega-grid${hasRail ? "" : " pcc-mega-norail"}${side ? "" : " pcc-mega-noside"} r-wrap r-mega-in`}>
        {hasRail && (
          <ul className="r-mega-tabs">
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
                    className="r-mega-tab"
                  >
                    {t.label}
                    <span aria-hidden style={{ opacity: on ? 1 : 0 }}>→</span>
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
              <p className="r-mega-label">{g.label}</p>
              <ul className="r-mega-links">
                {g.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} onClick={onNavigate}>
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
              <Link href={tab.featured.href} onClick={onNavigate} className="r-mega-card">
                <div className="r-mega-card-im">
                  <Image src={tab.featured.image} alt="" fill sizes="280px" className="object-cover" />
                </div>
                <div className="r-mega-card-tx">
                  <span className="r-pill r-pill-gold">Start here</span>
                  <b>{tab.featured.title}</b>
                </div>
              </Link>
            ) : tab.intro ? (
              <div className="r-mega-intro">
                <b>{tab.intro.title}</b>
                <p>{tab.intro.body}</p>
              </div>
            ) : null}
            {tab.all && (
              <Link href={tab.all.href} onClick={onNavigate} className="r-mega-all">
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
    <>
    <a href="#content" className="r-skip">Skip to content</a>
    <header className="r-hdr" data-solid={openId || menuOpen ? "true" : undefined}>
      <DealBanner />
      <div className="r-wrap r-hdr-in">
        <Link href="/" className="r-logo">
          <Image src="/pictures/pcc-logo.png" alt="Pilates Collective Club" width={859} height={286} sizes="110px" preload />
        </Link>

        {/* Desktop nav: every item opens a full-width panel (positioned against the fixed header). */}
        <nav className="r-nav" onMouseEnter={cancelClose} onMouseLeave={closeSoon}>
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
                className="r-nav-a"
                data-open={on ? "true" : undefined}
              >
                {m.label}
                <span aria-hidden className="r-chev">▾</span>
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
            className="r-nav-a r-nav-shop"
            data-open={shopIsOpen ? "true" : undefined}
          >
            Shop Gear
            <span className="r-chev">▾</span>
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

        {/* Mobile search + menu button */}
        <div className="r-hdr-m">
          <SiteSearch variant="mobile" />
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen} className="r-menu-btn">
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="pcc-mobile-menu r-mm">
          {NAV.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="r-mm-a">
              {link.label}
            </Link>
          ))}

          {/* Shop Gear accordion on mobile */}
          <div>
            <button onClick={() => setShopOpen(!shopOpen)} aria-expanded={shopOpen} className="r-mm-shop">
              Shop Gear
              <span>{shopOpen ? "▴" : "▾"}</span>
            </button>

            {shopOpen && (
              <div className="r-mm-panel">
                {SHOP_CATEGORIES.map((cat) => (
                  <div key={cat.label} className="r-mm-group">
                    <p>{cat.label}</p>
                    {cat.groups.flatMap((g) => g.links).map((link) => (
                      <Link key={link.href} href={link.href} onClick={() => { setMenuOpen(false); setShopOpen(false); }} className="r-mm-link">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}

                <div className="r-mm-all">
                  {[
                    { label: "All Equipment", href: "/blog?category=Equipment" },
                    { label: "All Clothing", href: "/blog?category=Clothing" },
                    { label: "Studio Essentials", href: "/blog?category=Studio+Essentials" },
                    { label: "Lagree", href: "/blog?category=Lagree" },
                    { label: "Spinning", href: "/blog?category=Spinning" },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => { setMenuOpen(false); setShopOpen(false); }} className="r-mm-link">
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
    <span id="content" tabIndex={-1} />
    </>
  );
}
