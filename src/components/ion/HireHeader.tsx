// Generated with Ion on 2/5/2024, 1:58:17 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=94:4650
import clsx from 'clsx';
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
	return (
		<div className={clsx('w-full flex-col flex items-start gap-y-1 pr-20 h-fit', className)}>
			<div className="flex items-center gap-x-2">
				<div className="text-lg font-semibold text-foreground">{title}</div>
				{badge}
			</div>
			<div className="text-sm text-sub-foreground w-[680px]">{subtitle}</div>
		</div>
	);
}
export default HireHeader;
