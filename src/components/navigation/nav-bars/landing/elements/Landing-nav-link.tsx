import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      prefetch
      href={href}
      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
    >
      {children}
    </Link>
  );
}
