// eslint-disable-next-line @typescript-eslint/no-var-requires
import addMdx from '@next/mdx';
import rehypePrism from '@mapbox/rehype-prism';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';

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
			remarkFrontmatter,
			remarkGfm,
		],
		rehypePlugins: [
			rehypePrism,
		],
	},
})(nextConfig);
