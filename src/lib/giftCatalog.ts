import type { GuideItem } from "@/components/EquipmentGuide";

// Verified high-value gift listings (Amazon Creators API, checked 2026-10-16).
// Specs are taken from each listing. Pages spread an entry and override
// badge/body/pros/cons for their own context. Reformers and studio apparatus
// live in reformerCatalog.ts.

export const GIFTS_CHECKED = "October 20, 2026";
export const GIFTS_CHECKED_ISO = "2026-10-20";

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
    availability: "back-order", soldBy: "TheraGun",
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
    id: "schwinn-ic4", name: "Schwinn IC4 Indoor Cycling Bike", brand: "Schwinn", price: "$899.00", url: amz("B07WZXSDKW"),
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
  appleWatch12: {
    id: "apple-watch-series-12", name: "Apple Watch Series 12 (GPS, 42mm)", brand: "Apple", price: "$389.99", url: amz("B0HJ9ZXCSD"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Measures HRV as often as every five minutes, per the listing", "Overnight health metrics in the Vitals app", "Readiness score for the day", "Heart Rate Zones and workout metrics"],
    body: "Apple's main smartwatch: health, sleep and workout tracking that suits someone who mixes Pilates with walking, running or strength work. The link opens the 42mm Light Gold; other sizes and colours are on the listing.",
  },
  appleWatchUltra4: {
    id: "apple-watch-ultra-4", name: "Apple Watch Ultra 4 (GPS + Cellular, 49mm)", brand: "Apple", price: "$774.00", url: amz("B0HJB6C34Y"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Black titanium case, 49mm", "GPS + Cellular", "Up to 45 hours of battery in Max Extended mode, per the listing", "HRV, Vitals and readiness tracking"],
    body: "Apple's toughest, longest-lasting watch, with cellular built in. The luxury pick for someone who trains every day.",
  },
  appleWatchSE3: {
    id: "apple-watch-se-3", name: "Apple Watch SE 3 (GPS, 40mm)", brand: "Apple", price: "$239.99", url: amz("B0HJ9ZNRKT"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Temperature sensing with Vitals and Cycle Tracking apps", "Workout and step tracking", "Fall and crash detection", "18-hour battery; charges up to twice as fast as SE 2"],
    body: "The most affordable current Apple Watch, with the essentials for tracking workouts and sleep.",
  },
  garminVenu4: {
    id: "garmin-venu-4", name: "Garmin Venu 4 (41mm)", brand: "Garmin", price: "$549.99", url: amz("B0FRGDGRXY"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Up to 10 days of battery life", "Stainless steel design with a built-in flashlight", "Sleep score and personalised sleep coaching", "Health status feature tracks heart rate, HRV and skin temperature trends"],
    body: "Garmin's lifestyle smartwatch: long battery life and detailed health and sleep tracking in a refined 41mm design.",
  },
  garminFR970: {
    id: "garmin-forerunner-970", name: "Garmin Forerunner 970 (47mm, Titanium)", brand: "Garmin", price: "$749.99", url: amz("B0F8QWPVNK"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["AMOLED touchscreen with titanium bezel and sapphire lens", "Up to 15 days in smartwatch mode, 26 hours in GPS mode", "Built-in LED flashlight", "Garmin Coach running and triathlon plans"],
    body: "Garmin's premium running and triathlon watch, for the Pilates lover who also trains for races.",
  },
  galaxyWatch8: {
    id: "samsung-galaxy-watch-8", name: "Samsung Galaxy Watch 8 (44mm)", brand: "Samsung", price: "$318.99", url: amz("B0F7PZNZQD"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Advanced sleep coaching", "Running Coach with real-time feedback", "Rotating bezel and Quick Button", "Lighter, thinner design than before, per the listing"],
    body: "The best smartwatch for Android phone users, with sleep coaching and an energy score.",
  },
  whoopOne: {
    id: "whoop-one", name: "WHOOP 5.0 with 12-Month WHOOP One Membership", brand: "WHOOP", price: "$199.00", url: amz("B0DY2VVZWZ"),
    availability: "in-stock", soldBy: "WHOOP AUTHORIZED",
    specs: ["Price is a 12-month membership; the WHOOP 5.0 device is included", "Screenless design for 24/7 wear", "Sleep tracking including REM and deep sleep", "14+ day battery life"],
    body: "A screenless band that tracks sleep, strain and recovery. The price covers a full year of membership with the device included.",
  },
  whoopLife: {
    id: "whoop-life", name: "WHOOP MG with 12-Month WHOOP Life Membership", brand: "WHOOP", price: "$359.00", url: amz("B0DY2PB7RB"),
    availability: "in-stock", soldBy: "WHOOP AUTHORIZED",
    specs: ["Price is a 12-month WHOOP Life membership; the WHOOP MG device is included", "On-demand ECG to check for signs of AFib, per the listing", "WHOOP AI coaching across 140+ metrics", "HSA/FSA eligible, per the listing"],
    body: "WHOOP's top tier, adding ECG and heart health features to sleep and recovery tracking.",
  },
  airpodsPro3: {
    id: "apple-airpods-pro-3", name: "Apple AirPods Pro 3", brand: "Apple", price: "$199.00", url: amz("B0FQFB8FMG"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Active noise cancellation, up to 2x more than AirPods Pro 2, per the listing", "Built-in heart rate sensing for 50 workout types", "Live Translation with Apple Intelligence"],
    body: "Apple's best earbuds, now with heart rate sensing for workouts.",
  },
  powerbeatsPro2: {
    id: "beats-powerbeats-pro-2", name: "Beats Powerbeats Pro 2", brand: "Beats", price: "$249.00", url: amz("B0DT2344N3"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Secure-fit earhooks", "Active noise cancelling", "Heart rate sensors in the earbuds", "Up to 45 hours with the charging case"],
    body: "Workout earbuds with earhooks that stay put through planks, jumps and rolling work.",
  },
  boseQCUltra2: {
    id: "bose-quietcomfort-ultra-earbuds-2", name: "Bose QuietComfort Ultra Earbuds (2nd Gen)", brand: "Bose", price: "$299.00", url: amz("B0F7M3HPBD"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Bose's best noise cancellation in earbuds, per the listing", "CustomTune adapts to the shape of your ears", "Bose Immersive Audio", "IPX4 rated"],
    body: "Premium noise-cancelling earbuds for the commute to class and everything after.",
  },
  hypervolt3Pro: {
    id: "hyperice-hypervolt-3-pro", name: "Hyperice Hypervolt 3 Pro (Heated Head)", brand: "Hyperice", price: "$349.00", url: amz("B0G82HR62V"),
    availability: "in-stock", soldBy: "Hyperice",
    specs: ["6 speeds", "5 attachments including a Heated Head", "4-hour battery; Bluetooth to the Hyperice app", "2.5 lb; carry case included"],
    body: "Hyperice's professional massage gun, now with a heated attachment.",
  },
  marcyMat: {
    id: "marcy-equipment-floor-mat", name: "Marcy Equipment Mat & Floor Protector (78\" x 36\")", brand: "Marcy", price: "$42.29", url: amz("B0041GQH3S"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["78\" \u00d7 36\" \u00d7 0.25\" EVA foam", "Absorbs impact and protects floors", "Non-slip surface to stabilise machines"],
    body: "A floor protector to put under a home machine. Measure the machine first: the Micro with its rear platform is 81.5 inches long, per Lagree Fitness.",
  },
  taviGloves: {
    id: "tavi-half-finger-gloves", name: "TAVI Half Finger Grip Gloves", brand: "TAVI", price: "$31.99", url: amz("B09GPVMF86"),
    availability: "in-stock", soldBy: "The Active Footwear Store",
    specs: ["Half-finger design with full palm coverage", "Extra grip and blister protection", "For Pilates, barre, yoga and weights"],
    body: "Grippy half-finger gloves that many Lagree regulars wear for planks on the carriage and platform.",
  },
  taviSocks: {
    id: "tavi-stacy-slouch-socks", name: "TAVI Stacy Slouch Grip Socks (2-Pack)", brand: "TAVI", price: "$40.00", url: amz("B0GFPGMWWS"),
    availability: "in-stock", soldBy: "The Active Footwear Store",
    specs: ["Patented triangle grip pattern", "Certified organic cotton knit", "Two pairs"],
    body: "Stylish grip socks from a studio favourite brand, the finishing touch for a Lagree gift.",
  },
  lagreeHoodie: {
    id: "i-love-lagree-hoodie", name: "I Love Lagree Pullover Hoodie", brand: "Dreadful Scrawl", price: "$31.99", url: amz("B0CY821PTP"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Classic fit pullover hoodie", "Pouch pocket and double-lined hood", "'I love Lagree' design"],
    body: "A fun fan hoodie to wrap with the machine. It is fan merchandise, not official Lagree Fitness apparel.",
  },
} satisfies Record<string, Base>;

export function gift(key: keyof typeof GIFTS, overrides: Partial<GuideItem> & { badge: string }): GuideItem {
  return { ...(GIFTS[key] as Base), ...overrides } as GuideItem;
}
