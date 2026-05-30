import { type ReactNode } from "react";

/**
 * Text block on photos: light linen fill + a single soft drop shadow behind the area.
 */
export function PhotoTextBlock({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`max-w-3xl rounded-xl bg-brand-linen/90 px-6 py-8 shadow-lg sm:px-8 sm:py-10 ${className}`}
    >
      {children}
    </div>
  );
}
