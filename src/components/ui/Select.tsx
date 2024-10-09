'use client';
// ion/Select: Generated with Ion on 2/4/2024, 7:46:45 PM
import { CaretDown } from '@phosphor-icons/react';
import * as SelectPrimitive from '@radix-ui/react-select';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
			'border-sub-stroke focus:border-stroke focus:primary-focus disabled:border-stroke-weak flex h-9 w-full items-center justify-between rounded-radius border bg-base py-2 pl-3 pr-2 text-sm placeholder:text-soft-foreground disabled:pointer-events-none disabled:bg-weak transition-colors duration-300 ease-in-out',
			className
		)}
		{...props}
	>
		<motion.span
			className="flex items-center gap-3"
			initial={{ opacity: 0, x: -10 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.3, ease: 'easeOut' }}
		>
			{iconLeading} {children}
		</motion.span>

		<SelectPrimitive.Icon asChild>
			<motion.div
				initial={{ rotate: 0 }}
				animate={{ rotate: 180 }}
				transition={{ duration: 0.3, ease: 'easeOut' }}
				className="h-4 w-4"
			>
				<CaretDown />
			</motion.div>
		</SelectPrimitive.Icon>
	</SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
	<SelectPrimitive.Portal>
		<AnimatePresence>
			<SelectPrimitive.Content
				ref={ref}
				asChild
				position={position}
				{...props}
			>
				<motion.div
					initial={{ opacity: 0, scale: 0.95, y: -10 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.95, y: -10 }}
					transition={{ duration: 0.2, ease: 'easeOut' }}
					className={clsx(
						'relative z-50 min-w-[8rem] overflow-hidden rounded-radius border bg-base text-foreground shadow-low',
						position === 'popper' &&
							'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
						className
					)}
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
				</motion.div>
			</SelectPrimitive.Content>
		</AnimatePresence>
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
			'group relative flex w-full cursor-default select-none items-center gap-2 rounded-radius p-2 pr-8 text-sm font-semibold text-foreground outline-none focus:bg-weak data-[disabled]:pointer-events-none data-[disabled]:text-weak-foreground transition-colors duration-200 ease-in-out',
			className
		)}
		{...props}
	>
		<motion.span
			className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center"
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.2 }}
		>
			<SelectPrimitive.ItemIndicator>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.5 }}
					transition={{ duration: 0.2 }}
				>
					<Check className="h-4 w-4 text-sub-foreground data-[disabled]:text-weak-foreground" />
				</motion.div>
			</SelectPrimitive.ItemIndicator>
		</motion.span>
		<motion.div
			className="flex items-center gap-2"
			whileHover={{ x: 5 }}
			transition={{ type: 'tween', duration: 0.2 }}
		>
			{iconLeading}
			<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
		</motion.div>
		{description && (
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.1, duration: 0.3 }}
				className="font-normal text-soft-foreground group-data-[disabled]:text-weak-foreground"
			>
				{description}
			</motion.p>
		)}
	</SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Separator ref={ref} className={clsx('bg-muted -mx-1 my-1 h-px', className)} {...props} />
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
					<Label required={required} disabled={props.disabled} error={error} className="mb-1" />
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