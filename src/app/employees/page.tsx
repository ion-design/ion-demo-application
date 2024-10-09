'use client';
// Generated with Ion on 2/5/2024, 12:14:34 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pD?node-id=27:7062
import { motion } from 'framer-motion';
import Checkbox from '@/components/ui/Checkbox';
import { ChevronsUpDown } from 'lucide-react';
import Avatar from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';
import { MouseEvent, useState } from 'react';
import { CreditCard, MagnifyingGlass, CurrencyDollar, ChartLine } from '@phosphor-icons/react';
import Tag from '@/components/ui/Tag';
import Switch from '@/components/ui/Switch';
import SideNavigation from '@/components/ion/SideNavigation';
import Divider from '@/components/ui/Divider';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Table from '@/components/ui/Table';
import { useRouter } from 'next/navigation';

function EmployeesPage() {
	const router = useRouter();
	const [inputValue, setInputValue] = useState('');

	function hireClickHandler(e: MouseEvent<HTMLButtonElement>) {
		router.push('/hire');
	}

	function metricsClickHandler(e: MouseEvent<HTMLButtonElement>) {
		router.push('/employees/metrics');
	}

	function salaryClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('salaryClickHandler fired');
	}

	// Example of filled information in the table
	const data = [
		{
			employeeName: {
				name: 'Samraaj Bath',
				email: 'samraaj@ion.design',
				imgSrc: '/images/profile-card/headshot-1.png',
			},
			title: 'CEO',
			department: 'Operations',
			type: 'Salary',
			remote: false,
		},
		{
			employeeName: {
				name: 'Samuel Barnholdt',
				email: 'Samuel@ion.design',
				imgSrc: '/images/profile-card/samuel.jpeg',
			},
			title: 'CTO',
			department: 'Engineering',
			type: 'Salary',
			remote: false,
		},
		{
			employeeName: {
				name: 'Yuma Tanaka',
				email: 'Yuma@ion.design',
			},
			title: 'Founding Engineer',
			department: 'Engineering',
			type: 'Contractor',
			remote: true,
		},
	];

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<div className="bg-base w-screen h-screen flex items-start">
			<SideNavigation />
			<motion.div
				className="h-full flex-1 flex flex-col items-center gap-y-5 p-5 overflow-y-scroll"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<motion.div className="w-full flex items-center gap-x-5" variants={itemVariants}>
					<motion.div className="flex-col flex items-start gap-y-1" variants={itemVariants}>
						<motion.div
							className="text-xl font-semibold text-base-foreground"
							variants={itemVariants}
							transition={{ duration: 0.5 }}
						>
							Employees
						</motion.div>
						<motion.div
							className="text-sm text-sub-foreground"
							variants={itemVariants}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							Manage your preferences and options
						</motion.div>
					</motion.div>
				</motion.div>
				<motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.2 }}>
					<Divider />
				</motion.div>
				<motion.div className="w-full flex-col max-w-[1200px] flex items-start gap-y-5" variants={containerVariants}>
					<motion.div className="w-full flex justify-between items-start" variants={itemVariants}>
						<Input
							placeholder="Search People"
							iconLeading={
								<MagnifyingGlass size={16} className="text-foreground" weight={'bold'} />
							}
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
						/>
						<div className="flex gap-5">
							<Button
								iconLeading={<ChartLine size={16} weight={'bold'} />}
								emphasis="high"
								color="secondary"
								size="md"
								onClick={metricsClickHandler}
							>
								Metrics
							</Button>
							<Button
								iconLeading={<CurrencyDollar size={16} weight={'bold'} />}
								emphasis="high"
								color="primary"
								size="md"
								onClick={hireClickHandler}
							>
								Hire
							</Button>
						</div>
					</motion.div>
					<motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.3 }}>
						<Table
							columns={[
								{
									id: 'none',
									header: ({ table: table }) => (
										<Checkbox
											checked={
												table.getIsAllPageRowsSelected() ||
												(table.getIsSomePageRowsSelected() && 'indeterminate')
											}
											onCheckedChange={(value) => {
												if (table.getIsSomePageRowsSelected()) {
													table.toggleAllPageRowsSelected(false);
												} else {
													table.toggleAllPageRowsSelected(!!value);
												}
											}}
											aria-label="Select all"
										/>
									),
									cell: ({ row: row }) => (
										<Checkbox
											checked={row.getIsSelected()}
											onCheckedChange={(value) => row.toggleSelected(!!value)}
											aria-label="Select row"
										/>
									),
								},
								{
									header: ({ column: column }) => (
										<motion.button
											className="flex flex-row items-center gap-x-3 text-sm font-normal"
											onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											transition={{ type: 'spring', stiffness: 300, damping: 20 }}
										>
											<h4>Employee Name</h4>
											<ChevronsUpDown size={16} className="stroke-sub-foreground"></ChevronsUpDown>
										</motion.button>
									),
									accessorKey: 'employeeName',
									cell: ({ row: { original: cellData } }) => (
										<div className="flex flex-row gap-x-3">
											<Avatar size="md" src={cellData.employeeName.imgSrc} />
											<div className="flex-col flex justify-center items-start gap-y-1 text-sm">
												<div className="text-foreground">{cellData.employeeName.name}</div>
												<div className="text-sub-foreground">{cellData.employeeName.email}</div>
											</div>
										</div>
									),
								},
								{
									header: 'Title',
									cell: ({ row: { original: cellData } }) => <>{cellData.title}</>,
								},
								{
									header: 'Department',
									cell: ({ row: { original: cellData } }) => (
										<Badge
											emphasis="medium"
											color={cellData.department == 'Engineering' ? 'blue' : 'green'}
											size="md"
										>
											{cellData.department}
										</Badge>
									),
								},
								{
									header: 'Type',
									cell: ({ row: { original: cellData } }) => (
										<Tag
											iconLeading={
												<CreditCard size={12} className="text-foreground" weight={'regular'} />
											}
											type="stroke"
											color="simple"
											onClick={salaryClickHandler}
										>
											{cellData.type}
										</Tag>
									),
								},
								{
									header: 'Remote',
									cell: ({ row: { original: cellData } }) => <Switch size="sm" />,
								},
							]}
							data={data}
							className="w-full"
						/>
					</motion.div>
				</motion.div>
			</motion.div>
		</div>
	);
}
export default EmployeesPage;