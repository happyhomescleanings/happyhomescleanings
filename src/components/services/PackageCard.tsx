import { Button } from "@/components/Button";
import type { CleaningPackage } from "@/content/services";

export function PackageCard({ pkg }: { pkg: CleaningPackage }) {
  return (
    <article
      className={`rounded-2xl border p-6 sm:p-8 ${
        pkg.highlight
          ? "border-brand-sage/60 bg-brand-canvas shadow-sm ring-1 ring-brand-clay/15"
          : "border-brand-sand bg-brand-white"
      }`}
    >
      {pkg.highlight && (
        <span className="mb-4 inline-block rounded-full bg-brand-clay-light px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-clay-dark">
          Most popular
        </span>
      )}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-accent text-2xl font-semibold">{pkg.name}</h3>
          <p className="mt-1 text-brand-muted">{pkg.tagline}</p>
          <p className="mt-2 text-sm text-brand-muted">Best for: {pkg.typicalUse}</p>
        </div>
        <Button href="/contact?subject=residential" variant="outline" className="shrink-0">
          Get quote
        </Button>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-brand-sand">
        <table className="w-full text-sm">
          <tbody>
            {pkg.tiers.map((tier) => (
              <tr key={tier.label} className="border-b border-brand-sand last:border-0">
                <td className="px-4 py-3 text-brand-muted">{tier.label}</td>
                <td className="px-4 py-3 text-right font-semibold text-brand-clay-dark">
                  {tier.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-brand-muted">
        What&apos;s included
      </h4>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {pkg.includes.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-brand-ink">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-sage/80" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
