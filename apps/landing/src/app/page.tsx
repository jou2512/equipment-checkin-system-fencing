// apps/landing/src/app/page.tsx
import { HeroSection } from "@/components/landing-page/sections/hero-section";
import { FeaturesSection } from "@/components/landing-page/sections/features-section";
import { WorkflowSection } from "@/components/landing-page/sections/workflow-section";
import { Footer } from "@/components/landing-page/sections/footer";


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
