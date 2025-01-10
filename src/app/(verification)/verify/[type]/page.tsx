"use client";

import { useState, useEffect, use } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { account } from "@/lib/appwrite/config";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { CheckCircle, AlertCircle, RefreshCw, ArrowLeft } from "lucide-react";
import { ZodError, z } from "zod";

// Constants
const REDIRECT_DELAY = 3000; // 3 seconds
const VERIFICATION_TYPES = ["email", "magic-link", "phone"] as const;
type VerificationType = (typeof VERIFICATION_TYPES)[number];

// Validation schema
const verificationSchema = z.object({
  type: z.enum(VERIFICATION_TYPES),
  userId: z.string().min(1, "User ID is required"),
  secret: z.string().min(1, "Verification secret is required"),
});

type VerificationStatus = "loading" | "success" | "error" | "expired";

interface VerificationState {
  status: VerificationStatus;
  type: VerificationType | null;
  error?: string;
  retryCount: number;
}

export default function VerificationPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const [state, setState] = useState<VerificationState>({
    status: "loading",
    type: null,
    retryCount: 0,
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const resolvedParams = use(params);

  const handleVerification = async () => {
    try {
      // Parse and validate all required parameters
      const validatedData = verificationSchema.parse({
        type: resolvedParams.type,
        userId: searchParams.get("userId"),
        secret: searchParams.get("secret"),
      });

      // Update type in state
      setState((prev) => ({ ...prev, type: validatedData.type }));

      // Attempt verification
      await account.updateVerification(
        validatedData.userId,
        validatedData.secret
      );

      // Handle success
      setState((prev) => ({ ...prev, status: "success" }));
      toast({
        title: "Account Verified",
        description: "Your account has been successfully verified.",
        duration: REDIRECT_DELAY,
      });

      // Redirect after delay
      setTimeout(() => {
        router.push("/profile");
      }, REDIRECT_DELAY);
    } catch (error) {
      console.error("Verification error:", error);

      let errorMessage = "Unable to verify your account";
      let status: VerificationStatus = "error";

      if (error instanceof ZodError) {
        errorMessage = "Invalid verification link";
      } else if (error instanceof Error) {
        // Handle specific Appwrite error codes
        if (error.message.includes("Token expired")) {
          status = "expired";
          errorMessage = "Verification link has expired";
        } else {
          errorMessage = error.message;
        }
      }

      setState((prev) => ({
        ...prev,
        status,
        error: errorMessage,
      }));

      toast({
        title: "Verification Failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const handleRetry = async () => {
    if (state.retryCount >= 3) {
      toast({
        title: "Too Many Attempts",
        description: "Please request a new verification link.",
        variant: "destructive",
      });
      return;
    }

    setState((prev) => ({
      ...prev,
      status: "loading",
      retryCount: prev.retryCount + 1,
    }));

    await handleVerification();
  };

  useEffect(() => {
    handleVerification();
  }, []);

  const renderContent = () => {
    switch (state.status) {
      case "loading":
        return (
          <div className="flex flex-col items-center justify-center space-y-4">
            <RefreshCw className="h-12 w-12 animate-spin text-primary" />
            <p className="text-lg font-medium">Verifying your account...</p>
            <p className="text-sm text-muted-foreground">
              This will only take a moment
            </p>
          </div>
        );

      case "success":
        return (
          <div className="flex flex-col items-center justify-center space-y-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
            <h2 className="text-2xl font-bold">Verification Successful!</h2>
            <p className="text-center text-muted-foreground">
              Redirecting you to your profile...
            </p>
            <Button
              variant="outline"
              onClick={() => router.push("/profile")}
              className="mt-4"
            >
              Go to Profile Now
            </Button>
          </div>
        );

      case "expired":
        return (
          <div className="flex flex-col items-center justify-center space-y-4">
            <AlertCircle className="h-16 w-16 text-amber-500" />
            <h2 className="text-2xl font-bold">Link Expired</h2>
            <p className="text-center text-muted-foreground">
              This verification link has expired. Please request a new one.
            </p>
            <div className="flex flex-col gap-2 w-full max-w-xs">
              <Button
                onClick={() =>
                  router.push(
                    `/resend-verification?userId=${searchParams.get("userId")}`
                  )
                }
              >
                Request New Link
              </Button>
              <Button variant="outline" onClick={() => router.push("/login")}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Login
              </Button>
            </div>
          </div>
        );

      case "error":
        return (
          <div className="flex flex-col items-center justify-center space-y-4">
            <AlertCircle className="h-16 w-16 text-destructive" />
            <h2 className="text-2xl font-bold">Verification Failed</h2>
            <p className="text-center text-muted-foreground">
              {state.error || "There was an issue verifying your account."}
            </p>
            <div className="flex flex-col gap-2 w-full max-w-xs">
              {state.retryCount < 3 && (
                <Button onClick={handleRetry}>
                  Try Again ({3 - state.retryCount} attempts left)
                </Button>
              )}
              <Button variant="outline" onClick={() => router.push("/support")}>
                Contact Support
              </Button>
              <Button variant="ghost" onClick={() => router.push("/login")}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Login
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Account Verification</CardTitle>
          <CardDescription className="text-center">
            {state.type === "email" && "Verifying your email address"}
            {state.type === "magic-link" && "Completing magic link sign in"}
            {state.type === "phone" && "Verifying your phone number"}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center min-h-[300px]">
          {renderContent()}
        </CardContent>
      </Card>
    </div>
  );
}
