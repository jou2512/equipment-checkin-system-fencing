// src/app/tournament/[tournamentId]/[role]/components/checkin-staff/dashboard.tsx
"use client";

import { useState, useMemo } from "react";
import { useCheckIns } from "@/hooks/use-checkIn";
import { useTournamentStore } from "@/lib/store/tournament-store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  XCircle,
  Clock,
  Package,
  Users,
  FileText,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckInCheckInStatus } from "@/lib/appwrite/types";

export function CheckinStaffDashboard() {
  const { currentTournamentId } = useTournamentStore();
  const { checkIns, isLoading } = useCheckIns();
  const [activeTab, setActiveTab] = useState<"overview" | "detailed">(
    "overview"
  );

  // Filter check-ins for current tournament
  const relevantCheckIns = useMemo(
    () =>
      checkIns.filter((checkIn) => checkIn.tournaments === currentTournamentId),
    [checkIns, currentTournamentId]
  );

  // Comprehensive statistics calculation
  const statistics = useMemo(() => {
    const statsBreakdown = Object.values(CheckInCheckInStatus).reduce(
      (acc, status) => {
        acc[status] = relevantCheckIns.filter(
          (checkIn) => checkIn.CheckInStatus === status
        ).length;
        return acc;
      },
      {} as Record<CheckInCheckInStatus, number>
    );

    return {
      totalCheckIns: relevantCheckIns.length,
      ...statsBreakdown,
      weaponDistribution: relevantCheckIns.reduce((acc, checkIn) => {
        acc[checkIn.weaponType] = (acc[checkIn.weaponType] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
    };
  }, [relevantCheckIns]);

  if (isLoading) return <div>Loading check-ins...</div>;

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold">Check-in Staff Dashboard</h1>

      <Tabs
        value={activeTab}
        onValueChange={(val) => setActiveTab(val as "overview" | "detailed")}
      >
        <TabsList className="w-full">
          <TabsTrigger value="overview" className="w-1/2">
            Overview
          </TabsTrigger>
          <TabsTrigger value="detailed" className="w-1/2">
            Detailed View
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {activeTab === "overview" && (
        <div className="grid grid-cols-2 gap-4">
          {/* Statistics Cards */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Total Check-ins</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {statistics.totalCheckIns}
              </div>
            </CardContent>
          </Card>

          {/* Status Distribution Cards */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Pending</CardTitle>
              <Clock className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {statistics[CheckInCheckInStatus.PENDING]}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>In Review</CardTitle>
              <AlertTriangle className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {statistics[CheckInCheckInStatus.IN_REVIEW]}
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
                {statistics[CheckInCheckInStatus.APPROVED]}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "detailed" && (
        <div className="space-y-4">
          {/* Weapon Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Weapon Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              {Object.entries(statistics.weaponDistribution).map(
                ([weapon, count]) => (
                  <div
                    key={weapon}
                    className="flex justify-between items-center p-2 border-b last:border-b-0"
                  >
                    <span className="font-medium capitalize">{weapon}</span>
                    <Badge variant="secondary">{count}</Badge>
                  </div>
                )
              )}
            </CardContent>
          </Card>

          {/* Recent Check-ins */}
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
                    <span className="text-sm text-muted-foreground ml-2 capitalize">
                      {checkIn.weaponType}
                    </span>
                  </div>
                  <Badge
                    variant={
                      checkIn.CheckInStatus === CheckInCheckInStatus.APPROVED
                        ? "default"
                        : checkIn.CheckInStatus ===
                          CheckInCheckInStatus.REJECTED
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
      )}
    </div>
  );
}
