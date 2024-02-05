'use client';
// Generated with Ion on 2/5/2024, 12:59:31 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=17:41336
import { useState, MouseEvent } from 'react';
import { Buildings, FileText } from '@phosphor-icons/react';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import { Phone } from 'lucide-react';
import Button from '@/components/ui/Button';
import clsx from 'clsx';
type CompanySettingsTabProps = {
	className?: string;
};

function CompanySettingsTab({ className = '' }: CompanySettingsTabProps) {
	const [legalEntityName, setLegalEntityName] = useState('');
	const [dbaName, setDbaName] = useState('');
	const [businessPhoneNumber, setBusinessPhoneNumber] = useState('');
	function applyChangesClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('applyChangesClickHandler fired');
	}

	const options = [
		{ value: 'Corporation', label: 'Corporation', iconLeading: <Buildings size={16} /> },
		{ value: 'LLC', label: 'LLC', iconLeading: <Buildings size={16} /> },
		{ value: 'Partnership', label: 'Partnership', iconLeading: <Buildings size={16} /> },
	];

	return (
		<div className={clsx('w-full flex-col flex items-center gap-y-4 h-fit', className)}>
			<Input
				placeholder="ion design"
				iconLeading={<Buildings size={16} className="text-foreground" weight={'regular'} />}
				required={true}
				label="Legal Entity Name"
				value={legalEntityName}
				onChange={(e) => setLegalEntityName(e.target.value)}
				className="w-full"
			/>
			<Input
				placeholder="ion design"
				iconLeading={<FileText size={16} className="text-foreground" weight={'regular'} />}
				required={true}
				label="DBA Name"
				value={dbaName}
				onChange={(e) => setDbaName(e.target.value)}
				className="w-full"
			/>
			<Select placeholder="Corporation" label="Company Type" className="w-full" options={options} />
			<Input
				placeholder="samraaj@ion.design"
				iconLeading={<Phone size={16} className="text-foreground" />}
				required={true}
				label="Business Phone Number"
				value={businessPhoneNumber}
				onChange={(e) => setBusinessPhoneNumber(e.target.value)}
				className="w-full"
			/>
			<div className="w-full flex justify-end items-center gap-x-5 py-2">
				<Button emphasis="high" color="primary" size="md" onClick={applyChangesClickHandler}>
					Apply Changes
				</Button>
			</div>
		</div>
	);
}
export default CompanySettingsTab;
