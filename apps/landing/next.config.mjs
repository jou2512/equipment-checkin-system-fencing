// apps/landing/next.config.ts
import dotenv from "dotenv";
import createMDX from "@next/mdx";

dotenv.config();

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // Hier definieren Sie die zentrale Komponenten-Datei
    providerImportSource: "@mdx-js/react",
    // ODER für eine benutzerdefinierte Datei:
    // development: false, // für bessere Performance in dev
  },
});

export default withMDX({
  transpilePackages: ["lucide-react"],
  env: { RESEND_API_KEY: process.env.RESEND_API_KEY },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"]
});
