import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-clay text-brand-white hover:bg-brand-clay-dark focus-visible:ring-brand-sage",
  secondary:
    "border border-brand-sand bg-brand-canvas text-brand-ink hover:bg-brand-clay-light focus-visible:ring-brand-sage",
  outline:
    "border-2 border-brand-clay/50 bg-transparent text-brand-ink hover:border-brand-clay hover:bg-brand-clay-light focus-visible:ring-brand-sage",
  ghost:
    "bg-transparent text-brand-ink hover:bg-brand-clay-light focus-visible:ring-brand-sage",
};

type BaseProps = {
  variant?: Variant;
  className?: string;
};

type ButtonProps = BaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: never };

type LinkProps = BaseProps &
  ComponentPropsWithoutRef<typeof Link> & { href: string };

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps | LinkProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonProps)}>
      {children}
    </button>
  );
}
