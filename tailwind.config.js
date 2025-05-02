/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#260947",
                secondary: "#ebe1f5",
                light: {
                    100: "#7f4cba",
                    200: "#9e86ba",
                    300: "#5704b8",
                },
                dark: {
                    100: "#2f2140",
                    200: "#271240",
                },
                accent: "#ab72e8",
            },
        },
    },
    plugins: [],
};
