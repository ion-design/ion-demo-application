'use client';
// Generated with Ion on 2/5/2024, 1:03:02 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=17:41591
import { MouseEvent } from 'react';
import { Plus } from '@phosphor-icons/react';
import Button from '@/components/ui/Button';
import Divider from '@/components/ui/Divider';
import WorkLocation from '@/components/ion/WorkLocation';
import clsx from 'clsx';
type WorkLocationsTabProps = {
	className?: string;
};

function WorkLocationsTab({ className = '' }: WorkLocationsTabProps) {
	function addLocationClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('addLocationClickHandler fired');
	}
	return (
		<div className={clsx('w-full flex-col flex items-center gap-y-4 h-fit', className)}>
			<div className="w-full flex justify-between items-center gap-x-2.5">
				<div className="text-base font-semibold text-center text-foreground">Work Locations</div>
				<Button
					iconLeading={<Plus size={16} className="text-primary" weight={'bold'} />}
					emphasis="low"
					color="primary"
					size="sm"
					onClick={addLocationClickHandler}
				>
					Add Location
				</Button>
			</div>
			<Divider />
			<div className="w-full flex-wrap flex items-center gap-5">
				<WorkLocation
					name="Headquarters"
					street="2 Marina Blvd"
					street2="Unit 3D"
					city="San Francisco"
					state="California"
					zip="94110"
				/>
				<WorkLocation
					name="Headquarters"
					street="2 Marina Blvd"
					street2="Unit 3D"
					city="San Francisco"
					state="California"
					zip="94110"
				/>
				<WorkLocation
					name="Headquarters"
					street="2 Marina Blvd"
					street2="Unit 3D"
					city="San Francisco"
					state="California"
					zip="94110"
				/>
			</div>
		</div>
	);
}
export default WorkLocationsTab;
