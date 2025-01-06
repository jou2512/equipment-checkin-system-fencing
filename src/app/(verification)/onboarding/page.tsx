"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { account } from "@/lib/appwrite/config";
import { FEATURES } from "@/lib/features/flags";

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

// Create dynamic schemas based on feature flags
const createFencerSchema = () => {
  const baseSchema = {
    nationalityCode: z
      .string()
      .length(3, { message: "Nationality code must be 3 letters" }),
    weapon: z.enum(["epee", "foil", "sabre"], {
      errorMap: () => ({ message: "Please select a weapon" }),
    }),
    notifications: z.object({
      ...(FEATURES.NOTIFICATION_CHECKIN
        ? {
            checkInStatus: z.boolean().default(true),
          }
        : {}),
      ...(FEATURES.NOTIFICATION_PICKUP
        ? {
            pickupReady: z.boolean().default(true),
          }
        : {}),
    }),
  };

  if (FEATURES.PHONE_INPUT) {
    return z.object({
      ...baseSchema,
      phone: z.string().min(1, "Phone number is required"),
    });
  }

  return z.object(baseSchema);
};

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

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const prefs = await account.getPrefs();
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

  const FencerOnboardingForm = () => {
    const form = useForm({
      resolver: zodResolver(createFencerSchema()),
      defaultValues: {
        nationalityCode: "",
        weapon: undefined,
        ...(FEATURES.PHONE_INPUT ? { phone: "" } : {}),
        notifications: {
          ...(FEATURES.NOTIFICATION_CHECKIN ? { checkInStatus: true } : {}),
          ...(FEATURES.NOTIFICATION_PICKUP ? { pickupReady: true } : {}),
        },
      },
    });

    const onSubmit = async (data: any) => {
      setIsLoading(true);
      try {

        const user = await account.get();

        const response = await fetch("/api/users/setUserRole", {
          method: "POST",
          headers: {
            Authorization: "Bearer honoiscool",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user.$id,
            role: role as string,
          }),
        });

        const result = await response.json();
        if (!result.success) {
          throw new Error(result.error || "Failed to update user role");
        }


        const prefs = await account.getPrefs();
        await account.updatePrefs({
          ...prefs,
          nationalityCode: data.nationalityCode,
          weapon: data.weapon,
          ...(FEATURES.PHONE_INPUT ? { phone: data.phone } : {}),
          ...(FEATURES.NOTIFICATION_CHECKIN
            ? {
                notifications_checkin: data.notifications.checkInStatus,
              }
            : {}),
          ...(FEATURES.NOTIFICATION_PICKUP && {
            notifications_pickup: data.notifications.pickupReady,
          }),
          onboardingComplete: true,
        });

        toast({
          title: "Profile Updated",
          description: "Your fencer profile is complete.",
        });

        router.refresh();
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

          {FEATURES.PHONE_INPUT && (
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number *</FormLabel>
                  <FormControl>
                    <PhoneInput
                      containerClass=""
                      country={"ch"}
                      {...field}
                      inputStyle={{
                        width: "100%",
                        height: "40px",
                        fontSize: "16px",
                        paddingLeft: "48px",
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <div className="space-y-4">
            <FormLabel>Notification Preferences</FormLabel>
            <div className="space-y-2">
              {FEATURES.NOTIFICATION_CHECKIN && (
                <FormField
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
                />
              )}

              {FEATURES.NOTIFICATION_PICKUP && (
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
              )}
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

        router.push("/profile");
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

        router.push("/profile");
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
