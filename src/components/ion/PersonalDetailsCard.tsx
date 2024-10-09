'use client';
// Generated with Ion on 2/4/2024, 11:43:24 PM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=60:13997
import { useState, MouseEvent } from 'react';
import { User, Envelope, Phone } from '@phosphor-icons/react';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

function PersonalDetailsCard() {
	const [fullName, setFullName] = useState('');
	const [emailAddress, setEmailAddress] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [address, setAddress] = useState('');
	
	function applyChangesClickHandler(e: MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		// You might want to add more sophisticated feedback here
		alert('Changes have been applied successfully.');
	}

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={containerVariants}
			className="w-full"
		>
			<Card type="elevated" className="w-full">
				<motion.div className="w-full flex-col flex items-center gap-y-4 py-2 h-fit" variants={containerVariants}>
					<motion.div variants={itemVariants} className="w-full">
						<Input
							placeholder="Samraaj Singh Bath"
							iconLeading={<User size={16} className="text-foreground" weight={'regular'} />}
							required={true}
							label="Full Name"
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
							className="w-full"
						/>
					</motion.div>
					<motion.div variants={itemVariants} className="w-full">
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
					</motion.div>
					<motion.div variants={itemVariants} className="w-full">
						<Input
							placeholder="123-456-7890"
							iconLeading={<Phone size={16} className="text-foreground" weight={'regular'} />}
							required={true}
							label="Phone Number"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							className="w-full"
						/>
					</motion.div>
					<motion.div variants={itemVariants} className="w-full">
						<Textarea
							placeholder="301 Main St"
							required={true}
							label="Address"
							showHintIcon={true}
							hint="Needed for HR records"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							className="w-full"
						/>
					</motion.div>
					<motion.div 
						variants={itemVariants} 
						className="w-full flex justify-end items-center gap-x-5"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
					>
						<Button 
							emphasis="high" 
							color="primary" 
							size="md" 
							onClick={applyChangesClickHandler}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							Apply Changes
						</Button>
					</motion.div>
				</motion.div>
			</Card>
		</motion.div>
	);
}
export default PersonalDetailsCard;