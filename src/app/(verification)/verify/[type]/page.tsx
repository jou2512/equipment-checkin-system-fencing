"use client";

import { useState, useEffect, use } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { account } from "@/lib/appwrite/config";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { CheckCircle, AlertCircle, RefreshCw } from "lucide-react";
import { ZodError, z } from "zod";
import React from "react";

// Define the values once in a constant, using `as const` to make the array a tuple of literals
const VerificationTypes = ['email', 'magic-link', 'phone'] as const;

// Derive the TypeScript type from the constant (union of the tuple elements)
type VerificationType = typeof VerificationTypes[number];

// Create the Zod validator from the constant
const VerificationTypeValidator = z.enum(VerificationTypes);

// Function that validates the input and throws an error if the type is incorrect
const validateVerificationType = (input: unknown) => {
  return VerificationTypeValidator.parse(input); // This will throw an error if the input is invalid
};

export default function VerificationPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [verificationType, setVerificationType] =
    useState<VerificationType | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();

  // Using React.use() to unwrap the promise
  const resolvedParams = React.use(params);

  useEffect(() => {
    const verifyAccount = async () => {
      // This will run after the component mounts, making it safe to call hooks

      try {
        validateVerificationType(resolvedParams.type); // Validate the type
        setVerificationType(resolvedParams.type as VerificationType);
        setStatus("success"); // If the validation is successful
      } catch (error) {
        console.error((error as ZodError).message); // Handle Zod error
        setStatus("error");
      }
      try {
        // Determine verification type and method
        const userId = searchParams.get("userId");
        const secret = searchParams.get("secret");

        if (!userId || !secret) {
          throw new Error("Missing verification parameters");
        }

        // Email Verification
        await account.updateVerification(userId, secret);

        setStatus("success");
        toast({
          title: "Verification Successful",
          description: "Your account has been verified.",
        });

        // Redirect to dashboard after a short delay
        setTimeout(() => {
          router.push("/profile");
        }, 2000);
      } catch (error) {
        setStatus("error");
        toast({
          title: "Verification Failed",
          description:
            error instanceof Error ? error.message : "Unable to verify account",
          variant: "destructive",
        });
      }
    };

    verifyAccount();
  }, [router, searchParams, resolvedParams.type]);

  const renderContent = () => {
    switch (status) {
      case "loading":
        return (
          <div className="flex flex-col items-center justify-center space-y-4">
            <RefreshCw className="h-12 w-12 animate-spin text-blue-500" />
            <p className="text-lg">Verifying your account...</p>
          </div>
        );
      case "success":
        return (
          <div className="flex flex-col items-center justify-center space-y-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
            <h2 className="text-2xl font-bold">Verification Successful!</h2>
            <p className="text-center">
              You will be redirected to the dashboard shortly.
            </p>
          </div>
        );
      case "error":
        return (
          <div className="flex flex-col items-center justify-center space-y-4">
            <AlertCircle className="h-16 w-16 text-red-500" />
            <h2 className="text-2xl font-bold">Verification Failed</h2>
            <p className="text-center">
              There was an issue verifying your account.
            </p>
            <Button onClick={() => router.push("/register")}>Try Again</Button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Account Verification</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center min-h-[300px]">
          {renderContent()}
        </CardContent>
      </Card>
    </div>
  );
}
