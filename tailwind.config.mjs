/** @type {import('tailwindcss').Config} */
import tailwindConfig from '@tailwindcss/typography'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#0D0821',
				secondary: '#1C1437',
				accent: '#9F85FF',
			},
			spacing: {
				'section-gap': '2.4rem',
			},
			transitionDuration: {
				custom: '300ms',
			},
		},
	},
	plugins: [tailwindConfig],
}
