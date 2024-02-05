'use client';
// ion/Label: Generated with Ion on 2/4/2024, 7:46:44 PM
import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';

import clsx from 'clsx';

const labelVariants = cva(
	'text-sm gap-1 font-semibold whitespace-nowrap peer-disabled:cursor-not-allowed peer-disabled:text-weak-foreground'
);

type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
	VariantProps<typeof labelVariants> & {
		required?: boolean;
		disabled?: boolean;
		description?: string;
		helper?: string;
		error?: boolean;
	};
const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
	({ className, disabled, description, helper, required, children, error, ...props }, ref) => {
		return (
			<div
				className={clsx(
					labelVariants(),
					{
						'text-weak-foreground': disabled,
						'text-danger': error,
					},
					className
				)}
			>
				<LabelPrimitive.Root
					ref={ref}
					{...props}
					aria-required={required}
					className="flex flex-row items-center gap-x-0.5"
				>
					{children}
					{required && <span className="text-primary">*</span>}
					{helper && <span className="text-sm text-sub-foreground">{helper}</span>}
				</LabelPrimitive.Root>
				<p className="text-sm text-soft-foreground">{description}</p>
			</div>
		);
	}
);
Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
