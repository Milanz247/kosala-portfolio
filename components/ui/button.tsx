import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-transparent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A00] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#FF7A00] text-white hover:bg-[#FF9230] shadow-md shadow-[#FF7A00]/20 hover:shadow-[#FF7A00]/40 active:scale-95",
        outline:
          "border border-[#FF7A00] text-[#FF7A00] bg-transparent hover:bg-[#FF7A00] hover:text-white active:scale-95",
        ghost:
          "text-[var(--fg-muted)] hover:bg-[var(--bg-secondary)] hover:text-[var(--fg)]",
        secondary:
          "bg-[var(--bg-secondary)] text-[var(--fg)] border border-[var(--border)] hover:border-[#FF7A00] hover:text-[#FF7A00] active:scale-95",
        link:
          "text-[#FF7A00] underline-offset-4 hover:underline p-0 h-auto",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#20bc5a] shadow-md shadow-[#25D366]/20 active:scale-95",
        destructive:
          "bg-red-600 text-white hover:bg-red-500 active:scale-95",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm:      "h-9 px-4 text-xs rounded-lg",
        lg:      "h-12 px-8 text-base rounded-xl",
        icon:    "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size:    "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

