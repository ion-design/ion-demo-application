// ion/Sidebar: Generated with Ion on 2/4/2024, 7:46:45 PM
import clsx from 'clsx';

interface Props {
	className?: string;
	filled?: boolean;
	children?: React.ReactNode | React.ReactNode[];
}

export default function Sidebar({ children, filled = false, className }: Props) {
	return (
		<div
			className={clsx(
				'flex h-screen min-h-0 flex-col justify-between border-r border-weak-stroke p-2',
				{
					'bg-primary-darker dark:bg-primary-lighter': filled,
				},
				className
			)}
		>
			{children}
		</div>
	);
}
