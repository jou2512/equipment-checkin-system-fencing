"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { account } from "@/lib/appwrite/config";
import { ID } from "appwrite";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";
import { Info, ChromeIcon as Google } from "lucide-react";
import Link from "next/link";

// Validation Schema
const registrationSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "First Name must be at least 2 characters long" }),
  last_name: z
    .string()
    .min(2, { message: "Last Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, {
      message: "Password must contain uppercase, lowercase, and number",
    }),
  role: z.enum(["fencer", "staff", "organizer"], {
    errorMap: () => ({ message: "Please select a role" }),
  }),
});

type RegistrationData = z.infer<typeof registrationSchema>;

export default function QuickRegistrationPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      role: "fencer",
    },
  });

  const handleRegistration = async (data: RegistrationData) => {
    setIsLoading(true);
    try {
      // Create user account
      const user = await account.create(
        ID.unique(),
        data.email,
        data.password,
        `${data.first_name} ${data.last_name}`
      );

      // Create email session
      await account.createEmailPasswordSession(data.email, data.password);

      // Initiate email verification
      await account.createVerification(
        `${window.location.origin}/verify/email`
      );

      

      toast({
        title: "Registration Successful",
        description: "Welcome to the platform!",
      });

      if (data.role === 'fencer') {
        // Update user preferences with role
        await account.updatePrefs({
          role: data.role,
          name: `${data.first_name} | ${data.last_name}`,
          onboardingComplete: false,
        });
        // Redirect to onboarding/profile completion
        router.push("/onboarding");
      } else {
        // Update user preferences with role
        await account.updatePrefs({
          role: data.role,
          name: `${data.first_name} | ${data.last_name}`,
          onboardingComplete: true,
        });
        router.push("/admin");
      }
    } catch (error) {
      toast({
        title: "Registration Failed",
        description:
          error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Your Account
        </h1>
        <Card>
          <CardContent className="pt-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleRegistration)}
                className="space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>
                          First Name *
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="inline-block ml-2 h-4 w-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                Your first name as it appears on official
                                documents
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>
                          Last Name *
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="inline-block ml-2 h-4 w-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                Your last name as it appears on official
                                documents
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Email *
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="inline-block ml-2 h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              Your primary email for account communication and
                              verification
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter email"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Password *
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="inline-block ml-2 h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              Strong password with uppercase, lowercase, and
                              numbers
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Role *
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="inline-block ml-2 h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              Select your primary role in the tournament
                              ecosystem
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="fencer">Fencer</SelectItem>
                          <SelectItem value="staff">
                            Staff/Team Member
                          </SelectItem>
                          {/* <SelectItem value="organizer">
                            Tournament Organizer
                          </SelectItem> */}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <p className="text-sm italic text-muted-foreground">
                  * Required Fields
                </p>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Creating Account..." : "Register"}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="flex flex-row text-sm space-x-2">
              <p>Already an Account? </p>
              <Link href="/login" className=" underline">
                SignIn
              </Link>
            </div>
            {/* <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              <Google className="mr-2 h-4 w-4" />
              Google
            </Button> */}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
