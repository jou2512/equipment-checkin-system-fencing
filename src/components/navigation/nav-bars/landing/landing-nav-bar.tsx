"use client";

import { useState } from "react";
import { Swords, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LandingNavigationBarRouteItems } from "./elements/landing-navigation-bar-route-iItem";
import { landingConfig } from "@/config/landing-navigation";
import { ModeToggle } from "@/components/shared/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuth } from "@/hooks/use-auth";

export function LandingNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {user,} = useAuth()

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Swords className="h-8 w-8 text-primary" />
              <span className="ml-2 text-2xl font-bold">FECS</span>
            </Link>
          </div>

          {/* Navigation Section - Hidden on mobile */}
          <div className="hidden md:block">
            <LandingNavigationBarRouteItems items={landingConfig.NavBarItems} />
          </div>

          {/* Actions Section */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <Link
                prefetch
                href="/features"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Features
              </Link>
              {/* <Link
                prefetch
                href="/documentation"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Documentation
              </Link> */}
              <Link prefetch href="/login">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/registration">
                <Button variant="default">Sign Up</Button>
              </Link>
            </div>
            <ModeToggle />

            {/* Mobile menu button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open mobile menu</span>
                </Button>
              </SheetTrigger>
              <SheetTitle></SheetTitle>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {landingConfig.NavBarItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                  <Link
                    href="/features"
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                  {/* <Link
                    href="/documentation"
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Documentation
                  </Link> */}
                  {user ? (
                    <Link
                      href="/profile"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button variant="outline" className="w-full">
                        Go to Profile
                      </Button>
                    </Link>
                  ) : (
                    <div className="flex flex-row gap-x-3 w-full justify-around pt-3">
                      <Link
                        href="/login"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Button variant="outline" className="w-full">
                          Sign In
                        </Button>
                      </Link>
                      <Link
                        href="/registration"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Button variant="default" className="w-full">
                          Sign Up
                        </Button>
                      </Link>
                    </div>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
