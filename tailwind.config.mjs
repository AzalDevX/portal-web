/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  purple: {
			100: '#F3E8FF',
			200: '#E9D5FF',
		  },
		  yellow: {
			200: '#FEF3C7',
		  },
		  green: {
			100: '#DCFCE7',
			200: '#A7F3D0',
		  },
		  red: {
			200: '#FECDD3',
		  },
		  blue: {
			200: '#BFDBFE',
		  },
		},
		animation: {
		  'bounce-slow': 'bounce 3s infinite',
		},
	  },
	},
	plugins: [],
  }