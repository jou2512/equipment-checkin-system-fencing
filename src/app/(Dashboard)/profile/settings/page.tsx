import SettingsForm from "@/components/profile/settings-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | Fencing Equipment Check",
  description:
    "Manage your account settings, notifications, and language preferences.",
};

export default function SettingsPage() {
  return (
    <div className="container mx-auto px-4 py-8 mb-16">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Settings
      </h1>
      <SettingsForm />
    </div>
  );
}
