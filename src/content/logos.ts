/** Brand logos in `/logos/` (served via `public/logos` symlink). */
export const logos = {
  full: {
    light: "/logos/logo.svg",
    dark: "/logos/logo-white.svg",
  },
  wordmark: {
    light: "/logos/logo-wordmark.svg",
    dark: "/logos/logo-wordmark-white.svg",
  },
  icon: {
    light: "/logos/logo-icon.svg",
    dark: "/logos/logo-icon-white.svg",
  },
  iconSquare: {
    light: "/logos/logo-icon-square.svg",
    dark: "/logos/logo-icon-square-white.svg",
  },
  iconCircle: {
    light: "/logos/logo-icon-circle.svg",
    dark: "/logos/logo-icon-circle-white.svg",
  },
  iconMono: {
    light: "/logos/logo-icon-mono.svg",
    dark: "/logos/logo-icon-mono-white.svg",
  },
} as const;

export const faviconPath = logos.iconSquare.light;
