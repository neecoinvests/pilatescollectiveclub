"use client";

import { useState } from "react";

export default function NewsletterInline() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p style={{ fontSize: "15px", color: "#c5a882" }}>
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
        style={{ flex: 1, fontSize: "15px", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRight: "none", color: "#ffffff", padding: "14px 18px", outline: "none", minWidth: 0 }}
      />
      <button type="submit" style={{ fontSize: "12.5px", fontWeight: 700, backgroundColor: "#c5a882", color: "#0a0a0a", border: "none", padding: "14px 22px", cursor: "pointer", whiteSpace: "nowrap" }}>
        Subscribe
      </button>
    </form>
  );
}
