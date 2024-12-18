import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/shared/theme-toggle";
import { NavLink } from "../elements/Landing-nav-link";

export function ActionsSection() {
  return (
    <div className="flex items-center space-x-6 justify-end">
      <NavLink href="/features">Features</NavLink>
      <NavLink href="/documentation">Documentation</NavLink>
      <NavLink href="/admin">
        <Button variant="outline">Sign In</Button>
      </NavLink>
      <ModeToggle />
    </div>
  );
}
