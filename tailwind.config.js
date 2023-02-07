/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
      fontFamily: {
        'titan': ['Titan One', 'cursive'],
        'poppins': ['Poppins', 'sans-serif']
      }
    },
	},
	plugins: [],
};
