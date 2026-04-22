import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#4DA6D9",
          dark: "#1A6B9A",
          coral: "#E8735A",
          text: "#1A2533",
          bgLight: "#F4F8FC",
        },
      },
    },
  },
  plugins: [],
};
export default config;
