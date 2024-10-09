// src/components/ui/Divider.tsx
// ion/Divider: Animated with Ion on 4/27/2024, 10:15:30 AM
import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import clsx from 'clsx';

const Divider = React.forwardRef<
	React.ElementRef<typeof SeparatorPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
		children?: React.ReactNode;
	}
>(({ className, orientation = 'horizontal', children, decorative = true, ...props }, ref) => {
	const [isVisible, setIsVisible] = React.useState(false);

	React.useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<div className="relative w-full overflow-hidden">
			<div className={clsx(
				"absolute inset-0 flex items-center transition-opacity duration-700 ease-out",
				isVisible ? "opacity-100" : "opacity-0"
			)}>
				<SeparatorPrimitive.Root
					ref={ref}
					decorative={decorative}
					orientation={orientation}
					className={clsx(
						'bg-weak-foreground transform transition-transform duration-700 ease-out',
						orientation === 'horizontal'
							? isVisible
								? 'scale-x-100 h-[1px] w-full'
								: 'scale-x-0 h-[1px] w-full'
							: isVisible
								? 'scale-y-100 h-full w-[1px]'
								: 'scale-y-0 h-full w-[1px]',
						className
					)}
					{...props}
				/>
			</div>

			<div className={clsx(
				"relative flex justify-center text-xs uppercase transition-opacity duration-700 ease-out",
				isVisible ? "opacity-100" : "opacity-0"
			)}>
				<span className="px-3 text-soft-foreground transition-transform duration-700 ease-out transform">
					{children}
				</span>
			</div>
		</div>
	);
});
Divider.displayName = SeparatorPrimitive.Root.displayName;

export default Divider;