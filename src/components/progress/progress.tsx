import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ColorType } from "@/lib/type";

const progressIndicatorStyles = cva(
  "size-full rounded-full flex-1 transition-all",
  {
    variants: {
      color: {
        primary: "bg-primary",
        secondary: "bg-secondary",
        success: "bg-success",
        warning: "bg-warning",
        danger: "bg-danger",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  }
);

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  color?: ColorType;
  classNames?: {
    base?: string;
    indicator?: string;
  };
}
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, color, classNames = {}, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-muted",
      className,
      classNames.base
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(progressIndicatorStyles({ color }), classNames.indicator)}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress, progressIndicatorStyles };
