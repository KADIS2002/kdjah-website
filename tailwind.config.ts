import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#030407",
        electric: "#1558c9",
        acid: "#d4ff24",
        cloud: "#ffffff",
        silver: "#a1a1aa",
      },
      fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] },
    },
  },
  plugins: [],
};

export default config;
