'use client';
// Generated with Ion on 2/5/2024, 12:36:30 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=39:8221
import { motion } from 'framer-motion';
import Switch from '@/components/ui/Switch';
import { MouseEvent } from 'react';
import { Gear } from '@phosphor-icons/react';
import Button from '@/components/ui/Button';
import clsx from 'clsx';

type IntegrationCardProps = {
	description?: string;
	company?: string;
	logoSrc?: string;
	className?: string;
};

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

const hoverEffect = {
	scale: 1.02,
	boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
	transition: { duration: 0.3, ease: 'easeOut' },
};

function IntegrationCard({
	description = 'Expense Reporting that doesn’t suck.',
	company = 'Expensify',
	logoSrc = '/images/integrations-page/image-9.png',
	className = '',
}: IntegrationCardProps) {
	function manageClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('manageClickHandler fired');
	}
	return (
		<motion.div
			className={clsx(
				'bg-base w-[300px] flex-col flex items-start gap-y-3 p-3 rounded-radius border border-soft-stroke h-fit',
				className
			)}
			variants={cardVariants}
			initial="hidden"
			animate="visible"
			whileHover="hover"
			transition={{ duration: 0.5, ease: 'easeOut' }}
			whileHover={hoverEffect}
		>
			<div className="w-full flex justify-between items-center">
				<img
					className="object-cover h-8 w-8"
					alt={`${company} logo`}
					src={logoSrc}
					loading="lazy"
				/>
				<Switch size="sm" />
			</div>
			<motion.div
				className="w-full flex-col flex items-start gap-y-1"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
			>
				<motion.div
					className="text-sm font-semibold text-foreground"
					initial={{ opacity: 0, x: -10 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
				>
					{company}
				</motion.div>
				<motion.div
					className="text-xs text-sub-foreground"
					initial={{ opacity: 0, x: -10 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
				>
					{description}
				</motion.div>
			</motion.div>
			<Button
				iconLeading={<Gear size={16} className="text-secondary" weight={'fill'} />}
				emphasis="medium"
				color="secondary"
				size="sm"
				onClick={manageClickHandler}
				className="w-full"
			>
				Manage
			</Button>
		</motion.div>
	);
}

export default IntegrationCard;