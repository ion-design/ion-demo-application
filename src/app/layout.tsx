import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		// Trigger the animation after the component mounts
		setIsMounted(true);
	}, []);

	return (
		<html lang="en" className={`transition-opacity duration-1000 ease-in-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
			<body className={`${inter.className} transition-colors duration-500 ease-in-out`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					<div className="animate-fade-in">
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}