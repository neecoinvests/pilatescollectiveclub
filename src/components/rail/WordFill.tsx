"use client";

import { useEffect, useRef, useState } from "react";
import { clamp, onFrameWhileVisible, reducedMotion } from "@/lib/railScroll";

// A paragraph that lights up word by word as it scrolls through the viewport.
// The server sends the plain paragraph; words are wrapped after hydration.
export default function WordFill({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [split, setSplit] = useState(false);

  useEffect(() => {
    if (reducedMotion()) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one re-render after hydration, on purpose
    setSplit(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!split || !el) return;
    const words = Array.from(el.children) as HTMLElement[];
    return onFrameWhileVisible(el, () => {
      const r = el.getBoundingClientRect();
      const p = clamp((window.innerHeight * 0.85 - r.top) / (r.height + window.innerHeight * 0.35), 0, 1);
      words.forEach((w, i) => w.classList.toggle("on", i / words.length < p));
    });
  }, [split]);

  return (
    <p ref={ref} className={`${className}${split ? " r-fill-split" : ""}`}>
      {split
        ? text.split(" ").map((w, i, all) => (
            <span key={i}>{i < all.length - 1 ? `${w} ` : w}</span>
          ))
        : text}
    </p>
  );
}
