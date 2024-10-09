'use client';
// Generated with Ion on 2/5/2024, 2:53:21 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=94:3876
import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import Divider from '@/components/ui/Divider';
import { useState, MouseEvent } from 'react';
import { Envelope } from '@phosphor-icons/react';
import Input from '@/components/ui/Input';
import Switch from '@/components/ui/Switch';
import { RadioGroupItem as Radio, RadioGroup } from '@/components/ui/Radio';
import Checkbox from '@/components/ui/Checkbox';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import HireHeader from '@/components/ion/HireHeader';

const containerVariants = {
	initial: { opacity: 0, y: 20 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.1,
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

const itemVariants = {
	initial: { opacity: 0, y: 20 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

function HirePage() {
	const [employeeEmail, setEmployeeEmail] = useState('');
	const [notes, setNotes] = useState('');
	function cancelClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('cancelClickHandler fired');
	}
	function continueClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('continueClickHandler fired');
	}
	return (
		<motion.div
			className="bg-base w-screen h-screen flex justify-center items-start p-10"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
		>
			<motion.div
				className="flex-1 flex-col max-w-[800px] flex items-start gap-y-5 p-5"
				variants={containerVariants}
				initial="initial"
				animate="animate"
			>
				<motion.div variants={itemVariants} className="w-full">
					<HireHeader
						title="New Employee in your organization"
						subtitle="A new user can help you hit your goals and make impact across multiple functions."
						badge={
							<Badge emphasis="medium" color="pink" size="sm">
								High Impact
							</Badge>
						}
					/>
				</motion.div>
				<motion.div variants={itemVariants} className="w-full">
					<Divider />
				</motion.div>
				<motion.div variants={itemVariants} className="w-full">
					<Input
						placeholder="samraaj@ion.design"
						iconLeading={<Envelope size={16} className="text-foreground" weight={'bold'} />}
						label="Employee Email"
						value={employeeEmail}
						onChange={(e) => setEmployeeEmail(e.target.value)}
						className="w-full"
					/>
				</motion.div>
				<motion.div variants={itemVariants} className="w-full flex items-start gap-x-10">
					<motion.div
						variants={itemVariants}
						className="flex-1 flex-col flex items-start"
					>
						<div className="flex items-center gap-x-5">
							<div className="flex-col flex items-start pr-2">
								<div className="text-sm font-semibold text-foreground">Full-time</div>
								<div className="text-xs text-soft-foreground">
									Will the employee work 40+ hrs/week?
								</div>
							</div>
							<Switch size="md" />
						</div>
					</motion.div>
					<motion.div
						variants={itemVariants}
						className="flex-1 flex-col flex items-start"
					>
						<div className="flex items-center gap-x-5">
							<div className="flex-col flex items-start pr-2">
								<div className="text-sm font-semibold text-foreground">In-Person</div>
								<div className="text-xs text-soft-foreground">Will the employee work from HQ?</div>
							</div>
							<Switch size="md" />
						</div>
					</motion.div>
				</motion.div>
				<motion.div variants={itemVariants} className="w-full flex items-start gap-x-10">
					<motion.div
						variants={itemVariants}
						className="flex-1 flex items-start"
					>
						<RadioGroup className="h-full w-[500px] flex-col flex items-start gap-y-2">
							<div className="text-sm font-semibold text-foreground">Contract Duration</div>
							<Radio label="Indefinite" value="Indefinite" />
							<Radio label="Fixed Term" value="Fixed Term" />
						</RadioGroup>
					</motion.div>
					<motion.div
						variants={itemVariants}
						className="flex-1 flex items-start"
					>
						<div className="h-full flex-1 flex-col flex items-start gap-y-2">
							<div className="text-sm font-semibold text-foreground">Eligible Benefits</div>
							<Checkbox label="Healthcare" />
							<Checkbox label="Dental" />
						</div>
					</motion.div>
				</motion.div>
				<motion.div variants={itemVariants} className="w-full">
					<Textarea
						placeholder="First projects, expectations, restrictions"
						label="Notes"
						showHintIcon={true}
						hint="These are saved on the employee file"
						value={notes}
						onChange={(e) => setNotes(e.target.value)}
						className="w-full"
					/>
				</motion.div>
				<motion.div
					variants={itemVariants}
					className="w-full flex justify-between items-center py-5"
				>
					<Button emphasis="medium" color="secondary" size="md" onClick={cancelClickHandler}>
						Cancel
					</Button>
					<Button emphasis="high" color="primary" size="md" onClick={continueClickHandler}>
						Continue
					</Button>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
export default HirePage;