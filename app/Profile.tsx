'use client';

import { signIn } from 'next-auth/react';
import type { DefaultSession } from 'next-auth';

export default function SignIn({ session }: { session: DefaultSession }) {
	console.log(session);

	if (session) {
		{/* display round pfp */}
		return (
			<button className='mr-4 main-accent inline' onClick={() => signIn('google')}>
				<img className='rounded-full w-8 h-8 inline' src={session?.user?.image as string} referrerPolicy='no-referrer' />
			</button>
		);
	}
	else {
		return (
			<button className='mr-4 main-accent' onClick={() => signIn('google')}>
				<i className='fa-solid fa-user'></i>
			</button>
		);
	}
}
