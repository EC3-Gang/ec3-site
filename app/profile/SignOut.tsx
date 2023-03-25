'use client';

import { signOut } from 'next-auth/react';


// wrapper component for sign out button
// inherits all props from parent
export default function SignOut(props: any) {
	return (
		<button {...props} onClick={() => {
			signOut();
		}}>
			Sign Out
		</button>
	);
}