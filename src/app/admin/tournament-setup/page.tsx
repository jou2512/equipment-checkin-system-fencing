import TournamentSetupForm from "./tournament-setup-form";

export default function TournamentSetupPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Tournament Setup</h1>
      <TournamentSetupForm />
    </div>
  );
}
