"use client";
// ion/DatePicker: Enhanced with subtle animations for a luxury feel
import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import { type UseInputOptions, useInput } from "react-day-picker";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

import { Calendar } from "./Calendar";
import Hint from "@/components/ui/Hint";
import { inputClassNames, inputContainerClasses } from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";

/* ---------------------------------- Type --------------------------------- */

export interface DatePickerProps {
  /** HTML ID of the input */
  id?: string;
  /** Selected date */
  value?: Date | undefined;
  /** Icon to the left of the datepicker text */
  iconLeading?: React.ReactNode;
  /** Icon to the right of the datepicker text */
  iconTrailing?: React.ReactNode;
  /** Label of the datepicker */
  label?: string;
  /** Helper text, to the right of the label */
  helper?: string;
  /** Hint/description below the datepicker */
  hint?: string;
  /** Display hint icon to the left of the hint
   * @default false
   */
  showHintIcon?: boolean;
  /** Display the datepicker with an error state */
  error?: boolean;
  /** Display required mark to the right of the label */
  required?: boolean;
  /** Display the datepicker with a disabled state */
  disabled?: boolean;
  /** Placeholder of the datepicker */
  placeholder?: string;
  /** Classname of the datepicker container (use this to position the datepicker) */
  className?: string;
  /** Classname of the datepicker input (use this to restyle the datepicker) */
  inputClassName?: string;
  onSelect?: (date: Date | undefined) => void;
}

/* ---------------------------------- Component --------------------------------- */

function Datepicker({
  error,
  value,
  onSelect,
  format = "PP",
  iconLeading,
  iconTrailing,
  label,
  helper,
  required,
  hint,
  showHintIcon = false,
  className,
  placeholder,
  ...props
}: UseInputOptions & DatePickerProps) {
  const generatedId = React.useId();
  const id = props.id || generatedId;
  const ariaInvalid = !!error;

  const inputRef = useRef<HTMLInputElement>(null);
  const [inputFocused, setInputFocused] = React.useState(false);
  const [datePickerOpen, setDatePickerOpen] = React.useState(false);
  const { inputProps, dayPickerProps, setSelected } = useInput({
    ...props,
    format,
    defaultSelected: value ?? undefined,
  });

  // This is required to make the datepicker work with controlled components
  useEffect(() => {
    if (!value) {
      setSelected(undefined);
    } else if (value && value !== dayPickerProps.selected) {
      setSelected(value);
    }
  }, [value]);

  useEffect(() => {
    if (dayPickerProps.selected !== value) {
      onSelect?.(dayPickerProps.selected);
    }
  }, [dayPickerProps.selected]);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {label && (
        <Label
          id={`${id}__label`}
          htmlFor={id}
          required={required}
          helper={helper}
          disabled={props.disabled}
          className="mb-1"
        >
          {label}
        </Label>
      )}
      <Popover
        open={datePickerOpen}
        onOpenChange={(open) => {
          setDatePickerOpen(open);
          if (!open) {
            inputRef.current?.focus();
          }
        }}
      >
        <PopoverTrigger asChild>
          <motion.span
            className={twMerge(
              clsx(
                inputContainerClasses({
                  error,
                  disabled: props.disabled,
                }),
                "group-focus-within:primary-focus group-focus:primary-focus",
                inputFocused && "primary-focus"
              )
            )}
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {iconLeading && (
              <motion.span
                className="mr-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {iconLeading}
              </motion.span>
            )}
            <input
              id={id}
              aria-required={required}
              aria-invalid={ariaInvalid}
              aria-describedby={hint ? `${id}__hint` : undefined}
              aria-label={
                !label
                  ? inputProps.value
                    ? "Change date"
                    : "Choose date"
                  : undefined
              }
              className={twMerge(inputClassNames, props.inputClassName)}
              ref={inputRef}
              onChange={(e) => {
                inputProps.onChange?.(e);
              }}
              onFocus={() => setInputFocused(true)}
              onBlurCapture={() => setInputFocused(false)}
              onKeyDown={(e) => {
                if (e.key === "Tab") {
                  setDatePickerOpen(false);
                }
                if (e.key === "Enter") {
                  e.preventDefault();
                  setDatePickerOpen(true);
                }
              }}
              placeholder={placeholder}
              disabled={props.disabled}
              {...inputProps}
            />
            {iconTrailing && (
              <motion.span
                className="ml-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {iconTrailing}
              </motion.span>
            )}
          </motion.span>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto px-5 py-8 border-outline-sub"
          align="end"
          sideOffset={12}
        >
          <Calendar
            mode="single"
            onDayFocus={() => setInputFocused(true)}
            onDayBlur={() => {
              setInputFocused(false);
            }}
            onSelect={(date) => {
              onSelect?.(date);
            }}
            className="group"
            initialFocus
            {...dayPickerProps}
          />
        </PopoverContent>
      </Popover>
      {hint && (
        <Hint
          id={`${id}__hint`}
          error={error}
          className="mt-1"
          showIcon={showHintIcon}
          disabled={props.disabled}
        >
          {hint}
        </Hint>
      )}
    </motion.div>
  );
}

export default Datepicker;