// src/components/ion/BankingCard.tsx
// Enhanced with animations for a luxury feel

import { ArrowUp, ArrowDown } from '@phosphor-icons/react';
import Divider from '@/components/ui/Divider';
import { RadioGroupItem as Radio, RadioGroup } from '@/components/ui/Radio';
import Select from '@/components/ui/Select';
import Card from '@/components/ui/Card';
import { motion } from 'framer-motion';

function BankingCard() {
	const paymentOptions = [
		{
			label: 'Direct Deposit',
			value: 'Direct Deposit',
		},
		{
			label: 'Wire Transfer',
			value: 'Wire Transfer',
		},
		{
			label: 'Check',
			value: 'Check',
		},
	];

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	const balanceVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.2 },
		}),
	};

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={cardVariants}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className="w-full"
		>
			<Card type="elevated" className="w-full">
				<RadioGroup className="w-full flex-col flex items-start gap-y-4 py-2 h-fit">
					<motion.div
						className="w-full flex-col flex items-start gap-y-2 pb-3"
						variants={cardVariants}
						initial="hidden"
						animate="visible"
						transition={{ staggerChildren: 0.2 }}
					>
						<motion.div
							className="w-full flex justify-between items-center gap-x-2.5 px-5 py-3 rounded-radius-sm border border-soft-stroke"
							custom={0}
							variants={balanceVariants}
						>
							<div className="flex-col flex items-start gap-y-1">
								<div className="text-sm font-semibold text-soft-foreground">Treasury Balance</div>
								<div className="flex items-center gap-x-2">
									<ArrowUp size={16} className="text-state-success" weight={'bold'} />
									<div className="text-lg font-semibold text-foreground">12%</div>
								</div>
							</div>
							<motion.img
								src="/images/frame-63/Vector.svg"
								alt="Vector"
								className="w-1/3 h-[26px]"
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
							/>
						</motion.div>
						<motion.div
							className="w-full flex justify-between items-center gap-x-2.5 px-5 py-3 rounded-radius-sm border border-soft-stroke"
							custom={1}
							variants={balanceVariants}
						>
							<div className="flex-col flex items-start gap-y-1">
								<div className="text-sm font-semibold text-soft-foreground">Account Balance</div>
								<div className="flex items-center gap-x-2">
									<ArrowDown size={16} className="text-danger" weight={'bold'} />
									<div className="text-lg font-semibold text-foreground">12%</div>
								</div>
							</div>
							<motion.img
								src="/images/frame-63/Vector-1.svg"
								alt="Vector"
								className="w-1/3 h-[30px]"
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
							/>
						</motion.div>
					</motion.div>
					<motion.div
						className="text-sm font-semibold text-foreground"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7, duration: 0.5, ease: 'easeOut' }}
					>
						Account for Payroll
					</motion.div>
					<Divider />
					<Radio label="Connect via Plaid" value="Connect via Plaid" />
					<Radio label="Enter Details Manually" value="Enter Details Manually" />
					<Select
						placeholder="Direct Deposit"
						label="Payment Method"
						className="w-full"
						options={paymentOptions}
					/>
				</RadioGroup>
			</Card>
		</motion.div>
	);
}
export default BankingCard;