import ProfileDashboard from "@/components/profile/profile-dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | Fencing Equipment Check",
  description: "Manage your personal information and tournament participation.",
};

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8 mb-16">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Profile</h1>
      </header>
      <ProfileDashboard />
    </div>
  );
}
