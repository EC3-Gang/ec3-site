'use client';

import excoList from './exco.json';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

export default function ExcoList() {
	return (
		<Accordion allowMultiple={true} className='mt-10' transition transitionTimeout={200} style={{
			transition: 'height 0.2s ease-in-out',
		}}>
			{excoList.map((exco) => (
				<AccordionItem key={exco.year} className='mt-7' header={
					<div className='text-2xl font-bold font-fira select-none'>
						{exco.year}
					</div>
				}>

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

				</AccordionItem>
			))}
		</Accordion>
	);
}