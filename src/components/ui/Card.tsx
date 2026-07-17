import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, glass = false, hover = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border border-border p-6 transition-all duration-300",
          glass ? "glass" : "bg-surface shadow-[var(--shadow-md)]",
          hover &&
            "hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)] hover:border-border-strong",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card };
