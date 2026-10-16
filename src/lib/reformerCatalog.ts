import type { GuideItem } from "@/components/EquipmentGuide";

// Verified high-value Pilates equipment listings (Amazon Creators API,
// checked 2026-10-12). Specs are taken from each listing. Pages spread an
// entry and override badge/body/pros/cons for their own context.

export const PRICES_CHECKED = "October 12, 2026";
export const PRICES_CHECKED_ISO = "2026-10-12";

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

type Base = Omit<GuideItem, "badge" | "body"> & { body: string };

export const CATALOG = {
  alignC8Pro: {
    id: "align-c8-pro", name: "Align-Pilates C8-PRO Reformer", brand: "Align-Pilates", price: "$2,750.00", url: amz("B099ZJ4C25"),
    availability: "in-stock", soldBy: "Merrithew (Amazon storefront)",
    specs: ["8 PU-wheel carriage system", "Rapid Change Spring Bar", "Same springs as Align's professional reformers", "Stackable; optional leg extensions raise the bed from 26 cm to 44 cm", "239.5 cm L × 66 cm W × 26 cm H", "Users 145–193 cm tall; max user weight 150 kg"],
    body: "Align-Pilates' home reformer uses the same springs as the brand's professional machines and an 8-wheel PU carriage that Align describes as its quietest, lowest-maintenance ride. It stacks for storage, and optional leg extensions lift it to a standard studio bed height.",
  },
  metroIQ: {
    id: "balanced-body-metro-iq", name: "Balanced Body Metro IQ Reformer (Wheelbarrow Wheels)", brand: "Balanced Body", price: "$2,330.00", url: amz("B09HNCMTZL"),
    availability: "low-stock", soldBy: "Balanced Body",
    specs: ["Patented telescoping frame: 98\" in use, 62\" for storage", "8-wheel carriage system", "5 Balanced Body Signature Springs", "4-position footbar with 9\" of adjustment", "3-position headrest; 5.5\" non-slip standing platform", "85 lb"],
    body: "Balanced Body's answer to small homes. The patented telescoping frame shortens from 98 inches to 62 inches so the machine slides under a bed, yet it keeps the brand's five Signature Springs and an 8-wheel carriage.",
  },
  janetLaForce: {
    id: "personalhour-janet-la-force-plus", name: "PersonalHour Janet La Force Plus Foldable Reformer", brand: "PersonalHour", price: "$2,555.00", url: amz("B0GNDHZXZK"),
    availability: "low-stock", soldBy: "PilatesUS",
    specs: ["Solid walnut frame", "Folds upright on wheels for storage", "6 adjustable springs", "Jumpboard, box, foot strap and loops included", "Tower-compatible frame", "92\" L × 23.5\" W × 12\" H; 120 lb"],
    body: "A walnut-framed folding reformer that arrives with a jumpboard and box, folds upright on wheels, and can take a tower later. It is the most complete out-of-the-box package in this price band.",
  },
  nanoElitePlus: {
    id: "personalhour-nano-elite-plus", name: "PersonalHour Nano Elite Plus Wood Reformer", brand: "PersonalHour", price: "$2,690.00", url: amz("B0DL4HSKG5"),
    availability: "made-to-order", soldBy: "PilatesUS",
    specs: ["Layered maple frame, 2\" thick", "Aluminium chrome footbar", "Adjustable headrest", "Sitting box and jumpboard included", "91\" L × 27\" W × 15\" H", "290 lb"],
    body: "A heavy, studio-style wood reformer: a 2-inch layered maple frame (double the thickness of its predecessor, per the listing), a chrome footbar, and a sitting box and jumpboard in the box.",
  },
  nour2: {
    id: "personalhour-nour-2", name: "PersonalHour Nour 2.0 Wood Reformer", brand: "PersonalHour", price: "$1,480.00", url: amz("B0DK5T3SDF"),
    availability: "made-to-order", soldBy: "PilatesUS",
    specs: ["Hand-finished wood frame", "High-resilience PU wheels", "Wooden adjustable rope lock", "0.5\" adjustable ropes", "Adjustable footbar", "90\" L × 23.5\" W × 9\" H; 100 lb"],
    body: "PersonalHour's entry wood reformer: a hand-finished wooden frame, PU wheels for a quiet ride, and an adjustable footbar, at roughly half the price of the brand's flagship machines.",
  },
  delavinTower: {
    id: "delavin-wood-reformer-tower", name: "DELAVIN Solid Wood Reformer with Tower", brand: "DELAVIN", price: "$1,229.99", url: amz("B0D2ZT4Z5H"),
    availability: "in-stock", soldBy: "Neohome",
    specs: ["One-piece solid wood frame, about 90% pre-assembled", "Stainless steel tower", "7-level adjustable footbar", "5-position pulley tower; push-through and roll-down bars", "Max user weight 440 lb", "90.5\" L × 29.1\" W × 76.4\" H; 287 lb"],
    body: "A reformer and tower in one, with a solid wood frame and a stainless steel tower. It arrives mostly assembled, so you attach the tower and start. A newer brand than the established names, so check warranty terms.",
  },
  paetaTower: {
    id: "paeta-wood-reformer-tower", name: "PAETA Wooden Reformer with Tower & Mat", brand: "PAETA", price: "$1,299.99", url: amz("B0DRTKSLN8"),
    availability: "in-stock", soldBy: "PAETA US",
    specs: ["Oak frame with reinforced steel tubing and iron legs", "Piano-wire springs, tested for 50,000 uses per the listing", "Tower with spring hooks inside and outside", "Converter mat for tower work", "Sitting box and jumpboard included", "Ships in three boxes"],
    body: "An oak reformer with an integrated tower and converter mat, so you get most of the Cadillac repertoire in one footprint. Sold by PAETA, a newer brand without the track record of the studio names.",
  },
  vevorMaple: {
    id: "vevor-maple-reformer", name: "VEVOR Maple Wood Reformer", brand: "VEVOR", price: "$1,309.90", url: amz("B0F43LNJNM"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Solid maple frame", "Supports up to 400 lb", "6 piano-steel springs (1 strong, 3 medium, 2 light)", "Jumpboard, box and shoulder pads included", "Microfiber leather upholstery", "176 lb"],
    body: "A solid maple reformer sold and shipped by Amazon.com, with six springs, a jumpboard and a box included. The lowest-priced maple-frame machine we list.",
  },
  spxHome: {
    id: "merrithew-at-home-spx", name: "Merrithew At Home SPX Reformer Package", brand: "Merrithew", price: "$3,349.00", url: amz("B004FGT0TM"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Aluminum rails", "5 springs: 4 × 100%, 1 × 50%", "Box, metal roll-up pole, padded platform extender and double-loop straps included", "Uses the same components as Merrithew's commercial reformers, per the listing", "96.5\" L × 26\" W × 10\" H", "115 lb"],
    body: "Merrithew's (STOTT PILATES) home package: an aluminium-rail SPX reformer plus box, roll-up pole, platform extender and straps, sold and shipped by Amazon.com. A version with a vertical storage stand is also listed.",
  },
  spxHomeStand: {
    id: "merrithew-at-home-spx-stand", name: "Merrithew At Home SPX Reformer Package with Vertical Stand", brand: "Merrithew", price: "$3,549.00", url: amz("B0BSZ92NMH"),
    availability: "back-order", soldBy: "Merrithew",
    specs: ["Includes a vertical stand to store the reformer upright", "Aluminum rails", "5 springs: 4 × 100%, 1 × 50%", "Box, roll-up pole, platform extender and straps included", "96.5\" L × 26\" W × 10\" H; 115 lb"],
    body: "The same At Home SPX package with a vertical stand, so the reformer can be stored upright when not in use.",
  },
  allegroStretch: {
    id: "balanced-body-allegro-stretch", name: "Balanced Body Allegro Stretch Reformer", brand: "Balanced Body", price: "$3,710.00", url: amz("B093R8DYC9"),
    availability: "made-to-order", soldBy: "Balanced Body",
    specs: ["Carriage 2\" wider and 6\" longer, frame 18\" longer than the standard Allegro", "Anodized aluminum frame", "36\" footbar with 4 locking positions", "5 Balanced Body Signature Springs", "8-wheel suspension; integrated transport wheels", "111\" L × 24.5\" W × 14\" H (14\" legs)"],
    body: "The long version of Balanced Body's best-known aluminium reformer, built for taller and larger users: a wider, longer carriage and an 18-inch-longer frame than the standard Allegro.",
  },
  allegroStretchTower: {
    id: "balanced-body-allegro-stretch-tower", name: "Balanced Body Allegro Stretch with Tower & Mat", brand: "Balanced Body", price: "$5,275.00", url: amz("B0CQRQ9ZP4"),
    availability: "made-to-order", soldBy: "Balanced Body",
    specs: ["Reformer, tower and drop-in mat conversion", "Carriage 34.5\" × 24.5\"; frame 111\"", "Tower: 22 spring-attachment points, 8 tower springs, maple roll-down bar", "3-sided push-through bar, 2 heights", "5 Signature Springs; 8-wheel suspension", "251 lb"],
    body: "The Allegro Stretch with a tower and mat conversion: reformer, tower and mat work on one footprint, sized for taller users.",
  },
  rialtoBox: {
    id: "balanced-body-rialto", name: "Balanced Body Rialto Reformer with Sitting Box Lite", brand: "Balanced Body", price: "$3,495.00", url: amz("B08CS2FYGB"),
    availability: "made-to-order", soldBy: "Balanced Body",
    specs: ["Handcrafted solid maple frame on extruded aluminum legs", "5-position footbar; 3-position no-roll springbar", "5 Signature Springs", "Extra-wide non-skid standing platform", "Sitting Box Lite and footstrap included", "96\" L × 26.5\" W × 14\" H; 140 lb"],
    body: "Balanced Body's mixed-material reformer: a solid maple frame on aluminium legs, five Signature Springs, and a Sitting Box Lite included. The best-looking way into a Balanced Body maple frame for less than the Studio Reformer.",
  },
  rialtoTower: {
    id: "balanced-body-rialto-tower", name: "Balanced Body Rialto Reformer with Tower & Mat", brand: "Balanced Body", price: "$4,230.00", url: amz("B08CR4XZWD"),
    availability: "made-to-order", soldBy: "Balanced Body",
    specs: ["Tower: 29 spring-attachment points, wood roll-down bar, attached push-through bar", "8 tower springs; over-molded mat", "5 Signature Springs on the reformer", "Sitting Box Lite and footstrap included", "96\" L × 26.5\" W × 74.6\" H; 180 lb"],
    body: "The Rialto with a tower and mat conversion: reformer, tower and mat work on one maple-and-aluminium frame, for under $4,500.",
  },
  studioRevo: {
    id: "balanced-body-studio-reformer", name: "Balanced Body Studio Reformer (Revo Footbar)", brand: "Balanced Body", price: "$4,700.00", url: amz("B002XVWIFE"),
    availability: "made-to-order", soldBy: "Balanced Body",
    specs: ["Solid Strata Rock Maple frame", "5 Signature Springs, up to 46 resistance settings", "Revo 4-position locking footbar; Revo 5-position springbar", "TwistLock shoulder rests", "Safety-rated ropes with non-slip cleats", "92.6\" L × 26.5\" W × 15\" H"],
    body: "The reference studio reformer: a solid Strata Rock Maple frame, a carriage Balanced Body describes as one of the longest, smoothest rides available, and five Signature Springs giving up to 46 resistance settings.",
  },
  studioXsr: {
    id: "balanced-body-studio-reformer-xsr", name: "Balanced Body Studio Reformer (XSR Footbar) with Sitting Box", brand: "Balanced Body", price: "$4,850.00", url: amz("B0CQZ1KCKY"),
    availability: "made-to-order", soldBy: "Balanced Body",
    specs: ["Solid Strata Rock Maple frame", "XSR footbar and Revo 5-position springbar", "Upholstered sitting box and foot strap included", "5 Signature Springs, up to 46 resistances", "4 weight-bearing and 4 adjustable side wheels", "212 lb"],
    body: "The Studio Reformer with the XSR footbar and an upholstered sitting box included, for buyers who want the box from day one.",
  },
  studioTower: {
    id: "balanced-body-studio-reformer-tower", name: "Balanced Body Studio Reformer with Tower & Mat", brand: "Balanced Body", price: "$6,975.00", url: amz("B01NAUBYBF"),
    availability: "made-to-order", soldBy: "Balanced Body",
    specs: ["Strata Rock Maple reformer with Revo footbar and springbar", "Hand-crafted stainless steel tower; 8 tower springs", "3-sided push-through bar; 23\" maple roll-down bar", "Twin upholstered conversion mats", "Sitting box, D-ring loops and handles included", "95\" L × 26.5\" W × 78\" H; 341 lb"],
    body: "The full Studio Reformer system: reformer, stainless steel tower and mat conversion. The single-footprint answer for a home studio or a private-session room.",
  },
  v2MaxPlus: {
    id: "merrithew-rehab-v2-max-plus", name: "Merrithew Rehab V2 Max Plus Reformer", brand: "Merrithew", price: "$8,199.00", url: amz("B002ABYKFI"),
    availability: "made-to-order", soldBy: "Merrithew",
    specs: ["Raised frame for clinical and rehab work", "Vertical Frame for tower-style exercises", "Adjustable for a wide range of client needs", "97\" L × 30\" W × 77\" H", "224 lb"],
    body: "The V2 Max-family machine Merrithew sells on Amazon: a raised frame built for clinics and rehab, with the Vertical Frame for tower-style work.",
  },
  cadillac: {
    id: "balanced-body-cadillac", name: "Balanced Body Trapeze Table (Cadillac)", brand: "Balanced Body", price: "$5,030.00", url: amz("B01N5OIH13"),
    availability: "made-to-order", soldBy: "Balanced Body",
    specs: ["Stainless steel canopy", "12 Signature Springs", "Push-through bar on an anodized aluminium slide, 3 heights", "Maple roll-down bar, padded trapeze bar, belly strap", "86\" × 28.5\" × 87\" with canopy", "Made in the USA"],
    body: "The Cadillac: the apparatus that, after reformers, most separates a full equipment studio from a reformer-only room. Made in the USA with a stainless steel canopy and 12 Signature Springs.",
  },
  ladderBarrel: {
    id: "balanced-body-ladder-barrel", name: "Balanced Body Ladder Barrel", brand: "Balanced Body", price: "$2,195.00", url: amz("B01NBVI3JU"),
    availability: "made-to-order", soldBy: "Balanced Body",
    specs: ["Single-pedal adjustment of the ladder-to-barrel distance", "Dual padding and upholstery", "Grab bar and foot brace", "47.25\" L × 36\" W × 38\" H", "122 lb"],
    body: "For swan, side-lying and spinal extension work. A single foot pedal slides the barrel to the right distance from the ladder.",
  },
  exoChair: {
    id: "balanced-body-exo-chair", name: "Balanced Body EXO Chair (Single Pedal)", brand: "Balanced Body", price: "$1,255.00", url: amz("B002XVZVRQ"),
    availability: "made-to-order", soldBy: "Balanced Body",
    specs: ["2 springs, 8 resistance levels", "Single-pedal design (split-pedal version available)", "Compact, portable and stackable", "29.5\" L × 23.5\" W × 24.25\" H", "55 lb"],
    body: "A compact, stackable Pilates chair. Small enough to add standing and seated chair work to a studio without giving up much floor.",
  },
  bbJumpboard: {
    id: "balanced-body-padded-jumpboard", name: "Balanced Body Padded Jumpboard (Rialto)", brand: "Balanced Body", price: "$280.00", url: amz("B08CS4LJZ7"),
    availability: "in-stock", soldBy: "Balanced Body",
    specs: ["Compatible with the Rialto Reformer", "Wide padded foot base", "Tool-free install"],
    body: "Adds jumping and cardio work to a Rialto. Check compatibility before ordering for other models.",
  },
  rialtoRetrofit: {
    id: "balanced-body-rialto-tower-retrofit", name: "Balanced Body Rialto Tower & Mat Retrofit Kit", brand: "Balanced Body", price: "$1,275.00", url: amz("B08CS27S42"),
    availability: "made-to-order", soldBy: "Balanced Body",
    specs: ["Adds a tower and mat to an existing Rialto", "29 spring-attachment points; 8 Signature Springs", "Wooden roll-down bar; attached push-through bar"],
    body: "Upgrades a Rialto you already own to the tower-and-mat configuration.",
  },
  spxJumpboard: {
    id: "merrithew-jumpboard-22", name: "Merrithew Jumpboard 22\" (SPX / SPX Max)", brand: "Merrithew", price: "$470.00", url: amz("B004ICZD2Q"),
    availability: "made-to-order", soldBy: "Merrithew",
    specs: ["22\" version fits SPX-model reformers (22\" carriage)", "24\" version fits V2 Max, V2 Max Plus, Rehab and Rack & Roll (24\" carriage)", "Tubular steel frame; dense EVA padding"],
    body: "Merrithew's jumpboard. The listing confirms the size split: 22 inches for SPX-family carriages, 24 inches for V2 Max-family carriages.",
  },
  spxMatConverter: {
    id: "merrithew-mat-converter-22", name: "Merrithew Mat Converter 22\" (SPX Max)", brand: "Merrithew", price: "$470.00", url: amz("B0B7V9XL5R"),
    availability: "low-stock", soldBy: "Merrithew",
    specs: ["Turns a reformer with a Vertical Frame into a virtual Cadillac", "Stable surface for rollers, arcs and boxes", "22\" for SPX Max"],
    body: "A mat platform for the SPX Max that adds supported planks and, with a Vertical Frame, Cadillac-style work.",
  },
  sittingBoxLite: {
    id: "balanced-body-sitting-box-lite", name: "Balanced Body Sitting Box Lite", brand: "Balanced Body", price: "$150.00", url: amz("B0723DT2JP"),
    availability: "in-stock", soldBy: "Balanced Body Inc.",
    specs: ["Fits over the shoulder rests on every Balanced Body reformer, per the listing", "High-density foam; 4.5 lb", "31\" × 17\" × 10.75\"", "Bottom cutouts for carrying and stacking"],
    body: "A full-size sitting box at 4.5 lb, for long-box, short-spine and balance work. Balanced Body lists it as compatible with all of its reformers.",
  },
  studioPlatformExtender: {
    id: "balanced-body-oversized-platform", name: "Balanced Body Oversized Platform Extender (Studio Reformer)", brand: "Balanced Body", price: "$185.00", url: amz("B0008IVJEU"),
    availability: "in-stock", soldBy: "Balanced Body Inc.",
    specs: ["Extends the length and width of the Studio Reformer's built-in platform", "Maple, to match the frame", "Non-skid surface"],
    body: "More standing room for lunges, standing work and stretches on the Studio Reformer, in maple to match the frame.",
  },
  spxMaxDirect: {
    id: "merrithew-spx-max", name: "Merrithew SPX Max Reformer", brand: "Merrithew", price: "Contact Merrithew or a dealer", url: "https://www.merrithew.com/",
    availability: "direct",
    specs: ["Reformer frame about 26.5\" W × 97\" L; 128 lb (dealer listings)", "Carriage 22\" W × 38.5\" L; 9\" from the floor (dealer listings)", "Springs: 3 × 100%, 1 × 50%, 1 × 25% (dealer listings)", "350 lb user weight capacity (dealer listings)"],
    body: "Merrithew's compact studio-and-home reformer. It is not sold on Amazon; buy it from Merrithew or an authorized dealer, who will quote current pricing and bundles.",
    ctaLabel: "Shop Now at Merrithew →",
  },
} satisfies Record<string, Base>;

export function item(key: keyof typeof CATALOG, overrides: Partial<GuideItem> & { badge: string }): GuideItem {
  return { ...(CATALOG[key] as Base), ...overrides } as GuideItem;
}
