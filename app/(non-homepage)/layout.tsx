import type React from 'react';
import cp from 'child_process';
import util from 'util';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import git from 'isomorphic-git';
import fs from 'fs';
dayjs.extend(relativeTime);
const exec = util.promisify(cp.exec);

export default async function NonHomepageLayout({ children }: { children: React.ReactNode[] | React.ReactNode }) {
	const dir = process.cwd();

	try {
		const commitInfo = (await git.log({
			fs,
			dir,
			depth: 1,
		}))[0];


		const year = new Date().getFullYear();
		return (
			<div className='pb-10'>
				{children}
				<p className='mt-12 text-center leading-loose text-xs'>
					&copy; 2022-{year} HCI EC<sup>3</sup>. All rights reserved. <br />
					Made with ❤️, Next.js, and Tailwind CSS •&nbsp;
					<a style={{
						color: 'var(--text-color) !important',
					}} className='hover:underline' target={'_blank'} href={`https://github.com/EC3-Gang/ec3-site/commit/${commitInfo.oid}`} rel='noreferrer'>
						{commitInfo.oid.slice(0, 7)}
					</a>&nbsp;
					{/* • Built {dayjs().fromNow()} */}
				</p>

			</div>
		);
	}
	catch {
		const year = new Date().getFullYear();
		return (
			<div className='pb-10'>
				{children}
				<p className='mt-12 text-center leading-loose text-xs'>
					&copy; 2022-{year} HCI EC<sup>3</sup>. All rights reserved. <br />
					Made with ❤️, Next.js, and Tailwind CSS
				</p>
			</div>
		);
	}
}