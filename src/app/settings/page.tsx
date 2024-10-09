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
import { motion } from 'framer-motion';

function SettingsPageProfileSettings() {
	return (
		<div className="bg-base w-screen h-screen flex items-start">
			<SideNavigation />
			<motion.div
				className="h-full flex-1 flex-col flex items-center gap-y-5 p-5 overflow-y-scroll"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
			>
				<motion.div
					className="w-full flex items-center gap-x-5"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
				>
					<motion.div
						className="flex-col flex items-start gap-y-1"
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
					>
						<motion.div
							className="text-xl font-semibold text-base-foreground"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
						>
							Settings
						</motion.div>
						<motion.div
							className="text-sm text-gray-600"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
						>
							Manage your preferences and options
						</motion.div>
					</motion.div>
				</motion.div>
				<Tabs defaultValue="Profile Settings" className="w-full">
					<TabsList type={'simple'} className="w-full">
						<Tab
							iconLeading={<User size={16} weight={'fill'} />}
							value="Profile Settings"
						>
							Profile Settings
						</Tab>
						<Tab
							iconLeading={<Buildings size={16} weight={'fill'} />}
							value="Company Settings"
						>
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
					<TabsContent
						value="Profile Settings"
						className="w-full flex justify-center"
					>
						<motion.div
							className="w-full flex-col max-w-[450px] flex items-center gap-y-5 py-5"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: 'easeOut' }}
						>
							<ProfileSettingsTab />
						</motion.div>
					</TabsContent>
					<TabsContent
						value="Company Settings"
						className="w-full flex justify-center"
					>
						<motion.div
							className="w-full flex-col max-w-[450px] flex items-center gap-y-5 py-5"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: 'easeOut' }}
						>
							<CompanySettingsTab />
						</motion.div>
					</TabsContent>
					<TabsContent
						value="Work Locations"
						className="w-full flex justify-center"
					>
						<motion.div
							className="w-full flex-col max-w-[600px] flex items-center gap-y-5 py-5"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: 'easeOut' }}
						>
							<WorkLocationsTab />
						</motion.div>
					</TabsContent>
					<TabsContent
						value="Administrators"
						className="w-full flex justify-center"
					>
						<motion.div
							className="w-full flex-col max-w-[600px] flex items-center gap-y-5 py-5"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: 'easeOut' }}
						>
							<AdministratorsTab />
						</motion.div>
					</TabsContent>
				</Tabs>
			</motion.div>
		</div>
	);
}
export default SettingsPageProfileSettings;