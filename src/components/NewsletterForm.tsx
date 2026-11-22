"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  if (subscribed) {
    return (
      <p
        className="text-base opacity-85"
        style={{ color: "#ffffff" }}
      >
        Thanks for subscribing! Check your inbox Sunday morning.
      </p>
    );
  }

  return (
    <form
      className="flex flex-col sm:flex-row gap-3"
      onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
    >
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 px-5 py-3.5 rounded-xl text-sm outline-none"
        style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.25)" }}
        required
      />
      <button
        type="submit"
        className="whitespace-nowrap r-btn r-btn-sm r-btn-light"
      >
        Subscribe
      </button>
    </form>
  );
}
