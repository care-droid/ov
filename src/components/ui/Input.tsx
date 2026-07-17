import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-12 w-full rounded-full border border-border-strong bg-surface px-5 text-sm text-foreground placeholder:text-muted-2 transition-colors focus-ring focus:border-brand",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
