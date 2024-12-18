// app/features/page.tsx
import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Gauge,
  Shield,
  Swords,
  Users,
  Zap,
  CheckCircle,
  BellRing,
  BarChart,
  Smartphone,
  Globe,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features | Fencing Equipment Check System",
  description:
    "Comprehensive feature overview of the Fencing Equipment Check System",
};

export default function FeaturesPage() {
  return (
    <div className="container py-10 mx-auto">
      {/* Hero Section */}
      <section className="relative pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4" variant="secondary">
            Features
          </Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Everything You Need for Equipment Management
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover how our comprehensive system streamlines equipment checks
            and enhances tournament operations.
          </p>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-16">
        <h2 className="mb-12 text-3xl font-bold tracking-tight">
          Core Features
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Real-time Tracking",
              description:
                "Monitor equipment check status in real-time with instant updates.",
              icon: Gauge,
            },
            {
              title: "Multi-weapon Support",
              description:
                "Complete support for Épée, Foil, and Sabre equipment verification.",
              icon: Swords,
            },
            {
              title: "Secure Process",
              description:
                "End-to-end security for all equipment tracking and verification.",
              icon: Shield,
            },
            {
              title: "Team Management",
              description: "Efficiently manage check-in staff and assignments.",
              icon: Users,
            },
            {
              title: "Performance Analytics",
              description:
                "Detailed insights into check-in operations and efficiency.",
              icon: BarChart,
            },
            {
              title: "Instant Notifications",
              description:
                "Automated alerts for status changes and important updates.",
              icon: BellRing,
            },
          ].map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <feature.icon className="h-6 w-6 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Interactive Feature Tabs */}
      <section className="py-16">
        <h2 className="mb-12 text-3xl font-bold tracking-tight">
          Explore Features
        </h2>
        <Tabs defaultValue="equipment" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="equipment">Equipment Management</TabsTrigger>
            <TabsTrigger value="workflow">Workflow Optimization</TabsTrigger>
            <TabsTrigger value="reporting">Reporting & Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="equipment" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Equipment Management</CardTitle>
                <CardDescription>
                  Comprehensive tools for managing equipment verification.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    "Automated tracking system",
                    "QR code integration",
                    "Equipment history logging",
                    "Customizable check parameters",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="workflow" className="space-y-4">
            {/* Similar structure for workflow tab */}
          </TabsContent>
          <TabsContent value="reporting" className="space-y-4">
            {/* Similar structure for reporting tab */}
          </TabsContent>
        </Tabs>
      </section>

      {/* Integration Section */}
      <section className="py-16">
        <div className="rounded-lg bg-muted p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight">
                Seamless Integration
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Connect with your existing tournament management systems and
                enhance your operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>API Integration Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <span>Mobile-ready Interface</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Real-time Data Sync</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              {/* Placeholder for integration diagram or illustration */}
              <div className="h-64 w-64 rounded-full bg-primary/10 flex items-center justify-center">
                <Swords className="h-24 w-24 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">
          Ready to Streamline Your Tournament?
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Get started with our comprehensive equipment check system today.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/documentation">
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </Link>
          <Link href="/admin">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
