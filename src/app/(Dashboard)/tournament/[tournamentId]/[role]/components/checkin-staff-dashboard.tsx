// src/app/tournament/[tournamentId]/[role]/components/checkin-staff-dashboard.tsx
"use client";

import { useCheckIns } from "@/hooks/use-checkIn";
import { useTournamentStore } from "@/lib/store/tournament-store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Clock, Package, Users } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Tournament } from "@/lib/appwrite/types";

export function CheckinStaffDashboard() {
  const params = useParams();
  const router = useRouter();
  if (!params?.tournamentId) {
    router.push("/404");
    return null;
  }

  const currentTournamentId = params.tournamentId;
  const { checkIns, isLoading } = useCheckIns();

  // Filter check-ins for current tournament
  const relevantCheckIns = checkIns.filter(
    (checkIn) => (checkIn.tournaments as Tournament).$id === currentTournamentId
  );

  // Aggregate statistics
  const statistics = {
    totalCheckIns: relevantCheckIns.length,
    pendingCheckIns: relevantCheckIns.filter(
      (checkIn) => checkIn.CheckInStatus === "pending" || checkIn.CheckInStatus === "in_review"
    ).length,
    approvedCheckIns: relevantCheckIns.filter(
      (checkIn) =>
        checkIn.CheckInStatus === "approved" ||
        checkIn.CheckInStatus === "partially_approved"
    ).length,
    rejectedCheckIns: relevantCheckIns.filter(
      (checkIn) => checkIn.CheckInStatus === "rejected"
    ).length,
  };

  if (isLoading) return <div>Loading check-ins...</div>;

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Check-in Staff Dashboard</h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Total Check-ins</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statistics.totalCheckIns}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Pending</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {statistics.pendingCheckIns}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Approved</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {statistics.approvedCheckIns}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Rejected</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {statistics.rejectedCheckIns}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Check-ins List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Check-ins</CardTitle>
        </CardHeader>
        <CardContent>
          {relevantCheckIns.slice(0, 5).map((checkIn) => (
            <div
              key={checkIn.$id}
              className="flex justify-between items-center p-2 border-b last:border-b-0"
            >
              <div>
                <span className="font-medium">
                  Check-in #{checkIn.checkNumber}
                </span>
                <span className="text-sm text-muted-foreground ml-2">
                  {checkIn.weaponType.toUpperCase()}
                </span>
              </div>
              <Badge
                variant={
                  checkIn.CheckInStatus === "approved"
                    ? "default"
                    : checkIn.CheckInStatus === "rejected"
                    ? "destructive"
                    : "outline"
                }
              >
                {checkIn.CheckInStatus}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
