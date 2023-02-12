'use client';
import type React from 'react';
import Giscus from '@giscus/react';
import { useEffect, useState } from 'react';

/*
<script src="https://giscus.app/client.js"
	data-repo="ec3-gang/ec3-site"
	data-repo-id="R_kgDOI57tfg"
	data-category="Announcements"
	data-category-id="DIC_kwDOI57tfs4CUKDM"
	data-mapping="pathname"
	data-strict="0"
	data-reactions-enabled="1"
	data-emit-metadata="0"
	data-input-position="top"
	data-theme="dark"
	data-lang="en"
	data-loading="lazy"
	crossorigin="anonymous"
	async>
</script>
*/

// extremely goofy ahh comment feature
// probably gonna fix sometime in the future when I have more time

export default function Template({ children }: { children: React.ReactNode }) {
	const [pageRoute, setPageRoute] = useState('');

	useEffect(() => {
		// get page route
		const path = window.location.pathname;
		setPageRoute(path);
	}, [pageRoute]);


	return (
		<div>
			{children}
			{pageRoute !== '/blog' && <Giscus
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
			/>}
		</div>
	);
}