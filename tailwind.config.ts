import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a', // Çok koyu gri/siyah
        card: 'rgba(255, 255, 255, 0.05)', // Glass effect için
        primary: '#14b8a6', // Teal
        secondary: '#a855f7', // Purple
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: ["@tailwindcss/typography", require("@tailwindcss/forms")],
};
export default config;
