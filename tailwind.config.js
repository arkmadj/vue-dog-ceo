/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				titan: ["Titan One", "cursive"],
				poppins: ["Poppins", "sans-serif"],
				unbounded: ["Unbounded", "cursive"],
			},
			keyframes: {
        'slide-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
				}
			},
			animation: {
        'slide-in': 'slide-in 1s ease 0s 1 normal forwards',
        'slide-in-delay': 'slide-in 1s ease 0.3s 1 normal forwards',
        // 'spin-slow': 'spin 1s linear infinite',
			}
		},
	},
	plugins: [],
};
