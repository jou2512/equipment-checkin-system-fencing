"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { account } from "@/lib/appwrite/config";
import { FEATURES } from "@/lib/features/flags";
import {
  parsePhoneNumber,
  isValidPhoneNumber,
  getCountryCallingCode,
  CountryCode,
  formatIncompletePhoneNumber,
  getExampleNumber,
  Examples,
  getCountries,
} from "libphonenumber-js/max";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
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
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Get all available countries
const ALL_COUNTRIES = getCountries();

// Generate country data
const COUNTRIES_DATA = ALL_COUNTRIES.map((country) => ({
  code: country as CountryCode,
  name:
    new Intl.DisplayNames(["en"], { type: "region" }).of(country) || country,
  flag: String.fromCodePoint(
    ...country.split("").map((char) => 127397 + char.charCodeAt(0))
  ),
  dialCode: `+${getCountryCallingCode(country as CountryCode)}`,
})).sort((a, b) => a.name.localeCompare(b.name));

// Phone Input Component
interface PhoneInputProps {
  value: string;
  onChange: (value: string, isValid: boolean) => void;
  label?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
}

const PhoneInput = ({
  value,
  onChange,
  label,
  required = false,
  error,
  disabled = false,
}: PhoneInputProps) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>("CH");
  const [inputValue, setInputValue] = useState(value);
  const [formattedValue, setFormattedValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    try {
      if (value) {
        const phoneNumber = parsePhoneNumber(value);
        if (phoneNumber) {
          setSelectedCountry(phoneNumber.country || "CH");
          setFormattedValue(phoneNumber.formatInternational());
        }
      }
    } catch (error) {
      console.error("Phone parsing error:", error);
    }
  }, [value]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    try {
      const formattedNumber = formatIncompletePhoneNumber(
        newValue,
        selectedCountry
      );
      setFormattedValue(formattedNumber);

      let isValidNumber = false;
      if (newValue.length > 0) {
        try {
          const phoneNumber = parsePhoneNumber(newValue);
          isValidNumber = phoneNumber
            ? isValidPhoneNumber(phoneNumber.number!)
            : false;
          if (phoneNumber?.country) {
            setSelectedCountry(phoneNumber.country);
          }
        } catch {
          isValidNumber = false;
        }
      } else {
        isValidNumber = !required;
      }

      setIsValid(isValidNumber);
      onChange(newValue, isValidNumber);
    } catch (error) {
      console.error("Phone validation error:", error);
      setIsValid(false);
      onChange(newValue, false);
    }
  };

  const handleCountryChange = (country: CountryCode) => {
    setSelectedCountry(country);
    const prefix = `+${getCountryCallingCode(country)}`;

    if (!inputValue.startsWith(prefix)) {
      setInputValue(prefix);
      setFormattedValue(prefix);
      onChange(prefix, false);
    }
  };

  return (
    <div className="space-y-2">
      {label && (
        <FormLabel
          className={cn(
            required &&
              "after:content-['*'] after:ml-0.5 after:text-destructive"
          )}
        >
          {label}
        </FormLabel>
      )}

      <div className="relative">
        <Select
          value={selectedCountry}
          onValueChange={(value) => handleCountryChange(value as CountryCode)}
        >
          <SelectTrigger
            className={cn(
              "absolute left-0 top-0 bottom-0 w-[5.5rem]",
              "border-r rounded-r-none",
              disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            <SelectValue>
              {COUNTRIES_DATA.find((c) => c.code === selectedCountry)?.flag}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {COUNTRIES_DATA.map((country) => (
              <SelectItem
                key={country.code}
                value={country.code}
                className="flex items-center gap-2"
              >
                <span className="w-6">{country.flag}</span>
                <span className="flex-1">{country.name}</span>
                <span className="text-muted-foreground">
                  {country.dialCode}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          type="tel"
          value={formattedValue}
          onChange={handlePhoneChange}
          disabled={disabled}
          className={cn(
            "pl-[5.5rem]",
            !isValid &&
              inputValue &&
              "border-destructive focus-visible:ring-destructive"
          )}
        />
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      {!isValid && inputValue && !error && (
        <p className="text-sm text-destructive">
          Please enter a valid phone number
        </p>
      )}
    </div>
  );
};

// Form Schemas
const createFencerSchema = () => {
  const baseSchema = {
    nationalityCode: z
      .string()
      .length(3, { message: "Nationality code must be 3 letters" })
      .transform((val) => val.toUpperCase()),
    weapon: z.enum(["epee", "foil", "sabre"], {
      required_error: "Please select a weapon",
    }),
    notifications: z.object({
      ...(FEATURES.NOTIFICATION_CHECKIN
        ? { checkInStatus: z.boolean().default(true) }
        : {}),
      ...(FEATURES.NOTIFICATION_PICKUP
        ? { pickupReady: z.boolean().default(true) }
        : {}),
    }),
  };

  return z.object({
    ...baseSchema,
    ...(FEATURES.PHONE_INPUT
      ? {
          phone: z.string().refine(
            (val) => {
              if (!val) return false;
              try {
                const phoneNumber = parsePhoneNumber(val);
                return phoneNumber
                  ? isValidPhoneNumber(phoneNumber.number!)
                  : false;
              } catch {
                return false;
              }
            },
            { message: "Please enter a valid phone number" }
          ),
        }
      : {}),
  });
};

const staffSchema = z.object({
  phone: z
    .string()
    .refine(
      (val) => {
        if (!val) return true;
        try {
          const phoneNumber = parsePhoneNumber(val);
          return phoneNumber ? isValidPhoneNumber(phoneNumber.number!) : false;
        } catch {
          return false;
        }
      },
      { message: "Please enter a valid phone number or leave it empty" }
    )
    .optional(),
});

const organizerSchema = z.object({
  organizationName: z
    .string()
    .min(2, "Organization name must be at least 2 characters")
    .max(100, "Organization name must be less than 100 characters"),
});

export default function OnboardingPage() {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const initializeOnboarding = async () => {
      try {
        const user = await account.get();
        const prefs = await account.getPrefs();

        if (prefs.onboardingComplete) {
          toast({
            title: "Already Onboarded",
            description: "Your profile is already set up.",
          });
          router.push("/profile");
          return;
        }

        if (!prefs.role) {
          toast({
            variant: "destructive",
            title: "Role Not Found",
            description: "Please complete registration first.",
          });
          router.push("/register");
          return;
        }

        setRole(prefs.role);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Access Error",
          description: "Please log in to continue.",
        });
        router.push("/login");
      } finally {
        setIsInitializing(false);
      }
    };

    initializeOnboarding();
  }, [router]);

  const updateUserRole = async (userId: string, role: string) => {
    const response = await fetch("/api/users/setUserRole", {
      method: "POST",
      headers: {
        Authorization: "Bearer honoiscool",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, role }),
    });

    const result = await response.json();
    if (!result.success) {
      throw new Error(result.error || "Failed to update user role");
    }
  };

  const handleFormSubmission = async (
    data: any,
    role: string,
    customPrefs: Record<string, any> = {}
  ) => {
    setIsLoading(true);
    try {
      const user = await account.get();
      await updateUserRole(user.$id, role);

      const currentPrefs = await account.getPrefs();
      await account.updatePrefs({
        ...currentPrefs,
        ...data,
        ...customPrefs,
        onboardingComplete: true,
      });

      toast({
        title: "Profile Complete",
        description: `Your ${role} profile has been set up successfully.`,
      });

      router.refresh();
      router.push("/profile");
    } catch (error) {
      console.error("Onboarding error:", error);
      toast({
        variant: "destructive",
        title: "Update Failed",
        description:
          error instanceof Error
            ? error.message
            : "Failed to complete profile setup. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

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

    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) =>
            handleFormSubmission(data, "fencer")
          )}
          className="space-y-6"
        >
          <FormField
            control={form.control}
            name="nationalityCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nationality Code *</FormLabel>
                <FormControl>
                  <Input {...field} className="uppercase" maxLength={3} />
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
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="epee">Épée</SelectItem>
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
                  <PhoneInput
                    label="Phone Number"
                    required
                    value={field.value as string}
                    onChange={(value) => field.onChange(value)}
                    error={form.formState.errors.phone?.message}
                    disabled={isLoading}
                  />
                </FormItem>
              )}
            />
          )}

          {(FEATURES.NOTIFICATION_CHECKIN || FEATURES.NOTIFICATION_PICKUP) && (
            <div className="space-y-4">
              <FormLabel>Notification Preferences</FormLabel>
              <div className="space-y-2">
                {FEATURES.NOTIFICATION_CHECKIN && (
                  <FormField
                    control={form.control}
                    name="notifications.checkInStatus"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Check-in Status Updates</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                )}

                {FEATURES.NOTIFICATION_PICKUP && (
                  <FormField
                    control={form.control}
                    name="notifications.pickupReady"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Equipment Pickup Notifications</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                )}
              </div>
            </div>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Setting Up Profile...
              </>
            ) : (
              "Complete Profile"
            )}
          </Button>
        </form>
      </Form>
    );
  };

  const StaffOnboardingForm = () => {
    const form = useForm({
      resolver: zodResolver(staffSchema),
      defaultValues: { phone: "" },
    });

    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) =>
            handleFormSubmission(data, "staff")
          )}
          className="space-y-6"
        >
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <PhoneInput
                  label="Phone Number"
                  value={field.value || ""}
                  onChange={(value) => field.onChange(value)}
                  error={form.formState.errors.phone?.message}
                  disabled={isLoading}
                />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Setting Up Profile...
              </>
            ) : (
              "Complete Profile"
            )}
          </Button>
        </form>
      </Form>
    );
  };

  const OrganizerOnboardingForm = () => {
    const form = useForm({
      resolver: zodResolver(organizerSchema),
      defaultValues: { organizationName: "" },
    });

    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) =>
            handleFormSubmission(data, "organizer")
          )}
          className="space-y-6"
        >
          <FormField
            control={form.control}
            name="organizationName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization Name *</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Setting Up Profile...
              </>
            ) : (
              "Complete Profile"
            )}
          </Button>
        </form>
      </Form>
    );
  };

  if (isInitializing) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="flex justify-center">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!role) return null;

  const formComponents = {
    fencer: FencerOnboardingForm,
    staff: StaffOnboardingForm,
    organizer: OrganizerOnboardingForm,
  };

  const FormComponent = formComponents[role as keyof typeof formComponents];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">
            Complete Your Profile
          </CardTitle>
          <CardDescription className="text-center">
            Set up your {role.charAt(0).toUpperCase() + role.slice(1)} account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormComponent />
        </CardContent>
      </Card>
    </div>
  );
}
