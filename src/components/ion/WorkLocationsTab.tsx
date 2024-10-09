'use client';
// Generated with Ion on 2/5/2024, 1:03:02 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=17:41591
import { MouseEvent, useEffect, useState } from 'react';
import { Plus } from '@phosphor-icons/react';
import Button from '@/components/ui/Button';
import Divider from '@/components/ui/Divider';
import WorkLocation from '@/components/ion/WorkLocation';
import clsx from 'clsx';

type WorkLocationsTabProps = {
	className?: string;
};

function WorkLocationsTab({ className = '' }: WorkLocationsTabProps) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	function addLocationClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('addLocationClickHandler fired');
	}

	return (
		<div
			className={clsx(
				'w-full flex-col flex items-center gap-y-4 h-fit transition-opacity transition-transform duration-700 ease-out',
				isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
				className
			)}
		>
			<div
				className={clsx(
					'w-full flex justify-between items-center gap-x-2.5 transition-opacity delay-200 duration-700 ease-out',
					isVisible ? 'opacity-100' : 'opacity-0'
				)}
			>
				<div className="text-base font-semibold text-center text-foreground">
					Work Locations
				</div>
				<Button
					iconLeading={<Plus size={16} className="text-primary" weight={'bold'} />}
					emphasis="low"
					color="primary"
					size="sm"
					onClick={addLocationClickHandler}
					className="transition-transform duration-300 ease-out hover:scale-105 focus:scale-105"
				>
					Add Location
				</Button>
			</div>
			<Divider />
			<div
				className={clsx(
					'w-full flex-wrap flex items-center gap-5 transition-opacity delay-300 duration-700 ease-out',
					isVisible ? 'opacity-100' : 'opacity-0'
				)}
			>
				<WorkLocation
					name="Headquarters"
					street="2 Marina Blvd"
					street2="Unit 3D"
					city="San Francisco"
					state="California"
					zip="94110"
				/>
				<WorkLocation
					name="Branch Office"
					street="123 Market St"
					street2="Suite 400"
					city="Los Angeles"
					state="California"
					zip="90001"
				/>
				<WorkLocation
					name="Remote Office"
					street="456 Elm St"
					street2="Floor 2"
					city="New York"
					state="New York"
					zip="10001"
				/>
			</div>
		</div>
	);
}
export default WorkLocationsTab;