/** @type {import('tailwindcss').Config} */
import tailwindConfig from '@tailwindcss/typography'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#0D0821',
				secondary: '#281F4C',
				accent: '#BAA8FF',
			},
			spacing: {
				'section-gap': '2.4rem',
			},
			transitionProperty: {
				backgroundColor: 'background-color',
				opacity: 'opacity',
			},
			transitionDuration: {
				custom: '300ms',
			},
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'],
				nunitoBold: ['Nunito Bold', 'sans-serif'],
			},
			gridTemplateColumns: {
				'header': '2fr 1fr',
			},
		},
	},
	plugins: [tailwindConfig],
}
