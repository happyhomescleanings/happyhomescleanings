import { Button } from "@/components/Button";
import { site } from "@/content/site";
import { formatPhoneDisplay, phoneHref } from "@/lib/format";

export function CtaBanner() {
  return (
    <section className="border-y border-brand-sand bg-brand-sage-light py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 text-center lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
          Ready for a happier home?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-brand-muted">
          Tell us about your space and we&apos;ll follow up with a free quote — usually within one business day.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact">Get a free quote</Button>
          <a
            href={phoneHref(site.phone)}
            className="text-sm font-semibold text-brand-olive underline-offset-4 hover:text-brand-clay hover:underline"
          >
            Or call {formatPhoneDisplay(site.phone)}
          </a>
        </div>
      </div>
    </section>
  );
}
