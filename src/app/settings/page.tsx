'use client';
// Generated with Ion on 2/5/2024, 12:46:13 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=17:36542
import SideNavigation from '@/components/ion/SideNavigation';
import { Tabs, TabsList, Tab, TabsContent } from '@/components/ui/Tabs';
import ProfileSettingsTab from '@/components/ion/ProfileSettingsTab';
import CompanySettingsTab from '@/components/ion/CompanySettingsTab';
import WorkLocationsTab from '@/components/ion/WorkLocationsTab';
import AdministratorsTab from '@/components/ion/AdministratorsTab';
import { AirplaneInFlight, Buildings, IdentificationBadge, User } from '@phosphor-icons/react';

function SettingsPageProfileSettings() {
	return (
		<div className="bg-base w-screen h-screen flex items-start">
			<SideNavigation />
			<div className="h-full flex-1 flex-col flex items-center gap-y-5 p-5 overflow-y-scroll">
				<div className="w-full flex items-center gap-x-5">
					<div className="flex-col flex items-start gap-y-1">
						<div className="text-xl font-semibold text-base-foreground">Settings</div>
						<div className="text-sm text-gray-600">Manage your preferences and options</div>
					</div>
				</div>
				<Tabs defaultValue="Profile Settings" className="w-full">
					<TabsList type={'simple'} className="w-full">
						<Tab iconLeading={<User size={16} weight={'fill'} />} value="Profile Settings">
							Profile Settings
						</Tab>
						<Tab iconLeading={<Buildings size={16} weight={'fill'} />} value="Company Settings">
							Company Settings
						</Tab>
						<Tab
							iconLeading={<AirplaneInFlight size={16} weight={'fill'} />}
							value="Work Locations"
						>
							Work Locations
						</Tab>
						<Tab
							iconLeading={<IdentificationBadge size={16} weight={'fill'} />}
							value="Administrators"
						>
							Administrators
						</Tab>
					</TabsList>
					<TabsContent value="Profile Settings" className="w-full flex justify-center">
						<div className="w-full flex-col max-w-[450px] flex items-center gap-y-5 py-5">
							<ProfileSettingsTab />
						</div>
					</TabsContent>
					<TabsContent value="Company Settings" className="w-full flex justify-center">
						<div className="w-full flex-col max-w-[450px] flex items-center gap-y-5 py-5">
							<CompanySettingsTab />
						</div>
					</TabsContent>
					<TabsContent value="Work Locations" className="w-full flex justify-center">
						<div className="w-full flex-col max-w-[600px] flex items-center gap-y-5 py-5">
							<WorkLocationsTab />
						</div>
					</TabsContent>
					<TabsContent value="Administrators" className="w-full flex justify-center">
						<div className="w-full flex-col max-w-[600px] flex items-center gap-y-5 py-5">
							<AdministratorsTab />
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
export default SettingsPageProfileSettings;
