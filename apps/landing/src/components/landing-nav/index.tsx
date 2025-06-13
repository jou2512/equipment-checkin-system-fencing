// components/landing-nav/index.tsx
"use client";

import { Brand } from "./Brand";
import { Navigation } from "./Navigation";
import { Actions } from "./Actions";
import { MobileNav } from "./MobileNav";
import { landingConfig } from "./config";

export function LandingNavBar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Brand />
          <div className="hidden md:block">
            <Navigation items={landingConfig.NavBarItems} />
          </div>
          <Actions />
          <MobileNav items={landingConfig.NavBarItems} />
        </div>
      </div>
    </nav>
  );
}
