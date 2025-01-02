"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Edit, ChevronRight, LogOut, Users } from "lucide-react";

// Hooks
import { useAuth } from "@/hooks/use-auth";
import { useTeamMemberships } from "@/hooks/use-team-memberships";
import { usePathname } from "next/navigation";

// Validation Schema
const profileSchema = z.object({
  preferredWeapon: z
    .enum(["epee", "foil", "sabre"])
    .optional(),
  nationality: z
    .string()
    .length(3, { message: "Nationality code must be 3 characters" })
    .regex(/^[A-Z]{3}$/, { message: "Nationality code must be uppercase letters" })
    .optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export default function ProfileDashboard() {
  const pathname = usePathname()
  // Authentication and Profile Management
  const { 
    user, 
    isAuthenticated, 
    signOut, 
    updatePreferences 
  } = useAuth();

  // Team Memberships
  const { 
    memberships, 
    isLoading: isLoadingMemberships, 
    isError: isMembershipsError 
  } = useTeamMemberships();

  // State Management
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Form Initialization
  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      preferredWeapon: user?.prefs?.preferredWeapon,
      nationality: user?.prefs?.nationality,
    },
  });

  // Sync form with user data on load
  useEffect(() => {
    if (user) {
      console.log(user)
      form.reset({
        preferredWeapon: user.prefs?.preferredWeapon,
        nationality: user.prefs?.nationality,
      });
    }
  }, [user, form]);

  // Form Submission Handler
  const onSubmit = async (data: ProfileFormData) => {
    setIsLoading(true);
    try {
      // Update user preferences
      await updatePreferences.mutateAsync({
        preferredWeapon: data.preferredWeapon,
        nationality: data.nationality,
      });
      
      setIsEditing(false);
    } catch (error) {
      console.error("Profile update failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Sign Out
  const handleSignOut = () => {
    signOut.mutate();
  };

  // Prevent rendering if not authenticated
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Profile Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col items-center justify-between space-x-4 mb-6">
            <div className="flex flex-row items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarImage
                  src="/placeholder-avatar.jpg"
                  alt="Profile picture"
                />
                <AvatarFallback>{user?.name?.charAt(0) || "?"}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold">
                  {user?.name || "Profile"}
                </h2>
                <p className="text-gray-500">{user?.email || "No email"}</p>
              </div>
            </div>
            {/* <Button
              variant="destructive"
              onClick={handleSignOut}
              className="flex items-center"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button> */}
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {isEditing ? (
                <>
                  <FormField
                    control={form.control}
                    name="preferredWeapon"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Weapon</FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full p-2 border rounded"
                          >
                            <option value="">Select Weapon</option>
                            {(["epee", "foil", "sabre"] as const).map(
                              (weapon) => (
                                <option key={weapon} value={weapon}>
                                  {weapon?.charAt(0)?.toUpperCase() +
                                    weapon?.slice(1)}
                                </option>
                              )
                            )}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="nationality"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nationality Code</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter 3-letter country code"
                            maxLength={3}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex space-x-4">
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? "Saving..." : "Save Changes"}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Preferred Weapon
                    </p>
                    <p className="font-medium">
                      {user?.prefs?.weapon
                        ? user.prefs.weapon.charAt(0).toUpperCase() +
                          user.prefs.weapon.slice(1)
                        : "Not Set"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Nationality</p>
                    <p className="font-medium">
                      {(user?.prefs?.nationalityCode as string).toUpperCase() ||
                        "Not Set"}
                    </p>
                  </div>
                  <Button
                    type="button"
                    onClick={() => setIsEditing(true)}
                    className="col-span-2 mt-4"
                  >
                    <Edit className="w-4 h-4 mr-2" /> Edit Profile
                  </Button>
                </div>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Tournament Memberships</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoadingMemberships ? (
            <p className="text-center text-gray-500 py-4">
              Loading memberships...
            </p>
          ) : isMembershipsError ? (
            <p className="text-center text-destructive py-4">
              Failed to load memberships
            </p>
          ) : memberships.length === 0 ? (
            <p className="text-center text-gray-500 py-4">
              No tournament memberships
            </p>
          ) : (
            <ul className="space-y-4">
              {memberships.map((membership) => (
                <li
                  key={membership.$id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">
                        {membership.tournament?.name || "Unknown Tournament"}
                      </h3>
                      <Badge variant="secondary" className="ml-2">
                        {membership.role}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-muted-foreground">
                        Joined:{" "}
                        {new Date(membership.joined).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" asChild className="ml-4">
                    <Link
                      href={`/tournament/${membership.teamId}/${
                        membership.role[0] === "tournament-admin"
                          ? "checkin-staff"
                          : membership.role
                      }`}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
      {/* Join Tournament Button */}
      <Button asChild className="w-full" variant="outline">
        <Link href={`${pathname.replace("account","")}/join`}>
          <Users className="mr-2 h-4 w-4" />
          Join New Tournament
        </Link>
      </Button>
    </div>
  );
}