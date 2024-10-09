// src/components/ui/Card.tsx
// ion/Card: Generated with Ion on 2/4/2024, 7:46:43 PM
import * as React from 'react';

import clsx from 'clsx';

const BaseCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={clsx(
				'flex h-full w-fit flex-col gap-2 rounded-radius-md p-4 text-foreground transition transform ease-in-out duration-300 hover:shadow-lg hover:scale-105',
				className
			)}
			{...props}
		/>
	)
);
BaseCard.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={clsx(
				'flex items-center gap-5 pb-1 opacity-0 transform translate-y-2 transition ease-in-out duration-500',
				'card-header-enter-active:opacity-100 card-header-enter-active:translate-y-0',
				className
			)}
			{...props}
		/>
	)
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
	({ className, ...props }, ref) => (
		<h3
			ref={ref}
			className={clsx(
				'text-xl font-semibold text-foreground transition opacity-0 transform translate-y-2 duration-500',
				'card-title-enter-active:opacity-100 card-title-enter-active:translate-y-0',
				className
			)}
			{...props}
		/>
	)
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p
		ref={ref}
		className={clsx(
			'text-sm text-sub-foreground transition opacity-0 transform translate-y-2 duration-500',
			'card-description-enter-active:opacity-100 card-description-enter-active:translate-y-0',
			className
		)}
		{...props}
	/>
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={clsx(
				'pt-0 transition opacity-0 transform translate-y-2 duration-500',
				'card-content-enter-active:opacity-100 card-content-enter-active:translate-y-0',
				className
			)}
			{...props}
		/>
	)
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={clsx(
				'mt-auto flex items-center space-x-2 pt-3 transition opacity-0 transform translate-y-2 duration-500',
				'card-footer-enter-active:opacity-100 card-footer-enter-active:translate-y-0',
				className
			)}
			{...props}
		/>
	)
);
CardFooter.displayName = 'CardFooter';

interface CardProps {
	title?: React.ReactNode | React.ReactNode[];
	subtitle?: React.ReactNode | React.ReactNode[];
	icon?: React.ReactNode;
	children?: React.ReactNode | React.ReactNode[];
	actions?: React.ReactNode | React.ReactNode[];
	type?: 'elevated' | 'outline' | 'filled';
	className?: string;
}

export default function Card({
	title,
	subtitle,
	children,
	icon,
	actions,
	className,
	type = 'outline',
}: CardProps) {
	return (
		<BaseCard
			className={clsx(
				className,
				{
					'border border-sub-stroke': type === 'outline',
					'bg-weak': type === 'filled',
					'shadow-low': type === 'elevated',
				},
				'animate-fade-in'
			)}
		>
			{(title || subtitle) && (
				<CardHeader>
					{icon}
					<div className="space-y-1">
						<CardTitle>{title}</CardTitle>
						{subtitle && <CardDescription>{subtitle}</CardDescription>}
					</div>
				</CardHeader>
			)}

			<CardContent>{children}</CardContent>
			<CardFooter>{actions}</CardFooter>
		</BaseCard>
	);
}