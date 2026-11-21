"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { clamp, onFrameWhileVisible, reducedMotion } from "@/lib/railScroll";

// Pinned section whose cards travel sideways as the page scrolls down.
// Without JavaScript, on narrow screens and with reduced motion it stays a
// native swipe row (see .r-hs in globals.css).
export default function HorizontalTrack({ children, className = "" }: { children: ReactNode; className?: string }) {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hs = section.current;
    const tr = track.current;
    if (!hs || !tr) return;
    const pinned = () => window.innerWidth > 820 && !reducedMotion();
    const travel = () => Math.max(0, tr.scrollWidth - window.innerWidth);
    // Vertical scroll spent per pixel of sideways travel: under 1 so a long row does not feel endless.
    const RATIO = 0.7;

    const update = () => {
      if (!pinned()) {
        hs.style.height = "";
        tr.style.transform = "";
        return;
      }
      const dist = travel();
      hs.style.height = `${window.innerHeight + dist * RATIO}px`;
      const r = hs.getBoundingClientRect();
      const t = clamp(-r.top / (r.height - window.innerHeight || 1), 0, 1);
      tr.style.transform = `translateX(${-t * dist}px)`;
    };

    // Keyboard: bring a focused card into view by scrolling the page to the matching point.
    const onFocus = (e: FocusEvent) => {
      if (!pinned() || !(e.target instanceof HTMLElement)) return;
      const card = e.target.closest<HTMLElement>("[data-track-item]");
      if (!card) return;
      const dist = travel();
      const x = clamp(card.offsetLeft - 56, 0, dist);
      const top = hs.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top + x * RATIO });
    };

    tr.addEventListener("focusin", onFocus);
    const off = onFrameWhileVisible(hs, update);
    return () => {
      tr.removeEventListener("focusin", onFocus);
      off();
    };
  }, []);

  return (
    <section ref={section} className={`r-hs ${className}`}>
      <div className="r-hs-pin">
        <div ref={track} className="r-hs-track">
          {children}
        </div>
      </div>
    </section>
  );
}
