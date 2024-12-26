// app/layout.tsx
import { PublicLayout } from "@/components/layouts/public-layout";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function LandingPageRootLayout({ children }: RootLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <PublicLayout>{children}</PublicLayout>
    </div>
  );
}
