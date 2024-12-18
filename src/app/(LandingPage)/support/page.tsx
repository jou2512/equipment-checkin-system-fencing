// app/support/page.tsx
import { Metadata } from "next";
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
import { HelpCircle, Mail, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with the Fencing Equipment Check System",
};

export default function SupportPage() {
  return (
    <div className="mx-auto container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Support
          </h1>
          <p className="text-xl text-muted-foreground">
            Get help with using the Fencing Equipment Check System.
          </p>
        </div>
      </div>

      <div className="grid gap-6 pt-8 md:grid-cols-2">
        {/* Contact Methods */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Live Chat
              </CardTitle>
              <CardDescription>
                Chat with our support team in real-time.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Start Chat</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Support
              </CardTitle>
              <CardDescription>
                Send us an email and we'll respond within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a href="mailto:support@fecs.com">support@fecs.com</a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Phone Support
              </CardTitle>
              <CardDescription>
                Available Monday to Friday, 9 AM - 5 PM EST
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a href="tel:+41793053385">+41 (079) 305 33 85</a>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name">Name</label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message">Message</label>
                <Textarea id="message" placeholder="How can we help?" />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              question: "How do I set up a new tournament?",
              answer:
                "Navigate to the admin dashboard and click on 'Tournament Setup'. Follow the guided process to configure your tournament settings.",
            },
            {
              question: "How do I track equipment check status?",
              answer:
                "Each piece of equipment receives a unique tracking number. Use this number on our status page or display boards to monitor progress.",
            },
            // Add more FAQs
          ].map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <HelpCircle className="h-5 w-5" />
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>{faq.answer}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
