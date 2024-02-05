'use client';
// Generated with Ion on 2/5/2024, 12:36:30 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=39:8221
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
		<div
			className={clsx(
				'bg-base w-[300px] flex-col flex items-start gap-y-3 p-3 rounded-radius border border-soft-stroke h-fit',
				className
			)}
		>
			<div className="w-full flex justify-between items-center">
				<img className="object-cover h-8 w-8" alt="image 9" src={logoSrc} />
				<Switch size="sm" />
			</div>
			<div className="w-full flex-col flex items-start gap-y-1">
				<div className="text-sm font-semibold text-foreground">{company}</div>
				<div className="text-xs text-sub-foreground">{description}</div>
			</div>
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
		</div>
	);
}
export default IntegrationCard;
