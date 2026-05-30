import Image from "next/image";
import { Section } from "@/components/Section";
import { galleryImages } from "@/content/images";

export function Gallery() {
  return (
    <Section
      alt
      title="Our work"
      description="A few spaces we've helped feel fresh and cared for."
    >
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {galleryImages.map((img, i) => (
          <div
            key={img.src}
            className={`relative overflow-hidden rounded-2xl ${
              i === 0 ? "col-span-2 row-span-2 aspect-[4/3] lg:aspect-auto lg:min-h-[320px]" : "aspect-square"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes={i === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 640px) 50vw, 33vw"}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
