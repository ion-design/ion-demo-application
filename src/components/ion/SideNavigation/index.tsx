'use client';
// ion/SideNavigation: Enhanced with Animations
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import {
	Bank,
	Coffee,
	ComputerTower,
	Gear,
	GridFour,
	Moon,
	SlidersHorizontal,
	Sun,
	UsersFour,
} from '@phosphor-icons/react';
import Avatar from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/Navigation';
import Select from '@/components/ui/Select';
import { useMemo, useState } from 'react';

import SidenavFooter from './SidenavFooter';
import SidenavHeader from './SidenavHeader';
import Sidebar from './Sidebar';
import { useTheme } from 'next-themes';

const themeOptions = [
	{
		label: 'Light',
		value: 'light',
		iconLeading: <Sun suppressHydrationWarning={true} size={16} />,
	},
	{
		label: 'Dark',
		value: 'dark',
		iconLeading: <Moon suppressHydrationWarning={true} size={16} />,
	},
	{
		label: 'System',
		value: 'system',
		iconLeading: <ComputerTower suppressHydrationWarning={true} size={16} />,
	},
	{
		label: 'Coffee',
		value: 'coffee',
		iconLeading: <Coffee suppressHydrationWarning={true} size={16} />,
	},
];

const listVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.05,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

function SideNavigation() {
	const [selected, setSelected] = useState('light');

	const pathname = usePathname();
	const { setTheme } = useTheme();

	const onValueChange = (value: string) => {
		setSelected(value);
		setTheme(value);
	};

	const themeIcon = useMemo(() => {
		return themeOptions.find((option) => option.value === selected)?.iconLeading;
	}, [selected]);

	return (
		<Sidebar>
			<div className="flex h-full flex-col items-start gap-y-1">
				<SidenavHeader />
				<NavigationMenu>
					<NavigationMenuList className="flex w-full flex-col items-start gap-1">
						<motion.div
							initial="hidden"
							animate="visible"
							variants={listVariants}
							className="flex w-full items-start px-3 pb-5"
						>
							<Select
								value={selected}
								onValueChange={onValueChange}
								className="w-full"
								placeholder="Select Theme"
								options={themeOptions}
								iconLeading={themeIcon}
							/>
						</motion.div>
						<motion.ul variants={listVariants} initial="hidden" animate="visible" className="w-full">
							<Link href={'/'} legacyBehavior passHref>
								<motion.li variants={itemVariants}>
									<NavigationMenuItem className={'px-3'}>
										<NavigationMenuLink
											selected={pathname === '/'}
											iconLeading={<GridFour size={16} weight={'fill'} />}
											extra={
												<Badge emphasis="medium" color="red" size="sm" type="number">
													2
												</Badge>
											}
											className="w-full"
										>
											Dashboard
										</NavigationMenuLink>
									</NavigationMenuItem>
								</motion.li>
							</Link>
							<Link href={'/banking'} legacyBehavior passHref>
								<motion.li variants={itemVariants}>
									<NavigationMenuItem className={'px-3'}>
										<NavigationMenuLink
											selected={pathname === '/banking'}
											iconLeading={<Bank size={16} weight={'fill'} />}
											className="w-full"
										>
											Banking
										</NavigationMenuLink>
									</NavigationMenuItem>
								</motion.li>
							</Link>
							<Link href={'/employees'} legacyBehavior passHref>
								<motion.li variants={itemVariants}>
									<NavigationMenuItem className={'px-3'}>
										<NavigationMenuLink
											selected={pathname === '/employees'}
											iconLeading={<UsersFour size={16} weight={'fill'} />}
											className="w-full"
										>
											Employees
										</NavigationMenuLink>
									</NavigationMenuItem>
								</motion.li>
							</Link>
							<Link href={'/integrations'} legacyBehavior passHref>
								<motion.li variants={itemVariants}>
									<NavigationMenuItem className={'px-3'}>
										<NavigationMenuLink
											selected={pathname === '/integrations'}
											iconLeading={<SlidersHorizontal size={16} weight={'fill'} />}
											className="w-full"
										>
											Integrations
										</NavigationMenuLink>
									</NavigationMenuItem>
								</motion.li>
							</Link>
							<Link href={'/settings'} legacyBehavior passHref>
								<motion.li variants={itemVariants}>
									<NavigationMenuItem className={'px-3'}>
										<NavigationMenuLink
											selected={pathname === '/settings'}
											iconLeading={<Gear size={16} weight={'fill'} />}
											className="w-full"
										>
											Settings
										</NavigationMenuLink>
									</NavigationMenuItem>
								</motion.li>
							</Link>
						</motion.ul>
					</NavigationMenuList>
				</NavigationMenu>
				<SidenavFooter
					content={
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: 'easeOut' }}
						>
							<Avatar
								subtitle="Product Designer"
								title="Samraaj"
								size="md"
								src="/images/profile-card/headshot-1.png"
							/>
						</motion.div>
					}
					collapsed={false}
				/>
			</div>
		</Sidebar>
	);
}
export default SideNavigation;