'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import supabase from '../utils/supabase-browser';


export default function SupabaseListener({ accessToken }: { accessToken: string }) {
	const router = useRouter();

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const { data: subscription } = supabase.auth.onAuthStateChange((event: any, session: any) => {
			if (session?.access_token !== accessToken) {
				router.refresh();
			}
		});

		return () => subscription.subscription.unsubscribe();
	}, [accessToken]);

	return null;
}