// app/about/page.tsx
import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Award,
  BarChart,
  Github,
  Linkedin,
  Shield,
  Twitter,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SiGithub, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";
import { TeamMember } from "@/lib/types/landingpages";
import { TeamMemberGrid } from "@/components/landing-page/about/team-member-grid";
import { StatisticsCard } from "@/components/cards/statistics-card";

export const metadata: Metadata = {
  title: "About",
  description: "About the Fencing Equipment Check System",
};

export default function AboutPage() {
  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      image: "/team/sarah.jpg",
      bio: "Former competitive fencer with 10+ years of software development experience.",
      socialLinks: {
        twitter: "https://twitter.com/sarahchen",
        linkedin: "https://linkedin.com/in/sarahchen",
        github: "https://github.com/sarahchen",
      },
    },
    {
      name: "Marcus Rodriguez",
      role: "UX Designer",
      image: "/team/marcus.jpg",
      bio: "Specializes in creating intuitive user experiences for sports technology.",
      socialLinks: {
        twitter: "https://twitter.com/marcusrodriguez",
        linkedin: "https://linkedin.com/in/marcusrodriguez",
        github: "https://github.com/marcusrodriguez",
      },
    },
    {
      name: "Elena Popov",
      role: "Technical Lead",
      image: "/team/elena.jpg",
      bio: "International referee and systems architect with 15+ years experience.",
      socialLinks: {
        twitter: "https://twitter.com/elenapopov",
        linkedin: "https://linkedin.com/in/elenapopov",
        github: "https://github.com/elenapopov",
      },
    },
  ];
  return (
    <div className="mx-auto container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            About FECS
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn about our mission and the team behind the Fencing Equipment
            Check System.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
          <CardDescription>
            Revolutionizing equipment checks in fencing tournaments
          </CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert">
          <p>
            The Fencing Equipment Check System was born from a desire to
            streamline and modernize the equipment verification process in
            fencing tournaments. Our mission is to provide tournament
            organizers, referees, and fencers with a reliable, efficient, and
            user-friendly system for managing equipment checks.
          </p>
        </CardContent>
      </Card>

      {/* Key Benefits */}
      <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Efficiency",
            description: "Streamlined process reducing wait times by 60%",
            icon: BarChart,
          },
          {
            title: "Reliability",
            description: "99.9% uptime with real-time status updates",
            icon: Shield,
          },
          {
            title: "Experience",
            description: "Used in over 100 international tournaments",
            icon: Award,
          },
          {
            title: "Support",
            description: "Dedicated support team available 24/7",
            icon: Users,
          },
        ].map((benefit, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <benefit.icon className="h-5 w-5" />
                {benefit.title}
              </CardTitle>
            </CardHeader>
            <CardContent>{benefit.description}</CardContent>
          </Card>
        ))}
      </div>
      {/* Timeline */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Our Journey</CardTitle>
          <CardDescription>The evolution of FECS</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {[
              {
                year: "2023",
                title: "System Launch",
                description:
                  "Initial release of the Fencing Equipment Check System",
              },
              {
                year: "2024",
                title: "International Adoption",
                description:
                  "Expanded to support multiple languages and international tournaments",
              },
              // Add more timeline entries as needed
            ].map((entry, index) => (
              <div key={index} className="relative pl-8 pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-full w-px bg-border">
                  <div className="absolute -left-1 top-2 h-2 w-2 rounded-full bg-primary" />
                </div>
                <div className="space-y-2">
                  <div className="font-bold">{entry.year}</div>
                  <div className="text-lg font-semibold">{entry.title}</div>
                  <div className="text-muted-foreground">
                    {entry.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Team Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Our Team</CardTitle>
          <CardDescription>Meet the people behind FECS</CardDescription>
        </CardHeader>
        <CardContent>
          <TeamMemberGrid
            teamMembers={teamMembers}
            cardClassName="hover:shadow-md hover:border transition-all duration-300"
          />
        </CardContent>
      </Card>

      {/* Statistics Section */}
      <div className="mt-8 grid gap-6 md:grid-cols-4">
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
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-3xl font-bold">{stat.value}</CardTitle>
              <CardDescription>{stat.label}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-7 flex justify-center">
        <StatisticsCard
          stat={{
            label: "Monthly Active Users",
            value: "150,000",
            description:
              "The total number of active users for the month of December.",
            trend: { direction: "up", percentage: 5 },
          }}
        />
      </div>

      {/* Contact Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>
            Interested in implementing FECS at your tournament?
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <p className="text-center max-w-2xl">
            We're here to help you modernize your tournament's equipment check
            process. Contact us to learn more about how FECS can benefit your
            organization.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/documentation">View Documentation</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
