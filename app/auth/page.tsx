'use client';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default function App() {
	return (
		<div className='mt-36 w-2/5 m-auto'>
			<Auth
				supabaseClient={supabase}
				appearance={{ theme: ThemeSupa }}
				providers={['google']}
				theme='dark'
			/>
		</div>
	);
}