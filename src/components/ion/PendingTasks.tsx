'use client';
// Generated with Ion on 2/4/2024, 7:46:42 PM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=42:9768
import { Gavel } from '@phosphor-icons/react';
import clsx from 'clsx';
import Button from '@/components/ui/Button';
import { MouseEvent, useState } from 'react';
import Transactions from './Transactions';
type PendingTasksProps = {
	className?: string;
};

function PendingTasks({ className = '' }: PendingTasksProps) {
	const [isOpen, setIsOpen] = useState(false);

	function openClickHandler(e: MouseEvent<HTMLButtonElement>) {
		setIsOpen(!isOpen);
	}
	return (
		<div className={clsx('w-full flex-col flex items-start gap-y-3 h-fit', className)}>
			<div className="text-foreground font-semibold">Pending Tasks</div>
			<div className="bg-base w-full flex-col flex items-start rounded-radius border border-weak-stroke shadow-low">
				<div
					className={clsx({
						'w-full flex items-center gap-x-5 p-5': true,
						'border-b border-weak-stroke': isOpen,
					})}
				>
					<Gavel size={28} className="text-foreground" weight={'regular'} />
					<div className="flex-1 flex-col flex items-start gap-y-1 text-sm font-semibold text-foreground">
						Upload Receipts for 3 Transactions
					</div>
					<Button emphasis="medium" color="secondary" size="md" onClick={openClickHandler}>
						{isOpen ? 'Close' : 'Open'}
					</Button>
				</div>
				{isOpen && <Transactions />}
			</div>
		</div>
	);
}
export default PendingTasks;
