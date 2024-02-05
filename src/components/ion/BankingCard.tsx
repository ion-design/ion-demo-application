// Generated with Ion on 2/4/2024, 11:52:16 PM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=87:3874
import { ArrowUp, ArrowDown } from '@phosphor-icons/react';
import Divider from '@/components/ui/Divider';
import { RadioGroupItem as Radio, RadioGroup } from '@/components/ui/Radio';
import Select from '@/components/ui/Select';
import Card from '@/components/ui/Card';

function BankingCard() {
	const paymentOptions = [
		{
			label: 'Direct Deposit',
			value: 'Direct Deposit',
		},
		{
			label: 'Wire Transfer',
			value: 'Wire Transfer',
		},
		{
			label: 'Check',
			value: 'Check',
		},
	];

	return (
		<Card type="elevated" title="Banking" className="w-full">
			<RadioGroup className="w-full flex-col flex items-start gap-y-4 py-2 h-fit">
				<div className="w-full flex-col flex items-start gap-y-2 pb-3">
					<div className="w-full flex justify-between items-center gap-x-2.5 px-5 py-3 rounded-radius-sm border border-soft-stroke">
						<div className="flex-col flex items-start gap-y-1">
							<div className="text-sm font-semibold text-soft-foreground">Treasury Balance</div>
							<div className="flex items-center gap-x-2">
								<ArrowUp size={16} className="text-state-success" weight={'bold'} />
								<div className="text-lg font-semibold text-foreground">12%</div>
							</div>
						</div>
						<img src="/images/frame-63/Vector.svg" alt="Vector" className="w-1/3 h-[26px]" />
					</div>
					<div className="w-full flex justify-between items-center gap-x-2.5 px-5 py-3 rounded-radius-sm border border-soft-stroke">
						<div className="flex-col flex items-start gap-y-1">
							<div className="text-sm font-semibold text-soft-foreground">Account Balance</div>
							<div className="flex items-center gap-x-2">
								<ArrowDown size={16} className="text-danger" weight={'bold'} />
								<div className="text-lg font-semibold text-foreground">12%</div>
							</div>
						</div>
						<img src="/images/frame-63/Vector-1.svg" alt="Vector" className="w-1/3 h-[30px]" />
					</div>
				</div>
				<div className="text-sm font-semibold text-foreground">Account for Payroll</div>
				<Divider />
				<Radio label="Connect via Plaid" value="Connect via Plaid" />
				<Radio label="Enter Details Manually" value="Enter Details Manually" />
				<Select
					placeholder="Direct Deposit"
					label="Payment Method"
					className="w-full"
					options={paymentOptions}
				/>
			</RadioGroup>
		</Card>
	);
}
export default BankingCard;
