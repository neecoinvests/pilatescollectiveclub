// Shared data for the Black Friday / Cyber Monday deal guides.

export const BF_DATES = {
  blackFriday: "Friday, November 27, 2026",
  cyberMonday: "Monday, November 30, 2026",
  blackFridayIso: "2026-11-27",
};

// Date the prices on every Black Friday page were last checked against live
// Amazon listings. Update it whenever prices are refreshed.
export const BF_PRICES_CHECKED = "November 19, 2026";
export const BF_PRICES_CHECKED_ISO = "2026-11-19";

// Amazon's Black Friday event (deals badged "Black Friday Deal" in the Creators API):
// November 19 to November 30, 2026, 11:59 PM Pacific.
export const BF_DEALS_END = "November 30, 2026";
export const BF_DEALS_END_ISO = "2026-11-30";

export type BfGuide = {
  href: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  group: "Pilates" | "Lagree" | "Spin";
};

export const BF_GUIDES: BfGuide[] = [
  { href: "/blog/black-friday-pilates-deals", title: "Pilates Black Friday Deals 2026", excerpt: "The hub: every Pilates, Lagree and spin deal guide, plus the best-value picks to watch.", imageUrl: "/pictures/stitch-luxury-studio-wide.png", group: "Pilates" },
  { href: "/blog/black-friday-pilates-reformer-deals", title: "Pilates Reformer Black Friday Deals", excerpt: "Home reformers from $289.99 to $3,349, with live prices and four PAETA Black Friday Deals.", imageUrl: "/pictures/stitch-reformer-sunlit-minimal.png", group: "Pilates" },
  { href: "/blog/black-friday-pilates-clothing-deals", title: "Pilates Clothing Black Friday Deals", excerpt: "Leggings, sports bras, grip socks and layers: ten on an Amazon Black Friday Deal.", imageUrl: "/pictures/stitch-retail-activewear.png", group: "Pilates" },
  { href: "/blog/black-friday-pilates-gifts-under-50", title: "Pilates Gifts Under $50 for Black Friday", excerpt: "Rings, mats, socks, rollers and bags under $50 for the Pilates lover in your life.", imageUrl: "/pictures/stitch-props-cork-ring.png", group: "Pilates" },
  { href: "/blog/pilates-equipment-black-friday-guide", title: "Pilates Equipment Black Friday Guide", excerpt: "Which equipment actually moves on price in November, and which never does.", imageUrl: "/pictures/stitch-studio-shelf-props.png", group: "Pilates" },
  { href: "/blog/black-friday-cyber-monday-studio-reformer-deals", title: "Black Friday & Cyber Monday Studio Reformer Deals", excerpt: "Balanced Body, Merrithew, Align and PersonalHour: current prices on 12 studio-grade reformers.", imageUrl: "/pictures/stitch-reformers-aerial-row.png", group: "Pilates" },
  { href: "/blog/black-friday-cyber-monday-recovery-deals", title: "Black Friday & Cyber Monday Recovery Deals", excerpt: "Normatec, JetBoots, Theragun, Hypervolt and HigherDOSE: up to 21% off now.", imageUrl: "/pictures/stitch-studio-bench-towels.png", group: "Pilates" },
  { href: "/blog/black-friday-lagree-deals", title: "Lagree Black Friday Deals 2026", excerpt: "The Lagree Micro, its add-ons and the home setup, with the current price for each.", imageUrl: "/pictures/stitch-reformer-spring-detail.png", group: "Lagree" },
  { href: "/blog/black-friday-lagree-clothing-gear", title: "Lagree Clothing & Gear Black Friday Deals", excerpt: "Grip socks, fitted kit, gloves, towels, bags and fan merch for Lagree regulars.", imageUrl: "/pictures/stitch-grip-socks-footbar.png", group: "Lagree" },
  { href: "/blog/black-friday-spin-deals", title: "Spin & Indoor Cycling Black Friday Deals", excerpt: "Indoor bikes from Sunny, YOSUDA, Schwinn and Echelon, plus shoes, pedals and sensors.", imageUrl: "/pictures/stitch-studio-modern-row.png", group: "Spin" },
];
