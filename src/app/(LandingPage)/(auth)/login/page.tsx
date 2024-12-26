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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import {
  Eye,
  EyeOff,
  Github,
  ChromeIcon as Google,
  Phone,
  Mail,
  Link,
} from "lucide-react";

const defaultSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "First Name must be at least 2 characters long" }),
  last_name: z
    .string()
    .min(2, { message: "Last Name must be at least 2 characters long" }),
  role: z.enum(["fencer", "staff", "organizer"], {
    errorMap: () => ({ message: "Please select a role" }),
  }),
});

// Validation Schemas
const emailSchema = defaultSchema.extend({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  // .regex(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&",.-{}¨]{8,}$/,
  //   {
  //     message:
  //       "Password must contain uppercase, lowercase, number, and special character (@$!%*?&)",
  //   }
  // ),
});

const phoneSchema = defaultSchema.extend({
  phone: z
    .string()
    .regex(/^\+[1-9]\d{1,14}$/, { message: "Invalid phone number" }),
  role: z.enum(["fencer", "staff", "organizer"], {
    errorMap: () => ({ message: "Please select a role" }),
  }),
});

const magicLinkSchema = defaultSchema.extend({
  email: z.string().email({ message: "Invalid email address" }),
  role: z.enum(["fencer", "staff", "organizer"], {
    errorMap: () => ({ message: "Please select a role" }),
  }),
});

type AuthMethod = "email" | "phone" | "magic-link";
type EmailData = z.infer<typeof emailSchema>;
type PhoneData = z.infer<typeof phoneSchema>;
type MagicLinkData = z.infer<typeof magicLinkSchema>;

export default function AuthenticationPage() {
  const router = useRouter();
  const [authMethod, setAuthMethod] = useState<AuthMethod>("email");
  const [showPassword, setShowPassword] = useState(false);

  // Email Registration Form
  const emailForm = useForm<EmailData>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
      password: "",
      last_name: "",
      first_name: "",
      role: "fencer",
    },
  });

  // Phone Registration Form
  const phoneForm = useForm<PhoneData>({
    resolver: zodResolver(phoneSchema),
    defaultValues: {
      phone: "",
      last_name: "",
      first_name: "",
      role: "fencer",
    },
  });

  // Magic Link Form
  const magicLinkForm = useForm<MagicLinkData>({
    resolver: zodResolver(magicLinkSchema),
    defaultValues: {
      email: "",
      last_name: "",
      first_name: "",
      role: "fencer",
    },
  });

  const handleEmailRegistration = async (data: EmailData) => {
    try {
      const result = await account.deleteSessions();
      console.log(result);

      const user = await account.create(
        ID.unique(),
        data.email,
        data.password,
        data.first_name + data.last_name
      );

      console.log(user);
      await account.createEmailPasswordSession(data.email, data.password);
      console.log("is done");

      const promise = account.createVerification(
        "http://localhost:3000/verify/email"
      );
      promise.then(
        function (response) {
          toast({
            title: "Registration Successful",
            description: "Welcome to the platform!",
          });
        },
        function (error) {
          console.log(error); // Failure
        }
      );
    } catch (error) {
      console.log(error.message);
      toast({
        title: "Registration Failed",
        description:
          error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    }
  };

  const handlePhoneRegistration = async (data: PhoneData) => {
    try {
      const token = await account.createPhoneToken(ID.unique(), data.phone);

      toast({
        title: "SMS Verification Sent",
        description: "Check your phone for the verification code",
      });

      // TODO: Implement phone verification flow
      router.push(`/verify/phone?userId=${token.userId}`);
    } catch (error) {
      toast({
        title: "Phone Registration Failed",
        description:
          error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    }
  };

  const handleMagicLinkRegistration = async (data: MagicLinkData) => {
    try {
      const token = await account.createMagicURLToken(
        ID.unique(),
        data.email,
        `${window.location.origin}/verify/magic-link`
      );

      toast({
        title: "Magic Link Sent",
        description: "Check your email for the login link",
      });
    } catch (error) {
      toast({
        title: "Magic Link Registration Failed",
        description:
          error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    }
  };

  const renderAuthMethodForm = () => {
    switch (authMethod) {
      case "email":
        return (
          <Form {...emailForm}>
            <form
              onSubmit={emailForm.handleSubmit(handleEmailRegistration)}
              className="space-y-4"
            >
              <div className="flex flex-row justify-between">
                <FormField
                  control={emailForm.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your First Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={emailForm.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Last Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={emailForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={emailForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={emailForm.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="fencer">Fencer</SelectItem>
                        <SelectItem value="staff">Staff/Team Member</SelectItem>
                        <SelectItem value="organizer">
                          Tournament Organizer
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Register
              </Button>
            </form>
          </Form>
        );
      case "phone":
        return (
          <Form {...phoneForm}>
            <form
              onSubmit={phoneForm.handleSubmit(handlePhoneRegistration)}
              className="space-y-4"
            >
              <div className="flex flex-row justify-between">
                <FormField
                  control={phoneForm.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your First Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={phoneForm.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Last Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={phoneForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1234567890" {...field} type="tel" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={phoneForm.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="fencer">Fencer</SelectItem>
                        <SelectItem value="staff">Staff/Team Member</SelectItem>
                        <SelectItem value="organizer">
                          Tournament Organizer
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Send Verification
              </Button>
            </form>
          </Form>
        );
      case "magic-link":
        return (
          <Form {...magicLinkForm}>
            <form
              onSubmit={magicLinkForm.handleSubmit(handleMagicLinkRegistration)}
              className="space-y-4"
            >
              <FormField
                control={magicLinkForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        {...field}
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={magicLinkForm.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="fencer">Fencer</SelectItem>
                        <SelectItem value="staff">Staff/Team Member</SelectItem>
                        <SelectItem value="organizer">
                          Tournament Organizer
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Send Magic Link
              </Button>
            </form>
          </Form>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h1>
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-center mb-4">
              <div className="flex space-x-2 bg-muted rounded-lg p-1">
                <Button
                  variant={authMethod === "email" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setAuthMethod("email")}
                >
                  <Mail className="mr-2 h-4 w-4" /> Email
                </Button>
                <Button
                  variant={authMethod === "phone" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setAuthMethod("phone")}
                >
                  <Phone className="mr-2 h-4 w-4" /> Phone
                </Button>
                <Button
                  variant={authMethod === "magic-link" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setAuthMethod("magic-link")}
                >
                  <Link className="mr-2 h-4 w-4" /> Magic Link
                </Button>
              </div>
            </div>
            {renderAuthMethodForm()}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" className="w-full">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" className="w-full">
                <Google className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
