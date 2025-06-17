import { defineConfig } from "tsup"
import { copyFileSync } from "fs"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: {
    resolve: true,
    entry: "src/index.ts",
    only: false,
  },
  tsconfig: "tsconfig.tsup.json",
  clean: true,
  outDir: "dist",
  shims: false,
  onSuccess: async () => {
    // Plattformunabhängiges Kopieren
    try {
      copyFileSync("src/base.css", "dist/base.css")
      console.log("✅ base.css copied successfully")
    } catch (error) {
      console.error("❌ Failed to copy base.css:", error)
    }
  },
})
