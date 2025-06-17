// apps/landing/src/app/support/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SupportFormSchema,
  SupportFormData,
} from "@/lib/validation/support-schema";
import { sendSupportEmail } from "@/lib/adapters/support-adapter";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Textarea,
} from "@fecs/ui";
import { HelpCircle, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { toast } from "@fecs/ui/client-only";

export default function SupportPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SupportFormData>({
    resolver: zodResolver(SupportFormSchema),
  });

  const onSubmit = async (data: SupportFormData) => {
    try {
      await sendSupportEmail(data);
      toast({
        title: "Message sent!",
        description: "We'll get back to you shortly.",
        variant: "success",
      });
      reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Failed to send support message.",
        variant: "destructive",
      });
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 max-w-6xl">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Support
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Get help with using the Fencing Equipment Check System.
        </p>
      </div>

      <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2">
        {/* Contact Cards */}
        <div className="space-y-4 md:space-y-6">
          <Card className="hover:shadow-md transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Mail className="h-5 w-5" /> Email Support
              </CardTitle>
              <CardDescription>
                Write to us and get a response within 24h.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href="mailto:support@fencing-equipement-cs.com"
                className="text-primary hover:underline text-lg"
              >
                support@fencing-equipement-cs.com
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Phone className="h-5 w-5" /> Phone Support
              </CardTitle>
              <CardDescription>
                Call us anytime. We prefer email though.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href="tel:+41793053385"
                className="text-primary hover:underline text-lg"
              >
                +41 (079) 305 33 85
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Form */}
        <Card className="h-fit hover:shadow-md transition-all">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">
              Send us a message
            </CardTitle>
            <CardDescription>
              Fill out the form and we’ll respond as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="How can we help?"
                />
                {errors.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full md:w-auto"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* FAQ */}
      <div className="mt-12 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          {[
            {
              question: "How do I set up a new tournament?",
              answer:
                "Currently only available for selected partners. Email us to request access.",
            },
            {
              question: "How do I track equipment status?",
              answer:
                "Every equipment check gets a unique tracking number. Progress is shown in your account and on display boards.",
            },
            {
              question: "What if I need to modify a Check-In?",
              answer:
                "You can contact the Check-In staff directly for changes.",
            },
          ].map((faq, index) => (
            <Card key={index} className="hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <HelpCircle className="h-5 w-5 flex-shrink-0" />
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm md:text-base">
                {faq.answer}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
