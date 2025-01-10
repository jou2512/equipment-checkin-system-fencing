"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { account } from "@/lib/appwrite/config";
import { ID } from "appwrite";
import Link from "next/link";
import { Info, Loader2, Phone } from "lucide-react";

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
  FormDescription,
} from "@/components/ui/form";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";

// Feature Flags
const FEATURES = {
  SMS_LOGIN: false,
};

// Validation Schemas
const passwordLoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" })
    .transform((val) => val.toLowerCase()),
  password: z.string().min(1, { message: "Password is required" }),
});

const smsLoginSchema = z.object({
  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .regex(/^\+[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
});

type PasswordLoginData = z.infer<typeof passwordLoginSchema>;
type SMSLoginData = z.infer<typeof smsLoginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginMethod, setLoginMethod] = useState<"password" | "sms">(
    "password"
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const passwordForm = useForm<PasswordLoginData>({
    resolver: zodResolver(passwordLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const smsForm = useForm<SMSLoginData>({
    resolver: zodResolver(smsLoginSchema),
    defaultValues: {
      phone: "",
    },
  });

  const handlePasswordLogin = async (data: PasswordLoginData) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      await signIn.mutateAsync(data);
    } catch (error) {
      console.error("Login error:", error);

      let errorMessage = "Failed to log in. Please try again.";

      if (error instanceof Error) {
        if (error.message.includes("Invalid credentials")) {
          errorMessage = "Invalid email or password.";
        } else if (error.message.includes("network")) {
          errorMessage = "Network error. Please check your connection.";
        } else if (error.message.includes("verification")) {
          errorMessage = "Please verify your email before logging in.";
        }
      }

      toast({
        title: "Login Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSMSLogin = async (data: SMSLoginData) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const token = await account.createPhoneToken(ID.unique(), data.phone);

      toast({
        title: "Verification Code Sent",
        description: "Please check your phone for the verification code.",
      });

      router.push(`/verify/phone?userId=${token.userId}`);
    } catch (error) {
      console.error("SMS login error:", error);

      let errorMessage = "Failed to send verification code.";

      if (error instanceof Error) {
        if (error.message.includes("rate limit")) {
          errorMessage = "Too many attempts. Please try again later.";
        } else if (error.message.includes("network")) {
          errorMessage = "Network error. Please check your connection.";
        }
      }

      toast({
        title: "SMS Login Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground">
            Sign in to access your account
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            {FEATURES.SMS_LOGIN && (
              <div className="flex justify-center mb-6">
                <div className="inline-flex rounded-md border p-1">
                  <Button
                    variant={loginMethod === "password" ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setLoginMethod("password")}
                    disabled={isSubmitting}
                  >
                    Password
                  </Button>
                  <Button
                    variant={loginMethod === "sms" ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setLoginMethod("sms")}
                    disabled={isSubmitting}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    SMS
                  </Button>
                </div>
              </div>
            )}

            {loginMethod === "password" ? (
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            autoComplete="email"
                            disabled={isSubmitting}
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
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="password"
                            autoComplete="current-password"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing In...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </Button>
                </form>
              </Form>
            ) : (
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
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
                            placeholder="+1234567890"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormDescription>
                          Enter your phone number with country code
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending Code...
                      </>
                    ) : (
                      "Send Verification Code"
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center space-x-1">
              <span className="text-muted-foreground">
                Don't have an account?
              </span>
              <Link
                href="/registration"
                className="underline hover:text-primary transition-colors"
              >
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
