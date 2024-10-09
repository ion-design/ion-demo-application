// Generated with Ion on 2/5/2024, 1:58:17 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=94:4650
import clsx from 'clsx';
import { useEffect, useState } from 'react';

type HireHeaderProps = {
	badge: React.ReactNode;
	subtitle?: string;
	title?: string;
	className?: string;
};

function HireHeader({
	badge,
	subtitle = 'A new user can help you hit your goals and make impact across multiple functions.',
	title = 'New Employee in your organization',
	className = '',
}: HireHeaderProps) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Trigger the animation on mount
		setIsVisible(true);
	}, []);

	return (
		<div
			className={clsx(
				'w-full flex-col flex items-start gap-y-1 pr-20 h-fit transition-opacity transition-transform duration-700 ease-out',
				isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
				className
			)}
		>
			<div className="flex items-center gap-x-2">
				<div className="text-lg font-semibold text-foreground transition-transform duration-700 ease-out">
					{title}
				</div>
				{badge}
			</div>
			<div className="text-sm text-sub-foreground w-[680px]">
				{subtitle}
			</div>
		</div>
	);
}
export default HireHeader;