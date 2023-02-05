// eslint-disable-next-line @typescript-eslint/no-var-requires
import addMdx from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
	experimental: {
		appDir: true,
		mdxRs: true,
	},
};

addMdx(nextConfig);

export default nextConfig;
