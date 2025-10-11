/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'pale-gold': '#FFF9C4',
                'classic-gold': '#FFD700',
                'deep-goldenrod': '#B8860B',
                'burnished-gold': '#5C4421',
            },
        },
    },
    plugins: [],
}
