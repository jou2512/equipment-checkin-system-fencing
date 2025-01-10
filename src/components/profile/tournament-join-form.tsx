"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { account } from "@/lib/appwrite/config";
import { toast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useTournamentInvites } from "@/hooks/use-tournament-invitations";
import { Loader2 } from "lucide-react";

const PENDING_CODE_KEY = "pendingJoinCode";
const RETURN_URL_KEY = "returnUrl";

const FormSchema = z.object({
  code: z
    .string()
    .min(6, {
      message: "Please enter the complete 6-digit tournament code.",
    })
    .max(6)
    .regex(/^\d{6}$/, {
      message: "Tournament code must be 6 digits.",
    }),
});

type FormValues = z.infer<typeof FormSchema>;

export default function TournamentJoinForm() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { processJoinCode } = useTournamentInvites();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      code: "",
    },
  });

  // Handle early path check
  if (!pathname || !searchParams) {
    router.push("/404");
    return null;
  }

  useEffect(() => {
    const initializeForm = async () => {
      try {
        // Check URL parameters first
        const urlCode = searchParams.get("code");
        const pendingCode = localStorage.getItem(PENDING_CODE_KEY);

        const codeToUse = urlCode || pendingCode || "";

        // Validate the code if present
        if (codeToUse) {
          if (FormSchema.shape.code.safeParse(codeToUse).success) {
            form.setValue("code", codeToUse);

            // Clear pending code if it was used
            if (pendingCode) {
              localStorage.removeItem(PENDING_CODE_KEY);
            }

            // Automatically submit if we have a valid code
            const isAuthError = await handleAuthError(codeToUse);
            if (!isAuthError) {
              form.handleSubmit(onSubmit)();
            }
          } else {
            toast({
              variant: "destructive",
              title: "Invalid Code Format",
              description: "The provided tournament code is not valid.",
            });
          }
        }
      } catch (error) {
        console.error("Error initializing form:", error);
      } finally {
        setIsInitializing(false);
      }
    };

    initializeForm();
  }, [searchParams, form]);

  const handleAuthError = async (code: string) => {
    try {
      const user = await account.get();
      if (!user) {
        // Save both code and current URL (including the code parameter)
        localStorage.setItem(PENDING_CODE_KEY, code);
        localStorage.setItem(RETURN_URL_KEY, window.location.href);

        toast({
          title: "Authentication Required",
          description:
            "Please log in or create an account to join the tournament. Your code will be saved.",
          action: (
            <div className="flex space-x-2 mt-2">
              <Button
                variant="default"
                size="sm"
                onClick={() => router.push("/login")}
              >
                Log In
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.push("/register")}
              >
                Register
              </Button>
            </div>
          ),
          duration: 6000, // Show for 6 seconds due to added buttons
        });

        // Default to login page if user doesn't click either button
        setTimeout(() => router.push("/login"), 6000);
        return true;
      }
      return false;
    } catch (error) {
      localStorage.setItem(PENDING_CODE_KEY, code);
      localStorage.setItem(RETURN_URL_KEY, window.location.href);

      toast({
        variant: "destructive",
        title: "Authentication Error",
        description:
          "Please log in or create an account to continue. Your tournament code will be saved.",
        action: (
          <div className="flex space-x-2 mt-2">
            <Button
              variant="default"
              size="sm"
              onClick={() => router.push("/login")}
            >
              Log In
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push("/register")}
            >
              Register
            </Button>
          </div>
        ),
        duration: 6000,
      });

      setTimeout(() => router.push("/login"), 6000);
      return true;
    }
  };

  const handleSuccessfulJoin = (tournamentId: string, role: string) => {
    // Clear any stored data
    localStorage.removeItem(PENDING_CODE_KEY);
    localStorage.removeItem(RETURN_URL_KEY);

    toast({
      title: "Successfully Joined!",
      description: `You've joined as a ${role}`,
      className: "bg-green-100",
    });

    const newPath = pathname.replace(
      "profile/join",
      `tournament/${tournamentId}/${role}`
    );
    router.push(newPath);
  };

  const onSubmit = async (data: FormValues) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      // Check authentication first
      const isAuthError = await handleAuthError(data.code);
      if (isAuthError) return;

      // Process the tournament join code
      const result = await processJoinCode(data.code);

      if (result.success) {
        handleSuccessfulJoin(
          result.tournamentId as string,
          result.role as string
        );
      } else {
        throw new Error("Invalid tournament code");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to Join",
        description:
          error instanceof Error
            ? error.message
            : "Please check your code and try again.",
      });

      // Clear the form on error
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isInitializing) {
    return (
      <div className="container max-w-md mx-auto pt-20 flex justify-center">
        <Card className="w-full">
          <CardContent className="pt-6">
            <div className="flex justify-center">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-md mx-auto pt-20 flex justify-center">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Join Tournament</CardTitle>
          <CardDescription>
            Enter the tournament code provided by your organizer
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  form.handleSubmit(onSubmit)();
                }
              }}
            >
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tournament Code</FormLabel>
                    <FormControl>
                      <InputOTP
                        maxLength={6}
                        value={field.value}
                        onChange={field.onChange}
                        disabled={isSubmitting}
                        autoFocus={!field.value} // Only autofocus if no code is pre-filled
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormDescription>
                      This code determines your role in the tournament.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  "Join Tournament"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
