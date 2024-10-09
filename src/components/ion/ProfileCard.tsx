'use client';
// Generated with Ion on 2/4/2024, 10:58:57 PM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=44:12514
import { MouseEvent, useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Divider from '@/components/ui/Divider';
import { DeviceMobile, Envelope } from '@phosphor-icons/react';
import clsx from 'clsx';

type ProfileCardProps = {
	email?: string;
	phone?: string;
	role?: string;
	position?: string;
	name?: string;
	imgSrc?: string;
	className?: string;
};

function ProfileCard({
	email = 'samraaj@ion.design',
	phone = '+1 (510) 555 - 0123',
	role = 'Administrator - Company',
	position = 'Founder/ Co-Founder',
	name = 'Bath, Samraaj S.',
	imgSrc = '/images/profile-card/headshot-1.png',
	className = '',
}: ProfileCardProps) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	function editClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('editClickHandler fired');
	}

	return (
		<div
			className={clsx(
				'bg-surface w-full flex items-start gap-x-3 p-5 rounded-radius h-fit transition-opacity transition-transform duration-700 ease-out',
				isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
				'hover:scale-105 hover:shadow-lg',
				className
			)}
		>
			<div className="h-full flex-col flex justify-center items-start gap-y-4">
				<img
					className="rounded-full object-cover h-[100px] w-[100px] transition-transform duration-500 ease-in-out transform hover:scale-105"
					alt="headshot 1"
					src={imgSrc}
				/>
				<Button
					emphasis="medium"
					color="primary"
					size="sm"
					onClick={editClickHandler}
					className="w-full transition-transform duration-300 ease-in-out hover:scale-105 focus:scale-105"
				>
					Edit
				</Button>
			</div>
			<div className="h-full flex-1 flex-col flex justify-center items-start gap-y-4 px-3 py-1 border-l border-soft-stroke">
				<div className="text-2xl font-medium text-inverse-foreground transition-opacity duration-500 ease-in-out opacity-0 animate-fadeIn">
					{name}
				</div>
				<div className="w-full flex justify-between items-center gap-x-2.5">
					<div className="flex-col flex items-start gap-y-1 text-xs font-semibold text-center text-weak-foreground">
						<div className="transition-transform duration-300 ease-in-out transform hover:translate-x-1">
							{position}
						</div>
						<div className="transition-transform duration-300 ease-in-out transform hover:translate-x-1">
							{role}
						</div>
					</div>
					<Badge emphasis="high" color="blue" size="sm">
						Active
					</Badge>
				</div>
				<Divider />
				<div className="flex-col flex items-start gap-y-2 text-inverse-foreground">
					<div className="flex items-center gap-x-5 transition-opacity duration-500 ease-in-out opacity-0 animate-fadeInDelay">
						<DeviceMobile size={12} weight={'bold'} />
						<div className="text-xs font-semibold text-center">{phone}</div>
					</div>
					<div className="flex items-center gap-x-5 transition-opacity duration-500 ease-in-out opacity-0 animate-fadeInDelay">
						<Envelope size={12} weight={'bold'} />
						<div className="text-xs font-semibold text-center">{email}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileCard;