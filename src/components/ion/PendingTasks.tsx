'use client';
// Generated with Ion on 2/4/2024, 7:46:42 PM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=42:9768
import { Gavel } from '@phosphor-icons/react';
import clsx from 'clsx';
import Button from '@/components/ui/Button';
import { MouseEvent, useState, useEffect } from 'react';
import Transactions from './Transactions';
type PendingTasksProps = {
	className?: string;
};

function PendingTasks({ className = '' }: PendingTasksProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	function openClickHandler(e: MouseEvent<HTMLButtonElement>) {
		setIsOpen(!isOpen);
	}

	return (
		<div
			className={clsx(
				'w-full flex-col flex items-start gap-y-3 h-fit',
				className,
				'opacity-0 translate-y-4 transition-opacity transition-transform duration-700 ease-out',
				isMounted && 'opacity-100 translate-y-0'
			)}
		>
			<div
				className={clsx(
					'text-foreground font-semibold',
					'transition-opacity duration-500 ease-in',
					isMounted && 'opacity-100'
				)}
			>
				Pending Tasks
			</div>
			<div
				className={clsx(
					'bg-base w-full flex-col flex items-start rounded-radius border border-weak-stroke shadow-low',
					'transition-shadow duration-300 ease-in-out',
					isOpen && 'shadow-medium'
				)}
			>
				<div
					className={clsx(
						'w-full flex items-center gap-x-5 p-5',
						{
							'border-b border-weak-stroke': isOpen,
						},
						'transition-colors duration-300 ease-in-out'
					)}
				>
					<Gavel
						size={28}
						className={clsx(
							'text-foreground',
							'transition-transform duration-500 ease-in-out',
							isMounted && 'transform rotate-0',
							!isMounted && 'transform rotate-3'
						)}
						weight={'regular'}
					/>
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