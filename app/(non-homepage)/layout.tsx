import type React from 'react';

export default function NonHomepageLayout({ children }: { children: React.ReactNode[] | React.ReactNode }) {
	const year = new Date().getFullYear();
	return (
		<div className='pb-10'>
			{children}
			<p className='mt-12 text-center leading-loose text-xs'>
				&copy; 2022-{year} HCI EC<sup>3</sup>. All rights reserved. <br />
				Made with ❤️, Next.js, and Tailwind CSS.
			</p>

		</div>
	);
}