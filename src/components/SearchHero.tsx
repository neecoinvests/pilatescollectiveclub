"use client";

import { useState } from "react";
import Link from "next/link";

const CHIPS = [
  "Reformer Pilates in Zurich",
  "Beginner classes in Paris",
  "Pilates retreats in Europe",
  "Home equipment picks",
];

export default function SearchHero() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ border: "1px solid #ede9e3", padding: "32px", maxWidth: "600px", margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c5a882", marginBottom: "10px" }}>
          AI Finder — Coming Soon
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 400, color: "#0a0a0a", marginBottom: "8px" }}>
          &ldquo;{query}&rdquo;
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "#6b6560", marginBottom: "24px", lineHeight: 1.7 }}>
          AI-powered search is launching soon. In the meantime, explore our curated city guides.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link href="/cities/zurich" style={{
            fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#ffffff", backgroundColor: "#0a0a0a",
            padding: "12px 24px", textDecoration: "none", display: "inline-block",
          }}>
            Explore Zurich
          </Link>
          <button onClick={() => { setQuery(""); setSubmitted(false); }} style={{
            fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 400, letterSpacing: "0.15em",
            textTransform: "uppercase", color: "#9a9490", backgroundColor: "transparent",
            border: "1px solid #ede9e3", padding: "12px 24px", cursor: "pointer",
          }}>
            New Search
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: "100%", maxWidth: "580px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", border: "1px solid #0a0a0a" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search studios, cities, classes…"
          style={{
            flex: 1,
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            fontWeight: 300,
            color: "#0a0a0a",
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
            padding: "16px 20px",
          }}
        />
        <button
          type="submit"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#ffffff",
            backgroundColor: "#0a0a0a",
            border: "none",
            padding: "16px 24px",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Search
        </button>
      </form>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px", justifyContent: "center" }}>
        {CHIPS.map((chip) => (
          <button
            key={chip}
            onClick={() => { setQuery(chip); setSubmitted(true); }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "11px",
              fontWeight: 300,
              color: "#6b6560",
              backgroundColor: "transparent",
              border: "1px solid #ede9e3",
              padding: "7px 14px",
              cursor: "pointer",
              letterSpacing: "0.03em",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#0a0a0a";
              e.currentTarget.style.color = "#0a0a0a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#ede9e3";
              e.currentTarget.style.color = "#6b6560";
            }}
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}
