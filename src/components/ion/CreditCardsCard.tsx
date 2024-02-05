import Card from '@/components/ui/Card';
import { Plus, RocketLaunch, Money, UserSquare, Bank } from '@phosphor-icons/react';
import Button from '@/components/ui/Button';
import CreditCard from '@/components/ion/CreditCard';
import { MouseEvent } from 'react';

function CreditCardsCard() {
	function createCardClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('createCardClickHandler fired');
	}

	return (
		<Card type="elevated" className="w-full">
			<div className="w-full flex-col flex items-start gap-y-4 h-fit">
				<div className="w-full flex justify-between items-center gap-x-2.5 py-2">
					<div className="text-base font-semibold text-center text-foreground">Cards</div>
					<Button
						iconLeading={<Plus size={16} className="text-secondary" weight={'bold'} />}
						emphasis="low"
						color="secondary"
						size="sm"
						onClick={createCardClickHandler}
					>
						Create Card
					</Button>
				</div>
				<div className="w-full flex-wrap flex items-start gap-3">
					<CreditCard
						name="Bath, Samraaj"
						number="5555555555555555"
						exp="5055 / 05"
						address="2 Marina Blvd"
						zip="94108"
						spent="$45"
						ccv="555"
						city="San Francisco, California"
						isVirtual={true}
					/>
					<CreditCard
						isVirtual={false}
						city="San Francisco, California"
						ccv="555"
						spent="$45"
						zip="94108"
						address="2 Marina Blvd"
						exp="5055 / 05"
						number="5555555555555555"
						name="Bath, Samraaj"
					/>
				</div>
			</div>
		</Card>
	);
}

export default CreditCardsCard;
