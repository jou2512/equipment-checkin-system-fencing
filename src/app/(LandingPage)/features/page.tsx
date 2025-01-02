import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Gauge,
  Swords,
  Users,
  Zap,
  BellRing,
  BarChart,
  Smartphone,
  Globe,
} from "lucide-react";
import Link from "next/link";
import {FeaturesSection} from "@/components/sections/featuresSection";

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      {/* Hero Section */}
      <section className="relative pb-10 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-3xl text-center px-4">
          <Badge className="mb-4" variant="secondary">
            Features
          </Badge>
          <h1 className="mb-4 text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight">
            Everything You Need for Equipment Management
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how our comprehensive system streamlines equipment checks
            and enhances tournament operations.
          </p>
        </div>
      </section>
      {/* Core Features Grid */}
      <section className="py-8 sm:py-12 lg:py-16">
        <h2 className="mb-6 sm:mb-8 lg:mb-12 text-2xl sm:text-3xl font-bold tracking-tight">
          Core Features
        </h2>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
              title: "Team Management",
              description: "Efficiently manage check-in staff.",
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
            <Card
              key={index}
              className="transition-all duration-200 hover:shadow-md"
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                  <CardTitle className="text-lg sm:text-xl">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Interactive Feature Tabs */}
      <FeaturesSection />

      {/* Integration Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="rounded-lg bg-muted p-6 sm:p-8">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Seamless Integration
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Connect with your existing tournament management systems and
                enhance your operations.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Globe, text: "API Integration Support (up on request)" },
                  { icon: Smartphone, text: "Mobile-ready Interface" },
                  { icon: Zap, text: "Real-time Data Sync" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-primary/10 flex items-center justify-center">
                <Swords className="h-16 w-16 sm:h-24 sm:w-24 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 text-center">
        <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight">
          Ready to Streamline Your Tournament?
        </h2>
        <p className="mb-6 sm:mb-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Get started with our comprehensive equipment check system today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* <Link href="/documentation" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View Documentation
            </Button>
          </Link> */}
          <Link href="/registration" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
