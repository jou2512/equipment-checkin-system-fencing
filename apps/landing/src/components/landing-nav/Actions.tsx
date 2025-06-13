// components/landing-nav/Actions.tsx
import Link from "next/link";
import { Button } from "@fecs/ui/shadcn/button";
import { ModeToggle } from "@fecs/ui/components/theme-toggle";

export function Actions() {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <Link
        href="/features"
        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
      >
        Features
      </Link>
          <Link href="/login">
                //TODO - Add the login functionality 
        <Button variant="outline">Sign In</Button>
      </Link>
          <Link href="/registration">
                //TODO - Add the registration functionality
        <Button variant="default">Sign Up</Button>
      </Link>
      <ModeToggle />
    </div>
  );
}
