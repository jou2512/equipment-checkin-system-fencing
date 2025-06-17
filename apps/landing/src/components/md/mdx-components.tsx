import type { MDXComponents } from "mdx/types";
import { Button } from "@fecs/ui";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Badge,
  Alert,
  AlertDescription,
} from "@fecs/ui";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Swords,
  Shield,
  Users,
  Zap,
  Award,
  Clock,
} from "lucide-react";

// Fencing-spezifische Komponenten für MDX
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Standard HTML-Elemente mit Fencing-Theme
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold tracking-tight text-foreground mb-8 border-b border-primary/20 pb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6 mt-12 flex items-center gap-3">
        <Swords className="h-8 w-8 text-primary" />
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold tracking-tight text-foreground mb-4 mt-8">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <Link
        href={href || "#"}
        className="text-primary hover:text-primary/80 underline underline-offset-4 font-medium"
      >
        {children}
      </Link>
    ),
    img: ({ src, alt, ...props }) => (
      <Image
        src={src || ""}
        alt={alt || ""}
        width={800}
        height={400}
        className="rounded-lg shadow-lg my-8 border"
        {...props}
      />
    ),
    ul: ({ children }) => <ul className="space-y-2 mb-6 ml-6">{children}</ul>,
    li: ({ children }) => (
      <li className="flex items-start gap-2 text-muted-foreground">
        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
        <span>{children}</span>
      </li>
    ),

    // UI-Komponenten verfügbar machen
    Button,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Badge,
    Alert,
    AlertDescription,
    Link,

    // Icons verfügbar machen
    CheckCircle,
    Swords,
    Shield,
    Users,
    Zap,
    Award,
    Clock,

    // Fencing-spezifische MDX-Komponenten
    FeatureCard: ({
      title,
      description,
      icon = "CheckCircle",
      variant = "default",
    }) => {
      // Icon-Mapping
      const iconMap = {
        CheckCircle,
        Clock,
        Shield,
        Zap,
        Award,
        Users,
        Swords,
      };

      const IconComponent = iconMap[icon] || CheckCircle;

      return (
        <Card
          className={`transition-all duration-200 hover:shadow-md ${
            variant === "primary" ? "border-primary bg-primary/5" : ""
          }`}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <IconComponent className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{description}</p>
          </CardContent>
        </Card>
      );
    },

    WeaponSupport: ({ children }) => (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        {["Épée", "Foil", "Sabre"].map((weapon) => (
          <Card
            key={weapon}
            className="text-center hover:shadow-md transition-all"
          >
            <CardHeader>
              <Swords className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle>{weapon}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Complete equipment verification for {weapon.toLowerCase()}{" "}
                competitions
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    ),

    TeamShowcase: ({ children }) => (
      <div className="bg-muted/50 rounded-lg p-8 my-8">
        <div className="text-center mb-8">
          <Users className="h-16 w-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Our Team</h3>
          <p className="text-muted-foreground">
            Passionate fencers and developers working together
          </p>
        </div>
        {children}
      </div>
    ),

    StatCard: ({ number, label, icon = "Award" }) => {
      // Icon-Mapping für StatCard
      const iconMap = {
        CheckCircle,
        Clock,
        Shield,
        Zap,
        Award,
        Users,
        Swords,
      };

      const IconComponent = iconMap[icon] || Award;

      return (
        <div className="text-center p-6 bg-card rounded-lg border">
          <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
          <div className="text-3xl font-bold text-foreground mb-1">
            {number}
          </div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      );
    },

    Timeline: ({ children }) => (
      <div className="space-y-8 my-8">{children}</div>
    ),

    TimelineItem: ({ year, title, description }) => (
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 bg-primary rounded-full"></div>
          <div className="w-px h-full bg-border mt-2"></div>
        </div>
        <div className="pb-8">
          <Badge variant="secondary" className="mb-2">
            {year}
          </Badge>
          <h4 className="text-xl font-semibold mb-2">{title}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    ),

    Callout: ({ children, type = "info" }) => (
      <Alert
        className={`my-6 ${
          type === "warning"
            ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20"
            : type === "success"
              ? "border-green-500 bg-green-50 dark:bg-green-950/20"
              : "border-blue-500 bg-blue-50 dark:bg-blue-950/20"
        }`}
      >
        <div className="flex items-start gap-2">
          {type === "warning" && (
            <Zap className="h-5 w-5 text-yellow-600 mt-0.5" />
          )}
          {type === "success" && (
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
          )}
          {type === "info" && (
            <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
          )}
          <AlertDescription className="text-sm">{children}</AlertDescription>
        </div>
      </Alert>
    ),

    // Überschreiben Sie die übergebenen Komponenten
    ...components,
  };
}
