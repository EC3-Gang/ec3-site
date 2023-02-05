// eslint-disable-next-line @typescript-eslint/no-var-requires
const addMdx = require('@next/mdx');

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
	experimental: {
		appDir: true,
		mdxRs: true,
	},
};

module.exports = addMdx(nextConfig);
