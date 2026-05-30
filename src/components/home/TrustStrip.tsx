import { trustPoints } from "@/content/services";

export function TrustStrip() {
  return (
    <section className="border-y border-brand-sand bg-brand-canvas py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-4 px-5 lg:px-8">
        {trustPoints.map((point) => (
          <div key={point} className="flex items-center gap-2 text-sm font-medium text-brand-ink">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-sage-light text-brand-olive">
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3}>
                <path d="M5 13l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {point}
          </div>
        ))}
      </div>
    </section>
  );
}
