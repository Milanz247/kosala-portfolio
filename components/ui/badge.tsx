import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default:   "border-transparent bg-[#FF7A00] text-white",
        accent:    "border-[#FF7A00]/30 bg-[var(--accent-muted)] text-[#FF7A00]",
        secondary: "border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--fg-muted)]",
        success:   "border-green-500/30 bg-green-500/10 text-green-400",
        outline:   "text-[#FF7A00] border-[#FF7A00]/50 bg-transparent",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
