// Generated with Ion on 2/5/2024, 1:03:02 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=17:42262
import { Buildings } from '@phosphor-icons/react';
import Divider from '@/components/ui/Divider';
import clsx from 'clsx';
type WorkLocationProps = {
	zip?: string;
	state?: string;
	city?: string;
	street2?: string;
	street?: string;
	name?: string;
	className?: string;
};

function WorkLocation({
	zip = '94110',
	state = 'California',
	city = 'San Francisco',
	street2 = 'Unit 3D',
	street = '2 Marina Blvd',
	name = 'Headquarters',
	className = '',
}: WorkLocationProps) {
	return (
		<div
			className={clsx(
				'bg-base w-[290px] flex-col flex items-start gap-y-2 p-5 rounded-radius border border-weak-stroke shadow-[0_1px_1px_0_rgba(0,0,0,0.07),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_2px_0_rgba(0,0,0,0.1),0_0_8px_0_rgba(0,0,0,0.05)] h-fit',
				className
			)}
		>
			<Buildings size={40} weight={'duotone'} />
			<div className="text-sm font-semibold text-foreground">{name}</div>
			<Divider />
			<div className="w-full flex-col flex items-start text-xs text-foreground">
				<div className="w-full flex justify-between items-start gap-x-1">
					<div>{street}</div>
					<div>{street2}</div>
				</div>
				<div className="w-full flex justify-between items-start gap-x-1">
					<div>{city}</div>
					<div>{state}</div>
				</div>
				<div>{zip}</div>
			</div>
		</div>
	);
}
export default WorkLocation;
