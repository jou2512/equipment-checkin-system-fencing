// components/landing-page/workflow-section.tsx
export function WorkflowSection() {
  const steps = [
    {
      id: "01",
      name: "Equipment Submission",
      description:
        "Fencers submit their equipment at the check-in desk with a unique tracking number.",
    },
    {
      id: "02",
      name: "Verification Process",
      description:
        "Equipment undergoes thorough inspection by qualified personnel.",
    },
    {
      id: "03",
      name: "Status Updates",
      description:
        "Real-time status updates available through web interface and display boards.",
    },
    {
      id: "04",
      name: "Equipment Pickup",
      description:
        "Verified equipment can be collected using the assigned tracking number.",
    },
  ];

  return (
    <div className="bg-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Streamlined Process
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our system ensures a smooth and efficient equipment check process
            from submission to pickup.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2">
            {steps.map((step) => (
              <div key={step.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <span className="text-sm font-bold text-primary-foreground">
                      {step.id}
                    </span>
                  </div>
                  {step.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {step.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
