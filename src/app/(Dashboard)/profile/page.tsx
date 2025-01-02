import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sword, Shield, Award, Users } from "lucide-react";
import { FeaturesCarousel } from "@/components/sections/FeaturesCarousel";

export const metadata: Metadata = {
  title: "Home | Fencing Equipment Check",
  description:
    "Welcome to the Fencing Equipment Check system. Manage your tournaments and equipment with ease.",
};

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 mb-16">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Fencing Equipment Check
        </h1>
        <p className="text-xl text-gray-600">
          Manage your fencing journey with ease
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Sword className="w-6 h-6 mr-2" />
              Quick Join
            </CardTitle>
            <CardDescription>
              Enter a tournament code to quickly join an event
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/profile/join">Join Tournament</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-6 h-6 mr-2" />
              Your Profile
            </CardTitle>
            <CardDescription>
              View and manage your fencing profile
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/profile/account">View Profile</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <FeaturesCarousel />

      <Card>
        <CardHeader>
          <CardTitle>Get Started</CardTitle>
          <CardDescription>
            Begin your fencing journey with us today
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/profile/join">Join a Tournament</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/profil/account">View Your Profile</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
