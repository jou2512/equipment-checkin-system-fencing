// app/layout.tsx

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardRootLayout({ children }: RootLayoutProps) {
  return <div>{children}</div>;
}
