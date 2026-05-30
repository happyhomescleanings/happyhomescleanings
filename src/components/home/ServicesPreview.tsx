import Link from "next/link";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { residentialPackages, specialtyServices } from "@/content/services";

export function ServicesPreview() {
  const featured = residentialPackages.slice(0, 3);
  const extras = specialtyServices.slice(0, 3);

  return (
    <Section
      id="services"
      title="Cleaning packages"
      description="Starting prices for typical homes. We'll confirm your quote based on size, condition, and any add-ons."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {featured.map((pkg) => (
          <article
            key={pkg.id}
            className={`flex flex-col rounded-2xl border p-6 ${
              pkg.highlight
                ? "border-brand-sage/60 bg-brand-canvas shadow-sm ring-1 ring-brand-clay/15"
                : "border-brand-sand bg-brand-white"
            }`}
          >
            {pkg.highlight && (
              <span className="mb-3 w-fit rounded-full bg-brand-clay-light px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-clay-dark">
                Most popular
              </span>
            )}
            <h3 className="font-accent text-2xl font-semibold">{pkg.name}</h3>
            <p className="mt-1 text-sm text-brand-muted">{pkg.tagline}</p>
            <p className="mt-4 text-lg font-semibold text-brand-clay-dark">
              {pkg.tiers[0].price}
              {pkg.tiers.length > 1 && (
                <span className="text-base font-normal text-brand-muted">+</span>
              )}
            </p>
            <p className="mt-1 text-xs text-brand-muted">{pkg.typicalUse}</p>
            <ul className="mt-6 flex-1 space-y-2 text-sm text-brand-muted">
              {pkg.includes.slice(0, 4).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-brand-sage">·</span>
                  {item}
                </li>
              ))}
            </ul>
            <Button
              href={`/contact?subject=${pkg.id === "basic" ? "residential" : "quote"}`}
              variant={pkg.highlight ? "primary" : "outline"}
              className="mt-6 w-full"
            >
              Request quote
            </Button>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold tracking-tight">More services</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {extras.map((service) => (
            <Link
              key={service.id}
              href="/services#specialty"
              className="group rounded-xl border border-brand-sand bg-brand-canvas p-5 transition-colors hover:border-brand-sage/70 hover:shadow-sm"
            >
              <p className="font-accent text-xl font-semibold text-brand-ink">
                {service.name}
              </p>
              <p className="mt-1 text-sm text-brand-muted">{service.description}</p>
              <p className="mt-3 text-sm font-semibold text-brand-muted">{service.price}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <Button href="/services" variant="ghost">
          See all services & pricing →
        </Button>
      </div>
    </Section>
  );
}
