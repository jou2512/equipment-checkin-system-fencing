import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, BarChart, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TeamMember } from "@/lib/types/landingpages";
import { TeamMemberGrid } from "@/components/landing-page/about/team-member-grid";
import { StatisticsCard } from "@/components/cards/statistics-card";

export default function AboutPage() {
  const teamMembers: TeamMember[] = [
    {
      name: "Joel Scheuner",
      role: "Founder",
      image: "/team/joel.jpg",
      bio: "Former competitive fencer and software developer.",
      socialLinks: {
        linkedin: "https://linkedin.com/in/joel-scheuner",
        github: "https://github.com/jou2512",
      },
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 max-w-6xl">
      {/* Hero Section */}
      <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:space-y-0 md:space-x-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            About FECS
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Learn about our mission and the team behind the Fencing Equipment
            Check System.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Our Mission</CardTitle>
          <CardDescription className="text-base md:text-lg">
            Make equipment checks in fencing tournaments easy
          </CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p className="text-base md:text-lg">
            The Fencing Equipment Check System was born from a desire to
            streamline and modernize the equipment verification process in
            fencing tournaments. Our mission is to provide tournament organizers
            and fencers with a reliable, efficient, and user-friendly system for
            managing equipment checks.
          </p>
        </CardContent>
      </Card>

      {/* Key Benefits */}
      <div className="grid gap-4 sm:gap-6 pt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Efficiency",
            description:
              "Streamlined process eliminate wondering if the check is over",
            icon: BarChart,
          },
          {
            title: "Reliability",
            description: "99.9% uptime with real-time status updates",
            icon: Shield,
          },
          // {
          //   title: "Experience",
          //   description: "Used in over 100 international tournaments",
          //   icon: Award,
          // },
          {
            title: "Support",
            description: "Dedicated support team available 24/7",
            icon: Users,
          },
        ].map((benefit, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <benefit.icon className="h-5 w-5" />
                {benefit.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm md:text-base">
              {benefit.description}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Timeline */}
      {/* <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Our Journey</CardTitle>
          <CardDescription className="text-base md:text-lg">
            The evolution of FECS
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 md:space-y-8">
            {[
              {
                year: "2024",
                title: "System Developed",
                description:
                  "Initial release of the Fencing Equipment Check System",
              },
              {
                year: "2024",
                title: "International Adoption",
                description:
                  "Expanded to support multiple languages and international tournaments",
              },
            ].map((entry, index) => (
              <div key={index} className="relative pl-8 pb-6 md:pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-full w-px bg-border">
                  <div className="absolute -left-1 top-2 h-2 w-2 rounded-full bg-primary" />
                </div>
                <div className="space-y-2">
                  <div className="font-bold text-base md:text-lg">
                    {entry.year}
                  </div>
                  <div className="text-lg md:text-xl font-semibold">
                    {entry.title}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {entry.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card> */}

      {/* Team Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Our Team</CardTitle>
          <CardDescription className="text-base md:text-lg">
            Meet the people behind FECS
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TeamMemberGrid
            teamMembers={teamMembers}
            cardClassName="hover:shadow-md hover:border transition-all duration-300"
          />
        </CardContent>
      </Card>

      {/* Statistics Grid */}
      {/* <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: "Tournaments",
            value: "100+",
            description: "Successfully managed",
          },
          {
            label: "Equipment Checks",
            value: "50,000+",
            description: "Processed annually",
          },
          {
            label: "Countries",
            value: "25+",
            description: "Active worldwide",
          },
          {
            label: "User Satisfaction",
            value: "98%",
            description: "Average rating",
          },
        ].map((stat, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold">
                {stat.value}
              </CardTitle>
              <CardDescription className="text-base md:text-lg">
                {stat.label}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div> */}

      {/* Monthly Users Statistics */}
      {/* <div className="mt-8 flex justify-center px-4">
        <StatisticsCard
          stat={{
            label: "Monthly Active Users",
            value: "150,000",
            description:
              "The total number of active users for the month of December.",
            trend: { direction: "up", percentage: 5 },
          }}
        />
      </div> */}

      {/* Contact Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Get in Touch</CardTitle>
          <CardDescription className="text-base md:text-lg">
            Interested in implementing FECS at your tournament?
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <p className="text-center max-w-2xl text-sm md:text-base">
            We're here to help you modernize your tournament's equipment check
            process. Contact us to learn more about how FECS can benefit your
            organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link href="/documentation">View Documentation</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
