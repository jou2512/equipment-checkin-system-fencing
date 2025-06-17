// apps/landing/src/app/pre-registration/page.tsx
"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  PreRegistrationSchema,
  PreRegistrationFormData,
} from "@/lib/validation/pre-registration-schema";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Button,
} from "@fecs/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Checkbox,
  Label,
} from "@fecs/ui/client-only";

export default function PreRegistrationPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
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
    // TODO: Implement form submission logic using your preferred backend adapter
    try {
      console.log("Form submitted with data:", data);
      setFormSubmitted(true);
      reset();
      setRegistrationError(null);
    } catch (error) {
      setRegistrationError("Registration failed. Please try again.");
    }
  };

  const availableWeapons = ["epee", "foil", "sabre"]; // FIXME: should be dynamic

  return (
    <div className="container mx-auto max-w-2xl py-12">
      <Card>
        <CardHeader>
          <CardTitle>Pre-Registration</CardTitle>
          {/* TODO: Replace static title with dynamic tournament name if needed */}
        </CardHeader>
        <CardContent>
          {formSubmitted ? (
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold">Registration Successful!</h2>
              {/* TODO: Show QR or confirmation code from backend */}
              <p className="text-muted-foreground">
                Thank you! You'll receive a confirmation soon.
              </p>
              <Button onClick={() => setFormSubmitted(false)}>
                Register Another
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
                  I agree to the terms and conditions
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
