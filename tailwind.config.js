/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class', 'class'],
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-geist-sans)', 'sans-serif'],
				cursive: ['var(--font-cursive)', 'cursive', 'sans-serif'],
			},
			colors: {
				'big-stone': {
					'50': '#f2f7fc',
					'100': '#e1edf8',
					'200': '#c9e0f4',
					'300': '#a4cdec',
					'400': '#79b3e1',
					'500': '#5a96d7',
					'600': '#457dcb',
					'700': '#3c6ab9',
					'800': '#365797',
					'900': '#304a78',
					'950': '#1d2941',
				},
				// Strict 3-Color Palette
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: '#2563EB',    // Royal Blue Accent

				// Semantic aliases mapped to the same palette
				card: 'var(--card)',
				'card-foreground': 'var(--card-foreground)',
				border: 'var(--border)',
				input: 'var(--input)',

				muted: 'var(--muted)',
				'muted-foreground': 'var(--muted-foreground)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' },
				},
			},
			animation: {
				marquee: 'marquee 25s linear infinite',
				marquee2: 'marquee2 25s linear infinite',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
