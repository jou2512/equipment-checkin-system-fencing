import type { NextConfig } from "next";
import dotenv from 'dotenv'

dotenv.config();

const nextConfig: NextConfig = {
  transpilePackages: ['lucide-react'],
  env: { RESEND_API_KEY: process.env.RESEND_API_KEY },
};

export default nextConfig;
