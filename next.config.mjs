// eslint-disable-next-line @typescript-eslint/no-var-requires
import addMdx from '@next/mdx';
import rehypePrism from '@mapbox/rehype-prism';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
	experimental: {
		mdxRs: false,
		typedRoutes: true,
	},
	swcMinify: true,
};


export default addMdx({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [
			remarkMath,
			remarkFrontmatter,
			remarkGfm,
		],
		rehypePlugins: [
			rehypeKatex,
			[rehypePrism, { ignoreMissing: true }],
		],
	},
})(nextConfig);
