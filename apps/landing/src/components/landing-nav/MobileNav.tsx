// components/landing-nav/MobileNav.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@fecs/ui/shadcn/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@fecs/ui/shadcn/sheet";
import { LandingNavigationBarRouteItem } from "./config";

export function MobileNav({
  items,
}: {
  items: LandingNavigationBarRouteItem[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open mobile menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col space-y-4 mt-8">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Link href="/login" onClick={() => setOpen(false)}>
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
            </Link>
            <Link href="/registration" onClick={() => setOpen(false)}>
              <Button variant="default" className="w-full">
                Sign Up
              </Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
