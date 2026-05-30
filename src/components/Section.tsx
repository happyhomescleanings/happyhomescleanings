import { type ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
};

export function Section({
  id,
  title,
  description,
  children,
  className = "",
  alt = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-24 ${alt ? "bg-brand-warm" : ""} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {(title || description) && (
          <div className="mb-12 max-w-2xl">
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-lg leading-relaxed text-brand-muted">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
