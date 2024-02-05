// Generated with Ion on 2/5/2024, 1:05:30 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=17:42671
import Avatar from '@/components/ui/Avatar';
import Divider from '@/components/ui/Divider';
import clsx from 'clsx';
type AdministratorProps = {
	hrAdmin?: boolean;
	bookkeeper?: boolean;
	companyAdmin?: boolean;
	employee?: boolean;
	className?: string;
};

function Administrator({
	hrAdmin = true,
	bookkeeper = true,
	companyAdmin = true,
	employee = true,
	className = '',
}: AdministratorProps) {
	return (
		<div
			className={clsx(
				'bg-base h-[240px] flex-col flex items-start gap-y-5 p-5 rounded-radius border border-weak-stroke shadow-[0_1px_1px_0_rgba(0,0,0,0.07),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_2px_0_rgba(0,0,0,0.1),0_0_8px_0_rgba(0,0,0,0.05)]',
				className
			)}
		>
			<Avatar title="Samuel Barnholdt" size="md" initials="SB" />
			<Divider />
			<div className="w-full flex-col flex items-start gap-y-2">
				{employee && <div className="text-sm font-semibold text-foreground">Employee</div>}
				{bookkeeper && <div className="text-sm font-semibold text-foreground">Bookkeeper</div>}
				{companyAdmin && <div className="text-sm font-semibold text-foreground">Company Admin</div>}
				{hrAdmin && <div className="text-sm font-semibold text-foreground">Hr Admin</div>}
			</div>
		</div>
	);
}
export default Administrator;
