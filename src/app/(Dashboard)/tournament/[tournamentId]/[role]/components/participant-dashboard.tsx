"use client";

import { useCheckIns } from "@/hooks/use-checkIn";
import { useTournamentStore } from "@/lib/store/tournament-store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  XCircle,
  Clock,
  ChevronRight,
  Swords,
  Medal,
  Calendar,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import Link from "next/link";
import { useTeamMemberships } from "@/hooks/use-team-memberships";
import { Tournament } from "@/lib/appwrite/types";

export default function ParticipantDashboard() {
  const params = useParams();
  const router = useRouter();

  if (!params?.tournamentId) {
    router.push("/404");
    return null;
  }

  const currentTournamentId = params.tournamentId;
  // Ab hier ist currentTournamentId garantiert ein string
  const { checkIns, isLoading } = useCheckIns();
  const { user } = useAuth();
  const { getTournamentPrefs } = useTeamMemberships();

  const {
    mutate: fetchTournamentPrefs,
    data,
    error,
    isPending: isLoadingPrefs,
  } = getTournamentPrefs;
  console.log(data);

  // Filter check-ins for current tournament
  const relevantCheckIns = checkIns.filter(
    (checkIn) =>
      (checkIn).$id === currentTournamentId &&
      // @ts-ignore
      checkIn.fencerID === user?.$id
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle2 className="text-green-500" />;
      case "rejected":
        return <XCircle className="text-red-500" />;
      case "in_review":
        return <Clock className="text-yellow-500" />;
      default:
        return <Clock className="text-gray-500" />;
    }
  };

  if (isLoading || isLoadingPrefs)
    return <div className="p-4 text-center">Loading dashboard...</div>;

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold">Welcome, {user?.name}</h1>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Swords className="mr-2" />
            Current Tournament
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl font-semibold mb-2">{data?.name}</h2>
          <p className="text-muted-foreground mb-4">{data?.description}</p>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              {new Date(data?.startDate as string).toLocaleDateString()}
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Medal className="mr-1 h-4 w-4" />
              {data?.type}
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Check-ins</CardTitle>
        </CardHeader>
        <CardContent>
          {relevantCheckIns.slice(0, 3).map((checkIn) => (
            <div key={checkIn.$id} className="mb-4 last:mb-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">
                    Check-in #{checkIn.checkNumber}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(
                      checkIn.$createdAt as string
                    ).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(checkIn.CheckInStatus as string)}
                  <Badge variant="outline">{checkIn.CheckInStatus}</Badge>
                </div>
              </div>
            </div>
          ))}
          <Button
            variant="outline"
            className="w-full mt-4"
            onClick={() =>
              router.push(
                `/tournament/${currentTournamentId}/participant/check-ins`
              )
            }
          >
            View All Check-ins
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <Button disabled variant="outline" className="h-20">
            New Check-in
          </Button>
          <Button disabled variant="outline" className="h-20">
            View Schedule
          </Button>
          <Button disabled variant="outline" className="h-20">
            Tournament Rules
          </Button>
          <Button disabled variant="outline" className="h-20">
            Contact Support
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
