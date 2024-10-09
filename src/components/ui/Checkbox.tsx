// ion/Checkbox: Generated with Ion on 2/5/2024, 12:14:35 AM
import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import Label from './Label';

import clsx from 'clsx';
import { DividerHorizontalIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';

const MotionCheckboxRoot = motion(CheckboxPrimitive.Root);
const MotionCheck = motion(Check);
const MotionDivider = motion(DividerHorizontalIcon);

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
		label?: string;
		description?: string;
		helper?: string;
	}
>(({ className, label, description, required, helper, ...props }, ref) => {
	const id = React.useId();
	return (
		<span className="flex items-center gap-2">
			<MotionCheckboxRoot
				id={id}
				ref={ref}
				className={clsx(
					'peer h-5 w-5 shrink-0 overflow-hidden rounded border border-soft-foreground bg-transparent transition-colors hover:border-sub-foreground',
					'focus-visible:primary-focus',
					'data-[state=checked]:bg-primary data-[state=indeterminate]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:text-primary-foreground',
					'disabled:pointer-events-none disabled:bg-soft disabled:text-soft-foreground disabled:data-[state=checked]:bg-soft disabled:data-[state=indeterminate]:bg-soft disabled:data-[state=checked]:text-soft-foreground disabled:data-[state=indeterminate]:text-soft-foreground',
					'group',
					className
				)}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				transition={{ type: 'spring', stiffness: 300, damping: 20 }}
				{...props}
			>
				<CheckboxPrimitive.Indicator
					asChild
					className={clsx('flex items-center justify-center text-current')}
				>
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{
							scale: props.checked || props.indeterminate ? 1 : 0,
							opacity: props.checked || props.indeterminate ? 1 : 0,
						}}
						transition={{ duration: 0.2, ease: 'easeOut' }}
					>
						{props.indeterminate ? (
							<MotionDivider
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.2 }}
								className={'w-3 h-0.5 bg-current'}
							/>
						) : (
							<MotionCheck
								initial={{ pathLength: 0 }}
								animate={{ pathLength: 1 }}
								transition={{ duration: 0.2, ease: 'easeOut' }}
								size={15}
								className={'z-10'}
							/>
						)}
					</motion.div>
				</CheckboxPrimitive.Indicator>
			</MotionCheckboxRoot>
			{label && (
				<Label
					htmlFor={id}
					required={required}
					disabled={props.disabled}
					description={description}
					helper={helper}
				>
					{label}
				</Label>
			)}
		</span>
	);
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;