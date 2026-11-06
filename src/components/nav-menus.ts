// Desktop mega menu content (and the mobile Shop Gear accordion).
export type MenuLink = { label: string; href: string };
export type MenuTab = {
  label: string;
  groups: { label: string; links: MenuLink[] }[];
  featured?: { title: string; href: string; image: string };
  /** Short text shown in place of the featured card. */
  intro?: { title: string; body: string };
  all?: MenuLink;
};
export type Menu = { id: string; label: string; href?: string; tabs: MenuTab[] };

export const SHOP_CATEGORIES: MenuTab[] = [
  {
    label: "Deals",
    groups: [
      {
        label: "Black Friday",
        links: [
          { label: "Black Friday Deals Hub", href: "/blog/black-friday-pilates-deals" },
          { label: "Reformer Deals", href: "/blog/black-friday-pilates-reformer-deals" },
          { label: "Studio Reformer Deals", href: "/blog/black-friday-cyber-monday-studio-reformer-deals" },
          { label: "Recovery Deals", href: "/blog/black-friday-cyber-monday-recovery-deals" },
          { label: "Pilates Clothing Deals", href: "/blog/black-friday-pilates-clothing-deals" },
          { label: "Pilates Gifts Under $50", href: "/blog/black-friday-pilates-gifts-under-50" },
          { label: "Equipment Price Guide", href: "/blog/pilates-equipment-black-friday-guide" },
          { label: "Lagree Deals", href: "/blog/black-friday-lagree-deals" },
          { label: "Lagree Clothing & Gear", href: "/blog/black-friday-lagree-clothing-gear" },
          { label: "Spin & Cycling Deals", href: "/blog/black-friday-spin-deals" },
        ],
      },
      {
        label: "Cyber Monday",
        links: [
          { label: "Cyber Monday Deals Hub", href: "/blog/cyber-monday-pilates-deals" },
          { label: "Reformer Deals", href: "/blog/cyber-monday-pilates-reformer-deals" },
          { label: "Equipment Deals", href: "/blog/cyber-monday-pilates-equipment-deals" },
          { label: "Clothing Deals", href: "/blog/cyber-monday-pilates-clothing-deals" },
          { label: "Gift Deals", href: "/blog/cyber-monday-pilates-gift-deals" },
        ],
      },
    ],
    featured: { title: "Pilates Black Friday Deals 2026: The Watchlist", href: "/blog/black-friday-pilates-deals", image: "/pictures/stitch-luxury-studio-wide.png" },
    all: { label: "Cyber Monday deals", href: "/blog/cyber-monday-pilates-deals" },
  },
  {
    label: "Reformers",
    groups: [
      {
        label: "By need",
        links: [
          { label: "Best Home Reformers", href: "/blog/best-home-pilates-reformer" },
          { label: "Best for Beginners", href: "/blog/best-pilates-reformer-for-beginners" },
          { label: "Foldable Reformers", href: "/blog/best-foldable-pilates-reformer" },
          { label: "Mini Reformers", href: "/blog/best-mini-pilates-reformer" },
          { label: "For Small Spaces", href: "/blog/best-pilates-reformer-for-small-spaces" },
          { label: "For Tall People", href: "/blog/best-pilates-reformer-for-tall-people" },
          { label: "Wood vs Aluminium", href: "/blog/wood-vs-aluminium-pilates-reformer" },
          { label: "Reformer Accessories", href: "/blog/best-pilates-reformer-accessories" },
        ],
      },
      {
        label: "By budget",
        links: [
          { label: "Under $500", href: "/blog/best-pilates-reformer-under-500" },
          { label: "Under $1,000", href: "/blog/best-pilates-reformer-under-1000" },
          { label: "Under $2,000", href: "/blog/best-pilates-reformer-under-2000" },
          { label: "Under $3,000", href: "/blog/best-pilates-reformer-under-3000" },
          { label: "Under $5,000", href: "/blog/best-pilates-reformer-under-5000" },
          { label: "Luxury Reformers", href: "/blog/best-luxury-pilates-reformer" },
        ],
      },
    ],
    featured: { title: "Best Home Pilates Reformer (2026): $359 to $4,700 Compared", href: "/blog/best-home-pilates-reformer", image: "/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" },
    all: { label: "All equipment", href: "/blog?category=Equipment" },
  },
  {
    label: "Equipment",
    groups: [
      {
        label: "Mat & props",
        links: [
          { label: "Pilates Mat", href: "/blog/best-pilates-mat" },
          { label: "Luxury Mat", href: "/blog/best-luxury-pilates-mat" },
          { label: "Pilates Ring", href: "/blog/best-pilates-ring" },
          { label: "Pilates Ball", href: "/blog/best-pilates-ball" },
          { label: "Foam Roller", href: "/blog/best-pilates-foam-roller" },
          { label: "Resistance Bands", href: "/blog/best-pilates-resistance-bands" },
          { label: "Ankle Weights", href: "/blog/best-pilates-ankle-weights" },
          { label: "Exercise Sliders", href: "/blog/best-exercise-sliders-for-pilates" },
          { label: "Stretch Strap", href: "/blog/best-stretch-strap-for-pilates" },
        ],
      },
      {
        label: "Studio apparatus",
        links: [
          { label: "Home Equipment Guide", href: "/blog/best-pilates-equipment-for-home-practice" },
          { label: "Pilates Chair", href: "/blog/best-pilates-chair" },
          { label: "Pilates Barrel", href: "/blog/best-pilates-barrel" },
          { label: "Pilates Cadillac", href: "/blog/best-pilates-cadillac" },
        ],
      },
    ],
    featured: { title: "Best Pilates Equipment for Home Practice (2026)", href: "/blog/best-pilates-equipment-for-home-practice", image: "/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg" },
    all: { label: "All equipment", href: "/blog?category=Equipment" },
  },
  {
    label: "Clothing",
    groups: [
      {
        label: "Leggings & shorts",
        links: [
          { label: "Pilates Leggings", href: "/blog/best-pilates-leggings" },
          { label: "High-Waist Leggings", href: "/blog/best-high-waist-pilates-leggings" },
          { label: "Luxury Leggings", href: "/blog/best-luxury-pilates-leggings" },
          { label: "Pilates Shorts", href: "/blog/best-pilates-shorts" },
        ],
      },
      {
        label: "Tops & layers",
        links: [
          { label: "Sports Bras", href: "/blog/best-pilates-sports-bra" },
          { label: "Seamless Bras", href: "/blog/best-pilates-seamless-sports-bra" },
          { label: "Tank Tops", href: "/blog/best-pilates-tank-tops" },
          { label: "T-Shirts", href: "/blog/best-pilates-tshirts" },
          { label: "Hoodies", href: "/blog/best-pilates-hoodie" },
          { label: "Moisture-Wicking Tops", href: "/blog/best-moisture-wicking-top-for-pilates-and-spin" },
        ],
      },
      {
        label: "Grip",
        links: [
          { label: "Grip Socks", href: "/blog/best-pilates-grip-socks" },
          { label: "Pilates Gloves", href: "/blog/best-pilates-gloves" },
        ],
      },
    ],
    featured: { title: "Best Pilates Leggings (2026): 5 Picks for Reformer & Mat", href: "/blog/best-pilates-leggings", image: "/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg" },
    all: { label: "All clothing", href: "/blog?category=Clothing" },
  },
  {
    label: "Bags & Essentials",
    groups: [
      {
        label: "Essentials lists",
        links: [
          { label: "Pilates Essentials (Full List)", href: "/blog/pilates-essentials" },
          { label: "Reformer Essentials", href: "/blog/reformer-pilates-essentials" },
          { label: "Pilates Princess Essentials", href: "/blog/pilates-princess-essentials" },
          { label: "Starter Kit", href: "/blog/best-pilates-starter-kit" },
          { label: "Luxury Accessories", href: "/blog/best-luxury-pilates-accessories" },
          { label: "Water Bottle", href: "/blog/best-pilates-water-bottle" },
        ],
      },
      {
        label: "Bags",
        links: [
          { label: "Designer Pilates Bags", href: "/blog/best-designer-pilates-bag" },
          { label: "Studio Bags (Women)", href: "/blog/best-pilates-studio-bag-women" },
          { label: "Mat Tote Bag", href: "/blog/best-pilates-mat-tote" },
          { label: "Tote Bag", href: "/blog/best-pilates-tote-bag" },
        ],
      },
    ],
    featured: { title: "Pilates Essentials (2026): Every Must-Have in One List", href: "/blog/pilates-essentials", image: "/pictures/stitch-pilates-essentials-logbook.png" },
    all: { label: "Studio essentials", href: "/blog?category=Studio+Essentials" },
  },
  {
    label: "Lagree",
    groups: [
      {
        label: "Learn",
        links: [
          { label: "Lagree Fitness (Brand Guide)", href: "/blog/lagree-fitness" },
          { label: "Lagree for Beginners", href: "/blog/lagree-for-beginners" },
          { label: "Lagree Exercises", href: "/blog/lagree-exercises" },
          { label: "Lagree vs Solidcore", href: "/blog/lagree-vs-solidcore" },
          { label: "Lagree for Weight Loss", href: "/blog/lagree-for-weight-loss" },
          { label: "Lagree Calories Burned", href: "/blog/how-many-calories-does-lagree-burn" },
          { label: "Sore After Lagree", href: "/blog/lagree-recovery" },
          { label: "What to Wear to Lagree", href: "/blog/what-to-wear-to-lagree" },
          { label: "Lagree for Men", href: "/blog/lagree-for-men" },
        ],
      },
      {
        label: "Machines",
        links: [
          { label: "Lagree Micro Review", href: "/blog/lagree-micro-review" },
          { label: "Lagree Micro vs Megaformer", href: "/blog/lagree-micro-vs-megaformer" },
          { label: "Best Megaformer", href: "/blog/best-megaformer-machine" },
          { label: "Best Reformer for Lagree at Home", href: "/blog/best-reformer-for-lagree-at-home" },
          { label: "Lagree Springs & Cables", href: "/blog/best-lagree-resistance-springs-cables" },
          { label: "Lagree Carriage Handles", href: "/blog/best-lagree-carriage-handles" },
        ],
      },
      {
        label: "Gear",
        links: [
          { label: "Lagree Essentials", href: "/blog/lagree-essentials" },
          { label: "Lagree Socks", href: "/blog/best-lagree-grip-socks" },
          { label: "Lagree Gloves", href: "/blog/best-lagree-gloves" },
          { label: "Lagree Tops", href: "/blog/best-lagree-tops" },
          { label: "Lagree Shirts & Hoodies", href: "/blog/best-lagree-shirts" },
          { label: "Lagree Jacket", href: "/blog/best-lagree-jacket" },
          { label: "Lagree Workout Sets", href: "/blog/best-lagree-workout-sets" },
          { label: "Lagree Headbands", href: "/blog/best-headband-for-lagree" },
          { label: "Lagree Bag", href: "/blog/best-lagree-bag" },
          { label: "Lagree Water Bottle", href: "/blog/best-water-bottle-for-lagree" },
          { label: "Lagree Gifts", href: "/blog/best-lagree-gifts" },
        ],
      },
    ],
    featured: { title: "Lagree Micro Review (2026): Specs, Springs & Real Cost", href: "/blog/lagree-micro-review", image: "/pictures/stitch-reformer-spring-detail.png" },
    all: { label: "All Lagree", href: "/blog?category=Lagree" },
  },
  {
    label: "Spin",
    groups: [
      {
        label: "Home setup",
        links: [
          { label: "Indoor Spin Bike", href: "/blog/best-indoor-spin-bike-for-home-studio" },
          { label: "Spin Floor Mat", href: "/blog/best-floor-mat-for-spin-bike" },
          { label: "Bike Computer", href: "/blog/best-bike-computer-for-indoor-cycling" },
          { label: "Water Bottle Holder", href: "/blog/best-water-bottle-holder-for-spin-bike" },
        ],
      },
      {
        label: "What to wear",
        links: [
          { label: "Cycling Shoes", href: "/blog/best-cycling-shoes-for-spin-class" },
          { label: "Cycling Gloves", href: "/blog/best-cycling-gloves-for-spin-class" },
          { label: "Padded Shorts", href: "/blog/best-padded-cycling-shorts-for-spin" },
        ],
      },
    ],
    featured: { title: "Best Indoor Spin Bike for Home Studios (2026)", href: "/blog/best-indoor-spin-bike-for-home-studio", image: "/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg" },
    all: { label: "All spinning", href: "/blog?category=Spinning" },
  },
  {
    label: "Gift Guides",
    groups: [
      {
        label: "Christmas",
        links: [
          { label: "Christmas Gifts", href: "/blog/best-pilates-christmas-gifts" },
          { label: "Gifts for Her", href: "/blog/best-pilates-christmas-gifts-for-her" },
          { label: "Reformer Pilates Gifts", href: "/blog/reformer-pilates-christmas-gifts" },
          { label: "Stocking Stuffers", href: "/blog/pilates-christmas-stocking-stuffers" },
          { label: "Secret Santa Gifts", href: "/blog/pilates-secret-santa-christmas-gifts" },
          { label: "Luxury Recovery Gifts", href: "/blog/luxury-recovery-christmas-gifts-for-pilates" },
          { label: "Fitness Tech Gifts", href: "/blog/fitness-tech-christmas-gifts-for-pilates-lovers" },
          { label: "Luxury Gifts for Him", href: "/blog/luxury-fitness-christmas-gifts-for-him" },
          { label: "Home Studio Gift", href: "/blog/home-pilates-studio-christmas-gift" },
          { label: "Home Machine Gifts", href: "/blog/best-home-workout-machine-christmas-gift" },
          { label: "Lagree Micro Gift", href: "/blog/lagree-micro-christmas-gift" },
          { label: "Gifts Over $500", href: "/blog/pilates-christmas-gifts-over-500" },
        ],
      },
      {
        label: "Advent",
        links: [
          { label: "Pilates & Yoga", href: "/blog/best-pilates-yoga-advent-calendars" },
          { label: "Fitness & Gym", href: "/blog/best-fitness-gym-advent-calendars" },
          { label: "Sports", href: "/blog/best-sports-advent-calendars" },
          { label: "Wellness & Self-Care", href: "/blog/best-wellness-self-care-advent-calendars" },
        ],
      },
      {
        label: "For someone",
        links: [
          { label: "Gifts for Girlfriend", href: "/blog/best-pilates-gifts-for-girlfriend" },
          { label: "Gifts for Him", href: "/blog/best-pilates-gifts-for-him" },
          { label: "Gifts for Mom", href: "/blog/best-pilates-gifts-for-mom" },
          { label: "Gifts for Instructor", href: "/blog/best-pilates-gifts-for-pilates-instructor" },
          { label: "Gifts for Beginners", href: "/blog/best-pilates-gifts-for-beginners" },
        ],
      },
      {
        label: "By budget",
        links: [
          { label: "Gifts Under $50", href: "/blog/best-pilates-gifts-under-50" },
          { label: "Gifts Under $100", href: "/blog/best-pilates-gifts-under-100" },
          { label: "Gift Sets & Bundles", href: "/blog/best-pilates-gift-sets" },
          { label: "Luxury Gifts", href: "/blog/best-luxury-pilates-gifts" },
          { label: "Reformer as a Gift", href: "/blog/best-pilates-reformer-gift" },
          { label: "Reformer Gift Under $500", href: "/blog/best-pilates-reformer-gift-under-500" },
        ],
      },
    ],
    featured: { title: "Best Pilates Christmas Gifts (2026)", href: "/blog/best-pilates-christmas-gifts", image: "/pictures/stitch-studio-entryway.png" },
  },
  {
    label: "Tech & Recovery",
    groups: [
      {
        label: "Wearables",
        links: [
          { label: "Smart Watch", href: "/blog/best-smartwatch-for-pilates" },
          { label: "Smart Ring", href: "/blog/best-smart-ring-for-pilates" },
          { label: "Heart Rate Monitor", href: "/blog/best-heart-rate-monitor-for-pilates-and-spin" },
        ],
      },
      {
        label: "Recovery",
        links: [
          { label: "Massage Gun", href: "/blog/best-massage-gun-for-pilates" },
          { label: "Vibrating Foam Roller", href: "/blog/best-vibrating-foam-roller-for-pilates" },
          { label: "Red Light Therapy", href: "/blog/best-red-light-therapy-device-for-pilates" },
          { label: "Personal Fan", href: "/blog/best-personal-fan-for-home-gym" },
        ],
      },
    ],
    featured: { title: "Best Smart Ring for Pilates (2026): Oura & Budget Picks", href: "/blog/best-smart-ring-for-pilates", image: "/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg" },
    all: { label: "All tech & devices", href: "/blog?category=Tech+%26+Devices" },
  },
];

const b = (slug: string) => `/blog/${slug}`;
const c = (slug: string) => `/cities/${slug}`;

const JOURNAL_TABS: MenuTab[] = [
  {
    label: "Start here",
    groups: [
      {
        label: "New to Pilates",
        links: [
          { label: "Beginner's Guide to Reformer", href: b("beginners-guide-to-reformer-pilates") },
          { label: "Exercises for Beginners", href: b("pilates-exercises-for-beginners") },
          { label: "What to Wear to Pilates", href: b("what-to-wear-to-pilates") },
          { label: "Is Reformer Pilates Worth It?", href: b("is-reformer-pilates-worth-it") },
          { label: "How Much Does Pilates Cost?", href: b("how-much-does-pilates-cost") },
        ],
      },
      {
        label: "Build the habit",
        links: [
          { label: "How Often to Do Pilates", href: b("how-often-should-you-do-pilates") },
          { label: "A Consistent Practice", href: b("how-to-build-a-consistent-pilates-practice") },
          { label: "Morning Routine", href: b("pilates-morning-routine") },
          { label: "Wall Pilates Guide", href: b("wall-pilates-guide") },
          { label: "Pilates Before or After Cardio", href: b("pilates-before-or-after-cardio") },
          { label: "Online Pilates Classes", href: b("best-online-pilates-classes") },
        ],
      },
    ],
    featured: { title: "Beginner's Guide to Reformer Pilates (2026): What to Expect", href: b("beginners-guide-to-reformer-pilates"), image: "/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg" },
    all: { label: "All beginner guides", href: "/blog?category=Beginners" },
  },
  {
    label: "The Method",
    groups: [
      {
        label: "Principles",
        links: [
          { label: "The 6 Core Principles", href: b("6-core-principles-of-pilates-explained") },
          { label: "Breathing Techniques", href: b("pilates-breathing-techniques") },
          { label: "History of Pilates", href: b("pilates-history") },
          { label: "Classical vs Contemporary", href: b("classical-vs-contemporary-pilates") },
          { label: "The Apparatus Explained", href: b("pilates-apparatus-guide") },
        ],
      },
      {
        label: "Pilates vs",
        links: [
          { label: "Reformer vs Mat", href: b("pilates-reformer-vs-mat") },
          { label: "Pilates vs Yoga", href: b("pilates-vs-yoga") },
          { label: "Pilates vs Gym", href: b("pilates-vs-gym") },
          { label: "Pilates vs Barre", href: b("pilates-vs-barre") },
          { label: "Lagree vs Pilates", href: b("lagree-vs-pilates") },
        ],
      },
    ],
    featured: { title: "The 6 Core Principles of Pilates Explained", href: b("6-core-principles-of-pilates-explained"), image: "/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg" },
    all: { label: "All method articles", href: "/blog?category=Method" },
  },
  {
    label: "Health & Body",
    groups: [
      {
        label: "Pain & joints",
        links: [
          { label: "Back Pain", href: b("pilates-for-back-pain") },
          { label: "Neck Pain", href: b("pilates-for-neck-pain") },
          { label: "Shoulder Pain", href: b("pilates-for-shoulder-pain") },
          { label: "Hip Pain", href: b("pilates-for-hip-pain") },
          { label: "Knee Pain", href: b("pilates-for-knee-pain") },
          { label: "Sciatica", href: b("pilates-for-sciatica") },
          { label: "Scoliosis", href: b("pilates-for-scoliosis") },
          { label: "Arthritis", href: b("pilates-for-arthritis") },
          { label: "Osteoporosis", href: b("pilates-for-osteoporosis") },
          { label: "Fibromyalgia", href: b("pilates-for-fibromyalgia") },
        ],
      },
      {
        label: "Life stages",
        links: [
          { label: "Pregnancy", href: b("pilates-and-pregnancy") },
          { label: "Postnatal Pilates", href: b("postnatal-pilates") },
          { label: "Diastasis Recti", href: b("pilates-for-diastasis-recti") },
          { label: "Pelvic Floor", href: b("pilates-for-pelvic-floor") },
          { label: "Menopause", href: b("pilates-for-menopause") },
          { label: "Seniors", href: b("pilates-for-seniors") },
        ],
      },
      {
        label: "Results",
        links: [
          { label: "Weight Loss", href: b("pilates-for-weight-loss") },
          { label: "Flat Stomach", href: b("pilates-for-flat-stomach") },
          { label: "Does Pilates Build Muscle?", href: b("does-pilates-build-muscle") },
          { label: "Calories Burned", href: b("how-many-calories-does-pilates-burn") },
          { label: "How Long to See Results", href: b("how-long-to-see-results-pilates") },
          { label: "Posture", href: b("pilates-for-posture") },
          { label: "Anxiety", href: b("pilates-for-anxiety") },
          { label: "Office Workers", href: b("pilates-for-office-workers") },
        ],
      },
    ],
    featured: { title: "Pilates for Back Pain (2026): What the Research Shows", href: b("pilates-for-back-pain"), image: "/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg" },
    all: { label: "All health articles", href: "/blog?category=Health" },
  },
  {
    label: "Training",
    groups: [
      {
        label: "Cross-training",
        links: [
          { label: "Pilates for Athletes", href: b("pilates-for-athletes") },
          { label: "Pilates for Runners", href: b("pilates-for-runners") },
          { label: "Pilates for Cyclists", href: b("pilates-for-cyclists") },
          { label: "Pilates for Men", href: b("pilates-for-men") },
        ],
      },
    ],
    featured: { title: "Pilates for Athletes (2026): Cross-Training That Works", href: b("pilates-for-athletes"), image: "/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg" },
    all: { label: "All performance articles", href: "/blog?category=Performance" },
  },
  {
    label: "Studios & Teaching",
    groups: [
      {
        label: "Choosing well",
        links: [
          { label: "Find a Good Studio", href: b("how-to-find-a-good-pilates-studio") },
          { label: "Choose an Instructor", href: b("how-to-choose-a-pilates-instructor") },
          { label: "Club Pilates Review", href: b("club-pilates-review") },
          { label: "Pilates Retreats in Europe", href: b("best-pilates-retreats-europe") },
          { label: "Best Pilates Books", href: b("best-pilates-books") },
        ],
      },
      {
        label: "Going pro",
        links: [
          { label: "Become an Instructor", href: b("how-to-become-a-pilates-instructor") },
          { label: "Open a Pilates Studio", href: b("how-to-open-a-pilates-studio") },
          { label: "Studio Equipment Costs", href: b("pilates-studio-equipment-cost-breakdown") },
          { label: "Home Studio Setup", href: b("home-pilates-studio-setup") },
        ],
      },
    ],
    featured: { title: "How to Find a Good Pilates Studio (2026): Green & Red Flags", href: b("how-to-find-a-good-pilates-studio"), image: "/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg" },
    all: { label: "City studio guides", href: "/cities" },
  },
];

const BRANDS_TABS: MenuTab[] = [
  {
    label: "Brands",
    groups: [
      {
        label: "Activewear",
        links: [
          { label: "Lululemon", href: b("lululemon-pilates") },
          { label: "Lululemon Align Review", href: b("lululemon-align-review") },
          { label: "Alo Yoga", href: b("alo-yoga-pilates") },
          { label: "Varley", href: b("varley-pilates-activewear") },
          { label: "Splits59", href: b("splits59-pilates") },
          { label: "Sweaty Betty", href: b("sweaty-betty-pilates") },
          { label: "Athleta", href: b("athleta-pilates") },
          { label: "Vuori", href: b("vuori-pilates") },
          { label: "Beyond Yoga", href: b("beyond-yoga-pilates") },
          { label: "Free People Movement", href: b("free-people-movement-pilates") },
          { label: "Gymshark", href: b("gymshark-pilates") },
          { label: "Girlfriend Collective", href: b("girlfriend-collective-pilates") },
        ],
      },
      {
        label: "Studio equipment",
        links: [
          { label: "Balanced Body", href: b("balanced-body-pilates") },
          { label: "Merrithew / STOTT", href: b("merrithew-pilates") },
          { label: "Peak Pilates", href: b("peak-pilates") },
          { label: "Gratz", href: b("gratz-pilates") },
          { label: "BASI Systems", href: b("basi-systems-pilates") },
          { label: "Elina Pilates", href: b("elina-pilates") },
          { label: "Lagree Fitness", href: b("lagree-fitness") },
        ],
      },
      {
        label: "Home equipment",
        links: [
          { label: "Align-Pilates", href: b("align-pilates-reformer-review") },
          { label: "AeroPilates", href: b("aeropilates-review") },
          { label: "Your Reformer", href: b("your-reformer-pilates") },
          { label: "PersonalHour", href: b("personalhour-pilates") },
          { label: "Manduka", href: b("manduka-pilates-mat") },
        ],
      },
      {
        label: "Head to head",
        links: [
          { label: "Balanced Body vs Merrithew", href: b("balanced-body-vs-merrithew") },
          { label: "Align-Pilates vs Balanced Body", href: b("align-pilates-vs-balanced-body") },
          { label: "Allegro 2 vs SPX Max", href: b("balanced-body-allegro-2-vs-merrithew-spx-max") },
          { label: "SPX Max vs V2 Max", href: b("merrithew-spx-max-vs-v2-max") },
          { label: "Commercial vs Home Reformer", href: b("commercial-vs-home-pilates-reformer") },
          { label: "Align vs Alo Airbrush", href: b("lululemon-align-vs-alo-airbrush") },
        ],
      },
    ],
    featured: { title: "Best Pilates Reformer Brands (2026): Complete Brand Guide", href: b("best-pilates-reformer-brands"), image: "/pictures/roxana-popovici-cZ0WYsBFHhs-unsplash.jpg" },
    all: { label: "All brand guides", href: "/brands" },
  },
];

const CITIES_TABS: MenuTab[] = [
  {
    label: "Europe",
    groups: [
      { label: "UK & Ireland", links: [["London", "london"], ["Manchester", "manchester"], ["Edinburgh", "edinburgh"], ["Dublin", "dublin"]].map(([l, s]) => ({ label: l, href: c(s) })) },
      { label: "Central Europe", links: [["Paris", "paris"], ["Amsterdam", "amsterdam"], ["Berlin", "berlin"], ["Munich", "munich"], ["Vienna", "vienna"], ["Zurich", "zurich"], ["Geneva", "geneva"], ["Lausanne", "lausanne"]].map(([l, s]) => ({ label: l, href: c(s) })) },
      { label: "Southern Europe", links: [["Barcelona", "barcelona"], ["Madrid", "madrid"], ["Lisbon", "lisbon"], ["Milan", "milan"], ["Rome", "rome"]].map(([l, s]) => ({ label: l, href: c(s) })) },
      { label: "Nordics", links: [["Stockholm", "stockholm"], ["Copenhagen", "copenhagen"]].map(([l, s]) => ({ label: l, href: c(s) })) },
    ],
    featured: { title: "Best Pilates Studios in London (2026)", href: c("london"), image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80" },
    all: { label: "All 65 cities", href: "/cities" },
  },
  {
    label: "United States",
    groups: [
      { label: "East Coast", links: [["New York", "new-york"], ["Boston", "boston"], ["Philadelphia", "philadelphia"], ["Washington DC", "washington-dc"], ["Charlotte", "charlotte"], ["Raleigh", "raleigh"], ["Charleston", "charleston"], ["Atlanta", "atlanta"]].map(([l, s]) => ({ label: l, href: c(s) })) },
      { label: "Florida & South", links: [["Miami", "miami"], ["Fort Lauderdale", "fort-lauderdale"], ["Palm Beach", "palm-beach"], ["Tampa", "tampa"], ["Nashville", "nashville"], ["New Orleans", "new-orleans"], ["Austin", "austin"], ["Dallas", "dallas"], ["Houston", "houston"]].map(([l, s]) => ({ label: l, href: c(s) })) },
      { label: "Central", links: [["Chicago", "chicago"], ["Minneapolis", "minneapolis"], ["Denver", "denver"], ["Boulder", "boulder"], ["Salt Lake City", "salt-lake-city"]].map(([l, s]) => ({ label: l, href: c(s) })) },
      { label: "West", links: [["Los Angeles", "los-angeles"], ["San Francisco", "san-francisco"], ["San Diego", "san-diego"], ["Seattle", "seattle"], ["Portland", "portland"], ["Phoenix", "phoenix"], ["Scottsdale", "scottsdale"], ["Las Vegas", "las-vegas"], ["Honolulu", "honolulu"]].map(([l, s]) => ({ label: l, href: c(s) })) },
    ],
    featured: { title: "Best Pilates Studios in New York City (2026)", href: c("new-york"), image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80" },
    all: { label: "All 65 cities", href: "/cities" },
  },
  {
    label: "Canada & Mexico",
    groups: [
      { label: "Canada", links: [["Toronto", "toronto"], ["Vancouver", "vancouver"], ["Montreal", "montreal"], ["Calgary", "calgary"]].map(([l, s]) => ({ label: l, href: c(s) })) },
      { label: "Mexico", links: [{ label: "Mexico City", href: c("mexico-city") }] },
    ],
    featured: { title: "Best Pilates Studios in Toronto (2026)", href: c("toronto"), image: "https://images.unsplash.com/photo-1517090186835-e348b621c9ca?w=800&q=80" },
    all: { label: "All 65 cities", href: "/cities" },
  },
  {
    label: "Asia & Middle East",
    groups: [
      { label: "Cities", links: [["Tokyo", "tokyo"], ["Singapore", "singapore"], ["Hong Kong", "hong-kong"], ["Dubai", "dubai"]].map(([l, s]) => ({ label: l, href: c(s) })) },
    ],
    featured: { title: "Best Pilates Studios in Tokyo (2026)", href: c("tokyo"), image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80" },
    all: { label: "All 65 cities", href: "/cities" },
  },
  {
    label: "Australia & NZ",
    groups: [
      { label: "Australia", links: [["Sydney", "sydney"], ["Melbourne", "melbourne"], ["Brisbane", "brisbane"], ["Perth", "perth"], ["Gold Coast", "gold-coast"]].map(([l, s]) => ({ label: l, href: c(s) })) },
      { label: "New Zealand", links: [{ label: "Auckland", href: c("auckland") }] },
    ],
    featured: { title: "Best Pilates Studios in Sydney (2026)", href: c("sydney"), image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80" },
    all: { label: "All 65 cities", href: "/cities" },
  },
];

const ABOUT_TABS: MenuTab[] = [
  {
    label: "About",
    groups: [
      { label: "The club", links: [{ label: "About Us", href: "/#about" }, { label: "Contact", href: "/contact" }] },
      { label: "Work with us", links: [{ label: "Advertise & Partnerships", href: "/advertise" }] },
      { label: "Policies", links: [{ label: "Affiliate Disclosure", href: "/affiliate-disclosure" }, { label: "Privacy Policy", href: "/privacy" }, { label: "Terms", href: "/terms" }] },
    ],
    intro: {
      title: "The independent guide for serious practitioners.",
      body: "We research studios, review equipment, and document the method. We are never paid to feature a studio, and we are transparent about the affiliate links that keep this resource free.",
    },
  },
];

export const MENUS: Menu[] = [
  { id: "journal", label: "Journal", href: "/blog", tabs: JOURNAL_TABS },
  { id: "brands", label: "Brands", href: "/brands", tabs: BRANDS_TABS },
  { id: "cities", label: "Cities", href: "/cities", tabs: CITIES_TABS },
  { id: "about", label: "About", href: "/#about", tabs: ABOUT_TABS },
];

export const SHOP_MENU: Menu = { id: "shop", label: "Shop Gear", tabs: SHOP_CATEGORIES };
