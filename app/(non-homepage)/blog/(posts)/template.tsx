'use client';
import type React from 'react';
import Giscus from '@giscus/react';
import mermaid from 'mermaid';
import { useEffect } from 'react';


export default function PostLayout({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		mermaid.initialize({ theme: 'dark', startOnLoad: false });
		mermaid.init(undefined, 'code.language-mermaid-graph');
	}, []);


	return (
		<div>
			{children}
			<hr className='my-10 border-none' />
			<Giscus
				repo='ec3-gang/ec3-site'
				repoId='R_kgDOI57tfg'
				category='Announcements'
				categoryId='DIC_kwDOI57tfs4CUKDM'
				mapping='pathname'
				strict='0'
				reactionsEnabled='1'
				emitMetadata='0'
				inputPosition='top'
				theme='dark'
				lang='en'
				loading='lazy'
			/>
		</div>
	);
}