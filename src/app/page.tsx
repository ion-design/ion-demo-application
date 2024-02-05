'use client';
// Generated with Ion on 2/4/2024, 10:53:17 PM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=41:8385
import { MouseEvent } from 'react';
import { RocketLaunch, Money, UserSquare, Bank } from '@phosphor-icons/react';
import SideNavigation from '@/components/ion/SideNavigation';
import PendingTasks from '@/components/ion/PendingTasks';
import { Tabs, TabsList, Tab, TabsContent } from '@/components/ui/Tabs';
import ProfileCard from '@/components/ion/ProfileCard';
import CreditCardsCard from '@/components/ion/CreditCardsCard';
import PersonalDetailsCard from '@/components/ion/PersonalDetailsCard';
import BankingCard from '@/components/ion/BankingCard';

function DashboardPageExpenses() {
	return (
		<div className="bg-base w-screen h-screen flex items-start">
			<SideNavigation />
			<div className="h-full overflow-y-scroll flex-1 flex-col flex items-center p-10">
				<div className="w-full flex-col max-w-[1200px] flex justify-center items-start gap-y-8">
					<div className="flex items-center gap-x-2 text-foreground">
						<div className="text-2xl font-medium">Hello, Samraaj</div>
						<RocketLaunch size={24} weight={'fill'} />
					</div>
					<PendingTasks />
					<div className="w-full flex items-start gap-x-8">
						<div className="flex-1 flex-col flex items-start gap-y-7 py-2">
							<div className="text-base font-semibold text-foreground">My Profile</div>
							<ProfileCard
								name="Bath, Samraaj S."
								position="Founder/ Co-Founder"
								role="Administrator - Company"
								phone="+1 (510) 555 - 0123"
								email="samraaj@ion.design"
								imgSrc="/images/profile-card/headshot-1.png"
							/>
						</div>
						<div className="h-full flex-1">
							<Tabs defaultValue="Expenses" className="w-full flex flex-col items-start gap-5">
								<TabsList type={'simple'} className="w-full">
									<Tab
										iconLeading={<Money size={16} weight={'fill'} />}
										value="Expenses"
										defaultChecked
									>
										Expenses
									</Tab>
									<Tab
										iconLeading={<UserSquare size={16} weight={'fill'} />}
										value="Personal Details"
									>
										Personal Details
									</Tab>
									<Tab iconLeading={<Bank size={16} weight={'fill'} />} value="Banking">
										Banking
									</Tab>
								</TabsList>
								<TabsContent value="Expenses" className="w-full">
									<CreditCardsCard />
								</TabsContent>
								<TabsContent value="Personal Details" className="w-full">
									<PersonalDetailsCard />
								</TabsContent>
								<TabsContent value="Banking" className="w-full">
									<BankingCard />
								</TabsContent>
							</Tabs>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default DashboardPageExpenses;
