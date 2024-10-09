'use client';
// ion/Button: Generated with Ion on 2/4/2024, 7:46:45 PM
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import * as React from 'react';

const classNames = cva(
	[
		'flex',
		'items-center',
		'justify-center',
		'rounded-radius',
		'disabled:pointer-events-none',
		'transform',
		'transition-transform'
	],
	{
		variants: {
			emphasis: {
				gradient: 'disabled:bg-soft disabled:text-soft-foreground',
				high: 'disabled:bg-soft disabled:text-soft-foreground',
				medium:
					'border disabled:border-weak-stroke disabled:text-weak-foreground focus:bg-white focus:bg-opacity-0',
				low: 'focus:bg-white focus:bg-opacity-0 disabled:text-weak-foreground',
			},
			color: {
				primary: 'focus:primary-focus',
				secondary: 'focus:secondary-focus',
				danger: 'focus:danger-focus',
			},
			size: {
				sm: 'gap-x-1 px-2 py-1 text-sm',
				md: 'gap-x-1 px-3 py-2 text-sm',
				lg: 'gap-x-2 px-4 py-3 text-base',
			},
		},
		compoundVariants: [
			{
				emphasis: ['gradient'],
				color: ['primary'],
				className: [
					'bg-blend-overlay bg-gradient-to-r from-white/40 to-white/0 bg-primary',
					'hover:bg-primary-dark',
					'active:bg-primary-darker',
					'text-primary-foreground',
				],
			},
			{
				emphasis: ['high'],
				color: ['primary'],
				className: [
					'hover:bg-primary-dark',
					'hover:border-primary-dark',
					'active:bg-primary-darker',
					'active:border-primary-dark',
				],
			},
			{
				emphasis: ['high'],
				color: ['primary'],
				className: [
					'bg-primary',
					'hover:bg-primary-dark',
					'active:bg-primary-darker',
					'text-primary-foreground',
				],
			},
			{
				emphasis: ['medium'],
				color: ['primary'],
				className: [
					'border-primary',
					'hover:bg-primary-lightest',
					'hover:border-primary-dark',
					'active:bg-primary-lighter',
					'active:border-primary-dark',
					'text-primary',
					'hover:text-primary-dark',
					'active:text-primary-darker',
				],
			},
			{
				emphasis: ['low'],
				color: ['primary'],
				className: ['hover:bg-primary-lightest', 'active:bg-primary-lighter', 'text-primary'],
			},
			{
				emphasis: ['gradient'],
				color: ['secondary'],
				className: [
					'bg-blend-overlay bg-gradient-to-r from-white/40 to-white/0 bg-secondary',
					'hover:bg-secondary-dark',
					'active:bg-secondary-darker',
					'text-secondary-foreground',
				],
			},
			{
				emphasis: ['high'],
				color: ['secondary'],
				className: [
					'bg-secondary',
					'hover:bg-secondary-dark',
					'active:bg-secondary-darker',
					'text-secondary-foreground',
				],
			},
			{
				emphasis: ['medium'],
				color: ['secondary'],
				className: [
					'border-secondary',
					'hover:bg-secondary-lightest',
					'hover:border-secondary-dark',
					'active:bg-secondary-lighter',
					'active:border-secondary-dark',
					'text-secondary',
				],
			},
			{
				emphasis: ['low'],
				color: ['secondary'],
				className: ['hover:bg-secondary-lightest', 'active:bg-secondary-lighter', 'text-secondary'],
			},
			{
				emphasis: ['gradient'],
				color: ['danger'],
				className: [
					'bg-blend-overlay bg-gradient-to-r from-white/40 to-white/0 bg-danger',
					'hover:bg-danger-dark',
					'active:bg-danger-darker',
					'text-danger-foreground',
				],
			},
			{
				emphasis: ['high'],
				color: ['danger'],
				className: [
					'bg-danger',
					'hover:bg-danger-dark',
					'active:bg-danger-darker',
					'text-danger-foreground',
				],
			},
			{
				emphasis: ['medium'],
				color: ['danger'],
				className: [
					'border-danger',
					'hover:bg-danger-lightest',
					'hover:border-danger-dark',
					'hover:text-danger-dark',
					'active:bg-danger-lighter',
					'active:border-danger-dark',
					'active:text-danger-dark',
					'text-danger',
				],
			},
			{
				emphasis: ['low'],
				color: ['danger'],
				className: ['hover:bg-danger-lightest', 'active:bg-danger-lighter', 'text-danger'],
			},
		],
	}
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children?: React.ReactNode | React.ReactNode[];
	iconLeading?: React.ReactNode;
	iconTrailing?: React.ReactNode;
	color?: 'primary' | 'secondary' | 'danger';
	emphasis?: 'high' | 'medium' | 'low' | 'gradient';
	size?: 'sm' | 'md' | 'lg';
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			children,
			iconTrailing,
			iconLeading,
			color = 'primary',
			emphasis = 'high',
			size = 'sm',
			...props
		},
		ref
	) => {
		return (
			<button
				className={clsx(
					classNames({
						color,
						emphasis,
						size,
					}),
					{
						'!px-0 !py-0': (iconLeading || iconTrailing) && !children,
						'h-7 w-7': (iconLeading || iconTrailing) && !children && size === 'sm',
						'h-8 w-8': (iconLeading || iconTrailing) && !children && size === 'md',
						'h-10 w-10': (iconLeading || iconTrailing) && !children && size === 'lg',
					},
					'transition-shadows transition-colors transition-transform hover:scale-105 focus:scale-105',
					className
				)}
				ref={ref}
				{...props}
			>
				{iconLeading}
				{children}
				{iconTrailing}
			</button>
		);
	}
);
Button.displayName = 'Button';

export default Button;