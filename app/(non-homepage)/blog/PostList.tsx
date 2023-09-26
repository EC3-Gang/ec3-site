'use client';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import type { Post } from './page';
import Link from 'next/link';
import { useState, useRef } from 'react';
import Fuse from 'fuse.js';
import { Route } from 'next';

export default function PostList({ posts }: {
	posts: Post[]
}) {
	const [searchTerm, setSearchTerm] = useState('');
	const fuse = new Fuse(posts, {
		keys: ['title', 'description'],
		includeScore: true,
		threshold: 0.6,
	});

	const inputRef = useRef<HTMLInputElement>(null);

	dayjs.extend(customParseFormat);

	const formatDate = (dateStr: string) => {
		const date = dayjs(dateStr, ['DD/M/YYYY', 'DD/MM/YYYY', 'D/M/YYYY', 'D/MM/YYYY']);
		return date.format('MMMM D, YYYY');
	};


	return (
		<div className='not-prose'>
			<main className='w-full text-center'>
				<h1 className='text-4xl font-bold font-fira'>
					Blog
				</h1>

				{/* add a search bar that originally displays a search icon but expands into a search bar when clicked */}
				<div className='table box-border items-center justify-around mx-auto mt-6 focus-within:border-b-2 border-[var(--neon-color)] w-1 focus-within:w-full duration-300 h-10'>
					<div className='table-cell'><button><i className='fas fa-search'></i></button></div>
					<input
						ref={inputRef}
						value={searchTerm}
						onChange={e => {
							console.log(fuse.search(e.target.value));
							return setSearchTerm(e.target.value);
						}}
						type='text'
						className='w-full p-1 pl-0 bg-black focus:outline-none font-fira'
						placeholder='Search...'
					/>
				</div>

				<div className='flex flex-wrap items-center justify-around mt-6'>
					{(searchTerm.length
						? (fuse.search(searchTerm).map(result => result.item))
						: posts)
						.sort((a, b) => {
							// sort using dayjs
							const dateA = dayjs(a.date, ['DD/M/YYYY', 'DD/MM/YYYY', 'D/M/YYYY', 'D/MM/YYYY']);
							const dateB = dayjs(b.date, ['DD/M/YYYY', 'DD/MM/YYYY', 'D/M/YYYY', 'D/MM/YYYY']);
							return dateB.diff(dateA);
						})
						.map(post => (
							<Link key={post.slug} href={(`/blog/${post.slug}`) as Route} className='p-6 font-fira text-left w-full border-b-[1px] border-[var(--neon-color)]'>
								<div className='main-accent'>
									<h3 className='text-2xl font-bold'>{post.title}</h3>
									<p className='mt-2 text-sm'>{post.description}</p>
									<p className='mt-1 text-sm'>{formatDate(post.date)}</p>
									<p className='text-sm'>{post.readingTime}</p>
								</div>
							</Link>
						))}
				</div>

			</main>
		</div>
	);
}