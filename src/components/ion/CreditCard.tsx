// Generated with Ion on 2/4/2024, 10:53:17 PM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=56:13259
import Badge from '@/components/ui/Badge';
import clsx from 'clsx';
type CreditCardProps = {
	isVirtual?: boolean;
	spent?: string;
	zip?: string;
	city?: string;
	ccv?: string;
	address?: string;
	exp?: string;
	number?: string;
	name?: string;
	className?: string;
};

function CreditCard({
	isVirtual = true,
	spent = '$45',
	zip = '94108',
	city = 'San Francisco, California',
	ccv = '555',
	address = '2 Marina Blvd',
	exp = '5055 / 05',
	number = '5555555555555555',
	name = 'Bath, Samraaj',
	className = '',
}: CreditCardProps) {
	return (
		<div
			className={clsx(
				'bg-base relative flex-col flex items-start gap-y-5 p-4 rounded-radius-sm border border-weak-stroke h-fit',
				className
			)}
		>
			<div className="text-sm font-semibold text-foreground">{name}</div>
			<div className="w-full flex-col flex items-start gap-y-3 font-semibold">
				<div className="text-xs text-foreground">{number}</div>
				<div className="flex items-start gap-x-3">
					<div className="flex items-center gap-x-1">
						<div className="text-[8px] leading-relaxed text-soft-foreground">EXP</div>
						<div className="text-[10px] leading-snug text-foreground">{exp}</div>
					</div>
					<div className="flex items-center gap-x-1">
						<div className="text-[8px] leading-relaxed text-soft-foreground">CCV</div>
						<div className="text-[10px] leading-snug text-foreground">{ccv}</div>
					</div>
				</div>
				<div className="w-full flex-col flex items-start">
					<div className="text-[8px] leading-relaxed text-soft-foreground">Billing Address</div>
					<div className="text-[10px] leading-snug text-foreground">{address}</div>
					<div className="text-[10px] leading-snug text-foreground">{city}</div>
					<div className="text-[10px] leading-snug text-foreground">{zip}</div>
				</div>
			</div>
			<div className="w-full flex-col flex items-start font-semibold">
				<div className="text-[8px] leading-relaxed text-soft-foreground">Spent this month</div>
				<div className="text-sm text-foreground">{spent}</div>
				<div className="text-[8px] leading-relaxed text-foreground">No Limit</div>
			</div>
			{isVirtual && (
				<Badge emphasis="medium" color="blue" size="sm" className="left-4 top-[-9px] absolute">
					Virtual
				</Badge>
			)}
		</div>
	);
}
export default CreditCard;
