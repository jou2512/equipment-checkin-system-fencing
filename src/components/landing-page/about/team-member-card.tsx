import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone } from "lucide-react";
import { SocialLinks } from "./SocialLinks";
import { TeamMember } from "@/lib/types/landingpages";


interface TeamMemberCardProps {
  member: TeamMember;
  className?: string;
}

export function TeamMemberCard({
  member,
  className = "",
}: TeamMemberCardProps) {
  return (
    <Card className={`border-none shadow-none ${className}`}>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-24 w-24">
            <AvatarImage src={member.image} alt={member.name} />
            <AvatarFallback>
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
          <div className="text-sm text-muted-foreground">{member.role}</div>
          <p className="mt-2 text-sm">{member.bio}</p>
          <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            {member.email && (
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <a href={`mailto:${member.email}`} className="hover:underline">
                  {member.email}
                </a>
              </div>
            )}
            {member.phone && (
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <a href={`tel:${member.phone}`} className="hover:underline">
                  {member.phone}
                </a>
              </div>
            )}
          </div>
          <div className="mt-4">
            <SocialLinks {...member.socialLinks} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
