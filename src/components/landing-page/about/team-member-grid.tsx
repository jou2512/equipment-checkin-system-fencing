import { TeamMember } from "@/lib/types/landingpages";
import { TeamMemberCard } from "./team-member-card";

interface TeamMemberGridProps {
  teamMembers: TeamMember[];
  cardClassName?: string;
}

export function TeamMemberGrid({
  teamMembers,
  cardClassName = "",
}: TeamMemberGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} member={member} className={cardClassName} />
      ))}
    </div>
  );
}
