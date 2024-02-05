'use client';
// ion/Select: Generated with Ion on 2/4/2024, 7:46:45 PM
import { CaretDown } from '@phosphor-icons/react';
import * as SelectPrimitive from '@radix-ui/react-select';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import * as React from 'react';

import Hint from './Hint';
import Label from './Label';

const SelectBase = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
		iconLeading?: React.ReactNode;
	}
>(({ className, children, iconLeading, ...props }, ref) => (
	<SelectPrimitive.Trigger
		ref={ref}
		className={clsx(
			'border-sub-stroke focus:border-stroke focus:primary-focus disabled:border-stroke-weak flex h-9 w-full items-center justify-between rounded-radius border bg-base py-2 pl-3 pr-2 text-sm placeholder:text-soft-foreground disabled:pointer-events-none disabled:bg-weak',
			className
		)}
		{...props}
	>
		<span className="flex items-center gap-3">
			{iconLeading} {children}
		</span>

		<SelectPrimitive.Icon asChild>
			<CaretDown className="h-4 w-4" />
		</SelectPrimitive.Icon>
	</SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
	<SelectPrimitive.Portal>
		<SelectPrimitive.Content
			ref={ref}
			className={clsx(
				'relative z-50 min-w-[8rem] overflow-hidden rounded-radius border bg-base text-foreground shadow-low data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
				position === 'popper' &&
					'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
				className
			)}
			position={position}
			{...props}
		>
			<SelectPrimitive.Viewport
				className={clsx(
					'p-2',
					position === 'popper' &&
						'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
				)}
			>
				{children}
			</SelectPrimitive.Viewport>
		</SelectPrimitive.Content>
	</SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Label ref={ref} className={clsx('px-3 py-2 text-sm', className)} {...props} />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
		description?: string;
		iconLeading?: React.ReactNode;
	}
>(({ className, children, iconLeading, description, ...props }, ref) => (
	<SelectPrimitive.Item
		ref={ref}
		className={clsx(
			'group relative flex w-full cursor-default select-none items-center gap-2 rounded-radius p-2 pr-8 text-sm font-semibold text-foreground outline-none focus:bg-weak data-[disabled]:pointer-events-none data-[disabled]:text-weak-foreground',
			className
		)}
		{...props}
	>
		<span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
			<SelectPrimitive.ItemIndicator>
				<Check className="h-4 w-4 text-sub-foreground data-[disabled]:text-weak-foreground" />
			</SelectPrimitive.ItemIndicator>
		</span>
		{iconLeading}
		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
		{description && (
			<p className="font-normal text-soft-foreground group-data-[disabled]:text-weak-foreground">
				{description}
			</p>
		)}
	</SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Separator
		ref={ref}
		className={clsx('bg-muted -mx-1 my-1 h-px', className)}
		{...props}
	/>
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

interface Props extends SelectPrimitive.SelectProps {
	options: {
		label: string;
		value: string;
		iconLeading?: React.ReactNode;
		iconTrailing?: React.ReactNode;
		description?: string;
		disabled?: boolean;
	}[];
	placeholder?: string;
	iconLeading?: React.ReactNode;
	className?: string;
	label?: string;
	hint?: string;
	showHintIcon?: boolean;
	required?: boolean;
	error?: boolean;
}

const Select = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & Props
>(
	(
		{ className, options, required, error, showHintIcon, placeholder, iconLeading, ...props },
		ref
	) => (
		<div className="w-full">
			<SelectBase {...props}>
				{props.label && (
					<Label required={required} disabled={props.disabled} error={error} className="mb-1">
						{props.label}
					</Label>
				)}
				<SelectTrigger
					className={className}
					iconLeading={iconLeading}
					aria-required={required}
					ref={ref}
				>
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				{props.hint && (
					<Hint showIcon={showHintIcon} disabled={props.disabled} error={error}>
						{props.hint}
					</Hint>
				)}
				<SelectContent className="max-h-96" align="end">
					{options.map((option) => (
						<SelectItem
							key={option.value}
							value={option.value}
							disabled={option.disabled}
							iconLeading={option.iconLeading}
							description={option.description}
						>
							{option.label}
						</SelectItem>
					))}
				</SelectContent>
			</SelectBase>
		</div>
	)
);
Select.displayName = SelectPrimitive.Root.displayName;
export default Select;
export {
	Select,
	SelectBase,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
};
