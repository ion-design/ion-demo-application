'use client';
// ion/SideNavigationItem: Generated with Ion on 2/4/2024, 7:46:45 PM
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import * as React from 'react';

const NavigationMenu = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Root
		ref={ref}
		className={clsx('relative z-10 flex w-full flex-1 [&>div]:w-full', className)}
		{...props}
	>
		{children}
	</NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.List
		ref={ref}
		className={clsx('group flex flex-1 list-none', className)}
		{...props}
	/>
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const navigationMenuLinkClassnames = cva(
	'flex w-full cursor-default justify-between gap-2 rounded-radius border-transparent px-3 py-2 text-base font-medium no-underline outline-none transition-colors',
	{
		variants: {
			type: {
				filled:
					'text-primary-foreground hover:bg-primary active:bg-primary dark:hover:bg-primary active:bg-primary',
				default:
					'text-sub-foreground hover:bg-primary-lightest active:border-primary active:bg-primary-lightest',
			},
			selected: {
				true: 'font-semibold',
				false: '',
			},
		},
		compoundVariants: [
			{
				type: 'filled',
				selected: true,
				className: 'bg-primary font-semibold',
			},
			{
				type: 'default',
				selected: true,
				className: 'bg-primary-lightest font-semibold',
			},
			{
				type: 'filled',
				selected: false,
				className: 'bg-primary-dark dark:bg-primary-light',
			},
			{
				type: 'default',
				selected: false,
				className: 'bg-base',
			},
		],
	}
);

const NavigationMenuLink = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Link>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link> & {
		selected?: boolean;
		extra?: React.ReactNode;
		iconLeading?: React.ReactNode;
		iconTrailing?: React.ReactNode;
		type?: 'default' | 'filled';
	}
>(
	(
		{
			className,
			selected = false,
			children,
			iconLeading,
			iconTrailing,
			extra,
			type = 'default',
			...props
		},
		ref
	) => (
		<NavigationMenuPrimitive.Link
			ref={ref}
			className={clsx(
				navigationMenuLinkClassnames({
					type,
					selected,
				}),
				className
			)}
			{...props}
		>
			<span className="flex items-center gap-2 cursor-pointer">
				{iconLeading} {children} {extra}
			</span>
			{children && iconTrailing}
		</NavigationMenuPrimitive.Link>
	)
);
NavigationMenuLink.displayName = 'NavigationMenuLink';

const NavigationMenuItem = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Item
		ref={ref}
		className={clsx('w-full cursor-pointer', className)}
		{...props}
	/>
));
NavigationMenuItem.displayName = 'NavigationMenuItem';

export { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList };
