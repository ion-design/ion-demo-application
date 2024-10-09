"use client";
// ion/DatePicker/Calendar: Generated with Ion on 6/19/2024, 10:30:32 PM
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import clsx from "clsx";
import * as React from "react";
import { DayPicker } from "react-day-picker";
import { twMerge } from "tailwind-merge";

import { buttonVariants } from "@/components/ui/Button";

/* ---------------------------------- Type --------------------------------- */

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

/* ---------------------------------- Component --------------------------------- */

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={clsx("transition-opacity duration-500 ease-in-out opacity-0 animate-fadeIn", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-8",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium transition-transform duration-300 ease-in-out",
        nav: "space-x-1 flex items-center",
        nav_button: twMerge(
          buttonVariants({ color: "neutral", variant: "ghost", size: "sm" }),
          "h-8 w-8 transition-transform duration-300 ease-in-out hover:scale-105"
        ),
        nav_button_previous: "absolute left-1 rounded-radius",
        nav_button_next: "absolute right-1",
        table: "w-full space-y-1",
        head_row: "flex border-b border-outline-sub pb-3 justify-between",
        head_cell: "text-soft rounded-radius w-9 font-normal text-sm",
        row: "flex w-full gap-2 mt-3",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-radius first:[&:has([aria-selected])]:rounded-l-radius last:[&:has([aria-selected])]:rounded-r-radius focus-within:relative focus-within:z-20",
        day: "h-8 w-8 p-0 font-normal aria-selected:bg-primary rounded-radius hover:bg-primary-container focus:primary-focus transition-colors transition-transform duration-300 ease-in-out hover:scale-105 focus:scale-105",
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-on-primary transition-colors duration-300 ease-in-out",
        day_today:
          "bg-primary-container text-on-primary-container aria-selected:text-on-primary transition-colors duration-300 ease-in-out",
        day_outside: "day-outside text-soft aria-selected:text-on-primary",
        day_disabled: "text-soft",
        day_range_middle:
          "aria-selected:bg-primary aria-selected:text-on-primary",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <CaretLeft className="h-4 w-4" />,
        IconRight: () => <CaretRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };