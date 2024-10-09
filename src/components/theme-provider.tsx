'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import * as React from 'react';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return (
		<NextThemesProvider {...props}>
			<div
				style={{
					transition: 'background-color 0.5s ease, color 0.5s ease',
				}}
			>
				{children}
			</div>
		</NextThemesProvider>
	);
}