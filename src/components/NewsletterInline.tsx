"use client";

import { useState } from "react";

export default function NewsletterInline() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "#c5a882" }}>
        Thank you for subscribing.
      </p>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }} style={{ display: "flex" }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        style={{
          flex: 1, fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300,
          backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
          borderRight: "none", color: "#ffffff", padding: "14px 18px", outline: "none", minWidth: 0,
        }}
      />
      <button type="submit" style={{
        fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500,
        letterSpacing: "0.18em", textTransform: "uppercase", backgroundColor: "#c5a882",
        color: "#0a0a0a", border: "none", padding: "14px 22px", cursor: "pointer", whiteSpace: "nowrap",
      }}>
        Subscribe
      </button>
    </form>
  );
}
