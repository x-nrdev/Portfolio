/** @type {import('tailwindcss').Config} */
import tailwindConfig from '@tailwindcss/typography'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#0F0505',
				secondary: '#1f0000',
				accent: '#CF1917',
			},
			spacing: {
				'section-gap': '1.6rem',
			}
		},
	},
	plugins: [tailwindConfig],
}
