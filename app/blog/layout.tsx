import type React from 'react';
import 'prism-themes/themes/prism-one-dark.min.css';
import 'katex/dist/katex.min.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		default: 'Blog',
		template: '%s | Blog | HCI EC³',
	},
};


export default function Layout({ children }: {
	children: React.ReactNode
}) {
	// get page route
	return (
		<div className='prose prose-neonGreen pt-36 pb-10 w-5/6 md:w-full m-auto main-accent'>
			{children}
		</div>
	);
}