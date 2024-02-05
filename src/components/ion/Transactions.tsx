'use client';
// Generated with Ion on 2/4/2024, 11:02:24 PM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=44:12065
import { MouseEvent } from 'react';
import { Upload } from '@phosphor-icons/react';
import Button from '@/components/ui/Button';
import Divider from '@/components/ui/Divider';
import clsx from 'clsx';
type TransactionsProps = {
	className?: string;
};

function Transactions({ className = '' }: TransactionsProps) {
	function uploadClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('uploadClickHandler fired');
	}
	function uploadClickHandler_1(e: MouseEvent<HTMLButtonElement>) {
		alert('uploadClickHandler_1 fired');
	}
	function uploadClickHandler_2(e: MouseEvent<HTMLButtonElement>) {
		alert('uploadClickHandler_2 fired');
	}

	return (
		<div className={clsx('w-full flex-col flex items-start gap-5 p-5 h-fit', className)}>
			<div className="w-full flex justify-between items-center gap-x-2.5">
				<div className="text-sm text-foreground">Upload Receipt for EVERY.IO transaction</div>
				<Button
					iconLeading={<Upload size={16} className="text-primary" weight={'bold'} />}
					emphasis="medium"
					color="primary"
					size="sm"
					onClick={uploadClickHandler}
				>
					Upload
				</Button>
			</div>
			<Divider />
			<div className="w-full flex justify-between items-center gap-x-2.5">
				<div className="text-sm text-foreground">Upload Receipt for REPLY.IO transcation</div>
				<Button
					iconLeading={<Upload size={16} className="text-primary" weight={'bold'} />}
					emphasis="medium"
					color="primary"
					size="sm"
					onClick={uploadClickHandler_1}
				>
					Upload
				</Button>
			</div>
			<Divider />
			<div className="w-full flex justify-between items-center gap-x-2.5">
				<div className="text-sm text-foreground">Upload Receipt for NUMI transaction</div>
				<Button
					iconLeading={<Upload size={16} className="text-primary" weight={'bold'} />}
					emphasis="medium"
					color="primary"
					size="sm"
					onClick={uploadClickHandler_2}
				>
					Upload
				</Button>
			</div>
		</div>
	);
}
export default Transactions;
