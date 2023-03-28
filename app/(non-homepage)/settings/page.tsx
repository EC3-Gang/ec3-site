'use client';
import { useEffect, useState } from 'react';
import colorMap from '../colorMap';


export default function Settings() {
	const [color, setColor] = useState('green');

	// fetch current theme from localstorage
	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme) {
			setColor(theme);
		}
	}, []);


	return (
		<div className='pt-36 text-center font-fira'>
			<h1 className='text-4xl font-bold'>
				Settings
			</h1>
			<p className='text-xl mt-10'>
				Select accent color:
			</p>
			<div className='flex flex-row justify-between mt-6 w-3/5 m-auto'>
				{/* eslint-disable-next-line no-shadow */}
				{Object.keys(colorMap).map((color) => (
					<div
						key={color}
						className={'w-10 h-10 rounded-full m-2 cursor-pointer glow'}
						style={{
							backgroundColor: (colorMap as any)[color].accent,
							boxShadow: `
								0 0 5px ${(colorMap as any)[color].accent},
								0 0 10px ${(colorMap as any)[color].accent},
								0 0 15px ${(colorMap as any)[color].accent}
							`,
						}}
						onClick={() => {
							localStorage.setItem('theme', color);
							setColor(color);
							document.documentElement.style.setProperty('--text-color', (colorMap as any)[color].accent);
							document.documentElement.style.setProperty('--neon-color', (colorMap as any)[color].accent);
						}}
					/>
				))}
			</div>
		</div>
	);
}