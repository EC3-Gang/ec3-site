// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	safelist: [

	],
	theme: {
		extend: {
			fontFamily: {
				fira: ['var(--font-fira)', ...defaultTheme.fontFamily.mono],
				lato: ['var(--font-lato)', ...defaultTheme.fontFamily.sans],
			},
			typography: ({ theme }) => ({
				neonGreen: {
					css: {
						'--tw-prose-headings': '#00ff00',
						// hyperlinks
						'--tw-prose-a': '#00ff00',
					},
				},
			}),

		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
};