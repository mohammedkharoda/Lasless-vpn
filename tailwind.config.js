/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'orange-lz': '#F53838',
            'orange-light-lz': '#FFECEC',
            'dark-blue-lz': '#0B132A',
            'white-lz': '#FFFFFF',
            'gray-lz': '#4F5665',
            'pinkish-lz': '#F53855'
        },
        extend: {
            fontFamily: {
                rubik: ["Rubik", "sans-serif"],
            },
        },
    },
    variants: {},
    plugins: [require("@tailwindcss/forms"), require("daisyui")],
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "light",
    },
};