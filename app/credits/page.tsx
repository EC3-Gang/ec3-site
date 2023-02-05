export default function About() {
	return (
		<div className='flex flex-col items-center min-h-screen pt-36 pb-10'>
			<main className='flex flex-col items-center w-full flex-1 text-center'>
				<h1 className='text-4xl font-bold font-fira neon-green'>
					Credits
				</h1>
				<p className='mt-3 text-lg font-fira neon-green'>
					Made by <a href='https://github.com/DET171' target='_blank' rel='noreferrer'>DET171 (Canaris)</a>
				</p>
				<p className='mt-3 text-lg font-fira neon-green'>
					Domain sponsored by <a href='https://www.instagram.com/monkey_gayming/' target='_blank' rel='noreferrer'>monkey_gayming</a>
				</p>
			</main>
		</div>
	);
}