import React from "react";

import { cn } from "@/lib/utils";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center px-4 pb-4", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { CardFooter };
