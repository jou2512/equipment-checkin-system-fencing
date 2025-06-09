"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { QrCode } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { useTournamentStore } from "@/lib/store/tournament-store";
import { useTournaments } from "@/hooks/use-tournaments";
import { databases } from "@/lib/appwrite/config";
import { ID } from "appwrite";
import {
  TournamentActiveWeaponsType,
  DATABASE_IDS,
  COLLECTION_IDS,
} from "@/lib/appwrite/types";

// Validation Schema
const PreRegistrationSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  nationalityCode: z
    .string()
    .length(3, "Nationality code must be 3 letters")
    .regex(/^[A-Z]{3}$/, "Nationality code must be uppercase"),
  weapon: z.enum(["epee", "foil", "sabre"]),
  agreeTerms: z.boolean().refine((val) => val, "You must agree to the terms"),
  clubName: z.string().optional(),
});

type PreRegistrationFormData = z.infer<typeof PreRegistrationSchema>;

export default function PreRegistrationPage() {
  const { currentTournamentId } = useTournamentStore();
  const { SelectedTournament } = useTournaments();
  const { tournament } = SelectedTournament();

  const [qrCodeValue, setQrCodeValue] = useState<string | null>(null);
  const [registrationError, setRegistrationError] = useState<string | null>(
    null
  );

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PreRegistrationFormData>({
    resolver: zodResolver(PreRegistrationSchema),
    defaultValues: {
      agreeTerms: false,
    },
  });

  const onSubmit = async (data: PreRegistrationFormData) => {
    // TODO: Check for existing registrations using the same email to prevent
    //       duplicate entries.
    // TODO: Perform server-side validation of the submitted data.
    try {
      // Create pre-registration document
      const preRegistration = await databases.createDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        // @ts-ignore
        COLLECTION_IDS.PRE_REGISTRATIONS, // Assuming this collection exists
        ID.unique(),
        {
          ...data,
          tournamentId: currentTournamentId,
          status: "pending",
          registeredAt: new Date().toISOString(),
        }
      );

      // Generate QR code value (could be a unique registration ID or link)
      const qrValue = `https://yourdomain.com/registration/${preRegistration.$id}`;
      // TODO: Send a confirmation email to the fencer containing this QR code.
      // TODO: Persist the QR code so staff can retrieve it later if needed.
      setQrCodeValue(qrValue);

      // Reset form
      reset();
      setRegistrationError(null);
    } catch (error) {
      // TODO: Display more detailed error messages to the user.
      setRegistrationError("Registration failed. Please try again.");
      console.error(error);
    }
  };

  // Determine available weapons based on tournament configuration
  const availableWeapons =
    (tournament?.activeWeapons as TournamentActiveWeaponsType[]) || [];

  // TODO: Integrate reCAPTCHA or similar verification before allowing
  //       form submission to reduce spam.

  return (
    <div className="container mx-auto max-w-2xl py-12">
      <Card>
        <CardHeader>
          <CardTitle>Pre-Registration for {tournament?.name}</CardTitle>
        </CardHeader>
        <CardContent>
          {qrCodeValue ? (
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold">Registration Successful!</h2>
              <div className="flex justify-center">
                <QRCodeCanvas value={qrCodeValue} size={256} />
              </div>
              <p className="text-muted-foreground">
                Please save or screenshot this QR code for check-in
              </p>
              <Button onClick={() => setQrCodeValue(null)}>
                Register Another Fencer
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>First Name</Label>
                  <Input
                    {...register("firstName")}
                    placeholder="Enter first name"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label>Last Name</Label>
                  <Input
                    {...register("lastName")}
                    placeholder="Enter last name"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label>Email</Label>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="Enter email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Nationality Code</Label>
                  <Input
                    {...register("nationalityCode")}
                    placeholder="e.g. USA, GER"
                    maxLength={3}
                    className="uppercase"
                  />
                  {errors.nationalityCode && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.nationalityCode.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label>Weapon</Label>
                  <Controller
                    name="weapon"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Weapon" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableWeapons.map((weapon) => (
                            <SelectItem key={weapon} value={weapon}>
                              {weapon.charAt(0).toUpperCase() + weapon.slice(1)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.weapon && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.weapon.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label>Club Name (Optional)</Label>
                <Input
                  {...register("clubName")}
                  placeholder="Enter club name"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Controller
                  name="agreeTerms"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="terms"
                    />
                  )}
                />
                <Label htmlFor="terms">
                  I agree to the tournament terms and conditions
                </Label>
              </div>
              {errors.agreeTerms && (
                <p className="text-red-500 text-sm">
                  {errors.agreeTerms.message}
                </p>
              )}

              {registrationError && (
                <p className="text-red-500 text-sm">{registrationError}</p>
              )}

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Registering..." : "Pre-Register"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
