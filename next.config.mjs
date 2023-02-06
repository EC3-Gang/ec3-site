// eslint-disable-next-line @typescript-eslint/no-var-requires
import addMdx from '@next/mdx';
import rehypePrism from '@mapbox/rehype-prism';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
	experimental: {
		appDir: true,
		mdxRs: false,
	},
};


export default addMdx({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [
			remarkGfm,
		],
		rehypePlugins: [
			rehypePrism,
		],
	},
})(nextConfig);
