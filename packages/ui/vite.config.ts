import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "."),
    },
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "index.ts"),
        "client-only": resolve(__dirname, "client-only.ts"),
      },
      formats: ["es", "cjs"],
      fileName: (format, entryName) => {
        const ext = format === "es" ? "mjs" : "js"
        return `${entryName}.${ext}`
      },
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        // Wichtig: Alle React-bezogenen Packages externalisieren
        "react/jsx-dev-runtime",
        "use-sync-external-store",
        "use-sync-external-store/shim",
        "scheduler",
      ],
      output: [
        // ESM Output - MUSS echtes ESM sein
        {
          format: "es",
          entryFileNames: "[name].mjs",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
          banner: (chunk) => {
            if (chunk.name === "client-only") {
              return '"use client";'
            }
            return ""
          },
        },
        // CJS Output
        {
          format: "cjs",
          entryFileNames: "[name].js",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
          banner: (chunk) => {
            if (chunk.name === "client-only") {
              return '"use client";'
            }
            return ""
          },
        },
      ],
    },
    cssCodeSplit: false,
    target: "es2020",
    emptyOutDir: false,
    // Wichtig: Sicherstellen, dass ESM wirklich ESM ist
    ssr: false,
  },
  // Wichtig: Optimierungen für bessere Kompatibilität
  optimizeDeps: {
    exclude: ["react", "react-dom"],
  },
})
