import { faqItems } from "@/content/faq";
import { serviceAreaTowns } from "@/content/services";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/seo/metadata";
import { brandLogoPath } from "@/content/logos";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HousekeepingService",
    name: site.name,
    url: siteUrl,
    image: `${siteUrl}${brandLogoPath}`,
    description: site.tagline,
    email: site.email,
    telephone: `+1${site.phone.replace(/\D/g, "")}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressRegion: site.location.stateAbbr,
      addressCountry: "US",
    },
    areaServed: serviceAreaTowns.map((town) => ({
      "@type": "City",
      name: `${town}, ${site.location.stateAbbr}`,
    })),
    sameAs: Object.values(site.social),
  };

  return <JsonLd data={data} />;
}

export function FaqPageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}
