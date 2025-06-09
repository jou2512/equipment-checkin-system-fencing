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
import { Edit, ChevronRight, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Hooks
import { useAuth } from "@/hooks/use-auth";
import { useTeamMemberships } from "@/hooks/use-team-memberships";

// Constants
const WEAPONS = ["epee", "foil", "sabre"] as const;

// Validation Schema
const profileSchema = z.object({
  preferredWeapon: z.enum(WEAPONS).optional().nullable(),
  nationality: z
    .string()
    .length(3, { message: "Nationality code must be 3 characters" })
    .regex(/^[A-Z]{3}$/, {
      message: "Nationality code must be uppercase letters",
    })
    .optional()
    .nullable(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

// Helper function to safely get user preferences
const getUserPreference = (
  user: any,
  key: string,
  defaultValue: string = "Not Set"
) => {
  if (!user?.prefs) return defaultValue;
  const value = user.prefs[key];
  return value ? value : defaultValue;
};

// Helper function to format weapon name
const formatWeaponName = (weapon: string | null | undefined) => {
  if (!weapon) return "Not Set";
  return weapon.charAt(0).toUpperCase() + weapon.slice(1);
};

export default function ProfileDashboard() {
  const pathname = usePathname();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Auth and Profile Management
  const { user, isAuthenticated, updatePreferences } = useAuth();

  // Team Memberships
  const {
    memberships = [],
    isLoading: isLoadingMemberships,
    isError: isMembershipsError,
  } = useTeamMemberships();

  // Form Setup
  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      preferredWeapon: null,
      nationality: null,
    },
  });

  // Sync form with user data
  useEffect(() => {
    if (user?.prefs) {
      form.reset({
        preferredWeapon: user.prefs.weapon || null,
        nationality: user.prefs.nationalityCode || null,
      });
    }
  }, [user, form]);

  const onSubmit = async (data: ProfileFormData) => {
    setIsLoading(true);
    try {
      await updatePreferences.mutateAsync({
        weapon: data.preferredWeapon,
        nationalityCode: data.nationality,
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Profile update failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Profile Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-4 mb-6">
            <Avatar className="w-20 h-20">
              <AvatarImage
                src="/placeholder-avatar.jpg"
                alt={user?.name || "Profile picture"}
              />
              <AvatarFallback>
                {user?.name?.charAt(0)?.toUpperCase() || "?"}
              </AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h2 className="text-2xl font-bold">{user?.name || "Profile"}</h2>
              <p className="text-muted-foreground">
                {user?.email || "No email available"}
              </p>
              {user && (
                <span
                  className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                    user.emailVerification
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {user.emailVerification
                    ? "Email Verified"
                    : "Email Not Verified"}
                </span>
              )}
            </div>
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
                            value={field.value || ""}
                            className="w-full p-2 border rounded"
                          >
                            <option value="">Select Weapon</option>
                            {WEAPONS.map((weapon) => (
                              <option key={weapon} value={weapon}>
                                {formatWeaponName(weapon)}
                              </option>
                            ))}
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
                            value={field.value || ""}
                            placeholder="Enter 3-letter country code"
                            maxLength={3}
                            className="uppercase"
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
                      {formatWeaponName(getUserPreference(user, "weapon"))}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Nationality</p>
                    <p className="font-medium">
                      {getUserPreference(user, "nationalityCode")}
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

      {/* Memberships Card */}
      <Card>
        <CardHeader>
          <CardTitle>Tournament Memberships</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoadingMemberships ? (
            <p className="text-center text-muted-foreground py-4">
              Loading memberships...
            </p>
          ) : isMembershipsError ? (
            <p className="text-center text-destructive py-4">
              Failed to load memberships
            </p>
          ) : memberships.length === 0 ? (
            <p className="text-center text-muted-foreground py-4">
              No tournament memberships
            </p>
          ) : (
            <ul className="space-y-4">
              {memberships.map((membership) => (
                <li
                  key={membership.$id}
                  className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                >
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">
                        {membership.tournament?.name || "Unknown Tournament"}
                      </h3>
                      <Badge variant="secondary">{membership.role}</Badge>
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
        <Link href={`${pathname?.replace("account", "")}/join`}>
          <Users className="mr-2 h-4 w-4" />
          Join New Tournament
        </Link>
      </Button>
    </div>
  );
}
