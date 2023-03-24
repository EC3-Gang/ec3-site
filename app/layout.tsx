/* eslint-disable @typescript-eslint/no-extra-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './globals.scss';
import type React from 'react';
import Link from 'next/link';
import 'aos/dist/aos.css';
import { Fira_Code, Lato } from 'next/font/google';
import localFont from 'next/font/local';
import type { Metadata } from 'next';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import SupabaseListener from '../components/AuthListener';
// import createClient from '../utils/supabase-server';


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

export default async function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	// const supabase = createClient();

	// const {
	// 	data: { session },
	// } = await supabase.auth.getSession();

	return (
		<html lang='en' className={`${firaCode.variable} ${lato.variable} ${Cascadia_Code.variable} neon-green bg-black main-accent`}>
			<head>
				<meta name='google-site-verification' content='lmVMRfyduXED9G2uYI0Pb35uvXFj34LzRikL-wTm8WY' />
			</head>
			<body>
				{/* <SupabaseListener accessToken={session!?.access_token} /> */}
				{/* top navbar */}
				<div className='p-5 text-right font-fira bg-[rgba(0,0,0,0.8)] fixed top-0 w-full z-50'>
					<Link href='/' className='mr-10 main-accent'>
					Home
					</Link>
					<Link href='/about' className='mr-10 main-accent'>
					About
					</Link>
					<Link href='/blog' className='mr-10 main-accent'>
					Blog
					</Link>
					<Link href='/settings' className='mr-8 main-accent'>
						<i className='fa-solid fa-gear'></i>
					</Link>
					{/* {!session && <Link className='mr-4 main-accent' href='/auth'>
						<i className='fa-solid fa-user'></i>
					</Link>} */}
					{/* display round pfp */}
					{/* {session && <Link href='/auth'>
						<img
							className='rounded-full w-8 h-8 inline'
							src={session.user.user_metadata!.avatar_url!}
							alt='avatar'
						/>
					</Link>} */}
				</div>
				{children}
			</body>
		</html>
	);
}
