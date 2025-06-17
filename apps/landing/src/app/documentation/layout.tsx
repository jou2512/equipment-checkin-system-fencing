// app/documentation/layout.tsx
import { Metadata } from "next";
//FIXME - this import should be in a client-only file, but is needed for the sidebar
import { ScrollArea } from "@fecs/ui/client-only";
import { docsConfig } from "@/config/documentation-config";
import { DocumentationSidebar } from "@/components/navigation/side-bars/documentation/documentation-sidebar";
import { MobileSidebarTrigger } from "@/components/navigation/side-bars/documentation/mobile-sidebar-trigger";

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
      {/* Mobile Trigger Button */}
      <MobileSidebarTrigger />

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        {/* Desktop Sidebar */}
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8 pl-5">
            <DocumentationSidebar items={docsConfig.sidebarNav} />
          </ScrollArea>
        </aside>

        {/* Content */}
        {children}
      </div>
    </div>
  );
}
