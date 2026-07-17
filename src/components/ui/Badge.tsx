import { type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-mono-ui text-xs font-medium tracking-wide",
  {
    variants: {
      variant: {
        brand: "bg-brand/10 text-brand border border-brand/20",
        accent: "bg-accent/10 text-accent border border-accent/25",
        neutral: "bg-surface-2 text-muted border border-border",
        outline: "border border-border-strong text-foreground bg-surface-2",
      },
      size: {
        sm: "px-2.5 py-1 text-[11px]",
        md: "px-3.5 py-1.5 text-xs",
      },
    },
    defaultVariants: { variant: "brand", size: "md" },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}
