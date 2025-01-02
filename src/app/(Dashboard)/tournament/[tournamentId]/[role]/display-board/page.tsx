"use client";

import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { databases } from "@/lib/appwrite/config";
import { Query } from "appwrite";
import {
  CheckIn,
  CheckInCheckInStatus,
  DATABASE_IDS,
  COLLECTION_IDS,
} from "@/lib/appwrite/types";
import { useTournamentStore } from "@/lib/store/tournament-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pause, Play } from "lucide-react";

const READY_STATUSES: CheckInCheckInStatus[] = [
  CheckInCheckInStatus.APPROVED,
  CheckInCheckInStatus.PARTIALLY_APPROVED,
  CheckInCheckInStatus.REJECTED,
];

const PENDING_STATUSES: CheckInCheckInStatus[] = [
  CheckInCheckInStatus.PENDING,
  CheckInCheckInStatus.IN_REVIEW,
];

const STATUS_COLORS = {
  approved: "bg-green-100 text-green-800",
  partially_approved: "bg-orange-100 text-orange-800",
  rejected: "bg-red-100 text-red-800",
  pending: "bg-yellow-100 text-yellow-800",
  in_review: "bg-blue-100 text-blue-800",
};

export default function MobileStatusDisplay() {
  const { currentTournamentId } = useTournamentStore();
  const [isPaused, setIsPaused] = useState(false);
  const [activeTab, setActiveTab] = useState<"ready" | "pending">("ready");
  const readyScrollRef = useRef<HTMLDivElement>(null);
  const pendingScrollRef = useRef<HTMLDivElement>(null);

  // Fetch Ready Submissions
  const { data: readySubmissions, isLoading: isReadyLoading } = useQuery<
    CheckIn[]
  >({
    queryKey: ["mobile-ready-submissions", currentTournamentId],
    queryFn: async () => {
      const response = await databases.listDocuments(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.CHECKINS,
        [
          Query.equal("tournaments", currentTournamentId as string),
          Query.contains("CheckInStatus", READY_STATUSES),
          Query.equal("pickupConfirmed", false),
          Query.orderDesc("$createdAt"),
          Query.limit(100),
        ]
      );
      return response.documents as CheckIn[];
    },
    refetchInterval: 30000,
    enabled: !!currentTournamentId,
  });

  // Fetch Pending Submissions
  const { data: pendingSubmissions, isLoading: isPendingLoading } = useQuery<
    CheckIn[]
  >({
    queryKey: ["mobile-pending-submissions", currentTournamentId],
    queryFn: async () => {
      const response = await databases.listDocuments(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.CHECKINS,
        [
          Query.equal("tournaments", currentTournamentId as string),
          Query.contains("CheckInStatus", PENDING_STATUSES),
          Query.orderAsc("checkNumber"),
          Query.limit(100),
        ]
      );
      return response.documents as CheckIn[];
    },
    refetchInterval: 30000,
    enabled: !!currentTournamentId,
  });

  // Automatic Scrolling
  useEffect(() => {
    const readyContainer = readyScrollRef.current;
    const pendingContainer = pendingScrollRef.current;

    if (
      !readyContainer ||
      !pendingContainer ||
      isPaused ||
      !readySubmissions ||
      !pendingSubmissions
    )
      return;

    const scrollAnimation = () => {
      const activeContainer =
        activeTab === "ready" ? readyContainer : pendingContainer;

      if (activeContainer.scrollHeight > activeContainer.clientHeight) {
        activeContainer.scrollTop += 1;
        if (
          activeContainer.scrollTop >=
          activeContainer.scrollHeight - activeContainer.clientHeight
        ) {
          activeContainer.scrollTop = 0;
        }
      }
    };

    const scrollInterval = setInterval(scrollAnimation, 50);
    return () => clearInterval(scrollInterval);
  }, [readySubmissions, pendingSubmissions, isPaused, activeTab]);

  // Toggle Pause
  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  // Loading State
  if (isReadyLoading || isPendingLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Loading submissions...
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex flex-col p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Status Display</h1>
        <Button variant="outline" size="icon" onClick={togglePause}>
          {isPaused ? (
            <Play className="h-4 w-4" />
          ) : (
            <Pause className="h-4 w-4" />
          )}
        </Button>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as "ready" | "pending")}
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ready">Ready for Pickup</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>

        <TabsContent value="ready">
          <ScrollArea ref={readyScrollRef} className="h-[calc(100vh-150px)]">
            <div className="space-y-4">
              {readySubmissions?.length ? (
                readySubmissions.map((submission) => (
                  <Card key={submission.$id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-xl font-semibold">
                          #{submission.checkNumber}
                        </div>
                        <Badge
                          className={
                            STATUS_COLORS[
                              submission.CheckInStatus as CheckInCheckInStatus
                            ]
                          }
                        >
                          {submission.CheckInStatus.replace("_", " ")}
                        </Badge>
                      </div>
                      <div className="text-sm">
                        {submission.fencerName || "Anonymous"}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {submission.nationalityCode || "N/A"} ·{" "}
                        {submission.weaponType}
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center text-gray-500 mt-4">
                  No submissions ready for pickup
                </div>
              )}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="pending">
          <ScrollArea ref={pendingScrollRef} className="h-[calc(100vh-150px)]">
            <div className="space-y-4">
              {pendingSubmissions?.length ? (
                pendingSubmissions.map((submission) => (
                  <Card key={submission.$id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-xl font-semibold">
                          #{submission.checkNumber}
                        </div>
                        <Badge
                          className={
                            STATUS_COLORS[
                              submission.CheckInStatus as CheckInCheckInStatus
                            ]
                          }
                        >
                          {submission.CheckInStatus.replace("_", " ")}
                        </Badge>
                      </div>
                      <div className="text-sm">
                        {submission.fencerName || "Anonymous"}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {submission.nationalityCode || "N/A"} ·{" "}
                        {submission.weaponType}
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center text-gray-500 mt-4">
                  No pending submissions
                </div>
              )}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}
