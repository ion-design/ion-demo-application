// Generated with Ion on 2/4/2024, 7:46:42 PM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=10:1836
import clsx from 'clsx';
import { useState, useEffect } from 'react';

type SidenavHeaderProps = {
	className?: string;
};

function SidenavHeader({ className = '' }: SidenavHeaderProps) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<div
			className={clsx(
				'bg-base flex items-center gap-x-2.5 px-3 h-fit transition-opacity duration-700 ease-out',
				isVisible ? 'opacity-100' : 'opacity-0',
				className
			)}
		>
			<div className="flex-1 flex items-center px-1 py-5">
				<img
					src="/images/ion-logo.svg"
					alt="Group"
					className="h-8 transform transition-transform duration-300 ease-in-out hover:scale-105"
				/>
			</div>
		</div>
	);
}
export default SidenavHeader;