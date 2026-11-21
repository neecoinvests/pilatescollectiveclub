// One scroll and resize listener for the whole page. Subscribers run at most
// once per animation frame.
type Fn = () => void;

const fns = new Set<Fn>();
let ticking = false;

function run() {
  ticking = false;
  fns.forEach((fn) => fn());
}

function request() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(run);
}

export function onFrame(fn: Fn): () => void {
  if (fns.size === 0) {
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request, { passive: true });
  }
  fns.add(fn);
  fn();
  return () => {
    fns.delete(fn);
    if (fns.size === 0) {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
    }
  };
}

// Runs fn on scroll frames only while el is near the viewport.
export function onFrameWhileVisible(el: Element, fn: Fn, rootMargin = "200px 0px"): () => void {
  let off: (() => void) | null = null;
  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries[entries.length - 1].isIntersecting;
      if (visible && !off) off = onFrame(fn);
      else if (!visible && off) {
        off();
        off = null;
      }
    },
    { rootMargin },
  );
  io.observe(el);
  return () => {
    io.disconnect();
    if (off) off();
  };
}

export const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
