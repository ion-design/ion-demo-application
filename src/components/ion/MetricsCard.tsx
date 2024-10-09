// Generated with Ion on 2/19/2024, 10:27:03 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=162:6237
import clsx from 'clsx';
import { motion } from 'framer-motion';

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
		<motion.div
			className={clsx(
				'bg-base w-full flex-col flex justify-center gap-1 p-5 rounded-radius border border-soft-stroke h-fit',
				className
			)}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			whileHover={{
				scale: 1.02,
				boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
				transition: { duration: 0.3 },
			}}
		>
			<div className="text-sm text-foreground">{title}</div>
			<div className="w-full flex justify-between items-center">
				<div className="text-xl font-semibold text-foreground">{metric}</div>
				{badge}
			</div>
		</motion.div>
	);
}
export default MetricsCard;