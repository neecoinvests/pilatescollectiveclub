"use client";

import { useEffect, useState } from "react";
import { onFrame, reducedMotion } from "@/lib/railScroll";

export type PriceRailItem = { name: string; price: number; priceLabel: string; note?: string };

function niceStep(max: number) {
  const raw = max / 10;
  const pow = Math.pow(10, Math.floor(Math.log10(raw)));
  const n = raw / pow;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * pow;
}

// Sticky bar under the header: a price scale with one dot per product.
// The carriage slides to the product being read. Products are the elements
// marked data-pr-item, in the same order as `items`. Every value shown comes
// from the page's own product data.
export default function PriceRail({ items }: { items: PriceRailItem[] }) {
  const [cur, setCur] = useState(-1);
  const top = Math.max(...items.map((i) => i.price));
  const step = niceStep(top);
  const max = Math.ceil(top / step) * step;
  const ticks = Array.from({ length: Math.round(max / step) + 1 }, (_, i) => i * step);

  useEffect(() => {
    const blocks = Array.from(document.querySelectorAll<HTMLElement>("[data-pr-item]"));
    if (!blocks.length) return;
    return onFrame(() => {
      let b = 0;
      blocks.forEach((d, i) => {
        if (d.getBoundingClientRect().top < window.innerHeight * 0.55) b = i;
      });
      blocks.forEach((d, i) => d.classList.toggle("on", i === b));
      setCur(b);
    });
  }, []);

  const go = (i: number) => {
    const el = document.querySelectorAll<HTMLElement>("[data-pr-item]")[i];
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 170, behavior: reducedMotion() ? "auto" : "smooth" });
  };

  const now = cur >= 0 ? items[cur] : null;

  return (
    <div className="r-pr">
      <div className="r-wrap r-pr-in">
        <div className="r-pr-now" aria-hidden="true">
          <b>{now?.name}</b>
          <span>{now ? (now.note ? `${now.priceLabel} · ${now.note}` : now.priceLabel) : ""}</span>
        </div>
        <div className="r-sc">
          <div className="r-sc-ln" aria-hidden="true" />
          <div aria-hidden="true">
            {ticks.map((t) => (
              <div key={t} className="r-sc-tk" style={{ left: `${(t / max) * 100}%` }}>
                <span>${t.toLocaleString("en-US")}</span>
              </div>
            ))}
          </div>
          <div className="r-sc-car" aria-hidden="true" style={{ transform: `translateX(${now ? (now.price / max) * 100 : 0}%)` }}>
            <i />
          </div>
          {items.map((it, i) => (
            <button
              key={it.name}
              type="button"
              className={`r-sc-dot${i === cur ? " on" : ""}`}
              style={{ left: `${(it.price / max) * 100}%` }}
              aria-label={`${it.name}, ${it.priceLabel}`}
              aria-current={i === cur ? "true" : undefined}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
