import fs from 'fs/promises';
import path from 'path';
import readingTime from 'reading-time';
import Link from 'next/link';
import matter from 'gray-matter';
import PostList from './PostList';

export interface Post {
	slug: string;
	title: string;
	description: string;
	date: string;
	readingTime: string;
}

export default async function BlogLanding() {
	const files = await fs.readdir(path.join(process.cwd(), 'app/(non-homepage)/blog/(posts)'), { withFileTypes: true });
	const slugs = files.filter(post => !post.isFile()).map(post => post.name);
	const posts: Post[] = [];
	for (const slug of slugs) {
		const postPath = path.join(process.cwd(), 'app/(non-homepage)/blog/(posts)', slug, 'page.mdx');
		const content = await fs.readFile(postPath, 'utf-8');
		const { data }: any = matter(content);
		posts.push({
			slug,
			...data,
			readingTime: readingTime(content).text,
		});
	}

	return (
		<PostList posts={posts} />
	);
}