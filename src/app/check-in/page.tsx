import { TournamentSelector } from "@/components/tournament/TournamentSelector";
import { CheckInForm } from "@/components/check-in/CheckInForm";

export default function CheckInPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Equipment Check-in</h1>
      <TournamentSelector />
      <CheckInForm />
    </div>
  );
}
