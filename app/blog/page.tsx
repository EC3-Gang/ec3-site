import fs from 'fs/promises';
import path from 'path';
import readingTime from 'reading-time';
import Link from 'next/link';
import matter from 'gray-matter';

export default async function BlogLanding() {
	const files = await fs.readdir(path.join(process.cwd(), 'app/blog'), { withFileTypes: true });
	const slugs = files.filter(post => !post.isFile()).map(post => post.name);
	const posts: {
		slug: string;
		title: string;
		description: string;
		date: string;
		readingTime: string;
	}[] = [];
	for (const slug of slugs) {
		const postPath = path.join(process.cwd(), 'app/blog', slug, 'page.mdx');
		const content = await fs.readFile(postPath, 'utf-8');
		const { data }: any = matter(content);
		posts.push({
			slug,
			...data,
			readingTime: readingTime(content).text,
		});
	}

	return (
		<div className='flex flex-col items-center min-h-screen not-prose'>
			<main className='flex flex-col items-center w-full flex-1 text-center'>
				<h1 className='text-4xl font-bold font-fira'>
					Blog
				</h1>
				<div className='flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full'>
					{posts
						.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
						.map(post => (
							<Link key={post.slug} href={`/blog/${post.slug}`} className='p-6 mt-6 text-left w-full border-b-2 border-gray-700'>
								<div className='main-accent'>
									<h3 className='text-2xl font-bold'>{post.title}</h3>
									<p className='mt-2 text-sm'>{post.description}</p>
									<p className='text-sm'>{post.readingTime}</p>
								</div>
							</Link>
						))}
				</div>

			</main>
		</div>
	);
}