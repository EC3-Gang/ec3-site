import type React from 'react';
import cp from 'child_process';
import util from 'util';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
const exec = util.promisify(cp.exec);

export default async function NonHomepageLayout({ children }: { children: React.ReactNode[] | React.ReactNode }) {
	// get both short and long commit hash and commit date
	const [shortHash, hash, date] = (await Promise.all([
		exec('git rev-parse --short HEAD'),
		exec('git rev-parse HEAD'),
		exec('git log -1 --format=%cd --date=short'),
	])).map(str => str.stdout.trim());


	const year = new Date().getFullYear();
	return (
		<div className='pb-10'>
			{children}
			<p className='mt-12 text-center leading-loose text-xs'>
				&copy; 2022-{year} HCI EC<sup>3</sup>. All rights reserved. <br />
				Made with ❤️, Next.js, and Tailwind CSS •&nbsp;
				<a style={{
					color: 'var(--text-color) !important',
				}} className='hover:underline' target={'_blank'} href={`https://github.com/EC3-Gang/ec3-site/commit/${hash}`} rel='noreferrer'>{shortHash}</a> •&nbsp;
				{/* show something like built 5 days ago */}
				Built {dayjs(date).fromNow()}
			</p>

		</div>
	);
}