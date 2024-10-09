"use client";
// ion/Popover: Enhanced with subtle animations for a luxury feel
import * as PopoverPrimitive from "@radix-ui/react-popover";
import clsx from "clsx";
import * as React from "react";
import { twMerge } from "tailwind-merge";

const PopoverRoot = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

/* ---------------------------------- Component --------------------------------- */

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={twMerge(
        clsx(
          "z-50 w-72 rounded-md border border-soft-stroke bg-background p-4 text-foreground shadow-lg outline-none",
          "transition-opacity transition-transform duration-200 ease-in-out",
          "data-[state=open]:opacity-100 data-[state=closed]:opacity-0",
          "data-[state=open]:scale-100 data-[state=closed]:scale-95",
          "data-[side=bottom]:translate-y-2 data-[side=left]:translate-x-2",
          "data-[side=right]:-translate-x-2 data-[side=top]:-translate-y-2",
          className
        )
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { PopoverRoot as Popover, PopoverContent, PopoverTrigger };