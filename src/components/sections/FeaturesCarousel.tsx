// components/features/FeaturesCarousel.tsx
"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import {
  Award,
  Shield,
  BarChart,
  Search,
  Bell,
  Smartphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Real-Time Status Tracking",
    description:
      "Check your equipment status instantly. View real-time updates on your submissions and get immediate notifications when your gear is ready.",
  },
  {
    icon: Shield,
    title: "Equipment Safety First",
    description:
      "Ensure your equipment meets all safety standards. Our system helps maintain compliance and keeps you informed about equipment requirements.",
  },
  {
    icon: BarChart,
    title: "Smart Queue Management",
    description:
      "Skip the long lines. Our intelligent system optimizes check-in times and provides estimated wait times for equipment verification.",
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    description:
      "Stay informed throughout the process. Receive alerts for status changes, equipment approval, or when action is needed.",
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description:
      "Access your equipment status anywhere. View your verification history and manage submissions from any device.",
  },
];

export function FeaturesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="mb-8 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">System Features</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="hidden sm:flex"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className="hidden sm:flex"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex -ml-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-2"
            >
              <Card className="h-full transition-all duration-200 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <feature.icon className="h-5 w-5 text-primary" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Dots */}
      <div className="flex justify-center gap-2 sm:hidden">
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
    </section>
  );
}
