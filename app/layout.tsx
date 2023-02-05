import './globals.scss';
import type React from 'react';
import Link from 'next/link';
import 'aos/dist/aos.css';
import styles from './page.module.css';
import { Fira_Code, Lato } from '@next/font/google';

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
		<html lang='en' className={`${firaCode.variable} ${lato.variable} ${styles['neon-green']} bg-black`}>
			<head>
				<title>HCI EC³</title>
			</head>
			<body>
				{/* top navbar */}
				<div className='p-5 text-right font-fira bg-[rgba(0,0,0,0.8)] fixed top-0 w-full z-50'>
					<Link href='/' className='mr-12 neon-green'>
						Home
					</Link>
					<Link href='/about' className='mr-12 neon-green'>
						About Us
					</Link>
					<Link href='/credits' className='mr-12 neon-green'>
						Credits
					</Link>
				</div>

				{children}
			</body>
		</html>
	);
}
