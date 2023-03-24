'use client';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const supabase = createClient('https://pwjfsyerrwgtrzgrjnid.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3amZzeWVycndndHJ6Z3JqbmlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk2MzMyMDYsImV4cCI6MTk5NTIwOTIwNn0.yU_UZgEMdFv2DRX4WxGAS0m0CU5MHpO_COX_Fznz3q0');


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