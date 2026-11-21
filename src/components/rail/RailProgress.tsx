"use client";

import { useEffect, useRef } from "react";
import { onFrame } from "@/lib/railScroll";

const CARRIAGE = 54;

// The track fixed to the top of every page. The gold carriage follows scroll
// progress. It also flags the page as scrolled so the header can turn solid.
export default function RailProgress() {
  const carriage = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.railReady = "1";
    return onFrame(() => {
      const max = root.scrollHeight - window.innerHeight;
      const k = max > 0 ? root.scrollTop / max : 0;
      if (carriage.current) carriage.current.style.transform = `translateX(${k * (window.innerWidth - CARRIAGE)}px)`;
      root.toggleAttribute("data-scrolled", window.scrollY > 40);
    });
  }, []);

  return (
    <div className="r-rail" aria-hidden="true">
      <i ref={carriage} />
    </div>
  );
}
