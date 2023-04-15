import type React from 'react';
import cp from 'child_process';
import util from 'util';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import fs from 'fs/promises';
import path from 'path';
dayjs.extend(relativeTime);
const exec = util.promisify(cp.exec);


export default async function NonHomepageLayout({ children }: { children: React.ReactNode[] | React.ReactNode }) {
	try {
		// get hash, short hash and date of latest commit
		const [shortHash, hash, date] = (await exec('git log -1 --format="%h%n%H%n%ci"')).stdout.split('\n');

		const year = new Date().getFullYear();
		return (
			<div className='pb-10'>
				{children}
				<p className='mt-12 text-center leading-loose text-xs'>
					&copy; 2022-{year} HCI EC<sup>3</sup>. All rights reserved. <br />
					Made with ❤️, Next.js, and Tailwind CSS •&nbsp;
					<a style={{
						color: 'var(--text-color) !important',
					}} className='hover:underline' target={'_blank'} href={`https://github.com/EC3-Gang/ec3-site/commit/${hash}`} rel='noreferrer'>
						{shortHash}
					</a>&nbsp;
					• Built {dayjs(date).fromNow()}
				</p>

			</div>
		);
	}
	catch (e) {
		// if git is not installed, get hash, short hash and date of latest commit from file
		const [shortHash, hash, date] = (await fs.readFile(
			path.join(process.cwd(), 'app/(non-homepage)/commit-info.txt')
			, 'utf-8')).split('\n');

		const year = new Date().getFullYear();
		return (
			<div className='pb-10'>
				{children}
				<p className='mt-12 text-center leading-loose text-xs'>
					&copy; 2022-{year} HCI EC<sup>3</sup>. All rights reserved. <br />
					Made with ❤️, Next.js, and Tailwind CSS •&nbsp;
					<a style={{
						color: 'var(--text-color) !important',
					}} className='hover:underline' target={'_blank'} href={`https://github.com/EC3-Gang/ec3-site/commit/${hash}`} rel='noreferrer'>
						{shortHash}
					</a>&nbsp;
					• Built {dayjs(date).fromNow()}
				</p>

			</div>
		);
	}
}