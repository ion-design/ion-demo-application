// ion/Sidebar: Generated with Ion on 2/4/2024, 7:46:45 PM
import clsx from 'clsx';
import { useEffect, useState } from 'react';

interface Props {
	className?: string;
	filled?: boolean;
	children?: React.ReactNode | React.ReactNode[];
}

export default function Sidebar({ children, filled = false, className }: Props) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<div
			className={clsx(
				'flex h-screen min-h-0 flex-col justify-between border-r border-weak-stroke p-2 transition-colors duration-300 ease-in-out',
				{
					'bg-primary-darker dark:bg-primary-lighter': filled,
					'opacity-0 transform translate-x-[-20px]': !isMounted,
					'opacity-100 transform translate-x-0': isMounted,
				},
				className
			)}
		>
			{children}
		</div>
	);
}