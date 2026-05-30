import Image from "next/image";
import Link from "next/link";
import { logos } from "@/content/logos";

type LogoProps = {
  className?: string;
  /** Icon mark only — for tight spaces (e.g. mobile header). */
  compact?: boolean;
  /** `horizontal` fits the nav bar; `full` is the stacked lockup. */
  layout?: "horizontal" | "full";
  theme?: "light" | "dark";
};

export function Logo({
  className = "",
  compact = false,
  layout = "horizontal",
  theme = "light",
}: LogoProps) {
  const variant = theme === "dark" ? "dark" : "light";

  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Happy Homes Cleanings — home"
    >
      {compact ? (
        <Image
          src={logos.icon[variant]}
          alt=""
          width={40}
          height={42}
          className="h-9 w-auto sm:h-10"
          priority
        />
      ) : layout === "full" ? (
        <Image
          src={logos.full[variant]}
          alt="Happy Homes Cleanings"
          width={180}
          height={124}
          className="h-auto w-full max-w-[200px]"
          priority
        />
      ) : (
        <span className="flex items-center gap-2.5 sm:gap-3">
          <Image
            src={logos.icon[variant]}
            alt=""
            width={40}
            height={42}
            className="h-9 w-auto shrink-0 sm:h-10"
            priority
          />
          <Image
            src={logos.wordmark[variant]}
            alt="Happy Homes Cleanings"
            width={160}
            height={36}
            className="hidden h-7 w-auto sm:block md:h-8"
            priority
          />
        </span>
      )}
    </Link>
  );
}
