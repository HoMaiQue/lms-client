const plugin = require("tailwindcss/plugin");
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    corePlugins: {
        container: false,
    },
    darkMode: ["class"],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ["var(--font-Poppins)"],
                Josefin: ["var(--font-Josefin)"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            screens: {
                xs: "400px",
            },
            columns: {
                "10xl": "1500px"
            },
            colors: {
                blue: {
                    100: "#4B56D2",
                    200: "#1C82AD",
                    300: "#0D4C92",
                    400: "#13005A",
                },
                yellow: { 100: "#F9F54B", 200: "#FFD124" },
                pink: { 100: "#FF5F9E", 200: "#ed50b4" },
                purple: "#5243aa",
                orange: {
                    100: "#FF9B50",
                    200: "#F6635C",
                    300: "#EC8F5E",
                    400: "#F05941",
                    500: "#BE3144",
                },
            },
        },
    },
    plugins: [
        plugin(function ({
            addComponents,
            theme,
        }: {
            addComponents: any;
            theme: any;
        }) {
            addComponents({
                ".container": {
                    maxWidth: theme("columns.10xl"),
                    marginLeft: "auto",
                    marginRight: "auto",
                    paddingLeft: theme("spacing.4"),
                    paddingRight: theme("spacing.4"),
                },
            });
        }),
    ],
};
export default config;
