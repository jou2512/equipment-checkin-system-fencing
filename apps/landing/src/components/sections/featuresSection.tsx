// apps/landing/src/components/sections/featuresSection.tsx
"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@fecs/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@fecs/ui/client-only";
import { CheckCircle } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { featureData, FeatureItem } from "@/lib/data/feature-data";
import { useMediaQuery } from "@/hooks/use-media-query";

interface FeatureCardProps {
  title: string;
  description: string;
  features: string[];
}

function FeatureCard({ title, description, features }: FeatureCardProps) {
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

function MobileCarousel({ features }: { features: FeatureItem[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const updateState = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", updateState);
    updateState(); // initial

    return () => {
      emblaApi.off("select", updateState);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {features.map((feature, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 px-2">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {features.map((_, index) => (
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

function DesktopTabs({ features }: { features: FeatureItem[] }) {
  return (
    <Tabs defaultValue={features[0].id} className="space-y-6 sm:space-y-8">
      <TabsList className="w-full grid grid-cols-3 gap-4">
        {features.map((feature) => (
          <TabsTrigger
            key={feature.id}
            value={feature.id}
            className="text-sm sm:text-base"
          >
            {feature.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {features.map((feature) => (
        <TabsContent key={feature.id} value={feature.id} className="space-y-4">
          <FeatureCard {...feature} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

export function FeaturesSection() {
  const isMobile = useMediaQuery("(max-width: 639px)");

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <h2 className="mb-6 sm:mb-8 lg:mb-12 text-2xl sm:text-3xl font-bold tracking-tight">
        Explore Features
      </h2>
      {isMobile ? (
        <MobileCarousel features={featureData} />
      ) : (
        <DesktopTabs features={featureData} />
      )}
    </section>
  );
}
