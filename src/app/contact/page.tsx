import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { siteImages } from "@/content/images";
import { site } from "@/content/site";
import { formatPhoneDisplay, phoneHref } from "@/lib/format";
import { isFeatureEnabled } from "@/lib/features";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request a free quote from ${site.name}. Email, call, or send us a message.`,
};

export default function ContactPage() {
  const schedulingSoon = !isFeatureEnabled("onlineScheduling");

  return (
    <>
      <PageHeader
        title="Get in touch"
        description="Request a free quote or ask a question — we'll respond as soon as we can."
        image={siteImages.contactHeader}
        imageAlt="Residential home in a tree-lined neighborhood"
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-5 lg:gap-16 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight">Let&apos;s talk</h2>
            <p className="mt-4 leading-relaxed text-brand-muted">
              Share a few details about your home and what you&apos;re looking for — we&apos;ll follow up with a free quote.
            </p>

            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium transition-colors hover:text-brand-ink"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                  Phone / text
                </dt>
                <dd className="mt-1">
                  <a
                    href={phoneHref(site.phone)}
                    className="font-medium transition-colors hover:text-brand-ink"
                  >
                    {formatPhoneDisplay(site.phone)}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                  Service area
                </dt>
                <dd className="mt-1 font-medium">
                  {site.location.area}
                </dd>
              </div>
            </dl>

            {schedulingSoon && (
              <p className="mt-6 rounded-xl border border-brand-sand bg-brand-warm px-4 py-3 text-sm text-brand-muted">
                Online scheduling is coming soon. For now, message us and we&apos;ll find a time that works.
              </p>
            )}
          </div>

          <div className="rounded-2xl border border-brand-sand bg-brand-white p-6 sm:p-8 lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
