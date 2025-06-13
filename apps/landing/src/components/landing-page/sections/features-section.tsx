import { CheckCircle, Swords, Shield } from "lucide-react";

// components/landing-page/features-section.tsx
export function FeaturesSection() {
  const features = [
    {
      name: "Real-time Status Updates",
      description:
        "Track equipment check status in real-time through our dynamic dashboard.",
      icon: CheckCircle,
    },
    {
      name: "Multi-weapon Support",
      description:
        "Comprehensive support for Épée, Foil, and Sabre equipment verification.",
      icon: Swords,
    },
    {
      name: "Secure Check-in Process",
      description:
        "Robust system ensuring accurate tracking and verification of all equipment.",
      icon: Shield,
    },
  ];

  return (
    <div id="features" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Advanced Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to manage equipment checks
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Streamline your tournament operations with our comprehensive
            equipment check management system.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <feature.icon
                    className="h-5 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
