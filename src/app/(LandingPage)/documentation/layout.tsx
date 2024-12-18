// app/documentation/layout.tsx
import { Metadata } from "next";
import { ScrollArea } from "@/components/ui/scroll-area";
import { docsConfig } from "@/config/documentation-config";
import { DocumentationSidebar } from "@/components/navigation/side-bars/dashboard/documentation-sidebar";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Documentation for the Fencing Equipment Check System",
};

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="border-b bg-background">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8 pl-5">
            <DocumentationSidebar items={docsConfig.sidebarNav} />
          </ScrollArea>
        </aside>
        {children}
      </div>
    </div>
  );
}
