'use client';
// ion/SideNavigation/default: Generated with Ion on 2/4/2024, 6:02:24 PM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=33:7507
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
						<div className="flex w-full items-start px-3 pb-5">
							<Select
								value={selected}
								onValueChange={onValueChange}
								className="w-full"
								placeholder="Select Theme"
								options={themeOptions}
								iconLeading={themeIcon}
							/>
						</div>
						<Link href={'/'} legacyBehavior passHref>
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
						</Link>
						<Link href={'/banking'} legacyBehavior passHref>
							<NavigationMenuItem className={'px-3'}>
								<NavigationMenuLink
									selected={pathname === '/banking'}
									iconLeading={<Bank size={16} weight={'fill'} />}
									className="w-full"
								>
									Banking
								</NavigationMenuLink>
							</NavigationMenuItem>
						</Link>
						<Link href={'/employees'} legacyBehavior passHref>
							<NavigationMenuItem className={'px-3'}>
								<NavigationMenuLink
									selected={pathname === '/employees'}
									iconLeading={<UsersFour size={16} weight={'fill'} />}
									className="w-full"
								>
									Employees
								</NavigationMenuLink>
							</NavigationMenuItem>
						</Link>
						<Link href={'/integrations'} legacyBehavior passHref>
							<NavigationMenuItem className={'px-3'}>
								<NavigationMenuLink
									selected={pathname === '/integrations'}
									iconLeading={<SlidersHorizontal size={16} weight={'fill'} />}
									className="w-full"
								>
									Integrations
								</NavigationMenuLink>
							</NavigationMenuItem>
						</Link>
						<Link href={'/settings'} legacyBehavior passHref>
							<NavigationMenuItem className={'px-3'}>
								<NavigationMenuLink
									selected={pathname === '/settings'}
									iconLeading={<Gear size={16} weight={'fill'} />}
									className="w-full"
								>
									Settings
								</NavigationMenuLink>
							</NavigationMenuItem>
						</Link>
					</NavigationMenuList>
				</NavigationMenu>
				<SidenavFooter
					content={
						<Avatar
							subtitle="Product Designer"
							title="Samraaj"
							size="md"
							src="/images/profile-card/headshot-1.png"
						/>
					}
					collapsed={false}
				/>
			</div>
		</Sidebar>
	);
}
export default SideNavigation;
