// Shared data for the Cyber Monday deal guides and Christmas gift guides.
// The Black Friday equivalents live in blackFriday.ts.

export const CM_DATE = "Monday, November 30, 2026";
export const XMAS_DATE = "Friday, December 25, 2026";

// Date the baseline prices on the Cyber Monday and Christmas pages were last
// checked against live Amazon listings. Update it whenever prices are refreshed.
export const SEASONAL_PRICES_CHECKED = "October 14, 2026";
export const SEASONAL_PRICES_CHECKED_ISO = "2026-10-14";

export type SeasonalGuide = {
  href: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  group: string;
};

export const CM_GUIDES: SeasonalGuide[] = [
  { href: "/blog/cyber-monday-pilates-deals", title: "Cyber Monday Pilates Deals 2026", excerpt: "The hub: reformers, equipment, clothing and gifts to watch on Cyber Monday.", imageUrl: "/pictures/stitch-luxury-studio-wide.png", group: "Cyber Monday" },
  { href: "/blog/cyber-monday-pilates-reformer-deals", title: "Cyber Monday Pilates Reformer Deals", excerpt: "Home reformers from under $300 to studio-grade, with today's price to beat.", imageUrl: "/pictures/stitch-reformer-sunlit-minimal.png", group: "Cyber Monday" },
  { href: "/blog/black-friday-cyber-monday-studio-reformer-deals", title: "Black Friday & Cyber Monday Studio Reformer Deals", excerpt: "Balanced Body, Merrithew, Align and PersonalHour: the price to beat on 13 studio-grade reformers.", imageUrl: "/pictures/stitch-reformers-aerial-row.png", group: "Cyber Monday" },
  { href: "/blog/black-friday-cyber-monday-recovery-deals", title: "Black Friday & Cyber Monday Recovery Deals", excerpt: "Normatec, JetBoots, Theragun, Hypervolt and HigherDOSE: prices to beat.", imageUrl: "/pictures/stitch-studio-bench-towels.png", group: "Cyber Monday" },
  { href: "/blog/cyber-monday-pilates-equipment-deals", title: "Cyber Monday Pilates Equipment Deals", excerpt: "Mats, rings, balls, rollers, weights and recovery tools for a home setup.", imageUrl: "/pictures/stitch-studio-shelf-props.png", group: "Cyber Monday" },
  { href: "/blog/cyber-monday-pilates-clothing-deals", title: "Cyber Monday Pilates Clothing Deals", excerpt: "Leggings, bras, layers, grip socks and bags for class.", imageUrl: "/pictures/stitch-retail-activewear.png", group: "Cyber Monday" },
  { href: "/blog/cyber-monday-pilates-gift-deals", title: "Cyber Monday Pilates Gift Deals", excerpt: "Gifts for every budget to buy on Cyber Monday, from stocking fillers to big-ticket.", imageUrl: "/pictures/stitch-props-cork-ring.png", group: "Cyber Monday" },
];

export const XMAS_GUIDES: SeasonalGuide[] = [
  { href: "/blog/pilates-christmas-gifts-over-500", title: "Pilates Christmas Gifts Over $500", excerpt: "16 splurge gifts: reformers, the Lagree Micro, Normatec and Theragun.", imageUrl: "/pictures/stitch-luxury-studio-wide.png", group: "Christmas" },
  { href: "/blog/home-pilates-studio-christmas-gift", title: "The Ultimate Home Pilates Studio Gift", excerpt: "Reformers with towers, a Cadillac, barrel and chair.", imageUrl: "/pictures/stitch-reformer-row-studio.png", group: "Christmas" },
  { href: "/blog/luxury-recovery-gifts-for-pilates", title: "Luxury Recovery Gifts for Pilates Lovers", excerpt: "Compression boots, massage guns, a sauna blanket and Oura Ring 5.", imageUrl: "/pictures/stitch-studio-bench-towels.png", group: "Christmas" },
  { href: "/blog/best-home-workout-machine-christmas-gift", title: "Best Home Workout Machine Gifts", excerpt: "Reformer, Lagree Micro or indoor bike? Compared.", imageUrl: "/pictures/stitch-reformer-spring-detail.png", group: "Christmas" },
  { href: "/blog/lagree-micro-christmas-gift", title: "The Lagree Micro Christmas Gift Guide", excerpt: "The complete home Lagree setup, with bundle prices.", imageUrl: "/pictures/stitch-reformer-loops-hooks.png", group: "Christmas" },
  { href: "/blog/fitness-tech-gifts-for-pilates-lovers", title: "Best Fitness Tech Gifts for Pilates Lovers", excerpt: "Apple Watch, Garmin, Oura, WHOOP and earbuds compared.", imageUrl: "/pictures/stitch-pilates-essentials-logbook.png", group: "Christmas" },
  { href: "/blog/luxury-fitness-gifts-for-him", title: "Luxury Fitness Gifts for Him", excerpt: "14 premium gifts, from watches to home machines.", imageUrl: "/pictures/stitch-studio-modern-row.png", group: "Christmas" },
  { href: "/blog/best-pilates-christmas-gifts", title: "Best Pilates Christmas Gifts", excerpt: "Our main Christmas gift guide for Pilates lovers.", imageUrl: "/pictures/stitch-props-cork-ring.png", group: "Christmas" },
  { href: "/blog/pilates-stocking-stuffers", title: "Pilates Stocking Stuffers", excerpt: "Small, useful gifts under $35 that fit in a stocking.", imageUrl: "/pictures/stitch-grip-socks-footbar.png", group: "Christmas" },
  { href: "/blog/pilates-secret-santa-gifts", title: "Pilates Secret Santa Gifts", excerpt: "Crowd-pleasing Pilates gifts under $30 for office and studio swaps.", imageUrl: "/pictures/stitch-studio-shelf-props.png", group: "Christmas" },
  { href: "/blog/best-pilates-gifts-for-her", title: "Best Pilates Gifts for Her", excerpt: "Thoughtful gifts for the woman who lives in her grip socks.", imageUrl: "/pictures/stitch-retail-activewear.png", group: "Christmas" },
  { href: "/blog/best-reformer-pilates-gifts", title: "Best Gifts for Reformer Pilates Lovers", excerpt: "From grip socks to a home reformer, gifts for reformer regulars.", imageUrl: "/pictures/stitch-reformer-sunlit-minimal.png", group: "Christmas" },
];
