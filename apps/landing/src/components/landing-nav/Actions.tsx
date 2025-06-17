"use client";
// components/landing-nav/Actions.tsx
import Link from "next/link";
import { Button } from "@fecs/ui";
import { ModeToggle } from "@fecs/ui/client-only";

export function Actions() {
  return (
    <div className="hidden md:flex items-end space-x-4">
      <Link href="/login">
        {/*TODO - Add the login functionality */}
        <Button variant="outline">Sign In</Button>
      </Link>
      <Link href="/registration">
        {/*TODO - Add the registration functionality */}
        <Button variant="default">Sign Up</Button>
      </Link>
      <ModeToggle />
    </div>
  );
}
