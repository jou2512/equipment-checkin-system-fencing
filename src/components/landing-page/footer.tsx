// components/landing-page/footer.tsx
export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2 ">
          <a href="/about" className="text-muted-foreground hover:text-primary">
            About
          </a>
          <a
            href="/documentation"
            className="text-muted-foreground hover:text-primary"
          >
            Documentation
          </a>
          <a
            href="/support"
            className="text-muted-foreground hover:text-primary"
          >
            Support
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Fencing Equipment Check System.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
