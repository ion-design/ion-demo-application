'use client';
// Generated with Ion on 2/5/2024, 12:46:13 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=17:39921
import Avatar from '@/components/ui/Avatar';
import Divider from '@/components/ui/Divider';
import { useState, MouseEvent } from 'react';
import { User, Envelope, Phone } from '@phosphor-icons/react';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import clsx from 'clsx';
type ProfileSettingsTabProps = {
	className?: string;
};

function ProfileSettingsTab({ className = '' }: ProfileSettingsTabProps) {
	const [fullName, setFullName] = useState('');
	const [emailAddress, setEmailAddress] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [address, setAddress] = useState('');
	function applyChangesClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('applyChangesClickHandler fired');
	}
	return (
		<div className={clsx('w-[450px] flex-col flex items-center gap-y-4 h-fit', className)}>
			<div className="w-full flex items-center">
				<Avatar
					subtitle="Enter your contact details for communication."
					title="Contact Information"
					size="md"
					topStatus="plus"
				/>
			</div>
			<Divider />
			<Input
				placeholder="Samraaj Singh Bath"
				iconLeading={<User size={16} className="text-foreground" weight={'regular'} />}
				required={true}
				label="Full Name"
				value={fullName}
				onChange={(e) => setFullName(e.target.value)}
				className="w-full"
			/>
			<Input
				placeholder="samraaj@ion.design"
				iconLeading={<Envelope size={16} className="text-foreground" weight={'regular'} />}
				required={true}
				label="Email Address"
				showHintIcon={true}
				hint="Should be your work email"
				value={emailAddress}
				onChange={(e) => setEmailAddress(e.target.value)}
				className="w-full"
			/>
			<Input
				placeholder="samraaj@ion.design"
				iconLeading={<Phone size={16} className="text-foreground" weight={'regular'} />}
				required={true}
				label="Phone Number"
				value={phoneNumber}
				onChange={(e) => setPhoneNumber(e.target.value)}
				className="w-full"
			/>
			<Textarea
				placeholder="301 main st"
				required={true}
				label="Address"
				showHintIcon={true}
				hint="Needed for HR records"
				value={address}
				onChange={(e) => setAddress(e.target.value)}
				className="w-full"
			/>
			<div className="w-full flex justify-end items-center gap-x-5">
				<Button emphasis="high" color="primary" size="md" onClick={applyChangesClickHandler}>
					Apply Changes
				</Button>
			</div>
		</div>
	);
}
export default ProfileSettingsTab;
