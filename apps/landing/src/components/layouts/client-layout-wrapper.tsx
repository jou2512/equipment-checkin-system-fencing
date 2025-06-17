"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const PublicLayout = dynamic(
  () => import("./public-layout").then((mod) => mod.PublicLayout),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    ),
  }
);

export function ClientLayoutWrapper({ children }: { children: ReactNode }) {
  return <PublicLayout>{children}</PublicLayout>;
}
