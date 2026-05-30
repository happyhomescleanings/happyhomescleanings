export type PriceTier = {
  label: string;
  price: string;
};

export type CleaningPackage = {
  id: string;
  name: string;
  tagline: string;
  typicalUse: string;
  highlight?: boolean;
  tiers: PriceTier[];
  includes: string[];
};

export const residentialPackages: CleaningPackage[] = [
  {
    id: "basic",
    name: "Clean Basic",
    tagline: "Regular maintenance",
    typicalUse: "Weekly or biweekly",
    highlight: true,
    tiers: [
      { label: "1 bed / 1 bath", price: "$80" },
      { label: "2 bed / 1–2 bath", price: "$90+" },
      { label: "3 bed / 1–3 bath", price: "$110+" },
      { label: "4+ bed / 3+ bath", price: "$150+" },
    ],
    includes: [
      "Dusting and wiping surfaces",
      "Vacuuming, sweeping, and mopping",
      "Bathroom: toilet, shower, sink, counters, mirror",
      "Kitchen wipe-down: counters, sink, outside of appliances",
      "Disinfect door knobs and light switches",
    ],
  },
  {
    id: "deep",
    name: "Deep Clean",
    tagline: "Extra attention where it counts",
    typicalUse: "Monthly or seasonal",
    tiers: [
      { label: "1 bed / 1 bath", price: "$150" },
      { label: "2 bed / 1–2 bath", price: "$180+" },
      { label: "3 bed / 1–3 bath", price: "$200+" },
      { label: "4+ bed / 3+ bath", price: "$230+" },
    ],
    includes: [
      "Everything in Clean Basic",
      "Shelves, bookshelves, and knickknacks",
      "Inside microwave, fridge, stove/oven, and dishwasher",
      "Take out all trash and clean in-house bins",
    ],
  },
  {
    id: "reset",
    name: "1-Hour Reset",
    tagline: "Light upkeep between deep cleans",
    typicalUse: "As needed",
    tiers: [{ label: "Starting at", price: "$55" }],
    includes: ["Surface wipe-downs", "Vacuum and mop"],
  },
];

export const specialtyServices = [
  {
    id: "commercial",
    name: "Church & Office",
    description: "Professional cleaning for workspaces and places of worship.",
    price: "From $120",
    icon: "building" as const,
  },
  {
    id: "airbnb",
    name: "Airbnb & Rentals",
    description: "Turnover cleans for short-term rentals. Laundry on-site +$10+.",
    price: "From $60",
    icon: "key" as const,
    tiers: [
      { label: "Studio / 1 bed, 1 bath", price: "$60" },
      { label: "2 bed, 1–2 bath", price: "$120" },
      { label: "3 bed, 1–3 bath", price: "$140" },
      { label: "4 bed, 2+ bath", price: "$170" },
    ],
  },
  {
    id: "move",
    name: "Move-In / Move-Out",
    description: "Start fresh or leave a spotless space for the next resident.",
    price: "Custom quote",
    icon: "box" as const,
  },
  {
    id: "pet-walk",
    name: "Dog Walking",
    description: "Book 30 minutes up to 2 hours.",
    price: "$15 / 30 min",
    icon: "paw" as const,
  },
  {
    id: "pet-sit",
    name: "Dog Sitting",
    description: "Overnight care while you're away.",
    price: "From $60 / night",
    icon: "heart" as const,
  },
  {
    id: "snow",
    name: "Snow Removal",
    description: "Driveway, vehicles, and walkway to your front door.",
    price: "From $30",
    icon: "snow" as const,
  },
];

export const trustPoints = [
  "Pet-friendly visits",
  "Flexible scheduling",
  "Supplies included",
  "Rapid City local",
] as const;

export const serviceAreaTowns = [
  "Rapid City",
  "Box Elder",
  "Summerset",
  "Piedmont",
  "Rapid Valley",
  "Black Hawk",
  "Hermosa",
  "Rockerville",
  "Sturgis",
  "New Underwood",
] as const;
