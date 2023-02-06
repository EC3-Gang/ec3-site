'use client';
import styles from './page.module.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	return (
		<div className='flex flex-col items-center justify-center min-h-screen pt-8 pb-10'>
			<main className='flex flex-col items-center justify-center w-full flex-1 text-center'>
				<img data-aos='fade-down' src='/favicon.ico' alt='EC3' className='w-1/5' />
				<h1 data-aos='fade-right' className={'text-6xl font-bold font-fira neon-green'}>
						HCI EC&sup3;
				</h1>
				<p data-aos='fade-left' className={'mt-3 text-2xl font-fira main-intro neon-green'}>
				</p>
			</main>
		</div>
	);
}
