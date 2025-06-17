import base from "@fecs/tailwind-config";
import type { Config } from "tailwindcss";

const config: Config = {
  ...base,
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/**/*.{ts,tsx}"
  ]
};

export default config;
