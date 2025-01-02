"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

const featureData = [
  {
    id: "equipment",
    title: "Equipment Management",
    description: "Comprehensive tools for managing equipment verification.",
    features: [
      "Automated tracking system",
      "QR code integration",
      "Equipment history logging",
      "Customizable which items to Check",
    ],
  },
  {
    id: "workflow",
    title: "Workflow Optimization",
    description: "Streamline your equipment check process.",
    features: [
      "Customizable workflows",
      "Role-based access control",
      "Status tracking",
      "Automated notifications",
    ],
  },
  {
    id: "reporting",
    title: "Reporting & Analytics",
    description: "Gain insights into your operations.",
    features: [
      "Real-time analytics",
      "Custom report generation",
      "Performance metrics",
    ],
  },
];

function FeatureCard({ title, description, features }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">{title}</CardTitle>
        <CardDescription className="text-sm sm:text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm sm:text-base">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function MobileCarousel({ features }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    });

    // Cleanup
    return () => {
      if (emblaApi) emblaApi.destroy();
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {featureData.map((feature, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <div className="px-2">
                <FeatureCard {...feature} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {featureData.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors duration-200 ${
              index === selectedIndex ? "bg-primary" : "bg-primary/30"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function DesktopTabs() {
  return (
    <Tabs defaultValue="equipment" className="space-y-6 sm:space-y-8">
      <TabsList className="w-full grid grid-cols-3 gap-4">
        {featureData.map((feature) => (
          <TabsTrigger
            key={feature.id}
            value={feature.id}
            className="text-sm sm:text-base"
          >
            {feature.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {featureData.map((feature) => (
        <TabsContent key={feature.id} value={feature.id} className="space-y-4">
          <FeatureCard {...feature} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

export function FeaturesSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <h2 className="mb-6 sm:mb-8 lg:mb-12 text-2xl sm:text-3xl font-bold tracking-tight">
        Explore Features
      </h2>
      {isMobile ? <MobileCarousel features={featureData} /> : <DesktopTabs />}
    </section>
  );
}
