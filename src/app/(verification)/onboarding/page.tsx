"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { account } from "@/lib/appwrite/config";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { client } from "@/lib/hono/hono-client";

// Validation Schemas for Different Roles
const fencerSchema = z.object({
  nationalityCode: z
    .string()
    .length(3, { message: "Nationality code must be 3 letters" }),
  weapon: z.enum(["epee", "foil", "sabre"], {
    errorMap: () => ({ message: "Please select a weapon" }),
  }),
  phone: z.string().optional(),
  notifications: z.object({
    checkInStatus: z.boolean().default(true),
    pickupReady: z.boolean().default(true),
  }),
});

const staffSchema = z.object({
  phone: z
    .string()
    .regex(/^\+[1-9]\d{1,14}$/, { message: "Invalid phone number" })
    .optional(),
});

const organizerSchema = z.object({
  organizationName: z
    .string()
    .min(2, { message: "Organization name is required" }),
});

export default function OnboardingPage() {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch user's role from account preferences
  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const prefs = await account.getPrefs();
        console.log(prefs.onboardingComplete, !prefs.onboardingComplete);
        if (prefs.onboardingComplete) router.push("/profile");
        setRole(prefs.role);
      } catch (error) {
        toast({
          title: "Error",
          description: "Unable to retrieve user role",
          variant: "destructive",
        });
        router.push("/login");
      }
    };

    fetchUserRole();
  }, [router]);

  // Dynamic form based on role
  const renderForm = () => {
    switch (role) {
      case "fencer":
        return <FencerOnboardingForm />;
      case "staff":
        return <StaffOnboardingForm />;
      case "organizer":
        return <OrganizerOnboardingForm />;
      default:
        return null;
    }
  };

  const FencerOnboardingForm = () => {
    const form = useForm({
      resolver: zodResolver(fencerSchema),
      defaultValues: {
        nationalityCode: "",
        weapon: undefined,
        phone: "",
        notifications: {
          checkInStatus: false,
          pickupReady: false,
        },
      },
    });

    const onSubmit = async (data: z.infer<typeof fencerSchema>) => {
      setIsLoading(true);
      try {
        const prefs = await account.getPrefs();
        await account.updatePrefs({
          ...prefs,
          nationalityCode: data.nationalityCode,
          weapon: data.weapon,
          phone: data.phone,
          notifications_checkin: data.notifications.checkInStatus,
          notifications_pickup: data.notifications.pickupReady,
          onboardingComplete: true,
        });

        const user = await account.get();

        // Update user labels using Hono client
        const response = await client.api.users.setUserRole.$post({
          json: {
            userId: user.$id,
            role: role as string,
          },
        });

        const result = await response.json();
        if (!result.success) {
          // @ts-expect-error
          throw new Error(result.error || "Failed to update user role");
        }

        toast({
          title: "Profile Updated",
          description: "Your fencer profile is complete.",
        });

        router.push("/profile");
      } catch (error) {
        console.log(error);
        toast({
          title: "Update Failed",
          description:
            error instanceof Error ? error.message : "An error occurred",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <Form {...form}>
        {/* @ts-ignore */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="nationalityCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nationality Code *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. usa, ger"
                    {...field}
                    className="uppercase"
                    maxLength={3}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="weapon"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weapon *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your weapon" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="epee">Epee</SelectItem>
                    <SelectItem value="foil">Foil</SelectItem>
                    <SelectItem value="sabre">Sabre</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number (Optional)</FormLabel>
                <FormControl>
                  <PhoneInput containerClass="" country={"ch"} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <div className="space-y-4">
            <FormLabel>Notification Preferences</FormLabel>
            <div className="space-y-2">
              {/* <FormField
                control={form.control}
                name="notifications.checkInStatus"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>Receive Check-in Status Updates</FormLabel>
                  </FormItem>
                )}
              /> */}
              <FormField
                control={form.control}
                name="notifications.pickupReady"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>
                      Notify When Equipment is Ready for Pickup
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Completing Profile..." : "Complete Profile"}
          </Button>
        </form>
      </Form>
    );
  };

  const StaffOnboardingForm = () => {
    const form = useForm({
      resolver: zodResolver(staffSchema),
      defaultValues: {
        phone: "",
      },
    });

    const onSubmit = async (data: z.infer<typeof staffSchema>) => {
      setIsLoading(true);
      try {
        await account.updatePrefs({
          ...data,
          onboardingComplete: true,
        });

        toast({
          title: "Profile Updated",
          description: "Your staff profile is complete.",
        });

        router.push("/dashboard");
      } catch (error) {
        toast({
          title: "Update Failed",
          description:
            error instanceof Error ? error.message : "An error occurred",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="+1234567890" type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Completing Profile..." : "Complete Profile"}
          </Button>
        </form>
      </Form>
    );
  };

  const OrganizerOnboardingForm = () => {
    const form = useForm({
      resolver: zodResolver(organizerSchema),
      defaultValues: {
        organizationName: "",
      },
    });

    const onSubmit = async (data: z.infer<typeof organizerSchema>) => {
      setIsLoading(true);
      try {
        await account.updatePrefs({
          ...data,
          onboardingComplete: true,
        });

        toast({
          title: "Profile Updated",
          description: "Your organizer profile is complete.",
        });

        router.push("/dashboard");
      } catch (error) {
        toast({
          title: "Update Failed",
          description:
            error instanceof Error ? error.message : "An error occurred",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="organizationName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization Name *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your organization name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Completing Profile..." : "Complete Profile"}
          </Button>
        </form>
      </Form>
    );
  };

  // No role detected
  if (!role) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">
            Complete Your {role.charAt(0).toUpperCase() + role.slice(1)} Profile
          </CardTitle>
        </CardHeader>
        <CardContent>{renderForm()}</CardContent>
      </Card>
    </div>
  );
}
