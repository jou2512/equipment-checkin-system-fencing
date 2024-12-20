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

export default function ProjectorListDisplay() {
  const { currentTournamentId } = useTournamentStore();
  const [isPaused, setIsPaused] = useState(false);
  const readyScrollRef = useRef<HTMLDivElement>(null);
  const pendingScrollRef = useRef<HTMLDivElement>(null);

  // Fetch Ready Submissions
  const { data: readySubmissions, isLoading: isReadyLoading } = useQuery<
    CheckIn[]
  >({
    queryKey: ["projector-ready-submissions", currentTournamentId],
    queryFn: async () => {
      const response = await databases.listDocuments(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.CHECKINS,
        [
          Query.equal("tournaments", currentTournamentId as string),
          Query.contains("CheckInStatus", READY_STATUSES),
          Query.equal("pickupConfirmed", false),
          Query.orderDesc("$createdAt"),
          Query.limit(300),
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
    queryKey: ["projector-pending-submissions", currentTournamentId],
    queryFn: async () => {
      const response = await databases.listDocuments(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.CHECKINS,
        [
          Query.equal("tournaments", currentTournamentId as string),
          Query.contains("CheckInStatus", PENDING_STATUSES),
          Query.orderAsc("checkNumber"),
          Query.limit(300),
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
      // Scroll ready submissions if content overflows
      if (readyContainer.scrollHeight > readyContainer.clientHeight) {
        readyContainer.scrollTop += 1;
        if (
          readyContainer.scrollTop >=
          readyContainer.scrollHeight - readyContainer.clientHeight
        ) {
          readyContainer.scrollTop = 0;
        }
      }

      // Scroll pending submissions if content overflows
      if (pendingContainer.scrollHeight > pendingContainer.clientHeight) {
        pendingContainer.scrollTop += 1;
        if (
          pendingContainer.scrollTop >=
          pendingContainer.scrollHeight - pendingContainer.clientHeight
        ) {
          pendingContainer.scrollTop = 0;
        }
      }
    };

    const scrollInterval = setInterval(scrollAnimation, 50);
    return () => clearInterval(scrollInterval);
  }, [readySubmissions, pendingSubmissions, isPaused]);

  // Toggle Pause
  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  // Loading State
  if (isReadyLoading || isPendingLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl">
        Loading submissions...
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex relative" onClick={togglePause}>
      {/* Left Column: Ready for Pickup */}
      <div className="w-2/3 border-r">
        <div className="sticky top-0 bg-white z-10 p-4 shadow-md">
          <h1 className="text-2xl font-bold">Equipment Ready for Pickup</h1>
          {isPaused && (
            <div className="absolute top-2 right-4 bg-black/50 text-white px-2 py-1 rounded">
              Paused
            </div>
          )}
        </div>

        <div
          ref={readyScrollRef}
          className="h-[calc(100vh-64px)] overflow-y-auto p-4 space-y-2"
        >
          {readySubmissions?.length ? (
            readySubmissions.map((submission) => (
              <div
                key={submission.$id}
                className={`
                  p-4 rounded-lg transition-colors duration-300
                  ${
                    STATUS_COLORS[
                      submission.CheckInStatus as CheckInCheckInStatus
                    ]
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-xl font-semibold">
                      #{submission.checkNumber}
                    </div>
                    <div>{submission.fencerName || "Anonymous"}</div>
                    <div className="text-opacity-70">
                      {submission.nationalityCode || "N/A"}
                    </div>
                  </div>
                  <div className="font-medium uppercase">
                    {submission?.CheckInStatus?.replace("_", " ")}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">
              No submissions ready for pickup
            </div>
          )}
        </div>
      </div>

      {/* Right Column: Pending Submissions */}
      <div className="w-1/3">
        <div className="sticky top-0 bg-white z-10 p-4 shadow-md">
          <h1 className="text-xl font-semibold">Pending Submissions</h1>
        </div>

        <div
          ref={pendingScrollRef}
          className="h-[calc(100vh-64px)] overflow-y-auto p-4 space-y-2 bg-gray-50"
        >
          {pendingSubmissions?.length ? (
            pendingSubmissions.map((submission) => (
              <div
                key={submission.$id}
                className={`
                  p-3 rounded-lg transition-colors duration-300
                  ${
                    STATUS_COLORS[
                      submission.CheckInStatus as CheckInCheckInStatus
                    ]
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold">
                    #{submission.checkNumber}
                  </div>
                  <div className="text-sm uppercase">
                    {submission?.CheckInStatus?.replace("_", " ")}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">
              No pending submissions
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
