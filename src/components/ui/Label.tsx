'use client';
// ion/Label: Generated with Ion on 2/4/2024, 7:46:44 PM
import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';

import clsx from 'clsx';
import { motion } from 'framer-motion';

const labelVariants = cva(
	'text-sm gap-1 font-semibold whitespace-nowrap peer-disabled:cursor-not-allowed peer-disabled:text-weak-foreground',
	{
		variants: {
			animate: {
				initial: 'opacity-0 y-2',
				animate: 'opacity-100 y-0',
			},
		},
		defaultVariants: {
			animate: 'animate',
		},
	}
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
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: 'easeOut' }}
				className={clsx(
					labelVariants(),
					{
						'text-weak-foreground': disabled,
						'text-danger': error,
					},
					'transition-colors duration-300 ease-in-out',
					className
				)}
			>
				<LabelPrimitive.Root
					ref={ref}
					{...props}
					aria-required={required}
					className="flex flex-row items-center gap-x-0.5 transition-transform duration-300 ease-in-out"
				>
					{children}
					{required && (
						<motion.span
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ duration: 0.3, ease: 'easeOut' }}
							className="text-primary"
						>
							*
						</motion.span>
					)}
					{helper && (
						<motion.span
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2, duration: 0.3, ease: 'easeOut' }}
							className="text-sm text-sub-foreground"
						>
							{helper}
						</motion.span>
					)}
				</LabelPrimitive.Root>
				{description && (
					<motion.p
						initial={{ opacity: 0, y: 5 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.3, ease: 'easeOut' }}
						className="text-sm text-soft-foreground mt-1"
					>
						{description}
					</motion.p>
				)}
			</motion.div>
		);
	}
);
Label.displayName = LabelPrimitive.Root.displayName;

export default Label;