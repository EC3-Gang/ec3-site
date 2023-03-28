'use client';

import { signIn } from 'next-auth/react';
import type { DefaultSession } from 'next-auth';
import Link from 'next/link';

export default function Profile({ session }: { session: DefaultSession }) {
	if (session) {
		{/* display round pfp */}
		return (
			<Link href='/profile' className='main-accent inline'>
				<img className='rounded-full w-8 h-8 inline' src={session?.user?.image as string} referrerPolicy='no-referrer' />
			</Link>
		);
	}
	else {
		return (
			<button className='main-accent' onClick={() => signIn()}>
				<i className='fa-solid fa-user'></i>
			</button>
		);
	}
}
