/** Site photos — files live under `public/images/`. */

const marketing = {
  cleanRoom: "/images/marketing/clean-room.jpg",
  servicesHeader: "/images/marketing/services-header.jpg",
  aboutHeader: "/images/marketing/about-header.jpg",
  contactHeader: "/images/marketing/contact-header.jpg",
  faqLivingRoom: "/images/marketing/faq-living-room.jpg",
  officeInterior: "/images/marketing/office-interior.jpg",
  petDogDrinking: "/images/marketing/pet-dog-drinking.jpg",
  snowBlower: "/images/marketing/snow-blower.jpg",
} as const;

export const siteImages = {
  /** Home page hero — clean white room */
  hero: marketing.cleanRoom,
  /** About page “Who we are” inline image */
  heroAlt: marketing.officeInterior,
  contactHeader: marketing.contactHeader,
  aboutHeader: marketing.aboutHeader,
  servicesHeader: marketing.servicesHeader,
  faqHeader: marketing.faqLivingRoom,
  petCare: marketing.petDogDrinking,
  snowRemoval: marketing.snowBlower,
} as const;

export const beforeAfterImages = [
  { src: "/images/before-after/01.jpg", alt: "Cleaning results" },
  { src: "/images/before-after/02.jpg", alt: "Cleaning results" },
  { src: "/images/before-after/03.jpg", alt: "Cleaning results" },
  { src: "/images/before-after/04.jpg", alt: "Cleaning results" },
  { src: "/images/before-after/05.jpg", alt: "Cleaning results" },
  { src: "/images/before-after/06.jpg", alt: "Cleaning results" },
  { src: "/images/before-after/07.jpg", alt: "Cleaning results" },
  { src: "/images/before-after/08-door-track.png", alt: "Door track before and after" },
  { src: "/images/before-after/09-oven-door.png", alt: "Oven door before and after" },
  { src: "/images/before-after/10-vanity.png", alt: "Bathroom vanity before and after" },
  { src: "/images/before-after/11-bathroom-mirror.png", alt: "Bathroom mirror before and after" },
  { src: "/images/before-after/12.png", alt: "Cleaning results" },
  { src: "/images/before-after/13-fridge.png", alt: "Refrigerator before and after" },
  { src: "/images/before-after/14-dishwasher.png", alt: "Dishwasher before and after" },
] as const;

/** Use in home gallery — subset for layout variety */
export const galleryImages = beforeAfterImages.filter((_, i) =>
  [0, 1, 2, 3, 5, 6].includes(i)
);

export const teamImagePaths = {
  owners: "/images/team/hailey_and_riley.png",
} as const;
