import Image from "next/image";
import { Button } from "@/components/Button";
import { PhotoTextBlock } from "@/components/PhotoTextBlock";
import { siteImages } from "@/content/images";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-oat">
      <div className="absolute inset-0">
        <Image
          src={siteImages.hero}
          alt="Clean, welcoming home interior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-5 py-20 lg:px-8 lg:py-24">
        <PhotoTextBlock>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-brand-olive">
            {site.location.city}, {site.location.stateAbbr} & surrounding areas
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
            {site.heroHeadline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-muted">
            {site.heroSubhead}
          </p>
        </PhotoTextBlock>
        <div className="relative mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact">Get a free quote</Button>
          <Button href="/services" variant="outline">
            View services
          </Button>
        </div>
      </div>
    </section>
  );
}
