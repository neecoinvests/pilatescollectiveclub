"use client";

import { useState } from "react";
import Link from "next/link";

const PROMPT_CHIPS = [
  "Best beginner Pilates in Zurich",
  "Reformer Pilates near me",
  "Pilates retreats in Europe",
  "At-home Pilates equipment",
];

export default function SearchHero() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSubmitted(true);
    }
  };

  const handleChip = (chip: string) => {
    setQuery(chip);
    setSubmitted(true);
  };

  const handleReset = () => {
    setQuery("");
    setSubmitted(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!submitted ? (
        <>
          <form onSubmit={handleSubmit} className="relative">
            <div
              className="flex items-center rounded-2xl overflow-hidden"
              style={{
                backgroundColor: "#ffffff",
                border: "1.5px solid rgba(217, 194, 186, 0.6)",
                boxShadow: "0 4px 24px rgba(139, 74, 49, 0.12)",
              }}
            >
              <div className="pl-5 pr-3 flex items-center shrink-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#86736d"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask: best reformer Pilates near me, beginner classes in Zurich…"
                className="flex-1 py-4 text-sm bg-transparent outline-none"
                style={{
                  color: "#1b1c1c",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              />
              <button
                type="submit"
                className="m-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90 whitespace-nowrap"
                style={{
                  backgroundColor: "#8b4a31",
                  color: "#ffffff",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Search
              </button>
            </div>
          </form>

          {/* Prompt chips */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {PROMPT_CHIPS.map((chip) => (
              <button
                key={chip}
                onClick={() => handleChip(chip)}
                className="px-4 py-2 rounded-full text-xs font-medium transition-all hover:shadow-sm hover:-translate-y-px"
                style={{
                  backgroundColor: "rgba(255,255,255,0.85)",
                  color: "#53433e",
                  border: "1px solid rgba(217, 194, 186, 0.7)",
                  fontFamily: "'Montserrat', sans-serif",
                  backdropFilter: "blur(4px)",
                }}
              >
                {chip}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div
          className="rounded-2xl p-8"
          style={{
            backgroundColor: "#ffffff",
            border: "1.5px solid rgba(217, 194, 186, 0.5)",
            boxShadow: "0 4px 24px rgba(139, 74, 49, 0.1)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={{ backgroundColor: "#f6f3f2" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8b4a31"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div className="flex-1">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-1"
                style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
              >
                AI Finder — Coming Soon
              </p>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                <span className="font-medium" style={{ color: "#1b1c1c" }}>
                  &ldquo;{query}&rdquo;
                </span>{" "}
                — AI Finder is coming soon. For now, explore our curated Zurich guide.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/cities/zurich"
                  className="inline-block px-5 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: "#8b4a31",
                    color: "#ffffff",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Explore Zurich Guide →
                </Link>
                <button
                  onClick={handleReset}
                  className="inline-block px-5 py-2.5 rounded-xl text-sm font-medium transition-colors hover:bg-[#f0eded]"
                  style={{
                    color: "#53433e",
                    border: "1px solid rgba(217, 194, 186, 0.6)",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  New search
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
