"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

// Site-wide Black Friday bar, shown at the top of the header on every page.
// It hides itself once Amazon's Black Friday deals end, and stays hidden for
// a visitor who closes it.
const DEALS_END = Date.parse("2026-12-01T07:59:59Z"); // November 30, 11:59 PM Pacific
const STORAGE_KEY = "pcc-bf-banner-2026-closed";
const HREF = "/blog/black-friday-pilates-deals";

// Tiny store: "is the bar open?" from the clock and the visitor's choice.
const listeners = new Set<() => void>();
let closedThisVisit = false;
const subscribe = (onChange: () => void) => {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
};
const isOpen = () => {
  if (closedThisVisit || Date.now() >= DEALS_END) return false;
  try {
    return window.localStorage.getItem(STORAGE_KEY) !== "1";
  } catch {
    return true; // storage blocked (private mode): show the bar
  }
};
// Static HTML is built before the deals end, so the bar is in the page; the
// browser then applies the expiry and the visitor's choice.
const isOpenOnServer = () => Date.now() < DEALS_END;

function close() {
  closedThisVisit = true;
  try {
    window.localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Ignore: the bar still closes for this visit.
  }
  listeners.forEach((l) => l());
}

export default function DealBanner() {
  const open = useSyncExternalStore(subscribe, isOpen, isOpenOnServer);
  if (!open) return null;

  return (
    <div className="pcc-deal-banner" style={{ backgroundColor: "#8b4a31", color: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-3" style={{ minHeight: "34px" }}>
        <Link
          href={HREF}
          className="text-center"
          style={{ color: "#ffffff", textDecoration: "none", fontFamily: "var(--font-sans)", fontSize: "12px", letterSpacing: "0.04em", lineHeight: 1.35, padding: "7px 0" }}
        >
          <span style={{ fontWeight: 600 }}>Black Friday deals are live<span className="pcc-deal-banner-extra"> on Amazon</span></span>
          <span className="pcc-deal-banner-extra"> through November 30</span>
          <span style={{ textDecoration: "underline", textUnderlineOffset: "3px", marginLeft: "8px", whiteSpace: "nowrap" }}>See the deals →</span>
        </Link>
        <button
          type="button"
          onClick={close}
          aria-label="Close the Black Friday banner"
          style={{ background: "none", border: "none", color: "#ffffff", cursor: "pointer", fontSize: "18px", lineHeight: 1, padding: "4px 6px", opacity: 0.85, flexShrink: 0 }}
        >
          ×
        </button>
      </div>
    </div>
  );
}
