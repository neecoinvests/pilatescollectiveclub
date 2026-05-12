"use client";

import Link from "next/link";
import { useState } from "react";

const EXPLORE = [
  { label: "Studio Finder", href: "/#finder" },
  { label: "City Guides", href: "/#cities" },
  { label: "Journal", href: "/blog" },
  { label: "About", href: "/#about" },
];

const JOURNAL = [
  { label: "Best Home Reformer", href: "/blog/best-home-pilates-reformer" },
  { label: "Pilates for Back Pain", href: "/blog/pilates-for-back-pain" },
  { label: "Classical vs Contemporary", href: "/blog/classical-vs-contemporary-pilates" },
  { label: "Pilates for Athletes", href: "/blog/pilates-for-athletes" },
];

const CITIES = [
  { label: "Zurich", href: "/cities/zurich" },
  { label: "Geneva", href: "/cities/geneva" },
  { label: "London", href: "/cities/london" },
  { label: "Paris", href: "/cities/paris" },
];

const s = {
  label: {
    fontFamily: "var(--font-sans)",
    fontSize: "10px",
    fontWeight: 500,
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "#9a9490",
    marginBottom: "20px",
    display: "block",
  },
  link: {
    fontFamily: "var(--font-sans)",
    fontSize: "13px",
    fontWeight: 300,
    color: "rgba(255,255,255,0.55)",
    textDecoration: "none",
    display: "block",
    marginBottom: "10px",
    transition: "color 0.2s",
  },
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer style={{ backgroundColor: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 pb-16" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", display: "block", marginBottom: "20px" }}>
              Pilates Collective Club
            </Link>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, maxWidth: "280px" }}>
              Curated studio guides, expert recommendations, and editorial content for the global Pilates community.
            </p>

            {/* Newsletter */}
            <div style={{ marginTop: "32px" }}>
              <span style={s.label}>Newsletter</span>
              {done ? (
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "#c5a882" }}>Thank you for subscribing.</p>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }} style={{ display: "flex", gap: "0" }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "12px",
                      fontWeight: 300,
                      backgroundColor: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRight: "none",
                      color: "#ffffff",
                      padding: "10px 14px",
                      outline: "none",
                      flex: 1,
                      minWidth: 0,
                    }}
                  />
                  <button type="submit" style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    backgroundColor: "#c5a882",
                    color: "#0a0a0a",
                    border: "none",
                    padding: "10px 16px",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}>
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Explore */}
          <div>
            <span style={s.label}>Explore</span>
            {EXPLORE.map((l) => (
              <Link key={l.href} href={l.href} style={s.link}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Journal */}
          <div>
            <span style={s.label}>Journal</span>
            {JOURNAL.map((l) => (
              <Link key={l.href} href={l.href} style={s.link}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Cities */}
          <div>
            <span style={s.label}>Cities</span>
            {CITIES.map((l) => (
              <Link key={l.href} href={l.href} style={s.link}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}>
                {l.label}
              </Link>
            ))}
            <div style={{ marginTop: "24px" }}>
              <span style={s.label}>Legal</span>
              {[{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }, { label: "Affiliate Disclosure", href: "#" }].map((l) => (
                <Link key={l.label} href={l.href} style={s.link}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between gap-4">
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 300, color: "rgba(255,255,255,0.25)", letterSpacing: "0.05em" }}>
            © 2026 Pilates Collective Club. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 300, color: "rgba(255,255,255,0.25)", letterSpacing: "0.05em" }}>
            Made for the global Pilates community.
          </p>
        </div>
      </div>
    </footer>
  );
}
