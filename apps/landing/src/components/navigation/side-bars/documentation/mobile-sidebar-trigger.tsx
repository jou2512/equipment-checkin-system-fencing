"use client";

import { Sheet, SheetContent, SheetTrigger } from "@fecs/ui/client-only";
import { Button } from "@fecs/ui";
import { Menu } from "lucide-react";
import { useState } from "react";
import { docsConfig } from "@/config/documentation-config";
import { DocumentationSidebar } from "./documentation-sidebar";

export function MobileSidebarTrigger() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="lg:hidden fixed top-4 right-4 z-50 border"
          aria-label="Open documentation menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-[85%] max-w-xs">
        <DocumentationSidebar items={docsConfig.sidebarNav} />
      </SheetContent>
    </Sheet>
  );
}
