import './globals.scss';
import type React from 'react';
import Link from 'next/link';
import 'aos/dist/aos.css';
import { Fira_Code, Lato } from '@next/font/google';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'HCI EC³',
	description: 'The official site for the Hwa Chong (HS) Electronic Communications and Computing Club (HCI EC³).',
};


const firaCode = Fira_Code({
	variable: '--font-fira',
	display: 'optional',
	subsets: ['latin'],
});

const lato = Lato({
	variable: '--font-lato',
	display: 'optional',
	weight: ['400', '700'],
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang='en' className={`${firaCode.variable} ${lato.variable} neon-green bg-black main-accent`}>
			<head>
				<title>HCI EC³</title>
				<meta name='google-site-verification' content='lmVMRfyduXED9G2uYI0Pb35uvXFj34LzRikL-wTm8WY' />
			</head>
			<body>
				{/* top navbar */}
				<div className='p-5 text-right font-fira bg-[rgba(0,0,0,0.8)] fixed top-0 w-full z-50'>
					<Link href='/' className='mr-12 main-accent'>
						Home
					</Link>
					<Link href='/about' className='mr-12 main-accent'>
						About Us
					</Link>
					<Link href='/blog' className='mr-12 main-accent'>
						Blog
					</Link>
					<Link href='/credits' className='mr-12 main-accent'>
						Credits
					</Link>
					<Link href='/settings' className='main-accent'>
						Settings
					</Link>
				</div>

				{children}
			</body>
		</html>
	);
}
