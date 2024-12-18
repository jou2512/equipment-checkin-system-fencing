// components/landing-page/hero-section.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Swords, CheckCircle } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <div className="inline-flex space-x-6">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/20">
                Latest Version
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-muted-foreground">
                <span>Just shipped v1.0</span>
              </span>
            </div>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
            Fencing Equipment Check System
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Streamline your tournament equipment verification process with our
            advanced check-in system. Designed specifically for fencing
            competitions.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link prefetch href="/admin">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#features" className="text-sm font-semibold leading-6">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="rounded-lg bg-card p-8 shadow-lg">
              {/* Placeholder for equipment check illustration or animation */}
              <div className="h-[350px] w-[550px] flex items-center justify-center">
                <Swords className="h-32 w-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
