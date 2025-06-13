import { baseConfig } from "@fecs/tailwind-config";
import type { Config } from "tailwindcss";

const config: Config = {
  ...baseConfig,
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme?.extend,
      colors: {
        ...baseConfig.theme?.extend?.colors,
        brand: "#ff00aa" // App-spezifisch
      }
    }
  }
};

export default config;
