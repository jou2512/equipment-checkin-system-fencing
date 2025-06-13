import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./**/*.{ts,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
