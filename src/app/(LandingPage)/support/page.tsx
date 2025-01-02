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
import Link from "next/link";
import { sendSupportEmail } from "@/lib/resend/resend_config";

export default function SupportPage() {
  // TODO: implement support emails
  // const handleSupportEmail(e: React.FormEvent) => {
  //   //
  // }

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
          {/* Live Chat */}
          {/* <Card className="transition-all duration-200 hover:shadow-md">
            <CardHeader className="space-y-1">
              <CardTitle className="flex items-center gap-2 text-xl">
                <MessageCircle className="h-5 w-5" />
                Live Chat
              </CardTitle>
              <CardDescription className="text-sm md:text-base">
                Chat with our support team in real-time.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full md:w-auto" size="lg">
                Start Chat
              </Button>
            </CardContent>
          </Card> */}

          {/* Email Support */}
          <Card className="transition-all duration-200 hover:shadow-md">
            <CardHeader className="space-y-1">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Mail className="h-5 w-5" />
                Email Support
              </CardTitle>
              <CardDescription className="text-sm md:text-base">
                Send us an email and we'll respond within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href="mailto:support@fecs.com"
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
                <Phone className="h-5 w-5" />
                Phone Support (Private number)
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
              Fill out the form below and I'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" className="h-11" />
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
                />
              </div>
              <Button type="submit" className="w-full md:w-auto" size="lg">
                Send Message
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
