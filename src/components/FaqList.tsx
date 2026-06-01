import type { FaqItem } from "@/content/faq";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-brand-sand rounded-2xl border border-brand-sand bg-brand-white">
      {items.map((item, index) => (
        <details
          key={item.question}
          className="group"
          open={index === 0}
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-brand-warm/50 marker:content-none sm:px-6 [&::-webkit-details-marker]:hidden">
            <span className="font-medium text-brand-ink">{item.question}</span>
            <span
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-warm text-brand-muted transition-transform group-open:rotate-45"
              aria-hidden
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <div className="px-5 pb-5 text-sm leading-relaxed text-brand-muted sm:px-6">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
