'use client';
// Generated with Ion on 2/5/2024, 12:46:13 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=17:36542
import SideNavigation from '@/components/ion/SideNavigation';

function SettingsPageProfileSettings() {
	return (
		<div className="bg-base w-screen h-screen flex items-start">
			<SideNavigation />
			<div className="h-full flex-1 flex-col flex items-center gap-y-5 p-5 overflow-y-scroll">
				<div className="w-full flex items-center gap-x-5">
					<div className="flex-col flex items-start gap-y-1">
						<div className="text-xl font-semibold text-base-foreground">Banking</div>
						<div className="text-sm text-gray-600">
							Banking page coming soon - charting integration in progress
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default SettingsPageProfileSettings;
