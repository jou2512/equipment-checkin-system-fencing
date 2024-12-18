// components/layouts/public-layout.tsx
"use client";
import { Swords } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LandingNavigationBarRouteItems } from "./elements/landing-navigation-bar-route-iItem";
import { landingConfig } from "@/config/landing-navigation";
import { ModeToggle } from "@/components/shared/theme-toggle";


export function LandingNavBar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-2 h-14 px-10 w-full">
        <div className="relative flex flex-row h-16 items-center justify-between">
          {/* Brand Section */}
          <div className="flex items-center justify-start">
            <Link href="/" className="flex items-center space-x-2">
              <Swords className="h-8 w-8 text-primary" />
              <span className="ml-2 text-2xl font-bold">FECS</span>
            </Link>
          </div>
          {/* Navigation Section */}
          <LandingNavigationBarRouteItems items={landingConfig.NavBarItems} />


          {/* Actions Section */}
          <div className="flex items-center space-x-6 justify-end">
            <Link
              prefetch
              href="/features"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              prefetch
              href="/documentation"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Documentation
            </Link>
            <Link prefetch href="/admin">
              <Button variant="outline">Sign In</Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
