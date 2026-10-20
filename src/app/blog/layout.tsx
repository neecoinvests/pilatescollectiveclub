import type { Metadata } from "next";

// Article and guide titles are already long and keyword-led, and Google shows
// the site name separately, so they skip the root " | Pilates Collective Club"
// suffix to stay inside the ~60 characters Google displays.
export const metadata: Metadata = {
  title: { template: "%s", default: "Pilates Collective Club" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
