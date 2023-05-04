/* eslint-disable @typescript-eslint/no-extra-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './globals.scss';
import type React from 'react';
import { Analytics } from '@vercel/analytics/react';
import DropdownMenu from './DropdownMenu';
import Link from 'next/link';
import 'aos/dist/aos.css';
import { Fira_Code, Lato } from 'next/font/google';
import localFont from 'next/font/local';
import type { Metadata } from 'next';
import Profile from './Profile';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';


const Cascadia_Code = localFont({
	adjustFontFallback: false,
	src: './CascadiaCode.woff2',
	variable: '--font-cascadia',
	display: 'swap',
});

export const metadata: Metadata = {
	title: {
		default: 'HCI EC³',
		template: '%s | HCI EC³',
	},
	description: 'The official site for the Hwa Chong (HS) Electronic Communications and Computing Club (HCI EC³).',
};


export default async function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	const session = await getServerSession(authOptions);


	return (
		<html lang='en' className={`${Cascadia_Code.variable} neon-green bg-black main-accent`}>
			<head>
				<script src='https://kit.fontawesome.com/08ddfab45a.js' crossOrigin='anonymous'></script>
				<meta name='google-site-verification' content='lmVMRfyduXED9G2uYI0Pb35uvXFj34LzRikL-wTm8WY' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
				<link href='https://fonts.googleapis.com/css2?family=Fira+Code&family=Lato&display=swap' rel='stylesheet'></link>
			</head>
			<body>
				{/* top navbar */}

				<div className='px-5 pt-4 text-right font-fira bg-[rgba(0,0,0,0.8)] fixed top-0 w-full z-50 text-sm select-none'>
					<Link href='/' className='mr-7 main-accent absolute left-4 top-3'>
						<img src='/favicon.ico' alt='HCI EC³ Logo' className='w-10 h-10' />
					</Link>
					<Link href='/about' className='mr-7 main-accent'>
						About
					</Link>
					<Link href='/blog' className='mr-7 main-accent'>
						Blog
					</Link>
					<div className='mr-7 main-accent inline-block'><DropdownMenu /></div>
					<Profile session={session!} />
				</div>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
