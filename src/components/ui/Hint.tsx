// ion/Hint: Generated with Ion on 2/4/2024, 7:46:43 PM
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { InfoIcon } from 'lucide-react';

interface HintProps extends React.HTMLAttributes<HTMLDivElement> {
	showIcon?: boolean;
	error?: boolean;
	disabled?: boolean;
}

function Hint({ className, children, error, showIcon, disabled, ...props }: HintProps) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), 50); // slight delay for animation
		return () => clearTimeout(timer);
	}, []);

	return (
		<p
			className={clsx(
				'flex items-center gap-2.5 text-xs transition-opacity duration-500 ease-in-out transform',
				{
					'text-danger opacity-100 translate-y-0': error && isVisible,
					'text-sub-foreground opacity-100 translate-y-0': !error && !disabled && isVisible,
					'text-weak-foreground opacity-70 translate-y-1': disabled && isVisible,
					'opacity-0 translate-y-2': !isVisible,
				},
				className
			)}
			{...props}
		>
			{showIcon && (
				<InfoIcon
					className={clsx(
						'h-4 w-4 transition-transform duration-500 ease-in-out',
						isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
					)}
				/>
			)}
			{children}
		</p>
	);
}

export default Hint;