import styles from './page.module.css';

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen pt-8 pb-10'>
			<main className='flex flex-col items-center justify-center w-full flex-1 text-center'>

				<h1 className={`text-6xl font-bold font-fira ${styles['neon-green']}`}>
						HCI EC&sup3;
				</h1>
				<p className={`mt-3 text-2xl font-fira main-intro ${styles['neon-green']}`}>
				</p>
			</main>
		</div>
	);
}
