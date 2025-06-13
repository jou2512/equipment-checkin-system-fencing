// apps/landing/next.config.ts
import dotenv from "dotenv";
import createMDX from "@next/mdx";

dotenv.config();

const withMDX = createMDX({
  extension: /\.mdx?$/
});

export default withMDX({
  transpilePackages: ["lucide-react"],
  env: { RESEND_API_KEY: process.env.RESEND_API_KEY },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"]
});
