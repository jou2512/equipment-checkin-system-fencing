// MobileStatusDisplay.tsx
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
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pause, Play } from "lucide-react";
import { useParams } from "next/navigation";
import { useTournamentStore } from "@/lib/store/tournament-store";

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

interface ScrollConfig {
  speed: number; // Scroll speed (pixels per step)
  interval: number; // Time between scroll steps (ms)
  behavior: "reset" | "bounce"; // Whether to reset to top or bounce back
}

interface MobileStatusDisplayProps {
  options?: {
    useParams?: boolean;
    useStore?: boolean;
    enableAutoScroll?: boolean;
    refetchInterval?: number;
    limit?: number;
    scroll?: ScrollConfig;
  };
}

export default function MobileStatusDisplay({
  options = {
    useParams: false,
    useStore: true,
    enableAutoScroll: true,
    refetchInterval: 30000,
    limit: 100,
    scroll: {
      speed: 1,
      interval: 50,
      behavior: "bounce",
    },
  },
}: MobileStatusDisplayProps) {
  // State Management
  const [isPaused, setIsPaused] = useState(false);
  const [activeTab, setActiveTab] = useState<"ready" | "pending">("ready");
  const [error, setError] = useState<string | null>(null);

  // Refs
  const readyScrollRef = useRef<HTMLDivElement>(null);
  const pendingScrollRef = useRef<HTMLDivElement>(null);

  // Tournament ID handling
  const params = useParams();
  const currentTournamentId = options.useParams
    ? params?.tournamentId
    : options.useStore
    ? useTournamentStore().currentTournamentId
    : null;

  // Error handling utility
  const handleError = (error: any) => {
    console.error("Error fetching data:", error);
    setError(error?.message || "An error occurred while fetching data");
    return [];
  };

  // Query functions
  const fetchReadySubmissions = async () => {
    try {
      const response = await databases.listDocuments(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.CHECKINS,
        [
          Query.equal("tournaments", currentTournamentId as string),
          Query.contains("CheckInStatus", READY_STATUSES),
          Query.equal("pickupConfirmed", false),
          Query.orderDesc("$createdAt"),
          Query.limit(options.limit || 100),
        ]
      );
      return response.documents as CheckIn[];
    } catch (error) {
      return handleError(error);
    }
  };

  const fetchPendingSubmissions = async () => {
    try {
      const response = await databases.listDocuments(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.CHECKINS,
        [
          Query.equal("tournaments", currentTournamentId as string),
          Query.contains("CheckInStatus", PENDING_STATUSES),
          Query.orderAsc("checkNumber"),
          Query.limit(options.limit || 100),
        ]
      );
      return response.documents as CheckIn[];
    } catch (error) {
      return handleError(error);
    }
  };

  // Queries
  const {
    data: readySubmissions,
    isLoading: isReadyLoading,
    error: readyError,
  } = useQuery<CheckIn[]>({
    queryKey: ["mobile-ready-submissions", currentTournamentId],
    queryFn: fetchReadySubmissions,
    refetchInterval: options.refetchInterval,
    enabled: !!currentTournamentId,
  });

  const {
    data: pendingSubmissions,
    isLoading: isPendingLoading,
    error: pendingError,
  } = useQuery<CheckIn[]>({
    queryKey: ["mobile-pending-submissions", currentTournamentId],
    queryFn: fetchPendingSubmissions,
    refetchInterval: options.refetchInterval,
    enabled: !!currentTournamentId,
  });

  // Auto-scroll effect
  useEffect(() => {
    if (!options.enableAutoScroll || isPaused) return;

    const scrollSpeed = options.scroll?.speed ?? 1;
    const scrollInterval = options.scroll?.interval ?? 50;
    const behavior = options.scroll?.behavior ?? "bounce";

    // Find the viewport element after component mount
    const getViewportElement = () => {
      const containerRef =
        activeTab === "ready" ? readyScrollRef : pendingScrollRef;
      return containerRef.current?.querySelector(
        "[data-radix-scroll-area-viewport]"
      );
    };

    const startScroll = () => {
      const viewportElement = getViewportElement();
      if (!viewportElement) return;

      const scrollHeight = viewportElement.scrollHeight;
      const clientHeight = viewportElement.clientHeight;

      if (scrollHeight <= clientHeight) return; // No need to scroll

      const currentScroll = viewportElement.scrollTop;
      const maxScroll = scrollHeight - clientHeight;

      if (behavior === "bounce") {
        // For bounce, we need to track the current direction
        const currentDirection = viewportElement.getAttribute(
          "data-scroll-direction"
        );
        let newScroll;

        if (!currentDirection || currentDirection === "down") {
          newScroll = Math.min(currentScroll + scrollSpeed, maxScroll);
          if (newScroll >= maxScroll) {
            viewportElement.setAttribute("data-scroll-direction", "up");
          }
        } else {
          newScroll = Math.max(currentScroll - scrollSpeed, 0);
          if (newScroll <= 0) {
            viewportElement.setAttribute("data-scroll-direction", "down");
          }
        }

        viewportElement.scrollTop = newScroll;
      } else {
        // For reset behavior
        const newScroll = currentScroll + scrollSpeed;
        if (newScroll >= maxScroll) {
          viewportElement.scrollTop = 0;
        } else {
          viewportElement.scrollTop = newScroll;
        }
      }
    };

    const scrollIntervalId = setInterval(startScroll, scrollInterval);

    return () => {
      clearInterval(scrollIntervalId);
      // Clean up the direction attribute
      const viewport = getViewportElement();
      viewport?.removeAttribute("data-scroll-direction");
    };
  }, [
    activeTab,
    isPaused,
    options.enableAutoScroll,
    options.scroll?.behavior,
    options.scroll?.interval,
    options.scroll?.speed,
  ]);

  // Error handling
  useEffect(() => {
    if (readyError || pendingError) {
      setError((readyError || pendingError)?.message || "An error occurred");
    }
  }, [readyError, pendingError]);

  // Loading and error states
  if (isReadyLoading || isPendingLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Loading submissions...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex flex-col p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Status Display</h1>
        {options.enableAutoScroll && (
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsPaused(!isPaused)}
          >
            {isPaused ? (
              <Play className="h-4 w-4" />
            ) : (
              <Pause className="h-4 w-4" />
            )}
          </Button>
        )}
      </div>

      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as "ready" | "pending")}
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ready">Ready for Pickup</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>

        <TabsContent value="ready" className="h-[calc(100vh-150px)]">
          <ScrollArea ref={readyScrollRef} className="h-full" type="always">
            <div className="space-y-4 px-4">
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
                          {submission.CheckInStatus?.replace("_", " ")}
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

        <TabsContent value="pending" className="h-[calc(100vh-150px)]">
          <ScrollArea ref={pendingScrollRef} className="h-full" type="always">
            <div className="space-y-4 px-4">
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
                          {submission.CheckInStatus?.replace("_", " ")}
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
