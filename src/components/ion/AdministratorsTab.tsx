'use client';
// Generated with Ion on 2/5/2024, 1:05:30 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=17:42846
import { MouseEvent } from 'react';
import { Plus } from '@phosphor-icons/react';
import Button from '@/components/ui/Button';
import Divider from '@/components/ui/Divider';
import Administrator from '@/components/ion/Administrator';
import clsx from 'clsx';
type AdministratorsTabProps = {
	className?: string;
};

function AdministratorsTab({ className = '' }: AdministratorsTabProps) {
	function addAdministratorClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('addAdministratorClickHandler fired');
	}
	return (
		<div className={clsx('w-full flex-col flex items-center gap-y-4 h-fit', className)}>
			<div className="w-full flex justify-between items-center gap-x-2.5">
				<div className="text-base font-semibold text-center text-foreground">Administrators</div>
				<Button
					iconLeading={<Plus size={16} className="text-primary" weight={'bold'} />}
					emphasis="low"
					color="primary"
					size="sm"
					onClick={addAdministratorClickHandler}
				>
					Add Administrator
				</Button>
			</div>
			<Divider />
			<div className="w-full flex-wrap flex items-center gap-5">
				<Administrator hrAdmin={false} bookkeeper={false} companyAdmin={true} employee={true} />
				<Administrator hrAdmin={false} bookkeeper={false} companyAdmin={true} employee={true} />
				<Administrator hrAdmin={false} bookkeeper={true} companyAdmin={false} employee={false} />
				<Administrator hrAdmin={true} bookkeeper={false} companyAdmin={false} employee={false} />
			</div>
		</div>
	);
}
export default AdministratorsTab;
