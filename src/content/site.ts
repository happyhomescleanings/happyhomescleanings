export const site = {
  name: "Happy Homes Services",
  shortName: "Happy Homes",
  domain: "happyhomesservices.com",
  tagline: "Professional cleaning & home care in the Rapid City area.",
  heroHeadline: "Let us help you have a happy home.",
  heroSubhead:
    "Reliable house cleaning, deep cleans, and more — serving Rapid City and surrounding communities.",
  email: "hello@happyhomescleanings.com",
  phone: "6055198945",
  location: {
    city: "Rapid City",
    state: "South Dakota",
    stateAbbr: "SD",
    area: "Rapid City area",
  },
  social: {
    facebook:
      "https://www.facebook.com/share/1B6KRAfg6X/?mibextid=wwXIfr",
    instagram:
      "https://www.instagram.com/happyhomeservicesrapidcitysd?utm_source=qr",
    tiktok:
      "https://www.tiktok.com/@happy.homes86?_r=1&_t=ZT-96mKvJwythe",
  },
  payment: {
    venmo: "https://venmo.com/u/Haileycartierworks",
    cashApp: "https://cash.app/$HaileyCartier",
  },
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export type SocialKey = keyof typeof site.social;
