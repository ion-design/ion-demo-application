// Generated with Ion on 2/4/2024, 7:46:42 PM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=487:10544
import clsx from 'clsx';
type IonSideNavigationFooterProps = {
	content: React.ReactNode;
	collapsed?: boolean;
	className?: string;
};

function SidenavFooter({
	content,
	collapsed = false,
	className = '',
}: IonSideNavigationFooterProps) {
	return (
		<div className={clsx('bg-base w-full flex items-center gap-2.5 px-3 h-fit', className)}>
			<div className="flex-1 flex items-center px-1 py-3 border-t border-soft-stroke w-[244px]">
				{content}
			</div>
		</div>
	);
}
export default SidenavFooter;
