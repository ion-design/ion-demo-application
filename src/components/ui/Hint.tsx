// ion/Hint: Generated with Ion on 2/4/2024, 7:46:43 PM
import clsx from 'clsx';
import { InfoIcon } from 'lucide-react';

interface HintProps extends React.HTMLAttributes<HTMLDivElement> {
	showIcon?: boolean;
	error?: boolean;
	disabled?: boolean;
}

function Hint({ className, children, error, showIcon, disabled, ...props }: HintProps) {
	return (
		<p
			className={clsx(
				'flex items-center gap-2.5 text-xs',
				{
					'text-danger': error,
					'text-sub-foreground': !error,
					'text-weak-foreground': disabled,
				},
				className
			)}
			{...props}
		>
			{showIcon && <InfoIcon className="h-4 w-4" />}
			{children}
		</p>
	);
}

export default Hint;
