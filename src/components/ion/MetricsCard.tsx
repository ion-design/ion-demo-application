// Generated with Ion on 2/19/2024, 10:27:03 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=162:6237
import clsx from 'clsx';
type MetricsCardProps = {
	metric?: string;
	badge: React.ReactNode;
	title?: string;
	className?: string;
};

function MetricsCard({
	metric = 'Metric',
	badge,
	title = 'Title',
	className = '',
}: MetricsCardProps) {
	return (
		<div
			className={clsx(
				'bg-base w-full flex-col flex justify-center gap-1 p-5 rounded-radius border border-soft-stroke h-fit',
				className
			)}
		>
			<div className="text-sm text-foreground">{title}</div>
			<div className="w-full flex justify-between items-center">
				<div className="text-xl font-semibold text-foreground">{metric}</div>
				{badge}
			</div>
		</div>
	);
}
export default MetricsCard;
