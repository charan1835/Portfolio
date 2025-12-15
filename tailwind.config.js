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
			colors: {
				// Strict 3-Color Palette
				background: '#050505', // Deep Void Black
				foreground: '#F5F5F7', // Off-White
				primary: '#2563EB',    // Royal Blue Accent

				// Semantic aliases mapped to the same palette
				card: '#0a0a0a',       // Slightly lighter black for cards
				'card-foreground': '#F5F5F7',
				border: '#262626',     // Subtle border
				input: '#262626',

				muted: '#525252',
				'muted-foreground': '#a3a3a3',
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
