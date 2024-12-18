// app/page.tsx
import { HeroSection } from "@/components/landing-page/hero-section";
import { FeaturesSection } from "@/components/landing-page/features-section";
import { WorkflowSection } from "@/components/landing-page/workflow-section";
import { Footer } from "@/components/landing-page/footer";
import { Swords, Link } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="min-h-screen bg-background">

      <main>
        <HeroSection />
        <FeaturesSection />
        <WorkflowSection />
      </main>

      <Footer />
    </div>
  );
}
