import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 touch-target",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-light active:bg-primary shadow-soft",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-soft",
        outline: "border border-input bg-background hover:bg-secondary hover:text-secondary-foreground shadow-soft",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-dark shadow-soft",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Event-specific variants
        hero: "bg-accent text-accent-foreground hover:bg-accent-dark active:bg-accent-dark shadow-medium font-semibold",
        success: "bg-success text-success-foreground hover:bg-success/90 shadow-soft",
        premium: "bg-hero-gradient text-primary-foreground hover:opacity-90 shadow-elevated font-semibold",
        accent: "bg-accent-gradient text-accent-foreground hover:opacity-90 shadow-medium",
      },
      size: {
        default: "h-12 px-6 py-3 text-base rounded-xl",
        sm: "h-10 px-4 py-2 text-sm rounded-lg",
        lg: "h-14 px-8 py-4 text-lg rounded-xl",
        icon: "h-12 w-12 rounded-xl",
        mobile: "h-14 px-6 py-4 text-base rounded-xl w-full", // Full width for mobile CTAs
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
