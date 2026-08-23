import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const ghostButtonVariants = cva(
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-turquoise text-navy shadow-[var(--shadow-glow)] hover:-translate-y-0.5 hover:bg-turquoise-soft",
        outline:
          "border border-navy/15 bg-transparent text-foreground hover:-translate-y-0.5 hover:border-turquoise hover:text-navy",
        onDark:
          "border border-navy-foreground/25 bg-transparent text-navy-foreground hover:-translate-y-0.5 hover:border-turquoise hover:text-turquoise",
        solidNavy: "bg-navy text-navy-foreground hover:-translate-y-0.5 hover:bg-navy-soft",
      },
      size: {
        md: "h-11 px-5 text-sm",
        lg: "h-13 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = ComponentProps<"a"> & VariantProps<typeof ghostButtonVariants>;

export function GhostButton({ className, variant, size, ...props }: Props) {
  return <a className={cn(ghostButtonVariants({ variant, size }), className)} {...props} />;
}
