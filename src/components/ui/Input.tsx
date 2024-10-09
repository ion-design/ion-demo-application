'use client';
// ion/Input: Generated with Ion on 2/4/2024, 7:46:44 PM
import * as React from 'react';
import Label from './Label';
import Hint from './Hint';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
	error?: boolean;
	size?: 'sm' | 'md' | 'lg';
	iconLeading?: React.ReactNode;
	iconTrailing?: React.ReactNode;
	label?: string;
	helper?: string;
	hint?: string;
	showHintIcon?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			type,
			error,
			size = 'md',
			required = false,
			helper,
			label,
			hint,
			showHintIcon,
			iconLeading,
			iconTrailing,
			...props
		},
		ref
	) => {
		const id = React.useId();

		const containerVariants = {
			default: {
				borderColor: error ? '#ef4444' : '#d1d5db', // danger or sub-stroke
				boxShadow: 'none',
				transition: { duration: 0.3, ease: 'easeOut' },
			},
			focused: {
				borderColor: error ? '#ef4444' : '#4f46e5', // danger or primary focus
				boxShadow: error
					? '0 0 0 1px #ef4444'
					: '0 0 0 1px #4f46e5',
				transition: { duration: 0.3, ease: 'easeOut' },
			},
			hovered: {
				borderColor: error ? '#ef4444' : '#818cf8',
				transition: { duration: 0.3, ease: 'easeOut' },
			},
		};

		const [isFocused, setIsFocused] = React.useState(false);
		const [isHovered, setIsHovered] = React.useState(false);

		return (
			<div className={className}>
				{label && (
					<Label
						htmlFor={id}
						required={required}
						helper={helper}
						disabled={props.disabled}
						error={error}
						className="mb-1"
					>
						{label}
					</Label>
				)}
				<motion.span
					initial="default"
					animate={isFocused ? 'focused' : isHovered ? 'hovered' : 'default'}
					variants={containerVariants}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					onHoverStart={() => setIsHovered(true)}
					onHoverEnd={() => setIsHovered(false)}
					className={clsx(
						'flex gap-2',
						'items-center',
						'w-full',
						'rounded-radius',
						'border',
						'pl-3 pr-2',
						'text-sm',
						'transition-shadow',
						'text-foreground',
						{
							'file:border-0 file:bg-transparent file:text-sm file:font-medium':
								true,
							'aria-disabled:border-weak-stroke aria-disabled:bg-weak':
								props.disabled,
							'border-danger': error,
							'border-sub-stroke': !error,
						}
					)}
					aria-disabled={props.disabled}
				>
					{iconLeading && (
						<motion.span
							className={clsx('text-soft-foreground', {
								'text-weak-foreground': props.disabled,
							})}
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.2 }}
						>
							{iconLeading}
						</motion.span>
					)}

					<input
						aria-required={required}
						id={id}
						className={clsx(
							'h-9 w-full flex-shrink rounded-radius bg-transparent focus:outline-none',
							'placeholder:text-soft-foreground disabled:text-soft-foreground',
							'disabled:placeholder:text-weak-foreground'
						)}
						ref={ref}
						{...props}
					/>
					{iconTrailing && (
						<motion.span
							className={clsx('text-soft-foreground', {
								'text-weak-foreground': props.disabled,
							})}
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.2 }}
						>
							{iconTrailing}
						</motion.span>
					)}
				</motion.span>
				{hint && (
					<Hint error={error} className="mt-1" showIcon={showHintIcon} disabled={props.disabled}>
						{hint}
					</Hint>
				)}
			</div>
		);
	}
);
Input.displayName = 'Input';

export default Input;