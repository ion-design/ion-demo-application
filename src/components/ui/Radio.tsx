'use client';
// ion/Radio: Generated with Ion on 2/4/2024, 11:51:26 PM
import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import Label from '@/components/ui/Label';
import clsx from 'clsx';

const RadioGroup = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Root className={clsx('grid gap-2', className)} {...props} ref={ref} />
	);
});

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

type RadioGroupItemProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
	label?: string;
	description?: string;
	helper?: string;
};

const RadioGroupItem = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Item>,
	RadioGroupItemProps
>(({ className, children, label, required, description, helper, ...props }, ref) => {
	const id = React.useId();
	return (
		<span className="flex items-center space-x-2">
			<RadioGroupPrimitive.Item
				ref={ref}
				className={clsx(
					'focus-visible:primary-focus aspect-square h-4 w-4 rounded-full border border-soft-foreground text-soft-foreground hover:border-sub-foreground aria-checked:border-primary aria-checked:bg-primary aria-checked:text-primary',
					'disabled:cursor-not-allowed disabled:border-none disabled:bg-soft disabled:aria-checked:bg-soft disabled:aria-checked:text-soft-foreground',
					'transition-shadows transition-colors',
					className
				)}
				{...props}
				id={id}
			>
				<RadioGroupPrimitive.Indicator className="relative flex items-center justify-center">
					<Circle
						className={clsx(
							'parent h-2 w-2 rounded-full border-none fill-background text-current disabled:fill-blue-500',
							{
								'fill-soft-foreground': props.disabled,
							}
						)}
					/>
				</RadioGroupPrimitive.Indicator>
			</RadioGroupPrimitive.Item>
			{label && (
				<Label htmlFor={id} required={required} description={description} helper={helper}>
					{label}
				</Label>
			)}
		</span>
	);
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
