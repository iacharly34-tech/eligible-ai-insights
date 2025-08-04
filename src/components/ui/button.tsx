import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform hover:scale-[1.02] active:scale-[0.98] relative",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-all duration-300",
        outline:
          "border-2 border-primary/30 bg-background text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300",
        ghost: "text-primary hover:bg-primary/10 hover:text-primary transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline transition-all duration-300",
        hero: "bg-gradient-primary text-primary-foreground hover:shadow-luxury transition-all duration-300 shadow-elegant",
        accent: "bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300",
        tengo: "bg-gradient-primary text-primary-foreground hover:shadow-glow rounded-xl px-6 py-3 font-semibold transition-all duration-300",
        rolex: "bg-gradient-primary text-primary-foreground hover:shadow-luxury transition-all duration-300 shadow-elegant font-semibold tracking-wide",
        premium: "bg-gradient-highlight text-primary-foreground hover:shadow-luxury border border-primary/20 transition-all duration-300 font-semibold",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 py-4 text-lg font-semibold",
        icon: "h-11 w-11 rounded-xl",
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
