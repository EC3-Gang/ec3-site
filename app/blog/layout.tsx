import type React from 'react';
import 'prism-themes/themes/prism-one-dark.min.css';
import 'katex/dist/katex.min.css';

export default function Layout({ children }: {
	children: React.ReactNode
}) {
	return (
		<div className='prose prose-neonGreen pt-36 pb-10 w-3/5 m-auto main-accent'>
			{children}
		</div>
	);
}