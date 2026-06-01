import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { FaqList } from "@/components/FaqList";
import { Button } from "@/components/Button";
import { faqItems } from "@/content/faq";
import { siteImages } from "@/content/images";
import { site } from "@/content/site";
import { FaqPageJsonLd } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "FAQ",
  description: `Answers about house cleaning in the ${site.location.area} — booking, supplies, pets, and policies at ${site.name}.`,
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <FaqPageJsonLd />
      <PageHeader
        title="Frequently asked questions"
        description="Quick answers about how we work. Still unsure? We're happy to help."
        image={siteImages.faqHeader}
        imageAlt="Bright, clean living room"
      />

      <Section>
        <FaqList items={faqItems} />
        <div className="mt-12 rounded-2xl bg-brand-warm p-8 text-center">
          <p className="font-medium text-brand-ink">Didn&apos;t find your answer?</p>
          <Button href="/contact" className="mt-4">
            Contact us
          </Button>
        </div>
      </Section>
    </>
  );
}
