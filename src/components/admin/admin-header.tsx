// components/admin/admin-header.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Swords } from "lucide-react";
import Link from "next/link";
import { NavUser } from "@/components/navigation/nav-user";
import { ModeToggle } from "@/components/shared/theme-toggle";

export function AdminHeader() {
  return (
    <div className="sticky top-0 z-50 flex h-14 items-center justify-between border-b px-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link href="/admin" className="flex items-center space-x-2">
        <Swords className="h-6 w-6" />
        <span className="font-bold">FECS Admin</span>
      </Link>

      <div className="flex items-center gap-2">
        <ModeToggle />
        <NavUser user={{
          name: "joel Scheuner",
          avatar: "",
          email: "joel22@gmx.ch"
        }} />
      </div>
    </div>
  );
}
