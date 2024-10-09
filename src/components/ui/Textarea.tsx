'use client';
// ion/Textarea: Generated with Ion on 2/4/2024, 7:46:43 PM
import * as React from 'react';
import clsx from 'clsx';
import Label from './Label';
import Hint from './Hint';
import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	required?: boolean;
	label?: string;
	hint?: string;
	showHintIcon?: boolean;
	error?: boolean;
	showCount?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	(
		{
			className,
			style,
			required,
			label,
			hint,
			showHintIcon,
			error,
			showCount,
			// Need to explicitly call out since the {...props} spread at the end of the textarea would overwrite the onChange handler
			onChange,
			...props
		},
		ref
	) => {
		const id = React.useId();
		const [charCount, setCharCount] = useState(0);
		const [isFocused, setIsFocused] = useState(false);
		const textareaControls = useAnimation();

		React.useEffect(() => {
			if (error) {
				textareaControls.start({
					x: [0, -5, 5, -5, 5, 0],
					transition: { duration: 0.4 },
				});
			}
		}, [error, textareaControls]);

		return (
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: 'easeOut' }}
				className={className}
				style={style}
			>
				{label && (
					<Label
						htmlFor={id}
						className="mb-1"
						disabled={props.disabled}
						required={required}
						error={error}
					>
						{label}
					</Label>
				)}
				<div className="relative">
					<motion.textarea
						maxLength={props.maxLength}
						id={id}
						ref={ref}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
						onChange={(e) => {
							if (onChange) {
								onChange(e);
							}
							setCharCount(e.target.value.length);
						}}
						className={clsx(
							'focus-visible:primary-focus flex w-full rounded-radius border bg-transparent p-3 text-sm text-foreground transition-shadow placeholder:text-soft-foreground focus-visible:border-foreground',
							'disabled:pointer-events-none disabled:border-weak-stroke disabled:bg-weak disabled:text-soft-foreground disabled:placeholder:text-weak-foreground',
							{
								'focus-visible:danger-focus border-danger': error,
								'border-sub-stroke': !error,
							}
						)}
						{...props}
						animate={isFocused ? { scale: 1.02, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' } : { scale: 1, boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.05)' }}
						transition={{ type: 'spring', stiffness: 300, damping: 20 }}
					/>
					{showCount && (
						<motion.span
							className={clsx('absolute bottom-3 right-4 text-xs font-normal text-sub-foreground', {
								'text-weak-foreground': props.disabled,
								'!text-danger': error,
							})}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
						>
							{charCount} / {props.maxLength}
						</motion.span>
					)}
				</div>
				{hint && (
					<Hint error={error} className="mt-1" showIcon={showHintIcon} disabled={props.disabled}>
						{hint}
					</Hint>
				)}
			</motion.div>
		);
	}
);
Textarea.displayName = 'Textarea';

export default Textarea;