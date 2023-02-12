export default function Credits() {
	return (
		<div className='flex flex-col items-center min-h-screen pt-36 pb-10'>
			<main className='flex flex-col items-center w-full flex-1 text-center'>
				<h1 className='text-4xl font-bold font-fira'>
					Credits
				</h1>
				<p className='mt-3 text-lg font-fira'>
					Made by <a href='https://canaris.is-a.dev' target='_blank' rel='noreferrer'>DET171 (Canaris)</a>
				</p>
				<p className='mt-3 text-lg font-fira'>
					Domain sponsored by the school (we finally didnt pay for something ourselves)
				</p>
			</main>
		</div>
	);
}
