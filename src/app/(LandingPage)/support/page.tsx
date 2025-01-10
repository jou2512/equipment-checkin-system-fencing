"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HelpCircle, Mail, Phone } from "lucide-react";
import Link from "next/link";
import {
  sendSupportEmail,
  sendCustomerConfirmationEmail,
} from "@/lib/resend/resend_config";
import { toast } from "@/hooks/use-toast";

export default function SupportPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSupportEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      // Send email to support team
      await sendSupportEmail(name, email, message);
      // Send confirmation email to customer
      await sendCustomerConfirmationEmail(name, email, message);

      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");

      // Handle success, e.g., show a success message
      toast({
        title: "Message Sent",
        description: "Your support request has been sent successfully.",
      });
    } catch (error) {
      console.error("Support email error:", error);

      // Handle error, e.g., show an error message
      toast({
        variant: "destructive",
        title: "Message Failed",
        description:
          "There was an error sending your support request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 max-w-6xl">
      {/* Header Section */}
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Support
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Get help with using the Fencing Equipment Check System.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2">
        {/* Contact Methods */}
        <div className="space-y-4 md:space-y-6">
          {/* Email Support */}
          <Card className="transition-all duration-200 hover:shadow-md">
            <CardHeader className="space-y-1">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Mail className="h-5 w-5" /> Email Support
              </CardTitle>
              <CardDescription className="text-sm md:text-base">
                Send us an email and we'll respond within 24 hours.
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

          {/* Phone Support */}
          <Card className="transition-all duration-200 hover:shadow-md">
            <CardHeader className="space-y-1">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Phone className="h-5 w-5" /> Phone Support
              </CardTitle>
              <CardDescription className="text-sm md:text-base">
                Available most of the time, but email is better
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

        {/* Contact Form */}
        <Card className="h-fit transition-all duration-200 hover:shadow-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl md:text-2xl">
              Send us a message
            </CardTitle>
            <CardDescription className="text-sm md:text-base">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSupportEmail}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="h-11"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="h-11"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help?"
                  className="min-h-[120px] resize-y"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
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
      {/* FAQ Section */}
      <div className="mt-12 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
          {[
            {
              question: "How do I set up a new tournament?",
              answer:
                "For now this is only usable for selected People, if you want to use this application pls call me or write an email.",
            },
            {
              question: "How do I track equipment status?",
              answer:
                "Each Check-In of equipment receives a unique tracking number. >ou can see the progress in your account or on the display boards.",
            },
            {
              question: "What if I need to modify Check-In?",
              answer:
                "You can talk to the people at the Check-In, they can make changes.",
            },
          ].map((faq, index) => (
            <Card
              key={index}
              className="transition-all duration-200 hover:shadow-md"
            >
              <CardHeader className="space-y-1">
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <HelpCircle className="h-5 w-5 flex-shrink-0" />
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm md:text-base text-muted-foreground">
                {faq.answer}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
