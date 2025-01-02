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
import { ChromeIcon as Google, Info, Phone } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import Link from "next/link";

// Feature Flags
const FEATURES = {
  SMS_LOGIN: false, // Toggle SMS login on/off
};

// Validation Schemas
const passwordLoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

const smsLoginSchema = z.object({
  phone: z
    .string()
    .regex(/^\+[1-9]\d{1,14}$/, { message: "Invalid phone number" }),
});

type PasswordLoginData = z.infer<typeof passwordLoginSchema>;
type SMSLoginData = z.infer<typeof smsLoginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const {signIn} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [loginMethod, setLoginMethod] = useState<"password" | "sms">(
    "password"
  );

  // Password Login Form
  const passwordForm = useForm<PasswordLoginData>({
    resolver: zodResolver(passwordLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // SMS Login Form
  const smsForm = useForm<SMSLoginData>({
    resolver: zodResolver(smsLoginSchema),
    defaultValues: {
      phone: "",
    },
  });

  const handlePasswordLogin = async (data: PasswordLoginData) => {
    setIsLoading(true);
    try {
      signIn.mutate(data);
    } catch (error) {
      toast({
        title: "Login Failed",
        description:
          error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSMSLogin = async (data: SMSLoginData) => {
    setIsLoading(true);
    try {
      // Create phone token
      const token = await account.createPhoneToken(ID.unique(), data.phone);

      toast({
        title: "Verification Sent",
        description: "Check your phone for the verification code",
      });

      // Redirect to SMS verification page
      router.push(`/verify/phone?userId=${token.userId}`);
    } catch (error) {
      toast({
        title: "SMS Login Failed",
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
          Login to Your Account
        </h1>
        <Card>
          <CardContent className="pt-6">
            {/* SMS Login Toggle (conditionally rendered) */}
            {FEATURES.SMS_LOGIN && (
              <div className="flex justify-center mb-4">
                <div className="flex space-x-2 bg-muted rounded-lg p-1">
                  <Button
                    variant={loginMethod === "password" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setLoginMethod("password")}
                  >
                    Password Login
                  </Button>
                  <Button
                    variant={loginMethod === "sms" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setLoginMethod("sms")}
                  >
                    <Phone className="mr-2 h-4 w-4" /> SMS Login
                  </Button>
                </div>
              </div>
            )}

            {/* Password Login Form */}
            {loginMethod === "password" && (
              <Form {...passwordForm}>
                <form
                  onSubmit={passwordForm.handleSubmit(handlePasswordLogin)}
                  className="space-y-4"
                >
                  <FormField
                    control={passwordForm.control}
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
                                Enter the email used during registration
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
                    control={passwordForm.control}
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
                                Enter your account password
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

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                </form>
              </Form>
            )}

            {/* SMS Login Form */}
            {FEATURES.SMS_LOGIN && loginMethod === "sms" && (
              <Form {...smsForm}>
                <form
                  onSubmit={smsForm.handleSubmit(handleSMSLogin)}
                  className="space-y-4"
                >
                  <FormField
                    control={smsForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Phone Number *
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="inline-block ml-2 h-4 w-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                Enter your phone number with country code
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+1234567890"
                            type="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading
                      ? "Sending Verification..."
                      : "Send Verification"}
                  </Button>
                </form>
              </Form>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="flex flex-row text-sm space-x-2">
              <p>No account yet? </p>
              <Link href="/registration" className=" underline">
                 SignUp
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
