'use client';
// Generated with Ion on 2/19/2024, 11:02:07 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=158:3234
import { MouseEvent, useState } from 'react';
import { DownloadSimple, ArrowDown, ArrowUp, FunnelSimple } from '@phosphor-icons/react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Input from '@/components/ui/Input';
import { Tabs, TabsList, Tab } from '@/components/ui/Tabs';
import { LineChart } from '@tremor/react';
import MetricsCard from '@/components/ion/MetricsCard';

function EmployeeMetricsPage() {
	function exportClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('exportClickHandler fired');
	}
	const [inputValue, setInputValue] = useState('');
	return (
		<div className="bg-base w-screen h-screen flex justify-center items-start p-10">
			<div className="flex-1 flex-col max-w-[1000px] flex gap-3 p-5">
				<div className="w-full flex justify-between items-center">
					<div className="text-lg font-semibold text-foreground">Employee Metrics</div>
					<Button
						iconLeading={<DownloadSimple size={16} weight={'bold'} />}
						emphasis="high"
						color="primary"
						size="md"
						onClick={exportClickHandler}
					>
						Export
					</Button>
				</div>
				<div className="w-full flex items-start gap-5">
					<MetricsCard
						metric="$6,666"
						badge={
							<Badge
								iconLeading={<ArrowDown size={12} weight={'bold'} />}
								emphasis="medium"
								color="red"
								size="md"
							>
								Down
							</Badge>
						}
						title="Average Burn (Monthly)"
						className="w-full"
					/>
					<MetricsCard
						metric="$4,500"
						badge={
							<Badge
								iconLeading={<ArrowUp size={12} weight={'bold'} />}
								emphasis="medium"
								color="blue"
								size="md"
							>
								Up
							</Badge>
						}
						title="Average Revenue Generated"
						className="w-full"
					/>
					<MetricsCard
						metric="8"
						badge={
							<Badge
								iconLeading={<ArrowUp size={12} weight={'bold'} />}
								emphasis="medium"
								color="blue"
								size="md"
							>
								Up
							</Badge>
						}
						title="Merged Features"
						className="w-full"
					/>
				</div>
				<div className="w-full flex justify-between items-start py-3">
					<Input
						placeholder="Filter"
						iconLeading={<FunnelSimple size={16} weight={'bold'} />}
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
					<Tabs>
						<TabsList>
							<Tab value="Burn">Burn</Tab>
							<Tab value="Revenue">Revenue</Tab>
							<Tab value="Features">Features</Tab>
						</TabsList>
					</Tabs>
				</div>
				<LineChart
					className="h-[364px]"
					valueFormatter={(number) => `$${Intl.NumberFormat('us').format(number).toString()}`}
					index={'date'}
					data={[
						{
							date: 'Feb 19',
							Burn: 197,
							Revenue: 163,
						},
						{
							date: 'Mar 19',
							Burn: 282,
							Revenue: 262,
						},
						{
							date: 'Apr 19',
							Burn: 304,
							Revenue: 334,
						},
						{
							date: 'May 19',
							Burn: 360,
							Revenue: 416,
						},
						{
							date: 'Jun 19',
							Burn: 600,
							Revenue: 440,
						},
					]}
					categories={['Burn', 'Revenue']}
					yAxisWidth={48}
				/>
			</div>
		</div>
	);
}
export default EmployeeMetricsPage;
