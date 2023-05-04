'use client';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import excoList from './exco.json';


export default function ExcoList() {
	return (
		<div className='mt-10 w-full'>
			{excoList.map((exco) => {
				return (
					<div key={exco.year} className='mt-7 w-full'>
						<Disclosure>
							{({ open }) => (
								<>
									<Disclosure.Button className='text-xl font-bold font-fira select-none cursor-pointer w-full'>
										<ChevronUpIcon
											className={`${
												open ? 'rotate-180 transform' : ''
											} h-5 w-5 main-accent duration-100`}
										/>{exco.year}
									</Disclosure.Button>
									<Transition
										enter='transition duration-100 ease-out'
										enterFrom='transform scale-95 opacity-0'
										enterTo='transform scale-100 opacity-100'
										leave='transition duration-75 ease-out'
										leaveFrom='transform scale-100 opacity-100'
										leaveTo='transform scale-95 opacity-0'
									>
										<Disclosure.Panel>
											<div className='columns-3 mt-5 w-full'>
												<h3 className='text-lg font-bold font-fira'>
												Chairman
												</h3>
												<p className='mt-3 text-base font-fira'>
													{exco.chairman}
												</p>

												<h3 className='text-lg font-bold font-fira mt-5'>
												Vice Chairman
												</h3>
												<p className='mt-3 text-base font-fira'>
													{exco.viceChair}
												</p>

												<h3 className='text-lg font-bold font-fira mt-5'>
												Training Head
												</h3>
												<p className='mt-3 text-base font-fira'>
													{exco.trainingHead}
												</p>
											</div>
										</Disclosure.Panel>
									</Transition>
								</>
							)}
						</Disclosure>
					</div>
				);
			})}
		</div>
	);
}