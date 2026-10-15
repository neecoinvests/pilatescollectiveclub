import type { GuideItem } from "@/components/EquipmentGuide";

// Verified high-value gift listings (Amazon Creators API, checked 2026-10-15).
// Specs are taken from each listing. Pages spread an entry and override
// badge/body/pros/cons for their own context. Reformers and studio apparatus
// live in reformerCatalog.ts.

export const GIFTS_CHECKED = "October 15, 2026";
export const GIFTS_CHECKED_ISO = "2026-10-15";

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

type Base = Omit<GuideItem, "badge" | "body"> & { body: string };

export const GIFTS = {
  normatec3Legs: {
    id: "hyperice-normatec-3-legs", name: "Hyperice Normatec 3 Legs", brand: "Hyperice", price: "$899.00", url: amz("B0B72QBWHC"),
    availability: "in-stock", soldBy: "Hyperice",
    specs: ["Dynamic air compression boots for the legs", "7 levels of compression", "Patented Pulse technology across 5 overlapping zones, with ZoneBoost", "Unlocks extra features and customisation in the Hyperice app"],
    body: "The compression boots you see in pro locker rooms and recovery studios. Air chambers inflate in sequence from the feet up for a massaging squeeze that leaves legs feeling fresh after a hard week of classes.",
  },
  normatec3Lower: {
    id: "hyperice-normatec-3-lower-body", name: "Hyperice Normatec 3 Lower Body (Legs + Hips)", brand: "Hyperice", price: "$1,149.00", url: amz("B0B94WYYKP"),
    availability: "in-stock", soldBy: "Hyperice",
    specs: ["Normatec 3 system with leg and hip attachments", "Patented precision pulse technology", "Refreshed design with reduced weight and an intuitive interface", "App connectivity"],
    body: "Normatec 3 with both the leg boots and the hip attachment, so it covers glutes and hips as well as legs. The better choice for anyone whose tightness sits in the hips and lower back.",
  },
  normatec3Full: {
    id: "hyperice-normatec-3-full-body", name: "Hyperice Normatec 3 Full Body (Legs, Arms + Hips)", brand: "Hyperice", price: "$1,549.00", url: amz("B0BPTJF75D"),
    availability: "in-stock", soldBy: "Hyperice",
    specs: ["Normatec 3 system with leg, arm and hip attachments", "Patented precision pulse technology", "Refreshed design with reduced weight", "App connectivity"],
    body: "The complete Normatec 3 kit, with attachments for legs, arms and hips. The ultimate recovery gift for someone who trains most days.",
  },
  normatecElite: {
    id: "hyperice-normatec-elite", name: "Hyperice Normatec Elite (Wireless Boots)", brand: "Hyperice", price: "$1,099.00", url: amz("B0D4876TX4"),
    availability: "in-stock", soldBy: "Hyperice",
    specs: ["Fully wireless, hose-free compression boots", "7 compression levels with adjustable treatment time", "HyperSync keeps both legs synchronised", "Hyperice app via Bluetooth"],
    body: "Normatec without the hoses or the control box: the compression is built into the boots, so they are quicker to use and easier to store.",
  },
  normatecHips: {
    id: "hyperice-normatec-elite-hips", name: "Hyperice Normatec Elite Hips", brand: "Hyperice", price: "$599.00", url: amz("B0FHBZCGDC"),
    availability: "in-stock", soldBy: "Hyperice",
    specs: ["Cordless, with up to 4 hours of battery life", "7 compression levels", "Two overlapping zones covering IT bands, glutes, hips and lower back", "Adjustable velcro straps"],
    body: "A cordless compression wrap for the hips and lower back, the areas that tighten most for Pilates and Lagree regulars.",
  },
  jetbootsPrime: {
    id: "therabody-jetboots-prime", name: "Therabody JetBoots Prime", brand: "Therabody", price: "$549.99", url: amz("B0DGRPRYD9"),
    availability: "in-stock", soldBy: "TheraGun",
    specs: ["Wireless compression boots that fold to fit in a backpack", "Built-in control panel for time and pressure", "TruGrade pressure tailored to leg size, 4 overlapping chambers", "3-hour battery; drawstring backpack included", "Regular size, 30–34\" inseam (other sizes on the listing)"],
    body: "Therabody's lighter, more affordable wireless boots. A good way into compression recovery without the cost of Normatec.",
  },
  jetbootsProPlus: {
    id: "therabody-jetboots-pro-plus", name: "Therabody JetBoots PRO Plus", brand: "Therabody", price: "$1,149.99", url: amz("B0DGRT2YGH"),
    availability: "in-stock", soldBy: "TheraGun",
    specs: ["Compression, vibration and light therapy in one set of boots", "Completely wireless", "8 built-in presets", "TruGrade and FastFlush technologies", "Regular size, 30–34\" inseam"],
    body: "Therabody's flagship boots add vibration and light therapy to wireless compression. A true luxury recovery gift.",
  },
  higherdose: {
    id: "higherdose-infrared-sauna-blanket", name: "HigherDOSE Infrared Sauna Blanket", brand: "HigherDOSE", price: "$699.00", url: amz("B09M8YQ4KB"),
    availability: "low-stock", soldBy: "FRONT ROW",
    specs: ["Portable infrared sauna blanket for home", "9 temperature levels with a handheld controller", "Low-EMF design", "Lined with amethyst, tourmaline, charcoal and clay, per the listing"],
    body: "A sauna session at home, no installation needed. The wellness gift that pairs naturally with a Pilates habit.",
  },
  theragunProPlus: {
    id: "therabody-theragun-pro-plus", name: "Therabody Theragun PRO Plus", brand: "Therabody", price: "$649.99", url: amz("B0CG2G7RQY"),
    availability: "in-stock", soldBy: "TheraGun",
    specs: ["Deep-tissue percussive massage gun", "Combines massage with vibration and heat therapy", "Cold therapy attachment sold separately", "Therabody's top-of-the-range model"],
    body: "Therabody's most advanced massage gun, adding heat and vibration to deep-tissue percussion. The one to buy if price is no object.",
  },
  theragunPro: {
    id: "therabody-theragun-pro", name: "Therabody Theragun PRO (5th Gen)", brand: "Therabody", price: "$529.99", url: amz("B0B6RL7NQJ"),
    availability: "low-stock", soldBy: "TheraGun",
    specs: ["Professional-grade deep-tissue massage gun", "6 attachments", "Built-in routines: Sleep, Warm Up, Post Workout Recovery and Theragun Break", "Patented triangle handle; Bluetooth app"],
    body: "The classic professional Theragun, with six attachments and built-in routines for warm-up and recovery.",
  },
  theragunPrimePlus: {
    id: "therabody-theragun-prime-plus", name: "Therabody Theragun Prime Plus (Heated)", brand: "Therabody", price: "$429.99", url: amz("B0DD1YS393"),
    availability: "in-stock", soldBy: "TheraGun",
    specs: ["Heated massage gun with 3 heat levels", "5 speeds", "4 attachments", "Works with Theragun Plus attachments such as Cold Plus and Vibration Plus"],
    body: "A heated massage gun at a lower price than the PRO models. Heat makes it especially good for tight hips and lower back.",
  },
  thermBack: {
    id: "therabody-thermback-led", name: "Therabody ThermBack LED", brand: "Therabody", price: "$329.99", url: amz("B0DV7LY2QW"),
    availability: "in-stock", soldBy: "TheraGun",
    specs: ["Lower-back wrap combining heat, far infrared, LED light and vibration", "3 heat levels and adjustable vibration", "Built-in control panel"],
    body: "A heated, vibrating wrap for the lower back. A thoughtful gift for anyone who sits all day and trains in the evening.",
  },
  smartGoggles: {
    id: "therabody-smartgoggles", name: "Therabody SmartGoggles (2nd Gen)", brand: "Therabody", price: "$219.99", url: amz("B0DD1K3HD6"),
    availability: "in-stock", soldBy: "TheraGun",
    specs: ["Heat, compression and vibration for the eyes, forehead and temples", "SmartRelax mode uses a heart-rate sensor", "3 preset treatments", "100% blackout design"],
    body: "A heated eye and temple massager for winding down. An indulgent gift that complements a recovery set.",
  },
  oura5: {
    id: "oura-ring-5", name: "Oura Ring 5", brand: "OURA", price: "$399.00", url: amz("B0GRJVBPH3"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Smart ring that tracks 50+ health metrics, including sleep, activity and stress", "40% smaller than the previous generation, per the listing", "All-titanium design", "Uses its own sizing: use the Oura Ring 5 sizing kit", "First month of membership included, then $5.99/month"],
    body: "A discreet tracker for sleep, activity and recovery. The link opens the silver size 9; choose the size on the listing after using the sizing kit.",
  },
  balaBeam: {
    id: "bala-beam", name: "Bala Beam (15 lb)", brand: "Bala", price: "$119.00", url: amz("B0CMR26533"),
    availability: "in-stock", soldBy: "Bala Bangles",
    specs: ["15 lb weighted bar", "Ergonomic, sculptural shape with evenly distributed weight", "For strength, functional and Pilates-based workouts"],
    body: "Bala's weighted bar, as good-looking as it is useful, for adding load to mat Pilates and strength work at home.",
  },
  lagreeMicro: {
    id: "lagree-micro", name: "The Micro by Lagree Fitness", brand: "Lagree Fitness", price: "$990.00", url: amz("B0BBT7YV93"),
    availability: "in-stock", soldBy: "Lagree Fitness",
    specs: ["Compact, lightweight and portable Lagree machine", "Low-impact, high-intensity strength and cardio", "Fits users as tall as 6'8\", per the listing", "Stores under a bed, against a wall or on a bike rack"],
    body: "Lagree Fitness' home machine, built to deliver the Megaformer-style workout in a fraction of the space.",
  },
  microPlatform: {
    id: "lagree-micro-rear-platform", name: "Lagree Fitness Micro Rear Platform", brand: "Lagree Fitness", price: "$290.00", url: amz("B0BKN2LSWD"),
    availability: "in-stock", soldBy: "Lagree Fitness",
    specs: ["Adds a rear platform for moves like express lunge and giant wheelbarrow", "10.5\" L × 8.5\" W × 6\" H", "Makes the Micro 81.5\" L × 20\" W × 6\" H"],
    body: "The add-on that opens up the most extra exercises on the Micro.",
  },
  microHandles: {
    id: "lagree-micro-handlebars", name: "Lagree Fitness Micro Handlebars (Pair)", brand: "Lagree Fitness", price: "$190.00", url: amz("B0BKMP89SH"),
    availability: "in-stock", soldBy: "Lagree Fitness",
    specs: ["Sold as a pair", "Fit the front or back of the Micro", "Rear use needs the rear platform"],
    body: "Handlebars for extra stability and more Lagree moves.",
  },
  microCables: {
    id: "lagree-micro-pulley-cables", name: "Lagree Fitness Micro Pulley Cables", brand: "Lagree Fitness", price: "$230.00", url: amz("B0BYMD4S91"),
    availability: "low-stock", soldBy: "Lagree Fitness",
    specs: ["Pulley cables for the Micro", "Adds upper-body pulling exercises"],
    body: "Cables that add upper-body pulling work to the Micro.",
  },
  echelon: {
    id: "echelon-smart-connect", name: "Echelon Smart Connect Fitness Bike", brand: "Echelon", price: "$1,199.99", url: amz("B07XGN9G8W"),
    availability: "in-stock", soldBy: "Echelon Fitness Marketplace",
    specs: ["22\" HD touchscreen that rotates 180° for off-bike workouts", "32 levels of motorized resistance", "Dual-sided pedals with SPD clips and toe cages", "30-day Echelon membership trial included"],
    body: "A connected indoor bike with a big rotating screen, for anyone who likes to mix Pilates with cardio classes at home.",
  },
  schwinnIC4: {
    id: "schwinn-ic4", name: "Schwinn IC4 Indoor Cycling Bike", brand: "Schwinn", price: "$795.99", url: amz("B07WZXSDKW"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Works with apps such as Peloton and Zwift (separate subscriptions)", "2-month JRNY mobile-only membership trial", "Sold and shipped by Amazon.com"],
    body: "A well-regarded indoor bike that works with the apps people already use, at a lower price than screen-equipped bikes.",
  },
  paetaWoodFold: {
    id: "paeta-wooden-foldable-reformer", name: "PAETA Wooden Foldable Reformer with Sitting Box", brand: "PAETA", price: "$699.98", url: amz("B0D7M7JNFV"),
    availability: "in-stock", soldBy: "PAETA US",
    specs: ["Solid oak frame supporting up to 500 lb, per the listing", "Foldable", "Platform, carriage, adjustable headrest and shoulder pads included", "Sitting box included"],
    body: "A wooden, foldable home reformer with a sitting box, at the gateway price for a real reformer gift.",
  },
} satisfies Record<string, Base>;

export function gift(key: keyof typeof GIFTS, overrides: Partial<GuideItem> & { badge: string }): GuideItem {
  return { ...(GIFTS[key] as Base), ...overrides } as GuideItem;
}
