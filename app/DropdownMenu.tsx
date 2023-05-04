'use client';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import type React from 'react';
import Link from 'next/link';


export default function DropdownMenu() {
	return (
		<Menu>
			<Menu.Button><span className='hover:opacity-80'>More <i className='fa-light fa-chevron-down main-accent'></i></span></Menu.Button>
			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items className='block origin-top-right z-10 absolute right-20 mt-4 focus:outline-none'>
					<Menu.Item>
						{({ active }) => (
							<Link
								className={`block pb-3 ${
									active ? 'text-blue-500' : 'main-accent'
								}`}
								href='/settings'
							>
								<i className='fa-solid fa-cog mr-2'></i>Settings
							</Link>
						)}
					</Menu.Item>
					<Menu.Item>
						{({ active }) => (
							<a
								className={`block ${
									active ? 'text-blue-500' : 'main-accent'
								}`}
								href='https://www.instagram.com/hwachonginfocomm/'
							>
								<i className='fa-brands fa-instagram mr-2'></i>Instagram
							</a>
						)}
					</Menu.Item>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}