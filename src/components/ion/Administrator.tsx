// src/components/ion/Administrator.tsx
// Modified with animations by Ion on 4/27/2024
import React, { useState, useEffect } from 'react';
import Avatar from '@/components/ui/Avatar';
import Divider from '@/components/ui/Divider';
import clsx from 'clsx';

type AdministratorProps = {
	hrAdmin?: boolean;
	bookkeeper?: boolean;
	companyAdmin?: boolean;
	employee?: boolean;
	className?: string;
};

function Administrator({
	hrAdmin = true,
	bookkeeper = true,
	companyAdmin = true,
	employee = true,
	className = '',
}: AdministratorProps) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const roles = [
		{ condition: employee, label: 'Employee' },
		{ condition: bookkeeper, label: 'Bookkeeper' },
		{ condition: companyAdmin, label: 'Company Admin' },
		{ condition: hrAdmin, label: 'Hr Admin' },
	].filter(role => role.condition);

	return (
		<div
			className={clsx(
				'bg-base h-[240px] flex flex-col items-start gap-y-5 p-5 rounded-radius border border-weak-stroke shadow-[0_1px_1px_0_rgba(0,0,0,0.07),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_2px_0_rgba(0,0,0,0.1),0_0_8px_0_rgba(0,0,0,0.05)]',
				'className',
				'transform transition-transform duration-500 ease-out',
				isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
				'hover:scale-105 hover:shadow-xl'
			)}
		>
			<Avatar title="Samuel Barnholdt" size="md" initials="SB" />
			<Divider />
			<div className="w-full flex flex-col items-start gap-y-2">
				{roles.map((role, index) => (
					<div
						key={role.label}
						className={clsx(
							'text-sm font-semibold text-foreground transition-opacity duration-500 ease-out transform',
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
						)}
						style={{ transitionDelay: `${index * 100}ms` }}
					>
						{role.label}
					</div>
				))}
			</div>
		</div>
	);
}

export default Administrator;