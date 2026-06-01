import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { PackageCard } from "@/components/services/PackageCard";
import { Button } from "@/components/Button";
import { siteImages } from "@/content/images";
import { residentialPackages, specialtyServices } from "@/content/services";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Services & Pricing",
  description: `House cleaning, deep cleans, and Airbnb turnover in the ${site.location.area}. Transparent starting prices from ${site.name}.`,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services & pricing"
        description="Transparent starting prices. Every home is different — we'll confirm your quote before we book."
        image={siteImages.servicesHeader}
        imageAlt="Professional home cleaning"
      />

      <Section title="Residential packages">
        <div className="space-y-8">
          {residentialPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <p className="mt-8 text-sm text-brand-muted">
          Prices are estimates and may vary by home condition, add-ons, and travel. Flexible scheduling available — daily, weekly, biweekly, monthly, or custom.
        </p>
      </Section>

      <Section
        id="specialty"
        alt
        title="Specialty & add-on services"
        description="Ask about laundry, dishes, and other add-ons when you request a quote."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialtyServices.map((service) => (
            <article
              key={service.id}
              className="flex flex-col rounded-2xl border border-brand-sand bg-brand-white p-6"
            >
              <h3 className="font-accent text-xl font-semibold">{service.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                {service.description}
              </p>
              <p className="mt-4 text-lg font-semibold text-brand-muted">{service.price}</p>
              {"tiers" in service && service.tiers && (
                <ul className="mt-4 space-y-1 border-t border-brand-sand pt-4 text-sm">
                  {service.tiers.map((tier) => (
                    <li key={tier.label} className="flex justify-between gap-2">
                      <span className="text-brand-muted">{tier.label}</span>
                      <span className="font-medium">{tier.price}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </Section>

      <section className="border-t border-brand-sand bg-brand-clay-light py-12">
        <div className="mx-auto max-w-6xl px-5 text-center lg:px-8">
          <p className="text-brand-muted">Not sure which package fits?</p>
          <Button href="/contact" className="mt-4">
            Request a free quote
          </Button>
        </div>
      </section>
    </>
  );
}
