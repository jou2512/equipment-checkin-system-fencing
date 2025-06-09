
"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { account } from "@/lib/appwrite/config";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, CheckCircle, AlertCircle } from "lucide-react";

export default function ResendVerificationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResendVerificationContent />
    </Suspense>
  );
}

function ResendVerificationContent() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const resendVerification = async () => {
      try {
        const userId = searchParams.get("userId");

        if (!userId) {
          throw new Error("User ID is missing");
        }

        const verificationUrl = `${window.location.origin}/verify/email`;
        await account.createVerification(verificationUrl);

        setStatus("success");
        toast({
          title: "Verification Email Sent",
          description: "Please check your email for the verification link.",
        });

        setTimeout(() => {
          router.push("/login");
        }, 3000);
      } catch (error) {
        console.error("Resend verification error:", error);
        setStatus("error");

        const errorMessage =
          error instanceof Error
            ? error.message.includes("Too many requests")
              ? "Please wait before requesting another verification email."
              : error.message
            : "Unable to send verification email";

        toast({
          variant: "destructive",
          title: "Failed to Resend",
          description: errorMessage,
        });
      }
    };

    resendVerification();
  }, [router, searchParams]);

  const renderContent = () => {
    switch (status) {
      case "loading":
        return (
          <div className="flex flex-col items-center justify-center space-y-4">
            <RefreshCw className="h-12 w-12 animate-spin text-primary" />
            <p className="text-lg font-medium">Sending verification email...</p>
          </div>
        );

      case "success":
        return (
          <div className="flex flex-col items-center justify-center space-y-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
            <h2 className="text-2xl font-bold">Verification Email Sent!</h2>
            <p className="text-center text-muted-foreground max-w-xs">
              We've sent you a new verification link. Please check your email.
            </p>
            <p className="text-sm text-muted-foreground">
              Redirecting to login...
            </p>
            <Button
              variant="outline"
              onClick={() => router.push("/login")}
              className="mt-2"
            >
              Go to Login
            </Button>
          </div>
        );

      case "error":
        return (
          <div className="flex flex-col items-center justify-center space-y-4">
            <AlertCircle className="h-16 w-16 text-destructive" />
            <h2 className="text-2xl font-bold">Something Went Wrong</h2>
            <p className="text-center text-muted-foreground max-w-xs">
              We couldn't send the verification email. Please try again later.
            </p>
            <div className="flex flex-col gap-2 w-full max-w-xs">
              <Button variant="outline" onClick={() => router.push("/login")}>
                Back to Login
              </Button>
              <Button variant="ghost" onClick={() => router.push("/support")}>
                Contact Support
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
          <CardTitle className="text-center">Email Verification</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center min-h-[300px]">
          {renderContent()}
        </CardContent>
      </Card>
    </div>
  );
}
