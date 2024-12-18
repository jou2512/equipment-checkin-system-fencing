// components/layouts/public-layout.tsx
"use client";

import { Swords } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LandingNavBar } from "../navigation/nav-bars/landing/landing-nav-bar";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      <header>
        <LandingNavBar />
      </header>
      <main className="pt-14 flex-1">{children}</main>
    </>
  );
}
