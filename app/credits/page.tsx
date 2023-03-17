import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Credits',
};

export default function Credits() {
	return (
		<div className='flex flex-col items-center min-h-screen pt-36 pb-10'>
			<main className='flex flex-col items-center w-full flex-1 text-center'>
				<h1 className='text-4xl font-bold font-fira'>
					Credits
				</h1>
				<p className='mt-3 text-lg font-fira'>
					Made by HCI EC³
				</p>
				<p className='mt-3 font-fira'>
					Made with Next.js and Tailwind CSS
				</p>
			</main>
		</div>
	);
}
