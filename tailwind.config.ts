import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themeLight: '#EEF5FF',    // Very light blue
        themeLighter: '#B4D4FF',  // Light blue
        themeMedium: '#86B6F6',   // Medium blue
        themeDark: '#176B87',     // Dark blue
      },
      fontFamily: {
        body: ['Ubuntu Mono', 'monospace'], // Font family for paragraphs
        heading: ['Audiowide', 'cursive'],  // Font family for headings
      },
    },
  },
  plugins: [],
};
export default config;
