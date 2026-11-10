import type { GuideItem } from "@/components/EquipmentGuide";

// Advent calendars verified live on Amazon with the Creators API (November 6, 2026).
// Contents, prices and sellers come from each listing. Pages spread an entry and
// override badge/body/pros/cons for their own context.

export const ADVENT_CHECKED = "November 6, 2026";
export const ADVENT_CHECKED_ISO = "2026-11-06";

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

type Base = Omit<GuideItem, "badge">;

export const ADVENT = {
  // Pilates & yoga
  movinpePilates: {
    id: "movinpe-pilates-advent-calendar", name: "MOVINPE Pilates Advent Calendar 2026", brand: "MOVINPE", price: "$39.99", url: amz("B0HF7C48QX"),
    availability: "in-stock", soldBy: "URANUS-US",
    specs: ["24 different workout accessories, one per day", "Includes a Pilates ring, Pilates ball, grip socks, sliding discs, resistance bands, jump rope, workout gloves and exercise cards", "Drawstring storage bag", "Pink gift box"],
    body: "The most complete Pilates-specific calendar we found: behind the doors are the classic small props, a Pilates ring, a small ball, grip socks and sliders, rather than generic gym gear. MOVINPE is an Amazon brand that makes advent calendars for many hobbies, so expect starter-level props, not studio-grade equipment.",
  },
  jazoztYogaPilates: {
    id: "jazozt-yoga-pilates-advent-calendar", name: "JAZOZT 24-Day Yoga & Pilates Advent Calendar 2026", brand: "JAZOZT", price: "$34.99", url: amz("B0H6BZYZ1W"),
    availability: "in-stock", soldBy: "MaySin Direct",
    specs: ["8\" and 6\" Pilates balls", "Resistance band, fabric exercise band and stretching yoga strap", "Core sliders", "Instruction guide with routines for beginners"],
    body: "Two Pilates balls, a fabric booty band and a stretching strap make this one of the better-equipped mat Pilates calendars, and the instruction guide helps a beginner put each piece to use. A good pick for someone who practices at home between classes.",
  },
  pidouzimFitness: {
    id: "pidouzim-fitness-advent-calendar-women", name: "pidouzim Fitness Advent Calendar 2026 for Women", brand: "pidouzim", price: "$33.99", url: amz("B0H74XDNYC"),
    availability: "in-stock", soldBy: "huonian",
    specs: ["Resistance bands, stretching bands and a yoga ball", "Massage balls and a muscle massage roller", "Jump rope", "Storage bag"],
    body: "Leans toward recovery: alongside the bands and a small yoga ball you get massage balls and a massage roller for tight calves and shoulders after class. A sensible mix of Pilates-style props and release tools.",
  },
  yuzeemingPilates: {
    id: "yuzeeming-pilates-fitness-advent-calendar", name: "YUZEEMING Pilates & Fitness Advent Calendar 2026", brand: "YUZEEMING", price: "$29.89", url: amz("B0HJKX46Q4"),
    availability: "in-stock", soldBy: "YUZEEMING-US",
    specs: ["24 daily surprises", "Pilates ball, Pilates socks and yoga strap named in the listing", "Resistance bands", "Carry bag"],
    body: "A mid-priced Pilates countdown with a ball, grip socks, a strap and bands. The listing is less specific than others about the full 24 items, so treat it as a fun starter set rather than a complete kit.",
  },
  imnbestYoga: {
    id: "imnbest-yoga-self-care-advent-calendar", name: "ImnBest Yoga & Self-Care Fitness Advent Calendar 2026", brand: "ImnBest", price: "$29.99", url: amz("B0HCMWTN4D"),
    availability: "in-stock", soldBy: "OUYI-TECHNOLOGY",
    specs: ["Yoga ball, figure-8 resistance exerciser, resistance bands and a 5-piece band set", "Yoga strap, fitness towel, sweat headbands and non-slip yoga socks", "Self-care extras: candle, lava stone bracelet, massage ball, meditation wind chime, toe separator", "Pink countdown box"],
    body: "Half workout kit, half wind-down kit. Next to the bands, socks and strap are a candle, a massage ball and a meditation chime, which suits someone whose practice is as much about switching off as getting stronger.",
  },
  sunninoFitness: {
    id: "sunnino-fitness-advent-calendar", name: "SUNNINO Fitness Advent Calendar 2026", brand: "SUNNINO", price: "$19.99", url: amz("B0HBR8PRV9"),
    availability: "in-stock", soldBy: "jycmaoyi",
    specs: ["Five resistance bands from extra light to extra heavy", "Jump rope, massage balls, workout gloves, non-slip yoga socks", "Headband, wrist supports, kinesiology tape, hand grip, sweat towel", "Instruction card and drawstring bag"],
    body: "The budget pick, and it is not short on contents: a graded five-band set, grip socks, kinesiology tape and a towel for under $20. More general fitness than Pilates, but every piece is usable on the mat.",
  },
  yogaBook: {
    id: "yoga-advent-calendar-book", name: "Yoga Advent Calendar: A 24-Day Christmas Countdown Book (Dhriti Keyashaan)", brand: "", price: "$12.99", url: amz("B0HGYFRDHJ"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Book, 56 pages, published August 2026", "24 days with 3 poses a day", "Focus on flexibility, stress relief and mindfulness"],
    body: "A practice calendar rather than a box of props: three poses for each day of December. Light, cheap to post and ideal as a stocking filler for someone who already owns a mat.",
  },
  chairYogaBook: {
    id: "chair-yoga-advent-calendar-book", name: "Chair Yoga Advent Calendar (Scott Hamrick)", brand: "", price: "$16.69", url: amz("B0HMTTP5BC"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Book, 95 pages, published October 2026", "24 short seated routines, one per day", "Written for seniors"],
    body: "Gentle seated routines for each day of the countdown, written for older adults. A thoughtful gift for a parent or grandparent who is curious about mindful movement but not ready for the mat.",
  },
  mindfulnessCards: {
    id: "embracing-mindfulness-advent-calendar", name: "Embracing Mindfulness Advent Calendar (24 Cards)", brand: "Embracing Mindfulness", price: "$7.95", url: amz("B0CKL8T7ZJ"),
    availability: "in-stock", soldBy: "Square One Enterprises USA",
    specs: ["24 thick cards, each dated", "A Christmas mindfulness exercise on the back of every card", "Wooden easel to display the card of the day"],
    body: "One small mindfulness task a day instead of a chocolate. It pairs naturally with a breath-focused practice like Pilates and costs less than a coffee.",
  },

  // Fitness & gym
  bearhugFitness: {
    id: "bearhug-fitness-advent-calendar", name: "Bearhug Fitness Advent Calendar 2026", brand: "Bearhug", price: "$49.99", url: amz("B0H4FFB2PG"),
    availability: "in-stock", soldBy: "Bearhug Official",
    specs: ["Resistance bands, jump rope, knee pads, grip trainer, wrist wraps", "Exercise guidance card and fitness dice", "Measurement tools to track progress", "Drawstring bag"],
    body: "Built as a home-gym starter kit, with an exercise card, fitness dice and measuring tools so the 24 days feel like a challenge rather than a pile of gadgets. Marketed at teens and men, but nothing in it is gendered.",
  },
  kederwaFitness: {
    id: "kederwa-fitness-advent-calendar", name: "Kederwa Fitness Advent Calendar 2026", brand: "Kederwa", price: "$43.99", url: amz("B0H6SL5TDY"),
    availability: "in-stock", soldBy: "globalplus",
    specs: ["Resistance tubes with handles, door anchor and ankle straps", "Workout gloves, wrist wraps, grip trainers, jump rope", "Cooling towel, headband, fitness socks, exercise dice"],
    body: "The resistance tubes with a door anchor and ankle straps are the real value here: together they make a usable cable-style home setup for rows, curls and kickbacks once the countdown is over.",
  },
  kelumiFitness: {
    id: "kelumi-fitness-advent-calendar", name: "KELUMI Fitness Advent Calendar 2026", brand: "KELUMI", price: "$39.99", url: amz("B0HHM82Y33"),
    availability: "in-stock", soldBy: "KELUMI",
    specs: ["A guide card in every box: what it is, how to use it, a beginner goal, safety tips", "Three tube bands, three loop bands, D-ring handles, carabiners, door anchor, ankle strap", "24-day check-in card and body measurement record"],
    body: "The best-explained calendar we found. Every box comes with a card telling a beginner what the item is for and a goal for the day, and a check-in tracker turns December into a simple 24-day challenge.",
  },
  movinpeFitness: {
    id: "movinpe-fitness-advent-calendar", name: "MOVINPE Fitness Advent Calendar", brand: "MOVINPE", price: "$29.99", url: amz("B0H8NW93JN"),
    availability: "in-stock", soldBy: "URANUS-US",
    specs: ["Resistance bands, workout gloves, jump rope, knee support wraps", "Sweat headband, wristbands, sports towel, fitness socks, exercise dice", "Drawstring gym bag"],
    body: "A unisex all-rounder at a mid price: bands, a rope, supports and gym accessories in a carry bag. Good for someone who trains at home and the gym.",
  },
  gleemoriaFitness: {
    id: "gleemoria-fitness-advent-calendar", name: "Gleemoria Fitness Gear Advent Calendar 2026", brand: "Gleemoria", price: "$28.99", url: amz("B0HBWL9JNJ"),
    availability: "in-stock", soldBy: "Gleemoria US",
    specs: ["Resistance bands, workout gloves, jump rope, grip strengtheners", "Sports socks, wrist wraps, lifting straps, headbands", "Gym towel and massage ball"],
    body: "Leans toward lifting, with wrist wraps, lifting straps and grip strengtheners alongside the usual bands and rope. A good fit for someone who spends more time under a bar than on a mat.",
  },
  luneetyaFitness: {
    id: "luneetya-fitness-gear-advent-calendar", name: "Luneetya Fitness Gear Advent Calendar 2026", brand: "Luneetya", price: "$24.99", url: amz("B0HC6TD58M"),
    availability: "in-stock", soldBy: "Luneetya",
    specs: ["Sports socks, half-finger gloves, arm sleeve, jump rope", "Massage ball, grip ring, multi-level resistance bands", "Quick-dry towel, knee braces, drawstring bag", "Instruction manual"],
    body: "The lowest-priced gear calendar we would recommend, with an instruction manual for each accessory. Fine as a stocking filler or office secret Santa for the colleague who never misses a run.",
  },
  hyroxBook: {
    id: "ho-ho-hyrox-advent-book", name: "Ho Ho Hyrox: 25 Days of Christmas Hyrox Workouts (James Cormack)", brand: "", price: "$11.99", url: amz("B0HHJTHZR7"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Book, 99 pages, published September 2026", "25 Hyrox-style workouts, one per day", "Beginner to competitor options, with gym and home versions"],
    body: "A workout for every day to Christmas, built around Hyrox stations, with gym and home options. A clever gift for the friend who has just signed up for a race.",
  },
  wodmasBook: {
    id: "merry-wodmas-advent-book", name: "Merry WODmas: 25 Days of Christmas CrossFit Workouts (James Cormack)", brand: "", price: "$11.99", url: amz("B0HJ629X24"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Book, 93 pages, published September 2026", "25 workouts of the day, scaled to Rx+", "Garage-gym options for every day"],
    body: "The CrossFit version from the same author: 25 workouts from scaled to Rx+, each with a garage-gym option. Pairs well with any of the gear calendars above.",
  },

  // Sports
  gowinnGolf: {
    id: "gowinn-golf-advent-calendar", name: "Gowinn Golf Advent Calendar 2026", brand: "Gowinn", price: "$49.99", url: amz("B0H7GKT8YG"),
    availability: "in-stock", soldBy: "Gowinn",
    specs: ["24 individually boxed golf gifts", "Golf cap, water bottle, socks, towels, storage pouch", "Tees, ball markers, divot tools, brush, score counter, clips", "Dark green and gold gift box"],
    body: "The most complete golf calendar we found: course-day essentials like tees, markers and divot tools, plus a cap, bottle and towel. Smart packaging makes it feel more like a gift than most.",
  },
  kreativekraftGolf: {
    id: "kreativekraft-golf-advent-calendar", name: "KreativeKraft Golf Advent Calendar 2026", brand: "KreativeKraft", price: "$18.99", url: amz("B0D8TJ8Y26"),
    availability: "in-stock", soldBy: "GetTrend",
    specs: ["24 mini golf surprises", "Silicone ball holder, leather tee holder, towel, lanyard, pens", "One pair of socks (US 7 to 11)"],
    body: "The budget golf option, more novelty than kit, at well under half the price of the Gowinn. A fun countdown for a golfer who already owns the essentials.",
  },
  metaboBike: {
    id: "metabo-bicycle-tool-advent-calendar", name: "metabo Bicycle Tool Advent Calendar 2026", brand: "metabo", price: "$72.31", url: amz("B0HCYTLPFR"),
    availability: "low-stock", soldBy: "Amazon Germany",
    specs: ["Magnetic mini ratchet, 100 mm bit holder and 11 S2 bits", "Chain rivet, chain gauge, chain hooks, cone wrenches, spoke tensioner", "Tyre levers, valve keys and adapters", "Bike bell, torch, microfibre cloth, saddle bag"],
    body: "The pick for serious riders: a real bike-maintenance toolkit from metabo, a long-established German tool brand. Shipped from Amazon Germany and marked low stock, so order early.",
  },
  zjtapeBike: {
    id: "zjtape-cycling-advent-calendar", name: "ZJTAPE Bicycle Cycling Advent Calendar 2026", brand: "ZJTAPE", price: "$38.99", url: amz("B0HBQ41QGK"),
    availability: "in-stock", soldBy: "Ding-Dian",
    specs: ["24 cycling accessories for lighting, safety, maintenance, storage and protection", "For road, mountain, city and e-bikes", "Festive gift box"],
    body: "A friendlier, lower-priced cycling countdown with lights, safety and storage bits for commuters and weekend riders. Less of a workshop kit than the metabo.",
  },
  teenymatesNba: {
    id: "teenymates-nba-advent-calendar", name: "TeenyMates NBA Basketball Advent Calendar 2026", brand: "Party Animal", price: "$64.99", url: amz("B0H7T56ZD1"),
    availability: "in-stock", soldBy: "Party Animal, LLC.",
    specs: ["24 surprises: mini action figures, puzzle pieces and collectibles", "Officially licensed NBA team logos and uniforms", "Puzzle pieces build a mini court scene"],
    body: "Officially licensed NBA mini figures with real team uniforms, plus puzzle pieces that build a little court by Christmas Eve. The pick for young fans and collectors.",
  },
  teenymatesNfl: {
    id: "teenymates-nfl-advent-calendar", name: "TeenyMates NFL Football Advent Calendar 2026", brand: "Party Animal", price: "$64.99", url: amz("B0H7T4R261"),
    availability: "in-stock", soldBy: "Party Animal, LLC.",
    specs: ["24 surprises: mini action figures, puzzle pieces and collectibles", "Officially licensed NFL team logos and uniforms", "Puzzle pieces build a mini field scene"],
    body: "The football twin of the NBA calendar: licensed NFL mini figures and a mini field to build. Ideal for a family that watches every game.",
  },
  funkoNba: {
    id: "funko-pocket-pop-nba-advent-calendar", name: "Funko Pocket POP! NBA 14-Day Advent Calendar", brand: "Funko", price: "$36.99", url: amz("B08HH78KXL"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["14-day countdown with 13 collectible Pocket Pop! mini figures", "Officially licensed NBA players, including Jayson Tatum and Luka Doncic", "Figures up to about 1.9 inches tall", "Ages 3 and up"],
    body: "A shorter, cheaper basketball option from Funko, sold by Amazon. Note it is a 14-day calendar, so it starts on December 11 if you want it to end on Christmas Eve.",
  },
  venobatSoccer: {
    id: "venobat-soccer-advent-calendar", name: "VENOBAT Soccer Building Advent Calendar 2026", brand: "VENOBAT", price: "$29.99", url: amz("B0H2YS86VF"),
    availability: "in-stock", soldBy: "IECHANG TRADING",
    specs: ["24 small building kits: players, referee, trophy, goal and accessories", "Includes a soccer field map to build two rival teams", "Each build has a hanging cord", "ABS bricks with instructions in every box"],
    body: "A building-block calendar for young soccer fans: a new player or piece each day, ending with two full teams on a printed pitch. Screen-free and good for kids who like to build.",
  },
  seansChoicePickleball: {
    id: "seans-choice-pickleball-advent-calendar", name: "Sean's Choice Pickleball Advent Calendar 2026", brand: "Sean's Choice", price: "$29.99", url: amz("B0H6PG3LSM"),
    availability: "in-stock", soldBy: "Sean's Choice",
    specs: ["4 pickleballs: 2 outdoor (40-hole) and 2 indoor (26-hole)", "Cooling towel, ball retriever, paddle eraser, grip tapes and grip bands", "Cap, headband, wristbands, pickleball socks", "Plush charm, notepad, stickers, drawstring bag"],
    body: "Proper on-court gear: indoor and outdoor balls, grip tape and a ball retriever, plus a few fun extras. Marketed for men, but it suits any player.",
  },
  fonmangFishing: {
    id: "fonmang-fishing-advent-calendar", name: "FONMANG Fishing Advent Calendar 2026", brand: "FONMANG", price: "$25.00", url: amz("B0H9D674XJ"),
    availability: "in-stock", soldBy: "FONMANG",
    specs: ["24 assorted lures and matched tackle", "Rigs for Ned, jig head, drop shot, Texas, wacky and split shot setups", "Includes glow-in-the-dark lures for ice fishing", "Made for freshwater species such as bass, crappie, perch, walleye, pike and trout"],
    body: "Made by a fishing-tackle brand rather than a gift company, with real rigging variety instead of 24 near-identical spoons. The best choice for a freshwater angler.",
  },
  bearhugSurvival: {
    id: "bearhug-survival-kit-advent-calendar", name: "Bearhug Survival Kit Advent Calendar", brand: "Bearhug", price: "$59.99", url: amz("B0GXDW53ZW"),
    availability: "in-stock", soldBy: "Bearhug Official",
    specs: ["Folding knife, magnesium fire starter, 20 m paracord, compass, mini flashlight", "Emergency blanket, survival whistle, signal mirror, wire saw", "LED knit hat, tactical pen, waterproof notebook, raincoat, waterproof phone pouch", "Gift box with 24 compartments"],
    body: "For hikers and campers: navigation, fire, light and emergency gear in 24 compartments. It includes a folding knife and fire starter, so it is a gift for adults.",
  },

  // Wellness & self-care
  twiningsTea: {
    id: "twinings-tea-advent-calendar", name: "Twinings Tea Advent Calendar Gift Set", brand: "Twinings", price: "$25.99", url: amz("B0FHX88QXK"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["48 tea bags: 2 a day for 24 days", "20 of Twinings' blends: black, chai, green and herbal", "A message or recipe behind every door"],
    body: "Two tea bags a day, so there is one to share. A well-known brand, sold by Amazon, at a sensible price: the safest wellness calendar on the list.",
  },
  pukkaTea: {
    id: "pukka-herbal-tea-advent-calendar", name: "Pukka Herbal Tea Advent Calendar", brand: "Pukka", price: "$16.99", url: amz("B0FJ2V6K2G"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["24 individually wrapped organic tea bags in recyclable paper sachets", "Black, green and herbal blends, with caffeine-free options for the evening", "Hidden QR codes with festive extras"],
    body: "Organic herbal blends with plenty of caffeine-free options for after an evening class. The best value tea calendar here and an easy add-on to a bigger gift.",
  },
  stashTea: {
    id: "stash-tea-advent-calendar", name: "STASH Tea Advent Calendar 2026", brand: "Stash", price: "$20.73", url: amz("B0FKV1G9XP"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["24 tea bags: 15 caffeinated and 9 caffeine-free", "Black, green, herbal and rooibos blends", "Flavours include Toasted Vanilla Caramel, Cozy Cardamom Chai and Chamomile Nights"],
    body: "The dessert-lover's tea calendar, with vanilla caramel, chai and berry blends. Fun, festive and inexpensive.",
  },
  taylorsTea: {
    id: "taylors-of-harrogate-tea-advent-calendar", name: "Taylors of Harrogate Holiday Tea Advent Calendar", brand: "Taylors of Harrogate", price: "$35.14", url: amz("B0FQ7299WF"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["48 tea bags: 2 individually wrapped bags a day", "British tea blender since 1886"],
    body: "A classic British tea house in a festive box, with two bags a day. The choice for someone who takes their breakfast tea seriously.",
  },
  teaForte: {
    id: "tea-forte-advent-calendar", name: "Tea Forte Warming Joy Tea Advent Calendar", brand: "Tea Forte", price: "$78.00", url: amz("B0GQC5333C"),
    availability: "in-stock", soldBy: "Tea Forte",
    specs: ["24 pyramid infusers, a different blend each day", "Black, oolong, green, white and herbal teas", "Blends include Black Currant, Earl Grey, White Ginger Pear, Blueberry Merlot and Turmeric Chai"],
    body: "The luxury tea calendar: loose-leaf blends in Tea Forte's signature pyramid infusers, all different. A beautiful gift for someone who makes tea a ritual.",
  },
  kitsch: {
    id: "kitsch-12-day-advent-calendar", name: "Kitsch 12-Day Self Care Advent Calendar 2026", brand: "Kitsch", price: "$118.99", url: amz("B0HFYPSJKW"),
    availability: "in-stock", soldBy: "Kitsch LLC",
    specs: ["12 days of self-care", "Rice water shampoo and conditioner bars, hair perfume (20 ml)", "Satin pillowcase and oversized satin bonnet", "Claw clips, hair elastics, dermaplane oil and 12 dermaplaners"],
    body: "Kitsch hair and skin favourites: shampoo and conditioner bars, a satin pillowcase and bonnet, and claw clips for tying hair back in class. Twelve days rather than 24, so start it on December 13.",
  },
  bodyEarth: {
    id: "body-and-earth-spa-advent-calendar", name: "BODY & EARTH 24-Day Spa Advent Calendar 2026", brand: "BODY & EARTH", price: "$29.79", url: amz("B094ZVLM3X"),
    availability: "in-stock", soldBy: "CZWC SHOP",
    specs: ["4 hand lotions, 2 shower gels, 2 foot creams, 2 soaps, 2 bath bombs", "Bath salts, body scrub, 2 body lotions and a loofah", "7 festive accessories, including a plush sock and pocket mirror"],
    body: "A bath-and-body countdown at a gift-exchange price: lotions, foot creams and bath treats for tired feet after class.",
  },
  esprayCandle: {
    id: "espray-healing-candle-advent-calendar", name: "ESPRAY Healing Candle Advent Calendar 2026", brand: "ESPRAY", price: "$53.99", url: amz("B0H3NDMXTY"),
    availability: "in-stock", soldBy: "ESPRAY",
    specs: ["24 soy wax candles, a different scent each day", "Each decorated with dried flowers and a crystal, with an affirmation on the label", "Scents include cinnamon, pine forest, lavender, vanilla, rose and sandalwood", "Double-door gift box"],
    body: "A small candle for every evening, made for a wind-down ritual after a session, journaling or a home stretch. Very giftable packaging.",
  },
  mivgcrlBath: {
    id: "mivgcrl-bath-bomb-advent-calendar", name: "MIVGCRL Bath Bomb Advent Calendar 2026", brand: "MIVGCRL", price: "$25.49", url: amz("B0FH234Z43"),
    availability: "in-stock", soldBy: "BOYAUS",
    specs: ["24 bath bombs (2.12 oz each), 24 different scents", "Made with essential oils and Epsom salt", "Cruelty-free"],
    body: "Twenty-four Epsom salt bath bombs: a simple, affordable way to turn a sore-muscle evening into a soak.",
  },
} satisfies Record<string, Base>;

export type AdventKey = keyof typeof ADVENT;

export function advent(key: AdventKey, overrides: Partial<GuideItem> & { badge: string }): GuideItem {
  return { ...ADVENT[key], ...overrides } as GuideItem;
}
