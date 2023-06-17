/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html'],
    theme: {
        colors: {
            red: {
                soft: 'hsl(0, 36%, 70%)',
                desaturated: 'hsl(0, 93%, 68%)',
                grayish: 'hsl(0, 6%, 24%)',
            },
        },
        fontFamily: {
            josefin: ['Josefin Sans', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
}
