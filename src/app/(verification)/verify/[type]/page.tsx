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

const VerificationTypes = ["email", "magic-link", "phone"] as const;
type VerificationType = (typeof VerificationTypes)[number];
const VerificationTypeValidator = z.enum(VerificationTypes);

const validateVerificationType = (input: unknown): VerificationType => {
  return VerificationTypeValidator.parse(input);
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

  const resolvedParams = use(params);

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        const verifiedType = validateVerificationType(resolvedParams.type);
        setVerificationType(verifiedType);

        const userId = searchParams.get("userId");
        const secret = searchParams.get("secret");

        if (!userId || !secret) {
          throw new Error("Missing verification parameters");
        }

        await account.updateVerification(userId, secret);

        setStatus("success");
        toast({
          title: "Verification Successful",
          description: "Your account has been verified.",
        });

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
      default:
        return null;
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
