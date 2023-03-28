import type React from 'react';

export default function NonHomepageLayout({ children }: { children: React.ReactNode[] | React.ReactNode }) {
	const year = new Date().getFullYear();
	return (
		<div className='pb-10'>
			{children}
			<p className='text-center'>&copy; 2022-{year} HCI EC<sup>3</sup>. All rights reserved. </p>
		</div>
	);
}