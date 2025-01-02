"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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

// Define our form schema with zod
const FormSchema = z.object({
  code: z
    .string()
    .min(6, {
      message: "Please enter the complete 6-digit tournament code.",
    })
    .max(6),
});

type FormValues = z.infer<typeof FormSchema>;

export default function TournamentJoinForm() {
  const router = useRouter();
  const { processJoinCode } = useTournamentInvites();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize the form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      code: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    try {
      // Check if user is logged in
      const user = await account.get();

      // Process the tournament join code
      const success = await processJoinCode(data.code);

      if (success) {
        toast({
          title: "Successfully Joined!",
          description: "Welcome to the tournament.",
          className: "bg-green-100",
        });
        router.push("/dashboard");
      }
    } catch (error) {
      // Handle unauthenticated users
      if (error instanceof Error && error.message.includes("unauthorized")) {
        // Save code for after login
        localStorage.setItem("pendingJoinCode", data.code);
        router.push("/auth/login");
        return;
      }

      toast({
        variant: "destructive",
        title: "Failed to Join",
        description: "Please check your code and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container max-w-md mx-auto pt-20 flex justify-center">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Join Tournament</CardTitle>
          <CardDescription>
            Enter the tournament code provided by your organizer
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                      >
                        <InputOTPGroup className="">
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
                {isSubmitting ? "Joining..." : "Join Tournament"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
