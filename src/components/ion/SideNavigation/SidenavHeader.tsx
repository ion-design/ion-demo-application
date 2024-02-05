// Generated with Ion on 2/4/2024, 7:46:42 PM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=10:1836
import clsx from 'clsx';
type SidenavHeaderProps = {
	className?: string;
};

function SidenavHeader({ className = '' }: SidenavHeaderProps) {
	return (
		<div className={clsx('bg-base flex items-center gap-x-2.5 px-3 h-fit', className)}>
			<div className="flex-1 flex items-center px-1 py-5">
				<img src="/images/ion-logo.svg" alt="Group" className="h-8" />
			</div>
		</div>
	);
}
export default SidenavHeader;
