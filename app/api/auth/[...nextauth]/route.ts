import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
	],
	theme: {
		logo: '/favicon.ico',
		colorScheme: 'dark' as 'dark' | 'auto' | 'light' | undefined,
	},
	callbacks: {
		async session({ session, user, token }: any) {
			return {
				...session,
				provider: token.provider,
			};
		},
		async jwt({ token, account, profile }: any) {
			if (account) {
				token.provider = account.provider;
			}
			return token;
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };