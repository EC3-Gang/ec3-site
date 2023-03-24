import { headers, cookies } from 'next/headers';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';


export default () =>
	createServerComponentSupabaseClient({
		headers,
		cookies,
	});