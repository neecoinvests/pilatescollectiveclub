// Shared data for the Black Friday / Cyber Monday deal guides.

export const BF_DATES = {
  blackFriday: "Friday, November 27, 2026",
  cyberMonday: "Monday, November 30, 2026",
  blackFridayIso: "2026-11-27",
};

// Date the baseline prices on every Black Friday page were last checked
// against live Amazon listings. Update it whenever prices are refreshed.
export const BF_PRICES_CHECKED = "October 10, 2026";
export const BF_PRICES_CHECKED_ISO = "2026-10-10";

export type BfGuide = {
  href: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  group: "Pilates" | "Lagree" | "Spin";
};

export const BF_GUIDES: BfGuide[] = [
  { href: "/blog/black-friday-pilates-deals", title: "Pilates Black Friday Deals 2026", excerpt: "The hub: every Pilates, Lagree and spin deal guide, plus the best-value picks to watch.", imageUrl: "/pictures/stitch-luxury-studio-wide.png", group: "Pilates" },
  { href: "/blog/black-friday-pilates-reformer-deals", title: "Pilates Reformer Black Friday Deals", excerpt: "Home reformers from $295.99 to $3,349, with the baseline price for every one.", imageUrl: "/pictures/stitch-reformer-sunlit-minimal.png", group: "Pilates" },
  { href: "/blog/black-friday-pilates-clothing-deals", title: "Pilates Clothing Black Friday Deals", excerpt: "Leggings, sports bras, grip socks and layers — the prices to beat this November.", imageUrl: "/pictures/stitch-retail-activewear.png", group: "Pilates" },
  { href: "/blog/black-friday-pilates-gifts-under-50", title: "Pilates Gifts Under $50 for Black Friday", excerpt: "Rings, mats, socks, rollers and bags under $50 for the Pilates lover in your life.", imageUrl: "/pictures/stitch-props-cork-ring.png", group: "Pilates" },
  { href: "/blog/pilates-equipment-black-friday-guide", title: "Pilates Equipment Black Friday Guide", excerpt: "Which equipment actually moves on price in November, and which never does.", imageUrl: "/pictures/stitch-studio-shelf-props.png", group: "Pilates" },
  { href: "/blog/black-friday-lagree-deals", title: "Lagree Black Friday Deals 2026", excerpt: "The Lagree Micro, its add-ons and the home setup — with the price to beat for each.", imageUrl: "/pictures/stitch-reformer-spring-detail.png", group: "Lagree" },
  { href: "/blog/black-friday-lagree-clothing-gear", title: "Lagree Clothing & Gear Black Friday Deals", excerpt: "Grip socks, fitted kit, gloves, towels, bags and fan merch for Lagree regulars.", imageUrl: "/pictures/stitch-grip-socks-footbar.png", group: "Lagree" },
  { href: "/blog/black-friday-spin-deals", title: "Spin & Indoor Cycling Black Friday Deals", excerpt: "Indoor bikes from Sunny, YOSUDA, Schwinn and Echelon, plus shoes, pedals and sensors.", imageUrl: "/pictures/stitch-studio-modern-row.png", group: "Spin" },
];
