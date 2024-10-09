'use client';
// ion/Switch: Generated with Ion on 2/5/2024, 12:14:35 AM
import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import clsx from 'clsx';
import Label from '@/components/ui/Label';
import { motion } from 'framer-motion';

type SwitchProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
	size?: 'sm' | 'md' | 'lg';
	label?: React.ReactNode;
	description?: string;
	helper?: string;
};

const MotionSwitch = motion(SwitchPrimitives.Root);
const MotionThumb = motion(SwitchPrimitives.Thumb);

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, SwitchProps>(
	({ className, size = 'sm', required, label, description, helper, ...props }, ref) => {
		const id = React.useId();

		// Define translation distances based on size
		const translateDistances: Record<string, number> = {
			sm: 16, // px
			md: 24,
			lg: 20,
		};

		return (
			<span className="flex items-center gap-2 text-sm">
				<MotionSwitch
					className={clsx(
						'group',
						'focus-visible:primary-focus peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors',
						'disabled:pointer-events-none disabled:bg-soft',
						{
							'data-[state=checked]:bg-primary data-[state=unchecked]:bg-sub-stroke data-[state=unchecked]:hover:bg-soft-foreground':
								!props.disabled,
						},
						{
							'h-4 w-8': size === 'sm',
							'h-6 w-12': size === 'md',
							'h-[34px] w-[56px] pl-1': size === 'lg',
						},
						className
					)}
					{...props}
					ref={ref}
					id={id}
					as={MotionSwitch}
					initial={false}
					animate={{
						backgroundColor: props.checked ? '#4ADE80' : '#D1D5DB', // Example colors, adjust as needed
					}}
					transition={{ duration: 0.3, ease: 'easeOut' }}
				>
					<MotionThumb
						className={clsx(
							'pointer-events-none block rounded-full bg-base shadow-lg ring-0 transition-transform group-disabled:bg-weak-foreground group-disabled:shadow-none',
							{
								'h-3 w-3': size === 'sm',
								'h-5 w-5': size === 'md',
								'h-6 w-6': size === 'lg',
							}
						)}
						as={MotionThumb}
						layout
						transition={{ type: 'spring', stiffness: 700, damping: 30 }}
						animate={{
							x: props.checked ? translateDistances[size] : 0,
							scale: props.checked ? 1.05 : 1,
						}}
					/>
				</MotionSwitch>
				{label && (
					<Label htmlFor={id} required={required} description={description} helper={helper}>
						{label}
					</Label>
				)}
			</span>
		);
	}
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export default Switch;