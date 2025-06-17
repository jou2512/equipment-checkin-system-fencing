import base from "@fecs/tailwind-config";
import type { Config } from "tailwindcss";

const config: Config = {
  ...base,
  content: ["./src/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./shadcn/**/*.{ts,tsx}", "./**/*.{ts,tsx}"],
  plugins: [require("tailwindcss-animate")]
};

export default config;
