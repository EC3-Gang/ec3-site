import type { Metadata } from 'next';
import ExcoList from './Exco';

export const metadata: Metadata = {
	title: 'About Us',
};

export default function About() {
	return (
		<div className='flex flex-col items-center min-h-screen pt-36 pb-32 px-10 md:px-60'>
			<main className='flex flex-col items-center w-full flex-1 text-center'>
				<div>
					<h1 className='text-4xl font-bold font-fira'>
						Who are we?
					</h1>
					<p className='mt-3 text-lg font-fira'>
						We are part of IRS (the Infocomm and Robotics Society) in HCI (High School section). We&apos;re a relatively small CCA, with only around 30 members.
					</p>
					<p className='mt-3 text-lg font-fira'>
						Quite a large portion of us are weebs, and we participate in weekly duster throwing competitions as well.
					</p>
				</div>

				<div>
					<h1 className='text-4xl font-bold font-fira mt-16'>
						What do we do?
					</h1>
					<p className='mt-3 text-lg font-fira'>
						We program stuff and mostly work on our own projects during CCA sessions. We also take part in competitions like NOI and Sieberrsec CTF.

						We work on school commissions like the HCI Open House website and Ikan-oh-Ikan as well.
					</p>
				</div>

				<div>
					<h1 className='text-4xl font-bold font-fira mt-16'>
						Why should you join us?
					</h1>
					<p className='mt-3 text-lg font-fira'>
						We&apos;re a pretty small CCA, so you&apos;ll get to know everyone in the CCA pretty well. We&apos;re also pretty chill, and you don&apos;t have to worry about having to get yelled at (most of the time, at least) like in NCC.
					</p>
					<p className='mt-3 text-lg font-fira'>
						You&apos;ll receive high quality training as well, and get to take part in competitions.
						You&apos;ll also have a lot of time working on your own projects and developing your own programming skills.
					</p>
					<p className='mt-3 text-lg font-fira'>
						P.S. Do note that if you display poor behaviour we will have to deport you to NCC/NPCC
					</p>
				</div>

				<div className='w-full'>
					<h1 className='text-4xl font-bold font-fira mt-16'>
						Our CCA timings
					</h1>
					{/* 2 columns */}
					<div className='columns-2 mt-10 w-full'>
						<div>
							<h2 className='text-2xl font-bold font-fira'>
								Wednesday
							</h2>
							<p className='mt-3 text-lg font-fira'>
								3.30pm - 5.30pm
							</p>
						</div>
						<div>
							<h2 className='text-2xl font-bold font-fira'>
								Friday
							</h2>
							<p className='mt-3 text-lg font-fira'>
								2.30pm - 5.30pm
							</p>
						</div>
					</div>
				</div>

				<div className=''>
					<h1 className='text-4xl font-bold font-fira mt-16'>
						Our Exco
					</h1>

					<ExcoList />
				</div>

			</main>
		</div>
	);
}