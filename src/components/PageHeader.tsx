import Image from "next/image";
import { PhotoTextBlock } from "@/components/PhotoTextBlock";

type PageHeaderProps = {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
};

export function PageHeader({
  title,
  description,
  image,
  imageAlt = "",
}: PageHeaderProps) {
  const copy = (
    <>
      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-brand-muted">
          {description}
        </p>
      )}
    </>
  );

  return (
    <section className="relative overflow-hidden border-b border-brand-sand bg-brand-oat text-brand-ink">
      {image && (
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      )}
      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:py-16 lg:px-8">
        {image ? (
          <PhotoTextBlock className="max-w-2xl px-6 py-7 sm:px-7 sm:py-8">
            {copy}
          </PhotoTextBlock>
        ) : (
          copy
        )}
      </div>
    </section>
  );
}
