// app/documentation/page.tsx
import { Metadata } from "next";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@fecs/ui";
//FIXME - this import should be in a client-only file, but is needed for the tabs
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@fecs/ui/client-only";
import { Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Documentation for the Fencing Equipment Check System",
};

export default function DocumentationPage() {
  return (
    <div className="container max-w-3xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Documentation
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn how to use the Fencing Equipment Check System.
          </p>
        </div>
      </div>
      <Alert className="my-8">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Quick Start</AlertTitle>
        <AlertDescription>
          Get started with our system in minutes. Follow our step-by-step guide.
        </AlertDescription>
      </Alert>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>What is FECS?</CardTitle>
              <CardDescription>
                A comprehensive system for managing fencing equipment checks.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The Fencing Equipment Check System (FECS) is designed to
                streamline the equipment verification process at fencing
                tournaments.
              </p>
              {/* TODO - Add More content here */}
            </CardContent>
          </Card>
        </TabsContent>
        {/* TODO - Add another Tab contents */}
      </Tabs>
    </div>
  );
}
