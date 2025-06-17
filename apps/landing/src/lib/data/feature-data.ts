// apps/landing/src/lib/data/feature-data.ts
export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export const featureData: FeatureItem[] = [
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
