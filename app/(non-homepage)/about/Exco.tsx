'use client';

import excoList from './exco.json';


export default function ExcoList() {
	return (
		<div className='mt-10 w-full'>
			{excoList.map((exco) => {
				return (
					<details key={exco.year} className='mt-7 w-full'>
						<summary className='text-2xl font-bold font-fira select-none cursor-pointer w-full'>
							{exco.year}
						</summary>

						<div className='columns-3 mt-5 w-full'>
							<h3 className='text-xl font-bold font-fira'>
								Chairman
							</h3>
							<p className='mt-3 text-lg font-fira'>
								{exco.chairman}
							</p>

							<h3 className='text-xl font-bold font-fira mt-5'>
								Vice Chairman
							</h3>
							<p className='mt-3 text-lg font-fira'>
								{exco.viceChair}
							</p>

							<h3 className='text-xl font-bold font-fira mt-5'>
								Training Head
							</h3>
							<p className='mt-3 text-lg font-fira'>
								{exco.trainingHead}
							</p>
						</div>

					</details>
				);
			})}
		</div>
	);
}