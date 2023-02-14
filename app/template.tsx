'use client';
import { useEffect } from 'react';
import type React from 'react';
import colorMap from './colorMap';

export default function Template({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		// get color theme if it exists, if not set it to green
		let theme = localStorage.getItem('theme');
		if (!theme) {
			localStorage.setItem('theme', 'green');
			theme = 'green';
		}

		// set the color theme
		const root = document.documentElement;
		if ((colorMap as any)[theme]) {
			const colors = (colorMap as any)[theme];
			root.style.setProperty('--text-color', colors.accent);
			root.style.setProperty('--tw-prose-headings', colors.accent);
			root.style.setProperty('--neon-color', colors.neonColor);
		}
		else {
			localStorage.setItem('theme', 'green');
			const colors = colorMap.green;
			root.style.setProperty('--text-color', colors.accent);
			root.style.setProperty('--tw-prose-headings', colors.accent);
			root.style.setProperty('--neon-color', colors.neonColor);
		}
	}, []);

	return children;
}